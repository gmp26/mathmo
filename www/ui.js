mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root2830 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node779 = $("<span>");
  root2830.append(node779);
  var condSubs175 = new mobl.CompSubscription();
  subs__.addSub(condSubs175);
  var oldValue175;
  var renderCond175 = function() {
    var value443 = value.get();
    if(oldValue175 === value443) return;
    oldValue175 = value443;
    var subs__ = condSubs175;
    subs__.unsubscribe();
    node779.empty();
    if(value443) {
      var nodes2245 = $("<span>");
      node779.append(nodes2245);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl330();
      }));
      
      function renderControl330() {
        subs__.addSub((elements)(function(elements, callback) {
          var root2831 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2831); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2245;
          nodes2245 = node.contents();
          oldNodes.replaceWith(nodes2245);
        }));
      }
      renderControl330();
      
      
    } else {
      var nodes2246 = $("<span>");
      node779.append(nodes2246);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2832 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes2247 = $("<span>");
        root2832.append(nodes2247);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root2833 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2833); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2247;
          nodes2247 = node.contents();
          oldNodes.replaceWith(nodes2247);
        }));
        var nodes2248 = $("<span>");
        root2832.append(nodes2248);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root2834 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2834); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2248;
          nodes2248 = node.contents();
          oldNodes.replaceWith(nodes2248);
        }));
        callback(root2832); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2246;
        nodes2246 = node.contents();
        oldNodes.replaceWith(nodes2246);
      }));
      
      
    }
  };
  renderCond175();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond175();
  }));
  
  callback(root2830); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
  var root2835 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node780 = $("<div>");
  
  var ref692 = mobl.ref(ui.headerStyle);
  if(ref692.get() !== null) {
    node780.attr('class', ref692.get());
    subs__.addSub(ref692.addEventListener('change', function(_, ref, val) {
      node780.attr('class', val);
    }));
    
  }
  subs__.addSub(ref692.rebind());
  
  var val372 = onclick.get();
  if(val372 !== null) {
    subs__.addSub(mobl.domBind(node780, 'tap', val372));
  }
  
  
  var node781 = $("<div>");
  
  var ref691 = mobl.ref(ui.headerContainerStyle);
  if(ref691.get() !== null) {
    node781.attr('class', ref691.get());
    subs__.addSub(ref691.addEventListener('change', function(_, ref, val) {
      node781.attr('class', val);
    }));
    
  }
  subs__.addSub(ref691.rebind());
  
  
  var node782 = $("<div>");
  
  var ref689 = text;
  node782.text(""+ref689.get());
  var ignore140 = false;
  subs__.addSub(ref689.addEventListener('change', function(_, ref, val) {
    if(ignore140) return;
    node782.text(""+val);
  }));
  subs__.addSub(ref689.rebind());
  
  
  var ref690 = mobl.ref(ui.headerTextStyle);
  if(ref690.get() !== null) {
    node782.attr('class', ref690.get());
    subs__.addSub(ref690.addEventListener('change', function(_, ref, val) {
      node782.attr('class', val);
    }));
    
  }
  subs__.addSub(ref690.rebind());
  
  node781.append(node782);
  node780.append(node781);
  var nodes2249 = $("<span>");
  node780.append(nodes2249);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl331();
  }));
  
  function renderControl331() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2836 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2836); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2249;
      nodes2249 = node.contents();
      oldNodes.replaceWith(nodes2249);
    }));
  }
  renderControl331();
  root2835.append(node780);
  callback(root2835); return subs__;
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root2837 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref693 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref693.get() !== null) {
    sp.attr('class', ref693.get());
    subs__.addSub(ref693.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref693.rebind());
  
  var val373 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val373 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val373));
  }
  
  var val374 = function(event, callback) {
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
  if(val374 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val374));
  }
  
  var val375 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after117(result__) {
                    var tmp2075 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after117);if(result__ !== undefined) after117(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val375 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val375));
  }
  
  var val376 = function(event, callback) {
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
  if(val376 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val376));
  }
  
  var ref694 = text;
  sp.text(""+ref694.get());
  var ignore141 = false;
  subs__.addSub(ref694.addEventListener('change', function(_, ref, val) {
    if(ignore141) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref694.rebind());
  
  
  root2837.append(sp);
  callback(root2837); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root2838 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2250 = $("<span>");
  root2838.append(nodes2250);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root2839 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2839); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2250;
    nodes2250 = node.contents();
    oldNodes.replaceWith(nodes2250);
  }));
  callback(root2838); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root2840 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2251 = $("<span>");
  root2840.append(nodes2251);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root2841 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2841); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2251;
    nodes2251 = node.contents();
    oldNodes.replaceWith(nodes2251);
  }));
  callback(root2840); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root2842 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node783 = $("<ul>");
  
  var ref695 = mobl.ref(ui.groupStyle);
  if(ref695.get() !== null) {
    node783.attr('class', ref695.get());
    subs__.addSub(ref695.addEventListener('change', function(_, ref, val) {
      node783.attr('class', val);
    }));
    
  }
  subs__.addSub(ref695.rebind());
  
  var nodes2252 = $("<span>");
  node783.append(nodes2252);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl332();
  }));
  
  function renderControl332() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2843 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2843); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2252;
      nodes2252 = node.contents();
      oldNodes.replaceWith(nodes2252);
    }));
  }
  renderControl332();
  root2842.append(node783);
  callback(root2842); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root2844 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node784 = $("<img>");
  
  var ref696 = url;
  if(ref696.get() !== null) {
    node784.attr('src', ref696.get());
    subs__.addSub(ref696.addEventListener('change', function(_, ref, val) {
      node784.attr('src', val);
    }));
    
  }
  subs__.addSub(ref696.rebind());
  
  var ref697 = width;
  if(ref697.get() !== null) {
    node784.attr('width', ref697.get());
    subs__.addSub(ref697.addEventListener('change', function(_, ref, val) {
      node784.attr('width', val);
    }));
    
  }
  subs__.addSub(ref697.rebind());
  
  var ref698 = height;
  if(ref698.get() !== null) {
    node784.attr('height', ref698.get());
    subs__.addSub(ref698.addEventListener('change', function(_, ref, val) {
      node784.attr('height', val);
    }));
    
  }
  subs__.addSub(ref698.rebind());
  
  var ref699 = style;
  if(ref699.get() !== null) {
    node784.attr('class', ref699.get());
    subs__.addSub(ref699.addEventListener('change', function(_, ref, val) {
      node784.attr('class', val);
    }));
    
  }
  subs__.addSub(ref699.rebind());
  
  var val377 = onclick.get();
  if(val377 !== null) {
    subs__.addSub(mobl.domBind(node784, 'tap', val377));
  }
  
  var ref700 = valign;
  if(ref700.get() !== null) {
    node784.attr('valign', ref700.get());
    subs__.addSub(ref700.addEventListener('change', function(_, ref, val) {
      node784.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref700.rebind());
  
  var ref701 = align;
  if(ref701.get() !== null) {
    node784.attr('align', ref701.get());
    subs__.addSub(ref701.addEventListener('change', function(_, ref, val) {
      node784.attr('align', val);
    }));
    
  }
  subs__.addSub(ref701.rebind());
  
  root2844.append(node784);
  callback(root2844); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root2845 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref702 = mobl.ref(ui.itemStyle);
  if(ref702.get() !== null) {
    el.attr('class', ref702.get());
    subs__.addSub(ref702.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref702.rebind());
  
  var ref703 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref703.get() !== null) {
    el.attr('class', ref703.get());
    subs__.addSub(ref703.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref703.rebind());
  
  var val378 = onswipe.get();
  if(val378 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val378));
  }
  
  var val379 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp2076 = result__;
                                           function after118(result__) {
                                             var tmp2077 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after118);if(result__ !== undefined) after118(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp2078 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val379 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val379));
  }
  
  var nodes2253 = $("<span>");
  el.append(nodes2253);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl333();
  }));
  
  function renderControl333() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2846 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2846); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2253;
      nodes2253 = node.contents();
      oldNodes.replaceWith(nodes2253);
    }));
  }
  renderControl333();
  root2845.append(el);
  callback(root2845); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root2847 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node785 = $("<input>");
  node785.attr('type', "checkbox");
  
  var ref705 = b;
  node785.attr('checked', !!ref705.get());
  subs__.addSub(ref705.addEventListener('change', function(_, ref, val) {
    if(ref === ref705) node785.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node785, 'change', function() {
    b.set(!!node785.attr('checked'));
  }));
  
  var val381 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val381 !== null) {
    subs__.addSub(mobl.domBind(node785, 'tap', val381));
  }
  
  var val382 = onchange.get();
  if(val382 !== null) {
    subs__.addSub(mobl.domBind(node785, 'change', val382));
  }
  
  root2847.append(node785);
  
  root2847.append(" ");
  
  var node786 = $("<span>");
  
  var ref704 = label;
  node786.text(""+ref704.get());
  var ignore142 = false;
  subs__.addSub(ref704.addEventListener('change', function(_, ref, val) {
    if(ignore142) return;
    node786.text(""+val);
  }));
  subs__.addSub(ref704.rebind());
  
  
  var val380 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after119(result__) {
                    var tmp2079 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after119);if(result__ !== undefined) after119(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val380 !== null) {
    subs__.addSub(mobl.domBind(node786, 'tap', val380));
  }
  
  root2847.append(node786);
  callback(root2847); return subs__;
  
  
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


ui.textField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root2848 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node787 = $("<span>");
  root2848.append(node787);
  var condSubs176 = new mobl.CompSubscription();
  subs__.addSub(condSubs176);
  var oldValue176;
  var renderCond176 = function() {
    var value444 = label.get();
    if(oldValue176 === value444) return;
    oldValue176 = value444;
    var subs__ = condSubs176;
    subs__.unsubscribe();
    node787.empty();
    if(value444) {
      var nodes2254 = $("<span>");
      node787.append(nodes2254);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root2849 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2849); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2254;
        nodes2254 = node.contents();
        oldNodes.replaceWith(nodes2254);
      }));
      
      
    } else {
      
    }
  };
  renderCond176();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond176();
  }));
  
  
  var node788 = $("<span>");
  root2848.append(node788);
  var condSubs177 = new mobl.CompSubscription();
  subs__.addSub(condSubs177);
  var oldValue177;
  var renderCond177 = function() {
    var value445 = validator.get();
    if(oldValue177 === value445) return;
    oldValue177 = value445;
    var subs__ = condSubs177;
    subs__.unsubscribe();
    node788.empty();
    if(value445) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after123(result__) {
        var tmp2080 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp2081 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node789 = $("<input>");
        node789.attr('type', "text");
        
        var ref706 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref706.get() !== null) {
          node789.attr('class', ref706.get());
          subs__.addSub(ref706.addEventListener('change', function(_, ref, val) {
            node789.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node789.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node789.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node789.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref706.rebind());
        
        var ref707 = placeholder;
        if(ref707.get() !== null) {
          node789.attr('placeholder', ref707.get());
          subs__.addSub(ref707.addEventListener('change', function(_, ref, val) {
            node789.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref707.rebind());
        
        var ref708 = temp;
        node789.val(""+ref708.get());
        var ignore143 = false;
        subs__.addSub(ref708.addEventListener('change', function(_, ref, val) {
          if(ignore143) return;
          node789.val(""+val);
        }));
        subs__.addSub(ref708.rebind());
        
        subs__.addSub(mobl.domBind(node789, 'keyup change', function() {
          ignore143 = true;
          temp.set(mobl.stringTomobl__String(node789.val()));
          ignore143 = false;
        }));
        
        
        var val383 = onchange.get();
        if(val383 !== null) {
          subs__.addSub(mobl.domBind(node789, 'change', val383));
        }
        
        var val384 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after120(result__) {
                          var tmp2082 = result__;
                          function after121(result__) {
                            var tmp2083 = result__;
                            var result__ = tmp2083;
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
                          var result__ = validator.get()(temp.get(), after121);if(result__ !== undefined) after121(result__);
                        }
                        var result__ = onkeyup.get()(event, after120);if(result__ !== undefined) after120(result__);
                      } else {
                        {
                          function after122(result__) {
                            var tmp2083 = result__;
                            var result__ = tmp2083;
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
                          var result__ = validator.get()(temp.get(), after122);if(result__ !== undefined) after122(result__);
                        }
                      }
                    };
        if(val384 !== null) {
          subs__.addSub(mobl.domBind(node789, 'keyup', val384));
        }
        
        var val385 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val385 !== null) {
          subs__.addSub(mobl.domBind(node789, 'blur', val385));
        }
        
        node788.append(node789);
        var nodes2255 = $("<span>");
        node788.append(nodes2255);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root2850 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2850); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2255;
          nodes2255 = node.contents();
          oldNodes.replaceWith(nodes2255);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after123);if(result__ !== undefined) after123(result__);
    } else {
      
      var node790 = $("<input>");
      node790.attr('type', "text");
      
      var ref709 = style;
      if(ref709.get() !== null) {
        node790.attr('class', ref709.get());
        subs__.addSub(ref709.addEventListener('change', function(_, ref, val) {
          node790.attr('class', val);
        }));
        
      }
      subs__.addSub(ref709.rebind());
      
      var ref710 = placeholder;
      if(ref710.get() !== null) {
        node790.attr('placeholder', ref710.get());
        subs__.addSub(ref710.addEventListener('change', function(_, ref, val) {
          node790.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref710.rebind());
      
      var ref711 = s;
      node790.val(""+ref711.get());
      var ignore144 = false;
      subs__.addSub(ref711.addEventListener('change', function(_, ref, val) {
        if(ignore144) return;
        node790.val(""+val);
      }));
      subs__.addSub(ref711.rebind());
      
      subs__.addSub(mobl.domBind(node790, 'keyup change', function() {
        ignore144 = true;
        s.set(mobl.stringTomobl__String(node790.val()));
        ignore144 = false;
      }));
      
      
      var val386 = onchange.get();
      if(val386 !== null) {
        subs__.addSub(mobl.domBind(node790, 'change', val386));
      }
      
      var val387 = onkeyup.get();
      if(val387 !== null) {
        subs__.addSub(mobl.domBind(node790, 'keyup', val387));
      }
      
      var val388 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val388 !== null) {
        subs__.addSub(mobl.domBind(node790, 'blur', val388));
      }
      
      node788.append(node790);
      
      
    }
  };
  renderCond177();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond177();
  }));
  
  callback(root2848); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root2851 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2256 = $("<span>");
  root2851.append(nodes2256);
  subs__.addSub((ui.textField)(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root2852 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2852); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2256;
    nodes2256 = node.contents();
    oldNodes.replaceWith(nodes2256);
  }));
  callback(root2851); return subs__;
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root2853 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after124(result__) {
      var tmp2084 = result__;
      var result__ = tmp2084;
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
    var result__ = validator.get()(n2, after124);if(result__ !== undefined) after124(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes2257 = $("<span>");
  root2853.append(nodes2257);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root2854 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2854); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2257;
    nodes2257 = node.contents();
    oldNodes.replaceWith(nodes2257);
  }));
  callback(root2853); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root2855 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node791 = $("<span>");
  root2855.append(node791);
  var condSubs178 = new mobl.CompSubscription();
  subs__.addSub(condSubs178);
  var oldValue178;
  var renderCond178 = function() {
    var value446 = label.get();
    if(oldValue178 === value446) return;
    oldValue178 = value446;
    var subs__ = condSubs178;
    subs__.unsubscribe();
    node791.empty();
    if(value446) {
      
      var node792 = $("<span>");
      node792.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref715 = label;
      node792.text(""+ref715.get());
      var ignore146 = false;
      subs__.addSub(ref715.addEventListener('change', function(_, ref, val) {
        if(ignore146) return;
        node792.text(""+val);
      }));
      subs__.addSub(ref715.rebind());
      
      
      node791.append(node792);
      
      var node793 = $("<span>");
      node793.attr('style', "float: left");
      
      
      var node794 = $("<input>");
      node794.attr('type', "password");
      
      var ref712 = style;
      if(ref712.get() !== null) {
        node794.attr('class', ref712.get());
        subs__.addSub(ref712.addEventListener('change', function(_, ref, val) {
          node794.attr('class', val);
        }));
        
      }
      subs__.addSub(ref712.rebind());
      
      var ref713 = placeholder;
      if(ref713.get() !== null) {
        node794.attr('placeholder', ref713.get());
        subs__.addSub(ref713.addEventListener('change', function(_, ref, val) {
          node794.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref713.rebind());
      
      var ref714 = s;
      node794.val(""+ref714.get());
      var ignore145 = false;
      subs__.addSub(ref714.addEventListener('change', function(_, ref, val) {
        if(ignore145) return;
        node794.val(""+val);
      }));
      subs__.addSub(ref714.rebind());
      
      subs__.addSub(mobl.domBind(node794, 'keyup change', function() {
        ignore145 = true;
        s.set(mobl.stringTomobl__String(node794.val()));
        ignore145 = false;
      }));
      
      
      var val389 = onchange.get();
      if(val389 !== null) {
        subs__.addSub(mobl.domBind(node794, 'change', val389));
      }
      
      var val390 = onkeyup.get();
      if(val390 !== null) {
        subs__.addSub(mobl.domBind(node794, 'keyup', val390));
      }
      
      var val391 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val391 !== null) {
        subs__.addSub(mobl.domBind(node794, 'blur', val391));
      }
      
      node793.append(node794);
      node791.append(node793);
      
      
      
      
    } else {
      
      var node795 = $("<input>");
      node795.attr('type', "password");
      
      var ref716 = style;
      if(ref716.get() !== null) {
        node795.attr('class', ref716.get());
        subs__.addSub(ref716.addEventListener('change', function(_, ref, val) {
          node795.attr('class', val);
        }));
        
      }
      subs__.addSub(ref716.rebind());
      
      var ref717 = placeholder;
      if(ref717.get() !== null) {
        node795.attr('placeholder', ref717.get());
        subs__.addSub(ref717.addEventListener('change', function(_, ref, val) {
          node795.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref717.rebind());
      
      var ref718 = s;
      node795.val(""+ref718.get());
      var ignore147 = false;
      subs__.addSub(ref718.addEventListener('change', function(_, ref, val) {
        if(ignore147) return;
        node795.val(""+val);
      }));
      subs__.addSub(ref718.rebind());
      
      subs__.addSub(mobl.domBind(node795, 'keyup change', function() {
        ignore147 = true;
        s.set(mobl.stringTomobl__String(node795.val()));
        ignore147 = false;
      }));
      
      
      var val392 = onchange.get();
      if(val392 !== null) {
        subs__.addSub(mobl.domBind(node795, 'change', val392));
      }
      
      var val393 = onkeyup.get();
      if(val393 !== null) {
        subs__.addSub(mobl.domBind(node795, 'keyup', val393));
      }
      
      var val394 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val394 !== null) {
        subs__.addSub(mobl.domBind(node795, 'blur', val394));
      }
      
      node791.append(node795);
      
      
    }
  };
  renderCond178();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond178();
  }));
  
  callback(root2855); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root2856 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref723 = style;
  if(ref723.get() !== null) {
    sel.attr('class', ref723.get());
    subs__.addSub(ref723.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref723.rebind());
  
  var val395 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after125(result__) {
                    var tmp2086 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after125);if(result__ !== undefined) after125(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val395 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val395));
  }
  
  
  var node796 = mobl.loadingSpan();
  sel.append(node796);
  var list138;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList138 = function() {
    var subs__ = listSubs__;
    list138 = options.get();
    list138.list(function(results138) {
      node796.empty();
      for(var i474 = 0; i474 < results138.length; i474++) {
        (function() {
          var iternode138 = $("<span>");
          node796.append(iternode138);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results138), i474), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results138), i474), "_2");
          
          var node797 = $("<option>");
          
          var ref719 = optionDescription;
          node797.text(""+ref719.get());
          var ignore148 = false;
          subs__.addSub(ref719.addEventListener('change', function(_, ref, val) {
            if(ignore148) return;
            node797.text(""+val);
          }));
          subs__.addSub(ref719.rebind());
          
          
          var ref720 = optionStyle;
          if(ref720.get() !== null) {
            node797.attr('class', ref720.get());
            subs__.addSub(ref720.addEventListener('change', function(_, ref, val) {
              node797.attr('class', val);
            }));
            
          }
          subs__.addSub(ref720.rebind());
          
          var ref721 = optionValue;
          if(ref721.get() !== null) {
            node797.attr('value', ref721.get());
            subs__.addSub(ref721.addEventListener('change', function(_, ref, val) {
              node797.attr('value', val);
            }));
            
          }
          subs__.addSub(ref721.rebind());
          
          var ref722 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref722.get() !== null) {
            node797.attr('selected', ref722.get());
            subs__.addSub(ref722.addEventListener('change', function(_, ref, val) {
              node797.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node797.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node797.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref722.rebind());
          
          iternode138.append(node797);
          
          var oldNodes = iternode138;
          iternode138 = iternode138.contents();
          oldNodes.replaceWith(iternode138);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list138.addEventListener('change', function() { listSubs__.unsubscribe(); renderList138(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList138(true); }));
    });
  };
  renderList138();
  
  root2856.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root2856); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root2857 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes2258 = $("<span>");
    root2857.append(nodes2258);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root2858 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node798 = mobl.loadingSpan();
      root2858.append(node798);
      var list139;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList139 = function() {
        var subs__ = listSubs__;
        list139 = tabs.get();
        list139.list(function(results139) {
          node798.empty();
          for(var i475 = 0; i475 < results139.length; i475++) {
            (function() {
              var iternode139 = $("<span>");
              node798.append(iternode139);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results139), i475), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results139), i475), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results139), i475), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp2045 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp2045.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp2045.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp2045.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp2045.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp2044 = mobl.ref(result__);
              
              var nodes2259 = $("<span>");
              iternode139.append(nodes2259);
              subs__.addSub((mobl.span)(tmp2045, mobl.ref(null), tmp2044, mobl.ref(null), function(_, callback) {
                var root2859 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes2260 = $("<span>");
                root2859.append(nodes2260);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root2860 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root2860); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2260;
                  nodes2260 = node.contents();
                  oldNodes.replaceWith(nodes2260);
                }));
                callback(root2859); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes2259;
                nodes2259 = node.contents();
                oldNodes.replaceWith(nodes2259);
              }));
              
              var oldNodes = iternode139;
              iternode139 = iternode139.contents();
              oldNodes.replaceWith(iternode139);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list139.addEventListener('change', function() { listSubs__.unsubscribe(); renderList139(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList139(true); }));
        });
      };
      renderList139();
      
      callback(root2858); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2258;
      nodes2258 = node.contents();
      oldNodes.replaceWith(nodes2258);
    }));
    
    var node799 = mobl.loadingSpan();
    root2857.append(node799);
    var list140;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList140 = function() {
      var subs__ = listSubs__;
      list140 = tabs.get();
      list140.list(function(results140) {
        node799.empty();
        for(var i476 = 0; i476 < results140.length; i476++) {
          (function() {
            var iternode140 = $("<span>");
            node799.append(iternode140);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results140), i476), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results140), i476), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results140), i476), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp2046 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp2046.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp2046.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp2046.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp2046.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes2261 = $("<span>");
            iternode140.append(nodes2261);
            subs__.addSub((mobl.block)(tmp2046, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root2861 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes2262 = $("<span>");
              root2861.append(nodes2262);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root2862 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes2263 = $("<span>");
                root2862.append(nodes2263);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl334();
                }));
                
                function renderControl334() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root2863 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root2863); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes2263;
                    nodes2263 = node.contents();
                    oldNodes.replaceWith(nodes2263);
                  }));
                }
                renderControl334();
                callback(root2862); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes2262;
                nodes2262 = node.contents();
                oldNodes.replaceWith(nodes2262);
              }));
              callback(root2861); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes2261;
              nodes2261 = node.contents();
              oldNodes.replaceWith(nodes2261);
            }));
            
            var oldNodes = iternode140;
            iternode140 = iternode140.contents();
            oldNodes.replaceWith(iternode140);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list140.addEventListener('change', function() { listSubs__.unsubscribe(); renderList140(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList140(true); }));
      });
    };
    renderList140();
    
    callback(root2857); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes2258 = $("<span>");
      root2857.append(nodes2258);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2858 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node798 = mobl.loadingSpan();
        root2858.append(node798);
        var list139;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList139 = function() {
          var subs__ = listSubs__;
          list139 = tabs.get();
          list139.list(function(results139) {
            node798.empty();
            for(var i475 = 0; i475 < results139.length; i475++) {
              (function() {
                var iternode139 = $("<span>");
                node798.append(iternode139);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results139), i475), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results139), i475), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results139), i475), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp2045 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp2045.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp2045.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp2045.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp2045.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp2044 = mobl.ref(result__);
                
                var nodes2259 = $("<span>");
                iternode139.append(nodes2259);
                subs__.addSub((mobl.span)(tmp2045, mobl.ref(null), tmp2044, mobl.ref(null), function(_, callback) {
                  var root2859 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes2260 = $("<span>");
                  root2859.append(nodes2260);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root2860 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root2860); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes2260;
                    nodes2260 = node.contents();
                    oldNodes.replaceWith(nodes2260);
                  }));
                  callback(root2859); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2259;
                  nodes2259 = node.contents();
                  oldNodes.replaceWith(nodes2259);
                }));
                
                var oldNodes = iternode139;
                iternode139 = iternode139.contents();
                oldNodes.replaceWith(iternode139);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list139.addEventListener('change', function() { listSubs__.unsubscribe(); renderList139(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList139(true); }));
          });
        };
        renderList139();
        
        callback(root2858); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2258;
        nodes2258 = node.contents();
        oldNodes.replaceWith(nodes2258);
      }));
      
      var node799 = mobl.loadingSpan();
      root2857.append(node799);
      var list140;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList140 = function() {
        var subs__ = listSubs__;
        list140 = tabs.get();
        list140.list(function(results140) {
          node799.empty();
          for(var i476 = 0; i476 < results140.length; i476++) {
            (function() {
              var iternode140 = $("<span>");
              node799.append(iternode140);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results140), i476), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results140), i476), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results140), i476), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp2046 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp2046.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp2046.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp2046.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp2046.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes2261 = $("<span>");
              iternode140.append(nodes2261);
              subs__.addSub((mobl.block)(tmp2046, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root2861 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes2262 = $("<span>");
                root2861.append(nodes2262);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root2862 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes2263 = $("<span>");
                  root2862.append(nodes2263);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl334();
                  }));
                  
                  function renderControl334() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root2863 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root2863); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes2263;
                      nodes2263 = node.contents();
                      oldNodes.replaceWith(nodes2263);
                    }));
                  }
                  renderControl334();
                  callback(root2862); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2262;
                  nodes2262 = node.contents();
                  oldNodes.replaceWith(nodes2262);
                }));
                callback(root2861); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes2261;
                nodes2261 = node.contents();
                oldNodes.replaceWith(nodes2261);
              }));
              
              var oldNodes = iternode140;
              iternode140 = iternode140.contents();
              oldNodes.replaceWith(iternode140);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list140.addEventListener('change', function() { listSubs__.unsubscribe(); renderList140(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList140(true); }));
        });
      };
      renderList140();
      
      callback(root2857); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root2864 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node800 = $("<div>");
  
  var ref727 = mobl.ref(ui.searchboxStyle);
  if(ref727.get() !== null) {
    node800.attr('class', ref727.get());
    subs__.addSub(ref727.addEventListener('change', function(_, ref, val) {
      node800.attr('class', val);
    }));
    
  }
  subs__.addSub(ref727.rebind());
  
  
  var node801 = $("<input>");
  node801.attr('type', "search");
  
  var ref724 = mobl.ref(ui.searchBoxInputStyle);
  if(ref724.get() !== null) {
    node801.attr('class', ref724.get());
    subs__.addSub(ref724.addEventListener('change', function(_, ref, val) {
      node801.attr('class', val);
    }));
    
  }
  subs__.addSub(ref724.rebind());
  
  var ref725 = placeholder;
  if(ref725.get() !== null) {
    node801.attr('placeholder', ref725.get());
    subs__.addSub(ref725.addEventListener('change', function(_, ref, val) {
      node801.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref725.rebind());
  
  var ref726 = s;
  node801.val(""+ref726.get());
  var ignore149 = false;
  subs__.addSub(ref726.addEventListener('change', function(_, ref, val) {
    if(ignore149) return;
    node801.val(""+val);
  }));
  subs__.addSub(ref726.rebind());
  
  subs__.addSub(mobl.domBind(node801, 'keyup change', function() {
    ignore149 = true;
    s.set(mobl.stringTomobl__String(node801.val()));
    ignore149 = false;
  }));
  
  
  var val396 = onsearch.get();
  if(val396 !== null) {
    subs__.addSub(mobl.domBind(node801, 'change', val396));
  }
  
  var val397 = onkeyup.get();
  if(val397 !== null) {
    subs__.addSub(mobl.domBind(node801, 'keyup', val397));
  }
  node801.attr('autocorrect', false);
  node801.attr('autocapitalize', false);
  node801.attr('autocomplete', false);
  
  node800.append(node801);
  root2864.append(node800);
  callback(root2864); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root2865 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref728 = mobl.ref(ui.contextMenuStyle);
  if(ref728.get() !== null) {
    menu.attr('class', ref728.get());
    subs__.addSub(ref728.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref728.rebind());
  
  var nodes2264 = $("<span>");
  menu.append(nodes2264);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl335();
  }));
  
  function renderControl335() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2866 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2866); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2264;
      nodes2264 = node.contents();
      oldNodes.replaceWith(nodes2264);
    }));
  }
  renderControl335();
  root2865.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val398 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp2089 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val398 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val398));
  }
  
  root2865.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root2865); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root2867 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp2073 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp2073.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node802 = $("<span>");
  root2867.append(node802);
  var condSubs179 = new mobl.CompSubscription();
  subs__.addSub(condSubs179);
  var oldValue179;
  var renderCond179 = function() {
    var value447 = tmp2073.get();
    if(oldValue179 === value447) return;
    oldValue179 = value447;
    var subs__ = condSubs179;
    subs__.unsubscribe();
    node802.empty();
    if(value447) {
      items.get().one(function(result__) {
        var tmp2090 = result__;
        var current = mobl.ref(result__);
        
        var node803 = $("<div>");
        node803.attr('width', "100%");
        
        
        var node804 = $("<div>");
        node804.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes2267 = $("<span>");
        node804.append(nodes2267);
        subs__.addSub((ui.group)(function(_, callback) {
          var root2870 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node807 = mobl.loadingSpan();
          root2870.append(node807);
          var list141;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList141 = function() {
            var subs__ = listSubs__;
            list141 = items.get();
            list141.list(function(results141) {
              node807.empty();
              for(var i477 = 0; i477 < results141.length; i477++) {
                (function() {
                  var iternode141 = $("<span>");
                  node807.append(iternode141);
                  var it;
                  it = mobl.ref(mobl.ref(results141), i477);
                  var result__ = it.get() == current.get();
                  var tmp2052 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp2052.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp2052.set(it.get() == current.get());
                  }));
                  
                  
                  var node808 = $("<span>");
                  iternode141.append(node808);
                  var condSubs181 = new mobl.CompSubscription();
                  subs__.addSub(condSubs181);
                  var oldValue181;
                  var renderCond181 = function() {
                    var value449 = tmp2052.get();
                    if(oldValue181 === value449) return;
                    oldValue181 = value449;
                    var subs__ = condSubs181;
                    subs__.unsubscribe();
                    node808.empty();
                    if(value449) {
                      var nodes2268 = $("<span>");
                      node808.append(nodes2268);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root2871 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes2269 = $("<span>");
                        root2871.append(nodes2269);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl337();
                        }));
                        
                        function renderControl337() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root2872 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root2872); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes2269;
                            nodes2269 = node.contents();
                            oldNodes.replaceWith(nodes2269);
                          }));
                        }
                        renderControl337();
                        callback(root2871); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes2268;
                        nodes2268 = node.contents();
                        oldNodes.replaceWith(nodes2268);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp2051 = mobl.ref(result__);
                      
                      var nodes2270 = $("<span>");
                      node808.append(nodes2270);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2051, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root2873 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes2271 = $("<span>");
                        root2873.append(nodes2271);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl338();
                        }));
                        
                        function renderControl338() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root2874 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root2874); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes2271;
                            nodes2271 = node.contents();
                            oldNodes.replaceWith(nodes2271);
                          }));
                        }
                        renderControl338();
                        callback(root2873); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes2270;
                        nodes2270 = node.contents();
                        oldNodes.replaceWith(nodes2270);
                      }));
                      
                      
                    }
                  };
                  renderCond181();
                  subs__.addSub(tmp2052.addEventListener('change', function() {
                    renderCond181();
                  }));
                  
                  
                  var oldNodes = iternode141;
                  iternode141 = iternode141.contents();
                  oldNodes.replaceWith(iternode141);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list141.addEventListener('change', function() { listSubs__.unsubscribe(); renderList141(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList141(true); }));
            });
          };
          renderList141();
          
          callback(root2870); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes2267;
          nodes2267 = node.contents();
          oldNodes.replaceWith(nodes2267);
        }));
        node803.append(node804);
        
        var node805 = $("<div>");
        node805.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node806 = $("<span>");
        node805.append(node806);
        var condSubs180 = new mobl.CompSubscription();
        subs__.addSub(condSubs180);
        var oldValue180;
        var renderCond180 = function() {
          var value448 = current.get();
          if(oldValue180 === value448) return;
          oldValue180 = value448;
          var subs__ = condSubs180;
          subs__.unsubscribe();
          node806.empty();
          if(value448) {
            var nodes2265 = $("<span>");
            node806.append(nodes2265);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl336();
            }));
            
            function renderControl336() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root2868 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2868); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2265;
                nodes2265 = node.contents();
                oldNodes.replaceWith(nodes2265);
              }));
            }
            renderControl336();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp2053 = mobl.ref(result__);
            
            var nodes2266 = $("<span>");
            node806.append(nodes2266);
            subs__.addSub((mobl.label)(tmp2053, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root2869 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2869); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes2266;
              nodes2266 = node.contents();
              oldNodes.replaceWith(nodes2266);
            }));
            
            
          }
        };
        renderCond180();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond180();
        }));
        
        node803.append(node805);
        node802.append(node803);
        
        
        
        
        
        
      });
    } else {
      var nodes2272 = $("<span>");
      node802.append(nodes2272);
      subs__.addSub((ui.group)(function(_, callback) {
        var root2875 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node809 = mobl.loadingSpan();
        root2875.append(node809);
        var list142;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList142 = function() {
          var subs__ = listSubs__;
          list142 = items.get();
          list142.list(function(results142) {
            node809.empty();
            for(var i478 = 0; i478 < results142.length; i478++) {
              (function() {
                var iternode142 = $("<span>");
                node809.append(iternode142);
                var it;
                it = mobl.ref(mobl.ref(results142), i478);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp2091 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp2047 = mobl.ref(result__);
                
                var nodes2273 = $("<span>");
                iternode142.append(nodes2273);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2047, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root2876 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes2274 = $("<span>");
                  root2876.append(nodes2274);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl339();
                  }));
                  
                  function renderControl339() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root2877 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root2877); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes2274;
                      nodes2274 = node.contents();
                      oldNodes.replaceWith(nodes2274);
                    }));
                  }
                  renderControl339();
                  callback(root2876); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2273;
                  nodes2273 = node.contents();
                  oldNodes.replaceWith(nodes2273);
                }));
                
                var oldNodes = iternode142;
                iternode142 = iternode142.contents();
                oldNodes.replaceWith(iternode142);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list142.addEventListener('change', function() { listSubs__.unsubscribe(); renderList142(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList142(true); }));
          });
        };
        renderList142();
        
        callback(root2875); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2272;
        nodes2272 = node.contents();
        oldNodes.replaceWith(nodes2272);
      }));
      
      
    }
  };
  renderCond179();
  subs__.addSub(tmp2073.addEventListener('change', function() {
    renderCond179();
  }));
  
  callback(root2867); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root2878 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp2050 = mobl.ref(result__);
  
  var nodes2275 = $("<span>");
  root2878.append(nodes2275);
  subs__.addSub((ui.header)(tmp2050, mobl.ref(null), function(_, callback) {
    var root2879 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2049 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp2048 = mobl.ref(result__);
    
    var nodes2276 = $("<span>");
    root2879.append(nodes2276);
    subs__.addSub((ui.backButton)(tmp2048, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2049, function(_, callback) {
      var root2880 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2880); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2276;
      nodes2276 = node.contents();
      oldNodes.replaceWith(nodes2276);
    }));
    callback(root2879); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2275;
    nodes2275 = node.contents();
    oldNodes.replaceWith(nodes2275);
  }));
  var nodes2277 = $("<span>");
  root2878.append(nodes2277);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl340();
  }));
  
  function renderControl340() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root2881 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2881); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2277;
      nodes2277 = node.contents();
      oldNodes.replaceWith(nodes2277);
    }));
  }
  renderControl340();
  callback(root2878); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root2882 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes2278 = $("<span>");
  root2882.append(nodes2278);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2883 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node810 = mobl.loadingSpan();
    root2883.append(node810);
    var list143;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList143 = function() {
      var subs__ = listSubs__;
      list143 = coll.get();
      list143.list(function(results143) {
        node810.empty();
        for(var i479 = 0; i479 < results143.length; i479++) {
          (function() {
            var iternode143 = $("<span>");
            node810.append(iternode143);
            var it;
            it = mobl.ref(mobl.ref(results143), i479);
            var result__ = it.get() == selected.get();
            var tmp2055 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp2055.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp2055.set(it.get() == selected.get());
            }));
            
            
            var node811 = $("<span>");
            iternode143.append(node811);
            var condSubs182 = new mobl.CompSubscription();
            subs__.addSub(condSubs182);
            var oldValue182;
            var renderCond182 = function() {
              var value450 = tmp2055.get();
              if(oldValue182 === value450) return;
              oldValue182 = value450;
              var subs__ = condSubs182;
              subs__.unsubscribe();
              node811.empty();
              if(value450) {
                var nodes2279 = $("<span>");
                node811.append(nodes2279);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root2884 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes2280 = $("<span>");
                  root2884.append(nodes2280);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl341();
                  }));
                  
                  function renderControl341() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root2885 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root2885); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes2280;
                      nodes2280 = node.contents();
                      oldNodes.replaceWith(nodes2280);
                    }));
                  }
                  renderControl341();
                  callback(root2884); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2279;
                  nodes2279 = node.contents();
                  oldNodes.replaceWith(nodes2279);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp2054 = mobl.ref(result__);
                
                var nodes2281 = $("<span>");
                node811.append(nodes2281);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2054, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root2886 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes2282 = $("<span>");
                  root2886.append(nodes2282);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl342();
                  }));
                  
                  function renderControl342() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root2887 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root2887); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes2282;
                      nodes2282 = node.contents();
                      oldNodes.replaceWith(nodes2282);
                    }));
                  }
                  renderControl342();
                  callback(root2886); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2281;
                  nodes2281 = node.contents();
                  oldNodes.replaceWith(nodes2281);
                }));
                
                
              }
            };
            renderCond182();
            subs__.addSub(tmp2055.addEventListener('change', function() {
              renderCond182();
            }));
            
            
            var oldNodes = iternode143;
            iternode143 = iternode143.contents();
            oldNodes.replaceWith(iternode143);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list143.addEventListener('change', function() { listSubs__.unsubscribe(); renderList143(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList143(true); }));
      });
    };
    renderList143();
    
    callback(root2883); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2278;
    nodes2278 = node.contents();
    oldNodes.replaceWith(nodes2278);
  }));
  callback(root2882); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root2888 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp2092 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp2056 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp2056.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp2056.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp2056.set(coll.get().limit(n.get()));
    }));
    
    
    var node812 = mobl.loadingSpan();
    root2888.append(node812);
    var list144;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList144 = function() {
      var subs__ = listSubs__;
      list144 = tmp2056.get();
      list144.list(function(results144) {
        node812.empty();
        for(var i480 = 0; i480 < results144.length; i480++) {
          (function() {
            var iternode144 = $("<span>");
            node812.append(iternode144);
            var it;
            it = mobl.ref(mobl.ref(results144), i480);
            var nodes2283 = $("<span>");
            iternode144.append(nodes2283);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl343();
            }));
            
            function renderControl343() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root2889 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2889); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2283;
                nodes2283 = node.contents();
                oldNodes.replaceWith(nodes2283);
              }));
            }
            renderControl343();
            
            var oldNodes = iternode144;
            iternode144 = iternode144.contents();
            oldNodes.replaceWith(iternode144);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list144.addEventListener('change', function() { listSubs__.unsubscribe(); renderList144(true); }));
        subs__.addSub(tmp2056.addEventListener('change', function() { listSubs__.unsubscribe(); renderList144(true); }));
      });
    };
    renderList144();
    
    var result__ = n.get() < total.get();
    var tmp2058 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp2058.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp2058.set(n.get() < total.get());
    }));
    
    
    var node813 = $("<span>");
    root2888.append(node813);
    var condSubs183 = new mobl.CompSubscription();
    subs__.addSub(condSubs183);
    var oldValue183;
    var renderCond183 = function() {
      var value451 = tmp2058.get();
      if(oldValue183 === value451) return;
      oldValue183 = value451;
      var subs__ = condSubs183;
      subs__.unsubscribe();
      node813.empty();
      if(value451) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp2057 = mobl.ref(result__);
        
        var nodes2284 = $("<span>");
        node813.append(nodes2284);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp2057, mobl.ref(null), function(_, callback) {
          var root2890 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes2285 = $("<span>");
          root2890.append(nodes2285);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root2891 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root2891); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes2285;
            nodes2285 = node.contents();
            oldNodes.replaceWith(nodes2285);
          }));
          callback(root2890); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes2284;
          nodes2284 = node.contents();
          oldNodes.replaceWith(nodes2284);
        }));
        
        
      } else {
        
      }
    };
    renderCond183();
    subs__.addSub(tmp2058.addEventListener('change', function() {
      renderCond183();
    }));
    
    callback(root2888); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root2892 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2286 = $("<span>");
  root2892.append(nodes2286);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2893 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node814 = mobl.loadingSpan();
    root2893.append(node814);
    var list145;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList145 = function() {
      var subs__ = listSubs__;
      list145 = items.get();
      list145.list(function(results145) {
        node814.empty();
        for(var i481 = 0; i481 < results145.length; i481++) {
          (function() {
            var iternode145 = $("<span>");
            node814.append(iternode145);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results145), i481), "_1");it = mobl.ref(mobl.ref(mobl.ref(results145), i481), "_2");
            var nodes2287 = $("<span>");
            iternode145.append(nodes2287);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root2894 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes2288 = $("<span>");
              root2894.append(nodes2288);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root2895 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2895); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2288;
                nodes2288 = node.contents();
                oldNodes.replaceWith(nodes2288);
              }));
              callback(root2894); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes2287;
              nodes2287 = node.contents();
              oldNodes.replaceWith(nodes2287);
            }));
            
            var oldNodes = iternode145;
            iternode145 = iternode145.contents();
            oldNodes.replaceWith(iternode145);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list145.addEventListener('change', function() { listSubs__.unsubscribe(); renderList145(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList145(true); }));
      });
    };
    renderList145();
    
    callback(root2893); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2286;
    nodes2286 = node.contents();
    oldNodes.replaceWith(nodes2286);
  }));
  callback(root2892); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root2896 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll478) {
    coll478 = coll478.reverse();
    function processOne76() {
      var it;
      it = coll478.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll478.length > 0) processOne76(); else rest76();
      
    }
    function rest76() {
      var nodes2289 = $("<span>");
      root2896.append(nodes2289);
      subs__.addSub((ui.header)(title, mobl.ref(null), function(_, callback) {
        var root2897 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp2059 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp2060 = mobl.ref(result__);
        
        var nodes2290 = $("<span>");
        root2897.append(nodes2290);
        subs__.addSub((ui.backButton)(tmp2060, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2059, function(_, callback) {
          var root2898 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2898); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2290;
          nodes2290 = node.contents();
          oldNodes.replaceWith(nodes2290);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll477) {
                           coll477 = coll477.reverse();
                           function processOne75() {
                             var checked;var it;
                             var tmp2094 = coll477.pop();
                             checked = tmp2094._1;it = tmp2094._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll477.length > 0) processOne75(); else rest75();
                               
                             } else {
                               {
                                 
                                 if(coll477.length > 0) processOne75(); else rest75();
                                 
                               }
                             }
                           }
                           function rest75() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll477.length > 0) processOne75(); else rest75();
                         });
                         
                       };
        var tmp2061 = mobl.ref(result__);
        
        var nodes2291 = $("<span>");
        root2897.append(nodes2291);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp2061, function(_, callback) {
          var root2899 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2899); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2291;
          nodes2291 = node.contents();
          oldNodes.replaceWith(nodes2291);
        }));
        callback(root2897); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2289;
        nodes2289 = node.contents();
        oldNodes.replaceWith(nodes2289);
      }));
      var nodes2292 = $("<span>");
      root2896.append(nodes2292);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root2900 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2900); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2292;
        nodes2292 = node.contents();
        oldNodes.replaceWith(nodes2292);
      }));
      callback(root2896); return subs__;
      
      
    }
    if(coll478.length > 0) processOne76(); else rest76();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root2901 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes2293 = $("<span>");
  root2901.append(nodes2293);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root2902 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2902); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2293;
    nodes2293 = node.contents();
    oldNodes.replaceWith(nodes2293);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp2062 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp2062.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp2062.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp2062.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp2062.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp2062.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes2294 = $("<span>");
  root2901.append(nodes2294);
  subs__.addSub((ui.masterDetail)(tmp2062, masterItem, detailItem, function(_, callback) {
    var root2903 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2903); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2294;
    nodes2294 = node.contents();
    oldNodes.replaceWith(nodes2294);
  }));
  callback(root2901); return subs__;
  
  
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
  var root2904 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes2295 = $("<span>");
  root2904.append(nodes2295);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root2905 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node815 = mobl.loadingSpan();
    root2905.append(node815);
    var list146;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList146 = function() {
      var subs__ = listSubs__;
      list146 = sections.get();
      list146.list(function(results146) {
        node815.empty();
        for(var i482 = 0; i482 < results146.length; i482++) {
          (function() {
            var iternode146 = $("<span>");
            node815.append(iternode146);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results146), i482), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results146), i482), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp2064 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp2064.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp2064.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp2064.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp2064.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp2063 = mobl.ref(result__);
            
            var nodes2296 = $("<span>");
            iternode146.append(nodes2296);
            subs__.addSub((mobl.span)(tmp2064, mobl.ref(null), tmp2063, mobl.ref(null), function(_, callback) {
              var root2906 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes2297 = $("<span>");
              root2906.append(nodes2297);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root2907 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2907); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2297;
                nodes2297 = node.contents();
                oldNodes.replaceWith(nodes2297);
              }));
              callback(root2906); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes2296;
              nodes2296 = node.contents();
              oldNodes.replaceWith(nodes2296);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp2065 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp2065.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp2065.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp2065.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp2065.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes2298 = $("<span>");
            iternode146.append(nodes2298);
            subs__.addSub((mobl.block)(tmp2065, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root2908 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes2299 = $("<span>");
              root2908.append(nodes2299);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl344();
              }));
              
              function renderControl344() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root2909 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root2909); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2299;
                  nodes2299 = node.contents();
                  oldNodes.replaceWith(nodes2299);
                }));
              }
              renderControl344();
              callback(root2908); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes2298;
              nodes2298 = node.contents();
              oldNodes.replaceWith(nodes2298);
            }));
            
            var oldNodes = iternode146;
            iternode146 = iternode146.contents();
            oldNodes.replaceWith(iternode146);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list146.addEventListener('change', function() { listSubs__.unsubscribe(); renderList146(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList146(true); }));
      });
    };
    renderList146();
    
    callback(root2905); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2295;
    nodes2295 = node.contents();
    oldNodes.replaceWith(nodes2295);
  }));
  callback(root2904); return subs__;
  
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
  var root2910 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node816 = $("<table>");
  
  var ref729 = style;
  if(ref729.get() !== null) {
    node816.attr('class', ref729.get());
    subs__.addSub(ref729.addEventListener('change', function(_, ref, val) {
      node816.attr('class', val);
    }));
    
  }
  subs__.addSub(ref729.rebind());
  
  var nodes2300 = $("<span>");
  node816.append(nodes2300);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl345();
  }));
  
  function renderControl345() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2911 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2911); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2300;
      nodes2300 = node.contents();
      oldNodes.replaceWith(nodes2300);
    }));
  }
  renderControl345();
  root2910.append(node816);
  callback(root2910); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root2912 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node817 = $("<tr>");
  
  var ref730 = style;
  if(ref730.get() !== null) {
    node817.attr('class', ref730.get());
    subs__.addSub(ref730.addEventListener('change', function(_, ref, val) {
      node817.attr('class', val);
    }));
    
  }
  subs__.addSub(ref730.rebind());
  
  var nodes2301 = $("<span>");
  node817.append(nodes2301);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl346();
  }));
  
  function renderControl346() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2913 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2913); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2301;
      nodes2301 = node.contents();
      oldNodes.replaceWith(nodes2301);
    }));
  }
  renderControl346();
  root2912.append(node817);
  callback(root2912); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root2914 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node818 = $("<td>");
  
  var ref731 = width;
  if(ref731.get() !== null) {
    node818.attr('width', ref731.get());
    subs__.addSub(ref731.addEventListener('change', function(_, ref, val) {
      node818.attr('width', val);
    }));
    
  }
  subs__.addSub(ref731.rebind());
  
  var ref732 = style;
  if(ref732.get() !== null) {
    node818.attr('class', ref732.get());
    subs__.addSub(ref732.addEventListener('change', function(_, ref, val) {
      node818.attr('class', val);
    }));
    
  }
  subs__.addSub(ref732.rebind());
  
  var nodes2302 = $("<span>");
  node818.append(nodes2302);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl347();
  }));
  
  function renderControl347() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2915 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2915); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2302;
      nodes2302 = node.contents();
      oldNodes.replaceWith(nodes2302);
    }));
  }
  renderControl347();
  root2914.append(node818);
  callback(root2914); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root2916 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node819 = $("<td>");
  
  var ref733 = width;
  if(ref733.get() !== null) {
    node819.attr('width', ref733.get());
    subs__.addSub(ref733.addEventListener('change', function(_, ref, val) {
      node819.attr('width', val);
    }));
    
  }
  subs__.addSub(ref733.rebind());
  
  var ref734 = style;
  if(ref734.get() !== null) {
    node819.attr('class', ref734.get());
    subs__.addSub(ref734.addEventListener('change', function(_, ref, val) {
      node819.attr('class', val);
    }));
    
  }
  subs__.addSub(ref734.rebind());
  
  var nodes2303 = $("<span>");
  node819.append(nodes2303);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl348();
  }));
  
  function renderControl348() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2917 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2917); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2303;
      nodes2303 = node.contents();
      oldNodes.replaceWith(nodes2303);
    }));
  }
  renderControl348();
  root2916.append(node819);
  callback(root2916); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root2918 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node820 = $("<td>");
  
  var ref735 = width;
  if(ref735.get() !== null) {
    node820.attr('width', ref735.get());
    subs__.addSub(ref735.addEventListener('change', function(_, ref, val) {
      node820.attr('width', val);
    }));
    
  }
  subs__.addSub(ref735.rebind());
  
  var ref736 = style;
  if(ref736.get() !== null) {
    node820.attr('class', ref736.get());
    subs__.addSub(ref736.addEventListener('change', function(_, ref, val) {
      node820.attr('class', val);
    }));
    
  }
  subs__.addSub(ref736.rebind());
  
  
  var node821 = $("<strong>");
  
  var nodes2304 = $("<span>");
  node821.append(nodes2304);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl349();
  }));
  
  function renderControl349() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2919 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2919); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2304;
      nodes2304 = node.contents();
      oldNodes.replaceWith(nodes2304);
    }));
  }
  renderControl349();
  node820.append(node821);
  root2918.append(node820);
  callback(root2918); return subs__;
  
  
  
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
  items.list(function(coll479) {
    coll479 = coll479.reverse();
    function processOne77() {
      var item;
      item = coll479.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll479.length > 0) processOne77(); else rest77();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll479.length > 0) processOne77(); else rest77();
          
        }
      }
    }
    function rest77() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll479.length > 0) processOne77(); else rest77();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root2920 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp2074 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp2074.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node822 = $("<span>");
  root2920.append(node822);
  var condSubs184 = new mobl.CompSubscription();
  subs__.addSub(condSubs184);
  var oldValue184;
  var renderCond184 = function() {
    var value452 = tmp2074.get();
    if(oldValue184 === value452) return;
    oldValue184 = value452;
    var subs__ = condSubs184;
    subs__.unsubscribe();
    node822.empty();
    if(value452) {
      items.get().one(function(result__) {
        var tmp2096 = result__;
        var current = mobl.ref(result__);
        
        var node823 = $("<div>");
        node823.attr('width', "100%");
        
        
        var node824 = $("<div>");
        node824.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes2306 = $("<span>");
        node824.append(nodes2306);
        subs__.addSub((ui.group)(function(_, callback) {
          var root2922 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node829 = mobl.loadingSpan();
          root2922.append(node829);
          var list147;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList147 = function() {
            var subs__ = listSubs__;
            list147 = items.get();
            list147.list(function(results147) {
              node829.empty();
              for(var i483 = 0; i483 < results147.length; i483++) {
                (function() {
                  var iternode147 = $("<span>");
                  node829.append(iternode147);
                  var it;
                  it = mobl.ref(mobl.ref(results147), i483);
                  var result__ = it.get() == current.get();
                  var tmp2071 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp2071.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp2071.set(it.get() == current.get());
                  }));
                  
                  
                  var node830 = $("<span>");
                  iternode147.append(node830);
                  var condSubs186 = new mobl.CompSubscription();
                  subs__.addSub(condSubs186);
                  var oldValue186;
                  var renderCond186 = function() {
                    var value454 = tmp2071.get();
                    if(oldValue186 === value454) return;
                    oldValue186 = value454;
                    var subs__ = condSubs186;
                    subs__.unsubscribe();
                    node830.empty();
                    if(value454) {
                      var nodes2307 = $("<span>");
                      node830.append(nodes2307);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root2923 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp2099 = result__;
                          var tmp2068 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp2097 = result__;
                              var result__ = tmp2097;
                              tmp2068.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp2098 = result__;
                              var result__ = tmp2098;
                              tmp2068.set(result__);
                              
                            });
                          }));
                          
                          var nodes2308 = $("<span>");
                          root2923.append(nodes2308);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl351();
                          }));
                          
                          function renderControl351() {
                            subs__.addSub((masterItem.get())(it, tmp2068, function(elements, callback) {
                              var root2924 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root2924); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes2308;
                              nodes2308 = node.contents();
                              oldNodes.replaceWith(nodes2308);
                            }));
                          }
                          renderControl351();
                          callback(root2923); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes2307;
                        nodes2307 = node.contents();
                        oldNodes.replaceWith(nodes2307);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = true;
                                       ui.visible.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp2070 = mobl.ref(result__);
                      
                      var nodes2309 = $("<span>");
                      node830.append(nodes2309);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2070, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root2925 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp2102 = result__;
                          var tmp2069 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp2100 = result__;
                              var result__ = tmp2100;
                              tmp2069.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp2101 = result__;
                              var result__ = tmp2101;
                              tmp2069.set(result__);
                              
                            });
                          }));
                          
                          var nodes2310 = $("<span>");
                          root2925.append(nodes2310);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl352();
                          }));
                          
                          function renderControl352() {
                            subs__.addSub((masterItem.get())(it, tmp2069, function(elements, callback) {
                              var root2926 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root2926); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes2310;
                              nodes2310 = node.contents();
                              oldNodes.replaceWith(nodes2310);
                            }));
                          }
                          renderControl352();
                          callback(root2925); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes2309;
                        nodes2309 = node.contents();
                        oldNodes.replaceWith(nodes2309);
                      }));
                      
                      
                    }
                  };
                  renderCond186();
                  subs__.addSub(tmp2071.addEventListener('change', function() {
                    renderCond186();
                  }));
                  
                  
                  var oldNodes = iternode147;
                  iternode147 = iternode147.contents();
                  oldNodes.replaceWith(iternode147);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list147.addEventListener('change', function() { listSubs__.unsubscribe(); renderList147(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList147(true); }));
            });
          };
          renderList147();
          
          callback(root2922); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes2306;
          nodes2306 = node.contents();
          oldNodes.replaceWith(nodes2306);
        }));
        node823.append(node824);
        
        var node825 = $("<div>");
        node825.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        var result__ = current.get() && ui.visible.get();
        var tmp2072 = mobl.ref(result__);
        subs__.addSub(current.addEventListener('change', function() {
          tmp2072.set(current.get() && ui.visible.get());
        }));
        subs__.addSub(ui.visible.addEventListener('change', function() {
          tmp2072.set(current.get() && ui.visible.get());
        }));
        
        
        var node826 = $("<span>");
        node825.append(node826);
        var condSubs185 = new mobl.CompSubscription();
        subs__.addSub(condSubs185);
        var oldValue185;
        var renderCond185 = function() {
          var value453 = tmp2072.get();
          if(oldValue185 === value453) return;
          oldValue185 = value453;
          var subs__ = condSubs185;
          subs__.unsubscribe();
          node826.empty();
          if(value453) {
            var nodes2305 = $("<span>");
            node826.append(nodes2305);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl350();
            }));
            
            function renderControl350() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root2921 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2921); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2305;
                nodes2305 = node.contents();
                oldNodes.replaceWith(nodes2305);
              }));
            }
            renderControl350();
            
            
          } else {
            
            var node827 = $("<div>");
            node827.attr('style', "padding:20px");
            
            
            var node828 = $("<h2>");
            
            
            node828.append("Add your questions here!");
            node827.append(node828);
            node826.append(node827);
            
            
            
          }
        };
        renderCond185();
        subs__.addSub(tmp2072.addEventListener('change', function() {
          renderCond185();
        }));
        
        node823.append(node825);
        node822.append(node823);
        
        
        
        
        
        
      });
    } else {
      var nodes2311 = $("<span>");
      node822.append(nodes2311);
      subs__.addSub((ui.group)(function(_, callback) {
        var root2927 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node831 = mobl.loadingSpan();
        root2927.append(node831);
        var list148;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList148 = function() {
          var subs__ = listSubs__;
          list148 = items.get();
          list148.list(function(results148) {
            node831.empty();
            for(var i484 = 0; i484 < results148.length; i484++) {
              (function() {
                var iternode148 = $("<span>");
                node831.append(iternode148);
                var it;
                it = mobl.ref(mobl.ref(results148), i484);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp2106 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp2067 = mobl.ref(result__);
                
                var nodes2312 = $("<span>");
                iternode148.append(nodes2312);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2067, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root2928 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp2105 = result__;
                    var tmp2066 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp2103 = result__;
                        var result__ = tmp2103;
                        tmp2066.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp2104 = result__;
                        var result__ = tmp2104;
                        tmp2066.set(result__);
                        
                      });
                    }));
                    
                    var nodes2313 = $("<span>");
                    root2928.append(nodes2313);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl353();
                    }));
                    
                    function renderControl353() {
                      subs__.addSub((masterItem.get())(it, tmp2066, function(elements, callback) {
                        var root2929 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root2929); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes2313;
                        nodes2313 = node.contents();
                        oldNodes.replaceWith(nodes2313);
                      }));
                    }
                    renderControl353();
                    callback(root2928); return subs__;
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2312;
                  nodes2312 = node.contents();
                  oldNodes.replaceWith(nodes2312);
                }));
                
                var oldNodes = iternode148;
                iternode148 = iternode148.contents();
                oldNodes.replaceWith(iternode148);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list148.addEventListener('change', function() { listSubs__.unsubscribe(); renderList148(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList148(true); }));
          });
        };
        renderList148();
        
        callback(root2927); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2311;
        nodes2311 = node.contents();
        oldNodes.replaceWith(nodes2311);
      }));
      
      
    }
  };
  renderCond184();
  subs__.addSub(tmp2074.addEventListener('change', function() {
    renderCond184();
  }));
  
  callback(root2920); return subs__;
  
  return subs__;
};
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.section = 'ui__section';
ui.logoStyle = 'ui__logoStyle';
