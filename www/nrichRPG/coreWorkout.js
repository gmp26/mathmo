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
    var tmp3336 = result__;
    var result__ = tmp3336;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp3337 = result__;
      var result__ = tmp3337;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp3338 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll528) {
    coll528 = coll528.reverse();
    function processOne114() {
      var i;
      i = coll528.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp3339 = result__;
        
        if(coll528.length > 0) processOne114(); else rest114();
        
      });
    }
    function rest114() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll528.length > 0) processOne114(); else rest114();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll529) {
    coll529 = coll529.reverse();
    function processOne115() {
      var i;
      i = coll529.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp3341 = result__;
          
          if(coll529.length > 0) processOne115(); else rest115();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp3341 = result__;
            
            if(coll529.length > 0) processOne115(); else rest115();
            
          });
        }
      }
    }
    function rest115() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll529.length > 0) processOne115(); else rest115();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll530) {
    coll530 = coll530.reverse();
    function processOne116() {
      var i;
      i = coll530.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp3342 = result__;
        
        if(coll530.length > 0) processOne116(); else rest116();
        
      });
    }
    function rest116() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll530.length > 0) processOne116(); else rest116();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root4137 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3418 = $("<span>");
  root4137.append(nodes3418);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4138 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3351 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3237 = mobl.ref(result__);
    
    var nodes3419 = $("<span>");
    root4138.append(nodes3419);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3237, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4139 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3420 = $("<span>");
      root4139.append(nodes3420);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4140 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4140); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3420;
        nodes3420 = node.contents();
        oldNodes.replaceWith(nodes3420);
      }));
      callback(root4139); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3419;
      nodes3419 = node.contents();
      oldNodes.replaceWith(nodes3419);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3349 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3238 = mobl.ref(result__);
    
    var nodes3421 = $("<span>");
    root4138.append(nodes3421);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3238, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4141 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3422 = $("<span>");
      root4141.append(nodes3422);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4142 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4142); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3422;
        nodes3422 = node.contents();
        oldNodes.replaceWith(nodes3422);
      }));
      callback(root4141); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3421;
      nodes3421 = node.contents();
      oldNodes.replaceWith(nodes3421);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3348 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3239 = mobl.ref(result__);
    
    var nodes3423 = $("<span>");
    root4138.append(nodes3423);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3239, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4143 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3424 = $("<span>");
      root4143.append(nodes3424);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4144 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4144); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3424;
        nodes3424 = node.contents();
        oldNodes.replaceWith(nodes3424);
      }));
      callback(root4143); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3423;
      nodes3423 = node.contents();
      oldNodes.replaceWith(nodes3423);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3347 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3241 = mobl.ref(result__);
    
    var nodes3425 = $("<span>");
    root4138.append(nodes3425);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3241, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4145 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3426 = $("<span>");
      root4145.append(nodes3426);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4146 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4146); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3426;
        nodes3426 = node.contents();
        oldNodes.replaceWith(nodes3426);
      }));
      callback(root4145); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3425;
      nodes3425 = node.contents();
      oldNodes.replaceWith(nodes3425);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3346 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3242 = mobl.ref(result__);
    
    var nodes3427 = $("<span>");
    root4138.append(nodes3427);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3242, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4147 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3428 = $("<span>");
      root4147.append(nodes3428);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4148 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4148); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3428;
        nodes3428 = node.contents();
        oldNodes.replaceWith(nodes3428);
      }));
      callback(root4147); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3427;
      nodes3427 = node.contents();
      oldNodes.replaceWith(nodes3427);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3345 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3243 = mobl.ref(result__);
    
    var nodes3429 = $("<span>");
    root4138.append(nodes3429);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3243, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4149 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3430 = $("<span>");
      root4149.append(nodes3430);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4150 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4150); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3430;
        nodes3430 = node.contents();
        oldNodes.replaceWith(nodes3430);
      }));
      callback(root4149); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3429;
      nodes3429 = node.contents();
      oldNodes.replaceWith(nodes3429);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3344 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3244 = mobl.ref(result__);
    
    var nodes3431 = $("<span>");
    root4138.append(nodes3431);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3244, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4151 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3432 = $("<span>");
      root4151.append(nodes3432);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4152 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4152); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3432;
        nodes3432 = node.contents();
        oldNodes.replaceWith(nodes3432);
      }));
      callback(root4151); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3431;
      nodes3431 = node.contents();
      oldNodes.replaceWith(nodes3431);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp3343 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3245 = mobl.ref(result__);
    
    var nodes3433 = $("<span>");
    root4138.append(nodes3433);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3245, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4153 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3434 = $("<span>");
      root4153.append(nodes3434);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4154 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4154); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3434;
        nodes3434 = node.contents();
        oldNodes.replaceWith(nodes3434);
      }));
      callback(root4153); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3433;
      nodes3433 = node.contents();
      oldNodes.replaceWith(nodes3433);
    }));
    callback(root4138); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3418;
    nodes3418 = node.contents();
    oldNodes.replaceWith(nodes3418);
  }));
  callback(root4137); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root4155 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes3435 = $("<span>");
  root4155.append(nodes3435);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(null), function(_, callback) {
    var root4156 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3247 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3246 = mobl.ref(result__);
    
    var nodes3436 = $("<span>");
    root4156.append(nodes3436);
    subs__.addSub((ui.backButton)(tmp3246, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3247, function(_, callback) {
      var root4157 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4157); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3436;
      nodes3436 = node.contents();
      oldNodes.replaceWith(nodes3436);
    }));
    callback(root4156); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3435;
    nodes3435 = node.contents();
    oldNodes.replaceWith(nodes3435);
  }));
  var nodes3437 = $("<span>");
  root4155.append(nodes3437);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4158 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp3359 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3248 = mobl.ref(result__);
    
    var nodes3438 = $("<span>");
    root4158.append(nodes3438);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3248, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4159 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3439 = $("<span>");
      root4159.append(nodes3439);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4160 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4160); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3439;
        nodes3439 = node.contents();
        oldNodes.replaceWith(nodes3439);
      }));
      callback(root4159); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3438;
      nodes3438 = node.contents();
      oldNodes.replaceWith(nodes3438);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp3358 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3249 = mobl.ref(result__);
    
    var nodes3440 = $("<span>");
    root4158.append(nodes3440);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3249, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4161 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3441 = $("<span>");
      root4161.append(nodes3441);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4162 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4162); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3441;
        nodes3441 = node.contents();
        oldNodes.replaceWith(nodes3441);
      }));
      callback(root4161); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3440;
      nodes3440 = node.contents();
      oldNodes.replaceWith(nodes3440);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp3357 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3251 = mobl.ref(result__);
    
    var nodes3442 = $("<span>");
    root4158.append(nodes3442);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3251, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4163 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3443 = $("<span>");
      root4163.append(nodes3443);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4164 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4164); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3443;
        nodes3443 = node.contents();
        oldNodes.replaceWith(nodes3443);
      }));
      callback(root4163); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3442;
      nodes3442 = node.contents();
      oldNodes.replaceWith(nodes3442);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp3356 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3252 = mobl.ref(result__);
    
    var nodes3444 = $("<span>");
    root4158.append(nodes3444);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3252, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4165 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3445 = $("<span>");
      root4165.append(nodes3445);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4166 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4166); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3445;
        nodes3445 = node.contents();
        oldNodes.replaceWith(nodes3445);
      }));
      callback(root4165); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3444;
      nodes3444 = node.contents();
      oldNodes.replaceWith(nodes3444);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp3355 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3253 = mobl.ref(result__);
    
    var nodes3446 = $("<span>");
    root4158.append(nodes3446);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3253, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4167 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3447 = $("<span>");
      root4167.append(nodes3447);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4168 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4168); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3447;
        nodes3447 = node.contents();
        oldNodes.replaceWith(nodes3447);
      }));
      callback(root4167); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3446;
      nodes3446 = node.contents();
      oldNodes.replaceWith(nodes3446);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp3354 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3254 = mobl.ref(result__);
    
    var nodes3448 = $("<span>");
    root4158.append(nodes3448);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3254, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4169 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3449 = $("<span>");
      root4169.append(nodes3449);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4170 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4170); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3449;
        nodes3449 = node.contents();
        oldNodes.replaceWith(nodes3449);
      }));
      callback(root4169); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3448;
      nodes3448 = node.contents();
      oldNodes.replaceWith(nodes3448);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp3353 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3255 = mobl.ref(result__);
    
    var nodes3450 = $("<span>");
    root4158.append(nodes3450);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3255, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4171 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3451 = $("<span>");
      root4171.append(nodes3451);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4172 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4172); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3451;
        nodes3451 = node.contents();
        oldNodes.replaceWith(nodes3451);
      }));
      callback(root4171); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3450;
      nodes3450 = node.contents();
      oldNodes.replaceWith(nodes3450);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp3352 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3256 = mobl.ref(result__);
    
    var nodes3452 = $("<span>");
    root4158.append(nodes3452);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3256, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4173 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3453 = $("<span>");
      root4173.append(nodes3453);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4174 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4174); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3453;
        nodes3453 = node.contents();
        oldNodes.replaceWith(nodes3453);
      }));
      callback(root4173); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3452;
      nodes3452 = node.contents();
      oldNodes.replaceWith(nodes3452);
    }));
    callback(root4158); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3437;
    nodes3437 = node.contents();
    oldNodes.replaceWith(nodes3437);
  }));
  callback(root4155); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root4175 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes3454 = $("<span>");
  root4175.append(nodes3454);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(null), function(_, callback) {
    var root4176 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3258 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3257 = mobl.ref(result__);
    
    var nodes3455 = $("<span>");
    root4176.append(nodes3455);
    subs__.addSub((ui.backButton)(tmp3257, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3258, function(_, callback) {
      var root4177 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4177); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3455;
      nodes3455 = node.contents();
      oldNodes.replaceWith(nodes3455);
    }));
    callback(root4176); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3454;
    nodes3454 = node.contents();
    oldNodes.replaceWith(nodes3454);
  }));
  var nodes3456 = $("<span>");
  root4175.append(nodes3456);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4178 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp3364 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3259 = mobl.ref(result__);
    
    var nodes3457 = $("<span>");
    root4178.append(nodes3457);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3259, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4179 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3458 = $("<span>");
      root4179.append(nodes3458);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4180 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4180); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3458;
        nodes3458 = node.contents();
        oldNodes.replaceWith(nodes3458);
      }));
      callback(root4179); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3457;
      nodes3457 = node.contents();
      oldNodes.replaceWith(nodes3457);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp3363 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3261 = mobl.ref(result__);
    
    var nodes3459 = $("<span>");
    root4178.append(nodes3459);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3261, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4181 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3460 = $("<span>");
      root4181.append(nodes3460);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4182 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4182); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3460;
        nodes3460 = node.contents();
        oldNodes.replaceWith(nodes3460);
      }));
      callback(root4181); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3459;
      nodes3459 = node.contents();
      oldNodes.replaceWith(nodes3459);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp3362 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3262 = mobl.ref(result__);
    
    var nodes3461 = $("<span>");
    root4178.append(nodes3461);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3262, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4183 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3462 = $("<span>");
      root4183.append(nodes3462);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4184 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4184); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3462;
        nodes3462 = node.contents();
        oldNodes.replaceWith(nodes3462);
      }));
      callback(root4183); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3461;
      nodes3461 = node.contents();
      oldNodes.replaceWith(nodes3461);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp3361 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3263 = mobl.ref(result__);
    
    var nodes3463 = $("<span>");
    root4178.append(nodes3463);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3263, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4185 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3464 = $("<span>");
      root4185.append(nodes3464);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4186 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4186); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3464;
        nodes3464 = node.contents();
        oldNodes.replaceWith(nodes3464);
      }));
      callback(root4185); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3463;
      nodes3463 = node.contents();
      oldNodes.replaceWith(nodes3463);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp3360 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3264 = mobl.ref(result__);
    
    var nodes3465 = $("<span>");
    root4178.append(nodes3465);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3264, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4187 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3466 = $("<span>");
      root4187.append(nodes3466);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4188 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4188); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3466;
        nodes3466 = node.contents();
        oldNodes.replaceWith(nodes3466);
      }));
      callback(root4187); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3465;
      nodes3465 = node.contents();
      oldNodes.replaceWith(nodes3465);
    }));
    callback(root4178); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3456;
    nodes3456 = node.contents();
    oldNodes.replaceWith(nodes3456);
  }));
  callback(root4175); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root4189 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes3467 = $("<span>");
  root4189.append(nodes3467);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(null), function(_, callback) {
    var root4190 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3266 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3265 = mobl.ref(result__);
    
    var nodes3468 = $("<span>");
    root4190.append(nodes3468);
    subs__.addSub((ui.backButton)(tmp3265, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3266, function(_, callback) {
      var root4191 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4191); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3468;
      nodes3468 = node.contents();
      oldNodes.replaceWith(nodes3468);
    }));
    callback(root4190); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3467;
    nodes3467 = node.contents();
    oldNodes.replaceWith(nodes3467);
  }));
  var nodes3469 = $("<span>");
  root4189.append(nodes3469);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4192 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp3367 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3267 = mobl.ref(result__);
    
    var nodes3470 = $("<span>");
    root4192.append(nodes3470);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3267, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4193 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3471 = $("<span>");
      root4193.append(nodes3471);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4194 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4194); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3471;
        nodes3471 = node.contents();
        oldNodes.replaceWith(nodes3471);
      }));
      callback(root4193); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3470;
      nodes3470 = node.contents();
      oldNodes.replaceWith(nodes3470);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp3366 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3268 = mobl.ref(result__);
    
    var nodes3472 = $("<span>");
    root4192.append(nodes3472);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3268, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4195 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3473 = $("<span>");
      root4195.append(nodes3473);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4196 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4196); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3473;
        nodes3473 = node.contents();
        oldNodes.replaceWith(nodes3473);
      }));
      callback(root4195); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3472;
      nodes3472 = node.contents();
      oldNodes.replaceWith(nodes3472);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp3365 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3269 = mobl.ref(result__);
    
    var nodes3474 = $("<span>");
    root4192.append(nodes3474);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3269, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4197 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3475 = $("<span>");
      root4197.append(nodes3475);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4198 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4198); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3475;
        nodes3475 = node.contents();
        oldNodes.replaceWith(nodes3475);
      }));
      callback(root4197); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3474;
      nodes3474 = node.contents();
      oldNodes.replaceWith(nodes3474);
    }));
    callback(root4192); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3469;
    nodes3469 = node.contents();
    oldNodes.replaceWith(nodes3469);
  }));
  callback(root4189); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root4199 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes3476 = $("<span>");
  root4199.append(nodes3476);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(null), function(_, callback) {
    var root4200 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3272 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3271 = mobl.ref(result__);
    
    var nodes3477 = $("<span>");
    root4200.append(nodes3477);
    subs__.addSub((ui.backButton)(tmp3271, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3272, function(_, callback) {
      var root4201 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4201); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3477;
      nodes3477 = node.contents();
      oldNodes.replaceWith(nodes3477);
    }));
    callback(root4200); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3476;
    nodes3476 = node.contents();
    oldNodes.replaceWith(nodes3476);
  }));
  var nodes3478 = $("<span>");
  root4199.append(nodes3478);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4202 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp3372 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3273 = mobl.ref(result__);
    
    var nodes3479 = $("<span>");
    root4202.append(nodes3479);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3273, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4203 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3480 = $("<span>");
      root4203.append(nodes3480);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4204 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4204); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3480;
        nodes3480 = node.contents();
        oldNodes.replaceWith(nodes3480);
      }));
      callback(root4203); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3479;
      nodes3479 = node.contents();
      oldNodes.replaceWith(nodes3479);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp3371 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3274 = mobl.ref(result__);
    
    var nodes3481 = $("<span>");
    root4202.append(nodes3481);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3274, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4205 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3482 = $("<span>");
      root4205.append(nodes3482);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4206 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4206); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3482;
        nodes3482 = node.contents();
        oldNodes.replaceWith(nodes3482);
      }));
      callback(root4205); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3481;
      nodes3481 = node.contents();
      oldNodes.replaceWith(nodes3481);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp3369 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3275 = mobl.ref(result__);
    
    var nodes3483 = $("<span>");
    root4202.append(nodes3483);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3275, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4207 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3484 = $("<span>");
      root4207.append(nodes3484);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4208 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4208); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3484;
        nodes3484 = node.contents();
        oldNodes.replaceWith(nodes3484);
      }));
      callback(root4207); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3483;
      nodes3483 = node.contents();
      oldNodes.replaceWith(nodes3483);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp3368 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3276 = mobl.ref(result__);
    
    var nodes3485 = $("<span>");
    root4202.append(nodes3485);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3276, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4209 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3486 = $("<span>");
      root4209.append(nodes3486);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4210 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4210); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3486;
        nodes3486 = node.contents();
        oldNodes.replaceWith(nodes3486);
      }));
      callback(root4209); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3485;
      nodes3485 = node.contents();
      oldNodes.replaceWith(nodes3485);
    }));
    callback(root4202); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3478;
    nodes3478 = node.contents();
    oldNodes.replaceWith(nodes3478);
  }));
  callback(root4199); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root4211 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes3487 = $("<span>");
  root4211.append(nodes3487);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(null), function(_, callback) {
    var root4212 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3278 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3277 = mobl.ref(result__);
    
    var nodes3488 = $("<span>");
    root4212.append(nodes3488);
    subs__.addSub((ui.backButton)(tmp3277, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3278, function(_, callback) {
      var root4213 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4213); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3488;
      nodes3488 = node.contents();
      oldNodes.replaceWith(nodes3488);
    }));
    callback(root4212); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3487;
    nodes3487 = node.contents();
    oldNodes.replaceWith(nodes3487);
  }));
  var nodes3489 = $("<span>");
  root4211.append(nodes3489);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4214 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp3374 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3279 = mobl.ref(result__);
    
    var nodes3490 = $("<span>");
    root4214.append(nodes3490);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3279, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4215 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3491 = $("<span>");
      root4215.append(nodes3491);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4216 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4216); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3491;
        nodes3491 = node.contents();
        oldNodes.replaceWith(nodes3491);
      }));
      callback(root4215); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3490;
      nodes3490 = node.contents();
      oldNodes.replaceWith(nodes3490);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp3373 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3280 = mobl.ref(result__);
    
    var nodes3492 = $("<span>");
    root4214.append(nodes3492);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3280, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4217 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3493 = $("<span>");
      root4217.append(nodes3493);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4218 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4218); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3493;
        nodes3493 = node.contents();
        oldNodes.replaceWith(nodes3493);
      }));
      callback(root4217); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3492;
      nodes3492 = node.contents();
      oldNodes.replaceWith(nodes3492);
    }));
    callback(root4214); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3489;
    nodes3489 = node.contents();
    oldNodes.replaceWith(nodes3489);
  }));
  callback(root4211); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root4219 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes3494 = $("<span>");
  root4219.append(nodes3494);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(null), function(_, callback) {
    var root4220 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3282 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3281 = mobl.ref(result__);
    
    var nodes3495 = $("<span>");
    root4220.append(nodes3495);
    subs__.addSub((ui.backButton)(tmp3281, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3282, function(_, callback) {
      var root4221 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4221); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3495;
      nodes3495 = node.contents();
      oldNodes.replaceWith(nodes3495);
    }));
    callback(root4220); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3494;
    nodes3494 = node.contents();
    oldNodes.replaceWith(nodes3494);
  }));
  var nodes3496 = $("<span>");
  root4219.append(nodes3496);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4222 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp3379 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3283 = mobl.ref(result__);
    
    var nodes3497 = $("<span>");
    root4222.append(nodes3497);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3283, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4223 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3498 = $("<span>");
      root4223.append(nodes3498);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4224 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4224); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3498;
        nodes3498 = node.contents();
        oldNodes.replaceWith(nodes3498);
      }));
      callback(root4223); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3497;
      nodes3497 = node.contents();
      oldNodes.replaceWith(nodes3497);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp3378 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3284 = mobl.ref(result__);
    
    var nodes3499 = $("<span>");
    root4222.append(nodes3499);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3284, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4225 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3500 = $("<span>");
      root4225.append(nodes3500);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4226 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4226); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3500;
        nodes3500 = node.contents();
        oldNodes.replaceWith(nodes3500);
      }));
      callback(root4225); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3499;
      nodes3499 = node.contents();
      oldNodes.replaceWith(nodes3499);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp3377 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3285 = mobl.ref(result__);
    
    var nodes3501 = $("<span>");
    root4222.append(nodes3501);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3285, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4227 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3502 = $("<span>");
      root4227.append(nodes3502);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4228 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4228); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3502;
        nodes3502 = node.contents();
        oldNodes.replaceWith(nodes3502);
      }));
      callback(root4227); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3501;
      nodes3501 = node.contents();
      oldNodes.replaceWith(nodes3501);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp3376 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3286 = mobl.ref(result__);
    
    var nodes3503 = $("<span>");
    root4222.append(nodes3503);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3286, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4229 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3504 = $("<span>");
      root4229.append(nodes3504);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4230 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4230); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3504;
        nodes3504 = node.contents();
        oldNodes.replaceWith(nodes3504);
      }));
      callback(root4229); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3503;
      nodes3503 = node.contents();
      oldNodes.replaceWith(nodes3503);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp3375 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3287 = mobl.ref(result__);
    
    var nodes3505 = $("<span>");
    root4222.append(nodes3505);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3287, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4231 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3506 = $("<span>");
      root4231.append(nodes3506);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4232 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4232); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3506;
        nodes3506 = node.contents();
        oldNodes.replaceWith(nodes3506);
      }));
      callback(root4231); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3505;
      nodes3505 = node.contents();
      oldNodes.replaceWith(nodes3505);
    }));
    callback(root4222); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3496;
    nodes3496 = node.contents();
    oldNodes.replaceWith(nodes3496);
  }));
  callback(root4219); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root4233 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes3507 = $("<span>");
  root4233.append(nodes3507);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(null), function(_, callback) {
    var root4234 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3289 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3288 = mobl.ref(result__);
    
    var nodes3508 = $("<span>");
    root4234.append(nodes3508);
    subs__.addSub((ui.backButton)(tmp3288, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3289, function(_, callback) {
      var root4235 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4235); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3508;
      nodes3508 = node.contents();
      oldNodes.replaceWith(nodes3508);
    }));
    callback(root4234); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3507;
    nodes3507 = node.contents();
    oldNodes.replaceWith(nodes3507);
  }));
  var nodes3509 = $("<span>");
  root4233.append(nodes3509);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4236 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp3382 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3291 = mobl.ref(result__);
    
    var nodes3510 = $("<span>");
    root4236.append(nodes3510);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3291, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4237 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3511 = $("<span>");
      root4237.append(nodes3511);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4238 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4238); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3511;
        nodes3511 = node.contents();
        oldNodes.replaceWith(nodes3511);
      }));
      callback(root4237); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3510;
      nodes3510 = node.contents();
      oldNodes.replaceWith(nodes3510);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp3381 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3292 = mobl.ref(result__);
    
    var nodes3512 = $("<span>");
    root4236.append(nodes3512);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3292, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4239 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3513 = $("<span>");
      root4239.append(nodes3513);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4240 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4240); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3513;
        nodes3513 = node.contents();
        oldNodes.replaceWith(nodes3513);
      }));
      callback(root4239); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3512;
      nodes3512 = node.contents();
      oldNodes.replaceWith(nodes3512);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp3380 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3293 = mobl.ref(result__);
    
    var nodes3514 = $("<span>");
    root4236.append(nodes3514);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3293, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4241 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3515 = $("<span>");
      root4241.append(nodes3515);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4242 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4242); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3515;
        nodes3515 = node.contents();
        oldNodes.replaceWith(nodes3515);
      }));
      callback(root4241); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3514;
      nodes3514 = node.contents();
      oldNodes.replaceWith(nodes3514);
    }));
    callback(root4236); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3509;
    nodes3509 = node.contents();
    oldNodes.replaceWith(nodes3509);
  }));
  callback(root4233); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root4243 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes3516 = $("<span>");
  root4243.append(nodes3516);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(null), function(_, callback) {
    var root4244 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3295 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp3294 = mobl.ref(result__);
    
    var nodes3517 = $("<span>");
    root4244.append(nodes3517);
    subs__.addSub((ui.backButton)(tmp3294, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp3295, function(_, callback) {
      var root4245 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4245); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3517;
      nodes3517 = node.contents();
      oldNodes.replaceWith(nodes3517);
    }));
    callback(root4244); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3516;
    nodes3516 = node.contents();
    oldNodes.replaceWith(nodes3516);
  }));
  var nodes3518 = $("<span>");
  root4243.append(nodes3518);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4246 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp3383 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3296 = mobl.ref(result__);
    
    var nodes3519 = $("<span>");
    root4246.append(nodes3519);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3296, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4247 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3520 = $("<span>");
      root4247.append(nodes3520);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4248 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4248); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3520;
        nodes3520 = node.contents();
        oldNodes.replaceWith(nodes3520);
      }));
      callback(root4247); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3519;
      nodes3519 = node.contents();
      oldNodes.replaceWith(nodes3519);
    }));
    callback(root4246); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3518;
    nodes3518 = node.contents();
    oldNodes.replaceWith(nodes3518);
  }));
  callback(root4243); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root4249 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3521 = $("<span>");
  root4249.append(nodes3521);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4250 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp3397 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3297 = mobl.ref(result__);
    
    var nodes3522 = $("<span>");
    root4250.append(nodes3522);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3297, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4251 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3523 = $("<span>");
      root4251.append(nodes3523);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4252 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4252); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3523;
        nodes3523 = node.contents();
        oldNodes.replaceWith(nodes3523);
      }));
      callback(root4251); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3522;
      nodes3522 = node.contents();
      oldNodes.replaceWith(nodes3522);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp3396 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3298 = mobl.ref(result__);
    
    var nodes3524 = $("<span>");
    root4250.append(nodes3524);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3298, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4253 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3525 = $("<span>");
      root4253.append(nodes3525);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4254 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4254); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3525;
        nodes3525 = node.contents();
        oldNodes.replaceWith(nodes3525);
      }));
      callback(root4253); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3524;
      nodes3524 = node.contents();
      oldNodes.replaceWith(nodes3524);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp3395 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3299 = mobl.ref(result__);
    
    var nodes3526 = $("<span>");
    root4250.append(nodes3526);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3299, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4255 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3527 = $("<span>");
      root4255.append(nodes3527);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4256 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4256); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3527;
        nodes3527 = node.contents();
        oldNodes.replaceWith(nodes3527);
      }));
      callback(root4255); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3526;
      nodes3526 = node.contents();
      oldNodes.replaceWith(nodes3526);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp3394 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3300 = mobl.ref(result__);
    
    var nodes3528 = $("<span>");
    root4250.append(nodes3528);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3300, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4257 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3529 = $("<span>");
      root4257.append(nodes3529);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4258 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4258); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3529;
        nodes3529 = node.contents();
        oldNodes.replaceWith(nodes3529);
      }));
      callback(root4257); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3528;
      nodes3528 = node.contents();
      oldNodes.replaceWith(nodes3528);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp3393 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3301 = mobl.ref(result__);
    
    var nodes3530 = $("<span>");
    root4250.append(nodes3530);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3301, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4259 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3531 = $("<span>");
      root4259.append(nodes3531);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4260 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4260); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3531;
        nodes3531 = node.contents();
        oldNodes.replaceWith(nodes3531);
      }));
      callback(root4259); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3530;
      nodes3530 = node.contents();
      oldNodes.replaceWith(nodes3530);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp3392 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3302 = mobl.ref(result__);
    
    var nodes3532 = $("<span>");
    root4250.append(nodes3532);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3302, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4261 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3533 = $("<span>");
      root4261.append(nodes3533);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4262 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4262); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3533;
        nodes3533 = node.contents();
        oldNodes.replaceWith(nodes3533);
      }));
      callback(root4261); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3532;
      nodes3532 = node.contents();
      oldNodes.replaceWith(nodes3532);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp3391 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3303 = mobl.ref(result__);
    
    var nodes3534 = $("<span>");
    root4250.append(nodes3534);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3303, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4263 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3535 = $("<span>");
      root4263.append(nodes3535);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4264 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4264); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3535;
        nodes3535 = node.contents();
        oldNodes.replaceWith(nodes3535);
      }));
      callback(root4263); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3534;
      nodes3534 = node.contents();
      oldNodes.replaceWith(nodes3534);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp3389 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3304 = mobl.ref(result__);
    
    var nodes3536 = $("<span>");
    root4250.append(nodes3536);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3304, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4265 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3537 = $("<span>");
      root4265.append(nodes3537);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4266 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4266); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3537;
        nodes3537 = node.contents();
        oldNodes.replaceWith(nodes3537);
      }));
      callback(root4265); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3536;
      nodes3536 = node.contents();
      oldNodes.replaceWith(nodes3536);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp3388 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3305 = mobl.ref(result__);
    
    var nodes3538 = $("<span>");
    root4250.append(nodes3538);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3305, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4267 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3539 = $("<span>");
      root4267.append(nodes3539);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4268 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4268); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3539;
        nodes3539 = node.contents();
        oldNodes.replaceWith(nodes3539);
      }));
      callback(root4267); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3538;
      nodes3538 = node.contents();
      oldNodes.replaceWith(nodes3538);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp3387 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3306 = mobl.ref(result__);
    
    var nodes3540 = $("<span>");
    root4250.append(nodes3540);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3306, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4269 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3541 = $("<span>");
      root4269.append(nodes3541);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4270 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4270); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3541;
        nodes3541 = node.contents();
        oldNodes.replaceWith(nodes3541);
      }));
      callback(root4269); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3540;
      nodes3540 = node.contents();
      oldNodes.replaceWith(nodes3540);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp3386 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3307 = mobl.ref(result__);
    
    var nodes3542 = $("<span>");
    root4250.append(nodes3542);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3307, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4271 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3543 = $("<span>");
      root4271.append(nodes3543);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4272 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4272); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3543;
        nodes3543 = node.contents();
        oldNodes.replaceWith(nodes3543);
      }));
      callback(root4271); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3542;
      nodes3542 = node.contents();
      oldNodes.replaceWith(nodes3542);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp3385 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3308 = mobl.ref(result__);
    
    var nodes3544 = $("<span>");
    root4250.append(nodes3544);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3308, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4273 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3545 = $("<span>");
      root4273.append(nodes3545);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4274 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4274); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3545;
        nodes3545 = node.contents();
        oldNodes.replaceWith(nodes3545);
      }));
      callback(root4273); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3544;
      nodes3544 = node.contents();
      oldNodes.replaceWith(nodes3544);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp3384 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3309 = mobl.ref(result__);
    
    var nodes3546 = $("<span>");
    root4250.append(nodes3546);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3309, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4275 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3547 = $("<span>");
      root4275.append(nodes3547);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4276 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4276); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3547;
        nodes3547 = node.contents();
        oldNodes.replaceWith(nodes3547);
      }));
      callback(root4275); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3546;
      nodes3546 = node.contents();
      oldNodes.replaceWith(nodes3546);
    }));
    callback(root4250); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3521;
    nodes3521 = node.contents();
    oldNodes.replaceWith(nodes3521);
  }));
  callback(root4249); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root4277 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3548 = $("<span>");
  root4277.append(nodes3548);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4278 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp3404 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3310 = mobl.ref(result__);
    
    var nodes3549 = $("<span>");
    root4278.append(nodes3549);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3310, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4279 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3550 = $("<span>");
      root4279.append(nodes3550);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4280 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4280); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3550;
        nodes3550 = node.contents();
        oldNodes.replaceWith(nodes3550);
      }));
      callback(root4279); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3549;
      nodes3549 = node.contents();
      oldNodes.replaceWith(nodes3549);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp3403 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3311 = mobl.ref(result__);
    
    var nodes3551 = $("<span>");
    root4278.append(nodes3551);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3311, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4281 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3552 = $("<span>");
      root4281.append(nodes3552);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4282 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4282); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3552;
        nodes3552 = node.contents();
        oldNodes.replaceWith(nodes3552);
      }));
      callback(root4281); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3551;
      nodes3551 = node.contents();
      oldNodes.replaceWith(nodes3551);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp3402 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3312 = mobl.ref(result__);
    
    var nodes3553 = $("<span>");
    root4278.append(nodes3553);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3312, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4283 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3554 = $("<span>");
      root4283.append(nodes3554);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4284 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4284); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3554;
        nodes3554 = node.contents();
        oldNodes.replaceWith(nodes3554);
      }));
      callback(root4283); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3553;
      nodes3553 = node.contents();
      oldNodes.replaceWith(nodes3553);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp3401 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3313 = mobl.ref(result__);
    
    var nodes3555 = $("<span>");
    root4278.append(nodes3555);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3313, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4285 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3556 = $("<span>");
      root4285.append(nodes3556);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4286 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4286); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3556;
        nodes3556 = node.contents();
        oldNodes.replaceWith(nodes3556);
      }));
      callback(root4285); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3555;
      nodes3555 = node.contents();
      oldNodes.replaceWith(nodes3555);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp3399 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3314 = mobl.ref(result__);
    
    var nodes3557 = $("<span>");
    root4278.append(nodes3557);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3314, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4287 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3558 = $("<span>");
      root4287.append(nodes3558);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4288 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4288); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3558;
        nodes3558 = node.contents();
        oldNodes.replaceWith(nodes3558);
      }));
      callback(root4287); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3557;
      nodes3557 = node.contents();
      oldNodes.replaceWith(nodes3557);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp3398 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3315 = mobl.ref(result__);
    
    var nodes3559 = $("<span>");
    root4278.append(nodes3559);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3315, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4289 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3560 = $("<span>");
      root4289.append(nodes3560);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4290 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4290); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3560;
        nodes3560 = node.contents();
        oldNodes.replaceWith(nodes3560);
      }));
      callback(root4289); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3559;
      nodes3559 = node.contents();
      oldNodes.replaceWith(nodes3559);
    }));
    callback(root4278); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3548;
    nodes3548 = node.contents();
    oldNodes.replaceWith(nodes3548);
  }));
  callback(root4277); return subs__;
  
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
  var root4291 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node902 = $("<div>");
  
  var ref769 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref769.get() !== null) {
    node902.attr('class', ref769.get());
    subs__.addSub(ref769.addEventListener('change', function(_, ref, val) {
      node902.attr('class', val);
    }));
    
  }
  subs__.addSub(ref769.rebind());
  
  var val405 = onclick.get();
  if(val405 !== null) {
    subs__.addSub(mobl.domBind(node902, 'tap', val405));
  }
  
  
  var node903 = $("<div>");
  
  var ref768 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref768.get() !== null) {
    node903.attr('class', ref768.get());
    subs__.addSub(ref768.addEventListener('change', function(_, ref, val) {
      node903.attr('class', val);
    }));
    
  }
  subs__.addSub(ref768.rebind());
  
  
  var node904 = $("<div>");
  
  var ref766 = text;
  node904.text(""+ref766.get());
  var ignore156 = false;
  subs__.addSub(ref766.addEventListener('change', function(_, ref, val) {
    if(ignore156) return;
    node904.text(""+val);
  }));
  subs__.addSub(ref766.rebind());
  
  
  var ref767 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref767.get() !== null) {
    node904.attr('class', ref767.get());
    subs__.addSub(ref767.addEventListener('change', function(_, ref, val) {
      node904.attr('class', val);
    }));
    
  }
  subs__.addSub(ref767.rebind());
  
  node903.append(node904);
  node902.append(node903);
  var nodes3561 = $("<span>");
  node902.append(nodes3561);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl360();
  }));
  
  function renderControl360() {
    subs__.addSub((elements)(function(elements, callback) {
      var root4292 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4292); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3561;
      nodes3561 = node.contents();
      oldNodes.replaceWith(nodes3561);
    }));
  }
  renderControl360();
  root4291.append(node902);
  callback(root4291); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mobl.sleep(500, function(result__) {
    var tmp3405 = result__;
    mathJAX.renderMaths(function(result__) {
      var tmp3406 = result__;
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
  });
};


nrichRPG.coreWorkout.answerBlock = function(qa, elements, callback) {
  var root4293 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node905 = $("<span>");
  root4293.append(node905);
  var condSubs211 = new mobl.CompSubscription();
  subs__.addSub(condSubs211);
  var oldValue211;
  var renderCond211 = function() {
    var value487 = qa.get().correct;
    if(oldValue211 === value487) return;
    oldValue211 = value487;
    var subs__ = condSubs211;
    subs__.unsubscribe();
    node905.empty();
    if(value487) {
      var nodes3562 = $("<span>");
      node905.append(nodes3562);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.agreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4294 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp3319 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp3319.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node906 = $("<span>");
        root4294.append(node906);
        var condSubs212 = new mobl.CompSubscription();
        subs__.addSub(condSubs212);
        var oldValue212;
        var renderCond212 = function() {
          var value488 = tmp3319.get();
          if(oldValue212 === value488) return;
          oldValue212 = value488;
          var subs__ = condSubs212;
          subs__.unsubscribe();
          node906.empty();
          if(value488) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp3316 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp3316.set("A" + qa.get().number + ". ");
            }));
            
            var nodes3563 = $("<span>");
            node906.append(nodes3563);
            subs__.addSub((mobl.label)(tmp3316, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root4295 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root4295); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes3563;
              nodes3563 = node.contents();
              oldNodes.replaceWith(nodes3563);
            }));
            var nodes3564 = $("<span>");
            node906.append(nodes3564);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root4296 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root4296); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes3564;
              nodes3564 = node.contents();
              oldNodes.replaceWith(nodes3564);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp3317 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp3317.set("A" + qa.get().number + ". ");
            }));
            
            var nodes3565 = $("<span>");
            node906.append(nodes3565);
            subs__.addSub((mobl.label)(tmp3317, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root4297 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root4297); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes3565;
              nodes3565 = node.contents();
              oldNodes.replaceWith(nodes3565);
            }));
            var nodes3566 = $("<span>");
            node906.append(nodes3566);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root4298 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root4298); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes3566;
              nodes3566 = node.contents();
              oldNodes.replaceWith(nodes3566);
            }));
            
            var node907 = $("<span>");
            node907.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp3408 = result__;
              var tmp3318 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp3407 = result__;
                  var result__ = tmp3407;
                  tmp3318.set(result__);
                  
                });
              }));
              
              var nodes3567 = $("<span>");
              node907.append(nodes3567);
              subs__.addSub((mobl.html)(tmp3318, function(_, callback) {
                var root4299 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root4299); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3567;
                nodes3567 = node.contents();
                oldNodes.replaceWith(nodes3567);
              }));
              node906.append(node907);
              
              
            });
            
            
            
          }
        };
        renderCond212();
        subs__.addSub(tmp3319.addEventListener('change', function() {
          renderCond212();
        }));
        
        callback(root4294); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3562;
        nodes3562 = node.contents();
        oldNodes.replaceWith(nodes3562);
      }));
      
      
    } else {
      var nodes3568 = $("<span>");
      node905.append(nodes3568);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.disagreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4300 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp3324 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp3324.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node908 = $("<span>");
        root4300.append(node908);
        var condSubs213 = new mobl.CompSubscription();
        subs__.addSub(condSubs213);
        var oldValue213;
        var renderCond213 = function() {
          var value489 = tmp3324.get();
          if(oldValue213 === value489) return;
          oldValue213 = value489;
          var subs__ = condSubs213;
          subs__.unsubscribe();
          node908.empty();
          if(value489) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp3321 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp3321.set("A" + qa.get().number + ". ");
            }));
            
            var nodes3569 = $("<span>");
            node908.append(nodes3569);
            subs__.addSub((mobl.label)(tmp3321, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root4301 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root4301); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes3569;
              nodes3569 = node.contents();
              oldNodes.replaceWith(nodes3569);
            }));
            var nodes3570 = $("<span>");
            node908.append(nodes3570);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root4302 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root4302); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes3570;
              nodes3570 = node.contents();
              oldNodes.replaceWith(nodes3570);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp3322 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp3322.set("A" + qa.get().number + ". ");
            }));
            
            var nodes3571 = $("<span>");
            node908.append(nodes3571);
            subs__.addSub((mobl.label)(tmp3322, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root4303 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root4303); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes3571;
              nodes3571 = node.contents();
              oldNodes.replaceWith(nodes3571);
            }));
            var nodes3572 = $("<span>");
            node908.append(nodes3572);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root4304 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root4304); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes3572;
              nodes3572 = node.contents();
              oldNodes.replaceWith(nodes3572);
            }));
            
            var node909 = $("<span>");
            node909.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp3411 = result__;
              var tmp3323 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp3409 = result__;
                  var result__ = tmp3409;
                  tmp3323.set(result__);
                  
                });
              }));
              
              var nodes3573 = $("<span>");
              node909.append(nodes3573);
              subs__.addSub((mobl.html)(tmp3323, function(_, callback) {
                var root4305 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root4305); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes3573;
                nodes3573 = node.contents();
                oldNodes.replaceWith(nodes3573);
              }));
              node908.append(node909);
              
              
            });
            
            
            
          }
        };
        renderCond213();
        subs__.addSub(tmp3324.addEventListener('change', function() {
          renderCond213();
        }));
        
        callback(root4300); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3568;
        nodes3568 = node.contents();
        oldNodes.replaceWith(nodes3568);
      }));
      
      
    }
  };
  renderCond211();
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    renderCond211();
  }));
  
  var nodes3574 = $("<span>");
  root4293.append(nodes3574);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root4306 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node910 = $("<span>");
    node910.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp3413 = result__;
      var tmp3325 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp3412 = result__;
          var result__ = tmp3412;
          tmp3325.set(result__);
          
        });
      }));
      
      var nodes3578 = $("<span>");
      node910.append(nodes3578);
      subs__.addSub((mobl.html)(tmp3325, function(_, callback) {
        var root4310 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4310); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3578;
        nodes3578 = node.contents();
        oldNodes.replaceWith(nodes3578);
      }));
      root4306.append(node910);
      var nodes3575 = $("<span>");
      root4306.append(nodes3575);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4307 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4307); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3575;
        nodes3575 = node.contents();
        oldNodes.replaceWith(nodes3575);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp3326 = mobl.ref(result__);
      
      var nodes3576 = $("<span>");
      root4306.append(nodes3576);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp3326, function(_, callback) {
        var root4308 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4308); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3576;
        nodes3576 = node.contents();
        oldNodes.replaceWith(nodes3576);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp3327 = mobl.ref(result__);
      
      var nodes3577 = $("<span>");
      root4306.append(nodes3577);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp3327, function(_, callback) {
        var root4309 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4309); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3577;
        nodes3577 = node.contents();
        oldNodes.replaceWith(nodes3577);
      }));
      callback(root4306); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3574;
    nodes3574 = node.contents();
    oldNodes.replaceWith(nodes3574);
  }));
  callback(root4293); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp3414 = result__;
    var result__ = tmp3414;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp3415 = result__;
        var result__ = tmp3415;
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
  var root4311 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp3424 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp3329 = mobl.ref(result__);
  
  var nodes3579 = $("<span>");
  root4311.append(nodes3579);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp3329, function(_, callback) {
    var root4312 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp3416 = result__;
                       var result__ = tmp3416;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp3417 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp3328 = mobl.ref(result__);
    
    var nodes3580 = $("<span>");
    root4312.append(nodes3580);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp3328, function(_, callback) {
      var root4313 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4313); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3580;
      nodes3580 = node.contents();
      oldNodes.replaceWith(nodes3580);
    }));
    callback(root4312); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3579;
    nodes3579 = node.contents();
    oldNodes.replaceWith(nodes3579);
  }));
  var nodes3581 = $("<span>");
  root4311.append(nodes3581);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4314 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp3423 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3333 = mobl.ref(result__);
    
    var nodes3582 = $("<span>");
    root4314.append(nodes3582);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp3333, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root4315 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + qa.get().number + ". " + qa.get().question;
      var tmp3331 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
        tmp3331.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp3331.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      
      var nodes3583 = $("<span>");
      root4315.append(nodes3583);
      subs__.addSub((mobl.html)(tmp3331, function(_, callback) {
        var root4316 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4316); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3583;
        nodes3583 = node.contents();
        oldNodes.replaceWith(nodes3583);
      }));
      
      var node911 = $("<span>");
      node911.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp3419 = result__;
        var tmp3332 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp3418 = result__;
            var result__ = tmp3418;
            tmp3332.set(result__);
            
          });
        }));
        
        var nodes3584 = $("<span>");
        node911.append(nodes3584);
        subs__.addSub((mobl.html)(tmp3332, function(_, callback) {
          var root4317 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4317); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3584;
          nodes3584 = node.contents();
          oldNodes.replaceWith(nodes3584);
        }));
        root4315.append(node911);
        callback(root4315); return subs__;
        
      });
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3582;
      nodes3582 = node.contents();
      oldNodes.replaceWith(nodes3582);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp3422 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3335 = mobl.ref(result__);
    
    var nodes3585 = $("<span>");
    root4314.append(nodes3585);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3335, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root4318 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3586 = $("<span>");
      root4318.append(nodes3586);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4319 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp3421 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp3334 = mobl.ref(result__);
        
        var nodes3587 = $("<span>");
        root4319.append(nodes3587);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp3334, function(_, callback) {
          var root4320 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root4320); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes3587;
          nodes3587 = node.contents();
          oldNodes.replaceWith(nodes3587);
        }));
        callback(root4319); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3586;
        nodes3586 = node.contents();
        oldNodes.replaceWith(nodes3586);
      }));
      
      var node912 = $("<span>");
      root4318.append(node912);
      var condSubs214 = new mobl.CompSubscription();
      subs__.addSub(condSubs214);
      var oldValue214;
      var renderCond214 = function() {
        var value490 = qa.get().done;
        if(oldValue214 === value490) return;
        oldValue214 = value490;
        var subs__ = condSubs214;
        subs__.unsubscribe();
        node912.empty();
        if(value490) {
          var nodes3588 = $("<span>");
          node912.append(nodes3588);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, function(_, callback) {
            var root4321 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root4321); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes3588;
            nodes3588 = node.contents();
            oldNodes.replaceWith(nodes3588);
          }));
          
          
        } else {
          
        }
      };
      renderCond214();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond214();
      }));
      
      callback(root4318); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3585;
      nodes3585 = node.contents();
      oldNodes.replaceWith(nodes3585);
    }));
    callback(root4314); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3581;
    nodes3581 = node.contents();
    oldNodes.replaceWith(nodes3581);
  }));
  callback(root4311); return subs__;
  
  
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
  qas.list(function(coll531) {
    coll531 = coll531.reverse();
    function processOne117() {
      var item;
      item = coll531.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll531.length > 0) processOne117(); else rest117();
      
    }
    function rest117() {
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
    if(coll531.length > 0) processOne117(); else rest117();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll532) {
    coll532 = coll532.reverse();
    function processOne118() {
      var item;
      item = coll532.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll532.length > 0) processOne118(); else rest118();
      
    }
    function rest118() {
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
    if(coll532.length > 0) processOne118(); else rest118();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll533) {
    coll533 = coll533.reverse();
    function processOne119() {
      var item;
      item = coll533.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll533.length > 0) processOne119(); else rest119();
      
    }
    function rest119() {
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
    if(coll533.length > 0) processOne119(); else rest119();
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