mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mathJAX');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root14933 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2764 = $("<span>");
  root14933.append(node2764);
  var condSubs632 = new mobl.CompSubscription();
  subs__.addSub(condSubs632);
  var oldValue632;
  var renderCond632 = function() {
    var value2216 = value.get();
    if(oldValue632 === value2216) return;
    oldValue632 = value2216;
    var subs__ = condSubs632;
    subs__.unsubscribe();
    node2764.empty();
    if(value2216) {
      var nodes10610 = $("<span>");
      node2764.append(nodes10610);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl1060();
      }));
      
      function renderControl1060() {
        subs__.addSub((elements)(function(elements, callback) {
          var root14934 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root14934); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes10610;
          nodes10610 = node.contents();
          oldNodes.replaceWith(nodes10610);
        }));
      }
      renderControl1060();
      
      
    } else {
      var nodes10611 = $("<span>");
      node2764.append(nodes10611);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14935 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes10612 = $("<span>");
        root14935.append(nodes10612);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root14936 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root14936); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes10612;
          nodes10612 = node.contents();
          oldNodes.replaceWith(nodes10612);
        }));
        var nodes10613 = $("<span>");
        root14935.append(nodes10613);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root14937 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root14937); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes10613;
          nodes10613 = node.contents();
          oldNodes.replaceWith(nodes10613);
        }));
        callback(root14935); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes10611;
        nodes10611 = node.contents();
        oldNodes.replaceWith(nodes10611);
      }));
      
      
    }
  };
  renderCond632();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond632();
  }));
  
  callback(root14933); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root14938 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2765 = $("<div>");
  
  var ref2537 = mobl.ref(ui.headerStyle);
  if(ref2537.get() !== null) {
    node2765.attr('class', ref2537.get());
    subs__.addSub(ref2537.addEventListener('change', function(_, ref, val) {
      node2765.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2537.rebind());
  
  var val1399 = onclick.get();
  if(val1399 !== null) {
    subs__.addSub(mobl.domBind(node2765, 'tap', val1399));
  }
  
  var ref2538 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref2538.get() !== null) {
    node2765.attr('style', ref2538.get());
    subs__.addSub(ref2538.addEventListener('change', function(_, ref, val) {
      node2765.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node2765.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref2538.rebind());
  
  
  var node2768 = $("<div>");
  
  var ref2536 = mobl.ref(ui.headerContainerStyle);
  if(ref2536.get() !== null) {
    node2768.attr('class', ref2536.get());
    subs__.addSub(ref2536.addEventListener('change', function(_, ref, val) {
      node2768.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2536.rebind());
  
  
  var node2769 = $("<div>");
  
  var ref2534 = text;
  node2769.text(""+ref2534.get());
  var ignore516 = false;
  subs__.addSub(ref2534.addEventListener('change', function(_, ref, val) {
    if(ignore516) return;
    node2769.text(""+val);
  }));
  subs__.addSub(ref2534.rebind());
  
  
  var ref2535 = mobl.ref(ui.headerTextStyle);
  if(ref2535.get() !== null) {
    node2769.attr('class', ref2535.get());
    subs__.addSub(ref2535.addEventListener('change', function(_, ref, val) {
      node2769.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2535.rebind());
  
  node2768.append(node2769);
  node2765.append(node2768);
  var nodes10614 = $("<span>");
  node2765.append(nodes10614);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1061();
  }));
  
  function renderControl1061() {
    subs__.addSub((elements)(function(elements, callback) {
      var root14939 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root14939); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10614;
      nodes10614 = node.contents();
      oldNodes.replaceWith(nodes10614);
    }));
  }
  renderControl1061();
  root14938.append(node2765);
  
  var node2766 = $("<span>");
  root14938.append(node2766);
  var condSubs633 = new mobl.CompSubscription();
  subs__.addSub(condSubs633);
  var oldValue633;
  var renderCond633 = function() {
    var value2217 = fixedPosition.get();
    if(oldValue633 === value2217) return;
    oldValue633 = value2217;
    var subs__ = condSubs633;
    subs__.unsubscribe();
    node2766.empty();
    if(value2217) {
      
      var node2767 = $("<div>");
      node2767.attr('id', "hello");
      node2767.attr('style', "height: 2.9em;");
      
      node2766.append(node2767);
      
      
    } else {
      
    }
  };
  renderCond633();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond633();
  }));
  
  callback(root14938); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root14940 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref2539 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref2539.get() !== null) {
    sp.attr('class', ref2539.get());
    subs__.addSub(ref2539.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref2539.rebind());
  
  var val1400 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val1400 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val1400));
  }
  
  var val1401 = function(event, callback) {
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
  if(val1401 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val1401));
  }
  
  var val1402 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after459(result__) {
                    var tmp7320 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after459);if(result__ !== undefined) after459(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1402 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val1402));
  }
  
  var val1403 = function(event, callback) {
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
  if(val1403 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val1403));
  }
  
  var ref2540 = text;
  sp.text(""+ref2540.get());
  var ignore517 = false;
  subs__.addSub(ref2540.addEventListener('change', function(_, ref, val) {
    if(ignore517) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref2540.rebind());
  
  
  root14940.append(sp);
  callback(root14940); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root14941 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes10615 = $("<span>");
  root14941.append(nodes10615);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root14942 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root14942); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10615;
    nodes10615 = node.contents();
    oldNodes.replaceWith(nodes10615);
  }));
  callback(root14941); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root14943 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes10616 = $("<span>");
  root14943.append(nodes10616);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root14944 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root14944); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10616;
    nodes10616 = node.contents();
    oldNodes.replaceWith(nodes10616);
  }));
  callback(root14943); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root14945 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2770 = $("<ul>");
  
  var ref2541 = mobl.ref(ui.groupStyle);
  if(ref2541.get() !== null) {
    node2770.attr('class', ref2541.get());
    subs__.addSub(ref2541.addEventListener('change', function(_, ref, val) {
      node2770.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2541.rebind());
  
  var nodes10617 = $("<span>");
  node2770.append(nodes10617);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1062();
  }));
  
  function renderControl1062() {
    subs__.addSub((elements)(function(elements, callback) {
      var root14946 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root14946); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10617;
      nodes10617 = node.contents();
      oldNodes.replaceWith(nodes10617);
    }));
  }
  renderControl1062();
  root14945.append(node2770);
  callback(root14945); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root14947 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2771 = $("<img>");
  
  var ref2542 = url;
  if(ref2542.get() !== null) {
    node2771.attr('src', ref2542.get());
    subs__.addSub(ref2542.addEventListener('change', function(_, ref, val) {
      node2771.attr('src', val);
    }));
    
  }
  subs__.addSub(ref2542.rebind());
  
  var ref2543 = width;
  if(ref2543.get() !== null) {
    node2771.attr('width', ref2543.get());
    subs__.addSub(ref2543.addEventListener('change', function(_, ref, val) {
      node2771.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2543.rebind());
  
  var ref2544 = height;
  if(ref2544.get() !== null) {
    node2771.attr('height', ref2544.get());
    subs__.addSub(ref2544.addEventListener('change', function(_, ref, val) {
      node2771.attr('height', val);
    }));
    
  }
  subs__.addSub(ref2544.rebind());
  
  var ref2545 = style;
  if(ref2545.get() !== null) {
    node2771.attr('class', ref2545.get());
    subs__.addSub(ref2545.addEventListener('change', function(_, ref, val) {
      node2771.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2545.rebind());
  
  var val1404 = onclick.get();
  if(val1404 !== null) {
    subs__.addSub(mobl.domBind(node2771, 'tap', val1404));
  }
  
  var ref2546 = valign;
  if(ref2546.get() !== null) {
    node2771.attr('valign', ref2546.get());
    subs__.addSub(ref2546.addEventListener('change', function(_, ref, val) {
      node2771.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref2546.rebind());
  
  var ref2547 = align;
  if(ref2547.get() !== null) {
    node2771.attr('align', ref2547.get());
    subs__.addSub(ref2547.addEventListener('change', function(_, ref, val) {
      node2771.attr('align', val);
    }));
    
  }
  subs__.addSub(ref2547.rebind());
  
  root14947.append(node2771);
  callback(root14947); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root14948 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref2548 = mobl.ref(ui.itemStyle);
  if(ref2548.get() !== null) {
    el.attr('class', ref2548.get());
    subs__.addSub(ref2548.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2548.rebind());
  
  var ref2549 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref2549.get() !== null) {
    el.attr('class', ref2549.get());
    subs__.addSub(ref2549.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref2549.rebind());
  
  var val1405 = onswipe.get();
  if(val1405 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val1405));
  }
  
  var val1406 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp7321 = result__;
                                           function after460(result__) {
                                             var tmp7322 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after460);if(result__ !== undefined) after460(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp7323 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val1406 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val1406));
  }
  
  var nodes10618 = $("<span>");
  el.append(nodes10618);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1063();
  }));
  
  function renderControl1063() {
    subs__.addSub((elements)(function(elements, callback) {
      var root14949 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root14949); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10618;
      nodes10618 = node.contents();
      oldNodes.replaceWith(nodes10618);
    }));
  }
  renderControl1063();
  root14948.append(el);
  callback(root14948); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root14950 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2772 = $("<input>");
  node2772.attr('type', "checkbox");
  
  var ref2551 = b;
  node2772.attr('checked', !!ref2551.get());
  subs__.addSub(ref2551.addEventListener('change', function(_, ref, val) {
    if(ref === ref2551) node2772.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node2772, 'change', function() {
    b.set(!!node2772.attr('checked'));
  }));
  
  var val1408 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val1408 !== null) {
    subs__.addSub(mobl.domBind(node2772, 'tap', val1408));
  }
  
  var val1409 = onchange.get();
  if(val1409 !== null) {
    subs__.addSub(mobl.domBind(node2772, 'change', val1409));
  }
  
  root14950.append(node2772);
  
  root14950.append(" ");
  
  var node2773 = $("<span>");
  
  var ref2550 = label;
  node2773.text(""+ref2550.get());
  var ignore518 = false;
  subs__.addSub(ref2550.addEventListener('change', function(_, ref, val) {
    if(ignore518) return;
    node2773.text(""+val);
  }));
  subs__.addSub(ref2550.rebind());
  
  
  var val1407 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after461(result__) {
                    var tmp7324 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after461);if(result__ !== undefined) after461(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1407 !== null) {
    subs__.addSub(mobl.domBind(node2773, 'tap', val1407));
  }
  
  root14950.append(node2773);
  callback(root14950); return subs__;
  
  
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
  var root14951 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2774 = $("<span>");
  root14951.append(node2774);
  var condSubs634 = new mobl.CompSubscription();
  subs__.addSub(condSubs634);
  var oldValue634;
  var renderCond634 = function() {
    var value2218 = label.get();
    if(oldValue634 === value2218) return;
    oldValue634 = value2218;
    var subs__ = condSubs634;
    subs__.unsubscribe();
    node2774.empty();
    if(value2218) {
      var nodes10619 = $("<span>");
      node2774.append(nodes10619);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root14952 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14952); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10619;
        nodes10619 = node.contents();
        oldNodes.replaceWith(nodes10619);
      }));
      
      
    } else {
      
    }
  };
  renderCond634();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond634();
  }));
  
  
  var node2775 = $("<span>");
  root14951.append(node2775);
  var condSubs635 = new mobl.CompSubscription();
  subs__.addSub(condSubs635);
  var oldValue635;
  var renderCond635 = function() {
    var value2219 = validator.get();
    if(oldValue635 === value2219) return;
    oldValue635 = value2219;
    var subs__ = condSubs635;
    subs__.unsubscribe();
    node2775.empty();
    if(value2219) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after465(result__) {
        var tmp7325 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp7326 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node2776 = $("<input>");
        
        var ref2552 = inputType;
        if(ref2552.get() !== null) {
          node2776.attr('type', ref2552.get());
          subs__.addSub(ref2552.addEventListener('change', function(_, ref, val) {
            node2776.attr('type', val);
          }));
          
        }
        subs__.addSub(ref2552.rebind());
        
        var ref2553 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref2553.get() !== null) {
          node2776.attr('class', ref2553.get());
          subs__.addSub(ref2553.addEventListener('change', function(_, ref, val) {
            node2776.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node2776.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node2776.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node2776.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref2553.rebind());
        
        var ref2554 = placeholder;
        if(ref2554.get() !== null) {
          node2776.attr('placeholder', ref2554.get());
          subs__.addSub(ref2554.addEventListener('change', function(_, ref, val) {
            node2776.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref2554.rebind());
        
        var ref2555 = temp;
        node2776.val(""+ref2555.get());
        var ignore519 = false;
        subs__.addSub(ref2555.addEventListener('change', function(_, ref, val) {
          if(ignore519) return;
          node2776.val(""+val);
        }));
        subs__.addSub(ref2555.rebind());
        
        subs__.addSub(mobl.domBind(node2776, 'keyup change', function() {
          ignore519 = true;
          temp.set(mobl.stringTomobl__String(node2776.val()));
          ignore519 = false;
        }));
        
        
        var val1410 = onchange.get();
        if(val1410 !== null) {
          subs__.addSub(mobl.domBind(node2776, 'change', val1410));
        }
        
        var val1411 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after462(result__) {
                          var tmp7327 = result__;
                          function after463(result__) {
                            var tmp7328 = result__;
                            var result__ = tmp7328;
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
                          var result__ = validator.get()(temp.get(), after463);if(result__ !== undefined) after463(result__);
                        }
                        var result__ = onkeyup.get()(event, after462);if(result__ !== undefined) after462(result__);
                      } else {
                        {
                          function after464(result__) {
                            var tmp7328 = result__;
                            var result__ = tmp7328;
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
                          var result__ = validator.get()(temp.get(), after464);if(result__ !== undefined) after464(result__);
                        }
                      }
                    };
        if(val1411 !== null) {
          subs__.addSub(mobl.domBind(node2776, 'keyup', val1411));
        }
        
        var val1412 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1412 !== null) {
          subs__.addSub(mobl.domBind(node2776, 'blur', val1412));
        }
        
        node2775.append(node2776);
        var nodes10620 = $("<span>");
        node2775.append(nodes10620);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root14953 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root14953); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes10620;
          nodes10620 = node.contents();
          oldNodes.replaceWith(nodes10620);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after465);if(result__ !== undefined) after465(result__);
    } else {
      
      var node2777 = $("<input>");
      
      var ref2556 = inputType;
      if(ref2556.get() !== null) {
        node2777.attr('type', ref2556.get());
        subs__.addSub(ref2556.addEventListener('change', function(_, ref, val) {
          node2777.attr('type', val);
        }));
        
      }
      subs__.addSub(ref2556.rebind());
      
      var ref2557 = style;
      if(ref2557.get() !== null) {
        node2777.attr('class', ref2557.get());
        subs__.addSub(ref2557.addEventListener('change', function(_, ref, val) {
          node2777.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2557.rebind());
      
      var ref2558 = placeholder;
      if(ref2558.get() !== null) {
        node2777.attr('placeholder', ref2558.get());
        subs__.addSub(ref2558.addEventListener('change', function(_, ref, val) {
          node2777.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2558.rebind());
      
      var ref2559 = s;
      node2777.val(""+ref2559.get());
      var ignore520 = false;
      subs__.addSub(ref2559.addEventListener('change', function(_, ref, val) {
        if(ignore520) return;
        node2777.val(""+val);
      }));
      subs__.addSub(ref2559.rebind());
      
      subs__.addSub(mobl.domBind(node2777, 'keyup change', function() {
        ignore520 = true;
        s.set(mobl.stringTomobl__String(node2777.val()));
        ignore520 = false;
      }));
      
      
      var val1413 = onchange.get();
      if(val1413 !== null) {
        subs__.addSub(mobl.domBind(node2777, 'change', val1413));
      }
      
      var val1414 = onkeyup.get();
      if(val1414 !== null) {
        subs__.addSub(mobl.domBind(node2777, 'keyup', val1414));
      }
      
      var val1415 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1415 !== null) {
        subs__.addSub(mobl.domBind(node2777, 'blur', val1415));
      }
      
      node2775.append(node2777);
      
      
    }
  };
  renderCond635();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond635();
  }));
  
  callback(root14951); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root14954 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes10621 = $("<span>");
  root14954.append(nodes10621);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root14955 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root14955); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10621;
    nodes10621 = node.contents();
    oldNodes.replaceWith(nodes10621);
  }));
  callback(root14954); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root14956 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes10622 = $("<span>");
  root14956.append(nodes10622);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root14957 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root14957); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10622;
    nodes10622 = node.contents();
    oldNodes.replaceWith(nodes10622);
  }));
  callback(root14956); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root14958 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2778 = $("<span>");
  root14958.append(node2778);
  var condSubs636 = new mobl.CompSubscription();
  subs__.addSub(condSubs636);
  var oldValue636;
  var renderCond636 = function() {
    var value2220 = label.get();
    if(oldValue636 === value2220) return;
    oldValue636 = value2220;
    var subs__ = condSubs636;
    subs__.unsubscribe();
    node2778.empty();
    if(value2220) {
      var nodes10623 = $("<span>");
      node2778.append(nodes10623);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root14959 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root14959); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10623;
        nodes10623 = node.contents();
        oldNodes.replaceWith(nodes10623);
      }));
      
      
    } else {
      
    }
  };
  renderCond636();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond636();
  }));
  
  
  var node2779 = $("<input>");
  node2779.attr('type', "range");
  
  var ref2560 = n;
  node2779.val(""+ref2560.get());
  var ignore521 = false;
  subs__.addSub(ref2560.addEventListener('change', function(_, ref, val) {
    if(ignore521) return;
    node2779.val(""+val);
  }));
  subs__.addSub(ref2560.rebind());
  
  subs__.addSub(mobl.domBind(node2779, 'keyup change', function() {
    ignore521 = true;
    n.set(mobl.stringTomobl__Num(node2779.val()));
    ignore521 = false;
  }));
  
  
  var ref2561 = min;
  if(ref2561.get() !== null) {
    node2779.attr('min', ref2561.get());
    subs__.addSub(ref2561.addEventListener('change', function(_, ref, val) {
      node2779.attr('min', val);
    }));
    
  }
  subs__.addSub(ref2561.rebind());
  
  var ref2562 = max;
  if(ref2562.get() !== null) {
    node2779.attr('max', ref2562.get());
    subs__.addSub(ref2562.addEventListener('change', function(_, ref, val) {
      node2779.attr('max', val);
    }));
    
  }
  subs__.addSub(ref2562.rebind());
  
  var ref2563 = step;
  if(ref2563.get() !== null) {
    node2779.attr('step', ref2563.get());
    subs__.addSub(ref2563.addEventListener('change', function(_, ref, val) {
      node2779.attr('step', val);
    }));
    
  }
  subs__.addSub(ref2563.rebind());
  node2779.attr('style', "width: 99%;");
  
  var val1416 = onchange.get();
  if(val1416 !== null) {
    subs__.addSub(mobl.domBind(node2779, 'change', val1416));
  }
  
  var val1417 = onkeyup.get();
  if(val1417 !== null) {
    subs__.addSub(mobl.domBind(node2779, 'keyup', val1417));
  }
  
  var ref2564 = placeholder;
  if(ref2564.get() !== null) {
    node2779.attr('placeholder', ref2564.get());
    subs__.addSub(ref2564.addEventListener('change', function(_, ref, val) {
      node2779.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref2564.rebind());
  
  root14958.append(node2779);
  callback(root14958); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root14960 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after466(result__) {
      var tmp7329 = result__;
      var result__ = tmp7329;
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
    var result__ = validator.get()(n2, after466);if(result__ !== undefined) after466(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes10624 = $("<span>");
  root14960.append(nodes10624);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root14961 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root14961); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10624;
    nodes10624 = node.contents();
    oldNodes.replaceWith(nodes10624);
  }));
  callback(root14960); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root14962 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2780 = $("<span>");
  root14962.append(node2780);
  var condSubs637 = new mobl.CompSubscription();
  subs__.addSub(condSubs637);
  var oldValue637;
  var renderCond637 = function() {
    var value2221 = label.get();
    if(oldValue637 === value2221) return;
    oldValue637 = value2221;
    var subs__ = condSubs637;
    subs__.unsubscribe();
    node2780.empty();
    if(value2221) {
      
      var node2781 = $("<span>");
      node2781.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref2568 = label;
      node2781.text(""+ref2568.get());
      var ignore523 = false;
      subs__.addSub(ref2568.addEventListener('change', function(_, ref, val) {
        if(ignore523) return;
        node2781.text(""+val);
      }));
      subs__.addSub(ref2568.rebind());
      
      
      node2780.append(node2781);
      
      var node2782 = $("<span>");
      node2782.attr('style', "float: left");
      
      
      var node2783 = $("<input>");
      node2783.attr('type', "password");
      
      var ref2565 = style;
      if(ref2565.get() !== null) {
        node2783.attr('class', ref2565.get());
        subs__.addSub(ref2565.addEventListener('change', function(_, ref, val) {
          node2783.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2565.rebind());
      
      var ref2566 = placeholder;
      if(ref2566.get() !== null) {
        node2783.attr('placeholder', ref2566.get());
        subs__.addSub(ref2566.addEventListener('change', function(_, ref, val) {
          node2783.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2566.rebind());
      
      var ref2567 = s;
      node2783.val(""+ref2567.get());
      var ignore522 = false;
      subs__.addSub(ref2567.addEventListener('change', function(_, ref, val) {
        if(ignore522) return;
        node2783.val(""+val);
      }));
      subs__.addSub(ref2567.rebind());
      
      subs__.addSub(mobl.domBind(node2783, 'keyup change', function() {
        ignore522 = true;
        s.set(mobl.stringTomobl__String(node2783.val()));
        ignore522 = false;
      }));
      
      
      var val1418 = onchange.get();
      if(val1418 !== null) {
        subs__.addSub(mobl.domBind(node2783, 'change', val1418));
      }
      
      var val1419 = onkeyup.get();
      if(val1419 !== null) {
        subs__.addSub(mobl.domBind(node2783, 'keyup', val1419));
      }
      
      var val1420 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1420 !== null) {
        subs__.addSub(mobl.domBind(node2783, 'blur', val1420));
      }
      
      node2782.append(node2783);
      node2780.append(node2782);
      
      
      
      
    } else {
      
      var node2784 = $("<input>");
      node2784.attr('type', "password");
      
      var ref2569 = style;
      if(ref2569.get() !== null) {
        node2784.attr('class', ref2569.get());
        subs__.addSub(ref2569.addEventListener('change', function(_, ref, val) {
          node2784.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2569.rebind());
      
      var ref2570 = placeholder;
      if(ref2570.get() !== null) {
        node2784.attr('placeholder', ref2570.get());
        subs__.addSub(ref2570.addEventListener('change', function(_, ref, val) {
          node2784.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2570.rebind());
      
      var ref2571 = s;
      node2784.val(""+ref2571.get());
      var ignore524 = false;
      subs__.addSub(ref2571.addEventListener('change', function(_, ref, val) {
        if(ignore524) return;
        node2784.val(""+val);
      }));
      subs__.addSub(ref2571.rebind());
      
      subs__.addSub(mobl.domBind(node2784, 'keyup change', function() {
        ignore524 = true;
        s.set(mobl.stringTomobl__String(node2784.val()));
        ignore524 = false;
      }));
      
      
      var val1421 = onchange.get();
      if(val1421 !== null) {
        subs__.addSub(mobl.domBind(node2784, 'change', val1421));
      }
      
      var val1422 = onkeyup.get();
      if(val1422 !== null) {
        subs__.addSub(mobl.domBind(node2784, 'keyup', val1422));
      }
      
      var val1423 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1423 !== null) {
        subs__.addSub(mobl.domBind(node2784, 'blur', val1423));
      }
      
      node2780.append(node2784);
      
      
    }
  };
  renderCond637();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond637();
  }));
  
  callback(root14962); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root14963 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref2576 = style;
  if(ref2576.get() !== null) {
    sel.attr('class', ref2576.get());
    subs__.addSub(ref2576.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2576.rebind());
  
  var val1424 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after467(result__) {
                    var tmp7331 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after467);if(result__ !== undefined) after467(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1424 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val1424));
  }
  
  
  var node2785 = mobl.loadingSpan();
  sel.append(node2785);
  var list767;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList767 = function() {
    var subs__ = listSubs__;
    list767 = options.get();
    list767.list(function(results1471) {
      node2785.empty();
      for(var i1565 = 0; i1565 < results1471.length; i1565++) {
        (function() {
          var iternode767 = $("<span>");
          node2785.append(iternode767);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results1471), i1565), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results1471), i1565), "_2");
          
          var node2786 = $("<option>");
          
          var ref2572 = optionDescription;
          node2786.text(""+ref2572.get());
          var ignore525 = false;
          subs__.addSub(ref2572.addEventListener('change', function(_, ref, val) {
            if(ignore525) return;
            node2786.text(""+val);
          }));
          subs__.addSub(ref2572.rebind());
          
          
          var ref2573 = optionStyle;
          if(ref2573.get() !== null) {
            node2786.attr('class', ref2573.get());
            subs__.addSub(ref2573.addEventListener('change', function(_, ref, val) {
              node2786.attr('class', val);
            }));
            
          }
          subs__.addSub(ref2573.rebind());
          
          var ref2574 = optionValue;
          if(ref2574.get() !== null) {
            node2786.attr('value', ref2574.get());
            subs__.addSub(ref2574.addEventListener('change', function(_, ref, val) {
              node2786.attr('value', val);
            }));
            
          }
          subs__.addSub(ref2574.rebind());
          
          var ref2575 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref2575.get() !== null) {
            node2786.attr('selected', ref2575.get());
            subs__.addSub(ref2575.addEventListener('change', function(_, ref, val) {
              node2786.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node2786.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node2786.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref2575.rebind());
          
          iternode767.append(node2786);
          
          var oldNodes = iternode767;
          iternode767 = iternode767.contents();
          oldNodes.replaceWith(iternode767);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list767.addEventListener('change', function() { listSubs__.unsubscribe(); renderList767(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList767(true); }));
    });
  };
  renderList767();
  
  root14963.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root14963); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root14964 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes10625 = $("<span>");
    root14964.append(nodes10625);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root14965 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node2787 = mobl.loadingSpan();
      root14965.append(node2787);
      var list768;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList768 = function() {
        var subs__ = listSubs__;
        list768 = tabs.get();
        list768.list(function(results1472) {
          node2787.empty();
          for(var i1566 = 0; i1566 < results1472.length; i1566++) {
            (function() {
              var iternode768 = $("<span>");
              node2787.append(iternode768);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results1472), i1566), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results1472), i1566), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results1472), i1566), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp7287 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp7287.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp7287.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp7287.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp7287.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp7286 = mobl.ref(result__);
              
              var nodes10626 = $("<span>");
              iternode768.append(nodes10626);
              subs__.addSub((mobl.span)(tmp7287, mobl.ref(null), tmp7286, mobl.ref(null), function(_, callback) {
                var root14966 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes10627 = $("<span>");
                root14966.append(nodes10627);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root14967 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root14967); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes10627;
                  nodes10627 = node.contents();
                  oldNodes.replaceWith(nodes10627);
                }));
                callback(root14966); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes10626;
                nodes10626 = node.contents();
                oldNodes.replaceWith(nodes10626);
              }));
              
              var oldNodes = iternode768;
              iternode768 = iternode768.contents();
              oldNodes.replaceWith(iternode768);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list768.addEventListener('change', function() { listSubs__.unsubscribe(); renderList768(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList768(true); }));
        });
      };
      renderList768();
      
      callback(root14965); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10625;
      nodes10625 = node.contents();
      oldNodes.replaceWith(nodes10625);
    }));
    
    var node2788 = mobl.loadingSpan();
    root14964.append(node2788);
    var list769;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList769 = function() {
      var subs__ = listSubs__;
      list769 = tabs.get();
      list769.list(function(results1473) {
        node2788.empty();
        for(var i1567 = 0; i1567 < results1473.length; i1567++) {
          (function() {
            var iternode769 = $("<span>");
            node2788.append(iternode769);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results1473), i1567), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results1473), i1567), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results1473), i1567), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp7288 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp7288.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp7288.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp7288.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp7288.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes10628 = $("<span>");
            iternode769.append(nodes10628);
            subs__.addSub((mobl.block)(tmp7288, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root14968 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes10629 = $("<span>");
              root14968.append(nodes10629);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root14969 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes10630 = $("<span>");
                root14969.append(nodes10630);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl1064();
                }));
                
                function renderControl1064() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root14970 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root14970); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes10630;
                    nodes10630 = node.contents();
                    oldNodes.replaceWith(nodes10630);
                  }));
                }
                renderControl1064();
                callback(root14969); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes10629;
                nodes10629 = node.contents();
                oldNodes.replaceWith(nodes10629);
              }));
              callback(root14968); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes10628;
              nodes10628 = node.contents();
              oldNodes.replaceWith(nodes10628);
            }));
            
            var oldNodes = iternode769;
            iternode769 = iternode769.contents();
            oldNodes.replaceWith(iternode769);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list769.addEventListener('change', function() { listSubs__.unsubscribe(); renderList769(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList769(true); }));
      });
    };
    renderList769();
    
    callback(root14964); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes10625 = $("<span>");
      root14964.append(nodes10625);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root14965 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2787 = mobl.loadingSpan();
        root14965.append(node2787);
        var list768;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList768 = function() {
          var subs__ = listSubs__;
          list768 = tabs.get();
          list768.list(function(results1472) {
            node2787.empty();
            for(var i1566 = 0; i1566 < results1472.length; i1566++) {
              (function() {
                var iternode768 = $("<span>");
                node2787.append(iternode768);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results1472), i1566), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results1472), i1566), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results1472), i1566), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp7287 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp7287.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp7287.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp7287.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp7287.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp7286 = mobl.ref(result__);
                
                var nodes10626 = $("<span>");
                iternode768.append(nodes10626);
                subs__.addSub((mobl.span)(tmp7287, mobl.ref(null), tmp7286, mobl.ref(null), function(_, callback) {
                  var root14966 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes10627 = $("<span>");
                  root14966.append(nodes10627);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root14967 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root14967); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes10627;
                    nodes10627 = node.contents();
                    oldNodes.replaceWith(nodes10627);
                  }));
                  callback(root14966); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes10626;
                  nodes10626 = node.contents();
                  oldNodes.replaceWith(nodes10626);
                }));
                
                var oldNodes = iternode768;
                iternode768 = iternode768.contents();
                oldNodes.replaceWith(iternode768);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list768.addEventListener('change', function() { listSubs__.unsubscribe(); renderList768(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList768(true); }));
          });
        };
        renderList768();
        
        callback(root14965); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes10625;
        nodes10625 = node.contents();
        oldNodes.replaceWith(nodes10625);
      }));
      
      var node2788 = mobl.loadingSpan();
      root14964.append(node2788);
      var list769;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList769 = function() {
        var subs__ = listSubs__;
        list769 = tabs.get();
        list769.list(function(results1473) {
          node2788.empty();
          for(var i1567 = 0; i1567 < results1473.length; i1567++) {
            (function() {
              var iternode769 = $("<span>");
              node2788.append(iternode769);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results1473), i1567), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results1473), i1567), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results1473), i1567), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp7288 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp7288.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp7288.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp7288.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp7288.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes10628 = $("<span>");
              iternode769.append(nodes10628);
              subs__.addSub((mobl.block)(tmp7288, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root14968 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes10629 = $("<span>");
                root14968.append(nodes10629);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root14969 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes10630 = $("<span>");
                  root14969.append(nodes10630);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl1064();
                  }));
                  
                  function renderControl1064() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root14970 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root14970); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes10630;
                      nodes10630 = node.contents();
                      oldNodes.replaceWith(nodes10630);
                    }));
                  }
                  renderControl1064();
                  callback(root14969); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes10629;
                  nodes10629 = node.contents();
                  oldNodes.replaceWith(nodes10629);
                }));
                callback(root14968); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes10628;
                nodes10628 = node.contents();
                oldNodes.replaceWith(nodes10628);
              }));
              
              var oldNodes = iternode769;
              iternode769 = iternode769.contents();
              oldNodes.replaceWith(iternode769);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list769.addEventListener('change', function() { listSubs__.unsubscribe(); renderList769(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList769(true); }));
        });
      };
      renderList769();
      
      callback(root14964); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root14971 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2789 = $("<div>");
  
  var ref2580 = mobl.ref(ui.searchboxStyle);
  if(ref2580.get() !== null) {
    node2789.attr('class', ref2580.get());
    subs__.addSub(ref2580.addEventListener('change', function(_, ref, val) {
      node2789.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2580.rebind());
  
  
  var node2790 = $("<input>");
  node2790.attr('type', "search");
  
  var ref2577 = mobl.ref(ui.searchBoxInputStyle);
  if(ref2577.get() !== null) {
    node2790.attr('class', ref2577.get());
    subs__.addSub(ref2577.addEventListener('change', function(_, ref, val) {
      node2790.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2577.rebind());
  
  var ref2578 = placeholder;
  if(ref2578.get() !== null) {
    node2790.attr('placeholder', ref2578.get());
    subs__.addSub(ref2578.addEventListener('change', function(_, ref, val) {
      node2790.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref2578.rebind());
  
  var ref2579 = s;
  node2790.val(""+ref2579.get());
  var ignore526 = false;
  subs__.addSub(ref2579.addEventListener('change', function(_, ref, val) {
    if(ignore526) return;
    node2790.val(""+val);
  }));
  subs__.addSub(ref2579.rebind());
  
  subs__.addSub(mobl.domBind(node2790, 'keyup change', function() {
    ignore526 = true;
    s.set(mobl.stringTomobl__String(node2790.val()));
    ignore526 = false;
  }));
  
  
  var val1425 = onsearch.get();
  if(val1425 !== null) {
    subs__.addSub(mobl.domBind(node2790, 'change', val1425));
  }
  
  var val1426 = onkeyup.get();
  if(val1426 !== null) {
    subs__.addSub(mobl.domBind(node2790, 'keyup', val1426));
  }
  node2790.attr('autocorrect', false);
  node2790.attr('autocapitalize', false);
  node2790.attr('autocomplete', false);
  
  node2789.append(node2790);
  root14971.append(node2789);
  callback(root14971); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root14972 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref2581 = mobl.ref(ui.contextMenuStyle);
  if(ref2581.get() !== null) {
    menu.attr('class', ref2581.get());
    subs__.addSub(ref2581.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2581.rebind());
  
  var nodes10631 = $("<span>");
  menu.append(nodes10631);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1065();
  }));
  
  function renderControl1065() {
    subs__.addSub((elements)(function(elements, callback) {
      var root14973 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root14973); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10631;
      nodes10631 = node.contents();
      oldNodes.replaceWith(nodes10631);
    }));
  }
  renderControl1065();
  root14972.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val1427 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp7334 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val1427 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val1427));
  }
  
  root14972.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root14972); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root14974 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp7318 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp7318.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node2791 = $("<span>");
  root14974.append(node2791);
  var condSubs638 = new mobl.CompSubscription();
  subs__.addSub(condSubs638);
  var oldValue638;
  var renderCond638 = function() {
    var value2222 = tmp7318.get();
    if(oldValue638 === value2222) return;
    oldValue638 = value2222;
    var subs__ = condSubs638;
    subs__.unsubscribe();
    node2791.empty();
    if(value2222) {
      items.get().one(function(result__) {
        var tmp7335 = result__;
        var current = mobl.ref(result__);
        
        var node2792 = $("<div>");
        node2792.attr('width', "100%");
        
        
        var node2793 = $("<div>");
        node2793.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes10634 = $("<span>");
        node2793.append(nodes10634);
        subs__.addSub((ui.group)(function(_, callback) {
          var root14977 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node2796 = mobl.loadingSpan();
          root14977.append(node2796);
          var list770;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList770 = function() {
            var subs__ = listSubs__;
            list770 = items.get();
            list770.list(function(results1474) {
              node2796.empty();
              for(var i1568 = 0; i1568 < results1474.length; i1568++) {
                (function() {
                  var iternode770 = $("<span>");
                  node2796.append(iternode770);
                  var it;
                  it = mobl.ref(mobl.ref(results1474), i1568);
                  var result__ = it.get() == current.get();
                  var tmp7294 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp7294.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp7294.set(it.get() == current.get());
                  }));
                  
                  
                  var node2797 = $("<span>");
                  iternode770.append(node2797);
                  var condSubs640 = new mobl.CompSubscription();
                  subs__.addSub(condSubs640);
                  var oldValue640;
                  var renderCond640 = function() {
                    var value2224 = tmp7294.get();
                    if(oldValue640 === value2224) return;
                    oldValue640 = value2224;
                    var subs__ = condSubs640;
                    subs__.unsubscribe();
                    node2797.empty();
                    if(value2224) {
                      var nodes10635 = $("<span>");
                      node2797.append(nodes10635);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root14978 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes10636 = $("<span>");
                        root14978.append(nodes10636);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1067();
                        }));
                        
                        function renderControl1067() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root14979 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root14979); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes10636;
                            nodes10636 = node.contents();
                            oldNodes.replaceWith(nodes10636);
                          }));
                        }
                        renderControl1067();
                        callback(root14978); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes10635;
                        nodes10635 = node.contents();
                        oldNodes.replaceWith(nodes10635);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp7293 = mobl.ref(result__);
                      
                      var nodes10637 = $("<span>");
                      node2797.append(nodes10637);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7293, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root14980 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes10638 = $("<span>");
                        root14980.append(nodes10638);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1068();
                        }));
                        
                        function renderControl1068() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root14981 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root14981); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes10638;
                            nodes10638 = node.contents();
                            oldNodes.replaceWith(nodes10638);
                          }));
                        }
                        renderControl1068();
                        callback(root14980); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes10637;
                        nodes10637 = node.contents();
                        oldNodes.replaceWith(nodes10637);
                      }));
                      
                      
                    }
                  };
                  renderCond640();
                  subs__.addSub(tmp7294.addEventListener('change', function() {
                    renderCond640();
                  }));
                  
                  
                  var oldNodes = iternode770;
                  iternode770 = iternode770.contents();
                  oldNodes.replaceWith(iternode770);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list770.addEventListener('change', function() { listSubs__.unsubscribe(); renderList770(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList770(true); }));
            });
          };
          renderList770();
          
          callback(root14977); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes10634;
          nodes10634 = node.contents();
          oldNodes.replaceWith(nodes10634);
        }));
        node2792.append(node2793);
        
        var node2794 = $("<div>");
        node2794.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node2795 = $("<span>");
        node2794.append(node2795);
        var condSubs639 = new mobl.CompSubscription();
        subs__.addSub(condSubs639);
        var oldValue639;
        var renderCond639 = function() {
          var value2223 = current.get();
          if(oldValue639 === value2223) return;
          oldValue639 = value2223;
          var subs__ = condSubs639;
          subs__.unsubscribe();
          node2795.empty();
          if(value2223) {
            var nodes10632 = $("<span>");
            node2795.append(nodes10632);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl1066();
            }));
            
            function renderControl1066() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root14975 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root14975); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes10632;
                nodes10632 = node.contents();
                oldNodes.replaceWith(nodes10632);
              }));
            }
            renderControl1066();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp7295 = mobl.ref(result__);
            
            var nodes10633 = $("<span>");
            node2795.append(nodes10633);
            subs__.addSub((mobl.label)(tmp7295, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root14976 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root14976); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes10633;
              nodes10633 = node.contents();
              oldNodes.replaceWith(nodes10633);
            }));
            
            
          }
        };
        renderCond639();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond639();
        }));
        
        node2792.append(node2794);
        node2791.append(node2792);
        
        
        
        
        
        
      });
    } else {
      var nodes10639 = $("<span>");
      node2791.append(nodes10639);
      subs__.addSub((ui.group)(function(_, callback) {
        var root14982 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2798 = mobl.loadingSpan();
        root14982.append(node2798);
        var list771;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList771 = function() {
          var subs__ = listSubs__;
          list771 = items.get();
          list771.list(function(results1475) {
            node2798.empty();
            for(var i1569 = 0; i1569 < results1475.length; i1569++) {
              (function() {
                var iternode771 = $("<span>");
                node2798.append(iternode771);
                var it;
                it = mobl.ref(mobl.ref(results1475), i1569);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp7336 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp7289 = mobl.ref(result__);
                
                var nodes10640 = $("<span>");
                iternode771.append(nodes10640);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7289, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root14983 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes10641 = $("<span>");
                  root14983.append(nodes10641);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl1069();
                  }));
                  
                  function renderControl1069() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root14984 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root14984); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes10641;
                      nodes10641 = node.contents();
                      oldNodes.replaceWith(nodes10641);
                    }));
                  }
                  renderControl1069();
                  callback(root14983); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes10640;
                  nodes10640 = node.contents();
                  oldNodes.replaceWith(nodes10640);
                }));
                
                var oldNodes = iternode771;
                iternode771 = iternode771.contents();
                oldNodes.replaceWith(iternode771);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list771.addEventListener('change', function() { listSubs__.unsubscribe(); renderList771(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList771(true); }));
          });
        };
        renderList771();
        
        callback(root14982); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes10639;
        nodes10639 = node.contents();
        oldNodes.replaceWith(nodes10639);
      }));
      
      
    }
  };
  renderCond638();
  subs__.addSub(tmp7318.addEventListener('change', function() {
    renderCond638();
  }));
  
  callback(root14974); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root14985 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp7292 = mobl.ref(result__);
  
  var nodes10642 = $("<span>");
  root14985.append(nodes10642);
  subs__.addSub((ui.header)(tmp7292, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root14986 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7291 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7290 = mobl.ref(result__);
    
    var nodes10643 = $("<span>");
    root14986.append(nodes10643);
    subs__.addSub((ui.backButton)(tmp7290, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7291, function(_, callback) {
      var root14987 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root14987); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10643;
      nodes10643 = node.contents();
      oldNodes.replaceWith(nodes10643);
    }));
    callback(root14986); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10642;
    nodes10642 = node.contents();
    oldNodes.replaceWith(nodes10642);
  }));
  var nodes10644 = $("<span>");
  root14985.append(nodes10644);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl1070();
  }));
  
  function renderControl1070() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root14988 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root14988); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10644;
      nodes10644 = node.contents();
      oldNodes.replaceWith(nodes10644);
    }));
  }
  renderControl1070();
  callback(root14985); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root14989 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes10645 = $("<span>");
  root14989.append(nodes10645);
  subs__.addSub((ui.group)(function(_, callback) {
    var root14990 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2799 = mobl.loadingSpan();
    root14990.append(node2799);
    var list772;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList772 = function() {
      var subs__ = listSubs__;
      list772 = coll.get();
      list772.list(function(results1476) {
        node2799.empty();
        for(var i1570 = 0; i1570 < results1476.length; i1570++) {
          (function() {
            var iternode772 = $("<span>");
            node2799.append(iternode772);
            var it;
            it = mobl.ref(mobl.ref(results1476), i1570);
            var result__ = it.get() == selected.get();
            var tmp7297 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp7297.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp7297.set(it.get() == selected.get());
            }));
            
            
            var node2800 = $("<span>");
            iternode772.append(node2800);
            var condSubs641 = new mobl.CompSubscription();
            subs__.addSub(condSubs641);
            var oldValue641;
            var renderCond641 = function() {
              var value2225 = tmp7297.get();
              if(oldValue641 === value2225) return;
              oldValue641 = value2225;
              var subs__ = condSubs641;
              subs__.unsubscribe();
              node2800.empty();
              if(value2225) {
                var nodes10646 = $("<span>");
                node2800.append(nodes10646);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root14991 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes10647 = $("<span>");
                  root14991.append(nodes10647);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl1071();
                  }));
                  
                  function renderControl1071() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root14992 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root14992); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes10647;
                      nodes10647 = node.contents();
                      oldNodes.replaceWith(nodes10647);
                    }));
                  }
                  renderControl1071();
                  callback(root14991); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes10646;
                  nodes10646 = node.contents();
                  oldNodes.replaceWith(nodes10646);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp7296 = mobl.ref(result__);
                
                var nodes10648 = $("<span>");
                node2800.append(nodes10648);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7296, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root14993 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes10649 = $("<span>");
                  root14993.append(nodes10649);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl1072();
                  }));
                  
                  function renderControl1072() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root14994 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root14994); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes10649;
                      nodes10649 = node.contents();
                      oldNodes.replaceWith(nodes10649);
                    }));
                  }
                  renderControl1072();
                  callback(root14993); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes10648;
                  nodes10648 = node.contents();
                  oldNodes.replaceWith(nodes10648);
                }));
                
                
              }
            };
            renderCond641();
            subs__.addSub(tmp7297.addEventListener('change', function() {
              renderCond641();
            }));
            
            
            var oldNodes = iternode772;
            iternode772 = iternode772.contents();
            oldNodes.replaceWith(iternode772);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list772.addEventListener('change', function() { listSubs__.unsubscribe(); renderList772(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList772(true); }));
      });
    };
    renderList772();
    
    callback(root14990); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10645;
    nodes10645 = node.contents();
    oldNodes.replaceWith(nodes10645);
  }));
  callback(root14989); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root14995 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp7337 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp7298 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp7298.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp7298.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp7298.set(coll.get().limit(n.get()));
    }));
    
    
    var node2801 = mobl.loadingSpan();
    root14995.append(node2801);
    var list773;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList773 = function() {
      var subs__ = listSubs__;
      list773 = tmp7298.get();
      list773.list(function(results1477) {
        node2801.empty();
        for(var i1571 = 0; i1571 < results1477.length; i1571++) {
          (function() {
            var iternode773 = $("<span>");
            node2801.append(iternode773);
            var it;
            it = mobl.ref(mobl.ref(results1477), i1571);
            var nodes10650 = $("<span>");
            iternode773.append(nodes10650);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl1073();
            }));
            
            function renderControl1073() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root14996 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root14996); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes10650;
                nodes10650 = node.contents();
                oldNodes.replaceWith(nodes10650);
              }));
            }
            renderControl1073();
            
            var oldNodes = iternode773;
            iternode773 = iternode773.contents();
            oldNodes.replaceWith(iternode773);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list773.addEventListener('change', function() { listSubs__.unsubscribe(); renderList773(true); }));
        subs__.addSub(tmp7298.addEventListener('change', function() { listSubs__.unsubscribe(); renderList773(true); }));
      });
    };
    renderList773();
    
    var result__ = n.get() < total.get();
    var tmp7300 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp7300.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp7300.set(n.get() < total.get());
    }));
    
    
    var node2802 = $("<span>");
    root14995.append(node2802);
    var condSubs642 = new mobl.CompSubscription();
    subs__.addSub(condSubs642);
    var oldValue642;
    var renderCond642 = function() {
      var value2226 = tmp7300.get();
      if(oldValue642 === value2226) return;
      oldValue642 = value2226;
      var subs__ = condSubs642;
      subs__.unsubscribe();
      node2802.empty();
      if(value2226) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp7299 = mobl.ref(result__);
        
        var nodes10651 = $("<span>");
        node2802.append(nodes10651);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp7299, mobl.ref(null), function(_, callback) {
          var root14997 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes10652 = $("<span>");
          root14997.append(nodes10652);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root14998 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root14998); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes10652;
            nodes10652 = node.contents();
            oldNodes.replaceWith(nodes10652);
          }));
          callback(root14997); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes10651;
          nodes10651 = node.contents();
          oldNodes.replaceWith(nodes10651);
        }));
        
        
      } else {
        
      }
    };
    renderCond642();
    subs__.addSub(tmp7300.addEventListener('change', function() {
      renderCond642();
    }));
    
    callback(root14995); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root14999 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes10653 = $("<span>");
  root14999.append(nodes10653);
  subs__.addSub((ui.group)(function(_, callback) {
    var root15000 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2803 = mobl.loadingSpan();
    root15000.append(node2803);
    var list774;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList774 = function() {
      var subs__ = listSubs__;
      list774 = items.get();
      list774.list(function(results1478) {
        node2803.empty();
        for(var i1572 = 0; i1572 < results1478.length; i1572++) {
          (function() {
            var iternode774 = $("<span>");
            node2803.append(iternode774);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results1478), i1572), "_1");it = mobl.ref(mobl.ref(mobl.ref(results1478), i1572), "_2");
            var nodes10654 = $("<span>");
            iternode774.append(nodes10654);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root15001 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes10655 = $("<span>");
              root15001.append(nodes10655);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root15002 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root15002); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes10655;
                nodes10655 = node.contents();
                oldNodes.replaceWith(nodes10655);
              }));
              callback(root15001); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes10654;
              nodes10654 = node.contents();
              oldNodes.replaceWith(nodes10654);
            }));
            
            var oldNodes = iternode774;
            iternode774 = iternode774.contents();
            oldNodes.replaceWith(iternode774);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list774.addEventListener('change', function() { listSubs__.unsubscribe(); renderList774(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList774(true); }));
      });
    };
    renderList774();
    
    callback(root15000); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10653;
    nodes10653 = node.contents();
    oldNodes.replaceWith(nodes10653);
  }));
  callback(root14999); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root15003 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll2523) {
    coll2523 = coll2523.reverse();
    function processOne115() {
      var it;
      it = coll2523.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll2523.length > 0) processOne115(); else rest115();
      
    }
    function rest115() {
      var nodes10656 = $("<span>");
      root15003.append(nodes10656);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root15004 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp7301 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp7302 = mobl.ref(result__);
        
        var nodes10657 = $("<span>");
        root15004.append(nodes10657);
        subs__.addSub((ui.backButton)(tmp7302, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7301, function(_, callback) {
          var root15005 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root15005); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes10657;
          nodes10657 = node.contents();
          oldNodes.replaceWith(nodes10657);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll2522) {
                           coll2522 = coll2522.reverse();
                           function processOne114() {
                             var checked;var it;
                             var tmp7339 = coll2522.pop();
                             checked = tmp7339._1;it = tmp7339._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll2522.length > 0) processOne114(); else rest114();
                               
                             } else {
                               {
                                 
                                 if(coll2522.length > 0) processOne114(); else rest114();
                                 
                               }
                             }
                           }
                           function rest114() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll2522.length > 0) processOne114(); else rest114();
                         });
                         
                       };
        var tmp7303 = mobl.ref(result__);
        
        var nodes10658 = $("<span>");
        root15004.append(nodes10658);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp7303, function(_, callback) {
          var root15006 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root15006); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes10658;
          nodes10658 = node.contents();
          oldNodes.replaceWith(nodes10658);
        }));
        callback(root15004); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes10656;
        nodes10656 = node.contents();
        oldNodes.replaceWith(nodes10656);
      }));
      var nodes10659 = $("<span>");
      root15003.append(nodes10659);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root15007 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15007); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10659;
        nodes10659 = node.contents();
        oldNodes.replaceWith(nodes10659);
      }));
      callback(root15003); return subs__;
      
      
    }
    if(coll2523.length > 0) processOne115(); else rest115();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root15008 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes10660 = $("<span>");
  root15008.append(nodes10660);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root15009 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root15009); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10660;
    nodes10660 = node.contents();
    oldNodes.replaceWith(nodes10660);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp7304 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp7304.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp7304.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp7304.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp7304.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp7304.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes10661 = $("<span>");
  root15008.append(nodes10661);
  subs__.addSub((ui.masterDetail)(tmp7304, masterItem, detailItem, function(_, callback) {
    var root15010 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root15010); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10661;
    nodes10661 = node.contents();
    oldNodes.replaceWith(nodes10661);
  }));
  callback(root15008); return subs__;
  
  
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
  var root15011 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes10662 = $("<span>");
  root15011.append(nodes10662);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root15012 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2804 = mobl.loadingSpan();
    root15012.append(node2804);
    var list775;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList775 = function() {
      var subs__ = listSubs__;
      list775 = sections.get();
      list775.list(function(results1479) {
        node2804.empty();
        for(var i1573 = 0; i1573 < results1479.length; i1573++) {
          (function() {
            var iternode775 = $("<span>");
            node2804.append(iternode775);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results1479), i1573), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results1479), i1573), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp7306 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp7306.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp7306.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp7306.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp7306.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp7305 = mobl.ref(result__);
            
            var nodes10663 = $("<span>");
            iternode775.append(nodes10663);
            subs__.addSub((mobl.span)(tmp7306, mobl.ref(null), tmp7305, mobl.ref(null), function(_, callback) {
              var root15013 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes10664 = $("<span>");
              root15013.append(nodes10664);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root15014 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root15014); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes10664;
                nodes10664 = node.contents();
                oldNodes.replaceWith(nodes10664);
              }));
              callback(root15013); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes10663;
              nodes10663 = node.contents();
              oldNodes.replaceWith(nodes10663);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp7307 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp7307.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp7307.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp7307.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp7307.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes10665 = $("<span>");
            iternode775.append(nodes10665);
            subs__.addSub((mobl.block)(tmp7307, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root15015 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes10666 = $("<span>");
              root15015.append(nodes10666);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl1074();
              }));
              
              function renderControl1074() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root15016 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root15016); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes10666;
                  nodes10666 = node.contents();
                  oldNodes.replaceWith(nodes10666);
                }));
              }
              renderControl1074();
              callback(root15015); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes10665;
              nodes10665 = node.contents();
              oldNodes.replaceWith(nodes10665);
            }));
            
            var oldNodes = iternode775;
            iternode775 = iternode775.contents();
            oldNodes.replaceWith(iternode775);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list775.addEventListener('change', function() { listSubs__.unsubscribe(); renderList775(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList775(true); }));
      });
    };
    renderList775();
    
    callback(root15012); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10662;
    nodes10662 = node.contents();
    oldNodes.replaceWith(nodes10662);
  }));
  callback(root15011); return subs__;
  
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
  var root15017 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2805 = $("<table>");
  
  var ref2582 = style;
  if(ref2582.get() !== null) {
    node2805.attr('class', ref2582.get());
    subs__.addSub(ref2582.addEventListener('change', function(_, ref, val) {
      node2805.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2582.rebind());
  
  var nodes10667 = $("<span>");
  node2805.append(nodes10667);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1075();
  }));
  
  function renderControl1075() {
    subs__.addSub((elements)(function(elements, callback) {
      var root15018 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15018); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10667;
      nodes10667 = node.contents();
      oldNodes.replaceWith(nodes10667);
    }));
  }
  renderControl1075();
  root15017.append(node2805);
  callback(root15017); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root15019 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2806 = $("<tr>");
  
  var ref2583 = style;
  if(ref2583.get() !== null) {
    node2806.attr('class', ref2583.get());
    subs__.addSub(ref2583.addEventListener('change', function(_, ref, val) {
      node2806.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2583.rebind());
  
  var nodes10668 = $("<span>");
  node2806.append(nodes10668);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1076();
  }));
  
  function renderControl1076() {
    subs__.addSub((elements)(function(elements, callback) {
      var root15020 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15020); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10668;
      nodes10668 = node.contents();
      oldNodes.replaceWith(nodes10668);
    }));
  }
  renderControl1076();
  root15019.append(node2806);
  callback(root15019); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root15021 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2807 = $("<td>");
  
  var ref2584 = width;
  if(ref2584.get() !== null) {
    node2807.attr('width', ref2584.get());
    subs__.addSub(ref2584.addEventListener('change', function(_, ref, val) {
      node2807.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2584.rebind());
  
  var ref2585 = style;
  if(ref2585.get() !== null) {
    node2807.attr('class', ref2585.get());
    subs__.addSub(ref2585.addEventListener('change', function(_, ref, val) {
      node2807.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2585.rebind());
  
  var nodes10669 = $("<span>");
  node2807.append(nodes10669);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1077();
  }));
  
  function renderControl1077() {
    subs__.addSub((elements)(function(elements, callback) {
      var root15022 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15022); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10669;
      nodes10669 = node.contents();
      oldNodes.replaceWith(nodes10669);
    }));
  }
  renderControl1077();
  root15021.append(node2807);
  callback(root15021); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root15023 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2808 = $("<td>");
  
  var ref2586 = width;
  if(ref2586.get() !== null) {
    node2808.attr('width', ref2586.get());
    subs__.addSub(ref2586.addEventListener('change', function(_, ref, val) {
      node2808.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2586.rebind());
  
  var ref2587 = style;
  if(ref2587.get() !== null) {
    node2808.attr('class', ref2587.get());
    subs__.addSub(ref2587.addEventListener('change', function(_, ref, val) {
      node2808.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2587.rebind());
  
  var nodes10670 = $("<span>");
  node2808.append(nodes10670);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1078();
  }));
  
  function renderControl1078() {
    subs__.addSub((elements)(function(elements, callback) {
      var root15024 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15024); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10670;
      nodes10670 = node.contents();
      oldNodes.replaceWith(nodes10670);
    }));
  }
  renderControl1078();
  root15023.append(node2808);
  callback(root15023); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root15025 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2809 = $("<td>");
  
  var ref2588 = width;
  if(ref2588.get() !== null) {
    node2809.attr('width', ref2588.get());
    subs__.addSub(ref2588.addEventListener('change', function(_, ref, val) {
      node2809.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2588.rebind());
  
  var ref2589 = style;
  if(ref2589.get() !== null) {
    node2809.attr('class', ref2589.get());
    subs__.addSub(ref2589.addEventListener('change', function(_, ref, val) {
      node2809.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2589.rebind());
  
  
  var node2810 = $("<strong>");
  
  var nodes10671 = $("<span>");
  node2810.append(nodes10671);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1079();
  }));
  
  function renderControl1079() {
    subs__.addSub((elements)(function(elements, callback) {
      var root15026 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15026); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10671;
      nodes10671 = node.contents();
      oldNodes.replaceWith(nodes10671);
    }));
  }
  renderControl1079();
  node2809.append(node2810);
  root15025.append(node2809);
  callback(root15025); return subs__;
  
  
  
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
  items.list(function(coll2524) {
    coll2524 = coll2524.reverse();
    function processOne116() {
      var item;
      item = coll2524.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll2524.length > 0) processOne116(); else rest116();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll2524.length > 0) processOne116(); else rest116();
          
        }
      }
    }
    function rest116() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll2524.length > 0) processOne116(); else rest116();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root15027 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp7319 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp7319.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node2811 = $("<span>");
  root15027.append(node2811);
  var condSubs643 = new mobl.CompSubscription();
  subs__.addSub(condSubs643);
  var oldValue643;
  var renderCond643 = function() {
    var value2227 = tmp7319.get();
    if(oldValue643 === value2227) return;
    oldValue643 = value2227;
    var subs__ = condSubs643;
    subs__.unsubscribe();
    node2811.empty();
    if(value2227) {
      items.get().one(function(result__) {
        var tmp7341 = result__;
        var current = mobl.ref(result__);
        
        var node2812 = $("<div>");
        node2812.attr('width', "100%");
        
        
        var node2813 = $("<div>");
        node2813.attr('style', "float:left; width:45%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes10673 = $("<span>");
        node2813.append(nodes10673);
        subs__.addSub((ui.group)(function(_, callback) {
          var root15029 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node2816 = mobl.loadingSpan();
          root15029.append(node2816);
          var list776;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList776 = function() {
            var subs__ = listSubs__;
            list776 = items.get();
            list776.list(function(results1480) {
              node2816.empty();
              for(var i1574 = 0; i1574 < results1480.length; i1574++) {
                (function() {
                  var iternode776 = $("<span>");
                  node2816.append(iternode776);
                  var it;
                  it = mobl.ref(mobl.ref(results1480), i1574);
                  var result__ = it.get() == current.get();
                  var tmp7316 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp7316.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp7316.set(it.get() == current.get());
                  }));
                  
                  
                  var node2817 = $("<span>");
                  iternode776.append(node2817);
                  var condSubs645 = new mobl.CompSubscription();
                  subs__.addSub(condSubs645);
                  var oldValue645;
                  var renderCond645 = function() {
                    var value2229 = tmp7316.get();
                    if(oldValue645 === value2229) return;
                    oldValue645 = value2229;
                    var subs__ = condSubs645;
                    subs__.unsubscribe();
                    node2817.empty();
                    if(value2229) {
                      var nodes10674 = $("<span>");
                      node2817.append(nodes10674);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root15030 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp7344 = result__;
                          var tmp7313 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7342 = result__;
                              var result__ = tmp7342;
                              tmp7313.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7343 = result__;
                              var result__ = tmp7343;
                              tmp7313.set(result__);
                              
                            });
                          }));
                          
                          var nodes10675 = $("<span>");
                          root15030.append(nodes10675);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl1081();
                          }));
                          
                          function renderControl1081() {
                            subs__.addSub((masterItem.get())(it, tmp7313, function(elements, callback) {
                              var root15031 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root15031); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes10675;
                              nodes10675 = node.contents();
                              oldNodes.replaceWith(nodes10675);
                            }));
                          }
                          renderControl1081();
                          callback(root15030); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes10674;
                        nodes10674 = node.contents();
                        oldNodes.replaceWith(nodes10674);
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
                      var tmp7315 = mobl.ref(result__);
                      
                      var nodes10676 = $("<span>");
                      node2817.append(nodes10676);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7315, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root15032 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp7347 = result__;
                          var tmp7314 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7345 = result__;
                              var result__ = tmp7345;
                              tmp7314.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp7346 = result__;
                              var result__ = tmp7346;
                              tmp7314.set(result__);
                              
                            });
                          }));
                          
                          var nodes10677 = $("<span>");
                          root15032.append(nodes10677);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl1082();
                          }));
                          
                          function renderControl1082() {
                            subs__.addSub((masterItem.get())(it, tmp7314, function(elements, callback) {
                              var root15033 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root15033); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes10677;
                              nodes10677 = node.contents();
                              oldNodes.replaceWith(nodes10677);
                            }));
                          }
                          renderControl1082();
                          callback(root15032); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes10676;
                        nodes10676 = node.contents();
                        oldNodes.replaceWith(nodes10676);
                      }));
                      
                      
                    }
                  };
                  renderCond645();
                  subs__.addSub(tmp7316.addEventListener('change', function() {
                    renderCond645();
                  }));
                  
                  
                  var oldNodes = iternode776;
                  iternode776 = iternode776.contents();
                  oldNodes.replaceWith(iternode776);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list776.addEventListener('change', function() { listSubs__.unsubscribe(); renderList776(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList776(true); }));
            });
          };
          renderList776();
          
          callback(root15029); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes10673;
          nodes10673 = node.contents();
          oldNodes.replaceWith(nodes10673);
        }));
        node2812.append(node2813);
        
        var node2814 = $("<div>");
        node2814.attr('style', "float:left; width:53%; position:relative; margin-left: 1%;");
        
        var result__ = current.get() && ui.visible.get();
        var tmp7317 = mobl.ref(result__);
        subs__.addSub(current.addEventListener('change', function() {
          tmp7317.set(current.get() && ui.visible.get());
        }));
        subs__.addSub(ui.visible.addEventListener('change', function() {
          tmp7317.set(current.get() && ui.visible.get());
        }));
        
        
        var node2815 = $("<span>");
        node2814.append(node2815);
        var condSubs644 = new mobl.CompSubscription();
        subs__.addSub(condSubs644);
        var oldValue644;
        var renderCond644 = function() {
          var value2228 = tmp7317.get();
          if(oldValue644 === value2228) return;
          oldValue644 = value2228;
          var subs__ = condSubs644;
          subs__.unsubscribe();
          node2815.empty();
          if(value2228) {
            var nodes10672 = $("<span>");
            node2815.append(nodes10672);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl1080();
            }));
            
            function renderControl1080() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root15028 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root15028); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes10672;
                nodes10672 = node.contents();
                oldNodes.replaceWith(nodes10672);
              }));
            }
            renderControl1080();
            
            
          } else {
            
          }
        };
        renderCond644();
        subs__.addSub(tmp7317.addEventListener('change', function() {
          renderCond644();
        }));
        
        node2812.append(node2814);
        node2811.append(node2812);
        
        
        
        
        
        
      });
    } else {
      var nodes10678 = $("<span>");
      node2811.append(nodes10678);
      subs__.addSub((ui.group)(function(_, callback) {
        var root15034 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2818 = mobl.loadingSpan();
        root15034.append(node2818);
        var list777;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList777 = function() {
          var subs__ = listSubs__;
          list777 = items.get();
          list777.list(function(results1481) {
            node2818.empty();
            for(var i1575 = 0; i1575 < results1481.length; i1575++) {
              (function() {
                var iternode777 = $("<span>");
                node2818.append(iternode777);
                var it;
                it = mobl.ref(mobl.ref(results1481), i1575);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp7351 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp7309 = mobl.ref(result__);
                
                var nodes10679 = $("<span>");
                iternode777.append(nodes10679);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7309, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root15035 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp7350 = result__;
                    var tmp7308 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp7348 = result__;
                        var result__ = tmp7348;
                        tmp7308.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp7349 = result__;
                        var result__ = tmp7349;
                        tmp7308.set(result__);
                        
                      });
                    }));
                    
                    var nodes10680 = $("<span>");
                    root15035.append(nodes10680);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl1083();
                    }));
                    
                    function renderControl1083() {
                      subs__.addSub((masterItem.get())(it, tmp7308, function(elements, callback) {
                        var root15036 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root15036); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes10680;
                        nodes10680 = node.contents();
                        oldNodes.replaceWith(nodes10680);
                      }));
                    }
                    renderControl1083();
                    callback(root15035); return subs__;
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes10679;
                  nodes10679 = node.contents();
                  oldNodes.replaceWith(nodes10679);
                }));
                
                var oldNodes = iternode777;
                iternode777 = iternode777.contents();
                oldNodes.replaceWith(iternode777);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list777.addEventListener('change', function() { listSubs__.unsubscribe(); renderList777(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList777(true); }));
          });
        };
        renderList777();
        
        callback(root15034); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes10678;
        nodes10678 = node.contents();
        oldNodes.replaceWith(nodes10678);
      }));
      
      
    }
  };
  renderCond643();
  subs__.addSub(tmp7319.addEventListener('change', function() {
    renderCond643();
  }));
  
  callback(root15027); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root15037 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp7312 = mobl.ref(result__);
  
  var nodes10681 = $("<span>");
  root15037.append(nodes10681);
  subs__.addSub((ui.header)(tmp7312, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root15038 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    mobl.sleep(100, function(result__) {
      var tmp7352 = result__;
      mathJAX.renderMaths(function(result__) {
        var tmp7353 = result__;
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp7311 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp7310 = mobl.ref(result__);
        
        var nodes10682 = $("<span>");
        root15038.append(nodes10682);
        subs__.addSub((ui.backButton)(tmp7310, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7311, function(_, callback) {
          var root15039 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root15039); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes10682;
          nodes10682 = node.contents();
          oldNodes.replaceWith(nodes10682);
        }));
        callback(root15038); return subs__;
        
      });
    });
    return subs__;
  }, function(node) {
    var oldNodes = nodes10681;
    nodes10681 = node.contents();
    oldNodes.replaceWith(nodes10681);
  }));
  var nodes10683 = $("<span>");
  root15037.append(nodes10683);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl1084();
  }));
  
  function renderControl1084() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root15040 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15040); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10683;
      nodes10683 = node.contents();
      oldNodes.replaceWith(nodes10683);
    }));
  }
  renderControl1084();
  callback(root15037); return subs__;
  
  
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
