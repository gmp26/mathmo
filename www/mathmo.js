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
  var root1393 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node259 = $("<span>");
  
  var ref219 = mobl.ref("color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
  if(ref219.get() !== null) {
    node259.attr('style', ref219.get());
    subs__.addSub(ref219.addEventListener('change', function(_, ref, val) {
      node259.attr('style', val);
    }));
    subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
      node259.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
      node259.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    
  }
  subs__.addSub(ref219.rebind());
  
  var result__ = "Q" + number.get() + ". " + nrichRPG.coreWorkout.topicName(qa.get().topic);
  var tmp816 = mobl.ref(result__);
  subs__.addSub(number.addEventListener('change', function() {
    tmp816.set("Q" + number.get() + ". " + nrichRPG.coreWorkout.topicName(qa.get().topic));
  }));
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp816.set("Q" + number.get() + ". " + nrichRPG.coreWorkout.topicName(qa.get().topic));
  }));
  
  var nodes1152 = $("<span>");
  node259.append(nodes1152);
  subs__.addSub((mobl.html)(tmp816, function(_, callback) {
    var root1394 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1394); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1152;
    nodes1152 = node.contents();
    oldNodes.replaceWith(nodes1152);
  }));
  root1393.append(node259);
  callback(root1393); return subs__;
  
  
  return subs__;
};

mathmo.qTab = function(elements, callback) {
  var root1395 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1153 = $("<span>");
  root1395.append(nodes1153);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1396 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1154 = $("<span>");
    root1396.append(nodes1154);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root1397 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1397); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1154;
      nodes1154 = node.contents();
      oldNodes.replaceWith(nodes1154);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp824 = result__;
                       var result__ = ui.hideCurrent();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp817 = mobl.ref(result__);
    
    var nodes1155 = $("<span>");
    root1396.append(nodes1155);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp817, function(_, callback) {
      var root1398 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1398); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1155;
      nodes1155 = node.contents();
      oldNodes.replaceWith(nodes1155);
    }));
    callback(root1396); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1153;
    nodes1153 = node.contents();
    oldNodes.replaceWith(nodes1153);
  }));
  var result__ = nrichRPG.questionAnswer.QA.all().order("number", true);
  var tmp818 = mobl.ref(result__);
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all().order("number", true)).addEventListener('change', function() {
    tmp818.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
    tmp818.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
    tmp818.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  
  var nodes1156 = $("<span>");
  root1395.append(nodes1156);
  subs__.addSub((ui.mMasterDetail)(tmp818, mobl.ref(mathmo.qaItem), mobl.ref(nrichRPG.coreWorkout.showQA), function(_, callback) {
    var root1399 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1399); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1156;
    nodes1156 = node.contents();
    oldNodes.replaceWith(nodes1156);
  }));
  callback(root1395); return subs__;
  
  
  return subs__;
};

mathmo.coreTab = function(elements, callback) {
  var root1400 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1157 = $("<span>");
  root1400.append(nodes1157);
  subs__.addSub((ui.header)(mobl.ref("Q on topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1401 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1158 = $("<span>");
    root1401.append(nodes1158);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root1402 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1402); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1158;
      nodes1158 = node.contents();
      oldNodes.replaceWith(nodes1158);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp825 = result__;
                       var result__ = ui.hideCurrent();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp819 = mobl.ref(result__);
    
    var nodes1159 = $("<span>");
    root1401.append(nodes1159);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp819, function(_, callback) {
      var root1403 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1403); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1159;
      nodes1159 = node.contents();
      oldNodes.replaceWith(nodes1159);
    }));
    callback(root1401); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1157;
    nodes1157 = node.contents();
    oldNodes.replaceWith(nodes1157);
  }));
  var nodes1160 = $("<span>");
  root1400.append(nodes1160);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1404 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, "Core", function(result__) {
                       var tmp828 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp820 = mobl.ref(result__);
    
    var nodes1161 = $("<span>");
    root1404.append(nodes1161);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp820, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1405 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1162 = $("<span>");
      root1405.append(nodes1162);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 core Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1406 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1406); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1162;
        nodes1162 = node.contents();
        oldNodes.replaceWith(nodes1162);
      }));
      callback(root1405); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1161;
      nodes1161 = node.contents();
      oldNodes.replaceWith(nodes1161);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, "Further", function(result__) {
                       var tmp827 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp821 = mobl.ref(result__);
    
    var nodes1163 = $("<span>");
    root1404.append(nodes1163);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp821, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1407 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1164 = $("<span>");
      root1407.append(nodes1164);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 further Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1408 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1408); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1164;
        nodes1164 = node.contents();
        oldNodes.replaceWith(nodes1164);
      }));
      callback(root1407); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1163;
      nodes1163 = node.contents();
      oldNodes.replaceWith(nodes1163);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, "Stats", function(result__) {
                       var tmp826 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp822 = mobl.ref(result__);
    
    var nodes1165 = $("<span>");
    root1404.append(nodes1165);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp822, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1409 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1166 = $("<span>");
      root1409.append(nodes1166);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 stats Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1410 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1410); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1166;
        nodes1166 = node.contents();
        oldNodes.replaceWith(nodes1166);
      }));
      callback(root1409); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1165;
      nodes1165 = node.contents();
      oldNodes.replaceWith(nodes1165);
    }));
    callback(root1404); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1160;
    nodes1160 = node.contents();
    oldNodes.replaceWith(nodes1160);
  }));
  var nodes1167 = $("<span>");
  root1400.append(nodes1167);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Core topics</section>"), function(_, callback) {
    var root1411 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1411); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1167;
    nodes1167 = node.contents();
    oldNodes.replaceWith(nodes1167);
  }));
  var nodes1168 = $("<span>");
  root1400.append(nodes1168);
  subs__.addSub((nrichRPG.coreWorkout.addQA)(function(_, callback) {
    var root1412 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1412); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1168;
    nodes1168 = node.contents();
    oldNodes.replaceWith(nodes1168);
  }));
  var nodes1169 = $("<span>");
  root1400.append(nodes1169);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Further topics</section>"), function(_, callback) {
    var root1413 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1413); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1169;
    nodes1169 = node.contents();
    oldNodes.replaceWith(nodes1169);
  }));
  var nodes1170 = $("<span>");
  root1400.append(nodes1170);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root1414 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1414); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1170;
    nodes1170 = node.contents();
    oldNodes.replaceWith(nodes1170);
  }));
  var nodes1171 = $("<span>");
  root1400.append(nodes1171);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Stats topics</section>"), function(_, callback) {
    var root1415 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1415); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1171;
    nodes1171 = node.contents();
    oldNodes.replaceWith(nodes1171);
  }));
  var nodes1172 = $("<span>");
  root1400.append(nodes1172);
  subs__.addSub((nrichRPG.coreWorkout.addQAStats)(function(_, callback) {
    var root1416 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1416); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1172;
    nodes1172 = node.contents();
    oldNodes.replaceWith(nodes1172);
  }));
  callback(root1400); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
};

mathmo.root = function(callback, screenCallback) {
  var root1417 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  mobl.fetchLanguageBundle("english.json", function(result__) {
    var tmp829 = result__;
    nrichRPG.questionAnswer.QA.all().count(function(result__) {
      var tmp831 = result__;
      var result__ = tmp831 == 0;
      var tmp830 = result__;
      var result__ = tmp830;
      if(result__) {
        {
          nrichRPG.coreWorkout.randomQ(5, "Core", function(result__) {
            var tmp832 = result__;
            var result__ = [new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)];
            var tmp823 = mobl.ref(result__);
            subs__.addSub(mobl.ref(ui.introduction).addEventListener('change', function() {
              tmp823.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
            }));
            subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
              tmp823.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
            }));
            subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
              tmp823.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
            }));
            
            var nodes1173 = $("<span>");
            root1417.append(nodes1173);
            subs__.addSub((ui.tabSet)(tmp823, mobl.ref(null), function(_, callback) {
              var root1418 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1418); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1173;
              nodes1173 = node.contents();
              oldNodes.replaceWith(nodes1173);
            }));
            callback(root1417); return subs__;
            
          });
        }
      } else {
        {
          var result__ = [new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)];
          var tmp823 = mobl.ref(result__);
          subs__.addSub(mobl.ref(ui.introduction).addEventListener('change', function() {
            tmp823.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
          }));
          subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
            tmp823.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
          }));
          subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
            tmp823.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
          }));
          
          var nodes1173 = $("<span>");
          root1417.append(nodes1173);
          subs__.addSub((ui.tabSet)(tmp823, mobl.ref(null), function(_, callback) {
            var root1418 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1418); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1173;
            nodes1173 = node.contents();
            oldNodes.replaceWith(nodes1173);
          }));
          callback(root1417); return subs__;
          
        }
      }
    });
  });
  return subs__;
};
