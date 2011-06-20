mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mathJAX');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root9238 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2518 = $("<span>");
  root9238.append(node2518);
  var condSubs605 = new mobl.CompSubscription();
  subs__.addSub(condSubs605);
  var oldValue605;
  var renderCond605 = function() {
    var value3473 = value.get();
    if(oldValue605 === value3473) return;
    oldValue605 = value3473;
    var subs__ = condSubs605;
    subs__.unsubscribe();
    node2518.empty();
    if(value3473) {
      var nodes7351 = $("<span>");
      node2518.append(nodes7351);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl1025();
      }));
      
      function renderControl1025() {
        subs__.addSub((elements)(function(elements, callback) {
          var root9239 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9239); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7351;
          nodes7351 = node.contents();
          oldNodes.replaceWith(nodes7351);
        }));
      }
      renderControl1025();
      
      
    } else {
      var nodes7352 = $("<span>");
      node2518.append(nodes7352);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9240 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes7353 = $("<span>");
        root9240.append(nodes7353);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root9241 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9241); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7353;
          nodes7353 = node.contents();
          oldNodes.replaceWith(nodes7353);
        }));
        var nodes7354 = $("<span>");
        root9240.append(nodes7354);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root9242 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9242); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7354;
          nodes7354 = node.contents();
          oldNodes.replaceWith(nodes7354);
        }));
        callback(root9240); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7352;
        nodes7352 = node.contents();
        oldNodes.replaceWith(nodes7352);
      }));
      
      
    }
  };
  renderCond605();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond605();
  }));
  
  callback(root9238); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root9243 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2519 = $("<div>");
  
  var ref2220 = mobl.ref(ui.headerStyle);
  if(ref2220.get() !== null) {
    node2519.attr('class', ref2220.get());
    subs__.addSub(ref2220.addEventListener('change', function(_, ref, val) {
      node2519.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2220.rebind());
  
  var val1175 = onclick.get();
  if(val1175 !== null) {
    subs__.addSub(mobl.domBind(node2519, 'tap', val1175));
  }
  
  var ref2221 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref2221.get() !== null) {
    node2519.attr('style', ref2221.get());
    subs__.addSub(ref2221.addEventListener('change', function(_, ref, val) {
      node2519.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node2519.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref2221.rebind());
  
  
  var node2522 = $("<div>");
  
  var ref2219 = mobl.ref(ui.headerContainerStyle);
  if(ref2219.get() !== null) {
    node2522.attr('class', ref2219.get());
    subs__.addSub(ref2219.addEventListener('change', function(_, ref, val) {
      node2522.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2219.rebind());
  
  
  var node2523 = $("<div>");
  
  var ref2217 = text;
  node2523.text(""+ref2217.get());
  var ignore446 = false;
  subs__.addSub(ref2217.addEventListener('change', function(_, ref, val) {
    if(ignore446) return;
    node2523.text(""+val);
  }));
  subs__.addSub(ref2217.rebind());
  
  
  var ref2218 = mobl.ref(ui.headerTextStyle);
  if(ref2218.get() !== null) {
    node2523.attr('class', ref2218.get());
    subs__.addSub(ref2218.addEventListener('change', function(_, ref, val) {
      node2523.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2218.rebind());
  
  node2522.append(node2523);
  node2519.append(node2522);
  var nodes7355 = $("<span>");
  node2519.append(nodes7355);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1026();
  }));
  
  function renderControl1026() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9244 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9244); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7355;
      nodes7355 = node.contents();
      oldNodes.replaceWith(nodes7355);
    }));
  }
  renderControl1026();
  root9243.append(node2519);
  
  var node2520 = $("<span>");
  root9243.append(node2520);
  var condSubs606 = new mobl.CompSubscription();
  subs__.addSub(condSubs606);
  var oldValue606;
  var renderCond606 = function() {
    var value3474 = fixedPosition.get();
    if(oldValue606 === value3474) return;
    oldValue606 = value3474;
    var subs__ = condSubs606;
    subs__.unsubscribe();
    node2520.empty();
    if(value3474) {
      
      var node2521 = $("<div>");
      node2521.attr('id', "hello");
      node2521.attr('style', "height: 2.9em;");
      
      node2520.append(node2521);
      
      
    } else {
      
    }
  };
  renderCond606();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond606();
  }));
  
  callback(root9243); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root9245 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref2222 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref2222.get() !== null) {
    sp.attr('class', ref2222.get());
    subs__.addSub(ref2222.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref2222.rebind());
  
  var val1176 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val1176 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val1176));
  }
  
  var val1177 = function(event, callback) {
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
  if(val1177 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val1177));
  }
  
  var val1178 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after369(result__) {
                    var tmp7077 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after369);if(result__ !== undefined) after369(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1178 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val1178));
  }
  
  var val1179 = function(event, callback) {
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
  if(val1179 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val1179));
  }
  
  var ref2223 = text;
  sp.text(""+ref2223.get());
  var ignore447 = false;
  subs__.addSub(ref2223.addEventListener('change', function(_, ref, val) {
    if(ignore447) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref2223.rebind());
  
  
  root9245.append(sp);
  callback(root9245); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root9246 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7356 = $("<span>");
  root9246.append(nodes7356);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root9247 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9247); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7356;
    nodes7356 = node.contents();
    oldNodes.replaceWith(nodes7356);
  }));
  callback(root9246); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root9248 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7357 = $("<span>");
  root9248.append(nodes7357);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root9249 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9249); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7357;
    nodes7357 = node.contents();
    oldNodes.replaceWith(nodes7357);
  }));
  callback(root9248); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root9250 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2524 = $("<ul>");
  
  var ref2224 = mobl.ref(ui.groupStyle);
  if(ref2224.get() !== null) {
    node2524.attr('class', ref2224.get());
    subs__.addSub(ref2224.addEventListener('change', function(_, ref, val) {
      node2524.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2224.rebind());
  
  var nodes7358 = $("<span>");
  node2524.append(nodes7358);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1027();
  }));
  
  function renderControl1027() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9251 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9251); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7358;
      nodes7358 = node.contents();
      oldNodes.replaceWith(nodes7358);
    }));
  }
  renderControl1027();
  root9250.append(node2524);
  callback(root9250); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root9252 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2525 = $("<img>");
  
  var ref2225 = url;
  if(ref2225.get() !== null) {
    node2525.attr('src', ref2225.get());
    subs__.addSub(ref2225.addEventListener('change', function(_, ref, val) {
      node2525.attr('src', val);
    }));
    
  }
  subs__.addSub(ref2225.rebind());
  
  var ref2226 = width;
  if(ref2226.get() !== null) {
    node2525.attr('width', ref2226.get());
    subs__.addSub(ref2226.addEventListener('change', function(_, ref, val) {
      node2525.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2226.rebind());
  
  var ref2227 = height;
  if(ref2227.get() !== null) {
    node2525.attr('height', ref2227.get());
    subs__.addSub(ref2227.addEventListener('change', function(_, ref, val) {
      node2525.attr('height', val);
    }));
    
  }
  subs__.addSub(ref2227.rebind());
  
  var ref2228 = style;
  if(ref2228.get() !== null) {
    node2525.attr('class', ref2228.get());
    subs__.addSub(ref2228.addEventListener('change', function(_, ref, val) {
      node2525.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2228.rebind());
  
  var val1180 = onclick.get();
  if(val1180 !== null) {
    subs__.addSub(mobl.domBind(node2525, 'tap', val1180));
  }
  
  var ref2229 = valign;
  if(ref2229.get() !== null) {
    node2525.attr('valign', ref2229.get());
    subs__.addSub(ref2229.addEventListener('change', function(_, ref, val) {
      node2525.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref2229.rebind());
  
  var ref2230 = align;
  if(ref2230.get() !== null) {
    node2525.attr('align', ref2230.get());
    subs__.addSub(ref2230.addEventListener('change', function(_, ref, val) {
      node2525.attr('align', val);
    }));
    
  }
  subs__.addSub(ref2230.rebind());
  
  root9252.append(node2525);
  callback(root9252); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root9253 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref2231 = mobl.ref(ui.itemStyle);
  if(ref2231.get() !== null) {
    el.attr('class', ref2231.get());
    subs__.addSub(ref2231.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2231.rebind());
  
  var ref2232 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref2232.get() !== null) {
    el.attr('class', ref2232.get());
    subs__.addSub(ref2232.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref2232.rebind());
  
  var val1181 = onswipe.get();
  if(val1181 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val1181));
  }
  
  var val1182 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp7078 = result__;
                                           function after370(result__) {
                                             var tmp7079 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after370);if(result__ !== undefined) after370(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp7080 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val1182 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val1182));
  }
  
  var nodes7359 = $("<span>");
  el.append(nodes7359);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1028();
  }));
  
  function renderControl1028() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9254 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9254); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7359;
      nodes7359 = node.contents();
      oldNodes.replaceWith(nodes7359);
    }));
  }
  renderControl1028();
  root9253.append(el);
  callback(root9253); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root9255 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2526 = $("<input>");
  node2526.attr('type', "checkbox");
  
  var ref2234 = b;
  node2526.attr('checked', !!ref2234.get());
  subs__.addSub(ref2234.addEventListener('change', function(_, ref, val) {
    if(ref === ref2234) node2526.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node2526, 'change', function() {
    b.set(!!node2526.attr('checked'));
  }));
  
  var val1184 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val1184 !== null) {
    subs__.addSub(mobl.domBind(node2526, 'tap', val1184));
  }
  
  var val1185 = onchange.get();
  if(val1185 !== null) {
    subs__.addSub(mobl.domBind(node2526, 'change', val1185));
  }
  
  root9255.append(node2526);
  
  root9255.append(" ");
  
  var node2527 = $("<span>");
  
  var ref2233 = label;
  node2527.text(""+ref2233.get());
  var ignore448 = false;
  subs__.addSub(ref2233.addEventListener('change', function(_, ref, val) {
    if(ignore448) return;
    node2527.text(""+val);
  }));
  subs__.addSub(ref2233.rebind());
  
  
  var val1183 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after371(result__) {
                    var tmp7081 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after371);if(result__ !== undefined) after371(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1183 !== null) {
    subs__.addSub(mobl.domBind(node2527, 'tap', val1183));
  }
  
  root9255.append(node2527);
  callback(root9255); return subs__;
  
  
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
  var root9256 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2528 = $("<span>");
  root9256.append(node2528);
  var condSubs607 = new mobl.CompSubscription();
  subs__.addSub(condSubs607);
  var oldValue607;
  var renderCond607 = function() {
    var value3475 = label.get();
    if(oldValue607 === value3475) return;
    oldValue607 = value3475;
    var subs__ = condSubs607;
    subs__.unsubscribe();
    node2528.empty();
    if(value3475) {
      var nodes7360 = $("<span>");
      node2528.append(nodes7360);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root9257 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9257); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7360;
        nodes7360 = node.contents();
        oldNodes.replaceWith(nodes7360);
      }));
      
      
    } else {
      
    }
  };
  renderCond607();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond607();
  }));
  
  
  var node2529 = $("<span>");
  root9256.append(node2529);
  var condSubs608 = new mobl.CompSubscription();
  subs__.addSub(condSubs608);
  var oldValue608;
  var renderCond608 = function() {
    var value3476 = validator.get();
    if(oldValue608 === value3476) return;
    oldValue608 = value3476;
    var subs__ = condSubs608;
    subs__.unsubscribe();
    node2529.empty();
    if(value3476) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after375(result__) {
        var tmp7082 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp7083 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node2530 = $("<input>");
        
        var ref2235 = inputType;
        if(ref2235.get() !== null) {
          node2530.attr('type', ref2235.get());
          subs__.addSub(ref2235.addEventListener('change', function(_, ref, val) {
            node2530.attr('type', val);
          }));
          
        }
        subs__.addSub(ref2235.rebind());
        
        var ref2236 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref2236.get() !== null) {
          node2530.attr('class', ref2236.get());
          subs__.addSub(ref2236.addEventListener('change', function(_, ref, val) {
            node2530.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node2530.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node2530.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node2530.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref2236.rebind());
        
        var ref2237 = placeholder;
        if(ref2237.get() !== null) {
          node2530.attr('placeholder', ref2237.get());
          subs__.addSub(ref2237.addEventListener('change', function(_, ref, val) {
            node2530.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref2237.rebind());
        
        var ref2238 = temp;
        node2530.val(""+ref2238.get());
        var ignore449 = false;
        subs__.addSub(ref2238.addEventListener('change', function(_, ref, val) {
          if(ignore449) return;
          node2530.val(""+val);
        }));
        subs__.addSub(ref2238.rebind());
        
        subs__.addSub(mobl.domBind(node2530, 'keyup change', function() {
          ignore449 = true;
          temp.set(mobl.stringTomobl__String(node2530.val()));
          ignore449 = false;
        }));
        
        
        var val1186 = onchange.get();
        if(val1186 !== null) {
          subs__.addSub(mobl.domBind(node2530, 'change', val1186));
        }
        
        var val1187 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after372(result__) {
                          var tmp7084 = result__;
                          function after373(result__) {
                            var tmp7085 = result__;
                            var result__ = tmp7085;
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
                          var result__ = validator.get()(temp.get(), after373);if(result__ !== undefined) after373(result__);
                        }
                        var result__ = onkeyup.get()(event, after372);if(result__ !== undefined) after372(result__);
                      } else {
                        {
                          function after374(result__) {
                            var tmp7085 = result__;
                            var result__ = tmp7085;
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
                          var result__ = validator.get()(temp.get(), after374);if(result__ !== undefined) after374(result__);
                        }
                      }
                    };
        if(val1187 !== null) {
          subs__.addSub(mobl.domBind(node2530, 'keyup', val1187));
        }
        
        var val1188 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1188 !== null) {
          subs__.addSub(mobl.domBind(node2530, 'blur', val1188));
        }
        
        node2529.append(node2530);
        var nodes7361 = $("<span>");
        node2529.append(nodes7361);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root9258 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9258); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7361;
          nodes7361 = node.contents();
          oldNodes.replaceWith(nodes7361);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after375);if(result__ !== undefined) after375(result__);
    } else {
      
      var node2531 = $("<input>");
      
      var ref2239 = inputType;
      if(ref2239.get() !== null) {
        node2531.attr('type', ref2239.get());
        subs__.addSub(ref2239.addEventListener('change', function(_, ref, val) {
          node2531.attr('type', val);
        }));
        
      }
      subs__.addSub(ref2239.rebind());
      
      var ref2240 = style;
      if(ref2240.get() !== null) {
        node2531.attr('class', ref2240.get());
        subs__.addSub(ref2240.addEventListener('change', function(_, ref, val) {
          node2531.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2240.rebind());
      
      var ref2241 = placeholder;
      if(ref2241.get() !== null) {
        node2531.attr('placeholder', ref2241.get());
        subs__.addSub(ref2241.addEventListener('change', function(_, ref, val) {
          node2531.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2241.rebind());
      
      var ref2242 = s;
      node2531.val(""+ref2242.get());
      var ignore450 = false;
      subs__.addSub(ref2242.addEventListener('change', function(_, ref, val) {
        if(ignore450) return;
        node2531.val(""+val);
      }));
      subs__.addSub(ref2242.rebind());
      
      subs__.addSub(mobl.domBind(node2531, 'keyup change', function() {
        ignore450 = true;
        s.set(mobl.stringTomobl__String(node2531.val()));
        ignore450 = false;
      }));
      
      
      var val1189 = onchange.get();
      if(val1189 !== null) {
        subs__.addSub(mobl.domBind(node2531, 'change', val1189));
      }
      
      var val1190 = onkeyup.get();
      if(val1190 !== null) {
        subs__.addSub(mobl.domBind(node2531, 'keyup', val1190));
      }
      
      var val1191 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1191 !== null) {
        subs__.addSub(mobl.domBind(node2531, 'blur', val1191));
      }
      
      node2529.append(node2531);
      
      
    }
  };
  renderCond608();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond608();
  }));
  
  callback(root9256); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root9259 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7362 = $("<span>");
  root9259.append(nodes7362);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root9260 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9260); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7362;
    nodes7362 = node.contents();
    oldNodes.replaceWith(nodes7362);
  }));
  callback(root9259); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root9261 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7363 = $("<span>");
  root9261.append(nodes7363);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root9262 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9262); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7363;
    nodes7363 = node.contents();
    oldNodes.replaceWith(nodes7363);
  }));
  callback(root9261); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root9263 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2532 = $("<span>");
  root9263.append(node2532);
  var condSubs609 = new mobl.CompSubscription();
  subs__.addSub(condSubs609);
  var oldValue609;
  var renderCond609 = function() {
    var value3477 = label.get();
    if(oldValue609 === value3477) return;
    oldValue609 = value3477;
    var subs__ = condSubs609;
    subs__.unsubscribe();
    node2532.empty();
    if(value3477) {
      var nodes7364 = $("<span>");
      node2532.append(nodes7364);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root9264 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9264); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7364;
        nodes7364 = node.contents();
        oldNodes.replaceWith(nodes7364);
      }));
      
      
    } else {
      
    }
  };
  renderCond609();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond609();
  }));
  
  
  var node2533 = $("<input>");
  node2533.attr('type', "range");
  
  var ref2243 = n;
  node2533.val(""+ref2243.get());
  var ignore451 = false;
  subs__.addSub(ref2243.addEventListener('change', function(_, ref, val) {
    if(ignore451) return;
    node2533.val(""+val);
  }));
  subs__.addSub(ref2243.rebind());
  
  subs__.addSub(mobl.domBind(node2533, 'keyup change', function() {
    ignore451 = true;
    n.set(mobl.stringTomobl__Num(node2533.val()));
    ignore451 = false;
  }));
  
  
  var ref2244 = min;
  if(ref2244.get() !== null) {
    node2533.attr('min', ref2244.get());
    subs__.addSub(ref2244.addEventListener('change', function(_, ref, val) {
      node2533.attr('min', val);
    }));
    
  }
  subs__.addSub(ref2244.rebind());
  
  var ref2245 = max;
  if(ref2245.get() !== null) {
    node2533.attr('max', ref2245.get());
    subs__.addSub(ref2245.addEventListener('change', function(_, ref, val) {
      node2533.attr('max', val);
    }));
    
  }
  subs__.addSub(ref2245.rebind());
  
  var ref2246 = step;
  if(ref2246.get() !== null) {
    node2533.attr('step', ref2246.get());
    subs__.addSub(ref2246.addEventListener('change', function(_, ref, val) {
      node2533.attr('step', val);
    }));
    
  }
  subs__.addSub(ref2246.rebind());
  node2533.attr('style', "width: 99%;");
  
  var val1192 = onchange.get();
  if(val1192 !== null) {
    subs__.addSub(mobl.domBind(node2533, 'change', val1192));
  }
  
  var val1193 = onkeyup.get();
  if(val1193 !== null) {
    subs__.addSub(mobl.domBind(node2533, 'keyup', val1193));
  }
  
  var ref2247 = placeholder;
  if(ref2247.get() !== null) {
    node2533.attr('placeholder', ref2247.get());
    subs__.addSub(ref2247.addEventListener('change', function(_, ref, val) {
      node2533.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref2247.rebind());
  
  root9263.append(node2533);
  callback(root9263); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root9265 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after376(result__) {
      var tmp7086 = result__;
      var result__ = tmp7086;
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
    var result__ = validator.get()(n2, after376);if(result__ !== undefined) after376(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes7365 = $("<span>");
  root9265.append(nodes7365);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root9266 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9266); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7365;
    nodes7365 = node.contents();
    oldNodes.replaceWith(nodes7365);
  }));
  callback(root9265); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root9267 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2534 = $("<span>");
  root9267.append(node2534);
  var condSubs610 = new mobl.CompSubscription();
  subs__.addSub(condSubs610);
  var oldValue610;
  var renderCond610 = function() {
    var value3478 = label.get();
    if(oldValue610 === value3478) return;
    oldValue610 = value3478;
    var subs__ = condSubs610;
    subs__.unsubscribe();
    node2534.empty();
    if(value3478) {
      
      var node2535 = $("<span>");
      node2535.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref2251 = label;
      node2535.text(""+ref2251.get());
      var ignore453 = false;
      subs__.addSub(ref2251.addEventListener('change', function(_, ref, val) {
        if(ignore453) return;
        node2535.text(""+val);
      }));
      subs__.addSub(ref2251.rebind());
      
      
      node2534.append(node2535);
      
      var node2536 = $("<span>");
      node2536.attr('style', "float: left");
      
      
      var node2537 = $("<input>");
      node2537.attr('type', "password");
      
      var ref2248 = style;
      if(ref2248.get() !== null) {
        node2537.attr('class', ref2248.get());
        subs__.addSub(ref2248.addEventListener('change', function(_, ref, val) {
          node2537.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2248.rebind());
      
      var ref2249 = placeholder;
      if(ref2249.get() !== null) {
        node2537.attr('placeholder', ref2249.get());
        subs__.addSub(ref2249.addEventListener('change', function(_, ref, val) {
          node2537.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2249.rebind());
      
      var ref2250 = s;
      node2537.val(""+ref2250.get());
      var ignore452 = false;
      subs__.addSub(ref2250.addEventListener('change', function(_, ref, val) {
        if(ignore452) return;
        node2537.val(""+val);
      }));
      subs__.addSub(ref2250.rebind());
      
      subs__.addSub(mobl.domBind(node2537, 'keyup change', function() {
        ignore452 = true;
        s.set(mobl.stringTomobl__String(node2537.val()));
        ignore452 = false;
      }));
      
      
      var val1194 = onchange.get();
      if(val1194 !== null) {
        subs__.addSub(mobl.domBind(node2537, 'change', val1194));
      }
      
      var val1195 = onkeyup.get();
      if(val1195 !== null) {
        subs__.addSub(mobl.domBind(node2537, 'keyup', val1195));
      }
      
      var val1196 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1196 !== null) {
        subs__.addSub(mobl.domBind(node2537, 'blur', val1196));
      }
      
      node2536.append(node2537);
      node2534.append(node2536);
      
      
      
      
    } else {
      
      var node2538 = $("<input>");
      node2538.attr('type', "password");
      
      var ref2252 = style;
      if(ref2252.get() !== null) {
        node2538.attr('class', ref2252.get());
        subs__.addSub(ref2252.addEventListener('change', function(_, ref, val) {
          node2538.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2252.rebind());
      
      var ref2253 = placeholder;
      if(ref2253.get() !== null) {
        node2538.attr('placeholder', ref2253.get());
        subs__.addSub(ref2253.addEventListener('change', function(_, ref, val) {
          node2538.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2253.rebind());
      
      var ref2254 = s;
      node2538.val(""+ref2254.get());
      var ignore454 = false;
      subs__.addSub(ref2254.addEventListener('change', function(_, ref, val) {
        if(ignore454) return;
        node2538.val(""+val);
      }));
      subs__.addSub(ref2254.rebind());
      
      subs__.addSub(mobl.domBind(node2538, 'keyup change', function() {
        ignore454 = true;
        s.set(mobl.stringTomobl__String(node2538.val()));
        ignore454 = false;
      }));
      
      
      var val1197 = onchange.get();
      if(val1197 !== null) {
        subs__.addSub(mobl.domBind(node2538, 'change', val1197));
      }
      
      var val1198 = onkeyup.get();
      if(val1198 !== null) {
        subs__.addSub(mobl.domBind(node2538, 'keyup', val1198));
      }
      
      var val1199 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1199 !== null) {
        subs__.addSub(mobl.domBind(node2538, 'blur', val1199));
      }
      
      node2534.append(node2538);
      
      
    }
  };
  renderCond610();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond610();
  }));
  
  callback(root9267); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root9268 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref2259 = style;
  if(ref2259.get() !== null) {
    sel.attr('class', ref2259.get());
    subs__.addSub(ref2259.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2259.rebind());
  
  var val1200 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after377(result__) {
                    var tmp7088 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after377);if(result__ !== undefined) after377(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1200 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val1200));
  }
  
  
  var node2539 = mobl.loadingSpan();
  sel.append(node2539);
  var list449;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList449 = function() {
    var subs__ = listSubs__;
    list449 = options.get();
    list449.list(function(results449) {
      node2539.empty();
      for(var i1337 = 0; i1337 < results449.length; i1337++) {
        (function() {
          var iternode449 = $("<span>");
          node2539.append(iternode449);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results449), i1337), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results449), i1337), "_2");
          
          var node2540 = $("<option>");
          
          var ref2255 = optionDescription;
          node2540.text(""+ref2255.get());
          var ignore455 = false;
          subs__.addSub(ref2255.addEventListener('change', function(_, ref, val) {
            if(ignore455) return;
            node2540.text(""+val);
          }));
          subs__.addSub(ref2255.rebind());
          
          
          var ref2256 = optionStyle;
          if(ref2256.get() !== null) {
            node2540.attr('class', ref2256.get());
            subs__.addSub(ref2256.addEventListener('change', function(_, ref, val) {
              node2540.attr('class', val);
            }));
            
          }
          subs__.addSub(ref2256.rebind());
          
          var ref2257 = optionValue;
          if(ref2257.get() !== null) {
            node2540.attr('value', ref2257.get());
            subs__.addSub(ref2257.addEventListener('change', function(_, ref, val) {
              node2540.attr('value', val);
            }));
            
          }
          subs__.addSub(ref2257.rebind());
          
          var ref2258 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref2258.get() !== null) {
            node2540.attr('selected', ref2258.get());
            subs__.addSub(ref2258.addEventListener('change', function(_, ref, val) {
              node2540.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node2540.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node2540.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref2258.rebind());
          
          iternode449.append(node2540);
          
          var oldNodes = iternode449;
          iternode449 = iternode449.contents();
          oldNodes.replaceWith(iternode449);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list449.addEventListener('change', function() { listSubs__.unsubscribe(); renderList449(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList449(true); }));
    });
  };
  renderList449();
  
  root9268.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root9268); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root9269 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes7366 = $("<span>");
    root9269.append(nodes7366);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root9270 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node2541 = mobl.loadingSpan();
      root9270.append(node2541);
      var list450;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList450 = function() {
        var subs__ = listSubs__;
        list450 = tabs.get();
        list450.list(function(results450) {
          node2541.empty();
          for(var i1338 = 0; i1338 < results450.length; i1338++) {
            (function() {
              var iternode450 = $("<span>");
              node2541.append(iternode450);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results450), i1338), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results450), i1338), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results450), i1338), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp7044 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp7044.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp7044.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp7044.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp7044.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp7043 = mobl.ref(result__);
              
              var nodes7367 = $("<span>");
              iternode450.append(nodes7367);
              subs__.addSub((mobl.span)(tmp7044, mobl.ref(null), tmp7043, mobl.ref(null), function(_, callback) {
                var root9271 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes7368 = $("<span>");
                root9271.append(nodes7368);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root9272 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root9272); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7368;
                  nodes7368 = node.contents();
                  oldNodes.replaceWith(nodes7368);
                }));
                callback(root9271); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7367;
                nodes7367 = node.contents();
                oldNodes.replaceWith(nodes7367);
              }));
              
              var oldNodes = iternode450;
              iternode450 = iternode450.contents();
              oldNodes.replaceWith(iternode450);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list450.addEventListener('change', function() { listSubs__.unsubscribe(); renderList450(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList450(true); }));
        });
      };
      renderList450();
      
      callback(root9270); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7366;
      nodes7366 = node.contents();
      oldNodes.replaceWith(nodes7366);
    }));
    
    var node2542 = mobl.loadingSpan();
    root9269.append(node2542);
    var list451;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList451 = function() {
      var subs__ = listSubs__;
      list451 = tabs.get();
      list451.list(function(results451) {
        node2542.empty();
        for(var i1339 = 0; i1339 < results451.length; i1339++) {
          (function() {
            var iternode451 = $("<span>");
            node2542.append(iternode451);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results451), i1339), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results451), i1339), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results451), i1339), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp7045 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp7045.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp7045.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp7045.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp7045.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes7369 = $("<span>");
            iternode451.append(nodes7369);
            subs__.addSub((mobl.block)(tmp7045, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root9273 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7370 = $("<span>");
              root9273.append(nodes7370);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root9274 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes7371 = $("<span>");
                root9274.append(nodes7371);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl1029();
                }));
                
                function renderControl1029() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root9275 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root9275); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes7371;
                    nodes7371 = node.contents();
                    oldNodes.replaceWith(nodes7371);
                  }));
                }
                renderControl1029();
                callback(root9274); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7370;
                nodes7370 = node.contents();
                oldNodes.replaceWith(nodes7370);
              }));
              callback(root9273); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7369;
              nodes7369 = node.contents();
              oldNodes.replaceWith(nodes7369);
            }));
            
            var oldNodes = iternode451;
            iternode451 = iternode451.contents();
            oldNodes.replaceWith(iternode451);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list451.addEventListener('change', function() { listSubs__.unsubscribe(); renderList451(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList451(true); }));
      });
    };
    renderList451();
    
    callback(root9269); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes7366 = $("<span>");
      root9269.append(nodes7366);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9270 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2541 = mobl.loadingSpan();
        root9270.append(node2541);
        var list450;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList450 = function() {
          var subs__ = listSubs__;
          list450 = tabs.get();
          list450.list(function(results450) {
            node2541.empty();
            for(var i1338 = 0; i1338 < results450.length; i1338++) {
              (function() {
                var iternode450 = $("<span>");
                node2541.append(iternode450);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results450), i1338), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results450), i1338), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results450), i1338), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp7044 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp7044.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp7044.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp7044.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp7044.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp7043 = mobl.ref(result__);
                
                var nodes7367 = $("<span>");
                iternode450.append(nodes7367);
                subs__.addSub((mobl.span)(tmp7044, mobl.ref(null), tmp7043, mobl.ref(null), function(_, callback) {
                  var root9271 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7368 = $("<span>");
                  root9271.append(nodes7368);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root9272 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root9272); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes7368;
                    nodes7368 = node.contents();
                    oldNodes.replaceWith(nodes7368);
                  }));
                  callback(root9271); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7367;
                  nodes7367 = node.contents();
                  oldNodes.replaceWith(nodes7367);
                }));
                
                var oldNodes = iternode450;
                iternode450 = iternode450.contents();
                oldNodes.replaceWith(iternode450);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list450.addEventListener('change', function() { listSubs__.unsubscribe(); renderList450(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList450(true); }));
          });
        };
        renderList450();
        
        callback(root9270); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7366;
        nodes7366 = node.contents();
        oldNodes.replaceWith(nodes7366);
      }));
      
      var node2542 = mobl.loadingSpan();
      root9269.append(node2542);
      var list451;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList451 = function() {
        var subs__ = listSubs__;
        list451 = tabs.get();
        list451.list(function(results451) {
          node2542.empty();
          for(var i1339 = 0; i1339 < results451.length; i1339++) {
            (function() {
              var iternode451 = $("<span>");
              node2542.append(iternode451);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results451), i1339), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results451), i1339), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results451), i1339), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp7045 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp7045.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp7045.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp7045.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp7045.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes7369 = $("<span>");
              iternode451.append(nodes7369);
              subs__.addSub((mobl.block)(tmp7045, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root9273 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes7370 = $("<span>");
                root9273.append(nodes7370);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root9274 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7371 = $("<span>");
                  root9274.append(nodes7371);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl1029();
                  }));
                  
                  function renderControl1029() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root9275 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root9275); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7371;
                      nodes7371 = node.contents();
                      oldNodes.replaceWith(nodes7371);
                    }));
                  }
                  renderControl1029();
                  callback(root9274); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7370;
                  nodes7370 = node.contents();
                  oldNodes.replaceWith(nodes7370);
                }));
                callback(root9273); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7369;
                nodes7369 = node.contents();
                oldNodes.replaceWith(nodes7369);
              }));
              
              var oldNodes = iternode451;
              iternode451 = iternode451.contents();
              oldNodes.replaceWith(iternode451);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list451.addEventListener('change', function() { listSubs__.unsubscribe(); renderList451(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList451(true); }));
        });
      };
      renderList451();
      
      callback(root9269); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root9276 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2543 = $("<div>");
  
  var ref2263 = mobl.ref(ui.searchboxStyle);
  if(ref2263.get() !== null) {
    node2543.attr('class', ref2263.get());
    subs__.addSub(ref2263.addEventListener('change', function(_, ref, val) {
      node2543.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2263.rebind());
  
  
  var node2544 = $("<input>");
  node2544.attr('type', "search");
  
  var ref2260 = mobl.ref(ui.searchBoxInputStyle);
  if(ref2260.get() !== null) {
    node2544.attr('class', ref2260.get());
    subs__.addSub(ref2260.addEventListener('change', function(_, ref, val) {
      node2544.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2260.rebind());
  
  var ref2261 = placeholder;
  if(ref2261.get() !== null) {
    node2544.attr('placeholder', ref2261.get());
    subs__.addSub(ref2261.addEventListener('change', function(_, ref, val) {
      node2544.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref2261.rebind());
  
  var ref2262 = s;
  node2544.val(""+ref2262.get());
  var ignore456 = false;
  subs__.addSub(ref2262.addEventListener('change', function(_, ref, val) {
    if(ignore456) return;
    node2544.val(""+val);
  }));
  subs__.addSub(ref2262.rebind());
  
  subs__.addSub(mobl.domBind(node2544, 'keyup change', function() {
    ignore456 = true;
    s.set(mobl.stringTomobl__String(node2544.val()));
    ignore456 = false;
  }));
  
  
  var val1201 = onsearch.get();
  if(val1201 !== null) {
    subs__.addSub(mobl.domBind(node2544, 'change', val1201));
  }
  
  var val1202 = onkeyup.get();
  if(val1202 !== null) {
    subs__.addSub(mobl.domBind(node2544, 'keyup', val1202));
  }
  node2544.attr('autocorrect', false);
  node2544.attr('autocapitalize', false);
  node2544.attr('autocomplete', false);
  
  node2543.append(node2544);
  root9276.append(node2543);
  callback(root9276); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root9277 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref2264 = mobl.ref(ui.contextMenuStyle);
  if(ref2264.get() !== null) {
    menu.attr('class', ref2264.get());
    subs__.addSub(ref2264.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2264.rebind());
  
  var nodes7372 = $("<span>");
  menu.append(nodes7372);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1030();
  }));
  
  function renderControl1030() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9278 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9278); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7372;
      nodes7372 = node.contents();
      oldNodes.replaceWith(nodes7372);
    }));
  }
  renderControl1030();
  root9277.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val1203 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp7091 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val1203 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val1203));
  }
  
  root9277.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root9277); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root9279 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp7075 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp7075.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node2545 = $("<span>");
  root9279.append(node2545);
  var condSubs611 = new mobl.CompSubscription();
  subs__.addSub(condSubs611);
  var oldValue611;
  var renderCond611 = function() {
    var value3479 = tmp7075.get();
    if(oldValue611 === value3479) return;
    oldValue611 = value3479;
    var subs__ = condSubs611;
    subs__.unsubscribe();
    node2545.empty();
    if(value3479) {
      items.get().one(function(result__) {
        var tmp7092 = result__;
        var current = mobl.ref(result__);
        
        var node2546 = $("<div>");
        node2546.attr('width', "100%");
        
        
        var node2547 = $("<div>");
        node2547.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes7375 = $("<span>");
        node2547.append(nodes7375);
        subs__.addSub((ui.group)(function(_, callback) {
          var root9282 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node2550 = mobl.loadingSpan();
          root9282.append(node2550);
          var list452;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList452 = function() {
            var subs__ = listSubs__;
            list452 = items.get();
            list452.list(function(results452) {
              node2550.empty();
              for(var i1340 = 0; i1340 < results452.length; i1340++) {
                (function() {
                  var iternode452 = $("<span>");
                  node2550.append(iternode452);
                  var it;
                  it = mobl.ref(mobl.ref(results452), i1340);
                  var result__ = it.get() == current.get();
                  var tmp7051 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp7051.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp7051.set(it.get() == current.get());
                  }));
                  
                  
                  var node2551 = $("<span>");
                  iternode452.append(node2551);
                  var condSubs613 = new mobl.CompSubscription();
                  subs__.addSub(condSubs613);
                  var oldValue613;
                  var renderCond613 = function() {
                    var value3481 = tmp7051.get();
                    if(oldValue613 === value3481) return;
                    oldValue613 = value3481;
                    var subs__ = condSubs613;
                    subs__.unsubscribe();
                    node2551.empty();
                    if(value3481) {
                      var nodes7376 = $("<span>");
                      node2551.append(nodes7376);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root9283 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes7377 = $("<span>");
                        root9283.append(nodes7377);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1032();
                        }));
                        
                        function renderControl1032() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root9284 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root9284); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes7377;
                            nodes7377 = node.contents();
                            oldNodes.replaceWith(nodes7377);
                          }));
                        }
                        renderControl1032();
                        callback(root9283); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7376;
                        nodes7376 = node.contents();
                        oldNodes.replaceWith(nodes7376);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp7050 = mobl.ref(result__);
                      
                      var nodes7378 = $("<span>");
                      node2551.append(nodes7378);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7050, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root9285 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes7379 = $("<span>");
                        root9285.append(nodes7379);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1033();
                        }));
                        
                        function renderControl1033() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root9286 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root9286); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes7379;
                            nodes7379 = node.contents();
                            oldNodes.replaceWith(nodes7379);
                          }));
                        }
                        renderControl1033();
                        callback(root9285); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7378;
                        nodes7378 = node.contents();
                        oldNodes.replaceWith(nodes7378);
                      }));
                      
                      
                    }
                  };
                  renderCond613();
                  subs__.addSub(tmp7051.addEventListener('change', function() {
                    renderCond613();
                  }));
                  
                  
                  var oldNodes = iternode452;
                  iternode452 = iternode452.contents();
                  oldNodes.replaceWith(iternode452);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list452.addEventListener('change', function() { listSubs__.unsubscribe(); renderList452(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList452(true); }));
            });
          };
          renderList452();
          
          callback(root9282); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes7375;
          nodes7375 = node.contents();
          oldNodes.replaceWith(nodes7375);
        }));
        node2546.append(node2547);
        
        var node2548 = $("<div>");
        node2548.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node2549 = $("<span>");
        node2548.append(node2549);
        var condSubs612 = new mobl.CompSubscription();
        subs__.addSub(condSubs612);
        var oldValue612;
        var renderCond612 = function() {
          var value3480 = current.get();
          if(oldValue612 === value3480) return;
          oldValue612 = value3480;
          var subs__ = condSubs612;
          subs__.unsubscribe();
          node2549.empty();
          if(value3480) {
            var nodes7373 = $("<span>");
            node2549.append(nodes7373);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl1031();
            }));
            
            function renderControl1031() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root9280 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9280); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7373;
                nodes7373 = node.contents();
                oldNodes.replaceWith(nodes7373);
              }));
            }
            renderControl1031();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp7052 = mobl.ref(result__);
            
            var nodes7374 = $("<span>");
            node2549.append(nodes7374);
            subs__.addSub((mobl.label)(tmp7052, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root9281 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root9281); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes7374;
              nodes7374 = node.contents();
              oldNodes.replaceWith(nodes7374);
            }));
            
            
          }
        };
        renderCond612();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond612();
        }));
        
        node2546.append(node2548);
        node2545.append(node2546);
        
        
        
        
        
        
      });
    } else {
      var nodes7380 = $("<span>");
      node2545.append(nodes7380);
      subs__.addSub((ui.group)(function(_, callback) {
        var root9287 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2552 = mobl.loadingSpan();
        root9287.append(node2552);
        var list453;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList453 = function() {
          var subs__ = listSubs__;
          list453 = items.get();
          list453.list(function(results453) {
            node2552.empty();
            for(var i1341 = 0; i1341 < results453.length; i1341++) {
              (function() {
                var iternode453 = $("<span>");
                node2552.append(iternode453);
                var it;
                it = mobl.ref(mobl.ref(results453), i1341);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp7093 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp7046 = mobl.ref(result__);
                
                var nodes7381 = $("<span>");
                iternode453.append(nodes7381);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7046, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root9288 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7382 = $("<span>");
                  root9288.append(nodes7382);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl1034();
                  }));
                  
                  function renderControl1034() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root9289 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root9289); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7382;
                      nodes7382 = node.contents();
                      oldNodes.replaceWith(nodes7382);
                    }));
                  }
                  renderControl1034();
                  callback(root9288); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7381;
                  nodes7381 = node.contents();
                  oldNodes.replaceWith(nodes7381);
                }));
                
                var oldNodes = iternode453;
                iternode453 = iternode453.contents();
                oldNodes.replaceWith(iternode453);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list453.addEventListener('change', function() { listSubs__.unsubscribe(); renderList453(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList453(true); }));
          });
        };
        renderList453();
        
        callback(root9287); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7380;
        nodes7380 = node.contents();
        oldNodes.replaceWith(nodes7380);
      }));
      
      
    }
  };
  renderCond611();
  subs__.addSub(tmp7075.addEventListener('change', function() {
    renderCond611();
  }));
  
  callback(root9279); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root9290 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp7049 = mobl.ref(result__);
  
  var nodes7383 = $("<span>");
  root9290.append(nodes7383);
  subs__.addSub((ui.header)(tmp7049, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9291 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7048 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7047 = mobl.ref(result__);
    
    var nodes7384 = $("<span>");
    root9291.append(nodes7384);
    subs__.addSub((ui.backButton)(tmp7047, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7048, function(_, callback) {
      var root9292 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9292); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7384;
      nodes7384 = node.contents();
      oldNodes.replaceWith(nodes7384);
    }));
    callback(root9291); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7383;
    nodes7383 = node.contents();
    oldNodes.replaceWith(nodes7383);
  }));
  var nodes7385 = $("<span>");
  root9290.append(nodes7385);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl1035();
  }));
  
  function renderControl1035() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root9293 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9293); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7385;
      nodes7385 = node.contents();
      oldNodes.replaceWith(nodes7385);
    }));
  }
  renderControl1035();
  callback(root9290); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root9294 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes7386 = $("<span>");
  root9294.append(nodes7386);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9295 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2553 = mobl.loadingSpan();
    root9295.append(node2553);
    var list454;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList454 = function() {
      var subs__ = listSubs__;
      list454 = coll.get();
      list454.list(function(results454) {
        node2553.empty();
        for(var i1342 = 0; i1342 < results454.length; i1342++) {
          (function() {
            var iternode454 = $("<span>");
            node2553.append(iternode454);
            var it;
            it = mobl.ref(mobl.ref(results454), i1342);
            var result__ = it.get() == selected.get();
            var tmp7054 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp7054.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp7054.set(it.get() == selected.get());
            }));
            
            
            var node2554 = $("<span>");
            iternode454.append(node2554);
            var condSubs614 = new mobl.CompSubscription();
            subs__.addSub(condSubs614);
            var oldValue614;
            var renderCond614 = function() {
              var value3482 = tmp7054.get();
              if(oldValue614 === value3482) return;
              oldValue614 = value3482;
              var subs__ = condSubs614;
              subs__.unsubscribe();
              node2554.empty();
              if(value3482) {
                var nodes7387 = $("<span>");
                node2554.append(nodes7387);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root9296 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7388 = $("<span>");
                  root9296.append(nodes7388);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl1036();
                  }));
                  
                  function renderControl1036() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root9297 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root9297); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7388;
                      nodes7388 = node.contents();
                      oldNodes.replaceWith(nodes7388);
                    }));
                  }
                  renderControl1036();
                  callback(root9296); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7387;
                  nodes7387 = node.contents();
                  oldNodes.replaceWith(nodes7387);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp7053 = mobl.ref(result__);
                
                var nodes7389 = $("<span>");
                node2554.append(nodes7389);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7053, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root9298 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7390 = $("<span>");
                  root9298.append(nodes7390);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl1037();
                  }));
                  
                  function renderControl1037() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root9299 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root9299); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7390;
                      nodes7390 = node.contents();
                      oldNodes.replaceWith(nodes7390);
                    }));
                  }
                  renderControl1037();
                  callback(root9298); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7389;
                  nodes7389 = node.contents();
                  oldNodes.replaceWith(nodes7389);
                }));
                
                
              }
            };
            renderCond614();
            subs__.addSub(tmp7054.addEventListener('change', function() {
              renderCond614();
            }));
            
            
            var oldNodes = iternode454;
            iternode454 = iternode454.contents();
            oldNodes.replaceWith(iternode454);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list454.addEventListener('change', function() { listSubs__.unsubscribe(); renderList454(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList454(true); }));
      });
    };
    renderList454();
    
    callback(root9295); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7386;
    nodes7386 = node.contents();
    oldNodes.replaceWith(nodes7386);
  }));
  callback(root9294); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root9300 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp7094 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp7055 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp7055.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp7055.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp7055.set(coll.get().limit(n.get()));
    }));
    
    
    var node2555 = mobl.loadingSpan();
    root9300.append(node2555);
    var list455;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList455 = function() {
      var subs__ = listSubs__;
      list455 = tmp7055.get();
      list455.list(function(results455) {
        node2555.empty();
        for(var i1343 = 0; i1343 < results455.length; i1343++) {
          (function() {
            var iternode455 = $("<span>");
            node2555.append(iternode455);
            var it;
            it = mobl.ref(mobl.ref(results455), i1343);
            var nodes7391 = $("<span>");
            iternode455.append(nodes7391);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl1038();
            }));
            
            function renderControl1038() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root9301 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9301); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7391;
                nodes7391 = node.contents();
                oldNodes.replaceWith(nodes7391);
              }));
            }
            renderControl1038();
            
            var oldNodes = iternode455;
            iternode455 = iternode455.contents();
            oldNodes.replaceWith(iternode455);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list455.addEventListener('change', function() { listSubs__.unsubscribe(); renderList455(true); }));
        subs__.addSub(tmp7055.addEventListener('change', function() { listSubs__.unsubscribe(); renderList455(true); }));
      });
    };
    renderList455();
    
    var result__ = n.get() < total.get();
    var tmp7057 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp7057.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp7057.set(n.get() < total.get());
    }));
    
    
    var node2556 = $("<span>");
    root9300.append(node2556);
    var condSubs615 = new mobl.CompSubscription();
    subs__.addSub(condSubs615);
    var oldValue615;
    var renderCond615 = function() {
      var value3483 = tmp7057.get();
      if(oldValue615 === value3483) return;
      oldValue615 = value3483;
      var subs__ = condSubs615;
      subs__.unsubscribe();
      node2556.empty();
      if(value3483) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp7056 = mobl.ref(result__);
        
        var nodes7392 = $("<span>");
        node2556.append(nodes7392);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp7056, mobl.ref(null), function(_, callback) {
          var root9302 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes7393 = $("<span>");
          root9302.append(nodes7393);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root9303 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root9303); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes7393;
            nodes7393 = node.contents();
            oldNodes.replaceWith(nodes7393);
          }));
          callback(root9302); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes7392;
          nodes7392 = node.contents();
          oldNodes.replaceWith(nodes7392);
        }));
        
        
      } else {
        
      }
    };
    renderCond615();
    subs__.addSub(tmp7057.addEventListener('change', function() {
      renderCond615();
    }));
    
    callback(root9300); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root9304 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7394 = $("<span>");
  root9304.append(nodes7394);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9305 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2557 = mobl.loadingSpan();
    root9305.append(node2557);
    var list456;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList456 = function() {
      var subs__ = listSubs__;
      list456 = items.get();
      list456.list(function(results456) {
        node2557.empty();
        for(var i1344 = 0; i1344 < results456.length; i1344++) {
          (function() {
            var iternode456 = $("<span>");
            node2557.append(iternode456);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results456), i1344), "_1");it = mobl.ref(mobl.ref(mobl.ref(results456), i1344), "_2");
            var nodes7395 = $("<span>");
            iternode456.append(nodes7395);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root9306 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7396 = $("<span>");
              root9306.append(nodes7396);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root9307 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9307); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7396;
                nodes7396 = node.contents();
                oldNodes.replaceWith(nodes7396);
              }));
              callback(root9306); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7395;
              nodes7395 = node.contents();
              oldNodes.replaceWith(nodes7395);
            }));
            
            var oldNodes = iternode456;
            iternode456 = iternode456.contents();
            oldNodes.replaceWith(iternode456);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list456.addEventListener('change', function() { listSubs__.unsubscribe(); renderList456(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList456(true); }));
      });
    };
    renderList456();
    
    callback(root9305); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7394;
    nodes7394 = node.contents();
    oldNodes.replaceWith(nodes7394);
  }));
  callback(root9304); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root9308 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll4545) {
    coll4545 = coll4545.reverse();
    function processOne243() {
      var it;
      it = coll4545.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll4545.length > 0) processOne243(); else rest243();
      
    }
    function rest243() {
      var nodes7397 = $("<span>");
      root9308.append(nodes7397);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root9309 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp7058 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp7059 = mobl.ref(result__);
        
        var nodes7398 = $("<span>");
        root9309.append(nodes7398);
        subs__.addSub((ui.backButton)(tmp7059, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7058, function(_, callback) {
          var root9310 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9310); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7398;
          nodes7398 = node.contents();
          oldNodes.replaceWith(nodes7398);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll4544) {
                           coll4544 = coll4544.reverse();
                           function processOne242() {
                             var checked;var it;
                             var tmp7096 = coll4544.pop();
                             checked = tmp7096._1;it = tmp7096._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll4544.length > 0) processOne242(); else rest242();
                               
                             } else {
                               {
                                 
                                 if(coll4544.length > 0) processOne242(); else rest242();
                                 
                               }
                             }
                           }
                           function rest242() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll4544.length > 0) processOne242(); else rest242();
                         });
                         
                       };
        var tmp7060 = mobl.ref(result__);
        
        var nodes7399 = $("<span>");
        root9309.append(nodes7399);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp7060, function(_, callback) {
          var root9311 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9311); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7399;
          nodes7399 = node.contents();
          oldNodes.replaceWith(nodes7399);
        }));
        callback(root9309); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7397;
        nodes7397 = node.contents();
        oldNodes.replaceWith(nodes7397);
      }));
      var nodes7400 = $("<span>");
      root9308.append(nodes7400);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root9312 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9312); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7400;
        nodes7400 = node.contents();
        oldNodes.replaceWith(nodes7400);
      }));
      callback(root9308); return subs__;
      
      
    }
    if(coll4545.length > 0) processOne243(); else rest243();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root9313 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes7401 = $("<span>");
  root9313.append(nodes7401);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root9314 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9314); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7401;
    nodes7401 = node.contents();
    oldNodes.replaceWith(nodes7401);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp7061 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp7061.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp7061.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp7061.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp7061.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp7061.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes7402 = $("<span>");
  root9313.append(nodes7402);
  subs__.addSub((ui.masterDetail)(tmp7061, masterItem, detailItem, function(_, callback) {
    var root9315 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9315); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7402;
    nodes7402 = node.contents();
    oldNodes.replaceWith(nodes7402);
  }));
  callback(root9313); return subs__;
  
  
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
  var root9316 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes7403 = $("<span>");
  root9316.append(nodes7403);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root9317 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2558 = mobl.loadingSpan();
    root9317.append(node2558);
    var list457;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList457 = function() {
      var subs__ = listSubs__;
      list457 = sections.get();
      list457.list(function(results457) {
        node2558.empty();
        for(var i1345 = 0; i1345 < results457.length; i1345++) {
          (function() {
            var iternode457 = $("<span>");
            node2558.append(iternode457);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results457), i1345), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results457), i1345), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp7063 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp7063.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp7063.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp7063.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp7063.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp7062 = mobl.ref(result__);
            
            var nodes7404 = $("<span>");
            iternode457.append(nodes7404);
            subs__.addSub((mobl.span)(tmp7063, mobl.ref(null), tmp7062, mobl.ref(null), function(_, callback) {
              var root9318 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7405 = $("<span>");
              root9318.append(nodes7405);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root9319 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9319); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7405;
                nodes7405 = node.contents();
                oldNodes.replaceWith(nodes7405);
              }));
              callback(root9318); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7404;
              nodes7404 = node.contents();
              oldNodes.replaceWith(nodes7404);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp7064 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp7064.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp7064.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp7064.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp7064.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes7406 = $("<span>");
            iternode457.append(nodes7406);
            subs__.addSub((mobl.block)(tmp7064, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root9320 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7407 = $("<span>");
              root9320.append(nodes7407);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl1039();
              }));
              
              function renderControl1039() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root9321 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root9321); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7407;
                  nodes7407 = node.contents();
                  oldNodes.replaceWith(nodes7407);
                }));
              }
              renderControl1039();
              callback(root9320); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7406;
              nodes7406 = node.contents();
              oldNodes.replaceWith(nodes7406);
            }));
            
            var oldNodes = iternode457;
            iternode457 = iternode457.contents();
            oldNodes.replaceWith(iternode457);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list457.addEventListener('change', function() { listSubs__.unsubscribe(); renderList457(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList457(true); }));
      });
    };
    renderList457();
    
    callback(root9317); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7403;
    nodes7403 = node.contents();
    oldNodes.replaceWith(nodes7403);
  }));
  callback(root9316); return subs__;
  
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
  var root9322 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2559 = $("<table>");
  
  var ref2265 = style;
  if(ref2265.get() !== null) {
    node2559.attr('class', ref2265.get());
    subs__.addSub(ref2265.addEventListener('change', function(_, ref, val) {
      node2559.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2265.rebind());
  
  var nodes7408 = $("<span>");
  node2559.append(nodes7408);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1040();
  }));
  
  function renderControl1040() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9323 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9323); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7408;
      nodes7408 = node.contents();
      oldNodes.replaceWith(nodes7408);
    }));
  }
  renderControl1040();
  root9322.append(node2559);
  callback(root9322); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root9324 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2560 = $("<tr>");
  
  var ref2266 = style;
  if(ref2266.get() !== null) {
    node2560.attr('class', ref2266.get());
    subs__.addSub(ref2266.addEventListener('change', function(_, ref, val) {
      node2560.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2266.rebind());
  
  var nodes7409 = $("<span>");
  node2560.append(nodes7409);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1041();
  }));
  
  function renderControl1041() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9325 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9325); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7409;
      nodes7409 = node.contents();
      oldNodes.replaceWith(nodes7409);
    }));
  }
  renderControl1041();
  root9324.append(node2560);
  callback(root9324); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root9326 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2561 = $("<td>");
  
  var ref2267 = width;
  if(ref2267.get() !== null) {
    node2561.attr('width', ref2267.get());
    subs__.addSub(ref2267.addEventListener('change', function(_, ref, val) {
      node2561.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2267.rebind());
  
  var ref2268 = style;
  if(ref2268.get() !== null) {
    node2561.attr('class', ref2268.get());
    subs__.addSub(ref2268.addEventListener('change', function(_, ref, val) {
      node2561.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2268.rebind());
  
  var nodes7410 = $("<span>");
  node2561.append(nodes7410);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1042();
  }));
  
  function renderControl1042() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9327 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9327); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7410;
      nodes7410 = node.contents();
      oldNodes.replaceWith(nodes7410);
    }));
  }
  renderControl1042();
  root9326.append(node2561);
  callback(root9326); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root9328 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2562 = $("<td>");
  
  var ref2269 = width;
  if(ref2269.get() !== null) {
    node2562.attr('width', ref2269.get());
    subs__.addSub(ref2269.addEventListener('change', function(_, ref, val) {
      node2562.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2269.rebind());
  
  var ref2270 = style;
  if(ref2270.get() !== null) {
    node2562.attr('class', ref2270.get());
    subs__.addSub(ref2270.addEventListener('change', function(_, ref, val) {
      node2562.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2270.rebind());
  
  var nodes7411 = $("<span>");
  node2562.append(nodes7411);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1043();
  }));
  
  function renderControl1043() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9329 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9329); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7411;
      nodes7411 = node.contents();
      oldNodes.replaceWith(nodes7411);
    }));
  }
  renderControl1043();
  root9328.append(node2562);
  callback(root9328); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root9330 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2563 = $("<td>");
  
  var ref2271 = width;
  if(ref2271.get() !== null) {
    node2563.attr('width', ref2271.get());
    subs__.addSub(ref2271.addEventListener('change', function(_, ref, val) {
      node2563.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2271.rebind());
  
  var ref2272 = style;
  if(ref2272.get() !== null) {
    node2563.attr('class', ref2272.get());
    subs__.addSub(ref2272.addEventListener('change', function(_, ref, val) {
      node2563.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2272.rebind());
  
  
  var node2564 = $("<strong>");
  
  var nodes7412 = $("<span>");
  node2564.append(nodes7412);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1044();
  }));
  
  function renderControl1044() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9331 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9331); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7412;
      nodes7412 = node.contents();
      oldNodes.replaceWith(nodes7412);
    }));
  }
  renderControl1044();
  node2563.append(node2564);
  root9330.append(node2563);
  callback(root9330); return subs__;
  
  
  
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
  items.list(function(coll4546) {
    coll4546 = coll4546.reverse();
    function processOne244() {
      var item;
      item = coll4546.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll4546.length > 0) processOne244(); else rest244();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll4546.length > 0) processOne244(); else rest244();
          
        }
      }
    }
    function rest244() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll4546.length > 0) processOne244(); else rest244();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root9332 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp7076 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp7076.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node2565 = $("<span>");
  root9332.append(node2565);
  var condSubs616 = new mobl.CompSubscription();
  subs__.addSub(condSubs616);
  var oldValue616;
  var renderCond616 = function() {
    var value3484 = tmp7076.get();
    if(oldValue616 === value3484) return;
    oldValue616 = value3484;
    var subs__ = condSubs616;
    subs__.unsubscribe();
    node2565.empty();
    if(value3484) {
      items.get().one(function(result__) {
        var tmp7098 = result__;
        var current = mobl.ref(result__);
        
        var node2566 = $("<div>");
        node2566.attr('width', "100%");
        
        
        var node2567 = $("<div>");
        node2567.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes7414 = $("<span>");
        node2567.append(nodes7414);
        subs__.addSub((ui.group)(function(_, callback) {
          var root9334 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node2572 = mobl.loadingSpan();
          root9334.append(node2572);
          var list458;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList458 = function() {
            var subs__ = listSubs__;
            list458 = items.get();
            list458.list(function(results458) {
              node2572.empty();
              for(var i1346 = 0; i1346 < results458.length; i1346++) {
                (function() {
                  var iternode458 = $("<span>");
                  node2572.append(iternode458);
                  var it;
                  it = mobl.ref(mobl.ref(results458), i1346);
                  var result__ = it.get() == current.get();
                  var tmp7073 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp7073.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp7073.set(it.get() == current.get());
                  }));
                  
                  
                  var node2573 = $("<span>");
                  iternode458.append(node2573);
                  var condSubs618 = new mobl.CompSubscription();
                  subs__.addSub(condSubs618);
                  var oldValue618;
                  var renderCond618 = function() {
                    var value3486 = tmp7073.get();
                    if(oldValue618 === value3486) return;
                    oldValue618 = value3486;
                    var subs__ = condSubs618;
                    subs__.unsubscribe();
                    node2573.empty();
                    if(value3486) {
                      var nodes7415 = $("<span>");
                      node2573.append(nodes7415);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root9335 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp7101 = result__;
                          var tmp7070 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7099 = result__;
                              var result__ = tmp7099;
                              tmp7070.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7100 = result__;
                              var result__ = tmp7100;
                              tmp7070.set(result__);
                              
                            });
                          }));
                          
                          var nodes7416 = $("<span>");
                          root9335.append(nodes7416);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl1046();
                          }));
                          
                          function renderControl1046() {
                            subs__.addSub((masterItem.get())(it, tmp7070, function(elements, callback) {
                              var root9336 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root9336); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes7416;
                              nodes7416 = node.contents();
                              oldNodes.replaceWith(nodes7416);
                            }));
                          }
                          renderControl1046();
                          callback(root9335); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7415;
                        nodes7415 = node.contents();
                        oldNodes.replaceWith(nodes7415);
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
                      var tmp7072 = mobl.ref(result__);
                      
                      var nodes7417 = $("<span>");
                      node2573.append(nodes7417);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7072, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root9337 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp7104 = result__;
                          var tmp7071 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7102 = result__;
                              var result__ = tmp7102;
                              tmp7071.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7103 = result__;
                              var result__ = tmp7103;
                              tmp7071.set(result__);
                              
                            });
                          }));
                          
                          var nodes7418 = $("<span>");
                          root9337.append(nodes7418);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl1047();
                          }));
                          
                          function renderControl1047() {
                            subs__.addSub((masterItem.get())(it, tmp7071, function(elements, callback) {
                              var root9338 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root9338); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes7418;
                              nodes7418 = node.contents();
                              oldNodes.replaceWith(nodes7418);
                            }));
                          }
                          renderControl1047();
                          callback(root9337); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7417;
                        nodes7417 = node.contents();
                        oldNodes.replaceWith(nodes7417);
                      }));
                      
                      
                    }
                  };
                  renderCond618();
                  subs__.addSub(tmp7073.addEventListener('change', function() {
                    renderCond618();
                  }));
                  
                  
                  var oldNodes = iternode458;
                  iternode458 = iternode458.contents();
                  oldNodes.replaceWith(iternode458);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list458.addEventListener('change', function() { listSubs__.unsubscribe(); renderList458(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList458(true); }));
            });
          };
          renderList458();
          
          callback(root9334); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes7414;
          nodes7414 = node.contents();
          oldNodes.replaceWith(nodes7414);
        }));
        node2566.append(node2567);
        
        var node2568 = $("<div>");
        node2568.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        var result__ = current.get() && ui.visible.get();
        var tmp7074 = mobl.ref(result__);
        subs__.addSub(current.addEventListener('change', function() {
          tmp7074.set(current.get() && ui.visible.get());
        }));
        subs__.addSub(ui.visible.addEventListener('change', function() {
          tmp7074.set(current.get() && ui.visible.get());
        }));
        
        
        var node2569 = $("<span>");
        node2568.append(node2569);
        var condSubs617 = new mobl.CompSubscription();
        subs__.addSub(condSubs617);
        var oldValue617;
        var renderCond617 = function() {
          var value3485 = tmp7074.get();
          if(oldValue617 === value3485) return;
          oldValue617 = value3485;
          var subs__ = condSubs617;
          subs__.unsubscribe();
          node2569.empty();
          if(value3485) {
            var nodes7413 = $("<span>");
            node2569.append(nodes7413);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl1045();
            }));
            
            function renderControl1045() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root9333 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9333); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7413;
                nodes7413 = node.contents();
                oldNodes.replaceWith(nodes7413);
              }));
            }
            renderControl1045();
            
            
          } else {
            
            var node2570 = $("<div>");
            node2570.attr('style', "padding:20px");
            
            
            var node2571 = $("<h2>");
            
            
            node2571.append("Add your questions here!");
            node2570.append(node2571);
            node2569.append(node2570);
            
            
            
          }
        };
        renderCond617();
        subs__.addSub(tmp7074.addEventListener('change', function() {
          renderCond617();
        }));
        
        node2566.append(node2568);
        node2565.append(node2566);
        
        
        
        
        
        
      });
    } else {
      var nodes7419 = $("<span>");
      node2565.append(nodes7419);
      subs__.addSub((ui.group)(function(_, callback) {
        var root9339 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2574 = mobl.loadingSpan();
        root9339.append(node2574);
        var list459;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList459 = function() {
          var subs__ = listSubs__;
          list459 = items.get();
          list459.list(function(results459) {
            node2574.empty();
            for(var i1347 = 0; i1347 < results459.length; i1347++) {
              (function() {
                var iternode459 = $("<span>");
                node2574.append(iternode459);
                var it;
                it = mobl.ref(mobl.ref(results459), i1347);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp7108 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp7066 = mobl.ref(result__);
                
                var nodes7420 = $("<span>");
                iternode459.append(nodes7420);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7066, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root9340 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp7107 = result__;
                    var tmp7065 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp7105 = result__;
                        var result__ = tmp7105;
                        tmp7065.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp7106 = result__;
                        var result__ = tmp7106;
                        tmp7065.set(result__);
                        
                      });
                    }));
                    
                    var nodes7421 = $("<span>");
                    root9340.append(nodes7421);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl1048();
                    }));
                    
                    function renderControl1048() {
                      subs__.addSub((masterItem.get())(it, tmp7065, function(elements, callback) {
                        var root9341 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root9341); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7421;
                        nodes7421 = node.contents();
                        oldNodes.replaceWith(nodes7421);
                      }));
                    }
                    renderControl1048();
                    callback(root9340); return subs__;
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7420;
                  nodes7420 = node.contents();
                  oldNodes.replaceWith(nodes7420);
                }));
                
                var oldNodes = iternode459;
                iternode459 = iternode459.contents();
                oldNodes.replaceWith(iternode459);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list459.addEventListener('change', function() { listSubs__.unsubscribe(); renderList459(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList459(true); }));
          });
        };
        renderList459();
        
        callback(root9339); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7419;
        nodes7419 = node.contents();
        oldNodes.replaceWith(nodes7419);
      }));
      
      
    }
  };
  renderCond616();
  subs__.addSub(tmp7076.addEventListener('change', function() {
    renderCond616();
  }));
  
  callback(root9332); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root9342 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp7069 = mobl.ref(result__);
  
  var nodes7422 = $("<span>");
  root9342.append(nodes7422);
  subs__.addSub((ui.header)(tmp7069, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9343 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    mobl.sleep(500, function(result__) {
      var tmp7109 = result__;
      mathJAX.renderMaths(function(result__) {
        var tmp7110 = result__;
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp7068 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp7067 = mobl.ref(result__);
        
        var nodes7423 = $("<span>");
        root9343.append(nodes7423);
        subs__.addSub((ui.backButton)(tmp7067, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7068, function(_, callback) {
          var root9344 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9344); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7423;
          nodes7423 = node.contents();
          oldNodes.replaceWith(nodes7423);
        }));
        callback(root9343); return subs__;
        
      });
    });
    return subs__;
  }, function(node) {
    var oldNodes = nodes7422;
    nodes7422 = node.contents();
    oldNodes.replaceWith(nodes7422);
  }));
  var nodes7424 = $("<span>");
  root9342.append(nodes7424);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl1049();
  }));
  
  function renderControl1049() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root9345 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9345); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7424;
      nodes7424 = node.contents();
      oldNodes.replaceWith(nodes7424);
    }));
  }
  renderControl1049();
  callback(root9342); return subs__;
  
  
  return subs__;
};
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.section = 'ui__section';
ui.logoStyle = 'ui__logoStyle';
