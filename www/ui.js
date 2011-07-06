mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mathJAX');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root16118 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1878 = $("<span>");
  root16118.append(node1878);
  var condSubs534 = new mobl.CompSubscription();
  subs__.addSub(condSubs534);
  var oldValue534;
  var renderCond534 = function() {
    var value866 = value.get();
    if(oldValue534 === value866) return;
    oldValue534 = value866;
    var subs__ = condSubs534;
    subs__.unsubscribe();
    node1878.empty();
    if(value866) {
      var nodes14148 = $("<span>");
      node1878.append(nodes14148);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl548();
      }));
      
      function renderControl548() {
        subs__.addSub((elements)(function(elements, callback) {
          var root16119 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root16119); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes14148;
          nodes14148 = node.contents();
          oldNodes.replaceWith(nodes14148);
        }));
      }
      renderControl548();
      
      
    } else {
      var nodes14149 = $("<span>");
      node1878.append(nodes14149);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16120 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes14150 = $("<span>");
        root16120.append(nodes14150);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root16121 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root16121); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes14150;
          nodes14150 = node.contents();
          oldNodes.replaceWith(nodes14150);
        }));
        var nodes14151 = $("<span>");
        root16120.append(nodes14151);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root16122 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root16122); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes14151;
          nodes14151 = node.contents();
          oldNodes.replaceWith(nodes14151);
        }));
        callback(root16120); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes14149;
        nodes14149 = node.contents();
        oldNodes.replaceWith(nodes14149);
      }));
      
      
    }
  };
  renderCond534();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond534();
  }));
  
  callback(root16118); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root16123 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1879 = $("<div>");
  
  var ref1418 = mobl.ref(ui.headerStyle);
  if(ref1418.get() !== null) {
    node1879.attr('class', ref1418.get());
    subs__.addSub(ref1418.addEventListener('change', function(_, ref, val) {
      node1879.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1418.rebind());
  
  var val629 = onclick.get();
  if(val629 !== null) {
    subs__.addSub(mobl.domBind(node1879, 'tap', val629));
  }
  
  var ref1419 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref1419.get() !== null) {
    node1879.attr('style', ref1419.get());
    subs__.addSub(ref1419.addEventListener('change', function(_, ref, val) {
      node1879.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node1879.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref1419.rebind());
  
  
  var node1882 = $("<div>");
  
  var ref1417 = mobl.ref(ui.headerContainerStyle);
  if(ref1417.get() !== null) {
    node1882.attr('class', ref1417.get());
    subs__.addSub(ref1417.addEventListener('change', function(_, ref, val) {
      node1882.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1417.rebind());
  
  
  var node1883 = $("<div>");
  
  var ref1415 = text;
  node1883.text(""+ref1415.get());
  var ignore276 = false;
  subs__.addSub(ref1415.addEventListener('change', function(_, ref, val) {
    if(ignore276) return;
    node1883.text(""+val);
  }));
  subs__.addSub(ref1415.rebind());
  
  
  var ref1416 = mobl.ref(ui.headerTextStyle);
  if(ref1416.get() !== null) {
    node1883.attr('class', ref1416.get());
    subs__.addSub(ref1416.addEventListener('change', function(_, ref, val) {
      node1883.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1416.rebind());
  
  node1882.append(node1883);
  node1879.append(node1882);
  var nodes14152 = $("<span>");
  node1879.append(nodes14152);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl549();
  }));
  
  function renderControl549() {
    subs__.addSub((elements)(function(elements, callback) {
      var root16124 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16124); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14152;
      nodes14152 = node.contents();
      oldNodes.replaceWith(nodes14152);
    }));
  }
  renderControl549();
  root16123.append(node1879);
  
  var node1880 = $("<span>");
  root16123.append(node1880);
  var condSubs535 = new mobl.CompSubscription();
  subs__.addSub(condSubs535);
  var oldValue535;
  var renderCond535 = function() {
    var value867 = fixedPosition.get();
    if(oldValue535 === value867) return;
    oldValue535 = value867;
    var subs__ = condSubs535;
    subs__.unsubscribe();
    node1880.empty();
    if(value867) {
      
      var node1881 = $("<div>");
      node1881.attr('id', "hello");
      node1881.attr('style', "height: 2.9em;");
      
      node1880.append(node1881);
      
      
    } else {
      
    }
  };
  renderCond535();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond535();
  }));
  
  callback(root16123); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root16125 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref1420 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref1420.get() !== null) {
    sp.attr('class', ref1420.get());
    subs__.addSub(ref1420.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1420.rebind());
  
  var val630 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val630 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val630));
  }
  
  var val631 = function(event, callback) {
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
  if(val631 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val631));
  }
  
  var val632 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after153(result__) {
                    var tmp13156 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after153);if(result__ !== undefined) after153(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val632 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val632));
  }
  
  var val633 = function(event, callback) {
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
  if(val633 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val633));
  }
  
  var ref1421 = text;
  sp.text(""+ref1421.get());
  var ignore277 = false;
  subs__.addSub(ref1421.addEventListener('change', function(_, ref, val) {
    if(ignore277) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref1421.rebind());
  
  
  root16125.append(sp);
  callback(root16125); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root16126 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes14153 = $("<span>");
  root16126.append(nodes14153);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root16127 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root16127); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes14153;
    nodes14153 = node.contents();
    oldNodes.replaceWith(nodes14153);
  }));
  callback(root16126); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root16128 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes14154 = $("<span>");
  root16128.append(nodes14154);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root16129 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root16129); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes14154;
    nodes14154 = node.contents();
    oldNodes.replaceWith(nodes14154);
  }));
  callback(root16128); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root16130 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1884 = $("<ul>");
  
  var ref1422 = mobl.ref(ui.groupStyle);
  if(ref1422.get() !== null) {
    node1884.attr('class', ref1422.get());
    subs__.addSub(ref1422.addEventListener('change', function(_, ref, val) {
      node1884.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1422.rebind());
  
  var nodes14155 = $("<span>");
  node1884.append(nodes14155);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl550();
  }));
  
  function renderControl550() {
    subs__.addSub((elements)(function(elements, callback) {
      var root16131 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16131); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14155;
      nodes14155 = node.contents();
      oldNodes.replaceWith(nodes14155);
    }));
  }
  renderControl550();
  root16130.append(node1884);
  callback(root16130); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root16132 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1885 = $("<img>");
  
  var ref1423 = url;
  if(ref1423.get() !== null) {
    node1885.attr('src', ref1423.get());
    subs__.addSub(ref1423.addEventListener('change', function(_, ref, val) {
      node1885.attr('src', val);
    }));
    
  }
  subs__.addSub(ref1423.rebind());
  
  var ref1424 = width;
  if(ref1424.get() !== null) {
    node1885.attr('width', ref1424.get());
    subs__.addSub(ref1424.addEventListener('change', function(_, ref, val) {
      node1885.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1424.rebind());
  
  var ref1425 = height;
  if(ref1425.get() !== null) {
    node1885.attr('height', ref1425.get());
    subs__.addSub(ref1425.addEventListener('change', function(_, ref, val) {
      node1885.attr('height', val);
    }));
    
  }
  subs__.addSub(ref1425.rebind());
  
  var ref1426 = style;
  if(ref1426.get() !== null) {
    node1885.attr('class', ref1426.get());
    subs__.addSub(ref1426.addEventListener('change', function(_, ref, val) {
      node1885.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1426.rebind());
  
  var val634 = onclick.get();
  if(val634 !== null) {
    subs__.addSub(mobl.domBind(node1885, 'tap', val634));
  }
  
  var ref1427 = valign;
  if(ref1427.get() !== null) {
    node1885.attr('valign', ref1427.get());
    subs__.addSub(ref1427.addEventListener('change', function(_, ref, val) {
      node1885.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref1427.rebind());
  
  var ref1428 = align;
  if(ref1428.get() !== null) {
    node1885.attr('align', ref1428.get());
    subs__.addSub(ref1428.addEventListener('change', function(_, ref, val) {
      node1885.attr('align', val);
    }));
    
  }
  subs__.addSub(ref1428.rebind());
  
  root16132.append(node1885);
  callback(root16132); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root16133 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref1429 = mobl.ref(ui.itemStyle);
  if(ref1429.get() !== null) {
    el.attr('class', ref1429.get());
    subs__.addSub(ref1429.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1429.rebind());
  
  var ref1430 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref1430.get() !== null) {
    el.attr('class', ref1430.get());
    subs__.addSub(ref1430.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1430.rebind());
  
  var val635 = onswipe.get();
  if(val635 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val635));
  }
  
  var val636 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp13157 = result__;
                                           function after154(result__) {
                                             var tmp13158 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after154);if(result__ !== undefined) after154(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp13159 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val636 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val636));
  }
  
  var nodes14156 = $("<span>");
  el.append(nodes14156);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl551();
  }));
  
  function renderControl551() {
    subs__.addSub((elements)(function(elements, callback) {
      var root16134 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16134); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14156;
      nodes14156 = node.contents();
      oldNodes.replaceWith(nodes14156);
    }));
  }
  renderControl551();
  root16133.append(el);
  callback(root16133); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root16135 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1886 = $("<input>");
  node1886.attr('type', "checkbox");
  
  var ref1432 = b;
  node1886.attr('checked', !!ref1432.get());
  subs__.addSub(ref1432.addEventListener('change', function(_, ref, val) {
    if(ref === ref1432) node1886.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node1886, 'change', function() {
    b.set(!!node1886.attr('checked'));
  }));
  
  var val638 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val638 !== null) {
    subs__.addSub(mobl.domBind(node1886, 'tap', val638));
  }
  
  var val639 = onchange.get();
  if(val639 !== null) {
    subs__.addSub(mobl.domBind(node1886, 'change', val639));
  }
  
  root16135.append(node1886);
  
  root16135.append(" ");
  
  var node1887 = $("<span>");
  
  var ref1431 = label;
  node1887.text(""+ref1431.get());
  var ignore278 = false;
  subs__.addSub(ref1431.addEventListener('change', function(_, ref, val) {
    if(ignore278) return;
    node1887.text(""+val);
  }));
  subs__.addSub(ref1431.rebind());
  
  
  var val637 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after155(result__) {
                    var tmp13160 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after155);if(result__ !== undefined) after155(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val637 !== null) {
    subs__.addSub(mobl.domBind(node1887, 'tap', val637));
  }
  
  root16135.append(node1887);
  callback(root16135); return subs__;
  
  
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
  var root16136 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1888 = $("<span>");
  root16136.append(node1888);
  var condSubs536 = new mobl.CompSubscription();
  subs__.addSub(condSubs536);
  var oldValue536;
  var renderCond536 = function() {
    var value868 = label.get();
    if(oldValue536 === value868) return;
    oldValue536 = value868;
    var subs__ = condSubs536;
    subs__.unsubscribe();
    node1888.empty();
    if(value868) {
      var nodes14157 = $("<span>");
      node1888.append(nodes14157);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root16137 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16137); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14157;
        nodes14157 = node.contents();
        oldNodes.replaceWith(nodes14157);
      }));
      
      
    } else {
      
    }
  };
  renderCond536();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond536();
  }));
  
  
  var node1889 = $("<span>");
  root16136.append(node1889);
  var condSubs537 = new mobl.CompSubscription();
  subs__.addSub(condSubs537);
  var oldValue537;
  var renderCond537 = function() {
    var value869 = validator.get();
    if(oldValue537 === value869) return;
    oldValue537 = value869;
    var subs__ = condSubs537;
    subs__.unsubscribe();
    node1889.empty();
    if(value869) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after159(result__) {
        var tmp13161 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp13162 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node1890 = $("<input>");
        
        var ref1433 = inputType;
        if(ref1433.get() !== null) {
          node1890.attr('type', ref1433.get());
          subs__.addSub(ref1433.addEventListener('change', function(_, ref, val) {
            node1890.attr('type', val);
          }));
          
        }
        subs__.addSub(ref1433.rebind());
        
        var ref1434 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref1434.get() !== null) {
          node1890.attr('class', ref1434.get());
          subs__.addSub(ref1434.addEventListener('change', function(_, ref, val) {
            node1890.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node1890.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node1890.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node1890.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref1434.rebind());
        
        var ref1435 = placeholder;
        if(ref1435.get() !== null) {
          node1890.attr('placeholder', ref1435.get());
          subs__.addSub(ref1435.addEventListener('change', function(_, ref, val) {
            node1890.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref1435.rebind());
        
        var ref1436 = temp;
        node1890.val(""+ref1436.get());
        var ignore279 = false;
        subs__.addSub(ref1436.addEventListener('change', function(_, ref, val) {
          if(ignore279) return;
          node1890.val(""+val);
        }));
        subs__.addSub(ref1436.rebind());
        
        subs__.addSub(mobl.domBind(node1890, 'keyup change', function() {
          ignore279 = true;
          temp.set(mobl.stringTomobl__String(node1890.val()));
          ignore279 = false;
        }));
        
        
        var val640 = onchange.get();
        if(val640 !== null) {
          subs__.addSub(mobl.domBind(node1890, 'change', val640));
        }
        
        var val641 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after156(result__) {
                          var tmp13163 = result__;
                          function after157(result__) {
                            var tmp13164 = result__;
                            var result__ = tmp13164;
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
                          var result__ = validator.get()(temp.get(), after157);if(result__ !== undefined) after157(result__);
                        }
                        var result__ = onkeyup.get()(event, after156);if(result__ !== undefined) after156(result__);
                      } else {
                        {
                          function after158(result__) {
                            var tmp13164 = result__;
                            var result__ = tmp13164;
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
                          var result__ = validator.get()(temp.get(), after158);if(result__ !== undefined) after158(result__);
                        }
                      }
                    };
        if(val641 !== null) {
          subs__.addSub(mobl.domBind(node1890, 'keyup', val641));
        }
        
        var val642 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val642 !== null) {
          subs__.addSub(mobl.domBind(node1890, 'blur', val642));
        }
        
        node1889.append(node1890);
        var nodes14158 = $("<span>");
        node1889.append(nodes14158);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root16138 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root16138); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes14158;
          nodes14158 = node.contents();
          oldNodes.replaceWith(nodes14158);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after159);if(result__ !== undefined) after159(result__);
    } else {
      
      var node1891 = $("<input>");
      
      var ref1437 = inputType;
      if(ref1437.get() !== null) {
        node1891.attr('type', ref1437.get());
        subs__.addSub(ref1437.addEventListener('change', function(_, ref, val) {
          node1891.attr('type', val);
        }));
        
      }
      subs__.addSub(ref1437.rebind());
      
      var ref1438 = style;
      if(ref1438.get() !== null) {
        node1891.attr('class', ref1438.get());
        subs__.addSub(ref1438.addEventListener('change', function(_, ref, val) {
          node1891.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1438.rebind());
      
      var ref1439 = placeholder;
      if(ref1439.get() !== null) {
        node1891.attr('placeholder', ref1439.get());
        subs__.addSub(ref1439.addEventListener('change', function(_, ref, val) {
          node1891.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1439.rebind());
      
      var ref1440 = s;
      node1891.val(""+ref1440.get());
      var ignore280 = false;
      subs__.addSub(ref1440.addEventListener('change', function(_, ref, val) {
        if(ignore280) return;
        node1891.val(""+val);
      }));
      subs__.addSub(ref1440.rebind());
      
      subs__.addSub(mobl.domBind(node1891, 'keyup change', function() {
        ignore280 = true;
        s.set(mobl.stringTomobl__String(node1891.val()));
        ignore280 = false;
      }));
      
      
      var val643 = onchange.get();
      if(val643 !== null) {
        subs__.addSub(mobl.domBind(node1891, 'change', val643));
      }
      
      var val644 = onkeyup.get();
      if(val644 !== null) {
        subs__.addSub(mobl.domBind(node1891, 'keyup', val644));
      }
      
      var val645 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val645 !== null) {
        subs__.addSub(mobl.domBind(node1891, 'blur', val645));
      }
      
      node1889.append(node1891);
      
      
    }
  };
  renderCond537();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond537();
  }));
  
  callback(root16136); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root16139 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes14159 = $("<span>");
  root16139.append(nodes14159);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root16140 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root16140); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes14159;
    nodes14159 = node.contents();
    oldNodes.replaceWith(nodes14159);
  }));
  callback(root16139); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root16141 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes14160 = $("<span>");
  root16141.append(nodes14160);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root16142 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root16142); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes14160;
    nodes14160 = node.contents();
    oldNodes.replaceWith(nodes14160);
  }));
  callback(root16141); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root16143 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1892 = $("<span>");
  root16143.append(node1892);
  var condSubs538 = new mobl.CompSubscription();
  subs__.addSub(condSubs538);
  var oldValue538;
  var renderCond538 = function() {
    var value870 = label.get();
    if(oldValue538 === value870) return;
    oldValue538 = value870;
    var subs__ = condSubs538;
    subs__.unsubscribe();
    node1892.empty();
    if(value870) {
      var nodes14161 = $("<span>");
      node1892.append(nodes14161);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root16144 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16144); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14161;
        nodes14161 = node.contents();
        oldNodes.replaceWith(nodes14161);
      }));
      
      
    } else {
      
    }
  };
  renderCond538();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond538();
  }));
  
  
  var node1893 = $("<input>");
  node1893.attr('type', "range");
  
  var ref1441 = n;
  node1893.val(""+ref1441.get());
  var ignore281 = false;
  subs__.addSub(ref1441.addEventListener('change', function(_, ref, val) {
    if(ignore281) return;
    node1893.val(""+val);
  }));
  subs__.addSub(ref1441.rebind());
  
  subs__.addSub(mobl.domBind(node1893, 'keyup change', function() {
    ignore281 = true;
    n.set(mobl.stringTomobl__Num(node1893.val()));
    ignore281 = false;
  }));
  
  
  var ref1442 = min;
  if(ref1442.get() !== null) {
    node1893.attr('min', ref1442.get());
    subs__.addSub(ref1442.addEventListener('change', function(_, ref, val) {
      node1893.attr('min', val);
    }));
    
  }
  subs__.addSub(ref1442.rebind());
  
  var ref1443 = max;
  if(ref1443.get() !== null) {
    node1893.attr('max', ref1443.get());
    subs__.addSub(ref1443.addEventListener('change', function(_, ref, val) {
      node1893.attr('max', val);
    }));
    
  }
  subs__.addSub(ref1443.rebind());
  
  var ref1444 = step;
  if(ref1444.get() !== null) {
    node1893.attr('step', ref1444.get());
    subs__.addSub(ref1444.addEventListener('change', function(_, ref, val) {
      node1893.attr('step', val);
    }));
    
  }
  subs__.addSub(ref1444.rebind());
  node1893.attr('style', "width: 99%;");
  
  var val646 = onchange.get();
  if(val646 !== null) {
    subs__.addSub(mobl.domBind(node1893, 'change', val646));
  }
  
  var val647 = onkeyup.get();
  if(val647 !== null) {
    subs__.addSub(mobl.domBind(node1893, 'keyup', val647));
  }
  
  var ref1445 = placeholder;
  if(ref1445.get() !== null) {
    node1893.attr('placeholder', ref1445.get());
    subs__.addSub(ref1445.addEventListener('change', function(_, ref, val) {
      node1893.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1445.rebind());
  
  root16143.append(node1893);
  callback(root16143); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root16145 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after160(result__) {
      var tmp13165 = result__;
      var result__ = tmp13165;
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
    var result__ = validator.get()(n2, after160);if(result__ !== undefined) after160(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes14162 = $("<span>");
  root16145.append(nodes14162);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root16146 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root16146); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes14162;
    nodes14162 = node.contents();
    oldNodes.replaceWith(nodes14162);
  }));
  callback(root16145); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root16147 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1894 = $("<span>");
  root16147.append(node1894);
  var condSubs539 = new mobl.CompSubscription();
  subs__.addSub(condSubs539);
  var oldValue539;
  var renderCond539 = function() {
    var value871 = label.get();
    if(oldValue539 === value871) return;
    oldValue539 = value871;
    var subs__ = condSubs539;
    subs__.unsubscribe();
    node1894.empty();
    if(value871) {
      
      var node1895 = $("<span>");
      node1895.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref1449 = label;
      node1895.text(""+ref1449.get());
      var ignore283 = false;
      subs__.addSub(ref1449.addEventListener('change', function(_, ref, val) {
        if(ignore283) return;
        node1895.text(""+val);
      }));
      subs__.addSub(ref1449.rebind());
      
      
      node1894.append(node1895);
      
      var node1896 = $("<span>");
      node1896.attr('style', "float: left");
      
      
      var node1897 = $("<input>");
      node1897.attr('type', "password");
      
      var ref1446 = style;
      if(ref1446.get() !== null) {
        node1897.attr('class', ref1446.get());
        subs__.addSub(ref1446.addEventListener('change', function(_, ref, val) {
          node1897.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1446.rebind());
      
      var ref1447 = placeholder;
      if(ref1447.get() !== null) {
        node1897.attr('placeholder', ref1447.get());
        subs__.addSub(ref1447.addEventListener('change', function(_, ref, val) {
          node1897.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1447.rebind());
      
      var ref1448 = s;
      node1897.val(""+ref1448.get());
      var ignore282 = false;
      subs__.addSub(ref1448.addEventListener('change', function(_, ref, val) {
        if(ignore282) return;
        node1897.val(""+val);
      }));
      subs__.addSub(ref1448.rebind());
      
      subs__.addSub(mobl.domBind(node1897, 'keyup change', function() {
        ignore282 = true;
        s.set(mobl.stringTomobl__String(node1897.val()));
        ignore282 = false;
      }));
      
      
      var val648 = onchange.get();
      if(val648 !== null) {
        subs__.addSub(mobl.domBind(node1897, 'change', val648));
      }
      
      var val649 = onkeyup.get();
      if(val649 !== null) {
        subs__.addSub(mobl.domBind(node1897, 'keyup', val649));
      }
      
      var val650 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val650 !== null) {
        subs__.addSub(mobl.domBind(node1897, 'blur', val650));
      }
      
      node1896.append(node1897);
      node1894.append(node1896);
      
      
      
      
    } else {
      
      var node1898 = $("<input>");
      node1898.attr('type', "password");
      
      var ref1450 = style;
      if(ref1450.get() !== null) {
        node1898.attr('class', ref1450.get());
        subs__.addSub(ref1450.addEventListener('change', function(_, ref, val) {
          node1898.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1450.rebind());
      
      var ref1451 = placeholder;
      if(ref1451.get() !== null) {
        node1898.attr('placeholder', ref1451.get());
        subs__.addSub(ref1451.addEventListener('change', function(_, ref, val) {
          node1898.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1451.rebind());
      
      var ref1452 = s;
      node1898.val(""+ref1452.get());
      var ignore284 = false;
      subs__.addSub(ref1452.addEventListener('change', function(_, ref, val) {
        if(ignore284) return;
        node1898.val(""+val);
      }));
      subs__.addSub(ref1452.rebind());
      
      subs__.addSub(mobl.domBind(node1898, 'keyup change', function() {
        ignore284 = true;
        s.set(mobl.stringTomobl__String(node1898.val()));
        ignore284 = false;
      }));
      
      
      var val651 = onchange.get();
      if(val651 !== null) {
        subs__.addSub(mobl.domBind(node1898, 'change', val651));
      }
      
      var val652 = onkeyup.get();
      if(val652 !== null) {
        subs__.addSub(mobl.domBind(node1898, 'keyup', val652));
      }
      
      var val653 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val653 !== null) {
        subs__.addSub(mobl.domBind(node1898, 'blur', val653));
      }
      
      node1894.append(node1898);
      
      
    }
  };
  renderCond539();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond539();
  }));
  
  callback(root16147); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root16148 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref1457 = style;
  if(ref1457.get() !== null) {
    sel.attr('class', ref1457.get());
    subs__.addSub(ref1457.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1457.rebind());
  
  var val654 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after161(result__) {
                    var tmp13167 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after161);if(result__ !== undefined) after161(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val654 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val654));
  }
  
  
  var node1899 = mobl.loadingSpan();
  sel.append(node1899);
  var list185;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList185 = function() {
    var subs__ = listSubs__;
    list185 = options.get();
    list185.list(function(results185) {
      node1899.empty();
      for(var i12476 = 0; i12476 < results185.length; i12476++) {
        (function() {
          var iternode185 = $("<span>");
          node1899.append(iternode185);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results185), i12476), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results185), i12476), "_2");
          
          var node1900 = $("<option>");
          
          var ref1453 = optionDescription;
          node1900.text(""+ref1453.get());
          var ignore285 = false;
          subs__.addSub(ref1453.addEventListener('change', function(_, ref, val) {
            if(ignore285) return;
            node1900.text(""+val);
          }));
          subs__.addSub(ref1453.rebind());
          
          
          var ref1454 = optionStyle;
          if(ref1454.get() !== null) {
            node1900.attr('class', ref1454.get());
            subs__.addSub(ref1454.addEventListener('change', function(_, ref, val) {
              node1900.attr('class', val);
            }));
            
          }
          subs__.addSub(ref1454.rebind());
          
          var ref1455 = optionValue;
          if(ref1455.get() !== null) {
            node1900.attr('value', ref1455.get());
            subs__.addSub(ref1455.addEventListener('change', function(_, ref, val) {
              node1900.attr('value', val);
            }));
            
          }
          subs__.addSub(ref1455.rebind());
          
          var ref1456 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref1456.get() !== null) {
            node1900.attr('selected', ref1456.get());
            subs__.addSub(ref1456.addEventListener('change', function(_, ref, val) {
              node1900.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node1900.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node1900.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref1456.rebind());
          
          iternode185.append(node1900);
          
          var oldNodes = iternode185;
          iternode185 = iternode185.contents();
          oldNodes.replaceWith(iternode185);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list185.addEventListener('change', function() { listSubs__.unsubscribe(); renderList185(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList185(true); }));
    });
  };
  renderList185();
  
  root16148.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root16148); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root16149 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes14163 = $("<span>");
    root16149.append(nodes14163);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root16150 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1901 = mobl.loadingSpan();
      root16150.append(node1901);
      var list186;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList186 = function() {
        var subs__ = listSubs__;
        list186 = tabs.get();
        list186.list(function(results186) {
          node1901.empty();
          for(var i12477 = 0; i12477 < results186.length; i12477++) {
            (function() {
              var iternode186 = $("<span>");
              node1901.append(iternode186);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results186), i12477), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results186), i12477), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results186), i12477), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp13123 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp13123.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp13123.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp13123.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp13123.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp13122 = mobl.ref(result__);
              
              var nodes14164 = $("<span>");
              iternode186.append(nodes14164);
              subs__.addSub((mobl.span)(tmp13123, mobl.ref(null), tmp13122, mobl.ref(null), function(_, callback) {
                var root16151 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes14165 = $("<span>");
                root16151.append(nodes14165);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root16152 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root16152); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes14165;
                  nodes14165 = node.contents();
                  oldNodes.replaceWith(nodes14165);
                }));
                callback(root16151); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes14164;
                nodes14164 = node.contents();
                oldNodes.replaceWith(nodes14164);
              }));
              
              var oldNodes = iternode186;
              iternode186 = iternode186.contents();
              oldNodes.replaceWith(iternode186);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list186.addEventListener('change', function() { listSubs__.unsubscribe(); renderList186(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList186(true); }));
        });
      };
      renderList186();
      
      callback(root16150); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14163;
      nodes14163 = node.contents();
      oldNodes.replaceWith(nodes14163);
    }));
    
    var node1902 = mobl.loadingSpan();
    root16149.append(node1902);
    var list187;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList187 = function() {
      var subs__ = listSubs__;
      list187 = tabs.get();
      list187.list(function(results187) {
        node1902.empty();
        for(var i12478 = 0; i12478 < results187.length; i12478++) {
          (function() {
            var iternode187 = $("<span>");
            node1902.append(iternode187);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results187), i12478), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results187), i12478), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results187), i12478), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp13124 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp13124.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp13124.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp13124.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp13124.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes14166 = $("<span>");
            iternode187.append(nodes14166);
            subs__.addSub((mobl.block)(tmp13124, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root16153 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes14167 = $("<span>");
              root16153.append(nodes14167);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root16154 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes14168 = $("<span>");
                root16154.append(nodes14168);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl552();
                }));
                
                function renderControl552() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root16155 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root16155); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes14168;
                    nodes14168 = node.contents();
                    oldNodes.replaceWith(nodes14168);
                  }));
                }
                renderControl552();
                callback(root16154); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes14167;
                nodes14167 = node.contents();
                oldNodes.replaceWith(nodes14167);
              }));
              callback(root16153); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes14166;
              nodes14166 = node.contents();
              oldNodes.replaceWith(nodes14166);
            }));
            
            var oldNodes = iternode187;
            iternode187 = iternode187.contents();
            oldNodes.replaceWith(iternode187);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list187.addEventListener('change', function() { listSubs__.unsubscribe(); renderList187(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList187(true); }));
      });
    };
    renderList187();
    
    callback(root16149); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes14163 = $("<span>");
      root16149.append(nodes14163);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16150 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1901 = mobl.loadingSpan();
        root16150.append(node1901);
        var list186;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList186 = function() {
          var subs__ = listSubs__;
          list186 = tabs.get();
          list186.list(function(results186) {
            node1901.empty();
            for(var i12477 = 0; i12477 < results186.length; i12477++) {
              (function() {
                var iternode186 = $("<span>");
                node1901.append(iternode186);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results186), i12477), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results186), i12477), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results186), i12477), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp13123 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp13123.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp13123.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp13123.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp13123.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp13122 = mobl.ref(result__);
                
                var nodes14164 = $("<span>");
                iternode186.append(nodes14164);
                subs__.addSub((mobl.span)(tmp13123, mobl.ref(null), tmp13122, mobl.ref(null), function(_, callback) {
                  var root16151 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes14165 = $("<span>");
                  root16151.append(nodes14165);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root16152 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root16152); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes14165;
                    nodes14165 = node.contents();
                    oldNodes.replaceWith(nodes14165);
                  }));
                  callback(root16151); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes14164;
                  nodes14164 = node.contents();
                  oldNodes.replaceWith(nodes14164);
                }));
                
                var oldNodes = iternode186;
                iternode186 = iternode186.contents();
                oldNodes.replaceWith(iternode186);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list186.addEventListener('change', function() { listSubs__.unsubscribe(); renderList186(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList186(true); }));
          });
        };
        renderList186();
        
        callback(root16150); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes14163;
        nodes14163 = node.contents();
        oldNodes.replaceWith(nodes14163);
      }));
      
      var node1902 = mobl.loadingSpan();
      root16149.append(node1902);
      var list187;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList187 = function() {
        var subs__ = listSubs__;
        list187 = tabs.get();
        list187.list(function(results187) {
          node1902.empty();
          for(var i12478 = 0; i12478 < results187.length; i12478++) {
            (function() {
              var iternode187 = $("<span>");
              node1902.append(iternode187);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results187), i12478), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results187), i12478), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results187), i12478), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp13124 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp13124.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp13124.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp13124.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp13124.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes14166 = $("<span>");
              iternode187.append(nodes14166);
              subs__.addSub((mobl.block)(tmp13124, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root16153 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes14167 = $("<span>");
                root16153.append(nodes14167);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root16154 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes14168 = $("<span>");
                  root16154.append(nodes14168);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl552();
                  }));
                  
                  function renderControl552() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root16155 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root16155); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes14168;
                      nodes14168 = node.contents();
                      oldNodes.replaceWith(nodes14168);
                    }));
                  }
                  renderControl552();
                  callback(root16154); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes14167;
                  nodes14167 = node.contents();
                  oldNodes.replaceWith(nodes14167);
                }));
                callback(root16153); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes14166;
                nodes14166 = node.contents();
                oldNodes.replaceWith(nodes14166);
              }));
              
              var oldNodes = iternode187;
              iternode187 = iternode187.contents();
              oldNodes.replaceWith(iternode187);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list187.addEventListener('change', function() { listSubs__.unsubscribe(); renderList187(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList187(true); }));
        });
      };
      renderList187();
      
      callback(root16149); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root16156 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1903 = $("<div>");
  
  var ref1461 = mobl.ref(ui.searchboxStyle);
  if(ref1461.get() !== null) {
    node1903.attr('class', ref1461.get());
    subs__.addSub(ref1461.addEventListener('change', function(_, ref, val) {
      node1903.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1461.rebind());
  
  
  var node1904 = $("<input>");
  node1904.attr('type', "search");
  
  var ref1458 = mobl.ref(ui.searchBoxInputStyle);
  if(ref1458.get() !== null) {
    node1904.attr('class', ref1458.get());
    subs__.addSub(ref1458.addEventListener('change', function(_, ref, val) {
      node1904.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1458.rebind());
  
  var ref1459 = placeholder;
  if(ref1459.get() !== null) {
    node1904.attr('placeholder', ref1459.get());
    subs__.addSub(ref1459.addEventListener('change', function(_, ref, val) {
      node1904.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1459.rebind());
  
  var ref1460 = s;
  node1904.val(""+ref1460.get());
  var ignore286 = false;
  subs__.addSub(ref1460.addEventListener('change', function(_, ref, val) {
    if(ignore286) return;
    node1904.val(""+val);
  }));
  subs__.addSub(ref1460.rebind());
  
  subs__.addSub(mobl.domBind(node1904, 'keyup change', function() {
    ignore286 = true;
    s.set(mobl.stringTomobl__String(node1904.val()));
    ignore286 = false;
  }));
  
  
  var val655 = onsearch.get();
  if(val655 !== null) {
    subs__.addSub(mobl.domBind(node1904, 'change', val655));
  }
  
  var val656 = onkeyup.get();
  if(val656 !== null) {
    subs__.addSub(mobl.domBind(node1904, 'keyup', val656));
  }
  node1904.attr('autocorrect', false);
  node1904.attr('autocapitalize', false);
  node1904.attr('autocomplete', false);
  
  node1903.append(node1904);
  root16156.append(node1903);
  callback(root16156); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root16157 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref1462 = mobl.ref(ui.contextMenuStyle);
  if(ref1462.get() !== null) {
    menu.attr('class', ref1462.get());
    subs__.addSub(ref1462.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1462.rebind());
  
  var nodes14169 = $("<span>");
  menu.append(nodes14169);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl553();
  }));
  
  function renderControl553() {
    subs__.addSub((elements)(function(elements, callback) {
      var root16158 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16158); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14169;
      nodes14169 = node.contents();
      oldNodes.replaceWith(nodes14169);
    }));
  }
  renderControl553();
  root16157.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val657 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp13170 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val657 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val657));
  }
  
  root16157.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root16157); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root16159 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp13154 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp13154.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node1905 = $("<span>");
  root16159.append(node1905);
  var condSubs540 = new mobl.CompSubscription();
  subs__.addSub(condSubs540);
  var oldValue540;
  var renderCond540 = function() {
    var value872 = tmp13154.get();
    if(oldValue540 === value872) return;
    oldValue540 = value872;
    var subs__ = condSubs540;
    subs__.unsubscribe();
    node1905.empty();
    if(value872) {
      items.get().one(function(result__) {
        var tmp13171 = result__;
        var current = mobl.ref(result__);
        
        var node1906 = $("<div>");
        node1906.attr('width', "100%");
        
        
        var node1907 = $("<div>");
        node1907.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes14172 = $("<span>");
        node1907.append(nodes14172);
        subs__.addSub((ui.group)(function(_, callback) {
          var root16162 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node1910 = mobl.loadingSpan();
          root16162.append(node1910);
          var list188;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList188 = function() {
            var subs__ = listSubs__;
            list188 = items.get();
            list188.list(function(results188) {
              node1910.empty();
              for(var i12479 = 0; i12479 < results188.length; i12479++) {
                (function() {
                  var iternode188 = $("<span>");
                  node1910.append(iternode188);
                  var it;
                  it = mobl.ref(mobl.ref(results188), i12479);
                  var result__ = it.get() == current.get();
                  var tmp13130 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp13130.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp13130.set(it.get() == current.get());
                  }));
                  
                  
                  var node1911 = $("<span>");
                  iternode188.append(node1911);
                  var condSubs542 = new mobl.CompSubscription();
                  subs__.addSub(condSubs542);
                  var oldValue542;
                  var renderCond542 = function() {
                    var value874 = tmp13130.get();
                    if(oldValue542 === value874) return;
                    oldValue542 = value874;
                    var subs__ = condSubs542;
                    subs__.unsubscribe();
                    node1911.empty();
                    if(value874) {
                      var nodes14173 = $("<span>");
                      node1911.append(nodes14173);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root16163 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes14174 = $("<span>");
                        root16163.append(nodes14174);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl555();
                        }));
                        
                        function renderControl555() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root16164 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root16164); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes14174;
                            nodes14174 = node.contents();
                            oldNodes.replaceWith(nodes14174);
                          }));
                        }
                        renderControl555();
                        callback(root16163); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes14173;
                        nodes14173 = node.contents();
                        oldNodes.replaceWith(nodes14173);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp13129 = mobl.ref(result__);
                      
                      var nodes14175 = $("<span>");
                      node1911.append(nodes14175);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13129, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root16165 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes14176 = $("<span>");
                        root16165.append(nodes14176);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl556();
                        }));
                        
                        function renderControl556() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root16166 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root16166); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes14176;
                            nodes14176 = node.contents();
                            oldNodes.replaceWith(nodes14176);
                          }));
                        }
                        renderControl556();
                        callback(root16165); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes14175;
                        nodes14175 = node.contents();
                        oldNodes.replaceWith(nodes14175);
                      }));
                      
                      
                    }
                  };
                  renderCond542();
                  subs__.addSub(tmp13130.addEventListener('change', function() {
                    renderCond542();
                  }));
                  
                  
                  var oldNodes = iternode188;
                  iternode188 = iternode188.contents();
                  oldNodes.replaceWith(iternode188);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list188.addEventListener('change', function() { listSubs__.unsubscribe(); renderList188(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList188(true); }));
            });
          };
          renderList188();
          
          callback(root16162); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes14172;
          nodes14172 = node.contents();
          oldNodes.replaceWith(nodes14172);
        }));
        node1906.append(node1907);
        
        var node1908 = $("<div>");
        node1908.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node1909 = $("<span>");
        node1908.append(node1909);
        var condSubs541 = new mobl.CompSubscription();
        subs__.addSub(condSubs541);
        var oldValue541;
        var renderCond541 = function() {
          var value873 = current.get();
          if(oldValue541 === value873) return;
          oldValue541 = value873;
          var subs__ = condSubs541;
          subs__.unsubscribe();
          node1909.empty();
          if(value873) {
            var nodes14170 = $("<span>");
            node1909.append(nodes14170);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl554();
            }));
            
            function renderControl554() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root16160 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root16160); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes14170;
                nodes14170 = node.contents();
                oldNodes.replaceWith(nodes14170);
              }));
            }
            renderControl554();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp13131 = mobl.ref(result__);
            
            var nodes14171 = $("<span>");
            node1909.append(nodes14171);
            subs__.addSub((mobl.label)(tmp13131, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root16161 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root16161); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes14171;
              nodes14171 = node.contents();
              oldNodes.replaceWith(nodes14171);
            }));
            
            
          }
        };
        renderCond541();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond541();
        }));
        
        node1906.append(node1908);
        node1905.append(node1906);
        
        
        
        
        
        
      });
    } else {
      var nodes14177 = $("<span>");
      node1905.append(nodes14177);
      subs__.addSub((ui.group)(function(_, callback) {
        var root16167 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1912 = mobl.loadingSpan();
        root16167.append(node1912);
        var list189;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList189 = function() {
          var subs__ = listSubs__;
          list189 = items.get();
          list189.list(function(results189) {
            node1912.empty();
            for(var i12480 = 0; i12480 < results189.length; i12480++) {
              (function() {
                var iternode189 = $("<span>");
                node1912.append(iternode189);
                var it;
                it = mobl.ref(mobl.ref(results189), i12480);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp13172 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp13125 = mobl.ref(result__);
                
                var nodes14178 = $("<span>");
                iternode189.append(nodes14178);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13125, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root16168 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes14179 = $("<span>");
                  root16168.append(nodes14179);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl557();
                  }));
                  
                  function renderControl557() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root16169 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root16169); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes14179;
                      nodes14179 = node.contents();
                      oldNodes.replaceWith(nodes14179);
                    }));
                  }
                  renderControl557();
                  callback(root16168); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes14178;
                  nodes14178 = node.contents();
                  oldNodes.replaceWith(nodes14178);
                }));
                
                var oldNodes = iternode189;
                iternode189 = iternode189.contents();
                oldNodes.replaceWith(iternode189);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list189.addEventListener('change', function() { listSubs__.unsubscribe(); renderList189(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList189(true); }));
          });
        };
        renderList189();
        
        callback(root16167); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes14177;
        nodes14177 = node.contents();
        oldNodes.replaceWith(nodes14177);
      }));
      
      
    }
  };
  renderCond540();
  subs__.addSub(tmp13154.addEventListener('change', function() {
    renderCond540();
  }));
  
  callback(root16159); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root16170 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp13128 = mobl.ref(result__);
  
  var nodes14180 = $("<span>");
  root16170.append(nodes14180);
  subs__.addSub((ui.header)(tmp13128, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root16171 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp13127 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp13126 = mobl.ref(result__);
    
    var nodes14181 = $("<span>");
    root16171.append(nodes14181);
    subs__.addSub((ui.backButton)(tmp13126, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp13127, function(_, callback) {
      var root16172 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16172); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14181;
      nodes14181 = node.contents();
      oldNodes.replaceWith(nodes14181);
    }));
    callback(root16171); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14180;
    nodes14180 = node.contents();
    oldNodes.replaceWith(nodes14180);
  }));
  var nodes14182 = $("<span>");
  root16170.append(nodes14182);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl558();
  }));
  
  function renderControl558() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root16173 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16173); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14182;
      nodes14182 = node.contents();
      oldNodes.replaceWith(nodes14182);
    }));
  }
  renderControl558();
  callback(root16170); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root16174 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes14183 = $("<span>");
  root16174.append(nodes14183);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16175 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1913 = mobl.loadingSpan();
    root16175.append(node1913);
    var list190;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList190 = function() {
      var subs__ = listSubs__;
      list190 = coll.get();
      list190.list(function(results190) {
        node1913.empty();
        for(var i12481 = 0; i12481 < results190.length; i12481++) {
          (function() {
            var iternode190 = $("<span>");
            node1913.append(iternode190);
            var it;
            it = mobl.ref(mobl.ref(results190), i12481);
            var result__ = it.get() == selected.get();
            var tmp13133 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp13133.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp13133.set(it.get() == selected.get());
            }));
            
            
            var node1914 = $("<span>");
            iternode190.append(node1914);
            var condSubs543 = new mobl.CompSubscription();
            subs__.addSub(condSubs543);
            var oldValue543;
            var renderCond543 = function() {
              var value875 = tmp13133.get();
              if(oldValue543 === value875) return;
              oldValue543 = value875;
              var subs__ = condSubs543;
              subs__.unsubscribe();
              node1914.empty();
              if(value875) {
                var nodes14184 = $("<span>");
                node1914.append(nodes14184);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root16176 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes14185 = $("<span>");
                  root16176.append(nodes14185);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl559();
                  }));
                  
                  function renderControl559() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root16177 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root16177); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes14185;
                      nodes14185 = node.contents();
                      oldNodes.replaceWith(nodes14185);
                    }));
                  }
                  renderControl559();
                  callback(root16176); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes14184;
                  nodes14184 = node.contents();
                  oldNodes.replaceWith(nodes14184);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp13132 = mobl.ref(result__);
                
                var nodes14186 = $("<span>");
                node1914.append(nodes14186);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13132, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root16178 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes14187 = $("<span>");
                  root16178.append(nodes14187);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl560();
                  }));
                  
                  function renderControl560() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root16179 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root16179); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes14187;
                      nodes14187 = node.contents();
                      oldNodes.replaceWith(nodes14187);
                    }));
                  }
                  renderControl560();
                  callback(root16178); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes14186;
                  nodes14186 = node.contents();
                  oldNodes.replaceWith(nodes14186);
                }));
                
                
              }
            };
            renderCond543();
            subs__.addSub(tmp13133.addEventListener('change', function() {
              renderCond543();
            }));
            
            
            var oldNodes = iternode190;
            iternode190 = iternode190.contents();
            oldNodes.replaceWith(iternode190);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list190.addEventListener('change', function() { listSubs__.unsubscribe(); renderList190(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList190(true); }));
      });
    };
    renderList190();
    
    callback(root16175); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14183;
    nodes14183 = node.contents();
    oldNodes.replaceWith(nodes14183);
  }));
  callback(root16174); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root16180 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp13173 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp13134 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp13134.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp13134.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp13134.set(coll.get().limit(n.get()));
    }));
    
    
    var node1915 = mobl.loadingSpan();
    root16180.append(node1915);
    var list191;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList191 = function() {
      var subs__ = listSubs__;
      list191 = tmp13134.get();
      list191.list(function(results191) {
        node1915.empty();
        for(var i12482 = 0; i12482 < results191.length; i12482++) {
          (function() {
            var iternode191 = $("<span>");
            node1915.append(iternode191);
            var it;
            it = mobl.ref(mobl.ref(results191), i12482);
            var nodes14188 = $("<span>");
            iternode191.append(nodes14188);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl561();
            }));
            
            function renderControl561() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root16181 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root16181); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes14188;
                nodes14188 = node.contents();
                oldNodes.replaceWith(nodes14188);
              }));
            }
            renderControl561();
            
            var oldNodes = iternode191;
            iternode191 = iternode191.contents();
            oldNodes.replaceWith(iternode191);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list191.addEventListener('change', function() { listSubs__.unsubscribe(); renderList191(true); }));
        subs__.addSub(tmp13134.addEventListener('change', function() { listSubs__.unsubscribe(); renderList191(true); }));
      });
    };
    renderList191();
    
    var result__ = n.get() < total.get();
    var tmp13136 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp13136.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp13136.set(n.get() < total.get());
    }));
    
    
    var node1916 = $("<span>");
    root16180.append(node1916);
    var condSubs544 = new mobl.CompSubscription();
    subs__.addSub(condSubs544);
    var oldValue544;
    var renderCond544 = function() {
      var value876 = tmp13136.get();
      if(oldValue544 === value876) return;
      oldValue544 = value876;
      var subs__ = condSubs544;
      subs__.unsubscribe();
      node1916.empty();
      if(value876) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp13135 = mobl.ref(result__);
        
        var nodes14189 = $("<span>");
        node1916.append(nodes14189);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp13135, mobl.ref(null), function(_, callback) {
          var root16182 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes14190 = $("<span>");
          root16182.append(nodes14190);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root16183 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root16183); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes14190;
            nodes14190 = node.contents();
            oldNodes.replaceWith(nodes14190);
          }));
          callback(root16182); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes14189;
          nodes14189 = node.contents();
          oldNodes.replaceWith(nodes14189);
        }));
        
        
      } else {
        
      }
    };
    renderCond544();
    subs__.addSub(tmp13136.addEventListener('change', function() {
      renderCond544();
    }));
    
    callback(root16180); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root16184 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes14191 = $("<span>");
  root16184.append(nodes14191);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16185 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1917 = mobl.loadingSpan();
    root16185.append(node1917);
    var list192;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList192 = function() {
      var subs__ = listSubs__;
      list192 = items.get();
      list192.list(function(results192) {
        node1917.empty();
        for(var i12483 = 0; i12483 < results192.length; i12483++) {
          (function() {
            var iternode192 = $("<span>");
            node1917.append(iternode192);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results192), i12483), "_1");it = mobl.ref(mobl.ref(mobl.ref(results192), i12483), "_2");
            var nodes14192 = $("<span>");
            iternode192.append(nodes14192);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root16186 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes14193 = $("<span>");
              root16186.append(nodes14193);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root16187 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root16187); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes14193;
                nodes14193 = node.contents();
                oldNodes.replaceWith(nodes14193);
              }));
              callback(root16186); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes14192;
              nodes14192 = node.contents();
              oldNodes.replaceWith(nodes14192);
            }));
            
            var oldNodes = iternode192;
            iternode192 = iternode192.contents();
            oldNodes.replaceWith(iternode192);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list192.addEventListener('change', function() { listSubs__.unsubscribe(); renderList192(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList192(true); }));
      });
    };
    renderList192();
    
    callback(root16185); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14191;
    nodes14191 = node.contents();
    oldNodes.replaceWith(nodes14191);
  }));
  callback(root16184); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root16188 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll883) {
    coll883 = coll883.reverse();
    function processOne385() {
      var it;
      it = coll883.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll883.length > 0) processOne385(); else rest385();
      
    }
    function rest385() {
      var nodes14194 = $("<span>");
      root16188.append(nodes14194);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root16189 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp13137 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp13138 = mobl.ref(result__);
        
        var nodes14195 = $("<span>");
        root16189.append(nodes14195);
        subs__.addSub((ui.backButton)(tmp13138, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp13137, function(_, callback) {
          var root16190 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root16190); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes14195;
          nodes14195 = node.contents();
          oldNodes.replaceWith(nodes14195);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll882) {
                           coll882 = coll882.reverse();
                           function processOne384() {
                             var checked;var it;
                             var tmp13175 = coll882.pop();
                             checked = tmp13175._1;it = tmp13175._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll882.length > 0) processOne384(); else rest384();
                               
                             } else {
                               {
                                 
                                 if(coll882.length > 0) processOne384(); else rest384();
                                 
                               }
                             }
                           }
                           function rest384() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll882.length > 0) processOne384(); else rest384();
                         });
                         
                       };
        var tmp13139 = mobl.ref(result__);
        
        var nodes14196 = $("<span>");
        root16189.append(nodes14196);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp13139, function(_, callback) {
          var root16191 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root16191); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes14196;
          nodes14196 = node.contents();
          oldNodes.replaceWith(nodes14196);
        }));
        callback(root16189); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes14194;
        nodes14194 = node.contents();
        oldNodes.replaceWith(nodes14194);
      }));
      var nodes14197 = $("<span>");
      root16188.append(nodes14197);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root16192 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16192); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14197;
        nodes14197 = node.contents();
        oldNodes.replaceWith(nodes14197);
      }));
      callback(root16188); return subs__;
      
      
    }
    if(coll883.length > 0) processOne385(); else rest385();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root16193 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes14198 = $("<span>");
  root16193.append(nodes14198);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root16194 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root16194); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes14198;
    nodes14198 = node.contents();
    oldNodes.replaceWith(nodes14198);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp13140 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp13140.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp13140.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp13140.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp13140.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp13140.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes14199 = $("<span>");
  root16193.append(nodes14199);
  subs__.addSub((ui.masterDetail)(tmp13140, masterItem, detailItem, function(_, callback) {
    var root16195 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root16195); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes14199;
    nodes14199 = node.contents();
    oldNodes.replaceWith(nodes14199);
  }));
  callback(root16193); return subs__;
  
  
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
  var root16196 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes14200 = $("<span>");
  root16196.append(nodes14200);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root16197 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1918 = mobl.loadingSpan();
    root16197.append(node1918);
    var list193;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList193 = function() {
      var subs__ = listSubs__;
      list193 = sections.get();
      list193.list(function(results193) {
        node1918.empty();
        for(var i12484 = 0; i12484 < results193.length; i12484++) {
          (function() {
            var iternode193 = $("<span>");
            node1918.append(iternode193);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results193), i12484), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results193), i12484), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp13142 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp13142.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp13142.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp13142.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp13142.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp13141 = mobl.ref(result__);
            
            var nodes14201 = $("<span>");
            iternode193.append(nodes14201);
            subs__.addSub((mobl.span)(tmp13142, mobl.ref(null), tmp13141, mobl.ref(null), function(_, callback) {
              var root16198 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes14202 = $("<span>");
              root16198.append(nodes14202);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root16199 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root16199); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes14202;
                nodes14202 = node.contents();
                oldNodes.replaceWith(nodes14202);
              }));
              callback(root16198); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes14201;
              nodes14201 = node.contents();
              oldNodes.replaceWith(nodes14201);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp13143 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp13143.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp13143.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp13143.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp13143.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes14203 = $("<span>");
            iternode193.append(nodes14203);
            subs__.addSub((mobl.block)(tmp13143, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root16200 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes14204 = $("<span>");
              root16200.append(nodes14204);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl562();
              }));
              
              function renderControl562() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root16201 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root16201); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes14204;
                  nodes14204 = node.contents();
                  oldNodes.replaceWith(nodes14204);
                }));
              }
              renderControl562();
              callback(root16200); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes14203;
              nodes14203 = node.contents();
              oldNodes.replaceWith(nodes14203);
            }));
            
            var oldNodes = iternode193;
            iternode193 = iternode193.contents();
            oldNodes.replaceWith(iternode193);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list193.addEventListener('change', function() { listSubs__.unsubscribe(); renderList193(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList193(true); }));
      });
    };
    renderList193();
    
    callback(root16197); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14200;
    nodes14200 = node.contents();
    oldNodes.replaceWith(nodes14200);
  }));
  callback(root16196); return subs__;
  
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
  var root16202 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1919 = $("<table>");
  
  var ref1463 = style;
  if(ref1463.get() !== null) {
    node1919.attr('class', ref1463.get());
    subs__.addSub(ref1463.addEventListener('change', function(_, ref, val) {
      node1919.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1463.rebind());
  
  var nodes14205 = $("<span>");
  node1919.append(nodes14205);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl563();
  }));
  
  function renderControl563() {
    subs__.addSub((elements)(function(elements, callback) {
      var root16203 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16203); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14205;
      nodes14205 = node.contents();
      oldNodes.replaceWith(nodes14205);
    }));
  }
  renderControl563();
  root16202.append(node1919);
  callback(root16202); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root16204 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1920 = $("<tr>");
  
  var ref1464 = style;
  if(ref1464.get() !== null) {
    node1920.attr('class', ref1464.get());
    subs__.addSub(ref1464.addEventListener('change', function(_, ref, val) {
      node1920.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1464.rebind());
  
  var nodes14206 = $("<span>");
  node1920.append(nodes14206);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl564();
  }));
  
  function renderControl564() {
    subs__.addSub((elements)(function(elements, callback) {
      var root16205 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16205); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14206;
      nodes14206 = node.contents();
      oldNodes.replaceWith(nodes14206);
    }));
  }
  renderControl564();
  root16204.append(node1920);
  callback(root16204); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root16206 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1921 = $("<td>");
  
  var ref1465 = width;
  if(ref1465.get() !== null) {
    node1921.attr('width', ref1465.get());
    subs__.addSub(ref1465.addEventListener('change', function(_, ref, val) {
      node1921.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1465.rebind());
  
  var ref1466 = style;
  if(ref1466.get() !== null) {
    node1921.attr('class', ref1466.get());
    subs__.addSub(ref1466.addEventListener('change', function(_, ref, val) {
      node1921.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1466.rebind());
  
  var nodes14207 = $("<span>");
  node1921.append(nodes14207);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl565();
  }));
  
  function renderControl565() {
    subs__.addSub((elements)(function(elements, callback) {
      var root16207 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16207); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14207;
      nodes14207 = node.contents();
      oldNodes.replaceWith(nodes14207);
    }));
  }
  renderControl565();
  root16206.append(node1921);
  callback(root16206); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root16208 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1922 = $("<td>");
  
  var ref1467 = width;
  if(ref1467.get() !== null) {
    node1922.attr('width', ref1467.get());
    subs__.addSub(ref1467.addEventListener('change', function(_, ref, val) {
      node1922.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1467.rebind());
  
  var ref1468 = style;
  if(ref1468.get() !== null) {
    node1922.attr('class', ref1468.get());
    subs__.addSub(ref1468.addEventListener('change', function(_, ref, val) {
      node1922.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1468.rebind());
  
  var nodes14208 = $("<span>");
  node1922.append(nodes14208);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl566();
  }));
  
  function renderControl566() {
    subs__.addSub((elements)(function(elements, callback) {
      var root16209 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16209); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14208;
      nodes14208 = node.contents();
      oldNodes.replaceWith(nodes14208);
    }));
  }
  renderControl566();
  root16208.append(node1922);
  callback(root16208); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root16210 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1923 = $("<td>");
  
  var ref1469 = width;
  if(ref1469.get() !== null) {
    node1923.attr('width', ref1469.get());
    subs__.addSub(ref1469.addEventListener('change', function(_, ref, val) {
      node1923.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1469.rebind());
  
  var ref1470 = style;
  if(ref1470.get() !== null) {
    node1923.attr('class', ref1470.get());
    subs__.addSub(ref1470.addEventListener('change', function(_, ref, val) {
      node1923.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1470.rebind());
  
  
  var node1924 = $("<strong>");
  
  var nodes14209 = $("<span>");
  node1924.append(nodes14209);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl567();
  }));
  
  function renderControl567() {
    subs__.addSub((elements)(function(elements, callback) {
      var root16211 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16211); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14209;
      nodes14209 = node.contents();
      oldNodes.replaceWith(nodes14209);
    }));
  }
  renderControl567();
  node1923.append(node1924);
  root16210.append(node1923);
  callback(root16210); return subs__;
  
  
  
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
  items.list(function(coll884) {
    coll884 = coll884.reverse();
    function processOne386() {
      var item;
      item = coll884.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll884.length > 0) processOne386(); else rest386();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll884.length > 0) processOne386(); else rest386();
          
        }
      }
    }
    function rest386() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll884.length > 0) processOne386(); else rest386();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root16212 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp13155 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp13155.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node1925 = $("<span>");
  root16212.append(node1925);
  var condSubs545 = new mobl.CompSubscription();
  subs__.addSub(condSubs545);
  var oldValue545;
  var renderCond545 = function() {
    var value877 = tmp13155.get();
    if(oldValue545 === value877) return;
    oldValue545 = value877;
    var subs__ = condSubs545;
    subs__.unsubscribe();
    node1925.empty();
    if(value877) {
      items.get().one(function(result__) {
        var tmp13177 = result__;
        var current = mobl.ref(result__);
        
        var node1926 = $("<div>");
        node1926.attr('width', "100%");
        
        
        var node1927 = $("<div>");
        node1927.attr('style', "float:left; width:45%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes14211 = $("<span>");
        node1927.append(nodes14211);
        subs__.addSub((ui.group)(function(_, callback) {
          var root16214 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node1930 = mobl.loadingSpan();
          root16214.append(node1930);
          var list194;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList194 = function() {
            var subs__ = listSubs__;
            list194 = items.get();
            list194.list(function(results194) {
              node1930.empty();
              for(var i12485 = 0; i12485 < results194.length; i12485++) {
                (function() {
                  var iternode194 = $("<span>");
                  node1930.append(iternode194);
                  var it;
                  it = mobl.ref(mobl.ref(results194), i12485);
                  var result__ = it.get() == current.get();
                  var tmp13152 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp13152.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp13152.set(it.get() == current.get());
                  }));
                  
                  
                  var node1931 = $("<span>");
                  iternode194.append(node1931);
                  var condSubs547 = new mobl.CompSubscription();
                  subs__.addSub(condSubs547);
                  var oldValue547;
                  var renderCond547 = function() {
                    var value879 = tmp13152.get();
                    if(oldValue547 === value879) return;
                    oldValue547 = value879;
                    var subs__ = condSubs547;
                    subs__.unsubscribe();
                    node1931.empty();
                    if(value879) {
                      var nodes14212 = $("<span>");
                      node1931.append(nodes14212);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root16215 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp13180 = result__;
                          var tmp13149 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp13178 = result__;
                              var result__ = tmp13178;
                              tmp13149.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp13179 = result__;
                              var result__ = tmp13179;
                              tmp13149.set(result__);
                              
                            });
                          }));
                          
                          var nodes14213 = $("<span>");
                          root16215.append(nodes14213);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl569();
                          }));
                          
                          function renderControl569() {
                            subs__.addSub((masterItem.get())(it, tmp13149, function(elements, callback) {
                              var root16216 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root16216); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes14213;
                              nodes14213 = node.contents();
                              oldNodes.replaceWith(nodes14213);
                            }));
                          }
                          renderControl569();
                          callback(root16215); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes14212;
                        nodes14212 = node.contents();
                        oldNodes.replaceWith(nodes14212);
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
                      var tmp13151 = mobl.ref(result__);
                      
                      var nodes14214 = $("<span>");
                      node1931.append(nodes14214);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13151, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root16217 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp13183 = result__;
                          var tmp13150 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp13181 = result__;
                              var result__ = tmp13181;
                              tmp13150.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp13182 = result__;
                              var result__ = tmp13182;
                              tmp13150.set(result__);
                              
                            });
                          }));
                          
                          var nodes14215 = $("<span>");
                          root16217.append(nodes14215);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl570();
                          }));
                          
                          function renderControl570() {
                            subs__.addSub((masterItem.get())(it, tmp13150, function(elements, callback) {
                              var root16218 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root16218); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes14215;
                              nodes14215 = node.contents();
                              oldNodes.replaceWith(nodes14215);
                            }));
                          }
                          renderControl570();
                          callback(root16217); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes14214;
                        nodes14214 = node.contents();
                        oldNodes.replaceWith(nodes14214);
                      }));
                      
                      
                    }
                  };
                  renderCond547();
                  subs__.addSub(tmp13152.addEventListener('change', function() {
                    renderCond547();
                  }));
                  
                  
                  var oldNodes = iternode194;
                  iternode194 = iternode194.contents();
                  oldNodes.replaceWith(iternode194);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list194.addEventListener('change', function() { listSubs__.unsubscribe(); renderList194(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList194(true); }));
            });
          };
          renderList194();
          
          callback(root16214); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes14211;
          nodes14211 = node.contents();
          oldNodes.replaceWith(nodes14211);
        }));
        node1926.append(node1927);
        
        var node1928 = $("<div>");
        node1928.attr('style', "float:left; width:53%; position:relative; margin-left: 1%;");
        
        var result__ = current.get() && ui.visible.get();
        var tmp13153 = mobl.ref(result__);
        subs__.addSub(current.addEventListener('change', function() {
          tmp13153.set(current.get() && ui.visible.get());
        }));
        subs__.addSub(ui.visible.addEventListener('change', function() {
          tmp13153.set(current.get() && ui.visible.get());
        }));
        
        
        var node1929 = $("<span>");
        node1928.append(node1929);
        var condSubs546 = new mobl.CompSubscription();
        subs__.addSub(condSubs546);
        var oldValue546;
        var renderCond546 = function() {
          var value878 = tmp13153.get();
          if(oldValue546 === value878) return;
          oldValue546 = value878;
          var subs__ = condSubs546;
          subs__.unsubscribe();
          node1929.empty();
          if(value878) {
            var nodes14210 = $("<span>");
            node1929.append(nodes14210);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl568();
            }));
            
            function renderControl568() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root16213 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root16213); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes14210;
                nodes14210 = node.contents();
                oldNodes.replaceWith(nodes14210);
              }));
            }
            renderControl568();
            
            
          } else {
            
          }
        };
        renderCond546();
        subs__.addSub(tmp13153.addEventListener('change', function() {
          renderCond546();
        }));
        
        node1926.append(node1928);
        node1925.append(node1926);
        
        
        
        
        
        
      });
    } else {
      var nodes14216 = $("<span>");
      node1925.append(nodes14216);
      subs__.addSub((ui.group)(function(_, callback) {
        var root16219 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1932 = mobl.loadingSpan();
        root16219.append(node1932);
        var list195;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList195 = function() {
          var subs__ = listSubs__;
          list195 = items.get();
          list195.list(function(results195) {
            node1932.empty();
            for(var i12486 = 0; i12486 < results195.length; i12486++) {
              (function() {
                var iternode195 = $("<span>");
                node1932.append(iternode195);
                var it;
                it = mobl.ref(mobl.ref(results195), i12486);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp13187 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp13145 = mobl.ref(result__);
                
                var nodes14217 = $("<span>");
                iternode195.append(nodes14217);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13145, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root16220 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp13186 = result__;
                    var tmp13144 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp13184 = result__;
                        var result__ = tmp13184;
                        tmp13144.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp13185 = result__;
                        var result__ = tmp13185;
                        tmp13144.set(result__);
                        
                      });
                    }));
                    
                    var nodes14218 = $("<span>");
                    root16220.append(nodes14218);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl571();
                    }));
                    
                    function renderControl571() {
                      subs__.addSub((masterItem.get())(it, tmp13144, function(elements, callback) {
                        var root16221 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root16221); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes14218;
                        nodes14218 = node.contents();
                        oldNodes.replaceWith(nodes14218);
                      }));
                    }
                    renderControl571();
                    callback(root16220); return subs__;
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes14217;
                  nodes14217 = node.contents();
                  oldNodes.replaceWith(nodes14217);
                }));
                
                var oldNodes = iternode195;
                iternode195 = iternode195.contents();
                oldNodes.replaceWith(iternode195);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list195.addEventListener('change', function() { listSubs__.unsubscribe(); renderList195(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList195(true); }));
          });
        };
        renderList195();
        
        callback(root16219); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes14216;
        nodes14216 = node.contents();
        oldNodes.replaceWith(nodes14216);
      }));
      
      
    }
  };
  renderCond545();
  subs__.addSub(tmp13155.addEventListener('change', function() {
    renderCond545();
  }));
  
  callback(root16212); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root16222 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp13148 = mobl.ref(result__);
  
  var nodes14219 = $("<span>");
  root16222.append(nodes14219);
  subs__.addSub((ui.header)(tmp13148, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root16223 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    mobl.sleep(100, function(result__) {
      var tmp13188 = result__;
      mathJAX.renderMaths(function(result__) {
        var tmp13189 = result__;
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp13147 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp13146 = mobl.ref(result__);
        
        var nodes14220 = $("<span>");
        root16223.append(nodes14220);
        subs__.addSub((ui.backButton)(tmp13146, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp13147, function(_, callback) {
          var root16224 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root16224); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes14220;
          nodes14220 = node.contents();
          oldNodes.replaceWith(nodes14220);
        }));
        callback(root16223); return subs__;
        
      });
    });
    return subs__;
  }, function(node) {
    var oldNodes = nodes14219;
    nodes14219 = node.contents();
    oldNodes.replaceWith(nodes14219);
  }));
  var nodes14221 = $("<span>");
  root16222.append(nodes14221);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl572();
  }));
  
  function renderControl572() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root16225 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16225); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14221;
      nodes14221 = node.contents();
      oldNodes.replaceWith(nodes14221);
    }));
  }
  renderControl572();
  callback(root16222); return subs__;
  
  
  return subs__;
};

ui.introduction = function(elements, callback) {
  var root16226 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes14222 = $("<span>");
  root16226.append(nodes14222);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root16227 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes14223 = $("<span>");
    root16227.append(nodes14223);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root16228 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16228); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14223;
      nodes14223 = node.contents();
      oldNodes.replaceWith(nodes14223);
    }));
    callback(root16227); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14222;
    nodes14222 = node.contents();
    oldNodes.replaceWith(nodes14222);
  }));
  
  var intro = mobl.ref("\n<div style=\"padding:20px\">\n<img src=\"icon.png\" style=\"width:30px;height:30px; float:left; padding:5px 5px 5px 0px\"/> Mathmo is designed to give you extra practice.\n<br />\n<br />\nOn the <b>My Qs</b> tab you'll find your current set of questions under a list of topics. \nThese stay with you till you clear them or delete them individually. They'll be the same questions even if you close Mathmo and return to it later.\nTap one of the question topics to see the question itself.\n<br /><br />\nWhen you have completed a question, touch <b>Check Answer</b> to check your work and\nreply to <b>Did you agree?</b>. You may need to do a little more work to see whether your answer really is the same or not.\nThe questions will change colour according to your answer. Red means 'I didn't agree'. Green means 'I agreed'. Black means 'Answer not checked'. \n<br /><br />\nOn the <b>Add</b> tab you can generate 5 more random core, further or stats questions, or generate them singly on selected topics.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. \n<a href=\"http://nrich.maths.org/7088\" target=\"_blank\">Further info here</a>.\n\n<h3>Credits</h3>\n<p>\nSyllabus hugging ideas: Stephen Hewson\n</p>\n<p>\nQuestion and Answer generators:\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson with contributions from\n<a href=\"http://github.com/naush/mathmo\">Li Hsuan</a>.</p>\n\n<p>\nThe following have also been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n\n</div>\n");
  var nodes14224 = $("<span>");
  root16226.append(nodes14224);
  subs__.addSub((mobl.html)(intro, function(_, callback) {
    var root16229 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root16229); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes14224;
    nodes14224 = node.contents();
    oldNodes.replaceWith(nodes14224);
  }));
  callback(root16226); return subs__;
  
  
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
