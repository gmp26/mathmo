mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mathJAX');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root4873 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2176 = $("<span>");
  root4873.append(node2176);
  var condSubs550 = new mobl.CompSubscription();
  subs__.addSub(condSubs550);
  var oldValue550;
  var renderCond550 = function() {
    var value2224 = value.get();
    if(oldValue550 === value2224) return;
    oldValue550 = value2224;
    var subs__ = condSubs550;
    subs__.unsubscribe();
    node2176.empty();
    if(value2224) {
      var nodes3421 = $("<span>");
      node2176.append(nodes3421);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl981();
      }));
      
      function renderControl981() {
        subs__.addSub((elements)(function(elements, callback) {
          var root4874 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4874); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3421;
          nodes3421 = node.contents();
          oldNodes.replaceWith(nodes3421);
        }));
      }
      renderControl981();
      
      
    } else {
      var nodes3422 = $("<span>");
      node2176.append(nodes3422);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4875 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes3423 = $("<span>");
        root4875.append(nodes3423);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root4876 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4876); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3423;
          nodes3423 = node.contents();
          oldNodes.replaceWith(nodes3423);
        }));
        var nodes3424 = $("<span>");
        root4875.append(nodes3424);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root4877 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4877); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3424;
          nodes3424 = node.contents();
          oldNodes.replaceWith(nodes3424);
        }));
        callback(root4875); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3422;
        nodes3422 = node.contents();
        oldNodes.replaceWith(nodes3422);
      }));
      
      
    }
  };
  renderCond550();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond550();
  }));
  
  callback(root4873); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root4878 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2177 = $("<div>");
  
  var ref2213 = mobl.ref(ui.headerStyle);
  if(ref2213.get() !== null) {
    node2177.attr('class', ref2213.get());
    subs__.addSub(ref2213.addEventListener('change', function(_, ref, val) {
      node2177.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2213.rebind());
  
  var val1137 = onclick.get();
  if(val1137 !== null) {
    subs__.addSub(mobl.domBind(node2177, 'tap', val1137));
  }
  
  var ref2214 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref2214.get() !== null) {
    node2177.attr('style', ref2214.get());
    subs__.addSub(ref2214.addEventListener('change', function(_, ref, val) {
      node2177.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node2177.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref2214.rebind());
  
  
  var node2180 = $("<div>");
  
  var ref2212 = mobl.ref(ui.headerContainerStyle);
  if(ref2212.get() !== null) {
    node2180.attr('class', ref2212.get());
    subs__.addSub(ref2212.addEventListener('change', function(_, ref, val) {
      node2180.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2212.rebind());
  
  
  var node2181 = $("<div>");
  
  var ref2210 = text;
  node2181.text(""+ref2210.get());
  var ignore432 = false;
  subs__.addSub(ref2210.addEventListener('change', function(_, ref, val) {
    if(ignore432) return;
    node2181.text(""+val);
  }));
  subs__.addSub(ref2210.rebind());
  
  
  var ref2211 = mobl.ref(ui.headerTextStyle);
  if(ref2211.get() !== null) {
    node2181.attr('class', ref2211.get());
    subs__.addSub(ref2211.addEventListener('change', function(_, ref, val) {
      node2181.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2211.rebind());
  
  node2180.append(node2181);
  node2177.append(node2180);
  var nodes3425 = $("<span>");
  node2177.append(nodes3425);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl982();
  }));
  
  function renderControl982() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4879 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4879); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3425;
      nodes3425 = node.contents();
      oldNodes.replaceWith(nodes3425);
    }));
  }
  renderControl982();
  root4878.append(node2177);
  
  var node2178 = $("<span>");
  root4878.append(node2178);
  var condSubs551 = new mobl.CompSubscription();
  subs__.addSub(condSubs551);
  var oldValue551;
  var renderCond551 = function() {
    var value2225 = fixedPosition.get();
    if(oldValue551 === value2225) return;
    oldValue551 = value2225;
    var subs__ = condSubs551;
    subs__.unsubscribe();
    node2178.empty();
    if(value2225) {
      
      var node2179 = $("<div>");
      node2179.attr('id', "hello");
      node2179.attr('style', "height: 2.9em;");
      
      node2178.append(node2179);
      
      
    } else {
      
    }
  };
  renderCond551();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond551();
  }));
  
  callback(root4878); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root4880 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref2215 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref2215.get() !== null) {
    sp.attr('class', ref2215.get());
    subs__.addSub(ref2215.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref2215.rebind());
  
  var val1138 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val1138 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val1138));
  }
  
  var val1139 = function(event, callback) {
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
  if(val1139 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val1139));
  }
  
  var val1140 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after351(result__) {
                    var tmp3086 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after351);if(result__ !== undefined) after351(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1140 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val1140));
  }
  
  var val1141 = function(event, callback) {
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
  if(val1141 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val1141));
  }
  
  var ref2216 = text;
  sp.text(""+ref2216.get());
  var ignore433 = false;
  subs__.addSub(ref2216.addEventListener('change', function(_, ref, val) {
    if(ignore433) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref2216.rebind());
  
  
  root4880.append(sp);
  callback(root4880); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root4881 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3426 = $("<span>");
  root4881.append(nodes3426);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root4882 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4882); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3426;
    nodes3426 = node.contents();
    oldNodes.replaceWith(nodes3426);
  }));
  callback(root4881); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root4883 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3427 = $("<span>");
  root4883.append(nodes3427);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root4884 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4884); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3427;
    nodes3427 = node.contents();
    oldNodes.replaceWith(nodes3427);
  }));
  callback(root4883); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root4885 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2182 = $("<ul>");
  
  var ref2217 = mobl.ref(ui.groupStyle);
  if(ref2217.get() !== null) {
    node2182.attr('class', ref2217.get());
    subs__.addSub(ref2217.addEventListener('change', function(_, ref, val) {
      node2182.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2217.rebind());
  
  var nodes3428 = $("<span>");
  node2182.append(nodes3428);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl983();
  }));
  
  function renderControl983() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4886 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4886); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3428;
      nodes3428 = node.contents();
      oldNodes.replaceWith(nodes3428);
    }));
  }
  renderControl983();
  root4885.append(node2182);
  callback(root4885); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root4887 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2183 = $("<img>");
  
  var ref2218 = url;
  if(ref2218.get() !== null) {
    node2183.attr('src', ref2218.get());
    subs__.addSub(ref2218.addEventListener('change', function(_, ref, val) {
      node2183.attr('src', val);
    }));
    
  }
  subs__.addSub(ref2218.rebind());
  
  var ref2219 = width;
  if(ref2219.get() !== null) {
    node2183.attr('width', ref2219.get());
    subs__.addSub(ref2219.addEventListener('change', function(_, ref, val) {
      node2183.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2219.rebind());
  
  var ref2220 = height;
  if(ref2220.get() !== null) {
    node2183.attr('height', ref2220.get());
    subs__.addSub(ref2220.addEventListener('change', function(_, ref, val) {
      node2183.attr('height', val);
    }));
    
  }
  subs__.addSub(ref2220.rebind());
  
  var ref2221 = style;
  if(ref2221.get() !== null) {
    node2183.attr('class', ref2221.get());
    subs__.addSub(ref2221.addEventListener('change', function(_, ref, val) {
      node2183.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2221.rebind());
  
  var val1142 = onclick.get();
  if(val1142 !== null) {
    subs__.addSub(mobl.domBind(node2183, 'tap', val1142));
  }
  
  var ref2222 = valign;
  if(ref2222.get() !== null) {
    node2183.attr('valign', ref2222.get());
    subs__.addSub(ref2222.addEventListener('change', function(_, ref, val) {
      node2183.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref2222.rebind());
  
  var ref2223 = align;
  if(ref2223.get() !== null) {
    node2183.attr('align', ref2223.get());
    subs__.addSub(ref2223.addEventListener('change', function(_, ref, val) {
      node2183.attr('align', val);
    }));
    
  }
  subs__.addSub(ref2223.rebind());
  
  root4887.append(node2183);
  callback(root4887); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root4888 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref2224 = mobl.ref(ui.itemStyle);
  if(ref2224.get() !== null) {
    el.attr('class', ref2224.get());
    subs__.addSub(ref2224.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2224.rebind());
  
  var ref2225 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref2225.get() !== null) {
    el.attr('class', ref2225.get());
    subs__.addSub(ref2225.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref2225.rebind());
  
  var val1143 = onswipe.get();
  if(val1143 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val1143));
  }
  
  var val1144 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp3087 = result__;
                                           function after352(result__) {
                                             var tmp3088 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after352);if(result__ !== undefined) after352(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp3089 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val1144 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val1144));
  }
  
  var nodes3429 = $("<span>");
  el.append(nodes3429);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl984();
  }));
  
  function renderControl984() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4889 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4889); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3429;
      nodes3429 = node.contents();
      oldNodes.replaceWith(nodes3429);
    }));
  }
  renderControl984();
  root4888.append(el);
  callback(root4888); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root4890 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2184 = $("<input>");
  node2184.attr('type', "checkbox");
  
  var ref2227 = b;
  node2184.attr('checked', !!ref2227.get());
  subs__.addSub(ref2227.addEventListener('change', function(_, ref, val) {
    if(ref === ref2227) node2184.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node2184, 'change', function() {
    b.set(!!node2184.attr('checked'));
  }));
  
  var val1146 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val1146 !== null) {
    subs__.addSub(mobl.domBind(node2184, 'tap', val1146));
  }
  
  var val1147 = onchange.get();
  if(val1147 !== null) {
    subs__.addSub(mobl.domBind(node2184, 'change', val1147));
  }
  
  root4890.append(node2184);
  
  root4890.append(" ");
  
  var node2185 = $("<span>");
  
  var ref2226 = label;
  node2185.text(""+ref2226.get());
  var ignore434 = false;
  subs__.addSub(ref2226.addEventListener('change', function(_, ref, val) {
    if(ignore434) return;
    node2185.text(""+val);
  }));
  subs__.addSub(ref2226.rebind());
  
  
  var val1145 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after353(result__) {
                    var tmp3090 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after353);if(result__ !== undefined) after353(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1145 !== null) {
    subs__.addSub(mobl.domBind(node2185, 'tap', val1145));
  }
  
  root4890.append(node2185);
  callback(root4890); return subs__;
  
  
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
  var root4891 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2186 = $("<span>");
  root4891.append(node2186);
  var condSubs552 = new mobl.CompSubscription();
  subs__.addSub(condSubs552);
  var oldValue552;
  var renderCond552 = function() {
    var value2226 = label.get();
    if(oldValue552 === value2226) return;
    oldValue552 = value2226;
    var subs__ = condSubs552;
    subs__.unsubscribe();
    node2186.empty();
    if(value2226) {
      var nodes3430 = $("<span>");
      node2186.append(nodes3430);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root4892 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4892); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3430;
        nodes3430 = node.contents();
        oldNodes.replaceWith(nodes3430);
      }));
      
      
    } else {
      
    }
  };
  renderCond552();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond552();
  }));
  
  
  var node2187 = $("<span>");
  root4891.append(node2187);
  var condSubs553 = new mobl.CompSubscription();
  subs__.addSub(condSubs553);
  var oldValue553;
  var renderCond553 = function() {
    var value2227 = validator.get();
    if(oldValue553 === value2227) return;
    oldValue553 = value2227;
    var subs__ = condSubs553;
    subs__.unsubscribe();
    node2187.empty();
    if(value2227) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after357(result__) {
        var tmp3091 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp3092 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node2188 = $("<input>");
        
        var ref2228 = inputType;
        if(ref2228.get() !== null) {
          node2188.attr('type', ref2228.get());
          subs__.addSub(ref2228.addEventListener('change', function(_, ref, val) {
            node2188.attr('type', val);
          }));
          
        }
        subs__.addSub(ref2228.rebind());
        
        var ref2229 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref2229.get() !== null) {
          node2188.attr('class', ref2229.get());
          subs__.addSub(ref2229.addEventListener('change', function(_, ref, val) {
            node2188.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node2188.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node2188.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node2188.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref2229.rebind());
        
        var ref2230 = placeholder;
        if(ref2230.get() !== null) {
          node2188.attr('placeholder', ref2230.get());
          subs__.addSub(ref2230.addEventListener('change', function(_, ref, val) {
            node2188.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref2230.rebind());
        
        var ref2231 = temp;
        node2188.val(""+ref2231.get());
        var ignore435 = false;
        subs__.addSub(ref2231.addEventListener('change', function(_, ref, val) {
          if(ignore435) return;
          node2188.val(""+val);
        }));
        subs__.addSub(ref2231.rebind());
        
        subs__.addSub(mobl.domBind(node2188, 'keyup change', function() {
          ignore435 = true;
          temp.set(mobl.stringTomobl__String(node2188.val()));
          ignore435 = false;
        }));
        
        
        var val1148 = onchange.get();
        if(val1148 !== null) {
          subs__.addSub(mobl.domBind(node2188, 'change', val1148));
        }
        
        var val1149 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after354(result__) {
                          var tmp3093 = result__;
                          function after355(result__) {
                            var tmp3094 = result__;
                            var result__ = tmp3094;
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
                          var result__ = validator.get()(temp.get(), after355);if(result__ !== undefined) after355(result__);
                        }
                        var result__ = onkeyup.get()(event, after354);if(result__ !== undefined) after354(result__);
                      } else {
                        {
                          function after356(result__) {
                            var tmp3094 = result__;
                            var result__ = tmp3094;
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
                          var result__ = validator.get()(temp.get(), after356);if(result__ !== undefined) after356(result__);
                        }
                      }
                    };
        if(val1149 !== null) {
          subs__.addSub(mobl.domBind(node2188, 'keyup', val1149));
        }
        
        var val1150 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1150 !== null) {
          subs__.addSub(mobl.domBind(node2188, 'blur', val1150));
        }
        
        node2187.append(node2188);
        var nodes3431 = $("<span>");
        node2187.append(nodes3431);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root4893 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4893); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3431;
          nodes3431 = node.contents();
          oldNodes.replaceWith(nodes3431);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after357);if(result__ !== undefined) after357(result__);
    } else {
      
      var node2189 = $("<input>");
      
      var ref2232 = inputType;
      if(ref2232.get() !== null) {
        node2189.attr('type', ref2232.get());
        subs__.addSub(ref2232.addEventListener('change', function(_, ref, val) {
          node2189.attr('type', val);
        }));
        
      }
      subs__.addSub(ref2232.rebind());
      
      var ref2233 = style;
      if(ref2233.get() !== null) {
        node2189.attr('class', ref2233.get());
        subs__.addSub(ref2233.addEventListener('change', function(_, ref, val) {
          node2189.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2233.rebind());
      
      var ref2234 = placeholder;
      if(ref2234.get() !== null) {
        node2189.attr('placeholder', ref2234.get());
        subs__.addSub(ref2234.addEventListener('change', function(_, ref, val) {
          node2189.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2234.rebind());
      
      var ref2235 = s;
      node2189.val(""+ref2235.get());
      var ignore436 = false;
      subs__.addSub(ref2235.addEventListener('change', function(_, ref, val) {
        if(ignore436) return;
        node2189.val(""+val);
      }));
      subs__.addSub(ref2235.rebind());
      
      subs__.addSub(mobl.domBind(node2189, 'keyup change', function() {
        ignore436 = true;
        s.set(mobl.stringTomobl__String(node2189.val()));
        ignore436 = false;
      }));
      
      
      var val1151 = onchange.get();
      if(val1151 !== null) {
        subs__.addSub(mobl.domBind(node2189, 'change', val1151));
      }
      
      var val1152 = onkeyup.get();
      if(val1152 !== null) {
        subs__.addSub(mobl.domBind(node2189, 'keyup', val1152));
      }
      
      var val1153 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1153 !== null) {
        subs__.addSub(mobl.domBind(node2189, 'blur', val1153));
      }
      
      node2187.append(node2189);
      
      
    }
  };
  renderCond553();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond553();
  }));
  
  callback(root4891); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root4894 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3432 = $("<span>");
  root4894.append(nodes3432);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root4895 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4895); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3432;
    nodes3432 = node.contents();
    oldNodes.replaceWith(nodes3432);
  }));
  callback(root4894); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root4896 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3433 = $("<span>");
  root4896.append(nodes3433);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root4897 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4897); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3433;
    nodes3433 = node.contents();
    oldNodes.replaceWith(nodes3433);
  }));
  callback(root4896); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root4898 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2190 = $("<span>");
  root4898.append(node2190);
  var condSubs554 = new mobl.CompSubscription();
  subs__.addSub(condSubs554);
  var oldValue554;
  var renderCond554 = function() {
    var value2228 = label.get();
    if(oldValue554 === value2228) return;
    oldValue554 = value2228;
    var subs__ = condSubs554;
    subs__.unsubscribe();
    node2190.empty();
    if(value2228) {
      var nodes3434 = $("<span>");
      node2190.append(nodes3434);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root4899 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4899); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3434;
        nodes3434 = node.contents();
        oldNodes.replaceWith(nodes3434);
      }));
      
      
    } else {
      
    }
  };
  renderCond554();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond554();
  }));
  
  
  var node2191 = $("<input>");
  node2191.attr('type', "range");
  
  var ref2236 = n;
  node2191.val(""+ref2236.get());
  var ignore437 = false;
  subs__.addSub(ref2236.addEventListener('change', function(_, ref, val) {
    if(ignore437) return;
    node2191.val(""+val);
  }));
  subs__.addSub(ref2236.rebind());
  
  subs__.addSub(mobl.domBind(node2191, 'keyup change', function() {
    ignore437 = true;
    n.set(mobl.stringTomobl__Num(node2191.val()));
    ignore437 = false;
  }));
  
  
  var ref2237 = min;
  if(ref2237.get() !== null) {
    node2191.attr('min', ref2237.get());
    subs__.addSub(ref2237.addEventListener('change', function(_, ref, val) {
      node2191.attr('min', val);
    }));
    
  }
  subs__.addSub(ref2237.rebind());
  
  var ref2238 = max;
  if(ref2238.get() !== null) {
    node2191.attr('max', ref2238.get());
    subs__.addSub(ref2238.addEventListener('change', function(_, ref, val) {
      node2191.attr('max', val);
    }));
    
  }
  subs__.addSub(ref2238.rebind());
  
  var ref2239 = step;
  if(ref2239.get() !== null) {
    node2191.attr('step', ref2239.get());
    subs__.addSub(ref2239.addEventListener('change', function(_, ref, val) {
      node2191.attr('step', val);
    }));
    
  }
  subs__.addSub(ref2239.rebind());
  node2191.attr('style', "width: 99%;");
  
  var val1154 = onchange.get();
  if(val1154 !== null) {
    subs__.addSub(mobl.domBind(node2191, 'change', val1154));
  }
  
  var val1155 = onkeyup.get();
  if(val1155 !== null) {
    subs__.addSub(mobl.domBind(node2191, 'keyup', val1155));
  }
  
  var ref2240 = placeholder;
  if(ref2240.get() !== null) {
    node2191.attr('placeholder', ref2240.get());
    subs__.addSub(ref2240.addEventListener('change', function(_, ref, val) {
      node2191.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref2240.rebind());
  
  root4898.append(node2191);
  callback(root4898); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root4900 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after358(result__) {
      var tmp3095 = result__;
      var result__ = tmp3095;
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
    var result__ = validator.get()(n2, after358);if(result__ !== undefined) after358(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes3435 = $("<span>");
  root4900.append(nodes3435);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root4901 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4901); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3435;
    nodes3435 = node.contents();
    oldNodes.replaceWith(nodes3435);
  }));
  callback(root4900); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root4902 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2192 = $("<span>");
  root4902.append(node2192);
  var condSubs555 = new mobl.CompSubscription();
  subs__.addSub(condSubs555);
  var oldValue555;
  var renderCond555 = function() {
    var value2229 = label.get();
    if(oldValue555 === value2229) return;
    oldValue555 = value2229;
    var subs__ = condSubs555;
    subs__.unsubscribe();
    node2192.empty();
    if(value2229) {
      
      var node2193 = $("<span>");
      node2193.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref2244 = label;
      node2193.text(""+ref2244.get());
      var ignore439 = false;
      subs__.addSub(ref2244.addEventListener('change', function(_, ref, val) {
        if(ignore439) return;
        node2193.text(""+val);
      }));
      subs__.addSub(ref2244.rebind());
      
      
      node2192.append(node2193);
      
      var node2194 = $("<span>");
      node2194.attr('style', "float: left");
      
      
      var node2195 = $("<input>");
      node2195.attr('type', "password");
      
      var ref2241 = style;
      if(ref2241.get() !== null) {
        node2195.attr('class', ref2241.get());
        subs__.addSub(ref2241.addEventListener('change', function(_, ref, val) {
          node2195.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2241.rebind());
      
      var ref2242 = placeholder;
      if(ref2242.get() !== null) {
        node2195.attr('placeholder', ref2242.get());
        subs__.addSub(ref2242.addEventListener('change', function(_, ref, val) {
          node2195.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2242.rebind());
      
      var ref2243 = s;
      node2195.val(""+ref2243.get());
      var ignore438 = false;
      subs__.addSub(ref2243.addEventListener('change', function(_, ref, val) {
        if(ignore438) return;
        node2195.val(""+val);
      }));
      subs__.addSub(ref2243.rebind());
      
      subs__.addSub(mobl.domBind(node2195, 'keyup change', function() {
        ignore438 = true;
        s.set(mobl.stringTomobl__String(node2195.val()));
        ignore438 = false;
      }));
      
      
      var val1156 = onchange.get();
      if(val1156 !== null) {
        subs__.addSub(mobl.domBind(node2195, 'change', val1156));
      }
      
      var val1157 = onkeyup.get();
      if(val1157 !== null) {
        subs__.addSub(mobl.domBind(node2195, 'keyup', val1157));
      }
      
      var val1158 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1158 !== null) {
        subs__.addSub(mobl.domBind(node2195, 'blur', val1158));
      }
      
      node2194.append(node2195);
      node2192.append(node2194);
      
      
      
      
    } else {
      
      var node2196 = $("<input>");
      node2196.attr('type', "password");
      
      var ref2245 = style;
      if(ref2245.get() !== null) {
        node2196.attr('class', ref2245.get());
        subs__.addSub(ref2245.addEventListener('change', function(_, ref, val) {
          node2196.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2245.rebind());
      
      var ref2246 = placeholder;
      if(ref2246.get() !== null) {
        node2196.attr('placeholder', ref2246.get());
        subs__.addSub(ref2246.addEventListener('change', function(_, ref, val) {
          node2196.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2246.rebind());
      
      var ref2247 = s;
      node2196.val(""+ref2247.get());
      var ignore440 = false;
      subs__.addSub(ref2247.addEventListener('change', function(_, ref, val) {
        if(ignore440) return;
        node2196.val(""+val);
      }));
      subs__.addSub(ref2247.rebind());
      
      subs__.addSub(mobl.domBind(node2196, 'keyup change', function() {
        ignore440 = true;
        s.set(mobl.stringTomobl__String(node2196.val()));
        ignore440 = false;
      }));
      
      
      var val1159 = onchange.get();
      if(val1159 !== null) {
        subs__.addSub(mobl.domBind(node2196, 'change', val1159));
      }
      
      var val1160 = onkeyup.get();
      if(val1160 !== null) {
        subs__.addSub(mobl.domBind(node2196, 'keyup', val1160));
      }
      
      var val1161 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1161 !== null) {
        subs__.addSub(mobl.domBind(node2196, 'blur', val1161));
      }
      
      node2192.append(node2196);
      
      
    }
  };
  renderCond555();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond555();
  }));
  
  callback(root4902); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root4903 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref2252 = style;
  if(ref2252.get() !== null) {
    sel.attr('class', ref2252.get());
    subs__.addSub(ref2252.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2252.rebind());
  
  var val1162 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after359(result__) {
                    var tmp3097 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after359);if(result__ !== undefined) after359(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1162 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val1162));
  }
  
  
  var node2197 = mobl.loadingSpan();
  sel.append(node2197);
  var list429;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList429 = function() {
    var subs__ = listSubs__;
    list429 = options.get();
    list429.list(function(results429) {
      node2197.empty();
      for(var i452 = 0; i452 < results429.length; i452++) {
        (function() {
          var iternode429 = $("<span>");
          node2197.append(iternode429);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results429), i452), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results429), i452), "_2");
          
          var node2198 = $("<option>");
          
          var ref2248 = optionDescription;
          node2198.text(""+ref2248.get());
          var ignore441 = false;
          subs__.addSub(ref2248.addEventListener('change', function(_, ref, val) {
            if(ignore441) return;
            node2198.text(""+val);
          }));
          subs__.addSub(ref2248.rebind());
          
          
          var ref2249 = optionStyle;
          if(ref2249.get() !== null) {
            node2198.attr('class', ref2249.get());
            subs__.addSub(ref2249.addEventListener('change', function(_, ref, val) {
              node2198.attr('class', val);
            }));
            
          }
          subs__.addSub(ref2249.rebind());
          
          var ref2250 = optionValue;
          if(ref2250.get() !== null) {
            node2198.attr('value', ref2250.get());
            subs__.addSub(ref2250.addEventListener('change', function(_, ref, val) {
              node2198.attr('value', val);
            }));
            
          }
          subs__.addSub(ref2250.rebind());
          
          var ref2251 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref2251.get() !== null) {
            node2198.attr('selected', ref2251.get());
            subs__.addSub(ref2251.addEventListener('change', function(_, ref, val) {
              node2198.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node2198.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node2198.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref2251.rebind());
          
          iternode429.append(node2198);
          
          var oldNodes = iternode429;
          iternode429 = iternode429.contents();
          oldNodes.replaceWith(iternode429);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list429.addEventListener('change', function() { listSubs__.unsubscribe(); renderList429(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList429(true); }));
    });
  };
  renderList429();
  
  root4903.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root4903); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root4904 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes3436 = $("<span>");
    root4904.append(nodes3436);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root4905 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node2199 = mobl.loadingSpan();
      root4905.append(node2199);
      var list430;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList430 = function() {
        var subs__ = listSubs__;
        list430 = tabs.get();
        list430.list(function(results430) {
          node2199.empty();
          for(var i453 = 0; i453 < results430.length; i453++) {
            (function() {
              var iternode430 = $("<span>");
              node2199.append(iternode430);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results430), i453), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results430), i453), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results430), i453), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp3053 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp3053.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp3053.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp3053.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp3053.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp3052 = mobl.ref(result__);
              
              var nodes3437 = $("<span>");
              iternode430.append(nodes3437);
              subs__.addSub((mobl.span)(tmp3053, mobl.ref(null), tmp3052, mobl.ref(null), function(_, callback) {
                var root4906 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes3438 = $("<span>");
                root4906.append(nodes3438);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root4907 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root4907); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3438;
                  nodes3438 = node.contents();
                  oldNodes.replaceWith(nodes3438);
                }));
                callback(root4906); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes3437;
                nodes3437 = node.contents();
                oldNodes.replaceWith(nodes3437);
              }));
              
              var oldNodes = iternode430;
              iternode430 = iternode430.contents();
              oldNodes.replaceWith(iternode430);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list430.addEventListener('change', function() { listSubs__.unsubscribe(); renderList430(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList430(true); }));
        });
      };
      renderList430();
      
      callback(root4905); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3436;
      nodes3436 = node.contents();
      oldNodes.replaceWith(nodes3436);
    }));
    
    var node2200 = mobl.loadingSpan();
    root4904.append(node2200);
    var list431;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList431 = function() {
      var subs__ = listSubs__;
      list431 = tabs.get();
      list431.list(function(results431) {
        node2200.empty();
        for(var i454 = 0; i454 < results431.length; i454++) {
          (function() {
            var iternode431 = $("<span>");
            node2200.append(iternode431);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results431), i454), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results431), i454), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results431), i454), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp3054 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp3054.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp3054.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp3054.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp3054.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes3439 = $("<span>");
            iternode431.append(nodes3439);
            subs__.addSub((mobl.block)(tmp3054, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root4908 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes3440 = $("<span>");
              root4908.append(nodes3440);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root4909 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes3441 = $("<span>");
                root4909.append(nodes3441);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl985();
                }));
                
                function renderControl985() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root4910 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root4910); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes3441;
                    nodes3441 = node.contents();
                    oldNodes.replaceWith(nodes3441);
                  }));
                }
                renderControl985();
                callback(root4909); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes3440;
                nodes3440 = node.contents();
                oldNodes.replaceWith(nodes3440);
              }));
              callback(root4908); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes3439;
              nodes3439 = node.contents();
              oldNodes.replaceWith(nodes3439);
            }));
            
            var oldNodes = iternode431;
            iternode431 = iternode431.contents();
            oldNodes.replaceWith(iternode431);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list431.addEventListener('change', function() { listSubs__.unsubscribe(); renderList431(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList431(true); }));
      });
    };
    renderList431();
    
    callback(root4904); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes3436 = $("<span>");
      root4904.append(nodes3436);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4905 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2199 = mobl.loadingSpan();
        root4905.append(node2199);
        var list430;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList430 = function() {
          var subs__ = listSubs__;
          list430 = tabs.get();
          list430.list(function(results430) {
            node2199.empty();
            for(var i453 = 0; i453 < results430.length; i453++) {
              (function() {
                var iternode430 = $("<span>");
                node2199.append(iternode430);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results430), i453), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results430), i453), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results430), i453), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp3053 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp3053.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp3053.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp3053.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp3053.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp3052 = mobl.ref(result__);
                
                var nodes3437 = $("<span>");
                iternode430.append(nodes3437);
                subs__.addSub((mobl.span)(tmp3053, mobl.ref(null), tmp3052, mobl.ref(null), function(_, callback) {
                  var root4906 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes3438 = $("<span>");
                  root4906.append(nodes3438);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root4907 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root4907); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes3438;
                    nodes3438 = node.contents();
                    oldNodes.replaceWith(nodes3438);
                  }));
                  callback(root4906); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3437;
                  nodes3437 = node.contents();
                  oldNodes.replaceWith(nodes3437);
                }));
                
                var oldNodes = iternode430;
                iternode430 = iternode430.contents();
                oldNodes.replaceWith(iternode430);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list430.addEventListener('change', function() { listSubs__.unsubscribe(); renderList430(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList430(true); }));
          });
        };
        renderList430();
        
        callback(root4905); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3436;
        nodes3436 = node.contents();
        oldNodes.replaceWith(nodes3436);
      }));
      
      var node2200 = mobl.loadingSpan();
      root4904.append(node2200);
      var list431;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList431 = function() {
        var subs__ = listSubs__;
        list431 = tabs.get();
        list431.list(function(results431) {
          node2200.empty();
          for(var i454 = 0; i454 < results431.length; i454++) {
            (function() {
              var iternode431 = $("<span>");
              node2200.append(iternode431);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results431), i454), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results431), i454), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results431), i454), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp3054 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp3054.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp3054.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp3054.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp3054.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes3439 = $("<span>");
              iternode431.append(nodes3439);
              subs__.addSub((mobl.block)(tmp3054, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root4908 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes3440 = $("<span>");
                root4908.append(nodes3440);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root4909 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes3441 = $("<span>");
                  root4909.append(nodes3441);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl985();
                  }));
                  
                  function renderControl985() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root4910 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root4910); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes3441;
                      nodes3441 = node.contents();
                      oldNodes.replaceWith(nodes3441);
                    }));
                  }
                  renderControl985();
                  callback(root4909); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3440;
                  nodes3440 = node.contents();
                  oldNodes.replaceWith(nodes3440);
                }));
                callback(root4908); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes3439;
                nodes3439 = node.contents();
                oldNodes.replaceWith(nodes3439);
              }));
              
              var oldNodes = iternode431;
              iternode431 = iternode431.contents();
              oldNodes.replaceWith(iternode431);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list431.addEventListener('change', function() { listSubs__.unsubscribe(); renderList431(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList431(true); }));
        });
      };
      renderList431();
      
      callback(root4904); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root4911 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2201 = $("<div>");
  
  var ref2256 = mobl.ref(ui.searchboxStyle);
  if(ref2256.get() !== null) {
    node2201.attr('class', ref2256.get());
    subs__.addSub(ref2256.addEventListener('change', function(_, ref, val) {
      node2201.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2256.rebind());
  
  
  var node2202 = $("<input>");
  node2202.attr('type', "search");
  
  var ref2253 = mobl.ref(ui.searchBoxInputStyle);
  if(ref2253.get() !== null) {
    node2202.attr('class', ref2253.get());
    subs__.addSub(ref2253.addEventListener('change', function(_, ref, val) {
      node2202.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2253.rebind());
  
  var ref2254 = placeholder;
  if(ref2254.get() !== null) {
    node2202.attr('placeholder', ref2254.get());
    subs__.addSub(ref2254.addEventListener('change', function(_, ref, val) {
      node2202.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref2254.rebind());
  
  var ref2255 = s;
  node2202.val(""+ref2255.get());
  var ignore442 = false;
  subs__.addSub(ref2255.addEventListener('change', function(_, ref, val) {
    if(ignore442) return;
    node2202.val(""+val);
  }));
  subs__.addSub(ref2255.rebind());
  
  subs__.addSub(mobl.domBind(node2202, 'keyup change', function() {
    ignore442 = true;
    s.set(mobl.stringTomobl__String(node2202.val()));
    ignore442 = false;
  }));
  
  
  var val1163 = onsearch.get();
  if(val1163 !== null) {
    subs__.addSub(mobl.domBind(node2202, 'change', val1163));
  }
  
  var val1164 = onkeyup.get();
  if(val1164 !== null) {
    subs__.addSub(mobl.domBind(node2202, 'keyup', val1164));
  }
  node2202.attr('autocorrect', false);
  node2202.attr('autocapitalize', false);
  node2202.attr('autocomplete', false);
  
  node2201.append(node2202);
  root4911.append(node2201);
  callback(root4911); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root4912 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref2257 = mobl.ref(ui.contextMenuStyle);
  if(ref2257.get() !== null) {
    menu.attr('class', ref2257.get());
    subs__.addSub(ref2257.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2257.rebind());
  
  var nodes3442 = $("<span>");
  menu.append(nodes3442);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl986();
  }));
  
  function renderControl986() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4913 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4913); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3442;
      nodes3442 = node.contents();
      oldNodes.replaceWith(nodes3442);
    }));
  }
  renderControl986();
  root4912.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val1165 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp3100 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val1165 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val1165));
  }
  
  root4912.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root4912); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root4914 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp3084 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp3084.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node2203 = $("<span>");
  root4914.append(node2203);
  var condSubs556 = new mobl.CompSubscription();
  subs__.addSub(condSubs556);
  var oldValue556;
  var renderCond556 = function() {
    var value2230 = tmp3084.get();
    if(oldValue556 === value2230) return;
    oldValue556 = value2230;
    var subs__ = condSubs556;
    subs__.unsubscribe();
    node2203.empty();
    if(value2230) {
      items.get().one(function(result__) {
        var tmp3101 = result__;
        var current = mobl.ref(result__);
        
        var node2204 = $("<div>");
        node2204.attr('width', "100%");
        
        
        var node2205 = $("<div>");
        node2205.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes3445 = $("<span>");
        node2205.append(nodes3445);
        subs__.addSub((ui.group)(function(_, callback) {
          var root4917 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node2208 = mobl.loadingSpan();
          root4917.append(node2208);
          var list432;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList432 = function() {
            var subs__ = listSubs__;
            list432 = items.get();
            list432.list(function(results432) {
              node2208.empty();
              for(var i455 = 0; i455 < results432.length; i455++) {
                (function() {
                  var iternode432 = $("<span>");
                  node2208.append(iternode432);
                  var it;
                  it = mobl.ref(mobl.ref(results432), i455);
                  var result__ = it.get() == current.get();
                  var tmp3060 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp3060.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp3060.set(it.get() == current.get());
                  }));
                  
                  
                  var node2209 = $("<span>");
                  iternode432.append(node2209);
                  var condSubs558 = new mobl.CompSubscription();
                  subs__.addSub(condSubs558);
                  var oldValue558;
                  var renderCond558 = function() {
                    var value2232 = tmp3060.get();
                    if(oldValue558 === value2232) return;
                    oldValue558 = value2232;
                    var subs__ = condSubs558;
                    subs__.unsubscribe();
                    node2209.empty();
                    if(value2232) {
                      var nodes3446 = $("<span>");
                      node2209.append(nodes3446);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root4918 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes3447 = $("<span>");
                        root4918.append(nodes3447);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl988();
                        }));
                        
                        function renderControl988() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root4919 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root4919); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes3447;
                            nodes3447 = node.contents();
                            oldNodes.replaceWith(nodes3447);
                          }));
                        }
                        renderControl988();
                        callback(root4918); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes3446;
                        nodes3446 = node.contents();
                        oldNodes.replaceWith(nodes3446);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp3059 = mobl.ref(result__);
                      
                      var nodes3448 = $("<span>");
                      node2209.append(nodes3448);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3059, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root4920 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes3449 = $("<span>");
                        root4920.append(nodes3449);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl989();
                        }));
                        
                        function renderControl989() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root4921 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root4921); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes3449;
                            nodes3449 = node.contents();
                            oldNodes.replaceWith(nodes3449);
                          }));
                        }
                        renderControl989();
                        callback(root4920); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes3448;
                        nodes3448 = node.contents();
                        oldNodes.replaceWith(nodes3448);
                      }));
                      
                      
                    }
                  };
                  renderCond558();
                  subs__.addSub(tmp3060.addEventListener('change', function() {
                    renderCond558();
                  }));
                  
                  
                  var oldNodes = iternode432;
                  iternode432 = iternode432.contents();
                  oldNodes.replaceWith(iternode432);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list432.addEventListener('change', function() { listSubs__.unsubscribe(); renderList432(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList432(true); }));
            });
          };
          renderList432();
          
          callback(root4917); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes3445;
          nodes3445 = node.contents();
          oldNodes.replaceWith(nodes3445);
        }));
        node2204.append(node2205);
        
        var node2206 = $("<div>");
        node2206.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node2207 = $("<span>");
        node2206.append(node2207);
        var condSubs557 = new mobl.CompSubscription();
        subs__.addSub(condSubs557);
        var oldValue557;
        var renderCond557 = function() {
          var value2231 = current.get();
          if(oldValue557 === value2231) return;
          oldValue557 = value2231;
          var subs__ = condSubs557;
          subs__.unsubscribe();
          node2207.empty();
          if(value2231) {
            var nodes3443 = $("<span>");
            node2207.append(nodes3443);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl987();
            }));
            
            function renderControl987() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root4915 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root4915); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3443;
                nodes3443 = node.contents();
                oldNodes.replaceWith(nodes3443);
              }));
            }
            renderControl987();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp3061 = mobl.ref(result__);
            
            var nodes3444 = $("<span>");
            node2207.append(nodes3444);
            subs__.addSub((mobl.label)(tmp3061, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root4916 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root4916); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes3444;
              nodes3444 = node.contents();
              oldNodes.replaceWith(nodes3444);
            }));
            
            
          }
        };
        renderCond557();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond557();
        }));
        
        node2204.append(node2206);
        node2203.append(node2204);
        
        
        
        
        
        
      });
    } else {
      var nodes3450 = $("<span>");
      node2203.append(nodes3450);
      subs__.addSub((ui.group)(function(_, callback) {
        var root4922 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2210 = mobl.loadingSpan();
        root4922.append(node2210);
        var list433;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList433 = function() {
          var subs__ = listSubs__;
          list433 = items.get();
          list433.list(function(results433) {
            node2210.empty();
            for(var i456 = 0; i456 < results433.length; i456++) {
              (function() {
                var iternode433 = $("<span>");
                node2210.append(iternode433);
                var it;
                it = mobl.ref(mobl.ref(results433), i456);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp3102 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp3055 = mobl.ref(result__);
                
                var nodes3451 = $("<span>");
                iternode433.append(nodes3451);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3055, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root4923 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes3452 = $("<span>");
                  root4923.append(nodes3452);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl990();
                  }));
                  
                  function renderControl990() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root4924 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root4924); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes3452;
                      nodes3452 = node.contents();
                      oldNodes.replaceWith(nodes3452);
                    }));
                  }
                  renderControl990();
                  callback(root4923); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3451;
                  nodes3451 = node.contents();
                  oldNodes.replaceWith(nodes3451);
                }));
                
                var oldNodes = iternode433;
                iternode433 = iternode433.contents();
                oldNodes.replaceWith(iternode433);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list433.addEventListener('change', function() { listSubs__.unsubscribe(); renderList433(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList433(true); }));
          });
        };
        renderList433();
        
        callback(root4922); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3450;
        nodes3450 = node.contents();
        oldNodes.replaceWith(nodes3450);
      }));
      
      
    }
  };
  renderCond556();
  subs__.addSub(tmp3084.addEventListener('change', function() {
    renderCond556();
  }));
  
  callback(root4914); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root4925 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp3058 = mobl.ref(result__);
  
  var nodes3453 = $("<span>");
  root4925.append(nodes3453);
  subs__.addSub((ui.header)(tmp3058, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root4926 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3057 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3056 = mobl.ref(result__);
    
    var nodes3454 = $("<span>");
    root4926.append(nodes3454);
    subs__.addSub((ui.backButton)(tmp3056, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3057, function(_, callback) {
      var root4927 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4927); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3454;
      nodes3454 = node.contents();
      oldNodes.replaceWith(nodes3454);
    }));
    callback(root4926); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3453;
    nodes3453 = node.contents();
    oldNodes.replaceWith(nodes3453);
  }));
  var nodes3455 = $("<span>");
  root4925.append(nodes3455);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl991();
  }));
  
  function renderControl991() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root4928 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4928); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3455;
      nodes3455 = node.contents();
      oldNodes.replaceWith(nodes3455);
    }));
  }
  renderControl991();
  callback(root4925); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root4929 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes3456 = $("<span>");
  root4929.append(nodes3456);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4930 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2211 = mobl.loadingSpan();
    root4930.append(node2211);
    var list434;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList434 = function() {
      var subs__ = listSubs__;
      list434 = coll.get();
      list434.list(function(results434) {
        node2211.empty();
        for(var i457 = 0; i457 < results434.length; i457++) {
          (function() {
            var iternode434 = $("<span>");
            node2211.append(iternode434);
            var it;
            it = mobl.ref(mobl.ref(results434), i457);
            var result__ = it.get() == selected.get();
            var tmp3063 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp3063.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp3063.set(it.get() == selected.get());
            }));
            
            
            var node2212 = $("<span>");
            iternode434.append(node2212);
            var condSubs559 = new mobl.CompSubscription();
            subs__.addSub(condSubs559);
            var oldValue559;
            var renderCond559 = function() {
              var value2233 = tmp3063.get();
              if(oldValue559 === value2233) return;
              oldValue559 = value2233;
              var subs__ = condSubs559;
              subs__.unsubscribe();
              node2212.empty();
              if(value2233) {
                var nodes3457 = $("<span>");
                node2212.append(nodes3457);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root4931 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes3458 = $("<span>");
                  root4931.append(nodes3458);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl992();
                  }));
                  
                  function renderControl992() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root4932 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root4932); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes3458;
                      nodes3458 = node.contents();
                      oldNodes.replaceWith(nodes3458);
                    }));
                  }
                  renderControl992();
                  callback(root4931); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3457;
                  nodes3457 = node.contents();
                  oldNodes.replaceWith(nodes3457);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp3062 = mobl.ref(result__);
                
                var nodes3459 = $("<span>");
                node2212.append(nodes3459);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3062, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root4933 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes3460 = $("<span>");
                  root4933.append(nodes3460);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl993();
                  }));
                  
                  function renderControl993() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root4934 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root4934); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes3460;
                      nodes3460 = node.contents();
                      oldNodes.replaceWith(nodes3460);
                    }));
                  }
                  renderControl993();
                  callback(root4933); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3459;
                  nodes3459 = node.contents();
                  oldNodes.replaceWith(nodes3459);
                }));
                
                
              }
            };
            renderCond559();
            subs__.addSub(tmp3063.addEventListener('change', function() {
              renderCond559();
            }));
            
            
            var oldNodes = iternode434;
            iternode434 = iternode434.contents();
            oldNodes.replaceWith(iternode434);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list434.addEventListener('change', function() { listSubs__.unsubscribe(); renderList434(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList434(true); }));
      });
    };
    renderList434();
    
    callback(root4930); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3456;
    nodes3456 = node.contents();
    oldNodes.replaceWith(nodes3456);
  }));
  callback(root4929); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root4935 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp3103 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp3064 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp3064.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp3064.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp3064.set(coll.get().limit(n.get()));
    }));
    
    
    var node2213 = mobl.loadingSpan();
    root4935.append(node2213);
    var list435;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList435 = function() {
      var subs__ = listSubs__;
      list435 = tmp3064.get();
      list435.list(function(results435) {
        node2213.empty();
        for(var i458 = 0; i458 < results435.length; i458++) {
          (function() {
            var iternode435 = $("<span>");
            node2213.append(iternode435);
            var it;
            it = mobl.ref(mobl.ref(results435), i458);
            var nodes3461 = $("<span>");
            iternode435.append(nodes3461);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl994();
            }));
            
            function renderControl994() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root4936 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root4936); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3461;
                nodes3461 = node.contents();
                oldNodes.replaceWith(nodes3461);
              }));
            }
            renderControl994();
            
            var oldNodes = iternode435;
            iternode435 = iternode435.contents();
            oldNodes.replaceWith(iternode435);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list435.addEventListener('change', function() { listSubs__.unsubscribe(); renderList435(true); }));
        subs__.addSub(tmp3064.addEventListener('change', function() { listSubs__.unsubscribe(); renderList435(true); }));
      });
    };
    renderList435();
    
    var result__ = n.get() < total.get();
    var tmp3066 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp3066.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp3066.set(n.get() < total.get());
    }));
    
    
    var node2214 = $("<span>");
    root4935.append(node2214);
    var condSubs560 = new mobl.CompSubscription();
    subs__.addSub(condSubs560);
    var oldValue560;
    var renderCond560 = function() {
      var value2234 = tmp3066.get();
      if(oldValue560 === value2234) return;
      oldValue560 = value2234;
      var subs__ = condSubs560;
      subs__.unsubscribe();
      node2214.empty();
      if(value2234) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp3065 = mobl.ref(result__);
        
        var nodes3462 = $("<span>");
        node2214.append(nodes3462);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp3065, mobl.ref(null), function(_, callback) {
          var root4937 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes3463 = $("<span>");
          root4937.append(nodes3463);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root4938 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root4938); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes3463;
            nodes3463 = node.contents();
            oldNodes.replaceWith(nodes3463);
          }));
          callback(root4937); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes3462;
          nodes3462 = node.contents();
          oldNodes.replaceWith(nodes3462);
        }));
        
        
      } else {
        
      }
    };
    renderCond560();
    subs__.addSub(tmp3066.addEventListener('change', function() {
      renderCond560();
    }));
    
    callback(root4935); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root4939 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3464 = $("<span>");
  root4939.append(nodes3464);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4940 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2215 = mobl.loadingSpan();
    root4940.append(node2215);
    var list436;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList436 = function() {
      var subs__ = listSubs__;
      list436 = items.get();
      list436.list(function(results436) {
        node2215.empty();
        for(var i459 = 0; i459 < results436.length; i459++) {
          (function() {
            var iternode436 = $("<span>");
            node2215.append(iternode436);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results436), i459), "_1");it = mobl.ref(mobl.ref(mobl.ref(results436), i459), "_2");
            var nodes3465 = $("<span>");
            iternode436.append(nodes3465);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root4941 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes3466 = $("<span>");
              root4941.append(nodes3466);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root4942 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root4942); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3466;
                nodes3466 = node.contents();
                oldNodes.replaceWith(nodes3466);
              }));
              callback(root4941); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes3465;
              nodes3465 = node.contents();
              oldNodes.replaceWith(nodes3465);
            }));
            
            var oldNodes = iternode436;
            iternode436 = iternode436.contents();
            oldNodes.replaceWith(iternode436);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list436.addEventListener('change', function() { listSubs__.unsubscribe(); renderList436(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList436(true); }));
      });
    };
    renderList436();
    
    callback(root4940); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3464;
    nodes3464 = node.contents();
    oldNodes.replaceWith(nodes3464);
  }));
  callback(root4939); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root4943 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll2635) {
    coll2635 = coll2635.reverse();
    function processOne124() {
      var it;
      it = coll2635.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll2635.length > 0) processOne124(); else rest124();
      
    }
    function rest124() {
      var nodes3467 = $("<span>");
      root4943.append(nodes3467);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root4944 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp3067 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp3068 = mobl.ref(result__);
        
        var nodes3468 = $("<span>");
        root4944.append(nodes3468);
        subs__.addSub((ui.backButton)(tmp3068, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3067, function(_, callback) {
          var root4945 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4945); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3468;
          nodes3468 = node.contents();
          oldNodes.replaceWith(nodes3468);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll2634) {
                           coll2634 = coll2634.reverse();
                           function processOne123() {
                             var checked;var it;
                             var tmp3105 = coll2634.pop();
                             checked = tmp3105._1;it = tmp3105._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll2634.length > 0) processOne123(); else rest123();
                               
                             } else {
                               {
                                 
                                 if(coll2634.length > 0) processOne123(); else rest123();
                                 
                               }
                             }
                           }
                           function rest123() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll2634.length > 0) processOne123(); else rest123();
                         });
                         
                       };
        var tmp3069 = mobl.ref(result__);
        
        var nodes3469 = $("<span>");
        root4944.append(nodes3469);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp3069, function(_, callback) {
          var root4946 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4946); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3469;
          nodes3469 = node.contents();
          oldNodes.replaceWith(nodes3469);
        }));
        callback(root4944); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3467;
        nodes3467 = node.contents();
        oldNodes.replaceWith(nodes3467);
      }));
      var nodes3470 = $("<span>");
      root4943.append(nodes3470);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root4947 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4947); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3470;
        nodes3470 = node.contents();
        oldNodes.replaceWith(nodes3470);
      }));
      callback(root4943); return subs__;
      
      
    }
    if(coll2635.length > 0) processOne124(); else rest124();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root4948 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes3471 = $("<span>");
  root4948.append(nodes3471);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root4949 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4949); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3471;
    nodes3471 = node.contents();
    oldNodes.replaceWith(nodes3471);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp3070 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp3070.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp3070.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp3070.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp3070.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp3070.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes3472 = $("<span>");
  root4948.append(nodes3472);
  subs__.addSub((ui.masterDetail)(tmp3070, masterItem, detailItem, function(_, callback) {
    var root4950 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4950); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3472;
    nodes3472 = node.contents();
    oldNodes.replaceWith(nodes3472);
  }));
  callback(root4948); return subs__;
  
  
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
  var root4951 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes3473 = $("<span>");
  root4951.append(nodes3473);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root4952 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2216 = mobl.loadingSpan();
    root4952.append(node2216);
    var list437;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList437 = function() {
      var subs__ = listSubs__;
      list437 = sections.get();
      list437.list(function(results437) {
        node2216.empty();
        for(var i460 = 0; i460 < results437.length; i460++) {
          (function() {
            var iternode437 = $("<span>");
            node2216.append(iternode437);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results437), i460), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results437), i460), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp3072 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp3072.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp3072.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp3072.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp3072.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp3071 = mobl.ref(result__);
            
            var nodes3474 = $("<span>");
            iternode437.append(nodes3474);
            subs__.addSub((mobl.span)(tmp3072, mobl.ref(null), tmp3071, mobl.ref(null), function(_, callback) {
              var root4953 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes3475 = $("<span>");
              root4953.append(nodes3475);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root4954 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root4954); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3475;
                nodes3475 = node.contents();
                oldNodes.replaceWith(nodes3475);
              }));
              callback(root4953); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes3474;
              nodes3474 = node.contents();
              oldNodes.replaceWith(nodes3474);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp3073 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp3073.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp3073.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp3073.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp3073.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes3476 = $("<span>");
            iternode437.append(nodes3476);
            subs__.addSub((mobl.block)(tmp3073, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root4955 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes3477 = $("<span>");
              root4955.append(nodes3477);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl995();
              }));
              
              function renderControl995() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root4956 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root4956); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3477;
                  nodes3477 = node.contents();
                  oldNodes.replaceWith(nodes3477);
                }));
              }
              renderControl995();
              callback(root4955); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes3476;
              nodes3476 = node.contents();
              oldNodes.replaceWith(nodes3476);
            }));
            
            var oldNodes = iternode437;
            iternode437 = iternode437.contents();
            oldNodes.replaceWith(iternode437);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list437.addEventListener('change', function() { listSubs__.unsubscribe(); renderList437(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList437(true); }));
      });
    };
    renderList437();
    
    callback(root4952); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3473;
    nodes3473 = node.contents();
    oldNodes.replaceWith(nodes3473);
  }));
  callback(root4951); return subs__;
  
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
  var root4957 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2217 = $("<table>");
  
  var ref2258 = style;
  if(ref2258.get() !== null) {
    node2217.attr('class', ref2258.get());
    subs__.addSub(ref2258.addEventListener('change', function(_, ref, val) {
      node2217.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2258.rebind());
  
  var nodes3478 = $("<span>");
  node2217.append(nodes3478);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl996();
  }));
  
  function renderControl996() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4958 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4958); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3478;
      nodes3478 = node.contents();
      oldNodes.replaceWith(nodes3478);
    }));
  }
  renderControl996();
  root4957.append(node2217);
  callback(root4957); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root4959 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2218 = $("<tr>");
  
  var ref2259 = style;
  if(ref2259.get() !== null) {
    node2218.attr('class', ref2259.get());
    subs__.addSub(ref2259.addEventListener('change', function(_, ref, val) {
      node2218.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2259.rebind());
  
  var nodes3479 = $("<span>");
  node2218.append(nodes3479);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl997();
  }));
  
  function renderControl997() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4960 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4960); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3479;
      nodes3479 = node.contents();
      oldNodes.replaceWith(nodes3479);
    }));
  }
  renderControl997();
  root4959.append(node2218);
  callback(root4959); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root4961 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2219 = $("<td>");
  
  var ref2260 = width;
  if(ref2260.get() !== null) {
    node2219.attr('width', ref2260.get());
    subs__.addSub(ref2260.addEventListener('change', function(_, ref, val) {
      node2219.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2260.rebind());
  
  var ref2261 = style;
  if(ref2261.get() !== null) {
    node2219.attr('class', ref2261.get());
    subs__.addSub(ref2261.addEventListener('change', function(_, ref, val) {
      node2219.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2261.rebind());
  
  var nodes3480 = $("<span>");
  node2219.append(nodes3480);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl998();
  }));
  
  function renderControl998() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4962 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4962); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3480;
      nodes3480 = node.contents();
      oldNodes.replaceWith(nodes3480);
    }));
  }
  renderControl998();
  root4961.append(node2219);
  callback(root4961); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root4963 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2220 = $("<td>");
  
  var ref2262 = width;
  if(ref2262.get() !== null) {
    node2220.attr('width', ref2262.get());
    subs__.addSub(ref2262.addEventListener('change', function(_, ref, val) {
      node2220.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2262.rebind());
  
  var ref2263 = style;
  if(ref2263.get() !== null) {
    node2220.attr('class', ref2263.get());
    subs__.addSub(ref2263.addEventListener('change', function(_, ref, val) {
      node2220.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2263.rebind());
  
  var nodes3481 = $("<span>");
  node2220.append(nodes3481);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl999();
  }));
  
  function renderControl999() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4964 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4964); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3481;
      nodes3481 = node.contents();
      oldNodes.replaceWith(nodes3481);
    }));
  }
  renderControl999();
  root4963.append(node2220);
  callback(root4963); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root4965 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2221 = $("<td>");
  
  var ref2264 = width;
  if(ref2264.get() !== null) {
    node2221.attr('width', ref2264.get());
    subs__.addSub(ref2264.addEventListener('change', function(_, ref, val) {
      node2221.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2264.rebind());
  
  var ref2265 = style;
  if(ref2265.get() !== null) {
    node2221.attr('class', ref2265.get());
    subs__.addSub(ref2265.addEventListener('change', function(_, ref, val) {
      node2221.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2265.rebind());
  
  
  var node2222 = $("<strong>");
  
  var nodes3482 = $("<span>");
  node2222.append(nodes3482);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1000();
  }));
  
  function renderControl1000() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4966 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4966); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3482;
      nodes3482 = node.contents();
      oldNodes.replaceWith(nodes3482);
    }));
  }
  renderControl1000();
  node2221.append(node2222);
  root4965.append(node2221);
  callback(root4965); return subs__;
  
  
  
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
  items.list(function(coll2636) {
    coll2636 = coll2636.reverse();
    function processOne125() {
      var item;
      item = coll2636.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll2636.length > 0) processOne125(); else rest125();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll2636.length > 0) processOne125(); else rest125();
          
        }
      }
    }
    function rest125() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll2636.length > 0) processOne125(); else rest125();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root4967 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp3085 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp3085.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node2223 = $("<span>");
  root4967.append(node2223);
  var condSubs561 = new mobl.CompSubscription();
  subs__.addSub(condSubs561);
  var oldValue561;
  var renderCond561 = function() {
    var value2235 = tmp3085.get();
    if(oldValue561 === value2235) return;
    oldValue561 = value2235;
    var subs__ = condSubs561;
    subs__.unsubscribe();
    node2223.empty();
    if(value2235) {
      items.get().one(function(result__) {
        var tmp3107 = result__;
        var current = mobl.ref(result__);
        
        var node2224 = $("<div>");
        node2224.attr('width', "100%");
        
        
        var node2225 = $("<div>");
        node2225.attr('style', "float:left; width:45%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes3484 = $("<span>");
        node2225.append(nodes3484);
        subs__.addSub((ui.group)(function(_, callback) {
          var root4969 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node2228 = mobl.loadingSpan();
          root4969.append(node2228);
          var list438;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList438 = function() {
            var subs__ = listSubs__;
            list438 = items.get();
            list438.list(function(results438) {
              node2228.empty();
              for(var i461 = 0; i461 < results438.length; i461++) {
                (function() {
                  var iternode438 = $("<span>");
                  node2228.append(iternode438);
                  var it;
                  it = mobl.ref(mobl.ref(results438), i461);
                  var result__ = it.get() == current.get();
                  var tmp3082 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp3082.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp3082.set(it.get() == current.get());
                  }));
                  
                  
                  var node2229 = $("<span>");
                  iternode438.append(node2229);
                  var condSubs563 = new mobl.CompSubscription();
                  subs__.addSub(condSubs563);
                  var oldValue563;
                  var renderCond563 = function() {
                    var value2237 = tmp3082.get();
                    if(oldValue563 === value2237) return;
                    oldValue563 = value2237;
                    var subs__ = condSubs563;
                    subs__.unsubscribe();
                    node2229.empty();
                    if(value2237) {
                      var nodes3485 = $("<span>");
                      node2229.append(nodes3485);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root4970 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp3110 = result__;
                          var tmp3079 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp3108 = result__;
                              var result__ = tmp3108;
                              tmp3079.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp3109 = result__;
                              var result__ = tmp3109;
                              tmp3079.set(result__);
                              
                            });
                          }));
                          
                          var nodes3486 = $("<span>");
                          root4970.append(nodes3486);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl1002();
                          }));
                          
                          function renderControl1002() {
                            subs__.addSub((masterItem.get())(it, tmp3079, function(elements, callback) {
                              var root4971 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root4971); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes3486;
                              nodes3486 = node.contents();
                              oldNodes.replaceWith(nodes3486);
                            }));
                          }
                          renderControl1002();
                          callback(root4970); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes3485;
                        nodes3485 = node.contents();
                        oldNodes.replaceWith(nodes3485);
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
                      var tmp3081 = mobl.ref(result__);
                      
                      var nodes3487 = $("<span>");
                      node2229.append(nodes3487);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3081, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root4972 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp3113 = result__;
                          var tmp3080 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp3111 = result__;
                              var result__ = tmp3111;
                              tmp3080.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp3112 = result__;
                              var result__ = tmp3112;
                              tmp3080.set(result__);
                              
                            });
                          }));
                          
                          var nodes3488 = $("<span>");
                          root4972.append(nodes3488);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl1003();
                          }));
                          
                          function renderControl1003() {
                            subs__.addSub((masterItem.get())(it, tmp3080, function(elements, callback) {
                              var root4973 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root4973); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes3488;
                              nodes3488 = node.contents();
                              oldNodes.replaceWith(nodes3488);
                            }));
                          }
                          renderControl1003();
                          callback(root4972); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes3487;
                        nodes3487 = node.contents();
                        oldNodes.replaceWith(nodes3487);
                      }));
                      
                      
                    }
                  };
                  renderCond563();
                  subs__.addSub(tmp3082.addEventListener('change', function() {
                    renderCond563();
                  }));
                  
                  
                  var oldNodes = iternode438;
                  iternode438 = iternode438.contents();
                  oldNodes.replaceWith(iternode438);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list438.addEventListener('change', function() { listSubs__.unsubscribe(); renderList438(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList438(true); }));
            });
          };
          renderList438();
          
          callback(root4969); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes3484;
          nodes3484 = node.contents();
          oldNodes.replaceWith(nodes3484);
        }));
        node2224.append(node2225);
        
        var node2226 = $("<div>");
        node2226.attr('style', "float:left; width:53%; position:relative; margin-left: 1%;");
        
        var result__ = current.get() && ui.visible.get();
        var tmp3083 = mobl.ref(result__);
        subs__.addSub(current.addEventListener('change', function() {
          tmp3083.set(current.get() && ui.visible.get());
        }));
        subs__.addSub(ui.visible.addEventListener('change', function() {
          tmp3083.set(current.get() && ui.visible.get());
        }));
        
        
        var node2227 = $("<span>");
        node2226.append(node2227);
        var condSubs562 = new mobl.CompSubscription();
        subs__.addSub(condSubs562);
        var oldValue562;
        var renderCond562 = function() {
          var value2236 = tmp3083.get();
          if(oldValue562 === value2236) return;
          oldValue562 = value2236;
          var subs__ = condSubs562;
          subs__.unsubscribe();
          node2227.empty();
          if(value2236) {
            var nodes3483 = $("<span>");
            node2227.append(nodes3483);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl1001();
            }));
            
            function renderControl1001() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root4968 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root4968); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3483;
                nodes3483 = node.contents();
                oldNodes.replaceWith(nodes3483);
              }));
            }
            renderControl1001();
            
            
          } else {
            
          }
        };
        renderCond562();
        subs__.addSub(tmp3083.addEventListener('change', function() {
          renderCond562();
        }));
        
        node2224.append(node2226);
        node2223.append(node2224);
        
        
        
        
        
        
      });
    } else {
      var nodes3489 = $("<span>");
      node2223.append(nodes3489);
      subs__.addSub((ui.group)(function(_, callback) {
        var root4974 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2230 = mobl.loadingSpan();
        root4974.append(node2230);
        var list439;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList439 = function() {
          var subs__ = listSubs__;
          list439 = items.get();
          list439.list(function(results439) {
            node2230.empty();
            for(var i462 = 0; i462 < results439.length; i462++) {
              (function() {
                var iternode439 = $("<span>");
                node2230.append(iternode439);
                var it;
                it = mobl.ref(mobl.ref(results439), i462);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp3117 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp3075 = mobl.ref(result__);
                
                var nodes3490 = $("<span>");
                iternode439.append(nodes3490);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3075, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root4975 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp3116 = result__;
                    var tmp3074 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp3114 = result__;
                        var result__ = tmp3114;
                        tmp3074.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp3115 = result__;
                        var result__ = tmp3115;
                        tmp3074.set(result__);
                        
                      });
                    }));
                    
                    var nodes3491 = $("<span>");
                    root4975.append(nodes3491);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl1004();
                    }));
                    
                    function renderControl1004() {
                      subs__.addSub((masterItem.get())(it, tmp3074, function(elements, callback) {
                        var root4976 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root4976); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes3491;
                        nodes3491 = node.contents();
                        oldNodes.replaceWith(nodes3491);
                      }));
                    }
                    renderControl1004();
                    callback(root4975); return subs__;
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes3490;
                  nodes3490 = node.contents();
                  oldNodes.replaceWith(nodes3490);
                }));
                
                var oldNodes = iternode439;
                iternode439 = iternode439.contents();
                oldNodes.replaceWith(iternode439);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list439.addEventListener('change', function() { listSubs__.unsubscribe(); renderList439(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList439(true); }));
          });
        };
        renderList439();
        
        callback(root4974); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3489;
        nodes3489 = node.contents();
        oldNodes.replaceWith(nodes3489);
      }));
      
      
    }
  };
  renderCond561();
  subs__.addSub(tmp3085.addEventListener('change', function() {
    renderCond561();
  }));
  
  callback(root4967); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root4977 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp3078 = mobl.ref(result__);
  
  var nodes3492 = $("<span>");
  root4977.append(nodes3492);
  subs__.addSub((ui.header)(tmp3078, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root4978 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    mobl.sleep(100, function(result__) {
      var tmp3118 = result__;
      mathJAX.renderMaths(function(result__) {
        var tmp3119 = result__;
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp3077 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp3076 = mobl.ref(result__);
        
        var nodes3493 = $("<span>");
        root4978.append(nodes3493);
        subs__.addSub((ui.backButton)(tmp3076, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3077, function(_, callback) {
          var root4979 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4979); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3493;
          nodes3493 = node.contents();
          oldNodes.replaceWith(nodes3493);
        }));
        callback(root4978); return subs__;
        
      });
    });
    return subs__;
  }, function(node) {
    var oldNodes = nodes3492;
    nodes3492 = node.contents();
    oldNodes.replaceWith(nodes3492);
  }));
  var nodes3494 = $("<span>");
  root4977.append(nodes3494);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl1005();
  }));
  
  function renderControl1005() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root4980 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4980); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3494;
      nodes3494 = node.contents();
      oldNodes.replaceWith(nodes3494);
    }));
  }
  renderControl1005();
  callback(root4977); return subs__;
  
  
  return subs__;
};

ui.introduction = function(elements, callback) {
  var root4981 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3495 = $("<span>");
  root4981.append(nodes3495);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root4982 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes3496 = $("<span>");
    root4982.append(nodes3496);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root4983 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4983); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3496;
      nodes3496 = node.contents();
      oldNodes.replaceWith(nodes3496);
    }));
    callback(root4982); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3495;
    nodes3495 = node.contents();
    oldNodes.replaceWith(nodes3495);
  }));
  
  var intro = mobl.ref("\n<div style=\"padding:20px\">\n<img src=\"icon.png\" style=\"width:30px;height:30px; float:left; padding:5px 5px 5px 0px\"/> Mathmo is designed to give you extra practice.\n<br />\n<br />\nOn the <b>My Qs</b> tab you'll find your current set of questions under a list of topics. \nThese stay with you till you clear them or delete them individually. They'll be the same questions even if you close Mathmo and return to it later.\nTap one of the question topics to see the question itself.\n<br /><br />\nWhen you have completed a question, touch <b>Check Answer</b> to check your work and\nreply to <b>Did you agree?</b>. You may need to do a little more work to see whether your answer really is the same or not.\nThe questions will change colour according to your answer. Red means 'I didn't agree'. Green means 'I agreed'. Black means 'Answer not checked'. \n<br /><br />\nOn the <b>Add</b> tab you can generate 5 more random core, further or stats questions, or generate them singly on selected topics.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. \n<a href=\"http://nrich.maths.org/7088\" target=\"_blank\">Further info here</a>.\n\n<h3>Credits</h3>\n<p>\nSyllabus hugging ideas: Stephen Hewson\n</p>\n<p>\nQuestion and Answer generators:\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson with contributions from\n<a href=\"http://github.com/naush/mathmo\">Li Hsuan</a>.</p>\n\n<p>\nThe following have also been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n\n</div>\n");
  var nodes3497 = $("<span>");
  root4981.append(nodes3497);
  subs__.addSub((mobl.html)(intro, function(_, callback) {
    var root4984 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4984); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3497;
    nodes3497 = node.contents();
    oldNodes.replaceWith(nodes3497);
  }));
  callback(root4981); return subs__;
  
  
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
