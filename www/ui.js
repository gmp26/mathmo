mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mathJAX');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root9352 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2827 = $("<span>");
  root9352.append(node2827);
  var condSubs722 = new mobl.CompSubscription();
  subs__.addSub(condSubs722);
  var oldValue722;
  var renderCond722 = function() {
    var value1622 = value.get();
    if(oldValue722 === value1622) return;
    oldValue722 = value1622;
    var subs__ = condSubs722;
    subs__.unsubscribe();
    node2827.empty();
    if(value1622) {
      var nodes7450 = $("<span>");
      node2827.append(nodes7450);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl1153();
      }));
      
      function renderControl1153() {
        subs__.addSub((elements)(function(elements, callback) {
          var root9353 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9353); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7450;
          nodes7450 = node.contents();
          oldNodes.replaceWith(nodes7450);
        }));
      }
      renderControl1153();
      
      
    } else {
      var nodes7451 = $("<span>");
      node2827.append(nodes7451);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9354 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes7452 = $("<span>");
        root9354.append(nodes7452);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root9355 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9355); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7452;
          nodes7452 = node.contents();
          oldNodes.replaceWith(nodes7452);
        }));
        var nodes7453 = $("<span>");
        root9354.append(nodes7453);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root9356 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9356); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7453;
          nodes7453 = node.contents();
          oldNodes.replaceWith(nodes7453);
        }));
        callback(root9354); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7451;
        nodes7451 = node.contents();
        oldNodes.replaceWith(nodes7451);
      }));
      
      
    }
  };
  renderCond722();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond722();
  }));
  
  callback(root9352); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root9357 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2828 = $("<div>");
  
  var ref2632 = mobl.ref(ui.headerStyle);
  if(ref2632.get() !== null) {
    node2828.attr('class', ref2632.get());
    subs__.addSub(ref2632.addEventListener('change', function(_, ref, val) {
      node2828.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2632.rebind());
  
  var val1333 = onclick.get();
  if(val1333 !== null) {
    subs__.addSub(mobl.domBind(node2828, 'tap', val1333));
  }
  
  var ref2633 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref2633.get() !== null) {
    node2828.attr('style', ref2633.get());
    subs__.addSub(ref2633.addEventListener('change', function(_, ref, val) {
      node2828.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node2828.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref2633.rebind());
  
  
  var node2831 = $("<div>");
  
  var ref2631 = mobl.ref(ui.headerContainerStyle);
  if(ref2631.get() !== null) {
    node2831.attr('class', ref2631.get());
    subs__.addSub(ref2631.addEventListener('change', function(_, ref, val) {
      node2831.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2631.rebind());
  
  
  var node2832 = $("<div>");
  
  var ref2629 = text;
  node2832.text(""+ref2629.get());
  var ignore519 = false;
  subs__.addSub(ref2629.addEventListener('change', function(_, ref, val) {
    if(ignore519) return;
    node2832.text(""+val);
  }));
  subs__.addSub(ref2629.rebind());
  
  
  var ref2630 = mobl.ref(ui.headerTextStyle);
  if(ref2630.get() !== null) {
    node2832.attr('class', ref2630.get());
    subs__.addSub(ref2630.addEventListener('change', function(_, ref, val) {
      node2832.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2630.rebind());
  
  node2831.append(node2832);
  node2828.append(node2831);
  var nodes7454 = $("<span>");
  node2828.append(nodes7454);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1154();
  }));
  
  function renderControl1154() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9358 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9358); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7454;
      nodes7454 = node.contents();
      oldNodes.replaceWith(nodes7454);
    }));
  }
  renderControl1154();
  root9357.append(node2828);
  
  var node2829 = $("<span>");
  root9357.append(node2829);
  var condSubs723 = new mobl.CompSubscription();
  subs__.addSub(condSubs723);
  var oldValue723;
  var renderCond723 = function() {
    var value1623 = fixedPosition.get();
    if(oldValue723 === value1623) return;
    oldValue723 = value1623;
    var subs__ = condSubs723;
    subs__.unsubscribe();
    node2829.empty();
    if(value1623) {
      
      var node2830 = $("<div>");
      node2830.attr('id', "hello");
      node2830.attr('style', "height: 2.9em;");
      
      node2829.append(node2830);
      
      
    } else {
      
    }
  };
  renderCond723();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond723();
  }));
  
  callback(root9357); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root9359 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref2634 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref2634.get() !== null) {
    sp.attr('class', ref2634.get());
    subs__.addSub(ref2634.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref2634.rebind());
  
  var val1334 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val1334 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val1334));
  }
  
  var val1335 = function(event, callback) {
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
  if(val1335 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val1335));
  }
  
  var val1336 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after405(result__) {
                    var tmp7211 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after405);if(result__ !== undefined) after405(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1336 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val1336));
  }
  
  var val1337 = function(event, callback) {
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
  if(val1337 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val1337));
  }
  
  var ref2635 = text;
  sp.text(""+ref2635.get());
  var ignore520 = false;
  subs__.addSub(ref2635.addEventListener('change', function(_, ref, val) {
    if(ignore520) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref2635.rebind());
  
  
  root9359.append(sp);
  callback(root9359); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root9360 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7455 = $("<span>");
  root9360.append(nodes7455);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root9361 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9361); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7455;
    nodes7455 = node.contents();
    oldNodes.replaceWith(nodes7455);
  }));
  callback(root9360); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root9362 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7456 = $("<span>");
  root9362.append(nodes7456);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root9363 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9363); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7456;
    nodes7456 = node.contents();
    oldNodes.replaceWith(nodes7456);
  }));
  callback(root9362); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root9364 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2833 = $("<ul>");
  
  var ref2636 = mobl.ref(ui.groupStyle);
  if(ref2636.get() !== null) {
    node2833.attr('class', ref2636.get());
    subs__.addSub(ref2636.addEventListener('change', function(_, ref, val) {
      node2833.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2636.rebind());
  
  var nodes7457 = $("<span>");
  node2833.append(nodes7457);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1155();
  }));
  
  function renderControl1155() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9365 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9365); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7457;
      nodes7457 = node.contents();
      oldNodes.replaceWith(nodes7457);
    }));
  }
  renderControl1155();
  root9364.append(node2833);
  callback(root9364); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root9366 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2834 = $("<img>");
  
  var ref2637 = url;
  if(ref2637.get() !== null) {
    node2834.attr('src', ref2637.get());
    subs__.addSub(ref2637.addEventListener('change', function(_, ref, val) {
      node2834.attr('src', val);
    }));
    
  }
  subs__.addSub(ref2637.rebind());
  
  var ref2638 = width;
  if(ref2638.get() !== null) {
    node2834.attr('width', ref2638.get());
    subs__.addSub(ref2638.addEventListener('change', function(_, ref, val) {
      node2834.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2638.rebind());
  
  var ref2639 = height;
  if(ref2639.get() !== null) {
    node2834.attr('height', ref2639.get());
    subs__.addSub(ref2639.addEventListener('change', function(_, ref, val) {
      node2834.attr('height', val);
    }));
    
  }
  subs__.addSub(ref2639.rebind());
  
  var ref2640 = style;
  if(ref2640.get() !== null) {
    node2834.attr('class', ref2640.get());
    subs__.addSub(ref2640.addEventListener('change', function(_, ref, val) {
      node2834.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2640.rebind());
  
  var val1338 = onclick.get();
  if(val1338 !== null) {
    subs__.addSub(mobl.domBind(node2834, 'tap', val1338));
  }
  
  var ref2641 = valign;
  if(ref2641.get() !== null) {
    node2834.attr('valign', ref2641.get());
    subs__.addSub(ref2641.addEventListener('change', function(_, ref, val) {
      node2834.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref2641.rebind());
  
  var ref2642 = align;
  if(ref2642.get() !== null) {
    node2834.attr('align', ref2642.get());
    subs__.addSub(ref2642.addEventListener('change', function(_, ref, val) {
      node2834.attr('align', val);
    }));
    
  }
  subs__.addSub(ref2642.rebind());
  
  root9366.append(node2834);
  callback(root9366); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root9367 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref2643 = mobl.ref(ui.itemStyle);
  if(ref2643.get() !== null) {
    el.attr('class', ref2643.get());
    subs__.addSub(ref2643.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2643.rebind());
  
  var ref2644 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref2644.get() !== null) {
    el.attr('class', ref2644.get());
    subs__.addSub(ref2644.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref2644.rebind());
  
  var val1339 = onswipe.get();
  if(val1339 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val1339));
  }
  
  var val1340 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp7212 = result__;
                                           function after406(result__) {
                                             var tmp7213 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after406);if(result__ !== undefined) after406(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp7214 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val1340 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val1340));
  }
  
  var nodes7458 = $("<span>");
  el.append(nodes7458);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1156();
  }));
  
  function renderControl1156() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9368 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9368); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7458;
      nodes7458 = node.contents();
      oldNodes.replaceWith(nodes7458);
    }));
  }
  renderControl1156();
  root9367.append(el);
  callback(root9367); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root9369 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2835 = $("<input>");
  node2835.attr('type', "checkbox");
  
  var ref2646 = b;
  node2835.attr('checked', !!ref2646.get());
  subs__.addSub(ref2646.addEventListener('change', function(_, ref, val) {
    if(ref === ref2646) node2835.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node2835, 'change', function() {
    b.set(!!node2835.attr('checked'));
  }));
  
  var val1342 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val1342 !== null) {
    subs__.addSub(mobl.domBind(node2835, 'tap', val1342));
  }
  
  var val1343 = onchange.get();
  if(val1343 !== null) {
    subs__.addSub(mobl.domBind(node2835, 'change', val1343));
  }
  
  root9369.append(node2835);
  
  root9369.append(" ");
  
  var node2836 = $("<span>");
  
  var ref2645 = label;
  node2836.text(""+ref2645.get());
  var ignore521 = false;
  subs__.addSub(ref2645.addEventListener('change', function(_, ref, val) {
    if(ignore521) return;
    node2836.text(""+val);
  }));
  subs__.addSub(ref2645.rebind());
  
  
  var val1341 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after407(result__) {
                    var tmp7215 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after407);if(result__ !== undefined) after407(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1341 !== null) {
    subs__.addSub(mobl.domBind(node2836, 'tap', val1341));
  }
  
  root9369.append(node2836);
  callback(root9369); return subs__;
  
  
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
  var root9370 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2837 = $("<span>");
  root9370.append(node2837);
  var condSubs724 = new mobl.CompSubscription();
  subs__.addSub(condSubs724);
  var oldValue724;
  var renderCond724 = function() {
    var value1624 = label.get();
    if(oldValue724 === value1624) return;
    oldValue724 = value1624;
    var subs__ = condSubs724;
    subs__.unsubscribe();
    node2837.empty();
    if(value1624) {
      var nodes7459 = $("<span>");
      node2837.append(nodes7459);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root9371 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9371); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7459;
        nodes7459 = node.contents();
        oldNodes.replaceWith(nodes7459);
      }));
      
      
    } else {
      
    }
  };
  renderCond724();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond724();
  }));
  
  
  var node2838 = $("<span>");
  root9370.append(node2838);
  var condSubs725 = new mobl.CompSubscription();
  subs__.addSub(condSubs725);
  var oldValue725;
  var renderCond725 = function() {
    var value1625 = validator.get();
    if(oldValue725 === value1625) return;
    oldValue725 = value1625;
    var subs__ = condSubs725;
    subs__.unsubscribe();
    node2838.empty();
    if(value1625) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after411(result__) {
        var tmp7216 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp7217 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node2839 = $("<input>");
        
        var ref2647 = inputType;
        if(ref2647.get() !== null) {
          node2839.attr('type', ref2647.get());
          subs__.addSub(ref2647.addEventListener('change', function(_, ref, val) {
            node2839.attr('type', val);
          }));
          
        }
        subs__.addSub(ref2647.rebind());
        
        var ref2648 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref2648.get() !== null) {
          node2839.attr('class', ref2648.get());
          subs__.addSub(ref2648.addEventListener('change', function(_, ref, val) {
            node2839.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node2839.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node2839.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node2839.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref2648.rebind());
        
        var ref2649 = placeholder;
        if(ref2649.get() !== null) {
          node2839.attr('placeholder', ref2649.get());
          subs__.addSub(ref2649.addEventListener('change', function(_, ref, val) {
            node2839.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref2649.rebind());
        
        var ref2650 = temp;
        node2839.val(""+ref2650.get());
        var ignore522 = false;
        subs__.addSub(ref2650.addEventListener('change', function(_, ref, val) {
          if(ignore522) return;
          node2839.val(""+val);
        }));
        subs__.addSub(ref2650.rebind());
        
        subs__.addSub(mobl.domBind(node2839, 'keyup change', function() {
          ignore522 = true;
          temp.set(mobl.stringTomobl__String(node2839.val()));
          ignore522 = false;
        }));
        
        
        var val1344 = onchange.get();
        if(val1344 !== null) {
          subs__.addSub(mobl.domBind(node2839, 'change', val1344));
        }
        
        var val1345 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after408(result__) {
                          var tmp7218 = result__;
                          function after409(result__) {
                            var tmp7219 = result__;
                            var result__ = tmp7219;
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
                          var result__ = validator.get()(temp.get(), after409);if(result__ !== undefined) after409(result__);
                        }
                        var result__ = onkeyup.get()(event, after408);if(result__ !== undefined) after408(result__);
                      } else {
                        {
                          function after410(result__) {
                            var tmp7219 = result__;
                            var result__ = tmp7219;
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
                          var result__ = validator.get()(temp.get(), after410);if(result__ !== undefined) after410(result__);
                        }
                      }
                    };
        if(val1345 !== null) {
          subs__.addSub(mobl.domBind(node2839, 'keyup', val1345));
        }
        
        var val1346 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1346 !== null) {
          subs__.addSub(mobl.domBind(node2839, 'blur', val1346));
        }
        
        node2838.append(node2839);
        var nodes7460 = $("<span>");
        node2838.append(nodes7460);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root9372 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9372); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7460;
          nodes7460 = node.contents();
          oldNodes.replaceWith(nodes7460);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after411);if(result__ !== undefined) after411(result__);
    } else {
      
      var node2840 = $("<input>");
      
      var ref2651 = inputType;
      if(ref2651.get() !== null) {
        node2840.attr('type', ref2651.get());
        subs__.addSub(ref2651.addEventListener('change', function(_, ref, val) {
          node2840.attr('type', val);
        }));
        
      }
      subs__.addSub(ref2651.rebind());
      
      var ref2652 = style;
      if(ref2652.get() !== null) {
        node2840.attr('class', ref2652.get());
        subs__.addSub(ref2652.addEventListener('change', function(_, ref, val) {
          node2840.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2652.rebind());
      
      var ref2653 = placeholder;
      if(ref2653.get() !== null) {
        node2840.attr('placeholder', ref2653.get());
        subs__.addSub(ref2653.addEventListener('change', function(_, ref, val) {
          node2840.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2653.rebind());
      
      var ref2654 = s;
      node2840.val(""+ref2654.get());
      var ignore523 = false;
      subs__.addSub(ref2654.addEventListener('change', function(_, ref, val) {
        if(ignore523) return;
        node2840.val(""+val);
      }));
      subs__.addSub(ref2654.rebind());
      
      subs__.addSub(mobl.domBind(node2840, 'keyup change', function() {
        ignore523 = true;
        s.set(mobl.stringTomobl__String(node2840.val()));
        ignore523 = false;
      }));
      
      
      var val1347 = onchange.get();
      if(val1347 !== null) {
        subs__.addSub(mobl.domBind(node2840, 'change', val1347));
      }
      
      var val1348 = onkeyup.get();
      if(val1348 !== null) {
        subs__.addSub(mobl.domBind(node2840, 'keyup', val1348));
      }
      
      var val1349 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1349 !== null) {
        subs__.addSub(mobl.domBind(node2840, 'blur', val1349));
      }
      
      node2838.append(node2840);
      
      
    }
  };
  renderCond725();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond725();
  }));
  
  callback(root9370); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root9373 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7461 = $("<span>");
  root9373.append(nodes7461);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root9374 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9374); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7461;
    nodes7461 = node.contents();
    oldNodes.replaceWith(nodes7461);
  }));
  callback(root9373); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root9375 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7462 = $("<span>");
  root9375.append(nodes7462);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root9376 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9376); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7462;
    nodes7462 = node.contents();
    oldNodes.replaceWith(nodes7462);
  }));
  callback(root9375); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root9377 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2841 = $("<span>");
  root9377.append(node2841);
  var condSubs726 = new mobl.CompSubscription();
  subs__.addSub(condSubs726);
  var oldValue726;
  var renderCond726 = function() {
    var value1626 = label.get();
    if(oldValue726 === value1626) return;
    oldValue726 = value1626;
    var subs__ = condSubs726;
    subs__.unsubscribe();
    node2841.empty();
    if(value1626) {
      var nodes7463 = $("<span>");
      node2841.append(nodes7463);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root9378 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9378); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7463;
        nodes7463 = node.contents();
        oldNodes.replaceWith(nodes7463);
      }));
      
      
    } else {
      
    }
  };
  renderCond726();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond726();
  }));
  
  
  var node2842 = $("<input>");
  node2842.attr('type', "range");
  
  var ref2655 = n;
  node2842.val(""+ref2655.get());
  var ignore524 = false;
  subs__.addSub(ref2655.addEventListener('change', function(_, ref, val) {
    if(ignore524) return;
    node2842.val(""+val);
  }));
  subs__.addSub(ref2655.rebind());
  
  subs__.addSub(mobl.domBind(node2842, 'keyup change', function() {
    ignore524 = true;
    n.set(mobl.stringTomobl__Num(node2842.val()));
    ignore524 = false;
  }));
  
  
  var ref2656 = min;
  if(ref2656.get() !== null) {
    node2842.attr('min', ref2656.get());
    subs__.addSub(ref2656.addEventListener('change', function(_, ref, val) {
      node2842.attr('min', val);
    }));
    
  }
  subs__.addSub(ref2656.rebind());
  
  var ref2657 = max;
  if(ref2657.get() !== null) {
    node2842.attr('max', ref2657.get());
    subs__.addSub(ref2657.addEventListener('change', function(_, ref, val) {
      node2842.attr('max', val);
    }));
    
  }
  subs__.addSub(ref2657.rebind());
  
  var ref2658 = step;
  if(ref2658.get() !== null) {
    node2842.attr('step', ref2658.get());
    subs__.addSub(ref2658.addEventListener('change', function(_, ref, val) {
      node2842.attr('step', val);
    }));
    
  }
  subs__.addSub(ref2658.rebind());
  node2842.attr('style', "width: 99%;");
  
  var val1350 = onchange.get();
  if(val1350 !== null) {
    subs__.addSub(mobl.domBind(node2842, 'change', val1350));
  }
  
  var val1351 = onkeyup.get();
  if(val1351 !== null) {
    subs__.addSub(mobl.domBind(node2842, 'keyup', val1351));
  }
  
  var ref2659 = placeholder;
  if(ref2659.get() !== null) {
    node2842.attr('placeholder', ref2659.get());
    subs__.addSub(ref2659.addEventListener('change', function(_, ref, val) {
      node2842.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref2659.rebind());
  
  root9377.append(node2842);
  callback(root9377); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root9379 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after412(result__) {
      var tmp7220 = result__;
      var result__ = tmp7220;
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
    var result__ = validator.get()(n2, after412);if(result__ !== undefined) after412(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes7464 = $("<span>");
  root9379.append(nodes7464);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root9380 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9380); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7464;
    nodes7464 = node.contents();
    oldNodes.replaceWith(nodes7464);
  }));
  callback(root9379); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root9381 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2843 = $("<span>");
  root9381.append(node2843);
  var condSubs727 = new mobl.CompSubscription();
  subs__.addSub(condSubs727);
  var oldValue727;
  var renderCond727 = function() {
    var value1627 = label.get();
    if(oldValue727 === value1627) return;
    oldValue727 = value1627;
    var subs__ = condSubs727;
    subs__.unsubscribe();
    node2843.empty();
    if(value1627) {
      
      var node2844 = $("<span>");
      node2844.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref2663 = label;
      node2844.text(""+ref2663.get());
      var ignore526 = false;
      subs__.addSub(ref2663.addEventListener('change', function(_, ref, val) {
        if(ignore526) return;
        node2844.text(""+val);
      }));
      subs__.addSub(ref2663.rebind());
      
      
      node2843.append(node2844);
      
      var node2845 = $("<span>");
      node2845.attr('style', "float: left");
      
      
      var node2846 = $("<input>");
      node2846.attr('type', "password");
      
      var ref2660 = style;
      if(ref2660.get() !== null) {
        node2846.attr('class', ref2660.get());
        subs__.addSub(ref2660.addEventListener('change', function(_, ref, val) {
          node2846.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2660.rebind());
      
      var ref2661 = placeholder;
      if(ref2661.get() !== null) {
        node2846.attr('placeholder', ref2661.get());
        subs__.addSub(ref2661.addEventListener('change', function(_, ref, val) {
          node2846.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2661.rebind());
      
      var ref2662 = s;
      node2846.val(""+ref2662.get());
      var ignore525 = false;
      subs__.addSub(ref2662.addEventListener('change', function(_, ref, val) {
        if(ignore525) return;
        node2846.val(""+val);
      }));
      subs__.addSub(ref2662.rebind());
      
      subs__.addSub(mobl.domBind(node2846, 'keyup change', function() {
        ignore525 = true;
        s.set(mobl.stringTomobl__String(node2846.val()));
        ignore525 = false;
      }));
      
      
      var val1352 = onchange.get();
      if(val1352 !== null) {
        subs__.addSub(mobl.domBind(node2846, 'change', val1352));
      }
      
      var val1353 = onkeyup.get();
      if(val1353 !== null) {
        subs__.addSub(mobl.domBind(node2846, 'keyup', val1353));
      }
      
      var val1354 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1354 !== null) {
        subs__.addSub(mobl.domBind(node2846, 'blur', val1354));
      }
      
      node2845.append(node2846);
      node2843.append(node2845);
      
      
      
      
    } else {
      
      var node2847 = $("<input>");
      node2847.attr('type', "password");
      
      var ref2664 = style;
      if(ref2664.get() !== null) {
        node2847.attr('class', ref2664.get());
        subs__.addSub(ref2664.addEventListener('change', function(_, ref, val) {
          node2847.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2664.rebind());
      
      var ref2665 = placeholder;
      if(ref2665.get() !== null) {
        node2847.attr('placeholder', ref2665.get());
        subs__.addSub(ref2665.addEventListener('change', function(_, ref, val) {
          node2847.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2665.rebind());
      
      var ref2666 = s;
      node2847.val(""+ref2666.get());
      var ignore527 = false;
      subs__.addSub(ref2666.addEventListener('change', function(_, ref, val) {
        if(ignore527) return;
        node2847.val(""+val);
      }));
      subs__.addSub(ref2666.rebind());
      
      subs__.addSub(mobl.domBind(node2847, 'keyup change', function() {
        ignore527 = true;
        s.set(mobl.stringTomobl__String(node2847.val()));
        ignore527 = false;
      }));
      
      
      var val1355 = onchange.get();
      if(val1355 !== null) {
        subs__.addSub(mobl.domBind(node2847, 'change', val1355));
      }
      
      var val1356 = onkeyup.get();
      if(val1356 !== null) {
        subs__.addSub(mobl.domBind(node2847, 'keyup', val1356));
      }
      
      var val1357 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1357 !== null) {
        subs__.addSub(mobl.domBind(node2847, 'blur', val1357));
      }
      
      node2843.append(node2847);
      
      
    }
  };
  renderCond727();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond727();
  }));
  
  callback(root9381); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root9382 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref2671 = style;
  if(ref2671.get() !== null) {
    sel.attr('class', ref2671.get());
    subs__.addSub(ref2671.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2671.rebind());
  
  var val1358 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after413(result__) {
                    var tmp7222 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after413);if(result__ !== undefined) after413(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1358 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val1358));
  }
  
  
  var node2848 = mobl.loadingSpan();
  sel.append(node2848);
  var list495;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList495 = function() {
    var subs__ = listSubs__;
    list495 = options.get();
    list495.list(function(results495) {
      node2848.empty();
      for(var i1242 = 0; i1242 < results495.length; i1242++) {
        (function() {
          var iternode495 = $("<span>");
          node2848.append(iternode495);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results495), i1242), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results495), i1242), "_2");
          
          var node2849 = $("<option>");
          
          var ref2667 = optionDescription;
          node2849.text(""+ref2667.get());
          var ignore528 = false;
          subs__.addSub(ref2667.addEventListener('change', function(_, ref, val) {
            if(ignore528) return;
            node2849.text(""+val);
          }));
          subs__.addSub(ref2667.rebind());
          
          
          var ref2668 = optionStyle;
          if(ref2668.get() !== null) {
            node2849.attr('class', ref2668.get());
            subs__.addSub(ref2668.addEventListener('change', function(_, ref, val) {
              node2849.attr('class', val);
            }));
            
          }
          subs__.addSub(ref2668.rebind());
          
          var ref2669 = optionValue;
          if(ref2669.get() !== null) {
            node2849.attr('value', ref2669.get());
            subs__.addSub(ref2669.addEventListener('change', function(_, ref, val) {
              node2849.attr('value', val);
            }));
            
          }
          subs__.addSub(ref2669.rebind());
          
          var ref2670 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref2670.get() !== null) {
            node2849.attr('selected', ref2670.get());
            subs__.addSub(ref2670.addEventListener('change', function(_, ref, val) {
              node2849.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node2849.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node2849.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref2670.rebind());
          
          iternode495.append(node2849);
          
          var oldNodes = iternode495;
          iternode495 = iternode495.contents();
          oldNodes.replaceWith(iternode495);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list495.addEventListener('change', function() { listSubs__.unsubscribe(); renderList495(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList495(true); }));
    });
  };
  renderList495();
  
  root9382.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root9382); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root9383 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes7465 = $("<span>");
    root9383.append(nodes7465);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root9384 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node2850 = mobl.loadingSpan();
      root9384.append(node2850);
      var list496;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList496 = function() {
        var subs__ = listSubs__;
        list496 = tabs.get();
        list496.list(function(results496) {
          node2850.empty();
          for(var i1243 = 0; i1243 < results496.length; i1243++) {
            (function() {
              var iternode496 = $("<span>");
              node2850.append(iternode496);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results496), i1243), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results496), i1243), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results496), i1243), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp7178 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp7178.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp7178.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp7178.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp7178.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp7177 = mobl.ref(result__);
              
              var nodes7466 = $("<span>");
              iternode496.append(nodes7466);
              subs__.addSub((mobl.span)(tmp7178, mobl.ref(null), tmp7177, mobl.ref(null), function(_, callback) {
                var root9385 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes7467 = $("<span>");
                root9385.append(nodes7467);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root9386 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root9386); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7467;
                  nodes7467 = node.contents();
                  oldNodes.replaceWith(nodes7467);
                }));
                callback(root9385); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7466;
                nodes7466 = node.contents();
                oldNodes.replaceWith(nodes7466);
              }));
              
              var oldNodes = iternode496;
              iternode496 = iternode496.contents();
              oldNodes.replaceWith(iternode496);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list496.addEventListener('change', function() { listSubs__.unsubscribe(); renderList496(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList496(true); }));
        });
      };
      renderList496();
      
      callback(root9384); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7465;
      nodes7465 = node.contents();
      oldNodes.replaceWith(nodes7465);
    }));
    
    var node2851 = mobl.loadingSpan();
    root9383.append(node2851);
    var list497;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList497 = function() {
      var subs__ = listSubs__;
      list497 = tabs.get();
      list497.list(function(results497) {
        node2851.empty();
        for(var i1244 = 0; i1244 < results497.length; i1244++) {
          (function() {
            var iternode497 = $("<span>");
            node2851.append(iternode497);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results497), i1244), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results497), i1244), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results497), i1244), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp7179 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp7179.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp7179.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp7179.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp7179.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes7468 = $("<span>");
            iternode497.append(nodes7468);
            subs__.addSub((mobl.block)(tmp7179, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root9387 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7469 = $("<span>");
              root9387.append(nodes7469);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root9388 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes7470 = $("<span>");
                root9388.append(nodes7470);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl1157();
                }));
                
                function renderControl1157() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root9389 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root9389); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes7470;
                    nodes7470 = node.contents();
                    oldNodes.replaceWith(nodes7470);
                  }));
                }
                renderControl1157();
                callback(root9388); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7469;
                nodes7469 = node.contents();
                oldNodes.replaceWith(nodes7469);
              }));
              callback(root9387); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7468;
              nodes7468 = node.contents();
              oldNodes.replaceWith(nodes7468);
            }));
            
            var oldNodes = iternode497;
            iternode497 = iternode497.contents();
            oldNodes.replaceWith(iternode497);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list497.addEventListener('change', function() { listSubs__.unsubscribe(); renderList497(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList497(true); }));
      });
    };
    renderList497();
    
    callback(root9383); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes7465 = $("<span>");
      root9383.append(nodes7465);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9384 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2850 = mobl.loadingSpan();
        root9384.append(node2850);
        var list496;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList496 = function() {
          var subs__ = listSubs__;
          list496 = tabs.get();
          list496.list(function(results496) {
            node2850.empty();
            for(var i1243 = 0; i1243 < results496.length; i1243++) {
              (function() {
                var iternode496 = $("<span>");
                node2850.append(iternode496);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results496), i1243), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results496), i1243), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results496), i1243), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp7178 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp7178.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp7178.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp7178.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp7178.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp7177 = mobl.ref(result__);
                
                var nodes7466 = $("<span>");
                iternode496.append(nodes7466);
                subs__.addSub((mobl.span)(tmp7178, mobl.ref(null), tmp7177, mobl.ref(null), function(_, callback) {
                  var root9385 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7467 = $("<span>");
                  root9385.append(nodes7467);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root9386 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root9386); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes7467;
                    nodes7467 = node.contents();
                    oldNodes.replaceWith(nodes7467);
                  }));
                  callback(root9385); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7466;
                  nodes7466 = node.contents();
                  oldNodes.replaceWith(nodes7466);
                }));
                
                var oldNodes = iternode496;
                iternode496 = iternode496.contents();
                oldNodes.replaceWith(iternode496);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list496.addEventListener('change', function() { listSubs__.unsubscribe(); renderList496(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList496(true); }));
          });
        };
        renderList496();
        
        callback(root9384); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7465;
        nodes7465 = node.contents();
        oldNodes.replaceWith(nodes7465);
      }));
      
      var node2851 = mobl.loadingSpan();
      root9383.append(node2851);
      var list497;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList497 = function() {
        var subs__ = listSubs__;
        list497 = tabs.get();
        list497.list(function(results497) {
          node2851.empty();
          for(var i1244 = 0; i1244 < results497.length; i1244++) {
            (function() {
              var iternode497 = $("<span>");
              node2851.append(iternode497);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results497), i1244), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results497), i1244), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results497), i1244), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp7179 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp7179.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp7179.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp7179.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp7179.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes7468 = $("<span>");
              iternode497.append(nodes7468);
              subs__.addSub((mobl.block)(tmp7179, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root9387 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes7469 = $("<span>");
                root9387.append(nodes7469);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root9388 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7470 = $("<span>");
                  root9388.append(nodes7470);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl1157();
                  }));
                  
                  function renderControl1157() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root9389 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root9389); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7470;
                      nodes7470 = node.contents();
                      oldNodes.replaceWith(nodes7470);
                    }));
                  }
                  renderControl1157();
                  callback(root9388); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7469;
                  nodes7469 = node.contents();
                  oldNodes.replaceWith(nodes7469);
                }));
                callback(root9387); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7468;
                nodes7468 = node.contents();
                oldNodes.replaceWith(nodes7468);
              }));
              
              var oldNodes = iternode497;
              iternode497 = iternode497.contents();
              oldNodes.replaceWith(iternode497);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list497.addEventListener('change', function() { listSubs__.unsubscribe(); renderList497(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList497(true); }));
        });
      };
      renderList497();
      
      callback(root9383); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root9390 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2852 = $("<div>");
  
  var ref2675 = mobl.ref(ui.searchboxStyle);
  if(ref2675.get() !== null) {
    node2852.attr('class', ref2675.get());
    subs__.addSub(ref2675.addEventListener('change', function(_, ref, val) {
      node2852.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2675.rebind());
  
  
  var node2853 = $("<input>");
  node2853.attr('type', "search");
  
  var ref2672 = mobl.ref(ui.searchBoxInputStyle);
  if(ref2672.get() !== null) {
    node2853.attr('class', ref2672.get());
    subs__.addSub(ref2672.addEventListener('change', function(_, ref, val) {
      node2853.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2672.rebind());
  
  var ref2673 = placeholder;
  if(ref2673.get() !== null) {
    node2853.attr('placeholder', ref2673.get());
    subs__.addSub(ref2673.addEventListener('change', function(_, ref, val) {
      node2853.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref2673.rebind());
  
  var ref2674 = s;
  node2853.val(""+ref2674.get());
  var ignore529 = false;
  subs__.addSub(ref2674.addEventListener('change', function(_, ref, val) {
    if(ignore529) return;
    node2853.val(""+val);
  }));
  subs__.addSub(ref2674.rebind());
  
  subs__.addSub(mobl.domBind(node2853, 'keyup change', function() {
    ignore529 = true;
    s.set(mobl.stringTomobl__String(node2853.val()));
    ignore529 = false;
  }));
  
  
  var val1359 = onsearch.get();
  if(val1359 !== null) {
    subs__.addSub(mobl.domBind(node2853, 'change', val1359));
  }
  
  var val1360 = onkeyup.get();
  if(val1360 !== null) {
    subs__.addSub(mobl.domBind(node2853, 'keyup', val1360));
  }
  node2853.attr('autocorrect', false);
  node2853.attr('autocapitalize', false);
  node2853.attr('autocomplete', false);
  
  node2852.append(node2853);
  root9390.append(node2852);
  callback(root9390); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root9391 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref2676 = mobl.ref(ui.contextMenuStyle);
  if(ref2676.get() !== null) {
    menu.attr('class', ref2676.get());
    subs__.addSub(ref2676.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2676.rebind());
  
  var nodes7471 = $("<span>");
  menu.append(nodes7471);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1158();
  }));
  
  function renderControl1158() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9392 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9392); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7471;
      nodes7471 = node.contents();
      oldNodes.replaceWith(nodes7471);
    }));
  }
  renderControl1158();
  root9391.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val1361 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp7225 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val1361 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val1361));
  }
  
  root9391.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root9391); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root9393 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp7209 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp7209.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node2854 = $("<span>");
  root9393.append(node2854);
  var condSubs728 = new mobl.CompSubscription();
  subs__.addSub(condSubs728);
  var oldValue728;
  var renderCond728 = function() {
    var value1628 = tmp7209.get();
    if(oldValue728 === value1628) return;
    oldValue728 = value1628;
    var subs__ = condSubs728;
    subs__.unsubscribe();
    node2854.empty();
    if(value1628) {
      items.get().one(function(result__) {
        var tmp7226 = result__;
        var current = mobl.ref(result__);
        
        var node2855 = $("<div>");
        node2855.attr('width', "100%");
        
        
        var node2856 = $("<div>");
        node2856.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes7474 = $("<span>");
        node2856.append(nodes7474);
        subs__.addSub((ui.group)(function(_, callback) {
          var root9396 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node2859 = mobl.loadingSpan();
          root9396.append(node2859);
          var list498;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList498 = function() {
            var subs__ = listSubs__;
            list498 = items.get();
            list498.list(function(results498) {
              node2859.empty();
              for(var i1245 = 0; i1245 < results498.length; i1245++) {
                (function() {
                  var iternode498 = $("<span>");
                  node2859.append(iternode498);
                  var it;
                  it = mobl.ref(mobl.ref(results498), i1245);
                  var result__ = it.get() == current.get();
                  var tmp7185 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp7185.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp7185.set(it.get() == current.get());
                  }));
                  
                  
                  var node2860 = $("<span>");
                  iternode498.append(node2860);
                  var condSubs730 = new mobl.CompSubscription();
                  subs__.addSub(condSubs730);
                  var oldValue730;
                  var renderCond730 = function() {
                    var value1630 = tmp7185.get();
                    if(oldValue730 === value1630) return;
                    oldValue730 = value1630;
                    var subs__ = condSubs730;
                    subs__.unsubscribe();
                    node2860.empty();
                    if(value1630) {
                      var nodes7475 = $("<span>");
                      node2860.append(nodes7475);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root9397 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes7476 = $("<span>");
                        root9397.append(nodes7476);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1160();
                        }));
                        
                        function renderControl1160() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root9398 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root9398); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes7476;
                            nodes7476 = node.contents();
                            oldNodes.replaceWith(nodes7476);
                          }));
                        }
                        renderControl1160();
                        callback(root9397); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7475;
                        nodes7475 = node.contents();
                        oldNodes.replaceWith(nodes7475);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp7184 = mobl.ref(result__);
                      
                      var nodes7477 = $("<span>");
                      node2860.append(nodes7477);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7184, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root9399 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes7478 = $("<span>");
                        root9399.append(nodes7478);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1161();
                        }));
                        
                        function renderControl1161() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root9400 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root9400); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes7478;
                            nodes7478 = node.contents();
                            oldNodes.replaceWith(nodes7478);
                          }));
                        }
                        renderControl1161();
                        callback(root9399); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7477;
                        nodes7477 = node.contents();
                        oldNodes.replaceWith(nodes7477);
                      }));
                      
                      
                    }
                  };
                  renderCond730();
                  subs__.addSub(tmp7185.addEventListener('change', function() {
                    renderCond730();
                  }));
                  
                  
                  var oldNodes = iternode498;
                  iternode498 = iternode498.contents();
                  oldNodes.replaceWith(iternode498);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list498.addEventListener('change', function() { listSubs__.unsubscribe(); renderList498(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList498(true); }));
            });
          };
          renderList498();
          
          callback(root9396); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes7474;
          nodes7474 = node.contents();
          oldNodes.replaceWith(nodes7474);
        }));
        node2855.append(node2856);
        
        var node2857 = $("<div>");
        node2857.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node2858 = $("<span>");
        node2857.append(node2858);
        var condSubs729 = new mobl.CompSubscription();
        subs__.addSub(condSubs729);
        var oldValue729;
        var renderCond729 = function() {
          var value1629 = current.get();
          if(oldValue729 === value1629) return;
          oldValue729 = value1629;
          var subs__ = condSubs729;
          subs__.unsubscribe();
          node2858.empty();
          if(value1629) {
            var nodes7472 = $("<span>");
            node2858.append(nodes7472);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl1159();
            }));
            
            function renderControl1159() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root9394 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9394); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7472;
                nodes7472 = node.contents();
                oldNodes.replaceWith(nodes7472);
              }));
            }
            renderControl1159();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp7186 = mobl.ref(result__);
            
            var nodes7473 = $("<span>");
            node2858.append(nodes7473);
            subs__.addSub((mobl.label)(tmp7186, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root9395 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root9395); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes7473;
              nodes7473 = node.contents();
              oldNodes.replaceWith(nodes7473);
            }));
            
            
          }
        };
        renderCond729();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond729();
        }));
        
        node2855.append(node2857);
        node2854.append(node2855);
        
        
        
        
        
        
      });
    } else {
      var nodes7479 = $("<span>");
      node2854.append(nodes7479);
      subs__.addSub((ui.group)(function(_, callback) {
        var root9401 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2861 = mobl.loadingSpan();
        root9401.append(node2861);
        var list499;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList499 = function() {
          var subs__ = listSubs__;
          list499 = items.get();
          list499.list(function(results499) {
            node2861.empty();
            for(var i1246 = 0; i1246 < results499.length; i1246++) {
              (function() {
                var iternode499 = $("<span>");
                node2861.append(iternode499);
                var it;
                it = mobl.ref(mobl.ref(results499), i1246);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp7227 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp7180 = mobl.ref(result__);
                
                var nodes7480 = $("<span>");
                iternode499.append(nodes7480);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7180, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root9402 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7481 = $("<span>");
                  root9402.append(nodes7481);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl1162();
                  }));
                  
                  function renderControl1162() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root9403 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root9403); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7481;
                      nodes7481 = node.contents();
                      oldNodes.replaceWith(nodes7481);
                    }));
                  }
                  renderControl1162();
                  callback(root9402); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7480;
                  nodes7480 = node.contents();
                  oldNodes.replaceWith(nodes7480);
                }));
                
                var oldNodes = iternode499;
                iternode499 = iternode499.contents();
                oldNodes.replaceWith(iternode499);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list499.addEventListener('change', function() { listSubs__.unsubscribe(); renderList499(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList499(true); }));
          });
        };
        renderList499();
        
        callback(root9401); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7479;
        nodes7479 = node.contents();
        oldNodes.replaceWith(nodes7479);
      }));
      
      
    }
  };
  renderCond728();
  subs__.addSub(tmp7209.addEventListener('change', function() {
    renderCond728();
  }));
  
  callback(root9393); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root9404 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp7183 = mobl.ref(result__);
  
  var nodes7482 = $("<span>");
  root9404.append(nodes7482);
  subs__.addSub((ui.header)(tmp7183, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9405 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7182 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7181 = mobl.ref(result__);
    
    var nodes7483 = $("<span>");
    root9405.append(nodes7483);
    subs__.addSub((ui.backButton)(tmp7181, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7182, function(_, callback) {
      var root9406 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9406); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7483;
      nodes7483 = node.contents();
      oldNodes.replaceWith(nodes7483);
    }));
    callback(root9405); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7482;
    nodes7482 = node.contents();
    oldNodes.replaceWith(nodes7482);
  }));
  var nodes7484 = $("<span>");
  root9404.append(nodes7484);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl1163();
  }));
  
  function renderControl1163() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root9407 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9407); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7484;
      nodes7484 = node.contents();
      oldNodes.replaceWith(nodes7484);
    }));
  }
  renderControl1163();
  callback(root9404); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root9408 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes7485 = $("<span>");
  root9408.append(nodes7485);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9409 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2862 = mobl.loadingSpan();
    root9409.append(node2862);
    var list500;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList500 = function() {
      var subs__ = listSubs__;
      list500 = coll.get();
      list500.list(function(results500) {
        node2862.empty();
        for(var i1247 = 0; i1247 < results500.length; i1247++) {
          (function() {
            var iternode500 = $("<span>");
            node2862.append(iternode500);
            var it;
            it = mobl.ref(mobl.ref(results500), i1247);
            var result__ = it.get() == selected.get();
            var tmp7188 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp7188.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp7188.set(it.get() == selected.get());
            }));
            
            
            var node2863 = $("<span>");
            iternode500.append(node2863);
            var condSubs731 = new mobl.CompSubscription();
            subs__.addSub(condSubs731);
            var oldValue731;
            var renderCond731 = function() {
              var value1631 = tmp7188.get();
              if(oldValue731 === value1631) return;
              oldValue731 = value1631;
              var subs__ = condSubs731;
              subs__.unsubscribe();
              node2863.empty();
              if(value1631) {
                var nodes7486 = $("<span>");
                node2863.append(nodes7486);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root9410 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7487 = $("<span>");
                  root9410.append(nodes7487);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl1164();
                  }));
                  
                  function renderControl1164() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root9411 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root9411); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7487;
                      nodes7487 = node.contents();
                      oldNodes.replaceWith(nodes7487);
                    }));
                  }
                  renderControl1164();
                  callback(root9410); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7486;
                  nodes7486 = node.contents();
                  oldNodes.replaceWith(nodes7486);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp7187 = mobl.ref(result__);
                
                var nodes7488 = $("<span>");
                node2863.append(nodes7488);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7187, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root9412 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7489 = $("<span>");
                  root9412.append(nodes7489);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl1165();
                  }));
                  
                  function renderControl1165() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root9413 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root9413); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7489;
                      nodes7489 = node.contents();
                      oldNodes.replaceWith(nodes7489);
                    }));
                  }
                  renderControl1165();
                  callback(root9412); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7488;
                  nodes7488 = node.contents();
                  oldNodes.replaceWith(nodes7488);
                }));
                
                
              }
            };
            renderCond731();
            subs__.addSub(tmp7188.addEventListener('change', function() {
              renderCond731();
            }));
            
            
            var oldNodes = iternode500;
            iternode500 = iternode500.contents();
            oldNodes.replaceWith(iternode500);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list500.addEventListener('change', function() { listSubs__.unsubscribe(); renderList500(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList500(true); }));
      });
    };
    renderList500();
    
    callback(root9409); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7485;
    nodes7485 = node.contents();
    oldNodes.replaceWith(nodes7485);
  }));
  callback(root9408); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root9414 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp7228 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp7189 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp7189.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp7189.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp7189.set(coll.get().limit(n.get()));
    }));
    
    
    var node2864 = mobl.loadingSpan();
    root9414.append(node2864);
    var list501;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList501 = function() {
      var subs__ = listSubs__;
      list501 = tmp7189.get();
      list501.list(function(results501) {
        node2864.empty();
        for(var i1248 = 0; i1248 < results501.length; i1248++) {
          (function() {
            var iternode501 = $("<span>");
            node2864.append(iternode501);
            var it;
            it = mobl.ref(mobl.ref(results501), i1248);
            var nodes7490 = $("<span>");
            iternode501.append(nodes7490);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl1166();
            }));
            
            function renderControl1166() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root9415 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9415); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7490;
                nodes7490 = node.contents();
                oldNodes.replaceWith(nodes7490);
              }));
            }
            renderControl1166();
            
            var oldNodes = iternode501;
            iternode501 = iternode501.contents();
            oldNodes.replaceWith(iternode501);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list501.addEventListener('change', function() { listSubs__.unsubscribe(); renderList501(true); }));
        subs__.addSub(tmp7189.addEventListener('change', function() { listSubs__.unsubscribe(); renderList501(true); }));
      });
    };
    renderList501();
    
    var result__ = n.get() < total.get();
    var tmp7191 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp7191.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp7191.set(n.get() < total.get());
    }));
    
    
    var node2865 = $("<span>");
    root9414.append(node2865);
    var condSubs732 = new mobl.CompSubscription();
    subs__.addSub(condSubs732);
    var oldValue732;
    var renderCond732 = function() {
      var value1632 = tmp7191.get();
      if(oldValue732 === value1632) return;
      oldValue732 = value1632;
      var subs__ = condSubs732;
      subs__.unsubscribe();
      node2865.empty();
      if(value1632) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp7190 = mobl.ref(result__);
        
        var nodes7491 = $("<span>");
        node2865.append(nodes7491);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp7190, mobl.ref(null), function(_, callback) {
          var root9416 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes7492 = $("<span>");
          root9416.append(nodes7492);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root9417 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root9417); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes7492;
            nodes7492 = node.contents();
            oldNodes.replaceWith(nodes7492);
          }));
          callback(root9416); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes7491;
          nodes7491 = node.contents();
          oldNodes.replaceWith(nodes7491);
        }));
        
        
      } else {
        
      }
    };
    renderCond732();
    subs__.addSub(tmp7191.addEventListener('change', function() {
      renderCond732();
    }));
    
    callback(root9414); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root9418 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7493 = $("<span>");
  root9418.append(nodes7493);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9419 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2866 = mobl.loadingSpan();
    root9419.append(node2866);
    var list502;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList502 = function() {
      var subs__ = listSubs__;
      list502 = items.get();
      list502.list(function(results502) {
        node2866.empty();
        for(var i1249 = 0; i1249 < results502.length; i1249++) {
          (function() {
            var iternode502 = $("<span>");
            node2866.append(iternode502);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results502), i1249), "_1");it = mobl.ref(mobl.ref(mobl.ref(results502), i1249), "_2");
            var nodes7494 = $("<span>");
            iternode502.append(nodes7494);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root9420 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7495 = $("<span>");
              root9420.append(nodes7495);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root9421 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9421); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7495;
                nodes7495 = node.contents();
                oldNodes.replaceWith(nodes7495);
              }));
              callback(root9420); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7494;
              nodes7494 = node.contents();
              oldNodes.replaceWith(nodes7494);
            }));
            
            var oldNodes = iternode502;
            iternode502 = iternode502.contents();
            oldNodes.replaceWith(iternode502);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list502.addEventListener('change', function() { listSubs__.unsubscribe(); renderList502(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList502(true); }));
      });
    };
    renderList502();
    
    callback(root9419); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7493;
    nodes7493 = node.contents();
    oldNodes.replaceWith(nodes7493);
  }));
  callback(root9418); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root9422 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll1624) {
    coll1624 = coll1624.reverse();
    function processOne274() {
      var it;
      it = coll1624.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll1624.length > 0) processOne274(); else rest274();
      
    }
    function rest274() {
      var nodes7496 = $("<span>");
      root9422.append(nodes7496);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root9423 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp7192 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp7193 = mobl.ref(result__);
        
        var nodes7497 = $("<span>");
        root9423.append(nodes7497);
        subs__.addSub((ui.backButton)(tmp7193, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7192, function(_, callback) {
          var root9424 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9424); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7497;
          nodes7497 = node.contents();
          oldNodes.replaceWith(nodes7497);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll1623) {
                           coll1623 = coll1623.reverse();
                           function processOne273() {
                             var checked;var it;
                             var tmp7230 = coll1623.pop();
                             checked = tmp7230._1;it = tmp7230._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll1623.length > 0) processOne273(); else rest273();
                               
                             } else {
                               {
                                 
                                 if(coll1623.length > 0) processOne273(); else rest273();
                                 
                               }
                             }
                           }
                           function rest273() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll1623.length > 0) processOne273(); else rest273();
                         });
                         
                       };
        var tmp7194 = mobl.ref(result__);
        
        var nodes7498 = $("<span>");
        root9423.append(nodes7498);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp7194, function(_, callback) {
          var root9425 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9425); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7498;
          nodes7498 = node.contents();
          oldNodes.replaceWith(nodes7498);
        }));
        callback(root9423); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7496;
        nodes7496 = node.contents();
        oldNodes.replaceWith(nodes7496);
      }));
      var nodes7499 = $("<span>");
      root9422.append(nodes7499);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root9426 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9426); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7499;
        nodes7499 = node.contents();
        oldNodes.replaceWith(nodes7499);
      }));
      callback(root9422); return subs__;
      
      
    }
    if(coll1624.length > 0) processOne274(); else rest274();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root9427 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes7500 = $("<span>");
  root9427.append(nodes7500);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root9428 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9428); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7500;
    nodes7500 = node.contents();
    oldNodes.replaceWith(nodes7500);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp7195 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp7195.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp7195.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp7195.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp7195.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp7195.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes7501 = $("<span>");
  root9427.append(nodes7501);
  subs__.addSub((ui.masterDetail)(tmp7195, masterItem, detailItem, function(_, callback) {
    var root9429 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9429); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7501;
    nodes7501 = node.contents();
    oldNodes.replaceWith(nodes7501);
  }));
  callback(root9427); return subs__;
  
  
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
  var root9430 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes7502 = $("<span>");
  root9430.append(nodes7502);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root9431 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2867 = mobl.loadingSpan();
    root9431.append(node2867);
    var list503;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList503 = function() {
      var subs__ = listSubs__;
      list503 = sections.get();
      list503.list(function(results503) {
        node2867.empty();
        for(var i1250 = 0; i1250 < results503.length; i1250++) {
          (function() {
            var iternode503 = $("<span>");
            node2867.append(iternode503);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results503), i1250), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results503), i1250), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp7197 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp7197.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp7197.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp7197.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp7197.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp7196 = mobl.ref(result__);
            
            var nodes7503 = $("<span>");
            iternode503.append(nodes7503);
            subs__.addSub((mobl.span)(tmp7197, mobl.ref(null), tmp7196, mobl.ref(null), function(_, callback) {
              var root9432 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7504 = $("<span>");
              root9432.append(nodes7504);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root9433 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9433); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7504;
                nodes7504 = node.contents();
                oldNodes.replaceWith(nodes7504);
              }));
              callback(root9432); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7503;
              nodes7503 = node.contents();
              oldNodes.replaceWith(nodes7503);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp7198 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp7198.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp7198.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp7198.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp7198.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes7505 = $("<span>");
            iternode503.append(nodes7505);
            subs__.addSub((mobl.block)(tmp7198, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root9434 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7506 = $("<span>");
              root9434.append(nodes7506);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl1167();
              }));
              
              function renderControl1167() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root9435 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root9435); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7506;
                  nodes7506 = node.contents();
                  oldNodes.replaceWith(nodes7506);
                }));
              }
              renderControl1167();
              callback(root9434); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7505;
              nodes7505 = node.contents();
              oldNodes.replaceWith(nodes7505);
            }));
            
            var oldNodes = iternode503;
            iternode503 = iternode503.contents();
            oldNodes.replaceWith(iternode503);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list503.addEventListener('change', function() { listSubs__.unsubscribe(); renderList503(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList503(true); }));
      });
    };
    renderList503();
    
    callback(root9431); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7502;
    nodes7502 = node.contents();
    oldNodes.replaceWith(nodes7502);
  }));
  callback(root9430); return subs__;
  
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
  var root9436 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2868 = $("<table>");
  
  var ref2677 = style;
  if(ref2677.get() !== null) {
    node2868.attr('class', ref2677.get());
    subs__.addSub(ref2677.addEventListener('change', function(_, ref, val) {
      node2868.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2677.rebind());
  
  var nodes7507 = $("<span>");
  node2868.append(nodes7507);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1168();
  }));
  
  function renderControl1168() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9437 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9437); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7507;
      nodes7507 = node.contents();
      oldNodes.replaceWith(nodes7507);
    }));
  }
  renderControl1168();
  root9436.append(node2868);
  callback(root9436); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root9438 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2869 = $("<tr>");
  
  var ref2678 = style;
  if(ref2678.get() !== null) {
    node2869.attr('class', ref2678.get());
    subs__.addSub(ref2678.addEventListener('change', function(_, ref, val) {
      node2869.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2678.rebind());
  
  var nodes7508 = $("<span>");
  node2869.append(nodes7508);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1169();
  }));
  
  function renderControl1169() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9439 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9439); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7508;
      nodes7508 = node.contents();
      oldNodes.replaceWith(nodes7508);
    }));
  }
  renderControl1169();
  root9438.append(node2869);
  callback(root9438); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root9440 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2870 = $("<td>");
  
  var ref2679 = width;
  if(ref2679.get() !== null) {
    node2870.attr('width', ref2679.get());
    subs__.addSub(ref2679.addEventListener('change', function(_, ref, val) {
      node2870.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2679.rebind());
  
  var ref2680 = style;
  if(ref2680.get() !== null) {
    node2870.attr('class', ref2680.get());
    subs__.addSub(ref2680.addEventListener('change', function(_, ref, val) {
      node2870.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2680.rebind());
  
  var nodes7509 = $("<span>");
  node2870.append(nodes7509);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1170();
  }));
  
  function renderControl1170() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9441 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9441); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7509;
      nodes7509 = node.contents();
      oldNodes.replaceWith(nodes7509);
    }));
  }
  renderControl1170();
  root9440.append(node2870);
  callback(root9440); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root9442 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2871 = $("<td>");
  
  var ref2681 = width;
  if(ref2681.get() !== null) {
    node2871.attr('width', ref2681.get());
    subs__.addSub(ref2681.addEventListener('change', function(_, ref, val) {
      node2871.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2681.rebind());
  
  var ref2682 = style;
  if(ref2682.get() !== null) {
    node2871.attr('class', ref2682.get());
    subs__.addSub(ref2682.addEventListener('change', function(_, ref, val) {
      node2871.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2682.rebind());
  
  var nodes7510 = $("<span>");
  node2871.append(nodes7510);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1171();
  }));
  
  function renderControl1171() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9443 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9443); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7510;
      nodes7510 = node.contents();
      oldNodes.replaceWith(nodes7510);
    }));
  }
  renderControl1171();
  root9442.append(node2871);
  callback(root9442); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root9444 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2872 = $("<td>");
  
  var ref2683 = width;
  if(ref2683.get() !== null) {
    node2872.attr('width', ref2683.get());
    subs__.addSub(ref2683.addEventListener('change', function(_, ref, val) {
      node2872.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2683.rebind());
  
  var ref2684 = style;
  if(ref2684.get() !== null) {
    node2872.attr('class', ref2684.get());
    subs__.addSub(ref2684.addEventListener('change', function(_, ref, val) {
      node2872.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2684.rebind());
  
  
  var node2873 = $("<strong>");
  
  var nodes7511 = $("<span>");
  node2873.append(nodes7511);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1172();
  }));
  
  function renderControl1172() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9445 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9445); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7511;
      nodes7511 = node.contents();
      oldNodes.replaceWith(nodes7511);
    }));
  }
  renderControl1172();
  node2872.append(node2873);
  root9444.append(node2872);
  callback(root9444); return subs__;
  
  
  
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
  items.list(function(coll1625) {
    coll1625 = coll1625.reverse();
    function processOne275() {
      var item;
      item = coll1625.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll1625.length > 0) processOne275(); else rest275();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll1625.length > 0) processOne275(); else rest275();
          
        }
      }
    }
    function rest275() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll1625.length > 0) processOne275(); else rest275();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root9446 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp7210 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp7210.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node2874 = $("<span>");
  root9446.append(node2874);
  var condSubs733 = new mobl.CompSubscription();
  subs__.addSub(condSubs733);
  var oldValue733;
  var renderCond733 = function() {
    var value1633 = tmp7210.get();
    if(oldValue733 === value1633) return;
    oldValue733 = value1633;
    var subs__ = condSubs733;
    subs__.unsubscribe();
    node2874.empty();
    if(value1633) {
      items.get().one(function(result__) {
        var tmp7232 = result__;
        var current = mobl.ref(result__);
        
        var node2875 = $("<div>");
        node2875.attr('width', "100%");
        
        
        var node2876 = $("<div>");
        node2876.attr('style', "float:left; margin:0; padding:0; width:45%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes7513 = $("<span>");
        node2876.append(nodes7513);
        subs__.addSub((ui.group)(function(_, callback) {
          var root9448 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node2879 = mobl.loadingSpan();
          root9448.append(node2879);
          var list504;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList504 = function() {
            var subs__ = listSubs__;
            list504 = items.get();
            list504.list(function(results504) {
              node2879.empty();
              for(var i1251 = 0; i1251 < results504.length; i1251++) {
                (function() {
                  var iternode504 = $("<span>");
                  node2879.append(iternode504);
                  var it;
                  it = mobl.ref(mobl.ref(results504), i1251);
                  var result__ = it.get() == current.get();
                  var tmp7207 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp7207.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp7207.set(it.get() == current.get());
                  }));
                  
                  
                  var node2880 = $("<span>");
                  iternode504.append(node2880);
                  var condSubs735 = new mobl.CompSubscription();
                  subs__.addSub(condSubs735);
                  var oldValue735;
                  var renderCond735 = function() {
                    var value1635 = tmp7207.get();
                    if(oldValue735 === value1635) return;
                    oldValue735 = value1635;
                    var subs__ = condSubs735;
                    subs__.unsubscribe();
                    node2880.empty();
                    if(value1635) {
                      var nodes7514 = $("<span>");
                      node2880.append(nodes7514);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root9449 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp7235 = result__;
                          var tmp7204 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7233 = result__;
                              var result__ = tmp7233;
                              tmp7204.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7234 = result__;
                              var result__ = tmp7234;
                              tmp7204.set(result__);
                              
                            });
                          }));
                          
                          var nodes7515 = $("<span>");
                          root9449.append(nodes7515);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl1174();
                          }));
                          
                          function renderControl1174() {
                            subs__.addSub((masterItem.get())(it, tmp7204, function(elements, callback) {
                              var root9450 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root9450); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes7515;
                              nodes7515 = node.contents();
                              oldNodes.replaceWith(nodes7515);
                            }));
                          }
                          renderControl1174();
                          callback(root9449); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7514;
                        nodes7514 = node.contents();
                        oldNodes.replaceWith(nodes7514);
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
                      var tmp7206 = mobl.ref(result__);
                      
                      var nodes7516 = $("<span>");
                      node2880.append(nodes7516);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7206, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root9451 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp7238 = result__;
                          var tmp7205 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7236 = result__;
                              var result__ = tmp7236;
                              tmp7205.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7237 = result__;
                              var result__ = tmp7237;
                              tmp7205.set(result__);
                              
                            });
                          }));
                          
                          var nodes7517 = $("<span>");
                          root9451.append(nodes7517);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl1175();
                          }));
                          
                          function renderControl1175() {
                            subs__.addSub((masterItem.get())(it, tmp7205, function(elements, callback) {
                              var root9452 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root9452); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes7517;
                              nodes7517 = node.contents();
                              oldNodes.replaceWith(nodes7517);
                            }));
                          }
                          renderControl1175();
                          callback(root9451); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7516;
                        nodes7516 = node.contents();
                        oldNodes.replaceWith(nodes7516);
                      }));
                      
                      
                    }
                  };
                  renderCond735();
                  subs__.addSub(tmp7207.addEventListener('change', function() {
                    renderCond735();
                  }));
                  
                  
                  var oldNodes = iternode504;
                  iternode504 = iternode504.contents();
                  oldNodes.replaceWith(iternode504);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list504.addEventListener('change', function() { listSubs__.unsubscribe(); renderList504(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList504(true); }));
            });
          };
          renderList504();
          
          callback(root9448); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes7513;
          nodes7513 = node.contents();
          oldNodes.replaceWith(nodes7513);
        }));
        node2875.append(node2876);
        
        var node2877 = $("<div>");
        node2877.attr('style', "float:left; margin:0; padding:0; width:53%; position:relative; margin-left: 1%;");
        
        var result__ = current.get() && ui.visible.get();
        var tmp7208 = mobl.ref(result__);
        subs__.addSub(current.addEventListener('change', function() {
          tmp7208.set(current.get() && ui.visible.get());
        }));
        subs__.addSub(ui.visible.addEventListener('change', function() {
          tmp7208.set(current.get() && ui.visible.get());
        }));
        
        
        var node2878 = $("<span>");
        node2877.append(node2878);
        var condSubs734 = new mobl.CompSubscription();
        subs__.addSub(condSubs734);
        var oldValue734;
        var renderCond734 = function() {
          var value1634 = tmp7208.get();
          if(oldValue734 === value1634) return;
          oldValue734 = value1634;
          var subs__ = condSubs734;
          subs__.unsubscribe();
          node2878.empty();
          if(value1634) {
            var nodes7512 = $("<span>");
            node2878.append(nodes7512);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl1173();
            }));
            
            function renderControl1173() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root9447 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9447); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7512;
                nodes7512 = node.contents();
                oldNodes.replaceWith(nodes7512);
              }));
            }
            renderControl1173();
            
            
          } else {
            
          }
        };
        renderCond734();
        subs__.addSub(tmp7208.addEventListener('change', function() {
          renderCond734();
        }));
        
        node2875.append(node2877);
        node2874.append(node2875);
        
        
        
        
        
        
      });
    } else {
      var nodes7518 = $("<span>");
      node2874.append(nodes7518);
      subs__.addSub((ui.group)(function(_, callback) {
        var root9453 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2881 = mobl.loadingSpan();
        root9453.append(node2881);
        var list505;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList505 = function() {
          var subs__ = listSubs__;
          list505 = items.get();
          list505.list(function(results505) {
            node2881.empty();
            for(var i1252 = 0; i1252 < results505.length; i1252++) {
              (function() {
                var iternode505 = $("<span>");
                node2881.append(iternode505);
                var it;
                it = mobl.ref(mobl.ref(results505), i1252);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp7242 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp7200 = mobl.ref(result__);
                
                var nodes7519 = $("<span>");
                iternode505.append(nodes7519);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7200, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root9454 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp7241 = result__;
                    var tmp7199 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp7239 = result__;
                        var result__ = tmp7239;
                        tmp7199.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp7240 = result__;
                        var result__ = tmp7240;
                        tmp7199.set(result__);
                        
                      });
                    }));
                    
                    var nodes7520 = $("<span>");
                    root9454.append(nodes7520);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl1176();
                    }));
                    
                    function renderControl1176() {
                      subs__.addSub((masterItem.get())(it, tmp7199, function(elements, callback) {
                        var root9455 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root9455); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7520;
                        nodes7520 = node.contents();
                        oldNodes.replaceWith(nodes7520);
                      }));
                    }
                    renderControl1176();
                    callback(root9454); return subs__;
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7519;
                  nodes7519 = node.contents();
                  oldNodes.replaceWith(nodes7519);
                }));
                
                var oldNodes = iternode505;
                iternode505 = iternode505.contents();
                oldNodes.replaceWith(iternode505);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list505.addEventListener('change', function() { listSubs__.unsubscribe(); renderList505(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList505(true); }));
          });
        };
        renderList505();
        
        callback(root9453); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7518;
        nodes7518 = node.contents();
        oldNodes.replaceWith(nodes7518);
      }));
      
      
    }
  };
  renderCond733();
  subs__.addSub(tmp7210.addEventListener('change', function() {
    renderCond733();
  }));
  
  callback(root9446); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root9456 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp7203 = mobl.ref(result__);
  
  var nodes7521 = $("<span>");
  root9456.append(nodes7521);
  subs__.addSub((ui.header)(tmp7203, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9457 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    mobl.sleep(500, function(result__) {
      var tmp7243 = result__;
      mathJAX.renderMaths(function(result__) {
        var tmp7244 = result__;
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp7202 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp7201 = mobl.ref(result__);
        
        var nodes7522 = $("<span>");
        root9457.append(nodes7522);
        subs__.addSub((ui.backButton)(tmp7201, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7202, function(_, callback) {
          var root9458 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9458); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7522;
          nodes7522 = node.contents();
          oldNodes.replaceWith(nodes7522);
        }));
        callback(root9457); return subs__;
        
      });
    });
    return subs__;
  }, function(node) {
    var oldNodes = nodes7521;
    nodes7521 = node.contents();
    oldNodes.replaceWith(nodes7521);
  }));
  var nodes7523 = $("<span>");
  root9456.append(nodes7523);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl1177();
  }));
  
  function renderControl1177() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root9459 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9459); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7523;
      nodes7523 = node.contents();
      oldNodes.replaceWith(nodes7523);
    }));
  }
  renderControl1177();
  callback(root9456); return subs__;
  
  
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
