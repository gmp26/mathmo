mobl.provides('mathmo');
mobl.provides('nrichRPG');
mobl.provides('nrichRPG.questionAnswer');
mobl.provides('nrichRPG.coreWorkout');
mobl.provides('mobl');
mobl.provides('ui');
mobl.provides('mathmo');
persistence.debug = false;mathmo.homeUrl = mobl.ref("http://nrich.maths.org");
mathmo.resourceUrl = mobl.ref("http://nrich.maths.org/7088");

mathmo.qaItem = function(qa, elements, callback) {
  var root3287 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1143 = $("<span>");
  
  var ref1541 = mobl.ref("color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
  if(ref1541.get() !== null) {
    node1143.attr('style', ref1541.get());
    subs__.addSub(ref1541.addEventListener('change', function(_, ref, val) {
      node1143.attr('style', val);
    }));
    subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
      node1143.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
      node1143.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    
  }
  subs__.addSub(ref1541.rebind());
  
  var result__ = "Q" + qa.get().number + ". " + qa.get().topic;
  var tmp2267 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
    tmp2267.set("Q" + qa.get().number + ". " + qa.get().topic);
  }));
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp2267.set("Q" + qa.get().number + ". " + qa.get().topic);
  }));
  
  var nodes2353 = $("<span>");
  node1143.append(nodes2353);
  subs__.addSub((mobl.html)(tmp2267, function(_, callback) {
    var root3288 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3288); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2353;
    nodes2353 = node.contents();
    oldNodes.replaceWith(nodes2353);
  }));
  root3287.append(node1143);
  callback(root3287); return subs__;
  
  
  return subs__;
};

mathmo.qTab = function(elements, callback) {
  var root3289 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2354 = $("<span>");
  root3289.append(nodes2354);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3290 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.resourceUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2268 = mobl.ref(result__);
    
    var nodes2355 = $("<span>");
    root3290.append(nodes2355);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), tmp2268, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root3291 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3291); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2355;
      nodes2355 = node.contents();
      oldNodes.replaceWith(nodes2355);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.homeUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2269 = mobl.ref(result__);
    
    var nodes2356 = $("<span>");
    root3290.append(nodes2356);
    subs__.addSub((ui.image)(mobl.ref("nrichIcon.png"), mobl.ref(35), mobl.ref(35), tmp2269, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root3292 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3292); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2356;
      nodes2356 = node.contents();
      oldNodes.replaceWith(nodes2356);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp2277 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2270 = mobl.ref(result__);
    
    var nodes2357 = $("<span>");
    root3290.append(nodes2357);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp2270, function(_, callback) {
      var root3293 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3293); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2357;
      nodes2357 = node.contents();
      oldNodes.replaceWith(nodes2357);
    }));
    callback(root3290); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2354;
    nodes2354 = node.contents();
    oldNodes.replaceWith(nodes2354);
  }));
  var result__ = nrichRPG.questionAnswer.QA.all().order("number", true);
  var tmp2271 = mobl.ref(result__);
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all().order("number", true)).addEventListener('change', function() {
    tmp2271.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
    tmp2271.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
    tmp2271.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  
  var nodes2358 = $("<span>");
  root3289.append(nodes2358);
  subs__.addSub((ui.mMasterDetail)(tmp2271, mobl.ref(mathmo.qaItem), mobl.ref(nrichRPG.coreWorkout.showQA), function(_, callback) {
    var root3294 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3294); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2358;
    nodes2358 = node.contents();
    oldNodes.replaceWith(nodes2358);
  }));
  callback(root3289); return subs__;
  
  
  return subs__;
};

mathmo.coreTab = function(elements, callback) {
  var root3295 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2359 = $("<span>");
  root3295.append(nodes2359);
  subs__.addSub((ui.header)(mobl.ref("Q on topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3296 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp2278 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2272 = mobl.ref(result__);
    
    var nodes2360 = $("<span>");
    root3296.append(nodes2360);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp2272, function(_, callback) {
      var root3297 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3297); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2360;
      nodes2360 = node.contents();
      oldNodes.replaceWith(nodes2360);
    }));
    callback(root3296); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2359;
    nodes2359 = node.contents();
    oldNodes.replaceWith(nodes2359);
  }));
  var nodes2361 = $("<span>");
  root3295.append(nodes2361);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3298 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, 1000, function(result__) {
                       var tmp2281 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2273 = mobl.ref(result__);
    
    var nodes2362 = $("<span>");
    root3298.append(nodes2362);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2273, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3299 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2363 = $("<span>");
      root3299.append(nodes2363);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 core Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3300 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3300); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2363;
        nodes2363 = node.contents();
        oldNodes.replaceWith(nodes2363);
      }));
      callback(root3299); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2362;
      nodes2362 = node.contents();
      oldNodes.replaceWith(nodes2362);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStar(5, function(result__) {
                       var tmp2280 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2274 = mobl.ref(result__);
    
    var nodes2364 = $("<span>");
    root3298.append(nodes2364);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2274, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3301 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2365 = $("<span>");
      root3301.append(nodes2365);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 further Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3302 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3302); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2365;
        nodes2365 = node.contents();
        oldNodes.replaceWith(nodes2365);
      }));
      callback(root3301); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2364;
      nodes2364 = node.contents();
      oldNodes.replaceWith(nodes2364);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStats(5, function(result__) {
                       var tmp2279 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2275 = mobl.ref(result__);
    
    var nodes2366 = $("<span>");
    root3298.append(nodes2366);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2275, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3303 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2367 = $("<span>");
      root3303.append(nodes2367);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 stats Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3304 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3304); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2367;
        nodes2367 = node.contents();
        oldNodes.replaceWith(nodes2367);
      }));
      callback(root3303); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2366;
      nodes2366 = node.contents();
      oldNodes.replaceWith(nodes2366);
    }));
    callback(root3298); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2361;
    nodes2361 = node.contents();
    oldNodes.replaceWith(nodes2361);
  }));
  var nodes2368 = $("<span>");
  root3295.append(nodes2368);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Core topics</section>"), function(_, callback) {
    var root3305 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3305); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2368;
    nodes2368 = node.contents();
    oldNodes.replaceWith(nodes2368);
  }));
  var nodes2369 = $("<span>");
  root3295.append(nodes2369);
  subs__.addSub((nrichRPG.coreWorkout.addQA)(function(_, callback) {
    var root3306 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3306); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2369;
    nodes2369 = node.contents();
    oldNodes.replaceWith(nodes2369);
  }));
  var nodes2370 = $("<span>");
  root3295.append(nodes2370);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Further topics</section>"), function(_, callback) {
    var root3307 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3307); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2370;
    nodes2370 = node.contents();
    oldNodes.replaceWith(nodes2370);
  }));
  var nodes2371 = $("<span>");
  root3295.append(nodes2371);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root3308 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3308); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2371;
    nodes2371 = node.contents();
    oldNodes.replaceWith(nodes2371);
  }));
  var nodes2372 = $("<span>");
  root3295.append(nodes2372);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Stats topics</section>"), function(_, callback) {
    var root3309 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3309); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2372;
    nodes2372 = node.contents();
    oldNodes.replaceWith(nodes2372);
  }));
  var nodes2373 = $("<span>");
  root3295.append(nodes2373);
  subs__.addSub((nrichRPG.coreWorkout.addQAStats)(function(_, callback) {
    var root3310 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3310); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2373;
    nodes2373 = node.contents();
    oldNodes.replaceWith(nodes2373);
  }));
  callback(root3295); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
};

mathmo.furtherTab = function(elements, callback) {
  var root3311 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2374 = $("<span>");
  root3311.append(nodes2374);
  subs__.addSub((ui.header)(mobl.ref("+Q on *topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3312 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3312); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2374;
    nodes2374 = node.contents();
    oldNodes.replaceWith(nodes2374);
  }));
  var nodes2375 = $("<span>");
  root3311.append(nodes2375);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root3313 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3313); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2375;
    nodes2375 = node.contents();
    oldNodes.replaceWith(nodes2375);
  }));
  callback(root3311); return subs__;
  
  
  return subs__;
};

mathmo.aboutTab = function(elements, callback) {
  var root3314 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2376 = $("<span>");
  root3314.append(nodes2376);
  subs__.addSub((ui.header)(mobl.ref("About Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3315 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3315); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2376;
    nodes2376 = node.contents();
    oldNodes.replaceWith(nodes2376);
  }));
  
  var credits = mobl.ref("\n<div style=\"padding:20px\">\n<h2>\n<img src=\"icon.png\" style=\"width:50px;height:50px\"/>\nMathmo v0.3 by the <a href=\"http://nrich.maths.org\">NRICH team</a>, University of Cambridge\n</h2>\n<h3>Help</h3>\nOn the 'My Qs' tab you'll find your current set of Questions (abbr. Qs)<br>\nTouch [Clear] to delete all your current Qs.<br>\n<br>\nOn the 'Add' tab you can add 5 random core, further or stats questions, or choose them singly.\nFurther and Stats sections are at the bottom of the topic list.<br>\n<br>\nWhen a question is displayed, touch [Check Answer] to check working and then\nreply to 'Did you agree?' [Yes] [No]. You may need to do a little more work to see whether your answer is really the same or not.\nThe questions will change colour (red == No/Not answered; green == Yes, black == not checked) so you can track how you are doing.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. It's web address is <a href=\"http://nrich.maths.org/mobl/mathmo/mathmo.html\">http://nrich.maths.org/mobl/mathmo/mathmo.html</a>.\n\n<h3>Credits</h3>\n<p>\nIdea: Stephen Hewson\n</p>\n<p>\n<a href=\"http://nrich.maths.org/public/titlesearch.php?search=interactive%20workout\">Desktop Implementation:</a>\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson\n</p>\n\n<p>\nThe following have been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n</div>\n");
  var nodes2377 = $("<span>");
  root3314.append(nodes2377);
  subs__.addSub((mobl.html)(credits, function(_, callback) {
    var root3316 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3316); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2377;
    nodes2377 = node.contents();
    oldNodes.replaceWith(nodes2377);
  }));
  callback(root3314); return subs__;
  
  
  return subs__;
};

mathmo.root = function(callback, screenCallback) {
  var root3317 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  mobl.fetchLanguageBundle("english.json", function(result__) {
    var tmp2282 = result__;
    var result__ = [new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)];
    var tmp2276 = mobl.ref(result__);
    subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
      tmp2276.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
      tmp2276.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.aboutTab).addEventListener('change', function() {
      tmp2276.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    
    var nodes2378 = $("<span>");
    root3317.append(nodes2378);
    subs__.addSub((ui.tabSet)(tmp2276, mobl.ref(null), function(_, callback) {
      var root3318 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3318); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2378;
      nodes2378 = node.contents();
      oldNodes.replaceWith(nodes2378);
    }));
    callback(root3317); return subs__;
    
  });
  return subs__;
};
