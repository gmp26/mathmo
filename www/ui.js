mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root9937 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3960 = $("<span>");
  root9937.append(node3960);
  var condSubs960 = new mobl.CompSubscription();
  subs__.addSub(condSubs960);
  var oldValue960;
  var renderCond960 = function() {
    var value4396 = value.get();
    if(oldValue960 === value4396) return;
    oldValue960 = value4396;
    var subs__ = condSubs960;
    subs__.unsubscribe();
    node3960.empty();
    if(value4396) {
      var nodes7393 = $("<span>");
      node3960.append(nodes7393);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl1605();
      }));
      
      function renderControl1605() {
        subs__.addSub((elements)(function(elements, callback) {
          var root9938 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9938); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7393;
          nodes7393 = node.contents();
          oldNodes.replaceWith(nodes7393);
        }));
      }
      renderControl1605();
      
      
    } else {
      var nodes7394 = $("<span>");
      node3960.append(nodes7394);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9939 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes7395 = $("<span>");
        root9939.append(nodes7395);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root9940 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9940); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7395;
          nodes7395 = node.contents();
          oldNodes.replaceWith(nodes7395);
        }));
        var nodes7396 = $("<span>");
        root9939.append(nodes7396);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root9941 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9941); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7396;
          nodes7396 = node.contents();
          oldNodes.replaceWith(nodes7396);
        }));
        callback(root9939); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7394;
        nodes7394 = node.contents();
        oldNodes.replaceWith(nodes7394);
      }));
      
      
    }
  };
  renderCond960();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond960();
  }));
  
  callback(root9937); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root9942 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3961 = $("<div>");
  
  var ref3935 = mobl.ref(ui.headerStyle);
  if(ref3935.get() !== null) {
    node3961.attr('class', ref3935.get());
    subs__.addSub(ref3935.addEventListener('change', function(_, ref, val) {
      node3961.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3935.rebind());
  
  var val2015 = onclick.get();
  if(val2015 !== null) {
    subs__.addSub(mobl.domBind(node3961, 'tap', val2015));
  }
  
  var ref3936 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref3936.get() !== null) {
    node3961.attr('style', ref3936.get());
    subs__.addSub(ref3936.addEventListener('change', function(_, ref, val) {
      node3961.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node3961.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref3936.rebind());
  
  
  var node3964 = $("<div>");
  
  var ref3934 = mobl.ref(ui.headerContainerStyle);
  if(ref3934.get() !== null) {
    node3964.attr('class', ref3934.get());
    subs__.addSub(ref3934.addEventListener('change', function(_, ref, val) {
      node3964.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3934.rebind());
  
  
  var node3965 = $("<div>");
  
  var ref3932 = text;
  node3965.text(""+ref3932.get());
  var ignore773 = false;
  subs__.addSub(ref3932.addEventListener('change', function(_, ref, val) {
    if(ignore773) return;
    node3965.text(""+val);
  }));
  subs__.addSub(ref3932.rebind());
  
  
  var ref3933 = mobl.ref(ui.headerTextStyle);
  if(ref3933.get() !== null) {
    node3965.attr('class', ref3933.get());
    subs__.addSub(ref3933.addEventListener('change', function(_, ref, val) {
      node3965.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3933.rebind());
  
  node3964.append(node3965);
  node3961.append(node3964);
  var nodes7397 = $("<span>");
  node3961.append(nodes7397);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1606();
  }));
  
  function renderControl1606() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9943 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9943); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7397;
      nodes7397 = node.contents();
      oldNodes.replaceWith(nodes7397);
    }));
  }
  renderControl1606();
  root9942.append(node3961);
  
  var node3962 = $("<span>");
  root9942.append(node3962);
  var condSubs961 = new mobl.CompSubscription();
  subs__.addSub(condSubs961);
  var oldValue961;
  var renderCond961 = function() {
    var value4397 = fixedPosition.get();
    if(oldValue961 === value4397) return;
    oldValue961 = value4397;
    var subs__ = condSubs961;
    subs__.unsubscribe();
    node3962.empty();
    if(value4397) {
      
      var node3963 = $("<div>");
      node3963.attr('id', "hello");
      node3963.attr('style', "height: 2.9em;");
      
      node3962.append(node3963);
      
      
    } else {
      
    }
  };
  renderCond961();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond961();
  }));
  
  callback(root9942); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root9944 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref3937 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref3937.get() !== null) {
    sp.attr('class', ref3937.get());
    subs__.addSub(ref3937.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref3937.rebind());
  
  var val2016 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val2016 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val2016));
  }
  
  var val2017 = function(event, callback) {
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
  if(val2017 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val2017));
  }
  
  var val2018 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after621(result__) {
                    var tmp6655 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after621);if(result__ !== undefined) after621(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val2018 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val2018));
  }
  
  var val2019 = function(event, callback) {
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
  if(val2019 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val2019));
  }
  
  var ref3938 = text;
  sp.text(""+ref3938.get());
  var ignore774 = false;
  subs__.addSub(ref3938.addEventListener('change', function(_, ref, val) {
    if(ignore774) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref3938.rebind());
  
  
  root9944.append(sp);
  callback(root9944); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root9945 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7398 = $("<span>");
  root9945.append(nodes7398);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root9946 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9946); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7398;
    nodes7398 = node.contents();
    oldNodes.replaceWith(nodes7398);
  }));
  callback(root9945); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root9947 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7399 = $("<span>");
  root9947.append(nodes7399);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root9948 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9948); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7399;
    nodes7399 = node.contents();
    oldNodes.replaceWith(nodes7399);
  }));
  callback(root9947); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root9949 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3966 = $("<ul>");
  
  var ref3939 = mobl.ref(ui.groupStyle);
  if(ref3939.get() !== null) {
    node3966.attr('class', ref3939.get());
    subs__.addSub(ref3939.addEventListener('change', function(_, ref, val) {
      node3966.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3939.rebind());
  
  var nodes7400 = $("<span>");
  node3966.append(nodes7400);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1607();
  }));
  
  function renderControl1607() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9950 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9950); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7400;
      nodes7400 = node.contents();
      oldNodes.replaceWith(nodes7400);
    }));
  }
  renderControl1607();
  root9949.append(node3966);
  callback(root9949); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root9951 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3967 = $("<img>");
  
  var ref3940 = url;
  if(ref3940.get() !== null) {
    node3967.attr('src', ref3940.get());
    subs__.addSub(ref3940.addEventListener('change', function(_, ref, val) {
      node3967.attr('src', val);
    }));
    
  }
  subs__.addSub(ref3940.rebind());
  
  var ref3941 = width;
  if(ref3941.get() !== null) {
    node3967.attr('width', ref3941.get());
    subs__.addSub(ref3941.addEventListener('change', function(_, ref, val) {
      node3967.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3941.rebind());
  
  var ref3942 = height;
  if(ref3942.get() !== null) {
    node3967.attr('height', ref3942.get());
    subs__.addSub(ref3942.addEventListener('change', function(_, ref, val) {
      node3967.attr('height', val);
    }));
    
  }
  subs__.addSub(ref3942.rebind());
  
  var ref3943 = style;
  if(ref3943.get() !== null) {
    node3967.attr('class', ref3943.get());
    subs__.addSub(ref3943.addEventListener('change', function(_, ref, val) {
      node3967.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3943.rebind());
  
  var val2020 = onclick.get();
  if(val2020 !== null) {
    subs__.addSub(mobl.domBind(node3967, 'tap', val2020));
  }
  
  var ref3944 = valign;
  if(ref3944.get() !== null) {
    node3967.attr('valign', ref3944.get());
    subs__.addSub(ref3944.addEventListener('change', function(_, ref, val) {
      node3967.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref3944.rebind());
  
  var ref3945 = align;
  if(ref3945.get() !== null) {
    node3967.attr('align', ref3945.get());
    subs__.addSub(ref3945.addEventListener('change', function(_, ref, val) {
      node3967.attr('align', val);
    }));
    
  }
  subs__.addSub(ref3945.rebind());
  
  root9951.append(node3967);
  callback(root9951); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root9952 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref3946 = mobl.ref(ui.itemStyle);
  if(ref3946.get() !== null) {
    el.attr('class', ref3946.get());
    subs__.addSub(ref3946.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3946.rebind());
  
  var ref3947 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref3947.get() !== null) {
    el.attr('class', ref3947.get());
    subs__.addSub(ref3947.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref3947.rebind());
  
  var val2021 = onswipe.get();
  if(val2021 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val2021));
  }
  
  var val2022 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp6656 = result__;
                                           function after622(result__) {
                                             var tmp6657 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after622);if(result__ !== undefined) after622(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp6658 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val2022 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val2022));
  }
  
  var nodes7401 = $("<span>");
  el.append(nodes7401);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1608();
  }));
  
  function renderControl1608() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9953 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9953); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7401;
      nodes7401 = node.contents();
      oldNodes.replaceWith(nodes7401);
    }));
  }
  renderControl1608();
  root9952.append(el);
  callback(root9952); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root9954 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3968 = $("<input>");
  node3968.attr('type', "checkbox");
  
  var ref3949 = b;
  node3968.attr('checked', !!ref3949.get());
  subs__.addSub(ref3949.addEventListener('change', function(_, ref, val) {
    if(ref === ref3949) node3968.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node3968, 'change', function() {
    b.set(!!node3968.attr('checked'));
  }));
  
  var val2024 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val2024 !== null) {
    subs__.addSub(mobl.domBind(node3968, 'tap', val2024));
  }
  
  var val2025 = onchange.get();
  if(val2025 !== null) {
    subs__.addSub(mobl.domBind(node3968, 'change', val2025));
  }
  
  root9954.append(node3968);
  
  root9954.append(" ");
  
  var node3969 = $("<span>");
  
  var ref3948 = label;
  node3969.text(""+ref3948.get());
  var ignore775 = false;
  subs__.addSub(ref3948.addEventListener('change', function(_, ref, val) {
    if(ignore775) return;
    node3969.text(""+val);
  }));
  subs__.addSub(ref3948.rebind());
  
  
  var val2023 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after623(result__) {
                    var tmp6659 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after623);if(result__ !== undefined) after623(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val2023 !== null) {
    subs__.addSub(mobl.domBind(node3969, 'tap', val2023));
  }
  
  root9954.append(node3969);
  callback(root9954); return subs__;
  
  
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
  var root9955 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3970 = $("<span>");
  root9955.append(node3970);
  var condSubs962 = new mobl.CompSubscription();
  subs__.addSub(condSubs962);
  var oldValue962;
  var renderCond962 = function() {
    var value4398 = label.get();
    if(oldValue962 === value4398) return;
    oldValue962 = value4398;
    var subs__ = condSubs962;
    subs__.unsubscribe();
    node3970.empty();
    if(value4398) {
      var nodes7402 = $("<span>");
      node3970.append(nodes7402);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root9956 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9956); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7402;
        nodes7402 = node.contents();
        oldNodes.replaceWith(nodes7402);
      }));
      
      
    } else {
      
    }
  };
  renderCond962();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond962();
  }));
  
  
  var node3971 = $("<span>");
  root9955.append(node3971);
  var condSubs963 = new mobl.CompSubscription();
  subs__.addSub(condSubs963);
  var oldValue963;
  var renderCond963 = function() {
    var value4399 = validator.get();
    if(oldValue963 === value4399) return;
    oldValue963 = value4399;
    var subs__ = condSubs963;
    subs__.unsubscribe();
    node3971.empty();
    if(value4399) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after627(result__) {
        var tmp6660 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp6661 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node3972 = $("<input>");
        
        var ref3950 = inputType;
        if(ref3950.get() !== null) {
          node3972.attr('type', ref3950.get());
          subs__.addSub(ref3950.addEventListener('change', function(_, ref, val) {
            node3972.attr('type', val);
          }));
          
        }
        subs__.addSub(ref3950.rebind());
        
        var ref3951 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref3951.get() !== null) {
          node3972.attr('class', ref3951.get());
          subs__.addSub(ref3951.addEventListener('change', function(_, ref, val) {
            node3972.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node3972.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node3972.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node3972.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref3951.rebind());
        
        var ref3952 = placeholder;
        if(ref3952.get() !== null) {
          node3972.attr('placeholder', ref3952.get());
          subs__.addSub(ref3952.addEventListener('change', function(_, ref, val) {
            node3972.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref3952.rebind());
        
        var ref3953 = temp;
        node3972.val(""+ref3953.get());
        var ignore776 = false;
        subs__.addSub(ref3953.addEventListener('change', function(_, ref, val) {
          if(ignore776) return;
          node3972.val(""+val);
        }));
        subs__.addSub(ref3953.rebind());
        
        subs__.addSub(mobl.domBind(node3972, 'keyup change', function() {
          ignore776 = true;
          temp.set(mobl.stringTomobl__String(node3972.val()));
          ignore776 = false;
        }));
        
        
        var val2026 = onchange.get();
        if(val2026 !== null) {
          subs__.addSub(mobl.domBind(node3972, 'change', val2026));
        }
        
        var val2027 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after624(result__) {
                          var tmp6662 = result__;
                          function after625(result__) {
                            var tmp6663 = result__;
                            var result__ = tmp6663;
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
                          var result__ = validator.get()(temp.get(), after625);if(result__ !== undefined) after625(result__);
                        }
                        var result__ = onkeyup.get()(event, after624);if(result__ !== undefined) after624(result__);
                      } else {
                        {
                          function after626(result__) {
                            var tmp6663 = result__;
                            var result__ = tmp6663;
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
                          var result__ = validator.get()(temp.get(), after626);if(result__ !== undefined) after626(result__);
                        }
                      }
                    };
        if(val2027 !== null) {
          subs__.addSub(mobl.domBind(node3972, 'keyup', val2027));
        }
        
        var val2028 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val2028 !== null) {
          subs__.addSub(mobl.domBind(node3972, 'blur', val2028));
        }
        
        node3971.append(node3972);
        var nodes7403 = $("<span>");
        node3971.append(nodes7403);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root9957 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9957); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7403;
          nodes7403 = node.contents();
          oldNodes.replaceWith(nodes7403);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after627);if(result__ !== undefined) after627(result__);
    } else {
      
      var node3973 = $("<input>");
      
      var ref3954 = inputType;
      if(ref3954.get() !== null) {
        node3973.attr('type', ref3954.get());
        subs__.addSub(ref3954.addEventListener('change', function(_, ref, val) {
          node3973.attr('type', val);
        }));
        
      }
      subs__.addSub(ref3954.rebind());
      
      var ref3955 = style;
      if(ref3955.get() !== null) {
        node3973.attr('class', ref3955.get());
        subs__.addSub(ref3955.addEventListener('change', function(_, ref, val) {
          node3973.attr('class', val);
        }));
        
      }
      subs__.addSub(ref3955.rebind());
      
      var ref3956 = placeholder;
      if(ref3956.get() !== null) {
        node3973.attr('placeholder', ref3956.get());
        subs__.addSub(ref3956.addEventListener('change', function(_, ref, val) {
          node3973.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref3956.rebind());
      
      var ref3957 = s;
      node3973.val(""+ref3957.get());
      var ignore777 = false;
      subs__.addSub(ref3957.addEventListener('change', function(_, ref, val) {
        if(ignore777) return;
        node3973.val(""+val);
      }));
      subs__.addSub(ref3957.rebind());
      
      subs__.addSub(mobl.domBind(node3973, 'keyup change', function() {
        ignore777 = true;
        s.set(mobl.stringTomobl__String(node3973.val()));
        ignore777 = false;
      }));
      
      
      var val2029 = onchange.get();
      if(val2029 !== null) {
        subs__.addSub(mobl.domBind(node3973, 'change', val2029));
      }
      
      var val2030 = onkeyup.get();
      if(val2030 !== null) {
        subs__.addSub(mobl.domBind(node3973, 'keyup', val2030));
      }
      
      var val2031 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val2031 !== null) {
        subs__.addSub(mobl.domBind(node3973, 'blur', val2031));
      }
      
      node3971.append(node3973);
      
      
    }
  };
  renderCond963();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond963();
  }));
  
  callback(root9955); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root9958 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7404 = $("<span>");
  root9958.append(nodes7404);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root9959 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9959); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7404;
    nodes7404 = node.contents();
    oldNodes.replaceWith(nodes7404);
  }));
  callback(root9958); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root9960 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7405 = $("<span>");
  root9960.append(nodes7405);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root9961 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9961); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7405;
    nodes7405 = node.contents();
    oldNodes.replaceWith(nodes7405);
  }));
  callback(root9960); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root9962 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3974 = $("<span>");
  root9962.append(node3974);
  var condSubs964 = new mobl.CompSubscription();
  subs__.addSub(condSubs964);
  var oldValue964;
  var renderCond964 = function() {
    var value4400 = label.get();
    if(oldValue964 === value4400) return;
    oldValue964 = value4400;
    var subs__ = condSubs964;
    subs__.unsubscribe();
    node3974.empty();
    if(value4400) {
      var nodes7406 = $("<span>");
      node3974.append(nodes7406);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root9963 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9963); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7406;
        nodes7406 = node.contents();
        oldNodes.replaceWith(nodes7406);
      }));
      
      
    } else {
      
    }
  };
  renderCond964();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond964();
  }));
  
  
  var node3975 = $("<input>");
  node3975.attr('type', "range");
  
  var ref3958 = n;
  node3975.val(""+ref3958.get());
  var ignore778 = false;
  subs__.addSub(ref3958.addEventListener('change', function(_, ref, val) {
    if(ignore778) return;
    node3975.val(""+val);
  }));
  subs__.addSub(ref3958.rebind());
  
  subs__.addSub(mobl.domBind(node3975, 'keyup change', function() {
    ignore778 = true;
    n.set(mobl.stringTomobl__Num(node3975.val()));
    ignore778 = false;
  }));
  
  
  var ref3959 = min;
  if(ref3959.get() !== null) {
    node3975.attr('min', ref3959.get());
    subs__.addSub(ref3959.addEventListener('change', function(_, ref, val) {
      node3975.attr('min', val);
    }));
    
  }
  subs__.addSub(ref3959.rebind());
  
  var ref3960 = max;
  if(ref3960.get() !== null) {
    node3975.attr('max', ref3960.get());
    subs__.addSub(ref3960.addEventListener('change', function(_, ref, val) {
      node3975.attr('max', val);
    }));
    
  }
  subs__.addSub(ref3960.rebind());
  
  var ref3961 = step;
  if(ref3961.get() !== null) {
    node3975.attr('step', ref3961.get());
    subs__.addSub(ref3961.addEventListener('change', function(_, ref, val) {
      node3975.attr('step', val);
    }));
    
  }
  subs__.addSub(ref3961.rebind());
  node3975.attr('style', "width: 99%;");
  
  var val2032 = onchange.get();
  if(val2032 !== null) {
    subs__.addSub(mobl.domBind(node3975, 'change', val2032));
  }
  
  var val2033 = onkeyup.get();
  if(val2033 !== null) {
    subs__.addSub(mobl.domBind(node3975, 'keyup', val2033));
  }
  
  var ref3962 = placeholder;
  if(ref3962.get() !== null) {
    node3975.attr('placeholder', ref3962.get());
    subs__.addSub(ref3962.addEventListener('change', function(_, ref, val) {
      node3975.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref3962.rebind());
  
  root9962.append(node3975);
  callback(root9962); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root9964 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after628(result__) {
      var tmp6664 = result__;
      var result__ = tmp6664;
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
    var result__ = validator.get()(n2, after628);if(result__ !== undefined) after628(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes7407 = $("<span>");
  root9964.append(nodes7407);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root9965 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9965); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7407;
    nodes7407 = node.contents();
    oldNodes.replaceWith(nodes7407);
  }));
  callback(root9964); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root9966 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3976 = $("<span>");
  root9966.append(node3976);
  var condSubs965 = new mobl.CompSubscription();
  subs__.addSub(condSubs965);
  var oldValue965;
  var renderCond965 = function() {
    var value4401 = label.get();
    if(oldValue965 === value4401) return;
    oldValue965 = value4401;
    var subs__ = condSubs965;
    subs__.unsubscribe();
    node3976.empty();
    if(value4401) {
      
      var node3977 = $("<span>");
      node3977.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref3966 = label;
      node3977.text(""+ref3966.get());
      var ignore780 = false;
      subs__.addSub(ref3966.addEventListener('change', function(_, ref, val) {
        if(ignore780) return;
        node3977.text(""+val);
      }));
      subs__.addSub(ref3966.rebind());
      
      
      node3976.append(node3977);
      
      var node3978 = $("<span>");
      node3978.attr('style', "float: left");
      
      
      var node3979 = $("<input>");
      node3979.attr('type', "password");
      
      var ref3963 = style;
      if(ref3963.get() !== null) {
        node3979.attr('class', ref3963.get());
        subs__.addSub(ref3963.addEventListener('change', function(_, ref, val) {
          node3979.attr('class', val);
        }));
        
      }
      subs__.addSub(ref3963.rebind());
      
      var ref3964 = placeholder;
      if(ref3964.get() !== null) {
        node3979.attr('placeholder', ref3964.get());
        subs__.addSub(ref3964.addEventListener('change', function(_, ref, val) {
          node3979.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref3964.rebind());
      
      var ref3965 = s;
      node3979.val(""+ref3965.get());
      var ignore779 = false;
      subs__.addSub(ref3965.addEventListener('change', function(_, ref, val) {
        if(ignore779) return;
        node3979.val(""+val);
      }));
      subs__.addSub(ref3965.rebind());
      
      subs__.addSub(mobl.domBind(node3979, 'keyup change', function() {
        ignore779 = true;
        s.set(mobl.stringTomobl__String(node3979.val()));
        ignore779 = false;
      }));
      
      
      var val2034 = onchange.get();
      if(val2034 !== null) {
        subs__.addSub(mobl.domBind(node3979, 'change', val2034));
      }
      
      var val2035 = onkeyup.get();
      if(val2035 !== null) {
        subs__.addSub(mobl.domBind(node3979, 'keyup', val2035));
      }
      
      var val2036 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val2036 !== null) {
        subs__.addSub(mobl.domBind(node3979, 'blur', val2036));
      }
      
      node3978.append(node3979);
      node3976.append(node3978);
      
      
      
      
    } else {
      
      var node3980 = $("<input>");
      node3980.attr('type', "password");
      
      var ref3967 = style;
      if(ref3967.get() !== null) {
        node3980.attr('class', ref3967.get());
        subs__.addSub(ref3967.addEventListener('change', function(_, ref, val) {
          node3980.attr('class', val);
        }));
        
      }
      subs__.addSub(ref3967.rebind());
      
      var ref3968 = placeholder;
      if(ref3968.get() !== null) {
        node3980.attr('placeholder', ref3968.get());
        subs__.addSub(ref3968.addEventListener('change', function(_, ref, val) {
          node3980.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref3968.rebind());
      
      var ref3969 = s;
      node3980.val(""+ref3969.get());
      var ignore781 = false;
      subs__.addSub(ref3969.addEventListener('change', function(_, ref, val) {
        if(ignore781) return;
        node3980.val(""+val);
      }));
      subs__.addSub(ref3969.rebind());
      
      subs__.addSub(mobl.domBind(node3980, 'keyup change', function() {
        ignore781 = true;
        s.set(mobl.stringTomobl__String(node3980.val()));
        ignore781 = false;
      }));
      
      
      var val2037 = onchange.get();
      if(val2037 !== null) {
        subs__.addSub(mobl.domBind(node3980, 'change', val2037));
      }
      
      var val2038 = onkeyup.get();
      if(val2038 !== null) {
        subs__.addSub(mobl.domBind(node3980, 'keyup', val2038));
      }
      
      var val2039 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val2039 !== null) {
        subs__.addSub(mobl.domBind(node3980, 'blur', val2039));
      }
      
      node3976.append(node3980);
      
      
    }
  };
  renderCond965();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond965();
  }));
  
  callback(root9966); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root9967 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref3974 = style;
  if(ref3974.get() !== null) {
    sel.attr('class', ref3974.get());
    subs__.addSub(ref3974.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3974.rebind());
  
  var val2040 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after629(result__) {
                    var tmp6666 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after629);if(result__ !== undefined) after629(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val2040 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val2040));
  }
  
  
  var node3981 = mobl.loadingSpan();
  sel.append(node3981);
  var list701;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList701 = function() {
    var subs__ = listSubs__;
    list701 = options.get();
    list701.list(function(results701) {
      node3981.empty();
      for(var i1667 = 0; i1667 < results701.length; i1667++) {
        (function() {
          var iternode701 = $("<span>");
          node3981.append(iternode701);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results701), i1667), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results701), i1667), "_2");
          
          var node3982 = $("<option>");
          
          var ref3970 = optionDescription;
          node3982.text(""+ref3970.get());
          var ignore782 = false;
          subs__.addSub(ref3970.addEventListener('change', function(_, ref, val) {
            if(ignore782) return;
            node3982.text(""+val);
          }));
          subs__.addSub(ref3970.rebind());
          
          
          var ref3971 = optionStyle;
          if(ref3971.get() !== null) {
            node3982.attr('class', ref3971.get());
            subs__.addSub(ref3971.addEventListener('change', function(_, ref, val) {
              node3982.attr('class', val);
            }));
            
          }
          subs__.addSub(ref3971.rebind());
          
          var ref3972 = optionValue;
          if(ref3972.get() !== null) {
            node3982.attr('value', ref3972.get());
            subs__.addSub(ref3972.addEventListener('change', function(_, ref, val) {
              node3982.attr('value', val);
            }));
            
          }
          subs__.addSub(ref3972.rebind());
          
          var ref3973 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref3973.get() !== null) {
            node3982.attr('selected', ref3973.get());
            subs__.addSub(ref3973.addEventListener('change', function(_, ref, val) {
              node3982.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node3982.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node3982.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref3973.rebind());
          
          iternode701.append(node3982);
          
          var oldNodes = iternode701;
          iternode701 = iternode701.contents();
          oldNodes.replaceWith(iternode701);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list701.addEventListener('change', function() { listSubs__.unsubscribe(); renderList701(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList701(true); }));
    });
  };
  renderList701();
  
  root9967.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root9967); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root9968 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes7408 = $("<span>");
    root9968.append(nodes7408);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root9969 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node3983 = mobl.loadingSpan();
      root9969.append(node3983);
      var list702;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList702 = function() {
        var subs__ = listSubs__;
        list702 = tabs.get();
        list702.list(function(results702) {
          node3983.empty();
          for(var i1668 = 0; i1668 < results702.length; i1668++) {
            (function() {
              var iternode702 = $("<span>");
              node3983.append(iternode702);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results702), i1668), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results702), i1668), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results702), i1668), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp6628 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp6628.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp6628.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp6628.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp6628.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp6627 = mobl.ref(result__);
              
              var nodes7409 = $("<span>");
              iternode702.append(nodes7409);
              subs__.addSub((mobl.span)(tmp6628, mobl.ref(null), tmp6627, mobl.ref(null), function(_, callback) {
                var root9970 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes7410 = $("<span>");
                root9970.append(nodes7410);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root9971 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root9971); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7410;
                  nodes7410 = node.contents();
                  oldNodes.replaceWith(nodes7410);
                }));
                callback(root9970); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7409;
                nodes7409 = node.contents();
                oldNodes.replaceWith(nodes7409);
              }));
              
              var oldNodes = iternode702;
              iternode702 = iternode702.contents();
              oldNodes.replaceWith(iternode702);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list702.addEventListener('change', function() { listSubs__.unsubscribe(); renderList702(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList702(true); }));
        });
      };
      renderList702();
      
      callback(root9969); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7408;
      nodes7408 = node.contents();
      oldNodes.replaceWith(nodes7408);
    }));
    
    var node3984 = mobl.loadingSpan();
    root9968.append(node3984);
    var list703;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList703 = function() {
      var subs__ = listSubs__;
      list703 = tabs.get();
      list703.list(function(results703) {
        node3984.empty();
        for(var i1669 = 0; i1669 < results703.length; i1669++) {
          (function() {
            var iternode703 = $("<span>");
            node3984.append(iternode703);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results703), i1669), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results703), i1669), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results703), i1669), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp6629 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp6629.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp6629.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp6629.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp6629.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes7411 = $("<span>");
            iternode703.append(nodes7411);
            subs__.addSub((mobl.block)(tmp6629, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root9972 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7412 = $("<span>");
              root9972.append(nodes7412);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root9973 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes7413 = $("<span>");
                root9973.append(nodes7413);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl1609();
                }));
                
                function renderControl1609() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root9974 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root9974); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes7413;
                    nodes7413 = node.contents();
                    oldNodes.replaceWith(nodes7413);
                  }));
                }
                renderControl1609();
                callback(root9973); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7412;
                nodes7412 = node.contents();
                oldNodes.replaceWith(nodes7412);
              }));
              callback(root9972); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7411;
              nodes7411 = node.contents();
              oldNodes.replaceWith(nodes7411);
            }));
            
            var oldNodes = iternode703;
            iternode703 = iternode703.contents();
            oldNodes.replaceWith(iternode703);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list703.addEventListener('change', function() { listSubs__.unsubscribe(); renderList703(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList703(true); }));
      });
    };
    renderList703();
    
    callback(root9968); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes7408 = $("<span>");
      root9968.append(nodes7408);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9969 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node3983 = mobl.loadingSpan();
        root9969.append(node3983);
        var list702;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList702 = function() {
          var subs__ = listSubs__;
          list702 = tabs.get();
          list702.list(function(results702) {
            node3983.empty();
            for(var i1668 = 0; i1668 < results702.length; i1668++) {
              (function() {
                var iternode702 = $("<span>");
                node3983.append(iternode702);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results702), i1668), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results702), i1668), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results702), i1668), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp6628 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp6628.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp6628.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp6628.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp6628.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp6627 = mobl.ref(result__);
                
                var nodes7409 = $("<span>");
                iternode702.append(nodes7409);
                subs__.addSub((mobl.span)(tmp6628, mobl.ref(null), tmp6627, mobl.ref(null), function(_, callback) {
                  var root9970 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7410 = $("<span>");
                  root9970.append(nodes7410);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root9971 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root9971); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes7410;
                    nodes7410 = node.contents();
                    oldNodes.replaceWith(nodes7410);
                  }));
                  callback(root9970); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7409;
                  nodes7409 = node.contents();
                  oldNodes.replaceWith(nodes7409);
                }));
                
                var oldNodes = iternode702;
                iternode702 = iternode702.contents();
                oldNodes.replaceWith(iternode702);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list702.addEventListener('change', function() { listSubs__.unsubscribe(); renderList702(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList702(true); }));
          });
        };
        renderList702();
        
        callback(root9969); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7408;
        nodes7408 = node.contents();
        oldNodes.replaceWith(nodes7408);
      }));
      
      var node3984 = mobl.loadingSpan();
      root9968.append(node3984);
      var list703;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList703 = function() {
        var subs__ = listSubs__;
        list703 = tabs.get();
        list703.list(function(results703) {
          node3984.empty();
          for(var i1669 = 0; i1669 < results703.length; i1669++) {
            (function() {
              var iternode703 = $("<span>");
              node3984.append(iternode703);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results703), i1669), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results703), i1669), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results703), i1669), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp6629 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp6629.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp6629.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp6629.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp6629.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes7411 = $("<span>");
              iternode703.append(nodes7411);
              subs__.addSub((mobl.block)(tmp6629, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root9972 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes7412 = $("<span>");
                root9972.append(nodes7412);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root9973 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7413 = $("<span>");
                  root9973.append(nodes7413);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl1609();
                  }));
                  
                  function renderControl1609() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root9974 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root9974); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7413;
                      nodes7413 = node.contents();
                      oldNodes.replaceWith(nodes7413);
                    }));
                  }
                  renderControl1609();
                  callback(root9973); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7412;
                  nodes7412 = node.contents();
                  oldNodes.replaceWith(nodes7412);
                }));
                callback(root9972); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7411;
                nodes7411 = node.contents();
                oldNodes.replaceWith(nodes7411);
              }));
              
              var oldNodes = iternode703;
              iternode703 = iternode703.contents();
              oldNodes.replaceWith(iternode703);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list703.addEventListener('change', function() { listSubs__.unsubscribe(); renderList703(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList703(true); }));
        });
      };
      renderList703();
      
      callback(root9968); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root9975 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3985 = $("<div>");
  
  var ref3978 = mobl.ref(ui.searchboxStyle);
  if(ref3978.get() !== null) {
    node3985.attr('class', ref3978.get());
    subs__.addSub(ref3978.addEventListener('change', function(_, ref, val) {
      node3985.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3978.rebind());
  
  
  var node3986 = $("<input>");
  node3986.attr('type', "search");
  
  var ref3975 = mobl.ref(ui.searchBoxInputStyle);
  if(ref3975.get() !== null) {
    node3986.attr('class', ref3975.get());
    subs__.addSub(ref3975.addEventListener('change', function(_, ref, val) {
      node3986.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3975.rebind());
  
  var ref3976 = placeholder;
  if(ref3976.get() !== null) {
    node3986.attr('placeholder', ref3976.get());
    subs__.addSub(ref3976.addEventListener('change', function(_, ref, val) {
      node3986.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref3976.rebind());
  
  var ref3977 = s;
  node3986.val(""+ref3977.get());
  var ignore783 = false;
  subs__.addSub(ref3977.addEventListener('change', function(_, ref, val) {
    if(ignore783) return;
    node3986.val(""+val);
  }));
  subs__.addSub(ref3977.rebind());
  
  subs__.addSub(mobl.domBind(node3986, 'keyup change', function() {
    ignore783 = true;
    s.set(mobl.stringTomobl__String(node3986.val()));
    ignore783 = false;
  }));
  
  
  var val2041 = onsearch.get();
  if(val2041 !== null) {
    subs__.addSub(mobl.domBind(node3986, 'change', val2041));
  }
  
  var val2042 = onkeyup.get();
  if(val2042 !== null) {
    subs__.addSub(mobl.domBind(node3986, 'keyup', val2042));
  }
  node3986.attr('autocorrect', false);
  node3986.attr('autocapitalize', false);
  node3986.attr('autocomplete', false);
  
  node3985.append(node3986);
  root9975.append(node3985);
  callback(root9975); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root9976 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref3979 = mobl.ref(ui.contextMenuStyle);
  if(ref3979.get() !== null) {
    menu.attr('class', ref3979.get());
    subs__.addSub(ref3979.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3979.rebind());
  
  var nodes7414 = $("<span>");
  menu.append(nodes7414);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1610();
  }));
  
  function renderControl1610() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9977 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9977); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7414;
      nodes7414 = node.contents();
      oldNodes.replaceWith(nodes7414);
    }));
  }
  renderControl1610();
  root9976.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val2043 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp6669 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val2043 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val2043));
  }
  
  root9976.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root9976); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root9978 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp6654 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp6654.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node3987 = $("<span>");
  root9978.append(node3987);
  var condSubs966 = new mobl.CompSubscription();
  subs__.addSub(condSubs966);
  var oldValue966;
  var renderCond966 = function() {
    var value4402 = tmp6654.get();
    if(oldValue966 === value4402) return;
    oldValue966 = value4402;
    var subs__ = condSubs966;
    subs__.unsubscribe();
    node3987.empty();
    if(value4402) {
      items.get().one(function(result__) {
        var tmp6670 = result__;
        var current = mobl.ref(result__);
        
        var node3988 = $("<div>");
        node3988.attr('width', "100%");
        
        
        var node3989 = $("<div>");
        node3989.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes7417 = $("<span>");
        node3989.append(nodes7417);
        subs__.addSub((ui.group)(function(_, callback) {
          var root9981 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node3992 = mobl.loadingSpan();
          root9981.append(node3992);
          var list704;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList704 = function() {
            var subs__ = listSubs__;
            list704 = items.get();
            list704.list(function(results704) {
              node3992.empty();
              for(var i1670 = 0; i1670 < results704.length; i1670++) {
                (function() {
                  var iternode704 = $("<span>");
                  node3992.append(iternode704);
                  var it;
                  it = mobl.ref(mobl.ref(results704), i1670);
                  var result__ = it.get() == current.get();
                  var tmp6635 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp6635.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp6635.set(it.get() == current.get());
                  }));
                  
                  
                  var node3993 = $("<span>");
                  iternode704.append(node3993);
                  var condSubs968 = new mobl.CompSubscription();
                  subs__.addSub(condSubs968);
                  var oldValue968;
                  var renderCond968 = function() {
                    var value4404 = tmp6635.get();
                    if(oldValue968 === value4404) return;
                    oldValue968 = value4404;
                    var subs__ = condSubs968;
                    subs__.unsubscribe();
                    node3993.empty();
                    if(value4404) {
                      var nodes7418 = $("<span>");
                      node3993.append(nodes7418);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root9982 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes7419 = $("<span>");
                        root9982.append(nodes7419);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1612();
                        }));
                        
                        function renderControl1612() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root9983 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root9983); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes7419;
                            nodes7419 = node.contents();
                            oldNodes.replaceWith(nodes7419);
                          }));
                        }
                        renderControl1612();
                        callback(root9982); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7418;
                        nodes7418 = node.contents();
                        oldNodes.replaceWith(nodes7418);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp6634 = mobl.ref(result__);
                      
                      var nodes7420 = $("<span>");
                      node3993.append(nodes7420);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6634, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root9984 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes7421 = $("<span>");
                        root9984.append(nodes7421);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1613();
                        }));
                        
                        function renderControl1613() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root9985 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root9985); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes7421;
                            nodes7421 = node.contents();
                            oldNodes.replaceWith(nodes7421);
                          }));
                        }
                        renderControl1613();
                        callback(root9984); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7420;
                        nodes7420 = node.contents();
                        oldNodes.replaceWith(nodes7420);
                      }));
                      
                      
                    }
                  };
                  renderCond968();
                  subs__.addSub(tmp6635.addEventListener('change', function() {
                    renderCond968();
                  }));
                  
                  
                  var oldNodes = iternode704;
                  iternode704 = iternode704.contents();
                  oldNodes.replaceWith(iternode704);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list704.addEventListener('change', function() { listSubs__.unsubscribe(); renderList704(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList704(true); }));
            });
          };
          renderList704();
          
          callback(root9981); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes7417;
          nodes7417 = node.contents();
          oldNodes.replaceWith(nodes7417);
        }));
        node3988.append(node3989);
        
        var node3990 = $("<div>");
        node3990.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node3991 = $("<span>");
        node3990.append(node3991);
        var condSubs967 = new mobl.CompSubscription();
        subs__.addSub(condSubs967);
        var oldValue967;
        var renderCond967 = function() {
          var value4403 = current.get();
          if(oldValue967 === value4403) return;
          oldValue967 = value4403;
          var subs__ = condSubs967;
          subs__.unsubscribe();
          node3991.empty();
          if(value4403) {
            var nodes7415 = $("<span>");
            node3991.append(nodes7415);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl1611();
            }));
            
            function renderControl1611() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root9979 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9979); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7415;
                nodes7415 = node.contents();
                oldNodes.replaceWith(nodes7415);
              }));
            }
            renderControl1611();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp6636 = mobl.ref(result__);
            
            var nodes7416 = $("<span>");
            node3991.append(nodes7416);
            subs__.addSub((mobl.label)(tmp6636, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root9980 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root9980); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes7416;
              nodes7416 = node.contents();
              oldNodes.replaceWith(nodes7416);
            }));
            
            
          }
        };
        renderCond967();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond967();
        }));
        
        node3988.append(node3990);
        node3987.append(node3988);
        
        
        
        
        
        
      });
    } else {
      var nodes7422 = $("<span>");
      node3987.append(nodes7422);
      subs__.addSub((ui.group)(function(_, callback) {
        var root9986 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node3994 = mobl.loadingSpan();
        root9986.append(node3994);
        var list705;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList705 = function() {
          var subs__ = listSubs__;
          list705 = items.get();
          list705.list(function(results705) {
            node3994.empty();
            for(var i1671 = 0; i1671 < results705.length; i1671++) {
              (function() {
                var iternode705 = $("<span>");
                node3994.append(iternode705);
                var it;
                it = mobl.ref(mobl.ref(results705), i1671);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp6671 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp6630 = mobl.ref(result__);
                
                var nodes7423 = $("<span>");
                iternode705.append(nodes7423);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6630, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root9987 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7424 = $("<span>");
                  root9987.append(nodes7424);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl1614();
                  }));
                  
                  function renderControl1614() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root9988 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root9988); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7424;
                      nodes7424 = node.contents();
                      oldNodes.replaceWith(nodes7424);
                    }));
                  }
                  renderControl1614();
                  callback(root9987); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7423;
                  nodes7423 = node.contents();
                  oldNodes.replaceWith(nodes7423);
                }));
                
                var oldNodes = iternode705;
                iternode705 = iternode705.contents();
                oldNodes.replaceWith(iternode705);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list705.addEventListener('change', function() { listSubs__.unsubscribe(); renderList705(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList705(true); }));
          });
        };
        renderList705();
        
        callback(root9986); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7422;
        nodes7422 = node.contents();
        oldNodes.replaceWith(nodes7422);
      }));
      
      
    }
  };
  renderCond966();
  subs__.addSub(tmp6654.addEventListener('change', function() {
    renderCond966();
  }));
  
  callback(root9978); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root9989 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp6633 = mobl.ref(result__);
  
  var nodes7425 = $("<span>");
  root9989.append(nodes7425);
  subs__.addSub((ui.header)(tmp6633, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9990 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6632 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp6631 = mobl.ref(result__);
    
    var nodes7426 = $("<span>");
    root9990.append(nodes7426);
    subs__.addSub((ui.backButton)(tmp6631, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6632, function(_, callback) {
      var root9991 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9991); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7426;
      nodes7426 = node.contents();
      oldNodes.replaceWith(nodes7426);
    }));
    callback(root9990); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7425;
    nodes7425 = node.contents();
    oldNodes.replaceWith(nodes7425);
  }));
  var nodes7427 = $("<span>");
  root9989.append(nodes7427);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl1615();
  }));
  
  function renderControl1615() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root9992 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9992); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7427;
      nodes7427 = node.contents();
      oldNodes.replaceWith(nodes7427);
    }));
  }
  renderControl1615();
  callback(root9989); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root9993 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes7428 = $("<span>");
  root9993.append(nodes7428);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9994 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3995 = mobl.loadingSpan();
    root9994.append(node3995);
    var list706;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList706 = function() {
      var subs__ = listSubs__;
      list706 = coll.get();
      list706.list(function(results706) {
        node3995.empty();
        for(var i1672 = 0; i1672 < results706.length; i1672++) {
          (function() {
            var iternode706 = $("<span>");
            node3995.append(iternode706);
            var it;
            it = mobl.ref(mobl.ref(results706), i1672);
            var result__ = it.get() == selected.get();
            var tmp6638 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp6638.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp6638.set(it.get() == selected.get());
            }));
            
            
            var node3996 = $("<span>");
            iternode706.append(node3996);
            var condSubs969 = new mobl.CompSubscription();
            subs__.addSub(condSubs969);
            var oldValue969;
            var renderCond969 = function() {
              var value4405 = tmp6638.get();
              if(oldValue969 === value4405) return;
              oldValue969 = value4405;
              var subs__ = condSubs969;
              subs__.unsubscribe();
              node3996.empty();
              if(value4405) {
                var nodes7429 = $("<span>");
                node3996.append(nodes7429);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root9995 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7430 = $("<span>");
                  root9995.append(nodes7430);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl1616();
                  }));
                  
                  function renderControl1616() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root9996 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root9996); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7430;
                      nodes7430 = node.contents();
                      oldNodes.replaceWith(nodes7430);
                    }));
                  }
                  renderControl1616();
                  callback(root9995); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7429;
                  nodes7429 = node.contents();
                  oldNodes.replaceWith(nodes7429);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp6637 = mobl.ref(result__);
                
                var nodes7431 = $("<span>");
                node3996.append(nodes7431);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6637, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root9997 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7432 = $("<span>");
                  root9997.append(nodes7432);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl1617();
                  }));
                  
                  function renderControl1617() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root9998 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root9998); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7432;
                      nodes7432 = node.contents();
                      oldNodes.replaceWith(nodes7432);
                    }));
                  }
                  renderControl1617();
                  callback(root9997); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7431;
                  nodes7431 = node.contents();
                  oldNodes.replaceWith(nodes7431);
                }));
                
                
              }
            };
            renderCond969();
            subs__.addSub(tmp6638.addEventListener('change', function() {
              renderCond969();
            }));
            
            
            var oldNodes = iternode706;
            iternode706 = iternode706.contents();
            oldNodes.replaceWith(iternode706);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list706.addEventListener('change', function() { listSubs__.unsubscribe(); renderList706(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList706(true); }));
      });
    };
    renderList706();
    
    callback(root9994); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7428;
    nodes7428 = node.contents();
    oldNodes.replaceWith(nodes7428);
  }));
  callback(root9993); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root9999 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp6672 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp6639 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp6639.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp6639.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp6639.set(coll.get().limit(n.get()));
    }));
    
    
    var node3997 = mobl.loadingSpan();
    root9999.append(node3997);
    var list707;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList707 = function() {
      var subs__ = listSubs__;
      list707 = tmp6639.get();
      list707.list(function(results707) {
        node3997.empty();
        for(var i1673 = 0; i1673 < results707.length; i1673++) {
          (function() {
            var iternode707 = $("<span>");
            node3997.append(iternode707);
            var it;
            it = mobl.ref(mobl.ref(results707), i1673);
            var nodes7433 = $("<span>");
            iternode707.append(nodes7433);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl1618();
            }));
            
            function renderControl1618() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root10000 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root10000); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7433;
                nodes7433 = node.contents();
                oldNodes.replaceWith(nodes7433);
              }));
            }
            renderControl1618();
            
            var oldNodes = iternode707;
            iternode707 = iternode707.contents();
            oldNodes.replaceWith(iternode707);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list707.addEventListener('change', function() { listSubs__.unsubscribe(); renderList707(true); }));
        subs__.addSub(tmp6639.addEventListener('change', function() { listSubs__.unsubscribe(); renderList707(true); }));
      });
    };
    renderList707();
    
    var result__ = n.get() < total.get();
    var tmp6641 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp6641.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp6641.set(n.get() < total.get());
    }));
    
    
    var node3998 = $("<span>");
    root9999.append(node3998);
    var condSubs970 = new mobl.CompSubscription();
    subs__.addSub(condSubs970);
    var oldValue970;
    var renderCond970 = function() {
      var value4406 = tmp6641.get();
      if(oldValue970 === value4406) return;
      oldValue970 = value4406;
      var subs__ = condSubs970;
      subs__.unsubscribe();
      node3998.empty();
      if(value4406) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp6640 = mobl.ref(result__);
        
        var nodes7434 = $("<span>");
        node3998.append(nodes7434);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp6640, mobl.ref(null), function(_, callback) {
          var root10001 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes7435 = $("<span>");
          root10001.append(nodes7435);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root10002 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root10002); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes7435;
            nodes7435 = node.contents();
            oldNodes.replaceWith(nodes7435);
          }));
          callback(root10001); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes7434;
          nodes7434 = node.contents();
          oldNodes.replaceWith(nodes7434);
        }));
        
        
      } else {
        
      }
    };
    renderCond970();
    subs__.addSub(tmp6641.addEventListener('change', function() {
      renderCond970();
    }));
    
    callback(root9999); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root10003 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7436 = $("<span>");
  root10003.append(nodes7436);
  subs__.addSub((ui.group)(function(_, callback) {
    var root10004 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3999 = mobl.loadingSpan();
    root10004.append(node3999);
    var list708;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList708 = function() {
      var subs__ = listSubs__;
      list708 = items.get();
      list708.list(function(results708) {
        node3999.empty();
        for(var i1674 = 0; i1674 < results708.length; i1674++) {
          (function() {
            var iternode708 = $("<span>");
            node3999.append(iternode708);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results708), i1674), "_1");it = mobl.ref(mobl.ref(mobl.ref(results708), i1674), "_2");
            var nodes7437 = $("<span>");
            iternode708.append(nodes7437);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root10005 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7438 = $("<span>");
              root10005.append(nodes7438);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root10006 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root10006); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7438;
                nodes7438 = node.contents();
                oldNodes.replaceWith(nodes7438);
              }));
              callback(root10005); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7437;
              nodes7437 = node.contents();
              oldNodes.replaceWith(nodes7437);
            }));
            
            var oldNodes = iternode708;
            iternode708 = iternode708.contents();
            oldNodes.replaceWith(iternode708);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list708.addEventListener('change', function() { listSubs__.unsubscribe(); renderList708(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList708(true); }));
      });
    };
    renderList708();
    
    callback(root10004); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7436;
    nodes7436 = node.contents();
    oldNodes.replaceWith(nodes7436);
  }));
  callback(root10003); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root10007 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll5457) {
    coll5457 = coll5457.reverse();
    function processOne303() {
      var it;
      it = coll5457.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll5457.length > 0) processOne303(); else rest303();
      
    }
    function rest303() {
      var nodes7439 = $("<span>");
      root10007.append(nodes7439);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root10008 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp6642 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp6643 = mobl.ref(result__);
        
        var nodes7440 = $("<span>");
        root10008.append(nodes7440);
        subs__.addSub((ui.backButton)(tmp6643, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6642, function(_, callback) {
          var root10009 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root10009); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7440;
          nodes7440 = node.contents();
          oldNodes.replaceWith(nodes7440);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll5456) {
                           coll5456 = coll5456.reverse();
                           function processOne302() {
                             var checked;var it;
                             var tmp6674 = coll5456.pop();
                             checked = tmp6674._1;it = tmp6674._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll5456.length > 0) processOne302(); else rest302();
                               
                             } else {
                               {
                                 
                                 if(coll5456.length > 0) processOne302(); else rest302();
                                 
                               }
                             }
                           }
                           function rest302() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll5456.length > 0) processOne302(); else rest302();
                         });
                         
                       };
        var tmp6644 = mobl.ref(result__);
        
        var nodes7441 = $("<span>");
        root10008.append(nodes7441);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp6644, function(_, callback) {
          var root10010 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root10010); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7441;
          nodes7441 = node.contents();
          oldNodes.replaceWith(nodes7441);
        }));
        callback(root10008); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7439;
        nodes7439 = node.contents();
        oldNodes.replaceWith(nodes7439);
      }));
      var nodes7442 = $("<span>");
      root10007.append(nodes7442);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root10011 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10011); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7442;
        nodes7442 = node.contents();
        oldNodes.replaceWith(nodes7442);
      }));
      callback(root10007); return subs__;
      
      
    }
    if(coll5457.length > 0) processOne303(); else rest303();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root10012 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes7443 = $("<span>");
  root10012.append(nodes7443);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root10013 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10013); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7443;
    nodes7443 = node.contents();
    oldNodes.replaceWith(nodes7443);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp6645 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp6645.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp6645.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp6645.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp6645.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp6645.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes7444 = $("<span>");
  root10012.append(nodes7444);
  subs__.addSub((ui.masterDetail)(tmp6645, masterItem, detailItem, function(_, callback) {
    var root10014 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10014); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7444;
    nodes7444 = node.contents();
    oldNodes.replaceWith(nodes7444);
  }));
  callback(root10012); return subs__;
  
  
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
  var root10015 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes7445 = $("<span>");
  root10015.append(nodes7445);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root10016 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node4000 = mobl.loadingSpan();
    root10016.append(node4000);
    var list709;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList709 = function() {
      var subs__ = listSubs__;
      list709 = sections.get();
      list709.list(function(results709) {
        node4000.empty();
        for(var i1675 = 0; i1675 < results709.length; i1675++) {
          (function() {
            var iternode709 = $("<span>");
            node4000.append(iternode709);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results709), i1675), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results709), i1675), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp6647 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp6647.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp6647.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp6647.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp6647.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp6646 = mobl.ref(result__);
            
            var nodes7446 = $("<span>");
            iternode709.append(nodes7446);
            subs__.addSub((mobl.span)(tmp6647, mobl.ref(null), tmp6646, mobl.ref(null), function(_, callback) {
              var root10017 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7447 = $("<span>");
              root10017.append(nodes7447);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root10018 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root10018); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7447;
                nodes7447 = node.contents();
                oldNodes.replaceWith(nodes7447);
              }));
              callback(root10017); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7446;
              nodes7446 = node.contents();
              oldNodes.replaceWith(nodes7446);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp6648 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp6648.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp6648.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp6648.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp6648.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes7448 = $("<span>");
            iternode709.append(nodes7448);
            subs__.addSub((mobl.block)(tmp6648, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root10019 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7449 = $("<span>");
              root10019.append(nodes7449);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl1619();
              }));
              
              function renderControl1619() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root10020 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root10020); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7449;
                  nodes7449 = node.contents();
                  oldNodes.replaceWith(nodes7449);
                }));
              }
              renderControl1619();
              callback(root10019); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7448;
              nodes7448 = node.contents();
              oldNodes.replaceWith(nodes7448);
            }));
            
            var oldNodes = iternode709;
            iternode709 = iternode709.contents();
            oldNodes.replaceWith(iternode709);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list709.addEventListener('change', function() { listSubs__.unsubscribe(); renderList709(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList709(true); }));
      });
    };
    renderList709();
    
    callback(root10016); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7445;
    nodes7445 = node.contents();
    oldNodes.replaceWith(nodes7445);
  }));
  callback(root10015); return subs__;
  
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
  var root10021 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node4001 = $("<table>");
  
  var ref3980 = style;
  if(ref3980.get() !== null) {
    node4001.attr('class', ref3980.get());
    subs__.addSub(ref3980.addEventListener('change', function(_, ref, val) {
      node4001.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3980.rebind());
  
  var nodes7450 = $("<span>");
  node4001.append(nodes7450);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1620();
  }));
  
  function renderControl1620() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10022 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10022); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7450;
      nodes7450 = node.contents();
      oldNodes.replaceWith(nodes7450);
    }));
  }
  renderControl1620();
  root10021.append(node4001);
  callback(root10021); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root10023 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node4002 = $("<tr>");
  
  var ref3981 = style;
  if(ref3981.get() !== null) {
    node4002.attr('class', ref3981.get());
    subs__.addSub(ref3981.addEventListener('change', function(_, ref, val) {
      node4002.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3981.rebind());
  
  var nodes7451 = $("<span>");
  node4002.append(nodes7451);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1621();
  }));
  
  function renderControl1621() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10024 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10024); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7451;
      nodes7451 = node.contents();
      oldNodes.replaceWith(nodes7451);
    }));
  }
  renderControl1621();
  root10023.append(node4002);
  callback(root10023); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root10025 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node4003 = $("<td>");
  
  var ref3982 = width;
  if(ref3982.get() !== null) {
    node4003.attr('width', ref3982.get());
    subs__.addSub(ref3982.addEventListener('change', function(_, ref, val) {
      node4003.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3982.rebind());
  
  var ref3983 = style;
  if(ref3983.get() !== null) {
    node4003.attr('class', ref3983.get());
    subs__.addSub(ref3983.addEventListener('change', function(_, ref, val) {
      node4003.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3983.rebind());
  
  var nodes7452 = $("<span>");
  node4003.append(nodes7452);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1622();
  }));
  
  function renderControl1622() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10026 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10026); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7452;
      nodes7452 = node.contents();
      oldNodes.replaceWith(nodes7452);
    }));
  }
  renderControl1622();
  root10025.append(node4003);
  callback(root10025); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root10027 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node4004 = $("<td>");
  
  var ref3984 = width;
  if(ref3984.get() !== null) {
    node4004.attr('width', ref3984.get());
    subs__.addSub(ref3984.addEventListener('change', function(_, ref, val) {
      node4004.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3984.rebind());
  
  var ref3985 = style;
  if(ref3985.get() !== null) {
    node4004.attr('class', ref3985.get());
    subs__.addSub(ref3985.addEventListener('change', function(_, ref, val) {
      node4004.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3985.rebind());
  
  var nodes7453 = $("<span>");
  node4004.append(nodes7453);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1623();
  }));
  
  function renderControl1623() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10028 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10028); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7453;
      nodes7453 = node.contents();
      oldNodes.replaceWith(nodes7453);
    }));
  }
  renderControl1623();
  root10027.append(node4004);
  callback(root10027); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root10029 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node4005 = $("<td>");
  
  var ref3986 = width;
  if(ref3986.get() !== null) {
    node4005.attr('width', ref3986.get());
    subs__.addSub(ref3986.addEventListener('change', function(_, ref, val) {
      node4005.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3986.rebind());
  
  var ref3987 = style;
  if(ref3987.get() !== null) {
    node4005.attr('class', ref3987.get());
    subs__.addSub(ref3987.addEventListener('change', function(_, ref, val) {
      node4005.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3987.rebind());
  
  
  var node4006 = $("<strong>");
  
  var nodes7454 = $("<span>");
  node4006.append(nodes7454);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1624();
  }));
  
  function renderControl1624() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10030 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10030); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7454;
      nodes7454 = node.contents();
      oldNodes.replaceWith(nodes7454);
    }));
  }
  renderControl1624();
  node4005.append(node4006);
  root10029.append(node4005);
  callback(root10029); return subs__;
  
  
  
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
  items.list(function(coll5458) {
    coll5458 = coll5458.reverse();
    function processOne304() {
      var item;
      item = coll5458.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll5458.length > 0) processOne304(); else rest304();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll5458.length > 0) processOne304(); else rest304();
          
        }
      }
    }
    function rest304() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll5458.length > 0) processOne304(); else rest304();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root10031 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  items.get().one(function(result__) {
    var tmp6676 = result__;
    var current = mobl.ref(result__);
    
    var node4007 = $("<div>");
    node4007.attr('width', "100%");
    
    
    var node4008 = $("<div>");
    node4008.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
    
    var nodes7456 = $("<span>");
    node4008.append(nodes7456);
    subs__.addSub((ui.group)(function(_, callback) {
      var root10033 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node4013 = mobl.loadingSpan();
      root10033.append(node4013);
      var list710;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList710 = function() {
        var subs__ = listSubs__;
        list710 = items.get();
        list710.list(function(results710) {
          node4013.empty();
          for(var i1676 = 0; i1676 < results710.length; i1676++) {
            (function() {
              var iternode710 = $("<span>");
              node4013.append(iternode710);
              var it;
              it = mobl.ref(mobl.ref(results710), i1676);
              var result__ = it.get() == current.get();
              var tmp6652 = mobl.ref(result__);
              subs__.addSub(it.addEventListener('change', function() {
                tmp6652.set(it.get() == current.get());
              }));
              subs__.addSub(current.addEventListener('change', function() {
                tmp6652.set(it.get() == current.get());
              }));
              
              
              var node4014 = $("<span>");
              iternode710.append(node4014);
              var condSubs972 = new mobl.CompSubscription();
              subs__.addSub(condSubs972);
              var oldValue972;
              var renderCond972 = function() {
                var value4408 = tmp6652.get();
                if(oldValue972 === value4408) return;
                oldValue972 = value4408;
                var subs__ = condSubs972;
                subs__.unsubscribe();
                node4014.empty();
                if(value4408) {
                  var nodes7457 = $("<span>");
                  node4014.append(nodes7457);
                  subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                    var root10034 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp6679 = result__;
                      var tmp6649 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp6677 = result__;
                          var result__ = tmp6677;
                          tmp6649.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp6678 = result__;
                          var result__ = tmp6678;
                          tmp6649.set(result__);
                          
                        });
                      }));
                      
                      var nodes7458 = $("<span>");
                      root10034.append(nodes7458);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl1626();
                      }));
                      
                      function renderControl1626() {
                        subs__.addSub((masterItem.get())(it, tmp6649, function(elements, callback) {
                          var root10035 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root10035); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes7458;
                          nodes7458 = node.contents();
                          oldNodes.replaceWith(nodes7458);
                        }));
                      }
                      renderControl1626();
                      callback(root10034); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes7457;
                    nodes7457 = node.contents();
                    oldNodes.replaceWith(nodes7457);
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
                  var tmp6651 = mobl.ref(result__);
                  
                  var nodes7459 = $("<span>");
                  node4014.append(nodes7459);
                  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6651, mobl.ref(null), mobl.ref(true), function(_, callback) {
                    var root10036 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp6682 = result__;
                      var tmp6650 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp6680 = result__;
                          var result__ = tmp6680;
                          tmp6650.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp6681 = result__;
                          var result__ = tmp6681;
                          tmp6650.set(result__);
                          
                        });
                      }));
                      
                      var nodes7460 = $("<span>");
                      root10036.append(nodes7460);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl1627();
                      }));
                      
                      function renderControl1627() {
                        subs__.addSub((masterItem.get())(it, tmp6650, function(elements, callback) {
                          var root10037 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root10037); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes7460;
                          nodes7460 = node.contents();
                          oldNodes.replaceWith(nodes7460);
                        }));
                      }
                      renderControl1627();
                      callback(root10036); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes7459;
                    nodes7459 = node.contents();
                    oldNodes.replaceWith(nodes7459);
                  }));
                  
                  
                }
              };
              renderCond972();
              subs__.addSub(tmp6652.addEventListener('change', function() {
                renderCond972();
              }));
              
              
              var oldNodes = iternode710;
              iternode710 = iternode710.contents();
              oldNodes.replaceWith(iternode710);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list710.addEventListener('change', function() { listSubs__.unsubscribe(); renderList710(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList710(true); }));
        });
      };
      renderList710();
      
      callback(root10033); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7456;
      nodes7456 = node.contents();
      oldNodes.replaceWith(nodes7456);
    }));
    node4007.append(node4008);
    
    var node4009 = $("<div>");
    node4009.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
    
    var result__ = current.get() && ui.visible.get();
    var tmp6653 = mobl.ref(result__);
    subs__.addSub(current.addEventListener('change', function() {
      tmp6653.set(current.get() && ui.visible.get());
    }));
    subs__.addSub(ui.visible.addEventListener('change', function() {
      tmp6653.set(current.get() && ui.visible.get());
    }));
    
    
    var node4010 = $("<span>");
    node4009.append(node4010);
    var condSubs971 = new mobl.CompSubscription();
    subs__.addSub(condSubs971);
    var oldValue971;
    var renderCond971 = function() {
      var value4407 = tmp6653.get();
      if(oldValue971 === value4407) return;
      oldValue971 = value4407;
      var subs__ = condSubs971;
      subs__.unsubscribe();
      node4010.empty();
      if(value4407) {
        var nodes7455 = $("<span>");
        node4010.append(nodes7455);
        subs__.addSub(detail.addEventListener('change', function() {
          renderControl1625();
        }));
        
        function renderControl1625() {
          subs__.addSub((detail.get())(current, function(elements, callback) {
            var root10032 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root10032); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes7455;
            nodes7455 = node.contents();
            oldNodes.replaceWith(nodes7455);
          }));
        }
        renderControl1625();
        
        
      } else {
        
        var node4011 = $("<div>");
        node4011.attr('style', "padding:20px");
        
        
        var node4012 = $("<h2>");
        
        
        node4012.append("Add more questions.");
        node4011.append(node4012);
        node4010.append(node4011);
        
        
        
      }
    };
    renderCond971();
    subs__.addSub(tmp6653.addEventListener('change', function() {
      renderCond971();
    }));
    
    node4007.append(node4009);
    root10031.append(node4007);
    callback(root10031); return subs__;
    
    
    
    
    
  });
  return subs__;
};
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.section = 'ui__section';
ui.logoStyle = 'ui__logoStyle';
