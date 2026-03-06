( function( factory ) {
	if( typeof define === "function" && define.amd ) {
        define( [ "@zoho/lyte-dom" ], factory );
    }
    else {
        factory( $L );
    }
} )( function( $L ) {
if($L){
  $L.prototype.trapFocus = function(arg){
    var preventdefault = false
    if(arg && arg.preventDefault){
      preventdefault = arg.preventDefault
    }
    var forLytePopups = false
    if(arg && arg.forLytePopups){
      forLytePopups = arg.forLytePopups
    }

    if((window._lyteUiUtils.trappingFocus)&&($L("#"+window._lyteUiUtils.focusParent)[0])){
      $L(this[0]).data('trapFocusActiveIndex' , 0)
      window._lyteUiUtils.removeEventListenerGlobal('keydown' , window._lyteUiUtils.trapFocusFun)
      $L("#"+window._lyteUiUtils.focusParent)[0].removeEventListener('keydown' , window._lyteUiUtils.trapFocusFun)
      window._lyteUiUtils.trappingFocus = false
      window._lyteUiUtils.focusParent = "";
    }
    var parent = this[0];
    if(arg === 'destroy' || arg === "Destroy"){
      $L(this[0]).data('trapFocusActiveIndex' , 0)
      window._lyteUiUtils.removeEventListenerGlobal('keydown' , window._lyteUiUtils.trapFocusFun)
      $L(parent)[0].removeEventListener('keydown' , window._lyteUiUtils.trapFocusFun)
      window._lyteUiUtils.trappingFocus = false
      window._lyteUiUtils.focusParent = "";
      window._lyteUiUtils.addEventListenerGlobal('keydown',LytePopup.onEscape,true);
      return;
    }
    window._lyteUiUtils.removeEventListenerGlobal('keydown',LytePopup.onEscape,true);

    var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), *[contenteditable]';
    

    var iniFocusableItems = [];
    iniFocusableItems = $L(parent).find(focusableElementsString).filter(function(ind, item){
      return $L(item).is(':visible') && (item.tabIndex != -1) && !(item.disabled)
    })
    if(iniFocusableItems.length < 1){
      if(!$L(this).attr('tabindex')){
        $L(this).attr('tabindex' , 0)
      }
      iniFocusableItems.push($L(this)[0])
    }
    if(iniFocusableItems.indexOf(document.activeElement) < 0){
      if($L(iniFocusableItems[0]).hasClass('lyteModalClose')){
        if(iniFocusableItems[1]){
          iniFocusableItems[1].focus()
        }
      } else {
        if(arg && arg.focusTarget && $L(arg.focusTarget)[0]){
          iniFocusableItems[iniFocusableItems.indexOf($L(arg.focusTarget)[0])].focus()
        } else {
          iniFocusableItems[0].focus()
        }
      }
    }

    if(forLytePopups){
      window._lyteUiUtils.trapFocusFun = function(evt){
  
        window._lyteUiUtils.trappingFocus = true
        window._lyteUiUtils.focusParent = $L(parent).attr('id');

        if(window._lyteUiUtils.popupStack && window._lyteUiUtils.popupStack.globalStack && window._lyteUiUtils.popupStack.globalStack.length < 1){
          return
        }

        var lastPopup = window._lyteUiUtils.popupStack.betaModalStack[window._lyteUiUtils.popupStack.globalStack.length - 1]
        if(lastPopup.parentElement.tagName === 'LYTE-BETA-MODAL' || lastPopup.parentElement.tagName ===  'LYTE-BETA-POPOVER'){
          var parent = window._lyteUiUtils.popupStack.betaModalStack[window._lyteUiUtils.popupStack.globalStack.length - 1].childElement
        } else {
          return
        }

        var focusableItems;
        focusableItems = $L(parent).find(focusableElementsString).filter(function(ind, item){
          return $L(item).is(':visible') && (item.tabIndex != -1) && !(item.disabled)
        })

        if(focusableItems.length < 1){
          focusableItems.push($L(parent)[0])
        }

        if((evt.keyCode === 9) || (evt.keyCode === 9 && evt.shiftKey)){
          if(focusableItems.indexOf(document.activeElement) < 0){
            focusableItems[0].focus()
          }
          if(focusableItems.length == 0){
              return;
          }

          var focusedItem = document.activeElement;
          var focusedParent;

          if(!(parent.contains(focusedItem))){
            focusedParent = $L(focusedItem).closest('lyte-drop-box')[0]
            if(focusedParent){
              focusedParent = focusedParent.origindd
            }
            if(!(parent.contains(focusedParent))){
              LytePopup.initializeFocus(parent);
              evt && evt.preventDefault();
              return;
            }
          }

          var numberOfFocusableItems = focusableItems.length;

          var focusedItemIndex;
          for(var i = 0; i < focusableItems.length; i++){
              if(focusableItems[i] == focusedItem){
                  focusedItemIndex = i;
                  break;
              }
          }

          if (evt.shiftKey && evt.keyCode == 9) {
              if (focusedItemIndex == 0) {
                  focusableItems.get(numberOfFocusableItems - 1).focus();
                  evt.preventDefault();
              }

          } else if(evt.keyCode == 9){
              if (focusedItemIndex == numberOfFocusableItems-1) {
                  focusableItems.get(0).focus();
                  evt.preventDefault();
              }
          }
        }
      }

      _lyteUiUtils.addEventListenerGlobal('keydown' , window._lyteUiUtils.trapFocusFun)
    } else {
      if(!preventdefault){

        window._lyteUiUtils.trapFocusFun = function(evt){
  
          window._lyteUiUtils.trappingFocus = true
          window._lyteUiUtils.focusParent = $L(parent).attr('id');
  
          var focusableItems;
          focusableItems = $L(parent).find(focusableElementsString).filter(function(ind, item){
            return $L(item).is(':visible') && (item.tabIndex != -1) && !(item.disabled)
          })
  
          if(focusableItems.length < 1){
            focusableItems.push($L(parent)[0])
          }
  
          if((evt.keyCode === 9) || (evt.keyCode === 9 && evt.shiftKey)){
            if(focusableItems.indexOf(document.activeElement) < 0){
              focusableItems[0].focus()
            }
            if(focusableItems.length == 0){
                return;
            }
  
            var focusedItem = document.activeElement;
            var focusedParent;
  
            if(!(parent.contains(focusedItem))){
              focusedParent = $L(focusedItem).closest('lyte-drop-box')[0]
              if(focusedParent){
                focusedParent = focusedParent.origindd
              }
              if(!(parent.contains(focusedParent))){
                LytePopup.initializeFocus(parent);
                evt && evt.preventDefault();
                return;
              }
            }
  
            var numberOfFocusableItems = focusableItems.length;
  
            var focusedItemIndex;
            for(var i = 0; i < focusableItems.length; i++){
                if(focusableItems[i] == focusedItem){
                    focusedItemIndex = i;
                    break;
                }
            }
  
            if (evt.shiftKey && evt.keyCode == 9) {
                if (focusedItemIndex == 0) {
                    focusableItems.get(numberOfFocusableItems - 1).focus();
                    evt.preventDefault();
                }
  
            } else if(evt.keyCode == 9){
                if (focusedItemIndex == numberOfFocusableItems-1) {
                    focusableItems.get(0).focus();
                    evt.preventDefault();
                }
            }
          }
        }
  
        _lyteUiUtils.addEventListenerGlobal('keydown' , window._lyteUiUtils.trapFocusFun)
  
  
      } else {
  
        $L(parent).data('trapFocusActiveIndex' , 0)
  
        window._lyteUiUtils.trapFocusFun = function(evt){
  
          var index = $L(parent).data('trapFocusActiveIndex')
          var focusableItems;
          focusableItems = $L(parent).find(focusableElementsString).filter(function(ind, item){
            return $L(item).is(':visible') && (item.tabIndex != -1) && !(item.disabled)
          }).toArray()
  
          if(arg && arg.attachItems){
            var attachItemsString = arg.attachItems.join(',')
            var attachItemArr = $L(attachItemsString).toArray()
            for(var i=0;i<attachItemArr.length;i++){
              focusableItems.push(attachItemArr[i])
            }
          }
  
          if(focusableItems.indexOf(document.activeElement) !== index){
            index = focusableItems.indexOf(document.activeElement)
            $L(parent).data('trapFocusActiveIndex' , index)
          }
  
          if (evt.shiftKey && evt.keyCode == 9) {
            index -=1
            if(index < 0){
              index = focusableItems.length - 1
            }
            focusableItems[index].focus()
            evt.preventDefault()
            $L(parent).data('trapFocusActiveIndex' , index)
          } else if(evt.keyCode == 9){
            index +=1
            if(index > focusableItems.length-1){
              index = 0
            }
            focusableItems[index].focus()
            evt.preventDefault()
            $L(parent).data('trapFocusActiveIndex' , index)
          }
  
        }
  
        window._lyteUiUtils.addEventListenerGlobal('keydown' , window._lyteUiUtils.trapFocusFun)
  
      }
    }

  }
}

} );