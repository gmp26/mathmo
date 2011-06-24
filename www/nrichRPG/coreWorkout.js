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
    var tmp7446 = result__;
    var result__ = tmp7446;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp7447 = result__;
      var result__ = tmp7447;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp7448 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll2525) {
    coll2525 = coll2525.reverse();
    function processOne117() {
      var i;
      i = coll2525.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp7449 = result__;
        
        if(coll2525.length > 0) processOne117(); else rest117();
        
      });
    }
    function rest117() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll2525.length > 0) processOne117(); else rest117();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll2526) {
    coll2526 = coll2526.reverse();
    function processOne118() {
      var i;
      i = coll2526.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp7450 = result__;
          
          if(coll2526.length > 0) processOne118(); else rest118();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp7450 = result__;
            
            if(coll2526.length > 0) processOne118(); else rest118();
            
          });
        }
      }
    }
    function rest118() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll2526.length > 0) processOne118(); else rest118();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll2527) {
    coll2527 = coll2527.reverse();
    function processOne119() {
      var i;
      i = coll2527.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp7451 = result__;
        
        if(coll2527.length > 0) processOne119(); else rest119();
        
      });
    }
    function rest119() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll2527.length > 0) processOne119(); else rest119();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root15042 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes10684 = $("<span>");
  root15042.append(nodes10684);
  subs__.addSub((ui.group)(function(_, callback) {
    var root15043 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp7459 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7354 = mobl.ref(result__);
    
    var nodes10685 = $("<span>");
    root15043.append(nodes10685);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7354, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15044 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10686 = $("<span>");
      root15044.append(nodes10686);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15045 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15045); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10686;
        nodes10686 = node.contents();
        oldNodes.replaceWith(nodes10686);
      }));
      callback(root15044); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10685;
      nodes10685 = node.contents();
      oldNodes.replaceWith(nodes10685);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp7458 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7355 = mobl.ref(result__);
    
    var nodes10687 = $("<span>");
    root15043.append(nodes10687);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7355, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15046 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10688 = $("<span>");
      root15046.append(nodes10688);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15047 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15047); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10688;
        nodes10688 = node.contents();
        oldNodes.replaceWith(nodes10688);
      }));
      callback(root15046); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10687;
      nodes10687 = node.contents();
      oldNodes.replaceWith(nodes10687);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp7457 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7356 = mobl.ref(result__);
    
    var nodes10689 = $("<span>");
    root15043.append(nodes10689);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7356, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15048 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10690 = $("<span>");
      root15048.append(nodes10690);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15049 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15049); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10690;
        nodes10690 = node.contents();
        oldNodes.replaceWith(nodes10690);
      }));
      callback(root15048); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10689;
      nodes10689 = node.contents();
      oldNodes.replaceWith(nodes10689);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp7456 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7357 = mobl.ref(result__);
    
    var nodes10691 = $("<span>");
    root15043.append(nodes10691);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7357, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15050 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10692 = $("<span>");
      root15050.append(nodes10692);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15051 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15051); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10692;
        nodes10692 = node.contents();
        oldNodes.replaceWith(nodes10692);
      }));
      callback(root15050); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10691;
      nodes10691 = node.contents();
      oldNodes.replaceWith(nodes10691);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp7455 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7358 = mobl.ref(result__);
    
    var nodes10693 = $("<span>");
    root15043.append(nodes10693);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7358, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15052 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10694 = $("<span>");
      root15052.append(nodes10694);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15053 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15053); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10694;
        nodes10694 = node.contents();
        oldNodes.replaceWith(nodes10694);
      }));
      callback(root15052); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10693;
      nodes10693 = node.contents();
      oldNodes.replaceWith(nodes10693);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp7454 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7359 = mobl.ref(result__);
    
    var nodes10695 = $("<span>");
    root15043.append(nodes10695);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7359, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15054 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10696 = $("<span>");
      root15054.append(nodes10696);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15055 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15055); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10696;
        nodes10696 = node.contents();
        oldNodes.replaceWith(nodes10696);
      }));
      callback(root15054); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10695;
      nodes10695 = node.contents();
      oldNodes.replaceWith(nodes10695);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp7453 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7360 = mobl.ref(result__);
    
    var nodes10697 = $("<span>");
    root15043.append(nodes10697);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7360, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15056 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10698 = $("<span>");
      root15056.append(nodes10698);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15057 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15057); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10698;
        nodes10698 = node.contents();
        oldNodes.replaceWith(nodes10698);
      }));
      callback(root15056); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10697;
      nodes10697 = node.contents();
      oldNodes.replaceWith(nodes10697);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp7452 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7361 = mobl.ref(result__);
    
    var nodes10699 = $("<span>");
    root15043.append(nodes10699);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7361, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15058 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10700 = $("<span>");
      root15058.append(nodes10700);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15059 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15059); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10700;
        nodes10700 = node.contents();
        oldNodes.replaceWith(nodes10700);
      }));
      callback(root15058); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10699;
      nodes10699 = node.contents();
      oldNodes.replaceWith(nodes10699);
    }));
    callback(root15043); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10684;
    nodes10684 = node.contents();
    oldNodes.replaceWith(nodes10684);
  }));
  callback(root15042); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root15060 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes10701 = $("<span>");
  root15060.append(nodes10701);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root15061 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7363 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7362 = mobl.ref(result__);
    
    var nodes10702 = $("<span>");
    root15061.append(nodes10702);
    subs__.addSub((ui.backButton)(tmp7362, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7363, function(_, callback) {
      var root15062 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15062); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10702;
      nodes10702 = node.contents();
      oldNodes.replaceWith(nodes10702);
    }));
    callback(root15061); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10701;
    nodes10701 = node.contents();
    oldNodes.replaceWith(nodes10701);
  }));
  var nodes10703 = $("<span>");
  root15060.append(nodes10703);
  subs__.addSub((ui.group)(function(_, callback) {
    var root15063 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp7467 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7364 = mobl.ref(result__);
    
    var nodes10704 = $("<span>");
    root15063.append(nodes10704);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7364, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15064 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10705 = $("<span>");
      root15064.append(nodes10705);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15065 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15065); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10705;
        nodes10705 = node.contents();
        oldNodes.replaceWith(nodes10705);
      }));
      callback(root15064); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10704;
      nodes10704 = node.contents();
      oldNodes.replaceWith(nodes10704);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp7466 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7365 = mobl.ref(result__);
    
    var nodes10706 = $("<span>");
    root15063.append(nodes10706);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7365, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15066 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10707 = $("<span>");
      root15066.append(nodes10707);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15067 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15067); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10707;
        nodes10707 = node.contents();
        oldNodes.replaceWith(nodes10707);
      }));
      callback(root15066); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10706;
      nodes10706 = node.contents();
      oldNodes.replaceWith(nodes10706);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp7465 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7366 = mobl.ref(result__);
    
    var nodes10708 = $("<span>");
    root15063.append(nodes10708);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7366, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15068 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10709 = $("<span>");
      root15068.append(nodes10709);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15069 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15069); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10709;
        nodes10709 = node.contents();
        oldNodes.replaceWith(nodes10709);
      }));
      callback(root15068); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10708;
      nodes10708 = node.contents();
      oldNodes.replaceWith(nodes10708);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp7464 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7367 = mobl.ref(result__);
    
    var nodes10710 = $("<span>");
    root15063.append(nodes10710);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7367, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15070 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10711 = $("<span>");
      root15070.append(nodes10711);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15071 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15071); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10711;
        nodes10711 = node.contents();
        oldNodes.replaceWith(nodes10711);
      }));
      callback(root15070); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10710;
      nodes10710 = node.contents();
      oldNodes.replaceWith(nodes10710);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp7463 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7368 = mobl.ref(result__);
    
    var nodes10712 = $("<span>");
    root15063.append(nodes10712);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7368, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15072 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10713 = $("<span>");
      root15072.append(nodes10713);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15073 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15073); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10713;
        nodes10713 = node.contents();
        oldNodes.replaceWith(nodes10713);
      }));
      callback(root15072); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10712;
      nodes10712 = node.contents();
      oldNodes.replaceWith(nodes10712);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp7462 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7369 = mobl.ref(result__);
    
    var nodes10714 = $("<span>");
    root15063.append(nodes10714);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7369, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15074 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10715 = $("<span>");
      root15074.append(nodes10715);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15075 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15075); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10715;
        nodes10715 = node.contents();
        oldNodes.replaceWith(nodes10715);
      }));
      callback(root15074); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10714;
      nodes10714 = node.contents();
      oldNodes.replaceWith(nodes10714);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp7461 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7370 = mobl.ref(result__);
    
    var nodes10716 = $("<span>");
    root15063.append(nodes10716);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7370, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15076 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10717 = $("<span>");
      root15076.append(nodes10717);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15077 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15077); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10717;
        nodes10717 = node.contents();
        oldNodes.replaceWith(nodes10717);
      }));
      callback(root15076); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10716;
      nodes10716 = node.contents();
      oldNodes.replaceWith(nodes10716);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp7460 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7371 = mobl.ref(result__);
    
    var nodes10718 = $("<span>");
    root15063.append(nodes10718);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7371, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15078 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10719 = $("<span>");
      root15078.append(nodes10719);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15079 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15079); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10719;
        nodes10719 = node.contents();
        oldNodes.replaceWith(nodes10719);
      }));
      callback(root15078); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10718;
      nodes10718 = node.contents();
      oldNodes.replaceWith(nodes10718);
    }));
    callback(root15063); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10703;
    nodes10703 = node.contents();
    oldNodes.replaceWith(nodes10703);
  }));
  callback(root15060); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root15080 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes10720 = $("<span>");
  root15080.append(nodes10720);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root15081 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7373 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7372 = mobl.ref(result__);
    
    var nodes10721 = $("<span>");
    root15081.append(nodes10721);
    subs__.addSub((ui.backButton)(tmp7372, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7373, function(_, callback) {
      var root15082 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15082); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10721;
      nodes10721 = node.contents();
      oldNodes.replaceWith(nodes10721);
    }));
    callback(root15081); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10720;
    nodes10720 = node.contents();
    oldNodes.replaceWith(nodes10720);
  }));
  var nodes10722 = $("<span>");
  root15080.append(nodes10722);
  subs__.addSub((ui.group)(function(_, callback) {
    var root15083 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp7472 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7374 = mobl.ref(result__);
    
    var nodes10723 = $("<span>");
    root15083.append(nodes10723);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7374, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15084 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10724 = $("<span>");
      root15084.append(nodes10724);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15085 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15085); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10724;
        nodes10724 = node.contents();
        oldNodes.replaceWith(nodes10724);
      }));
      callback(root15084); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10723;
      nodes10723 = node.contents();
      oldNodes.replaceWith(nodes10723);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp7471 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7375 = mobl.ref(result__);
    
    var nodes10725 = $("<span>");
    root15083.append(nodes10725);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7375, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15086 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10726 = $("<span>");
      root15086.append(nodes10726);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15087 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15087); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10726;
        nodes10726 = node.contents();
        oldNodes.replaceWith(nodes10726);
      }));
      callback(root15086); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10725;
      nodes10725 = node.contents();
      oldNodes.replaceWith(nodes10725);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp7470 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7376 = mobl.ref(result__);
    
    var nodes10727 = $("<span>");
    root15083.append(nodes10727);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7376, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15088 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10728 = $("<span>");
      root15088.append(nodes10728);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15089 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15089); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10728;
        nodes10728 = node.contents();
        oldNodes.replaceWith(nodes10728);
      }));
      callback(root15088); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10727;
      nodes10727 = node.contents();
      oldNodes.replaceWith(nodes10727);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp7469 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7377 = mobl.ref(result__);
    
    var nodes10729 = $("<span>");
    root15083.append(nodes10729);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7377, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15090 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10730 = $("<span>");
      root15090.append(nodes10730);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15091 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15091); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10730;
        nodes10730 = node.contents();
        oldNodes.replaceWith(nodes10730);
      }));
      callback(root15090); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10729;
      nodes10729 = node.contents();
      oldNodes.replaceWith(nodes10729);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp7468 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7378 = mobl.ref(result__);
    
    var nodes10731 = $("<span>");
    root15083.append(nodes10731);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7378, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15092 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10732 = $("<span>");
      root15092.append(nodes10732);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15093 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15093); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10732;
        nodes10732 = node.contents();
        oldNodes.replaceWith(nodes10732);
      }));
      callback(root15092); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10731;
      nodes10731 = node.contents();
      oldNodes.replaceWith(nodes10731);
    }));
    callback(root15083); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10722;
    nodes10722 = node.contents();
    oldNodes.replaceWith(nodes10722);
  }));
  callback(root15080); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root15094 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes10733 = $("<span>");
  root15094.append(nodes10733);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root15095 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7380 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7379 = mobl.ref(result__);
    
    var nodes10734 = $("<span>");
    root15095.append(nodes10734);
    subs__.addSub((ui.backButton)(tmp7379, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7380, function(_, callback) {
      var root15096 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15096); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10734;
      nodes10734 = node.contents();
      oldNodes.replaceWith(nodes10734);
    }));
    callback(root15095); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10733;
    nodes10733 = node.contents();
    oldNodes.replaceWith(nodes10733);
  }));
  var nodes10735 = $("<span>");
  root15094.append(nodes10735);
  subs__.addSub((ui.group)(function(_, callback) {
    var root15097 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp7475 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7381 = mobl.ref(result__);
    
    var nodes10736 = $("<span>");
    root15097.append(nodes10736);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7381, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15098 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10737 = $("<span>");
      root15098.append(nodes10737);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15099 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15099); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10737;
        nodes10737 = node.contents();
        oldNodes.replaceWith(nodes10737);
      }));
      callback(root15098); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10736;
      nodes10736 = node.contents();
      oldNodes.replaceWith(nodes10736);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp7474 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7382 = mobl.ref(result__);
    
    var nodes10738 = $("<span>");
    root15097.append(nodes10738);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7382, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15100 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10739 = $("<span>");
      root15100.append(nodes10739);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15101 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15101); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10739;
        nodes10739 = node.contents();
        oldNodes.replaceWith(nodes10739);
      }));
      callback(root15100); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10738;
      nodes10738 = node.contents();
      oldNodes.replaceWith(nodes10738);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp7473 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7383 = mobl.ref(result__);
    
    var nodes10740 = $("<span>");
    root15097.append(nodes10740);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7383, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15102 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10741 = $("<span>");
      root15102.append(nodes10741);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15103 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15103); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10741;
        nodes10741 = node.contents();
        oldNodes.replaceWith(nodes10741);
      }));
      callback(root15102); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10740;
      nodes10740 = node.contents();
      oldNodes.replaceWith(nodes10740);
    }));
    callback(root15097); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10735;
    nodes10735 = node.contents();
    oldNodes.replaceWith(nodes10735);
  }));
  callback(root15094); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root15104 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes10742 = $("<span>");
  root15104.append(nodes10742);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root15105 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7385 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7384 = mobl.ref(result__);
    
    var nodes10743 = $("<span>");
    root15105.append(nodes10743);
    subs__.addSub((ui.backButton)(tmp7384, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7385, function(_, callback) {
      var root15106 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15106); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10743;
      nodes10743 = node.contents();
      oldNodes.replaceWith(nodes10743);
    }));
    callback(root15105); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10742;
    nodes10742 = node.contents();
    oldNodes.replaceWith(nodes10742);
  }));
  var nodes10744 = $("<span>");
  root15104.append(nodes10744);
  subs__.addSub((ui.group)(function(_, callback) {
    var root15107 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp7479 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7386 = mobl.ref(result__);
    
    var nodes10745 = $("<span>");
    root15107.append(nodes10745);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7386, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15108 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10746 = $("<span>");
      root15108.append(nodes10746);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15109 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15109); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10746;
        nodes10746 = node.contents();
        oldNodes.replaceWith(nodes10746);
      }));
      callback(root15108); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10745;
      nodes10745 = node.contents();
      oldNodes.replaceWith(nodes10745);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp7478 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7387 = mobl.ref(result__);
    
    var nodes10747 = $("<span>");
    root15107.append(nodes10747);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7387, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15110 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10748 = $("<span>");
      root15110.append(nodes10748);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15111 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15111); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10748;
        nodes10748 = node.contents();
        oldNodes.replaceWith(nodes10748);
      }));
      callback(root15110); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10747;
      nodes10747 = node.contents();
      oldNodes.replaceWith(nodes10747);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp7477 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7388 = mobl.ref(result__);
    
    var nodes10749 = $("<span>");
    root15107.append(nodes10749);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7388, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15112 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10750 = $("<span>");
      root15112.append(nodes10750);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15113 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15113); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10750;
        nodes10750 = node.contents();
        oldNodes.replaceWith(nodes10750);
      }));
      callback(root15112); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10749;
      nodes10749 = node.contents();
      oldNodes.replaceWith(nodes10749);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp7476 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7389 = mobl.ref(result__);
    
    var nodes10751 = $("<span>");
    root15107.append(nodes10751);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7389, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15114 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10752 = $("<span>");
      root15114.append(nodes10752);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15115 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15115); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10752;
        nodes10752 = node.contents();
        oldNodes.replaceWith(nodes10752);
      }));
      callback(root15114); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10751;
      nodes10751 = node.contents();
      oldNodes.replaceWith(nodes10751);
    }));
    callback(root15107); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10744;
    nodes10744 = node.contents();
    oldNodes.replaceWith(nodes10744);
  }));
  callback(root15104); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root15116 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes10753 = $("<span>");
  root15116.append(nodes10753);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root15117 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7391 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7390 = mobl.ref(result__);
    
    var nodes10754 = $("<span>");
    root15117.append(nodes10754);
    subs__.addSub((ui.backButton)(tmp7390, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7391, function(_, callback) {
      var root15118 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15118); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10754;
      nodes10754 = node.contents();
      oldNodes.replaceWith(nodes10754);
    }));
    callback(root15117); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10753;
    nodes10753 = node.contents();
    oldNodes.replaceWith(nodes10753);
  }));
  var nodes10755 = $("<span>");
  root15116.append(nodes10755);
  subs__.addSub((ui.group)(function(_, callback) {
    var root15119 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp7481 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7392 = mobl.ref(result__);
    
    var nodes10756 = $("<span>");
    root15119.append(nodes10756);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7392, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15120 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10757 = $("<span>");
      root15120.append(nodes10757);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15121 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15121); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10757;
        nodes10757 = node.contents();
        oldNodes.replaceWith(nodes10757);
      }));
      callback(root15120); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10756;
      nodes10756 = node.contents();
      oldNodes.replaceWith(nodes10756);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp7480 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7393 = mobl.ref(result__);
    
    var nodes10758 = $("<span>");
    root15119.append(nodes10758);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7393, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15122 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10759 = $("<span>");
      root15122.append(nodes10759);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15123 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15123); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10759;
        nodes10759 = node.contents();
        oldNodes.replaceWith(nodes10759);
      }));
      callback(root15122); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10758;
      nodes10758 = node.contents();
      oldNodes.replaceWith(nodes10758);
    }));
    callback(root15119); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10755;
    nodes10755 = node.contents();
    oldNodes.replaceWith(nodes10755);
  }));
  callback(root15116); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root15124 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes10760 = $("<span>");
  root15124.append(nodes10760);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root15125 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7395 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7394 = mobl.ref(result__);
    
    var nodes10761 = $("<span>");
    root15125.append(nodes10761);
    subs__.addSub((ui.backButton)(tmp7394, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7395, function(_, callback) {
      var root15126 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15126); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10761;
      nodes10761 = node.contents();
      oldNodes.replaceWith(nodes10761);
    }));
    callback(root15125); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10760;
    nodes10760 = node.contents();
    oldNodes.replaceWith(nodes10760);
  }));
  var nodes10762 = $("<span>");
  root15124.append(nodes10762);
  subs__.addSub((ui.group)(function(_, callback) {
    var root15127 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp7486 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7396 = mobl.ref(result__);
    
    var nodes10763 = $("<span>");
    root15127.append(nodes10763);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7396, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15128 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10764 = $("<span>");
      root15128.append(nodes10764);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15129 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15129); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10764;
        nodes10764 = node.contents();
        oldNodes.replaceWith(nodes10764);
      }));
      callback(root15128); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10763;
      nodes10763 = node.contents();
      oldNodes.replaceWith(nodes10763);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp7485 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7397 = mobl.ref(result__);
    
    var nodes10765 = $("<span>");
    root15127.append(nodes10765);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7397, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15130 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10766 = $("<span>");
      root15130.append(nodes10766);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15131 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15131); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10766;
        nodes10766 = node.contents();
        oldNodes.replaceWith(nodes10766);
      }));
      callback(root15130); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10765;
      nodes10765 = node.contents();
      oldNodes.replaceWith(nodes10765);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp7484 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7398 = mobl.ref(result__);
    
    var nodes10767 = $("<span>");
    root15127.append(nodes10767);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7398, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15132 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10768 = $("<span>");
      root15132.append(nodes10768);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15133 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15133); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10768;
        nodes10768 = node.contents();
        oldNodes.replaceWith(nodes10768);
      }));
      callback(root15132); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10767;
      nodes10767 = node.contents();
      oldNodes.replaceWith(nodes10767);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp7483 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7399 = mobl.ref(result__);
    
    var nodes10769 = $("<span>");
    root15127.append(nodes10769);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7399, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15134 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10770 = $("<span>");
      root15134.append(nodes10770);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15135 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15135); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10770;
        nodes10770 = node.contents();
        oldNodes.replaceWith(nodes10770);
      }));
      callback(root15134); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10769;
      nodes10769 = node.contents();
      oldNodes.replaceWith(nodes10769);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp7482 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7400 = mobl.ref(result__);
    
    var nodes10771 = $("<span>");
    root15127.append(nodes10771);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7400, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15136 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10772 = $("<span>");
      root15136.append(nodes10772);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15137 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15137); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10772;
        nodes10772 = node.contents();
        oldNodes.replaceWith(nodes10772);
      }));
      callback(root15136); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10771;
      nodes10771 = node.contents();
      oldNodes.replaceWith(nodes10771);
    }));
    callback(root15127); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10762;
    nodes10762 = node.contents();
    oldNodes.replaceWith(nodes10762);
  }));
  callback(root15124); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root15138 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes10773 = $("<span>");
  root15138.append(nodes10773);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root15139 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7402 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7401 = mobl.ref(result__);
    
    var nodes10774 = $("<span>");
    root15139.append(nodes10774);
    subs__.addSub((ui.backButton)(tmp7401, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7402, function(_, callback) {
      var root15140 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15140); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10774;
      nodes10774 = node.contents();
      oldNodes.replaceWith(nodes10774);
    }));
    callback(root15139); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10773;
    nodes10773 = node.contents();
    oldNodes.replaceWith(nodes10773);
  }));
  var nodes10775 = $("<span>");
  root15138.append(nodes10775);
  subs__.addSub((ui.group)(function(_, callback) {
    var root15141 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp7489 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7403 = mobl.ref(result__);
    
    var nodes10776 = $("<span>");
    root15141.append(nodes10776);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7403, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15142 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10777 = $("<span>");
      root15142.append(nodes10777);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15143 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15143); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10777;
        nodes10777 = node.contents();
        oldNodes.replaceWith(nodes10777);
      }));
      callback(root15142); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10776;
      nodes10776 = node.contents();
      oldNodes.replaceWith(nodes10776);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp7488 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7404 = mobl.ref(result__);
    
    var nodes10778 = $("<span>");
    root15141.append(nodes10778);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7404, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15144 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10779 = $("<span>");
      root15144.append(nodes10779);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15145 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15145); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10779;
        nodes10779 = node.contents();
        oldNodes.replaceWith(nodes10779);
      }));
      callback(root15144); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10778;
      nodes10778 = node.contents();
      oldNodes.replaceWith(nodes10778);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp7487 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7405 = mobl.ref(result__);
    
    var nodes10780 = $("<span>");
    root15141.append(nodes10780);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7405, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15146 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10781 = $("<span>");
      root15146.append(nodes10781);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15147 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15147); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10781;
        nodes10781 = node.contents();
        oldNodes.replaceWith(nodes10781);
      }));
      callback(root15146); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10780;
      nodes10780 = node.contents();
      oldNodes.replaceWith(nodes10780);
    }));
    callback(root15141); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10775;
    nodes10775 = node.contents();
    oldNodes.replaceWith(nodes10775);
  }));
  callback(root15138); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root15148 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes10782 = $("<span>");
  root15148.append(nodes10782);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root15149 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7407 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp7406 = mobl.ref(result__);
    
    var nodes10783 = $("<span>");
    root15149.append(nodes10783);
    subs__.addSub((ui.backButton)(tmp7406, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp7407, function(_, callback) {
      var root15150 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15150); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10783;
      nodes10783 = node.contents();
      oldNodes.replaceWith(nodes10783);
    }));
    callback(root15149); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10782;
    nodes10782 = node.contents();
    oldNodes.replaceWith(nodes10782);
  }));
  var nodes10784 = $("<span>");
  root15148.append(nodes10784);
  subs__.addSub((ui.group)(function(_, callback) {
    var root15151 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp7490 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7408 = mobl.ref(result__);
    
    var nodes10785 = $("<span>");
    root15151.append(nodes10785);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7408, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15152 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10786 = $("<span>");
      root15152.append(nodes10786);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15153 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15153); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10786;
        nodes10786 = node.contents();
        oldNodes.replaceWith(nodes10786);
      }));
      callback(root15152); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10785;
      nodes10785 = node.contents();
      oldNodes.replaceWith(nodes10785);
    }));
    callback(root15151); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10784;
    nodes10784 = node.contents();
    oldNodes.replaceWith(nodes10784);
  }));
  callback(root15148); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root15154 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes10787 = $("<span>");
  root15154.append(nodes10787);
  subs__.addSub((ui.group)(function(_, callback) {
    var root15155 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp7503 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7409 = mobl.ref(result__);
    
    var nodes10788 = $("<span>");
    root15155.append(nodes10788);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7409, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15156 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10789 = $("<span>");
      root15156.append(nodes10789);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15157 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15157); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10789;
        nodes10789 = node.contents();
        oldNodes.replaceWith(nodes10789);
      }));
      callback(root15156); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10788;
      nodes10788 = node.contents();
      oldNodes.replaceWith(nodes10788);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp7502 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7410 = mobl.ref(result__);
    
    var nodes10790 = $("<span>");
    root15155.append(nodes10790);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7410, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15158 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10791 = $("<span>");
      root15158.append(nodes10791);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15159 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15159); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10791;
        nodes10791 = node.contents();
        oldNodes.replaceWith(nodes10791);
      }));
      callback(root15158); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10790;
      nodes10790 = node.contents();
      oldNodes.replaceWith(nodes10790);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp7501 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7411 = mobl.ref(result__);
    
    var nodes10792 = $("<span>");
    root15155.append(nodes10792);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7411, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15160 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10793 = $("<span>");
      root15160.append(nodes10793);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15161 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15161); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10793;
        nodes10793 = node.contents();
        oldNodes.replaceWith(nodes10793);
      }));
      callback(root15160); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10792;
      nodes10792 = node.contents();
      oldNodes.replaceWith(nodes10792);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp7500 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7412 = mobl.ref(result__);
    
    var nodes10794 = $("<span>");
    root15155.append(nodes10794);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7412, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15162 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10795 = $("<span>");
      root15162.append(nodes10795);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15163 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15163); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10795;
        nodes10795 = node.contents();
        oldNodes.replaceWith(nodes10795);
      }));
      callback(root15162); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10794;
      nodes10794 = node.contents();
      oldNodes.replaceWith(nodes10794);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp7499 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7413 = mobl.ref(result__);
    
    var nodes10796 = $("<span>");
    root15155.append(nodes10796);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7413, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15164 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10797 = $("<span>");
      root15164.append(nodes10797);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15165 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15165); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10797;
        nodes10797 = node.contents();
        oldNodes.replaceWith(nodes10797);
      }));
      callback(root15164); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10796;
      nodes10796 = node.contents();
      oldNodes.replaceWith(nodes10796);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp7498 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7414 = mobl.ref(result__);
    
    var nodes10798 = $("<span>");
    root15155.append(nodes10798);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7414, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15166 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10799 = $("<span>");
      root15166.append(nodes10799);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15167 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15167); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10799;
        nodes10799 = node.contents();
        oldNodes.replaceWith(nodes10799);
      }));
      callback(root15166); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10798;
      nodes10798 = node.contents();
      oldNodes.replaceWith(nodes10798);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp7497 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7415 = mobl.ref(result__);
    
    var nodes10800 = $("<span>");
    root15155.append(nodes10800);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7415, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15168 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10801 = $("<span>");
      root15168.append(nodes10801);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15169 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15169); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10801;
        nodes10801 = node.contents();
        oldNodes.replaceWith(nodes10801);
      }));
      callback(root15168); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10800;
      nodes10800 = node.contents();
      oldNodes.replaceWith(nodes10800);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp7496 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7416 = mobl.ref(result__);
    
    var nodes10802 = $("<span>");
    root15155.append(nodes10802);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7416, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15170 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10803 = $("<span>");
      root15170.append(nodes10803);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15171 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15171); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10803;
        nodes10803 = node.contents();
        oldNodes.replaceWith(nodes10803);
      }));
      callback(root15170); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10802;
      nodes10802 = node.contents();
      oldNodes.replaceWith(nodes10802);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp7495 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7417 = mobl.ref(result__);
    
    var nodes10804 = $("<span>");
    root15155.append(nodes10804);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7417, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15172 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10805 = $("<span>");
      root15172.append(nodes10805);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15173 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15173); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10805;
        nodes10805 = node.contents();
        oldNodes.replaceWith(nodes10805);
      }));
      callback(root15172); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10804;
      nodes10804 = node.contents();
      oldNodes.replaceWith(nodes10804);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp7494 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7418 = mobl.ref(result__);
    
    var nodes10806 = $("<span>");
    root15155.append(nodes10806);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7418, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15174 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10807 = $("<span>");
      root15174.append(nodes10807);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15175 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15175); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10807;
        nodes10807 = node.contents();
        oldNodes.replaceWith(nodes10807);
      }));
      callback(root15174); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10806;
      nodes10806 = node.contents();
      oldNodes.replaceWith(nodes10806);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp7493 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7419 = mobl.ref(result__);
    
    var nodes10808 = $("<span>");
    root15155.append(nodes10808);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7419, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15176 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10809 = $("<span>");
      root15176.append(nodes10809);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15177 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15177); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10809;
        nodes10809 = node.contents();
        oldNodes.replaceWith(nodes10809);
      }));
      callback(root15176); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10808;
      nodes10808 = node.contents();
      oldNodes.replaceWith(nodes10808);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp7492 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7420 = mobl.ref(result__);
    
    var nodes10810 = $("<span>");
    root15155.append(nodes10810);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7420, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15178 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10811 = $("<span>");
      root15178.append(nodes10811);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15179 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15179); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10811;
        nodes10811 = node.contents();
        oldNodes.replaceWith(nodes10811);
      }));
      callback(root15178); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10810;
      nodes10810 = node.contents();
      oldNodes.replaceWith(nodes10810);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp7491 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7421 = mobl.ref(result__);
    
    var nodes10812 = $("<span>");
    root15155.append(nodes10812);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7421, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15180 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10813 = $("<span>");
      root15180.append(nodes10813);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15181 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15181); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10813;
        nodes10813 = node.contents();
        oldNodes.replaceWith(nodes10813);
      }));
      callback(root15180); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10812;
      nodes10812 = node.contents();
      oldNodes.replaceWith(nodes10812);
    }));
    callback(root15155); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10787;
    nodes10787 = node.contents();
    oldNodes.replaceWith(nodes10787);
  }));
  callback(root15154); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root15182 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes10814 = $("<span>");
  root15182.append(nodes10814);
  subs__.addSub((ui.group)(function(_, callback) {
    var root15183 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp7509 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7422 = mobl.ref(result__);
    
    var nodes10815 = $("<span>");
    root15183.append(nodes10815);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7422, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15184 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10816 = $("<span>");
      root15184.append(nodes10816);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15185 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15185); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10816;
        nodes10816 = node.contents();
        oldNodes.replaceWith(nodes10816);
      }));
      callback(root15184); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10815;
      nodes10815 = node.contents();
      oldNodes.replaceWith(nodes10815);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp7508 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7423 = mobl.ref(result__);
    
    var nodes10817 = $("<span>");
    root15183.append(nodes10817);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7423, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15186 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10818 = $("<span>");
      root15186.append(nodes10818);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15187 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15187); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10818;
        nodes10818 = node.contents();
        oldNodes.replaceWith(nodes10818);
      }));
      callback(root15186); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10817;
      nodes10817 = node.contents();
      oldNodes.replaceWith(nodes10817);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp7507 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7424 = mobl.ref(result__);
    
    var nodes10819 = $("<span>");
    root15183.append(nodes10819);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7424, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15188 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10820 = $("<span>");
      root15188.append(nodes10820);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15189 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15189); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10820;
        nodes10820 = node.contents();
        oldNodes.replaceWith(nodes10820);
      }));
      callback(root15188); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10819;
      nodes10819 = node.contents();
      oldNodes.replaceWith(nodes10819);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp7506 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7425 = mobl.ref(result__);
    
    var nodes10821 = $("<span>");
    root15183.append(nodes10821);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7425, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15190 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10822 = $("<span>");
      root15190.append(nodes10822);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15191 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15191); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10822;
        nodes10822 = node.contents();
        oldNodes.replaceWith(nodes10822);
      }));
      callback(root15190); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10821;
      nodes10821 = node.contents();
      oldNodes.replaceWith(nodes10821);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp7505 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7426 = mobl.ref(result__);
    
    var nodes10823 = $("<span>");
    root15183.append(nodes10823);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7426, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15192 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10824 = $("<span>");
      root15192.append(nodes10824);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15193 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15193); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10824;
        nodes10824 = node.contents();
        oldNodes.replaceWith(nodes10824);
      }));
      callback(root15192); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10823;
      nodes10823 = node.contents();
      oldNodes.replaceWith(nodes10823);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp7504 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7427 = mobl.ref(result__);
    
    var nodes10825 = $("<span>");
    root15183.append(nodes10825);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7427, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15194 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10826 = $("<span>");
      root15194.append(nodes10826);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15195 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15195); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10826;
        nodes10826 = node.contents();
        oldNodes.replaceWith(nodes10826);
      }));
      callback(root15194); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10825;
      nodes10825 = node.contents();
      oldNodes.replaceWith(nodes10825);
    }));
    callback(root15183); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10814;
    nodes10814 = node.contents();
    oldNodes.replaceWith(nodes10814);
  }));
  callback(root15182); return subs__;
  
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
  var root15196 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2820 = $("<div>");
  
  var ref2595 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref2595.get() !== null) {
    node2820.attr('class', ref2595.get());
    subs__.addSub(ref2595.addEventListener('change', function(_, ref, val) {
      node2820.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2595.rebind());
  
  var val1428 = onclick.get();
  if(val1428 !== null) {
    subs__.addSub(mobl.domBind(node2820, 'tap', val1428));
  }
  
  
  var node2821 = $("<div>");
  
  var ref2594 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref2594.get() !== null) {
    node2821.attr('class', ref2594.get());
    subs__.addSub(ref2594.addEventListener('change', function(_, ref, val) {
      node2821.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2594.rebind());
  
  
  var node2822 = $("<div>");
  
  var ref2592 = text;
  node2822.text(""+ref2592.get());
  var ignore527 = false;
  subs__.addSub(ref2592.addEventListener('change', function(_, ref, val) {
    if(ignore527) return;
    node2822.text(""+val);
  }));
  subs__.addSub(ref2592.rebind());
  
  
  var ref2593 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref2593.get() !== null) {
    node2822.attr('class', ref2593.get());
    subs__.addSub(ref2593.addEventListener('change', function(_, ref, val) {
      node2822.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2593.rebind());
  
  node2821.append(node2822);
  node2820.append(node2821);
  var nodes10827 = $("<span>");
  node2820.append(nodes10827);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1085();
  }));
  
  function renderControl1085() {
    subs__.addSub((elements)(function(elements, callback) {
      var root15197 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15197); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10827;
      nodes10827 = node.contents();
      oldNodes.replaceWith(nodes10827);
    }));
  }
  renderControl1085();
  root15196.append(node2820);
  callback(root15196); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp7510 = result__;
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
  var root15198 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2823 = $("<span>");
  root15198.append(node2823);
  var condSubs646 = new mobl.CompSubscription();
  subs__.addSub(condSubs646);
  var oldValue646;
  var renderCond646 = function() {
    var value2230 = qa.get().correct;
    if(oldValue646 === value2230) return;
    oldValue646 = value2230;
    var subs__ = condSubs646;
    subs__.unsubscribe();
    node2823.empty();
    if(value2230) {
      var nodes10828 = $("<span>");
      node2823.append(nodes10828);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.agreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15199 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp7431 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp7431.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node2824 = $("<span>");
        root15199.append(node2824);
        var condSubs647 = new mobl.CompSubscription();
        subs__.addSub(condSubs647);
        var oldValue647;
        var renderCond647 = function() {
          var value2231 = tmp7431.get();
          if(oldValue647 === value2231) return;
          oldValue647 = value2231;
          var subs__ = condSubs647;
          subs__.unsubscribe();
          node2824.empty();
          if(value2231) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp7428 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp7428.set("A" + qa.get().number + ". ");
            }));
            
            var nodes10829 = $("<span>");
            node2824.append(nodes10829);
            subs__.addSub((mobl.label)(tmp7428, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root15200 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root15200); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes10829;
              nodes10829 = node.contents();
              oldNodes.replaceWith(nodes10829);
            }));
            var nodes10830 = $("<span>");
            node2824.append(nodes10830);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root15201 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root15201); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes10830;
              nodes10830 = node.contents();
              oldNodes.replaceWith(nodes10830);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp7429 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp7429.set("A" + qa.get().number + ". ");
            }));
            
            var nodes10831 = $("<span>");
            node2824.append(nodes10831);
            subs__.addSub((mobl.label)(tmp7429, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root15202 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root15202); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes10831;
              nodes10831 = node.contents();
              oldNodes.replaceWith(nodes10831);
            }));
            var nodes10832 = $("<span>");
            node2824.append(nodes10832);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root15203 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root15203); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes10832;
              nodes10832 = node.contents();
              oldNodes.replaceWith(nodes10832);
            }));
            
            var node2825 = $("<span>");
            node2825.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp7512 = result__;
              var tmp7430 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp7511 = result__;
                  var result__ = tmp7511;
                  tmp7430.set(result__);
                  
                });
              }));
              
              var nodes10833 = $("<span>");
              node2825.append(nodes10833);
              subs__.addSub((mobl.html)(tmp7430, function(_, callback) {
                var root15204 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root15204); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes10833;
                nodes10833 = node.contents();
                oldNodes.replaceWith(nodes10833);
              }));
              node2824.append(node2825);
              
              
            });
            
            
            
          }
        };
        renderCond647();
        subs__.addSub(tmp7431.addEventListener('change', function() {
          renderCond647();
        }));
        
        callback(root15199); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes10828;
        nodes10828 = node.contents();
        oldNodes.replaceWith(nodes10828);
      }));
      
      
    } else {
      var nodes10834 = $("<span>");
      node2823.append(nodes10834);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.disagreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15205 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp7435 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp7435.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node2826 = $("<span>");
        root15205.append(node2826);
        var condSubs648 = new mobl.CompSubscription();
        subs__.addSub(condSubs648);
        var oldValue648;
        var renderCond648 = function() {
          var value2232 = tmp7435.get();
          if(oldValue648 === value2232) return;
          oldValue648 = value2232;
          var subs__ = condSubs648;
          subs__.unsubscribe();
          node2826.empty();
          if(value2232) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp7432 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp7432.set("A" + qa.get().number + ". ");
            }));
            
            var nodes10835 = $("<span>");
            node2826.append(nodes10835);
            subs__.addSub((mobl.label)(tmp7432, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root15206 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root15206); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes10835;
              nodes10835 = node.contents();
              oldNodes.replaceWith(nodes10835);
            }));
            var nodes10836 = $("<span>");
            node2826.append(nodes10836);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root15207 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root15207); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes10836;
              nodes10836 = node.contents();
              oldNodes.replaceWith(nodes10836);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp7433 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp7433.set("A" + qa.get().number + ". ");
            }));
            
            var nodes10837 = $("<span>");
            node2826.append(nodes10837);
            subs__.addSub((mobl.label)(tmp7433, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root15208 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root15208); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes10837;
              nodes10837 = node.contents();
              oldNodes.replaceWith(nodes10837);
            }));
            var nodes10838 = $("<span>");
            node2826.append(nodes10838);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root15209 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root15209); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes10838;
              nodes10838 = node.contents();
              oldNodes.replaceWith(nodes10838);
            }));
            
            var node2827 = $("<span>");
            node2827.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp7514 = result__;
              var tmp7434 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp7513 = result__;
                  var result__ = tmp7513;
                  tmp7434.set(result__);
                  
                });
              }));
              
              var nodes10839 = $("<span>");
              node2827.append(nodes10839);
              subs__.addSub((mobl.html)(tmp7434, function(_, callback) {
                var root15210 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root15210); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes10839;
                nodes10839 = node.contents();
                oldNodes.replaceWith(nodes10839);
              }));
              node2826.append(node2827);
              
              
            });
            
            
            
          }
        };
        renderCond648();
        subs__.addSub(tmp7435.addEventListener('change', function() {
          renderCond648();
        }));
        
        callback(root15205); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes10834;
        nodes10834 = node.contents();
        oldNodes.replaceWith(nodes10834);
      }));
      
      
    }
  };
  renderCond646();
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    renderCond646();
  }));
  
  var nodes10840 = $("<span>");
  root15198.append(nodes10840);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root15211 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2828 = $("<span>");
    node2828.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp7516 = result__;
      var tmp7436 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp7515 = result__;
          var result__ = tmp7515;
          tmp7436.set(result__);
          
        });
      }));
      
      var nodes10844 = $("<span>");
      node2828.append(nodes10844);
      subs__.addSub((mobl.html)(tmp7436, function(_, callback) {
        var root15215 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15215); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10844;
        nodes10844 = node.contents();
        oldNodes.replaceWith(nodes10844);
      }));
      root15211.append(node2828);
      var nodes10841 = $("<span>");
      root15211.append(nodes10841);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15212 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15212); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10841;
        nodes10841 = node.contents();
        oldNodes.replaceWith(nodes10841);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp7437 = mobl.ref(result__);
      
      var nodes10842 = $("<span>");
      root15211.append(nodes10842);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp7437, function(_, callback) {
        var root15213 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15213); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10842;
        nodes10842 = node.contents();
        oldNodes.replaceWith(nodes10842);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp7438 = mobl.ref(result__);
      
      var nodes10843 = $("<span>");
      root15211.append(nodes10843);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp7438, function(_, callback) {
        var root15214 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15214); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10843;
        nodes10843 = node.contents();
        oldNodes.replaceWith(nodes10843);
      }));
      callback(root15211); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10840;
    nodes10840 = node.contents();
    oldNodes.replaceWith(nodes10840);
  }));
  callback(root15198); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp7517 = result__;
    var result__ = tmp7517;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp7518 = result__;
        var result__ = tmp7518;
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
  var root15216 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp7526 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp7440 = mobl.ref(result__);
  
  var nodes10845 = $("<span>");
  root15216.append(nodes10845);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp7440, function(_, callback) {
    var root15217 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp7519 = result__;
                       var result__ = tmp7519;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp7520 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp7439 = mobl.ref(result__);
    
    var nodes10846 = $("<span>");
    root15217.append(nodes10846);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp7439, function(_, callback) {
      var root15218 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15218); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10846;
      nodes10846 = node.contents();
      oldNodes.replaceWith(nodes10846);
    }));
    callback(root15217); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10845;
    nodes10845 = node.contents();
    oldNodes.replaceWith(nodes10845);
  }));
  var nodes10847 = $("<span>");
  root15216.append(nodes10847);
  subs__.addSub((ui.group)(function(_, callback) {
    var root15219 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp7525 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7443 = mobl.ref(result__);
    
    var nodes10848 = $("<span>");
    root15219.append(nodes10848);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp7443, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root15220 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + qa.get().number + ". " + qa.get().question;
      var tmp7441 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
        tmp7441.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp7441.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      
      var nodes10849 = $("<span>");
      root15220.append(nodes10849);
      subs__.addSub((mobl.html)(tmp7441, function(_, callback) {
        var root15221 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15221); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10849;
        nodes10849 = node.contents();
        oldNodes.replaceWith(nodes10849);
      }));
      
      var node2829 = $("<span>");
      node2829.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp7522 = result__;
        var tmp7442 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp7521 = result__;
            var result__ = tmp7521;
            tmp7442.set(result__);
            
          });
        }));
        
        var nodes10850 = $("<span>");
        node2829.append(nodes10850);
        subs__.addSub((mobl.html)(tmp7442, function(_, callback) {
          var root15222 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root15222); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes10850;
          nodes10850 = node.contents();
          oldNodes.replaceWith(nodes10850);
        }));
        root15220.append(node2829);
        callback(root15220); return subs__;
        
      });
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10848;
      nodes10848 = node.contents();
      oldNodes.replaceWith(nodes10848);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp7524 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7445 = mobl.ref(result__);
    
    var nodes10851 = $("<span>");
    root15219.append(nodes10851);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7445, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root15223 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10852 = $("<span>");
      root15223.append(nodes10852);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15224 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp7523 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp7444 = mobl.ref(result__);
        
        var nodes10853 = $("<span>");
        root15224.append(nodes10853);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp7444, function(_, callback) {
          var root15225 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root15225); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes10853;
          nodes10853 = node.contents();
          oldNodes.replaceWith(nodes10853);
        }));
        callback(root15224); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes10852;
        nodes10852 = node.contents();
        oldNodes.replaceWith(nodes10852);
      }));
      
      var node2830 = $("<span>");
      root15223.append(node2830);
      var condSubs649 = new mobl.CompSubscription();
      subs__.addSub(condSubs649);
      var oldValue649;
      var renderCond649 = function() {
        var value2233 = qa.get().done;
        if(oldValue649 === value2233) return;
        oldValue649 = value2233;
        var subs__ = condSubs649;
        subs__.unsubscribe();
        node2830.empty();
        if(value2233) {
          var nodes10854 = $("<span>");
          node2830.append(nodes10854);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, function(_, callback) {
            var root15226 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root15226); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes10854;
            nodes10854 = node.contents();
            oldNodes.replaceWith(nodes10854);
          }));
          
          
        } else {
          
        }
      };
      renderCond649();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond649();
      }));
      
      callback(root15223); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10851;
      nodes10851 = node.contents();
      oldNodes.replaceWith(nodes10851);
    }));
    callback(root15219); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10847;
    nodes10847 = node.contents();
    oldNodes.replaceWith(nodes10847);
  }));
  callback(root15216); return subs__;
  
  
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
  qas.list(function(coll2528) {
    coll2528 = coll2528.reverse();
    function processOne120() {
      var item;
      item = coll2528.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll2528.length > 0) processOne120(); else rest120();
      
    }
    function rest120() {
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
    if(coll2528.length > 0) processOne120(); else rest120();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll2529) {
    coll2529 = coll2529.reverse();
    function processOne121() {
      var item;
      item = coll2529.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll2529.length > 0) processOne121(); else rest121();
      
    }
    function rest121() {
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
    if(coll2529.length > 0) processOne121(); else rest121();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll2530) {
    coll2530 = coll2530.reverse();
    function processOne122() {
      var item;
      item = coll2530.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll2530.length > 0) processOne122(); else rest122();
      
    }
    function rest122() {
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
    if(coll2530.length > 0) processOne122(); else rest122();
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