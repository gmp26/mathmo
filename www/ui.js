mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mathJAX');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root5603 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1799 = $("<span>");
  root5603.append(node1799);
  var condSubs458 = new mobl.CompSubscription();
  subs__.addSub(condSubs458);
  var oldValue458;
  var renderCond458 = function() {
    var value1002 = value.get();
    if(oldValue458 === value1002) return;
    oldValue458 = value1002;
    var subs__ = condSubs458;
    subs__.unsubscribe();
    node1799.empty();
    if(value1002) {
      var nodes4422 = $("<span>");
      node1799.append(nodes4422);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl739();
      }));
      
      function renderControl739() {
        subs__.addSub((elements)(function(elements, callback) {
          var root5604 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5604); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4422;
          nodes4422 = node.contents();
          oldNodes.replaceWith(nodes4422);
        }));
      }
      renderControl739();
      
      
    } else {
      var nodes4423 = $("<span>");
      node1799.append(nodes4423);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5605 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes4424 = $("<span>");
        root5605.append(nodes4424);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root5606 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5606); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4424;
          nodes4424 = node.contents();
          oldNodes.replaceWith(nodes4424);
        }));
        var nodes4425 = $("<span>");
        root5605.append(nodes4425);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root5607 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5607); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4425;
          nodes4425 = node.contents();
          oldNodes.replaceWith(nodes4425);
        }));
        callback(root5605); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4423;
        nodes4423 = node.contents();
        oldNodes.replaceWith(nodes4423);
      }));
      
      
    }
  };
  renderCond458();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond458();
  }));
  
  callback(root5603); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root5608 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1800 = $("<div>");
  
  var ref1681 = mobl.ref(ui.headerStyle);
  if(ref1681.get() !== null) {
    node1800.attr('class', ref1681.get());
    subs__.addSub(ref1681.addEventListener('change', function(_, ref, val) {
      node1800.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1681.rebind());
  
  var val854 = onclick.get();
  if(val854 !== null) {
    subs__.addSub(mobl.domBind(node1800, 'tap', val854));
  }
  
  var ref1682 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref1682.get() !== null) {
    node1800.attr('style', ref1682.get());
    subs__.addSub(ref1682.addEventListener('change', function(_, ref, val) {
      node1800.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node1800.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref1682.rebind());
  
  
  var node1803 = $("<div>");
  
  var ref1680 = mobl.ref(ui.headerContainerStyle);
  if(ref1680.get() !== null) {
    node1803.attr('class', ref1680.get());
    subs__.addSub(ref1680.addEventListener('change', function(_, ref, val) {
      node1803.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1680.rebind());
  
  
  var node1804 = $("<div>");
  
  var ref1678 = text;
  node1804.text(""+ref1678.get());
  var ignore332 = false;
  subs__.addSub(ref1678.addEventListener('change', function(_, ref, val) {
    if(ignore332) return;
    node1804.text(""+val);
  }));
  subs__.addSub(ref1678.rebind());
  
  
  var ref1679 = mobl.ref(ui.headerTextStyle);
  if(ref1679.get() !== null) {
    node1804.attr('class', ref1679.get());
    subs__.addSub(ref1679.addEventListener('change', function(_, ref, val) {
      node1804.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1679.rebind());
  
  node1803.append(node1804);
  node1800.append(node1803);
  var nodes4426 = $("<span>");
  node1800.append(nodes4426);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl740();
  }));
  
  function renderControl740() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5609 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5609); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4426;
      nodes4426 = node.contents();
      oldNodes.replaceWith(nodes4426);
    }));
  }
  renderControl740();
  root5608.append(node1800);
  
  var node1801 = $("<span>");
  root5608.append(node1801);
  var condSubs459 = new mobl.CompSubscription();
  subs__.addSub(condSubs459);
  var oldValue459;
  var renderCond459 = function() {
    var value1003 = fixedPosition.get();
    if(oldValue459 === value1003) return;
    oldValue459 = value1003;
    var subs__ = condSubs459;
    subs__.unsubscribe();
    node1801.empty();
    if(value1003) {
      
      var node1802 = $("<div>");
      node1802.attr('id', "hello");
      node1802.attr('style', "height: 2.9em;");
      
      node1801.append(node1802);
      
      
    } else {
      
    }
  };
  renderCond459();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond459();
  }));
  
  callback(root5608); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root5610 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref1683 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref1683.get() !== null) {
    sp.attr('class', ref1683.get());
    subs__.addSub(ref1683.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1683.rebind());
  
  var val855 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val855 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val855));
  }
  
  var val856 = function(event, callback) {
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
  if(val856 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val856));
  }
  
  var val857 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after261(result__) {
                    var tmp4311 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after261);if(result__ !== undefined) after261(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val857 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val857));
  }
  
  var val858 = function(event, callback) {
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
  if(val858 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val858));
  }
  
  var ref1684 = text;
  sp.text(""+ref1684.get());
  var ignore333 = false;
  subs__.addSub(ref1684.addEventListener('change', function(_, ref, val) {
    if(ignore333) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref1684.rebind());
  
  
  root5610.append(sp);
  callback(root5610); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root5611 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4427 = $("<span>");
  root5611.append(nodes4427);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root5612 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5612); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4427;
    nodes4427 = node.contents();
    oldNodes.replaceWith(nodes4427);
  }));
  callback(root5611); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root5613 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4428 = $("<span>");
  root5613.append(nodes4428);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root5614 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5614); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4428;
    nodes4428 = node.contents();
    oldNodes.replaceWith(nodes4428);
  }));
  callback(root5613); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root5615 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1805 = $("<ul>");
  
  var ref1685 = mobl.ref(ui.groupStyle);
  if(ref1685.get() !== null) {
    node1805.attr('class', ref1685.get());
    subs__.addSub(ref1685.addEventListener('change', function(_, ref, val) {
      node1805.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1685.rebind());
  
  var nodes4429 = $("<span>");
  node1805.append(nodes4429);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl741();
  }));
  
  function renderControl741() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5616 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5616); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4429;
      nodes4429 = node.contents();
      oldNodes.replaceWith(nodes4429);
    }));
  }
  renderControl741();
  root5615.append(node1805);
  callback(root5615); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root5617 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1806 = $("<img>");
  
  var ref1686 = url;
  if(ref1686.get() !== null) {
    node1806.attr('src', ref1686.get());
    subs__.addSub(ref1686.addEventListener('change', function(_, ref, val) {
      node1806.attr('src', val);
    }));
    
  }
  subs__.addSub(ref1686.rebind());
  
  var ref1687 = width;
  if(ref1687.get() !== null) {
    node1806.attr('width', ref1687.get());
    subs__.addSub(ref1687.addEventListener('change', function(_, ref, val) {
      node1806.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1687.rebind());
  
  var ref1688 = height;
  if(ref1688.get() !== null) {
    node1806.attr('height', ref1688.get());
    subs__.addSub(ref1688.addEventListener('change', function(_, ref, val) {
      node1806.attr('height', val);
    }));
    
  }
  subs__.addSub(ref1688.rebind());
  
  var ref1689 = style;
  if(ref1689.get() !== null) {
    node1806.attr('class', ref1689.get());
    subs__.addSub(ref1689.addEventListener('change', function(_, ref, val) {
      node1806.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1689.rebind());
  
  var val859 = onclick.get();
  if(val859 !== null) {
    subs__.addSub(mobl.domBind(node1806, 'tap', val859));
  }
  
  var ref1690 = valign;
  if(ref1690.get() !== null) {
    node1806.attr('valign', ref1690.get());
    subs__.addSub(ref1690.addEventListener('change', function(_, ref, val) {
      node1806.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref1690.rebind());
  
  var ref1691 = align;
  if(ref1691.get() !== null) {
    node1806.attr('align', ref1691.get());
    subs__.addSub(ref1691.addEventListener('change', function(_, ref, val) {
      node1806.attr('align', val);
    }));
    
  }
  subs__.addSub(ref1691.rebind());
  
  root5617.append(node1806);
  callback(root5617); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root5618 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref1692 = mobl.ref(ui.itemStyle);
  if(ref1692.get() !== null) {
    el.attr('class', ref1692.get());
    subs__.addSub(ref1692.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1692.rebind());
  
  var ref1693 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref1693.get() !== null) {
    el.attr('class', ref1693.get());
    subs__.addSub(ref1693.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1693.rebind());
  
  var val860 = onswipe.get();
  if(val860 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val860));
  }
  
  var val861 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp4312 = result__;
                                           function after262(result__) {
                                             var tmp4313 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after262);if(result__ !== undefined) after262(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp4314 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val861 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val861));
  }
  
  var nodes4430 = $("<span>");
  el.append(nodes4430);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl742();
  }));
  
  function renderControl742() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5619 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5619); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4430;
      nodes4430 = node.contents();
      oldNodes.replaceWith(nodes4430);
    }));
  }
  renderControl742();
  root5618.append(el);
  callback(root5618); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root5620 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1807 = $("<input>");
  node1807.attr('type', "checkbox");
  
  var ref1695 = b;
  node1807.attr('checked', !!ref1695.get());
  subs__.addSub(ref1695.addEventListener('change', function(_, ref, val) {
    if(ref === ref1695) node1807.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node1807, 'change', function() {
    b.set(!!node1807.attr('checked'));
  }));
  
  var val863 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val863 !== null) {
    subs__.addSub(mobl.domBind(node1807, 'tap', val863));
  }
  
  var val864 = onchange.get();
  if(val864 !== null) {
    subs__.addSub(mobl.domBind(node1807, 'change', val864));
  }
  
  root5620.append(node1807);
  
  root5620.append(" ");
  
  var node1808 = $("<span>");
  
  var ref1694 = label;
  node1808.text(""+ref1694.get());
  var ignore334 = false;
  subs__.addSub(ref1694.addEventListener('change', function(_, ref, val) {
    if(ignore334) return;
    node1808.text(""+val);
  }));
  subs__.addSub(ref1694.rebind());
  
  
  var val862 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after263(result__) {
                    var tmp4315 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after263);if(result__ !== undefined) after263(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val862 !== null) {
    subs__.addSub(mobl.domBind(node1808, 'tap', val862));
  }
  
  root5620.append(node1808);
  callback(root5620); return subs__;
  
  
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
  var root5621 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1809 = $("<span>");
  root5621.append(node1809);
  var condSubs460 = new mobl.CompSubscription();
  subs__.addSub(condSubs460);
  var oldValue460;
  var renderCond460 = function() {
    var value1004 = label.get();
    if(oldValue460 === value1004) return;
    oldValue460 = value1004;
    var subs__ = condSubs460;
    subs__.unsubscribe();
    node1809.empty();
    if(value1004) {
      var nodes4431 = $("<span>");
      node1809.append(nodes4431);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root5622 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5622); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4431;
        nodes4431 = node.contents();
        oldNodes.replaceWith(nodes4431);
      }));
      
      
    } else {
      
    }
  };
  renderCond460();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond460();
  }));
  
  
  var node1810 = $("<span>");
  root5621.append(node1810);
  var condSubs461 = new mobl.CompSubscription();
  subs__.addSub(condSubs461);
  var oldValue461;
  var renderCond461 = function() {
    var value1005 = validator.get();
    if(oldValue461 === value1005) return;
    oldValue461 = value1005;
    var subs__ = condSubs461;
    subs__.unsubscribe();
    node1810.empty();
    if(value1005) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after267(result__) {
        var tmp4316 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp4317 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node1811 = $("<input>");
        
        var ref1696 = inputType;
        if(ref1696.get() !== null) {
          node1811.attr('type', ref1696.get());
          subs__.addSub(ref1696.addEventListener('change', function(_, ref, val) {
            node1811.attr('type', val);
          }));
          
        }
        subs__.addSub(ref1696.rebind());
        
        var ref1697 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref1697.get() !== null) {
          node1811.attr('class', ref1697.get());
          subs__.addSub(ref1697.addEventListener('change', function(_, ref, val) {
            node1811.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node1811.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node1811.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node1811.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref1697.rebind());
        
        var ref1698 = placeholder;
        if(ref1698.get() !== null) {
          node1811.attr('placeholder', ref1698.get());
          subs__.addSub(ref1698.addEventListener('change', function(_, ref, val) {
            node1811.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref1698.rebind());
        
        var ref1699 = temp;
        node1811.val(""+ref1699.get());
        var ignore335 = false;
        subs__.addSub(ref1699.addEventListener('change', function(_, ref, val) {
          if(ignore335) return;
          node1811.val(""+val);
        }));
        subs__.addSub(ref1699.rebind());
        
        subs__.addSub(mobl.domBind(node1811, 'keyup change', function() {
          ignore335 = true;
          temp.set(mobl.stringTomobl__String(node1811.val()));
          ignore335 = false;
        }));
        
        
        var val865 = onchange.get();
        if(val865 !== null) {
          subs__.addSub(mobl.domBind(node1811, 'change', val865));
        }
        
        var val866 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after264(result__) {
                          var tmp4318 = result__;
                          function after265(result__) {
                            var tmp4319 = result__;
                            var result__ = tmp4319;
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
                          var result__ = validator.get()(temp.get(), after265);if(result__ !== undefined) after265(result__);
                        }
                        var result__ = onkeyup.get()(event, after264);if(result__ !== undefined) after264(result__);
                      } else {
                        {
                          function after266(result__) {
                            var tmp4319 = result__;
                            var result__ = tmp4319;
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
                          var result__ = validator.get()(temp.get(), after266);if(result__ !== undefined) after266(result__);
                        }
                      }
                    };
        if(val866 !== null) {
          subs__.addSub(mobl.domBind(node1811, 'keyup', val866));
        }
        
        var val867 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val867 !== null) {
          subs__.addSub(mobl.domBind(node1811, 'blur', val867));
        }
        
        node1810.append(node1811);
        var nodes4432 = $("<span>");
        node1810.append(nodes4432);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root5623 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5623); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4432;
          nodes4432 = node.contents();
          oldNodes.replaceWith(nodes4432);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after267);if(result__ !== undefined) after267(result__);
    } else {
      
      var node1812 = $("<input>");
      
      var ref1700 = inputType;
      if(ref1700.get() !== null) {
        node1812.attr('type', ref1700.get());
        subs__.addSub(ref1700.addEventListener('change', function(_, ref, val) {
          node1812.attr('type', val);
        }));
        
      }
      subs__.addSub(ref1700.rebind());
      
      var ref1701 = style;
      if(ref1701.get() !== null) {
        node1812.attr('class', ref1701.get());
        subs__.addSub(ref1701.addEventListener('change', function(_, ref, val) {
          node1812.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1701.rebind());
      
      var ref1702 = placeholder;
      if(ref1702.get() !== null) {
        node1812.attr('placeholder', ref1702.get());
        subs__.addSub(ref1702.addEventListener('change', function(_, ref, val) {
          node1812.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1702.rebind());
      
      var ref1703 = s;
      node1812.val(""+ref1703.get());
      var ignore336 = false;
      subs__.addSub(ref1703.addEventListener('change', function(_, ref, val) {
        if(ignore336) return;
        node1812.val(""+val);
      }));
      subs__.addSub(ref1703.rebind());
      
      subs__.addSub(mobl.domBind(node1812, 'keyup change', function() {
        ignore336 = true;
        s.set(mobl.stringTomobl__String(node1812.val()));
        ignore336 = false;
      }));
      
      
      var val868 = onchange.get();
      if(val868 !== null) {
        subs__.addSub(mobl.domBind(node1812, 'change', val868));
      }
      
      var val869 = onkeyup.get();
      if(val869 !== null) {
        subs__.addSub(mobl.domBind(node1812, 'keyup', val869));
      }
      
      var val870 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val870 !== null) {
        subs__.addSub(mobl.domBind(node1812, 'blur', val870));
      }
      
      node1810.append(node1812);
      
      
    }
  };
  renderCond461();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond461();
  }));
  
  callback(root5621); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root5624 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4433 = $("<span>");
  root5624.append(nodes4433);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root5625 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5625); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4433;
    nodes4433 = node.contents();
    oldNodes.replaceWith(nodes4433);
  }));
  callback(root5624); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root5626 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4434 = $("<span>");
  root5626.append(nodes4434);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root5627 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5627); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4434;
    nodes4434 = node.contents();
    oldNodes.replaceWith(nodes4434);
  }));
  callback(root5626); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root5628 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1813 = $("<span>");
  root5628.append(node1813);
  var condSubs462 = new mobl.CompSubscription();
  subs__.addSub(condSubs462);
  var oldValue462;
  var renderCond462 = function() {
    var value1006 = label.get();
    if(oldValue462 === value1006) return;
    oldValue462 = value1006;
    var subs__ = condSubs462;
    subs__.unsubscribe();
    node1813.empty();
    if(value1006) {
      var nodes4435 = $("<span>");
      node1813.append(nodes4435);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root5629 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5629); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4435;
        nodes4435 = node.contents();
        oldNodes.replaceWith(nodes4435);
      }));
      
      
    } else {
      
    }
  };
  renderCond462();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond462();
  }));
  
  
  var node1814 = $("<input>");
  node1814.attr('type', "range");
  
  var ref1704 = n;
  node1814.val(""+ref1704.get());
  var ignore337 = false;
  subs__.addSub(ref1704.addEventListener('change', function(_, ref, val) {
    if(ignore337) return;
    node1814.val(""+val);
  }));
  subs__.addSub(ref1704.rebind());
  
  subs__.addSub(mobl.domBind(node1814, 'keyup change', function() {
    ignore337 = true;
    n.set(mobl.stringTomobl__Num(node1814.val()));
    ignore337 = false;
  }));
  
  
  var ref1705 = min;
  if(ref1705.get() !== null) {
    node1814.attr('min', ref1705.get());
    subs__.addSub(ref1705.addEventListener('change', function(_, ref, val) {
      node1814.attr('min', val);
    }));
    
  }
  subs__.addSub(ref1705.rebind());
  
  var ref1706 = max;
  if(ref1706.get() !== null) {
    node1814.attr('max', ref1706.get());
    subs__.addSub(ref1706.addEventListener('change', function(_, ref, val) {
      node1814.attr('max', val);
    }));
    
  }
  subs__.addSub(ref1706.rebind());
  
  var ref1707 = step;
  if(ref1707.get() !== null) {
    node1814.attr('step', ref1707.get());
    subs__.addSub(ref1707.addEventListener('change', function(_, ref, val) {
      node1814.attr('step', val);
    }));
    
  }
  subs__.addSub(ref1707.rebind());
  node1814.attr('style', "width: 99%;");
  
  var val871 = onchange.get();
  if(val871 !== null) {
    subs__.addSub(mobl.domBind(node1814, 'change', val871));
  }
  
  var val872 = onkeyup.get();
  if(val872 !== null) {
    subs__.addSub(mobl.domBind(node1814, 'keyup', val872));
  }
  
  var ref1708 = placeholder;
  if(ref1708.get() !== null) {
    node1814.attr('placeholder', ref1708.get());
    subs__.addSub(ref1708.addEventListener('change', function(_, ref, val) {
      node1814.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1708.rebind());
  
  root5628.append(node1814);
  callback(root5628); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root5630 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after268(result__) {
      var tmp4320 = result__;
      var result__ = tmp4320;
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
    var result__ = validator.get()(n2, after268);if(result__ !== undefined) after268(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes4436 = $("<span>");
  root5630.append(nodes4436);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root5631 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5631); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4436;
    nodes4436 = node.contents();
    oldNodes.replaceWith(nodes4436);
  }));
  callback(root5630); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root5632 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1815 = $("<span>");
  root5632.append(node1815);
  var condSubs463 = new mobl.CompSubscription();
  subs__.addSub(condSubs463);
  var oldValue463;
  var renderCond463 = function() {
    var value1007 = label.get();
    if(oldValue463 === value1007) return;
    oldValue463 = value1007;
    var subs__ = condSubs463;
    subs__.unsubscribe();
    node1815.empty();
    if(value1007) {
      
      var node1816 = $("<span>");
      node1816.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref1712 = label;
      node1816.text(""+ref1712.get());
      var ignore339 = false;
      subs__.addSub(ref1712.addEventListener('change', function(_, ref, val) {
        if(ignore339) return;
        node1816.text(""+val);
      }));
      subs__.addSub(ref1712.rebind());
      
      
      node1815.append(node1816);
      
      var node1817 = $("<span>");
      node1817.attr('style', "float: left");
      
      
      var node1818 = $("<input>");
      node1818.attr('type', "password");
      
      var ref1709 = style;
      if(ref1709.get() !== null) {
        node1818.attr('class', ref1709.get());
        subs__.addSub(ref1709.addEventListener('change', function(_, ref, val) {
          node1818.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1709.rebind());
      
      var ref1710 = placeholder;
      if(ref1710.get() !== null) {
        node1818.attr('placeholder', ref1710.get());
        subs__.addSub(ref1710.addEventListener('change', function(_, ref, val) {
          node1818.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1710.rebind());
      
      var ref1711 = s;
      node1818.val(""+ref1711.get());
      var ignore338 = false;
      subs__.addSub(ref1711.addEventListener('change', function(_, ref, val) {
        if(ignore338) return;
        node1818.val(""+val);
      }));
      subs__.addSub(ref1711.rebind());
      
      subs__.addSub(mobl.domBind(node1818, 'keyup change', function() {
        ignore338 = true;
        s.set(mobl.stringTomobl__String(node1818.val()));
        ignore338 = false;
      }));
      
      
      var val873 = onchange.get();
      if(val873 !== null) {
        subs__.addSub(mobl.domBind(node1818, 'change', val873));
      }
      
      var val874 = onkeyup.get();
      if(val874 !== null) {
        subs__.addSub(mobl.domBind(node1818, 'keyup', val874));
      }
      
      var val875 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val875 !== null) {
        subs__.addSub(mobl.domBind(node1818, 'blur', val875));
      }
      
      node1817.append(node1818);
      node1815.append(node1817);
      
      
      
      
    } else {
      
      var node1819 = $("<input>");
      node1819.attr('type', "password");
      
      var ref1713 = style;
      if(ref1713.get() !== null) {
        node1819.attr('class', ref1713.get());
        subs__.addSub(ref1713.addEventListener('change', function(_, ref, val) {
          node1819.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1713.rebind());
      
      var ref1714 = placeholder;
      if(ref1714.get() !== null) {
        node1819.attr('placeholder', ref1714.get());
        subs__.addSub(ref1714.addEventListener('change', function(_, ref, val) {
          node1819.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1714.rebind());
      
      var ref1715 = s;
      node1819.val(""+ref1715.get());
      var ignore340 = false;
      subs__.addSub(ref1715.addEventListener('change', function(_, ref, val) {
        if(ignore340) return;
        node1819.val(""+val);
      }));
      subs__.addSub(ref1715.rebind());
      
      subs__.addSub(mobl.domBind(node1819, 'keyup change', function() {
        ignore340 = true;
        s.set(mobl.stringTomobl__String(node1819.val()));
        ignore340 = false;
      }));
      
      
      var val876 = onchange.get();
      if(val876 !== null) {
        subs__.addSub(mobl.domBind(node1819, 'change', val876));
      }
      
      var val877 = onkeyup.get();
      if(val877 !== null) {
        subs__.addSub(mobl.domBind(node1819, 'keyup', val877));
      }
      
      var val878 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val878 !== null) {
        subs__.addSub(mobl.domBind(node1819, 'blur', val878));
      }
      
      node1815.append(node1819);
      
      
    }
  };
  renderCond463();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond463();
  }));
  
  callback(root5632); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root5633 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref1720 = style;
  if(ref1720.get() !== null) {
    sel.attr('class', ref1720.get());
    subs__.addSub(ref1720.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1720.rebind());
  
  var val879 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after269(result__) {
                    var tmp4322 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after269);if(result__ !== undefined) after269(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val879 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val879));
  }
  
  
  var node1820 = mobl.loadingSpan();
  sel.append(node1820);
  var list319;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList319 = function() {
    var subs__ = listSubs__;
    list319 = options.get();
    list319.list(function(results319) {
      node1820.empty();
      for(var i868 = 0; i868 < results319.length; i868++) {
        (function() {
          var iternode319 = $("<span>");
          node1820.append(iternode319);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results319), i868), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results319), i868), "_2");
          
          var node1821 = $("<option>");
          
          var ref1716 = optionDescription;
          node1821.text(""+ref1716.get());
          var ignore341 = false;
          subs__.addSub(ref1716.addEventListener('change', function(_, ref, val) {
            if(ignore341) return;
            node1821.text(""+val);
          }));
          subs__.addSub(ref1716.rebind());
          
          
          var ref1717 = optionStyle;
          if(ref1717.get() !== null) {
            node1821.attr('class', ref1717.get());
            subs__.addSub(ref1717.addEventListener('change', function(_, ref, val) {
              node1821.attr('class', val);
            }));
            
          }
          subs__.addSub(ref1717.rebind());
          
          var ref1718 = optionValue;
          if(ref1718.get() !== null) {
            node1821.attr('value', ref1718.get());
            subs__.addSub(ref1718.addEventListener('change', function(_, ref, val) {
              node1821.attr('value', val);
            }));
            
          }
          subs__.addSub(ref1718.rebind());
          
          var ref1719 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref1719.get() !== null) {
            node1821.attr('selected', ref1719.get());
            subs__.addSub(ref1719.addEventListener('change', function(_, ref, val) {
              node1821.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node1821.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node1821.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref1719.rebind());
          
          iternode319.append(node1821);
          
          var oldNodes = iternode319;
          iternode319 = iternode319.contents();
          oldNodes.replaceWith(iternode319);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list319.addEventListener('change', function() { listSubs__.unsubscribe(); renderList319(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList319(true); }));
    });
  };
  renderList319();
  
  root5633.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root5633); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root5634 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes4437 = $("<span>");
    root5634.append(nodes4437);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root5635 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1822 = mobl.loadingSpan();
      root5635.append(node1822);
      var list320;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList320 = function() {
        var subs__ = listSubs__;
        list320 = tabs.get();
        list320.list(function(results320) {
          node1822.empty();
          for(var i869 = 0; i869 < results320.length; i869++) {
            (function() {
              var iternode320 = $("<span>");
              node1822.append(iternode320);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results320), i869), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results320), i869), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results320), i869), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp4278 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp4278.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp4278.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp4278.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp4278.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp4277 = mobl.ref(result__);
              
              var nodes4438 = $("<span>");
              iternode320.append(nodes4438);
              subs__.addSub((mobl.span)(tmp4278, mobl.ref(null), tmp4277, mobl.ref(null), function(_, callback) {
                var root5636 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes4439 = $("<span>");
                root5636.append(nodes4439);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root5637 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root5637); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4439;
                  nodes4439 = node.contents();
                  oldNodes.replaceWith(nodes4439);
                }));
                callback(root5636); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes4438;
                nodes4438 = node.contents();
                oldNodes.replaceWith(nodes4438);
              }));
              
              var oldNodes = iternode320;
              iternode320 = iternode320.contents();
              oldNodes.replaceWith(iternode320);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list320.addEventListener('change', function() { listSubs__.unsubscribe(); renderList320(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList320(true); }));
        });
      };
      renderList320();
      
      callback(root5635); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4437;
      nodes4437 = node.contents();
      oldNodes.replaceWith(nodes4437);
    }));
    
    var node1823 = mobl.loadingSpan();
    root5634.append(node1823);
    var list321;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList321 = function() {
      var subs__ = listSubs__;
      list321 = tabs.get();
      list321.list(function(results321) {
        node1823.empty();
        for(var i870 = 0; i870 < results321.length; i870++) {
          (function() {
            var iternode321 = $("<span>");
            node1823.append(iternode321);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results321), i870), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results321), i870), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results321), i870), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp4279 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp4279.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp4279.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp4279.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp4279.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes4440 = $("<span>");
            iternode321.append(nodes4440);
            subs__.addSub((mobl.block)(tmp4279, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root5638 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes4441 = $("<span>");
              root5638.append(nodes4441);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root5639 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes4442 = $("<span>");
                root5639.append(nodes4442);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl743();
                }));
                
                function renderControl743() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root5640 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root5640); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes4442;
                    nodes4442 = node.contents();
                    oldNodes.replaceWith(nodes4442);
                  }));
                }
                renderControl743();
                callback(root5639); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes4441;
                nodes4441 = node.contents();
                oldNodes.replaceWith(nodes4441);
              }));
              callback(root5638); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4440;
              nodes4440 = node.contents();
              oldNodes.replaceWith(nodes4440);
            }));
            
            var oldNodes = iternode321;
            iternode321 = iternode321.contents();
            oldNodes.replaceWith(iternode321);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list321.addEventListener('change', function() { listSubs__.unsubscribe(); renderList321(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList321(true); }));
      });
    };
    renderList321();
    
    callback(root5634); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes4437 = $("<span>");
      root5634.append(nodes4437);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5635 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1822 = mobl.loadingSpan();
        root5635.append(node1822);
        var list320;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList320 = function() {
          var subs__ = listSubs__;
          list320 = tabs.get();
          list320.list(function(results320) {
            node1822.empty();
            for(var i869 = 0; i869 < results320.length; i869++) {
              (function() {
                var iternode320 = $("<span>");
                node1822.append(iternode320);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results320), i869), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results320), i869), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results320), i869), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp4278 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp4278.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp4278.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp4278.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp4278.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp4277 = mobl.ref(result__);
                
                var nodes4438 = $("<span>");
                iternode320.append(nodes4438);
                subs__.addSub((mobl.span)(tmp4278, mobl.ref(null), tmp4277, mobl.ref(null), function(_, callback) {
                  var root5636 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4439 = $("<span>");
                  root5636.append(nodes4439);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root5637 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root5637); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes4439;
                    nodes4439 = node.contents();
                    oldNodes.replaceWith(nodes4439);
                  }));
                  callback(root5636); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4438;
                  nodes4438 = node.contents();
                  oldNodes.replaceWith(nodes4438);
                }));
                
                var oldNodes = iternode320;
                iternode320 = iternode320.contents();
                oldNodes.replaceWith(iternode320);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list320.addEventListener('change', function() { listSubs__.unsubscribe(); renderList320(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList320(true); }));
          });
        };
        renderList320();
        
        callback(root5635); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4437;
        nodes4437 = node.contents();
        oldNodes.replaceWith(nodes4437);
      }));
      
      var node1823 = mobl.loadingSpan();
      root5634.append(node1823);
      var list321;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList321 = function() {
        var subs__ = listSubs__;
        list321 = tabs.get();
        list321.list(function(results321) {
          node1823.empty();
          for(var i870 = 0; i870 < results321.length; i870++) {
            (function() {
              var iternode321 = $("<span>");
              node1823.append(iternode321);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results321), i870), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results321), i870), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results321), i870), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp4279 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp4279.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp4279.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp4279.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp4279.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes4440 = $("<span>");
              iternode321.append(nodes4440);
              subs__.addSub((mobl.block)(tmp4279, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root5638 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes4441 = $("<span>");
                root5638.append(nodes4441);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root5639 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4442 = $("<span>");
                  root5639.append(nodes4442);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl743();
                  }));
                  
                  function renderControl743() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root5640 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root5640); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4442;
                      nodes4442 = node.contents();
                      oldNodes.replaceWith(nodes4442);
                    }));
                  }
                  renderControl743();
                  callback(root5639); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4441;
                  nodes4441 = node.contents();
                  oldNodes.replaceWith(nodes4441);
                }));
                callback(root5638); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes4440;
                nodes4440 = node.contents();
                oldNodes.replaceWith(nodes4440);
              }));
              
              var oldNodes = iternode321;
              iternode321 = iternode321.contents();
              oldNodes.replaceWith(iternode321);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list321.addEventListener('change', function() { listSubs__.unsubscribe(); renderList321(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList321(true); }));
        });
      };
      renderList321();
      
      callback(root5634); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root5641 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1824 = $("<div>");
  
  var ref1724 = mobl.ref(ui.searchboxStyle);
  if(ref1724.get() !== null) {
    node1824.attr('class', ref1724.get());
    subs__.addSub(ref1724.addEventListener('change', function(_, ref, val) {
      node1824.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1724.rebind());
  
  
  var node1825 = $("<input>");
  node1825.attr('type', "search");
  
  var ref1721 = mobl.ref(ui.searchBoxInputStyle);
  if(ref1721.get() !== null) {
    node1825.attr('class', ref1721.get());
    subs__.addSub(ref1721.addEventListener('change', function(_, ref, val) {
      node1825.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1721.rebind());
  
  var ref1722 = placeholder;
  if(ref1722.get() !== null) {
    node1825.attr('placeholder', ref1722.get());
    subs__.addSub(ref1722.addEventListener('change', function(_, ref, val) {
      node1825.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1722.rebind());
  
  var ref1723 = s;
  node1825.val(""+ref1723.get());
  var ignore342 = false;
  subs__.addSub(ref1723.addEventListener('change', function(_, ref, val) {
    if(ignore342) return;
    node1825.val(""+val);
  }));
  subs__.addSub(ref1723.rebind());
  
  subs__.addSub(mobl.domBind(node1825, 'keyup change', function() {
    ignore342 = true;
    s.set(mobl.stringTomobl__String(node1825.val()));
    ignore342 = false;
  }));
  
  
  var val880 = onsearch.get();
  if(val880 !== null) {
    subs__.addSub(mobl.domBind(node1825, 'change', val880));
  }
  
  var val881 = onkeyup.get();
  if(val881 !== null) {
    subs__.addSub(mobl.domBind(node1825, 'keyup', val881));
  }
  node1825.attr('autocorrect', false);
  node1825.attr('autocapitalize', false);
  node1825.attr('autocomplete', false);
  
  node1824.append(node1825);
  root5641.append(node1824);
  callback(root5641); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root5642 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref1725 = mobl.ref(ui.contextMenuStyle);
  if(ref1725.get() !== null) {
    menu.attr('class', ref1725.get());
    subs__.addSub(ref1725.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1725.rebind());
  
  var nodes4443 = $("<span>");
  menu.append(nodes4443);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl744();
  }));
  
  function renderControl744() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5643 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5643); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4443;
      nodes4443 = node.contents();
      oldNodes.replaceWith(nodes4443);
    }));
  }
  renderControl744();
  root5642.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val882 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp4325 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val882 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val882));
  }
  
  root5642.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root5642); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root5644 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp4309 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp4309.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node1826 = $("<span>");
  root5644.append(node1826);
  var condSubs464 = new mobl.CompSubscription();
  subs__.addSub(condSubs464);
  var oldValue464;
  var renderCond464 = function() {
    var value1008 = tmp4309.get();
    if(oldValue464 === value1008) return;
    oldValue464 = value1008;
    var subs__ = condSubs464;
    subs__.unsubscribe();
    node1826.empty();
    if(value1008) {
      items.get().one(function(result__) {
        var tmp4326 = result__;
        var current = mobl.ref(result__);
        
        var node1827 = $("<div>");
        node1827.attr('width', "100%");
        
        
        var node1828 = $("<div>");
        node1828.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes4446 = $("<span>");
        node1828.append(nodes4446);
        subs__.addSub((ui.group)(function(_, callback) {
          var root5647 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node1831 = mobl.loadingSpan();
          root5647.append(node1831);
          var list322;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList322 = function() {
            var subs__ = listSubs__;
            list322 = items.get();
            list322.list(function(results322) {
              node1831.empty();
              for(var i871 = 0; i871 < results322.length; i871++) {
                (function() {
                  var iternode322 = $("<span>");
                  node1831.append(iternode322);
                  var it;
                  it = mobl.ref(mobl.ref(results322), i871);
                  var result__ = it.get() == current.get();
                  var tmp4285 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp4285.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp4285.set(it.get() == current.get());
                  }));
                  
                  
                  var node1832 = $("<span>");
                  iternode322.append(node1832);
                  var condSubs466 = new mobl.CompSubscription();
                  subs__.addSub(condSubs466);
                  var oldValue466;
                  var renderCond466 = function() {
                    var value1010 = tmp4285.get();
                    if(oldValue466 === value1010) return;
                    oldValue466 = value1010;
                    var subs__ = condSubs466;
                    subs__.unsubscribe();
                    node1832.empty();
                    if(value1010) {
                      var nodes4447 = $("<span>");
                      node1832.append(nodes4447);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root5648 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes4448 = $("<span>");
                        root5648.append(nodes4448);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl746();
                        }));
                        
                        function renderControl746() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root5649 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root5649); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes4448;
                            nodes4448 = node.contents();
                            oldNodes.replaceWith(nodes4448);
                          }));
                        }
                        renderControl746();
                        callback(root5648); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes4447;
                        nodes4447 = node.contents();
                        oldNodes.replaceWith(nodes4447);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp4284 = mobl.ref(result__);
                      
                      var nodes4449 = $("<span>");
                      node1832.append(nodes4449);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4284, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root5650 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes4450 = $("<span>");
                        root5650.append(nodes4450);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl747();
                        }));
                        
                        function renderControl747() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root5651 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root5651); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes4450;
                            nodes4450 = node.contents();
                            oldNodes.replaceWith(nodes4450);
                          }));
                        }
                        renderControl747();
                        callback(root5650); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes4449;
                        nodes4449 = node.contents();
                        oldNodes.replaceWith(nodes4449);
                      }));
                      
                      
                    }
                  };
                  renderCond466();
                  subs__.addSub(tmp4285.addEventListener('change', function() {
                    renderCond466();
                  }));
                  
                  
                  var oldNodes = iternode322;
                  iternode322 = iternode322.contents();
                  oldNodes.replaceWith(iternode322);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list322.addEventListener('change', function() { listSubs__.unsubscribe(); renderList322(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList322(true); }));
            });
          };
          renderList322();
          
          callback(root5647); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes4446;
          nodes4446 = node.contents();
          oldNodes.replaceWith(nodes4446);
        }));
        node1827.append(node1828);
        
        var node1829 = $("<div>");
        node1829.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node1830 = $("<span>");
        node1829.append(node1830);
        var condSubs465 = new mobl.CompSubscription();
        subs__.addSub(condSubs465);
        var oldValue465;
        var renderCond465 = function() {
          var value1009 = current.get();
          if(oldValue465 === value1009) return;
          oldValue465 = value1009;
          var subs__ = condSubs465;
          subs__.unsubscribe();
          node1830.empty();
          if(value1009) {
            var nodes4444 = $("<span>");
            node1830.append(nodes4444);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl745();
            }));
            
            function renderControl745() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root5645 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5645); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4444;
                nodes4444 = node.contents();
                oldNodes.replaceWith(nodes4444);
              }));
            }
            renderControl745();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp4286 = mobl.ref(result__);
            
            var nodes4445 = $("<span>");
            node1830.append(nodes4445);
            subs__.addSub((mobl.label)(tmp4286, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root5646 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root5646); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes4445;
              nodes4445 = node.contents();
              oldNodes.replaceWith(nodes4445);
            }));
            
            
          }
        };
        renderCond465();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond465();
        }));
        
        node1827.append(node1829);
        node1826.append(node1827);
        
        
        
        
        
        
      });
    } else {
      var nodes4451 = $("<span>");
      node1826.append(nodes4451);
      subs__.addSub((ui.group)(function(_, callback) {
        var root5652 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1833 = mobl.loadingSpan();
        root5652.append(node1833);
        var list323;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList323 = function() {
          var subs__ = listSubs__;
          list323 = items.get();
          list323.list(function(results323) {
            node1833.empty();
            for(var i872 = 0; i872 < results323.length; i872++) {
              (function() {
                var iternode323 = $("<span>");
                node1833.append(iternode323);
                var it;
                it = mobl.ref(mobl.ref(results323), i872);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp4327 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp4280 = mobl.ref(result__);
                
                var nodes4452 = $("<span>");
                iternode323.append(nodes4452);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4280, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root5653 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4453 = $("<span>");
                  root5653.append(nodes4453);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl748();
                  }));
                  
                  function renderControl748() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root5654 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root5654); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4453;
                      nodes4453 = node.contents();
                      oldNodes.replaceWith(nodes4453);
                    }));
                  }
                  renderControl748();
                  callback(root5653); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4452;
                  nodes4452 = node.contents();
                  oldNodes.replaceWith(nodes4452);
                }));
                
                var oldNodes = iternode323;
                iternode323 = iternode323.contents();
                oldNodes.replaceWith(iternode323);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list323.addEventListener('change', function() { listSubs__.unsubscribe(); renderList323(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList323(true); }));
          });
        };
        renderList323();
        
        callback(root5652); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4451;
        nodes4451 = node.contents();
        oldNodes.replaceWith(nodes4451);
      }));
      
      
    }
  };
  renderCond464();
  subs__.addSub(tmp4309.addEventListener('change', function() {
    renderCond464();
  }));
  
  callback(root5644); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root5655 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp4283 = mobl.ref(result__);
  
  var nodes4454 = $("<span>");
  root5655.append(nodes4454);
  subs__.addSub((ui.header)(tmp4283, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root5656 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp4282 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp4281 = mobl.ref(result__);
    
    var nodes4455 = $("<span>");
    root5656.append(nodes4455);
    subs__.addSub((ui.backButton)(tmp4281, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp4282, function(_, callback) {
      var root5657 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5657); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4455;
      nodes4455 = node.contents();
      oldNodes.replaceWith(nodes4455);
    }));
    callback(root5656); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4454;
    nodes4454 = node.contents();
    oldNodes.replaceWith(nodes4454);
  }));
  var nodes4456 = $("<span>");
  root5655.append(nodes4456);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl749();
  }));
  
  function renderControl749() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root5658 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5658); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4456;
      nodes4456 = node.contents();
      oldNodes.replaceWith(nodes4456);
    }));
  }
  renderControl749();
  callback(root5655); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root5659 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes4457 = $("<span>");
  root5659.append(nodes4457);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5660 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1834 = mobl.loadingSpan();
    root5660.append(node1834);
    var list324;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList324 = function() {
      var subs__ = listSubs__;
      list324 = coll.get();
      list324.list(function(results324) {
        node1834.empty();
        for(var i873 = 0; i873 < results324.length; i873++) {
          (function() {
            var iternode324 = $("<span>");
            node1834.append(iternode324);
            var it;
            it = mobl.ref(mobl.ref(results324), i873);
            var result__ = it.get() == selected.get();
            var tmp4288 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp4288.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp4288.set(it.get() == selected.get());
            }));
            
            
            var node1835 = $("<span>");
            iternode324.append(node1835);
            var condSubs467 = new mobl.CompSubscription();
            subs__.addSub(condSubs467);
            var oldValue467;
            var renderCond467 = function() {
              var value1011 = tmp4288.get();
              if(oldValue467 === value1011) return;
              oldValue467 = value1011;
              var subs__ = condSubs467;
              subs__.unsubscribe();
              node1835.empty();
              if(value1011) {
                var nodes4458 = $("<span>");
                node1835.append(nodes4458);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root5661 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4459 = $("<span>");
                  root5661.append(nodes4459);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl750();
                  }));
                  
                  function renderControl750() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root5662 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root5662); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4459;
                      nodes4459 = node.contents();
                      oldNodes.replaceWith(nodes4459);
                    }));
                  }
                  renderControl750();
                  callback(root5661); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4458;
                  nodes4458 = node.contents();
                  oldNodes.replaceWith(nodes4458);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp4287 = mobl.ref(result__);
                
                var nodes4460 = $("<span>");
                node1835.append(nodes4460);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4287, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root5663 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4461 = $("<span>");
                  root5663.append(nodes4461);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl751();
                  }));
                  
                  function renderControl751() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root5664 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root5664); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4461;
                      nodes4461 = node.contents();
                      oldNodes.replaceWith(nodes4461);
                    }));
                  }
                  renderControl751();
                  callback(root5663); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4460;
                  nodes4460 = node.contents();
                  oldNodes.replaceWith(nodes4460);
                }));
                
                
              }
            };
            renderCond467();
            subs__.addSub(tmp4288.addEventListener('change', function() {
              renderCond467();
            }));
            
            
            var oldNodes = iternode324;
            iternode324 = iternode324.contents();
            oldNodes.replaceWith(iternode324);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list324.addEventListener('change', function() { listSubs__.unsubscribe(); renderList324(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList324(true); }));
      });
    };
    renderList324();
    
    callback(root5660); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4457;
    nodes4457 = node.contents();
    oldNodes.replaceWith(nodes4457);
  }));
  callback(root5659); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root5665 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp4328 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp4289 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp4289.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp4289.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp4289.set(coll.get().limit(n.get()));
    }));
    
    
    var node1836 = mobl.loadingSpan();
    root5665.append(node1836);
    var list325;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList325 = function() {
      var subs__ = listSubs__;
      list325 = tmp4289.get();
      list325.list(function(results325) {
        node1836.empty();
        for(var i874 = 0; i874 < results325.length; i874++) {
          (function() {
            var iternode325 = $("<span>");
            node1836.append(iternode325);
            var it;
            it = mobl.ref(mobl.ref(results325), i874);
            var nodes4462 = $("<span>");
            iternode325.append(nodes4462);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl752();
            }));
            
            function renderControl752() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root5666 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5666); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4462;
                nodes4462 = node.contents();
                oldNodes.replaceWith(nodes4462);
              }));
            }
            renderControl752();
            
            var oldNodes = iternode325;
            iternode325 = iternode325.contents();
            oldNodes.replaceWith(iternode325);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list325.addEventListener('change', function() { listSubs__.unsubscribe(); renderList325(true); }));
        subs__.addSub(tmp4289.addEventListener('change', function() { listSubs__.unsubscribe(); renderList325(true); }));
      });
    };
    renderList325();
    
    var result__ = n.get() < total.get();
    var tmp4291 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp4291.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp4291.set(n.get() < total.get());
    }));
    
    
    var node1837 = $("<span>");
    root5665.append(node1837);
    var condSubs468 = new mobl.CompSubscription();
    subs__.addSub(condSubs468);
    var oldValue468;
    var renderCond468 = function() {
      var value1012 = tmp4291.get();
      if(oldValue468 === value1012) return;
      oldValue468 = value1012;
      var subs__ = condSubs468;
      subs__.unsubscribe();
      node1837.empty();
      if(value1012) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp4290 = mobl.ref(result__);
        
        var nodes4463 = $("<span>");
        node1837.append(nodes4463);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp4290, mobl.ref(null), function(_, callback) {
          var root5667 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes4464 = $("<span>");
          root5667.append(nodes4464);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root5668 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root5668); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes4464;
            nodes4464 = node.contents();
            oldNodes.replaceWith(nodes4464);
          }));
          callback(root5667); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes4463;
          nodes4463 = node.contents();
          oldNodes.replaceWith(nodes4463);
        }));
        
        
      } else {
        
      }
    };
    renderCond468();
    subs__.addSub(tmp4291.addEventListener('change', function() {
      renderCond468();
    }));
    
    callback(root5665); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root5669 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4465 = $("<span>");
  root5669.append(nodes4465);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5670 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1838 = mobl.loadingSpan();
    root5670.append(node1838);
    var list326;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList326 = function() {
      var subs__ = listSubs__;
      list326 = items.get();
      list326.list(function(results326) {
        node1838.empty();
        for(var i875 = 0; i875 < results326.length; i875++) {
          (function() {
            var iternode326 = $("<span>");
            node1838.append(iternode326);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results326), i875), "_1");it = mobl.ref(mobl.ref(mobl.ref(results326), i875), "_2");
            var nodes4466 = $("<span>");
            iternode326.append(nodes4466);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root5671 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes4467 = $("<span>");
              root5671.append(nodes4467);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root5672 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5672); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4467;
                nodes4467 = node.contents();
                oldNodes.replaceWith(nodes4467);
              }));
              callback(root5671); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4466;
              nodes4466 = node.contents();
              oldNodes.replaceWith(nodes4466);
            }));
            
            var oldNodes = iternode326;
            iternode326 = iternode326.contents();
            oldNodes.replaceWith(iternode326);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list326.addEventListener('change', function() { listSubs__.unsubscribe(); renderList326(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList326(true); }));
      });
    };
    renderList326();
    
    callback(root5670); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4465;
    nodes4465 = node.contents();
    oldNodes.replaceWith(nodes4465);
  }));
  callback(root5669); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root5673 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll982) {
    coll982 = coll982.reverse();
    function processOne166() {
      var it;
      it = coll982.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll982.length > 0) processOne166(); else rest166();
      
    }
    function rest166() {
      var nodes4468 = $("<span>");
      root5673.append(nodes4468);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root5674 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp4292 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp4293 = mobl.ref(result__);
        
        var nodes4469 = $("<span>");
        root5674.append(nodes4469);
        subs__.addSub((ui.backButton)(tmp4293, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp4292, function(_, callback) {
          var root5675 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5675); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4469;
          nodes4469 = node.contents();
          oldNodes.replaceWith(nodes4469);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll981) {
                           coll981 = coll981.reverse();
                           function processOne165() {
                             var checked;var it;
                             var tmp4330 = coll981.pop();
                             checked = tmp4330._1;it = tmp4330._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll981.length > 0) processOne165(); else rest165();
                               
                             } else {
                               {
                                 
                                 if(coll981.length > 0) processOne165(); else rest165();
                                 
                               }
                             }
                           }
                           function rest165() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll981.length > 0) processOne165(); else rest165();
                         });
                         
                       };
        var tmp4294 = mobl.ref(result__);
        
        var nodes4470 = $("<span>");
        root5674.append(nodes4470);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp4294, function(_, callback) {
          var root5676 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5676); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4470;
          nodes4470 = node.contents();
          oldNodes.replaceWith(nodes4470);
        }));
        callback(root5674); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4468;
        nodes4468 = node.contents();
        oldNodes.replaceWith(nodes4468);
      }));
      var nodes4471 = $("<span>");
      root5673.append(nodes4471);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root5677 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5677); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4471;
        nodes4471 = node.contents();
        oldNodes.replaceWith(nodes4471);
      }));
      callback(root5673); return subs__;
      
      
    }
    if(coll982.length > 0) processOne166(); else rest166();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root5678 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes4472 = $("<span>");
  root5678.append(nodes4472);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root5679 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5679); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4472;
    nodes4472 = node.contents();
    oldNodes.replaceWith(nodes4472);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp4295 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp4295.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp4295.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp4295.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp4295.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp4295.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes4473 = $("<span>");
  root5678.append(nodes4473);
  subs__.addSub((ui.masterDetail)(tmp4295, masterItem, detailItem, function(_, callback) {
    var root5680 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5680); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4473;
    nodes4473 = node.contents();
    oldNodes.replaceWith(nodes4473);
  }));
  callback(root5678); return subs__;
  
  
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
  var root5681 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes4474 = $("<span>");
  root5681.append(nodes4474);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root5682 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1839 = mobl.loadingSpan();
    root5682.append(node1839);
    var list327;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList327 = function() {
      var subs__ = listSubs__;
      list327 = sections.get();
      list327.list(function(results327) {
        node1839.empty();
        for(var i876 = 0; i876 < results327.length; i876++) {
          (function() {
            var iternode327 = $("<span>");
            node1839.append(iternode327);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results327), i876), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results327), i876), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp4297 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp4297.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp4297.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp4297.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp4297.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp4296 = mobl.ref(result__);
            
            var nodes4475 = $("<span>");
            iternode327.append(nodes4475);
            subs__.addSub((mobl.span)(tmp4297, mobl.ref(null), tmp4296, mobl.ref(null), function(_, callback) {
              var root5683 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes4476 = $("<span>");
              root5683.append(nodes4476);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root5684 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5684); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4476;
                nodes4476 = node.contents();
                oldNodes.replaceWith(nodes4476);
              }));
              callback(root5683); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4475;
              nodes4475 = node.contents();
              oldNodes.replaceWith(nodes4475);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp4298 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp4298.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp4298.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp4298.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp4298.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes4477 = $("<span>");
            iternode327.append(nodes4477);
            subs__.addSub((mobl.block)(tmp4298, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root5685 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes4478 = $("<span>");
              root5685.append(nodes4478);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl753();
              }));
              
              function renderControl753() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root5686 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root5686); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4478;
                  nodes4478 = node.contents();
                  oldNodes.replaceWith(nodes4478);
                }));
              }
              renderControl753();
              callback(root5685); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4477;
              nodes4477 = node.contents();
              oldNodes.replaceWith(nodes4477);
            }));
            
            var oldNodes = iternode327;
            iternode327 = iternode327.contents();
            oldNodes.replaceWith(iternode327);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list327.addEventListener('change', function() { listSubs__.unsubscribe(); renderList327(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList327(true); }));
      });
    };
    renderList327();
    
    callback(root5682); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4474;
    nodes4474 = node.contents();
    oldNodes.replaceWith(nodes4474);
  }));
  callback(root5681); return subs__;
  
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
  var root5687 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1840 = $("<table>");
  
  var ref1726 = style;
  if(ref1726.get() !== null) {
    node1840.attr('class', ref1726.get());
    subs__.addSub(ref1726.addEventListener('change', function(_, ref, val) {
      node1840.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1726.rebind());
  
  var nodes4479 = $("<span>");
  node1840.append(nodes4479);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl754();
  }));
  
  function renderControl754() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5688 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5688); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4479;
      nodes4479 = node.contents();
      oldNodes.replaceWith(nodes4479);
    }));
  }
  renderControl754();
  root5687.append(node1840);
  callback(root5687); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root5689 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1841 = $("<tr>");
  
  var ref1727 = style;
  if(ref1727.get() !== null) {
    node1841.attr('class', ref1727.get());
    subs__.addSub(ref1727.addEventListener('change', function(_, ref, val) {
      node1841.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1727.rebind());
  
  var nodes4480 = $("<span>");
  node1841.append(nodes4480);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl755();
  }));
  
  function renderControl755() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5690 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5690); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4480;
      nodes4480 = node.contents();
      oldNodes.replaceWith(nodes4480);
    }));
  }
  renderControl755();
  root5689.append(node1841);
  callback(root5689); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root5691 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1842 = $("<td>");
  
  var ref1728 = width;
  if(ref1728.get() !== null) {
    node1842.attr('width', ref1728.get());
    subs__.addSub(ref1728.addEventListener('change', function(_, ref, val) {
      node1842.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1728.rebind());
  
  var ref1729 = style;
  if(ref1729.get() !== null) {
    node1842.attr('class', ref1729.get());
    subs__.addSub(ref1729.addEventListener('change', function(_, ref, val) {
      node1842.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1729.rebind());
  
  var nodes4481 = $("<span>");
  node1842.append(nodes4481);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl756();
  }));
  
  function renderControl756() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5692 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5692); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4481;
      nodes4481 = node.contents();
      oldNodes.replaceWith(nodes4481);
    }));
  }
  renderControl756();
  root5691.append(node1842);
  callback(root5691); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root5693 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1843 = $("<td>");
  
  var ref1730 = width;
  if(ref1730.get() !== null) {
    node1843.attr('width', ref1730.get());
    subs__.addSub(ref1730.addEventListener('change', function(_, ref, val) {
      node1843.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1730.rebind());
  
  var ref1731 = style;
  if(ref1731.get() !== null) {
    node1843.attr('class', ref1731.get());
    subs__.addSub(ref1731.addEventListener('change', function(_, ref, val) {
      node1843.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1731.rebind());
  
  var nodes4482 = $("<span>");
  node1843.append(nodes4482);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl757();
  }));
  
  function renderControl757() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5694 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5694); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4482;
      nodes4482 = node.contents();
      oldNodes.replaceWith(nodes4482);
    }));
  }
  renderControl757();
  root5693.append(node1843);
  callback(root5693); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root5695 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1844 = $("<td>");
  
  var ref1732 = width;
  if(ref1732.get() !== null) {
    node1844.attr('width', ref1732.get());
    subs__.addSub(ref1732.addEventListener('change', function(_, ref, val) {
      node1844.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1732.rebind());
  
  var ref1733 = style;
  if(ref1733.get() !== null) {
    node1844.attr('class', ref1733.get());
    subs__.addSub(ref1733.addEventListener('change', function(_, ref, val) {
      node1844.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1733.rebind());
  
  
  var node1845 = $("<strong>");
  
  var nodes4483 = $("<span>");
  node1845.append(nodes4483);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl758();
  }));
  
  function renderControl758() {
    subs__.addSub((elements)(function(elements, callback) {
      var root5696 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5696); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4483;
      nodes4483 = node.contents();
      oldNodes.replaceWith(nodes4483);
    }));
  }
  renderControl758();
  node1844.append(node1845);
  root5695.append(node1844);
  callback(root5695); return subs__;
  
  
  
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
  items.list(function(coll983) {
    coll983 = coll983.reverse();
    function processOne167() {
      var item;
      item = coll983.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll983.length > 0) processOne167(); else rest167();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll983.length > 0) processOne167(); else rest167();
          
        }
      }
    }
    function rest167() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll983.length > 0) processOne167(); else rest167();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root5697 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp4310 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp4310.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node1846 = $("<span>");
  root5697.append(node1846);
  var condSubs469 = new mobl.CompSubscription();
  subs__.addSub(condSubs469);
  var oldValue469;
  var renderCond469 = function() {
    var value1013 = tmp4310.get();
    if(oldValue469 === value1013) return;
    oldValue469 = value1013;
    var subs__ = condSubs469;
    subs__.unsubscribe();
    node1846.empty();
    if(value1013) {
      items.get().one(function(result__) {
        var tmp4332 = result__;
        var current = mobl.ref(result__);
        
        var node1847 = $("<div>");
        node1847.attr('width', "100%");
        
        
        var node1848 = $("<div>");
        node1848.attr('style', "float:left; width:45%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes4485 = $("<span>");
        node1848.append(nodes4485);
        subs__.addSub((ui.group)(function(_, callback) {
          var root5699 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node1853 = mobl.loadingSpan();
          root5699.append(node1853);
          var list328;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList328 = function() {
            var subs__ = listSubs__;
            list328 = items.get();
            list328.list(function(results328) {
              node1853.empty();
              for(var i877 = 0; i877 < results328.length; i877++) {
                (function() {
                  var iternode328 = $("<span>");
                  node1853.append(iternode328);
                  var it;
                  it = mobl.ref(mobl.ref(results328), i877);
                  var result__ = it.get() == current.get();
                  var tmp4307 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp4307.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp4307.set(it.get() == current.get());
                  }));
                  
                  
                  var node1854 = $("<span>");
                  iternode328.append(node1854);
                  var condSubs471 = new mobl.CompSubscription();
                  subs__.addSub(condSubs471);
                  var oldValue471;
                  var renderCond471 = function() {
                    var value1015 = tmp4307.get();
                    if(oldValue471 === value1015) return;
                    oldValue471 = value1015;
                    var subs__ = condSubs471;
                    subs__.unsubscribe();
                    node1854.empty();
                    if(value1015) {
                      var nodes4486 = $("<span>");
                      node1854.append(nodes4486);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root5700 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp4335 = result__;
                          var tmp4304 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp4333 = result__;
                              var result__ = tmp4333;
                              tmp4304.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp4334 = result__;
                              var result__ = tmp4334;
                              tmp4304.set(result__);
                              
                            });
                          }));
                          
                          var nodes4487 = $("<span>");
                          root5700.append(nodes4487);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl760();
                          }));
                          
                          function renderControl760() {
                            subs__.addSub((masterItem.get())(it, tmp4304, function(elements, callback) {
                              var root5701 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root5701); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes4487;
                              nodes4487 = node.contents();
                              oldNodes.replaceWith(nodes4487);
                            }));
                          }
                          renderControl760();
                          callback(root5700); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes4486;
                        nodes4486 = node.contents();
                        oldNodes.replaceWith(nodes4486);
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
                      var tmp4306 = mobl.ref(result__);
                      
                      var nodes4488 = $("<span>");
                      node1854.append(nodes4488);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4306, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root5702 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp4338 = result__;
                          var tmp4305 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp4336 = result__;
                              var result__ = tmp4336;
                              tmp4305.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp4337 = result__;
                              var result__ = tmp4337;
                              tmp4305.set(result__);
                              
                            });
                          }));
                          
                          var nodes4489 = $("<span>");
                          root5702.append(nodes4489);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl761();
                          }));
                          
                          function renderControl761() {
                            subs__.addSub((masterItem.get())(it, tmp4305, function(elements, callback) {
                              var root5703 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root5703); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes4489;
                              nodes4489 = node.contents();
                              oldNodes.replaceWith(nodes4489);
                            }));
                          }
                          renderControl761();
                          callback(root5702); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes4488;
                        nodes4488 = node.contents();
                        oldNodes.replaceWith(nodes4488);
                      }));
                      
                      
                    }
                  };
                  renderCond471();
                  subs__.addSub(tmp4307.addEventListener('change', function() {
                    renderCond471();
                  }));
                  
                  
                  var oldNodes = iternode328;
                  iternode328 = iternode328.contents();
                  oldNodes.replaceWith(iternode328);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list328.addEventListener('change', function() { listSubs__.unsubscribe(); renderList328(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList328(true); }));
            });
          };
          renderList328();
          
          callback(root5699); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes4485;
          nodes4485 = node.contents();
          oldNodes.replaceWith(nodes4485);
        }));
        node1847.append(node1848);
        
        var node1849 = $("<div>");
        node1849.attr('style', "float:left; width:54%; position:relative; margin-left: 1%;");
        
        var result__ = current.get() && ui.visible.get();
        var tmp4308 = mobl.ref(result__);
        subs__.addSub(current.addEventListener('change', function() {
          tmp4308.set(current.get() && ui.visible.get());
        }));
        subs__.addSub(ui.visible.addEventListener('change', function() {
          tmp4308.set(current.get() && ui.visible.get());
        }));
        
        
        var node1850 = $("<span>");
        node1849.append(node1850);
        var condSubs470 = new mobl.CompSubscription();
        subs__.addSub(condSubs470);
        var oldValue470;
        var renderCond470 = function() {
          var value1014 = tmp4308.get();
          if(oldValue470 === value1014) return;
          oldValue470 = value1014;
          var subs__ = condSubs470;
          subs__.unsubscribe();
          node1850.empty();
          if(value1014) {
            var nodes4484 = $("<span>");
            node1850.append(nodes4484);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl759();
            }));
            
            function renderControl759() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root5698 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root5698); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4484;
                nodes4484 = node.contents();
                oldNodes.replaceWith(nodes4484);
              }));
            }
            renderControl759();
            
            
          } else {
            
            var node1851 = $("<div>");
            node1851.attr('style', "padding:20px");
            
            
            var node1852 = $("<h2>");
            
            
            node1852.append("Add your questions here!");
            node1851.append(node1852);
            node1850.append(node1851);
            
            
            
          }
        };
        renderCond470();
        subs__.addSub(tmp4308.addEventListener('change', function() {
          renderCond470();
        }));
        
        node1847.append(node1849);
        node1846.append(node1847);
        
        
        
        
        
        
      });
    } else {
      var nodes4490 = $("<span>");
      node1846.append(nodes4490);
      subs__.addSub((ui.group)(function(_, callback) {
        var root5704 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1855 = mobl.loadingSpan();
        root5704.append(node1855);
        var list329;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList329 = function() {
          var subs__ = listSubs__;
          list329 = items.get();
          list329.list(function(results329) {
            node1855.empty();
            for(var i878 = 0; i878 < results329.length; i878++) {
              (function() {
                var iternode329 = $("<span>");
                node1855.append(iternode329);
                var it;
                it = mobl.ref(mobl.ref(results329), i878);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp4342 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp4300 = mobl.ref(result__);
                
                var nodes4491 = $("<span>");
                iternode329.append(nodes4491);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4300, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root5705 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp4341 = result__;
                    var tmp4299 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp4339 = result__;
                        var result__ = tmp4339;
                        tmp4299.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp4340 = result__;
                        var result__ = tmp4340;
                        tmp4299.set(result__);
                        
                      });
                    }));
                    
                    var nodes4492 = $("<span>");
                    root5705.append(nodes4492);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl762();
                    }));
                    
                    function renderControl762() {
                      subs__.addSub((masterItem.get())(it, tmp4299, function(elements, callback) {
                        var root5706 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root5706); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes4492;
                        nodes4492 = node.contents();
                        oldNodes.replaceWith(nodes4492);
                      }));
                    }
                    renderControl762();
                    callback(root5705); return subs__;
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4491;
                  nodes4491 = node.contents();
                  oldNodes.replaceWith(nodes4491);
                }));
                
                var oldNodes = iternode329;
                iternode329 = iternode329.contents();
                oldNodes.replaceWith(iternode329);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list329.addEventListener('change', function() { listSubs__.unsubscribe(); renderList329(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList329(true); }));
          });
        };
        renderList329();
        
        callback(root5704); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4490;
        nodes4490 = node.contents();
        oldNodes.replaceWith(nodes4490);
      }));
      
      
    }
  };
  renderCond469();
  subs__.addSub(tmp4310.addEventListener('change', function() {
    renderCond469();
  }));
  
  callback(root5697); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root5707 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp4303 = mobl.ref(result__);
  
  var nodes4493 = $("<span>");
  root5707.append(nodes4493);
  subs__.addSub((ui.header)(tmp4303, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root5708 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    mobl.sleep(500, function(result__) {
      var tmp4343 = result__;
      mathJAX.renderMaths(function(result__) {
        var tmp4344 = result__;
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp4302 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp4301 = mobl.ref(result__);
        
        var nodes4494 = $("<span>");
        root5708.append(nodes4494);
        subs__.addSub((ui.backButton)(tmp4301, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp4302, function(_, callback) {
          var root5709 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root5709); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4494;
          nodes4494 = node.contents();
          oldNodes.replaceWith(nodes4494);
        }));
        callback(root5708); return subs__;
        
      });
    });
    return subs__;
  }, function(node) {
    var oldNodes = nodes4493;
    nodes4493 = node.contents();
    oldNodes.replaceWith(nodes4493);
  }));
  var nodes4495 = $("<span>");
  root5707.append(nodes4495);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl763();
  }));
  
  function renderControl763() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root5710 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5710); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4495;
      nodes4495 = node.contents();
      oldNodes.replaceWith(nodes4495);
    }));
  }
  renderControl763();
  callback(root5707); return subs__;
  
  
  return subs__;
};
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.section = 'ui__section';
ui.logoStyle = 'ui__logoStyle';
ui.delStyle = 'ui__delStyle';
ui.delPushedStyle = 'ui__delPushedStyle';
