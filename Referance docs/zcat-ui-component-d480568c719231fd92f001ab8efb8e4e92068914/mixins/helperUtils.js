import { Mixin } from "@slyte/core";
import { ZcatAlert } from "../components/javascript/zcat-alert";
// import { ZcatAlert } from "node_modules/addons/../components/javascript/zcat-alert";

class HelperUtils extends Mixin {

  // static showAlert(self, msg){
  //   if(document.querySelector('.lyteMessageBox')){
  //     document.querySelector('.lyteMessageBox').remove();
  //   }
  //   self.$app.$component.render(ZcatAlert, msg, '#showalert');
  // }



    static isEmpty(value , opts = {isTrim :true,isObjectCheck :true}){
        if (value === null || value === undefined) {
            return true;
          }
        
          if (typeof value === 'object' && opts.isObjectCheck) {
            if (Array.isArray(value)) {
              return value.length === 0;
            } else {
              return Object.keys(value).length === 0;
            }
          }
        
          if (typeof value === 'string') {
            if(opts.isTrim){
              return value.trim().length === 0;
            }
            else{
              return value.length === 0;
            }  
          }
          
          return false;        
    }
    
}
export {HelperUtils};
