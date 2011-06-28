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
  var root4985 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2231 = $("<span>");
  
  var ref2266 = mobl.ref("color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
  if(ref2266.get() !== null) {
    node2231.attr('style', ref2266.get());
    subs__.addSub(ref2266.addEventListener('change', function(_, ref, val) {
      node2231.attr('style', val);
    }));
    subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
      node2231.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
      node2231.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    
  }
  subs__.addSub(ref2266.rebind());
  
  var result__ = "Q" + number.get() + ". " + qa.get().topic;
  var tmp3120 = mobl.ref(result__);
  subs__.addSub(number.addEventListener('change', function() {
    tmp3120.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp3120.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  
  var nodes3498 = $("<span>");
  node2231.append(nodes3498);
  subs__.addSub((mobl.html)(tmp3120, function(_, callback) {
    var root4986 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4986); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3498;
    nodes3498 = node.contents();
    oldNodes.replaceWith(nodes3498);
  }));
  root4985.append(node2231);
  callback(root4985); return subs__;
  
  
  return subs__;
};

mathmo.qTab = function(elements, callback) {
  var root4987 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3499 = $("<span>");
  root4987.append(nodes3499);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root4988 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes3500 = $("<span>");
    root4988.append(nodes3500);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root4989 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4989); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3500;
      nodes3500 = node.contents();
      oldNodes.replaceWith(nodes3500);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp3128 = result__;
                       var result__ = ui.hideCurrent();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3121 = mobl.ref(result__);
    
    var nodes3501 = $("<span>");
    root4988.append(nodes3501);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp3121, function(_, callback) {
      var root4990 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4990); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3501;
      nodes3501 = node.contents();
      oldNodes.replaceWith(nodes3501);
    }));
    callback(root4988); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3499;
    nodes3499 = node.contents();
    oldNodes.replaceWith(nodes3499);
  }));
  var result__ = nrichRPG.questionAnswer.QA.all().order("number", true);
  var tmp3122 = mobl.ref(result__);
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all().order("number", true)).addEventListener('change', function() {
    tmp3122.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
    tmp3122.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
    tmp3122.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  
  var nodes3502 = $("<span>");
  root4987.append(nodes3502);
  subs__.addSub((ui.mMasterDetail)(tmp3122, mobl.ref(mathmo.qaItem), mobl.ref(nrichRPG.coreWorkout.showQA), function(_, callback) {
    var root4991 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4991); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3502;
    nodes3502 = node.contents();
    oldNodes.replaceWith(nodes3502);
  }));
  callback(root4987); return subs__;
  
  
  return subs__;
};

mathmo.coreTab = function(elements, callback) {
  var root4992 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3503 = $("<span>");
  root4992.append(nodes3503);
  subs__.addSub((ui.header)(mobl.ref("Q on topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root4993 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes3504 = $("<span>");
    root4993.append(nodes3504);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root4994 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4994); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3504;
      nodes3504 = node.contents();
      oldNodes.replaceWith(nodes3504);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp3129 = result__;
                       var result__ = ui.hideCurrent();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3123 = mobl.ref(result__);
    
    var nodes3505 = $("<span>");
    root4993.append(nodes3505);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp3123, function(_, callback) {
      var root4995 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4995); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3505;
      nodes3505 = node.contents();
      oldNodes.replaceWith(nodes3505);
    }));
    callback(root4993); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3503;
    nodes3503 = node.contents();
    oldNodes.replaceWith(nodes3503);
  }));
  var nodes3506 = $("<span>");
  root4992.append(nodes3506);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4996 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, 1000, function(result__) {
                       var tmp3132 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3124 = mobl.ref(result__);
    
    var nodes3507 = $("<span>");
    root4996.append(nodes3507);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3124, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4997 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3508 = $("<span>");
      root4997.append(nodes3508);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 core Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4998 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4998); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3508;
        nodes3508 = node.contents();
        oldNodes.replaceWith(nodes3508);
      }));
      callback(root4997); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3507;
      nodes3507 = node.contents();
      oldNodes.replaceWith(nodes3507);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStar(5, function(result__) {
                       var tmp3131 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3125 = mobl.ref(result__);
    
    var nodes3509 = $("<span>");
    root4996.append(nodes3509);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3125, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4999 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3510 = $("<span>");
      root4999.append(nodes3510);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 further Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5000 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5000); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3510;
        nodes3510 = node.contents();
        oldNodes.replaceWith(nodes3510);
      }));
      callback(root4999); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3509;
      nodes3509 = node.contents();
      oldNodes.replaceWith(nodes3509);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStats(5, function(result__) {
                       var tmp3130 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3126 = mobl.ref(result__);
    
    var nodes3511 = $("<span>");
    root4996.append(nodes3511);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3126, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5001 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3512 = $("<span>");
      root5001.append(nodes3512);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 stats Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5002 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5002); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3512;
        nodes3512 = node.contents();
        oldNodes.replaceWith(nodes3512);
      }));
      callback(root5001); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3511;
      nodes3511 = node.contents();
      oldNodes.replaceWith(nodes3511);
    }));
    callback(root4996); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3506;
    nodes3506 = node.contents();
    oldNodes.replaceWith(nodes3506);
  }));
  var nodes3513 = $("<span>");
  root4992.append(nodes3513);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Core topics</section>"), function(_, callback) {
    var root5003 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5003); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3513;
    nodes3513 = node.contents();
    oldNodes.replaceWith(nodes3513);
  }));
  var nodes3514 = $("<span>");
  root4992.append(nodes3514);
  subs__.addSub((nrichRPG.coreWorkout.addQA)(function(_, callback) {
    var root5004 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5004); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3514;
    nodes3514 = node.contents();
    oldNodes.replaceWith(nodes3514);
  }));
  var nodes3515 = $("<span>");
  root4992.append(nodes3515);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Further topics</section>"), function(_, callback) {
    var root5005 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5005); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3515;
    nodes3515 = node.contents();
    oldNodes.replaceWith(nodes3515);
  }));
  var nodes3516 = $("<span>");
  root4992.append(nodes3516);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root5006 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5006); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3516;
    nodes3516 = node.contents();
    oldNodes.replaceWith(nodes3516);
  }));
  var nodes3517 = $("<span>");
  root4992.append(nodes3517);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Stats topics</section>"), function(_, callback) {
    var root5007 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5007); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3517;
    nodes3517 = node.contents();
    oldNodes.replaceWith(nodes3517);
  }));
  var nodes3518 = $("<span>");
  root4992.append(nodes3518);
  subs__.addSub((nrichRPG.coreWorkout.addQAStats)(function(_, callback) {
    var root5008 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5008); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3518;
    nodes3518 = node.contents();
    oldNodes.replaceWith(nodes3518);
  }));
  callback(root4992); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
};

mathmo.furtherTab = function(elements, callback) {
  var root5009 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3519 = $("<span>");
  root5009.append(nodes3519);
  subs__.addSub((ui.header)(mobl.ref("+Q on *topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root5010 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5010); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3519;
    nodes3519 = node.contents();
    oldNodes.replaceWith(nodes3519);
  }));
  var nodes3520 = $("<span>");
  root5009.append(nodes3520);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root5011 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5011); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3520;
    nodes3520 = node.contents();
    oldNodes.replaceWith(nodes3520);
  }));
  callback(root5009); return subs__;
  
  
  return subs__;
};

mathmo.root = function(callback, screenCallback) {
  var root5012 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  mobl.fetchLanguageBundle("english.json", function(result__) {
    var tmp3133 = result__;
    nrichRPG.questionAnswer.QA.all().count(function(result__) {
      var tmp3135 = result__;
      var result__ = tmp3135 == 0;
      var tmp3134 = result__;
      var result__ = tmp3134;
      if(result__) {
        {
          nrichRPG.coreWorkout.randomQ(5, 1000, function(result__) {
            var tmp3136 = result__;
            var result__ = [new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)];
            var tmp3127 = mobl.ref(result__);
            subs__.addSub(mobl.ref(ui.introduction).addEventListener('change', function() {
              tmp3127.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
            }));
            subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
              tmp3127.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
            }));
            subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
              tmp3127.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
            }));
            
            var nodes3521 = $("<span>");
            root5012.append(nodes3521);
            subs__.addSub((ui.tabSet)(tmp3127, mobl.ref(null), function(_, callback) {
              var root5013 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root5013); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes3521;
              nodes3521 = node.contents();
              oldNodes.replaceWith(nodes3521);
            }));
            callback(root5012); return subs__;
            
          });
        }
      } else {
        {
          var result__ = [new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)];
          var tmp3127 = mobl.ref(result__);
          subs__.addSub(mobl.ref(ui.introduction).addEventListener('change', function() {
            tmp3127.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
          }));
          subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
            tmp3127.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
          }));
          subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
            tmp3127.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
          }));
          
          var nodes3521 = $("<span>");
          root5012.append(nodes3521);
          subs__.addSub((ui.tabSet)(tmp3127, mobl.ref(null), function(_, callback) {
            var root5013 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root5013); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes3521;
            nodes3521 = node.contents();
            oldNodes.replaceWith(nodes3521);
          }));
          callback(root5012); return subs__;
          
        }
      }
    });
  });
  return subs__;
};
