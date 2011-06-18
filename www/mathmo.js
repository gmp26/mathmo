mobl.provides('mathmo');
mobl.provides('nrichRPG');
mobl.provides('nrichRPG.questionAnswer');
mobl.provides('nrichRPG.coreWorkout');
mobl.provides('mobl');
mobl.provides('ui');
mobl.provides('mathmo');
persistence.debug = false;mathmo.homeUrl = mobl.ref("http://nrich.maths.org");
mathmo.resourceUrl = mobl.ref("http://nrich.maths.org/7088");

mathmo.qaItem = function(qa, number, elements, callback) {
  var root10070 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node4016 = $("<span>");
  
  var ref3989 = mobl.ref("color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
  if(ref3989.get() !== null) {
    node4016.attr('style', ref3989.get());
    subs__.addSub(ref3989.addEventListener('change', function(_, ref, val) {
      node4016.attr('style', val);
    }));
    subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
      node4016.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
      node4016.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    
  }
  subs__.addSub(ref3989.rebind());
  
  var result__ = "Q" + number.get() + ". " + qa.get().topic;
  var tmp6699 = mobl.ref(result__);
  subs__.addSub(number.addEventListener('change', function() {
    tmp6699.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp6699.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  
  var nodes7487 = $("<span>");
  node4016.append(nodes7487);
  subs__.addSub((mobl.html)(tmp6699, function(_, callback) {
    var root10071 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10071); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7487;
    nodes7487 = node.contents();
    oldNodes.replaceWith(nodes7487);
  }));
  root10070.append(node4016);
  callback(root10070); return subs__;
  
  
  return subs__;
};

mathmo.qTab = function(elements, callback) {
  var root10072 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7488 = $("<span>");
  root10072.append(nodes7488);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root10073 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.resourceUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6700 = mobl.ref(result__);
    
    var nodes7489 = $("<span>");
    root10073.append(nodes7489);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), tmp6700, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root10074 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10074); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7489;
      nodes7489 = node.contents();
      oldNodes.replaceWith(nodes7489);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.homeUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6701 = mobl.ref(result__);
    
    var nodes7490 = $("<span>");
    root10073.append(nodes7490);
    subs__.addSub((ui.image)(mobl.ref("nrichIcon.png"), mobl.ref(35), mobl.ref(35), tmp6701, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root10075 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10075); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7490;
      nodes7490 = node.contents();
      oldNodes.replaceWith(nodes7490);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp6709 = result__;
                       var result__ = ui.hideCurrent();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6702 = mobl.ref(result__);
    
    var nodes7491 = $("<span>");
    root10073.append(nodes7491);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp6702, function(_, callback) {
      var root10076 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10076); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7491;
      nodes7491 = node.contents();
      oldNodes.replaceWith(nodes7491);
    }));
    callback(root10073); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7488;
    nodes7488 = node.contents();
    oldNodes.replaceWith(nodes7488);
  }));
  var result__ = nrichRPG.questionAnswer.QA.all().order("number", true);
  var tmp6703 = mobl.ref(result__);
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all().order("number", true)).addEventListener('change', function() {
    tmp6703.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
    tmp6703.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
    tmp6703.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  
  var nodes7492 = $("<span>");
  root10072.append(nodes7492);
  subs__.addSub((ui.mMasterDetail)(tmp6703, mobl.ref(mathmo.qaItem), mobl.ref(nrichRPG.coreWorkout.showQA), function(_, callback) {
    var root10077 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10077); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7492;
    nodes7492 = node.contents();
    oldNodes.replaceWith(nodes7492);
  }));
  callback(root10072); return subs__;
  
  
  return subs__;
};

mathmo.coreTab = function(elements, callback) {
  var root10078 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7493 = $("<span>");
  root10078.append(nodes7493);
  subs__.addSub((ui.header)(mobl.ref("Q on topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root10079 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp6710 = result__;
                       var result__ = ui.hideCurrent();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6704 = mobl.ref(result__);
    
    var nodes7494 = $("<span>");
    root10079.append(nodes7494);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp6704, function(_, callback) {
      var root10080 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10080); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7494;
      nodes7494 = node.contents();
      oldNodes.replaceWith(nodes7494);
    }));
    callback(root10079); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7493;
    nodes7493 = node.contents();
    oldNodes.replaceWith(nodes7493);
  }));
  var nodes7495 = $("<span>");
  root10078.append(nodes7495);
  subs__.addSub((ui.group)(function(_, callback) {
    var root10081 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, 1000, function(result__) {
                       var tmp6713 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6705 = mobl.ref(result__);
    
    var nodes7496 = $("<span>");
    root10081.append(nodes7496);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6705, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10082 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7497 = $("<span>");
      root10082.append(nodes7497);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 core Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10083 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10083); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7497;
        nodes7497 = node.contents();
        oldNodes.replaceWith(nodes7497);
      }));
      callback(root10082); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7496;
      nodes7496 = node.contents();
      oldNodes.replaceWith(nodes7496);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStar(5, function(result__) {
                       var tmp6712 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6706 = mobl.ref(result__);
    
    var nodes7498 = $("<span>");
    root10081.append(nodes7498);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6706, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10084 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7499 = $("<span>");
      root10084.append(nodes7499);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 further Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10085 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10085); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7499;
        nodes7499 = node.contents();
        oldNodes.replaceWith(nodes7499);
      }));
      callback(root10084); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7498;
      nodes7498 = node.contents();
      oldNodes.replaceWith(nodes7498);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStats(5, function(result__) {
                       var tmp6711 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6707 = mobl.ref(result__);
    
    var nodes7500 = $("<span>");
    root10081.append(nodes7500);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6707, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10086 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7501 = $("<span>");
      root10086.append(nodes7501);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 stats Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10087 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10087); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7501;
        nodes7501 = node.contents();
        oldNodes.replaceWith(nodes7501);
      }));
      callback(root10086); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7500;
      nodes7500 = node.contents();
      oldNodes.replaceWith(nodes7500);
    }));
    callback(root10081); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7495;
    nodes7495 = node.contents();
    oldNodes.replaceWith(nodes7495);
  }));
  var nodes7502 = $("<span>");
  root10078.append(nodes7502);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Core topics</section>"), function(_, callback) {
    var root10088 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10088); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7502;
    nodes7502 = node.contents();
    oldNodes.replaceWith(nodes7502);
  }));
  var nodes7503 = $("<span>");
  root10078.append(nodes7503);
  subs__.addSub((nrichRPG.coreWorkout.addQA)(function(_, callback) {
    var root10089 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10089); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7503;
    nodes7503 = node.contents();
    oldNodes.replaceWith(nodes7503);
  }));
  var nodes7504 = $("<span>");
  root10078.append(nodes7504);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Further topics</section>"), function(_, callback) {
    var root10090 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10090); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7504;
    nodes7504 = node.contents();
    oldNodes.replaceWith(nodes7504);
  }));
  var nodes7505 = $("<span>");
  root10078.append(nodes7505);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root10091 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10091); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7505;
    nodes7505 = node.contents();
    oldNodes.replaceWith(nodes7505);
  }));
  var nodes7506 = $("<span>");
  root10078.append(nodes7506);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Stats topics</section>"), function(_, callback) {
    var root10092 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10092); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7506;
    nodes7506 = node.contents();
    oldNodes.replaceWith(nodes7506);
  }));
  var nodes7507 = $("<span>");
  root10078.append(nodes7507);
  subs__.addSub((nrichRPG.coreWorkout.addQAStats)(function(_, callback) {
    var root10093 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10093); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7507;
    nodes7507 = node.contents();
    oldNodes.replaceWith(nodes7507);
  }));
  callback(root10078); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
};

mathmo.furtherTab = function(elements, callback) {
  var root10094 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7508 = $("<span>");
  root10094.append(nodes7508);
  subs__.addSub((ui.header)(mobl.ref("+Q on *topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root10095 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10095); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7508;
    nodes7508 = node.contents();
    oldNodes.replaceWith(nodes7508);
  }));
  var nodes7509 = $("<span>");
  root10094.append(nodes7509);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root10096 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10096); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7509;
    nodes7509 = node.contents();
    oldNodes.replaceWith(nodes7509);
  }));
  callback(root10094); return subs__;
  
  
  return subs__;
};

mathmo.aboutTab = function(elements, callback) {
  var root10097 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7510 = $("<span>");
  root10097.append(nodes7510);
  subs__.addSub((ui.header)(mobl.ref("About Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root10098 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10098); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7510;
    nodes7510 = node.contents();
    oldNodes.replaceWith(nodes7510);
  }));
  
  var credits = mobl.ref("\n<div style=\"padding:20px\">\n<h2>\n<img src=\"icon.png\" style=\"width:50px;height:50px\"/>\nMathmo v0.3 by the <a href=\"http://nrich.maths.org\">NRICH team</a>, University of Cambridge\n</h2>\n<h3>Help</h3>\nOn the 'My Qs' tab you'll find your current set of Questions (abbr. Qs)<br>\nTouch [Clear] to delete all your current Qs.<br>\n<br>\nOn the 'Add' tab you can add 5 random core, further or stats questions, or choose them singly.\nFurther and Stats sections are at the bottom of the topic list.<br>\n<br>\nWhen a question is displayed, touch [Check Answer] to check working and then\nreply to 'Did you agree?' [Yes] [No]. You may need to do a little more work to see whether your answer is really the same or not.\nThe questions will change colour (red == No/Not answered; green == Yes, black == not checked) so you can track how you are doing.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. It's web address is <a href=\"http://nrich.maths.org/mobl/mathmo/mathmo.html\">http://nrich.maths.org/mobl/mathmo/mathmo.html</a>.\n\n<h3>Credits</h3>\n<p>\nIdea: Stephen Hewson\n</p>\n<p>\n<a href=\"http://nrich.maths.org/public/titlesearch.php?search=interactive%20workout\">Desktop Implementation:</a>\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson\n</p>\n\n<p>\nThe following have been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n</div>\n");
  var nodes7511 = $("<span>");
  root10097.append(nodes7511);
  subs__.addSub((mobl.html)(credits, function(_, callback) {
    var root10099 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10099); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7511;
    nodes7511 = node.contents();
    oldNodes.replaceWith(nodes7511);
  }));
  callback(root10097); return subs__;
  
  
  return subs__;
};

mathmo.root = function(callback, screenCallback) {
  var root10100 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  mobl.fetchLanguageBundle("english.json", function(result__) {
    var tmp6714 = result__;
    var result__ = [new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)];
    var tmp6708 = mobl.ref(result__);
    subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
      tmp6708.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
      tmp6708.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.aboutTab).addEventListener('change', function() {
      tmp6708.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    
    var nodes7512 = $("<span>");
    root10100.append(nodes7512);
    subs__.addSub((ui.tabSet)(tmp6708, mobl.ref(null), function(_, callback) {
      var root10101 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10101); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7512;
      nodes7512 = node.contents();
      oldNodes.replaceWith(nodes7512);
    }));
    callback(root10100); return subs__;
    
  });
  return subs__;
};
