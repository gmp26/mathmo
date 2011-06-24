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
  var root15227 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2831 = $("<span>");
  
  var ref2596 = mobl.ref("color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
  if(ref2596.get() !== null) {
    node2831.attr('style', ref2596.get());
    subs__.addSub(ref2596.addEventListener('change', function(_, ref, val) {
      node2831.attr('style', val);
    }));
    subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
      node2831.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
      node2831.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    
  }
  subs__.addSub(ref2596.rebind());
  
  var result__ = "Q" + number.get() + ". " + qa.get().topic;
  var tmp7527 = mobl.ref(result__);
  subs__.addSub(number.addEventListener('change', function() {
    tmp7527.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp7527.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  
  var nodes10855 = $("<span>");
  node2831.append(nodes10855);
  subs__.addSub((mobl.html)(tmp7527, function(_, callback) {
    var root15228 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root15228); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10855;
    nodes10855 = node.contents();
    oldNodes.replaceWith(nodes10855);
  }));
  root15227.append(node2831);
  callback(root15227); return subs__;
  
  
  return subs__;
};

mathmo.qTab = function(elements, callback) {
  var root15229 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes10856 = $("<span>");
  root15229.append(nodes10856);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root15230 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.resourceUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7528 = mobl.ref(result__);
    
    var nodes10857 = $("<span>");
    root15230.append(nodes10857);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), tmp7528, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root15231 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15231); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10857;
      nodes10857 = node.contents();
      oldNodes.replaceWith(nodes10857);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.homeUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7529 = mobl.ref(result__);
    
    var nodes10858 = $("<span>");
    root15230.append(nodes10858);
    subs__.addSub((ui.image)(mobl.ref("nrichIcon.png"), mobl.ref(35), mobl.ref(35), tmp7529, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root15232 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15232); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10858;
      nodes10858 = node.contents();
      oldNodes.replaceWith(nodes10858);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp7537 = result__;
                       var result__ = ui.hideCurrent();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7530 = mobl.ref(result__);
    
    var nodes10859 = $("<span>");
    root15230.append(nodes10859);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp7530, function(_, callback) {
      var root15233 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15233); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10859;
      nodes10859 = node.contents();
      oldNodes.replaceWith(nodes10859);
    }));
    callback(root15230); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10856;
    nodes10856 = node.contents();
    oldNodes.replaceWith(nodes10856);
  }));
  var result__ = nrichRPG.questionAnswer.QA.all().order("number", true);
  var tmp7531 = mobl.ref(result__);
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all().order("number", true)).addEventListener('change', function() {
    tmp7531.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
    tmp7531.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
    tmp7531.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  
  var nodes10860 = $("<span>");
  root15229.append(nodes10860);
  subs__.addSub((ui.mMasterDetail)(tmp7531, mobl.ref(mathmo.qaItem), mobl.ref(nrichRPG.coreWorkout.showQA), function(_, callback) {
    var root15234 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root15234); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10860;
    nodes10860 = node.contents();
    oldNodes.replaceWith(nodes10860);
  }));
  callback(root15229); return subs__;
  
  
  return subs__;
};

mathmo.coreTab = function(elements, callback) {
  var root15235 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes10861 = $("<span>");
  root15235.append(nodes10861);
  subs__.addSub((ui.header)(mobl.ref("Q on topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root15236 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp7538 = result__;
                       var result__ = ui.hideCurrent();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7532 = mobl.ref(result__);
    
    var nodes10862 = $("<span>");
    root15236.append(nodes10862);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp7532, function(_, callback) {
      var root15237 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15237); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10862;
      nodes10862 = node.contents();
      oldNodes.replaceWith(nodes10862);
    }));
    callback(root15236); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10861;
    nodes10861 = node.contents();
    oldNodes.replaceWith(nodes10861);
  }));
  var nodes10863 = $("<span>");
  root15235.append(nodes10863);
  subs__.addSub((ui.group)(function(_, callback) {
    var root15238 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, 1000, function(result__) {
                       var tmp7541 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7533 = mobl.ref(result__);
    
    var nodes10864 = $("<span>");
    root15238.append(nodes10864);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7533, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15239 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10865 = $("<span>");
      root15239.append(nodes10865);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 core Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15240 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15240); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10865;
        nodes10865 = node.contents();
        oldNodes.replaceWith(nodes10865);
      }));
      callback(root15239); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10864;
      nodes10864 = node.contents();
      oldNodes.replaceWith(nodes10864);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStar(5, function(result__) {
                       var tmp7540 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7534 = mobl.ref(result__);
    
    var nodes10866 = $("<span>");
    root15238.append(nodes10866);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7534, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15241 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10867 = $("<span>");
      root15241.append(nodes10867);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 further Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15242 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15242); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10867;
        nodes10867 = node.contents();
        oldNodes.replaceWith(nodes10867);
      }));
      callback(root15241); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10866;
      nodes10866 = node.contents();
      oldNodes.replaceWith(nodes10866);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStats(5, function(result__) {
                       var tmp7539 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7535 = mobl.ref(result__);
    
    var nodes10868 = $("<span>");
    root15238.append(nodes10868);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7535, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root15243 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10869 = $("<span>");
      root15243.append(nodes10869);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 stats Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15244 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15244); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10869;
        nodes10869 = node.contents();
        oldNodes.replaceWith(nodes10869);
      }));
      callback(root15243); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10868;
      nodes10868 = node.contents();
      oldNodes.replaceWith(nodes10868);
    }));
    callback(root15238); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10863;
    nodes10863 = node.contents();
    oldNodes.replaceWith(nodes10863);
  }));
  var nodes10870 = $("<span>");
  root15235.append(nodes10870);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Core topics</section>"), function(_, callback) {
    var root15245 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root15245); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10870;
    nodes10870 = node.contents();
    oldNodes.replaceWith(nodes10870);
  }));
  var nodes10871 = $("<span>");
  root15235.append(nodes10871);
  subs__.addSub((nrichRPG.coreWorkout.addQA)(function(_, callback) {
    var root15246 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root15246); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10871;
    nodes10871 = node.contents();
    oldNodes.replaceWith(nodes10871);
  }));
  var nodes10872 = $("<span>");
  root15235.append(nodes10872);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Further topics</section>"), function(_, callback) {
    var root15247 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root15247); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10872;
    nodes10872 = node.contents();
    oldNodes.replaceWith(nodes10872);
  }));
  var nodes10873 = $("<span>");
  root15235.append(nodes10873);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root15248 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root15248); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10873;
    nodes10873 = node.contents();
    oldNodes.replaceWith(nodes10873);
  }));
  var nodes10874 = $("<span>");
  root15235.append(nodes10874);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Stats topics</section>"), function(_, callback) {
    var root15249 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root15249); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10874;
    nodes10874 = node.contents();
    oldNodes.replaceWith(nodes10874);
  }));
  var nodes10875 = $("<span>");
  root15235.append(nodes10875);
  subs__.addSub((nrichRPG.coreWorkout.addQAStats)(function(_, callback) {
    var root15250 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root15250); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10875;
    nodes10875 = node.contents();
    oldNodes.replaceWith(nodes10875);
  }));
  callback(root15235); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
};

mathmo.furtherTab = function(elements, callback) {
  var root15251 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes10876 = $("<span>");
  root15251.append(nodes10876);
  subs__.addSub((ui.header)(mobl.ref("+Q on *topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root15252 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root15252); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10876;
    nodes10876 = node.contents();
    oldNodes.replaceWith(nodes10876);
  }));
  var nodes10877 = $("<span>");
  root15251.append(nodes10877);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root15253 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root15253); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10877;
    nodes10877 = node.contents();
    oldNodes.replaceWith(nodes10877);
  }));
  callback(root15251); return subs__;
  
  
  return subs__;
};

mathmo.aboutTab = function(elements, callback) {
  var root15254 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes10878 = $("<span>");
  root15254.append(nodes10878);
  subs__.addSub((ui.header)(mobl.ref("About Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root15255 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root15255); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10878;
    nodes10878 = node.contents();
    oldNodes.replaceWith(nodes10878);
  }));
  
  var credits = mobl.ref("\n<div style=\"padding:20px\">\n<h2>\n<img src=\"icon.png\" style=\"width:50px;height:50px\"/>\nMathmo v0.3.3 by the <a href=\"http://nrich.maths.org\">NRICH team</a>, University of Cambridge\n</h2>\n<h3>Help</h3>\nOn the 'My Qs' tab you'll find your current set of Questions (abbr. Qs)<br>\nTouch [Clear] to delete all your current Qs.<br>\n<br>\nOn the 'Add' tab you can add 5 random core, further or stats questions, or choose them singly.\nFurther and Stats sections are at the bottom of the topic list.<br>\n<br>\nWhen a question is displayed, touch [Check Answer] to check working and then\nreply to 'Did you agree?' [Yes] [No]. You may need to do a little more work to see whether your answer is really the same or not.\nThe questions will change colour (red == No/Not answered; green == Yes, black == not checked) so you can track how you are doing.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. It's web address is <a href=\"http://nrich.maths.org/mobl/mathmo/mathmo.html\">http://nrich.maths.org/mobl/mathmo/mathmo.html</a>.\n\n<h3>Credits</h3>\n<p>\nSyllabus hugging ideas: Stephen Hewson\n</p>\n<p>\nQuestion and Answer generators:\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson with contributions from\n<a href=\"http://github.com/naush/mathmo\">Li Hsuan</a>.</p>\n\n<p>\nThe following have also been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n</div>\n");
  var nodes10879 = $("<span>");
  root15254.append(nodes10879);
  subs__.addSub((mobl.html)(credits, function(_, callback) {
    var root15256 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root15256); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10879;
    nodes10879 = node.contents();
    oldNodes.replaceWith(nodes10879);
  }));
  callback(root15254); return subs__;
  
  
  return subs__;
};

mathmo.root = function(callback, screenCallback) {
  var root15257 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  mobl.fetchLanguageBundle("english.json", function(result__) {
    var tmp7542 = result__;
    var result__ = [new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)];
    var tmp7536 = mobl.ref(result__);
    subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
      tmp7536.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
      tmp7536.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.aboutTab).addEventListener('change', function() {
      tmp7536.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    
    var nodes10880 = $("<span>");
    root15257.append(nodes10880);
    subs__.addSub((ui.tabSet)(tmp7536, mobl.ref(null), function(_, callback) {
      var root15258 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root15258); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10880;
      nodes10880 = node.contents();
      oldNodes.replaceWith(nodes10880);
    }));
    callback(root15257); return subs__;
    
  });
  return subs__;
};
