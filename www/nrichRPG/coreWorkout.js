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
    var tmp2328 = result__;
    var result__ = tmp2328;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp2329 = result__;
      var result__ = tmp2329;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp2330 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll186) {
    coll186 = coll186.reverse();
    function processOne78() {
      var i;
      i = coll186.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp2331 = result__;
        
        if(coll186.length > 0) processOne78(); else rest78();
        
      });
    }
    function rest78() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll186.length > 0) processOne78(); else rest78();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll187) {
    coll187 = coll187.reverse();
    function processOne79() {
      var i;
      i = coll187.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp2332 = result__;
          
          if(coll187.length > 0) processOne79(); else rest79();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp2332 = result__;
            
            if(coll187.length > 0) processOne79(); else rest79();
            
          });
        }
      }
    }
    function rest79() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll187.length > 0) processOne79(); else rest79();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll188) {
    coll188 = coll188.reverse();
    function processOne80() {
      var i;
      i = coll188.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp2333 = result__;
        
        if(coll188.length > 0) processOne80(); else rest80();
        
      });
    }
    function rest80() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll188.length > 0) processOne80(); else rest80();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root2438 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2201 = $("<span>");
  root2438.append(nodes2201);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2439 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2341 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2236 = mobl.ref(result__);
    
    var nodes2202 = $("<span>");
    root2439.append(nodes2202);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2236, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2440 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2203 = $("<span>");
      root2440.append(nodes2203);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2441 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2441); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2203;
        nodes2203 = node.contents();
        oldNodes.replaceWith(nodes2203);
      }));
      callback(root2440); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2202;
      nodes2202 = node.contents();
      oldNodes.replaceWith(nodes2202);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2340 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2237 = mobl.ref(result__);
    
    var nodes2204 = $("<span>");
    root2439.append(nodes2204);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2237, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2442 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2205 = $("<span>");
      root2442.append(nodes2205);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2443 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2443); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2205;
        nodes2205 = node.contents();
        oldNodes.replaceWith(nodes2205);
      }));
      callback(root2442); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2204;
      nodes2204 = node.contents();
      oldNodes.replaceWith(nodes2204);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2339 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2238 = mobl.ref(result__);
    
    var nodes2206 = $("<span>");
    root2439.append(nodes2206);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2238, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2444 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2207 = $("<span>");
      root2444.append(nodes2207);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2445 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2445); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2207;
        nodes2207 = node.contents();
        oldNodes.replaceWith(nodes2207);
      }));
      callback(root2444); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2206;
      nodes2206 = node.contents();
      oldNodes.replaceWith(nodes2206);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2338 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2239 = mobl.ref(result__);
    
    var nodes2208 = $("<span>");
    root2439.append(nodes2208);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2239, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2446 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2209 = $("<span>");
      root2446.append(nodes2209);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2447 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2447); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2209;
        nodes2209 = node.contents();
        oldNodes.replaceWith(nodes2209);
      }));
      callback(root2446); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2208;
      nodes2208 = node.contents();
      oldNodes.replaceWith(nodes2208);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2337 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2240 = mobl.ref(result__);
    
    var nodes2210 = $("<span>");
    root2439.append(nodes2210);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2240, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2448 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2211 = $("<span>");
      root2448.append(nodes2211);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2449 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2449); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2211;
        nodes2211 = node.contents();
        oldNodes.replaceWith(nodes2211);
      }));
      callback(root2448); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2210;
      nodes2210 = node.contents();
      oldNodes.replaceWith(nodes2210);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2336 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2241 = mobl.ref(result__);
    
    var nodes2212 = $("<span>");
    root2439.append(nodes2212);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2241, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2450 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2213 = $("<span>");
      root2450.append(nodes2213);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2451 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2451); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2213;
        nodes2213 = node.contents();
        oldNodes.replaceWith(nodes2213);
      }));
      callback(root2450); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2212;
      nodes2212 = node.contents();
      oldNodes.replaceWith(nodes2212);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2335 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2242 = mobl.ref(result__);
    
    var nodes2214 = $("<span>");
    root2439.append(nodes2214);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2242, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2452 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2215 = $("<span>");
      root2452.append(nodes2215);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2453 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2453); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2215;
        nodes2215 = node.contents();
        oldNodes.replaceWith(nodes2215);
      }));
      callback(root2452); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2214;
      nodes2214 = node.contents();
      oldNodes.replaceWith(nodes2214);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2334 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2243 = mobl.ref(result__);
    
    var nodes2216 = $("<span>");
    root2439.append(nodes2216);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2243, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2454 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2217 = $("<span>");
      root2454.append(nodes2217);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2455 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2455); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2217;
        nodes2217 = node.contents();
        oldNodes.replaceWith(nodes2217);
      }));
      callback(root2454); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2216;
      nodes2216 = node.contents();
      oldNodes.replaceWith(nodes2216);
    }));
    callback(root2439); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2201;
    nodes2201 = node.contents();
    oldNodes.replaceWith(nodes2201);
  }));
  callback(root2438); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root2456 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes2218 = $("<span>");
  root2456.append(nodes2218);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2457 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2245 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp2244 = mobl.ref(result__);
    
    var nodes2219 = $("<span>");
    root2457.append(nodes2219);
    subs__.addSub((ui.backButton)(tmp2244, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2245, function(_, callback) {
      var root2458 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2458); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2219;
      nodes2219 = node.contents();
      oldNodes.replaceWith(nodes2219);
    }));
    callback(root2457); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2218;
    nodes2218 = node.contents();
    oldNodes.replaceWith(nodes2218);
  }));
  var nodes2220 = $("<span>");
  root2456.append(nodes2220);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2459 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp2349 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2246 = mobl.ref(result__);
    
    var nodes2221 = $("<span>");
    root2459.append(nodes2221);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2246, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2460 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2222 = $("<span>");
      root2460.append(nodes2222);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2461 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2461); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2222;
        nodes2222 = node.contents();
        oldNodes.replaceWith(nodes2222);
      }));
      callback(root2460); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2221;
      nodes2221 = node.contents();
      oldNodes.replaceWith(nodes2221);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp2348 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2247 = mobl.ref(result__);
    
    var nodes2223 = $("<span>");
    root2459.append(nodes2223);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2247, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2462 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2224 = $("<span>");
      root2462.append(nodes2224);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2463 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2463); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2224;
        nodes2224 = node.contents();
        oldNodes.replaceWith(nodes2224);
      }));
      callback(root2462); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2223;
      nodes2223 = node.contents();
      oldNodes.replaceWith(nodes2223);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp2347 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2248 = mobl.ref(result__);
    
    var nodes2225 = $("<span>");
    root2459.append(nodes2225);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2248, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2464 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2226 = $("<span>");
      root2464.append(nodes2226);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2465 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2465); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2226;
        nodes2226 = node.contents();
        oldNodes.replaceWith(nodes2226);
      }));
      callback(root2464); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2225;
      nodes2225 = node.contents();
      oldNodes.replaceWith(nodes2225);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp2346 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2249 = mobl.ref(result__);
    
    var nodes2227 = $("<span>");
    root2459.append(nodes2227);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2249, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2466 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2228 = $("<span>");
      root2466.append(nodes2228);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2467 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2467); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2228;
        nodes2228 = node.contents();
        oldNodes.replaceWith(nodes2228);
      }));
      callback(root2466); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2227;
      nodes2227 = node.contents();
      oldNodes.replaceWith(nodes2227);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp2345 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2250 = mobl.ref(result__);
    
    var nodes2229 = $("<span>");
    root2459.append(nodes2229);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2250, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2468 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2230 = $("<span>");
      root2468.append(nodes2230);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2469 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2469); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2230;
        nodes2230 = node.contents();
        oldNodes.replaceWith(nodes2230);
      }));
      callback(root2468); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2229;
      nodes2229 = node.contents();
      oldNodes.replaceWith(nodes2229);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp2344 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2251 = mobl.ref(result__);
    
    var nodes2231 = $("<span>");
    root2459.append(nodes2231);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2251, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2470 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2232 = $("<span>");
      root2470.append(nodes2232);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2471 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2471); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2232;
        nodes2232 = node.contents();
        oldNodes.replaceWith(nodes2232);
      }));
      callback(root2470); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2231;
      nodes2231 = node.contents();
      oldNodes.replaceWith(nodes2231);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp2343 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2252 = mobl.ref(result__);
    
    var nodes2233 = $("<span>");
    root2459.append(nodes2233);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2252, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2472 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2234 = $("<span>");
      root2472.append(nodes2234);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2473 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2473); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2234;
        nodes2234 = node.contents();
        oldNodes.replaceWith(nodes2234);
      }));
      callback(root2472); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2233;
      nodes2233 = node.contents();
      oldNodes.replaceWith(nodes2233);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp2342 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2253 = mobl.ref(result__);
    
    var nodes2235 = $("<span>");
    root2459.append(nodes2235);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2253, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2474 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2236 = $("<span>");
      root2474.append(nodes2236);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2475 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2475); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2236;
        nodes2236 = node.contents();
        oldNodes.replaceWith(nodes2236);
      }));
      callback(root2474); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2235;
      nodes2235 = node.contents();
      oldNodes.replaceWith(nodes2235);
    }));
    callback(root2459); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2220;
    nodes2220 = node.contents();
    oldNodes.replaceWith(nodes2220);
  }));
  callback(root2456); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root2476 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2237 = $("<span>");
  root2476.append(nodes2237);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2477 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2255 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp2254 = mobl.ref(result__);
    
    var nodes2238 = $("<span>");
    root2477.append(nodes2238);
    subs__.addSub((ui.backButton)(tmp2254, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2255, function(_, callback) {
      var root2478 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2478); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2238;
      nodes2238 = node.contents();
      oldNodes.replaceWith(nodes2238);
    }));
    callback(root2477); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2237;
    nodes2237 = node.contents();
    oldNodes.replaceWith(nodes2237);
  }));
  var nodes2239 = $("<span>");
  root2476.append(nodes2239);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2479 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp2354 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2256 = mobl.ref(result__);
    
    var nodes2240 = $("<span>");
    root2479.append(nodes2240);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2256, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2480 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2241 = $("<span>");
      root2480.append(nodes2241);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2481 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2481); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2241;
        nodes2241 = node.contents();
        oldNodes.replaceWith(nodes2241);
      }));
      callback(root2480); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2240;
      nodes2240 = node.contents();
      oldNodes.replaceWith(nodes2240);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp2353 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2257 = mobl.ref(result__);
    
    var nodes2242 = $("<span>");
    root2479.append(nodes2242);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2257, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2482 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2243 = $("<span>");
      root2482.append(nodes2243);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2483 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2483); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2243;
        nodes2243 = node.contents();
        oldNodes.replaceWith(nodes2243);
      }));
      callback(root2482); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2242;
      nodes2242 = node.contents();
      oldNodes.replaceWith(nodes2242);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp2352 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2258 = mobl.ref(result__);
    
    var nodes2244 = $("<span>");
    root2479.append(nodes2244);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2258, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2484 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2245 = $("<span>");
      root2484.append(nodes2245);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2485 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2485); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2245;
        nodes2245 = node.contents();
        oldNodes.replaceWith(nodes2245);
      }));
      callback(root2484); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2244;
      nodes2244 = node.contents();
      oldNodes.replaceWith(nodes2244);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp2351 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2259 = mobl.ref(result__);
    
    var nodes2246 = $("<span>");
    root2479.append(nodes2246);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2259, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2486 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2247 = $("<span>");
      root2486.append(nodes2247);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2487 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2487); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2247;
        nodes2247 = node.contents();
        oldNodes.replaceWith(nodes2247);
      }));
      callback(root2486); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2246;
      nodes2246 = node.contents();
      oldNodes.replaceWith(nodes2246);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp2350 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2260 = mobl.ref(result__);
    
    var nodes2248 = $("<span>");
    root2479.append(nodes2248);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2260, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2488 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2249 = $("<span>");
      root2488.append(nodes2249);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2489 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2489); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2249;
        nodes2249 = node.contents();
        oldNodes.replaceWith(nodes2249);
      }));
      callback(root2488); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2248;
      nodes2248 = node.contents();
      oldNodes.replaceWith(nodes2248);
    }));
    callback(root2479); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2239;
    nodes2239 = node.contents();
    oldNodes.replaceWith(nodes2239);
  }));
  callback(root2476); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root2490 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2250 = $("<span>");
  root2490.append(nodes2250);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2491 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2262 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp2261 = mobl.ref(result__);
    
    var nodes2251 = $("<span>");
    root2491.append(nodes2251);
    subs__.addSub((ui.backButton)(tmp2261, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2262, function(_, callback) {
      var root2492 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2492); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2251;
      nodes2251 = node.contents();
      oldNodes.replaceWith(nodes2251);
    }));
    callback(root2491); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2250;
    nodes2250 = node.contents();
    oldNodes.replaceWith(nodes2250);
  }));
  var nodes2252 = $("<span>");
  root2490.append(nodes2252);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2493 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp2357 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2263 = mobl.ref(result__);
    
    var nodes2253 = $("<span>");
    root2493.append(nodes2253);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2263, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2494 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2254 = $("<span>");
      root2494.append(nodes2254);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2495 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2495); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2254;
        nodes2254 = node.contents();
        oldNodes.replaceWith(nodes2254);
      }));
      callback(root2494); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2253;
      nodes2253 = node.contents();
      oldNodes.replaceWith(nodes2253);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp2356 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2264 = mobl.ref(result__);
    
    var nodes2255 = $("<span>");
    root2493.append(nodes2255);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2264, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2496 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2256 = $("<span>");
      root2496.append(nodes2256);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2497 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2497); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2256;
        nodes2256 = node.contents();
        oldNodes.replaceWith(nodes2256);
      }));
      callback(root2496); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2255;
      nodes2255 = node.contents();
      oldNodes.replaceWith(nodes2255);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp2355 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2265 = mobl.ref(result__);
    
    var nodes2257 = $("<span>");
    root2493.append(nodes2257);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2265, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2498 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2258 = $("<span>");
      root2498.append(nodes2258);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2499 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2499); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2258;
        nodes2258 = node.contents();
        oldNodes.replaceWith(nodes2258);
      }));
      callback(root2498); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2257;
      nodes2257 = node.contents();
      oldNodes.replaceWith(nodes2257);
    }));
    callback(root2493); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2252;
    nodes2252 = node.contents();
    oldNodes.replaceWith(nodes2252);
  }));
  callback(root2490); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root2500 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2259 = $("<span>");
  root2500.append(nodes2259);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2501 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2267 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp2266 = mobl.ref(result__);
    
    var nodes2260 = $("<span>");
    root2501.append(nodes2260);
    subs__.addSub((ui.backButton)(tmp2266, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2267, function(_, callback) {
      var root2502 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2502); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2260;
      nodes2260 = node.contents();
      oldNodes.replaceWith(nodes2260);
    }));
    callback(root2501); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2259;
    nodes2259 = node.contents();
    oldNodes.replaceWith(nodes2259);
  }));
  var nodes2261 = $("<span>");
  root2500.append(nodes2261);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2503 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp2361 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2268 = mobl.ref(result__);
    
    var nodes2262 = $("<span>");
    root2503.append(nodes2262);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2268, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2504 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2263 = $("<span>");
      root2504.append(nodes2263);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2505 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2505); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2263;
        nodes2263 = node.contents();
        oldNodes.replaceWith(nodes2263);
      }));
      callback(root2504); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2262;
      nodes2262 = node.contents();
      oldNodes.replaceWith(nodes2262);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp2360 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2269 = mobl.ref(result__);
    
    var nodes2264 = $("<span>");
    root2503.append(nodes2264);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2269, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2506 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2265 = $("<span>");
      root2506.append(nodes2265);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2507 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2507); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2265;
        nodes2265 = node.contents();
        oldNodes.replaceWith(nodes2265);
      }));
      callback(root2506); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2264;
      nodes2264 = node.contents();
      oldNodes.replaceWith(nodes2264);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp2359 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2270 = mobl.ref(result__);
    
    var nodes2266 = $("<span>");
    root2503.append(nodes2266);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2270, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2508 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2267 = $("<span>");
      root2508.append(nodes2267);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2509 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2509); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2267;
        nodes2267 = node.contents();
        oldNodes.replaceWith(nodes2267);
      }));
      callback(root2508); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2266;
      nodes2266 = node.contents();
      oldNodes.replaceWith(nodes2266);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp2358 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2271 = mobl.ref(result__);
    
    var nodes2268 = $("<span>");
    root2503.append(nodes2268);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2271, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2510 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2269 = $("<span>");
      root2510.append(nodes2269);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2511 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2511); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2269;
        nodes2269 = node.contents();
        oldNodes.replaceWith(nodes2269);
      }));
      callback(root2510); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2268;
      nodes2268 = node.contents();
      oldNodes.replaceWith(nodes2268);
    }));
    callback(root2503); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2261;
    nodes2261 = node.contents();
    oldNodes.replaceWith(nodes2261);
  }));
  callback(root2500); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root2512 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2270 = $("<span>");
  root2512.append(nodes2270);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2513 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2273 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp2272 = mobl.ref(result__);
    
    var nodes2271 = $("<span>");
    root2513.append(nodes2271);
    subs__.addSub((ui.backButton)(tmp2272, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2273, function(_, callback) {
      var root2514 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2514); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2271;
      nodes2271 = node.contents();
      oldNodes.replaceWith(nodes2271);
    }));
    callback(root2513); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2270;
    nodes2270 = node.contents();
    oldNodes.replaceWith(nodes2270);
  }));
  var nodes2272 = $("<span>");
  root2512.append(nodes2272);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2515 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp2363 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2274 = mobl.ref(result__);
    
    var nodes2273 = $("<span>");
    root2515.append(nodes2273);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2274, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2516 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2274 = $("<span>");
      root2516.append(nodes2274);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2517 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2517); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2274;
        nodes2274 = node.contents();
        oldNodes.replaceWith(nodes2274);
      }));
      callback(root2516); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2273;
      nodes2273 = node.contents();
      oldNodes.replaceWith(nodes2273);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp2362 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2275 = mobl.ref(result__);
    
    var nodes2275 = $("<span>");
    root2515.append(nodes2275);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2275, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2518 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2276 = $("<span>");
      root2518.append(nodes2276);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2519 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2519); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2276;
        nodes2276 = node.contents();
        oldNodes.replaceWith(nodes2276);
      }));
      callback(root2518); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2275;
      nodes2275 = node.contents();
      oldNodes.replaceWith(nodes2275);
    }));
    callback(root2515); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2272;
    nodes2272 = node.contents();
    oldNodes.replaceWith(nodes2272);
  }));
  callback(root2512); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root2520 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2277 = $("<span>");
  root2520.append(nodes2277);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2521 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2277 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp2276 = mobl.ref(result__);
    
    var nodes2278 = $("<span>");
    root2521.append(nodes2278);
    subs__.addSub((ui.backButton)(tmp2276, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2277, function(_, callback) {
      var root2522 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2522); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2278;
      nodes2278 = node.contents();
      oldNodes.replaceWith(nodes2278);
    }));
    callback(root2521); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2277;
    nodes2277 = node.contents();
    oldNodes.replaceWith(nodes2277);
  }));
  var nodes2279 = $("<span>");
  root2520.append(nodes2279);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2523 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp2368 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2278 = mobl.ref(result__);
    
    var nodes2280 = $("<span>");
    root2523.append(nodes2280);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2278, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2524 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2281 = $("<span>");
      root2524.append(nodes2281);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2525 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2525); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2281;
        nodes2281 = node.contents();
        oldNodes.replaceWith(nodes2281);
      }));
      callback(root2524); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2280;
      nodes2280 = node.contents();
      oldNodes.replaceWith(nodes2280);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp2367 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2279 = mobl.ref(result__);
    
    var nodes2282 = $("<span>");
    root2523.append(nodes2282);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2279, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2526 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2283 = $("<span>");
      root2526.append(nodes2283);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2527 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2527); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2283;
        nodes2283 = node.contents();
        oldNodes.replaceWith(nodes2283);
      }));
      callback(root2526); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2282;
      nodes2282 = node.contents();
      oldNodes.replaceWith(nodes2282);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp2366 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2280 = mobl.ref(result__);
    
    var nodes2284 = $("<span>");
    root2523.append(nodes2284);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2280, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2528 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2285 = $("<span>");
      root2528.append(nodes2285);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2529 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2529); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2285;
        nodes2285 = node.contents();
        oldNodes.replaceWith(nodes2285);
      }));
      callback(root2528); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2284;
      nodes2284 = node.contents();
      oldNodes.replaceWith(nodes2284);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp2365 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2281 = mobl.ref(result__);
    
    var nodes2286 = $("<span>");
    root2523.append(nodes2286);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2281, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2530 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2287 = $("<span>");
      root2530.append(nodes2287);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2531 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2531); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2287;
        nodes2287 = node.contents();
        oldNodes.replaceWith(nodes2287);
      }));
      callback(root2530); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2286;
      nodes2286 = node.contents();
      oldNodes.replaceWith(nodes2286);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp2364 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2282 = mobl.ref(result__);
    
    var nodes2288 = $("<span>");
    root2523.append(nodes2288);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2282, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2532 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2289 = $("<span>");
      root2532.append(nodes2289);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2533 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2533); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2289;
        nodes2289 = node.contents();
        oldNodes.replaceWith(nodes2289);
      }));
      callback(root2532); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2288;
      nodes2288 = node.contents();
      oldNodes.replaceWith(nodes2288);
    }));
    callback(root2523); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2279;
    nodes2279 = node.contents();
    oldNodes.replaceWith(nodes2279);
  }));
  callback(root2520); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root2534 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2290 = $("<span>");
  root2534.append(nodes2290);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2535 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2284 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp2283 = mobl.ref(result__);
    
    var nodes2291 = $("<span>");
    root2535.append(nodes2291);
    subs__.addSub((ui.backButton)(tmp2283, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2284, function(_, callback) {
      var root2536 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2536); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2291;
      nodes2291 = node.contents();
      oldNodes.replaceWith(nodes2291);
    }));
    callback(root2535); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2290;
    nodes2290 = node.contents();
    oldNodes.replaceWith(nodes2290);
  }));
  var nodes2292 = $("<span>");
  root2534.append(nodes2292);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2537 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp2371 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2285 = mobl.ref(result__);
    
    var nodes2293 = $("<span>");
    root2537.append(nodes2293);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2285, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2538 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2294 = $("<span>");
      root2538.append(nodes2294);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2539 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2539); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2294;
        nodes2294 = node.contents();
        oldNodes.replaceWith(nodes2294);
      }));
      callback(root2538); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2293;
      nodes2293 = node.contents();
      oldNodes.replaceWith(nodes2293);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp2370 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2286 = mobl.ref(result__);
    
    var nodes2295 = $("<span>");
    root2537.append(nodes2295);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2286, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2540 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2296 = $("<span>");
      root2540.append(nodes2296);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2541 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2541); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2296;
        nodes2296 = node.contents();
        oldNodes.replaceWith(nodes2296);
      }));
      callback(root2540); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2295;
      nodes2295 = node.contents();
      oldNodes.replaceWith(nodes2295);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp2369 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2287 = mobl.ref(result__);
    
    var nodes2297 = $("<span>");
    root2537.append(nodes2297);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2287, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2542 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2298 = $("<span>");
      root2542.append(nodes2298);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2543 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2543); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2298;
        nodes2298 = node.contents();
        oldNodes.replaceWith(nodes2298);
      }));
      callback(root2542); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2297;
      nodes2297 = node.contents();
      oldNodes.replaceWith(nodes2297);
    }));
    callback(root2537); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2292;
    nodes2292 = node.contents();
    oldNodes.replaceWith(nodes2292);
  }));
  callback(root2534); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root2544 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2299 = $("<span>");
  root2544.append(nodes2299);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2545 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2289 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp2288 = mobl.ref(result__);
    
    var nodes2300 = $("<span>");
    root2545.append(nodes2300);
    subs__.addSub((ui.backButton)(tmp2288, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp2289, function(_, callback) {
      var root2546 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2546); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2300;
      nodes2300 = node.contents();
      oldNodes.replaceWith(nodes2300);
    }));
    callback(root2545); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2299;
    nodes2299 = node.contents();
    oldNodes.replaceWith(nodes2299);
  }));
  var nodes2301 = $("<span>");
  root2544.append(nodes2301);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2547 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp2372 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2290 = mobl.ref(result__);
    
    var nodes2302 = $("<span>");
    root2547.append(nodes2302);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2290, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2548 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2303 = $("<span>");
      root2548.append(nodes2303);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2549 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2549); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2303;
        nodes2303 = node.contents();
        oldNodes.replaceWith(nodes2303);
      }));
      callback(root2548); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2302;
      nodes2302 = node.contents();
      oldNodes.replaceWith(nodes2302);
    }));
    callback(root2547); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2301;
    nodes2301 = node.contents();
    oldNodes.replaceWith(nodes2301);
  }));
  callback(root2544); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root2550 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2304 = $("<span>");
  root2550.append(nodes2304);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2551 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp2385 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2291 = mobl.ref(result__);
    
    var nodes2305 = $("<span>");
    root2551.append(nodes2305);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2291, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2552 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2306 = $("<span>");
      root2552.append(nodes2306);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2553 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2553); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2306;
        nodes2306 = node.contents();
        oldNodes.replaceWith(nodes2306);
      }));
      callback(root2552); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2305;
      nodes2305 = node.contents();
      oldNodes.replaceWith(nodes2305);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp2384 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2292 = mobl.ref(result__);
    
    var nodes2307 = $("<span>");
    root2551.append(nodes2307);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2292, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2554 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2308 = $("<span>");
      root2554.append(nodes2308);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2555 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2555); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2308;
        nodes2308 = node.contents();
        oldNodes.replaceWith(nodes2308);
      }));
      callback(root2554); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2307;
      nodes2307 = node.contents();
      oldNodes.replaceWith(nodes2307);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp2383 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2293 = mobl.ref(result__);
    
    var nodes2309 = $("<span>");
    root2551.append(nodes2309);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2293, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2556 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2310 = $("<span>");
      root2556.append(nodes2310);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2557 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2557); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2310;
        nodes2310 = node.contents();
        oldNodes.replaceWith(nodes2310);
      }));
      callback(root2556); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2309;
      nodes2309 = node.contents();
      oldNodes.replaceWith(nodes2309);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp2382 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2294 = mobl.ref(result__);
    
    var nodes2311 = $("<span>");
    root2551.append(nodes2311);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2294, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2558 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2312 = $("<span>");
      root2558.append(nodes2312);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2559 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2559); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2312;
        nodes2312 = node.contents();
        oldNodes.replaceWith(nodes2312);
      }));
      callback(root2558); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2311;
      nodes2311 = node.contents();
      oldNodes.replaceWith(nodes2311);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp2381 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2295 = mobl.ref(result__);
    
    var nodes2313 = $("<span>");
    root2551.append(nodes2313);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2295, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2560 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2314 = $("<span>");
      root2560.append(nodes2314);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2561 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2561); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2314;
        nodes2314 = node.contents();
        oldNodes.replaceWith(nodes2314);
      }));
      callback(root2560); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2313;
      nodes2313 = node.contents();
      oldNodes.replaceWith(nodes2313);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp2380 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2296 = mobl.ref(result__);
    
    var nodes2315 = $("<span>");
    root2551.append(nodes2315);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2296, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2562 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2316 = $("<span>");
      root2562.append(nodes2316);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2563 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2563); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2316;
        nodes2316 = node.contents();
        oldNodes.replaceWith(nodes2316);
      }));
      callback(root2562); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2315;
      nodes2315 = node.contents();
      oldNodes.replaceWith(nodes2315);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp2379 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2297 = mobl.ref(result__);
    
    var nodes2317 = $("<span>");
    root2551.append(nodes2317);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2297, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2564 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2318 = $("<span>");
      root2564.append(nodes2318);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2565 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2565); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2318;
        nodes2318 = node.contents();
        oldNodes.replaceWith(nodes2318);
      }));
      callback(root2564); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2317;
      nodes2317 = node.contents();
      oldNodes.replaceWith(nodes2317);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp2378 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2298 = mobl.ref(result__);
    
    var nodes2319 = $("<span>");
    root2551.append(nodes2319);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2298, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2566 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2320 = $("<span>");
      root2566.append(nodes2320);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2567 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2567); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2320;
        nodes2320 = node.contents();
        oldNodes.replaceWith(nodes2320);
      }));
      callback(root2566); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2319;
      nodes2319 = node.contents();
      oldNodes.replaceWith(nodes2319);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp2377 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2299 = mobl.ref(result__);
    
    var nodes2321 = $("<span>");
    root2551.append(nodes2321);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2299, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2568 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2322 = $("<span>");
      root2568.append(nodes2322);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2569 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2569); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2322;
        nodes2322 = node.contents();
        oldNodes.replaceWith(nodes2322);
      }));
      callback(root2568); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2321;
      nodes2321 = node.contents();
      oldNodes.replaceWith(nodes2321);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp2376 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2300 = mobl.ref(result__);
    
    var nodes2323 = $("<span>");
    root2551.append(nodes2323);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2300, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2570 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2324 = $("<span>");
      root2570.append(nodes2324);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2571 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2571); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2324;
        nodes2324 = node.contents();
        oldNodes.replaceWith(nodes2324);
      }));
      callback(root2570); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2323;
      nodes2323 = node.contents();
      oldNodes.replaceWith(nodes2323);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp2375 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2301 = mobl.ref(result__);
    
    var nodes2325 = $("<span>");
    root2551.append(nodes2325);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2301, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2572 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2326 = $("<span>");
      root2572.append(nodes2326);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2573 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2573); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2326;
        nodes2326 = node.contents();
        oldNodes.replaceWith(nodes2326);
      }));
      callback(root2572); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2325;
      nodes2325 = node.contents();
      oldNodes.replaceWith(nodes2325);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp2374 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2302 = mobl.ref(result__);
    
    var nodes2327 = $("<span>");
    root2551.append(nodes2327);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2302, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2574 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2328 = $("<span>");
      root2574.append(nodes2328);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2575 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2575); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2328;
        nodes2328 = node.contents();
        oldNodes.replaceWith(nodes2328);
      }));
      callback(root2574); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2327;
      nodes2327 = node.contents();
      oldNodes.replaceWith(nodes2327);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp2373 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2303 = mobl.ref(result__);
    
    var nodes2329 = $("<span>");
    root2551.append(nodes2329);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2303, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2576 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2330 = $("<span>");
      root2576.append(nodes2330);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2577 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2577); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2330;
        nodes2330 = node.contents();
        oldNodes.replaceWith(nodes2330);
      }));
      callback(root2576); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2329;
      nodes2329 = node.contents();
      oldNodes.replaceWith(nodes2329);
    }));
    callback(root2551); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2304;
    nodes2304 = node.contents();
    oldNodes.replaceWith(nodes2304);
  }));
  callback(root2550); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root2578 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2331 = $("<span>");
  root2578.append(nodes2331);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2579 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp2391 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2304 = mobl.ref(result__);
    
    var nodes2332 = $("<span>");
    root2579.append(nodes2332);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2304, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2580 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2333 = $("<span>");
      root2580.append(nodes2333);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2581 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2581); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2333;
        nodes2333 = node.contents();
        oldNodes.replaceWith(nodes2333);
      }));
      callback(root2580); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2332;
      nodes2332 = node.contents();
      oldNodes.replaceWith(nodes2332);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp2390 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2305 = mobl.ref(result__);
    
    var nodes2334 = $("<span>");
    root2579.append(nodes2334);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2305, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2582 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2335 = $("<span>");
      root2582.append(nodes2335);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2583 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2583); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2335;
        nodes2335 = node.contents();
        oldNodes.replaceWith(nodes2335);
      }));
      callback(root2582); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2334;
      nodes2334 = node.contents();
      oldNodes.replaceWith(nodes2334);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp2389 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2306 = mobl.ref(result__);
    
    var nodes2336 = $("<span>");
    root2579.append(nodes2336);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2306, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2584 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2337 = $("<span>");
      root2584.append(nodes2337);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2585 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2585); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2337;
        nodes2337 = node.contents();
        oldNodes.replaceWith(nodes2337);
      }));
      callback(root2584); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2336;
      nodes2336 = node.contents();
      oldNodes.replaceWith(nodes2336);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp2388 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2307 = mobl.ref(result__);
    
    var nodes2338 = $("<span>");
    root2579.append(nodes2338);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2307, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2586 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2339 = $("<span>");
      root2586.append(nodes2339);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2587 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2587); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2339;
        nodes2339 = node.contents();
        oldNodes.replaceWith(nodes2339);
      }));
      callback(root2586); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2338;
      nodes2338 = node.contents();
      oldNodes.replaceWith(nodes2338);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp2387 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2308 = mobl.ref(result__);
    
    var nodes2340 = $("<span>");
    root2579.append(nodes2340);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2308, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2588 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2341 = $("<span>");
      root2588.append(nodes2341);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2589 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2589); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2341;
        nodes2341 = node.contents();
        oldNodes.replaceWith(nodes2341);
      }));
      callback(root2588); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2340;
      nodes2340 = node.contents();
      oldNodes.replaceWith(nodes2340);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp2386 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2309 = mobl.ref(result__);
    
    var nodes2342 = $("<span>");
    root2579.append(nodes2342);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2309, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2590 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2343 = $("<span>");
      root2590.append(nodes2343);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2591 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2591); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2343;
        nodes2343 = node.contents();
        oldNodes.replaceWith(nodes2343);
      }));
      callback(root2590); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2342;
      nodes2342 = node.contents();
      oldNodes.replaceWith(nodes2342);
    }));
    callback(root2579); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2331;
    nodes2331 = node.contents();
    oldNodes.replaceWith(nodes2331);
  }));
  callback(root2578); return subs__;
  
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
  var root2592 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node246 = $("<div>");
  
  var ref163 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref163.get() !== null) {
    node246.attr('class', ref163.get());
    subs__.addSub(ref163.addEventListener('change', function(_, ref, val) {
      node246.attr('class', val);
    }));
    
  }
  subs__.addSub(ref163.rebind());
  
  var val70 = onclick.get();
  if(val70 !== null) {
    subs__.addSub(mobl.domBind(node246, 'tap', val70));
  }
  
  
  var node247 = $("<div>");
  
  var ref162 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref162.get() !== null) {
    node247.attr('class', ref162.get());
    subs__.addSub(ref162.addEventListener('change', function(_, ref, val) {
      node247.attr('class', val);
    }));
    
  }
  subs__.addSub(ref162.rebind());
  
  
  var node248 = $("<div>");
  
  var ref160 = text;
  node248.text(""+ref160.get());
  var ignore34 = false;
  subs__.addSub(ref160.addEventListener('change', function(_, ref, val) {
    if(ignore34) return;
    node248.text(""+val);
  }));
  subs__.addSub(ref160.rebind());
  
  
  var ref161 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref161.get() !== null) {
    node248.attr('class', ref161.get());
    subs__.addSub(ref161.addEventListener('change', function(_, ref, val) {
      node248.attr('class', val);
    }));
    
  }
  subs__.addSub(ref161.rebind());
  
  node247.append(node248);
  node246.append(node247);
  var nodes2344 = $("<span>");
  node246.append(nodes2344);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl62();
  }));
  
  function renderControl62() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2593 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2593); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2344;
      nodes2344 = node.contents();
      oldNodes.replaceWith(nodes2344);
    }));
  }
  renderControl62();
  root2592.append(node246);
  callback(root2592); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp2392 = result__;
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
  var root2594 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node249 = $("<span>");
  root2594.append(node249);
  var condSubs76 = new mobl.CompSubscription();
  subs__.addSub(condSubs76);
  var oldValue76;
  var renderCond76 = function() {
    var value148 = qa.get().correct;
    if(oldValue76 === value148) return;
    oldValue76 = value148;
    var subs__ = condSubs76;
    subs__.unsubscribe();
    node249.empty();
    if(value148) {
      var nodes2345 = $("<span>");
      node249.append(nodes2345);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.agreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2595 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp2313 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp2313.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node250 = $("<span>");
        root2595.append(node250);
        var condSubs77 = new mobl.CompSubscription();
        subs__.addSub(condSubs77);
        var oldValue77;
        var renderCond77 = function() {
          var value149 = tmp2313.get();
          if(oldValue77 === value149) return;
          oldValue77 = value149;
          var subs__ = condSubs77;
          subs__.unsubscribe();
          node250.empty();
          if(value149) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp2310 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp2310.set("A" + qa.get().number + ". ");
            }));
            
            var nodes2346 = $("<span>");
            node250.append(nodes2346);
            subs__.addSub((mobl.label)(tmp2310, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root2596 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2596); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes2346;
              nodes2346 = node.contents();
              oldNodes.replaceWith(nodes2346);
            }));
            var nodes2347 = $("<span>");
            node250.append(nodes2347);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root2597 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2597); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes2347;
              nodes2347 = node.contents();
              oldNodes.replaceWith(nodes2347);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp2311 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp2311.set("A" + qa.get().number + ". ");
            }));
            
            var nodes2348 = $("<span>");
            node250.append(nodes2348);
            subs__.addSub((mobl.label)(tmp2311, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root2598 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2598); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes2348;
              nodes2348 = node.contents();
              oldNodes.replaceWith(nodes2348);
            }));
            var nodes2349 = $("<span>");
            node250.append(nodes2349);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root2599 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2599); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes2349;
              nodes2349 = node.contents();
              oldNodes.replaceWith(nodes2349);
            }));
            
            var node251 = $("<span>");
            node251.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp2394 = result__;
              var tmp2312 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp2393 = result__;
                  var result__ = tmp2393;
                  tmp2312.set(result__);
                  
                });
              }));
              
              var nodes2350 = $("<span>");
              node251.append(nodes2350);
              subs__.addSub((mobl.html)(tmp2312, function(_, callback) {
                var root2600 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2600); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2350;
                nodes2350 = node.contents();
                oldNodes.replaceWith(nodes2350);
              }));
              node250.append(node251);
              
              
            });
            
            
            
          }
        };
        renderCond77();
        subs__.addSub(tmp2313.addEventListener('change', function() {
          renderCond77();
        }));
        
        callback(root2595); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2345;
        nodes2345 = node.contents();
        oldNodes.replaceWith(nodes2345);
      }));
      
      
    } else {
      var nodes2351 = $("<span>");
      node249.append(nodes2351);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.disagreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2601 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp2317 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp2317.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node252 = $("<span>");
        root2601.append(node252);
        var condSubs78 = new mobl.CompSubscription();
        subs__.addSub(condSubs78);
        var oldValue78;
        var renderCond78 = function() {
          var value150 = tmp2317.get();
          if(oldValue78 === value150) return;
          oldValue78 = value150;
          var subs__ = condSubs78;
          subs__.unsubscribe();
          node252.empty();
          if(value150) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp2314 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp2314.set("A" + qa.get().number + ". ");
            }));
            
            var nodes2352 = $("<span>");
            node252.append(nodes2352);
            subs__.addSub((mobl.label)(tmp2314, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root2602 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2602); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes2352;
              nodes2352 = node.contents();
              oldNodes.replaceWith(nodes2352);
            }));
            var nodes2353 = $("<span>");
            node252.append(nodes2353);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root2603 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2603); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes2353;
              nodes2353 = node.contents();
              oldNodes.replaceWith(nodes2353);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp2315 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp2315.set("A" + qa.get().number + ". ");
            }));
            
            var nodes2354 = $("<span>");
            node252.append(nodes2354);
            subs__.addSub((mobl.label)(tmp2315, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root2604 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2604); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes2354;
              nodes2354 = node.contents();
              oldNodes.replaceWith(nodes2354);
            }));
            var nodes2355 = $("<span>");
            node252.append(nodes2355);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root2605 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2605); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes2355;
              nodes2355 = node.contents();
              oldNodes.replaceWith(nodes2355);
            }));
            
            var node253 = $("<span>");
            node253.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp2396 = result__;
              var tmp2316 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp2395 = result__;
                  var result__ = tmp2395;
                  tmp2316.set(result__);
                  
                });
              }));
              
              var nodes2356 = $("<span>");
              node253.append(nodes2356);
              subs__.addSub((mobl.html)(tmp2316, function(_, callback) {
                var root2606 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2606); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2356;
                nodes2356 = node.contents();
                oldNodes.replaceWith(nodes2356);
              }));
              node252.append(node253);
              
              
            });
            
            
            
          }
        };
        renderCond78();
        subs__.addSub(tmp2317.addEventListener('change', function() {
          renderCond78();
        }));
        
        callback(root2601); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2351;
        nodes2351 = node.contents();
        oldNodes.replaceWith(nodes2351);
      }));
      
      
    }
  };
  renderCond76();
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    renderCond76();
  }));
  
  var nodes2357 = $("<span>");
  root2594.append(nodes2357);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root2607 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node254 = $("<span>");
    node254.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp2398 = result__;
      var tmp2318 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp2397 = result__;
          var result__ = tmp2397;
          tmp2318.set(result__);
          
        });
      }));
      
      var nodes2361 = $("<span>");
      node254.append(nodes2361);
      subs__.addSub((mobl.html)(tmp2318, function(_, callback) {
        var root2611 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2611); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2361;
        nodes2361 = node.contents();
        oldNodes.replaceWith(nodes2361);
      }));
      root2607.append(node254);
      var nodes2358 = $("<span>");
      root2607.append(nodes2358);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2608 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2608); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2358;
        nodes2358 = node.contents();
        oldNodes.replaceWith(nodes2358);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp2319 = mobl.ref(result__);
      
      var nodes2359 = $("<span>");
      root2607.append(nodes2359);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp2319, function(_, callback) {
        var root2609 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2609); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2359;
        nodes2359 = node.contents();
        oldNodes.replaceWith(nodes2359);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp2320 = mobl.ref(result__);
      
      var nodes2360 = $("<span>");
      root2607.append(nodes2360);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp2320, function(_, callback) {
        var root2610 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2610); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2360;
        nodes2360 = node.contents();
        oldNodes.replaceWith(nodes2360);
      }));
      callback(root2607); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2357;
    nodes2357 = node.contents();
    oldNodes.replaceWith(nodes2357);
  }));
  callback(root2594); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp2399 = result__;
    var result__ = tmp2399;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp2400 = result__;
        var result__ = tmp2400;
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
  var root2612 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp2408 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp2322 = mobl.ref(result__);
  
  var nodes2362 = $("<span>");
  root2612.append(nodes2362);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp2322, function(_, callback) {
    var root2613 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp2401 = result__;
                       var result__ = tmp2401;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp2402 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp2321 = mobl.ref(result__);
    
    var nodes2363 = $("<span>");
    root2613.append(nodes2363);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp2321, function(_, callback) {
      var root2614 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2614); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2363;
      nodes2363 = node.contents();
      oldNodes.replaceWith(nodes2363);
    }));
    callback(root2613); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2362;
    nodes2362 = node.contents();
    oldNodes.replaceWith(nodes2362);
  }));
  var nodes2364 = $("<span>");
  root2612.append(nodes2364);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2615 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp2407 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2325 = mobl.ref(result__);
    
    var nodes2365 = $("<span>");
    root2615.append(nodes2365);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp2325, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root2616 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + qa.get().number + ". " + qa.get().question;
      var tmp2323 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
        tmp2323.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp2323.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      
      var nodes2366 = $("<span>");
      root2616.append(nodes2366);
      subs__.addSub((mobl.html)(tmp2323, function(_, callback) {
        var root2617 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2617); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2366;
        nodes2366 = node.contents();
        oldNodes.replaceWith(nodes2366);
      }));
      
      var node255 = $("<span>");
      node255.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp2404 = result__;
        var tmp2324 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp2403 = result__;
            var result__ = tmp2403;
            tmp2324.set(result__);
            
          });
        }));
        
        var nodes2367 = $("<span>");
        node255.append(nodes2367);
        subs__.addSub((mobl.html)(tmp2324, function(_, callback) {
          var root2618 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2618); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2367;
          nodes2367 = node.contents();
          oldNodes.replaceWith(nodes2367);
        }));
        root2616.append(node255);
        callback(root2616); return subs__;
        
      });
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2365;
      nodes2365 = node.contents();
      oldNodes.replaceWith(nodes2365);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp2406 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2327 = mobl.ref(result__);
    
    var nodes2368 = $("<span>");
    root2615.append(nodes2368);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2327, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root2619 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2369 = $("<span>");
      root2619.append(nodes2369);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2620 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp2405 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp2326 = mobl.ref(result__);
        
        var nodes2370 = $("<span>");
        root2620.append(nodes2370);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp2326, function(_, callback) {
          var root2621 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2621); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2370;
          nodes2370 = node.contents();
          oldNodes.replaceWith(nodes2370);
        }));
        callback(root2620); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2369;
        nodes2369 = node.contents();
        oldNodes.replaceWith(nodes2369);
      }));
      
      var node256 = $("<span>");
      root2619.append(node256);
      var condSubs79 = new mobl.CompSubscription();
      subs__.addSub(condSubs79);
      var oldValue79;
      var renderCond79 = function() {
        var value151 = qa.get().done;
        if(oldValue79 === value151) return;
        oldValue79 = value151;
        var subs__ = condSubs79;
        subs__.unsubscribe();
        node256.empty();
        if(value151) {
          var nodes2371 = $("<span>");
          node256.append(nodes2371);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, function(_, callback) {
            var root2622 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root2622); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes2371;
            nodes2371 = node.contents();
            oldNodes.replaceWith(nodes2371);
          }));
          
          
        } else {
          
        }
      };
      renderCond79();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond79();
      }));
      
      callback(root2619); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2368;
      nodes2368 = node.contents();
      oldNodes.replaceWith(nodes2368);
    }));
    callback(root2615); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2364;
    nodes2364 = node.contents();
    oldNodes.replaceWith(nodes2364);
  }));
  callback(root2612); return subs__;
  
  
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
  qas.list(function(coll189) {
    coll189 = coll189.reverse();
    function processOne81() {
      var item;
      item = coll189.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll189.length > 0) processOne81(); else rest81();
      
    }
    function rest81() {
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
    if(coll189.length > 0) processOne81(); else rest81();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll190) {
    coll190 = coll190.reverse();
    function processOne82() {
      var item;
      item = coll190.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll190.length > 0) processOne82(); else rest82();
      
    }
    function rest82() {
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
    if(coll190.length > 0) processOne82(); else rest82();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll191) {
    coll191 = coll191.reverse();
    function processOne83() {
      var item;
      item = coll191.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll191.length > 0) processOne83(); else rest83();
      
    }
    function rest83() {
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
    if(coll191.length > 0) processOne83(); else rest83();
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