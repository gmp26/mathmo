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
    var tmp879 = result__;
    var result__ = tmp879;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp880 = result__;
      var result__ = tmp880;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp881 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicCode, callback) {
  var __this = this;
  var result__ = nrichRPG.coreWorkout.topicMapForId(topicCode).keys();
  var keys = result__;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll95) {
    coll95 = coll95.reverse();
    function processOne23() {
      var i;
      i = coll95.pop();
      var result__ = mobl.Math.floor(keys.length * mobl.Math.random());
      var r = result__;
      var result__ = keys.get(r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQA(tid, function(result__) {
        var tmp882 = result__;
        
        if(coll95.length > 0) processOne23(); else rest23();
        
      });
    }
    function rest23() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll95.length > 0) processOne23(); else rest23();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root1419 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1174 = $("<span>");
  root1419.append(nodes1174);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1420 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp890 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp833 = mobl.ref(result__);
    
    var nodes1175 = $("<span>");
    root1420.append(nodes1175);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp833, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1421 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1176 = $("<span>");
      root1421.append(nodes1176);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1422 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1422); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1176;
        nodes1176 = node.contents();
        oldNodes.replaceWith(nodes1176);
      }));
      callback(root1421); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1175;
      nodes1175 = node.contents();
      oldNodes.replaceWith(nodes1175);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp889 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp834 = mobl.ref(result__);
    
    var nodes1177 = $("<span>");
    root1420.append(nodes1177);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp834, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1423 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1178 = $("<span>");
      root1423.append(nodes1178);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1424 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1424); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1178;
        nodes1178 = node.contents();
        oldNodes.replaceWith(nodes1178);
      }));
      callback(root1423); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1177;
      nodes1177 = node.contents();
      oldNodes.replaceWith(nodes1177);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp888 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp835 = mobl.ref(result__);
    
    var nodes1179 = $("<span>");
    root1420.append(nodes1179);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp835, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1425 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1180 = $("<span>");
      root1425.append(nodes1180);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1426 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1426); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1180;
        nodes1180 = node.contents();
        oldNodes.replaceWith(nodes1180);
      }));
      callback(root1425); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1179;
      nodes1179 = node.contents();
      oldNodes.replaceWith(nodes1179);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp887 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp836 = mobl.ref(result__);
    
    var nodes1181 = $("<span>");
    root1420.append(nodes1181);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp836, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1427 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1182 = $("<span>");
      root1427.append(nodes1182);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1428 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1428); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1182;
        nodes1182 = node.contents();
        oldNodes.replaceWith(nodes1182);
      }));
      callback(root1427); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1181;
      nodes1181 = node.contents();
      oldNodes.replaceWith(nodes1181);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp886 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp837 = mobl.ref(result__);
    
    var nodes1183 = $("<span>");
    root1420.append(nodes1183);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp837, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1429 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1184 = $("<span>");
      root1429.append(nodes1184);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1430 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1430); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1184;
        nodes1184 = node.contents();
        oldNodes.replaceWith(nodes1184);
      }));
      callback(root1429); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1183;
      nodes1183 = node.contents();
      oldNodes.replaceWith(nodes1183);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp885 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp838 = mobl.ref(result__);
    
    var nodes1185 = $("<span>");
    root1420.append(nodes1185);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp838, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1431 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1186 = $("<span>");
      root1431.append(nodes1186);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1432 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1432); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1186;
        nodes1186 = node.contents();
        oldNodes.replaceWith(nodes1186);
      }));
      callback(root1431); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1185;
      nodes1185 = node.contents();
      oldNodes.replaceWith(nodes1185);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp884 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp839 = mobl.ref(result__);
    
    var nodes1187 = $("<span>");
    root1420.append(nodes1187);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp839, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1433 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1188 = $("<span>");
      root1433.append(nodes1188);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1434 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1434); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1188;
        nodes1188 = node.contents();
        oldNodes.replaceWith(nodes1188);
      }));
      callback(root1433); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1187;
      nodes1187 = node.contents();
      oldNodes.replaceWith(nodes1187);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp883 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp840 = mobl.ref(result__);
    
    var nodes1189 = $("<span>");
    root1420.append(nodes1189);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp840, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1435 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1190 = $("<span>");
      root1435.append(nodes1190);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1436 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1436); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1190;
        nodes1190 = node.contents();
        oldNodes.replaceWith(nodes1190);
      }));
      callback(root1435); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1189;
      nodes1189 = node.contents();
      oldNodes.replaceWith(nodes1189);
    }));
    callback(root1420); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1174;
    nodes1174 = node.contents();
    oldNodes.replaceWith(nodes1174);
  }));
  callback(root1419); return subs__;
  
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
    var tmp891 = result__;
    var result__ = mobl.alert(nrichRPG.coreWorkout.topicName(tid) + " added");
    if(callback && callback.apply) callback(); return;
  });
};


nrichRPG.coreWorkout.topicLabel = function(tid, elements, callback) {
  var root1437 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var map = mobl.ref(nrichRPG.coreWorkout.topicMapForId(tid.get()));
  var result__ = "+" + map.get().get(tid.get());
  var tmp841 = mobl.ref(result__);
  subs__.addSub(map.addEventListener('change', function() {
    tmp841.set("+" + map.get().get(tid.get()));
  }));
  subs__.addSub(tid.addEventListener('change', function() {
    tmp841.set("+" + map.get().get(tid.get()));
  }));
  
  var nodes1191 = $("<span>");
  root1437.append(nodes1191);
  subs__.addSub((mobl.label)(tmp841, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1438 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1438); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1191;
    nodes1191 = node.contents();
    oldNodes.replaceWith(nodes1191);
  }));
  callback(root1437); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.topicItem = function(tid, elements, callback) {
  var root1439 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   nrichRPG.coreWorkout.topicAdded(tid.get(), function(result__) {
                     var tmp892 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp842 = mobl.ref(result__);
  
  var nodes1192 = $("<span>");
  root1439.append(nodes1192);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp842, mobl.ref(null), mobl.ref(false), function(_, callback) {
    var root1440 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1193 = $("<span>");
    root1440.append(nodes1193);
    subs__.addSub((nrichRPG.coreWorkout.topicLabel)(tid, function(_, callback) {
      var root1441 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1441); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1193;
      nodes1193 = node.contents();
      oldNodes.replaceWith(nodes1193);
    }));
    callback(root1440); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1192;
    nodes1192 = node.contents();
    oldNodes.replaceWith(nodes1192);
  }));
  callback(root1439); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root1442 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes1194 = $("<span>");
  root1442.append(nodes1194);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1443 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp844 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp843 = mobl.ref(result__);
    
    var nodes1195 = $("<span>");
    root1443.append(nodes1195);
    subs__.addSub((ui.backButton)(tmp843, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp844, function(_, callback) {
      var root1444 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1444); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1195;
      nodes1195 = node.contents();
      oldNodes.replaceWith(nodes1195);
    }));
    callback(root1443); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1194;
    nodes1194 = node.contents();
    oldNodes.replaceWith(nodes1194);
  }));
  var nodes1196 = $("<span>");
  root1442.append(nodes1196);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1445 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1197 = $("<span>");
    root1445.append(nodes1197);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C11"), function(_, callback) {
      var root1446 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1446); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1197;
      nodes1197 = node.contents();
      oldNodes.replaceWith(nodes1197);
    }));
    var nodes1198 = $("<span>");
    root1445.append(nodes1198);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C7"), function(_, callback) {
      var root1447 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1447); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1198;
      nodes1198 = node.contents();
      oldNodes.replaceWith(nodes1198);
    }));
    var nodes1199 = $("<span>");
    root1445.append(nodes1199);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C9"), function(_, callback) {
      var root1448 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1448); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1199;
      nodes1199 = node.contents();
      oldNodes.replaceWith(nodes1199);
    }));
    var nodes1200 = $("<span>");
    root1445.append(nodes1200);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C1"), function(_, callback) {
      var root1449 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1449); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1200;
      nodes1200 = node.contents();
      oldNodes.replaceWith(nodes1200);
    }));
    var nodes1201 = $("<span>");
    root1445.append(nodes1201);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C30"), function(_, callback) {
      var root1450 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1450); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1201;
      nodes1201 = node.contents();
      oldNodes.replaceWith(nodes1201);
    }));
    var nodes1202 = $("<span>");
    root1445.append(nodes1202);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C13"), function(_, callback) {
      var root1451 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1451); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1202;
      nodes1202 = node.contents();
      oldNodes.replaceWith(nodes1202);
    }));
    var nodes1203 = $("<span>");
    root1445.append(nodes1203);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C17"), function(_, callback) {
      var root1452 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1452); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1203;
      nodes1203 = node.contents();
      oldNodes.replaceWith(nodes1203);
    }));
    callback(root1445); return subs__;
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1196;
    nodes1196 = node.contents();
    oldNodes.replaceWith(nodes1196);
  }));
  callback(root1442); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root1453 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1204 = $("<span>");
  root1453.append(nodes1204);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1454 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp846 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp845 = mobl.ref(result__);
    
    var nodes1205 = $("<span>");
    root1454.append(nodes1205);
    subs__.addSub((ui.backButton)(tmp845, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp846, function(_, callback) {
      var root1455 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1455); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1205;
      nodes1205 = node.contents();
      oldNodes.replaceWith(nodes1205);
    }));
    callback(root1454); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1204;
    nodes1204 = node.contents();
    oldNodes.replaceWith(nodes1204);
  }));
  var nodes1206 = $("<span>");
  root1453.append(nodes1206);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1456 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1207 = $("<span>");
    root1456.append(nodes1207);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C24"), function(_, callback) {
      var root1457 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1457); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1207;
      nodes1207 = node.contents();
      oldNodes.replaceWith(nodes1207);
    }));
    var nodes1208 = $("<span>");
    root1456.append(nodes1208);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C25"), function(_, callback) {
      var root1458 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1458); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1208;
      nodes1208 = node.contents();
      oldNodes.replaceWith(nodes1208);
    }));
    var nodes1209 = $("<span>");
    root1456.append(nodes1209);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C26"), function(_, callback) {
      var root1459 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1459); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1209;
      nodes1209 = node.contents();
      oldNodes.replaceWith(nodes1209);
    }));
    var nodes1210 = $("<span>");
    root1456.append(nodes1210);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C270"), function(_, callback) {
      var root1460 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1460); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1210;
      nodes1210 = node.contents();
      oldNodes.replaceWith(nodes1210);
    }));
    var nodes1211 = $("<span>");
    root1456.append(nodes1211);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C27"), function(_, callback) {
      var root1461 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1461); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1211;
      nodes1211 = node.contents();
      oldNodes.replaceWith(nodes1211);
    }));
    callback(root1456); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1206;
    nodes1206 = node.contents();
    oldNodes.replaceWith(nodes1206);
  }));
  callback(root1453); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root1462 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1212 = $("<span>");
  root1462.append(nodes1212);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1463 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp848 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp847 = mobl.ref(result__);
    
    var nodes1213 = $("<span>");
    root1463.append(nodes1213);
    subs__.addSub((ui.backButton)(tmp847, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp848, function(_, callback) {
      var root1464 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1464); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1213;
      nodes1213 = node.contents();
      oldNodes.replaceWith(nodes1213);
    }));
    callback(root1463); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1212;
    nodes1212 = node.contents();
    oldNodes.replaceWith(nodes1212);
  }));
  var nodes1214 = $("<span>");
  root1462.append(nodes1214);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1465 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1215 = $("<span>");
    root1465.append(nodes1215);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C15"), function(_, callback) {
      var root1466 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1466); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1215;
      nodes1215 = node.contents();
      oldNodes.replaceWith(nodes1215);
    }));
    var nodes1216 = $("<span>");
    root1465.append(nodes1216);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C16"), function(_, callback) {
      var root1467 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1467); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1216;
      nodes1216 = node.contents();
      oldNodes.replaceWith(nodes1216);
    }));
    var nodes1217 = $("<span>");
    root1465.append(nodes1217);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C6"), function(_, callback) {
      var root1468 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1468); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1217;
      nodes1217 = node.contents();
      oldNodes.replaceWith(nodes1217);
    }));
    callback(root1465); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1214;
    nodes1214 = node.contents();
    oldNodes.replaceWith(nodes1214);
  }));
  callback(root1462); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root1469 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1218 = $("<span>");
  root1469.append(nodes1218);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1470 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp850 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp849 = mobl.ref(result__);
    
    var nodes1219 = $("<span>");
    root1470.append(nodes1219);
    subs__.addSub((ui.backButton)(tmp849, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp850, function(_, callback) {
      var root1471 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1471); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1219;
      nodes1219 = node.contents();
      oldNodes.replaceWith(nodes1219);
    }));
    callback(root1470); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1218;
    nodes1218 = node.contents();
    oldNodes.replaceWith(nodes1218);
  }));
  var nodes1220 = $("<span>");
  root1469.append(nodes1220);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1472 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1221 = $("<span>");
    root1472.append(nodes1221);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C8"), function(_, callback) {
      var root1473 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1473); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1221;
      nodes1221 = node.contents();
      oldNodes.replaceWith(nodes1221);
    }));
    var nodes1222 = $("<span>");
    root1472.append(nodes1222);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C12"), function(_, callback) {
      var root1474 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1474); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1222;
      nodes1222 = node.contents();
      oldNodes.replaceWith(nodes1222);
    }));
    var nodes1223 = $("<span>");
    root1472.append(nodes1223);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C23"), function(_, callback) {
      var root1475 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1475); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1223;
      nodes1223 = node.contents();
      oldNodes.replaceWith(nodes1223);
    }));
    var nodes1224 = $("<span>");
    root1472.append(nodes1224);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C2"), function(_, callback) {
      var root1476 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1476); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1224;
      nodes1224 = node.contents();
      oldNodes.replaceWith(nodes1224);
    }));
    callback(root1472); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1220;
    nodes1220 = node.contents();
    oldNodes.replaceWith(nodes1220);
  }));
  callback(root1469); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root1477 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1225 = $("<span>");
  root1477.append(nodes1225);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1478 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp852 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp851 = mobl.ref(result__);
    
    var nodes1226 = $("<span>");
    root1478.append(nodes1226);
    subs__.addSub((ui.backButton)(tmp851, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp852, function(_, callback) {
      var root1479 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1479); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1226;
      nodes1226 = node.contents();
      oldNodes.replaceWith(nodes1226);
    }));
    callback(root1478); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1225;
    nodes1225 = node.contents();
    oldNodes.replaceWith(nodes1225);
  }));
  var nodes1227 = $("<span>");
  root1477.append(nodes1227);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1480 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1228 = $("<span>");
    root1480.append(nodes1228);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C5"), function(_, callback) {
      var root1481 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1481); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1228;
      nodes1228 = node.contents();
      oldNodes.replaceWith(nodes1228);
    }));
    var nodes1229 = $("<span>");
    root1480.append(nodes1229);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C18"), function(_, callback) {
      var root1482 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1482); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1229;
      nodes1229 = node.contents();
      oldNodes.replaceWith(nodes1229);
    }));
    callback(root1480); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1227;
    nodes1227 = node.contents();
    oldNodes.replaceWith(nodes1227);
  }));
  callback(root1477); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root1483 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1230 = $("<span>");
  root1483.append(nodes1230);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1484 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp854 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp853 = mobl.ref(result__);
    
    var nodes1231 = $("<span>");
    root1484.append(nodes1231);
    subs__.addSub((ui.backButton)(tmp853, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp854, function(_, callback) {
      var root1485 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1485); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1231;
      nodes1231 = node.contents();
      oldNodes.replaceWith(nodes1231);
    }));
    callback(root1484); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1230;
    nodes1230 = node.contents();
    oldNodes.replaceWith(nodes1230);
  }));
  var nodes1232 = $("<span>");
  root1483.append(nodes1232);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1486 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1233 = $("<span>");
    root1486.append(nodes1233);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C14"), function(_, callback) {
      var root1487 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1487); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1233;
      nodes1233 = node.contents();
      oldNodes.replaceWith(nodes1233);
    }));
    var nodes1234 = $("<span>");
    root1486.append(nodes1234);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C20"), function(_, callback) {
      var root1488 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1488); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1234;
      nodes1234 = node.contents();
      oldNodes.replaceWith(nodes1234);
    }));
    var nodes1235 = $("<span>");
    root1486.append(nodes1235);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C21"), function(_, callback) {
      var root1489 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1489); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1235;
      nodes1235 = node.contents();
      oldNodes.replaceWith(nodes1235);
    }));
    var nodes1236 = $("<span>");
    root1486.append(nodes1236);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C22"), function(_, callback) {
      var root1490 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1490); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1236;
      nodes1236 = node.contents();
      oldNodes.replaceWith(nodes1236);
    }));
    var nodes1237 = $("<span>");
    root1486.append(nodes1237);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C19"), function(_, callback) {
      var root1491 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1491); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1237;
      nodes1237 = node.contents();
      oldNodes.replaceWith(nodes1237);
    }));
    callback(root1486); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1232;
    nodes1232 = node.contents();
    oldNodes.replaceWith(nodes1232);
  }));
  callback(root1483); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root1492 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1238 = $("<span>");
  root1492.append(nodes1238);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1493 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp856 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp855 = mobl.ref(result__);
    
    var nodes1239 = $("<span>");
    root1493.append(nodes1239);
    subs__.addSub((ui.backButton)(tmp855, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp856, function(_, callback) {
      var root1494 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1494); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1239;
      nodes1239 = node.contents();
      oldNodes.replaceWith(nodes1239);
    }));
    callback(root1493); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1238;
    nodes1238 = node.contents();
    oldNodes.replaceWith(nodes1238);
  }));
  var nodes1240 = $("<span>");
  root1492.append(nodes1240);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1495 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1241 = $("<span>");
    root1495.append(nodes1241);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C28"), function(_, callback) {
      var root1496 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1496); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1241;
      nodes1241 = node.contents();
      oldNodes.replaceWith(nodes1241);
    }));
    var nodes1242 = $("<span>");
    root1495.append(nodes1242);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C3"), function(_, callback) {
      var root1497 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1497); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1242;
      nodes1242 = node.contents();
      oldNodes.replaceWith(nodes1242);
    }));
    var nodes1243 = $("<span>");
    root1495.append(nodes1243);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C4"), function(_, callback) {
      var root1498 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1498); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1243;
      nodes1243 = node.contents();
      oldNodes.replaceWith(nodes1243);
    }));
    callback(root1495); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1240;
    nodes1240 = node.contents();
    oldNodes.replaceWith(nodes1240);
  }));
  callback(root1492); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root1499 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1244 = $("<span>");
  root1499.append(nodes1244);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1500 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp858 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp857 = mobl.ref(result__);
    
    var nodes1245 = $("<span>");
    root1500.append(nodes1245);
    subs__.addSub((ui.backButton)(tmp857, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp858, function(_, callback) {
      var root1501 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1501); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1245;
      nodes1245 = node.contents();
      oldNodes.replaceWith(nodes1245);
    }));
    callback(root1500); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1244;
    nodes1244 = node.contents();
    oldNodes.replaceWith(nodes1244);
  }));
  var nodes1246 = $("<span>");
  root1499.append(nodes1246);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1502 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1247 = $("<span>");
    root1502.append(nodes1247);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C29"), function(_, callback) {
      var root1503 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1503); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1247;
      nodes1247 = node.contents();
      oldNodes.replaceWith(nodes1247);
    }));
    callback(root1502); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1246;
    nodes1246 = node.contents();
    oldNodes.replaceWith(nodes1246);
  }));
  callback(root1499); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root1504 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1248 = $("<span>");
  root1504.append(nodes1248);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1505 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1249 = $("<span>");
    root1505.append(nodes1249);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F1"), function(_, callback) {
      var root1506 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1506); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1249;
      nodes1249 = node.contents();
      oldNodes.replaceWith(nodes1249);
    }));
    var nodes1250 = $("<span>");
    root1505.append(nodes1250);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F2"), function(_, callback) {
      var root1507 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1507); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1250;
      nodes1250 = node.contents();
      oldNodes.replaceWith(nodes1250);
    }));
    var nodes1251 = $("<span>");
    root1505.append(nodes1251);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F3a"), function(_, callback) {
      var root1508 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1508); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1251;
      nodes1251 = node.contents();
      oldNodes.replaceWith(nodes1251);
    }));
    var nodes1252 = $("<span>");
    root1505.append(nodes1252);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F4"), function(_, callback) {
      var root1509 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1509); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1252;
      nodes1252 = node.contents();
      oldNodes.replaceWith(nodes1252);
    }));
    var nodes1253 = $("<span>");
    root1505.append(nodes1253);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F5"), function(_, callback) {
      var root1510 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1510); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1253;
      nodes1253 = node.contents();
      oldNodes.replaceWith(nodes1253);
    }));
    var nodes1254 = $("<span>");
    root1505.append(nodes1254);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F6"), function(_, callback) {
      var root1511 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1511); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1254;
      nodes1254 = node.contents();
      oldNodes.replaceWith(nodes1254);
    }));
    var nodes1255 = $("<span>");
    root1505.append(nodes1255);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F7"), function(_, callback) {
      var root1512 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1512); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1255;
      nodes1255 = node.contents();
      oldNodes.replaceWith(nodes1255);
    }));
    var nodes1256 = $("<span>");
    root1505.append(nodes1256);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F8"), function(_, callback) {
      var root1513 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1513); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1256;
      nodes1256 = node.contents();
      oldNodes.replaceWith(nodes1256);
    }));
    var nodes1257 = $("<span>");
    root1505.append(nodes1257);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F9"), function(_, callback) {
      var root1514 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1514); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1257;
      nodes1257 = node.contents();
      oldNodes.replaceWith(nodes1257);
    }));
    var nodes1258 = $("<span>");
    root1505.append(nodes1258);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F10"), function(_, callback) {
      var root1515 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1515); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1258;
      nodes1258 = node.contents();
      oldNodes.replaceWith(nodes1258);
    }));
    var nodes1259 = $("<span>");
    root1505.append(nodes1259);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F11"), function(_, callback) {
      var root1516 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1516); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1259;
      nodes1259 = node.contents();
      oldNodes.replaceWith(nodes1259);
    }));
    var nodes1260 = $("<span>");
    root1505.append(nodes1260);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F12"), function(_, callback) {
      var root1517 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1517); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1260;
      nodes1260 = node.contents();
      oldNodes.replaceWith(nodes1260);
    }));
    var nodes1261 = $("<span>");
    root1505.append(nodes1261);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F13"), function(_, callback) {
      var root1518 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1518); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1261;
      nodes1261 = node.contents();
      oldNodes.replaceWith(nodes1261);
    }));
    callback(root1505); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1248;
    nodes1248 = node.contents();
    oldNodes.replaceWith(nodes1248);
  }));
  callback(root1504); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root1519 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1262 = $("<span>");
  root1519.append(nodes1262);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1520 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1263 = $("<span>");
    root1520.append(nodes1263);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S1"), function(_, callback) {
      var root1521 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1521); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1263;
      nodes1263 = node.contents();
      oldNodes.replaceWith(nodes1263);
    }));
    var nodes1264 = $("<span>");
    root1520.append(nodes1264);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S2"), function(_, callback) {
      var root1522 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1522); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1264;
      nodes1264 = node.contents();
      oldNodes.replaceWith(nodes1264);
    }));
    var nodes1265 = $("<span>");
    root1520.append(nodes1265);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S3"), function(_, callback) {
      var root1523 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1523); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1265;
      nodes1265 = node.contents();
      oldNodes.replaceWith(nodes1265);
    }));
    var nodes1266 = $("<span>");
    root1520.append(nodes1266);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S4"), function(_, callback) {
      var root1524 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1524); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1266;
      nodes1266 = node.contents();
      oldNodes.replaceWith(nodes1266);
    }));
    var nodes1267 = $("<span>");
    root1520.append(nodes1267);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S5"), function(_, callback) {
      var root1525 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1525); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1267;
      nodes1267 = node.contents();
      oldNodes.replaceWith(nodes1267);
    }));
    var nodes1268 = $("<span>");
    root1520.append(nodes1268);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S6"), function(_, callback) {
      var root1526 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1526); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1268;
      nodes1268 = node.contents();
      oldNodes.replaceWith(nodes1268);
    }));
    callback(root1520); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1262;
    nodes1262 = node.contents();
    oldNodes.replaceWith(nodes1262);
  }));
  callback(root1519); return subs__;
  
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
  var root1527 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node260 = $("<div>");
  
  var ref223 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref223.get() !== null) {
    node260.attr('class', ref223.get());
    subs__.addSub(ref223.addEventListener('change', function(_, ref, val) {
      node260.attr('class', val);
    }));
    
  }
  subs__.addSub(ref223.rebind());
  
  var val104 = onclick.get();
  if(val104 !== null) {
    subs__.addSub(mobl.domBind(node260, 'tap', val104));
  }
  
  
  var node261 = $("<div>");
  
  var ref222 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref222.get() !== null) {
    node261.attr('class', ref222.get());
    subs__.addSub(ref222.addEventListener('change', function(_, ref, val) {
      node261.attr('class', val);
    }));
    
  }
  subs__.addSub(ref222.rebind());
  
  
  var node262 = $("<div>");
  
  var ref220 = text;
  node262.text(""+ref220.get());
  var ignore42 = false;
  subs__.addSub(ref220.addEventListener('change', function(_, ref, val) {
    if(ignore42) return;
    node262.text(""+val);
  }));
  subs__.addSub(ref220.rebind());
  
  
  var ref221 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref221.get() !== null) {
    node262.attr('class', ref221.get());
    subs__.addSub(ref221.addEventListener('change', function(_, ref, val) {
      node262.attr('class', val);
    }));
    
  }
  subs__.addSub(ref221.rebind());
  
  node261.append(node262);
  node260.append(node261);
  var nodes1269 = $("<span>");
  node260.append(nodes1269);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl90();
  }));
  
  function renderControl90() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1528 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1528); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1269;
      nodes1269 = node.contents();
      oldNodes.replaceWith(nodes1269);
    }));
  }
  renderControl90();
  root1527.append(node260);
  callback(root1527); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp893 = result__;
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
  var root1529 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node263 = $("<span>");
  root1529.append(node263);
  var condSubs70 = new mobl.CompSubscription();
  subs__.addSub(condSubs70);
  var oldValue70;
  var renderCond70 = function() {
    var value118 = qa.get().correct;
    if(oldValue70 === value118) return;
    oldValue70 = value118;
    var subs__ = condSubs70;
    subs__.unsubscribe();
    node263.empty();
    if(value118) {
      var nodes1270 = $("<span>");
      node263.append(nodes1270);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.agreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1530 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp862 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp862.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node264 = $("<span>");
        root1530.append(node264);
        var condSubs71 = new mobl.CompSubscription();
        subs__.addSub(condSubs71);
        var oldValue71;
        var renderCond71 = function() {
          var value119 = tmp862.get();
          if(oldValue71 === value119) return;
          oldValue71 = value119;
          var subs__ = condSubs71;
          subs__.unsubscribe();
          node264.empty();
          if(value119) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp859 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp859.set("A" + qa.get().number + ". ");
            }));
            
            var nodes1271 = $("<span>");
            node264.append(nodes1271);
            subs__.addSub((mobl.label)(tmp859, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1531 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1531); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1271;
              nodes1271 = node.contents();
              oldNodes.replaceWith(nodes1271);
            }));
            var nodes1272 = $("<span>");
            node264.append(nodes1272);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root1532 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1532); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1272;
              nodes1272 = node.contents();
              oldNodes.replaceWith(nodes1272);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp860 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp860.set("A" + qa.get().number + ". ");
            }));
            
            var nodes1273 = $("<span>");
            node264.append(nodes1273);
            subs__.addSub((mobl.label)(tmp860, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1533 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1533); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1273;
              nodes1273 = node.contents();
              oldNodes.replaceWith(nodes1273);
            }));
            var nodes1274 = $("<span>");
            node264.append(nodes1274);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root1534 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1534); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1274;
              nodes1274 = node.contents();
              oldNodes.replaceWith(nodes1274);
            }));
            
            var node265 = $("<span>");
            node265.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp895 = result__;
              var tmp861 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp894 = result__;
                  var result__ = tmp894;
                  tmp861.set(result__);
                  
                });
              }));
              
              var nodes1275 = $("<span>");
              node265.append(nodes1275);
              subs__.addSub((mobl.html)(tmp861, function(_, callback) {
                var root1535 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1535); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1275;
                nodes1275 = node.contents();
                oldNodes.replaceWith(nodes1275);
              }));
              node264.append(node265);
              
              
            });
            
            
            
          }
        };
        renderCond71();
        subs__.addSub(tmp862.addEventListener('change', function() {
          renderCond71();
        }));
        
        callback(root1530); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1270;
        nodes1270 = node.contents();
        oldNodes.replaceWith(nodes1270);
      }));
      
      
    } else {
      var nodes1276 = $("<span>");
      node263.append(nodes1276);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.disagreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1536 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp866 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp866.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node266 = $("<span>");
        root1536.append(node266);
        var condSubs72 = new mobl.CompSubscription();
        subs__.addSub(condSubs72);
        var oldValue72;
        var renderCond72 = function() {
          var value120 = tmp866.get();
          if(oldValue72 === value120) return;
          oldValue72 = value120;
          var subs__ = condSubs72;
          subs__.unsubscribe();
          node266.empty();
          if(value120) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp863 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp863.set("A" + qa.get().number + ". ");
            }));
            
            var nodes1277 = $("<span>");
            node266.append(nodes1277);
            subs__.addSub((mobl.label)(tmp863, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1537 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1537); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1277;
              nodes1277 = node.contents();
              oldNodes.replaceWith(nodes1277);
            }));
            var nodes1278 = $("<span>");
            node266.append(nodes1278);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root1538 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1538); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1278;
              nodes1278 = node.contents();
              oldNodes.replaceWith(nodes1278);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp864 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp864.set("A" + qa.get().number + ". ");
            }));
            
            var nodes1279 = $("<span>");
            node266.append(nodes1279);
            subs__.addSub((mobl.label)(tmp864, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1539 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1539); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1279;
              nodes1279 = node.contents();
              oldNodes.replaceWith(nodes1279);
            }));
            var nodes1280 = $("<span>");
            node266.append(nodes1280);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root1540 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1540); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1280;
              nodes1280 = node.contents();
              oldNodes.replaceWith(nodes1280);
            }));
            
            var node267 = $("<span>");
            node267.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp897 = result__;
              var tmp865 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp896 = result__;
                  var result__ = tmp896;
                  tmp865.set(result__);
                  
                });
              }));
              
              var nodes1281 = $("<span>");
              node267.append(nodes1281);
              subs__.addSub((mobl.html)(tmp865, function(_, callback) {
                var root1541 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1541); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1281;
                nodes1281 = node.contents();
                oldNodes.replaceWith(nodes1281);
              }));
              node266.append(node267);
              
              
            });
            
            
            
          }
        };
        renderCond72();
        subs__.addSub(tmp866.addEventListener('change', function() {
          renderCond72();
        }));
        
        callback(root1536); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1276;
        nodes1276 = node.contents();
        oldNodes.replaceWith(nodes1276);
      }));
      
      
    }
  };
  renderCond70();
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    renderCond70();
  }));
  
  var nodes1282 = $("<span>");
  root1529.append(nodes1282);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1542 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node268 = $("<span>");
    node268.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp899 = result__;
      var tmp867 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp898 = result__;
          var result__ = tmp898;
          tmp867.set(result__);
          
        });
      }));
      
      var nodes1286 = $("<span>");
      node268.append(nodes1286);
      subs__.addSub((mobl.html)(tmp867, function(_, callback) {
        var root1546 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1546); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1286;
        nodes1286 = node.contents();
        oldNodes.replaceWith(nodes1286);
      }));
      root1542.append(node268);
      var nodes1283 = $("<span>");
      root1542.append(nodes1283);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1543 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1543); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1283;
        nodes1283 = node.contents();
        oldNodes.replaceWith(nodes1283);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp868 = mobl.ref(result__);
      
      var nodes1284 = $("<span>");
      root1542.append(nodes1284);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp868, function(_, callback) {
        var root1544 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1544); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1284;
        nodes1284 = node.contents();
        oldNodes.replaceWith(nodes1284);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp869 = mobl.ref(result__);
      
      var nodes1285 = $("<span>");
      root1542.append(nodes1285);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp869, function(_, callback) {
        var root1545 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1545); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1285;
        nodes1285 = node.contents();
        oldNodes.replaceWith(nodes1285);
      }));
      callback(root1542); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1282;
    nodes1282 = node.contents();
    oldNodes.replaceWith(nodes1282);
  }));
  callback(root1529); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp900 = result__;
    var result__ = tmp900;
    var qa2 = result__;
    var result__ = qa2;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


nrichRPG.coreWorkout.showQA = function(qa, elements, callback) {
  var root1547 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp910 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp873 = mobl.ref(result__);
  
  var result__ = nrichRPG.coreWorkout.topicName(qa.get().topic);
  var tmp872 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp872.set(nrichRPG.coreWorkout.topicName(qa.get().topic));
  }));
  
  var nodes1287 = $("<span>");
  root1547.append(nodes1287);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(tmp872, tmp873, function(_, callback) {
    var root1548 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp903 = result__;
                       var result__ = tmp903;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2 == null;
                       if(result__) {
                         var result__ = ui.hideCurrent();
                         if(callback && callback.apply) callback(); return;
                       } else {
                         {
                           var result__ = qa2;
                           qa.set(result__);
                           nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                             var tmp904 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         }
                       }
                     });
                   };
    var tmp870 = mobl.ref(result__);
    
    var nodes1288 = $("<span>");
    root1548.append(nodes1288);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp870, function(_, callback) {
      var root1549 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1549); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1288;
      nodes1288 = node.contents();
      oldNodes.replaceWith(nodes1288);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(qa.get().topic, function(result__) {
                       var tmp901 = result__;
                       var result__ = tmp901;
                       var qa2 = result__;
                       var result__ = qa.get().number;
                       var qnum = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       var result__ = qnum;
                       qa.get().number = result__;
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp902 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp871 = mobl.ref(result__);
    
    var nodes1289 = $("<span>");
    root1548.append(nodes1289);
    subs__.addSub((ui.sideButton)(mobl.ref("New"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp871, function(_, callback) {
      var root1550 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1550); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1289;
      nodes1289 = node.contents();
      oldNodes.replaceWith(nodes1289);
    }));
    callback(root1548); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1287;
    nodes1287 = node.contents();
    oldNodes.replaceWith(nodes1287);
  }));
  var nodes1290 = $("<span>");
  root1547.append(nodes1290);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1551 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp909 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp876 = mobl.ref(result__);
    
    var nodes1291 = $("<span>");
    root1551.append(nodes1291);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp876, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root1552 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + qa.get().number + ". " + qa.get().question;
      var tmp874 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
        tmp874.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp874.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      
      var nodes1292 = $("<span>");
      root1552.append(nodes1292);
      subs__.addSub((mobl.html)(tmp874, function(_, callback) {
        var root1553 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1553); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1292;
        nodes1292 = node.contents();
        oldNodes.replaceWith(nodes1292);
      }));
      
      var node269 = $("<span>");
      node269.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp906 = result__;
        var tmp875 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp905 = result__;
            var result__ = tmp905;
            tmp875.set(result__);
            
          });
        }));
        
        var nodes1293 = $("<span>");
        node269.append(nodes1293);
        subs__.addSub((mobl.html)(tmp875, function(_, callback) {
          var root1554 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1554); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1293;
          nodes1293 = node.contents();
          oldNodes.replaceWith(nodes1293);
        }));
        root1552.append(node269);
        callback(root1552); return subs__;
        
      });
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1291;
      nodes1291 = node.contents();
      oldNodes.replaceWith(nodes1291);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp908 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp878 = mobl.ref(result__);
    
    var nodes1294 = $("<span>");
    root1551.append(nodes1294);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp878, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root1555 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1295 = $("<span>");
      root1555.append(nodes1295);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1556 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp907 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp877 = mobl.ref(result__);
        
        var nodes1296 = $("<span>");
        root1556.append(nodes1296);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp877, function(_, callback) {
          var root1557 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1557); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1296;
          nodes1296 = node.contents();
          oldNodes.replaceWith(nodes1296);
        }));
        callback(root1556); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1295;
        nodes1295 = node.contents();
        oldNodes.replaceWith(nodes1295);
      }));
      
      var node270 = $("<span>");
      root1555.append(node270);
      var condSubs73 = new mobl.CompSubscription();
      subs__.addSub(condSubs73);
      var oldValue73;
      var renderCond73 = function() {
        var value121 = qa.get().done;
        if(oldValue73 === value121) return;
        oldValue73 = value121;
        var subs__ = condSubs73;
        subs__.unsubscribe();
        node270.empty();
        if(value121) {
          var nodes1297 = $("<span>");
          node270.append(nodes1297);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, function(_, callback) {
            var root1558 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1558); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1297;
            nodes1297 = node.contents();
            oldNodes.replaceWith(nodes1297);
          }));
          
          
        } else {
          
        }
      };
      renderCond73();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond73();
      }));
      
      callback(root1555); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1294;
      nodes1294 = node.contents();
      oldNodes.replaceWith(nodes1294);
    }));
    callback(root1551); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1290;
    nodes1290 = node.contents();
    oldNodes.replaceWith(nodes1290);
  }));
  callback(root1547); return subs__;
  
  
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
  qas.list(function(coll96) {
    coll96 = coll96.reverse();
    function processOne24() {
      var item;
      item = coll96.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll96.length > 0) processOne24(); else rest24();
      
    }
    function rest24() {
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
    if(coll96.length > 0) processOne24(); else rest24();
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
                        "C25": "Transforms of functions",
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