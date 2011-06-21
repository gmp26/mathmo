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
  var root9104 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2716 = $("<span>");
  
  var ref2516 = mobl.ref("color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
  if(ref2516.get() !== null) {
    node2716.attr('style', ref2516.get());
    subs__.addSub(ref2516.addEventListener('change', function(_, ref, val) {
      node2716.attr('style', val);
    }));
    subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
      node2716.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
      node2716.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    
  }
  subs__.addSub(ref2516.rebind());
  
  var result__ = "Q" + number.get() + ". " + qa.get().topic;
  var tmp7025 = mobl.ref(result__);
  subs__.addSub(number.addEventListener('change', function() {
    tmp7025.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp7025.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  
  var nodes7276 = $("<span>");
  node2716.append(nodes7276);
  subs__.addSub((mobl.html)(tmp7025, function(_, callback) {
    var root9105 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9105); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7276;
    nodes7276 = node.contents();
    oldNodes.replaceWith(nodes7276);
  }));
  root9104.append(node2716);
  callback(root9104); return subs__;
  
  
  return subs__;
};

mathmo.qTab = function(elements, callback) {
  var root9106 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7277 = $("<span>");
  root9106.append(nodes7277);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9107 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.resourceUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7026 = mobl.ref(result__);
    
    var nodes7278 = $("<span>");
    root9107.append(nodes7278);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), tmp7026, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root9108 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9108); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7278;
      nodes7278 = node.contents();
      oldNodes.replaceWith(nodes7278);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.homeUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7027 = mobl.ref(result__);
    
    var nodes7279 = $("<span>");
    root9107.append(nodes7279);
    subs__.addSub((ui.image)(mobl.ref("nrichIcon.png"), mobl.ref(35), mobl.ref(35), tmp7027, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root9109 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9109); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7279;
      nodes7279 = node.contents();
      oldNodes.replaceWith(nodes7279);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp7035 = result__;
                       var result__ = ui.hideCurrent();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7028 = mobl.ref(result__);
    
    var nodes7280 = $("<span>");
    root9107.append(nodes7280);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp7028, function(_, callback) {
      var root9110 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9110); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7280;
      nodes7280 = node.contents();
      oldNodes.replaceWith(nodes7280);
    }));
    callback(root9107); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7277;
    nodes7277 = node.contents();
    oldNodes.replaceWith(nodes7277);
  }));
  var result__ = nrichRPG.questionAnswer.QA.all().order("number", true);
  var tmp7029 = mobl.ref(result__);
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all().order("number", true)).addEventListener('change', function() {
    tmp7029.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
    tmp7029.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
    tmp7029.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  
  var nodes7281 = $("<span>");
  root9106.append(nodes7281);
  subs__.addSub((ui.mMasterDetail)(tmp7029, mobl.ref(mathmo.qaItem), mobl.ref(nrichRPG.coreWorkout.showQA), function(_, callback) {
    var root9111 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9111); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7281;
    nodes7281 = node.contents();
    oldNodes.replaceWith(nodes7281);
  }));
  callback(root9106); return subs__;
  
  
  return subs__;
};

mathmo.coreTab = function(elements, callback) {
  var root9112 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7282 = $("<span>");
  root9112.append(nodes7282);
  subs__.addSub((ui.header)(mobl.ref("Q on topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9113 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp7036 = result__;
                       var result__ = ui.hideCurrent();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7030 = mobl.ref(result__);
    
    var nodes7283 = $("<span>");
    root9113.append(nodes7283);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp7030, function(_, callback) {
      var root9114 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9114); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7283;
      nodes7283 = node.contents();
      oldNodes.replaceWith(nodes7283);
    }));
    callback(root9113); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7282;
    nodes7282 = node.contents();
    oldNodes.replaceWith(nodes7282);
  }));
  var nodes7284 = $("<span>");
  root9112.append(nodes7284);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9115 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, 1000, function(result__) {
                       var tmp7039 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7031 = mobl.ref(result__);
    
    var nodes7285 = $("<span>");
    root9115.append(nodes7285);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7031, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9116 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7286 = $("<span>");
      root9116.append(nodes7286);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 core Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9117 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9117); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7286;
        nodes7286 = node.contents();
        oldNodes.replaceWith(nodes7286);
      }));
      callback(root9116); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7285;
      nodes7285 = node.contents();
      oldNodes.replaceWith(nodes7285);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStar(5, function(result__) {
                       var tmp7038 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7032 = mobl.ref(result__);
    
    var nodes7287 = $("<span>");
    root9115.append(nodes7287);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7032, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9118 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7288 = $("<span>");
      root9118.append(nodes7288);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 further Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9119 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9119); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7288;
        nodes7288 = node.contents();
        oldNodes.replaceWith(nodes7288);
      }));
      callback(root9118); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7287;
      nodes7287 = node.contents();
      oldNodes.replaceWith(nodes7287);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStats(5, function(result__) {
                       var tmp7037 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7033 = mobl.ref(result__);
    
    var nodes7289 = $("<span>");
    root9115.append(nodes7289);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7033, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9120 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7290 = $("<span>");
      root9120.append(nodes7290);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 stats Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9121 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9121); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7290;
        nodes7290 = node.contents();
        oldNodes.replaceWith(nodes7290);
      }));
      callback(root9120); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7289;
      nodes7289 = node.contents();
      oldNodes.replaceWith(nodes7289);
    }));
    callback(root9115); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7284;
    nodes7284 = node.contents();
    oldNodes.replaceWith(nodes7284);
  }));
  var nodes7291 = $("<span>");
  root9112.append(nodes7291);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Core topics</section>"), function(_, callback) {
    var root9122 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9122); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7291;
    nodes7291 = node.contents();
    oldNodes.replaceWith(nodes7291);
  }));
  var nodes7292 = $("<span>");
  root9112.append(nodes7292);
  subs__.addSub((nrichRPG.coreWorkout.addQA)(function(_, callback) {
    var root9123 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9123); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7292;
    nodes7292 = node.contents();
    oldNodes.replaceWith(nodes7292);
  }));
  var nodes7293 = $("<span>");
  root9112.append(nodes7293);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Further topics</section>"), function(_, callback) {
    var root9124 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9124); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7293;
    nodes7293 = node.contents();
    oldNodes.replaceWith(nodes7293);
  }));
  var nodes7294 = $("<span>");
  root9112.append(nodes7294);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root9125 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9125); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7294;
    nodes7294 = node.contents();
    oldNodes.replaceWith(nodes7294);
  }));
  var nodes7295 = $("<span>");
  root9112.append(nodes7295);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Stats topics</section>"), function(_, callback) {
    var root9126 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9126); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7295;
    nodes7295 = node.contents();
    oldNodes.replaceWith(nodes7295);
  }));
  var nodes7296 = $("<span>");
  root9112.append(nodes7296);
  subs__.addSub((nrichRPG.coreWorkout.addQAStats)(function(_, callback) {
    var root9127 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9127); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7296;
    nodes7296 = node.contents();
    oldNodes.replaceWith(nodes7296);
  }));
  callback(root9112); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
};

mathmo.furtherTab = function(elements, callback) {
  var root9128 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7297 = $("<span>");
  root9128.append(nodes7297);
  subs__.addSub((ui.header)(mobl.ref("+Q on *topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9129 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9129); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7297;
    nodes7297 = node.contents();
    oldNodes.replaceWith(nodes7297);
  }));
  var nodes7298 = $("<span>");
  root9128.append(nodes7298);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root9130 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9130); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7298;
    nodes7298 = node.contents();
    oldNodes.replaceWith(nodes7298);
  }));
  callback(root9128); return subs__;
  
  
  return subs__;
};

mathmo.aboutTab = function(elements, callback) {
  var root9131 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7299 = $("<span>");
  root9131.append(nodes7299);
  subs__.addSub((ui.header)(mobl.ref("About Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9132 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9132); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7299;
    nodes7299 = node.contents();
    oldNodes.replaceWith(nodes7299);
  }));
  
  var credits = mobl.ref("\n<div style=\"padding:20px\">\n<h2>\n<img src=\"icon.png\" style=\"width:50px;height:50px\"/>\nMathmo v0.3.3 by the <a href=\"http://nrich.maths.org\">NRICH team</a>, University of Cambridge\n</h2>\n<h3>Help</h3>\nOn the 'My Qs' tab you'll find your current set of Questions (abbr. Qs)<br>\nTouch [Clear] to delete all your current Qs.<br>\n<br>\nOn the 'Add' tab you can add 5 random core, further or stats questions, or choose them singly.\nFurther and Stats sections are at the bottom of the topic list.<br>\n<br>\nWhen a question is displayed, touch [Check Answer] to check working and then\nreply to 'Did you agree?' [Yes] [No]. You may need to do a little more work to see whether your answer is really the same or not.\nThe questions will change colour (red == No/Not answered; green == Yes, black == not checked) so you can track how you are doing.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. It's web address is <a href=\"http://nrich.maths.org/mobl/mathmo/mathmo.html\">http://nrich.maths.org/mobl/mathmo/mathmo.html</a>.\n\n<h3>Credits</h3>\n<p>\nSyllabus hugging ideas: Stephen Hewson\n</p>\n<p>\nQuestion and Answer generators:\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson with contributions from\n<a href=\"http://github.com/naush/mathmo\">Li Hsuan</a>.</p>\n\n<p>\nThe following have also been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n</div>\n");
  var nodes7300 = $("<span>");
  root9131.append(nodes7300);
  subs__.addSub((mobl.html)(credits, function(_, callback) {
    var root9133 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9133); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7300;
    nodes7300 = node.contents();
    oldNodes.replaceWith(nodes7300);
  }));
  callback(root9131); return subs__;
  
  
  return subs__;
};

mathmo.root = function(callback, screenCallback) {
  var root9134 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  mobl.fetchLanguageBundle("english.json", function(result__) {
    var tmp7040 = result__;
    var result__ = [new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)];
    var tmp7034 = mobl.ref(result__);
    subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
      tmp7034.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
      tmp7034.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.aboutTab).addEventListener('change', function() {
      tmp7034.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    
    var nodes7301 = $("<span>");
    root9134.append(nodes7301);
    subs__.addSub((ui.tabSet)(tmp7034, mobl.ref(null), function(_, callback) {
      var root9135 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9135); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7301;
      nodes7301 = node.contents();
      oldNodes.replaceWith(nodes7301);
    }));
    callback(root9134); return subs__;
    
  });
  return subs__;
};
