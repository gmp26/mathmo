mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root2659 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node918 = $("<span>");
  root2659.append(node918);
  var condSubs183 = new mobl.CompSubscription();
  subs__.addSub(condSubs183);
  var oldValue183;
  var renderCond183 = function() {
    var value341 = value.get();
    if(oldValue183 === value341) return;
    oldValue183 = value341;
    var subs__ = condSubs183;
    subs__.unsubscribe();
    node918.empty();
    if(value341) {
      var nodes1883 = $("<span>");
      node918.append(nodes1883);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl349();
      }));
      
      function renderControl349() {
        subs__.addSub((elements)(function(elements, callback) {
          var root2660 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2660); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1883;
          nodes1883 = node.contents();
          oldNodes.replaceWith(nodes1883);
        }));
      }
      renderControl349();
      
      
    } else {
      var nodes1884 = $("<span>");
      node918.append(nodes1884);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2661 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes1885 = $("<span>");
        root2661.append(nodes1885);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root2662 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2662); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1885;
          nodes1885 = node.contents();
          oldNodes.replaceWith(nodes1885);
        }));
        var nodes1886 = $("<span>");
        root2661.append(nodes1886);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root2663 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2663); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1886;
          nodes1886 = node.contents();
          oldNodes.replaceWith(nodes1886);
        }));
        callback(root2661); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1884;
        nodes1884 = node.contents();
        oldNodes.replaceWith(nodes1884);
      }));
      
      
    }
  };
  renderCond183();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond183();
  }));
  
  callback(root2659); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root2664 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node919 = $("<div>");
  
  var ref1305 = mobl.ref(ui.headerStyle);
  if(ref1305.get() !== null) {
    node919.attr('class', ref1305.get());
    subs__.addSub(ref1305.addEventListener('change', function(_, ref, val) {
      node919.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1305.rebind());
  
  var val756 = onclick.get();
  if(val756 !== null) {
    subs__.addSub(mobl.domBind(node919, 'tap', val756));
  }
  
  var ref1306 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref1306.get() !== null) {
    node919.attr('style', ref1306.get());
    subs__.addSub(ref1306.addEventListener('change', function(_, ref, val) {
      node919.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node919.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref1306.rebind());
  
  
  var node922 = $("<div>");
  
  var ref1304 = mobl.ref(ui.headerContainerStyle);
  if(ref1304.get() !== null) {
    node922.attr('class', ref1304.get());
    subs__.addSub(ref1304.addEventListener('change', function(_, ref, val) {
      node922.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1304.rebind());
  
  
  var node923 = $("<div>");
  
  var ref1302 = text;
  node923.text(""+ref1302.get());
  var ignore279 = false;
  subs__.addSub(ref1302.addEventListener('change', function(_, ref, val) {
    if(ignore279) return;
    node923.text(""+val);
  }));
  subs__.addSub(ref1302.rebind());
  
  
  var ref1303 = mobl.ref(ui.headerTextStyle);
  if(ref1303.get() !== null) {
    node923.attr('class', ref1303.get());
    subs__.addSub(ref1303.addEventListener('change', function(_, ref, val) {
      node923.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1303.rebind());
  
  node922.append(node923);
  node919.append(node922);
  var nodes1887 = $("<span>");
  node919.append(nodes1887);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl350();
  }));
  
  function renderControl350() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2665 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2665); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1887;
      nodes1887 = node.contents();
      oldNodes.replaceWith(nodes1887);
    }));
  }
  renderControl350();
  root2664.append(node919);
  
  var node920 = $("<span>");
  root2664.append(node920);
  var condSubs184 = new mobl.CompSubscription();
  subs__.addSub(condSubs184);
  var oldValue184;
  var renderCond184 = function() {
    var value342 = fixedPosition.get();
    if(oldValue184 === value342) return;
    oldValue184 = value342;
    var subs__ = condSubs184;
    subs__.unsubscribe();
    node920.empty();
    if(value342) {
      
      var node921 = $("<div>");
      node921.attr('id', "hello");
      node921.attr('style', "height: 2.9em;");
      
      node920.append(node921);
      
      
    } else {
      
    }
  };
  renderCond184();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond184();
  }));
  
  callback(root2664); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root2666 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref1307 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref1307.get() !== null) {
    sp.attr('class', ref1307.get());
    subs__.addSub(ref1307.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1307.rebind());
  
  var val757 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val757 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val757));
  }
  
  var val758 = function(event, callback) {
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
  if(val758 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val758));
  }
  
  var val759 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after213(result__) {
                    var tmp1909 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after213);if(result__ !== undefined) after213(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val759 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val759));
  }
  
  var val760 = function(event, callback) {
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
  if(val760 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val760));
  }
  
  var ref1308 = text;
  sp.text(""+ref1308.get());
  var ignore280 = false;
  subs__.addSub(ref1308.addEventListener('change', function(_, ref, val) {
    if(ignore280) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref1308.rebind());
  
  
  root2666.append(sp);
  callback(root2666); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root2667 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1888 = $("<span>");
  root2667.append(nodes1888);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root2668 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2668); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1888;
    nodes1888 = node.contents();
    oldNodes.replaceWith(nodes1888);
  }));
  callback(root2667); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root2669 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1889 = $("<span>");
  root2669.append(nodes1889);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root2670 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2670); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1889;
    nodes1889 = node.contents();
    oldNodes.replaceWith(nodes1889);
  }));
  callback(root2669); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root2671 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node924 = $("<ul>");
  
  var ref1309 = mobl.ref(ui.groupStyle);
  if(ref1309.get() !== null) {
    node924.attr('class', ref1309.get());
    subs__.addSub(ref1309.addEventListener('change', function(_, ref, val) {
      node924.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1309.rebind());
  
  var nodes1890 = $("<span>");
  node924.append(nodes1890);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl351();
  }));
  
  function renderControl351() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2672 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2672); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1890;
      nodes1890 = node.contents();
      oldNodes.replaceWith(nodes1890);
    }));
  }
  renderControl351();
  root2671.append(node924);
  callback(root2671); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root2673 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node925 = $("<img>");
  
  var ref1310 = url;
  if(ref1310.get() !== null) {
    node925.attr('src', ref1310.get());
    subs__.addSub(ref1310.addEventListener('change', function(_, ref, val) {
      node925.attr('src', val);
    }));
    
  }
  subs__.addSub(ref1310.rebind());
  
  var ref1311 = width;
  if(ref1311.get() !== null) {
    node925.attr('width', ref1311.get());
    subs__.addSub(ref1311.addEventListener('change', function(_, ref, val) {
      node925.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1311.rebind());
  
  var ref1312 = height;
  if(ref1312.get() !== null) {
    node925.attr('height', ref1312.get());
    subs__.addSub(ref1312.addEventListener('change', function(_, ref, val) {
      node925.attr('height', val);
    }));
    
  }
  subs__.addSub(ref1312.rebind());
  
  var ref1313 = style;
  if(ref1313.get() !== null) {
    node925.attr('class', ref1313.get());
    subs__.addSub(ref1313.addEventListener('change', function(_, ref, val) {
      node925.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1313.rebind());
  
  var val761 = onclick.get();
  if(val761 !== null) {
    subs__.addSub(mobl.domBind(node925, 'tap', val761));
  }
  
  var ref1314 = valign;
  if(ref1314.get() !== null) {
    node925.attr('valign', ref1314.get());
    subs__.addSub(ref1314.addEventListener('change', function(_, ref, val) {
      node925.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref1314.rebind());
  
  var ref1315 = align;
  if(ref1315.get() !== null) {
    node925.attr('align', ref1315.get());
    subs__.addSub(ref1315.addEventListener('change', function(_, ref, val) {
      node925.attr('align', val);
    }));
    
  }
  subs__.addSub(ref1315.rebind());
  
  root2673.append(node925);
  callback(root2673); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root2674 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref1316 = mobl.ref(ui.itemStyle);
  if(ref1316.get() !== null) {
    el.attr('class', ref1316.get());
    subs__.addSub(ref1316.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1316.rebind());
  
  var ref1317 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref1317.get() !== null) {
    el.attr('class', ref1317.get());
    subs__.addSub(ref1317.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1317.rebind());
  
  var val762 = onswipe.get();
  if(val762 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val762));
  }
  
  var val763 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp1910 = result__;
                                           function after214(result__) {
                                             var tmp1911 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after214);if(result__ !== undefined) after214(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp1912 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val763 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val763));
  }
  
  var nodes1891 = $("<span>");
  el.append(nodes1891);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl352();
  }));
  
  function renderControl352() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2675 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2675); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1891;
      nodes1891 = node.contents();
      oldNodes.replaceWith(nodes1891);
    }));
  }
  renderControl352();
  root2674.append(el);
  callback(root2674); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root2676 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node926 = $("<input>");
  node926.attr('type', "checkbox");
  
  var ref1319 = b;
  node926.attr('checked', !!ref1319.get());
  subs__.addSub(ref1319.addEventListener('change', function(_, ref, val) {
    if(ref === ref1319) node926.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node926, 'change', function() {
    b.set(!!node926.attr('checked'));
  }));
  
  var val765 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val765 !== null) {
    subs__.addSub(mobl.domBind(node926, 'tap', val765));
  }
  
  var val766 = onchange.get();
  if(val766 !== null) {
    subs__.addSub(mobl.domBind(node926, 'change', val766));
  }
  
  root2676.append(node926);
  
  root2676.append(" ");
  
  var node927 = $("<span>");
  
  var ref1318 = label;
  node927.text(""+ref1318.get());
  var ignore281 = false;
  subs__.addSub(ref1318.addEventListener('change', function(_, ref, val) {
    if(ignore281) return;
    node927.text(""+val);
  }));
  subs__.addSub(ref1318.rebind());
  
  
  var val764 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after215(result__) {
                    var tmp1913 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after215);if(result__ !== undefined) after215(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val764 !== null) {
    subs__.addSub(mobl.domBind(node927, 'tap', val764));
  }
  
  root2676.append(node927);
  callback(root2676); return subs__;
  
  
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
  var root2677 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node928 = $("<span>");
  root2677.append(node928);
  var condSubs185 = new mobl.CompSubscription();
  subs__.addSub(condSubs185);
  var oldValue185;
  var renderCond185 = function() {
    var value343 = label.get();
    if(oldValue185 === value343) return;
    oldValue185 = value343;
    var subs__ = condSubs185;
    subs__.unsubscribe();
    node928.empty();
    if(value343) {
      var nodes1892 = $("<span>");
      node928.append(nodes1892);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root2678 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2678); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1892;
        nodes1892 = node.contents();
        oldNodes.replaceWith(nodes1892);
      }));
      
      
    } else {
      
    }
  };
  renderCond185();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond185();
  }));
  
  
  var node929 = $("<span>");
  root2677.append(node929);
  var condSubs186 = new mobl.CompSubscription();
  subs__.addSub(condSubs186);
  var oldValue186;
  var renderCond186 = function() {
    var value344 = validator.get();
    if(oldValue186 === value344) return;
    oldValue186 = value344;
    var subs__ = condSubs186;
    subs__.unsubscribe();
    node929.empty();
    if(value344) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after219(result__) {
        var tmp1914 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp1915 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node930 = $("<input>");
        
        var ref1320 = inputType;
        if(ref1320.get() !== null) {
          node930.attr('type', ref1320.get());
          subs__.addSub(ref1320.addEventListener('change', function(_, ref, val) {
            node930.attr('type', val);
          }));
          
        }
        subs__.addSub(ref1320.rebind());
        
        var ref1321 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref1321.get() !== null) {
          node930.attr('class', ref1321.get());
          subs__.addSub(ref1321.addEventListener('change', function(_, ref, val) {
            node930.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node930.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node930.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node930.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref1321.rebind());
        
        var ref1322 = placeholder;
        if(ref1322.get() !== null) {
          node930.attr('placeholder', ref1322.get());
          subs__.addSub(ref1322.addEventListener('change', function(_, ref, val) {
            node930.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref1322.rebind());
        
        var ref1323 = temp;
        node930.val(""+ref1323.get());
        var ignore282 = false;
        subs__.addSub(ref1323.addEventListener('change', function(_, ref, val) {
          if(ignore282) return;
          node930.val(""+val);
        }));
        subs__.addSub(ref1323.rebind());
        
        subs__.addSub(mobl.domBind(node930, 'keyup change', function() {
          ignore282 = true;
          temp.set(mobl.stringTomobl__String(node930.val()));
          ignore282 = false;
        }));
        
        
        var val767 = onchange.get();
        if(val767 !== null) {
          subs__.addSub(mobl.domBind(node930, 'change', val767));
        }
        
        var val768 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after216(result__) {
                          var tmp1916 = result__;
                          function after217(result__) {
                            var tmp1917 = result__;
                            var result__ = tmp1917;
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
                          var result__ = validator.get()(temp.get(), after217);if(result__ !== undefined) after217(result__);
                        }
                        var result__ = onkeyup.get()(event, after216);if(result__ !== undefined) after216(result__);
                      } else {
                        {
                          function after218(result__) {
                            var tmp1917 = result__;
                            var result__ = tmp1917;
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
                          var result__ = validator.get()(temp.get(), after218);if(result__ !== undefined) after218(result__);
                        }
                      }
                    };
        if(val768 !== null) {
          subs__.addSub(mobl.domBind(node930, 'keyup', val768));
        }
        
        var val769 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val769 !== null) {
          subs__.addSub(mobl.domBind(node930, 'blur', val769));
        }
        
        node929.append(node930);
        var nodes1893 = $("<span>");
        node929.append(nodes1893);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root2679 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2679); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1893;
          nodes1893 = node.contents();
          oldNodes.replaceWith(nodes1893);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after219);if(result__ !== undefined) after219(result__);
    } else {
      
      var node931 = $("<input>");
      
      var ref1324 = inputType;
      if(ref1324.get() !== null) {
        node931.attr('type', ref1324.get());
        subs__.addSub(ref1324.addEventListener('change', function(_, ref, val) {
          node931.attr('type', val);
        }));
        
      }
      subs__.addSub(ref1324.rebind());
      
      var ref1325 = style;
      if(ref1325.get() !== null) {
        node931.attr('class', ref1325.get());
        subs__.addSub(ref1325.addEventListener('change', function(_, ref, val) {
          node931.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1325.rebind());
      
      var ref1326 = placeholder;
      if(ref1326.get() !== null) {
        node931.attr('placeholder', ref1326.get());
        subs__.addSub(ref1326.addEventListener('change', function(_, ref, val) {
          node931.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1326.rebind());
      
      var ref1327 = s;
      node931.val(""+ref1327.get());
      var ignore283 = false;
      subs__.addSub(ref1327.addEventListener('change', function(_, ref, val) {
        if(ignore283) return;
        node931.val(""+val);
      }));
      subs__.addSub(ref1327.rebind());
      
      subs__.addSub(mobl.domBind(node931, 'keyup change', function() {
        ignore283 = true;
        s.set(mobl.stringTomobl__String(node931.val()));
        ignore283 = false;
      }));
      
      
      var val770 = onchange.get();
      if(val770 !== null) {
        subs__.addSub(mobl.domBind(node931, 'change', val770));
      }
      
      var val771 = onkeyup.get();
      if(val771 !== null) {
        subs__.addSub(mobl.domBind(node931, 'keyup', val771));
      }
      
      var val772 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val772 !== null) {
        subs__.addSub(mobl.domBind(node931, 'blur', val772));
      }
      
      node929.append(node931);
      
      
    }
  };
  renderCond186();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond186();
  }));
  
  callback(root2677); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root2680 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1894 = $("<span>");
  root2680.append(nodes1894);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root2681 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2681); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1894;
    nodes1894 = node.contents();
    oldNodes.replaceWith(nodes1894);
  }));
  callback(root2680); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root2682 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1895 = $("<span>");
  root2682.append(nodes1895);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root2683 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2683); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1895;
    nodes1895 = node.contents();
    oldNodes.replaceWith(nodes1895);
  }));
  callback(root2682); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root2684 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node932 = $("<span>");
  root2684.append(node932);
  var condSubs187 = new mobl.CompSubscription();
  subs__.addSub(condSubs187);
  var oldValue187;
  var renderCond187 = function() {
    var value345 = label.get();
    if(oldValue187 === value345) return;
    oldValue187 = value345;
    var subs__ = condSubs187;
    subs__.unsubscribe();
    node932.empty();
    if(value345) {
      var nodes1896 = $("<span>");
      node932.append(nodes1896);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root2685 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2685); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1896;
        nodes1896 = node.contents();
        oldNodes.replaceWith(nodes1896);
      }));
      
      
    } else {
      
    }
  };
  renderCond187();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond187();
  }));
  
  
  var node933 = $("<input>");
  node933.attr('type', "range");
  
  var ref1328 = n;
  node933.val(""+ref1328.get());
  var ignore284 = false;
  subs__.addSub(ref1328.addEventListener('change', function(_, ref, val) {
    if(ignore284) return;
    node933.val(""+val);
  }));
  subs__.addSub(ref1328.rebind());
  
  subs__.addSub(mobl.domBind(node933, 'keyup change', function() {
    ignore284 = true;
    n.set(mobl.stringTomobl__Num(node933.val()));
    ignore284 = false;
  }));
  
  
  var ref1329 = min;
  if(ref1329.get() !== null) {
    node933.attr('min', ref1329.get());
    subs__.addSub(ref1329.addEventListener('change', function(_, ref, val) {
      node933.attr('min', val);
    }));
    
  }
  subs__.addSub(ref1329.rebind());
  
  var ref1330 = max;
  if(ref1330.get() !== null) {
    node933.attr('max', ref1330.get());
    subs__.addSub(ref1330.addEventListener('change', function(_, ref, val) {
      node933.attr('max', val);
    }));
    
  }
  subs__.addSub(ref1330.rebind());
  
  var ref1331 = step;
  if(ref1331.get() !== null) {
    node933.attr('step', ref1331.get());
    subs__.addSub(ref1331.addEventListener('change', function(_, ref, val) {
      node933.attr('step', val);
    }));
    
  }
  subs__.addSub(ref1331.rebind());
  node933.attr('style', "width: 99%;");
  
  var val773 = onchange.get();
  if(val773 !== null) {
    subs__.addSub(mobl.domBind(node933, 'change', val773));
  }
  
  var val774 = onkeyup.get();
  if(val774 !== null) {
    subs__.addSub(mobl.domBind(node933, 'keyup', val774));
  }
  
  var ref1332 = placeholder;
  if(ref1332.get() !== null) {
    node933.attr('placeholder', ref1332.get());
    subs__.addSub(ref1332.addEventListener('change', function(_, ref, val) {
      node933.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1332.rebind());
  
  root2684.append(node933);
  callback(root2684); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root2686 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after220(result__) {
      var tmp1918 = result__;
      var result__ = tmp1918;
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
    var result__ = validator.get()(n2, after220);if(result__ !== undefined) after220(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes1897 = $("<span>");
  root2686.append(nodes1897);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root2687 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2687); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1897;
    nodes1897 = node.contents();
    oldNodes.replaceWith(nodes1897);
  }));
  callback(root2686); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root2688 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node934 = $("<span>");
  root2688.append(node934);
  var condSubs188 = new mobl.CompSubscription();
  subs__.addSub(condSubs188);
  var oldValue188;
  var renderCond188 = function() {
    var value346 = label.get();
    if(oldValue188 === value346) return;
    oldValue188 = value346;
    var subs__ = condSubs188;
    subs__.unsubscribe();
    node934.empty();
    if(value346) {
      
      var node935 = $("<span>");
      node935.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref1336 = label;
      node935.text(""+ref1336.get());
      var ignore286 = false;
      subs__.addSub(ref1336.addEventListener('change', function(_, ref, val) {
        if(ignore286) return;
        node935.text(""+val);
      }));
      subs__.addSub(ref1336.rebind());
      
      
      node934.append(node935);
      
      var node936 = $("<span>");
      node936.attr('style', "float: left");
      
      
      var node937 = $("<input>");
      node937.attr('type', "password");
      
      var ref1333 = style;
      if(ref1333.get() !== null) {
        node937.attr('class', ref1333.get());
        subs__.addSub(ref1333.addEventListener('change', function(_, ref, val) {
          node937.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1333.rebind());
      
      var ref1334 = placeholder;
      if(ref1334.get() !== null) {
        node937.attr('placeholder', ref1334.get());
        subs__.addSub(ref1334.addEventListener('change', function(_, ref, val) {
          node937.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1334.rebind());
      
      var ref1335 = s;
      node937.val(""+ref1335.get());
      var ignore285 = false;
      subs__.addSub(ref1335.addEventListener('change', function(_, ref, val) {
        if(ignore285) return;
        node937.val(""+val);
      }));
      subs__.addSub(ref1335.rebind());
      
      subs__.addSub(mobl.domBind(node937, 'keyup change', function() {
        ignore285 = true;
        s.set(mobl.stringTomobl__String(node937.val()));
        ignore285 = false;
      }));
      
      
      var val775 = onchange.get();
      if(val775 !== null) {
        subs__.addSub(mobl.domBind(node937, 'change', val775));
      }
      
      var val776 = onkeyup.get();
      if(val776 !== null) {
        subs__.addSub(mobl.domBind(node937, 'keyup', val776));
      }
      
      var val777 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val777 !== null) {
        subs__.addSub(mobl.domBind(node937, 'blur', val777));
      }
      
      node936.append(node937);
      node934.append(node936);
      
      
      
      
    } else {
      
      var node938 = $("<input>");
      node938.attr('type', "password");
      
      var ref1337 = style;
      if(ref1337.get() !== null) {
        node938.attr('class', ref1337.get());
        subs__.addSub(ref1337.addEventListener('change', function(_, ref, val) {
          node938.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1337.rebind());
      
      var ref1338 = placeholder;
      if(ref1338.get() !== null) {
        node938.attr('placeholder', ref1338.get());
        subs__.addSub(ref1338.addEventListener('change', function(_, ref, val) {
          node938.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1338.rebind());
      
      var ref1339 = s;
      node938.val(""+ref1339.get());
      var ignore287 = false;
      subs__.addSub(ref1339.addEventListener('change', function(_, ref, val) {
        if(ignore287) return;
        node938.val(""+val);
      }));
      subs__.addSub(ref1339.rebind());
      
      subs__.addSub(mobl.domBind(node938, 'keyup change', function() {
        ignore287 = true;
        s.set(mobl.stringTomobl__String(node938.val()));
        ignore287 = false;
      }));
      
      
      var val778 = onchange.get();
      if(val778 !== null) {
        subs__.addSub(mobl.domBind(node938, 'change', val778));
      }
      
      var val779 = onkeyup.get();
      if(val779 !== null) {
        subs__.addSub(mobl.domBind(node938, 'keyup', val779));
      }
      
      var val780 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val780 !== null) {
        subs__.addSub(mobl.domBind(node938, 'blur', val780));
      }
      
      node934.append(node938);
      
      
    }
  };
  renderCond188();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond188();
  }));
  
  callback(root2688); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root2689 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref1344 = style;
  if(ref1344.get() !== null) {
    sel.attr('class', ref1344.get());
    subs__.addSub(ref1344.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1344.rebind());
  
  var val781 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after221(result__) {
                    var tmp1920 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after221);if(result__ !== undefined) after221(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val781 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val781));
  }
  
  
  var node939 = mobl.loadingSpan();
  sel.append(node939);
  var list97;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList97 = function() {
    var subs__ = listSubs__;
    list97 = options.get();
    list97.list(function(results97) {
      node939.empty();
      for(var i139 = 0; i139 < results97.length; i139++) {
        (function() {
          var iternode97 = $("<span>");
          node939.append(iternode97);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results97), i139), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results97), i139), "_2");
          
          var node940 = $("<option>");
          
          var ref1340 = optionDescription;
          node940.text(""+ref1340.get());
          var ignore288 = false;
          subs__.addSub(ref1340.addEventListener('change', function(_, ref, val) {
            if(ignore288) return;
            node940.text(""+val);
          }));
          subs__.addSub(ref1340.rebind());
          
          
          var ref1341 = optionStyle;
          if(ref1341.get() !== null) {
            node940.attr('class', ref1341.get());
            subs__.addSub(ref1341.addEventListener('change', function(_, ref, val) {
              node940.attr('class', val);
            }));
            
          }
          subs__.addSub(ref1341.rebind());
          
          var ref1342 = optionValue;
          if(ref1342.get() !== null) {
            node940.attr('value', ref1342.get());
            subs__.addSub(ref1342.addEventListener('change', function(_, ref, val) {
              node940.attr('value', val);
            }));
            
          }
          subs__.addSub(ref1342.rebind());
          
          var ref1343 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref1343.get() !== null) {
            node940.attr('selected', ref1343.get());
            subs__.addSub(ref1343.addEventListener('change', function(_, ref, val) {
              node940.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node940.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node940.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref1343.rebind());
          
          iternode97.append(node940);
          
          var oldNodes = iternode97;
          iternode97 = iternode97.contents();
          oldNodes.replaceWith(iternode97);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list97.addEventListener('change', function() { listSubs__.unsubscribe(); renderList97(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList97(true); }));
    });
  };
  renderList97();
  
  root2689.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root2689); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root2690 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes1898 = $("<span>");
    root2690.append(nodes1898);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root2691 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node941 = mobl.loadingSpan();
      root2691.append(node941);
      var list98;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList98 = function() {
        var subs__ = listSubs__;
        list98 = tabs.get();
        list98.list(function(results98) {
          node941.empty();
          for(var i140 = 0; i140 < results98.length; i140++) {
            (function() {
              var iternode98 = $("<span>");
              node941.append(iternode98);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results98), i140), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results98), i140), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results98), i140), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp1887 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp1887.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp1887.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp1887.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp1887.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp1886 = mobl.ref(result__);
              
              var nodes1899 = $("<span>");
              iternode98.append(nodes1899);
              subs__.addSub((mobl.span)(tmp1887, mobl.ref(null), tmp1886, mobl.ref(null), function(_, callback) {
                var root2692 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes1900 = $("<span>");
                root2692.append(nodes1900);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root2693 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root2693); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1900;
                  nodes1900 = node.contents();
                  oldNodes.replaceWith(nodes1900);
                }));
                callback(root2692); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1899;
                nodes1899 = node.contents();
                oldNodes.replaceWith(nodes1899);
              }));
              
              var oldNodes = iternode98;
              iternode98 = iternode98.contents();
              oldNodes.replaceWith(iternode98);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list98.addEventListener('change', function() { listSubs__.unsubscribe(); renderList98(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList98(true); }));
        });
      };
      renderList98();
      
      callback(root2691); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1898;
      nodes1898 = node.contents();
      oldNodes.replaceWith(nodes1898);
    }));
    
    var node942 = mobl.loadingSpan();
    root2690.append(node942);
    var list99;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList99 = function() {
      var subs__ = listSubs__;
      list99 = tabs.get();
      list99.list(function(results99) {
        node942.empty();
        for(var i141 = 0; i141 < results99.length; i141++) {
          (function() {
            var iternode99 = $("<span>");
            node942.append(iternode99);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results99), i141), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results99), i141), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results99), i141), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp1888 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp1888.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp1888.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp1888.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp1888.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes1901 = $("<span>");
            iternode99.append(nodes1901);
            subs__.addSub((mobl.block)(tmp1888, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root2694 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1902 = $("<span>");
              root2694.append(nodes1902);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root2695 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes1903 = $("<span>");
                root2695.append(nodes1903);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl353();
                }));
                
                function renderControl353() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root2696 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root2696); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes1903;
                    nodes1903 = node.contents();
                    oldNodes.replaceWith(nodes1903);
                  }));
                }
                renderControl353();
                callback(root2695); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1902;
                nodes1902 = node.contents();
                oldNodes.replaceWith(nodes1902);
              }));
              callback(root2694); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1901;
              nodes1901 = node.contents();
              oldNodes.replaceWith(nodes1901);
            }));
            
            var oldNodes = iternode99;
            iternode99 = iternode99.contents();
            oldNodes.replaceWith(iternode99);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list99.addEventListener('change', function() { listSubs__.unsubscribe(); renderList99(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList99(true); }));
      });
    };
    renderList99();
    
    callback(root2690); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes1898 = $("<span>");
      root2690.append(nodes1898);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2691 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node941 = mobl.loadingSpan();
        root2691.append(node941);
        var list98;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList98 = function() {
          var subs__ = listSubs__;
          list98 = tabs.get();
          list98.list(function(results98) {
            node941.empty();
            for(var i140 = 0; i140 < results98.length; i140++) {
              (function() {
                var iternode98 = $("<span>");
                node941.append(iternode98);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results98), i140), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results98), i140), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results98), i140), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp1887 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp1887.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp1887.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp1887.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp1887.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp1886 = mobl.ref(result__);
                
                var nodes1899 = $("<span>");
                iternode98.append(nodes1899);
                subs__.addSub((mobl.span)(tmp1887, mobl.ref(null), tmp1886, mobl.ref(null), function(_, callback) {
                  var root2692 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1900 = $("<span>");
                  root2692.append(nodes1900);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root2693 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root2693); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes1900;
                    nodes1900 = node.contents();
                    oldNodes.replaceWith(nodes1900);
                  }));
                  callback(root2692); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1899;
                  nodes1899 = node.contents();
                  oldNodes.replaceWith(nodes1899);
                }));
                
                var oldNodes = iternode98;
                iternode98 = iternode98.contents();
                oldNodes.replaceWith(iternode98);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list98.addEventListener('change', function() { listSubs__.unsubscribe(); renderList98(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList98(true); }));
          });
        };
        renderList98();
        
        callback(root2691); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1898;
        nodes1898 = node.contents();
        oldNodes.replaceWith(nodes1898);
      }));
      
      var node942 = mobl.loadingSpan();
      root2690.append(node942);
      var list99;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList99 = function() {
        var subs__ = listSubs__;
        list99 = tabs.get();
        list99.list(function(results99) {
          node942.empty();
          for(var i141 = 0; i141 < results99.length; i141++) {
            (function() {
              var iternode99 = $("<span>");
              node942.append(iternode99);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results99), i141), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results99), i141), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results99), i141), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp1888 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp1888.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp1888.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp1888.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp1888.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes1901 = $("<span>");
              iternode99.append(nodes1901);
              subs__.addSub((mobl.block)(tmp1888, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root2694 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes1902 = $("<span>");
                root2694.append(nodes1902);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root2695 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1903 = $("<span>");
                  root2695.append(nodes1903);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl353();
                  }));
                  
                  function renderControl353() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root2696 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root2696); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1903;
                      nodes1903 = node.contents();
                      oldNodes.replaceWith(nodes1903);
                    }));
                  }
                  renderControl353();
                  callback(root2695); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1902;
                  nodes1902 = node.contents();
                  oldNodes.replaceWith(nodes1902);
                }));
                callback(root2694); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1901;
                nodes1901 = node.contents();
                oldNodes.replaceWith(nodes1901);
              }));
              
              var oldNodes = iternode99;
              iternode99 = iternode99.contents();
              oldNodes.replaceWith(iternode99);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list99.addEventListener('change', function() { listSubs__.unsubscribe(); renderList99(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList99(true); }));
        });
      };
      renderList99();
      
      callback(root2690); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root2697 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node943 = $("<div>");
  
  var ref1348 = mobl.ref(ui.searchboxStyle);
  if(ref1348.get() !== null) {
    node943.attr('class', ref1348.get());
    subs__.addSub(ref1348.addEventListener('change', function(_, ref, val) {
      node943.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1348.rebind());
  
  
  var node944 = $("<input>");
  node944.attr('type', "search");
  
  var ref1345 = mobl.ref(ui.searchBoxInputStyle);
  if(ref1345.get() !== null) {
    node944.attr('class', ref1345.get());
    subs__.addSub(ref1345.addEventListener('change', function(_, ref, val) {
      node944.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1345.rebind());
  
  var ref1346 = placeholder;
  if(ref1346.get() !== null) {
    node944.attr('placeholder', ref1346.get());
    subs__.addSub(ref1346.addEventListener('change', function(_, ref, val) {
      node944.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1346.rebind());
  
  var ref1347 = s;
  node944.val(""+ref1347.get());
  var ignore289 = false;
  subs__.addSub(ref1347.addEventListener('change', function(_, ref, val) {
    if(ignore289) return;
    node944.val(""+val);
  }));
  subs__.addSub(ref1347.rebind());
  
  subs__.addSub(mobl.domBind(node944, 'keyup change', function() {
    ignore289 = true;
    s.set(mobl.stringTomobl__String(node944.val()));
    ignore289 = false;
  }));
  
  
  var val782 = onsearch.get();
  if(val782 !== null) {
    subs__.addSub(mobl.domBind(node944, 'change', val782));
  }
  
  var val783 = onkeyup.get();
  if(val783 !== null) {
    subs__.addSub(mobl.domBind(node944, 'keyup', val783));
  }
  node944.attr('autocorrect', false);
  node944.attr('autocapitalize', false);
  node944.attr('autocomplete', false);
  
  node943.append(node944);
  root2697.append(node943);
  callback(root2697); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root2698 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref1349 = mobl.ref(ui.contextMenuStyle);
  if(ref1349.get() !== null) {
    menu.attr('class', ref1349.get());
    subs__.addSub(ref1349.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1349.rebind());
  
  var nodes1904 = $("<span>");
  menu.append(nodes1904);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl354();
  }));
  
  function renderControl354() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2699 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2699); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1904;
      nodes1904 = node.contents();
      oldNodes.replaceWith(nodes1904);
    }));
  }
  renderControl354();
  root2698.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val784 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp1923 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val784 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val784));
  }
  
  root2698.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root2698); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root2700 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp1908 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp1908.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node945 = $("<span>");
  root2700.append(node945);
  var condSubs189 = new mobl.CompSubscription();
  subs__.addSub(condSubs189);
  var oldValue189;
  var renderCond189 = function() {
    var value347 = tmp1908.get();
    if(oldValue189 === value347) return;
    oldValue189 = value347;
    var subs__ = condSubs189;
    subs__.unsubscribe();
    node945.empty();
    if(value347) {
      items.get().one(function(result__) {
        var tmp1924 = result__;
        var current = mobl.ref(result__);
        
        var node946 = $("<div>");
        node946.attr('width', "100%");
        
        
        var node947 = $("<div>");
        node947.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes1907 = $("<span>");
        node947.append(nodes1907);
        subs__.addSub((ui.group)(function(_, callback) {
          var root2703 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node950 = mobl.loadingSpan();
          root2703.append(node950);
          var list100;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList100 = function() {
            var subs__ = listSubs__;
            list100 = items.get();
            list100.list(function(results100) {
              node950.empty();
              for(var i142 = 0; i142 < results100.length; i142++) {
                (function() {
                  var iternode100 = $("<span>");
                  node950.append(iternode100);
                  var it;
                  it = mobl.ref(mobl.ref(results100), i142);
                  var result__ = it.get() == current.get();
                  var tmp1894 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp1894.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp1894.set(it.get() == current.get());
                  }));
                  
                  
                  var node951 = $("<span>");
                  iternode100.append(node951);
                  var condSubs191 = new mobl.CompSubscription();
                  subs__.addSub(condSubs191);
                  var oldValue191;
                  var renderCond191 = function() {
                    var value349 = tmp1894.get();
                    if(oldValue191 === value349) return;
                    oldValue191 = value349;
                    var subs__ = condSubs191;
                    subs__.unsubscribe();
                    node951.empty();
                    if(value349) {
                      var nodes1908 = $("<span>");
                      node951.append(nodes1908);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root2704 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes1909 = $("<span>");
                        root2704.append(nodes1909);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl356();
                        }));
                        
                        function renderControl356() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root2705 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root2705); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes1909;
                            nodes1909 = node.contents();
                            oldNodes.replaceWith(nodes1909);
                          }));
                        }
                        renderControl356();
                        callback(root2704); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1908;
                        nodes1908 = node.contents();
                        oldNodes.replaceWith(nodes1908);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp1893 = mobl.ref(result__);
                      
                      var nodes1910 = $("<span>");
                      node951.append(nodes1910);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1893, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root2706 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes1911 = $("<span>");
                        root2706.append(nodes1911);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl357();
                        }));
                        
                        function renderControl357() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root2707 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root2707); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes1911;
                            nodes1911 = node.contents();
                            oldNodes.replaceWith(nodes1911);
                          }));
                        }
                        renderControl357();
                        callback(root2706); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1910;
                        nodes1910 = node.contents();
                        oldNodes.replaceWith(nodes1910);
                      }));
                      
                      
                    }
                  };
                  renderCond191();
                  subs__.addSub(tmp1894.addEventListener('change', function() {
                    renderCond191();
                  }));
                  
                  
                  var oldNodes = iternode100;
                  iternode100 = iternode100.contents();
                  oldNodes.replaceWith(iternode100);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list100.addEventListener('change', function() { listSubs__.unsubscribe(); renderList100(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList100(true); }));
            });
          };
          renderList100();
          
          callback(root2703); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1907;
          nodes1907 = node.contents();
          oldNodes.replaceWith(nodes1907);
        }));
        node946.append(node947);
        
        var node948 = $("<div>");
        node948.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node949 = $("<span>");
        node948.append(node949);
        var condSubs190 = new mobl.CompSubscription();
        subs__.addSub(condSubs190);
        var oldValue190;
        var renderCond190 = function() {
          var value348 = current.get();
          if(oldValue190 === value348) return;
          oldValue190 = value348;
          var subs__ = condSubs190;
          subs__.unsubscribe();
          node949.empty();
          if(value348) {
            var nodes1905 = $("<span>");
            node949.append(nodes1905);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl355();
            }));
            
            function renderControl355() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root2701 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2701); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1905;
                nodes1905 = node.contents();
                oldNodes.replaceWith(nodes1905);
              }));
            }
            renderControl355();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp1895 = mobl.ref(result__);
            
            var nodes1906 = $("<span>");
            node949.append(nodes1906);
            subs__.addSub((mobl.label)(tmp1895, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root2702 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2702); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1906;
              nodes1906 = node.contents();
              oldNodes.replaceWith(nodes1906);
            }));
            
            
          }
        };
        renderCond190();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond190();
        }));
        
        node946.append(node948);
        node945.append(node946);
        
        
        
        
        
        
      });
    } else {
      var nodes1912 = $("<span>");
      node945.append(nodes1912);
      subs__.addSub((ui.group)(function(_, callback) {
        var root2708 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node952 = mobl.loadingSpan();
        root2708.append(node952);
        var list101;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList101 = function() {
          var subs__ = listSubs__;
          list101 = items.get();
          list101.list(function(results101) {
            node952.empty();
            for(var i143 = 0; i143 < results101.length; i143++) {
              (function() {
                var iternode101 = $("<span>");
                node952.append(iternode101);
                var it;
                it = mobl.ref(mobl.ref(results101), i143);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp1925 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp1889 = mobl.ref(result__);
                
                var nodes1913 = $("<span>");
                iternode101.append(nodes1913);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1889, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root2709 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1914 = $("<span>");
                  root2709.append(nodes1914);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl358();
                  }));
                  
                  function renderControl358() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root2710 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root2710); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1914;
                      nodes1914 = node.contents();
                      oldNodes.replaceWith(nodes1914);
                    }));
                  }
                  renderControl358();
                  callback(root2709); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1913;
                  nodes1913 = node.contents();
                  oldNodes.replaceWith(nodes1913);
                }));
                
                var oldNodes = iternode101;
                iternode101 = iternode101.contents();
                oldNodes.replaceWith(iternode101);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list101.addEventListener('change', function() { listSubs__.unsubscribe(); renderList101(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList101(true); }));
          });
        };
        renderList101();
        
        callback(root2708); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1912;
        nodes1912 = node.contents();
        oldNodes.replaceWith(nodes1912);
      }));
      
      
    }
  };
  renderCond189();
  subs__.addSub(tmp1908.addEventListener('change', function() {
    renderCond189();
  }));
  
  callback(root2700); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root2711 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp1892 = mobl.ref(result__);
  
  var nodes1915 = $("<span>");
  root2711.append(nodes1915);
  subs__.addSub((ui.header)(tmp1892, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2712 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1891 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1890 = mobl.ref(result__);
    
    var nodes1916 = $("<span>");
    root2712.append(nodes1916);
    subs__.addSub((ui.backButton)(tmp1890, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1891, function(_, callback) {
      var root2713 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2713); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1916;
      nodes1916 = node.contents();
      oldNodes.replaceWith(nodes1916);
    }));
    callback(root2712); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1915;
    nodes1915 = node.contents();
    oldNodes.replaceWith(nodes1915);
  }));
  var nodes1917 = $("<span>");
  root2711.append(nodes1917);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl359();
  }));
  
  function renderControl359() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root2714 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2714); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1917;
      nodes1917 = node.contents();
      oldNodes.replaceWith(nodes1917);
    }));
  }
  renderControl359();
  callback(root2711); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root2715 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes1918 = $("<span>");
  root2715.append(nodes1918);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2716 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node953 = mobl.loadingSpan();
    root2716.append(node953);
    var list102;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList102 = function() {
      var subs__ = listSubs__;
      list102 = coll.get();
      list102.list(function(results102) {
        node953.empty();
        for(var i144 = 0; i144 < results102.length; i144++) {
          (function() {
            var iternode102 = $("<span>");
            node953.append(iternode102);
            var it;
            it = mobl.ref(mobl.ref(results102), i144);
            var result__ = it.get() == selected.get();
            var tmp1897 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp1897.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp1897.set(it.get() == selected.get());
            }));
            
            
            var node954 = $("<span>");
            iternode102.append(node954);
            var condSubs192 = new mobl.CompSubscription();
            subs__.addSub(condSubs192);
            var oldValue192;
            var renderCond192 = function() {
              var value350 = tmp1897.get();
              if(oldValue192 === value350) return;
              oldValue192 = value350;
              var subs__ = condSubs192;
              subs__.unsubscribe();
              node954.empty();
              if(value350) {
                var nodes1919 = $("<span>");
                node954.append(nodes1919);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root2717 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1920 = $("<span>");
                  root2717.append(nodes1920);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl360();
                  }));
                  
                  function renderControl360() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root2718 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root2718); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1920;
                      nodes1920 = node.contents();
                      oldNodes.replaceWith(nodes1920);
                    }));
                  }
                  renderControl360();
                  callback(root2717); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1919;
                  nodes1919 = node.contents();
                  oldNodes.replaceWith(nodes1919);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp1896 = mobl.ref(result__);
                
                var nodes1921 = $("<span>");
                node954.append(nodes1921);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1896, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root2719 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1922 = $("<span>");
                  root2719.append(nodes1922);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl361();
                  }));
                  
                  function renderControl361() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root2720 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root2720); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1922;
                      nodes1922 = node.contents();
                      oldNodes.replaceWith(nodes1922);
                    }));
                  }
                  renderControl361();
                  callback(root2719); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1921;
                  nodes1921 = node.contents();
                  oldNodes.replaceWith(nodes1921);
                }));
                
                
              }
            };
            renderCond192();
            subs__.addSub(tmp1897.addEventListener('change', function() {
              renderCond192();
            }));
            
            
            var oldNodes = iternode102;
            iternode102 = iternode102.contents();
            oldNodes.replaceWith(iternode102);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list102.addEventListener('change', function() { listSubs__.unsubscribe(); renderList102(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList102(true); }));
      });
    };
    renderList102();
    
    callback(root2716); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1918;
    nodes1918 = node.contents();
    oldNodes.replaceWith(nodes1918);
  }));
  callback(root2715); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root2721 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp1926 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp1898 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp1898.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp1898.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp1898.set(coll.get().limit(n.get()));
    }));
    
    
    var node955 = mobl.loadingSpan();
    root2721.append(node955);
    var list103;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList103 = function() {
      var subs__ = listSubs__;
      list103 = tmp1898.get();
      list103.list(function(results103) {
        node955.empty();
        for(var i145 = 0; i145 < results103.length; i145++) {
          (function() {
            var iternode103 = $("<span>");
            node955.append(iternode103);
            var it;
            it = mobl.ref(mobl.ref(results103), i145);
            var nodes1923 = $("<span>");
            iternode103.append(nodes1923);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl362();
            }));
            
            function renderControl362() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root2722 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2722); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1923;
                nodes1923 = node.contents();
                oldNodes.replaceWith(nodes1923);
              }));
            }
            renderControl362();
            
            var oldNodes = iternode103;
            iternode103 = iternode103.contents();
            oldNodes.replaceWith(iternode103);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list103.addEventListener('change', function() { listSubs__.unsubscribe(); renderList103(true); }));
        subs__.addSub(tmp1898.addEventListener('change', function() { listSubs__.unsubscribe(); renderList103(true); }));
      });
    };
    renderList103();
    
    var result__ = n.get() < total.get();
    var tmp1900 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp1900.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp1900.set(n.get() < total.get());
    }));
    
    
    var node956 = $("<span>");
    root2721.append(node956);
    var condSubs193 = new mobl.CompSubscription();
    subs__.addSub(condSubs193);
    var oldValue193;
    var renderCond193 = function() {
      var value351 = tmp1900.get();
      if(oldValue193 === value351) return;
      oldValue193 = value351;
      var subs__ = condSubs193;
      subs__.unsubscribe();
      node956.empty();
      if(value351) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp1899 = mobl.ref(result__);
        
        var nodes1924 = $("<span>");
        node956.append(nodes1924);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp1899, mobl.ref(null), function(_, callback) {
          var root2723 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes1925 = $("<span>");
          root2723.append(nodes1925);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root2724 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root2724); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1925;
            nodes1925 = node.contents();
            oldNodes.replaceWith(nodes1925);
          }));
          callback(root2723); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1924;
          nodes1924 = node.contents();
          oldNodes.replaceWith(nodes1924);
        }));
        
        
      } else {
        
      }
    };
    renderCond193();
    subs__.addSub(tmp1900.addEventListener('change', function() {
      renderCond193();
    }));
    
    callback(root2721); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root2725 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1926 = $("<span>");
  root2725.append(nodes1926);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2726 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node957 = mobl.loadingSpan();
    root2726.append(node957);
    var list104;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList104 = function() {
      var subs__ = listSubs__;
      list104 = items.get();
      list104.list(function(results104) {
        node957.empty();
        for(var i146 = 0; i146 < results104.length; i146++) {
          (function() {
            var iternode104 = $("<span>");
            node957.append(iternode104);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results104), i146), "_1");it = mobl.ref(mobl.ref(mobl.ref(results104), i146), "_2");
            var nodes1927 = $("<span>");
            iternode104.append(nodes1927);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root2727 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1928 = $("<span>");
              root2727.append(nodes1928);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root2728 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2728); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1928;
                nodes1928 = node.contents();
                oldNodes.replaceWith(nodes1928);
              }));
              callback(root2727); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1927;
              nodes1927 = node.contents();
              oldNodes.replaceWith(nodes1927);
            }));
            
            var oldNodes = iternode104;
            iternode104 = iternode104.contents();
            oldNodes.replaceWith(iternode104);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list104.addEventListener('change', function() { listSubs__.unsubscribe(); renderList104(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList104(true); }));
      });
    };
    renderList104();
    
    callback(root2726); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1926;
    nodes1926 = node.contents();
    oldNodes.replaceWith(nodes1926);
  }));
  callback(root2725); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root2729 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll285) {
    coll285 = coll285.reverse();
    function processOne39() {
      var it;
      it = coll285.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll285.length > 0) processOne39(); else rest39();
      
    }
    function rest39() {
      var nodes1929 = $("<span>");
      root2729.append(nodes1929);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root2730 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp1901 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp1902 = mobl.ref(result__);
        
        var nodes1930 = $("<span>");
        root2730.append(nodes1930);
        subs__.addSub((ui.backButton)(tmp1902, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1901, function(_, callback) {
          var root2731 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2731); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1930;
          nodes1930 = node.contents();
          oldNodes.replaceWith(nodes1930);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll284) {
                           coll284 = coll284.reverse();
                           function processOne38() {
                             var checked;var it;
                             var tmp1928 = coll284.pop();
                             checked = tmp1928._1;it = tmp1928._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll284.length > 0) processOne38(); else rest38();
                               
                             } else {
                               {
                                 
                                 if(coll284.length > 0) processOne38(); else rest38();
                                 
                               }
                             }
                           }
                           function rest38() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll284.length > 0) processOne38(); else rest38();
                         });
                         
                       };
        var tmp1903 = mobl.ref(result__);
        
        var nodes1931 = $("<span>");
        root2730.append(nodes1931);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp1903, function(_, callback) {
          var root2732 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2732); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1931;
          nodes1931 = node.contents();
          oldNodes.replaceWith(nodes1931);
        }));
        callback(root2730); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1929;
        nodes1929 = node.contents();
        oldNodes.replaceWith(nodes1929);
      }));
      var nodes1932 = $("<span>");
      root2729.append(nodes1932);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root2733 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2733); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1932;
        nodes1932 = node.contents();
        oldNodes.replaceWith(nodes1932);
      }));
      callback(root2729); return subs__;
      
      
    }
    if(coll285.length > 0) processOne39(); else rest39();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root2734 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes1933 = $("<span>");
  root2734.append(nodes1933);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root2735 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2735); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1933;
    nodes1933 = node.contents();
    oldNodes.replaceWith(nodes1933);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp1904 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp1904.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp1904.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp1904.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp1904.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp1904.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes1934 = $("<span>");
  root2734.append(nodes1934);
  subs__.addSub((ui.masterDetail)(tmp1904, masterItem, detailItem, function(_, callback) {
    var root2736 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2736); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1934;
    nodes1934 = node.contents();
    oldNodes.replaceWith(nodes1934);
  }));
  callback(root2734); return subs__;
  
  
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
  var root2737 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes1935 = $("<span>");
  root2737.append(nodes1935);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root2738 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node958 = mobl.loadingSpan();
    root2738.append(node958);
    var list105;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList105 = function() {
      var subs__ = listSubs__;
      list105 = sections.get();
      list105.list(function(results105) {
        node958.empty();
        for(var i147 = 0; i147 < results105.length; i147++) {
          (function() {
            var iternode105 = $("<span>");
            node958.append(iternode105);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results105), i147), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results105), i147), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp1906 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp1906.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp1906.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp1906.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp1906.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp1905 = mobl.ref(result__);
            
            var nodes1936 = $("<span>");
            iternode105.append(nodes1936);
            subs__.addSub((mobl.span)(tmp1906, mobl.ref(null), tmp1905, mobl.ref(null), function(_, callback) {
              var root2739 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1937 = $("<span>");
              root2739.append(nodes1937);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root2740 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2740); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1937;
                nodes1937 = node.contents();
                oldNodes.replaceWith(nodes1937);
              }));
              callback(root2739); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1936;
              nodes1936 = node.contents();
              oldNodes.replaceWith(nodes1936);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp1907 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp1907.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp1907.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp1907.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp1907.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes1938 = $("<span>");
            iternode105.append(nodes1938);
            subs__.addSub((mobl.block)(tmp1907, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root2741 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1939 = $("<span>");
              root2741.append(nodes1939);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl363();
              }));
              
              function renderControl363() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root2742 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root2742); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1939;
                  nodes1939 = node.contents();
                  oldNodes.replaceWith(nodes1939);
                }));
              }
              renderControl363();
              callback(root2741); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1938;
              nodes1938 = node.contents();
              oldNodes.replaceWith(nodes1938);
            }));
            
            var oldNodes = iternode105;
            iternode105 = iternode105.contents();
            oldNodes.replaceWith(iternode105);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list105.addEventListener('change', function() { listSubs__.unsubscribe(); renderList105(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList105(true); }));
      });
    };
    renderList105();
    
    callback(root2738); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1935;
    nodes1935 = node.contents();
    oldNodes.replaceWith(nodes1935);
  }));
  callback(root2737); return subs__;
  
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
  var root2743 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node959 = $("<table>");
  
  var ref1350 = style;
  if(ref1350.get() !== null) {
    node959.attr('class', ref1350.get());
    subs__.addSub(ref1350.addEventListener('change', function(_, ref, val) {
      node959.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1350.rebind());
  
  var nodes1940 = $("<span>");
  node959.append(nodes1940);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl364();
  }));
  
  function renderControl364() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2744 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2744); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1940;
      nodes1940 = node.contents();
      oldNodes.replaceWith(nodes1940);
    }));
  }
  renderControl364();
  root2743.append(node959);
  callback(root2743); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root2745 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node960 = $("<tr>");
  
  var ref1351 = style;
  if(ref1351.get() !== null) {
    node960.attr('class', ref1351.get());
    subs__.addSub(ref1351.addEventListener('change', function(_, ref, val) {
      node960.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1351.rebind());
  
  var nodes1941 = $("<span>");
  node960.append(nodes1941);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl365();
  }));
  
  function renderControl365() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2746 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2746); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1941;
      nodes1941 = node.contents();
      oldNodes.replaceWith(nodes1941);
    }));
  }
  renderControl365();
  root2745.append(node960);
  callback(root2745); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root2747 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node961 = $("<td>");
  
  var ref1352 = width;
  if(ref1352.get() !== null) {
    node961.attr('width', ref1352.get());
    subs__.addSub(ref1352.addEventListener('change', function(_, ref, val) {
      node961.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1352.rebind());
  
  var ref1353 = style;
  if(ref1353.get() !== null) {
    node961.attr('class', ref1353.get());
    subs__.addSub(ref1353.addEventListener('change', function(_, ref, val) {
      node961.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1353.rebind());
  
  var nodes1942 = $("<span>");
  node961.append(nodes1942);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl366();
  }));
  
  function renderControl366() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2748 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2748); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1942;
      nodes1942 = node.contents();
      oldNodes.replaceWith(nodes1942);
    }));
  }
  renderControl366();
  root2747.append(node961);
  callback(root2747); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root2749 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node962 = $("<td>");
  
  var ref1354 = width;
  if(ref1354.get() !== null) {
    node962.attr('width', ref1354.get());
    subs__.addSub(ref1354.addEventListener('change', function(_, ref, val) {
      node962.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1354.rebind());
  
  var ref1355 = style;
  if(ref1355.get() !== null) {
    node962.attr('class', ref1355.get());
    subs__.addSub(ref1355.addEventListener('change', function(_, ref, val) {
      node962.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1355.rebind());
  
  var nodes1943 = $("<span>");
  node962.append(nodes1943);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl367();
  }));
  
  function renderControl367() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2750 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2750); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1943;
      nodes1943 = node.contents();
      oldNodes.replaceWith(nodes1943);
    }));
  }
  renderControl367();
  root2749.append(node962);
  callback(root2749); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root2751 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node963 = $("<td>");
  
  var ref1356 = width;
  if(ref1356.get() !== null) {
    node963.attr('width', ref1356.get());
    subs__.addSub(ref1356.addEventListener('change', function(_, ref, val) {
      node963.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1356.rebind());
  
  var ref1357 = style;
  if(ref1357.get() !== null) {
    node963.attr('class', ref1357.get());
    subs__.addSub(ref1357.addEventListener('change', function(_, ref, val) {
      node963.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1357.rebind());
  
  
  var node964 = $("<strong>");
  
  var nodes1944 = $("<span>");
  node964.append(nodes1944);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl368();
  }));
  
  function renderControl368() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2752 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2752); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1944;
      nodes1944 = node.contents();
      oldNodes.replaceWith(nodes1944);
    }));
  }
  renderControl368();
  node963.append(node964);
  root2751.append(node963);
  callback(root2751); return subs__;
  
  
  
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
}(ui));ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.section = 'ui__section';
ui.logoStyle = 'ui__logoStyle';
