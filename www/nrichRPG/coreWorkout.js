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
    var tmp6895 = result__;
    var result__ = tmp6895;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp6896 = result__;
      var result__ = tmp6896;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp6897 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll4331) {
    coll4331 = coll4331.reverse();
    function processOne233() {
      var i;
      i = coll4331.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp6898 = result__;
        
        if(coll4331.length > 0) processOne233(); else rest233();
        
      });
    }
    function rest233() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll4331.length > 0) processOne233(); else rest233();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll4332) {
    coll4332 = coll4332.reverse();
    function processOne234() {
      var i;
      i = coll4332.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp6899 = result__;
          
          if(coll4332.length > 0) processOne234(); else rest234();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp6899 = result__;
            
            if(coll4332.length > 0) processOne234(); else rest234();
            
          });
        }
      }
    }
    function rest234() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll4332.length > 0) processOne234(); else rest234();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll4333) {
    coll4333 = coll4333.reverse();
    function processOne235() {
      var i;
      i = coll4333.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp6900 = result__;
        
        if(coll4333.length > 0) processOne235(); else rest235();
        
      });
    }
    function rest235() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll4333.length > 0) processOne235(); else rest235();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root8945 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7106 = $("<span>");
  root8945.append(nodes7106);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8946 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp6908 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6803 = mobl.ref(result__);
    
    var nodes7107 = $("<span>");
    root8946.append(nodes7107);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6803, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8947 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7108 = $("<span>");
      root8947.append(nodes7108);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8948 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8948); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7108;
        nodes7108 = node.contents();
        oldNodes.replaceWith(nodes7108);
      }));
      callback(root8947); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7107;
      nodes7107 = node.contents();
      oldNodes.replaceWith(nodes7107);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp6907 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6804 = mobl.ref(result__);
    
    var nodes7109 = $("<span>");
    root8946.append(nodes7109);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6804, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8949 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7110 = $("<span>");
      root8949.append(nodes7110);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8950 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8950); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7110;
        nodes7110 = node.contents();
        oldNodes.replaceWith(nodes7110);
      }));
      callback(root8949); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7109;
      nodes7109 = node.contents();
      oldNodes.replaceWith(nodes7109);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp6906 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6805 = mobl.ref(result__);
    
    var nodes7111 = $("<span>");
    root8946.append(nodes7111);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6805, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8951 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7112 = $("<span>");
      root8951.append(nodes7112);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8952 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8952); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7112;
        nodes7112 = node.contents();
        oldNodes.replaceWith(nodes7112);
      }));
      callback(root8951); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7111;
      nodes7111 = node.contents();
      oldNodes.replaceWith(nodes7111);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp6905 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6806 = mobl.ref(result__);
    
    var nodes7113 = $("<span>");
    root8946.append(nodes7113);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6806, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8953 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7114 = $("<span>");
      root8953.append(nodes7114);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8954 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8954); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7114;
        nodes7114 = node.contents();
        oldNodes.replaceWith(nodes7114);
      }));
      callback(root8953); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7113;
      nodes7113 = node.contents();
      oldNodes.replaceWith(nodes7113);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp6904 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6807 = mobl.ref(result__);
    
    var nodes7115 = $("<span>");
    root8946.append(nodes7115);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6807, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8955 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7116 = $("<span>");
      root8955.append(nodes7116);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8956 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8956); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7116;
        nodes7116 = node.contents();
        oldNodes.replaceWith(nodes7116);
      }));
      callback(root8955); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7115;
      nodes7115 = node.contents();
      oldNodes.replaceWith(nodes7115);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp6903 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6808 = mobl.ref(result__);
    
    var nodes7117 = $("<span>");
    root8946.append(nodes7117);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6808, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8957 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7118 = $("<span>");
      root8957.append(nodes7118);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8958 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8958); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7118;
        nodes7118 = node.contents();
        oldNodes.replaceWith(nodes7118);
      }));
      callback(root8957); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7117;
      nodes7117 = node.contents();
      oldNodes.replaceWith(nodes7117);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp6902 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6809 = mobl.ref(result__);
    
    var nodes7119 = $("<span>");
    root8946.append(nodes7119);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6809, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8959 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7120 = $("<span>");
      root8959.append(nodes7120);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8960 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8960); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7120;
        nodes7120 = node.contents();
        oldNodes.replaceWith(nodes7120);
      }));
      callback(root8959); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7119;
      nodes7119 = node.contents();
      oldNodes.replaceWith(nodes7119);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp6901 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6810 = mobl.ref(result__);
    
    var nodes7121 = $("<span>");
    root8946.append(nodes7121);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6810, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8961 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7122 = $("<span>");
      root8961.append(nodes7122);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8962 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8962); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7122;
        nodes7122 = node.contents();
        oldNodes.replaceWith(nodes7122);
      }));
      callback(root8961); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7121;
      nodes7121 = node.contents();
      oldNodes.replaceWith(nodes7121);
    }));
    callback(root8946); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7106;
    nodes7106 = node.contents();
    oldNodes.replaceWith(nodes7106);
  }));
  callback(root8945); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root8963 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes7123 = $("<span>");
  root8963.append(nodes7123);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8964 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6812 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp6811 = mobl.ref(result__);
    
    var nodes7124 = $("<span>");
    root8964.append(nodes7124);
    subs__.addSub((ui.backButton)(tmp6811, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6812, function(_, callback) {
      var root8965 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8965); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7124;
      nodes7124 = node.contents();
      oldNodes.replaceWith(nodes7124);
    }));
    callback(root8964); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7123;
    nodes7123 = node.contents();
    oldNodes.replaceWith(nodes7123);
  }));
  var nodes7125 = $("<span>");
  root8963.append(nodes7125);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8966 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp6916 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6813 = mobl.ref(result__);
    
    var nodes7126 = $("<span>");
    root8966.append(nodes7126);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6813, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8967 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7127 = $("<span>");
      root8967.append(nodes7127);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8968 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8968); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7127;
        nodes7127 = node.contents();
        oldNodes.replaceWith(nodes7127);
      }));
      callback(root8967); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7126;
      nodes7126 = node.contents();
      oldNodes.replaceWith(nodes7126);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp6915 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6814 = mobl.ref(result__);
    
    var nodes7128 = $("<span>");
    root8966.append(nodes7128);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6814, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8969 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7129 = $("<span>");
      root8969.append(nodes7129);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8970 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8970); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7129;
        nodes7129 = node.contents();
        oldNodes.replaceWith(nodes7129);
      }));
      callback(root8969); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7128;
      nodes7128 = node.contents();
      oldNodes.replaceWith(nodes7128);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp6914 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6815 = mobl.ref(result__);
    
    var nodes7130 = $("<span>");
    root8966.append(nodes7130);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6815, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8971 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7131 = $("<span>");
      root8971.append(nodes7131);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8972 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8972); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7131;
        nodes7131 = node.contents();
        oldNodes.replaceWith(nodes7131);
      }));
      callback(root8971); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7130;
      nodes7130 = node.contents();
      oldNodes.replaceWith(nodes7130);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp6913 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6816 = mobl.ref(result__);
    
    var nodes7132 = $("<span>");
    root8966.append(nodes7132);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6816, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8973 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7133 = $("<span>");
      root8973.append(nodes7133);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8974 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8974); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7133;
        nodes7133 = node.contents();
        oldNodes.replaceWith(nodes7133);
      }));
      callback(root8973); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7132;
      nodes7132 = node.contents();
      oldNodes.replaceWith(nodes7132);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp6912 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6817 = mobl.ref(result__);
    
    var nodes7134 = $("<span>");
    root8966.append(nodes7134);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6817, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8975 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7135 = $("<span>");
      root8975.append(nodes7135);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8976 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8976); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7135;
        nodes7135 = node.contents();
        oldNodes.replaceWith(nodes7135);
      }));
      callback(root8975); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7134;
      nodes7134 = node.contents();
      oldNodes.replaceWith(nodes7134);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp6911 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6818 = mobl.ref(result__);
    
    var nodes7136 = $("<span>");
    root8966.append(nodes7136);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6818, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8977 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7137 = $("<span>");
      root8977.append(nodes7137);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8978 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8978); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7137;
        nodes7137 = node.contents();
        oldNodes.replaceWith(nodes7137);
      }));
      callback(root8977); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7136;
      nodes7136 = node.contents();
      oldNodes.replaceWith(nodes7136);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp6910 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6819 = mobl.ref(result__);
    
    var nodes7138 = $("<span>");
    root8966.append(nodes7138);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6819, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8979 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7139 = $("<span>");
      root8979.append(nodes7139);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8980 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8980); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7139;
        nodes7139 = node.contents();
        oldNodes.replaceWith(nodes7139);
      }));
      callback(root8979); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7138;
      nodes7138 = node.contents();
      oldNodes.replaceWith(nodes7138);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp6909 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6820 = mobl.ref(result__);
    
    var nodes7140 = $("<span>");
    root8966.append(nodes7140);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6820, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8981 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7141 = $("<span>");
      root8981.append(nodes7141);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8982 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8982); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7141;
        nodes7141 = node.contents();
        oldNodes.replaceWith(nodes7141);
      }));
      callback(root8981); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7140;
      nodes7140 = node.contents();
      oldNodes.replaceWith(nodes7140);
    }));
    callback(root8966); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7125;
    nodes7125 = node.contents();
    oldNodes.replaceWith(nodes7125);
  }));
  callback(root8963); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root8983 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes7142 = $("<span>");
  root8983.append(nodes7142);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8984 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6822 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp6821 = mobl.ref(result__);
    
    var nodes7143 = $("<span>");
    root8984.append(nodes7143);
    subs__.addSub((ui.backButton)(tmp6821, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6822, function(_, callback) {
      var root8985 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8985); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7143;
      nodes7143 = node.contents();
      oldNodes.replaceWith(nodes7143);
    }));
    callback(root8984); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7142;
    nodes7142 = node.contents();
    oldNodes.replaceWith(nodes7142);
  }));
  var nodes7144 = $("<span>");
  root8983.append(nodes7144);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8986 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp6921 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6823 = mobl.ref(result__);
    
    var nodes7145 = $("<span>");
    root8986.append(nodes7145);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6823, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8987 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7146 = $("<span>");
      root8987.append(nodes7146);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8988 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8988); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7146;
        nodes7146 = node.contents();
        oldNodes.replaceWith(nodes7146);
      }));
      callback(root8987); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7145;
      nodes7145 = node.contents();
      oldNodes.replaceWith(nodes7145);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp6920 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6824 = mobl.ref(result__);
    
    var nodes7147 = $("<span>");
    root8986.append(nodes7147);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6824, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8989 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7148 = $("<span>");
      root8989.append(nodes7148);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8990 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8990); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7148;
        nodes7148 = node.contents();
        oldNodes.replaceWith(nodes7148);
      }));
      callback(root8989); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7147;
      nodes7147 = node.contents();
      oldNodes.replaceWith(nodes7147);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp6919 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6825 = mobl.ref(result__);
    
    var nodes7149 = $("<span>");
    root8986.append(nodes7149);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6825, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8991 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7150 = $("<span>");
      root8991.append(nodes7150);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8992 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8992); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7150;
        nodes7150 = node.contents();
        oldNodes.replaceWith(nodes7150);
      }));
      callback(root8991); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7149;
      nodes7149 = node.contents();
      oldNodes.replaceWith(nodes7149);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp6918 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6826 = mobl.ref(result__);
    
    var nodes7151 = $("<span>");
    root8986.append(nodes7151);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6826, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8993 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7152 = $("<span>");
      root8993.append(nodes7152);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8994 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8994); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7152;
        nodes7152 = node.contents();
        oldNodes.replaceWith(nodes7152);
      }));
      callback(root8993); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7151;
      nodes7151 = node.contents();
      oldNodes.replaceWith(nodes7151);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp6917 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6827 = mobl.ref(result__);
    
    var nodes7153 = $("<span>");
    root8986.append(nodes7153);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6827, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8995 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7154 = $("<span>");
      root8995.append(nodes7154);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8996 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8996); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7154;
        nodes7154 = node.contents();
        oldNodes.replaceWith(nodes7154);
      }));
      callback(root8995); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7153;
      nodes7153 = node.contents();
      oldNodes.replaceWith(nodes7153);
    }));
    callback(root8986); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7144;
    nodes7144 = node.contents();
    oldNodes.replaceWith(nodes7144);
  }));
  callback(root8983); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root8997 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes7155 = $("<span>");
  root8997.append(nodes7155);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8998 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6829 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp6828 = mobl.ref(result__);
    
    var nodes7156 = $("<span>");
    root8998.append(nodes7156);
    subs__.addSub((ui.backButton)(tmp6828, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6829, function(_, callback) {
      var root8999 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8999); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7156;
      nodes7156 = node.contents();
      oldNodes.replaceWith(nodes7156);
    }));
    callback(root8998); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7155;
    nodes7155 = node.contents();
    oldNodes.replaceWith(nodes7155);
  }));
  var nodes7157 = $("<span>");
  root8997.append(nodes7157);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9000 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp6924 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6830 = mobl.ref(result__);
    
    var nodes7158 = $("<span>");
    root9000.append(nodes7158);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6830, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9001 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7159 = $("<span>");
      root9001.append(nodes7159);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9002 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9002); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7159;
        nodes7159 = node.contents();
        oldNodes.replaceWith(nodes7159);
      }));
      callback(root9001); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7158;
      nodes7158 = node.contents();
      oldNodes.replaceWith(nodes7158);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp6923 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6831 = mobl.ref(result__);
    
    var nodes7160 = $("<span>");
    root9000.append(nodes7160);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6831, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9003 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7161 = $("<span>");
      root9003.append(nodes7161);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9004 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9004); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7161;
        nodes7161 = node.contents();
        oldNodes.replaceWith(nodes7161);
      }));
      callback(root9003); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7160;
      nodes7160 = node.contents();
      oldNodes.replaceWith(nodes7160);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp6922 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6832 = mobl.ref(result__);
    
    var nodes7162 = $("<span>");
    root9000.append(nodes7162);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6832, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9005 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7163 = $("<span>");
      root9005.append(nodes7163);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9006 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9006); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7163;
        nodes7163 = node.contents();
        oldNodes.replaceWith(nodes7163);
      }));
      callback(root9005); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7162;
      nodes7162 = node.contents();
      oldNodes.replaceWith(nodes7162);
    }));
    callback(root9000); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7157;
    nodes7157 = node.contents();
    oldNodes.replaceWith(nodes7157);
  }));
  callback(root8997); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root9007 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes7164 = $("<span>");
  root9007.append(nodes7164);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9008 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6834 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp6833 = mobl.ref(result__);
    
    var nodes7165 = $("<span>");
    root9008.append(nodes7165);
    subs__.addSub((ui.backButton)(tmp6833, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6834, function(_, callback) {
      var root9009 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9009); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7165;
      nodes7165 = node.contents();
      oldNodes.replaceWith(nodes7165);
    }));
    callback(root9008); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7164;
    nodes7164 = node.contents();
    oldNodes.replaceWith(nodes7164);
  }));
  var nodes7166 = $("<span>");
  root9007.append(nodes7166);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9010 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp6928 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6835 = mobl.ref(result__);
    
    var nodes7167 = $("<span>");
    root9010.append(nodes7167);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6835, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9011 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7168 = $("<span>");
      root9011.append(nodes7168);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9012 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9012); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7168;
        nodes7168 = node.contents();
        oldNodes.replaceWith(nodes7168);
      }));
      callback(root9011); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7167;
      nodes7167 = node.contents();
      oldNodes.replaceWith(nodes7167);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp6927 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6836 = mobl.ref(result__);
    
    var nodes7169 = $("<span>");
    root9010.append(nodes7169);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6836, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9013 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7170 = $("<span>");
      root9013.append(nodes7170);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9014 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9014); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7170;
        nodes7170 = node.contents();
        oldNodes.replaceWith(nodes7170);
      }));
      callback(root9013); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7169;
      nodes7169 = node.contents();
      oldNodes.replaceWith(nodes7169);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp6926 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6837 = mobl.ref(result__);
    
    var nodes7171 = $("<span>");
    root9010.append(nodes7171);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6837, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9015 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7172 = $("<span>");
      root9015.append(nodes7172);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9016 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9016); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7172;
        nodes7172 = node.contents();
        oldNodes.replaceWith(nodes7172);
      }));
      callback(root9015); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7171;
      nodes7171 = node.contents();
      oldNodes.replaceWith(nodes7171);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp6925 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6838 = mobl.ref(result__);
    
    var nodes7173 = $("<span>");
    root9010.append(nodes7173);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6838, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9017 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7174 = $("<span>");
      root9017.append(nodes7174);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9018 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9018); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7174;
        nodes7174 = node.contents();
        oldNodes.replaceWith(nodes7174);
      }));
      callback(root9017); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7173;
      nodes7173 = node.contents();
      oldNodes.replaceWith(nodes7173);
    }));
    callback(root9010); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7166;
    nodes7166 = node.contents();
    oldNodes.replaceWith(nodes7166);
  }));
  callback(root9007); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root9019 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes7175 = $("<span>");
  root9019.append(nodes7175);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9020 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6840 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp6839 = mobl.ref(result__);
    
    var nodes7176 = $("<span>");
    root9020.append(nodes7176);
    subs__.addSub((ui.backButton)(tmp6839, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6840, function(_, callback) {
      var root9021 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9021); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7176;
      nodes7176 = node.contents();
      oldNodes.replaceWith(nodes7176);
    }));
    callback(root9020); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7175;
    nodes7175 = node.contents();
    oldNodes.replaceWith(nodes7175);
  }));
  var nodes7177 = $("<span>");
  root9019.append(nodes7177);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9022 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp6930 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6841 = mobl.ref(result__);
    
    var nodes7178 = $("<span>");
    root9022.append(nodes7178);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6841, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9023 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7179 = $("<span>");
      root9023.append(nodes7179);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9024 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9024); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7179;
        nodes7179 = node.contents();
        oldNodes.replaceWith(nodes7179);
      }));
      callback(root9023); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7178;
      nodes7178 = node.contents();
      oldNodes.replaceWith(nodes7178);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp6929 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6842 = mobl.ref(result__);
    
    var nodes7180 = $("<span>");
    root9022.append(nodes7180);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6842, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9025 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7181 = $("<span>");
      root9025.append(nodes7181);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9026 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9026); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7181;
        nodes7181 = node.contents();
        oldNodes.replaceWith(nodes7181);
      }));
      callback(root9025); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7180;
      nodes7180 = node.contents();
      oldNodes.replaceWith(nodes7180);
    }));
    callback(root9022); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7177;
    nodes7177 = node.contents();
    oldNodes.replaceWith(nodes7177);
  }));
  callback(root9019); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root9027 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes7182 = $("<span>");
  root9027.append(nodes7182);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9028 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6844 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp6843 = mobl.ref(result__);
    
    var nodes7183 = $("<span>");
    root9028.append(nodes7183);
    subs__.addSub((ui.backButton)(tmp6843, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6844, function(_, callback) {
      var root9029 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9029); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7183;
      nodes7183 = node.contents();
      oldNodes.replaceWith(nodes7183);
    }));
    callback(root9028); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7182;
    nodes7182 = node.contents();
    oldNodes.replaceWith(nodes7182);
  }));
  var nodes7184 = $("<span>");
  root9027.append(nodes7184);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9030 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp6935 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6845 = mobl.ref(result__);
    
    var nodes7185 = $("<span>");
    root9030.append(nodes7185);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6845, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9031 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7186 = $("<span>");
      root9031.append(nodes7186);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9032 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9032); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7186;
        nodes7186 = node.contents();
        oldNodes.replaceWith(nodes7186);
      }));
      callback(root9031); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7185;
      nodes7185 = node.contents();
      oldNodes.replaceWith(nodes7185);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp6934 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6846 = mobl.ref(result__);
    
    var nodes7187 = $("<span>");
    root9030.append(nodes7187);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6846, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9033 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7188 = $("<span>");
      root9033.append(nodes7188);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9034 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9034); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7188;
        nodes7188 = node.contents();
        oldNodes.replaceWith(nodes7188);
      }));
      callback(root9033); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7187;
      nodes7187 = node.contents();
      oldNodes.replaceWith(nodes7187);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp6933 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6847 = mobl.ref(result__);
    
    var nodes7189 = $("<span>");
    root9030.append(nodes7189);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6847, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9035 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7190 = $("<span>");
      root9035.append(nodes7190);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9036 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9036); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7190;
        nodes7190 = node.contents();
        oldNodes.replaceWith(nodes7190);
      }));
      callback(root9035); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7189;
      nodes7189 = node.contents();
      oldNodes.replaceWith(nodes7189);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp6932 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6848 = mobl.ref(result__);
    
    var nodes7191 = $("<span>");
    root9030.append(nodes7191);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6848, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9037 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7192 = $("<span>");
      root9037.append(nodes7192);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9038 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9038); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7192;
        nodes7192 = node.contents();
        oldNodes.replaceWith(nodes7192);
      }));
      callback(root9037); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7191;
      nodes7191 = node.contents();
      oldNodes.replaceWith(nodes7191);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp6931 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6849 = mobl.ref(result__);
    
    var nodes7193 = $("<span>");
    root9030.append(nodes7193);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6849, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9039 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7194 = $("<span>");
      root9039.append(nodes7194);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9040 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9040); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7194;
        nodes7194 = node.contents();
        oldNodes.replaceWith(nodes7194);
      }));
      callback(root9039); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7193;
      nodes7193 = node.contents();
      oldNodes.replaceWith(nodes7193);
    }));
    callback(root9030); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7184;
    nodes7184 = node.contents();
    oldNodes.replaceWith(nodes7184);
  }));
  callback(root9027); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root9041 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes7195 = $("<span>");
  root9041.append(nodes7195);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9042 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6851 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp6850 = mobl.ref(result__);
    
    var nodes7196 = $("<span>");
    root9042.append(nodes7196);
    subs__.addSub((ui.backButton)(tmp6850, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6851, function(_, callback) {
      var root9043 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9043); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7196;
      nodes7196 = node.contents();
      oldNodes.replaceWith(nodes7196);
    }));
    callback(root9042); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7195;
    nodes7195 = node.contents();
    oldNodes.replaceWith(nodes7195);
  }));
  var nodes7197 = $("<span>");
  root9041.append(nodes7197);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9044 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp6938 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6852 = mobl.ref(result__);
    
    var nodes7198 = $("<span>");
    root9044.append(nodes7198);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6852, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9045 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7199 = $("<span>");
      root9045.append(nodes7199);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9046 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9046); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7199;
        nodes7199 = node.contents();
        oldNodes.replaceWith(nodes7199);
      }));
      callback(root9045); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7198;
      nodes7198 = node.contents();
      oldNodes.replaceWith(nodes7198);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp6937 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6853 = mobl.ref(result__);
    
    var nodes7200 = $("<span>");
    root9044.append(nodes7200);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6853, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9047 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7201 = $("<span>");
      root9047.append(nodes7201);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9048 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9048); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7201;
        nodes7201 = node.contents();
        oldNodes.replaceWith(nodes7201);
      }));
      callback(root9047); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7200;
      nodes7200 = node.contents();
      oldNodes.replaceWith(nodes7200);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp6936 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6854 = mobl.ref(result__);
    
    var nodes7202 = $("<span>");
    root9044.append(nodes7202);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6854, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9049 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7203 = $("<span>");
      root9049.append(nodes7203);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9050 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9050); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7203;
        nodes7203 = node.contents();
        oldNodes.replaceWith(nodes7203);
      }));
      callback(root9049); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7202;
      nodes7202 = node.contents();
      oldNodes.replaceWith(nodes7202);
    }));
    callback(root9044); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7197;
    nodes7197 = node.contents();
    oldNodes.replaceWith(nodes7197);
  }));
  callback(root9041); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root9051 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes7204 = $("<span>");
  root9051.append(nodes7204);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9052 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6856 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp6855 = mobl.ref(result__);
    
    var nodes7205 = $("<span>");
    root9052.append(nodes7205);
    subs__.addSub((ui.backButton)(tmp6855, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6856, function(_, callback) {
      var root9053 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9053); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7205;
      nodes7205 = node.contents();
      oldNodes.replaceWith(nodes7205);
    }));
    callback(root9052); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7204;
    nodes7204 = node.contents();
    oldNodes.replaceWith(nodes7204);
  }));
  var nodes7206 = $("<span>");
  root9051.append(nodes7206);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9054 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp6939 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6857 = mobl.ref(result__);
    
    var nodes7207 = $("<span>");
    root9054.append(nodes7207);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6857, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9055 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7208 = $("<span>");
      root9055.append(nodes7208);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9056 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9056); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7208;
        nodes7208 = node.contents();
        oldNodes.replaceWith(nodes7208);
      }));
      callback(root9055); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7207;
      nodes7207 = node.contents();
      oldNodes.replaceWith(nodes7207);
    }));
    callback(root9054); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7206;
    nodes7206 = node.contents();
    oldNodes.replaceWith(nodes7206);
  }));
  callback(root9051); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root9057 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7209 = $("<span>");
  root9057.append(nodes7209);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9058 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp6952 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6858 = mobl.ref(result__);
    
    var nodes7210 = $("<span>");
    root9058.append(nodes7210);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6858, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9059 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7211 = $("<span>");
      root9059.append(nodes7211);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9060 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9060); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7211;
        nodes7211 = node.contents();
        oldNodes.replaceWith(nodes7211);
      }));
      callback(root9059); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7210;
      nodes7210 = node.contents();
      oldNodes.replaceWith(nodes7210);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp6951 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6859 = mobl.ref(result__);
    
    var nodes7212 = $("<span>");
    root9058.append(nodes7212);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6859, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9061 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7213 = $("<span>");
      root9061.append(nodes7213);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9062 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9062); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7213;
        nodes7213 = node.contents();
        oldNodes.replaceWith(nodes7213);
      }));
      callback(root9061); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7212;
      nodes7212 = node.contents();
      oldNodes.replaceWith(nodes7212);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp6950 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6860 = mobl.ref(result__);
    
    var nodes7214 = $("<span>");
    root9058.append(nodes7214);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6860, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9063 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7215 = $("<span>");
      root9063.append(nodes7215);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9064 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9064); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7215;
        nodes7215 = node.contents();
        oldNodes.replaceWith(nodes7215);
      }));
      callback(root9063); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7214;
      nodes7214 = node.contents();
      oldNodes.replaceWith(nodes7214);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp6949 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6861 = mobl.ref(result__);
    
    var nodes7216 = $("<span>");
    root9058.append(nodes7216);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6861, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9065 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7217 = $("<span>");
      root9065.append(nodes7217);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9066 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9066); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7217;
        nodes7217 = node.contents();
        oldNodes.replaceWith(nodes7217);
      }));
      callback(root9065); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7216;
      nodes7216 = node.contents();
      oldNodes.replaceWith(nodes7216);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp6948 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6862 = mobl.ref(result__);
    
    var nodes7218 = $("<span>");
    root9058.append(nodes7218);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6862, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9067 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7219 = $("<span>");
      root9067.append(nodes7219);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9068 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9068); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7219;
        nodes7219 = node.contents();
        oldNodes.replaceWith(nodes7219);
      }));
      callback(root9067); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7218;
      nodes7218 = node.contents();
      oldNodes.replaceWith(nodes7218);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp6947 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6863 = mobl.ref(result__);
    
    var nodes7220 = $("<span>");
    root9058.append(nodes7220);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6863, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9069 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7221 = $("<span>");
      root9069.append(nodes7221);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9070 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9070); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7221;
        nodes7221 = node.contents();
        oldNodes.replaceWith(nodes7221);
      }));
      callback(root9069); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7220;
      nodes7220 = node.contents();
      oldNodes.replaceWith(nodes7220);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp6946 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6864 = mobl.ref(result__);
    
    var nodes7222 = $("<span>");
    root9058.append(nodes7222);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6864, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9071 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7223 = $("<span>");
      root9071.append(nodes7223);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9072 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9072); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7223;
        nodes7223 = node.contents();
        oldNodes.replaceWith(nodes7223);
      }));
      callback(root9071); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7222;
      nodes7222 = node.contents();
      oldNodes.replaceWith(nodes7222);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp6945 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6865 = mobl.ref(result__);
    
    var nodes7224 = $("<span>");
    root9058.append(nodes7224);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6865, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9073 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7225 = $("<span>");
      root9073.append(nodes7225);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9074 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9074); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7225;
        nodes7225 = node.contents();
        oldNodes.replaceWith(nodes7225);
      }));
      callback(root9073); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7224;
      nodes7224 = node.contents();
      oldNodes.replaceWith(nodes7224);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp6944 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6866 = mobl.ref(result__);
    
    var nodes7226 = $("<span>");
    root9058.append(nodes7226);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6866, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9075 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7227 = $("<span>");
      root9075.append(nodes7227);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9076 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9076); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7227;
        nodes7227 = node.contents();
        oldNodes.replaceWith(nodes7227);
      }));
      callback(root9075); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7226;
      nodes7226 = node.contents();
      oldNodes.replaceWith(nodes7226);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp6943 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6867 = mobl.ref(result__);
    
    var nodes7228 = $("<span>");
    root9058.append(nodes7228);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6867, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9077 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7229 = $("<span>");
      root9077.append(nodes7229);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9078 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9078); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7229;
        nodes7229 = node.contents();
        oldNodes.replaceWith(nodes7229);
      }));
      callback(root9077); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7228;
      nodes7228 = node.contents();
      oldNodes.replaceWith(nodes7228);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp6942 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6868 = mobl.ref(result__);
    
    var nodes7230 = $("<span>");
    root9058.append(nodes7230);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6868, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9079 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7231 = $("<span>");
      root9079.append(nodes7231);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9080 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9080); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7231;
        nodes7231 = node.contents();
        oldNodes.replaceWith(nodes7231);
      }));
      callback(root9079); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7230;
      nodes7230 = node.contents();
      oldNodes.replaceWith(nodes7230);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp6941 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6869 = mobl.ref(result__);
    
    var nodes7232 = $("<span>");
    root9058.append(nodes7232);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6869, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9081 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7233 = $("<span>");
      root9081.append(nodes7233);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9082 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9082); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7233;
        nodes7233 = node.contents();
        oldNodes.replaceWith(nodes7233);
      }));
      callback(root9081); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7232;
      nodes7232 = node.contents();
      oldNodes.replaceWith(nodes7232);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp6940 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6870 = mobl.ref(result__);
    
    var nodes7234 = $("<span>");
    root9058.append(nodes7234);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6870, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9083 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7235 = $("<span>");
      root9083.append(nodes7235);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9084 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9084); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7235;
        nodes7235 = node.contents();
        oldNodes.replaceWith(nodes7235);
      }));
      callback(root9083); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7234;
      nodes7234 = node.contents();
      oldNodes.replaceWith(nodes7234);
    }));
    callback(root9058); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7209;
    nodes7209 = node.contents();
    oldNodes.replaceWith(nodes7209);
  }));
  callback(root9057); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root9085 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7236 = $("<span>");
  root9085.append(nodes7236);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9086 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp6958 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6871 = mobl.ref(result__);
    
    var nodes7237 = $("<span>");
    root9086.append(nodes7237);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6871, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9087 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7238 = $("<span>");
      root9087.append(nodes7238);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9088 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9088); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7238;
        nodes7238 = node.contents();
        oldNodes.replaceWith(nodes7238);
      }));
      callback(root9087); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7237;
      nodes7237 = node.contents();
      oldNodes.replaceWith(nodes7237);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp6957 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6872 = mobl.ref(result__);
    
    var nodes7239 = $("<span>");
    root9086.append(nodes7239);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6872, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9089 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7240 = $("<span>");
      root9089.append(nodes7240);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9090 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9090); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7240;
        nodes7240 = node.contents();
        oldNodes.replaceWith(nodes7240);
      }));
      callback(root9089); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7239;
      nodes7239 = node.contents();
      oldNodes.replaceWith(nodes7239);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp6956 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6873 = mobl.ref(result__);
    
    var nodes7241 = $("<span>");
    root9086.append(nodes7241);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6873, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9091 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7242 = $("<span>");
      root9091.append(nodes7242);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9092 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9092); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7242;
        nodes7242 = node.contents();
        oldNodes.replaceWith(nodes7242);
      }));
      callback(root9091); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7241;
      nodes7241 = node.contents();
      oldNodes.replaceWith(nodes7241);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp6955 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6874 = mobl.ref(result__);
    
    var nodes7243 = $("<span>");
    root9086.append(nodes7243);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6874, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9093 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7244 = $("<span>");
      root9093.append(nodes7244);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9094 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9094); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7244;
        nodes7244 = node.contents();
        oldNodes.replaceWith(nodes7244);
      }));
      callback(root9093); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7243;
      nodes7243 = node.contents();
      oldNodes.replaceWith(nodes7243);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp6954 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6875 = mobl.ref(result__);
    
    var nodes7245 = $("<span>");
    root9086.append(nodes7245);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6875, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9095 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7246 = $("<span>");
      root9095.append(nodes7246);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9096 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9096); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7246;
        nodes7246 = node.contents();
        oldNodes.replaceWith(nodes7246);
      }));
      callback(root9095); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7245;
      nodes7245 = node.contents();
      oldNodes.replaceWith(nodes7245);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp6953 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6876 = mobl.ref(result__);
    
    var nodes7247 = $("<span>");
    root9086.append(nodes7247);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6876, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9097 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7248 = $("<span>");
      root9097.append(nodes7248);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9098 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9098); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7248;
        nodes7248 = node.contents();
        oldNodes.replaceWith(nodes7248);
      }));
      callback(root9097); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7247;
      nodes7247 = node.contents();
      oldNodes.replaceWith(nodes7247);
    }));
    callback(root9086); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7236;
    nodes7236 = node.contents();
    oldNodes.replaceWith(nodes7236);
  }));
  callback(root9085); return subs__;
  
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
  var root9099 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2450 = $("<div>");
  
  var ref2160 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref2160.get() !== null) {
    node2450.attr('class', ref2160.get());
    subs__.addSub(ref2160.addEventListener('change', function(_, ref, val) {
      node2450.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2160.rebind());
  
  var val1145 = onclick.get();
  if(val1145 !== null) {
    subs__.addSub(mobl.domBind(node2450, 'tap', val1145));
  }
  
  
  var node2451 = $("<div>");
  
  var ref2159 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref2159.get() !== null) {
    node2451.attr('class', ref2159.get());
    subs__.addSub(ref2159.addEventListener('change', function(_, ref, val) {
      node2451.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2159.rebind());
  
  
  var node2452 = $("<div>");
  
  var ref2157 = text;
  node2452.text(""+ref2157.get());
  var ignore434 = false;
  subs__.addSub(ref2157.addEventListener('change', function(_, ref, val) {
    if(ignore434) return;
    node2452.text(""+val);
  }));
  subs__.addSub(ref2157.rebind());
  
  
  var ref2158 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref2158.get() !== null) {
    node2452.attr('class', ref2158.get());
    subs__.addSub(ref2158.addEventListener('change', function(_, ref, val) {
      node2452.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2158.rebind());
  
  node2451.append(node2452);
  node2450.append(node2451);
  var nodes7249 = $("<span>");
  node2450.append(nodes7249);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl999();
  }));
  
  function renderControl999() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9100 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9100); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7249;
      nodes7249 = node.contents();
      oldNodes.replaceWith(nodes7249);
    }));
  }
  renderControl999();
  root9099.append(node2450);
  callback(root9099); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp6959 = result__;
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
  var root9101 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2453 = $("<span>");
  root9101.append(node2453);
  var condSubs587 = new mobl.CompSubscription();
  subs__.addSub(condSubs587);
  var oldValue587;
  var renderCond587 = function() {
    var value3319 = qa.get().correct;
    if(oldValue587 === value3319) return;
    oldValue587 = value3319;
    var subs__ = condSubs587;
    subs__.unsubscribe();
    node2453.empty();
    if(value3319) {
      var nodes7250 = $("<span>");
      node2453.append(nodes7250);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.agreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9102 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp6880 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp6880.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node2454 = $("<span>");
        root9102.append(node2454);
        var condSubs588 = new mobl.CompSubscription();
        subs__.addSub(condSubs588);
        var oldValue588;
        var renderCond588 = function() {
          var value3320 = tmp6880.get();
          if(oldValue588 === value3320) return;
          oldValue588 = value3320;
          var subs__ = condSubs588;
          subs__.unsubscribe();
          node2454.empty();
          if(value3320) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp6877 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp6877.set("A" + qa.get().number + ". ");
            }));
            
            var nodes7251 = $("<span>");
            node2454.append(nodes7251);
            subs__.addSub((mobl.label)(tmp6877, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root9103 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root9103); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes7251;
              nodes7251 = node.contents();
              oldNodes.replaceWith(nodes7251);
            }));
            var nodes7252 = $("<span>");
            node2454.append(nodes7252);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root9104 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root9104); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes7252;
              nodes7252 = node.contents();
              oldNodes.replaceWith(nodes7252);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp6878 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp6878.set("A" + qa.get().number + ". ");
            }));
            
            var nodes7253 = $("<span>");
            node2454.append(nodes7253);
            subs__.addSub((mobl.label)(tmp6878, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root9105 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root9105); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes7253;
              nodes7253 = node.contents();
              oldNodes.replaceWith(nodes7253);
            }));
            var nodes7254 = $("<span>");
            node2454.append(nodes7254);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root9106 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root9106); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes7254;
              nodes7254 = node.contents();
              oldNodes.replaceWith(nodes7254);
            }));
            
            var node2455 = $("<span>");
            node2455.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp6961 = result__;
              var tmp6879 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp6960 = result__;
                  var result__ = tmp6960;
                  tmp6879.set(result__);
                  
                });
              }));
              
              var nodes7255 = $("<span>");
              node2455.append(nodes7255);
              subs__.addSub((mobl.html)(tmp6879, function(_, callback) {
                var root9107 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9107); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7255;
                nodes7255 = node.contents();
                oldNodes.replaceWith(nodes7255);
              }));
              node2454.append(node2455);
              
              
            });
            
            
            
          }
        };
        renderCond588();
        subs__.addSub(tmp6880.addEventListener('change', function() {
          renderCond588();
        }));
        
        callback(root9102); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7250;
        nodes7250 = node.contents();
        oldNodes.replaceWith(nodes7250);
      }));
      
      
    } else {
      var nodes7256 = $("<span>");
      node2453.append(nodes7256);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.disagreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9108 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp6884 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp6884.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node2456 = $("<span>");
        root9108.append(node2456);
        var condSubs589 = new mobl.CompSubscription();
        subs__.addSub(condSubs589);
        var oldValue589;
        var renderCond589 = function() {
          var value3321 = tmp6884.get();
          if(oldValue589 === value3321) return;
          oldValue589 = value3321;
          var subs__ = condSubs589;
          subs__.unsubscribe();
          node2456.empty();
          if(value3321) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp6881 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp6881.set("A" + qa.get().number + ". ");
            }));
            
            var nodes7257 = $("<span>");
            node2456.append(nodes7257);
            subs__.addSub((mobl.label)(tmp6881, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root9109 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root9109); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes7257;
              nodes7257 = node.contents();
              oldNodes.replaceWith(nodes7257);
            }));
            var nodes7258 = $("<span>");
            node2456.append(nodes7258);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root9110 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root9110); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes7258;
              nodes7258 = node.contents();
              oldNodes.replaceWith(nodes7258);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp6882 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp6882.set("A" + qa.get().number + ". ");
            }));
            
            var nodes7259 = $("<span>");
            node2456.append(nodes7259);
            subs__.addSub((mobl.label)(tmp6882, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root9111 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root9111); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes7259;
              nodes7259 = node.contents();
              oldNodes.replaceWith(nodes7259);
            }));
            var nodes7260 = $("<span>");
            node2456.append(nodes7260);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root9112 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root9112); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes7260;
              nodes7260 = node.contents();
              oldNodes.replaceWith(nodes7260);
            }));
            
            var node2457 = $("<span>");
            node2457.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp6963 = result__;
              var tmp6883 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp6962 = result__;
                  var result__ = tmp6962;
                  tmp6883.set(result__);
                  
                });
              }));
              
              var nodes7261 = $("<span>");
              node2457.append(nodes7261);
              subs__.addSub((mobl.html)(tmp6883, function(_, callback) {
                var root9113 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9113); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7261;
                nodes7261 = node.contents();
                oldNodes.replaceWith(nodes7261);
              }));
              node2456.append(node2457);
              
              
            });
            
            
            
          }
        };
        renderCond589();
        subs__.addSub(tmp6884.addEventListener('change', function() {
          renderCond589();
        }));
        
        callback(root9108); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7256;
        nodes7256 = node.contents();
        oldNodes.replaceWith(nodes7256);
      }));
      
      
    }
  };
  renderCond587();
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    renderCond587();
  }));
  
  var nodes7262 = $("<span>");
  root9101.append(nodes7262);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root9114 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2458 = $("<span>");
    node2458.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp6965 = result__;
      var tmp6885 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp6964 = result__;
          var result__ = tmp6964;
          tmp6885.set(result__);
          
        });
      }));
      
      var nodes7266 = $("<span>");
      node2458.append(nodes7266);
      subs__.addSub((mobl.html)(tmp6885, function(_, callback) {
        var root9118 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9118); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7266;
        nodes7266 = node.contents();
        oldNodes.replaceWith(nodes7266);
      }));
      root9114.append(node2458);
      var nodes7263 = $("<span>");
      root9114.append(nodes7263);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9115 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9115); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7263;
        nodes7263 = node.contents();
        oldNodes.replaceWith(nodes7263);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp6886 = mobl.ref(result__);
      
      var nodes7264 = $("<span>");
      root9114.append(nodes7264);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp6886, function(_, callback) {
        var root9116 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9116); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7264;
        nodes7264 = node.contents();
        oldNodes.replaceWith(nodes7264);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp6887 = mobl.ref(result__);
      
      var nodes7265 = $("<span>");
      root9114.append(nodes7265);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp6887, function(_, callback) {
        var root9117 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9117); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7265;
        nodes7265 = node.contents();
        oldNodes.replaceWith(nodes7265);
      }));
      callback(root9114); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7262;
    nodes7262 = node.contents();
    oldNodes.replaceWith(nodes7262);
  }));
  callback(root9101); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp6966 = result__;
    var result__ = tmp6966;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp6967 = result__;
        var result__ = tmp6967;
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
  var root9119 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp6975 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp6889 = mobl.ref(result__);
  
  var nodes7267 = $("<span>");
  root9119.append(nodes7267);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp6889, function(_, callback) {
    var root9120 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp6968 = result__;
                       var result__ = tmp6968;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp6969 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp6888 = mobl.ref(result__);
    
    var nodes7268 = $("<span>");
    root9120.append(nodes7268);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp6888, function(_, callback) {
      var root9121 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9121); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7268;
      nodes7268 = node.contents();
      oldNodes.replaceWith(nodes7268);
    }));
    callback(root9120); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7267;
    nodes7267 = node.contents();
    oldNodes.replaceWith(nodes7267);
  }));
  var nodes7269 = $("<span>");
  root9119.append(nodes7269);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9122 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp6974 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6892 = mobl.ref(result__);
    
    var nodes7270 = $("<span>");
    root9122.append(nodes7270);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp6892, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root9123 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + qa.get().number + ". " + qa.get().question;
      var tmp6890 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
        tmp6890.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp6890.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      
      var nodes7271 = $("<span>");
      root9123.append(nodes7271);
      subs__.addSub((mobl.html)(tmp6890, function(_, callback) {
        var root9124 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9124); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7271;
        nodes7271 = node.contents();
        oldNodes.replaceWith(nodes7271);
      }));
      
      var node2459 = $("<span>");
      node2459.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp6971 = result__;
        var tmp6891 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp6970 = result__;
            var result__ = tmp6970;
            tmp6891.set(result__);
            
          });
        }));
        
        var nodes7272 = $("<span>");
        node2459.append(nodes7272);
        subs__.addSub((mobl.html)(tmp6891, function(_, callback) {
          var root9125 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9125); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7272;
          nodes7272 = node.contents();
          oldNodes.replaceWith(nodes7272);
        }));
        root9123.append(node2459);
        callback(root9123); return subs__;
        
      });
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7270;
      nodes7270 = node.contents();
      oldNodes.replaceWith(nodes7270);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp6973 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6894 = mobl.ref(result__);
    
    var nodes7273 = $("<span>");
    root9122.append(nodes7273);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6894, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root9126 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7274 = $("<span>");
      root9126.append(nodes7274);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9127 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp6972 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp6893 = mobl.ref(result__);
        
        var nodes7275 = $("<span>");
        root9127.append(nodes7275);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp6893, function(_, callback) {
          var root9128 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9128); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7275;
          nodes7275 = node.contents();
          oldNodes.replaceWith(nodes7275);
        }));
        callback(root9127); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7274;
        nodes7274 = node.contents();
        oldNodes.replaceWith(nodes7274);
      }));
      
      var node2460 = $("<span>");
      root9126.append(node2460);
      var condSubs590 = new mobl.CompSubscription();
      subs__.addSub(condSubs590);
      var oldValue590;
      var renderCond590 = function() {
        var value3322 = qa.get().done;
        if(oldValue590 === value3322) return;
        oldValue590 = value3322;
        var subs__ = condSubs590;
        subs__.unsubscribe();
        node2460.empty();
        if(value3322) {
          var nodes7276 = $("<span>");
          node2460.append(nodes7276);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, function(_, callback) {
            var root9129 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root9129); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes7276;
            nodes7276 = node.contents();
            oldNodes.replaceWith(nodes7276);
          }));
          
          
        } else {
          
        }
      };
      renderCond590();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond590();
      }));
      
      callback(root9126); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7273;
      nodes7273 = node.contents();
      oldNodes.replaceWith(nodes7273);
    }));
    callback(root9122); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7269;
    nodes7269 = node.contents();
    oldNodes.replaceWith(nodes7269);
  }));
  callback(root9119); return subs__;
  
  
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
  qas.list(function(coll4334) {
    coll4334 = coll4334.reverse();
    function processOne236() {
      var item;
      item = coll4334.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll4334.length > 0) processOne236(); else rest236();
      
    }
    function rest236() {
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
    if(coll4334.length > 0) processOne236(); else rest236();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll4335) {
    coll4335 = coll4335.reverse();
    function processOne237() {
      var item;
      item = coll4335.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll4335.length > 0) processOne237(); else rest237();
      
    }
    function rest237() {
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
    if(coll4335.length > 0) processOne237(); else rest237();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll4336) {
    coll4336 = coll4336.reverse();
    function processOne238() {
      var item;
      item = coll4336.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll4336.length > 0) processOne238(); else rest238();
      
    }
    function rest238() {
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
    if(coll4336.length > 0) processOne238(); else rest238();
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