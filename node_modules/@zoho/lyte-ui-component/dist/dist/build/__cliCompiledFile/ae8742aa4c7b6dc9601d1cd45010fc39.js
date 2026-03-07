import { Logger } from "./lyte-error";
import { extendEventListeners } from "./lyte-utils";

// class PriorityQ {
//   constructor() {
//       this.queue = [];
//   }
//   enqueue(name, priority, scope) {
//       const queueElement = { name, priority, scope };
//       let added = false;
//       for (let i = 0; i < this.queue.length; i++) {
//           if (queueElement.priority < this.queue[i].priority) {
//               this.queue.splice(i, 0, queueElement);
//               added = true;
//               break;
//           }
//       }
//       if (!added) {
//           this.queue.push(queueElement);
//       }
//   }
//   dequeue(name, scope) {
//       if (!this.isEmpty()) {
//         if(!name){
//           return this.queue.shift();
//         }
//         else{
//           let dequeuditem;
//           this.queue = this.queue.filter(item => {
//             if (item.name === name && item.scope === scope) {
//               dequeuditem = item;
//               return false; // Remove the item from the queue
//             }
//             return true; // Keep the item in the queue
//           });
//           return dequeuditem;
//         }
//       }
//   }
//   get(){
//     return this.queue;
//   }
//   isEmpty() {
//       return this.queue.length === 0;
//   }
//   size() {
//       return this.queue.length;
//   }
// }

class IdleTaskScheduler {
    constructor(obj){
      this.idleCallback = this.idleCallback.bind(this);
      this.timeout = 50;
      this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      this.tasks = new Map();
      this.idleCallbackRequested = false;
      this.delayInit = false;
      this.useRequestIdleCallback = true;
      this.priorityQueue = [];
      this.processTime = {};
      this.perf = false;
      if(obj!= undefined){      
        if(obj.useRequestIdleCallback !== undefined){
          this.useRequestIdleCallback = obj.useRequestIdleCallback;
        }
        if(obj.delayInit !== undefined){
            this.delayInit = obj.delayInit;
        }
        if(obj.timeout !== undefined){
          this.timeout = obj.timeout;			
        }
        if(obj.perf !== undefined){
          this.perf = obj.perf;
        }
      }
    }
    isGenerator(obj) {
      return (
          obj !== null &&
          typeof obj === "object" &&
          typeof obj.next === "function" &&
          typeof obj[Symbol.iterator] === "function"
      );
    }
    init(obj){
      if(this.delayInit == true){
        if(obj !== undefined){ 
          if(obj.useRequestIdleCallback !== undefined){
            this.useRequestIdleCallback = obj.useRequestIdleCallback;
          }
          if(obj.timeout !== undefined){
            this.timeout = obj.timeout;
          }
          if(obj.perf !== undefined){
            this.perf = obj.perf;
          }
        }
        this.delayInit = false;
        this.tasksScheduler();
      } 
    }
    getUniqueKey(len){
      var result;
      while(result == undefined || this.tasks.has(result)){
          result = undefined;
          result = this.generateUniqueKey(len);
      }
      return result;
    }
    generateUniqueKey(length){
      let result = '', clen = this.chars.length;
      for (let i = 0; i < length; i++) {
          result += this.chars.charAt(Math.floor(Math.random() * clen));
      }
      return result;
    }
    enqueueTask(handler, data, id, scope = "slyte"){
      if(!id){
          id = this.getUniqueKey(6);
      }
      const key = `${scope}$${id}`;
      if(this.tasks.has(key)){
          Logger.error("Task with id-"+key+" is alreaded queued for execution.");
          return; 
      }
      this.tasks.set(key, {handler: handler, data: data});
      this.tasksScheduler();
      return key;
    }
    deleteTask(id, scope = "slyte"){
      if(id){
          const key = `${scope}$${id}`;
          var val = this.tasks.get(key);
          this.tasks.delete(key);
          if(this.priorityQueue instanceof PriorityQ){
            this.priorityQueue.dequeue(id, scope);
          }
          return val;
      }
    }
    getPriorityQObj(){
      var id, i=0, pObj;
      if(this.priorityQueue.length){
        var len =this.priorityQueue.length;
        while(i<len){
          id = this.priorityQueue[i];
          if(this.tasks.has(id)){
            pObj = this.tasks.get(id);
            break;
          }
          i++;
        }
        if(pObj){
          return {id:id, obj:pObj, ind:i};
        }
      }
      return false;   
    }
    dequeueTask(id, scope = "slyte"){
      if(id){
          const key = `${scope}$${id}`;
          var val = this.tasks.get(key);
          // console.log("dequeud-",id);
          this.tasks.delete(key);
          return val;
      }
      else if(this.tasks.size || this.priorityQueue.length){
        var pqObj = this.getPriorityQObj(), gnxt, gval, obj, isPriority = false, ind;
        if(pqObj !== false){
          id = pqObj.id;
          obj = pqObj.obj;
          ind = pqObj.ind;
          isPriority = true;
        }
        else{
          if(!this.tasks.size){
            return;
          }
          var val = this.tasks.entries().next().value;
          id = val[0]
          obj = val[1];
        }
        // console.log("dequeud-",id);
        this.currentTask = {
          id:id,
          handler: obj.handler
        };
        extendEventListeners(this.currentTask);
        if(this.isGenerator(obj.handler)){
          gnxt = obj.handler.next();
          if(gnxt.done == false){
            gval = gnxt.value;
            if(typeof gval == "function"){
              return gval;
            }
          }
          else{
            this.currentTask.triggerEvent("done", id);
            if(isPriority){
              this.priorityQueue.splice(ind,1);
            }
            this.tasks.delete(id);
            return this.dequeueTask();
          }
        }
        else{
          this.currentTask.triggerEvent("done", id);
          if(isPriority){
            this.priorityQueue.splice(ind,1);
          }
          this.tasks.delete(id);
        }
        return obj;
      }
    }
    tasksScheduler(){
      if(this.delayInit == false){
        if(this.tasks.size){
          if(this.idleCallbackRequested == false){
            if('requestIdleCallback' in window && this.useRequestIdleCallback){
                this.idleCallbackRequested = true;
                requestIdleCallback(this.idleCallback);
            }   
            else{
                this.requestIdleCallback(this.idleCallback);
            }
          }
        }
        else{
          if('cancelIdleCallback' in window && this.useRequestIdleCallback){
            cancelIdleCallback(this.idleCallback);
          }
        }
      }
    }
    idleCallback(deadline){
      var task, remTime = deadline.timeRemaining();
      while(remTime>0 && this.tasks.size){
        task = this.dequeueTask();
        if(this.perf){
          var p1 = performance.now();
        }
        if(typeof task == "function"){
              // setTimeout(function(){
                  task();
              // },1);
        }
        if(typeof task == "object"){
          // setTimeout(function(){
          var data = task.data || [];
          if(typeof task.handler == "function"){
            task.handler(...data);	
          }
          // },1);
        }
        if(this.perf){
          var p2 = performance.now();
          var id = this.currentTask.id;
          this.processTime[id] = (this.processTime.hasOwnProperty(id) ? this.processTime[id] : 0) + (p2-p1);
        }
        remTime = deadline.timeRemaining();
      }
      this.idleCallbackRequested = false;
      this.tasksScheduler();
    }
    requestIdleCallback(callback){
      var self = this;
      setTimeout(function(){
        setTimeout(function(){
          var startTime = Date.now();
          callback({
            timeRemaining: function(){
              var diffTime = Date.now() - startTime;
              if(diffTime > self.timeout){
                  return 0;
              }
              return self.timeout-diffTime;
            }
          });
        }, 1);
      }, 50);
    }
  }  
  export { IdleTaskScheduler };