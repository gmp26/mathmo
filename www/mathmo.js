mobl.provides('mathmo');
mobl.provides('nrichRPG');
mobl.provides('mobl');
mobl.provides('nrichRPG.questionAnswer');
mobl.provides('nrichRPG.coreWorkout');
mobl.provides('ui');
mobl.provides('mathmo');
persistence.debug = false;mathmo.homeUrl = mobl.ref("http://nrich.maths.org");
mathmo.resourceUrl = mobl.ref("http://nrich.maths.org/7088");

mathmo.qaItem = function(qa, number, elements, callback) {
  var root16371 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1945 = $("<span>");
  
  var ref1477 = mobl.ref("color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
  if(ref1477.get() !== null) {
    node1945.attr('style', ref1477.get());
    subs__.addSub(ref1477.addEventListener('change', function(_, ref, val) {
      node1945.attr('style', val);
    }));
    subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
      node1945.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
      node1945.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    
  }
  subs__.addSub(ref1477.rebind());
  
  var result__ = "Q" + number.get() + ". " + nrichRPG.coreWorkout.topicName(qa.get().topic);
  var tmp13269 = mobl.ref(result__);
  subs__.addSub(number.addEventListener('change', function() {
    tmp13269.set("Q" + number.get() + ". " + nrichRPG.coreWorkout.topicName(qa.get().topic));
  }));
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp13269.set("Q" + number.get() + ". " + nrichRPG.coreWorkout.topicName(qa.get().topic));
  }));
  
  var nodes14349 = $("<span>");
  node1945.append(nodes14349);
  subs__.addSub((mobl.html)(tmp13269, function(_, callback) {
    var root16372 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root16372); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes14349;
    nodes14349 = node.contents();
    oldNodes.replaceWith(nodes14349);
  }));
  root16371.append(node1945);
  callback(root16371); return subs__;
  
  
  return subs__;
};

mathmo.qTab = function(elements, callback) {
  var root16373 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes14350 = $("<span>");
  root16373.append(nodes14350);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root16374 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes14351 = $("<span>");
    root16374.append(nodes14351);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root16375 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16375); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14351;
      nodes14351 = node.contents();
      oldNodes.replaceWith(nodes14351);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp13277 = result__;
                       var result__ = ui.hideCurrent();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13270 = mobl.ref(result__);
    
    var nodes14352 = $("<span>");
    root16374.append(nodes14352);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp13270, function(_, callback) {
      var root16376 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16376); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14352;
      nodes14352 = node.contents();
      oldNodes.replaceWith(nodes14352);
    }));
    callback(root16374); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14350;
    nodes14350 = node.contents();
    oldNodes.replaceWith(nodes14350);
  }));
  var result__ = nrichRPG.questionAnswer.QA.all().order("number", true);
  var tmp13271 = mobl.ref(result__);
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all().order("number", true)).addEventListener('change', function() {
    tmp13271.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
    tmp13271.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
    tmp13271.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  
  var nodes14353 = $("<span>");
  root16373.append(nodes14353);
  subs__.addSub((ui.mMasterDetail)(tmp13271, mobl.ref(mathmo.qaItem), mobl.ref(nrichRPG.coreWorkout.showQA), function(_, callback) {
    var root16377 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root16377); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes14353;
    nodes14353 = node.contents();
    oldNodes.replaceWith(nodes14353);
  }));
  callback(root16373); return subs__;
  
  
  return subs__;
};

mathmo.coreTab = function(elements, callback) {
  var root16378 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes14354 = $("<span>");
  root16378.append(nodes14354);
  subs__.addSub((ui.header)(mobl.ref("Q on topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root16379 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes14355 = $("<span>");
    root16379.append(nodes14355);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root16380 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16380); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14355;
      nodes14355 = node.contents();
      oldNodes.replaceWith(nodes14355);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp13278 = result__;
                       var result__ = ui.hideCurrent();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13272 = mobl.ref(result__);
    
    var nodes14356 = $("<span>");
    root16379.append(nodes14356);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp13272, function(_, callback) {
      var root16381 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16381); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14356;
      nodes14356 = node.contents();
      oldNodes.replaceWith(nodes14356);
    }));
    callback(root16379); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14354;
    nodes14354 = node.contents();
    oldNodes.replaceWith(nodes14354);
  }));
  var nodes14357 = $("<span>");
  root16378.append(nodes14357);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16382 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, "Core", function(result__) {
                       var tmp13281 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13273 = mobl.ref(result__);
    
    var nodes14358 = $("<span>");
    root16382.append(nodes14358);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13273, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16383 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14359 = $("<span>");
      root16383.append(nodes14359);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 core Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16384 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16384); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14359;
        nodes14359 = node.contents();
        oldNodes.replaceWith(nodes14359);
      }));
      callback(root16383); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14358;
      nodes14358 = node.contents();
      oldNodes.replaceWith(nodes14358);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, "Further", function(result__) {
                       var tmp13280 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13274 = mobl.ref(result__);
    
    var nodes14360 = $("<span>");
    root16382.append(nodes14360);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13274, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16385 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14361 = $("<span>");
      root16385.append(nodes14361);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 further Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16386 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16386); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14361;
        nodes14361 = node.contents();
        oldNodes.replaceWith(nodes14361);
      }));
      callback(root16385); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14360;
      nodes14360 = node.contents();
      oldNodes.replaceWith(nodes14360);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, "Stats", function(result__) {
                       var tmp13279 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13275 = mobl.ref(result__);
    
    var nodes14362 = $("<span>");
    root16382.append(nodes14362);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13275, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16387 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14363 = $("<span>");
      root16387.append(nodes14363);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 stats Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16388 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16388); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14363;
        nodes14363 = node.contents();
        oldNodes.replaceWith(nodes14363);
      }));
      callback(root16387); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14362;
      nodes14362 = node.contents();
      oldNodes.replaceWith(nodes14362);
    }));
    callback(root16382); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14357;
    nodes14357 = node.contents();
    oldNodes.replaceWith(nodes14357);
  }));
  var nodes14364 = $("<span>");
  root16378.append(nodes14364);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Core topics</section>"), function(_, callback) {
    var root16389 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root16389); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes14364;
    nodes14364 = node.contents();
    oldNodes.replaceWith(nodes14364);
  }));
  var nodes14365 = $("<span>");
  root16378.append(nodes14365);
  subs__.addSub((nrichRPG.coreWorkout.addQA)(function(_, callback) {
    var root16390 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root16390); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes14365;
    nodes14365 = node.contents();
    oldNodes.replaceWith(nodes14365);
  }));
  var nodes14366 = $("<span>");
  root16378.append(nodes14366);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Further topics</section>"), function(_, callback) {
    var root16391 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root16391); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes14366;
    nodes14366 = node.contents();
    oldNodes.replaceWith(nodes14366);
  }));
  var nodes14367 = $("<span>");
  root16378.append(nodes14367);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root16392 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root16392); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes14367;
    nodes14367 = node.contents();
    oldNodes.replaceWith(nodes14367);
  }));
  var nodes14368 = $("<span>");
  root16378.append(nodes14368);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Stats topics</section>"), function(_, callback) {
    var root16393 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root16393); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes14368;
    nodes14368 = node.contents();
    oldNodes.replaceWith(nodes14368);
  }));
  var nodes14369 = $("<span>");
  root16378.append(nodes14369);
  subs__.addSub((nrichRPG.coreWorkout.addQAStats)(function(_, callback) {
    var root16394 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root16394); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes14369;
    nodes14369 = node.contents();
    oldNodes.replaceWith(nodes14369);
  }));
  callback(root16378); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
};

mathmo.root = function(callback, screenCallback) {
  var root16395 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  mobl.fetchLanguageBundle("english.json", function(result__) {
    var tmp13282 = result__;
    nrichRPG.questionAnswer.QA.all().count(function(result__) {
      var tmp13284 = result__;
      var result__ = tmp13284 == 0;
      var tmp13283 = result__;
      var result__ = tmp13283;
      if(result__) {
        {
          nrichRPG.coreWorkout.randomQ(5, "Core", function(result__) {
            var tmp13285 = result__;
            var result__ = [new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)];
            var tmp13276 = mobl.ref(result__);
            subs__.addSub(mobl.ref(ui.introduction).addEventListener('change', function() {
              tmp13276.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
            }));
            subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
              tmp13276.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
            }));
            subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
              tmp13276.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
            }));
            
            var nodes14370 = $("<span>");
            root16395.append(nodes14370);
            subs__.addSub((ui.tabSet)(tmp13276, mobl.ref(null), function(_, callback) {
              var root16396 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root16396); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes14370;
              nodes14370 = node.contents();
              oldNodes.replaceWith(nodes14370);
            }));
            callback(root16395); return subs__;
            
          });
        }
      } else {
        {
          var result__ = [new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)];
          var tmp13276 = mobl.ref(result__);
          subs__.addSub(mobl.ref(ui.introduction).addEventListener('change', function() {
            tmp13276.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
          }));
          subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
            tmp13276.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
          }));
          subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
            tmp13276.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
          }));
          
          var nodes14370 = $("<span>");
          root16395.append(nodes14370);
          subs__.addSub((ui.tabSet)(tmp13276, mobl.ref(null), function(_, callback) {
            var root16396 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root16396); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes14370;
            nodes14370 = node.contents();
            oldNodes.replaceWith(nodes14370);
          }));
          callback(root16395); return subs__;
          
        }
      }
    });
  });
  return subs__;
};
