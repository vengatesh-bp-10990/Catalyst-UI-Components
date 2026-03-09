import { Component } from '../component.js';
import { prop } from '@slyte/core';
class ZcatFileupload extends Component {
  constructor() {
    super();
  }

  data() {
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
    return {
      zcatProp: prop('object', { watch: true }),
      featureObj: prop('object', { watch: true }),
      errorMessage: prop('string'),
      uploadedIcon: prop('string', { default: 'folder' }),
      errorObj: prop('object', { watch: true })
    };
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

  static methods() {
    return {
      defaultOnReject(param1, param2, param3) {
        const zcatProp = this.getData('zcatProp');
        let defaultErrMsg = '';
        if (type.totalSize === 'Exceeds') {
          defaultErrMsg = 'Accepted file size is ' + zcatProp.totalFilesSize;
        } else if (type.type === 'Invalid_Type') {
          defaultErrMsg = type.type;
        }

        this.$app.objectUtils(zcatProp, 'add', 'errorMessage', defaultErrMsg);

        if (this.getMethods('onReject')) {
          this.executeMethod('onReject', param1, param2, param3);
        }
      },
      defaultOnSelect(fileObj, param1, param2, param3) {
        const zcatProp = this.getData('zcatProp');
        // if (zcatProp.errorMessage) {
        //   // this.$app.objectUtils(zcatProp, 'delete', 'errorMessage');
        //   // this.setData('errorMessage', '');          
        // }
        const errorObject = this.getData('errorObj');
        if(errorObject){
            this.$app.objectUtils(errorObject, "delete", zcatProp.key);
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

    };
  }

  static actions() {
    return {};
  }
  
}

export { ZcatFileupload };
