mobl.provides('nrichRPG.coreWorkout');
mobl.provides('mobl.ui');
mobl.provides('plot');
mobl.provides('mathJAX');
mobl.provides('ui');
mobl.provides('nrichRPG.questionAnswer');
mobl.provides('nrichRPG.coreWorkout');
mobl.provides('mobl');
mobl.provides('nrichRPG');
nrichRPG.coreWorkout.helpStyle = 'nrichRPG__coreWorkout__helpStyle';
nrichRPG.coreWorkout.deleteStyle = 'nrichRPG__coreWorkout__deleteStyle';
nrichRPG.coreWorkout.headerLogo = 'nrichRPG__coreWorkout__headerLogo';
nrichRPG.coreWorkout.qCount = mobl.ref(0);
nrichRPG.coreWorkout.tickCount = mobl.ref(0);
nrichRPG.coreWorkout.updateCounts = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().count(function(result__) {
    var tmp7507 = result__;
    var result__ = tmp7507;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp7508 = result__;
      var result__ = tmp7508;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp7509 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1662) {
    coll1662 = coll1662.reverse();
    function processOne282() {
      var i;
      i = coll1662.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp7510 = result__;
        
        if(coll1662.length > 0) processOne282(); else rest282();
        
      });
    }
    function rest282() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1662.length > 0) processOne282(); else rest282();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1663) {
    coll1663 = coll1663.reverse();
    function processOne283() {
      var i;
      i = coll1663.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp7511 = result__;
          
          if(coll1663.length > 0) processOne283(); else rest283();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp7511 = result__;
            
            if(coll1663.length > 0) processOne283(); else rest283();
            
          });
        }
      }
    }
    function rest283() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1663.length > 0) processOne283(); else rest283();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1664) {
    coll1664 = coll1664.reverse();
    function processOne284() {
      var i;
      i = coll1664.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp7512 = result__;
        
        if(coll1664.length > 0) processOne284(); else rest284();
        
      });
    }
    function rest284() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1664.length > 0) processOne284(); else rest284();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root9751 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7728 = $("<span>");
  root9751.append(nodes7728);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9752 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp7520 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7415 = mobl.ref(result__);
    
    var nodes7729 = $("<span>");
    root9752.append(nodes7729);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7415, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9753 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7730 = $("<span>");
      root9753.append(nodes7730);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9754 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9754); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7730;
        nodes7730 = node.contents();
        oldNodes.replaceWith(nodes7730);
      }));
      callback(root9753); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7729;
      nodes7729 = node.contents();
      oldNodes.replaceWith(nodes7729);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp7519 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7416 = mobl.ref(result__);
    
    var nodes7731 = $("<span>");
    root9752.append(nodes7731);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7416, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9755 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7732 = $("<span>");
      root9755.append(nodes7732);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9756 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9756); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7732;
        nodes7732 = node.contents();
        oldNodes.replaceWith(nodes7732);
      }));
      callback(root9755); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7731;
      nodes7731 = node.contents();
      oldNodes.replaceWith(nodes7731);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp7518 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7417 = mobl.ref(result__);
    
    var nodes7733 = $("<span>");
    root9752.append(nodes7733);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7417, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9757 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7734 = $("<span>");
      root9757.append(nodes7734);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9758 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9758); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7734;
        nodes7734 = node.contents();
        oldNodes.replaceWith(nodes7734);
      }));
      callback(root9757); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7733;
      nodes7733 = node.contents();
      oldNodes.replaceWith(nodes7733);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp7517 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7418 = mobl.ref(result__);
    
    var nodes7735 = $("<span>");
    root9752.append(nodes7735);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7418, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9759 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7736 = $("<span>");
      root9759.append(nodes7736);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9760 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9760); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7736;
        nodes7736 = node.contents();
        oldNodes.replaceWith(nodes7736);
      }));
      callback(root9759); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7735;
      nodes7735 = node.contents();
      oldNodes.replaceWith(nodes7735);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp7516 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7419 = mobl.ref(result__);
    
    var nodes7737 = $("<span>");
    root9752.append(nodes7737);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7419, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9761 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7738 = $("<span>");
      root9761.append(nodes7738);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9762 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9762); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7738;
        nodes7738 = node.contents();
        oldNodes.replaceWith(nodes7738);
      }));
      callback(root9761); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7737;
      nodes7737 = node.contents();
      oldNodes.replaceWith(nodes7737);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp7515 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7420 = mobl.ref(result__);
    
    var nodes7739 = $("<span>");
    root9752.append(nodes7739);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7420, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9763 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7740 = $("<span>");
      root9763.append(nodes7740);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9764 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9764); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7740;
        nodes7740 = node.contents();
        oldNodes.replaceWith(nodes7740);
      }));
      callback(root9763); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7739;
      nodes7739 = node.contents();
      oldNodes.replaceWith(nodes7739);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp7514 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7421 = mobl.ref(result__);
    
    var nodes7741 = $("<span>");
    root9752.append(nodes7741);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7421, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9765 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7742 = $("<span>");
      root9765.append(nodes7742);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9766 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9766); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7742;
        nodes7742 = node.contents();
        oldNodes.replaceWith(nodes7742);
      }));
      callback(root9765); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7741;
      nodes7741 = node.contents();
      oldNodes.replaceWith(nodes7741);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp7513 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7422 = mobl.ref(result__);
    
    var nodes7743 = $("<span>");
    root9752.append(nodes7743);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7422, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9767 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7744 = $("<span>");
      root9767.append(nodes7744);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9768 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9768); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7744;
        nodes7744 = node.contents();
        oldNodes.replaceWith(nodes7744);
      }));
      callback(root9767); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7743;
      nodes7743 = node.contents();
      oldNodes.replaceWith(nodes7743);
    }));
    callback(root9752); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7728;
    nodes7728 = node.contents();
    oldNodes.replaceWith(nodes7728);
  }));
  callback(root9751); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root9769 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes7745 = $("<span>");
  root9769.append(nodes7745);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9770 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7424 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7423 = mobl.ref(result__);
    
    var nodes7746 = $("<span>");
    root9770.append(nodes7746);
    subs__.addSub((ui.backButton)(tmp7423, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7424, function(_, callback) {
      var root9771 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9771); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7746;
      nodes7746 = node.contents();
      oldNodes.replaceWith(nodes7746);
    }));
    callback(root9770); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7745;
    nodes7745 = node.contents();
    oldNodes.replaceWith(nodes7745);
  }));
  var nodes7747 = $("<span>");
  root9769.append(nodes7747);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9772 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp7528 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7425 = mobl.ref(result__);
    
    var nodes7748 = $("<span>");
    root9772.append(nodes7748);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7425, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9773 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7749 = $("<span>");
      root9773.append(nodes7749);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9774 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9774); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7749;
        nodes7749 = node.contents();
        oldNodes.replaceWith(nodes7749);
      }));
      callback(root9773); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7748;
      nodes7748 = node.contents();
      oldNodes.replaceWith(nodes7748);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp7527 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7426 = mobl.ref(result__);
    
    var nodes7750 = $("<span>");
    root9772.append(nodes7750);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7426, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9775 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7751 = $("<span>");
      root9775.append(nodes7751);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9776 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9776); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7751;
        nodes7751 = node.contents();
        oldNodes.replaceWith(nodes7751);
      }));
      callback(root9775); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7750;
      nodes7750 = node.contents();
      oldNodes.replaceWith(nodes7750);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp7526 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7427 = mobl.ref(result__);
    
    var nodes7752 = $("<span>");
    root9772.append(nodes7752);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7427, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9777 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7753 = $("<span>");
      root9777.append(nodes7753);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9778 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9778); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7753;
        nodes7753 = node.contents();
        oldNodes.replaceWith(nodes7753);
      }));
      callback(root9777); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7752;
      nodes7752 = node.contents();
      oldNodes.replaceWith(nodes7752);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp7525 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7428 = mobl.ref(result__);
    
    var nodes7754 = $("<span>");
    root9772.append(nodes7754);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7428, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9779 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7755 = $("<span>");
      root9779.append(nodes7755);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9780 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9780); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7755;
        nodes7755 = node.contents();
        oldNodes.replaceWith(nodes7755);
      }));
      callback(root9779); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7754;
      nodes7754 = node.contents();
      oldNodes.replaceWith(nodes7754);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp7524 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7429 = mobl.ref(result__);
    
    var nodes7756 = $("<span>");
    root9772.append(nodes7756);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7429, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9781 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7757 = $("<span>");
      root9781.append(nodes7757);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9782 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9782); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7757;
        nodes7757 = node.contents();
        oldNodes.replaceWith(nodes7757);
      }));
      callback(root9781); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7756;
      nodes7756 = node.contents();
      oldNodes.replaceWith(nodes7756);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp7523 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7430 = mobl.ref(result__);
    
    var nodes7758 = $("<span>");
    root9772.append(nodes7758);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7430, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9783 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7759 = $("<span>");
      root9783.append(nodes7759);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9784 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9784); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7759;
        nodes7759 = node.contents();
        oldNodes.replaceWith(nodes7759);
      }));
      callback(root9783); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7758;
      nodes7758 = node.contents();
      oldNodes.replaceWith(nodes7758);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp7522 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7431 = mobl.ref(result__);
    
    var nodes7760 = $("<span>");
    root9772.append(nodes7760);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7431, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9785 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7761 = $("<span>");
      root9785.append(nodes7761);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9786 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9786); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7761;
        nodes7761 = node.contents();
        oldNodes.replaceWith(nodes7761);
      }));
      callback(root9785); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7760;
      nodes7760 = node.contents();
      oldNodes.replaceWith(nodes7760);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp7521 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7432 = mobl.ref(result__);
    
    var nodes7762 = $("<span>");
    root9772.append(nodes7762);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7432, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9787 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7763 = $("<span>");
      root9787.append(nodes7763);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9788 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9788); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7763;
        nodes7763 = node.contents();
        oldNodes.replaceWith(nodes7763);
      }));
      callback(root9787); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7762;
      nodes7762 = node.contents();
      oldNodes.replaceWith(nodes7762);
    }));
    callback(root9772); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7747;
    nodes7747 = node.contents();
    oldNodes.replaceWith(nodes7747);
  }));
  callback(root9769); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root9789 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes7764 = $("<span>");
  root9789.append(nodes7764);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9790 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7434 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7433 = mobl.ref(result__);
    
    var nodes7765 = $("<span>");
    root9790.append(nodes7765);
    subs__.addSub((ui.backButton)(tmp7433, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7434, function(_, callback) {
      var root9791 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9791); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7765;
      nodes7765 = node.contents();
      oldNodes.replaceWith(nodes7765);
    }));
    callback(root9790); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7764;
    nodes7764 = node.contents();
    oldNodes.replaceWith(nodes7764);
  }));
  var nodes7766 = $("<span>");
  root9789.append(nodes7766);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9792 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp7533 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7435 = mobl.ref(result__);
    
    var nodes7767 = $("<span>");
    root9792.append(nodes7767);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7435, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9793 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7768 = $("<span>");
      root9793.append(nodes7768);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9794 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9794); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7768;
        nodes7768 = node.contents();
        oldNodes.replaceWith(nodes7768);
      }));
      callback(root9793); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7767;
      nodes7767 = node.contents();
      oldNodes.replaceWith(nodes7767);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp7532 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7436 = mobl.ref(result__);
    
    var nodes7769 = $("<span>");
    root9792.append(nodes7769);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7436, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9795 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7770 = $("<span>");
      root9795.append(nodes7770);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9796 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9796); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7770;
        nodes7770 = node.contents();
        oldNodes.replaceWith(nodes7770);
      }));
      callback(root9795); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7769;
      nodes7769 = node.contents();
      oldNodes.replaceWith(nodes7769);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp7531 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7437 = mobl.ref(result__);
    
    var nodes7771 = $("<span>");
    root9792.append(nodes7771);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7437, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9797 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7772 = $("<span>");
      root9797.append(nodes7772);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9798 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9798); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7772;
        nodes7772 = node.contents();
        oldNodes.replaceWith(nodes7772);
      }));
      callback(root9797); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7771;
      nodes7771 = node.contents();
      oldNodes.replaceWith(nodes7771);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp7530 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7438 = mobl.ref(result__);
    
    var nodes7773 = $("<span>");
    root9792.append(nodes7773);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7438, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9799 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7774 = $("<span>");
      root9799.append(nodes7774);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9800 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9800); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7774;
        nodes7774 = node.contents();
        oldNodes.replaceWith(nodes7774);
      }));
      callback(root9799); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7773;
      nodes7773 = node.contents();
      oldNodes.replaceWith(nodes7773);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp7529 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7439 = mobl.ref(result__);
    
    var nodes7775 = $("<span>");
    root9792.append(nodes7775);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7439, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9801 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7776 = $("<span>");
      root9801.append(nodes7776);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9802 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9802); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7776;
        nodes7776 = node.contents();
        oldNodes.replaceWith(nodes7776);
      }));
      callback(root9801); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7775;
      nodes7775 = node.contents();
      oldNodes.replaceWith(nodes7775);
    }));
    callback(root9792); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7766;
    nodes7766 = node.contents();
    oldNodes.replaceWith(nodes7766);
  }));
  callback(root9789); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root9803 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes7777 = $("<span>");
  root9803.append(nodes7777);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9804 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7441 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7440 = mobl.ref(result__);
    
    var nodes7778 = $("<span>");
    root9804.append(nodes7778);
    subs__.addSub((ui.backButton)(tmp7440, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7441, function(_, callback) {
      var root9805 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9805); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7778;
      nodes7778 = node.contents();
      oldNodes.replaceWith(nodes7778);
    }));
    callback(root9804); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7777;
    nodes7777 = node.contents();
    oldNodes.replaceWith(nodes7777);
  }));
  var nodes7779 = $("<span>");
  root9803.append(nodes7779);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9806 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp7536 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7442 = mobl.ref(result__);
    
    var nodes7780 = $("<span>");
    root9806.append(nodes7780);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7442, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9807 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7781 = $("<span>");
      root9807.append(nodes7781);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9808 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9808); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7781;
        nodes7781 = node.contents();
        oldNodes.replaceWith(nodes7781);
      }));
      callback(root9807); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7780;
      nodes7780 = node.contents();
      oldNodes.replaceWith(nodes7780);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp7535 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7443 = mobl.ref(result__);
    
    var nodes7782 = $("<span>");
    root9806.append(nodes7782);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7443, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9809 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7783 = $("<span>");
      root9809.append(nodes7783);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9810 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9810); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7783;
        nodes7783 = node.contents();
        oldNodes.replaceWith(nodes7783);
      }));
      callback(root9809); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7782;
      nodes7782 = node.contents();
      oldNodes.replaceWith(nodes7782);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp7534 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7444 = mobl.ref(result__);
    
    var nodes7784 = $("<span>");
    root9806.append(nodes7784);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7444, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9811 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7785 = $("<span>");
      root9811.append(nodes7785);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9812 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9812); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7785;
        nodes7785 = node.contents();
        oldNodes.replaceWith(nodes7785);
      }));
      callback(root9811); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7784;
      nodes7784 = node.contents();
      oldNodes.replaceWith(nodes7784);
    }));
    callback(root9806); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7779;
    nodes7779 = node.contents();
    oldNodes.replaceWith(nodes7779);
  }));
  callback(root9803); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root9813 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes7786 = $("<span>");
  root9813.append(nodes7786);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9814 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7446 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7445 = mobl.ref(result__);
    
    var nodes7787 = $("<span>");
    root9814.append(nodes7787);
    subs__.addSub((ui.backButton)(tmp7445, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7446, function(_, callback) {
      var root9815 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9815); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7787;
      nodes7787 = node.contents();
      oldNodes.replaceWith(nodes7787);
    }));
    callback(root9814); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7786;
    nodes7786 = node.contents();
    oldNodes.replaceWith(nodes7786);
  }));
  var nodes7788 = $("<span>");
  root9813.append(nodes7788);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9816 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp7540 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7447 = mobl.ref(result__);
    
    var nodes7789 = $("<span>");
    root9816.append(nodes7789);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7447, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9817 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7790 = $("<span>");
      root9817.append(nodes7790);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9818 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9818); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7790;
        nodes7790 = node.contents();
        oldNodes.replaceWith(nodes7790);
      }));
      callback(root9817); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7789;
      nodes7789 = node.contents();
      oldNodes.replaceWith(nodes7789);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp7539 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7448 = mobl.ref(result__);
    
    var nodes7791 = $("<span>");
    root9816.append(nodes7791);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7448, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9819 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7792 = $("<span>");
      root9819.append(nodes7792);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9820 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9820); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7792;
        nodes7792 = node.contents();
        oldNodes.replaceWith(nodes7792);
      }));
      callback(root9819); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7791;
      nodes7791 = node.contents();
      oldNodes.replaceWith(nodes7791);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp7538 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7449 = mobl.ref(result__);
    
    var nodes7793 = $("<span>");
    root9816.append(nodes7793);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7449, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9821 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7794 = $("<span>");
      root9821.append(nodes7794);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9822 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9822); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7794;
        nodes7794 = node.contents();
        oldNodes.replaceWith(nodes7794);
      }));
      callback(root9821); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7793;
      nodes7793 = node.contents();
      oldNodes.replaceWith(nodes7793);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp7537 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7450 = mobl.ref(result__);
    
    var nodes7795 = $("<span>");
    root9816.append(nodes7795);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7450, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9823 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7796 = $("<span>");
      root9823.append(nodes7796);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9824 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9824); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7796;
        nodes7796 = node.contents();
        oldNodes.replaceWith(nodes7796);
      }));
      callback(root9823); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7795;
      nodes7795 = node.contents();
      oldNodes.replaceWith(nodes7795);
    }));
    callback(root9816); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7788;
    nodes7788 = node.contents();
    oldNodes.replaceWith(nodes7788);
  }));
  callback(root9813); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root9825 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes7797 = $("<span>");
  root9825.append(nodes7797);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9826 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7452 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7451 = mobl.ref(result__);
    
    var nodes7798 = $("<span>");
    root9826.append(nodes7798);
    subs__.addSub((ui.backButton)(tmp7451, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7452, function(_, callback) {
      var root9827 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9827); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7798;
      nodes7798 = node.contents();
      oldNodes.replaceWith(nodes7798);
    }));
    callback(root9826); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7797;
    nodes7797 = node.contents();
    oldNodes.replaceWith(nodes7797);
  }));
  var nodes7799 = $("<span>");
  root9825.append(nodes7799);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9828 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp7542 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7453 = mobl.ref(result__);
    
    var nodes7800 = $("<span>");
    root9828.append(nodes7800);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7453, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9829 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7801 = $("<span>");
      root9829.append(nodes7801);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9830 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9830); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7801;
        nodes7801 = node.contents();
        oldNodes.replaceWith(nodes7801);
      }));
      callback(root9829); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7800;
      nodes7800 = node.contents();
      oldNodes.replaceWith(nodes7800);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp7541 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7454 = mobl.ref(result__);
    
    var nodes7802 = $("<span>");
    root9828.append(nodes7802);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7454, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9831 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7803 = $("<span>");
      root9831.append(nodes7803);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9832 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9832); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7803;
        nodes7803 = node.contents();
        oldNodes.replaceWith(nodes7803);
      }));
      callback(root9831); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7802;
      nodes7802 = node.contents();
      oldNodes.replaceWith(nodes7802);
    }));
    callback(root9828); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7799;
    nodes7799 = node.contents();
    oldNodes.replaceWith(nodes7799);
  }));
  callback(root9825); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root9833 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes7804 = $("<span>");
  root9833.append(nodes7804);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9834 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7456 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7455 = mobl.ref(result__);
    
    var nodes7805 = $("<span>");
    root9834.append(nodes7805);
    subs__.addSub((ui.backButton)(tmp7455, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7456, function(_, callback) {
      var root9835 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9835); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7805;
      nodes7805 = node.contents();
      oldNodes.replaceWith(nodes7805);
    }));
    callback(root9834); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7804;
    nodes7804 = node.contents();
    oldNodes.replaceWith(nodes7804);
  }));
  var nodes7806 = $("<span>");
  root9833.append(nodes7806);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9836 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp7547 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7457 = mobl.ref(result__);
    
    var nodes7807 = $("<span>");
    root9836.append(nodes7807);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7457, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9837 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7808 = $("<span>");
      root9837.append(nodes7808);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9838 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9838); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7808;
        nodes7808 = node.contents();
        oldNodes.replaceWith(nodes7808);
      }));
      callback(root9837); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7807;
      nodes7807 = node.contents();
      oldNodes.replaceWith(nodes7807);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp7546 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7458 = mobl.ref(result__);
    
    var nodes7809 = $("<span>");
    root9836.append(nodes7809);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7458, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9839 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7810 = $("<span>");
      root9839.append(nodes7810);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9840 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9840); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7810;
        nodes7810 = node.contents();
        oldNodes.replaceWith(nodes7810);
      }));
      callback(root9839); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7809;
      nodes7809 = node.contents();
      oldNodes.replaceWith(nodes7809);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp7545 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7459 = mobl.ref(result__);
    
    var nodes7811 = $("<span>");
    root9836.append(nodes7811);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7459, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9841 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7812 = $("<span>");
      root9841.append(nodes7812);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9842 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9842); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7812;
        nodes7812 = node.contents();
        oldNodes.replaceWith(nodes7812);
      }));
      callback(root9841); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7811;
      nodes7811 = node.contents();
      oldNodes.replaceWith(nodes7811);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp7544 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7460 = mobl.ref(result__);
    
    var nodes7813 = $("<span>");
    root9836.append(nodes7813);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7460, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9843 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7814 = $("<span>");
      root9843.append(nodes7814);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9844 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9844); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7814;
        nodes7814 = node.contents();
        oldNodes.replaceWith(nodes7814);
      }));
      callback(root9843); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7813;
      nodes7813 = node.contents();
      oldNodes.replaceWith(nodes7813);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp7543 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7461 = mobl.ref(result__);
    
    var nodes7815 = $("<span>");
    root9836.append(nodes7815);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7461, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9845 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7816 = $("<span>");
      root9845.append(nodes7816);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9846 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9846); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7816;
        nodes7816 = node.contents();
        oldNodes.replaceWith(nodes7816);
      }));
      callback(root9845); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7815;
      nodes7815 = node.contents();
      oldNodes.replaceWith(nodes7815);
    }));
    callback(root9836); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7806;
    nodes7806 = node.contents();
    oldNodes.replaceWith(nodes7806);
  }));
  callback(root9833); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root9847 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes7817 = $("<span>");
  root9847.append(nodes7817);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9848 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7463 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7462 = mobl.ref(result__);
    
    var nodes7818 = $("<span>");
    root9848.append(nodes7818);
    subs__.addSub((ui.backButton)(tmp7462, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7463, function(_, callback) {
      var root9849 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9849); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7818;
      nodes7818 = node.contents();
      oldNodes.replaceWith(nodes7818);
    }));
    callback(root9848); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7817;
    nodes7817 = node.contents();
    oldNodes.replaceWith(nodes7817);
  }));
  var nodes7819 = $("<span>");
  root9847.append(nodes7819);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9850 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp7550 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7464 = mobl.ref(result__);
    
    var nodes7820 = $("<span>");
    root9850.append(nodes7820);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7464, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9851 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7821 = $("<span>");
      root9851.append(nodes7821);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9852 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9852); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7821;
        nodes7821 = node.contents();
        oldNodes.replaceWith(nodes7821);
      }));
      callback(root9851); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7820;
      nodes7820 = node.contents();
      oldNodes.replaceWith(nodes7820);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp7549 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7465 = mobl.ref(result__);
    
    var nodes7822 = $("<span>");
    root9850.append(nodes7822);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7465, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9853 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7823 = $("<span>");
      root9853.append(nodes7823);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9854 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9854); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7823;
        nodes7823 = node.contents();
        oldNodes.replaceWith(nodes7823);
      }));
      callback(root9853); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7822;
      nodes7822 = node.contents();
      oldNodes.replaceWith(nodes7822);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp7548 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7466 = mobl.ref(result__);
    
    var nodes7824 = $("<span>");
    root9850.append(nodes7824);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7466, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9855 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7825 = $("<span>");
      root9855.append(nodes7825);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9856 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9856); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7825;
        nodes7825 = node.contents();
        oldNodes.replaceWith(nodes7825);
      }));
      callback(root9855); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7824;
      nodes7824 = node.contents();
      oldNodes.replaceWith(nodes7824);
    }));
    callback(root9850); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7819;
    nodes7819 = node.contents();
    oldNodes.replaceWith(nodes7819);
  }));
  callback(root9847); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root9857 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes7826 = $("<span>");
  root9857.append(nodes7826);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9858 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7468 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7467 = mobl.ref(result__);
    
    var nodes7827 = $("<span>");
    root9858.append(nodes7827);
    subs__.addSub((ui.backButton)(tmp7467, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7468, function(_, callback) {
      var root9859 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9859); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7827;
      nodes7827 = node.contents();
      oldNodes.replaceWith(nodes7827);
    }));
    callback(root9858); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7826;
    nodes7826 = node.contents();
    oldNodes.replaceWith(nodes7826);
  }));
  var nodes7828 = $("<span>");
  root9857.append(nodes7828);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9860 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp7551 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7469 = mobl.ref(result__);
    
    var nodes7829 = $("<span>");
    root9860.append(nodes7829);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7469, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9861 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7830 = $("<span>");
      root9861.append(nodes7830);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9862 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9862); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7830;
        nodes7830 = node.contents();
        oldNodes.replaceWith(nodes7830);
      }));
      callback(root9861); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7829;
      nodes7829 = node.contents();
      oldNodes.replaceWith(nodes7829);
    }));
    callback(root9860); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7828;
    nodes7828 = node.contents();
    oldNodes.replaceWith(nodes7828);
  }));
  callback(root9857); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root9863 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7831 = $("<span>");
  root9863.append(nodes7831);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9864 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp7564 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7470 = mobl.ref(result__);
    
    var nodes7832 = $("<span>");
    root9864.append(nodes7832);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7470, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9865 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7833 = $("<span>");
      root9865.append(nodes7833);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9866 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9866); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7833;
        nodes7833 = node.contents();
        oldNodes.replaceWith(nodes7833);
      }));
      callback(root9865); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7832;
      nodes7832 = node.contents();
      oldNodes.replaceWith(nodes7832);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp7563 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7471 = mobl.ref(result__);
    
    var nodes7834 = $("<span>");
    root9864.append(nodes7834);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7471, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9867 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7835 = $("<span>");
      root9867.append(nodes7835);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9868 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9868); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7835;
        nodes7835 = node.contents();
        oldNodes.replaceWith(nodes7835);
      }));
      callback(root9867); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7834;
      nodes7834 = node.contents();
      oldNodes.replaceWith(nodes7834);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp7562 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7472 = mobl.ref(result__);
    
    var nodes7836 = $("<span>");
    root9864.append(nodes7836);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7472, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9869 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7837 = $("<span>");
      root9869.append(nodes7837);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9870 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9870); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7837;
        nodes7837 = node.contents();
        oldNodes.replaceWith(nodes7837);
      }));
      callback(root9869); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7836;
      nodes7836 = node.contents();
      oldNodes.replaceWith(nodes7836);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp7561 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7473 = mobl.ref(result__);
    
    var nodes7838 = $("<span>");
    root9864.append(nodes7838);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7473, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9871 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7839 = $("<span>");
      root9871.append(nodes7839);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9872 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9872); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7839;
        nodes7839 = node.contents();
        oldNodes.replaceWith(nodes7839);
      }));
      callback(root9871); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7838;
      nodes7838 = node.contents();
      oldNodes.replaceWith(nodes7838);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp7560 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7474 = mobl.ref(result__);
    
    var nodes7840 = $("<span>");
    root9864.append(nodes7840);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7474, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9873 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7841 = $("<span>");
      root9873.append(nodes7841);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9874 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9874); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7841;
        nodes7841 = node.contents();
        oldNodes.replaceWith(nodes7841);
      }));
      callback(root9873); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7840;
      nodes7840 = node.contents();
      oldNodes.replaceWith(nodes7840);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp7559 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7475 = mobl.ref(result__);
    
    var nodes7842 = $("<span>");
    root9864.append(nodes7842);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7475, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9875 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7843 = $("<span>");
      root9875.append(nodes7843);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9876 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9876); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7843;
        nodes7843 = node.contents();
        oldNodes.replaceWith(nodes7843);
      }));
      callback(root9875); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7842;
      nodes7842 = node.contents();
      oldNodes.replaceWith(nodes7842);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp7558 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7476 = mobl.ref(result__);
    
    var nodes7844 = $("<span>");
    root9864.append(nodes7844);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7476, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9877 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7845 = $("<span>");
      root9877.append(nodes7845);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9878 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9878); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7845;
        nodes7845 = node.contents();
        oldNodes.replaceWith(nodes7845);
      }));
      callback(root9877); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7844;
      nodes7844 = node.contents();
      oldNodes.replaceWith(nodes7844);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp7557 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7477 = mobl.ref(result__);
    
    var nodes7846 = $("<span>");
    root9864.append(nodes7846);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7477, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9879 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7847 = $("<span>");
      root9879.append(nodes7847);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9880 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9880); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7847;
        nodes7847 = node.contents();
        oldNodes.replaceWith(nodes7847);
      }));
      callback(root9879); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7846;
      nodes7846 = node.contents();
      oldNodes.replaceWith(nodes7846);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp7556 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7478 = mobl.ref(result__);
    
    var nodes7848 = $("<span>");
    root9864.append(nodes7848);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7478, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9881 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7849 = $("<span>");
      root9881.append(nodes7849);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9882 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9882); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7849;
        nodes7849 = node.contents();
        oldNodes.replaceWith(nodes7849);
      }));
      callback(root9881); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7848;
      nodes7848 = node.contents();
      oldNodes.replaceWith(nodes7848);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp7555 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7479 = mobl.ref(result__);
    
    var nodes7850 = $("<span>");
    root9864.append(nodes7850);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7479, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9883 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7851 = $("<span>");
      root9883.append(nodes7851);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9884 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9884); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7851;
        nodes7851 = node.contents();
        oldNodes.replaceWith(nodes7851);
      }));
      callback(root9883); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7850;
      nodes7850 = node.contents();
      oldNodes.replaceWith(nodes7850);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp7554 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7480 = mobl.ref(result__);
    
    var nodes7852 = $("<span>");
    root9864.append(nodes7852);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7480, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9885 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7853 = $("<span>");
      root9885.append(nodes7853);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9886 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9886); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7853;
        nodes7853 = node.contents();
        oldNodes.replaceWith(nodes7853);
      }));
      callback(root9885); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7852;
      nodes7852 = node.contents();
      oldNodes.replaceWith(nodes7852);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp7553 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7481 = mobl.ref(result__);
    
    var nodes7854 = $("<span>");
    root9864.append(nodes7854);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7481, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9887 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7855 = $("<span>");
      root9887.append(nodes7855);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9888 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9888); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7855;
        nodes7855 = node.contents();
        oldNodes.replaceWith(nodes7855);
      }));
      callback(root9887); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7854;
      nodes7854 = node.contents();
      oldNodes.replaceWith(nodes7854);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp7552 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7482 = mobl.ref(result__);
    
    var nodes7856 = $("<span>");
    root9864.append(nodes7856);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7482, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9889 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7857 = $("<span>");
      root9889.append(nodes7857);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9890 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9890); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7857;
        nodes7857 = node.contents();
        oldNodes.replaceWith(nodes7857);
      }));
      callback(root9889); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7856;
      nodes7856 = node.contents();
      oldNodes.replaceWith(nodes7856);
    }));
    callback(root9864); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7831;
    nodes7831 = node.contents();
    oldNodes.replaceWith(nodes7831);
  }));
  callback(root9863); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root9891 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7858 = $("<span>");
  root9891.append(nodes7858);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9892 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp7570 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7483 = mobl.ref(result__);
    
    var nodes7859 = $("<span>");
    root9892.append(nodes7859);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7483, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9893 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7860 = $("<span>");
      root9893.append(nodes7860);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9894 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9894); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7860;
        nodes7860 = node.contents();
        oldNodes.replaceWith(nodes7860);
      }));
      callback(root9893); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7859;
      nodes7859 = node.contents();
      oldNodes.replaceWith(nodes7859);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp7569 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7484 = mobl.ref(result__);
    
    var nodes7861 = $("<span>");
    root9892.append(nodes7861);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7484, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9895 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7862 = $("<span>");
      root9895.append(nodes7862);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9896 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9896); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7862;
        nodes7862 = node.contents();
        oldNodes.replaceWith(nodes7862);
      }));
      callback(root9895); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7861;
      nodes7861 = node.contents();
      oldNodes.replaceWith(nodes7861);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp7568 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7485 = mobl.ref(result__);
    
    var nodes7863 = $("<span>");
    root9892.append(nodes7863);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7485, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9897 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7864 = $("<span>");
      root9897.append(nodes7864);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9898 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9898); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7864;
        nodes7864 = node.contents();
        oldNodes.replaceWith(nodes7864);
      }));
      callback(root9897); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7863;
      nodes7863 = node.contents();
      oldNodes.replaceWith(nodes7863);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp7567 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7486 = mobl.ref(result__);
    
    var nodes7865 = $("<span>");
    root9892.append(nodes7865);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7486, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9899 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7866 = $("<span>");
      root9899.append(nodes7866);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9900 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9900); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7866;
        nodes7866 = node.contents();
        oldNodes.replaceWith(nodes7866);
      }));
      callback(root9899); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7865;
      nodes7865 = node.contents();
      oldNodes.replaceWith(nodes7865);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp7566 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7487 = mobl.ref(result__);
    
    var nodes7867 = $("<span>");
    root9892.append(nodes7867);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7487, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9901 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7868 = $("<span>");
      root9901.append(nodes7868);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9902 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9902); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7868;
        nodes7868 = node.contents();
        oldNodes.replaceWith(nodes7868);
      }));
      callback(root9901); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7867;
      nodes7867 = node.contents();
      oldNodes.replaceWith(nodes7867);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp7565 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7488 = mobl.ref(result__);
    
    var nodes7869 = $("<span>");
    root9892.append(nodes7869);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7488, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9903 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7870 = $("<span>");
      root9903.append(nodes7870);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9904 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9904); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7870;
        nodes7870 = node.contents();
        oldNodes.replaceWith(nodes7870);
      }));
      callback(root9903); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7869;
      nodes7869 = node.contents();
      oldNodes.replaceWith(nodes7869);
    }));
    callback(root9892); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7858;
    nodes7858 = node.contents();
    oldNodes.replaceWith(nodes7858);
  }));
  callback(root9891); return subs__;
  
  return subs__;
};
nrichRPG.coreWorkout.questionStyle = 'nrichRPG__coreWorkout__questionStyle';
nrichRPG.coreWorkout.answerStyle = 'nrichRPG__coreWorkout__answerStyle';
nrichRPG.coreWorkout.agreeStyle = 'nrichRPG__coreWorkout__agreeStyle';
nrichRPG.coreWorkout.disagreeStyle = 'nrichRPG__coreWorkout__disagreeStyle';
nrichRPG.coreWorkout.plotStyle = 'nrichRPG__coreWorkout__plotStyle';
nrichRPG.coreWorkout.topicLabelStyle = 'nrichRPG__coreWorkout__topicLabelStyle';
nrichRPG.coreWorkout.panelHeaderStyle = 'nrichRPG__coreWorkout__panelHeaderStyle';
nrichRPG.coreWorkout.panelHeaderContainerStyle = 'nrichRPG__coreWorkout__panelHeaderContainerStyle';
nrichRPG.coreWorkout.panelHeaderTextStyle = 'nrichRPG__coreWorkout__panelHeaderTextStyle';
nrichRPG.coreWorkout.sideButtonStyle = 'nrichRPG__coreWorkout__sideButtonStyle';

nrichRPG.coreWorkout.panelHeader = function(text, onclick, elements, callback) {
  var root9905 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3001 = $("<div>");
  
  var ref2812 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref2812.get() !== null) {
    node3001.attr('class', ref2812.get());
    subs__.addSub(ref2812.addEventListener('change', function(_, ref, val) {
      node3001.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2812.rebind());
  
  var val1425 = onclick.get();
  if(val1425 !== null) {
    subs__.addSub(mobl.domBind(node3001, 'tap', val1425));
  }
  
  
  var node3002 = $("<div>");
  
  var ref2811 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref2811.get() !== null) {
    node3002.attr('class', ref2811.get());
    subs__.addSub(ref2811.addEventListener('change', function(_, ref, val) {
      node3002.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2811.rebind());
  
  
  var node3003 = $("<div>");
  
  var ref2809 = text;
  node3003.text(""+ref2809.get());
  var ignore553 = false;
  subs__.addSub(ref2809.addEventListener('change', function(_, ref, val) {
    if(ignore553) return;
    node3003.text(""+val);
  }));
  subs__.addSub(ref2809.rebind());
  
  
  var ref2810 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref2810.get() !== null) {
    node3003.attr('class', ref2810.get());
    subs__.addSub(ref2810.addEventListener('change', function(_, ref, val) {
      node3003.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2810.rebind());
  
  node3002.append(node3003);
  node3001.append(node3002);
  var nodes7871 = $("<span>");
  node3001.append(nodes7871);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1232();
  }));
  
  function renderControl1232() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9906 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9906); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7871;
      nodes7871 = node.contents();
      oldNodes.replaceWith(nodes7871);
    }));
  }
  renderControl1232();
  root9905.append(node3001);
  callback(root9905); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp7571 = result__;
    var result__ = qa.done && qa.answer == "%GRAPH%";
    if(result__) {
      var result__ = mobl.JSON.parse(qa.plotData);
      var jsonData = result__;
      var result__ = plot.lineChart("corePlotArea", jsonData);
      var result__ = "";
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    } else {
      {
        var result__ = "";
        if(callback && callback.apply) callback(result__);
        return;
        if(callback && callback.apply) callback(); return;
      }
    }
  });
};


nrichRPG.coreWorkout.answerBlock = function(qa, elements, callback) {
  var root9907 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3004 = $("<span>");
  root9907.append(node3004);
  var condSubs764 = new mobl.CompSubscription();
  subs__.addSub(condSubs764);
  var oldValue764;
  var renderCond764 = function() {
    var value1684 = qa.get().correct;
    if(oldValue764 === value1684) return;
    oldValue764 = value1684;
    var subs__ = condSubs764;
    subs__.unsubscribe();
    node3004.empty();
    if(value1684) {
      var nodes7872 = $("<span>");
      node3004.append(nodes7872);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.agreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9908 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp7492 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp7492.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node3005 = $("<span>");
        root9908.append(node3005);
        var condSubs765 = new mobl.CompSubscription();
        subs__.addSub(condSubs765);
        var oldValue765;
        var renderCond765 = function() {
          var value1685 = tmp7492.get();
          if(oldValue765 === value1685) return;
          oldValue765 = value1685;
          var subs__ = condSubs765;
          subs__.unsubscribe();
          node3005.empty();
          if(value1685) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp7489 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp7489.set("A" + qa.get().number + ". ");
            }));
            
            var nodes7873 = $("<span>");
            node3005.append(nodes7873);
            subs__.addSub((mobl.label)(tmp7489, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root9909 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root9909); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes7873;
              nodes7873 = node.contents();
              oldNodes.replaceWith(nodes7873);
            }));
            var nodes7874 = $("<span>");
            node3005.append(nodes7874);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root9910 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root9910); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes7874;
              nodes7874 = node.contents();
              oldNodes.replaceWith(nodes7874);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp7490 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp7490.set("A" + qa.get().number + ". ");
            }));
            
            var nodes7875 = $("<span>");
            node3005.append(nodes7875);
            subs__.addSub((mobl.label)(tmp7490, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root9911 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root9911); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes7875;
              nodes7875 = node.contents();
              oldNodes.replaceWith(nodes7875);
            }));
            var nodes7876 = $("<span>");
            node3005.append(nodes7876);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root9912 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root9912); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes7876;
              nodes7876 = node.contents();
              oldNodes.replaceWith(nodes7876);
            }));
            
            var node3006 = $("<span>");
            node3006.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp7573 = result__;
              var tmp7491 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp7572 = result__;
                  var result__ = tmp7572;
                  tmp7491.set(result__);
                  
                });
              }));
              
              var nodes7877 = $("<span>");
              node3006.append(nodes7877);
              subs__.addSub((mobl.html)(tmp7491, function(_, callback) {
                var root9913 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9913); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7877;
                nodes7877 = node.contents();
                oldNodes.replaceWith(nodes7877);
              }));
              node3005.append(node3006);
              
              
            });
            
            
            
          }
        };
        renderCond765();
        subs__.addSub(tmp7492.addEventListener('change', function() {
          renderCond765();
        }));
        
        callback(root9908); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7872;
        nodes7872 = node.contents();
        oldNodes.replaceWith(nodes7872);
      }));
      
      
    } else {
      var nodes7878 = $("<span>");
      node3004.append(nodes7878);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.disagreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9914 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp7496 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp7496.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node3007 = $("<span>");
        root9914.append(node3007);
        var condSubs766 = new mobl.CompSubscription();
        subs__.addSub(condSubs766);
        var oldValue766;
        var renderCond766 = function() {
          var value1686 = tmp7496.get();
          if(oldValue766 === value1686) return;
          oldValue766 = value1686;
          var subs__ = condSubs766;
          subs__.unsubscribe();
          node3007.empty();
          if(value1686) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp7493 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp7493.set("A" + qa.get().number + ". ");
            }));
            
            var nodes7879 = $("<span>");
            node3007.append(nodes7879);
            subs__.addSub((mobl.label)(tmp7493, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root9915 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root9915); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes7879;
              nodes7879 = node.contents();
              oldNodes.replaceWith(nodes7879);
            }));
            var nodes7880 = $("<span>");
            node3007.append(nodes7880);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root9916 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root9916); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes7880;
              nodes7880 = node.contents();
              oldNodes.replaceWith(nodes7880);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp7494 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp7494.set("A" + qa.get().number + ". ");
            }));
            
            var nodes7881 = $("<span>");
            node3007.append(nodes7881);
            subs__.addSub((mobl.label)(tmp7494, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root9917 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root9917); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes7881;
              nodes7881 = node.contents();
              oldNodes.replaceWith(nodes7881);
            }));
            var nodes7882 = $("<span>");
            node3007.append(nodes7882);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root9918 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root9918); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes7882;
              nodes7882 = node.contents();
              oldNodes.replaceWith(nodes7882);
            }));
            
            var node3008 = $("<span>");
            node3008.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp7575 = result__;
              var tmp7495 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp7574 = result__;
                  var result__ = tmp7574;
                  tmp7495.set(result__);
                  
                });
              }));
              
              var nodes7883 = $("<span>");
              node3008.append(nodes7883);
              subs__.addSub((mobl.html)(tmp7495, function(_, callback) {
                var root9919 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9919); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7883;
                nodes7883 = node.contents();
                oldNodes.replaceWith(nodes7883);
              }));
              node3007.append(node3008);
              
              
            });
            
            
            
          }
        };
        renderCond766();
        subs__.addSub(tmp7496.addEventListener('change', function() {
          renderCond766();
        }));
        
        callback(root9914); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7878;
        nodes7878 = node.contents();
        oldNodes.replaceWith(nodes7878);
      }));
      
      
    }
  };
  renderCond764();
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    renderCond764();
  }));
  
  var nodes7884 = $("<span>");
  root9907.append(nodes7884);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root9920 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3009 = $("<span>");
    node3009.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp7577 = result__;
      var tmp7497 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp7576 = result__;
          var result__ = tmp7576;
          tmp7497.set(result__);
          
        });
      }));
      
      var nodes7888 = $("<span>");
      node3009.append(nodes7888);
      subs__.addSub((mobl.html)(tmp7497, function(_, callback) {
        var root9924 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9924); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7888;
        nodes7888 = node.contents();
        oldNodes.replaceWith(nodes7888);
      }));
      root9920.append(node3009);
      var nodes7885 = $("<span>");
      root9920.append(nodes7885);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9921 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9921); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7885;
        nodes7885 = node.contents();
        oldNodes.replaceWith(nodes7885);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp7498 = mobl.ref(result__);
      
      var nodes7886 = $("<span>");
      root9920.append(nodes7886);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp7498, function(_, callback) {
        var root9922 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9922); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7886;
        nodes7886 = node.contents();
        oldNodes.replaceWith(nodes7886);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp7499 = mobl.ref(result__);
      
      var nodes7887 = $("<span>");
      root9920.append(nodes7887);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp7499, function(_, callback) {
        var root9923 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9923); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7887;
        nodes7887 = node.contents();
        oldNodes.replaceWith(nodes7887);
      }));
      callback(root9920); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7884;
    nodes7884 = node.contents();
    oldNodes.replaceWith(nodes7884);
  }));
  callback(root9907); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp7578 = result__;
    var result__ = tmp7578;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp7579 = result__;
        var result__ = tmp7579;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = qa2;
        if(callback && callback.apply) callback(result__);
        return;
        if(callback && callback.apply) callback(); return;
      });
    } else {
      {
        var result__ = qa2;
        if(callback && callback.apply) callback(result__);
        return;
        if(callback && callback.apply) callback(); return;
      }
    }
  });
};


nrichRPG.coreWorkout.showQA = function(qa, elements, callback) {
  var root9925 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp7587 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp7501 = mobl.ref(result__);
  
  var nodes7889 = $("<span>");
  root9925.append(nodes7889);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp7501, function(_, callback) {
    var root9926 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp7580 = result__;
                       var result__ = tmp7580;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp7581 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp7500 = mobl.ref(result__);
    
    var nodes7890 = $("<span>");
    root9926.append(nodes7890);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp7500, function(_, callback) {
      var root9927 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9927); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7890;
      nodes7890 = node.contents();
      oldNodes.replaceWith(nodes7890);
    }));
    callback(root9926); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7889;
    nodes7889 = node.contents();
    oldNodes.replaceWith(nodes7889);
  }));
  var nodes7891 = $("<span>");
  root9925.append(nodes7891);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9928 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp7586 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7504 = mobl.ref(result__);
    
    var nodes7892 = $("<span>");
    root9928.append(nodes7892);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp7504, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root9929 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + qa.get().number + ". " + qa.get().question;
      var tmp7502 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
        tmp7502.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp7502.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      
      var nodes7893 = $("<span>");
      root9929.append(nodes7893);
      subs__.addSub((mobl.html)(tmp7502, function(_, callback) {
        var root9930 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9930); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7893;
        nodes7893 = node.contents();
        oldNodes.replaceWith(nodes7893);
      }));
      
      var node3010 = $("<span>");
      node3010.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp7583 = result__;
        var tmp7503 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp7582 = result__;
            var result__ = tmp7582;
            tmp7503.set(result__);
            
          });
        }));
        
        var nodes7894 = $("<span>");
        node3010.append(nodes7894);
        subs__.addSub((mobl.html)(tmp7503, function(_, callback) {
          var root9931 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9931); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7894;
          nodes7894 = node.contents();
          oldNodes.replaceWith(nodes7894);
        }));
        root9929.append(node3010);
        callback(root9929); return subs__;
        
      });
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7892;
      nodes7892 = node.contents();
      oldNodes.replaceWith(nodes7892);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp7585 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7506 = mobl.ref(result__);
    
    var nodes7895 = $("<span>");
    root9928.append(nodes7895);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7506, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root9932 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7896 = $("<span>");
      root9932.append(nodes7896);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9933 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp7584 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp7505 = mobl.ref(result__);
        
        var nodes7897 = $("<span>");
        root9933.append(nodes7897);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp7505, function(_, callback) {
          var root9934 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9934); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7897;
          nodes7897 = node.contents();
          oldNodes.replaceWith(nodes7897);
        }));
        callback(root9933); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7896;
        nodes7896 = node.contents();
        oldNodes.replaceWith(nodes7896);
      }));
      
      var node3011 = $("<span>");
      root9932.append(node3011);
      var condSubs767 = new mobl.CompSubscription();
      subs__.addSub(condSubs767);
      var oldValue767;
      var renderCond767 = function() {
        var value1687 = qa.get().done;
        if(oldValue767 === value1687) return;
        oldValue767 = value1687;
        var subs__ = condSubs767;
        subs__.unsubscribe();
        node3011.empty();
        if(value1687) {
          var nodes7898 = $("<span>");
          node3011.append(nodes7898);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, function(_, callback) {
            var root9935 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root9935); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes7898;
            nodes7898 = node.contents();
            oldNodes.replaceWith(nodes7898);
          }));
          
          
        } else {
          
        }
      };
      renderCond767();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond767();
      }));
      
      callback(root9932); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7895;
      nodes7895 = node.contents();
      oldNodes.replaceWith(nodes7895);
    }));
    callback(root9928); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7891;
    nodes7891 = node.contents();
    oldNodes.replaceWith(nodes7891);
  }));
  callback(root9925); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.max = mobl.ref(0);
nrichRPG.coreWorkout.makeQA = function(n, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll1665) {
    coll1665 = coll1665.reverse();
    function processOne285() {
      var item;
      item = coll1665.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1665.length > 0) processOne285(); else rest285();
      
    }
    function rest285() {
      var result__ = nrichRPG.coreWorkout.max.get() + 1;
      qa.number = result__;
      var result__ = nrichRPG.coreWorkout.makeProblem(n);
      var q_and_A = result__;
      var result__ = q_and_A.get(0);
      qa.question = result__;
      var result__ = q_and_A.get(1);
      qa.answer = result__;
      var result__ = q_and_A.get(2);
      qa.topic = result__;
      var result__ = q_and_A.length > 3;
      if(result__) {
        var result__ = q_and_A.get(3);
        qa.plotData = result__;
        var result__ = false;
        qa.done = result__;
        var result__ = mobl.add(qa);
        if(callback && callback.apply) callback(); return;
      } else {
        {
          var result__ = false;
          qa.done = result__;
          var result__ = mobl.add(qa);
          if(callback && callback.apply) callback(); return;
        }
      }
    }
    if(coll1665.length > 0) processOne285(); else rest285();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll1666) {
    coll1666 = coll1666.reverse();
    function processOne286() {
      var item;
      item = coll1666.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1666.length > 0) processOne286(); else rest286();
      
    }
    function rest286() {
      var result__ = nrichRPG.coreWorkout.max.get() + 1;
      qa.number = result__;
      var result__ = nrichRPG.coreWorkout.makeFurther(s);
      var q_and_A = result__;
      var result__ = q_and_A.get(0);
      qa.question = result__;
      var result__ = q_and_A.get(1);
      qa.answer = result__;
      var result__ = q_and_A.get(2);
      qa.topic = result__;
      var result__ = q_and_A.length > 3;
      if(result__) {
        var result__ = q_and_A.get(3);
        qa.plotData = result__;
        var result__ = false;
        qa.done = result__;
        var result__ = mobl.add(qa);
        if(callback && callback.apply) callback(); return;
      } else {
        {
          var result__ = false;
          qa.done = result__;
          var result__ = mobl.add(qa);
          if(callback && callback.apply) callback(); return;
        }
      }
    }
    if(coll1666.length > 0) processOne286(); else rest286();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll1667) {
    coll1667 = coll1667.reverse();
    function processOne287() {
      var item;
      item = coll1667.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1667.length > 0) processOne287(); else rest287();
      
    }
    function rest287() {
      var result__ = nrichRPG.coreWorkout.max.get() + 1;
      qa.number = result__;
      var result__ = nrichRPG.coreWorkout.makeFurther(s);
      var q_and_A = result__;
      var result__ = q_and_A.get(0);
      qa.question = result__;
      var result__ = q_and_A.get(1);
      qa.answer = result__;
      var result__ = q_and_A.get(2);
      qa.topic = result__;
      var result__ = q_and_A.length > 3;
      if(result__) {
        var result__ = q_and_A.get(3);
        qa.plotData = result__;
        var result__ = false;
        qa.done = result__;
        var result__ = mobl.add(qa);
        if(callback && callback.apply) callback(); return;
      } else {
        {
          var result__ = false;
          qa.done = result__;
          var result__ = mobl.add(qa);
          if(callback && callback.apply) callback(); return;
        }
      }
    }
    if(coll1667.length > 0) processOne287(); else rest287();
  });
  
};

(function(__ns) {
__ns.makeProblem = function(n) {
                     if(n === 1000)
                     {
                       n = 1 + Math.floor(Math.random() * 29);
                       n = n;
                     }
                     if(n === 100)
                     {
                       n = pickrand(10, 11, 7, 9, 1, 30, 13, 17);
                     }
                     if(n === 200)
                     {
                       n = pickrand(24, 25, 26, 27, 270);
                     }
                     if(n === 300)
                     {
                       n = pickrand(15, 16, 6);
                     }
                     if(n === 400)
                     {
                       n = pickrand(8, 12, 23, 2);
                     }
                     if(n === 500)
                     {
                       n = pickrand(5, 18);
                     }
                     if(n === 600)
                     {
                       n = pickrand(14, 20, 21, 22, 19);
                     }
                     if(n === 700)
                     {
                       n = pickrand(28, 3, 4);
                     }
                     switch(n) {
                       case 1:
                         var qa = makePartial();
                         qa.push("Partial fractions");
                         break;
                       case 2:
                         var qa = makeBinomial2();
                         qa.push("Binomial theorem");
                         break;
                       case 3:
                         var qa = makePolyInt();
                         qa.push("Polynomial integration");
                         break;
                       case 4:
                         var qa = makeTrigInt();
                         qa.push("Trig integration");
                         break;
                       case 5:
                         var qa = makeVector();
                         qa.push("Scalar products");
                         break;
                       case 6:
                         var qa = makeLines();
                         qa.push("3D Lines");
                         break;
                       case 7:
                         var qa = makeIneq();
                         qa.push("Inequalities");
                         break;
                       case 8:
                         var qa = makeAP();
                         qa.push("Arithmetic progressions");
                         break;
                       case 9:
                         var qa = makeFactor();
                         qa.push("Factor theorem");
                         break;
                       case 10:
                         var qa = makeQuadratic();
                         qa.push("Quadratics");
                         break;
                       case 11:
                         var qa = makeComplete();
                         qa.push("Completing the square");
                         break;
                       case 12:
                         var qa = makeBinExp();
                         qa.push("Binomial expansion");
                         break;
                       case 13:
                         var qa = makeLog();
                         qa.push("Logarithms");
                         break;
                       case 14:
                         var qa = makeStationary();
                         qa.push("Stationary points");
                         break;
                       case 15:
                         var qa = makeTriangle();
                         qa.push("Triangles");
                         break;
                       case 16:
                         var qa = makeCircle();
                         qa.push("Circles");
                         break;
                       case 17:
                         var qa = makeSolvingTrig();
                         qa.push("Trig equations");
                         break;
                       case 18:
                         var qa = makeVectorEq();
                         qa.push("Vector equations");
                         break;
                       case 19:
                         var qa = makeImplicit();
                         qa.push("Implicit differentiation");
                         break;
                       case 20:
                         var qa = makeChainRule();
                         qa.push("The chain rule");
                         break;
                       case 21:
                         var qa = makeProductRule();
                         qa.push("The product rule");
                         break;
                       case 22:
                         var qa = makeQuotientRule();
                         qa.push("The quotient rule");
                         break;
                       case 23:
                         var qa = makeGP();
                         qa.push("Geometric progressions");
                         break;
                       case 24:
                         var qa = makeModulus();
                         qa.push("Modulus function");
                         break;
                       case 25:
                         var qa = makeTransformation();
                         qa.push("Transformations of functions");
                         break;
                       case 26:
                         var qa = makeComposition();
                         qa.push("Composition of functions");
                         break;
                       case 27:
                         var qa = makeParametric();
                         qa.push("Parametric functions");
                         break;
                       case 270:
                         var qa = makeImplicitFunction();
                         qa.push("Implicit functions");
                         break;
                       case 28:
                         var qa = makeIntegration();
                         qa.push("Integration");
                         break;
                       case 29:
                         var qa = makeDE();
                         qa.push("Differential equations");
                         break;
                       case 30:
                         var qa = makePowers();
                         qa.push("Powers");
                         break;
                       default :
                       alert("invalid qid" + n);
                       break;
                       }
                     return qa;
                   };
__ns.makeFurther = function(n) {
                     switch(n) {
                       case 'F1':
                         var qa = makeCArithmetic();
                         qa.push("Complex Arithmetic");
                         break;
                       case 'F2':
                         var qa = makeCPolar();
                         qa.push("Modulus Argument");
                         break;
                       case 'F3a':
                         var qa = makeDETwoHard();
                         qa.push("2nd order DEs");
                         break;
                       case 'F4':
                         var qa = makeMatrix2();
                         qa.push("Rank 2 matrices");
                         break;
                       case 'F5':
                         var qa = makeTaylor();
                         qa.push("Taylor Series");
                         break;
                       case 'F6':
                         var qa = makePolarSketch();
                         qa.push("Polar Coordinates");
                         break;
                       case 'F7':
                         var qa = makeMatrix3();
                         qa.push("Rank 3 matrices");
                         break;
                       case 'F8':
                         var qa = makeFurtherVector();
                         qa.push("Further vectors");
                         break;
                       case 'F9':
                         var qa = makeNewtonRaphson();
                         qa.push("Newton-Raphson");
                         break;
                       case 'F10':
                         var qa = makeFurtherIneq();
                         qa.push("Further inequalities");
                         break;
                       case 'F11':
                         var qa = makeSubstInt();
                         qa.push("Integration by substitution");
                         break;
                       case 'F12':
                         var qa = makeRevolution();
                         qa.push("Figures of revolution");
                         break;
                       case 'F13':
                         var qa = makeMatXforms();
                         qa.push("Matrix transformations");
                         break;
                       case 'S1':
                         var qa = makeDiscreteDistn();
                         qa.push("Discrete Distributions");
                         break;
                       case 'S2':
                         var qa = makeContinDistn();
                         qa.push("Continuous Distributions");
                         break;
                       case 'S3':
                         var qa = makeHypTest();
                         qa.push("Hypothesis Testing");
                         break;
                       case 'S4':
                         var qa = makeConfidInt();
                         qa.push("Confidence Intervals");
                         break;
                       case 'S5':
                         var qa = makeChiSquare();
                         qa.push("Chi Squared");
                         break;
                       case 'S6':
                         var qa = makeProductMoment();
                         qa.push("Product Moments");
                         break;
                       default :
                       alert("invalid qid" + n);
                       break;
                       }
                     return qa;
                   };
}(nrichRPG.coreWorkout));