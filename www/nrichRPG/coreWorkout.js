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
    var tmp182 = result__;
    var result__ = tmp182;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp183 = result__;
      var result__ = tmp183;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp184 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll57) {
    coll57 = coll57.reverse();
    function processOne3() {
      var i;
      i = coll57.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp185 = result__;
        
        if(coll57.length > 0) processOne3(); else rest3();
        
      });
    }
    function rest3() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll57.length > 0) processOne3(); else rest3();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll58) {
    coll58 = coll58.reverse();
    function processOne4() {
      var i;
      i = coll58.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp186 = result__;
          
          if(coll58.length > 0) processOne4(); else rest4();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp186 = result__;
            
            if(coll58.length > 0) processOne4(); else rest4();
            
          });
        }
      }
    }
    function rest4() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll58.length > 0) processOne4(); else rest4();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll59) {
    coll59 = coll59.reverse();
    function processOne5() {
      var i;
      i = coll59.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp187 = result__;
        
        if(coll59.length > 0) processOne5(); else rest5();
        
      });
    }
    function rest5() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll59.length > 0) processOne5(); else rest5();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root154 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes106 = $("<span>");
  root154.append(nodes106);
  subs__.addSub((ui.group)(function(_, callback) {
    var root155 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp195 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp90 = mobl.ref(result__);
    
    var nodes107 = $("<span>");
    root155.append(nodes107);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp90, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root156 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes108 = $("<span>");
      root156.append(nodes108);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root157 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root157); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes108;
        nodes108 = node.contents();
        oldNodes.replaceWith(nodes108);
      }));
      callback(root156); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes107;
      nodes107 = node.contents();
      oldNodes.replaceWith(nodes107);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp194 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp91 = mobl.ref(result__);
    
    var nodes109 = $("<span>");
    root155.append(nodes109);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp91, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root158 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes110 = $("<span>");
      root158.append(nodes110);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root159 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root159); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes110;
        nodes110 = node.contents();
        oldNodes.replaceWith(nodes110);
      }));
      callback(root158); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes109;
      nodes109 = node.contents();
      oldNodes.replaceWith(nodes109);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp193 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp92 = mobl.ref(result__);
    
    var nodes111 = $("<span>");
    root155.append(nodes111);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp92, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root160 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes112 = $("<span>");
      root160.append(nodes112);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root161 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root161); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes112;
        nodes112 = node.contents();
        oldNodes.replaceWith(nodes112);
      }));
      callback(root160); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes111;
      nodes111 = node.contents();
      oldNodes.replaceWith(nodes111);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp192 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp93 = mobl.ref(result__);
    
    var nodes113 = $("<span>");
    root155.append(nodes113);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp93, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root162 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes114 = $("<span>");
      root162.append(nodes114);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root163 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root163); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes114;
        nodes114 = node.contents();
        oldNodes.replaceWith(nodes114);
      }));
      callback(root162); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes113;
      nodes113 = node.contents();
      oldNodes.replaceWith(nodes113);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp191 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp94 = mobl.ref(result__);
    
    var nodes115 = $("<span>");
    root155.append(nodes115);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp94, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root164 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes116 = $("<span>");
      root164.append(nodes116);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root165 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root165); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes116;
        nodes116 = node.contents();
        oldNodes.replaceWith(nodes116);
      }));
      callback(root164); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes115;
      nodes115 = node.contents();
      oldNodes.replaceWith(nodes115);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp190 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp95 = mobl.ref(result__);
    
    var nodes117 = $("<span>");
    root155.append(nodes117);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp95, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root166 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes118 = $("<span>");
      root166.append(nodes118);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root167 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root167); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes118;
        nodes118 = node.contents();
        oldNodes.replaceWith(nodes118);
      }));
      callback(root166); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes117;
      nodes117 = node.contents();
      oldNodes.replaceWith(nodes117);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp189 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp96 = mobl.ref(result__);
    
    var nodes119 = $("<span>");
    root155.append(nodes119);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp96, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root168 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes120 = $("<span>");
      root168.append(nodes120);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root169 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root169); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes120;
        nodes120 = node.contents();
        oldNodes.replaceWith(nodes120);
      }));
      callback(root168); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes119;
      nodes119 = node.contents();
      oldNodes.replaceWith(nodes119);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp188 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp97 = mobl.ref(result__);
    
    var nodes121 = $("<span>");
    root155.append(nodes121);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp97, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root170 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes122 = $("<span>");
      root170.append(nodes122);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root171 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root171); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes122;
        nodes122 = node.contents();
        oldNodes.replaceWith(nodes122);
      }));
      callback(root170); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes121;
      nodes121 = node.contents();
      oldNodes.replaceWith(nodes121);
    }));
    callback(root155); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes106;
    nodes106 = node.contents();
    oldNodes.replaceWith(nodes106);
  }));
  callback(root154); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root172 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes123 = $("<span>");
  root172.append(nodes123);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root173 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp99 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp98 = mobl.ref(result__);
    
    var nodes124 = $("<span>");
    root173.append(nodes124);
    subs__.addSub((ui.backButton)(tmp98, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp99, function(_, callback) {
      var root174 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root174); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes124;
      nodes124 = node.contents();
      oldNodes.replaceWith(nodes124);
    }));
    callback(root173); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes123;
    nodes123 = node.contents();
    oldNodes.replaceWith(nodes123);
  }));
  var nodes125 = $("<span>");
  root172.append(nodes125);
  subs__.addSub((ui.group)(function(_, callback) {
    var root175 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp204 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp100 = mobl.ref(result__);
    
    var nodes126 = $("<span>");
    root175.append(nodes126);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp100, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root176 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes127 = $("<span>");
      root176.append(nodes127);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root177 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root177); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes127;
        nodes127 = node.contents();
        oldNodes.replaceWith(nodes127);
      }));
      callback(root176); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes126;
      nodes126 = node.contents();
      oldNodes.replaceWith(nodes126);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp203 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp101 = mobl.ref(result__);
    
    var nodes128 = $("<span>");
    root175.append(nodes128);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp101, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root178 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes129 = $("<span>");
      root178.append(nodes129);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root179 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root179); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes129;
        nodes129 = node.contents();
        oldNodes.replaceWith(nodes129);
      }));
      callback(root178); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes128;
      nodes128 = node.contents();
      oldNodes.replaceWith(nodes128);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp202 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp102 = mobl.ref(result__);
    
    var nodes130 = $("<span>");
    root175.append(nodes130);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp102, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root180 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes131 = $("<span>");
      root180.append(nodes131);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root181 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root181); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes131;
        nodes131 = node.contents();
        oldNodes.replaceWith(nodes131);
      }));
      callback(root180); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes130;
      nodes130 = node.contents();
      oldNodes.replaceWith(nodes130);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp201 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp103 = mobl.ref(result__);
    
    var nodes132 = $("<span>");
    root175.append(nodes132);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp103, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root182 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes133 = $("<span>");
      root182.append(nodes133);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root183 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root183); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes133;
        nodes133 = node.contents();
        oldNodes.replaceWith(nodes133);
      }));
      callback(root182); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes132;
      nodes132 = node.contents();
      oldNodes.replaceWith(nodes132);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp199 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp104 = mobl.ref(result__);
    
    var nodes134 = $("<span>");
    root175.append(nodes134);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp104, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root184 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes135 = $("<span>");
      root184.append(nodes135);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root185 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root185); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes135;
        nodes135 = node.contents();
        oldNodes.replaceWith(nodes135);
      }));
      callback(root184); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes134;
      nodes134 = node.contents();
      oldNodes.replaceWith(nodes134);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp198 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp105 = mobl.ref(result__);
    
    var nodes136 = $("<span>");
    root175.append(nodes136);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp105, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root186 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes137 = $("<span>");
      root186.append(nodes137);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root187 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root187); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes137;
        nodes137 = node.contents();
        oldNodes.replaceWith(nodes137);
      }));
      callback(root186); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes136;
      nodes136 = node.contents();
      oldNodes.replaceWith(nodes136);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp197 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp106 = mobl.ref(result__);
    
    var nodes138 = $("<span>");
    root175.append(nodes138);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp106, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root188 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes139 = $("<span>");
      root188.append(nodes139);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root189 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root189); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes139;
        nodes139 = node.contents();
        oldNodes.replaceWith(nodes139);
      }));
      callback(root188); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes138;
      nodes138 = node.contents();
      oldNodes.replaceWith(nodes138);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp196 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp107 = mobl.ref(result__);
    
    var nodes140 = $("<span>");
    root175.append(nodes140);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp107, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root190 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes141 = $("<span>");
      root190.append(nodes141);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root191 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root191); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes141;
        nodes141 = node.contents();
        oldNodes.replaceWith(nodes141);
      }));
      callback(root190); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes140;
      nodes140 = node.contents();
      oldNodes.replaceWith(nodes140);
    }));
    callback(root175); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes125;
    nodes125 = node.contents();
    oldNodes.replaceWith(nodes125);
  }));
  callback(root172); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root193 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes142 = $("<span>");
  root193.append(nodes142);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root194 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp109 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp108 = mobl.ref(result__);
    
    var nodes143 = $("<span>");
    root194.append(nodes143);
    subs__.addSub((ui.backButton)(tmp108, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp109, function(_, callback) {
      var root195 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root195); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes143;
      nodes143 = node.contents();
      oldNodes.replaceWith(nodes143);
    }));
    callback(root194); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes142;
    nodes142 = node.contents();
    oldNodes.replaceWith(nodes142);
  }));
  var nodes144 = $("<span>");
  root193.append(nodes144);
  subs__.addSub((ui.group)(function(_, callback) {
    var root196 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp209 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp110 = mobl.ref(result__);
    
    var nodes145 = $("<span>");
    root196.append(nodes145);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp110, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root197 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes146 = $("<span>");
      root197.append(nodes146);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root198 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root198); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes146;
        nodes146 = node.contents();
        oldNodes.replaceWith(nodes146);
      }));
      callback(root197); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes145;
      nodes145 = node.contents();
      oldNodes.replaceWith(nodes145);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp208 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp111 = mobl.ref(result__);
    
    var nodes147 = $("<span>");
    root196.append(nodes147);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp111, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root199 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes148 = $("<span>");
      root199.append(nodes148);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root200 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root200); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes148;
        nodes148 = node.contents();
        oldNodes.replaceWith(nodes148);
      }));
      callback(root199); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes147;
      nodes147 = node.contents();
      oldNodes.replaceWith(nodes147);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp207 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp112 = mobl.ref(result__);
    
    var nodes149 = $("<span>");
    root196.append(nodes149);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp112, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root201 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes150 = $("<span>");
      root201.append(nodes150);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root202 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root202); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes150;
        nodes150 = node.contents();
        oldNodes.replaceWith(nodes150);
      }));
      callback(root201); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes149;
      nodes149 = node.contents();
      oldNodes.replaceWith(nodes149);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp206 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp113 = mobl.ref(result__);
    
    var nodes151 = $("<span>");
    root196.append(nodes151);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp113, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root203 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes152 = $("<span>");
      root203.append(nodes152);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root204 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root204); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes152;
        nodes152 = node.contents();
        oldNodes.replaceWith(nodes152);
      }));
      callback(root203); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes151;
      nodes151 = node.contents();
      oldNodes.replaceWith(nodes151);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp205 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp114 = mobl.ref(result__);
    
    var nodes153 = $("<span>");
    root196.append(nodes153);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp114, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root205 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes154 = $("<span>");
      root205.append(nodes154);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root206 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root206); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes154;
        nodes154 = node.contents();
        oldNodes.replaceWith(nodes154);
      }));
      callback(root205); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes153;
      nodes153 = node.contents();
      oldNodes.replaceWith(nodes153);
    }));
    callback(root196); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes144;
    nodes144 = node.contents();
    oldNodes.replaceWith(nodes144);
  }));
  callback(root193); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root207 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes155 = $("<span>");
  root207.append(nodes155);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root208 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp116 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp115 = mobl.ref(result__);
    
    var nodes156 = $("<span>");
    root208.append(nodes156);
    subs__.addSub((ui.backButton)(tmp115, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp116, function(_, callback) {
      var root209 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root209); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes156;
      nodes156 = node.contents();
      oldNodes.replaceWith(nodes156);
    }));
    callback(root208); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes155;
    nodes155 = node.contents();
    oldNodes.replaceWith(nodes155);
  }));
  var nodes157 = $("<span>");
  root207.append(nodes157);
  subs__.addSub((ui.group)(function(_, callback) {
    var root210 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp213 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp117 = mobl.ref(result__);
    
    var nodes158 = $("<span>");
    root210.append(nodes158);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp117, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root211 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes159 = $("<span>");
      root211.append(nodes159);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root212 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root212); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes159;
        nodes159 = node.contents();
        oldNodes.replaceWith(nodes159);
      }));
      callback(root211); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes158;
      nodes158 = node.contents();
      oldNodes.replaceWith(nodes158);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp212 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp118 = mobl.ref(result__);
    
    var nodes160 = $("<span>");
    root210.append(nodes160);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp118, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root213 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes161 = $("<span>");
      root213.append(nodes161);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root214 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root214); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes161;
        nodes161 = node.contents();
        oldNodes.replaceWith(nodes161);
      }));
      callback(root213); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes160;
      nodes160 = node.contents();
      oldNodes.replaceWith(nodes160);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp211 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp119 = mobl.ref(result__);
    
    var nodes162 = $("<span>");
    root210.append(nodes162);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp119, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root215 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes163 = $("<span>");
      root215.append(nodes163);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root216 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root216); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes163;
        nodes163 = node.contents();
        oldNodes.replaceWith(nodes163);
      }));
      callback(root215); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes162;
      nodes162 = node.contents();
      oldNodes.replaceWith(nodes162);
    }));
    callback(root210); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes157;
    nodes157 = node.contents();
    oldNodes.replaceWith(nodes157);
  }));
  callback(root207); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root217 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes164 = $("<span>");
  root217.append(nodes164);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root218 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp121 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp120 = mobl.ref(result__);
    
    var nodes165 = $("<span>");
    root218.append(nodes165);
    subs__.addSub((ui.backButton)(tmp120, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp121, function(_, callback) {
      var root219 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root219); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes165;
      nodes165 = node.contents();
      oldNodes.replaceWith(nodes165);
    }));
    callback(root218); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes164;
    nodes164 = node.contents();
    oldNodes.replaceWith(nodes164);
  }));
  var nodes166 = $("<span>");
  root217.append(nodes166);
  subs__.addSub((ui.group)(function(_, callback) {
    var root220 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp217 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp122 = mobl.ref(result__);
    
    var nodes167 = $("<span>");
    root220.append(nodes167);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp122, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root221 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes168 = $("<span>");
      root221.append(nodes168);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root222 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root222); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes168;
        nodes168 = node.contents();
        oldNodes.replaceWith(nodes168);
      }));
      callback(root221); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes167;
      nodes167 = node.contents();
      oldNodes.replaceWith(nodes167);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp216 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp123 = mobl.ref(result__);
    
    var nodes169 = $("<span>");
    root220.append(nodes169);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp123, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root223 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes170 = $("<span>");
      root223.append(nodes170);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root224 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root224); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes170;
        nodes170 = node.contents();
        oldNodes.replaceWith(nodes170);
      }));
      callback(root223); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes169;
      nodes169 = node.contents();
      oldNodes.replaceWith(nodes169);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp215 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp124 = mobl.ref(result__);
    
    var nodes171 = $("<span>");
    root220.append(nodes171);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp124, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root225 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes172 = $("<span>");
      root225.append(nodes172);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root226 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root226); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes172;
        nodes172 = node.contents();
        oldNodes.replaceWith(nodes172);
      }));
      callback(root225); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes171;
      nodes171 = node.contents();
      oldNodes.replaceWith(nodes171);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp214 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp125 = mobl.ref(result__);
    
    var nodes173 = $("<span>");
    root220.append(nodes173);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp125, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root227 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes174 = $("<span>");
      root227.append(nodes174);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root228 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root228); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes174;
        nodes174 = node.contents();
        oldNodes.replaceWith(nodes174);
      }));
      callback(root227); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes173;
      nodes173 = node.contents();
      oldNodes.replaceWith(nodes173);
    }));
    callback(root220); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes166;
    nodes166 = node.contents();
    oldNodes.replaceWith(nodes166);
  }));
  callback(root217); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root229 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes175 = $("<span>");
  root229.append(nodes175);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root230 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp127 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp126 = mobl.ref(result__);
    
    var nodes176 = $("<span>");
    root230.append(nodes176);
    subs__.addSub((ui.backButton)(tmp126, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp127, function(_, callback) {
      var root231 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root231); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes176;
      nodes176 = node.contents();
      oldNodes.replaceWith(nodes176);
    }));
    callback(root230); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes175;
    nodes175 = node.contents();
    oldNodes.replaceWith(nodes175);
  }));
  var nodes177 = $("<span>");
  root229.append(nodes177);
  subs__.addSub((ui.group)(function(_, callback) {
    var root232 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp219 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp128 = mobl.ref(result__);
    
    var nodes178 = $("<span>");
    root232.append(nodes178);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp128, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root233 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes179 = $("<span>");
      root233.append(nodes179);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root234 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root234); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes179;
        nodes179 = node.contents();
        oldNodes.replaceWith(nodes179);
      }));
      callback(root233); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes178;
      nodes178 = node.contents();
      oldNodes.replaceWith(nodes178);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp218 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp129 = mobl.ref(result__);
    
    var nodes180 = $("<span>");
    root232.append(nodes180);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp129, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root235 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes181 = $("<span>");
      root235.append(nodes181);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root236 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root236); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes181;
        nodes181 = node.contents();
        oldNodes.replaceWith(nodes181);
      }));
      callback(root235); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes180;
      nodes180 = node.contents();
      oldNodes.replaceWith(nodes180);
    }));
    callback(root232); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes177;
    nodes177 = node.contents();
    oldNodes.replaceWith(nodes177);
  }));
  callback(root229); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root237 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes182 = $("<span>");
  root237.append(nodes182);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root238 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp131 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp130 = mobl.ref(result__);
    
    var nodes183 = $("<span>");
    root238.append(nodes183);
    subs__.addSub((ui.backButton)(tmp130, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp131, function(_, callback) {
      var root239 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root239); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes183;
      nodes183 = node.contents();
      oldNodes.replaceWith(nodes183);
    }));
    callback(root238); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes182;
    nodes182 = node.contents();
    oldNodes.replaceWith(nodes182);
  }));
  var nodes184 = $("<span>");
  root237.append(nodes184);
  subs__.addSub((ui.group)(function(_, callback) {
    var root240 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp225 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp132 = mobl.ref(result__);
    
    var nodes185 = $("<span>");
    root240.append(nodes185);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp132, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root241 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes186 = $("<span>");
      root241.append(nodes186);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root242 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root242); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes186;
        nodes186 = node.contents();
        oldNodes.replaceWith(nodes186);
      }));
      callback(root241); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes185;
      nodes185 = node.contents();
      oldNodes.replaceWith(nodes185);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp224 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp133 = mobl.ref(result__);
    
    var nodes187 = $("<span>");
    root240.append(nodes187);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp133, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root243 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes188 = $("<span>");
      root243.append(nodes188);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root244 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root244); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes188;
        nodes188 = node.contents();
        oldNodes.replaceWith(nodes188);
      }));
      callback(root243); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes187;
      nodes187 = node.contents();
      oldNodes.replaceWith(nodes187);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp223 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp134 = mobl.ref(result__);
    
    var nodes189 = $("<span>");
    root240.append(nodes189);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp134, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root245 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes190 = $("<span>");
      root245.append(nodes190);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root246 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root246); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes190;
        nodes190 = node.contents();
        oldNodes.replaceWith(nodes190);
      }));
      callback(root245); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes189;
      nodes189 = node.contents();
      oldNodes.replaceWith(nodes189);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp222 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp135 = mobl.ref(result__);
    
    var nodes191 = $("<span>");
    root240.append(nodes191);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp135, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root247 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes192 = $("<span>");
      root247.append(nodes192);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root248 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root248); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes192;
        nodes192 = node.contents();
        oldNodes.replaceWith(nodes192);
      }));
      callback(root247); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes191;
      nodes191 = node.contents();
      oldNodes.replaceWith(nodes191);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp221 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp136 = mobl.ref(result__);
    
    var nodes193 = $("<span>");
    root240.append(nodes193);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp136, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root249 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes194 = $("<span>");
      root249.append(nodes194);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root250 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root250); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes194;
        nodes194 = node.contents();
        oldNodes.replaceWith(nodes194);
      }));
      callback(root249); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes193;
      nodes193 = node.contents();
      oldNodes.replaceWith(nodes193);
    }));
    callback(root240); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes184;
    nodes184 = node.contents();
    oldNodes.replaceWith(nodes184);
  }));
  callback(root237); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root251 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes195 = $("<span>");
  root251.append(nodes195);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root252 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp138 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp137 = mobl.ref(result__);
    
    var nodes196 = $("<span>");
    root252.append(nodes196);
    subs__.addSub((ui.backButton)(tmp137, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp138, function(_, callback) {
      var root253 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root253); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes196;
      nodes196 = node.contents();
      oldNodes.replaceWith(nodes196);
    }));
    callback(root252); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes195;
    nodes195 = node.contents();
    oldNodes.replaceWith(nodes195);
  }));
  var nodes197 = $("<span>");
  root251.append(nodes197);
  subs__.addSub((ui.group)(function(_, callback) {
    var root254 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp228 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp139 = mobl.ref(result__);
    
    var nodes198 = $("<span>");
    root254.append(nodes198);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp139, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root255 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes199 = $("<span>");
      root255.append(nodes199);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root256 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root256); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes199;
        nodes199 = node.contents();
        oldNodes.replaceWith(nodes199);
      }));
      callback(root255); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes198;
      nodes198 = node.contents();
      oldNodes.replaceWith(nodes198);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp227 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp140 = mobl.ref(result__);
    
    var nodes200 = $("<span>");
    root254.append(nodes200);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp140, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root257 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes201 = $("<span>");
      root257.append(nodes201);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root258 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root258); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes201;
        nodes201 = node.contents();
        oldNodes.replaceWith(nodes201);
      }));
      callback(root257); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes200;
      nodes200 = node.contents();
      oldNodes.replaceWith(nodes200);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp226 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp141 = mobl.ref(result__);
    
    var nodes202 = $("<span>");
    root254.append(nodes202);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp141, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root259 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes203 = $("<span>");
      root259.append(nodes203);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root260 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root260); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes203;
        nodes203 = node.contents();
        oldNodes.replaceWith(nodes203);
      }));
      callback(root259); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes202;
      nodes202 = node.contents();
      oldNodes.replaceWith(nodes202);
    }));
    callback(root254); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes197;
    nodes197 = node.contents();
    oldNodes.replaceWith(nodes197);
  }));
  callback(root251); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root261 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes204 = $("<span>");
  root261.append(nodes204);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root262 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp143 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp142 = mobl.ref(result__);
    
    var nodes205 = $("<span>");
    root262.append(nodes205);
    subs__.addSub((ui.backButton)(tmp142, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp143, function(_, callback) {
      var root263 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root263); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes205;
      nodes205 = node.contents();
      oldNodes.replaceWith(nodes205);
    }));
    callback(root262); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes204;
    nodes204 = node.contents();
    oldNodes.replaceWith(nodes204);
  }));
  var nodes206 = $("<span>");
  root261.append(nodes206);
  subs__.addSub((ui.group)(function(_, callback) {
    var root264 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp229 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp144 = mobl.ref(result__);
    
    var nodes207 = $("<span>");
    root264.append(nodes207);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp144, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root265 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes208 = $("<span>");
      root265.append(nodes208);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root266 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root266); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes208;
        nodes208 = node.contents();
        oldNodes.replaceWith(nodes208);
      }));
      callback(root265); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes207;
      nodes207 = node.contents();
      oldNodes.replaceWith(nodes207);
    }));
    callback(root264); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes206;
    nodes206 = node.contents();
    oldNodes.replaceWith(nodes206);
  }));
  callback(root261); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root267 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes209 = $("<span>");
  root267.append(nodes209);
  subs__.addSub((ui.group)(function(_, callback) {
    var root268 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp244 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp145 = mobl.ref(result__);
    
    var nodes210 = $("<span>");
    root268.append(nodes210);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp145, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root269 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes211 = $("<span>");
      root269.append(nodes211);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root270 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root270); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes211;
        nodes211 = node.contents();
        oldNodes.replaceWith(nodes211);
      }));
      callback(root269); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes210;
      nodes210 = node.contents();
      oldNodes.replaceWith(nodes210);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp243 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp146 = mobl.ref(result__);
    
    var nodes212 = $("<span>");
    root268.append(nodes212);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp146, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root271 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes213 = $("<span>");
      root271.append(nodes213);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root272 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root272); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes213;
        nodes213 = node.contents();
        oldNodes.replaceWith(nodes213);
      }));
      callback(root271); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes212;
      nodes212 = node.contents();
      oldNodes.replaceWith(nodes212);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp242 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp147 = mobl.ref(result__);
    
    var nodes214 = $("<span>");
    root268.append(nodes214);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp147, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root273 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes215 = $("<span>");
      root273.append(nodes215);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root274 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root274); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes215;
        nodes215 = node.contents();
        oldNodes.replaceWith(nodes215);
      }));
      callback(root273); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes214;
      nodes214 = node.contents();
      oldNodes.replaceWith(nodes214);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp241 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp148 = mobl.ref(result__);
    
    var nodes216 = $("<span>");
    root268.append(nodes216);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp148, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root275 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes217 = $("<span>");
      root275.append(nodes217);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root276 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root276); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes217;
        nodes217 = node.contents();
        oldNodes.replaceWith(nodes217);
      }));
      callback(root275); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes216;
      nodes216 = node.contents();
      oldNodes.replaceWith(nodes216);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp239 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp149 = mobl.ref(result__);
    
    var nodes218 = $("<span>");
    root268.append(nodes218);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp149, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root277 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes219 = $("<span>");
      root277.append(nodes219);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root278 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root278); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes219;
        nodes219 = node.contents();
        oldNodes.replaceWith(nodes219);
      }));
      callback(root277); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes218;
      nodes218 = node.contents();
      oldNodes.replaceWith(nodes218);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp238 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp150 = mobl.ref(result__);
    
    var nodes220 = $("<span>");
    root268.append(nodes220);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp150, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root279 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes221 = $("<span>");
      root279.append(nodes221);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root280 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root280); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes221;
        nodes221 = node.contents();
        oldNodes.replaceWith(nodes221);
      }));
      callback(root279); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes220;
      nodes220 = node.contents();
      oldNodes.replaceWith(nodes220);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp237 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp151 = mobl.ref(result__);
    
    var nodes222 = $("<span>");
    root268.append(nodes222);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp151, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root281 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes223 = $("<span>");
      root281.append(nodes223);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root282 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root282); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes223;
        nodes223 = node.contents();
        oldNodes.replaceWith(nodes223);
      }));
      callback(root281); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes222;
      nodes222 = node.contents();
      oldNodes.replaceWith(nodes222);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp236 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp152 = mobl.ref(result__);
    
    var nodes224 = $("<span>");
    root268.append(nodes224);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp152, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root283 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes225 = $("<span>");
      root283.append(nodes225);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root284 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root284); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes225;
        nodes225 = node.contents();
        oldNodes.replaceWith(nodes225);
      }));
      callback(root283); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes224;
      nodes224 = node.contents();
      oldNodes.replaceWith(nodes224);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp235 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp153 = mobl.ref(result__);
    
    var nodes226 = $("<span>");
    root268.append(nodes226);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp153, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root285 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes227 = $("<span>");
      root285.append(nodes227);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root286 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root286); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes227;
        nodes227 = node.contents();
        oldNodes.replaceWith(nodes227);
      }));
      callback(root285); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes226;
      nodes226 = node.contents();
      oldNodes.replaceWith(nodes226);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp234 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp154 = mobl.ref(result__);
    
    var nodes228 = $("<span>");
    root268.append(nodes228);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp154, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root287 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes229 = $("<span>");
      root287.append(nodes229);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root288 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root288); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes229;
        nodes229 = node.contents();
        oldNodes.replaceWith(nodes229);
      }));
      callback(root287); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes228;
      nodes228 = node.contents();
      oldNodes.replaceWith(nodes228);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp233 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp155 = mobl.ref(result__);
    
    var nodes230 = $("<span>");
    root268.append(nodes230);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp155, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root289 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes231 = $("<span>");
      root289.append(nodes231);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root290 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root290); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes231;
        nodes231 = node.contents();
        oldNodes.replaceWith(nodes231);
      }));
      callback(root289); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes230;
      nodes230 = node.contents();
      oldNodes.replaceWith(nodes230);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp232 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp156 = mobl.ref(result__);
    
    var nodes232 = $("<span>");
    root268.append(nodes232);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp156, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root291 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes233 = $("<span>");
      root291.append(nodes233);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root292 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root292); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes233;
        nodes233 = node.contents();
        oldNodes.replaceWith(nodes233);
      }));
      callback(root291); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes232;
      nodes232 = node.contents();
      oldNodes.replaceWith(nodes232);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp231 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp157 = mobl.ref(result__);
    
    var nodes234 = $("<span>");
    root268.append(nodes234);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp157, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root293 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes235 = $("<span>");
      root293.append(nodes235);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root294 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root294); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes235;
        nodes235 = node.contents();
        oldNodes.replaceWith(nodes235);
      }));
      callback(root293); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes234;
      nodes234 = node.contents();
      oldNodes.replaceWith(nodes234);
    }));
    callback(root268); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes209;
    nodes209 = node.contents();
    oldNodes.replaceWith(nodes209);
  }));
  callback(root267); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root295 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes236 = $("<span>");
  root295.append(nodes236);
  subs__.addSub((ui.group)(function(_, callback) {
    var root296 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp251 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp158 = mobl.ref(result__);
    
    var nodes237 = $("<span>");
    root296.append(nodes237);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp158, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root297 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes238 = $("<span>");
      root297.append(nodes238);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root298 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root298); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes238;
        nodes238 = node.contents();
        oldNodes.replaceWith(nodes238);
      }));
      callback(root297); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes237;
      nodes237 = node.contents();
      oldNodes.replaceWith(nodes237);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp249 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp159 = mobl.ref(result__);
    
    var nodes239 = $("<span>");
    root296.append(nodes239);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp159, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root299 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes240 = $("<span>");
      root299.append(nodes240);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root300 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root300); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes240;
        nodes240 = node.contents();
        oldNodes.replaceWith(nodes240);
      }));
      callback(root299); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes239;
      nodes239 = node.contents();
      oldNodes.replaceWith(nodes239);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp248 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp160 = mobl.ref(result__);
    
    var nodes241 = $("<span>");
    root296.append(nodes241);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp160, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root301 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes242 = $("<span>");
      root301.append(nodes242);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root302 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root302); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes242;
        nodes242 = node.contents();
        oldNodes.replaceWith(nodes242);
      }));
      callback(root301); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes241;
      nodes241 = node.contents();
      oldNodes.replaceWith(nodes241);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp247 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp161 = mobl.ref(result__);
    
    var nodes243 = $("<span>");
    root296.append(nodes243);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp161, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root303 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes244 = $("<span>");
      root303.append(nodes244);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root304 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root304); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes244;
        nodes244 = node.contents();
        oldNodes.replaceWith(nodes244);
      }));
      callback(root303); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes243;
      nodes243 = node.contents();
      oldNodes.replaceWith(nodes243);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp246 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp162 = mobl.ref(result__);
    
    var nodes245 = $("<span>");
    root296.append(nodes245);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp162, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root305 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes246 = $("<span>");
      root305.append(nodes246);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root306 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root306); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes246;
        nodes246 = node.contents();
        oldNodes.replaceWith(nodes246);
      }));
      callback(root305); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes245;
      nodes245 = node.contents();
      oldNodes.replaceWith(nodes245);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp245 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp163 = mobl.ref(result__);
    
    var nodes247 = $("<span>");
    root296.append(nodes247);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp163, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root307 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes248 = $("<span>");
      root307.append(nodes248);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root308 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root308); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes248;
        nodes248 = node.contents();
        oldNodes.replaceWith(nodes248);
      }));
      callback(root307); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes247;
      nodes247 = node.contents();
      oldNodes.replaceWith(nodes247);
    }));
    callback(root296); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes236;
    nodes236 = node.contents();
    oldNodes.replaceWith(nodes236);
  }));
  callback(root295); return subs__;
  
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
  var root309 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node63 = $("<div>");
  
  var ref70 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref70.get() !== null) {
    node63.attr('class', ref70.get());
    subs__.addSub(ref70.addEventListener('change', function(_, ref, val) {
      node63.attr('class', val);
    }));
    
  }
  subs__.addSub(ref70.rebind());
  
  var val34 = onclick.get();
  if(val34 !== null) {
    subs__.addSub(mobl.domBind(node63, 'tap', val34));
  }
  
  
  var node64 = $("<div>");
  
  var ref69 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref69.get() !== null) {
    node64.attr('class', ref69.get());
    subs__.addSub(ref69.addEventListener('change', function(_, ref, val) {
      node64.attr('class', val);
    }));
    
  }
  subs__.addSub(ref69.rebind());
  
  
  var node65 = $("<div>");
  
  var ref67 = text;
  node65.text(""+ref67.get());
  var ignore12 = false;
  subs__.addSub(ref67.addEventListener('change', function(_, ref, val) {
    if(ignore12) return;
    node65.text(""+val);
  }));
  subs__.addSub(ref67.rebind());
  
  
  var ref68 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref68.get() !== null) {
    node65.attr('class', ref68.get());
    subs__.addSub(ref68.addEventListener('change', function(_, ref, val) {
      node65.attr('class', val);
    }));
    
  }
  subs__.addSub(ref68.rebind());
  
  node64.append(node65);
  node63.append(node64);
  var nodes249 = $("<span>");
  node63.append(nodes249);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl29();
  }));
  
  function renderControl29() {
    subs__.addSub((elements)(function(elements, callback) {
      var root310 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root310); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes249;
      nodes249 = node.contents();
      oldNodes.replaceWith(nodes249);
    }));
  }
  renderControl29();
  root309.append(node63);
  callback(root309); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp252 = result__;
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
  var root311 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node66 = $("<span>");
  root311.append(node66);
  var condSubs14 = new mobl.CompSubscription();
  subs__.addSub(condSubs14);
  var oldValue14;
  var renderCond14 = function() {
    var value50 = qa.get().correct;
    if(oldValue14 === value50) return;
    oldValue14 = value50;
    var subs__ = condSubs14;
    subs__.unsubscribe();
    node66.empty();
    if(value50) {
      var nodes250 = $("<span>");
      node66.append(nodes250);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.agreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root312 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp167 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp167.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node67 = $("<span>");
        root312.append(node67);
        var condSubs15 = new mobl.CompSubscription();
        subs__.addSub(condSubs15);
        var oldValue15;
        var renderCond15 = function() {
          var value51 = tmp167.get();
          if(oldValue15 === value51) return;
          oldValue15 = value51;
          var subs__ = condSubs15;
          subs__.unsubscribe();
          node67.empty();
          if(value51) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp164 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp164.set("A" + qa.get().number + ". ");
            }));
            
            var nodes251 = $("<span>");
            node67.append(nodes251);
            subs__.addSub((mobl.label)(tmp164, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root313 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root313); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes251;
              nodes251 = node.contents();
              oldNodes.replaceWith(nodes251);
            }));
            var nodes252 = $("<span>");
            node67.append(nodes252);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root314 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root314); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes252;
              nodes252 = node.contents();
              oldNodes.replaceWith(nodes252);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp165 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp165.set("A" + qa.get().number + ". ");
            }));
            
            var nodes253 = $("<span>");
            node67.append(nodes253);
            subs__.addSub((mobl.label)(tmp165, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root315 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root315); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes253;
              nodes253 = node.contents();
              oldNodes.replaceWith(nodes253);
            }));
            var nodes254 = $("<span>");
            node67.append(nodes254);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root316 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root316); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes254;
              nodes254 = node.contents();
              oldNodes.replaceWith(nodes254);
            }));
            
            var node68 = $("<span>");
            node68.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp254 = result__;
              var tmp166 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp253 = result__;
                  var result__ = tmp253;
                  tmp166.set(result__);
                  
                });
              }));
              
              var nodes255 = $("<span>");
              node68.append(nodes255);
              subs__.addSub((mobl.html)(tmp166, function(_, callback) {
                var root317 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root317); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes255;
                nodes255 = node.contents();
                oldNodes.replaceWith(nodes255);
              }));
              node67.append(node68);
              
              
            });
            
            
            
          }
        };
        renderCond15();
        subs__.addSub(tmp167.addEventListener('change', function() {
          renderCond15();
        }));
        
        callback(root312); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes250;
        nodes250 = node.contents();
        oldNodes.replaceWith(nodes250);
      }));
      
      
    } else {
      var nodes256 = $("<span>");
      node66.append(nodes256);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.disagreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root318 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp171 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp171.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node69 = $("<span>");
        root318.append(node69);
        var condSubs16 = new mobl.CompSubscription();
        subs__.addSub(condSubs16);
        var oldValue16;
        var renderCond16 = function() {
          var value52 = tmp171.get();
          if(oldValue16 === value52) return;
          oldValue16 = value52;
          var subs__ = condSubs16;
          subs__.unsubscribe();
          node69.empty();
          if(value52) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp168 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp168.set("A" + qa.get().number + ". ");
            }));
            
            var nodes257 = $("<span>");
            node69.append(nodes257);
            subs__.addSub((mobl.label)(tmp168, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root319 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root319); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes257;
              nodes257 = node.contents();
              oldNodes.replaceWith(nodes257);
            }));
            var nodes258 = $("<span>");
            node69.append(nodes258);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root320 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root320); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes258;
              nodes258 = node.contents();
              oldNodes.replaceWith(nodes258);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp169 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp169.set("A" + qa.get().number + ". ");
            }));
            
            var nodes259 = $("<span>");
            node69.append(nodes259);
            subs__.addSub((mobl.label)(tmp169, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root321 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root321); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes259;
              nodes259 = node.contents();
              oldNodes.replaceWith(nodes259);
            }));
            var nodes260 = $("<span>");
            node69.append(nodes260);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root322 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root322); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes260;
              nodes260 = node.contents();
              oldNodes.replaceWith(nodes260);
            }));
            
            var node70 = $("<span>");
            node70.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp256 = result__;
              var tmp170 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp255 = result__;
                  var result__ = tmp255;
                  tmp170.set(result__);
                  
                });
              }));
              
              var nodes261 = $("<span>");
              node70.append(nodes261);
              subs__.addSub((mobl.html)(tmp170, function(_, callback) {
                var root323 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root323); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes261;
                nodes261 = node.contents();
                oldNodes.replaceWith(nodes261);
              }));
              node69.append(node70);
              
              
            });
            
            
            
          }
        };
        renderCond16();
        subs__.addSub(tmp171.addEventListener('change', function() {
          renderCond16();
        }));
        
        callback(root318); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes256;
        nodes256 = node.contents();
        oldNodes.replaceWith(nodes256);
      }));
      
      
    }
  };
  renderCond14();
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    renderCond14();
  }));
  
  var nodes262 = $("<span>");
  root311.append(nodes262);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root324 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node71 = $("<span>");
    node71.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp258 = result__;
      var tmp172 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp257 = result__;
          var result__ = tmp257;
          tmp172.set(result__);
          
        });
      }));
      
      var nodes266 = $("<span>");
      node71.append(nodes266);
      subs__.addSub((mobl.html)(tmp172, function(_, callback) {
        var root328 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root328); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes266;
        nodes266 = node.contents();
        oldNodes.replaceWith(nodes266);
      }));
      root324.append(node71);
      var nodes263 = $("<span>");
      root324.append(nodes263);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root325 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root325); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes263;
        nodes263 = node.contents();
        oldNodes.replaceWith(nodes263);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp173 = mobl.ref(result__);
      
      var nodes264 = $("<span>");
      root324.append(nodes264);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp173, function(_, callback) {
        var root326 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root326); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes264;
        nodes264 = node.contents();
        oldNodes.replaceWith(nodes264);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp174 = mobl.ref(result__);
      
      var nodes265 = $("<span>");
      root324.append(nodes265);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp174, function(_, callback) {
        var root327 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root327); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes265;
        nodes265 = node.contents();
        oldNodes.replaceWith(nodes265);
      }));
      callback(root324); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes262;
    nodes262 = node.contents();
    oldNodes.replaceWith(nodes262);
  }));
  callback(root311); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp259 = result__;
    var result__ = tmp259;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp261 = result__;
        var result__ = tmp261;
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
  var root329 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp269 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp176 = mobl.ref(result__);
  
  var nodes267 = $("<span>");
  root329.append(nodes267);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp176, function(_, callback) {
    var root330 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp262 = result__;
                       var result__ = tmp262;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp263 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp175 = mobl.ref(result__);
    
    var nodes268 = $("<span>");
    root330.append(nodes268);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp175, function(_, callback) {
      var root331 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root331); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes268;
      nodes268 = node.contents();
      oldNodes.replaceWith(nodes268);
    }));
    callback(root330); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes267;
    nodes267 = node.contents();
    oldNodes.replaceWith(nodes267);
  }));
  var nodes269 = $("<span>");
  root329.append(nodes269);
  subs__.addSub((ui.group)(function(_, callback) {
    var root332 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp268 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp179 = mobl.ref(result__);
    
    var nodes270 = $("<span>");
    root332.append(nodes270);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp179, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root333 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + qa.get().number + ". " + qa.get().question;
      var tmp177 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
        tmp177.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp177.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      
      var nodes271 = $("<span>");
      root333.append(nodes271);
      subs__.addSub((mobl.html)(tmp177, function(_, callback) {
        var root334 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root334); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes271;
        nodes271 = node.contents();
        oldNodes.replaceWith(nodes271);
      }));
      
      var node72 = $("<span>");
      node72.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp265 = result__;
        var tmp178 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp264 = result__;
            var result__ = tmp264;
            tmp178.set(result__);
            
          });
        }));
        
        var nodes272 = $("<span>");
        node72.append(nodes272);
        subs__.addSub((mobl.html)(tmp178, function(_, callback) {
          var root335 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root335); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes272;
          nodes272 = node.contents();
          oldNodes.replaceWith(nodes272);
        }));
        root333.append(node72);
        callback(root333); return subs__;
        
      });
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes270;
      nodes270 = node.contents();
      oldNodes.replaceWith(nodes270);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp267 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp181 = mobl.ref(result__);
    
    var nodes273 = $("<span>");
    root332.append(nodes273);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp181, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root336 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes274 = $("<span>");
      root336.append(nodes274);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root337 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp266 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp180 = mobl.ref(result__);
        
        var nodes275 = $("<span>");
        root337.append(nodes275);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp180, function(_, callback) {
          var root338 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root338); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes275;
          nodes275 = node.contents();
          oldNodes.replaceWith(nodes275);
        }));
        callback(root337); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes274;
        nodes274 = node.contents();
        oldNodes.replaceWith(nodes274);
      }));
      
      var node73 = $("<span>");
      root336.append(node73);
      var condSubs17 = new mobl.CompSubscription();
      subs__.addSub(condSubs17);
      var oldValue17;
      var renderCond17 = function() {
        var value53 = qa.get().done;
        if(oldValue17 === value53) return;
        oldValue17 = value53;
        var subs__ = condSubs17;
        subs__.unsubscribe();
        node73.empty();
        if(value53) {
          var nodes276 = $("<span>");
          node73.append(nodes276);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, function(_, callback) {
            var root339 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root339); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes276;
            nodes276 = node.contents();
            oldNodes.replaceWith(nodes276);
          }));
          
          
        } else {
          
        }
      };
      renderCond17();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond17();
      }));
      
      callback(root336); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes273;
      nodes273 = node.contents();
      oldNodes.replaceWith(nodes273);
    }));
    callback(root332); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes269;
    nodes269 = node.contents();
    oldNodes.replaceWith(nodes269);
  }));
  callback(root329); return subs__;
  
  
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
  qas.list(function(coll60) {
    coll60 = coll60.reverse();
    function processOne6() {
      var item;
      item = coll60.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll60.length > 0) processOne6(); else rest6();
      
    }
    function rest6() {
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
    if(coll60.length > 0) processOne6(); else rest6();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll61) {
    coll61 = coll61.reverse();
    function processOne7() {
      var item;
      item = coll61.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll61.length > 0) processOne7(); else rest7();
      
    }
    function rest7() {
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
    if(coll61.length > 0) processOne7(); else rest7();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll62) {
    coll62 = coll62.reverse();
    function processOne8() {
      var item;
      item = coll62.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll62.length > 0) processOne8(); else rest8();
      
    }
    function rest8() {
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
    if(coll62.length > 0) processOne8(); else rest8();
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