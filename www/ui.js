mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mathJAX');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root9642 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2945 = $("<span>");
  root9642.append(node2945);
  var condSubs750 = new mobl.CompSubscription();
  subs__.addSub(condSubs750);
  var oldValue750;
  var renderCond750 = function() {
    var value1670 = value.get();
    if(oldValue750 === value1670) return;
    oldValue750 = value1670;
    var subs__ = condSubs750;
    subs__.unsubscribe();
    node2945.empty();
    if(value1670) {
      var nodes7654 = $("<span>");
      node2945.append(nodes7654);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl1207();
      }));
      
      function renderControl1207() {
        subs__.addSub((elements)(function(elements, callback) {
          var root9643 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9643); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7654;
          nodes7654 = node.contents();
          oldNodes.replaceWith(nodes7654);
        }));
      }
      renderControl1207();
      
      
    } else {
      var nodes7655 = $("<span>");
      node2945.append(nodes7655);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9644 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes7656 = $("<span>");
        root9644.append(nodes7656);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root9645 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9645); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7656;
          nodes7656 = node.contents();
          oldNodes.replaceWith(nodes7656);
        }));
        var nodes7657 = $("<span>");
        root9644.append(nodes7657);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root9646 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9646); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7657;
          nodes7657 = node.contents();
          oldNodes.replaceWith(nodes7657);
        }));
        callback(root9644); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7655;
        nodes7655 = node.contents();
        oldNodes.replaceWith(nodes7655);
      }));
      
      
    }
  };
  renderCond750();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond750();
  }));
  
  callback(root9642); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root9647 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2946 = $("<div>");
  
  var ref2754 = mobl.ref(ui.headerStyle);
  if(ref2754.get() !== null) {
    node2946.attr('class', ref2754.get());
    subs__.addSub(ref2754.addEventListener('change', function(_, ref, val) {
      node2946.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2754.rebind());
  
  var val1396 = onclick.get();
  if(val1396 !== null) {
    subs__.addSub(mobl.domBind(node2946, 'tap', val1396));
  }
  
  var ref2755 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref2755.get() !== null) {
    node2946.attr('style', ref2755.get());
    subs__.addSub(ref2755.addEventListener('change', function(_, ref, val) {
      node2946.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node2946.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref2755.rebind());
  
  
  var node2949 = $("<div>");
  
  var ref2753 = mobl.ref(ui.headerContainerStyle);
  if(ref2753.get() !== null) {
    node2949.attr('class', ref2753.get());
    subs__.addSub(ref2753.addEventListener('change', function(_, ref, val) {
      node2949.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2753.rebind());
  
  
  var node2950 = $("<div>");
  
  var ref2751 = text;
  node2950.text(""+ref2751.get());
  var ignore542 = false;
  subs__.addSub(ref2751.addEventListener('change', function(_, ref, val) {
    if(ignore542) return;
    node2950.text(""+val);
  }));
  subs__.addSub(ref2751.rebind());
  
  
  var ref2752 = mobl.ref(ui.headerTextStyle);
  if(ref2752.get() !== null) {
    node2950.attr('class', ref2752.get());
    subs__.addSub(ref2752.addEventListener('change', function(_, ref, val) {
      node2950.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2752.rebind());
  
  node2949.append(node2950);
  node2946.append(node2949);
  var nodes7658 = $("<span>");
  node2946.append(nodes7658);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1208();
  }));
  
  function renderControl1208() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9648 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9648); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7658;
      nodes7658 = node.contents();
      oldNodes.replaceWith(nodes7658);
    }));
  }
  renderControl1208();
  root9647.append(node2946);
  
  var node2947 = $("<span>");
  root9647.append(node2947);
  var condSubs751 = new mobl.CompSubscription();
  subs__.addSub(condSubs751);
  var oldValue751;
  var renderCond751 = function() {
    var value1671 = fixedPosition.get();
    if(oldValue751 === value1671) return;
    oldValue751 = value1671;
    var subs__ = condSubs751;
    subs__.unsubscribe();
    node2947.empty();
    if(value1671) {
      
      var node2948 = $("<div>");
      node2948.attr('id', "hello");
      node2948.attr('style', "height: 2.9em;");
      
      node2947.append(node2948);
      
      
    } else {
      
    }
  };
  renderCond751();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond751();
  }));
  
  callback(root9647); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root9649 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref2756 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref2756.get() !== null) {
    sp.attr('class', ref2756.get());
    subs__.addSub(ref2756.addEventListener('change', function(_, ref, val) {
      sp.attr('class', val);
    }));
    subs__.addSub(pushed.addEventListener('change', function() {
      sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
    }));
    subs__.addSub(pushedStyle.addEventListener('change', function() {
      sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
    }));
    subs__.addSub(style.addEventListener('change', function() {
      sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
    }));
    
  }
  subs__.addSub(ref2756.rebind());
  
  var val1397 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val1397 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val1397));
  }
  
  var val1398 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.y < 0 || event.y > sp.outerHeight() || event.x < 0 || event.x > sp.outerWidth();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  if(callback && callback.apply) callback(); return;
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1398 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val1398));
  }
  
  var val1399 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after423(result__) {
                    var tmp7381 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after423);if(result__ !== undefined) after423(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1399 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val1399));
  }
  
  var val1400 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  if(callback && callback.apply) callback(); return;
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1400 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val1400));
  }
  
  var ref2757 = text;
  sp.text(""+ref2757.get());
  var ignore543 = false;
  subs__.addSub(ref2757.addEventListener('change', function(_, ref, val) {
    if(ignore543) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref2757.rebind());
  
  
  root9649.append(sp);
  callback(root9649); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root9650 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7659 = $("<span>");
  root9650.append(nodes7659);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root9651 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9651); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7659;
    nodes7659 = node.contents();
    oldNodes.replaceWith(nodes7659);
  }));
  callback(root9650); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root9652 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7660 = $("<span>");
  root9652.append(nodes7660);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root9653 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9653); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7660;
    nodes7660 = node.contents();
    oldNodes.replaceWith(nodes7660);
  }));
  callback(root9652); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root9654 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2951 = $("<ul>");
  
  var ref2758 = mobl.ref(ui.groupStyle);
  if(ref2758.get() !== null) {
    node2951.attr('class', ref2758.get());
    subs__.addSub(ref2758.addEventListener('change', function(_, ref, val) {
      node2951.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2758.rebind());
  
  var nodes7661 = $("<span>");
  node2951.append(nodes7661);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1209();
  }));
  
  function renderControl1209() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9655 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9655); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7661;
      nodes7661 = node.contents();
      oldNodes.replaceWith(nodes7661);
    }));
  }
  renderControl1209();
  root9654.append(node2951);
  callback(root9654); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root9656 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2952 = $("<img>");
  
  var ref2759 = url;
  if(ref2759.get() !== null) {
    node2952.attr('src', ref2759.get());
    subs__.addSub(ref2759.addEventListener('change', function(_, ref, val) {
      node2952.attr('src', val);
    }));
    
  }
  subs__.addSub(ref2759.rebind());
  
  var ref2760 = width;
  if(ref2760.get() !== null) {
    node2952.attr('width', ref2760.get());
    subs__.addSub(ref2760.addEventListener('change', function(_, ref, val) {
      node2952.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2760.rebind());
  
  var ref2761 = height;
  if(ref2761.get() !== null) {
    node2952.attr('height', ref2761.get());
    subs__.addSub(ref2761.addEventListener('change', function(_, ref, val) {
      node2952.attr('height', val);
    }));
    
  }
  subs__.addSub(ref2761.rebind());
  
  var ref2762 = style;
  if(ref2762.get() !== null) {
    node2952.attr('class', ref2762.get());
    subs__.addSub(ref2762.addEventListener('change', function(_, ref, val) {
      node2952.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2762.rebind());
  
  var val1401 = onclick.get();
  if(val1401 !== null) {
    subs__.addSub(mobl.domBind(node2952, 'tap', val1401));
  }
  
  var ref2763 = valign;
  if(ref2763.get() !== null) {
    node2952.attr('valign', ref2763.get());
    subs__.addSub(ref2763.addEventListener('change', function(_, ref, val) {
      node2952.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref2763.rebind());
  
  var ref2764 = align;
  if(ref2764.get() !== null) {
    node2952.attr('align', ref2764.get());
    subs__.addSub(ref2764.addEventListener('change', function(_, ref, val) {
      node2952.attr('align', val);
    }));
    
  }
  subs__.addSub(ref2764.rebind());
  
  root9656.append(node2952);
  callback(root9656); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root9657 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref2765 = mobl.ref(ui.itemStyle);
  if(ref2765.get() !== null) {
    el.attr('class', ref2765.get());
    subs__.addSub(ref2765.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2765.rebind());
  
  var ref2766 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref2766.get() !== null) {
    el.attr('class', ref2766.get());
    subs__.addSub(ref2766.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    subs__.addSub(onclick.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(hideArrow.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(mobl.ref(ui.itemArrowStyle).addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(pushed.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(pushedStyle.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(style.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    
  }
  subs__.addSub(ref2766.rebind());
  
  var val1402 = onswipe.get();
  if(val1402 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val1402));
  }
  
  var val1403 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp7382 = result__;
                                           function after424(result__) {
                                             var tmp7383 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after424);if(result__ !== undefined) after424(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp7384 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val1403 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val1403));
  }
  
  var nodes7662 = $("<span>");
  el.append(nodes7662);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1210();
  }));
  
  function renderControl1210() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9658 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9658); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7662;
      nodes7662 = node.contents();
      oldNodes.replaceWith(nodes7662);
    }));
  }
  renderControl1210();
  root9657.append(el);
  callback(root9657); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root9659 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2953 = $("<input>");
  node2953.attr('type', "checkbox");
  
  var ref2768 = b;
  node2953.attr('checked', !!ref2768.get());
  subs__.addSub(ref2768.addEventListener('change', function(_, ref, val) {
    if(ref === ref2768) node2953.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node2953, 'change', function() {
    b.set(!!node2953.attr('checked'));
  }));
  
  var val1405 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val1405 !== null) {
    subs__.addSub(mobl.domBind(node2953, 'tap', val1405));
  }
  
  var val1406 = onchange.get();
  if(val1406 !== null) {
    subs__.addSub(mobl.domBind(node2953, 'change', val1406));
  }
  
  root9659.append(node2953);
  
  root9659.append(" ");
  
  var node2954 = $("<span>");
  
  var ref2767 = label;
  node2954.text(""+ref2767.get());
  var ignore544 = false;
  subs__.addSub(ref2767.addEventListener('change', function(_, ref, val) {
    if(ignore544) return;
    node2954.text(""+val);
  }));
  subs__.addSub(ref2767.rebind());
  
  
  var val1404 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after425(result__) {
                    var tmp7385 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after425);if(result__ !== undefined) after425(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1404 !== null) {
    subs__.addSub(mobl.domBind(node2954, 'tap', val1404));
  }
  
  root9659.append(node2954);
  callback(root9659); return subs__;
  
  
  return subs__;
};
ui.textFieldStyle = 'ui__textFieldStyle';
ui.textFieldInvalidStyle = 'ui__textFieldInvalidStyle';
ui.textFieldLabelStyle = 'ui__textFieldLabelStyle';
ui.validationMessageStyle = 'ui__validationMessageStyle';
ui.alwaysOkValidator = function(s) {
   var __this = this;
  return "";
};


ui.textField = function(s, placeholder, label, inputType, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root9660 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2955 = $("<span>");
  root9660.append(node2955);
  var condSubs752 = new mobl.CompSubscription();
  subs__.addSub(condSubs752);
  var oldValue752;
  var renderCond752 = function() {
    var value1672 = label.get();
    if(oldValue752 === value1672) return;
    oldValue752 = value1672;
    var subs__ = condSubs752;
    subs__.unsubscribe();
    node2955.empty();
    if(value1672) {
      var nodes7663 = $("<span>");
      node2955.append(nodes7663);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root9661 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9661); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7663;
        nodes7663 = node.contents();
        oldNodes.replaceWith(nodes7663);
      }));
      
      
    } else {
      
    }
  };
  renderCond752();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond752();
  }));
  
  
  var node2956 = $("<span>");
  root9660.append(node2956);
  var condSubs753 = new mobl.CompSubscription();
  subs__.addSub(condSubs753);
  var oldValue753;
  var renderCond753 = function() {
    var value1673 = validator.get();
    if(oldValue753 === value1673) return;
    oldValue753 = value1673;
    var subs__ = condSubs753;
    subs__.unsubscribe();
    node2956.empty();
    if(value1673) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after429(result__) {
        var tmp7386 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp7387 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node2957 = $("<input>");
        
        var ref2769 = inputType;
        if(ref2769.get() !== null) {
          node2957.attr('type', ref2769.get());
          subs__.addSub(ref2769.addEventListener('change', function(_, ref, val) {
            node2957.attr('type', val);
          }));
          
        }
        subs__.addSub(ref2769.rebind());
        
        var ref2770 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref2770.get() !== null) {
          node2957.attr('class', ref2770.get());
          subs__.addSub(ref2770.addEventListener('change', function(_, ref, val) {
            node2957.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node2957.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node2957.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node2957.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref2770.rebind());
        
        var ref2771 = placeholder;
        if(ref2771.get() !== null) {
          node2957.attr('placeholder', ref2771.get());
          subs__.addSub(ref2771.addEventListener('change', function(_, ref, val) {
            node2957.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref2771.rebind());
        
        var ref2772 = temp;
        node2957.val(""+ref2772.get());
        var ignore545 = false;
        subs__.addSub(ref2772.addEventListener('change', function(_, ref, val) {
          if(ignore545) return;
          node2957.val(""+val);
        }));
        subs__.addSub(ref2772.rebind());
        
        subs__.addSub(mobl.domBind(node2957, 'keyup change', function() {
          ignore545 = true;
          temp.set(mobl.stringTomobl__String(node2957.val()));
          ignore545 = false;
        }));
        
        
        var val1407 = onchange.get();
        if(val1407 !== null) {
          subs__.addSub(mobl.domBind(node2957, 'change', val1407));
        }
        
        var val1408 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after426(result__) {
                          var tmp7388 = result__;
                          function after427(result__) {
                            var tmp7389 = result__;
                            var result__ = tmp7389;
                            validationMessage.set(result__);
                            var result__ = !validationMessage.get();
                            if(result__) {
                              var result__ = temp.get();
                              s.set(result__);
                              var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                              if(callback && callback.apply) callback(); return;
                            } else {
                              {
                                var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                                if(callback && callback.apply) callback(); return;
                              }
                            }
                          }
                          var result__ = validator.get()(temp.get(), after427);if(result__ !== undefined) after427(result__);
                        }
                        var result__ = onkeyup.get()(event, after426);if(result__ !== undefined) after426(result__);
                      } else {
                        {
                          function after428(result__) {
                            var tmp7389 = result__;
                            var result__ = tmp7389;
                            validationMessage.set(result__);
                            var result__ = !validationMessage.get();
                            if(result__) {
                              var result__ = temp.get();
                              s.set(result__);
                              var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                              if(callback && callback.apply) callback(); return;
                            } else {
                              {
                                var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                                if(callback && callback.apply) callback(); return;
                              }
                            }
                          }
                          var result__ = validator.get()(temp.get(), after428);if(result__ !== undefined) after428(result__);
                        }
                      }
                    };
        if(val1408 !== null) {
          subs__.addSub(mobl.domBind(node2957, 'keyup', val1408));
        }
        
        var val1409 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1409 !== null) {
          subs__.addSub(mobl.domBind(node2957, 'blur', val1409));
        }
        
        node2956.append(node2957);
        var nodes7664 = $("<span>");
        node2956.append(nodes7664);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root9662 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9662); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7664;
          nodes7664 = node.contents();
          oldNodes.replaceWith(nodes7664);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after429);if(result__ !== undefined) after429(result__);
    } else {
      
      var node2958 = $("<input>");
      
      var ref2773 = inputType;
      if(ref2773.get() !== null) {
        node2958.attr('type', ref2773.get());
        subs__.addSub(ref2773.addEventListener('change', function(_, ref, val) {
          node2958.attr('type', val);
        }));
        
      }
      subs__.addSub(ref2773.rebind());
      
      var ref2774 = style;
      if(ref2774.get() !== null) {
        node2958.attr('class', ref2774.get());
        subs__.addSub(ref2774.addEventListener('change', function(_, ref, val) {
          node2958.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2774.rebind());
      
      var ref2775 = placeholder;
      if(ref2775.get() !== null) {
        node2958.attr('placeholder', ref2775.get());
        subs__.addSub(ref2775.addEventListener('change', function(_, ref, val) {
          node2958.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2775.rebind());
      
      var ref2776 = s;
      node2958.val(""+ref2776.get());
      var ignore546 = false;
      subs__.addSub(ref2776.addEventListener('change', function(_, ref, val) {
        if(ignore546) return;
        node2958.val(""+val);
      }));
      subs__.addSub(ref2776.rebind());
      
      subs__.addSub(mobl.domBind(node2958, 'keyup change', function() {
        ignore546 = true;
        s.set(mobl.stringTomobl__String(node2958.val()));
        ignore546 = false;
      }));
      
      
      var val1410 = onchange.get();
      if(val1410 !== null) {
        subs__.addSub(mobl.domBind(node2958, 'change', val1410));
      }
      
      var val1411 = onkeyup.get();
      if(val1411 !== null) {
        subs__.addSub(mobl.domBind(node2958, 'keyup', val1411));
      }
      
      var val1412 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1412 !== null) {
        subs__.addSub(mobl.domBind(node2958, 'blur', val1412));
      }
      
      node2956.append(node2958);
      
      
    }
  };
  renderCond753();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond753();
  }));
  
  callback(root9660); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root9663 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7665 = $("<span>");
  root9663.append(nodes7665);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root9664 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9664); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7665;
    nodes7665 = node.contents();
    oldNodes.replaceWith(nodes7665);
  }));
  callback(root9663); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root9665 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7666 = $("<span>");
  root9665.append(nodes7666);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root9666 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9666); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7666;
    nodes7666 = node.contents();
    oldNodes.replaceWith(nodes7666);
  }));
  callback(root9665); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root9667 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2959 = $("<span>");
  root9667.append(node2959);
  var condSubs754 = new mobl.CompSubscription();
  subs__.addSub(condSubs754);
  var oldValue754;
  var renderCond754 = function() {
    var value1674 = label.get();
    if(oldValue754 === value1674) return;
    oldValue754 = value1674;
    var subs__ = condSubs754;
    subs__.unsubscribe();
    node2959.empty();
    if(value1674) {
      var nodes7667 = $("<span>");
      node2959.append(nodes7667);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root9668 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9668); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7667;
        nodes7667 = node.contents();
        oldNodes.replaceWith(nodes7667);
      }));
      
      
    } else {
      
    }
  };
  renderCond754();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond754();
  }));
  
  
  var node2960 = $("<input>");
  node2960.attr('type', "range");
  
  var ref2777 = n;
  node2960.val(""+ref2777.get());
  var ignore547 = false;
  subs__.addSub(ref2777.addEventListener('change', function(_, ref, val) {
    if(ignore547) return;
    node2960.val(""+val);
  }));
  subs__.addSub(ref2777.rebind());
  
  subs__.addSub(mobl.domBind(node2960, 'keyup change', function() {
    ignore547 = true;
    n.set(mobl.stringTomobl__Num(node2960.val()));
    ignore547 = false;
  }));
  
  
  var ref2778 = min;
  if(ref2778.get() !== null) {
    node2960.attr('min', ref2778.get());
    subs__.addSub(ref2778.addEventListener('change', function(_, ref, val) {
      node2960.attr('min', val);
    }));
    
  }
  subs__.addSub(ref2778.rebind());
  
  var ref2779 = max;
  if(ref2779.get() !== null) {
    node2960.attr('max', ref2779.get());
    subs__.addSub(ref2779.addEventListener('change', function(_, ref, val) {
      node2960.attr('max', val);
    }));
    
  }
  subs__.addSub(ref2779.rebind());
  
  var ref2780 = step;
  if(ref2780.get() !== null) {
    node2960.attr('step', ref2780.get());
    subs__.addSub(ref2780.addEventListener('change', function(_, ref, val) {
      node2960.attr('step', val);
    }));
    
  }
  subs__.addSub(ref2780.rebind());
  node2960.attr('style', "width: 99%;");
  
  var val1413 = onchange.get();
  if(val1413 !== null) {
    subs__.addSub(mobl.domBind(node2960, 'change', val1413));
  }
  
  var val1414 = onkeyup.get();
  if(val1414 !== null) {
    subs__.addSub(mobl.domBind(node2960, 'keyup', val1414));
  }
  
  var ref2781 = placeholder;
  if(ref2781.get() !== null) {
    node2960.attr('placeholder', ref2781.get());
    subs__.addSub(ref2781.addEventListener('change', function(_, ref, val) {
      node2960.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref2781.rebind());
  
  root9667.append(node2960);
  callback(root9667); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root9669 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after430(result__) {
      var tmp7390 = result__;
      var result__ = tmp7390;
      var m = result__;
      var result__ = !m;
      if(result__) {
        var result__ = n2;
        n.set(result__);
        var result__ = m;
        if(callback && callback.apply) callback(result__);
        return;
        if(callback && callback.apply) callback(); return;
      } else {
        {
          var result__ = m;
          if(callback && callback.apply) callback(result__);
          return;
          if(callback && callback.apply) callback(); return;
        }
      }
    }
    var result__ = validator.get()(n2, after430);if(result__ !== undefined) after430(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes7668 = $("<span>");
  root9669.append(nodes7668);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root9670 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9670); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7668;
    nodes7668 = node.contents();
    oldNodes.replaceWith(nodes7668);
  }));
  callback(root9669); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root9671 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2961 = $("<span>");
  root9671.append(node2961);
  var condSubs755 = new mobl.CompSubscription();
  subs__.addSub(condSubs755);
  var oldValue755;
  var renderCond755 = function() {
    var value1675 = label.get();
    if(oldValue755 === value1675) return;
    oldValue755 = value1675;
    var subs__ = condSubs755;
    subs__.unsubscribe();
    node2961.empty();
    if(value1675) {
      
      var node2962 = $("<span>");
      node2962.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref2785 = label;
      node2962.text(""+ref2785.get());
      var ignore549 = false;
      subs__.addSub(ref2785.addEventListener('change', function(_, ref, val) {
        if(ignore549) return;
        node2962.text(""+val);
      }));
      subs__.addSub(ref2785.rebind());
      
      
      node2961.append(node2962);
      
      var node2963 = $("<span>");
      node2963.attr('style', "float: left");
      
      
      var node2964 = $("<input>");
      node2964.attr('type', "password");
      
      var ref2782 = style;
      if(ref2782.get() !== null) {
        node2964.attr('class', ref2782.get());
        subs__.addSub(ref2782.addEventListener('change', function(_, ref, val) {
          node2964.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2782.rebind());
      
      var ref2783 = placeholder;
      if(ref2783.get() !== null) {
        node2964.attr('placeholder', ref2783.get());
        subs__.addSub(ref2783.addEventListener('change', function(_, ref, val) {
          node2964.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2783.rebind());
      
      var ref2784 = s;
      node2964.val(""+ref2784.get());
      var ignore548 = false;
      subs__.addSub(ref2784.addEventListener('change', function(_, ref, val) {
        if(ignore548) return;
        node2964.val(""+val);
      }));
      subs__.addSub(ref2784.rebind());
      
      subs__.addSub(mobl.domBind(node2964, 'keyup change', function() {
        ignore548 = true;
        s.set(mobl.stringTomobl__String(node2964.val()));
        ignore548 = false;
      }));
      
      
      var val1415 = onchange.get();
      if(val1415 !== null) {
        subs__.addSub(mobl.domBind(node2964, 'change', val1415));
      }
      
      var val1416 = onkeyup.get();
      if(val1416 !== null) {
        subs__.addSub(mobl.domBind(node2964, 'keyup', val1416));
      }
      
      var val1417 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1417 !== null) {
        subs__.addSub(mobl.domBind(node2964, 'blur', val1417));
      }
      
      node2963.append(node2964);
      node2961.append(node2963);
      
      
      
      
    } else {
      
      var node2965 = $("<input>");
      node2965.attr('type', "password");
      
      var ref2786 = style;
      if(ref2786.get() !== null) {
        node2965.attr('class', ref2786.get());
        subs__.addSub(ref2786.addEventListener('change', function(_, ref, val) {
          node2965.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2786.rebind());
      
      var ref2787 = placeholder;
      if(ref2787.get() !== null) {
        node2965.attr('placeholder', ref2787.get());
        subs__.addSub(ref2787.addEventListener('change', function(_, ref, val) {
          node2965.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2787.rebind());
      
      var ref2788 = s;
      node2965.val(""+ref2788.get());
      var ignore550 = false;
      subs__.addSub(ref2788.addEventListener('change', function(_, ref, val) {
        if(ignore550) return;
        node2965.val(""+val);
      }));
      subs__.addSub(ref2788.rebind());
      
      subs__.addSub(mobl.domBind(node2965, 'keyup change', function() {
        ignore550 = true;
        s.set(mobl.stringTomobl__String(node2965.val()));
        ignore550 = false;
      }));
      
      
      var val1418 = onchange.get();
      if(val1418 !== null) {
        subs__.addSub(mobl.domBind(node2965, 'change', val1418));
      }
      
      var val1419 = onkeyup.get();
      if(val1419 !== null) {
        subs__.addSub(mobl.domBind(node2965, 'keyup', val1419));
      }
      
      var val1420 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1420 !== null) {
        subs__.addSub(mobl.domBind(node2965, 'blur', val1420));
      }
      
      node2961.append(node2965);
      
      
    }
  };
  renderCond755();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond755();
  }));
  
  callback(root9671); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root9672 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref2793 = style;
  if(ref2793.get() !== null) {
    sel.attr('class', ref2793.get());
    subs__.addSub(ref2793.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2793.rebind());
  
  var val1421 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after431(result__) {
                    var tmp7392 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after431);if(result__ !== undefined) after431(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1421 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val1421));
  }
  
  
  var node2966 = mobl.loadingSpan();
  sel.append(node2966);
  var list517;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList517 = function() {
    var subs__ = listSubs__;
    list517 = options.get();
    list517.list(function(results517) {
      node2966.empty();
      for(var i1264 = 0; i1264 < results517.length; i1264++) {
        (function() {
          var iternode517 = $("<span>");
          node2966.append(iternode517);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results517), i1264), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results517), i1264), "_2");
          
          var node2967 = $("<option>");
          
          var ref2789 = optionDescription;
          node2967.text(""+ref2789.get());
          var ignore551 = false;
          subs__.addSub(ref2789.addEventListener('change', function(_, ref, val) {
            if(ignore551) return;
            node2967.text(""+val);
          }));
          subs__.addSub(ref2789.rebind());
          
          
          var ref2790 = optionStyle;
          if(ref2790.get() !== null) {
            node2967.attr('class', ref2790.get());
            subs__.addSub(ref2790.addEventListener('change', function(_, ref, val) {
              node2967.attr('class', val);
            }));
            
          }
          subs__.addSub(ref2790.rebind());
          
          var ref2791 = optionValue;
          if(ref2791.get() !== null) {
            node2967.attr('value', ref2791.get());
            subs__.addSub(ref2791.addEventListener('change', function(_, ref, val) {
              node2967.attr('value', val);
            }));
            
          }
          subs__.addSub(ref2791.rebind());
          
          var ref2792 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref2792.get() !== null) {
            node2967.attr('selected', ref2792.get());
            subs__.addSub(ref2792.addEventListener('change', function(_, ref, val) {
              node2967.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node2967.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node2967.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref2792.rebind());
          
          iternode517.append(node2967);
          
          var oldNodes = iternode517;
          iternode517 = iternode517.contents();
          oldNodes.replaceWith(iternode517);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list517.addEventListener('change', function() { listSubs__.unsubscribe(); renderList517(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList517(true); }));
    });
  };
  renderList517();
  
  root9672.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root9672); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root9673 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes7669 = $("<span>");
    root9673.append(nodes7669);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root9674 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node2968 = mobl.loadingSpan();
      root9674.append(node2968);
      var list518;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList518 = function() {
        var subs__ = listSubs__;
        list518 = tabs.get();
        list518.list(function(results518) {
          node2968.empty();
          for(var i1265 = 0; i1265 < results518.length; i1265++) {
            (function() {
              var iternode518 = $("<span>");
              node2968.append(iternode518);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results518), i1265), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results518), i1265), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results518), i1265), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp7348 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp7348.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp7348.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp7348.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp7348.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp7347 = mobl.ref(result__);
              
              var nodes7670 = $("<span>");
              iternode518.append(nodes7670);
              subs__.addSub((mobl.span)(tmp7348, mobl.ref(null), tmp7347, mobl.ref(null), function(_, callback) {
                var root9675 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes7671 = $("<span>");
                root9675.append(nodes7671);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root9676 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root9676); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7671;
                  nodes7671 = node.contents();
                  oldNodes.replaceWith(nodes7671);
                }));
                callback(root9675); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7670;
                nodes7670 = node.contents();
                oldNodes.replaceWith(nodes7670);
              }));
              
              var oldNodes = iternode518;
              iternode518 = iternode518.contents();
              oldNodes.replaceWith(iternode518);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list518.addEventListener('change', function() { listSubs__.unsubscribe(); renderList518(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList518(true); }));
        });
      };
      renderList518();
      
      callback(root9674); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7669;
      nodes7669 = node.contents();
      oldNodes.replaceWith(nodes7669);
    }));
    
    var node2969 = mobl.loadingSpan();
    root9673.append(node2969);
    var list519;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList519 = function() {
      var subs__ = listSubs__;
      list519 = tabs.get();
      list519.list(function(results519) {
        node2969.empty();
        for(var i1266 = 0; i1266 < results519.length; i1266++) {
          (function() {
            var iternode519 = $("<span>");
            node2969.append(iternode519);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results519), i1266), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results519), i1266), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results519), i1266), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp7349 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp7349.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp7349.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp7349.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp7349.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes7672 = $("<span>");
            iternode519.append(nodes7672);
            subs__.addSub((mobl.block)(tmp7349, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root9677 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7673 = $("<span>");
              root9677.append(nodes7673);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root9678 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes7674 = $("<span>");
                root9678.append(nodes7674);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl1211();
                }));
                
                function renderControl1211() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root9679 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root9679); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes7674;
                    nodes7674 = node.contents();
                    oldNodes.replaceWith(nodes7674);
                  }));
                }
                renderControl1211();
                callback(root9678); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7673;
                nodes7673 = node.contents();
                oldNodes.replaceWith(nodes7673);
              }));
              callback(root9677); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7672;
              nodes7672 = node.contents();
              oldNodes.replaceWith(nodes7672);
            }));
            
            var oldNodes = iternode519;
            iternode519 = iternode519.contents();
            oldNodes.replaceWith(iternode519);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list519.addEventListener('change', function() { listSubs__.unsubscribe(); renderList519(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList519(true); }));
      });
    };
    renderList519();
    
    callback(root9673); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes7669 = $("<span>");
      root9673.append(nodes7669);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9674 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2968 = mobl.loadingSpan();
        root9674.append(node2968);
        var list518;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList518 = function() {
          var subs__ = listSubs__;
          list518 = tabs.get();
          list518.list(function(results518) {
            node2968.empty();
            for(var i1265 = 0; i1265 < results518.length; i1265++) {
              (function() {
                var iternode518 = $("<span>");
                node2968.append(iternode518);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results518), i1265), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results518), i1265), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results518), i1265), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp7348 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp7348.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp7348.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp7348.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp7348.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp7347 = mobl.ref(result__);
                
                var nodes7670 = $("<span>");
                iternode518.append(nodes7670);
                subs__.addSub((mobl.span)(tmp7348, mobl.ref(null), tmp7347, mobl.ref(null), function(_, callback) {
                  var root9675 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7671 = $("<span>");
                  root9675.append(nodes7671);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root9676 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root9676); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes7671;
                    nodes7671 = node.contents();
                    oldNodes.replaceWith(nodes7671);
                  }));
                  callback(root9675); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7670;
                  nodes7670 = node.contents();
                  oldNodes.replaceWith(nodes7670);
                }));
                
                var oldNodes = iternode518;
                iternode518 = iternode518.contents();
                oldNodes.replaceWith(iternode518);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list518.addEventListener('change', function() { listSubs__.unsubscribe(); renderList518(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList518(true); }));
          });
        };
        renderList518();
        
        callback(root9674); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7669;
        nodes7669 = node.contents();
        oldNodes.replaceWith(nodes7669);
      }));
      
      var node2969 = mobl.loadingSpan();
      root9673.append(node2969);
      var list519;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList519 = function() {
        var subs__ = listSubs__;
        list519 = tabs.get();
        list519.list(function(results519) {
          node2969.empty();
          for(var i1266 = 0; i1266 < results519.length; i1266++) {
            (function() {
              var iternode519 = $("<span>");
              node2969.append(iternode519);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results519), i1266), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results519), i1266), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results519), i1266), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp7349 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp7349.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp7349.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp7349.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp7349.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes7672 = $("<span>");
              iternode519.append(nodes7672);
              subs__.addSub((mobl.block)(tmp7349, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root9677 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes7673 = $("<span>");
                root9677.append(nodes7673);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root9678 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7674 = $("<span>");
                  root9678.append(nodes7674);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl1211();
                  }));
                  
                  function renderControl1211() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root9679 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root9679); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7674;
                      nodes7674 = node.contents();
                      oldNodes.replaceWith(nodes7674);
                    }));
                  }
                  renderControl1211();
                  callback(root9678); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7673;
                  nodes7673 = node.contents();
                  oldNodes.replaceWith(nodes7673);
                }));
                callback(root9677); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7672;
                nodes7672 = node.contents();
                oldNodes.replaceWith(nodes7672);
              }));
              
              var oldNodes = iternode519;
              iternode519 = iternode519.contents();
              oldNodes.replaceWith(iternode519);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list519.addEventListener('change', function() { listSubs__.unsubscribe(); renderList519(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList519(true); }));
        });
      };
      renderList519();
      
      callback(root9673); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root9680 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2970 = $("<div>");
  
  var ref2797 = mobl.ref(ui.searchboxStyle);
  if(ref2797.get() !== null) {
    node2970.attr('class', ref2797.get());
    subs__.addSub(ref2797.addEventListener('change', function(_, ref, val) {
      node2970.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2797.rebind());
  
  
  var node2971 = $("<input>");
  node2971.attr('type', "search");
  
  var ref2794 = mobl.ref(ui.searchBoxInputStyle);
  if(ref2794.get() !== null) {
    node2971.attr('class', ref2794.get());
    subs__.addSub(ref2794.addEventListener('change', function(_, ref, val) {
      node2971.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2794.rebind());
  
  var ref2795 = placeholder;
  if(ref2795.get() !== null) {
    node2971.attr('placeholder', ref2795.get());
    subs__.addSub(ref2795.addEventListener('change', function(_, ref, val) {
      node2971.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref2795.rebind());
  
  var ref2796 = s;
  node2971.val(""+ref2796.get());
  var ignore552 = false;
  subs__.addSub(ref2796.addEventListener('change', function(_, ref, val) {
    if(ignore552) return;
    node2971.val(""+val);
  }));
  subs__.addSub(ref2796.rebind());
  
  subs__.addSub(mobl.domBind(node2971, 'keyup change', function() {
    ignore552 = true;
    s.set(mobl.stringTomobl__String(node2971.val()));
    ignore552 = false;
  }));
  
  
  var val1422 = onsearch.get();
  if(val1422 !== null) {
    subs__.addSub(mobl.domBind(node2971, 'change', val1422));
  }
  
  var val1423 = onkeyup.get();
  if(val1423 !== null) {
    subs__.addSub(mobl.domBind(node2971, 'keyup', val1423));
  }
  node2971.attr('autocorrect', false);
  node2971.attr('autocapitalize', false);
  node2971.attr('autocomplete', false);
  
  node2970.append(node2971);
  root9680.append(node2970);
  callback(root9680); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root9681 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref2798 = mobl.ref(ui.contextMenuStyle);
  if(ref2798.get() !== null) {
    menu.attr('class', ref2798.get());
    subs__.addSub(ref2798.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2798.rebind());
  
  var nodes7675 = $("<span>");
  menu.append(nodes7675);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1212();
  }));
  
  function renderControl1212() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9682 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9682); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7675;
      nodes7675 = node.contents();
      oldNodes.replaceWith(nodes7675);
    }));
  }
  renderControl1212();
  root9681.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val1424 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp7395 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val1424 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val1424));
  }
  
  root9681.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root9681); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root9683 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp7379 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp7379.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node2972 = $("<span>");
  root9683.append(node2972);
  var condSubs756 = new mobl.CompSubscription();
  subs__.addSub(condSubs756);
  var oldValue756;
  var renderCond756 = function() {
    var value1676 = tmp7379.get();
    if(oldValue756 === value1676) return;
    oldValue756 = value1676;
    var subs__ = condSubs756;
    subs__.unsubscribe();
    node2972.empty();
    if(value1676) {
      items.get().one(function(result__) {
        var tmp7396 = result__;
        var current = mobl.ref(result__);
        
        var node2973 = $("<div>");
        node2973.attr('width', "100%");
        
        
        var node2974 = $("<div>");
        node2974.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes7678 = $("<span>");
        node2974.append(nodes7678);
        subs__.addSub((ui.group)(function(_, callback) {
          var root9686 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node2977 = mobl.loadingSpan();
          root9686.append(node2977);
          var list520;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList520 = function() {
            var subs__ = listSubs__;
            list520 = items.get();
            list520.list(function(results520) {
              node2977.empty();
              for(var i1267 = 0; i1267 < results520.length; i1267++) {
                (function() {
                  var iternode520 = $("<span>");
                  node2977.append(iternode520);
                  var it;
                  it = mobl.ref(mobl.ref(results520), i1267);
                  var result__ = it.get() == current.get();
                  var tmp7355 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp7355.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp7355.set(it.get() == current.get());
                  }));
                  
                  
                  var node2978 = $("<span>");
                  iternode520.append(node2978);
                  var condSubs758 = new mobl.CompSubscription();
                  subs__.addSub(condSubs758);
                  var oldValue758;
                  var renderCond758 = function() {
                    var value1678 = tmp7355.get();
                    if(oldValue758 === value1678) return;
                    oldValue758 = value1678;
                    var subs__ = condSubs758;
                    subs__.unsubscribe();
                    node2978.empty();
                    if(value1678) {
                      var nodes7679 = $("<span>");
                      node2978.append(nodes7679);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root9687 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes7680 = $("<span>");
                        root9687.append(nodes7680);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1214();
                        }));
                        
                        function renderControl1214() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root9688 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root9688); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes7680;
                            nodes7680 = node.contents();
                            oldNodes.replaceWith(nodes7680);
                          }));
                        }
                        renderControl1214();
                        callback(root9687); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7679;
                        nodes7679 = node.contents();
                        oldNodes.replaceWith(nodes7679);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp7354 = mobl.ref(result__);
                      
                      var nodes7681 = $("<span>");
                      node2978.append(nodes7681);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7354, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root9689 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes7682 = $("<span>");
                        root9689.append(nodes7682);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1215();
                        }));
                        
                        function renderControl1215() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root9690 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root9690); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes7682;
                            nodes7682 = node.contents();
                            oldNodes.replaceWith(nodes7682);
                          }));
                        }
                        renderControl1215();
                        callback(root9689); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7681;
                        nodes7681 = node.contents();
                        oldNodes.replaceWith(nodes7681);
                      }));
                      
                      
                    }
                  };
                  renderCond758();
                  subs__.addSub(tmp7355.addEventListener('change', function() {
                    renderCond758();
                  }));
                  
                  
                  var oldNodes = iternode520;
                  iternode520 = iternode520.contents();
                  oldNodes.replaceWith(iternode520);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list520.addEventListener('change', function() { listSubs__.unsubscribe(); renderList520(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList520(true); }));
            });
          };
          renderList520();
          
          callback(root9686); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes7678;
          nodes7678 = node.contents();
          oldNodes.replaceWith(nodes7678);
        }));
        node2973.append(node2974);
        
        var node2975 = $("<div>");
        node2975.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node2976 = $("<span>");
        node2975.append(node2976);
        var condSubs757 = new mobl.CompSubscription();
        subs__.addSub(condSubs757);
        var oldValue757;
        var renderCond757 = function() {
          var value1677 = current.get();
          if(oldValue757 === value1677) return;
          oldValue757 = value1677;
          var subs__ = condSubs757;
          subs__.unsubscribe();
          node2976.empty();
          if(value1677) {
            var nodes7676 = $("<span>");
            node2976.append(nodes7676);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl1213();
            }));
            
            function renderControl1213() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root9684 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9684); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7676;
                nodes7676 = node.contents();
                oldNodes.replaceWith(nodes7676);
              }));
            }
            renderControl1213();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp7356 = mobl.ref(result__);
            
            var nodes7677 = $("<span>");
            node2976.append(nodes7677);
            subs__.addSub((mobl.label)(tmp7356, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root9685 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root9685); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes7677;
              nodes7677 = node.contents();
              oldNodes.replaceWith(nodes7677);
            }));
            
            
          }
        };
        renderCond757();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond757();
        }));
        
        node2973.append(node2975);
        node2972.append(node2973);
        
        
        
        
        
        
      });
    } else {
      var nodes7683 = $("<span>");
      node2972.append(nodes7683);
      subs__.addSub((ui.group)(function(_, callback) {
        var root9691 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2979 = mobl.loadingSpan();
        root9691.append(node2979);
        var list521;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList521 = function() {
          var subs__ = listSubs__;
          list521 = items.get();
          list521.list(function(results521) {
            node2979.empty();
            for(var i1268 = 0; i1268 < results521.length; i1268++) {
              (function() {
                var iternode521 = $("<span>");
                node2979.append(iternode521);
                var it;
                it = mobl.ref(mobl.ref(results521), i1268);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp7397 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp7350 = mobl.ref(result__);
                
                var nodes7684 = $("<span>");
                iternode521.append(nodes7684);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7350, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root9692 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7685 = $("<span>");
                  root9692.append(nodes7685);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl1216();
                  }));
                  
                  function renderControl1216() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root9693 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root9693); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7685;
                      nodes7685 = node.contents();
                      oldNodes.replaceWith(nodes7685);
                    }));
                  }
                  renderControl1216();
                  callback(root9692); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7684;
                  nodes7684 = node.contents();
                  oldNodes.replaceWith(nodes7684);
                }));
                
                var oldNodes = iternode521;
                iternode521 = iternode521.contents();
                oldNodes.replaceWith(iternode521);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list521.addEventListener('change', function() { listSubs__.unsubscribe(); renderList521(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList521(true); }));
          });
        };
        renderList521();
        
        callback(root9691); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7683;
        nodes7683 = node.contents();
        oldNodes.replaceWith(nodes7683);
      }));
      
      
    }
  };
  renderCond756();
  subs__.addSub(tmp7379.addEventListener('change', function() {
    renderCond756();
  }));
  
  callback(root9683); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root9694 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp7353 = mobl.ref(result__);
  
  var nodes7686 = $("<span>");
  root9694.append(nodes7686);
  subs__.addSub((ui.header)(tmp7353, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9695 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7352 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7351 = mobl.ref(result__);
    
    var nodes7687 = $("<span>");
    root9695.append(nodes7687);
    subs__.addSub((ui.backButton)(tmp7351, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7352, function(_, callback) {
      var root9696 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9696); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7687;
      nodes7687 = node.contents();
      oldNodes.replaceWith(nodes7687);
    }));
    callback(root9695); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7686;
    nodes7686 = node.contents();
    oldNodes.replaceWith(nodes7686);
  }));
  var nodes7688 = $("<span>");
  root9694.append(nodes7688);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl1217();
  }));
  
  function renderControl1217() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root9697 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9697); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7688;
      nodes7688 = node.contents();
      oldNodes.replaceWith(nodes7688);
    }));
  }
  renderControl1217();
  callback(root9694); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root9698 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes7689 = $("<span>");
  root9698.append(nodes7689);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9699 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2980 = mobl.loadingSpan();
    root9699.append(node2980);
    var list522;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList522 = function() {
      var subs__ = listSubs__;
      list522 = coll.get();
      list522.list(function(results522) {
        node2980.empty();
        for(var i1269 = 0; i1269 < results522.length; i1269++) {
          (function() {
            var iternode522 = $("<span>");
            node2980.append(iternode522);
            var it;
            it = mobl.ref(mobl.ref(results522), i1269);
            var result__ = it.get() == selected.get();
            var tmp7358 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp7358.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp7358.set(it.get() == selected.get());
            }));
            
            
            var node2981 = $("<span>");
            iternode522.append(node2981);
            var condSubs759 = new mobl.CompSubscription();
            subs__.addSub(condSubs759);
            var oldValue759;
            var renderCond759 = function() {
              var value1679 = tmp7358.get();
              if(oldValue759 === value1679) return;
              oldValue759 = value1679;
              var subs__ = condSubs759;
              subs__.unsubscribe();
              node2981.empty();
              if(value1679) {
                var nodes7690 = $("<span>");
                node2981.append(nodes7690);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root9700 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7691 = $("<span>");
                  root9700.append(nodes7691);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl1218();
                  }));
                  
                  function renderControl1218() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root9701 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root9701); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7691;
                      nodes7691 = node.contents();
                      oldNodes.replaceWith(nodes7691);
                    }));
                  }
                  renderControl1218();
                  callback(root9700); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7690;
                  nodes7690 = node.contents();
                  oldNodes.replaceWith(nodes7690);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp7357 = mobl.ref(result__);
                
                var nodes7692 = $("<span>");
                node2981.append(nodes7692);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7357, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root9702 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7693 = $("<span>");
                  root9702.append(nodes7693);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl1219();
                  }));
                  
                  function renderControl1219() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root9703 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root9703); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7693;
                      nodes7693 = node.contents();
                      oldNodes.replaceWith(nodes7693);
                    }));
                  }
                  renderControl1219();
                  callback(root9702); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7692;
                  nodes7692 = node.contents();
                  oldNodes.replaceWith(nodes7692);
                }));
                
                
              }
            };
            renderCond759();
            subs__.addSub(tmp7358.addEventListener('change', function() {
              renderCond759();
            }));
            
            
            var oldNodes = iternode522;
            iternode522 = iternode522.contents();
            oldNodes.replaceWith(iternode522);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list522.addEventListener('change', function() { listSubs__.unsubscribe(); renderList522(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList522(true); }));
      });
    };
    renderList522();
    
    callback(root9699); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7689;
    nodes7689 = node.contents();
    oldNodes.replaceWith(nodes7689);
  }));
  callback(root9698); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root9704 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp7398 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp7359 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp7359.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp7359.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp7359.set(coll.get().limit(n.get()));
    }));
    
    
    var node2982 = mobl.loadingSpan();
    root9704.append(node2982);
    var list523;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList523 = function() {
      var subs__ = listSubs__;
      list523 = tmp7359.get();
      list523.list(function(results523) {
        node2982.empty();
        for(var i1270 = 0; i1270 < results523.length; i1270++) {
          (function() {
            var iternode523 = $("<span>");
            node2982.append(iternode523);
            var it;
            it = mobl.ref(mobl.ref(results523), i1270);
            var nodes7694 = $("<span>");
            iternode523.append(nodes7694);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl1220();
            }));
            
            function renderControl1220() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root9705 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9705); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7694;
                nodes7694 = node.contents();
                oldNodes.replaceWith(nodes7694);
              }));
            }
            renderControl1220();
            
            var oldNodes = iternode523;
            iternode523 = iternode523.contents();
            oldNodes.replaceWith(iternode523);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list523.addEventListener('change', function() { listSubs__.unsubscribe(); renderList523(true); }));
        subs__.addSub(tmp7359.addEventListener('change', function() { listSubs__.unsubscribe(); renderList523(true); }));
      });
    };
    renderList523();
    
    var result__ = n.get() < total.get();
    var tmp7361 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp7361.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp7361.set(n.get() < total.get());
    }));
    
    
    var node2983 = $("<span>");
    root9704.append(node2983);
    var condSubs760 = new mobl.CompSubscription();
    subs__.addSub(condSubs760);
    var oldValue760;
    var renderCond760 = function() {
      var value1680 = tmp7361.get();
      if(oldValue760 === value1680) return;
      oldValue760 = value1680;
      var subs__ = condSubs760;
      subs__.unsubscribe();
      node2983.empty();
      if(value1680) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp7360 = mobl.ref(result__);
        
        var nodes7695 = $("<span>");
        node2983.append(nodes7695);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp7360, mobl.ref(null), function(_, callback) {
          var root9706 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes7696 = $("<span>");
          root9706.append(nodes7696);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root9707 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root9707); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes7696;
            nodes7696 = node.contents();
            oldNodes.replaceWith(nodes7696);
          }));
          callback(root9706); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes7695;
          nodes7695 = node.contents();
          oldNodes.replaceWith(nodes7695);
        }));
        
        
      } else {
        
      }
    };
    renderCond760();
    subs__.addSub(tmp7361.addEventListener('change', function() {
      renderCond760();
    }));
    
    callback(root9704); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root9708 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7697 = $("<span>");
  root9708.append(nodes7697);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9709 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2984 = mobl.loadingSpan();
    root9709.append(node2984);
    var list524;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList524 = function() {
      var subs__ = listSubs__;
      list524 = items.get();
      list524.list(function(results524) {
        node2984.empty();
        for(var i1271 = 0; i1271 < results524.length; i1271++) {
          (function() {
            var iternode524 = $("<span>");
            node2984.append(iternode524);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results524), i1271), "_1");it = mobl.ref(mobl.ref(mobl.ref(results524), i1271), "_2");
            var nodes7698 = $("<span>");
            iternode524.append(nodes7698);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root9710 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7699 = $("<span>");
              root9710.append(nodes7699);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root9711 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9711); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7699;
                nodes7699 = node.contents();
                oldNodes.replaceWith(nodes7699);
              }));
              callback(root9710); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7698;
              nodes7698 = node.contents();
              oldNodes.replaceWith(nodes7698);
            }));
            
            var oldNodes = iternode524;
            iternode524 = iternode524.contents();
            oldNodes.replaceWith(iternode524);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list524.addEventListener('change', function() { listSubs__.unsubscribe(); renderList524(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList524(true); }));
      });
    };
    renderList524();
    
    callback(root9709); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7697;
    nodes7697 = node.contents();
    oldNodes.replaceWith(nodes7697);
  }));
  callback(root9708); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root9712 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll1660) {
    coll1660 = coll1660.reverse();
    function processOne280() {
      var it;
      it = coll1660.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll1660.length > 0) processOne280(); else rest280();
      
    }
    function rest280() {
      var nodes7700 = $("<span>");
      root9712.append(nodes7700);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root9713 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp7362 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp7363 = mobl.ref(result__);
        
        var nodes7701 = $("<span>");
        root9713.append(nodes7701);
        subs__.addSub((ui.backButton)(tmp7363, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7362, function(_, callback) {
          var root9714 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9714); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7701;
          nodes7701 = node.contents();
          oldNodes.replaceWith(nodes7701);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll1659) {
                           coll1659 = coll1659.reverse();
                           function processOne279() {
                             var checked;var it;
                             var tmp7400 = coll1659.pop();
                             checked = tmp7400._1;it = tmp7400._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll1659.length > 0) processOne279(); else rest279();
                               
                             } else {
                               {
                                 
                                 if(coll1659.length > 0) processOne279(); else rest279();
                                 
                               }
                             }
                           }
                           function rest279() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll1659.length > 0) processOne279(); else rest279();
                         });
                         
                       };
        var tmp7364 = mobl.ref(result__);
        
        var nodes7702 = $("<span>");
        root9713.append(nodes7702);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp7364, function(_, callback) {
          var root9715 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9715); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7702;
          nodes7702 = node.contents();
          oldNodes.replaceWith(nodes7702);
        }));
        callback(root9713); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7700;
        nodes7700 = node.contents();
        oldNodes.replaceWith(nodes7700);
      }));
      var nodes7703 = $("<span>");
      root9712.append(nodes7703);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root9716 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9716); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7703;
        nodes7703 = node.contents();
        oldNodes.replaceWith(nodes7703);
      }));
      callback(root9712); return subs__;
      
      
    }
    if(coll1660.length > 0) processOne280(); else rest280();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root9717 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes7704 = $("<span>");
  root9717.append(nodes7704);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root9718 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9718); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7704;
    nodes7704 = node.contents();
    oldNodes.replaceWith(nodes7704);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp7365 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp7365.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp7365.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp7365.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp7365.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp7365.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes7705 = $("<span>");
  root9717.append(nodes7705);
  subs__.addSub((ui.masterDetail)(tmp7365, masterItem, detailItem, function(_, callback) {
    var root9719 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9719); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7705;
    nodes7705 = node.contents();
    oldNodes.replaceWith(nodes7705);
  }));
  callback(root9717); return subs__;
  
  
  return subs__;
};
ui.progressStyle = 'ui__progressStyle';
ui.startLoading = function(loadingMessage, style) {
   var __this = this;
  var loading = mobl.$("<div id='progress' class='" + style + "'>" + loadingMessage + "</div>");
  
  mobl.$("body").prepend(loading);
};

ui.endLoading = function() {
   var __this = this;
  mobl.$("#progress").remove();
};

(function(__ns) {
__ns.floatBox = function(top, right, bottom, left, elements, callback) {
                  var root928 = $("<span>");
                  var node280 = $("<div style=\"position: absolute;\">");
                  var nodes681 = $("<span>");
                  node280.append(nodes681);
                  mobl.ref(elements).addEventListener('change', function() {
                                                                  renderControl102();
                                                                });
                  function renderControl102 ( ) {
                    (elements)(function(elements, callback) {
                                 var root929 = $("<span>");
                                 callback(root929);
                                 return;
                               }, function(node) {
                                    var oldNodes = nodes681;
                                    nodes681 = node.contents();
                                    oldNodes.replaceWith(nodes681);
                                  });
                  }
                  renderControl102();
                  root928.append(node280);
                  var box = node280;
                  if(top.get() !== null)
                  box.css("top", "" + top.get() + "px");
                  if(right.get() !== null)
                  box.css("right", "" + right.get() + "px");
                  if(bottom.get() !== null)
                  box.css("top", "" + ( window.pageYOffset + window.innerHeight - box.outerHeight() - bottom.get() ) + "px");
                  if(left.get() !== null)
                  box.css("left", "" + left.get() + "px");
                  function updateLocation ( ) {
                    if(top.get() !== null)
                    {
                      box.css("top", "" + ( window.pageYOffset + top.get() ) + "px");
                    }
                    if(bottom.get() !== null)
                    {
                      box.css("top", "" + ( window.pageYOffset + window.innerHeight - box.outerHeight() - bottom.get() ) + "px");
                    }
                  }
                  $(window).bind('scroll', updateLocation);
                  $(window).bind('resize', updateLocation);
                  callback(root928);
                  return;
                };
}(ui));ui.accordionStyle = 'ui__accordionStyle';
ui.activeSectionHeaderStyle = 'ui__activeSectionHeaderStyle';
ui.inActiveSectionHeaderStyle = 'ui__inActiveSectionHeaderStyle';
ui.activeSectionHeaderStyle = 'ui__activeSectionHeaderStyle';
ui.inActiveSectionHeaderStyle = 'ui__inActiveSectionHeaderStyle';
ui.inActiveSectionStyle = 'ui__inActiveSectionStyle';
ui.activeSectionStyle = 'ui__activeSectionStyle';

ui.accordion = function(sections, activeSection, elements, callback) {
  var root9720 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes7706 = $("<span>");
  root9720.append(nodes7706);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root9721 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2985 = mobl.loadingSpan();
    root9721.append(node2985);
    var list525;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList525 = function() {
      var subs__ = listSubs__;
      list525 = sections.get();
      list525.list(function(results525) {
        node2985.empty();
        for(var i1272 = 0; i1272 < results525.length; i1272++) {
          (function() {
            var iternode525 = $("<span>");
            node2985.append(iternode525);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results525), i1272), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results525), i1272), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp7367 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp7367.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp7367.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp7367.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp7367.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp7366 = mobl.ref(result__);
            
            var nodes7707 = $("<span>");
            iternode525.append(nodes7707);
            subs__.addSub((mobl.span)(tmp7367, mobl.ref(null), tmp7366, mobl.ref(null), function(_, callback) {
              var root9722 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7708 = $("<span>");
              root9722.append(nodes7708);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root9723 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9723); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7708;
                nodes7708 = node.contents();
                oldNodes.replaceWith(nodes7708);
              }));
              callback(root9722); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7707;
              nodes7707 = node.contents();
              oldNodes.replaceWith(nodes7707);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp7368 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp7368.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp7368.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp7368.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp7368.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes7709 = $("<span>");
            iternode525.append(nodes7709);
            subs__.addSub((mobl.block)(tmp7368, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root9724 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7710 = $("<span>");
              root9724.append(nodes7710);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl1221();
              }));
              
              function renderControl1221() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root9725 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root9725); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7710;
                  nodes7710 = node.contents();
                  oldNodes.replaceWith(nodes7710);
                }));
              }
              renderControl1221();
              callback(root9724); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7709;
              nodes7709 = node.contents();
              oldNodes.replaceWith(nodes7709);
            }));
            
            var oldNodes = iternode525;
            iternode525 = iternode525.contents();
            oldNodes.replaceWith(iternode525);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list525.addEventListener('change', function() { listSubs__.unsubscribe(); renderList525(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList525(true); }));
      });
    };
    renderList525();
    
    callback(root9721); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7706;
    nodes7706 = node.contents();
    oldNodes.replaceWith(nodes7706);
  }));
  callback(root9720); return subs__;
  
  return subs__;
};
ui.tableStyle = 'ui__tableStyle';
ui.tdStyle = 'ui__tdStyle';
ui.trStyle = 'ui__trStyle';
ui.trStyle = 'ui__trStyle';
ui.trStyle = 'ui__trStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';

ui.table = function(style, elements, callback) {
  var root9726 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2986 = $("<table>");
  
  var ref2799 = style;
  if(ref2799.get() !== null) {
    node2986.attr('class', ref2799.get());
    subs__.addSub(ref2799.addEventListener('change', function(_, ref, val) {
      node2986.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2799.rebind());
  
  var nodes7711 = $("<span>");
  node2986.append(nodes7711);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1222();
  }));
  
  function renderControl1222() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9727 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9727); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7711;
      nodes7711 = node.contents();
      oldNodes.replaceWith(nodes7711);
    }));
  }
  renderControl1222();
  root9726.append(node2986);
  callback(root9726); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root9728 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2987 = $("<tr>");
  
  var ref2800 = style;
  if(ref2800.get() !== null) {
    node2987.attr('class', ref2800.get());
    subs__.addSub(ref2800.addEventListener('change', function(_, ref, val) {
      node2987.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2800.rebind());
  
  var nodes7712 = $("<span>");
  node2987.append(nodes7712);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1223();
  }));
  
  function renderControl1223() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9729 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9729); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7712;
      nodes7712 = node.contents();
      oldNodes.replaceWith(nodes7712);
    }));
  }
  renderControl1223();
  root9728.append(node2987);
  callback(root9728); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root9730 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2988 = $("<td>");
  
  var ref2801 = width;
  if(ref2801.get() !== null) {
    node2988.attr('width', ref2801.get());
    subs__.addSub(ref2801.addEventListener('change', function(_, ref, val) {
      node2988.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2801.rebind());
  
  var ref2802 = style;
  if(ref2802.get() !== null) {
    node2988.attr('class', ref2802.get());
    subs__.addSub(ref2802.addEventListener('change', function(_, ref, val) {
      node2988.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2802.rebind());
  
  var nodes7713 = $("<span>");
  node2988.append(nodes7713);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1224();
  }));
  
  function renderControl1224() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9731 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9731); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7713;
      nodes7713 = node.contents();
      oldNodes.replaceWith(nodes7713);
    }));
  }
  renderControl1224();
  root9730.append(node2988);
  callback(root9730); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root9732 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2989 = $("<td>");
  
  var ref2803 = width;
  if(ref2803.get() !== null) {
    node2989.attr('width', ref2803.get());
    subs__.addSub(ref2803.addEventListener('change', function(_, ref, val) {
      node2989.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2803.rebind());
  
  var ref2804 = style;
  if(ref2804.get() !== null) {
    node2989.attr('class', ref2804.get());
    subs__.addSub(ref2804.addEventListener('change', function(_, ref, val) {
      node2989.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2804.rebind());
  
  var nodes7714 = $("<span>");
  node2989.append(nodes7714);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1225();
  }));
  
  function renderControl1225() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9733 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9733); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7714;
      nodes7714 = node.contents();
      oldNodes.replaceWith(nodes7714);
    }));
  }
  renderControl1225();
  root9732.append(node2989);
  callback(root9732); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root9734 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2990 = $("<td>");
  
  var ref2805 = width;
  if(ref2805.get() !== null) {
    node2990.attr('width', ref2805.get());
    subs__.addSub(ref2805.addEventListener('change', function(_, ref, val) {
      node2990.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2805.rebind());
  
  var ref2806 = style;
  if(ref2806.get() !== null) {
    node2990.attr('class', ref2806.get());
    subs__.addSub(ref2806.addEventListener('change', function(_, ref, val) {
      node2990.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2806.rebind());
  
  
  var node2991 = $("<strong>");
  
  var nodes7715 = $("<span>");
  node2991.append(nodes7715);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1226();
  }));
  
  function renderControl1226() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9735 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9735); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7715;
      nodes7715 = node.contents();
      oldNodes.replaceWith(nodes7715);
    }));
  }
  renderControl1226();
  node2990.append(node2991);
  root9734.append(node2990);
  callback(root9734); return subs__;
  
  
  
  return subs__;
};
(function(__ns) {
setTimeout(function() {
             scrollTo(0, -1);
           }, 250);
__ns.scrollUp = function() {
                  scrollTo(0, 0);
                };
__ns.setupScrollers = function() {
                        setTimeout(function() {
                                     var allScrollers = $("div.scroller");
                                     for(var i = 0; i < allScrollers.length; i++)
                                     {
                                       var scroller = allScrollers.eq(i);
                                       if(!scroller.data("scroller"))
                                       {
                                         scroller.data("scroller", new TouchScroll(scroller[0],{
                                                                                                 elastic: true
                                                                                               }));
                                       }
                                     }
                                   }, 250);
                      };
}(ui));ui.indexOf = function(it, items, callback) {
  var __this = this;
  var result__ = 1;
  var counter = result__;
  var result__ = items;
  items.list(function(coll1661) {
    coll1661 = coll1661.reverse();
    function processOne281() {
      var item;
      item = coll1661.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll1661.length > 0) processOne281(); else rest281();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll1661.length > 0) processOne281(); else rest281();
          
        }
      }
    }
    function rest281() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll1661.length > 0) processOne281(); else rest281();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root9736 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp7380 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp7380.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node2992 = $("<span>");
  root9736.append(node2992);
  var condSubs761 = new mobl.CompSubscription();
  subs__.addSub(condSubs761);
  var oldValue761;
  var renderCond761 = function() {
    var value1681 = tmp7380.get();
    if(oldValue761 === value1681) return;
    oldValue761 = value1681;
    var subs__ = condSubs761;
    subs__.unsubscribe();
    node2992.empty();
    if(value1681) {
      items.get().one(function(result__) {
        var tmp7402 = result__;
        var current = mobl.ref(result__);
        
        var node2993 = $("<div>");
        node2993.attr('width', "100%");
        
        
        var node2994 = $("<div>");
        node2994.attr('style', "float:left; margin:0; padding:0; width:45%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes7717 = $("<span>");
        node2994.append(nodes7717);
        subs__.addSub((ui.group)(function(_, callback) {
          var root9738 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node2997 = mobl.loadingSpan();
          root9738.append(node2997);
          var list526;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList526 = function() {
            var subs__ = listSubs__;
            list526 = items.get();
            list526.list(function(results526) {
              node2997.empty();
              for(var i1273 = 0; i1273 < results526.length; i1273++) {
                (function() {
                  var iternode526 = $("<span>");
                  node2997.append(iternode526);
                  var it;
                  it = mobl.ref(mobl.ref(results526), i1273);
                  var result__ = it.get() == current.get();
                  var tmp7377 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp7377.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp7377.set(it.get() == current.get());
                  }));
                  
                  
                  var node2998 = $("<span>");
                  iternode526.append(node2998);
                  var condSubs763 = new mobl.CompSubscription();
                  subs__.addSub(condSubs763);
                  var oldValue763;
                  var renderCond763 = function() {
                    var value1683 = tmp7377.get();
                    if(oldValue763 === value1683) return;
                    oldValue763 = value1683;
                    var subs__ = condSubs763;
                    subs__.unsubscribe();
                    node2998.empty();
                    if(value1683) {
                      var nodes7718 = $("<span>");
                      node2998.append(nodes7718);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root9739 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp7405 = result__;
                          var tmp7374 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7403 = result__;
                              var result__ = tmp7403;
                              tmp7374.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7404 = result__;
                              var result__ = tmp7404;
                              tmp7374.set(result__);
                              
                            });
                          }));
                          
                          var nodes7719 = $("<span>");
                          root9739.append(nodes7719);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl1228();
                          }));
                          
                          function renderControl1228() {
                            subs__.addSub((masterItem.get())(it, tmp7374, function(elements, callback) {
                              var root9740 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root9740); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes7719;
                              nodes7719 = node.contents();
                              oldNodes.replaceWith(nodes7719);
                            }));
                          }
                          renderControl1228();
                          callback(root9739); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7718;
                        nodes7718 = node.contents();
                        oldNodes.replaceWith(nodes7718);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = true;
                                       ui.visible.set(result__);
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp7376 = mobl.ref(result__);
                      
                      var nodes7720 = $("<span>");
                      node2998.append(nodes7720);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7376, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root9741 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp7408 = result__;
                          var tmp7375 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7406 = result__;
                              var result__ = tmp7406;
                              tmp7375.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7407 = result__;
                              var result__ = tmp7407;
                              tmp7375.set(result__);
                              
                            });
                          }));
                          
                          var nodes7721 = $("<span>");
                          root9741.append(nodes7721);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl1229();
                          }));
                          
                          function renderControl1229() {
                            subs__.addSub((masterItem.get())(it, tmp7375, function(elements, callback) {
                              var root9742 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root9742); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes7721;
                              nodes7721 = node.contents();
                              oldNodes.replaceWith(nodes7721);
                            }));
                          }
                          renderControl1229();
                          callback(root9741); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7720;
                        nodes7720 = node.contents();
                        oldNodes.replaceWith(nodes7720);
                      }));
                      
                      
                    }
                  };
                  renderCond763();
                  subs__.addSub(tmp7377.addEventListener('change', function() {
                    renderCond763();
                  }));
                  
                  
                  var oldNodes = iternode526;
                  iternode526 = iternode526.contents();
                  oldNodes.replaceWith(iternode526);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list526.addEventListener('change', function() { listSubs__.unsubscribe(); renderList526(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList526(true); }));
            });
          };
          renderList526();
          
          callback(root9738); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes7717;
          nodes7717 = node.contents();
          oldNodes.replaceWith(nodes7717);
        }));
        node2993.append(node2994);
        
        var node2995 = $("<div>");
        node2995.attr('style', "float:left; margin:0; padding:0; width:53%; position:relative; margin-left: 1%;");
        
        var result__ = current.get() && ui.visible.get();
        var tmp7378 = mobl.ref(result__);
        subs__.addSub(current.addEventListener('change', function() {
          tmp7378.set(current.get() && ui.visible.get());
        }));
        subs__.addSub(ui.visible.addEventListener('change', function() {
          tmp7378.set(current.get() && ui.visible.get());
        }));
        
        
        var node2996 = $("<span>");
        node2995.append(node2996);
        var condSubs762 = new mobl.CompSubscription();
        subs__.addSub(condSubs762);
        var oldValue762;
        var renderCond762 = function() {
          var value1682 = tmp7378.get();
          if(oldValue762 === value1682) return;
          oldValue762 = value1682;
          var subs__ = condSubs762;
          subs__.unsubscribe();
          node2996.empty();
          if(value1682) {
            var nodes7716 = $("<span>");
            node2996.append(nodes7716);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl1227();
            }));
            
            function renderControl1227() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root9737 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9737); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7716;
                nodes7716 = node.contents();
                oldNodes.replaceWith(nodes7716);
              }));
            }
            renderControl1227();
            
            
          } else {
            
          }
        };
        renderCond762();
        subs__.addSub(tmp7378.addEventListener('change', function() {
          renderCond762();
        }));
        
        node2993.append(node2995);
        node2992.append(node2993);
        
        
        
        
        
        
      });
    } else {
      var nodes7722 = $("<span>");
      node2992.append(nodes7722);
      subs__.addSub((ui.group)(function(_, callback) {
        var root9743 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2999 = mobl.loadingSpan();
        root9743.append(node2999);
        var list527;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList527 = function() {
          var subs__ = listSubs__;
          list527 = items.get();
          list527.list(function(results527) {
            node2999.empty();
            for(var i1274 = 0; i1274 < results527.length; i1274++) {
              (function() {
                var iternode527 = $("<span>");
                node2999.append(iternode527);
                var it;
                it = mobl.ref(mobl.ref(results527), i1274);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp7412 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp7370 = mobl.ref(result__);
                
                var nodes7723 = $("<span>");
                iternode527.append(nodes7723);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7370, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root9744 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp7411 = result__;
                    var tmp7369 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp7409 = result__;
                        var result__ = tmp7409;
                        tmp7369.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp7410 = result__;
                        var result__ = tmp7410;
                        tmp7369.set(result__);
                        
                      });
                    }));
                    
                    var nodes7724 = $("<span>");
                    root9744.append(nodes7724);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl1230();
                    }));
                    
                    function renderControl1230() {
                      subs__.addSub((masterItem.get())(it, tmp7369, function(elements, callback) {
                        var root9745 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root9745); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7724;
                        nodes7724 = node.contents();
                        oldNodes.replaceWith(nodes7724);
                      }));
                    }
                    renderControl1230();
                    callback(root9744); return subs__;
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7723;
                  nodes7723 = node.contents();
                  oldNodes.replaceWith(nodes7723);
                }));
                
                var oldNodes = iternode527;
                iternode527 = iternode527.contents();
                oldNodes.replaceWith(iternode527);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list527.addEventListener('change', function() { listSubs__.unsubscribe(); renderList527(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList527(true); }));
          });
        };
        renderList527();
        
        callback(root9743); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7722;
        nodes7722 = node.contents();
        oldNodes.replaceWith(nodes7722);
      }));
      
      
    }
  };
  renderCond761();
  subs__.addSub(tmp7380.addEventListener('change', function() {
    renderCond761();
  }));
  
  callback(root9736); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root9746 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp7373 = mobl.ref(result__);
  
  var nodes7725 = $("<span>");
  root9746.append(nodes7725);
  subs__.addSub((ui.header)(tmp7373, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9747 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    mobl.sleep(0, function(result__) {
      var tmp7413 = result__;
      mathJAX.renderMaths(function(result__) {
        var tmp7414 = result__;
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp7372 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp7371 = mobl.ref(result__);
        
        var nodes7726 = $("<span>");
        root9747.append(nodes7726);
        subs__.addSub((ui.backButton)(tmp7371, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7372, function(_, callback) {
          var root9748 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9748); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7726;
          nodes7726 = node.contents();
          oldNodes.replaceWith(nodes7726);
        }));
        callback(root9747); return subs__;
        
      });
    });
    return subs__;
  }, function(node) {
    var oldNodes = nodes7725;
    nodes7725 = node.contents();
    oldNodes.replaceWith(nodes7725);
  }));
  var nodes7727 = $("<span>");
  root9746.append(nodes7727);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl1231();
  }));
  
  function renderControl1231() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root9749 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9749); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7727;
      nodes7727 = node.contents();
      oldNodes.replaceWith(nodes7727);
    }));
  }
  renderControl1231();
  callback(root9746); return subs__;
  
  
  return subs__;
};
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.section = 'ui__section';
ui.logoStyle = 'ui__logoStyle';
ui.delStyle = 'ui__delStyle';
ui.delPushedStyle = 'ui__delPushedStyle';
ui.itemStyle = 'ui__itemStyle';
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
