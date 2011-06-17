mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root3521 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1254 = $("<span>");
  root3521.append(node1254);
  var condSubs263 = new mobl.CompSubscription();
  subs__.addSub(condSubs263);
  var oldValue263;
  var renderCond263 = function() {
    var value581 = value.get();
    if(oldValue263 === value581) return;
    oldValue263 = value581;
    var subs__ = condSubs263;
    subs__.unsubscribe();
    node1254.empty();
    if(value581) {
      var nodes2515 = $("<span>");
      node1254.append(nodes2515);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl489();
      }));
      
      function renderControl489() {
        subs__.addSub((elements)(function(elements, callback) {
          var root3522 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3522); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2515;
          nodes2515 = node.contents();
          oldNodes.replaceWith(nodes2515);
        }));
      }
      renderControl489();
      
      
    } else {
      var nodes2516 = $("<span>");
      node1254.append(nodes2516);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3523 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes2517 = $("<span>");
        root3523.append(nodes2517);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root3524 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3524); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2517;
          nodes2517 = node.contents();
          oldNodes.replaceWith(nodes2517);
        }));
        var nodes2518 = $("<span>");
        root3523.append(nodes2518);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root3525 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3525); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2518;
          nodes2518 = node.contents();
          oldNodes.replaceWith(nodes2518);
        }));
        callback(root3523); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2516;
        nodes2516 = node.contents();
        oldNodes.replaceWith(nodes2516);
      }));
      
      
    }
  };
  renderCond263();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond263();
  }));
  
  callback(root3521); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root3526 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1255 = $("<div>");
  
  var ref1657 = mobl.ref(ui.headerStyle);
  if(ref1657.get() !== null) {
    node1255.attr('class', ref1657.get());
    subs__.addSub(ref1657.addEventListener('change', function(_, ref, val) {
      node1255.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1657.rebind());
  
  var val936 = onclick.get();
  if(val936 !== null) {
    subs__.addSub(mobl.domBind(node1255, 'tap', val936));
  }
  
  var ref1658 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref1658.get() !== null) {
    node1255.attr('style', ref1658.get());
    subs__.addSub(ref1658.addEventListener('change', function(_, ref, val) {
      node1255.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node1255.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref1658.rebind());
  
  
  var node1258 = $("<div>");
  
  var ref1656 = mobl.ref(ui.headerContainerStyle);
  if(ref1656.get() !== null) {
    node1258.attr('class', ref1656.get());
    subs__.addSub(ref1656.addEventListener('change', function(_, ref, val) {
      node1258.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1656.rebind());
  
  
  var node1259 = $("<div>");
  
  var ref1654 = text;
  node1259.text(""+ref1654.get());
  var ignore347 = false;
  subs__.addSub(ref1654.addEventListener('change', function(_, ref, val) {
    if(ignore347) return;
    node1259.text(""+val);
  }));
  subs__.addSub(ref1654.rebind());
  
  
  var ref1655 = mobl.ref(ui.headerTextStyle);
  if(ref1655.get() !== null) {
    node1259.attr('class', ref1655.get());
    subs__.addSub(ref1655.addEventListener('change', function(_, ref, val) {
      node1259.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1655.rebind());
  
  node1258.append(node1259);
  node1255.append(node1258);
  var nodes2519 = $("<span>");
  node1255.append(nodes2519);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl490();
  }));
  
  function renderControl490() {
    subs__.addSub((elements)(function(elements, callback) {
      var root3527 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3527); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2519;
      nodes2519 = node.contents();
      oldNodes.replaceWith(nodes2519);
    }));
  }
  renderControl490();
  root3526.append(node1255);
  
  var node1256 = $("<span>");
  root3526.append(node1256);
  var condSubs264 = new mobl.CompSubscription();
  subs__.addSub(condSubs264);
  var oldValue264;
  var renderCond264 = function() {
    var value582 = fixedPosition.get();
    if(oldValue264 === value582) return;
    oldValue264 = value582;
    var subs__ = condSubs264;
    subs__.unsubscribe();
    node1256.empty();
    if(value582) {
      
      var node1257 = $("<div>");
      node1257.attr('id', "hello");
      node1257.attr('style', "height: 2.9em;");
      
      node1256.append(node1257);
      
      
    } else {
      
    }
  };
  renderCond264();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond264();
  }));
  
  callback(root3526); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root3528 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref1659 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref1659.get() !== null) {
    sp.attr('class', ref1659.get());
    subs__.addSub(ref1659.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1659.rebind());
  
  var val937 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val937 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val937));
  }
  
  var val938 = function(event, callback) {
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
  if(val938 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val938));
  }
  
  var val939 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after267(result__) {
                    var tmp2402 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after267);if(result__ !== undefined) after267(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val939 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val939));
  }
  
  var val940 = function(event, callback) {
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
  if(val940 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val940));
  }
  
  var ref1660 = text;
  sp.text(""+ref1660.get());
  var ignore348 = false;
  subs__.addSub(ref1660.addEventListener('change', function(_, ref, val) {
    if(ignore348) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref1660.rebind());
  
  
  root3528.append(sp);
  callback(root3528); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root3529 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2520 = $("<span>");
  root3529.append(nodes2520);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root3530 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3530); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2520;
    nodes2520 = node.contents();
    oldNodes.replaceWith(nodes2520);
  }));
  callback(root3529); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root3531 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2521 = $("<span>");
  root3531.append(nodes2521);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root3532 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3532); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2521;
    nodes2521 = node.contents();
    oldNodes.replaceWith(nodes2521);
  }));
  callback(root3531); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root3533 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1260 = $("<ul>");
  
  var ref1661 = mobl.ref(ui.groupStyle);
  if(ref1661.get() !== null) {
    node1260.attr('class', ref1661.get());
    subs__.addSub(ref1661.addEventListener('change', function(_, ref, val) {
      node1260.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1661.rebind());
  
  var nodes2522 = $("<span>");
  node1260.append(nodes2522);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl491();
  }));
  
  function renderControl491() {
    subs__.addSub((elements)(function(elements, callback) {
      var root3534 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3534); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2522;
      nodes2522 = node.contents();
      oldNodes.replaceWith(nodes2522);
    }));
  }
  renderControl491();
  root3533.append(node1260);
  callback(root3533); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root3535 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1261 = $("<img>");
  
  var ref1662 = url;
  if(ref1662.get() !== null) {
    node1261.attr('src', ref1662.get());
    subs__.addSub(ref1662.addEventListener('change', function(_, ref, val) {
      node1261.attr('src', val);
    }));
    
  }
  subs__.addSub(ref1662.rebind());
  
  var ref1663 = width;
  if(ref1663.get() !== null) {
    node1261.attr('width', ref1663.get());
    subs__.addSub(ref1663.addEventListener('change', function(_, ref, val) {
      node1261.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1663.rebind());
  
  var ref1664 = height;
  if(ref1664.get() !== null) {
    node1261.attr('height', ref1664.get());
    subs__.addSub(ref1664.addEventListener('change', function(_, ref, val) {
      node1261.attr('height', val);
    }));
    
  }
  subs__.addSub(ref1664.rebind());
  
  var ref1665 = style;
  if(ref1665.get() !== null) {
    node1261.attr('class', ref1665.get());
    subs__.addSub(ref1665.addEventListener('change', function(_, ref, val) {
      node1261.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1665.rebind());
  
  var val941 = onclick.get();
  if(val941 !== null) {
    subs__.addSub(mobl.domBind(node1261, 'tap', val941));
  }
  
  var ref1666 = valign;
  if(ref1666.get() !== null) {
    node1261.attr('valign', ref1666.get());
    subs__.addSub(ref1666.addEventListener('change', function(_, ref, val) {
      node1261.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref1666.rebind());
  
  var ref1667 = align;
  if(ref1667.get() !== null) {
    node1261.attr('align', ref1667.get());
    subs__.addSub(ref1667.addEventListener('change', function(_, ref, val) {
      node1261.attr('align', val);
    }));
    
  }
  subs__.addSub(ref1667.rebind());
  
  root3535.append(node1261);
  callback(root3535); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root3536 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref1668 = mobl.ref(ui.itemStyle);
  if(ref1668.get() !== null) {
    el.attr('class', ref1668.get());
    subs__.addSub(ref1668.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1668.rebind());
  
  var ref1669 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref1669.get() !== null) {
    el.attr('class', ref1669.get());
    subs__.addSub(ref1669.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1669.rebind());
  
  var val942 = onswipe.get();
  if(val942 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val942));
  }
  
  var val943 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp2403 = result__;
                                           function after268(result__) {
                                             var tmp2404 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after268);if(result__ !== undefined) after268(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp2405 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val943 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val943));
  }
  
  var nodes2523 = $("<span>");
  el.append(nodes2523);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl492();
  }));
  
  function renderControl492() {
    subs__.addSub((elements)(function(elements, callback) {
      var root3537 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3537); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2523;
      nodes2523 = node.contents();
      oldNodes.replaceWith(nodes2523);
    }));
  }
  renderControl492();
  root3536.append(el);
  callback(root3536); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root3538 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1262 = $("<input>");
  node1262.attr('type', "checkbox");
  
  var ref1671 = b;
  node1262.attr('checked', !!ref1671.get());
  subs__.addSub(ref1671.addEventListener('change', function(_, ref, val) {
    if(ref === ref1671) node1262.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node1262, 'change', function() {
    b.set(!!node1262.attr('checked'));
  }));
  
  var val945 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val945 !== null) {
    subs__.addSub(mobl.domBind(node1262, 'tap', val945));
  }
  
  var val946 = onchange.get();
  if(val946 !== null) {
    subs__.addSub(mobl.domBind(node1262, 'change', val946));
  }
  
  root3538.append(node1262);
  
  root3538.append(" ");
  
  var node1263 = $("<span>");
  
  var ref1670 = label;
  node1263.text(""+ref1670.get());
  var ignore349 = false;
  subs__.addSub(ref1670.addEventListener('change', function(_, ref, val) {
    if(ignore349) return;
    node1263.text(""+val);
  }));
  subs__.addSub(ref1670.rebind());
  
  
  var val944 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after269(result__) {
                    var tmp2406 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after269);if(result__ !== undefined) after269(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val944 !== null) {
    subs__.addSub(mobl.domBind(node1263, 'tap', val944));
  }
  
  root3538.append(node1263);
  callback(root3538); return subs__;
  
  
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
  var root3539 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1264 = $("<span>");
  root3539.append(node1264);
  var condSubs265 = new mobl.CompSubscription();
  subs__.addSub(condSubs265);
  var oldValue265;
  var renderCond265 = function() {
    var value583 = label.get();
    if(oldValue265 === value583) return;
    oldValue265 = value583;
    var subs__ = condSubs265;
    subs__.unsubscribe();
    node1264.empty();
    if(value583) {
      var nodes2524 = $("<span>");
      node1264.append(nodes2524);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root3540 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3540); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2524;
        nodes2524 = node.contents();
        oldNodes.replaceWith(nodes2524);
      }));
      
      
    } else {
      
    }
  };
  renderCond265();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond265();
  }));
  
  
  var node1265 = $("<span>");
  root3539.append(node1265);
  var condSubs266 = new mobl.CompSubscription();
  subs__.addSub(condSubs266);
  var oldValue266;
  var renderCond266 = function() {
    var value584 = validator.get();
    if(oldValue266 === value584) return;
    oldValue266 = value584;
    var subs__ = condSubs266;
    subs__.unsubscribe();
    node1265.empty();
    if(value584) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after273(result__) {
        var tmp2407 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp2408 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node1266 = $("<input>");
        
        var ref1672 = inputType;
        if(ref1672.get() !== null) {
          node1266.attr('type', ref1672.get());
          subs__.addSub(ref1672.addEventListener('change', function(_, ref, val) {
            node1266.attr('type', val);
          }));
          
        }
        subs__.addSub(ref1672.rebind());
        
        var ref1673 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref1673.get() !== null) {
          node1266.attr('class', ref1673.get());
          subs__.addSub(ref1673.addEventListener('change', function(_, ref, val) {
            node1266.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node1266.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node1266.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node1266.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref1673.rebind());
        
        var ref1674 = placeholder;
        if(ref1674.get() !== null) {
          node1266.attr('placeholder', ref1674.get());
          subs__.addSub(ref1674.addEventListener('change', function(_, ref, val) {
            node1266.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref1674.rebind());
        
        var ref1675 = temp;
        node1266.val(""+ref1675.get());
        var ignore350 = false;
        subs__.addSub(ref1675.addEventListener('change', function(_, ref, val) {
          if(ignore350) return;
          node1266.val(""+val);
        }));
        subs__.addSub(ref1675.rebind());
        
        subs__.addSub(mobl.domBind(node1266, 'keyup change', function() {
          ignore350 = true;
          temp.set(mobl.stringTomobl__String(node1266.val()));
          ignore350 = false;
        }));
        
        
        var val947 = onchange.get();
        if(val947 !== null) {
          subs__.addSub(mobl.domBind(node1266, 'change', val947));
        }
        
        var val948 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after270(result__) {
                          var tmp2409 = result__;
                          function after271(result__) {
                            var tmp2410 = result__;
                            var result__ = tmp2410;
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
                          var result__ = validator.get()(temp.get(), after271);if(result__ !== undefined) after271(result__);
                        }
                        var result__ = onkeyup.get()(event, after270);if(result__ !== undefined) after270(result__);
                      } else {
                        {
                          function after272(result__) {
                            var tmp2410 = result__;
                            var result__ = tmp2410;
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
                          var result__ = validator.get()(temp.get(), after272);if(result__ !== undefined) after272(result__);
                        }
                      }
                    };
        if(val948 !== null) {
          subs__.addSub(mobl.domBind(node1266, 'keyup', val948));
        }
        
        var val949 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val949 !== null) {
          subs__.addSub(mobl.domBind(node1266, 'blur', val949));
        }
        
        node1265.append(node1266);
        var nodes2525 = $("<span>");
        node1265.append(nodes2525);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root3541 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3541); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2525;
          nodes2525 = node.contents();
          oldNodes.replaceWith(nodes2525);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after273);if(result__ !== undefined) after273(result__);
    } else {
      
      var node1267 = $("<input>");
      
      var ref1676 = inputType;
      if(ref1676.get() !== null) {
        node1267.attr('type', ref1676.get());
        subs__.addSub(ref1676.addEventListener('change', function(_, ref, val) {
          node1267.attr('type', val);
        }));
        
      }
      subs__.addSub(ref1676.rebind());
      
      var ref1677 = style;
      if(ref1677.get() !== null) {
        node1267.attr('class', ref1677.get());
        subs__.addSub(ref1677.addEventListener('change', function(_, ref, val) {
          node1267.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1677.rebind());
      
      var ref1678 = placeholder;
      if(ref1678.get() !== null) {
        node1267.attr('placeholder', ref1678.get());
        subs__.addSub(ref1678.addEventListener('change', function(_, ref, val) {
          node1267.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1678.rebind());
      
      var ref1679 = s;
      node1267.val(""+ref1679.get());
      var ignore351 = false;
      subs__.addSub(ref1679.addEventListener('change', function(_, ref, val) {
        if(ignore351) return;
        node1267.val(""+val);
      }));
      subs__.addSub(ref1679.rebind());
      
      subs__.addSub(mobl.domBind(node1267, 'keyup change', function() {
        ignore351 = true;
        s.set(mobl.stringTomobl__String(node1267.val()));
        ignore351 = false;
      }));
      
      
      var val950 = onchange.get();
      if(val950 !== null) {
        subs__.addSub(mobl.domBind(node1267, 'change', val950));
      }
      
      var val951 = onkeyup.get();
      if(val951 !== null) {
        subs__.addSub(mobl.domBind(node1267, 'keyup', val951));
      }
      
      var val952 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val952 !== null) {
        subs__.addSub(mobl.domBind(node1267, 'blur', val952));
      }
      
      node1265.append(node1267);
      
      
    }
  };
  renderCond266();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond266();
  }));
  
  callback(root3539); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root3542 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2526 = $("<span>");
  root3542.append(nodes2526);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root3543 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3543); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2526;
    nodes2526 = node.contents();
    oldNodes.replaceWith(nodes2526);
  }));
  callback(root3542); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root3544 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2527 = $("<span>");
  root3544.append(nodes2527);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root3545 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3545); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2527;
    nodes2527 = node.contents();
    oldNodes.replaceWith(nodes2527);
  }));
  callback(root3544); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root3546 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1268 = $("<span>");
  root3546.append(node1268);
  var condSubs267 = new mobl.CompSubscription();
  subs__.addSub(condSubs267);
  var oldValue267;
  var renderCond267 = function() {
    var value585 = label.get();
    if(oldValue267 === value585) return;
    oldValue267 = value585;
    var subs__ = condSubs267;
    subs__.unsubscribe();
    node1268.empty();
    if(value585) {
      var nodes2528 = $("<span>");
      node1268.append(nodes2528);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root3547 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3547); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2528;
        nodes2528 = node.contents();
        oldNodes.replaceWith(nodes2528);
      }));
      
      
    } else {
      
    }
  };
  renderCond267();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond267();
  }));
  
  
  var node1269 = $("<input>");
  node1269.attr('type', "range");
  
  var ref1680 = n;
  node1269.val(""+ref1680.get());
  var ignore352 = false;
  subs__.addSub(ref1680.addEventListener('change', function(_, ref, val) {
    if(ignore352) return;
    node1269.val(""+val);
  }));
  subs__.addSub(ref1680.rebind());
  
  subs__.addSub(mobl.domBind(node1269, 'keyup change', function() {
    ignore352 = true;
    n.set(mobl.stringTomobl__Num(node1269.val()));
    ignore352 = false;
  }));
  
  
  var ref1681 = min;
  if(ref1681.get() !== null) {
    node1269.attr('min', ref1681.get());
    subs__.addSub(ref1681.addEventListener('change', function(_, ref, val) {
      node1269.attr('min', val);
    }));
    
  }
  subs__.addSub(ref1681.rebind());
  
  var ref1682 = max;
  if(ref1682.get() !== null) {
    node1269.attr('max', ref1682.get());
    subs__.addSub(ref1682.addEventListener('change', function(_, ref, val) {
      node1269.attr('max', val);
    }));
    
  }
  subs__.addSub(ref1682.rebind());
  
  var ref1683 = step;
  if(ref1683.get() !== null) {
    node1269.attr('step', ref1683.get());
    subs__.addSub(ref1683.addEventListener('change', function(_, ref, val) {
      node1269.attr('step', val);
    }));
    
  }
  subs__.addSub(ref1683.rebind());
  node1269.attr('style', "width: 99%;");
  
  var val953 = onchange.get();
  if(val953 !== null) {
    subs__.addSub(mobl.domBind(node1269, 'change', val953));
  }
  
  var val954 = onkeyup.get();
  if(val954 !== null) {
    subs__.addSub(mobl.domBind(node1269, 'keyup', val954));
  }
  
  var ref1684 = placeholder;
  if(ref1684.get() !== null) {
    node1269.attr('placeholder', ref1684.get());
    subs__.addSub(ref1684.addEventListener('change', function(_, ref, val) {
      node1269.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1684.rebind());
  
  root3546.append(node1269);
  callback(root3546); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root3548 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after274(result__) {
      var tmp2411 = result__;
      var result__ = tmp2411;
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
    var result__ = validator.get()(n2, after274);if(result__ !== undefined) after274(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes2529 = $("<span>");
  root3548.append(nodes2529);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root3549 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3549); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2529;
    nodes2529 = node.contents();
    oldNodes.replaceWith(nodes2529);
  }));
  callback(root3548); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root3550 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1270 = $("<span>");
  root3550.append(node1270);
  var condSubs268 = new mobl.CompSubscription();
  subs__.addSub(condSubs268);
  var oldValue268;
  var renderCond268 = function() {
    var value586 = label.get();
    if(oldValue268 === value586) return;
    oldValue268 = value586;
    var subs__ = condSubs268;
    subs__.unsubscribe();
    node1270.empty();
    if(value586) {
      
      var node1271 = $("<span>");
      node1271.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref1688 = label;
      node1271.text(""+ref1688.get());
      var ignore354 = false;
      subs__.addSub(ref1688.addEventListener('change', function(_, ref, val) {
        if(ignore354) return;
        node1271.text(""+val);
      }));
      subs__.addSub(ref1688.rebind());
      
      
      node1270.append(node1271);
      
      var node1272 = $("<span>");
      node1272.attr('style', "float: left");
      
      
      var node1273 = $("<input>");
      node1273.attr('type', "password");
      
      var ref1685 = style;
      if(ref1685.get() !== null) {
        node1273.attr('class', ref1685.get());
        subs__.addSub(ref1685.addEventListener('change', function(_, ref, val) {
          node1273.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1685.rebind());
      
      var ref1686 = placeholder;
      if(ref1686.get() !== null) {
        node1273.attr('placeholder', ref1686.get());
        subs__.addSub(ref1686.addEventListener('change', function(_, ref, val) {
          node1273.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1686.rebind());
      
      var ref1687 = s;
      node1273.val(""+ref1687.get());
      var ignore353 = false;
      subs__.addSub(ref1687.addEventListener('change', function(_, ref, val) {
        if(ignore353) return;
        node1273.val(""+val);
      }));
      subs__.addSub(ref1687.rebind());
      
      subs__.addSub(mobl.domBind(node1273, 'keyup change', function() {
        ignore353 = true;
        s.set(mobl.stringTomobl__String(node1273.val()));
        ignore353 = false;
      }));
      
      
      var val955 = onchange.get();
      if(val955 !== null) {
        subs__.addSub(mobl.domBind(node1273, 'change', val955));
      }
      
      var val956 = onkeyup.get();
      if(val956 !== null) {
        subs__.addSub(mobl.domBind(node1273, 'keyup', val956));
      }
      
      var val957 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val957 !== null) {
        subs__.addSub(mobl.domBind(node1273, 'blur', val957));
      }
      
      node1272.append(node1273);
      node1270.append(node1272);
      
      
      
      
    } else {
      
      var node1274 = $("<input>");
      node1274.attr('type', "password");
      
      var ref1689 = style;
      if(ref1689.get() !== null) {
        node1274.attr('class', ref1689.get());
        subs__.addSub(ref1689.addEventListener('change', function(_, ref, val) {
          node1274.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1689.rebind());
      
      var ref1690 = placeholder;
      if(ref1690.get() !== null) {
        node1274.attr('placeholder', ref1690.get());
        subs__.addSub(ref1690.addEventListener('change', function(_, ref, val) {
          node1274.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1690.rebind());
      
      var ref1691 = s;
      node1274.val(""+ref1691.get());
      var ignore355 = false;
      subs__.addSub(ref1691.addEventListener('change', function(_, ref, val) {
        if(ignore355) return;
        node1274.val(""+val);
      }));
      subs__.addSub(ref1691.rebind());
      
      subs__.addSub(mobl.domBind(node1274, 'keyup change', function() {
        ignore355 = true;
        s.set(mobl.stringTomobl__String(node1274.val()));
        ignore355 = false;
      }));
      
      
      var val958 = onchange.get();
      if(val958 !== null) {
        subs__.addSub(mobl.domBind(node1274, 'change', val958));
      }
      
      var val959 = onkeyup.get();
      if(val959 !== null) {
        subs__.addSub(mobl.domBind(node1274, 'keyup', val959));
      }
      
      var val960 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val960 !== null) {
        subs__.addSub(mobl.domBind(node1274, 'blur', val960));
      }
      
      node1270.append(node1274);
      
      
    }
  };
  renderCond268();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond268();
  }));
  
  callback(root3550); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root3551 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref1696 = style;
  if(ref1696.get() !== null) {
    sel.attr('class', ref1696.get());
    subs__.addSub(ref1696.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1696.rebind());
  
  var val961 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after275(result__) {
                    var tmp2413 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after275);if(result__ !== undefined) after275(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val961 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val961));
  }
  
  
  var node1275 = mobl.loadingSpan();
  sel.append(node1275);
  var list156;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList156 = function() {
    var subs__ = listSubs__;
    list156 = options.get();
    list156.list(function(results156) {
      node1275.empty();
      for(var i255 = 0; i255 < results156.length; i255++) {
        (function() {
          var iternode156 = $("<span>");
          node1275.append(iternode156);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results156), i255), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results156), i255), "_2");
          
          var node1276 = $("<option>");
          
          var ref1692 = optionDescription;
          node1276.text(""+ref1692.get());
          var ignore356 = false;
          subs__.addSub(ref1692.addEventListener('change', function(_, ref, val) {
            if(ignore356) return;
            node1276.text(""+val);
          }));
          subs__.addSub(ref1692.rebind());
          
          
          var ref1693 = optionStyle;
          if(ref1693.get() !== null) {
            node1276.attr('class', ref1693.get());
            subs__.addSub(ref1693.addEventListener('change', function(_, ref, val) {
              node1276.attr('class', val);
            }));
            
          }
          subs__.addSub(ref1693.rebind());
          
          var ref1694 = optionValue;
          if(ref1694.get() !== null) {
            node1276.attr('value', ref1694.get());
            subs__.addSub(ref1694.addEventListener('change', function(_, ref, val) {
              node1276.attr('value', val);
            }));
            
          }
          subs__.addSub(ref1694.rebind());
          
          var ref1695 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref1695.get() !== null) {
            node1276.attr('selected', ref1695.get());
            subs__.addSub(ref1695.addEventListener('change', function(_, ref, val) {
              node1276.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node1276.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node1276.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref1695.rebind());
          
          iternode156.append(node1276);
          
          var oldNodes = iternode156;
          iternode156 = iternode156.contents();
          oldNodes.replaceWith(iternode156);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list156.addEventListener('change', function() { listSubs__.unsubscribe(); renderList156(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList156(true); }));
    });
  };
  renderList156();
  
  root3551.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root3551); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root3552 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes2530 = $("<span>");
    root3552.append(nodes2530);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root3553 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1277 = mobl.loadingSpan();
      root3553.append(node1277);
      var list157;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList157 = function() {
        var subs__ = listSubs__;
        list157 = tabs.get();
        list157.list(function(results157) {
          node1277.empty();
          for(var i256 = 0; i256 < results157.length; i256++) {
            (function() {
              var iternode157 = $("<span>");
              node1277.append(iternode157);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results157), i256), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results157), i256), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results157), i256), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp2378 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp2378.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp2378.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp2378.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp2378.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp2377 = mobl.ref(result__);
              
              var nodes2531 = $("<span>");
              iternode157.append(nodes2531);
              subs__.addSub((mobl.span)(tmp2378, mobl.ref(null), tmp2377, mobl.ref(null), function(_, callback) {
                var root3554 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes2532 = $("<span>");
                root3554.append(nodes2532);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root3555 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root3555); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2532;
                  nodes2532 = node.contents();
                  oldNodes.replaceWith(nodes2532);
                }));
                callback(root3554); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes2531;
                nodes2531 = node.contents();
                oldNodes.replaceWith(nodes2531);
              }));
              
              var oldNodes = iternode157;
              iternode157 = iternode157.contents();
              oldNodes.replaceWith(iternode157);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list157.addEventListener('change', function() { listSubs__.unsubscribe(); renderList157(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList157(true); }));
        });
      };
      renderList157();
      
      callback(root3553); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2530;
      nodes2530 = node.contents();
      oldNodes.replaceWith(nodes2530);
    }));
    
    var node1278 = mobl.loadingSpan();
    root3552.append(node1278);
    var list158;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList158 = function() {
      var subs__ = listSubs__;
      list158 = tabs.get();
      list158.list(function(results158) {
        node1278.empty();
        for(var i257 = 0; i257 < results158.length; i257++) {
          (function() {
            var iternode158 = $("<span>");
            node1278.append(iternode158);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results158), i257), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results158), i257), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results158), i257), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp2379 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp2379.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp2379.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp2379.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp2379.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes2533 = $("<span>");
            iternode158.append(nodes2533);
            subs__.addSub((mobl.block)(tmp2379, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root3556 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes2534 = $("<span>");
              root3556.append(nodes2534);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root3557 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes2535 = $("<span>");
                root3557.append(nodes2535);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl493();
                }));
                
                function renderControl493() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root3558 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root3558); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes2535;
                    nodes2535 = node.contents();
                    oldNodes.replaceWith(nodes2535);
                  }));
                }
                renderControl493();
                callback(root3557); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes2534;
                nodes2534 = node.contents();
                oldNodes.replaceWith(nodes2534);
              }));
              callback(root3556); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes2533;
              nodes2533 = node.contents();
              oldNodes.replaceWith(nodes2533);
            }));
            
            var oldNodes = iternode158;
            iternode158 = iternode158.contents();
            oldNodes.replaceWith(iternode158);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list158.addEventListener('change', function() { listSubs__.unsubscribe(); renderList158(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList158(true); }));
      });
    };
    renderList158();
    
    callback(root3552); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes2530 = $("<span>");
      root3552.append(nodes2530);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3553 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1277 = mobl.loadingSpan();
        root3553.append(node1277);
        var list157;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList157 = function() {
          var subs__ = listSubs__;
          list157 = tabs.get();
          list157.list(function(results157) {
            node1277.empty();
            for(var i256 = 0; i256 < results157.length; i256++) {
              (function() {
                var iternode157 = $("<span>");
                node1277.append(iternode157);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results157), i256), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results157), i256), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results157), i256), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp2378 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp2378.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp2378.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp2378.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp2378.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp2377 = mobl.ref(result__);
                
                var nodes2531 = $("<span>");
                iternode157.append(nodes2531);
                subs__.addSub((mobl.span)(tmp2378, mobl.ref(null), tmp2377, mobl.ref(null), function(_, callback) {
                  var root3554 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes2532 = $("<span>");
                  root3554.append(nodes2532);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root3555 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root3555); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes2532;
                    nodes2532 = node.contents();
                    oldNodes.replaceWith(nodes2532);
                  }));
                  callback(root3554); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2531;
                  nodes2531 = node.contents();
                  oldNodes.replaceWith(nodes2531);
                }));
                
                var oldNodes = iternode157;
                iternode157 = iternode157.contents();
                oldNodes.replaceWith(iternode157);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list157.addEventListener('change', function() { listSubs__.unsubscribe(); renderList157(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList157(true); }));
          });
        };
        renderList157();
        
        callback(root3553); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2530;
        nodes2530 = node.contents();
        oldNodes.replaceWith(nodes2530);
      }));
      
      var node1278 = mobl.loadingSpan();
      root3552.append(node1278);
      var list158;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList158 = function() {
        var subs__ = listSubs__;
        list158 = tabs.get();
        list158.list(function(results158) {
          node1278.empty();
          for(var i257 = 0; i257 < results158.length; i257++) {
            (function() {
              var iternode158 = $("<span>");
              node1278.append(iternode158);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results158), i257), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results158), i257), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results158), i257), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp2379 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp2379.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp2379.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp2379.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp2379.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes2533 = $("<span>");
              iternode158.append(nodes2533);
              subs__.addSub((mobl.block)(tmp2379, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root3556 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes2534 = $("<span>");
                root3556.append(nodes2534);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root3557 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes2535 = $("<span>");
                  root3557.append(nodes2535);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl493();
                  }));
                  
                  function renderControl493() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root3558 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root3558); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes2535;
                      nodes2535 = node.contents();
                      oldNodes.replaceWith(nodes2535);
                    }));
                  }
                  renderControl493();
                  callback(root3557); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2534;
                  nodes2534 = node.contents();
                  oldNodes.replaceWith(nodes2534);
                }));
                callback(root3556); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes2533;
                nodes2533 = node.contents();
                oldNodes.replaceWith(nodes2533);
              }));
              
              var oldNodes = iternode158;
              iternode158 = iternode158.contents();
              oldNodes.replaceWith(iternode158);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list158.addEventListener('change', function() { listSubs__.unsubscribe(); renderList158(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList158(true); }));
        });
      };
      renderList158();
      
      callback(root3552); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root3559 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1279 = $("<div>");
  
  var ref1700 = mobl.ref(ui.searchboxStyle);
  if(ref1700.get() !== null) {
    node1279.attr('class', ref1700.get());
    subs__.addSub(ref1700.addEventListener('change', function(_, ref, val) {
      node1279.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1700.rebind());
  
  
  var node1280 = $("<input>");
  node1280.attr('type', "search");
  
  var ref1697 = mobl.ref(ui.searchBoxInputStyle);
  if(ref1697.get() !== null) {
    node1280.attr('class', ref1697.get());
    subs__.addSub(ref1697.addEventListener('change', function(_, ref, val) {
      node1280.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1697.rebind());
  
  var ref1698 = placeholder;
  if(ref1698.get() !== null) {
    node1280.attr('placeholder', ref1698.get());
    subs__.addSub(ref1698.addEventListener('change', function(_, ref, val) {
      node1280.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1698.rebind());
  
  var ref1699 = s;
  node1280.val(""+ref1699.get());
  var ignore357 = false;
  subs__.addSub(ref1699.addEventListener('change', function(_, ref, val) {
    if(ignore357) return;
    node1280.val(""+val);
  }));
  subs__.addSub(ref1699.rebind());
  
  subs__.addSub(mobl.domBind(node1280, 'keyup change', function() {
    ignore357 = true;
    s.set(mobl.stringTomobl__String(node1280.val()));
    ignore357 = false;
  }));
  
  
  var val962 = onsearch.get();
  if(val962 !== null) {
    subs__.addSub(mobl.domBind(node1280, 'change', val962));
  }
  
  var val963 = onkeyup.get();
  if(val963 !== null) {
    subs__.addSub(mobl.domBind(node1280, 'keyup', val963));
  }
  node1280.attr('autocorrect', false);
  node1280.attr('autocapitalize', false);
  node1280.attr('autocomplete', false);
  
  node1279.append(node1280);
  root3559.append(node1279);
  callback(root3559); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root3560 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref1701 = mobl.ref(ui.contextMenuStyle);
  if(ref1701.get() !== null) {
    menu.attr('class', ref1701.get());
    subs__.addSub(ref1701.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1701.rebind());
  
  var nodes2536 = $("<span>");
  menu.append(nodes2536);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl494();
  }));
  
  function renderControl494() {
    subs__.addSub((elements)(function(elements, callback) {
      var root3561 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3561); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2536;
      nodes2536 = node.contents();
      oldNodes.replaceWith(nodes2536);
    }));
  }
  renderControl494();
  root3560.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val964 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp2416 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val964 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val964));
  }
  
  root3560.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root3560); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root3562 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp2401 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp2401.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node1281 = $("<span>");
  root3562.append(node1281);
  var condSubs269 = new mobl.CompSubscription();
  subs__.addSub(condSubs269);
  var oldValue269;
  var renderCond269 = function() {
    var value587 = tmp2401.get();
    if(oldValue269 === value587) return;
    oldValue269 = value587;
    var subs__ = condSubs269;
    subs__.unsubscribe();
    node1281.empty();
    if(value587) {
      items.get().one(function(result__) {
        var tmp2417 = result__;
        var current = mobl.ref(result__);
        
        var node1282 = $("<div>");
        node1282.attr('width', "100%");
        
        
        var node1283 = $("<div>");
        node1283.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes2539 = $("<span>");
        node1283.append(nodes2539);
        subs__.addSub((ui.group)(function(_, callback) {
          var root3565 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node1286 = mobl.loadingSpan();
          root3565.append(node1286);
          var list159;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList159 = function() {
            var subs__ = listSubs__;
            list159 = items.get();
            list159.list(function(results159) {
              node1286.empty();
              for(var i258 = 0; i258 < results159.length; i258++) {
                (function() {
                  var iternode159 = $("<span>");
                  node1286.append(iternode159);
                  var it;
                  it = mobl.ref(mobl.ref(results159), i258);
                  var result__ = it.get() == current.get();
                  var tmp2385 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp2385.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp2385.set(it.get() == current.get());
                  }));
                  
                  
                  var node1287 = $("<span>");
                  iternode159.append(node1287);
                  var condSubs271 = new mobl.CompSubscription();
                  subs__.addSub(condSubs271);
                  var oldValue271;
                  var renderCond271 = function() {
                    var value589 = tmp2385.get();
                    if(oldValue271 === value589) return;
                    oldValue271 = value589;
                    var subs__ = condSubs271;
                    subs__.unsubscribe();
                    node1287.empty();
                    if(value589) {
                      var nodes2540 = $("<span>");
                      node1287.append(nodes2540);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root3566 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes2541 = $("<span>");
                        root3566.append(nodes2541);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl496();
                        }));
                        
                        function renderControl496() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root3567 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root3567); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes2541;
                            nodes2541 = node.contents();
                            oldNodes.replaceWith(nodes2541);
                          }));
                        }
                        renderControl496();
                        callback(root3566); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes2540;
                        nodes2540 = node.contents();
                        oldNodes.replaceWith(nodes2540);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp2384 = mobl.ref(result__);
                      
                      var nodes2542 = $("<span>");
                      node1287.append(nodes2542);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2384, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root3568 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes2543 = $("<span>");
                        root3568.append(nodes2543);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl497();
                        }));
                        
                        function renderControl497() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root3569 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root3569); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes2543;
                            nodes2543 = node.contents();
                            oldNodes.replaceWith(nodes2543);
                          }));
                        }
                        renderControl497();
                        callback(root3568); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes2542;
                        nodes2542 = node.contents();
                        oldNodes.replaceWith(nodes2542);
                      }));
                      
                      
                    }
                  };
                  renderCond271();
                  subs__.addSub(tmp2385.addEventListener('change', function() {
                    renderCond271();
                  }));
                  
                  
                  var oldNodes = iternode159;
                  iternode159 = iternode159.contents();
                  oldNodes.replaceWith(iternode159);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list159.addEventListener('change', function() { listSubs__.unsubscribe(); renderList159(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList159(true); }));
            });
          };
          renderList159();
          
          callback(root3565); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes2539;
          nodes2539 = node.contents();
          oldNodes.replaceWith(nodes2539);
        }));
        node1282.append(node1283);
        
        var node1284 = $("<div>");
        node1284.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node1285 = $("<span>");
        node1284.append(node1285);
        var condSubs270 = new mobl.CompSubscription();
        subs__.addSub(condSubs270);
        var oldValue270;
        var renderCond270 = function() {
          var value588 = current.get();
          if(oldValue270 === value588) return;
          oldValue270 = value588;
          var subs__ = condSubs270;
          subs__.unsubscribe();
          node1285.empty();
          if(value588) {
            var nodes2537 = $("<span>");
            node1285.append(nodes2537);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl495();
            }));
            
            function renderControl495() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root3563 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root3563); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2537;
                nodes2537 = node.contents();
                oldNodes.replaceWith(nodes2537);
              }));
            }
            renderControl495();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp2386 = mobl.ref(result__);
            
            var nodes2538 = $("<span>");
            node1285.append(nodes2538);
            subs__.addSub((mobl.label)(tmp2386, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root3564 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root3564); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes2538;
              nodes2538 = node.contents();
              oldNodes.replaceWith(nodes2538);
            }));
            
            
          }
        };
        renderCond270();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond270();
        }));
        
        node1282.append(node1284);
        node1281.append(node1282);
        
        
        
        
        
        
      });
    } else {
      var nodes2544 = $("<span>");
      node1281.append(nodes2544);
      subs__.addSub((ui.group)(function(_, callback) {
        var root3570 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1288 = mobl.loadingSpan();
        root3570.append(node1288);
        var list160;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList160 = function() {
          var subs__ = listSubs__;
          list160 = items.get();
          list160.list(function(results160) {
            node1288.empty();
            for(var i259 = 0; i259 < results160.length; i259++) {
              (function() {
                var iternode160 = $("<span>");
                node1288.append(iternode160);
                var it;
                it = mobl.ref(mobl.ref(results160), i259);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp2418 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp2380 = mobl.ref(result__);
                
                var nodes2545 = $("<span>");
                iternode160.append(nodes2545);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2380, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root3571 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes2546 = $("<span>");
                  root3571.append(nodes2546);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl498();
                  }));
                  
                  function renderControl498() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root3572 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root3572); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes2546;
                      nodes2546 = node.contents();
                      oldNodes.replaceWith(nodes2546);
                    }));
                  }
                  renderControl498();
                  callback(root3571); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2545;
                  nodes2545 = node.contents();
                  oldNodes.replaceWith(nodes2545);
                }));
                
                var oldNodes = iternode160;
                iternode160 = iternode160.contents();
                oldNodes.replaceWith(iternode160);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list160.addEventListener('change', function() { listSubs__.unsubscribe(); renderList160(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList160(true); }));
          });
        };
        renderList160();
        
        callback(root3570); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2544;
        nodes2544 = node.contents();
        oldNodes.replaceWith(nodes2544);
      }));
      
      
    }
  };
  renderCond269();
  subs__.addSub(tmp2401.addEventListener('change', function() {
    renderCond269();
  }));
  
  callback(root3562); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root3573 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp2383 = mobl.ref(result__);
  
  var nodes2547 = $("<span>");
  root3573.append(nodes2547);
  subs__.addSub((ui.header)(tmp2383, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3574 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2382 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp2381 = mobl.ref(result__);
    
    var nodes2548 = $("<span>");
    root3574.append(nodes2548);
    subs__.addSub((ui.backButton)(tmp2381, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2382, function(_, callback) {
      var root3575 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3575); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2548;
      nodes2548 = node.contents();
      oldNodes.replaceWith(nodes2548);
    }));
    callback(root3574); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2547;
    nodes2547 = node.contents();
    oldNodes.replaceWith(nodes2547);
  }));
  var nodes2549 = $("<span>");
  root3573.append(nodes2549);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl499();
  }));
  
  function renderControl499() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root3576 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3576); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2549;
      nodes2549 = node.contents();
      oldNodes.replaceWith(nodes2549);
    }));
  }
  renderControl499();
  callback(root3573); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root3577 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes2550 = $("<span>");
  root3577.append(nodes2550);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3578 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1289 = mobl.loadingSpan();
    root3578.append(node1289);
    var list161;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList161 = function() {
      var subs__ = listSubs__;
      list161 = coll.get();
      list161.list(function(results161) {
        node1289.empty();
        for(var i260 = 0; i260 < results161.length; i260++) {
          (function() {
            var iternode161 = $("<span>");
            node1289.append(iternode161);
            var it;
            it = mobl.ref(mobl.ref(results161), i260);
            var result__ = it.get() == selected.get();
            var tmp2388 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp2388.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp2388.set(it.get() == selected.get());
            }));
            
            
            var node1290 = $("<span>");
            iternode161.append(node1290);
            var condSubs272 = new mobl.CompSubscription();
            subs__.addSub(condSubs272);
            var oldValue272;
            var renderCond272 = function() {
              var value590 = tmp2388.get();
              if(oldValue272 === value590) return;
              oldValue272 = value590;
              var subs__ = condSubs272;
              subs__.unsubscribe();
              node1290.empty();
              if(value590) {
                var nodes2551 = $("<span>");
                node1290.append(nodes2551);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root3579 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes2552 = $("<span>");
                  root3579.append(nodes2552);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl500();
                  }));
                  
                  function renderControl500() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root3580 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root3580); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes2552;
                      nodes2552 = node.contents();
                      oldNodes.replaceWith(nodes2552);
                    }));
                  }
                  renderControl500();
                  callback(root3579); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2551;
                  nodes2551 = node.contents();
                  oldNodes.replaceWith(nodes2551);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp2387 = mobl.ref(result__);
                
                var nodes2553 = $("<span>");
                node1290.append(nodes2553);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2387, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root3581 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes2554 = $("<span>");
                  root3581.append(nodes2554);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl501();
                  }));
                  
                  function renderControl501() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root3582 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root3582); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes2554;
                      nodes2554 = node.contents();
                      oldNodes.replaceWith(nodes2554);
                    }));
                  }
                  renderControl501();
                  callback(root3581); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2553;
                  nodes2553 = node.contents();
                  oldNodes.replaceWith(nodes2553);
                }));
                
                
              }
            };
            renderCond272();
            subs__.addSub(tmp2388.addEventListener('change', function() {
              renderCond272();
            }));
            
            
            var oldNodes = iternode161;
            iternode161 = iternode161.contents();
            oldNodes.replaceWith(iternode161);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list161.addEventListener('change', function() { listSubs__.unsubscribe(); renderList161(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList161(true); }));
      });
    };
    renderList161();
    
    callback(root3578); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2550;
    nodes2550 = node.contents();
    oldNodes.replaceWith(nodes2550);
  }));
  callback(root3577); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root3583 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp2419 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp2389 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp2389.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp2389.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp2389.set(coll.get().limit(n.get()));
    }));
    
    
    var node1291 = mobl.loadingSpan();
    root3583.append(node1291);
    var list162;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList162 = function() {
      var subs__ = listSubs__;
      list162 = tmp2389.get();
      list162.list(function(results162) {
        node1291.empty();
        for(var i261 = 0; i261 < results162.length; i261++) {
          (function() {
            var iternode162 = $("<span>");
            node1291.append(iternode162);
            var it;
            it = mobl.ref(mobl.ref(results162), i261);
            var nodes2555 = $("<span>");
            iternode162.append(nodes2555);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl502();
            }));
            
            function renderControl502() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root3584 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root3584); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2555;
                nodes2555 = node.contents();
                oldNodes.replaceWith(nodes2555);
              }));
            }
            renderControl502();
            
            var oldNodes = iternode162;
            iternode162 = iternode162.contents();
            oldNodes.replaceWith(iternode162);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list162.addEventListener('change', function() { listSubs__.unsubscribe(); renderList162(true); }));
        subs__.addSub(tmp2389.addEventListener('change', function() { listSubs__.unsubscribe(); renderList162(true); }));
      });
    };
    renderList162();
    
    var result__ = n.get() < total.get();
    var tmp2391 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp2391.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp2391.set(n.get() < total.get());
    }));
    
    
    var node1292 = $("<span>");
    root3583.append(node1292);
    var condSubs273 = new mobl.CompSubscription();
    subs__.addSub(condSubs273);
    var oldValue273;
    var renderCond273 = function() {
      var value591 = tmp2391.get();
      if(oldValue273 === value591) return;
      oldValue273 = value591;
      var subs__ = condSubs273;
      subs__.unsubscribe();
      node1292.empty();
      if(value591) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp2390 = mobl.ref(result__);
        
        var nodes2556 = $("<span>");
        node1292.append(nodes2556);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp2390, mobl.ref(null), function(_, callback) {
          var root3585 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes2557 = $("<span>");
          root3585.append(nodes2557);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root3586 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root3586); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes2557;
            nodes2557 = node.contents();
            oldNodes.replaceWith(nodes2557);
          }));
          callback(root3585); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes2556;
          nodes2556 = node.contents();
          oldNodes.replaceWith(nodes2556);
        }));
        
        
      } else {
        
      }
    };
    renderCond273();
    subs__.addSub(tmp2391.addEventListener('change', function() {
      renderCond273();
    }));
    
    callback(root3583); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root3587 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2558 = $("<span>");
  root3587.append(nodes2558);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3588 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1293 = mobl.loadingSpan();
    root3588.append(node1293);
    var list163;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList163 = function() {
      var subs__ = listSubs__;
      list163 = items.get();
      list163.list(function(results163) {
        node1293.empty();
        for(var i262 = 0; i262 < results163.length; i262++) {
          (function() {
            var iternode163 = $("<span>");
            node1293.append(iternode163);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results163), i262), "_1");it = mobl.ref(mobl.ref(mobl.ref(results163), i262), "_2");
            var nodes2559 = $("<span>");
            iternode163.append(nodes2559);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root3589 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes2560 = $("<span>");
              root3589.append(nodes2560);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root3590 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root3590); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2560;
                nodes2560 = node.contents();
                oldNodes.replaceWith(nodes2560);
              }));
              callback(root3589); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes2559;
              nodes2559 = node.contents();
              oldNodes.replaceWith(nodes2559);
            }));
            
            var oldNodes = iternode163;
            iternode163 = iternode163.contents();
            oldNodes.replaceWith(iternode163);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list163.addEventListener('change', function() { listSubs__.unsubscribe(); renderList163(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList163(true); }));
      });
    };
    renderList163();
    
    callback(root3588); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2558;
    nodes2558 = node.contents();
    oldNodes.replaceWith(nodes2558);
  }));
  callback(root3587); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root3591 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll543) {
    coll543 = coll543.reverse();
    function processOne57() {
      var it;
      it = coll543.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll543.length > 0) processOne57(); else rest57();
      
    }
    function rest57() {
      var nodes2561 = $("<span>");
      root3591.append(nodes2561);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root3592 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp2392 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp2393 = mobl.ref(result__);
        
        var nodes2562 = $("<span>");
        root3592.append(nodes2562);
        subs__.addSub((ui.backButton)(tmp2393, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2392, function(_, callback) {
          var root3593 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3593); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2562;
          nodes2562 = node.contents();
          oldNodes.replaceWith(nodes2562);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll542) {
                           coll542 = coll542.reverse();
                           function processOne56() {
                             var checked;var it;
                             var tmp2421 = coll542.pop();
                             checked = tmp2421._1;it = tmp2421._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll542.length > 0) processOne56(); else rest56();
                               
                             } else {
                               {
                                 
                                 if(coll542.length > 0) processOne56(); else rest56();
                                 
                               }
                             }
                           }
                           function rest56() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll542.length > 0) processOne56(); else rest56();
                         });
                         
                       };
        var tmp2394 = mobl.ref(result__);
        
        var nodes2563 = $("<span>");
        root3592.append(nodes2563);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp2394, function(_, callback) {
          var root3594 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root3594); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2563;
          nodes2563 = node.contents();
          oldNodes.replaceWith(nodes2563);
        }));
        callback(root3592); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2561;
        nodes2561 = node.contents();
        oldNodes.replaceWith(nodes2561);
      }));
      var nodes2564 = $("<span>");
      root3591.append(nodes2564);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root3595 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3595); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2564;
        nodes2564 = node.contents();
        oldNodes.replaceWith(nodes2564);
      }));
      callback(root3591); return subs__;
      
      
    }
    if(coll543.length > 0) processOne57(); else rest57();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root3596 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes2565 = $("<span>");
  root3596.append(nodes2565);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root3597 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3597); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2565;
    nodes2565 = node.contents();
    oldNodes.replaceWith(nodes2565);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp2395 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp2395.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp2395.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp2395.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp2395.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp2395.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes2566 = $("<span>");
  root3596.append(nodes2566);
  subs__.addSub((ui.masterDetail)(tmp2395, masterItem, detailItem, function(_, callback) {
    var root3598 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3598); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2566;
    nodes2566 = node.contents();
    oldNodes.replaceWith(nodes2566);
  }));
  callback(root3596); return subs__;
  
  
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
  var root3599 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes2567 = $("<span>");
  root3599.append(nodes2567);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root3600 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1294 = mobl.loadingSpan();
    root3600.append(node1294);
    var list164;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList164 = function() {
      var subs__ = listSubs__;
      list164 = sections.get();
      list164.list(function(results164) {
        node1294.empty();
        for(var i263 = 0; i263 < results164.length; i263++) {
          (function() {
            var iternode164 = $("<span>");
            node1294.append(iternode164);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results164), i263), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results164), i263), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp2397 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp2397.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp2397.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp2397.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp2397.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp2396 = mobl.ref(result__);
            
            var nodes2568 = $("<span>");
            iternode164.append(nodes2568);
            subs__.addSub((mobl.span)(tmp2397, mobl.ref(null), tmp2396, mobl.ref(null), function(_, callback) {
              var root3601 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes2569 = $("<span>");
              root3601.append(nodes2569);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root3602 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root3602); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2569;
                nodes2569 = node.contents();
                oldNodes.replaceWith(nodes2569);
              }));
              callback(root3601); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes2568;
              nodes2568 = node.contents();
              oldNodes.replaceWith(nodes2568);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp2398 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp2398.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp2398.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp2398.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp2398.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes2570 = $("<span>");
            iternode164.append(nodes2570);
            subs__.addSub((mobl.block)(tmp2398, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root3603 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes2571 = $("<span>");
              root3603.append(nodes2571);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl503();
              }));
              
              function renderControl503() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root3604 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root3604); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2571;
                  nodes2571 = node.contents();
                  oldNodes.replaceWith(nodes2571);
                }));
              }
              renderControl503();
              callback(root3603); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes2570;
              nodes2570 = node.contents();
              oldNodes.replaceWith(nodes2570);
            }));
            
            var oldNodes = iternode164;
            iternode164 = iternode164.contents();
            oldNodes.replaceWith(iternode164);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list164.addEventListener('change', function() { listSubs__.unsubscribe(); renderList164(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList164(true); }));
      });
    };
    renderList164();
    
    callback(root3600); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2567;
    nodes2567 = node.contents();
    oldNodes.replaceWith(nodes2567);
  }));
  callback(root3599); return subs__;
  
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
  var root3605 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1295 = $("<table>");
  
  var ref1702 = style;
  if(ref1702.get() !== null) {
    node1295.attr('class', ref1702.get());
    subs__.addSub(ref1702.addEventListener('change', function(_, ref, val) {
      node1295.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1702.rebind());
  
  var nodes2572 = $("<span>");
  node1295.append(nodes2572);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl504();
  }));
  
  function renderControl504() {
    subs__.addSub((elements)(function(elements, callback) {
      var root3606 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3606); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2572;
      nodes2572 = node.contents();
      oldNodes.replaceWith(nodes2572);
    }));
  }
  renderControl504();
  root3605.append(node1295);
  callback(root3605); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root3607 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1296 = $("<tr>");
  
  var ref1703 = style;
  if(ref1703.get() !== null) {
    node1296.attr('class', ref1703.get());
    subs__.addSub(ref1703.addEventListener('change', function(_, ref, val) {
      node1296.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1703.rebind());
  
  var nodes2573 = $("<span>");
  node1296.append(nodes2573);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl505();
  }));
  
  function renderControl505() {
    subs__.addSub((elements)(function(elements, callback) {
      var root3608 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3608); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2573;
      nodes2573 = node.contents();
      oldNodes.replaceWith(nodes2573);
    }));
  }
  renderControl505();
  root3607.append(node1296);
  callback(root3607); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root3609 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1297 = $("<td>");
  
  var ref1704 = width;
  if(ref1704.get() !== null) {
    node1297.attr('width', ref1704.get());
    subs__.addSub(ref1704.addEventListener('change', function(_, ref, val) {
      node1297.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1704.rebind());
  
  var ref1705 = style;
  if(ref1705.get() !== null) {
    node1297.attr('class', ref1705.get());
    subs__.addSub(ref1705.addEventListener('change', function(_, ref, val) {
      node1297.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1705.rebind());
  
  var nodes2574 = $("<span>");
  node1297.append(nodes2574);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl506();
  }));
  
  function renderControl506() {
    subs__.addSub((elements)(function(elements, callback) {
      var root3610 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3610); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2574;
      nodes2574 = node.contents();
      oldNodes.replaceWith(nodes2574);
    }));
  }
  renderControl506();
  root3609.append(node1297);
  callback(root3609); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root3611 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1298 = $("<td>");
  
  var ref1706 = width;
  if(ref1706.get() !== null) {
    node1298.attr('width', ref1706.get());
    subs__.addSub(ref1706.addEventListener('change', function(_, ref, val) {
      node1298.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1706.rebind());
  
  var ref1707 = style;
  if(ref1707.get() !== null) {
    node1298.attr('class', ref1707.get());
    subs__.addSub(ref1707.addEventListener('change', function(_, ref, val) {
      node1298.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1707.rebind());
  
  var nodes2575 = $("<span>");
  node1298.append(nodes2575);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl507();
  }));
  
  function renderControl507() {
    subs__.addSub((elements)(function(elements, callback) {
      var root3612 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3612); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2575;
      nodes2575 = node.contents();
      oldNodes.replaceWith(nodes2575);
    }));
  }
  renderControl507();
  root3611.append(node1298);
  callback(root3611); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root3613 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1299 = $("<td>");
  
  var ref1708 = width;
  if(ref1708.get() !== null) {
    node1299.attr('width', ref1708.get());
    subs__.addSub(ref1708.addEventListener('change', function(_, ref, val) {
      node1299.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1708.rebind());
  
  var ref1709 = style;
  if(ref1709.get() !== null) {
    node1299.attr('class', ref1709.get());
    subs__.addSub(ref1709.addEventListener('change', function(_, ref, val) {
      node1299.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1709.rebind());
  
  
  var node1300 = $("<strong>");
  
  var nodes2576 = $("<span>");
  node1300.append(nodes2576);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl508();
  }));
  
  function renderControl508() {
    subs__.addSub((elements)(function(elements, callback) {
      var root3614 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3614); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2576;
      nodes2576 = node.contents();
      oldNodes.replaceWith(nodes2576);
    }));
  }
  renderControl508();
  node1299.append(node1300);
  root3613.append(node1299);
  callback(root3613); return subs__;
  
  
  
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
}(ui));
ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root3615 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  items.get().one(function(result__) {
    var tmp2423 = result__;
    var current = mobl.ref(result__);
    
    var node1301 = $("<div>");
    node1301.attr('width', "100%");
    
    
    var node1302 = $("<div>");
    node1302.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
    
    var nodes2578 = $("<span>");
    node1302.append(nodes2578);
    subs__.addSub((ui.group)(function(_, callback) {
      var root3617 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1307 = mobl.loadingSpan();
      root3617.append(node1307);
      var list165;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList165 = function() {
        var subs__ = listSubs__;
        list165 = items.get();
        list165.list(function(results165) {
          node1307.empty();
          for(var i264 = 0; i264 < results165.length; i264++) {
            (function() {
              var iternode165 = $("<span>");
              node1307.append(iternode165);
              var it;
              it = mobl.ref(mobl.ref(results165), i264);
              var result__ = it.get() == current.get();
              var tmp2400 = mobl.ref(result__);
              subs__.addSub(it.addEventListener('change', function() {
                tmp2400.set(it.get() == current.get());
              }));
              subs__.addSub(current.addEventListener('change', function() {
                tmp2400.set(it.get() == current.get());
              }));
              
              
              var node1308 = $("<span>");
              iternode165.append(node1308);
              var condSubs275 = new mobl.CompSubscription();
              subs__.addSub(condSubs275);
              var oldValue275;
              var renderCond275 = function() {
                var value593 = tmp2400.get();
                if(oldValue275 === value593) return;
                oldValue275 = value593;
                var subs__ = condSubs275;
                subs__.unsubscribe();
                node1308.empty();
                if(value593) {
                  var nodes2579 = $("<span>");
                  node1308.append(nodes2579);
                  subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                    var root3618 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    var nodes2580 = $("<span>");
                    root3618.append(nodes2580);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl510();
                    }));
                    
                    function renderControl510() {
                      subs__.addSub((masterItem.get())(it, function(elements, callback) {
                        var root3619 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root3619); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes2580;
                        nodes2580 = node.contents();
                        oldNodes.replaceWith(nodes2580);
                      }));
                    }
                    renderControl510();
                    callback(root3618); return subs__;
                    
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes2579;
                    nodes2579 = node.contents();
                    oldNodes.replaceWith(nodes2579);
                  }));
                  
                  
                } else {
                  var result__ = function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   current.set(result__);
                                   var result__ = ui.scrollUp();
                                   if(callback && callback.apply) callback(); return;
                                 };
                  var tmp2399 = mobl.ref(result__);
                  
                  var nodes2581 = $("<span>");
                  node1308.append(nodes2581);
                  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2399, mobl.ref(null), mobl.ref(true), function(_, callback) {
                    var root3620 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    var nodes2582 = $("<span>");
                    root3620.append(nodes2582);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl511();
                    }));
                    
                    function renderControl511() {
                      subs__.addSub((masterItem.get())(it, function(elements, callback) {
                        var root3621 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root3621); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes2582;
                        nodes2582 = node.contents();
                        oldNodes.replaceWith(nodes2582);
                      }));
                    }
                    renderControl511();
                    callback(root3620); return subs__;
                    
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes2581;
                    nodes2581 = node.contents();
                    oldNodes.replaceWith(nodes2581);
                  }));
                  
                  
                }
              };
              renderCond275();
              subs__.addSub(tmp2400.addEventListener('change', function() {
                renderCond275();
              }));
              
              
              var oldNodes = iternode165;
              iternode165 = iternode165.contents();
              oldNodes.replaceWith(iternode165);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list165.addEventListener('change', function() { listSubs__.unsubscribe(); renderList165(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList165(true); }));
        });
      };
      renderList165();
      
      callback(root3617); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2578;
      nodes2578 = node.contents();
      oldNodes.replaceWith(nodes2578);
    }));
    node1301.append(node1302);
    
    var node1303 = $("<div>");
    node1303.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
    
    
    var node1304 = $("<span>");
    node1303.append(node1304);
    var condSubs274 = new mobl.CompSubscription();
    subs__.addSub(condSubs274);
    var oldValue274;
    var renderCond274 = function() {
      var value592 = current.get();
      if(oldValue274 === value592) return;
      oldValue274 = value592;
      var subs__ = condSubs274;
      subs__.unsubscribe();
      node1304.empty();
      if(value592) {
        var nodes2577 = $("<span>");
        node1304.append(nodes2577);
        subs__.addSub(detail.addEventListener('change', function() {
          renderControl509();
        }));
        
        function renderControl509() {
          subs__.addSub((detail.get())(current, function(elements, callback) {
            var root3616 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root3616); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes2577;
            nodes2577 = node.contents();
            oldNodes.replaceWith(nodes2577);
          }));
        }
        renderControl509();
        
        
      } else {
        
        var node1305 = $("<div>");
        node1305.attr('style', "padding:20px");
        
        
        var node1306 = $("<h2>");
        
        
        node1306.append("Add more questions.");
        node1305.append(node1306);
        node1304.append(node1305);
        
        
        
      }
    };
    renderCond274();
    subs__.addSub(current.addEventListener('change', function() {
      renderCond274();
    }));
    
    node1301.append(node1303);
    root3615.append(node1301);
    callback(root3615); return subs__;
    
    
    
    
    
  });
  return subs__;
};
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.section = 'ui__section';
ui.logoStyle = 'ui__logoStyle';
