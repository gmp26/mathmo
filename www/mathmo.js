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
  var root9410 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2577 = $("<span>");
  
  var ref2275 = mobl.ref("color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
  if(ref2275.get() !== null) {
    node2577.attr('style', ref2275.get());
    subs__.addSub(ref2275.addEventListener('change', function(_, ref, val) {
      node2577.attr('style', val);
    }));
    subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
      node2577.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
      node2577.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    
  }
  subs__.addSub(ref2275.rebind());
  
  var result__ = "Q" + number.get() + ". " + qa.get().topic;
  var tmp7145 = mobl.ref(result__);
  subs__.addSub(number.addEventListener('change', function() {
    tmp7145.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp7145.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  
  var nodes7477 = $("<span>");
  node2577.append(nodes7477);
  subs__.addSub((mobl.html)(tmp7145, function(_, callback) {
    var root9411 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9411); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7477;
    nodes7477 = node.contents();
    oldNodes.replaceWith(nodes7477);
  }));
  root9410.append(node2577);
  callback(root9410); return subs__;
  
  
  return subs__;
};

mathmo.qTab = function(elements, callback) {
  var root9412 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7478 = $("<span>");
  root9412.append(nodes7478);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9413 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.resourceUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7146 = mobl.ref(result__);
    
    var nodes7479 = $("<span>");
    root9413.append(nodes7479);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), tmp7146, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root9414 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9414); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7479;
      nodes7479 = node.contents();
      oldNodes.replaceWith(nodes7479);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.homeUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7147 = mobl.ref(result__);
    
    var nodes7480 = $("<span>");
    root9413.append(nodes7480);
    subs__.addSub((ui.image)(mobl.ref("nrichIcon.png"), mobl.ref(35), mobl.ref(35), tmp7147, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root9415 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9415); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7480;
      nodes7480 = node.contents();
      oldNodes.replaceWith(nodes7480);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp7155 = result__;
                       var result__ = ui.hideCurrent();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7148 = mobl.ref(result__);
    
    var nodes7481 = $("<span>");
    root9413.append(nodes7481);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp7148, function(_, callback) {
      var root9416 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9416); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7481;
      nodes7481 = node.contents();
      oldNodes.replaceWith(nodes7481);
    }));
    callback(root9413); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7478;
    nodes7478 = node.contents();
    oldNodes.replaceWith(nodes7478);
  }));
  var result__ = nrichRPG.questionAnswer.QA.all().order("number", true);
  var tmp7149 = mobl.ref(result__);
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all().order("number", true)).addEventListener('change', function() {
    tmp7149.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
    tmp7149.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
    tmp7149.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  
  var nodes7482 = $("<span>");
  root9412.append(nodes7482);
  subs__.addSub((ui.mMasterDetail)(tmp7149, mobl.ref(mathmo.qaItem), mobl.ref(nrichRPG.coreWorkout.showQA), function(_, callback) {
    var root9417 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9417); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7482;
    nodes7482 = node.contents();
    oldNodes.replaceWith(nodes7482);
  }));
  callback(root9412); return subs__;
  
  
  return subs__;
};

mathmo.coreTab = function(elements, callback) {
  var root9418 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7483 = $("<span>");
  root9418.append(nodes7483);
  subs__.addSub((ui.header)(mobl.ref("Q on topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9419 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp7156 = result__;
                       var result__ = ui.hideCurrent();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7150 = mobl.ref(result__);
    
    var nodes7484 = $("<span>");
    root9419.append(nodes7484);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp7150, function(_, callback) {
      var root9420 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9420); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7484;
      nodes7484 = node.contents();
      oldNodes.replaceWith(nodes7484);
    }));
    callback(root9419); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7483;
    nodes7483 = node.contents();
    oldNodes.replaceWith(nodes7483);
  }));
  var nodes7485 = $("<span>");
  root9418.append(nodes7485);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9421 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, 1000, function(result__) {
                       var tmp7159 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7151 = mobl.ref(result__);
    
    var nodes7486 = $("<span>");
    root9421.append(nodes7486);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7151, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9422 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7487 = $("<span>");
      root9422.append(nodes7487);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 core Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9423 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9423); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7487;
        nodes7487 = node.contents();
        oldNodes.replaceWith(nodes7487);
      }));
      callback(root9422); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7486;
      nodes7486 = node.contents();
      oldNodes.replaceWith(nodes7486);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStar(5, function(result__) {
                       var tmp7158 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7152 = mobl.ref(result__);
    
    var nodes7488 = $("<span>");
    root9421.append(nodes7488);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7152, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9424 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7489 = $("<span>");
      root9424.append(nodes7489);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 further Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9425 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9425); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7489;
        nodes7489 = node.contents();
        oldNodes.replaceWith(nodes7489);
      }));
      callback(root9424); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7488;
      nodes7488 = node.contents();
      oldNodes.replaceWith(nodes7488);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStats(5, function(result__) {
                       var tmp7157 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7153 = mobl.ref(result__);
    
    var nodes7490 = $("<span>");
    root9421.append(nodes7490);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7153, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9426 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7491 = $("<span>");
      root9426.append(nodes7491);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 stats Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9427 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9427); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7491;
        nodes7491 = node.contents();
        oldNodes.replaceWith(nodes7491);
      }));
      callback(root9426); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7490;
      nodes7490 = node.contents();
      oldNodes.replaceWith(nodes7490);
    }));
    callback(root9421); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7485;
    nodes7485 = node.contents();
    oldNodes.replaceWith(nodes7485);
  }));
  var nodes7492 = $("<span>");
  root9418.append(nodes7492);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Core topics</section>"), function(_, callback) {
    var root9428 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9428); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7492;
    nodes7492 = node.contents();
    oldNodes.replaceWith(nodes7492);
  }));
  var nodes7493 = $("<span>");
  root9418.append(nodes7493);
  subs__.addSub((nrichRPG.coreWorkout.addQA)(function(_, callback) {
    var root9429 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9429); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7493;
    nodes7493 = node.contents();
    oldNodes.replaceWith(nodes7493);
  }));
  var nodes7494 = $("<span>");
  root9418.append(nodes7494);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Further topics</section>"), function(_, callback) {
    var root9430 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9430); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7494;
    nodes7494 = node.contents();
    oldNodes.replaceWith(nodes7494);
  }));
  var nodes7495 = $("<span>");
  root9418.append(nodes7495);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root9431 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9431); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7495;
    nodes7495 = node.contents();
    oldNodes.replaceWith(nodes7495);
  }));
  var nodes7496 = $("<span>");
  root9418.append(nodes7496);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Stats topics</section>"), function(_, callback) {
    var root9432 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9432); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7496;
    nodes7496 = node.contents();
    oldNodes.replaceWith(nodes7496);
  }));
  var nodes7497 = $("<span>");
  root9418.append(nodes7497);
  subs__.addSub((nrichRPG.coreWorkout.addQAStats)(function(_, callback) {
    var root9433 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9433); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7497;
    nodes7497 = node.contents();
    oldNodes.replaceWith(nodes7497);
  }));
  callback(root9418); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
};

mathmo.furtherTab = function(elements, callback) {
  var root9434 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7498 = $("<span>");
  root9434.append(nodes7498);
  subs__.addSub((ui.header)(mobl.ref("+Q on *topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9435 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9435); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7498;
    nodes7498 = node.contents();
    oldNodes.replaceWith(nodes7498);
  }));
  var nodes7499 = $("<span>");
  root9434.append(nodes7499);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root9436 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9436); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7499;
    nodes7499 = node.contents();
    oldNodes.replaceWith(nodes7499);
  }));
  callback(root9434); return subs__;
  
  
  return subs__;
};

mathmo.aboutTab = function(elements, callback) {
  var root9437 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7500 = $("<span>");
  root9437.append(nodes7500);
  subs__.addSub((ui.header)(mobl.ref("About Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9438 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9438); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7500;
    nodes7500 = node.contents();
    oldNodes.replaceWith(nodes7500);
  }));
  
  var credits = mobl.ref("\n<div style=\"padding:20px\">\n<h2>\n<img src=\"icon.png\" style=\"width:50px;height:50px\"/>\nMathmo v0.3.2 by the <a href=\"http://nrich.maths.org\">NRICH team</a>, University of Cambridge\n</h2>\n<h3>Help</h3>\nOn the 'My Qs' tab you'll find your current set of Questions (abbr. Qs)<br>\nTouch [Clear] to delete all your current Qs.<br>\n<br>\nOn the 'Add' tab you can add 5 random core, further or stats questions, or choose them singly.\nFurther and Stats sections are at the bottom of the topic list.<br>\n<br>\nWhen a question is displayed, touch [Check Answer] to check working and then\nreply to 'Did you agree?' [Yes] [No]. You may need to do a little more work to see whether your answer is really the same or not.\nThe questions will change colour (red == No/Not answered; green == Yes, black == not checked) so you can track how you are doing.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. It's web address is <a href=\"http://nrich.maths.org/mobl/mathmo/mathmo.html\">http://nrich.maths.org/mobl/mathmo/mathmo.html</a>.\n\n<h3>Credits</h3>\n<p>\nSyllabus hugging ideas: Stephen Hewson\n</p>\n<p>\nQuestion and Answer generators:\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson with contributions from\n<a href=\"http://github.com/naush/mathmo\">Li Hsuan</a>.</p>\n\n<p>\nThe following have also been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n</div>\n");
  var nodes7501 = $("<span>");
  root9437.append(nodes7501);
  subs__.addSub((mobl.html)(credits, function(_, callback) {
    var root9439 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9439); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7501;
    nodes7501 = node.contents();
    oldNodes.replaceWith(nodes7501);
  }));
  callback(root9437); return subs__;
  
  
  return subs__;
};

mathmo.root = function(callback, screenCallback) {
  var root9440 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  mobl.fetchLanguageBundle("english.json", function(result__) {
    var tmp7160 = result__;
    var result__ = [new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)];
    var tmp7154 = mobl.ref(result__);
    subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
      tmp7154.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
      tmp7154.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.aboutTab).addEventListener('change', function() {
      tmp7154.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    
    var nodes7502 = $("<span>");
    root9440.append(nodes7502);
    subs__.addSub((ui.tabSet)(tmp7154, mobl.ref(null), function(_, callback) {
      var root9441 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9441); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7502;
      nodes7502 = node.contents();
      oldNodes.replaceWith(nodes7502);
    }));
    callback(root9440); return subs__;
    
  });
  return subs__;
};
