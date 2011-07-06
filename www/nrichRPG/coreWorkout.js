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
    var tmp13236 = result__;
    var result__ = tmp13236;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp13237 = result__;
      var result__ = tmp13237;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp13238 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicCode, callback) {
  var __this = this;
  var result__ = nrichRPG.coreWorkout.topicMapForId(topicCode).keys();
  var keys = result__;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll885) {
    coll885 = coll885.reverse();
    function processOne387() {
      var i;
      i = coll885.pop();
      var result__ = mobl.Math.floor(keys.length * mobl.Math.random());
      var r = result__;
      var result__ = keys.get(r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQA(tid, function(result__) {
        var tmp13239 = result__;
        
        if(coll885.length > 0) processOne387(); else rest387();
        
      });
    }
    function rest387() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll885.length > 0) processOne387(); else rest387();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root16231 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes14225 = $("<span>");
  root16231.append(nodes14225);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16232 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp13247 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13190 = mobl.ref(result__);
    
    var nodes14226 = $("<span>");
    root16232.append(nodes14226);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13190, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16233 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14227 = $("<span>");
      root16233.append(nodes14227);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16234 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16234); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14227;
        nodes14227 = node.contents();
        oldNodes.replaceWith(nodes14227);
      }));
      callback(root16233); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14226;
      nodes14226 = node.contents();
      oldNodes.replaceWith(nodes14226);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp13246 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13191 = mobl.ref(result__);
    
    var nodes14228 = $("<span>");
    root16232.append(nodes14228);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13191, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16235 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14229 = $("<span>");
      root16235.append(nodes14229);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16236 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16236); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14229;
        nodes14229 = node.contents();
        oldNodes.replaceWith(nodes14229);
      }));
      callback(root16235); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14228;
      nodes14228 = node.contents();
      oldNodes.replaceWith(nodes14228);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp13245 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13192 = mobl.ref(result__);
    
    var nodes14230 = $("<span>");
    root16232.append(nodes14230);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13192, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16237 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14231 = $("<span>");
      root16237.append(nodes14231);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16238 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16238); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14231;
        nodes14231 = node.contents();
        oldNodes.replaceWith(nodes14231);
      }));
      callback(root16237); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14230;
      nodes14230 = node.contents();
      oldNodes.replaceWith(nodes14230);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp13244 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13193 = mobl.ref(result__);
    
    var nodes14232 = $("<span>");
    root16232.append(nodes14232);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13193, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16239 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14233 = $("<span>");
      root16239.append(nodes14233);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16240 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16240); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14233;
        nodes14233 = node.contents();
        oldNodes.replaceWith(nodes14233);
      }));
      callback(root16239); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14232;
      nodes14232 = node.contents();
      oldNodes.replaceWith(nodes14232);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp13243 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13194 = mobl.ref(result__);
    
    var nodes14234 = $("<span>");
    root16232.append(nodes14234);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13194, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16241 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14235 = $("<span>");
      root16241.append(nodes14235);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16242 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16242); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14235;
        nodes14235 = node.contents();
        oldNodes.replaceWith(nodes14235);
      }));
      callback(root16241); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14234;
      nodes14234 = node.contents();
      oldNodes.replaceWith(nodes14234);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp13242 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13195 = mobl.ref(result__);
    
    var nodes14236 = $("<span>");
    root16232.append(nodes14236);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13195, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16243 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14237 = $("<span>");
      root16243.append(nodes14237);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16244 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16244); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14237;
        nodes14237 = node.contents();
        oldNodes.replaceWith(nodes14237);
      }));
      callback(root16243); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14236;
      nodes14236 = node.contents();
      oldNodes.replaceWith(nodes14236);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp13241 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13196 = mobl.ref(result__);
    
    var nodes14238 = $("<span>");
    root16232.append(nodes14238);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13196, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16245 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14239 = $("<span>");
      root16245.append(nodes14239);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16246 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16246); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14239;
        nodes14239 = node.contents();
        oldNodes.replaceWith(nodes14239);
      }));
      callback(root16245); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14238;
      nodes14238 = node.contents();
      oldNodes.replaceWith(nodes14238);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp13240 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13197 = mobl.ref(result__);
    
    var nodes14240 = $("<span>");
    root16232.append(nodes14240);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13197, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16247 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14241 = $("<span>");
      root16247.append(nodes14241);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16248 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16248); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14241;
        nodes14241 = node.contents();
        oldNodes.replaceWith(nodes14241);
      }));
      callback(root16247); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14240;
      nodes14240 = node.contents();
      oldNodes.replaceWith(nodes14240);
    }));
    callback(root16232); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14225;
    nodes14225 = node.contents();
    oldNodes.replaceWith(nodes14225);
  }));
  callback(root16231); return subs__;
  
  return subs__;
};
nrichRPG.coreWorkout.topicMapForId = function(tid) {
   var __this = this;
  var map = new mobl.Map();
  
  if(tid.indexOf("C", 0) == 0) {
    nrichRPG.coreWorkout.initCoreTopicMap(map);
  } else if(tid.indexOf("F", 0) == 0) {
    nrichRPG.coreWorkout.initFurtherTopicMap(map);
  } else if(tid.indexOf("S", 0) == 0) {
    nrichRPG.coreWorkout.initStatsTopicMap(map);
  } else {
    mobl.alert("invalid topi id " + tid);
  }
  return map;
};

nrichRPG.coreWorkout.topicName = function(tid) {
   var __this = this;
  return nrichRPG.coreWorkout.topicMapForId(tid).get(tid);
};

nrichRPG.coreWorkout.topicAdded = function(tid, callback) {
  var __this = this;
  nrichRPG.coreWorkout.makeQA(tid, function(result__) {
    var tmp13248 = result__;
    var result__ = mobl.alert(nrichRPG.coreWorkout.topicName(tid) + " added");
    if(callback && callback.apply) callback(); return;
  });
};


nrichRPG.coreWorkout.topicLabel = function(tid, elements, callback) {
  var root16249 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var map = mobl.ref(nrichRPG.coreWorkout.topicMapForId(tid.get()));
  var result__ = "+" + map.get().get(tid.get());
  var tmp13198 = mobl.ref(result__);
  subs__.addSub(map.addEventListener('change', function() {
    tmp13198.set("+" + map.get().get(tid.get()));
  }));
  subs__.addSub(tid.addEventListener('change', function() {
    tmp13198.set("+" + map.get().get(tid.get()));
  }));
  
  var nodes14242 = $("<span>");
  root16249.append(nodes14242);
  subs__.addSub((mobl.label)(tmp13198, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root16250 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root16250); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes14242;
    nodes14242 = node.contents();
    oldNodes.replaceWith(nodes14242);
  }));
  callback(root16249); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.topicItem = function(tid, elements, callback) {
  var root16251 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   nrichRPG.coreWorkout.topicAdded(tid.get(), function(result__) {
                     var tmp13249 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp13199 = mobl.ref(result__);
  
  var nodes14243 = $("<span>");
  root16251.append(nodes14243);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13199, mobl.ref(null), mobl.ref(false), function(_, callback) {
    var root16252 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes14244 = $("<span>");
    root16252.append(nodes14244);
    subs__.addSub((nrichRPG.coreWorkout.topicLabel)(tid, function(_, callback) {
      var root16253 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16253); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14244;
      nodes14244 = node.contents();
      oldNodes.replaceWith(nodes14244);
    }));
    callback(root16252); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14243;
    nodes14243 = node.contents();
    oldNodes.replaceWith(nodes14243);
  }));
  callback(root16251); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root16254 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes14245 = $("<span>");
  root16254.append(nodes14245);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root16255 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp13201 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp13200 = mobl.ref(result__);
    
    var nodes14246 = $("<span>");
    root16255.append(nodes14246);
    subs__.addSub((ui.backButton)(tmp13200, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp13201, function(_, callback) {
      var root16256 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16256); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14246;
      nodes14246 = node.contents();
      oldNodes.replaceWith(nodes14246);
    }));
    callback(root16255); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14245;
    nodes14245 = node.contents();
    oldNodes.replaceWith(nodes14245);
  }));
  var nodes14247 = $("<span>");
  root16254.append(nodes14247);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16257 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes14248 = $("<span>");
    root16257.append(nodes14248);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C11"), function(_, callback) {
      var root16258 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16258); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14248;
      nodes14248 = node.contents();
      oldNodes.replaceWith(nodes14248);
    }));
    var nodes14249 = $("<span>");
    root16257.append(nodes14249);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C7"), function(_, callback) {
      var root16259 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16259); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14249;
      nodes14249 = node.contents();
      oldNodes.replaceWith(nodes14249);
    }));
    var nodes14250 = $("<span>");
    root16257.append(nodes14250);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C9"), function(_, callback) {
      var root16260 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16260); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14250;
      nodes14250 = node.contents();
      oldNodes.replaceWith(nodes14250);
    }));
    var nodes14251 = $("<span>");
    root16257.append(nodes14251);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C1"), function(_, callback) {
      var root16261 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16261); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14251;
      nodes14251 = node.contents();
      oldNodes.replaceWith(nodes14251);
    }));
    var nodes14252 = $("<span>");
    root16257.append(nodes14252);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C30"), function(_, callback) {
      var root16262 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16262); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14252;
      nodes14252 = node.contents();
      oldNodes.replaceWith(nodes14252);
    }));
    var nodes14253 = $("<span>");
    root16257.append(nodes14253);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C13"), function(_, callback) {
      var root16263 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16263); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14253;
      nodes14253 = node.contents();
      oldNodes.replaceWith(nodes14253);
    }));
    var nodes14254 = $("<span>");
    root16257.append(nodes14254);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C17"), function(_, callback) {
      var root16264 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16264); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14254;
      nodes14254 = node.contents();
      oldNodes.replaceWith(nodes14254);
    }));
    callback(root16257); return subs__;
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14247;
    nodes14247 = node.contents();
    oldNodes.replaceWith(nodes14247);
  }));
  callback(root16254); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root16265 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes14255 = $("<span>");
  root16265.append(nodes14255);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root16266 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp13203 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp13202 = mobl.ref(result__);
    
    var nodes14256 = $("<span>");
    root16266.append(nodes14256);
    subs__.addSub((ui.backButton)(tmp13202, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp13203, function(_, callback) {
      var root16267 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16267); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14256;
      nodes14256 = node.contents();
      oldNodes.replaceWith(nodes14256);
    }));
    callback(root16266); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14255;
    nodes14255 = node.contents();
    oldNodes.replaceWith(nodes14255);
  }));
  var nodes14257 = $("<span>");
  root16265.append(nodes14257);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16268 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes14258 = $("<span>");
    root16268.append(nodes14258);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C24"), function(_, callback) {
      var root16269 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16269); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14258;
      nodes14258 = node.contents();
      oldNodes.replaceWith(nodes14258);
    }));
    var nodes14259 = $("<span>");
    root16268.append(nodes14259);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C25"), function(_, callback) {
      var root16270 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16270); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14259;
      nodes14259 = node.contents();
      oldNodes.replaceWith(nodes14259);
    }));
    var nodes14260 = $("<span>");
    root16268.append(nodes14260);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C26"), function(_, callback) {
      var root16271 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16271); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14260;
      nodes14260 = node.contents();
      oldNodes.replaceWith(nodes14260);
    }));
    var nodes14261 = $("<span>");
    root16268.append(nodes14261);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C270"), function(_, callback) {
      var root16272 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16272); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14261;
      nodes14261 = node.contents();
      oldNodes.replaceWith(nodes14261);
    }));
    var nodes14262 = $("<span>");
    root16268.append(nodes14262);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C27"), function(_, callback) {
      var root16273 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16273); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14262;
      nodes14262 = node.contents();
      oldNodes.replaceWith(nodes14262);
    }));
    callback(root16268); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14257;
    nodes14257 = node.contents();
    oldNodes.replaceWith(nodes14257);
  }));
  callback(root16265); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root16274 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes14263 = $("<span>");
  root16274.append(nodes14263);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root16275 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp13205 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp13204 = mobl.ref(result__);
    
    var nodes14264 = $("<span>");
    root16275.append(nodes14264);
    subs__.addSub((ui.backButton)(tmp13204, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp13205, function(_, callback) {
      var root16276 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16276); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14264;
      nodes14264 = node.contents();
      oldNodes.replaceWith(nodes14264);
    }));
    callback(root16275); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14263;
    nodes14263 = node.contents();
    oldNodes.replaceWith(nodes14263);
  }));
  var nodes14265 = $("<span>");
  root16274.append(nodes14265);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16277 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes14266 = $("<span>");
    root16277.append(nodes14266);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C15"), function(_, callback) {
      var root16278 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16278); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14266;
      nodes14266 = node.contents();
      oldNodes.replaceWith(nodes14266);
    }));
    var nodes14267 = $("<span>");
    root16277.append(nodes14267);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C16"), function(_, callback) {
      var root16279 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16279); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14267;
      nodes14267 = node.contents();
      oldNodes.replaceWith(nodes14267);
    }));
    var nodes14268 = $("<span>");
    root16277.append(nodes14268);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C6"), function(_, callback) {
      var root16280 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16280); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14268;
      nodes14268 = node.contents();
      oldNodes.replaceWith(nodes14268);
    }));
    callback(root16277); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14265;
    nodes14265 = node.contents();
    oldNodes.replaceWith(nodes14265);
  }));
  callback(root16274); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root16281 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes14269 = $("<span>");
  root16281.append(nodes14269);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root16282 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp13207 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp13206 = mobl.ref(result__);
    
    var nodes14270 = $("<span>");
    root16282.append(nodes14270);
    subs__.addSub((ui.backButton)(tmp13206, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp13207, function(_, callback) {
      var root16283 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16283); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14270;
      nodes14270 = node.contents();
      oldNodes.replaceWith(nodes14270);
    }));
    callback(root16282); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14269;
    nodes14269 = node.contents();
    oldNodes.replaceWith(nodes14269);
  }));
  var nodes14271 = $("<span>");
  root16281.append(nodes14271);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16284 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes14272 = $("<span>");
    root16284.append(nodes14272);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C8"), function(_, callback) {
      var root16285 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16285); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14272;
      nodes14272 = node.contents();
      oldNodes.replaceWith(nodes14272);
    }));
    var nodes14273 = $("<span>");
    root16284.append(nodes14273);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C12"), function(_, callback) {
      var root16286 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16286); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14273;
      nodes14273 = node.contents();
      oldNodes.replaceWith(nodes14273);
    }));
    var nodes14274 = $("<span>");
    root16284.append(nodes14274);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C23"), function(_, callback) {
      var root16287 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16287); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14274;
      nodes14274 = node.contents();
      oldNodes.replaceWith(nodes14274);
    }));
    var nodes14275 = $("<span>");
    root16284.append(nodes14275);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C2"), function(_, callback) {
      var root16288 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16288); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14275;
      nodes14275 = node.contents();
      oldNodes.replaceWith(nodes14275);
    }));
    callback(root16284); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14271;
    nodes14271 = node.contents();
    oldNodes.replaceWith(nodes14271);
  }));
  callback(root16281); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root16289 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes14276 = $("<span>");
  root16289.append(nodes14276);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root16290 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp13209 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp13208 = mobl.ref(result__);
    
    var nodes14277 = $("<span>");
    root16290.append(nodes14277);
    subs__.addSub((ui.backButton)(tmp13208, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp13209, function(_, callback) {
      var root16291 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16291); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14277;
      nodes14277 = node.contents();
      oldNodes.replaceWith(nodes14277);
    }));
    callback(root16290); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14276;
    nodes14276 = node.contents();
    oldNodes.replaceWith(nodes14276);
  }));
  var nodes14278 = $("<span>");
  root16289.append(nodes14278);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16292 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes14279 = $("<span>");
    root16292.append(nodes14279);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C5"), function(_, callback) {
      var root16293 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16293); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14279;
      nodes14279 = node.contents();
      oldNodes.replaceWith(nodes14279);
    }));
    var nodes14280 = $("<span>");
    root16292.append(nodes14280);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C18"), function(_, callback) {
      var root16294 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16294); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14280;
      nodes14280 = node.contents();
      oldNodes.replaceWith(nodes14280);
    }));
    callback(root16292); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14278;
    nodes14278 = node.contents();
    oldNodes.replaceWith(nodes14278);
  }));
  callback(root16289); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root16295 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes14281 = $("<span>");
  root16295.append(nodes14281);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root16296 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp13211 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp13210 = mobl.ref(result__);
    
    var nodes14282 = $("<span>");
    root16296.append(nodes14282);
    subs__.addSub((ui.backButton)(tmp13210, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp13211, function(_, callback) {
      var root16297 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16297); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14282;
      nodes14282 = node.contents();
      oldNodes.replaceWith(nodes14282);
    }));
    callback(root16296); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14281;
    nodes14281 = node.contents();
    oldNodes.replaceWith(nodes14281);
  }));
  var nodes14283 = $("<span>");
  root16295.append(nodes14283);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16298 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes14284 = $("<span>");
    root16298.append(nodes14284);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C14"), function(_, callback) {
      var root16299 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16299); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14284;
      nodes14284 = node.contents();
      oldNodes.replaceWith(nodes14284);
    }));
    var nodes14285 = $("<span>");
    root16298.append(nodes14285);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C20"), function(_, callback) {
      var root16300 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16300); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14285;
      nodes14285 = node.contents();
      oldNodes.replaceWith(nodes14285);
    }));
    var nodes14286 = $("<span>");
    root16298.append(nodes14286);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C21"), function(_, callback) {
      var root16301 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16301); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14286;
      nodes14286 = node.contents();
      oldNodes.replaceWith(nodes14286);
    }));
    var nodes14287 = $("<span>");
    root16298.append(nodes14287);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C22"), function(_, callback) {
      var root16302 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16302); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14287;
      nodes14287 = node.contents();
      oldNodes.replaceWith(nodes14287);
    }));
    var nodes14288 = $("<span>");
    root16298.append(nodes14288);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C19"), function(_, callback) {
      var root16303 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16303); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14288;
      nodes14288 = node.contents();
      oldNodes.replaceWith(nodes14288);
    }));
    callback(root16298); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14283;
    nodes14283 = node.contents();
    oldNodes.replaceWith(nodes14283);
  }));
  callback(root16295); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root16304 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes14289 = $("<span>");
  root16304.append(nodes14289);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root16305 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp13213 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp13212 = mobl.ref(result__);
    
    var nodes14290 = $("<span>");
    root16305.append(nodes14290);
    subs__.addSub((ui.backButton)(tmp13212, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp13213, function(_, callback) {
      var root16306 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16306); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14290;
      nodes14290 = node.contents();
      oldNodes.replaceWith(nodes14290);
    }));
    callback(root16305); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14289;
    nodes14289 = node.contents();
    oldNodes.replaceWith(nodes14289);
  }));
  var nodes14291 = $("<span>");
  root16304.append(nodes14291);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16307 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes14292 = $("<span>");
    root16307.append(nodes14292);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C28"), function(_, callback) {
      var root16308 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16308); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14292;
      nodes14292 = node.contents();
      oldNodes.replaceWith(nodes14292);
    }));
    var nodes14293 = $("<span>");
    root16307.append(nodes14293);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C3"), function(_, callback) {
      var root16309 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16309); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14293;
      nodes14293 = node.contents();
      oldNodes.replaceWith(nodes14293);
    }));
    var nodes14294 = $("<span>");
    root16307.append(nodes14294);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C4"), function(_, callback) {
      var root16310 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16310); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14294;
      nodes14294 = node.contents();
      oldNodes.replaceWith(nodes14294);
    }));
    callback(root16307); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14291;
    nodes14291 = node.contents();
    oldNodes.replaceWith(nodes14291);
  }));
  callback(root16304); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root16311 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes14295 = $("<span>");
  root16311.append(nodes14295);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root16312 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp13215 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp13214 = mobl.ref(result__);
    
    var nodes14296 = $("<span>");
    root16312.append(nodes14296);
    subs__.addSub((ui.backButton)(tmp13214, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp13215, function(_, callback) {
      var root16313 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16313); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14296;
      nodes14296 = node.contents();
      oldNodes.replaceWith(nodes14296);
    }));
    callback(root16312); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14295;
    nodes14295 = node.contents();
    oldNodes.replaceWith(nodes14295);
  }));
  var nodes14297 = $("<span>");
  root16311.append(nodes14297);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16314 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes14298 = $("<span>");
    root16314.append(nodes14298);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C29"), function(_, callback) {
      var root16315 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16315); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14298;
      nodes14298 = node.contents();
      oldNodes.replaceWith(nodes14298);
    }));
    callback(root16314); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14297;
    nodes14297 = node.contents();
    oldNodes.replaceWith(nodes14297);
  }));
  callback(root16311); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root16316 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes14299 = $("<span>");
  root16316.append(nodes14299);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16317 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes14300 = $("<span>");
    root16317.append(nodes14300);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F1"), function(_, callback) {
      var root16318 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16318); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14300;
      nodes14300 = node.contents();
      oldNodes.replaceWith(nodes14300);
    }));
    var nodes14301 = $("<span>");
    root16317.append(nodes14301);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F2"), function(_, callback) {
      var root16319 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16319); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14301;
      nodes14301 = node.contents();
      oldNodes.replaceWith(nodes14301);
    }));
    var nodes14302 = $("<span>");
    root16317.append(nodes14302);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F3a"), function(_, callback) {
      var root16320 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16320); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14302;
      nodes14302 = node.contents();
      oldNodes.replaceWith(nodes14302);
    }));
    var nodes14303 = $("<span>");
    root16317.append(nodes14303);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F4"), function(_, callback) {
      var root16321 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16321); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14303;
      nodes14303 = node.contents();
      oldNodes.replaceWith(nodes14303);
    }));
    var nodes14304 = $("<span>");
    root16317.append(nodes14304);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F5"), function(_, callback) {
      var root16322 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16322); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14304;
      nodes14304 = node.contents();
      oldNodes.replaceWith(nodes14304);
    }));
    var nodes14305 = $("<span>");
    root16317.append(nodes14305);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F6"), function(_, callback) {
      var root16323 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16323); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14305;
      nodes14305 = node.contents();
      oldNodes.replaceWith(nodes14305);
    }));
    var nodes14306 = $("<span>");
    root16317.append(nodes14306);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F7"), function(_, callback) {
      var root16324 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16324); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14306;
      nodes14306 = node.contents();
      oldNodes.replaceWith(nodes14306);
    }));
    var nodes14307 = $("<span>");
    root16317.append(nodes14307);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F8"), function(_, callback) {
      var root16325 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16325); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14307;
      nodes14307 = node.contents();
      oldNodes.replaceWith(nodes14307);
    }));
    var nodes14308 = $("<span>");
    root16317.append(nodes14308);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F9"), function(_, callback) {
      var root16326 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16326); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14308;
      nodes14308 = node.contents();
      oldNodes.replaceWith(nodes14308);
    }));
    var nodes14309 = $("<span>");
    root16317.append(nodes14309);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F10"), function(_, callback) {
      var root16327 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16327); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14309;
      nodes14309 = node.contents();
      oldNodes.replaceWith(nodes14309);
    }));
    var nodes14310 = $("<span>");
    root16317.append(nodes14310);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F11"), function(_, callback) {
      var root16328 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16328); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14310;
      nodes14310 = node.contents();
      oldNodes.replaceWith(nodes14310);
    }));
    var nodes14311 = $("<span>");
    root16317.append(nodes14311);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F12"), function(_, callback) {
      var root16329 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16329); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14311;
      nodes14311 = node.contents();
      oldNodes.replaceWith(nodes14311);
    }));
    var nodes14312 = $("<span>");
    root16317.append(nodes14312);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F13"), function(_, callback) {
      var root16330 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16330); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14312;
      nodes14312 = node.contents();
      oldNodes.replaceWith(nodes14312);
    }));
    callback(root16317); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14299;
    nodes14299 = node.contents();
    oldNodes.replaceWith(nodes14299);
  }));
  callback(root16316); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root16331 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes14313 = $("<span>");
  root16331.append(nodes14313);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16332 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes14314 = $("<span>");
    root16332.append(nodes14314);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S1"), function(_, callback) {
      var root16333 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16333); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14314;
      nodes14314 = node.contents();
      oldNodes.replaceWith(nodes14314);
    }));
    var nodes14315 = $("<span>");
    root16332.append(nodes14315);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S2"), function(_, callback) {
      var root16334 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16334); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14315;
      nodes14315 = node.contents();
      oldNodes.replaceWith(nodes14315);
    }));
    var nodes14316 = $("<span>");
    root16332.append(nodes14316);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S3"), function(_, callback) {
      var root16335 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16335); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14316;
      nodes14316 = node.contents();
      oldNodes.replaceWith(nodes14316);
    }));
    var nodes14317 = $("<span>");
    root16332.append(nodes14317);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S4"), function(_, callback) {
      var root16336 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16336); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14317;
      nodes14317 = node.contents();
      oldNodes.replaceWith(nodes14317);
    }));
    var nodes14318 = $("<span>");
    root16332.append(nodes14318);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S5"), function(_, callback) {
      var root16337 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16337); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14318;
      nodes14318 = node.contents();
      oldNodes.replaceWith(nodes14318);
    }));
    var nodes14319 = $("<span>");
    root16332.append(nodes14319);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S6"), function(_, callback) {
      var root16338 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16338); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14319;
      nodes14319 = node.contents();
      oldNodes.replaceWith(nodes14319);
    }));
    callback(root16332); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14313;
    nodes14313 = node.contents();
    oldNodes.replaceWith(nodes14313);
  }));
  callback(root16331); return subs__;
  
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
  var root16339 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1934 = $("<div>");
  
  var ref1476 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref1476.get() !== null) {
    node1934.attr('class', ref1476.get());
    subs__.addSub(ref1476.addEventListener('change', function(_, ref, val) {
      node1934.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1476.rebind());
  
  var val658 = onclick.get();
  if(val658 !== null) {
    subs__.addSub(mobl.domBind(node1934, 'tap', val658));
  }
  
  
  var node1935 = $("<div>");
  
  var ref1475 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref1475.get() !== null) {
    node1935.attr('class', ref1475.get());
    subs__.addSub(ref1475.addEventListener('change', function(_, ref, val) {
      node1935.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1475.rebind());
  
  
  var node1936 = $("<div>");
  
  var ref1473 = text;
  node1936.text(""+ref1473.get());
  var ignore287 = false;
  subs__.addSub(ref1473.addEventListener('change', function(_, ref, val) {
    if(ignore287) return;
    node1936.text(""+val);
  }));
  subs__.addSub(ref1473.rebind());
  
  
  var ref1474 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref1474.get() !== null) {
    node1936.attr('class', ref1474.get());
    subs__.addSub(ref1474.addEventListener('change', function(_, ref, val) {
      node1936.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1474.rebind());
  
  node1935.append(node1936);
  node1934.append(node1935);
  var nodes14320 = $("<span>");
  node1934.append(nodes14320);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl573();
  }));
  
  function renderControl573() {
    subs__.addSub((elements)(function(elements, callback) {
      var root16340 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16340); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14320;
      nodes14320 = node.contents();
      oldNodes.replaceWith(nodes14320);
    }));
  }
  renderControl573();
  root16339.append(node1934);
  callback(root16339); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp13250 = result__;
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
  var root16341 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1937 = $("<span>");
  root16341.append(node1937);
  var condSubs548 = new mobl.CompSubscription();
  subs__.addSub(condSubs548);
  var oldValue548;
  var renderCond548 = function() {
    var value880 = qa.get().correct;
    if(oldValue548 === value880) return;
    oldValue548 = value880;
    var subs__ = condSubs548;
    subs__.unsubscribe();
    node1937.empty();
    if(value880) {
      var nodes14321 = $("<span>");
      node1937.append(nodes14321);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.agreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16342 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp13219 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp13219.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node1938 = $("<span>");
        root16342.append(node1938);
        var condSubs549 = new mobl.CompSubscription();
        subs__.addSub(condSubs549);
        var oldValue549;
        var renderCond549 = function() {
          var value881 = tmp13219.get();
          if(oldValue549 === value881) return;
          oldValue549 = value881;
          var subs__ = condSubs549;
          subs__.unsubscribe();
          node1938.empty();
          if(value881) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp13216 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp13216.set("A" + qa.get().number + ". ");
            }));
            
            var nodes14322 = $("<span>");
            node1938.append(nodes14322);
            subs__.addSub((mobl.label)(tmp13216, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root16343 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root16343); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes14322;
              nodes14322 = node.contents();
              oldNodes.replaceWith(nodes14322);
            }));
            var nodes14323 = $("<span>");
            node1938.append(nodes14323);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root16344 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root16344); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes14323;
              nodes14323 = node.contents();
              oldNodes.replaceWith(nodes14323);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp13217 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp13217.set("A" + qa.get().number + ". ");
            }));
            
            var nodes14324 = $("<span>");
            node1938.append(nodes14324);
            subs__.addSub((mobl.label)(tmp13217, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root16345 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root16345); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes14324;
              nodes14324 = node.contents();
              oldNodes.replaceWith(nodes14324);
            }));
            var nodes14325 = $("<span>");
            node1938.append(nodes14325);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root16346 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root16346); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes14325;
              nodes14325 = node.contents();
              oldNodes.replaceWith(nodes14325);
            }));
            
            var node1939 = $("<span>");
            node1939.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp13252 = result__;
              var tmp13218 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp13251 = result__;
                  var result__ = tmp13251;
                  tmp13218.set(result__);
                  
                });
              }));
              
              var nodes14326 = $("<span>");
              node1939.append(nodes14326);
              subs__.addSub((mobl.html)(tmp13218, function(_, callback) {
                var root16347 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root16347); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes14326;
                nodes14326 = node.contents();
                oldNodes.replaceWith(nodes14326);
              }));
              node1938.append(node1939);
              
              
            });
            
            
            
          }
        };
        renderCond549();
        subs__.addSub(tmp13219.addEventListener('change', function() {
          renderCond549();
        }));
        
        callback(root16342); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes14321;
        nodes14321 = node.contents();
        oldNodes.replaceWith(nodes14321);
      }));
      
      
    } else {
      var nodes14327 = $("<span>");
      node1937.append(nodes14327);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.disagreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16348 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp13223 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp13223.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node1940 = $("<span>");
        root16348.append(node1940);
        var condSubs550 = new mobl.CompSubscription();
        subs__.addSub(condSubs550);
        var oldValue550;
        var renderCond550 = function() {
          var value882 = tmp13223.get();
          if(oldValue550 === value882) return;
          oldValue550 = value882;
          var subs__ = condSubs550;
          subs__.unsubscribe();
          node1940.empty();
          if(value882) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp13220 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp13220.set("A" + qa.get().number + ". ");
            }));
            
            var nodes14328 = $("<span>");
            node1940.append(nodes14328);
            subs__.addSub((mobl.label)(tmp13220, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root16349 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root16349); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes14328;
              nodes14328 = node.contents();
              oldNodes.replaceWith(nodes14328);
            }));
            var nodes14329 = $("<span>");
            node1940.append(nodes14329);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root16350 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root16350); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes14329;
              nodes14329 = node.contents();
              oldNodes.replaceWith(nodes14329);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp13221 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp13221.set("A" + qa.get().number + ". ");
            }));
            
            var nodes14330 = $("<span>");
            node1940.append(nodes14330);
            subs__.addSub((mobl.label)(tmp13221, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root16351 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root16351); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes14330;
              nodes14330 = node.contents();
              oldNodes.replaceWith(nodes14330);
            }));
            var nodes14331 = $("<span>");
            node1940.append(nodes14331);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root16352 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root16352); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes14331;
              nodes14331 = node.contents();
              oldNodes.replaceWith(nodes14331);
            }));
            
            var node1941 = $("<span>");
            node1941.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp13254 = result__;
              var tmp13222 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp13253 = result__;
                  var result__ = tmp13253;
                  tmp13222.set(result__);
                  
                });
              }));
              
              var nodes14332 = $("<span>");
              node1941.append(nodes14332);
              subs__.addSub((mobl.html)(tmp13222, function(_, callback) {
                var root16353 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root16353); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes14332;
                nodes14332 = node.contents();
                oldNodes.replaceWith(nodes14332);
              }));
              node1940.append(node1941);
              
              
            });
            
            
            
          }
        };
        renderCond550();
        subs__.addSub(tmp13223.addEventListener('change', function() {
          renderCond550();
        }));
        
        callback(root16348); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes14327;
        nodes14327 = node.contents();
        oldNodes.replaceWith(nodes14327);
      }));
      
      
    }
  };
  renderCond548();
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    renderCond548();
  }));
  
  var nodes14333 = $("<span>");
  root16341.append(nodes14333);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root16354 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1942 = $("<span>");
    node1942.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp13256 = result__;
      var tmp13224 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp13255 = result__;
          var result__ = tmp13255;
          tmp13224.set(result__);
          
        });
      }));
      
      var nodes14337 = $("<span>");
      node1942.append(nodes14337);
      subs__.addSub((mobl.html)(tmp13224, function(_, callback) {
        var root16358 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16358); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14337;
        nodes14337 = node.contents();
        oldNodes.replaceWith(nodes14337);
      }));
      root16354.append(node1942);
      var nodes14334 = $("<span>");
      root16354.append(nodes14334);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16355 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16355); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14334;
        nodes14334 = node.contents();
        oldNodes.replaceWith(nodes14334);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp13225 = mobl.ref(result__);
      
      var nodes14335 = $("<span>");
      root16354.append(nodes14335);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp13225, function(_, callback) {
        var root16356 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16356); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14335;
        nodes14335 = node.contents();
        oldNodes.replaceWith(nodes14335);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp13226 = mobl.ref(result__);
      
      var nodes14336 = $("<span>");
      root16354.append(nodes14336);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp13226, function(_, callback) {
        var root16357 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16357); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14336;
        nodes14336 = node.contents();
        oldNodes.replaceWith(nodes14336);
      }));
      callback(root16354); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14333;
    nodes14333 = node.contents();
    oldNodes.replaceWith(nodes14333);
  }));
  callback(root16341); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp13257 = result__;
    var result__ = tmp13257;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp13258 = result__;
        var result__ = tmp13258;
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
  var root16359 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp13268 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp13230 = mobl.ref(result__);
  
  var result__ = nrichRPG.coreWorkout.topicName(qa.get().topic);
  var tmp13229 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp13229.set(nrichRPG.coreWorkout.topicName(qa.get().topic));
  }));
  
  var nodes14338 = $("<span>");
  root16359.append(nodes14338);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(tmp13229, tmp13230, function(_, callback) {
    var root16360 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp13261 = result__;
                       var result__ = tmp13261;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp13262 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp13227 = mobl.ref(result__);
    
    var nodes14339 = $("<span>");
    root16360.append(nodes14339);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp13227, function(_, callback) {
      var root16361 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16361); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14339;
      nodes14339 = node.contents();
      oldNodes.replaceWith(nodes14339);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(qa.get().topic, function(result__) {
                       var tmp13259 = result__;
                       var result__ = tmp13259;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp13260 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp13228 = mobl.ref(result__);
    
    var nodes14340 = $("<span>");
    root16360.append(nodes14340);
    subs__.addSub((ui.sideButton)(mobl.ref("New"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp13228, function(_, callback) {
      var root16362 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16362); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14340;
      nodes14340 = node.contents();
      oldNodes.replaceWith(nodes14340);
    }));
    callback(root16360); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14338;
    nodes14338 = node.contents();
    oldNodes.replaceWith(nodes14338);
  }));
  var nodes14341 = $("<span>");
  root16359.append(nodes14341);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16363 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp13267 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13233 = mobl.ref(result__);
    
    var nodes14342 = $("<span>");
    root16363.append(nodes14342);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp13233, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root16364 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + qa.get().number + ". " + qa.get().question;
      var tmp13231 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
        tmp13231.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp13231.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      
      var nodes14343 = $("<span>");
      root16364.append(nodes14343);
      subs__.addSub((mobl.html)(tmp13231, function(_, callback) {
        var root16365 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16365); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14343;
        nodes14343 = node.contents();
        oldNodes.replaceWith(nodes14343);
      }));
      
      var node1943 = $("<span>");
      node1943.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp13264 = result__;
        var tmp13232 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp13263 = result__;
            var result__ = tmp13263;
            tmp13232.set(result__);
            
          });
        }));
        
        var nodes14344 = $("<span>");
        node1943.append(nodes14344);
        subs__.addSub((mobl.html)(tmp13232, function(_, callback) {
          var root16366 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root16366); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes14344;
          nodes14344 = node.contents();
          oldNodes.replaceWith(nodes14344);
        }));
        root16364.append(node1943);
        callback(root16364); return subs__;
        
      });
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14342;
      nodes14342 = node.contents();
      oldNodes.replaceWith(nodes14342);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp13266 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13235 = mobl.ref(result__);
    
    var nodes14345 = $("<span>");
    root16363.append(nodes14345);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13235, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root16367 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14346 = $("<span>");
      root16367.append(nodes14346);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16368 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp13265 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp13234 = mobl.ref(result__);
        
        var nodes14347 = $("<span>");
        root16368.append(nodes14347);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp13234, function(_, callback) {
          var root16369 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root16369); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes14347;
          nodes14347 = node.contents();
          oldNodes.replaceWith(nodes14347);
        }));
        callback(root16368); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes14346;
        nodes14346 = node.contents();
        oldNodes.replaceWith(nodes14346);
      }));
      
      var node1944 = $("<span>");
      root16367.append(node1944);
      var condSubs551 = new mobl.CompSubscription();
      subs__.addSub(condSubs551);
      var oldValue551;
      var renderCond551 = function() {
        var value883 = qa.get().done;
        if(oldValue551 === value883) return;
        oldValue551 = value883;
        var subs__ = condSubs551;
        subs__.unsubscribe();
        node1944.empty();
        if(value883) {
          var nodes14348 = $("<span>");
          node1944.append(nodes14348);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, function(_, callback) {
            var root16370 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root16370); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes14348;
            nodes14348 = node.contents();
            oldNodes.replaceWith(nodes14348);
          }));
          
          
        } else {
          
        }
      };
      renderCond551();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond551();
      }));
      
      callback(root16367); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14345;
      nodes14345 = node.contents();
      oldNodes.replaceWith(nodes14345);
    }));
    callback(root16363); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14341;
    nodes14341 = node.contents();
    oldNodes.replaceWith(nodes14341);
  }));
  callback(root16359); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.max = mobl.ref(0);
nrichRPG.coreWorkout.makeQA = function(tid, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll886) {
    coll886 = coll886.reverse();
    function processOne388() {
      var item;
      item = coll886.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll886.length > 0) processOne388(); else rest388();
      
    }
    function rest388() {
      var result__ = nrichRPG.coreWorkout.max.get() + 1;
      qa.number = result__;
      var result__ = nrichRPG.coreWorkout.makeProblem(tid);
      var q_and_A = result__;
      var result__ = q_and_A.get(0);
      qa.question = result__;
      var result__ = q_and_A.get(1);
      qa.answer = result__;
      var result__ = tid;
      qa.topic = result__;
      var result__ = q_and_A.length > 2;
      if(result__) {
        var result__ = q_and_A.get(2);
        qa.plotData = result__;
        var result__ = false;
        qa.done = result__;
        var result__ = mobl.add(qa);
        var result__ = qa;
        if(callback && callback.apply) callback(result__);
        return;
        if(callback && callback.apply) callback(); return;
      } else {
        {
          var result__ = false;
          qa.done = result__;
          var result__ = mobl.add(qa);
          var result__ = qa;
          if(callback && callback.apply) callback(result__);
          return;
          if(callback && callback.apply) callback(); return;
        }
      }
    }
    if(coll886.length > 0) processOne388(); else rest388();
  });
  
};

(function(__ns) {
__ns.coreTopicNames = {
                        "C1": "Partial fractions",
                        "C2": "Binomial theorem",
                        "C3": "Polynomial integration",
                        "C4": "Trig integration",
                        "C5": "Scalar products",
                        "C6": "3D Lines",
                        "C7": "Inequalities",
                        "C8": "Arithmetic progressions",
                        "C9": "Factor theorem",
                        "C10": "Quadratics",
                        "C11": "Completing the square",
                        "C12": "Binomial expansion",
                        "C13": "Logarithms",
                        "C14": "Stationary points",
                        "C15": "Triangles",
                        "C16": "Circles",
                        "C17": "Trig equations",
                        "C18": "Vector equations",
                        "C19": "Implicit differentiation",
                        "C20": "The chain rule",
                        "C21": "The product rule",
                        "C22": "The quotient rule",
                        "C23": "Geometric progressions",
                        "C24": "Modulus function",
                        "C25": "Transformations of functions",
                        "C26": "Composition of functions",
                        "C27": "Parametric functions",
                        "C270": "Implicit functions",
                        "C28": "Integration",
                        "C29": "Differential equations",
                        "C30": "Powers"
                      };
__ns.furtherTopicNames = {
                           "F1": "Complex Arithmetic",
                           "F2": "Modulus Argument",
                           "F3a": "2nd order DEs",
                           "F4": "Rank 2 matrices",
                           "F5": "Taylor Series",
                           "F6": "Polar Coordinates",
                           "F7": "Rank 3 matrices",
                           "F8": "Further vectors",
                           "F9": "Newton-Raphson",
                           "F10": "Further inequalities",
                           "F11": "Integration by substitution",
                           "F12": "Figures of revolution",
                           "F13": "Matrix transformations"
                         };
__ns.statsTopicNames = {
                         'S1': "Discrete Distributions",
                         'S2': "Continuous Distributions",
                         'S3': "Hypothesis Testing",
                         'S4': "Confidence Intervals",
                         'S5': "Chi Squared",
                         'S6': "Product Moments"
                       };
__ns.initCoreTopicMap = function(map) {
                          map.data = __ns.coreTopicNames;
                        };
__ns.initFurtherTopicMap = function(map) {
                             map.data = __ns.furtherTopicNames;
                           };
__ns.initStatsTopicMap = function(map) {
                           map.data = __ns.statsTopicNames;
                         };
__ns.makers = {
                "C1": makePartial,
                "C2": makeBinomial2,
                "C3": makePolyInt,
                "C4": makeTrigInt,
                "C5": makeVector,
                "C6": makeLines,
                "C7": makeIneq,
                "C8": makeAP,
                "C9": makeFactor,
                "C10": makeQuadratic,
                "C11": makeComplete,
                "C12": makeBinExp,
                "C13": makeLog,
                "C14": makeStationary,
                "C15": makeTriangle,
                "C16": makeCircle,
                "C17": makeSolvingTrig,
                "C18": makeVectorEq,
                "C19": makeImplicit,
                "C20": makeChainRule,
                "C21": makeProductRule,
                "C22": makeQuotientRule,
                "C23": makeGP,
                "C24": makeModulus,
                "C25": makeTransformation,
                "C26": makeComposition,
                "C27": makeParametric,
                "C270": makeImplicitFunction,
                "C28": makeIntegration,
                "C29": makeDE,
                "C30": makePowers,
                "F1": makeCArithmetic,
                "F2": makeCPolar,
                "F3a": makeDETwoHard,
                "F4": makeMatrix2,
                "F5": makeTaylor,
                "F6": makePolarSketch,
                "F7": makeMatrix3,
                "F8": makeFurtherVector,
                "F9": makeNewtonRaphson,
                "F10": makeFurtherIneq,
                "F11": makeSubstInt,
                "F12": makeRevolution,
                "F13": makeMatXforms,
                'S1': makeDiscreteDistn,
                'S2': makeContinDistn,
                'S3': makeHypTest,
                'S4': makeConfidInt,
                'S5': makeChiSquare,
                'S6': makeProductMoment
              };
__ns.makeProblem = function(tid) {
                     return __ns.makers[tid]();
                   };
}(nrichRPG.coreWorkout));