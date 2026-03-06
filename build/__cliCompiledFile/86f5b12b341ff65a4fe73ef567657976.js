import { _defineProperty } from "@slyte/core/src/lyte-utils";
import './zcat-icon.js';
import "../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-fileupload.js";
import { Component } from "../../node_modules/@slyte/component/index.js";
import { prop } from "../../node_modules/@slyte/core/index.js";

class ZcatFileupload extends Component {
  constructor() {
    super();
  }

  data(arg1) {
    const defaultProp = {
      name: 'file',
      multiple: true,
      accept: '',
      id: '',
      class: '',
      uploadMultiple: true,
      uploadMultipleCount: Infinity,
      fileLimit: 20000000,
      minimumFileSize: 0,
      totalFilesSize: '',
      parallel: 2,
      autoUpload: true,
      triggerUpload: false,
      paramName: 'files',
      thumb: false,
      tabindex: 1,
      retry: 2,
      files: [],
      folder: false,
      fileUnit: '',
      digits: 0,
      message: 'Drag file here or browse to upload',
      chunk: false,
      chunkSize: 2000000,
      parallelChunkUpload: false,
      parallelChunkCount: Infinity,
      chunkRetry: 2,
      ajax: '',
      appearance: 'box',
      disabled: false,
      failureMessage: 'failed',
      retryText: 'retry',
      allowReplace: false,
      filesCount: Infinity
    };
    return Object.assign(super.data({
      zcatProp: prop('object', { watch: true }),
      featureObj: prop('object', { watch: true }),
      errorMessage: prop('string'),
      uploadedIcon: prop('string', { default: 'folder' }),
      errorObj: prop('object', { watch: true })
    }), arg1);
  }

  getFileIcon(file) {
    if (!file) return 'file';

    // Detect folder upload
    if (file.length > 1 && file[0].webkitRelativePath !== '') {
      return 'folder';
    }

    if (file[0].webkitRelativePath !== '') {
      return 'folder';
    }

    const mime = file[0].type?.toLowerCase() || '';
    const name = file[0].name?.toLowerCase() || '';

    // ZIP (application/zip etc.)
    if (mime.includes('zip') || /\.(zip|rar|7z|tar|gz)$/i.test(name)) {
      return 'file'; //zip
    }

    // Images
    if (
      mime.startsWith('image/') ||
      /\.(png|jpg|jpeg|gif|bmp|webp|svg)$/i.test(name)
    ) {
      return 'image';
    }

    // PDF
    if (mime === 'application/pdf' || name.endsWith('.pdf')) {
      return 'file';
    }

    // Word
    if (/\.docx?$/.test(name)) return 'file';

    // Excel
    if (/\.xlsx?$/.test(name)) return 'file';

    // PPT
    if (/\.pptx?$/.test(name)) return 'file';

    // Default
    return 'file';
  }

  static methods(arg1) {
    return Object.assign(super.methods({
      defaultOnReject(param1, param2, param3) {
        const zcatProp = this.getData('zcatProp');
        let defaultErrMsg = '';
        if (type.totalSize === 'Exceeds') {
          defaultErrMsg = 'Accepted file size is ' + zcatProp.totalFilesSize;
        } else if (type.type === 'Invalid_Type') {
          defaultErrMsg = type.type;
        }

        this.$addon.objectUtils(zcatProp, 'add', 'errorMessage', defaultErrMsg);

        if (this.getMethods('onReject')) {
          this.executeMethod('onReject', param1, param2, param3);
        }
      },
      defaultOnSelect(fileObj, param1, param2, param3) {
        const zcatProp = this.getData('zcatProp');
        // if (zcatProp.errorMessage) {
        //   // this.$addon.objectUtils(zcatProp, 'delete', 'errorMessage');
        //   // this.setData('errorMessage', '');          
        // }
        const errorObject = this.getData('errorObj');
        if(errorObject){
            this.$addon.objectUtils(errorObject, "delete", zcatProp.key);
        }
        else if(this.getData('errorMessage')){
            this.setData('errorMessage', '');
        }

        const iconName = this.getFileIcon(fileObj);
        this.setData('uploadedIcon', iconName);

        if (this.getMethods('onSelect')) {
          this.executeMethod('onSelect', fileObj, param1, param2, param3);
        }
      },
      defaultOnAdd(file, element, fileInfo) {
        if (this.getMethods('onAdd')) {
          this.executeMethod('onAdd', file, element, fileInfo);
        }
      },
      defaultOnDrop(param1, param2, param3) {
        if (this.getMethods('onDrop')) {
          this.executeMethod('onDrop', param1, param2, param3);
        }
      }, 
      defaultOnRemove(param1, param2, param3) {
        if (this.getMethods('onRemove')) {
          this.executeMethod('onRemove', param1, param2, param3);
        }
      },
      defaultBeforeRender(param1, param2, param3) {        
        if (this.getMethods('beforeRender')) {
          this.executeMethod('beforeRender', param1, param2, param3);
        }
      },
      defaultAfterRender(param1, param2, param3) {        
        if (this.getMethods('afterRender')) {
          this.executeMethod('afterRender', param1, param2, param3);
        }
      },
      defaultOnBeforeRemove(param1, param2, param3) {        
        if (this.getMethods('onBeforeRemove')) {
          this.executeMethod('onBeforeRemove', param1, param2, param3);
        }
      },
      defaultOnSuccess(param1, param2, param3) {        
        if (this.getMethods('onSuccess')) {
          this.executeMethod('onSuccess', param1, param2, param3);
        }
      },
      defaultOnFailure(param1, param2, param3) {        
        if (this.getMethods('onFailure')) {
          this.executeMethod('onFailure', param1, param2, param3);
        }
      },
      defaultOnRequestSuccess(param1, param2, param3) {        
        if (this.getMethods('onRequestSuccess')) {
          this.executeMethod('onRequestSuccess', param1, param2, param3);
        }
      },
      defaultOnRequestFailure(param1, param2, param3) {        
        if (this.getMethods('onRequestFailure')) {
          this.executeMethod('onRequestFailure', param1, param2, param3);
        }
      },
      defaultOnFileSuccess(param1, param2, param3) {        
        if (this.getMethods('onFileSuccess')) {
          this.executeMethod('onFileSuccess', param1, param2, param3);
        }
      },
      defaultOnFileFailure(param1, param2, param3) {        
        if (this.getMethods('onFileFailure')) {
          this.executeMethod('onFileFailure', param1, param2, param3);
        }
      },
      defaultOnProgress(param1, param2, param3) {        
        if (this.getMethods('onProgress')) {
          this.executeMethod('onProgress', param1, param2, param3);
        }
      },
      defaultOnRetry(param1, param2, param3) {        
        if (this.getMethods('onRetry')) {
          this.executeMethod('onRetry', param1, param2, param3);
        }
      },
      defaultOnChunkSuccess(param1, param2, param3) {        
        if (this.getMethods('onChunkSuccess')) {
          this.executeMethod('onChunkSuccess', param1, param2, param3);
        }
      },
      defaultOnChunkError(param1, param2, param3) {        
        if (this.getMethods('onChunkError')) {
          this.executeMethod('onChunkError', param1, param2, param3);
        }
      },
      defaultOnBeforeSend(param1, param2, param3) {        
        if (this.getMethods('onBeforeSend')) {
          this.executeMethod('onBeforeSend', param1, param2, param3);
        }
      },
      defaultOnSend(param1, param2, param3) {        
        if (this.getMethods('onSend')) {
          this.executeMethod('onSend', param1, param2, param3);
        }
      },
      defaultOnDragEnter(param1, param2, param3) {        
        if (this.getMethods('onDragEnter')) {
          this.executeMethod('onDragEnter', param1, param2, param3);
        }
      },
      defaultOnDragOver(param1, param2, param3) {        
        if (this.getMethods('onDragOver')) {
          this.executeMethod('onDragOver', param1, param2, param3);
        }
      },
      defaultOnDragLeave(param1, param2, param3) {        
        if (this.getMethods('onDragLeave')) {
          this.executeMethod('onDragLeave', param1, param2, param3);
        }
      }, 
      defaultOnBeforeDrop(param1, param2, param3) {        
        if (this.getMethods('onBeforeDrop')) {
          this.executeMethod('onBeforeDrop', param1, param2, param3);
        }
      },
      defaultOnBeforePaste(param1, param2, param3) {        
        if (this.getMethods('onBeforePaste')) {
          this.executeMethod('onBeforePaste', param1, param2, param3);
        }
      },
      defaultOnPaste(param1, param2, param3) {        
        if (this.getMethods('onPaste')) {
          this.executeMethod('onPaste', param1, param2, param3);
        }
      },
      defaultOnBeforeOpen(param1, param2, param3) {        
        if (this.getMethods('onBeforeOpen')) {
          this.executeMethod('onBeforeOpen', param1, param2, param3);
        }
      }

    }), arg1);
  }

  static actions(arg1) {
    return Object.assign(super.actions({}), arg1);
  }

  _() {
    _;
  }
}

ZcatFileupload._template = "<template tag-name=\"zcat-fileupload\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(zcatProp.infoIcon.yield,'||',zcatProp.infoIcon.value)}}\" is=\"case\" lc-id=\"lc_id_0\"><zcat-hovercard zcat-prop=\"{{zcatProp.infoIcon}}\"> <template is=\"yield\" yield-name=\"{{zcatProp.infoIcon.yield}}\"> <lyte-yield yield-name=\"{{zcatProp.infoIcon.yield}}\"></lyte-yield> </template> </zcat-hovercard></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.label}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-dF zcat-align-center zcat-gap-2 zcat-mb-2 {{expHandlers(zcatProp.disabled,'?:','input-field-disabled','')}}\"> <p class=\"{{expHandlers(zcatProp.label_class,'?:',zcatProp.label_class,'zcat-input-label')}} zcat-input-label-default\"> {{zcatProp.label}} <span class=\"optional-label\">{{expHandlers(expHandlers(zcatProp.isOptional,'&amp;&amp;',zcatProp.label),'?:',' (Optional)','')}}</span> </p> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{zcatProp.infoIcon.id}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"zcat-w12 zcat-h12 zcat-cP\" id=\"tooltipInfoMsg{{zcatProp.infoIcon.id}}\" lyte-hovercard=\"true\"> <zcat-icon class=\"zcat-mb-2 zcat-input-label-stroke\" name=\"info\" width=\"12\" height=\"12\" stroke=\"var(--zcat-inputField-icon-label)\" strokewidth=\"1.3\"> </zcat-icon> </div></template></template> </div></template></template> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{expHandlers(expHandlers(zcatProp.variant,'===','primary'),'&amp;&amp;',expHandlers(zcatProp.type,'===','single'))}}\" lc-id=\"lc_id_0\"> <lyte-fileupload data-zcqa=\"{{zcatProp.zcqa}}\" lt-prop-yield=\"true\" lt-prop-name=\"{{zcatProp.name}}\" lt-prop-multiple=\"{{zcatProp.multiple}}\" lt-prop-accept=\"{{expHandlers(zcatProp.accept,'?:',zcatProp.accept,'application/zip')}}\" id=\"{{zcatProp.id}}\" lt-prop-id=\"{{zcatProp.id}}\" lt-prop-class=\"{{zcatProp.class}}\" error-message=\"{{expHandlers(errorObj[zcatProp.key],'||',errorMessage)}}\" class=\"{{zcatProp.class}} {{expHandlers(expHandlers(errorObj[zcatProp.key],'||',errorMessage),'?:','zcat-invalid','vertical')}} {{expHandlers(zcatProp.loading,'?:','fileupload-loading','')}}\" lt-prop-upload-multiple=\"{{zcatProp.uploadMultiple}}\" lt-prop-upload-multiple-count=\"{{zcatProp.uploadMultipleCount}}\" lt-prop-file-limit=\"{{zcatProp.fileLimit}}\" lt-prop-minimum-file-size=\"{{zcatProp.minimumFileSize}}\" lt-prop-total-files-size=\"{{zcatProp.totalFilesSize}}\" lt-prop-parallel=\"{{zcatProp.parallel}}\" lt-prop-auto-upload=\"{{zcatProp.autoUpload}}\" lt-prop-trigger-upload=\"{{zcatProp.triggerUpload}}\" lt-prop-param-name=\"{{zcatProp.paramName}}\" lt-prop-thumb=\"{{zcatProp.thumb}}\" lt-prop-tabindex=\"{{zcatProp.tabindex}}\" lt-prop-retry=\"{{zcatProp.retry}}\" lt-prop-files=\"{{lbind(zcatProp.files)}}\" lt-prop-folder=\"{{zcatProp.folder}}\" lt-prop-file-unit=\"{{zcatProp.fileUnit}}\" lt-prop-digits=\"{{zcatProp.digits}}\" lt-prop-message=\"{{zcatProp.message}}\" lt-prop-chunk=\"{{zcatProp.chunk}}\" lt-prop-chunk-size=\"{{zcatProp.chunkSize}}\" lt-prop-parallel-chunk-upload=\"{{zcatProp.parallelChunkUpload}}\" lt-prop-parallel-chunk-count=\"{{zcatProp.parallelChunkCount}}\" lt-prop-chunk-retry=\"{{zcatProp.chunkRetry}}\" lt-prop-ajax=\"{{zcatProp.ajax}}\" lt-prop-appearance=\"{{zcatProp.appearance}}\" lt-prop-disabled=\"{{zcatProp.disabled}}\" lt-prop-failure-message=\"{{zcatProp.failureMessage}}\" lt-prop-retry-text=\"{{zcatProp.retryText}}\" lt-prop-allow-replace=\"{{zcatProp.allowReplace}}\" lt-prop-files-count=\"{{expHandlers(zcatProp.filesCount,'?:',zcatProp.filesCount,100000)}}\" before-render=\"{{method('defaultBeforeRender')}}\" after-render=\"{{method('defaultAfterRender')}}\" on-reject=\"{{method(&quot;defaultOnReject&quot;)}}\" on-add=\"{{method(&quot;defaultOnAdd&quot;)}}\" on-before-remove=\"{{method('defaultOnBeforeRemove')}}\" on-remove=\"{{method('defaultOnRemove')}}\" on-success=\"{{method('defaultOnSuccess')}}\" on-failure=\"{{method('defaultOnFailure')}}\" on-request-success=\"{{method('defaultOnRequestSuccess')}}\" on-request-failure=\"{{method('defaultOnRequestFailure')}}\" on-file-success=\"{{method('defaultOnFileSuccess')}}\" on-file-failure=\"{{method('defaultOnFileFailure')}}\" on-progress=\"{{method('defaultOnProgress')}}\" on-retry=\"{{method('defaultOnRetry')}}\" on-chunk-success=\"{{method('defaultOnChunkSuccess')}}\" on-chunk-error=\"{{method('defaultOnChunkError')}}\" on-before-send=\"{{method('defaultOnBeforeSend')}}\" on-send=\"{{method('defaultOnSend')}}\" on-drag-enter=\"{{method('defaultOnDragEnter')}}\" on-drag-over=\"{{method('defaultOnDragOver')}}\" on-drag-leave=\"{{method('defaultOnDragLeave')}}\" on-before-drop=\"{{method('defaultOnBeforeDrop')}}\" on-drop=\"{{method('defaultOnDrop')}}\" on-before-paste=\"{{method('defaultOnBeforePaste')}}\" on-paste=\"{{method('defaultOnPaste')}}\" on-before-open=\"{{method('defaultOnBeforeOpen')}}\" on-select=\"{{method('defaultOnSelect')}}\"> <template is=\"registerYield\" yield-name=\"file\"> <lyte-file-select-area> <lyte-file-message class=\"lyteInputFileUpd {{if(queueList.length,'lyteHide','')}}\"> <zcat-icon width=\"16\" height=\"16\" stroke=\"var(--zcat-inputField-icon-placeholder)\" name=\"{{expHandlers(zcatProp.loading,'?:','loading-sun','upload-cloud')}}\"> </zcat-icon> <span class=\"placeholder\"> {{expHandlers(zcatProp.loading,'?:',expHandlers(zcatProp.loadingPlaceholder,'?:',zcatProp.loadingPlaceholder,\"Hold on your file has been uploading\"),expHandlers(zcatProp.placeholder,'?:',expHandlers(zcatProp.placeholder,'+',expHandlers(expHandlers(zcatProp.isOptional,'&amp;&amp;',expHandlers(zcatProp.label,'!')),'?:',\" (Optional)\",\"\")),\"Drag and drop, or browse to upload your file\"))}} </span> </lyte-file-message> <div class=\"lyteFileUpdList\"> <template is=\"for\" _jsp=\"true\" items=\"{{queueList}}\" item=\"item\" index=\"index\"> <div class=\"lyteInputFileUpd {{item.status}}\"> <div class=\"zcat-dF zcat-gap-4 zcat-align-center\"> <zcat-icon width=\"16\" height=\"16\" stroke=\"var(--zcat-inputField-icon-active)\" name=\"{{uploadedIcon}}\"> </zcat-icon> <p class=\"lyteuploadedfilename\">{{item.name}}</p> </div> <div class=\"zcat-p-4 zcat-dF zcat-align-center\"> <lyte-file-close data-value=\"{{item.id}}\" class=\"{{item.status}}\" data-zcqa=\"{{item.zcqa}}\"> </lyte-file-close> </div> </div> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{expHandlers(item.status,'==',&quot;error&quot;)}}\" lc-id=\"lc_id_0\"> <lyte-file-retry data-value=\"{{item.id}}\"> <span class=\"lyteFileUpdFailMsg\"> {{zcatProp.failureMessage}} </span> <span class=\"lyteFileUpdRetryMsg\"> {{zcatProp.retryText}} </span> </lyte-file-retry> </template></template> </template> </div> </lyte-file-select-area> </template> </lyte-fileupload> </template><template is=\"case\" case=\"{{expHandlers(expHandlers(zcatProp.variant,'===','primary'),'&amp;&amp;',expHandlers(zcatProp.type,'===','multiple'))}}\" lc-id=\"lc_id_1\"> <lyte-fileupload data-zcqa=\"{{zcatProp.zcqa}}\" lt-prop-yield=\"true\" lt-prop-name=\"{{zcatProp.name}}\" lt-prop-multiple=\"{{zcatProp.multiple}}\" lt-prop-accept=\"{{expHandlers(zcatProp.accept,'?:',zcatProp.accept,'application/zip')}}\" id=\"{{zcatProp.id}}\" lt-prop-id=\"{{zcatProp.id}}\" lt-prop-class=\"{{zcatProp.class}}\" error-message=\"{{expHandlers(errorObj[zcatProp.key],'||',errorMessage)}}\" class=\"{{expHandlers(expHandlers(zcatProp.type,'===','multiple'),'?:','multi-file-upload','')}} {{zcatProp.class}} {{expHandlers(expHandlers(errorObj[zcatProp.key],'||',errorMessage),'?:','zcat-invalid','vertical')}} {{expHandlers(zcatProp.loading,'?:','fileupload-loading','')}}\" lt-prop-upload-multiple=\"{{zcatProp.uploadMultiple}}\" lt-prop-upload-multiple-count=\"{{zcatProp.uploadMultipleCount}}\" lt-prop-file-limit=\"{{zcatProp.fileLimit}}\" lt-prop-minimum-file-size=\"{{zcatProp.minimumFileSize}}\" lt-prop-total-files-size=\"{{zcatProp.totalFilesSize}}\" lt-prop-parallel=\"{{zcatProp.parallel}}\" lt-prop-auto-upload=\"{{zcatProp.autoUpload}}\" lt-prop-trigger-upload=\"{{zcatProp.triggerUpload}}\" lt-prop-param-name=\"{{zcatProp.paramName}}\" lt-prop-thumb=\"{{zcatProp.thumb}}\" lt-prop-tabindex=\"{{zcatProp.tabindex}}\" lt-prop-retry=\"{{zcatProp.retry}}\" lt-prop-files=\"{{lbind(zcatProp.files)}}\" lt-prop-folder=\"{{zcatProp.folder}}\" lt-prop-file-unit=\"{{zcatProp.fileUnit}}\" lt-prop-digits=\"{{zcatProp.digits}}\" lt-prop-message=\"{{zcatProp.message}}\" lt-prop-chunk=\"{{zcatProp.chunk}}\" lt-prop-chunk-size=\"{{zcatProp.chunkSize}}\" lt-prop-parallel-chunk-upload=\"{{zcatProp.parallelChunkUpload}}\" lt-prop-parallel-chunk-count=\"{{zcatProp.parallelChunkCount}}\" lt-prop-chunk-retry=\"{{zcatProp.chunkRetry}}\" lt-prop-ajax=\"{{zcatProp.ajax}}\" lt-prop-appearance=\"{{zcatProp.appearance}}\" lt-prop-disabled=\"{{zcatProp.disabled}}\" lt-prop-failure-message=\"{{zcatProp.failureMessage}}\" lt-prop-retry-text=\"{{zcatProp.retryText}}\" lt-prop-allow-replace=\"{{zcatProp.allowReplace}}\" lt-prop-files-count=\"{{expHandlers(zcatProp.filesCount,'?:',zcatProp.filesCount,100000)}}\" before-render=\"{{method('defaultBeforeRender')}}\" after-render=\"{{method('defaultAfterRender')}}\" on-reject=\"{{method(&quot;defaultOnReject&quot;)}}\" on-add=\"{{method(&quot;defaultOnAdd&quot;)}}\" on-before-remove=\"{{method('defaultOnBeforeRemove')}}\" on-remove=\"{{method('defaultOnRemove')}}\" on-success=\"{{method('defaultOnSuccess')}}\" on-failure=\"{{method('defaultOnFailure')}}\" on-request-success=\"{{method('defaultOnRequestSuccess')}}\" on-request-failure=\"{{method('defaultOnRequestFailure')}}\" on-file-success=\"{{method('defaultOnFileSuccess')}}\" on-file-failure=\"{{method('defaultOnFileFailure')}}\" on-progress=\"{{method('defaultOnProgress')}}\" on-retry=\"{{method('defaultOnRetry')}}\" on-chunk-success=\"{{method('defaultOnChunkSuccess')}}\" on-chunk-error=\"{{method('defaultOnChunkError')}}\" on-before-send=\"{{method('defaultOnBeforeSend')}}\" on-send=\"{{method('defaultOnSend')}}\" on-drag-enter=\"{{method('defaultOnDragEnter')}}\" on-drag-over=\"{{method('defaultOnDragOver')}}\" on-drag-leave=\"{{method('defaultOnDragLeave')}}\" on-before-drop=\"{{method('defaultOnBeforeDrop')}}\" on-drop=\"{{method('defaultOnDrop')}}\" on-before-paste=\"{{method('defaultOnBeforePaste')}}\" on-paste=\"{{method('defaultOnPaste')}}\" on-before-open=\"{{method('defaultOnBeforeOpen')}}\" on-select=\"{{method('defaultOnSelect')}}\"> <template is=\"registerYield\" yield-name=\"file\"> <lyte-file-select-area class=\"{{if(queueList.length,'fileUploaded','')}}\"> <lyte-file-message class=\"lyteInputFileUpd {{if(queueList.length,'fileUploaded','')}}\"> <zcat-icon width=\"16\" height=\"16\" stroke=\"var(--zcat-inputField-icon-placeholder)\" name=\"{{expHandlers(zcatProp.loading,'?:','loading-sun','upload-cloud')}}\"> </zcat-icon> <span class=\"placeholder\"> {{expHandlers(zcatProp.loading,'?:',expHandlers(zcatProp.loadingPlaceholder,'?:',zcatProp.loadingPlaceholder,\"Hold on your file has been uploading\"),expHandlers(zcatProp.placeholder,'+',expHandlers(expHandlers(zcatProp.isOptional,'&amp;&amp;',expHandlers(zcatProp.label,'!')),'?:',\" (Optional)\",\"\")))}} </span> </lyte-file-message> <div class=\"lyteFileUpdList\"> <template is=\"for\" _jsp=\"true\" items=\"{{queueList}}\" item=\"item\" index=\"index\"> <div class=\"lyteInputFileUpd {{item.status}}\"> <div class=\"zcat-dF zcat-gap-4 zcat-align-center\"> <zcat-icon width=\"16\" height=\"16\" stroke=\"var(--zcat-inputField-icon-active)\" name=\"{{uploadedIcon}}\"> </zcat-icon> <p class=\"lyteuploadedfilename\">{{item.name}}</p> </div> <div class=\"zcat-p-4 zcat-dF zcat-align-center\"> <lyte-file-close data-value=\"{{item.id}}\" class=\"{{item.status}}\" data-zcqa=\"{{item.zcqa}}\"> </lyte-file-close> </div> </div> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{expHandlers(item.status,'==',&quot;error&quot;)}}\" lc-id=\"lc_id_0\"> <lyte-file-retry data-value=\"{{item.id}}\"> <span class=\"lyteFileUpdFailMsg\"> {{zcatProp.failureMessage}} </span> <span class=\"lyteFileUpdRetryMsg\"> {{zcatProp.retryText}} </span> </lyte-file-retry> </template></template> </template> </div> </lyte-file-select-area> </template> </lyte-fileupload> </template><template is=\"case\" case=\"{{expHandlers(expHandlers(zcatProp.variant,'===','secondary'),'&amp;&amp;',expHandlers(zcatProp.type,'===','single'))}}\" lc-id=\"lc_id_2\"> <lyte-fileupload data-zcqa=\"{{zcatProp.zcqa}}\" lt-prop-yield=\"true\" lt-prop-name=\"{{zcatProp.name}}\" lt-prop-multiple=\"{{zcatProp.multiple}}\" lt-prop-accept=\"{{expHandlers(zcatProp.accept,'?:',zcatProp.accept,'application/zip')}}\" id=\"{{zcatProp.id}}\" lt-prop-id=\"{{zcatProp.id}}\" lt-prop-class=\"{{zcatProp.class}}\" error-message=\"{{expHandlers(errorObj[zcatProp.key],'||',errorMessage)}}\" class=\"{{zcatProp.class}} {{expHandlers(expHandlers(errorObj[zcatProp.key],'||',errorMessage),'?:','zcat-invalid','vertical')}} {{expHandlers(zcatProp.loading,'?:','fileupload-loading','')}}\" lt-prop-upload-multiple=\"{{zcatProp.uploadMultiple}}\" lt-prop-upload-multiple-count=\"{{zcatProp.uploadMultipleCount}}\" lt-prop-file-limit=\"{{zcatProp.fileLimit}}\" lt-prop-minimum-file-size=\"{{zcatProp.minimumFileSize}}\" lt-prop-total-files-size=\"{{zcatProp.totalFilesSize}}\" lt-prop-parallel=\"{{zcatProp.parallel}}\" lt-prop-auto-upload=\"{{zcatProp.autoUpload}}\" lt-prop-trigger-upload=\"{{zcatProp.triggerUpload}}\" lt-prop-param-name=\"{{zcatProp.paramName}}\" lt-prop-thumb=\"{{zcatProp.thumb}}\" lt-prop-tabindex=\"{{zcatProp.tabindex}}\" lt-prop-retry=\"{{zcatProp.retry}}\" lt-prop-files=\"{{lbind(zcatProp.files)}}\" lt-prop-folder=\"{{zcatProp.folder}}\" lt-prop-file-unit=\"{{zcatProp.fileUnit}}\" lt-prop-digits=\"{{zcatProp.digits}}\" lt-prop-message=\"{{zcatProp.message}}\" lt-prop-chunk=\"{{zcatProp.chunk}}\" lt-prop-chunk-size=\"{{zcatProp.chunkSize}}\" lt-prop-parallel-chunk-upload=\"{{zcatProp.parallelChunkUpload}}\" lt-prop-parallel-chunk-count=\"{{zcatProp.parallelChunkCount}}\" lt-prop-chunk-retry=\"{{zcatProp.chunkRetry}}\" lt-prop-ajax=\"{{zcatProp.ajax}}\" lt-prop-appearance=\"{{zcatProp.appearance}}\" lt-prop-disabled=\"{{zcatProp.disabled}}\" lt-prop-failure-message=\"{{zcatProp.failureMessage}}\" lt-prop-retry-text=\"{{zcatProp.retryText}}\" lt-prop-allow-replace=\"{{zcatProp.allowReplace}}\" lt-prop-files-count=\"{{expHandlers(zcatProp.filesCount,'?:',zcatProp.filesCount,100000)}}\" before-render=\"{{method('defaultBeforeRender')}}\" after-render=\"{{method('defaultAfterRender')}}\" on-reject=\"{{method(&quot;defaultOnReject&quot;)}}\" on-add=\"{{method(&quot;defaultOnAdd&quot;)}}\" on-before-remove=\"{{method('defaultOnBeforeRemove')}}\" on-remove=\"{{method('defaultOnRemove')}}\" on-success=\"{{method('defaultOnSuccess')}}\" on-failure=\"{{method('defaultOnFailure')}}\" on-request-success=\"{{method('defaultOnRequestSuccess')}}\" on-request-failure=\"{{method('defaultOnRequestFailure')}}\" on-file-success=\"{{method('defaultOnFileSuccess')}}\" on-file-failure=\"{{method('defaultOnFileFailure')}}\" on-progress=\"{{method('defaultOnProgress')}}\" on-retry=\"{{method('defaultOnRetry')}}\" on-chunk-success=\"{{method('defaultOnChunkSuccess')}}\" on-chunk-error=\"{{method('defaultOnChunkError')}}\" on-before-send=\"{{method('defaultOnBeforeSend')}}\" on-send=\"{{method('defaultOnSend')}}\" on-drag-enter=\"{{method('defaultOnDragEnter')}}\" on-drag-over=\"{{method('defaultOnDragOver')}}\" on-drag-leave=\"{{method('defaultOnDragLeave')}}\" on-before-drop=\"{{method('defaultOnBeforeDrop')}}\" on-drop=\"{{method('defaultOnDrop')}}\" on-before-paste=\"{{method('defaultOnBeforePaste')}}\" on-paste=\"{{method('defaultOnPaste')}}\" on-before-open=\"{{method('defaultOnBeforeOpen')}}\" on-select=\"{{method('defaultOnSelect')}}\"> <template is=\"registerYield\" yield-name=\"file\"> <lyte-file-select-area> <lyte-file-message class=\"lyteFileUpd {{if(queueList.length,'lyteHide','')}}\"> <zcat-icon width=\"24\" height=\"24\" stroke=\"var(--zcat-inputField-icon-placeholder)\" name=\"{{expHandlers(zcatProp.loading,'?:','loading-sun','upload-cloud')}}\"> </zcat-icon> <span class=\"placeholder\"> {{expHandlers(zcatProp.loading,'?:',expHandlers(zcatProp.loadingPlaceholder,'?:',zcatProp.loadingPlaceholder,\"Hold on your file has been uploading\"),expHandlers(zcatProp.placeholder,'+',expHandlers(expHandlers(zcatProp.isOptional,'&amp;&amp;',expHandlers(zcatProp.label,'!')),'?:',\" (Optional)\",\"\")))}} </span> </lyte-file-message> <div class=\"lyteFileUpdList\"> <template is=\"for\" _jsp=\"true\" items=\"{{queueList}}\" item=\"item\" index=\"index\"> <div class=\"lyteFileUploadedList {{item.status}}\"> <zcat-icon width=\"24\" height=\"24\" stroke=\"var(--zcat-inputField-icon-active)\" name=\"{{uploadedIcon}}\"> </zcat-icon> <div class=\"zcat-dF zcat-align-center zcat-gap-4\"> <span class=\"lyteuploadedfilename\"> {{item.name}} </span> <lyte-file-close data-value=\"{{item.id}}\" class=\"{{item.status}}\" data-zcqa=\"{{item.zcqa}}\"> </lyte-file-close> </div> </div> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{expHandlers(item.status,'==',&quot;error&quot;)}}\" lc-id=\"lc_id_0\"> <lyte-file-retry data-value=\"{{item.id}}\"> <span class=\"lyteFileUpdFailMsg\"> {{zcatProp.failureMessage}} </span> <span class=\"lyteFileUpdRetryMsg\"> {{zcatProp.retryText}} </span> </lyte-file-retry> </template></template> </template> </div> </lyte-file-select-area> </template> </lyte-fileupload> </template><template is=\"case\" case=\"{{expHandlers(expHandlers(zcatProp.variant,'===','secondary'),'&amp;&amp;',expHandlers(zcatProp.type,'===','multiple'))}}\" lc-id=\"lc_id_3\"> <lyte-fileupload data-zcqa=\"{{zcatProp.zcqa}}\" lt-prop-yield=\"true\" lt-prop-name=\"{{zcatProp.name}}\" lt-prop-multiple=\"{{zcatProp.multiple}}\" lt-prop-accept=\"{{expHandlers(zcatProp.accept,'?:',zcatProp.accept,'application/zip')}}\" id=\"{{zcatProp.id}}\" lt-prop-id=\"{{zcatProp.id}}\" lt-prop-class=\"{{zcatProp.class}}\" error-message=\"{{expHandlers(errorObj[zcatProp.key],'||',errorMessage)}}\" class=\"{{expHandlers(expHandlers(zcatProp.type,'===','multiple'),'?:','multi-file-upload','')}} {{zcatProp.class}} {{expHandlers(expHandlers(errorObj[zcatProp.key],'||',errorMessage),'?:','zcat-invalid','vertical')}} {{expHandlers(zcatProp.loading,'?:','fileupload-loading','')}}\" lt-prop-upload-multiple=\"{{zcatProp.uploadMultiple}}\" lt-prop-upload-multiple-count=\"{{zcatProp.uploadMultipleCount}}\" lt-prop-file-limit=\"{{zcatProp.fileLimit}}\" lt-prop-minimum-file-size=\"{{zcatProp.minimumFileSize}}\" lt-prop-total-files-size=\"{{zcatProp.totalFilesSize}}\" lt-prop-parallel=\"{{zcatProp.parallel}}\" lt-prop-auto-upload=\"{{zcatProp.autoUpload}}\" lt-prop-trigger-upload=\"{{zcatProp.triggerUpload}}\" lt-prop-param-name=\"{{zcatProp.paramName}}\" lt-prop-thumb=\"{{zcatProp.thumb}}\" lt-prop-tabindex=\"{{zcatProp.tabindex}}\" lt-prop-retry=\"{{zcatProp.retry}}\" lt-prop-files=\"{{lbind(zcatProp.files)}}\" lt-prop-folder=\"{{zcatProp.folder}}\" lt-prop-file-unit=\"{{zcatProp.fileUnit}}\" lt-prop-digits=\"{{zcatProp.digits}}\" lt-prop-message=\"{{zcatProp.message}}\" lt-prop-chunk=\"{{zcatProp.chunk}}\" lt-prop-chunk-size=\"{{zcatProp.chunkSize}}\" lt-prop-parallel-chunk-upload=\"{{zcatProp.parallelChunkUpload}}\" lt-prop-parallel-chunk-count=\"{{zcatProp.parallelChunkCount}}\" lt-prop-chunk-retry=\"{{zcatProp.chunkRetry}}\" lt-prop-ajax=\"{{zcatProp.ajax}}\" lt-prop-appearance=\"{{zcatProp.appearance}}\" lt-prop-disabled=\"{{zcatProp.disabled}}\" lt-prop-failure-message=\"{{zcatProp.failureMessage}}\" lt-prop-retry-text=\"{{zcatProp.retryText}}\" lt-prop-allow-replace=\"{{zcatProp.allowReplace}}\" lt-prop-files-count=\"{{expHandlers(zcatProp.filesCount,'?:',zcatProp.filesCount,100000)}}\" before-render=\"{{method('defaultBeforeRender')}}\" after-render=\"{{method('defaultAfterRender')}}\" on-reject=\"{{method(&quot;defaultOnReject&quot;)}}\" on-add=\"{{method(&quot;defaultOnAdd&quot;)}}\" on-before-remove=\"{{method('defaultOnBeforeRemove')}}\" on-remove=\"{{method('defaultOnRemove')}}\" on-success=\"{{method('defaultOnSuccess')}}\" on-failure=\"{{method('defaultOnFailure')}}\" on-request-success=\"{{method('defaultOnRequestSuccess')}}\" on-request-failure=\"{{method('defaultOnRequestFailure')}}\" on-file-success=\"{{method('defaultOnFileSuccess')}}\" on-file-failure=\"{{method('defaultOnFileFailure')}}\" on-progress=\"{{method('defaultOnProgress')}}\" on-retry=\"{{method('defaultOnRetry')}}\" on-chunk-success=\"{{method('defaultOnChunkSuccess')}}\" on-chunk-error=\"{{method('defaultOnChunkError')}}\" on-before-send=\"{{method('defaultOnBeforeSend')}}\" on-send=\"{{method('defaultOnSend')}}\" on-drag-enter=\"{{method('defaultOnDragEnter')}}\" on-drag-over=\"{{method('defaultOnDragOver')}}\" on-drag-leave=\"{{method('defaultOnDragLeave')}}\" on-before-drop=\"{{method('defaultOnBeforeDrop')}}\" on-drop=\"{{method('defaultOnDrop')}}\" on-before-paste=\"{{method('defaultOnBeforePaste')}}\" on-paste=\"{{method('defaultOnPaste')}}\" on-before-open=\"{{method('defaultOnBeforeOpen')}}\" on-select=\"{{method('defaultOnSelect')}}\"> <template is=\"registerYield\" yield-name=\"file\"> <lyte-file-select-area class=\"{{if(queueList.length,'fileUploaded','')}}\"> <lyte-file-message class=\"lyteFileUpd {{if(queueList.length,'fileUploaded','')}}\"> <zcat-icon width=\"24\" height=\"24\" stroke=\"var(--zcat-inputField-icon-placeholder)\" name=\"{{expHandlers(zcatProp.loading,'?:','loading-sun','upload-cloud')}}\"> </zcat-icon> <span class=\"placeholder\"> {{expHandlers(zcatProp.loading,'?:',expHandlers(zcatProp.loadingPlaceholder,'?:',zcatProp.loadingPlaceholder,\"Hold on your file has been uploading\"),expHandlers(zcatProp.placeholder,'+',expHandlers(expHandlers(zcatProp.isOptional,'&amp;&amp;',expHandlers(zcatProp.label,'!')),'?:',\" (Optional)\",\"\")))}} </span> </lyte-file-message> <div class=\"lyteFileUpdList\"> <template is=\"for\" _jsp=\"true\" items=\"{{queueList}}\" item=\"item\" index=\"index\"> <div class=\"lyteInputFileUpd {{item.status}}\"> <div class=\"zcat-dF zcat-gap-4 zcat-align-center\"> <zcat-icon width=\"16\" height=\"16\" stroke=\"var(--zcat-inputField-icon-active)\" name=\"{{uploadedIcon}}\"> </zcat-icon> <p class=\"lyteuploadedfilename\">{{item.name}}</p> </div> <div class=\"zcat-p-4 zcat-dF zcat-align-center\"> <lyte-file-close data-value=\"{{item.id}}\" class=\"{{item.status}}\" data-zcqa=\"{{item.zcqa}}\"> </lyte-file-close> </div> </div> <template is=\"switch\" l-c=\"true\" _jsp=\"true\"><template is=\"case\" case=\"{{expHandlers(item.status,'==',&quot;error&quot;)}}\" lc-id=\"lc_id_0\"> <lyte-file-retry data-value=\"{{item.id}}\"> <span class=\"lyteFileUpdFailMsg\"> {{zcatProp.failureMessage}} </span> <span class=\"lyteFileUpdRetryMsg\"> {{zcatProp.retryText}} </span> </lyte-file-retry> </template></template> </template> </div> </lyte-file-select-area> </template> </lyte-fileupload> </template></template> </template>";;
ZcatFileupload._dynamicNodes = [{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"a","p":[0,1],"cn":"lc_id_0"},{"t":"r","p":[0,1],"dN":[{"t":"a","p":[1]},{"t":"i","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"a","p":[0,1],"cn":"lc_id_0"},{"t":"tX","p":[0,1,1],"cn":"lc_id_0"},{"t":"tX","p":[0,1,3,0],"cn":"lc_id_0"},{"t":"s","p":[0,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"r","p":[1,1],"dN":[{"t":"a","p":[1,1]},{"t":"a","p":[1,1,1]},{"t":"cD","p":[1,1,1],"in":3,"sibl":[2]},{"t":"tX","p":[1,1,3,1]},{"t":"cD","p":[1,1],"in":2,"sibl":[1]},{"t":"a","p":[1,3,1]},{"t":"f","p":[1,3,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1,1]},{"t":"cD","p":[1,1,1],"in":2,"sibl":[1]},{"t":"tX","p":[1,1,3,0]},{"t":"a","p":[1,3,1]},{"t":"cD","p":[1,3,1],"in":1,"sibl":[0]},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,1,1],"cn":"lc_id_0"},{"t":"tX","p":[1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[3,2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true},"lc_id_1":{"dN":[{"t":"a","p":[1],"cn":"lc_id_1"},{"t":"r","p":[1,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"a","p":[1,1,1]},{"t":"cD","p":[1,1,1],"in":3,"sibl":[2]},{"t":"tX","p":[1,1,3,1]},{"t":"cD","p":[1,1],"in":2,"sibl":[1]},{"t":"a","p":[1,3,1]},{"t":"f","p":[1,3,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1,1]},{"t":"cD","p":[1,1,1],"in":2,"sibl":[1]},{"t":"tX","p":[1,1,3,0]},{"t":"a","p":[1,3,1]},{"t":"cD","p":[1,3,1],"in":1,"sibl":[0]},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,1,1],"cn":"lc_id_0"},{"t":"tX","p":[1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[3,2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_1"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_1"}],"cdp":{"t":"a","p":[1]},"dcn":true},"lc_id_2":{"dN":[{"t":"a","p":[1],"cn":"lc_id_2"},{"t":"r","p":[1,1],"dN":[{"t":"a","p":[1,1]},{"t":"a","p":[1,1,1]},{"t":"cD","p":[1,1,1],"in":3,"sibl":[2]},{"t":"tX","p":[1,1,3,1]},{"t":"cD","p":[1,1],"in":2,"sibl":[1]},{"t":"a","p":[1,3,1]},{"t":"f","p":[1,3,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"cD","p":[1,1],"in":2,"sibl":[1]},{"t":"tX","p":[1,3,1,1]},{"t":"a","p":[1,3,3]},{"t":"cD","p":[1,3,3],"in":1,"sibl":[0]},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,1,1],"cn":"lc_id_0"},{"t":"tX","p":[1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[3,2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_2"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_2"}],"cdp":{"t":"a","p":[2]},"dcn":true},"lc_id_3":{"dN":[{"t":"a","p":[1],"cn":"lc_id_3"},{"t":"r","p":[1,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"a","p":[1,1,1]},{"t":"cD","p":[1,1,1],"in":3,"sibl":[2]},{"t":"tX","p":[1,1,3,1]},{"t":"cD","p":[1,1],"in":2,"sibl":[1]},{"t":"a","p":[1,3,1]},{"t":"f","p":[1,3,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1,1]},{"t":"cD","p":[1,1,1],"in":2,"sibl":[1]},{"t":"tX","p":[1,1,3,0]},{"t":"a","p":[1,3,1]},{"t":"cD","p":[1,3,1],"in":1,"sibl":[0]},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,1,1],"cn":"lc_id_0"},{"t":"tX","p":[1,3,1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[3,2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_3"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_3"}],"cdp":{"t":"a","p":[3]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true},"lc_id_1":{"dc":[1,0],"hc":true,"trans":true},"lc_id_2":{"dc":[1,0],"hc":true,"trans":true},"lc_id_3":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0","lc_id_1","lc_id_2","lc_id_3"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[2,1,0]}];;
ZcatFileupload._observedAttributes = ["zcatProp", "featureObj", "errorMessage", "uploadedIcon", "errorObj"];
export { ZcatFileupload };

ZcatFileupload.register("zcat-fileupload", {
  hash: "ZcatFileupload_4",
  refHash: "C_zcat-app_app_0"
});
