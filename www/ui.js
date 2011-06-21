mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mathJAX');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root10248 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3125 = $("<span>");
  root10248.append(node3125);
  var condSubs796 = new mobl.CompSubscription();
  subs__.addSub(condSubs796);
  var oldValue796;
  var renderCond796 = function() {
    var value1784 = value.get();
    if(oldValue796 === value1784) return;
    oldValue796 = value1784;
    var subs__ = condSubs796;
    subs__.unsubscribe();
    node3125.empty();
    if(value1784) {
      var nodes8125 = $("<span>");
      node3125.append(nodes8125);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl1283();
      }));
      
      function renderControl1283() {
        subs__.addSub((elements)(function(elements, callback) {
          var root10249 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root10249); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes8125;
          nodes8125 = node.contents();
          oldNodes.replaceWith(nodes8125);
        }));
      }
      renderControl1283();
      
      
    } else {
      var nodes8126 = $("<span>");
      node3125.append(nodes8126);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10250 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes8127 = $("<span>");
        root10250.append(nodes8127);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root10251 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root10251); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes8127;
          nodes8127 = node.contents();
          oldNodes.replaceWith(nodes8127);
        }));
        var nodes8128 = $("<span>");
        root10250.append(nodes8128);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root10252 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root10252); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes8128;
          nodes8128 = node.contents();
          oldNodes.replaceWith(nodes8128);
        }));
        callback(root10250); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes8126;
        nodes8126 = node.contents();
        oldNodes.replaceWith(nodes8126);
      }));
      
      
    }
  };
  renderCond796();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond796();
  }));
  
  callback(root10248); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root10253 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3126 = $("<div>");
  
  var ref2931 = mobl.ref(ui.headerStyle);
  if(ref2931.get() !== null) {
    node3126.attr('class', ref2931.get());
    subs__.addSub(ref2931.addEventListener('change', function(_, ref, val) {
      node3126.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2931.rebind());
  
  var val1484 = onclick.get();
  if(val1484 !== null) {
    subs__.addSub(mobl.domBind(node3126, 'tap', val1484));
  }
  
  var ref2932 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref2932.get() !== null) {
    node3126.attr('style', ref2932.get());
    subs__.addSub(ref2932.addEventListener('change', function(_, ref, val) {
      node3126.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node3126.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref2932.rebind());
  
  
  var node3129 = $("<div>");
  
  var ref2930 = mobl.ref(ui.headerContainerStyle);
  if(ref2930.get() !== null) {
    node3129.attr('class', ref2930.get());
    subs__.addSub(ref2930.addEventListener('change', function(_, ref, val) {
      node3129.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2930.rebind());
  
  
  var node3130 = $("<div>");
  
  var ref2928 = text;
  node3130.text(""+ref2928.get());
  var ignore576 = false;
  subs__.addSub(ref2928.addEventListener('change', function(_, ref, val) {
    if(ignore576) return;
    node3130.text(""+val);
  }));
  subs__.addSub(ref2928.rebind());
  
  
  var ref2929 = mobl.ref(ui.headerTextStyle);
  if(ref2929.get() !== null) {
    node3130.attr('class', ref2929.get());
    subs__.addSub(ref2929.addEventListener('change', function(_, ref, val) {
      node3130.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2929.rebind());
  
  node3129.append(node3130);
  node3126.append(node3129);
  var nodes8129 = $("<span>");
  node3126.append(nodes8129);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1284();
  }));
  
  function renderControl1284() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10254 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10254); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8129;
      nodes8129 = node.contents();
      oldNodes.replaceWith(nodes8129);
    }));
  }
  renderControl1284();
  root10253.append(node3126);
  
  var node3127 = $("<span>");
  root10253.append(node3127);
  var condSubs797 = new mobl.CompSubscription();
  subs__.addSub(condSubs797);
  var oldValue797;
  var renderCond797 = function() {
    var value1785 = fixedPosition.get();
    if(oldValue797 === value1785) return;
    oldValue797 = value1785;
    var subs__ = condSubs797;
    subs__.unsubscribe();
    node3127.empty();
    if(value1785) {
      
      var node3128 = $("<div>");
      node3128.attr('id', "hello");
      node3128.attr('style', "height: 2.9em;");
      
      node3127.append(node3128);
      
      
    } else {
      
    }
  };
  renderCond797();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond797();
  }));
  
  callback(root10253); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root10255 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref2933 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref2933.get() !== null) {
    sp.attr('class', ref2933.get());
    subs__.addSub(ref2933.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref2933.rebind());
  
  var val1485 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val1485 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val1485));
  }
  
  var val1486 = function(event, callback) {
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
  if(val1486 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val1486));
  }
  
  var val1487 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after450(result__) {
                    var tmp7806 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after450);if(result__ !== undefined) after450(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1487 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val1487));
  }
  
  var val1488 = function(event, callback) {
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
  if(val1488 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val1488));
  }
  
  var ref2934 = text;
  sp.text(""+ref2934.get());
  var ignore577 = false;
  subs__.addSub(ref2934.addEventListener('change', function(_, ref, val) {
    if(ignore577) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref2934.rebind());
  
  
  root10255.append(sp);
  callback(root10255); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root10256 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes8130 = $("<span>");
  root10256.append(nodes8130);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root10257 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10257); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8130;
    nodes8130 = node.contents();
    oldNodes.replaceWith(nodes8130);
  }));
  callback(root10256); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root10258 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes8131 = $("<span>");
  root10258.append(nodes8131);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root10259 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10259); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8131;
    nodes8131 = node.contents();
    oldNodes.replaceWith(nodes8131);
  }));
  callback(root10258); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root10260 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3131 = $("<ul>");
  
  var ref2935 = mobl.ref(ui.groupStyle);
  if(ref2935.get() !== null) {
    node3131.attr('class', ref2935.get());
    subs__.addSub(ref2935.addEventListener('change', function(_, ref, val) {
      node3131.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2935.rebind());
  
  var nodes8132 = $("<span>");
  node3131.append(nodes8132);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1285();
  }));
  
  function renderControl1285() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10261 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10261); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8132;
      nodes8132 = node.contents();
      oldNodes.replaceWith(nodes8132);
    }));
  }
  renderControl1285();
  root10260.append(node3131);
  callback(root10260); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root10262 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3132 = $("<img>");
  
  var ref2936 = url;
  if(ref2936.get() !== null) {
    node3132.attr('src', ref2936.get());
    subs__.addSub(ref2936.addEventListener('change', function(_, ref, val) {
      node3132.attr('src', val);
    }));
    
  }
  subs__.addSub(ref2936.rebind());
  
  var ref2937 = width;
  if(ref2937.get() !== null) {
    node3132.attr('width', ref2937.get());
    subs__.addSub(ref2937.addEventListener('change', function(_, ref, val) {
      node3132.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2937.rebind());
  
  var ref2938 = height;
  if(ref2938.get() !== null) {
    node3132.attr('height', ref2938.get());
    subs__.addSub(ref2938.addEventListener('change', function(_, ref, val) {
      node3132.attr('height', val);
    }));
    
  }
  subs__.addSub(ref2938.rebind());
  
  var ref2939 = style;
  if(ref2939.get() !== null) {
    node3132.attr('class', ref2939.get());
    subs__.addSub(ref2939.addEventListener('change', function(_, ref, val) {
      node3132.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2939.rebind());
  
  var val1489 = onclick.get();
  if(val1489 !== null) {
    subs__.addSub(mobl.domBind(node3132, 'tap', val1489));
  }
  
  var ref2940 = valign;
  if(ref2940.get() !== null) {
    node3132.attr('valign', ref2940.get());
    subs__.addSub(ref2940.addEventListener('change', function(_, ref, val) {
      node3132.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref2940.rebind());
  
  var ref2941 = align;
  if(ref2941.get() !== null) {
    node3132.attr('align', ref2941.get());
    subs__.addSub(ref2941.addEventListener('change', function(_, ref, val) {
      node3132.attr('align', val);
    }));
    
  }
  subs__.addSub(ref2941.rebind());
  
  root10262.append(node3132);
  callback(root10262); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root10263 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref2942 = mobl.ref(ui.itemStyle);
  if(ref2942.get() !== null) {
    el.attr('class', ref2942.get());
    subs__.addSub(ref2942.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2942.rebind());
  
  var ref2943 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref2943.get() !== null) {
    el.attr('class', ref2943.get());
    subs__.addSub(ref2943.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref2943.rebind());
  
  var val1490 = onswipe.get();
  if(val1490 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val1490));
  }
  
  var val1491 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp7807 = result__;
                                           function after451(result__) {
                                             var tmp7808 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after451);if(result__ !== undefined) after451(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp7809 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val1491 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val1491));
  }
  
  var nodes8133 = $("<span>");
  el.append(nodes8133);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1286();
  }));
  
  function renderControl1286() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10264 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10264); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8133;
      nodes8133 = node.contents();
      oldNodes.replaceWith(nodes8133);
    }));
  }
  renderControl1286();
  root10263.append(el);
  callback(root10263); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root10265 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3133 = $("<input>");
  node3133.attr('type', "checkbox");
  
  var ref2945 = b;
  node3133.attr('checked', !!ref2945.get());
  subs__.addSub(ref2945.addEventListener('change', function(_, ref, val) {
    if(ref === ref2945) node3133.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node3133, 'change', function() {
    b.set(!!node3133.attr('checked'));
  }));
  
  var val1493 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val1493 !== null) {
    subs__.addSub(mobl.domBind(node3133, 'tap', val1493));
  }
  
  var val1494 = onchange.get();
  if(val1494 !== null) {
    subs__.addSub(mobl.domBind(node3133, 'change', val1494));
  }
  
  root10265.append(node3133);
  
  root10265.append(" ");
  
  var node3134 = $("<span>");
  
  var ref2944 = label;
  node3134.text(""+ref2944.get());
  var ignore578 = false;
  subs__.addSub(ref2944.addEventListener('change', function(_, ref, val) {
    if(ignore578) return;
    node3134.text(""+val);
  }));
  subs__.addSub(ref2944.rebind());
  
  
  var val1492 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after452(result__) {
                    var tmp7810 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after452);if(result__ !== undefined) after452(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1492 !== null) {
    subs__.addSub(mobl.domBind(node3134, 'tap', val1492));
  }
  
  root10265.append(node3134);
  callback(root10265); return subs__;
  
  
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
  var root10266 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3135 = $("<span>");
  root10266.append(node3135);
  var condSubs798 = new mobl.CompSubscription();
  subs__.addSub(condSubs798);
  var oldValue798;
  var renderCond798 = function() {
    var value1786 = label.get();
    if(oldValue798 === value1786) return;
    oldValue798 = value1786;
    var subs__ = condSubs798;
    subs__.unsubscribe();
    node3135.empty();
    if(value1786) {
      var nodes8134 = $("<span>");
      node3135.append(nodes8134);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root10267 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10267); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8134;
        nodes8134 = node.contents();
        oldNodes.replaceWith(nodes8134);
      }));
      
      
    } else {
      
    }
  };
  renderCond798();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond798();
  }));
  
  
  var node3136 = $("<span>");
  root10266.append(node3136);
  var condSubs799 = new mobl.CompSubscription();
  subs__.addSub(condSubs799);
  var oldValue799;
  var renderCond799 = function() {
    var value1787 = validator.get();
    if(oldValue799 === value1787) return;
    oldValue799 = value1787;
    var subs__ = condSubs799;
    subs__.unsubscribe();
    node3136.empty();
    if(value1787) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after456(result__) {
        var tmp7811 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp7812 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node3137 = $("<input>");
        
        var ref2946 = inputType;
        if(ref2946.get() !== null) {
          node3137.attr('type', ref2946.get());
          subs__.addSub(ref2946.addEventListener('change', function(_, ref, val) {
            node3137.attr('type', val);
          }));
          
        }
        subs__.addSub(ref2946.rebind());
        
        var ref2947 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref2947.get() !== null) {
          node3137.attr('class', ref2947.get());
          subs__.addSub(ref2947.addEventListener('change', function(_, ref, val) {
            node3137.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node3137.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node3137.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node3137.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref2947.rebind());
        
        var ref2948 = placeholder;
        if(ref2948.get() !== null) {
          node3137.attr('placeholder', ref2948.get());
          subs__.addSub(ref2948.addEventListener('change', function(_, ref, val) {
            node3137.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref2948.rebind());
        
        var ref2949 = temp;
        node3137.val(""+ref2949.get());
        var ignore579 = false;
        subs__.addSub(ref2949.addEventListener('change', function(_, ref, val) {
          if(ignore579) return;
          node3137.val(""+val);
        }));
        subs__.addSub(ref2949.rebind());
        
        subs__.addSub(mobl.domBind(node3137, 'keyup change', function() {
          ignore579 = true;
          temp.set(mobl.stringTomobl__String(node3137.val()));
          ignore579 = false;
        }));
        
        
        var val1495 = onchange.get();
        if(val1495 !== null) {
          subs__.addSub(mobl.domBind(node3137, 'change', val1495));
        }
        
        var val1496 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after453(result__) {
                          var tmp7813 = result__;
                          function after454(result__) {
                            var tmp7814 = result__;
                            var result__ = tmp7814;
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
                          var result__ = validator.get()(temp.get(), after454);if(result__ !== undefined) after454(result__);
                        }
                        var result__ = onkeyup.get()(event, after453);if(result__ !== undefined) after453(result__);
                      } else {
                        {
                          function after455(result__) {
                            var tmp7814 = result__;
                            var result__ = tmp7814;
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
                          var result__ = validator.get()(temp.get(), after455);if(result__ !== undefined) after455(result__);
                        }
                      }
                    };
        if(val1496 !== null) {
          subs__.addSub(mobl.domBind(node3137, 'keyup', val1496));
        }
        
        var val1497 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1497 !== null) {
          subs__.addSub(mobl.domBind(node3137, 'blur', val1497));
        }
        
        node3136.append(node3137);
        var nodes8135 = $("<span>");
        node3136.append(nodes8135);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root10268 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root10268); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes8135;
          nodes8135 = node.contents();
          oldNodes.replaceWith(nodes8135);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after456);if(result__ !== undefined) after456(result__);
    } else {
      
      var node3138 = $("<input>");
      
      var ref2950 = inputType;
      if(ref2950.get() !== null) {
        node3138.attr('type', ref2950.get());
        subs__.addSub(ref2950.addEventListener('change', function(_, ref, val) {
          node3138.attr('type', val);
        }));
        
      }
      subs__.addSub(ref2950.rebind());
      
      var ref2951 = style;
      if(ref2951.get() !== null) {
        node3138.attr('class', ref2951.get());
        subs__.addSub(ref2951.addEventListener('change', function(_, ref, val) {
          node3138.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2951.rebind());
      
      var ref2952 = placeholder;
      if(ref2952.get() !== null) {
        node3138.attr('placeholder', ref2952.get());
        subs__.addSub(ref2952.addEventListener('change', function(_, ref, val) {
          node3138.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2952.rebind());
      
      var ref2953 = s;
      node3138.val(""+ref2953.get());
      var ignore580 = false;
      subs__.addSub(ref2953.addEventListener('change', function(_, ref, val) {
        if(ignore580) return;
        node3138.val(""+val);
      }));
      subs__.addSub(ref2953.rebind());
      
      subs__.addSub(mobl.domBind(node3138, 'keyup change', function() {
        ignore580 = true;
        s.set(mobl.stringTomobl__String(node3138.val()));
        ignore580 = false;
      }));
      
      
      var val1498 = onchange.get();
      if(val1498 !== null) {
        subs__.addSub(mobl.domBind(node3138, 'change', val1498));
      }
      
      var val1499 = onkeyup.get();
      if(val1499 !== null) {
        subs__.addSub(mobl.domBind(node3138, 'keyup', val1499));
      }
      
      var val1500 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1500 !== null) {
        subs__.addSub(mobl.domBind(node3138, 'blur', val1500));
      }
      
      node3136.append(node3138);
      
      
    }
  };
  renderCond799();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond799();
  }));
  
  callback(root10266); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root10269 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes8136 = $("<span>");
  root10269.append(nodes8136);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root10270 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10270); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8136;
    nodes8136 = node.contents();
    oldNodes.replaceWith(nodes8136);
  }));
  callback(root10269); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root10271 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes8137 = $("<span>");
  root10271.append(nodes8137);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root10272 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10272); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8137;
    nodes8137 = node.contents();
    oldNodes.replaceWith(nodes8137);
  }));
  callback(root10271); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root10273 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3139 = $("<span>");
  root10273.append(node3139);
  var condSubs800 = new mobl.CompSubscription();
  subs__.addSub(condSubs800);
  var oldValue800;
  var renderCond800 = function() {
    var value1788 = label.get();
    if(oldValue800 === value1788) return;
    oldValue800 = value1788;
    var subs__ = condSubs800;
    subs__.unsubscribe();
    node3139.empty();
    if(value1788) {
      var nodes8138 = $("<span>");
      node3139.append(nodes8138);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root10274 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10274); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8138;
        nodes8138 = node.contents();
        oldNodes.replaceWith(nodes8138);
      }));
      
      
    } else {
      
    }
  };
  renderCond800();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond800();
  }));
  
  
  var node3140 = $("<input>");
  node3140.attr('type', "range");
  
  var ref2954 = n;
  node3140.val(""+ref2954.get());
  var ignore581 = false;
  subs__.addSub(ref2954.addEventListener('change', function(_, ref, val) {
    if(ignore581) return;
    node3140.val(""+val);
  }));
  subs__.addSub(ref2954.rebind());
  
  subs__.addSub(mobl.domBind(node3140, 'keyup change', function() {
    ignore581 = true;
    n.set(mobl.stringTomobl__Num(node3140.val()));
    ignore581 = false;
  }));
  
  
  var ref2955 = min;
  if(ref2955.get() !== null) {
    node3140.attr('min', ref2955.get());
    subs__.addSub(ref2955.addEventListener('change', function(_, ref, val) {
      node3140.attr('min', val);
    }));
    
  }
  subs__.addSub(ref2955.rebind());
  
  var ref2956 = max;
  if(ref2956.get() !== null) {
    node3140.attr('max', ref2956.get());
    subs__.addSub(ref2956.addEventListener('change', function(_, ref, val) {
      node3140.attr('max', val);
    }));
    
  }
  subs__.addSub(ref2956.rebind());
  
  var ref2957 = step;
  if(ref2957.get() !== null) {
    node3140.attr('step', ref2957.get());
    subs__.addSub(ref2957.addEventListener('change', function(_, ref, val) {
      node3140.attr('step', val);
    }));
    
  }
  subs__.addSub(ref2957.rebind());
  node3140.attr('style', "width: 99%;");
  
  var val1501 = onchange.get();
  if(val1501 !== null) {
    subs__.addSub(mobl.domBind(node3140, 'change', val1501));
  }
  
  var val1502 = onkeyup.get();
  if(val1502 !== null) {
    subs__.addSub(mobl.domBind(node3140, 'keyup', val1502));
  }
  
  var ref2958 = placeholder;
  if(ref2958.get() !== null) {
    node3140.attr('placeholder', ref2958.get());
    subs__.addSub(ref2958.addEventListener('change', function(_, ref, val) {
      node3140.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref2958.rebind());
  
  root10273.append(node3140);
  callback(root10273); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root10275 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after457(result__) {
      var tmp7815 = result__;
      var result__ = tmp7815;
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
    var result__ = validator.get()(n2, after457);if(result__ !== undefined) after457(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes8139 = $("<span>");
  root10275.append(nodes8139);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root10276 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10276); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8139;
    nodes8139 = node.contents();
    oldNodes.replaceWith(nodes8139);
  }));
  callback(root10275); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root10277 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3141 = $("<span>");
  root10277.append(node3141);
  var condSubs801 = new mobl.CompSubscription();
  subs__.addSub(condSubs801);
  var oldValue801;
  var renderCond801 = function() {
    var value1789 = label.get();
    if(oldValue801 === value1789) return;
    oldValue801 = value1789;
    var subs__ = condSubs801;
    subs__.unsubscribe();
    node3141.empty();
    if(value1789) {
      
      var node3142 = $("<span>");
      node3142.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref2962 = label;
      node3142.text(""+ref2962.get());
      var ignore583 = false;
      subs__.addSub(ref2962.addEventListener('change', function(_, ref, val) {
        if(ignore583) return;
        node3142.text(""+val);
      }));
      subs__.addSub(ref2962.rebind());
      
      
      node3141.append(node3142);
      
      var node3143 = $("<span>");
      node3143.attr('style', "float: left");
      
      
      var node3144 = $("<input>");
      node3144.attr('type', "password");
      
      var ref2959 = style;
      if(ref2959.get() !== null) {
        node3144.attr('class', ref2959.get());
        subs__.addSub(ref2959.addEventListener('change', function(_, ref, val) {
          node3144.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2959.rebind());
      
      var ref2960 = placeholder;
      if(ref2960.get() !== null) {
        node3144.attr('placeholder', ref2960.get());
        subs__.addSub(ref2960.addEventListener('change', function(_, ref, val) {
          node3144.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2960.rebind());
      
      var ref2961 = s;
      node3144.val(""+ref2961.get());
      var ignore582 = false;
      subs__.addSub(ref2961.addEventListener('change', function(_, ref, val) {
        if(ignore582) return;
        node3144.val(""+val);
      }));
      subs__.addSub(ref2961.rebind());
      
      subs__.addSub(mobl.domBind(node3144, 'keyup change', function() {
        ignore582 = true;
        s.set(mobl.stringTomobl__String(node3144.val()));
        ignore582 = false;
      }));
      
      
      var val1503 = onchange.get();
      if(val1503 !== null) {
        subs__.addSub(mobl.domBind(node3144, 'change', val1503));
      }
      
      var val1504 = onkeyup.get();
      if(val1504 !== null) {
        subs__.addSub(mobl.domBind(node3144, 'keyup', val1504));
      }
      
      var val1505 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1505 !== null) {
        subs__.addSub(mobl.domBind(node3144, 'blur', val1505));
      }
      
      node3143.append(node3144);
      node3141.append(node3143);
      
      
      
      
    } else {
      
      var node3145 = $("<input>");
      node3145.attr('type', "password");
      
      var ref2963 = style;
      if(ref2963.get() !== null) {
        node3145.attr('class', ref2963.get());
        subs__.addSub(ref2963.addEventListener('change', function(_, ref, val) {
          node3145.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2963.rebind());
      
      var ref2964 = placeholder;
      if(ref2964.get() !== null) {
        node3145.attr('placeholder', ref2964.get());
        subs__.addSub(ref2964.addEventListener('change', function(_, ref, val) {
          node3145.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2964.rebind());
      
      var ref2965 = s;
      node3145.val(""+ref2965.get());
      var ignore584 = false;
      subs__.addSub(ref2965.addEventListener('change', function(_, ref, val) {
        if(ignore584) return;
        node3145.val(""+val);
      }));
      subs__.addSub(ref2965.rebind());
      
      subs__.addSub(mobl.domBind(node3145, 'keyup change', function() {
        ignore584 = true;
        s.set(mobl.stringTomobl__String(node3145.val()));
        ignore584 = false;
      }));
      
      
      var val1506 = onchange.get();
      if(val1506 !== null) {
        subs__.addSub(mobl.domBind(node3145, 'change', val1506));
      }
      
      var val1507 = onkeyup.get();
      if(val1507 !== null) {
        subs__.addSub(mobl.domBind(node3145, 'keyup', val1507));
      }
      
      var val1508 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1508 !== null) {
        subs__.addSub(mobl.domBind(node3145, 'blur', val1508));
      }
      
      node3141.append(node3145);
      
      
    }
  };
  renderCond801();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond801();
  }));
  
  callback(root10277); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root10278 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref2970 = style;
  if(ref2970.get() !== null) {
    sel.attr('class', ref2970.get());
    subs__.addSub(ref2970.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2970.rebind());
  
  var val1509 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after458(result__) {
                    var tmp7817 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after458);if(result__ !== undefined) after458(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1509 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val1509));
  }
  
  
  var node3146 = mobl.loadingSpan();
  sel.append(node3146);
  var list550;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList550 = function() {
    var subs__ = listSubs__;
    list550 = options.get();
    list550.list(function(results550) {
      node3146.empty();
      for(var i1312 = 0; i1312 < results550.length; i1312++) {
        (function() {
          var iternode550 = $("<span>");
          node3146.append(iternode550);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results550), i1312), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results550), i1312), "_2");
          
          var node3147 = $("<option>");
          
          var ref2966 = optionDescription;
          node3147.text(""+ref2966.get());
          var ignore585 = false;
          subs__.addSub(ref2966.addEventListener('change', function(_, ref, val) {
            if(ignore585) return;
            node3147.text(""+val);
          }));
          subs__.addSub(ref2966.rebind());
          
          
          var ref2967 = optionStyle;
          if(ref2967.get() !== null) {
            node3147.attr('class', ref2967.get());
            subs__.addSub(ref2967.addEventListener('change', function(_, ref, val) {
              node3147.attr('class', val);
            }));
            
          }
          subs__.addSub(ref2967.rebind());
          
          var ref2968 = optionValue;
          if(ref2968.get() !== null) {
            node3147.attr('value', ref2968.get());
            subs__.addSub(ref2968.addEventListener('change', function(_, ref, val) {
              node3147.attr('value', val);
            }));
            
          }
          subs__.addSub(ref2968.rebind());
          
          var ref2969 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref2969.get() !== null) {
            node3147.attr('selected', ref2969.get());
            subs__.addSub(ref2969.addEventListener('change', function(_, ref, val) {
              node3147.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node3147.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node3147.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref2969.rebind());
          
          iternode550.append(node3147);
          
          var oldNodes = iternode550;
          iternode550 = iternode550.contents();
          oldNodes.replaceWith(iternode550);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list550.addEventListener('change', function() { listSubs__.unsubscribe(); renderList550(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList550(true); }));
    });
  };
  renderList550();
  
  root10278.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root10278); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root10279 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes8140 = $("<span>");
    root10279.append(nodes8140);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root10280 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node3148 = mobl.loadingSpan();
      root10280.append(node3148);
      var list551;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList551 = function() {
        var subs__ = listSubs__;
        list551 = tabs.get();
        list551.list(function(results551) {
          node3148.empty();
          for(var i1313 = 0; i1313 < results551.length; i1313++) {
            (function() {
              var iternode551 = $("<span>");
              node3148.append(iternode551);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results551), i1313), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results551), i1313), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results551), i1313), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp7773 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp7773.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp7773.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp7773.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp7773.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp7772 = mobl.ref(result__);
              
              var nodes8141 = $("<span>");
              iternode551.append(nodes8141);
              subs__.addSub((mobl.span)(tmp7773, mobl.ref(null), tmp7772, mobl.ref(null), function(_, callback) {
                var root10281 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes8142 = $("<span>");
                root10281.append(nodes8142);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root10282 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root10282); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes8142;
                  nodes8142 = node.contents();
                  oldNodes.replaceWith(nodes8142);
                }));
                callback(root10281); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes8141;
                nodes8141 = node.contents();
                oldNodes.replaceWith(nodes8141);
              }));
              
              var oldNodes = iternode551;
              iternode551 = iternode551.contents();
              oldNodes.replaceWith(iternode551);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list551.addEventListener('change', function() { listSubs__.unsubscribe(); renderList551(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList551(true); }));
        });
      };
      renderList551();
      
      callback(root10280); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8140;
      nodes8140 = node.contents();
      oldNodes.replaceWith(nodes8140);
    }));
    
    var node3149 = mobl.loadingSpan();
    root10279.append(node3149);
    var list552;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList552 = function() {
      var subs__ = listSubs__;
      list552 = tabs.get();
      list552.list(function(results552) {
        node3149.empty();
        for(var i1314 = 0; i1314 < results552.length; i1314++) {
          (function() {
            var iternode552 = $("<span>");
            node3149.append(iternode552);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results552), i1314), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results552), i1314), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results552), i1314), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp7774 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp7774.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp7774.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp7774.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp7774.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes8143 = $("<span>");
            iternode552.append(nodes8143);
            subs__.addSub((mobl.block)(tmp7774, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root10283 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes8144 = $("<span>");
              root10283.append(nodes8144);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root10284 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes8145 = $("<span>");
                root10284.append(nodes8145);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl1287();
                }));
                
                function renderControl1287() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root10285 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root10285); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes8145;
                    nodes8145 = node.contents();
                    oldNodes.replaceWith(nodes8145);
                  }));
                }
                renderControl1287();
                callback(root10284); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes8144;
                nodes8144 = node.contents();
                oldNodes.replaceWith(nodes8144);
              }));
              callback(root10283); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes8143;
              nodes8143 = node.contents();
              oldNodes.replaceWith(nodes8143);
            }));
            
            var oldNodes = iternode552;
            iternode552 = iternode552.contents();
            oldNodes.replaceWith(iternode552);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list552.addEventListener('change', function() { listSubs__.unsubscribe(); renderList552(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList552(true); }));
      });
    };
    renderList552();
    
    callback(root10279); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes8140 = $("<span>");
      root10279.append(nodes8140);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10280 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node3148 = mobl.loadingSpan();
        root10280.append(node3148);
        var list551;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList551 = function() {
          var subs__ = listSubs__;
          list551 = tabs.get();
          list551.list(function(results551) {
            node3148.empty();
            for(var i1313 = 0; i1313 < results551.length; i1313++) {
              (function() {
                var iternode551 = $("<span>");
                node3148.append(iternode551);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results551), i1313), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results551), i1313), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results551), i1313), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp7773 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp7773.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp7773.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp7773.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp7773.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp7772 = mobl.ref(result__);
                
                var nodes8141 = $("<span>");
                iternode551.append(nodes8141);
                subs__.addSub((mobl.span)(tmp7773, mobl.ref(null), tmp7772, mobl.ref(null), function(_, callback) {
                  var root10281 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes8142 = $("<span>");
                  root10281.append(nodes8142);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root10282 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root10282); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes8142;
                    nodes8142 = node.contents();
                    oldNodes.replaceWith(nodes8142);
                  }));
                  callback(root10281); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes8141;
                  nodes8141 = node.contents();
                  oldNodes.replaceWith(nodes8141);
                }));
                
                var oldNodes = iternode551;
                iternode551 = iternode551.contents();
                oldNodes.replaceWith(iternode551);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list551.addEventListener('change', function() { listSubs__.unsubscribe(); renderList551(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList551(true); }));
          });
        };
        renderList551();
        
        callback(root10280); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes8140;
        nodes8140 = node.contents();
        oldNodes.replaceWith(nodes8140);
      }));
      
      var node3149 = mobl.loadingSpan();
      root10279.append(node3149);
      var list552;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList552 = function() {
        var subs__ = listSubs__;
        list552 = tabs.get();
        list552.list(function(results552) {
          node3149.empty();
          for(var i1314 = 0; i1314 < results552.length; i1314++) {
            (function() {
              var iternode552 = $("<span>");
              node3149.append(iternode552);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results552), i1314), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results552), i1314), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results552), i1314), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp7774 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp7774.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp7774.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp7774.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp7774.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes8143 = $("<span>");
              iternode552.append(nodes8143);
              subs__.addSub((mobl.block)(tmp7774, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root10283 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes8144 = $("<span>");
                root10283.append(nodes8144);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root10284 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes8145 = $("<span>");
                  root10284.append(nodes8145);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl1287();
                  }));
                  
                  function renderControl1287() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root10285 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root10285); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes8145;
                      nodes8145 = node.contents();
                      oldNodes.replaceWith(nodes8145);
                    }));
                  }
                  renderControl1287();
                  callback(root10284); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes8144;
                  nodes8144 = node.contents();
                  oldNodes.replaceWith(nodes8144);
                }));
                callback(root10283); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes8143;
                nodes8143 = node.contents();
                oldNodes.replaceWith(nodes8143);
              }));
              
              var oldNodes = iternode552;
              iternode552 = iternode552.contents();
              oldNodes.replaceWith(iternode552);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list552.addEventListener('change', function() { listSubs__.unsubscribe(); renderList552(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList552(true); }));
        });
      };
      renderList552();
      
      callback(root10279); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root10286 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3150 = $("<div>");
  
  var ref2974 = mobl.ref(ui.searchboxStyle);
  if(ref2974.get() !== null) {
    node3150.attr('class', ref2974.get());
    subs__.addSub(ref2974.addEventListener('change', function(_, ref, val) {
      node3150.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2974.rebind());
  
  
  var node3151 = $("<input>");
  node3151.attr('type', "search");
  
  var ref2971 = mobl.ref(ui.searchBoxInputStyle);
  if(ref2971.get() !== null) {
    node3151.attr('class', ref2971.get());
    subs__.addSub(ref2971.addEventListener('change', function(_, ref, val) {
      node3151.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2971.rebind());
  
  var ref2972 = placeholder;
  if(ref2972.get() !== null) {
    node3151.attr('placeholder', ref2972.get());
    subs__.addSub(ref2972.addEventListener('change', function(_, ref, val) {
      node3151.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref2972.rebind());
  
  var ref2973 = s;
  node3151.val(""+ref2973.get());
  var ignore586 = false;
  subs__.addSub(ref2973.addEventListener('change', function(_, ref, val) {
    if(ignore586) return;
    node3151.val(""+val);
  }));
  subs__.addSub(ref2973.rebind());
  
  subs__.addSub(mobl.domBind(node3151, 'keyup change', function() {
    ignore586 = true;
    s.set(mobl.stringTomobl__String(node3151.val()));
    ignore586 = false;
  }));
  
  
  var val1510 = onsearch.get();
  if(val1510 !== null) {
    subs__.addSub(mobl.domBind(node3151, 'change', val1510));
  }
  
  var val1511 = onkeyup.get();
  if(val1511 !== null) {
    subs__.addSub(mobl.domBind(node3151, 'keyup', val1511));
  }
  node3151.attr('autocorrect', false);
  node3151.attr('autocapitalize', false);
  node3151.attr('autocomplete', false);
  
  node3150.append(node3151);
  root10286.append(node3150);
  callback(root10286); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root10287 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref2975 = mobl.ref(ui.contextMenuStyle);
  if(ref2975.get() !== null) {
    menu.attr('class', ref2975.get());
    subs__.addSub(ref2975.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2975.rebind());
  
  var nodes8146 = $("<span>");
  menu.append(nodes8146);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1288();
  }));
  
  function renderControl1288() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10288 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10288); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8146;
      nodes8146 = node.contents();
      oldNodes.replaceWith(nodes8146);
    }));
  }
  renderControl1288();
  root10287.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val1512 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp7820 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val1512 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val1512));
  }
  
  root10287.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root10287); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root10289 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp7804 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp7804.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node3152 = $("<span>");
  root10289.append(node3152);
  var condSubs802 = new mobl.CompSubscription();
  subs__.addSub(condSubs802);
  var oldValue802;
  var renderCond802 = function() {
    var value1790 = tmp7804.get();
    if(oldValue802 === value1790) return;
    oldValue802 = value1790;
    var subs__ = condSubs802;
    subs__.unsubscribe();
    node3152.empty();
    if(value1790) {
      items.get().one(function(result__) {
        var tmp7821 = result__;
        var current = mobl.ref(result__);
        
        var node3153 = $("<div>");
        node3153.attr('width', "100%");
        
        
        var node3154 = $("<div>");
        node3154.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes8149 = $("<span>");
        node3154.append(nodes8149);
        subs__.addSub((ui.group)(function(_, callback) {
          var root10292 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node3157 = mobl.loadingSpan();
          root10292.append(node3157);
          var list553;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList553 = function() {
            var subs__ = listSubs__;
            list553 = items.get();
            list553.list(function(results553) {
              node3157.empty();
              for(var i1315 = 0; i1315 < results553.length; i1315++) {
                (function() {
                  var iternode553 = $("<span>");
                  node3157.append(iternode553);
                  var it;
                  it = mobl.ref(mobl.ref(results553), i1315);
                  var result__ = it.get() == current.get();
                  var tmp7780 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp7780.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp7780.set(it.get() == current.get());
                  }));
                  
                  
                  var node3158 = $("<span>");
                  iternode553.append(node3158);
                  var condSubs804 = new mobl.CompSubscription();
                  subs__.addSub(condSubs804);
                  var oldValue804;
                  var renderCond804 = function() {
                    var value1792 = tmp7780.get();
                    if(oldValue804 === value1792) return;
                    oldValue804 = value1792;
                    var subs__ = condSubs804;
                    subs__.unsubscribe();
                    node3158.empty();
                    if(value1792) {
                      var nodes8150 = $("<span>");
                      node3158.append(nodes8150);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root10293 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes8151 = $("<span>");
                        root10293.append(nodes8151);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1290();
                        }));
                        
                        function renderControl1290() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root10294 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root10294); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes8151;
                            nodes8151 = node.contents();
                            oldNodes.replaceWith(nodes8151);
                          }));
                        }
                        renderControl1290();
                        callback(root10293); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes8150;
                        nodes8150 = node.contents();
                        oldNodes.replaceWith(nodes8150);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp7779 = mobl.ref(result__);
                      
                      var nodes8152 = $("<span>");
                      node3158.append(nodes8152);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7779, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root10295 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes8153 = $("<span>");
                        root10295.append(nodes8153);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1291();
                        }));
                        
                        function renderControl1291() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root10296 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root10296); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes8153;
                            nodes8153 = node.contents();
                            oldNodes.replaceWith(nodes8153);
                          }));
                        }
                        renderControl1291();
                        callback(root10295); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes8152;
                        nodes8152 = node.contents();
                        oldNodes.replaceWith(nodes8152);
                      }));
                      
                      
                    }
                  };
                  renderCond804();
                  subs__.addSub(tmp7780.addEventListener('change', function() {
                    renderCond804();
                  }));
                  
                  
                  var oldNodes = iternode553;
                  iternode553 = iternode553.contents();
                  oldNodes.replaceWith(iternode553);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list553.addEventListener('change', function() { listSubs__.unsubscribe(); renderList553(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList553(true); }));
            });
          };
          renderList553();
          
          callback(root10292); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes8149;
          nodes8149 = node.contents();
          oldNodes.replaceWith(nodes8149);
        }));
        node3153.append(node3154);
        
        var node3155 = $("<div>");
        node3155.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node3156 = $("<span>");
        node3155.append(node3156);
        var condSubs803 = new mobl.CompSubscription();
        subs__.addSub(condSubs803);
        var oldValue803;
        var renderCond803 = function() {
          var value1791 = current.get();
          if(oldValue803 === value1791) return;
          oldValue803 = value1791;
          var subs__ = condSubs803;
          subs__.unsubscribe();
          node3156.empty();
          if(value1791) {
            var nodes8147 = $("<span>");
            node3156.append(nodes8147);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl1289();
            }));
            
            function renderControl1289() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root10290 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root10290); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes8147;
                nodes8147 = node.contents();
                oldNodes.replaceWith(nodes8147);
              }));
            }
            renderControl1289();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp7781 = mobl.ref(result__);
            
            var nodes8148 = $("<span>");
            node3156.append(nodes8148);
            subs__.addSub((mobl.label)(tmp7781, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root10291 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root10291); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes8148;
              nodes8148 = node.contents();
              oldNodes.replaceWith(nodes8148);
            }));
            
            
          }
        };
        renderCond803();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond803();
        }));
        
        node3153.append(node3155);
        node3152.append(node3153);
        
        
        
        
        
        
      });
    } else {
      var nodes8154 = $("<span>");
      node3152.append(nodes8154);
      subs__.addSub((ui.group)(function(_, callback) {
        var root10297 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node3159 = mobl.loadingSpan();
        root10297.append(node3159);
        var list554;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList554 = function() {
          var subs__ = listSubs__;
          list554 = items.get();
          list554.list(function(results554) {
            node3159.empty();
            for(var i1316 = 0; i1316 < results554.length; i1316++) {
              (function() {
                var iternode554 = $("<span>");
                node3159.append(iternode554);
                var it;
                it = mobl.ref(mobl.ref(results554), i1316);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp7822 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp7775 = mobl.ref(result__);
                
                var nodes8155 = $("<span>");
                iternode554.append(nodes8155);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7775, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root10298 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes8156 = $("<span>");
                  root10298.append(nodes8156);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl1292();
                  }));
                  
                  function renderControl1292() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root10299 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root10299); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes8156;
                      nodes8156 = node.contents();
                      oldNodes.replaceWith(nodes8156);
                    }));
                  }
                  renderControl1292();
                  callback(root10298); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes8155;
                  nodes8155 = node.contents();
                  oldNodes.replaceWith(nodes8155);
                }));
                
                var oldNodes = iternode554;
                iternode554 = iternode554.contents();
                oldNodes.replaceWith(iternode554);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list554.addEventListener('change', function() { listSubs__.unsubscribe(); renderList554(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList554(true); }));
          });
        };
        renderList554();
        
        callback(root10297); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes8154;
        nodes8154 = node.contents();
        oldNodes.replaceWith(nodes8154);
      }));
      
      
    }
  };
  renderCond802();
  subs__.addSub(tmp7804.addEventListener('change', function() {
    renderCond802();
  }));
  
  callback(root10289); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root10300 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp7778 = mobl.ref(result__);
  
  var nodes8157 = $("<span>");
  root10300.append(nodes8157);
  subs__.addSub((ui.header)(tmp7778, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root10301 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7777 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7776 = mobl.ref(result__);
    
    var nodes8158 = $("<span>");
    root10301.append(nodes8158);
    subs__.addSub((ui.backButton)(tmp7776, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7777, function(_, callback) {
      var root10302 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10302); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8158;
      nodes8158 = node.contents();
      oldNodes.replaceWith(nodes8158);
    }));
    callback(root10301); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8157;
    nodes8157 = node.contents();
    oldNodes.replaceWith(nodes8157);
  }));
  var nodes8159 = $("<span>");
  root10300.append(nodes8159);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl1293();
  }));
  
  function renderControl1293() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root10303 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10303); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8159;
      nodes8159 = node.contents();
      oldNodes.replaceWith(nodes8159);
    }));
  }
  renderControl1293();
  callback(root10300); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root10304 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes8160 = $("<span>");
  root10304.append(nodes8160);
  subs__.addSub((ui.group)(function(_, callback) {
    var root10305 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3160 = mobl.loadingSpan();
    root10305.append(node3160);
    var list555;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList555 = function() {
      var subs__ = listSubs__;
      list555 = coll.get();
      list555.list(function(results555) {
        node3160.empty();
        for(var i1317 = 0; i1317 < results555.length; i1317++) {
          (function() {
            var iternode555 = $("<span>");
            node3160.append(iternode555);
            var it;
            it = mobl.ref(mobl.ref(results555), i1317);
            var result__ = it.get() == selected.get();
            var tmp7783 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp7783.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp7783.set(it.get() == selected.get());
            }));
            
            
            var node3161 = $("<span>");
            iternode555.append(node3161);
            var condSubs805 = new mobl.CompSubscription();
            subs__.addSub(condSubs805);
            var oldValue805;
            var renderCond805 = function() {
              var value1793 = tmp7783.get();
              if(oldValue805 === value1793) return;
              oldValue805 = value1793;
              var subs__ = condSubs805;
              subs__.unsubscribe();
              node3161.empty();
              if(value1793) {
                var nodes8161 = $("<span>");
                node3161.append(nodes8161);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root10306 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes8162 = $("<span>");
                  root10306.append(nodes8162);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl1294();
                  }));
                  
                  function renderControl1294() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root10307 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root10307); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes8162;
                      nodes8162 = node.contents();
                      oldNodes.replaceWith(nodes8162);
                    }));
                  }
                  renderControl1294();
                  callback(root10306); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes8161;
                  nodes8161 = node.contents();
                  oldNodes.replaceWith(nodes8161);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp7782 = mobl.ref(result__);
                
                var nodes8163 = $("<span>");
                node3161.append(nodes8163);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7782, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root10308 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes8164 = $("<span>");
                  root10308.append(nodes8164);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl1295();
                  }));
                  
                  function renderControl1295() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root10309 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root10309); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes8164;
                      nodes8164 = node.contents();
                      oldNodes.replaceWith(nodes8164);
                    }));
                  }
                  renderControl1295();
                  callback(root10308); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes8163;
                  nodes8163 = node.contents();
                  oldNodes.replaceWith(nodes8163);
                }));
                
                
              }
            };
            renderCond805();
            subs__.addSub(tmp7783.addEventListener('change', function() {
              renderCond805();
            }));
            
            
            var oldNodes = iternode555;
            iternode555 = iternode555.contents();
            oldNodes.replaceWith(iternode555);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list555.addEventListener('change', function() { listSubs__.unsubscribe(); renderList555(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList555(true); }));
      });
    };
    renderList555();
    
    callback(root10305); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8160;
    nodes8160 = node.contents();
    oldNodes.replaceWith(nodes8160);
  }));
  callback(root10304); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root10310 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp7823 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp7784 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp7784.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp7784.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp7784.set(coll.get().limit(n.get()));
    }));
    
    
    var node3162 = mobl.loadingSpan();
    root10310.append(node3162);
    var list556;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList556 = function() {
      var subs__ = listSubs__;
      list556 = tmp7784.get();
      list556.list(function(results556) {
        node3162.empty();
        for(var i1318 = 0; i1318 < results556.length; i1318++) {
          (function() {
            var iternode556 = $("<span>");
            node3162.append(iternode556);
            var it;
            it = mobl.ref(mobl.ref(results556), i1318);
            var nodes8165 = $("<span>");
            iternode556.append(nodes8165);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl1296();
            }));
            
            function renderControl1296() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root10311 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root10311); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes8165;
                nodes8165 = node.contents();
                oldNodes.replaceWith(nodes8165);
              }));
            }
            renderControl1296();
            
            var oldNodes = iternode556;
            iternode556 = iternode556.contents();
            oldNodes.replaceWith(iternode556);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list556.addEventListener('change', function() { listSubs__.unsubscribe(); renderList556(true); }));
        subs__.addSub(tmp7784.addEventListener('change', function() { listSubs__.unsubscribe(); renderList556(true); }));
      });
    };
    renderList556();
    
    var result__ = n.get() < total.get();
    var tmp7786 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp7786.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp7786.set(n.get() < total.get());
    }));
    
    
    var node3163 = $("<span>");
    root10310.append(node3163);
    var condSubs806 = new mobl.CompSubscription();
    subs__.addSub(condSubs806);
    var oldValue806;
    var renderCond806 = function() {
      var value1794 = tmp7786.get();
      if(oldValue806 === value1794) return;
      oldValue806 = value1794;
      var subs__ = condSubs806;
      subs__.unsubscribe();
      node3163.empty();
      if(value1794) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp7785 = mobl.ref(result__);
        
        var nodes8166 = $("<span>");
        node3163.append(nodes8166);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp7785, mobl.ref(null), function(_, callback) {
          var root10312 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes8167 = $("<span>");
          root10312.append(nodes8167);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root10313 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root10313); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes8167;
            nodes8167 = node.contents();
            oldNodes.replaceWith(nodes8167);
          }));
          callback(root10312); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes8166;
          nodes8166 = node.contents();
          oldNodes.replaceWith(nodes8166);
        }));
        
        
      } else {
        
      }
    };
    renderCond806();
    subs__.addSub(tmp7786.addEventListener('change', function() {
      renderCond806();
    }));
    
    callback(root10310); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root10314 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes8168 = $("<span>");
  root10314.append(nodes8168);
  subs__.addSub((ui.group)(function(_, callback) {
    var root10315 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3164 = mobl.loadingSpan();
    root10315.append(node3164);
    var list557;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList557 = function() {
      var subs__ = listSubs__;
      list557 = items.get();
      list557.list(function(results557) {
        node3164.empty();
        for(var i1319 = 0; i1319 < results557.length; i1319++) {
          (function() {
            var iternode557 = $("<span>");
            node3164.append(iternode557);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results557), i1319), "_1");it = mobl.ref(mobl.ref(mobl.ref(results557), i1319), "_2");
            var nodes8169 = $("<span>");
            iternode557.append(nodes8169);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root10316 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes8170 = $("<span>");
              root10316.append(nodes8170);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root10317 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root10317); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes8170;
                nodes8170 = node.contents();
                oldNodes.replaceWith(nodes8170);
              }));
              callback(root10316); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes8169;
              nodes8169 = node.contents();
              oldNodes.replaceWith(nodes8169);
            }));
            
            var oldNodes = iternode557;
            iternode557 = iternode557.contents();
            oldNodes.replaceWith(iternode557);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list557.addEventListener('change', function() { listSubs__.unsubscribe(); renderList557(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList557(true); }));
      });
    };
    renderList557();
    
    callback(root10315); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8168;
    nodes8168 = node.contents();
    oldNodes.replaceWith(nodes8168);
  }));
  callback(root10314); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root10318 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll1777) {
    coll1777 = coll1777.reverse();
    function processOne295() {
      var it;
      it = coll1777.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll1777.length > 0) processOne295(); else rest295();
      
    }
    function rest295() {
      var nodes8171 = $("<span>");
      root10318.append(nodes8171);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root10319 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp7787 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp7788 = mobl.ref(result__);
        
        var nodes8172 = $("<span>");
        root10319.append(nodes8172);
        subs__.addSub((ui.backButton)(tmp7788, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7787, function(_, callback) {
          var root10320 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root10320); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes8172;
          nodes8172 = node.contents();
          oldNodes.replaceWith(nodes8172);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll1776) {
                           coll1776 = coll1776.reverse();
                           function processOne294() {
                             var checked;var it;
                             var tmp7825 = coll1776.pop();
                             checked = tmp7825._1;it = tmp7825._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll1776.length > 0) processOne294(); else rest294();
                               
                             } else {
                               {
                                 
                                 if(coll1776.length > 0) processOne294(); else rest294();
                                 
                               }
                             }
                           }
                           function rest294() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll1776.length > 0) processOne294(); else rest294();
                         });
                         
                       };
        var tmp7789 = mobl.ref(result__);
        
        var nodes8173 = $("<span>");
        root10319.append(nodes8173);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp7789, function(_, callback) {
          var root10321 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root10321); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes8173;
          nodes8173 = node.contents();
          oldNodes.replaceWith(nodes8173);
        }));
        callback(root10319); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes8171;
        nodes8171 = node.contents();
        oldNodes.replaceWith(nodes8171);
      }));
      var nodes8174 = $("<span>");
      root10318.append(nodes8174);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root10322 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10322); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8174;
        nodes8174 = node.contents();
        oldNodes.replaceWith(nodes8174);
      }));
      callback(root10318); return subs__;
      
      
    }
    if(coll1777.length > 0) processOne295(); else rest295();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root10323 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes8175 = $("<span>");
  root10323.append(nodes8175);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root10324 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10324); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8175;
    nodes8175 = node.contents();
    oldNodes.replaceWith(nodes8175);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp7790 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp7790.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp7790.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp7790.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp7790.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp7790.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes8176 = $("<span>");
  root10323.append(nodes8176);
  subs__.addSub((ui.masterDetail)(tmp7790, masterItem, detailItem, function(_, callback) {
    var root10325 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10325); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8176;
    nodes8176 = node.contents();
    oldNodes.replaceWith(nodes8176);
  }));
  callback(root10323); return subs__;
  
  
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
  var root10326 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes8177 = $("<span>");
  root10326.append(nodes8177);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root10327 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3165 = mobl.loadingSpan();
    root10327.append(node3165);
    var list558;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList558 = function() {
      var subs__ = listSubs__;
      list558 = sections.get();
      list558.list(function(results558) {
        node3165.empty();
        for(var i1320 = 0; i1320 < results558.length; i1320++) {
          (function() {
            var iternode558 = $("<span>");
            node3165.append(iternode558);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results558), i1320), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results558), i1320), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp7792 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp7792.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp7792.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp7792.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp7792.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp7791 = mobl.ref(result__);
            
            var nodes8178 = $("<span>");
            iternode558.append(nodes8178);
            subs__.addSub((mobl.span)(tmp7792, mobl.ref(null), tmp7791, mobl.ref(null), function(_, callback) {
              var root10328 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes8179 = $("<span>");
              root10328.append(nodes8179);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root10329 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root10329); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes8179;
                nodes8179 = node.contents();
                oldNodes.replaceWith(nodes8179);
              }));
              callback(root10328); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes8178;
              nodes8178 = node.contents();
              oldNodes.replaceWith(nodes8178);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp7793 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp7793.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp7793.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp7793.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp7793.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes8180 = $("<span>");
            iternode558.append(nodes8180);
            subs__.addSub((mobl.block)(tmp7793, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root10330 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes8181 = $("<span>");
              root10330.append(nodes8181);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl1297();
              }));
              
              function renderControl1297() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root10331 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root10331); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes8181;
                  nodes8181 = node.contents();
                  oldNodes.replaceWith(nodes8181);
                }));
              }
              renderControl1297();
              callback(root10330); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes8180;
              nodes8180 = node.contents();
              oldNodes.replaceWith(nodes8180);
            }));
            
            var oldNodes = iternode558;
            iternode558 = iternode558.contents();
            oldNodes.replaceWith(iternode558);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list558.addEventListener('change', function() { listSubs__.unsubscribe(); renderList558(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList558(true); }));
      });
    };
    renderList558();
    
    callback(root10327); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8177;
    nodes8177 = node.contents();
    oldNodes.replaceWith(nodes8177);
  }));
  callback(root10326); return subs__;
  
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
  var root10332 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3166 = $("<table>");
  
  var ref2976 = style;
  if(ref2976.get() !== null) {
    node3166.attr('class', ref2976.get());
    subs__.addSub(ref2976.addEventListener('change', function(_, ref, val) {
      node3166.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2976.rebind());
  
  var nodes8182 = $("<span>");
  node3166.append(nodes8182);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1298();
  }));
  
  function renderControl1298() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10333 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10333); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8182;
      nodes8182 = node.contents();
      oldNodes.replaceWith(nodes8182);
    }));
  }
  renderControl1298();
  root10332.append(node3166);
  callback(root10332); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root10334 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3167 = $("<tr>");
  
  var ref2977 = style;
  if(ref2977.get() !== null) {
    node3167.attr('class', ref2977.get());
    subs__.addSub(ref2977.addEventListener('change', function(_, ref, val) {
      node3167.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2977.rebind());
  
  var nodes8183 = $("<span>");
  node3167.append(nodes8183);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1299();
  }));
  
  function renderControl1299() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10335 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10335); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8183;
      nodes8183 = node.contents();
      oldNodes.replaceWith(nodes8183);
    }));
  }
  renderControl1299();
  root10334.append(node3167);
  callback(root10334); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root10336 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3168 = $("<td>");
  
  var ref2978 = width;
  if(ref2978.get() !== null) {
    node3168.attr('width', ref2978.get());
    subs__.addSub(ref2978.addEventListener('change', function(_, ref, val) {
      node3168.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2978.rebind());
  
  var ref2979 = style;
  if(ref2979.get() !== null) {
    node3168.attr('class', ref2979.get());
    subs__.addSub(ref2979.addEventListener('change', function(_, ref, val) {
      node3168.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2979.rebind());
  
  var nodes8184 = $("<span>");
  node3168.append(nodes8184);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1300();
  }));
  
  function renderControl1300() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10337 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10337); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8184;
      nodes8184 = node.contents();
      oldNodes.replaceWith(nodes8184);
    }));
  }
  renderControl1300();
  root10336.append(node3168);
  callback(root10336); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root10338 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3169 = $("<td>");
  
  var ref2980 = width;
  if(ref2980.get() !== null) {
    node3169.attr('width', ref2980.get());
    subs__.addSub(ref2980.addEventListener('change', function(_, ref, val) {
      node3169.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2980.rebind());
  
  var ref2981 = style;
  if(ref2981.get() !== null) {
    node3169.attr('class', ref2981.get());
    subs__.addSub(ref2981.addEventListener('change', function(_, ref, val) {
      node3169.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2981.rebind());
  
  var nodes8185 = $("<span>");
  node3169.append(nodes8185);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1301();
  }));
  
  function renderControl1301() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10339 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10339); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8185;
      nodes8185 = node.contents();
      oldNodes.replaceWith(nodes8185);
    }));
  }
  renderControl1301();
  root10338.append(node3169);
  callback(root10338); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root10340 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3170 = $("<td>");
  
  var ref2982 = width;
  if(ref2982.get() !== null) {
    node3170.attr('width', ref2982.get());
    subs__.addSub(ref2982.addEventListener('change', function(_, ref, val) {
      node3170.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2982.rebind());
  
  var ref2983 = style;
  if(ref2983.get() !== null) {
    node3170.attr('class', ref2983.get());
    subs__.addSub(ref2983.addEventListener('change', function(_, ref, val) {
      node3170.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2983.rebind());
  
  
  var node3171 = $("<strong>");
  
  var nodes8186 = $("<span>");
  node3171.append(nodes8186);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1302();
  }));
  
  function renderControl1302() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10341 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10341); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8186;
      nodes8186 = node.contents();
      oldNodes.replaceWith(nodes8186);
    }));
  }
  renderControl1302();
  node3170.append(node3171);
  root10340.append(node3170);
  callback(root10340); return subs__;
  
  
  
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
  items.list(function(coll1778) {
    coll1778 = coll1778.reverse();
    function processOne296() {
      var item;
      item = coll1778.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll1778.length > 0) processOne296(); else rest296();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll1778.length > 0) processOne296(); else rest296();
          
        }
      }
    }
    function rest296() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll1778.length > 0) processOne296(); else rest296();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root10342 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp7805 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp7805.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node3172 = $("<span>");
  root10342.append(node3172);
  var condSubs807 = new mobl.CompSubscription();
  subs__.addSub(condSubs807);
  var oldValue807;
  var renderCond807 = function() {
    var value1795 = tmp7805.get();
    if(oldValue807 === value1795) return;
    oldValue807 = value1795;
    var subs__ = condSubs807;
    subs__.unsubscribe();
    node3172.empty();
    if(value1795) {
      items.get().one(function(result__) {
        var tmp7827 = result__;
        var current = mobl.ref(result__);
        
        var node3173 = $("<div>");
        node3173.attr('width', "100%");
        
        
        var node3174 = $("<div>");
        node3174.attr('style', "float:left; width:45%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes8188 = $("<span>");
        node3174.append(nodes8188);
        subs__.addSub((ui.group)(function(_, callback) {
          var root10344 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node3177 = mobl.loadingSpan();
          root10344.append(node3177);
          var list559;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList559 = function() {
            var subs__ = listSubs__;
            list559 = items.get();
            list559.list(function(results559) {
              node3177.empty();
              for(var i1321 = 0; i1321 < results559.length; i1321++) {
                (function() {
                  var iternode559 = $("<span>");
                  node3177.append(iternode559);
                  var it;
                  it = mobl.ref(mobl.ref(results559), i1321);
                  var result__ = it.get() == current.get();
                  var tmp7802 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp7802.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp7802.set(it.get() == current.get());
                  }));
                  
                  
                  var node3178 = $("<span>");
                  iternode559.append(node3178);
                  var condSubs809 = new mobl.CompSubscription();
                  subs__.addSub(condSubs809);
                  var oldValue809;
                  var renderCond809 = function() {
                    var value1797 = tmp7802.get();
                    if(oldValue809 === value1797) return;
                    oldValue809 = value1797;
                    var subs__ = condSubs809;
                    subs__.unsubscribe();
                    node3178.empty();
                    if(value1797) {
                      var nodes8189 = $("<span>");
                      node3178.append(nodes8189);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root10345 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp7830 = result__;
                          var tmp7799 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7828 = result__;
                              var result__ = tmp7828;
                              tmp7799.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7829 = result__;
                              var result__ = tmp7829;
                              tmp7799.set(result__);
                              
                            });
                          }));
                          
                          var nodes8190 = $("<span>");
                          root10345.append(nodes8190);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl1304();
                          }));
                          
                          function renderControl1304() {
                            subs__.addSub((masterItem.get())(it, tmp7799, function(elements, callback) {
                              var root10346 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root10346); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes8190;
                              nodes8190 = node.contents();
                              oldNodes.replaceWith(nodes8190);
                            }));
                          }
                          renderControl1304();
                          callback(root10345); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes8189;
                        nodes8189 = node.contents();
                        oldNodes.replaceWith(nodes8189);
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
                      var tmp7801 = mobl.ref(result__);
                      
                      var nodes8191 = $("<span>");
                      node3178.append(nodes8191);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7801, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root10347 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp7833 = result__;
                          var tmp7800 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7831 = result__;
                              var result__ = tmp7831;
                              tmp7800.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7832 = result__;
                              var result__ = tmp7832;
                              tmp7800.set(result__);
                              
                            });
                          }));
                          
                          var nodes8192 = $("<span>");
                          root10347.append(nodes8192);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl1305();
                          }));
                          
                          function renderControl1305() {
                            subs__.addSub((masterItem.get())(it, tmp7800, function(elements, callback) {
                              var root10348 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root10348); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes8192;
                              nodes8192 = node.contents();
                              oldNodes.replaceWith(nodes8192);
                            }));
                          }
                          renderControl1305();
                          callback(root10347); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes8191;
                        nodes8191 = node.contents();
                        oldNodes.replaceWith(nodes8191);
                      }));
                      
                      
                    }
                  };
                  renderCond809();
                  subs__.addSub(tmp7802.addEventListener('change', function() {
                    renderCond809();
                  }));
                  
                  
                  var oldNodes = iternode559;
                  iternode559 = iternode559.contents();
                  oldNodes.replaceWith(iternode559);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list559.addEventListener('change', function() { listSubs__.unsubscribe(); renderList559(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList559(true); }));
            });
          };
          renderList559();
          
          callback(root10344); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes8188;
          nodes8188 = node.contents();
          oldNodes.replaceWith(nodes8188);
        }));
        node3173.append(node3174);
        
        var node3175 = $("<div>");
        node3175.attr('style', "float:left; width:53%; position:relative; margin-left: 1%;");
        
        var result__ = current.get() && ui.visible.get();
        var tmp7803 = mobl.ref(result__);
        subs__.addSub(current.addEventListener('change', function() {
          tmp7803.set(current.get() && ui.visible.get());
        }));
        subs__.addSub(ui.visible.addEventListener('change', function() {
          tmp7803.set(current.get() && ui.visible.get());
        }));
        
        
        var node3176 = $("<span>");
        node3175.append(node3176);
        var condSubs808 = new mobl.CompSubscription();
        subs__.addSub(condSubs808);
        var oldValue808;
        var renderCond808 = function() {
          var value1796 = tmp7803.get();
          if(oldValue808 === value1796) return;
          oldValue808 = value1796;
          var subs__ = condSubs808;
          subs__.unsubscribe();
          node3176.empty();
          if(value1796) {
            var nodes8187 = $("<span>");
            node3176.append(nodes8187);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl1303();
            }));
            
            function renderControl1303() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root10343 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root10343); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes8187;
                nodes8187 = node.contents();
                oldNodes.replaceWith(nodes8187);
              }));
            }
            renderControl1303();
            
            
          } else {
            
          }
        };
        renderCond808();
        subs__.addSub(tmp7803.addEventListener('change', function() {
          renderCond808();
        }));
        
        node3173.append(node3175);
        node3172.append(node3173);
        
        
        
        
        
        
      });
    } else {
      var nodes8193 = $("<span>");
      node3172.append(nodes8193);
      subs__.addSub((ui.group)(function(_, callback) {
        var root10349 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node3179 = mobl.loadingSpan();
        root10349.append(node3179);
        var list560;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList560 = function() {
          var subs__ = listSubs__;
          list560 = items.get();
          list560.list(function(results560) {
            node3179.empty();
            for(var i1322 = 0; i1322 < results560.length; i1322++) {
              (function() {
                var iternode560 = $("<span>");
                node3179.append(iternode560);
                var it;
                it = mobl.ref(mobl.ref(results560), i1322);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp7837 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp7795 = mobl.ref(result__);
                
                var nodes8194 = $("<span>");
                iternode560.append(nodes8194);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7795, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root10350 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp7836 = result__;
                    var tmp7794 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp7834 = result__;
                        var result__ = tmp7834;
                        tmp7794.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp7835 = result__;
                        var result__ = tmp7835;
                        tmp7794.set(result__);
                        
                      });
                    }));
                    
                    var nodes8195 = $("<span>");
                    root10350.append(nodes8195);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl1306();
                    }));
                    
                    function renderControl1306() {
                      subs__.addSub((masterItem.get())(it, tmp7794, function(elements, callback) {
                        var root10351 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root10351); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes8195;
                        nodes8195 = node.contents();
                        oldNodes.replaceWith(nodes8195);
                      }));
                    }
                    renderControl1306();
                    callback(root10350); return subs__;
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes8194;
                  nodes8194 = node.contents();
                  oldNodes.replaceWith(nodes8194);
                }));
                
                var oldNodes = iternode560;
                iternode560 = iternode560.contents();
                oldNodes.replaceWith(iternode560);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list560.addEventListener('change', function() { listSubs__.unsubscribe(); renderList560(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList560(true); }));
          });
        };
        renderList560();
        
        callback(root10349); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes8193;
        nodes8193 = node.contents();
        oldNodes.replaceWith(nodes8193);
      }));
      
      
    }
  };
  renderCond807();
  subs__.addSub(tmp7805.addEventListener('change', function() {
    renderCond807();
  }));
  
  callback(root10342); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root10352 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp7798 = mobl.ref(result__);
  
  var nodes8196 = $("<span>");
  root10352.append(nodes8196);
  subs__.addSub((ui.header)(tmp7798, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root10353 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    mobl.sleep(100, function(result__) {
      var tmp7838 = result__;
      mathJAX.renderMaths(function(result__) {
        var tmp7839 = result__;
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp7797 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp7796 = mobl.ref(result__);
        
        var nodes8197 = $("<span>");
        root10353.append(nodes8197);
        subs__.addSub((ui.backButton)(tmp7796, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7797, function(_, callback) {
          var root10354 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root10354); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes8197;
          nodes8197 = node.contents();
          oldNodes.replaceWith(nodes8197);
        }));
        callback(root10353); return subs__;
        
      });
    });
    return subs__;
  }, function(node) {
    var oldNodes = nodes8196;
    nodes8196 = node.contents();
    oldNodes.replaceWith(nodes8196);
  }));
  var nodes8198 = $("<span>");
  root10352.append(nodes8198);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl1307();
  }));
  
  function renderControl1307() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root10355 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10355); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8198;
      nodes8198 = node.contents();
      oldNodes.replaceWith(nodes8198);
    }));
  }
  renderControl1307();
  callback(root10352); return subs__;
  
  
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
