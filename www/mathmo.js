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
  var root5571 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1798 = $("<span>");
  
  var ref1677 = mobl.ref("color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
  if(ref1677.get() !== null) {
    node1798.attr('style', ref1677.get());
    subs__.addSub(ref1677.addEventListener('change', function(_, ref, val) {
      node1798.attr('style', val);
    }));
    subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
      node1798.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
      node1798.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    
  }
  subs__.addSub(ref1677.rebind());
  
  var result__ = "Q" + number.get() + ". " + qa.get().topic;
  var tmp4261 = mobl.ref(result__);
  subs__.addSub(number.addEventListener('change', function() {
    tmp4261.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp4261.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  
  var nodes4396 = $("<span>");
  node1798.append(nodes4396);
  subs__.addSub((mobl.html)(tmp4261, function(_, callback) {
    var root5572 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5572); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4396;
    nodes4396 = node.contents();
    oldNodes.replaceWith(nodes4396);
  }));
  root5571.append(node1798);
  callback(root5571); return subs__;
  
  
  return subs__;
};

mathmo.qTab = function(elements, callback) {
  var root5573 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4397 = $("<span>");
  root5573.append(nodes4397);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root5574 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.resourceUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp4262 = mobl.ref(result__);
    
    var nodes4398 = $("<span>");
    root5574.append(nodes4398);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), tmp4262, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root5575 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5575); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4398;
      nodes4398 = node.contents();
      oldNodes.replaceWith(nodes4398);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.homeUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp4263 = mobl.ref(result__);
    
    var nodes4399 = $("<span>");
    root5574.append(nodes4399);
    subs__.addSub((ui.image)(mobl.ref("nrichIcon.png"), mobl.ref(35), mobl.ref(35), tmp4263, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root5576 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5576); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4399;
      nodes4399 = node.contents();
      oldNodes.replaceWith(nodes4399);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp4271 = result__;
                       var result__ = ui.hideCurrent();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4264 = mobl.ref(result__);
    
    var nodes4400 = $("<span>");
    root5574.append(nodes4400);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp4264, function(_, callback) {
      var root5577 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5577); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4400;
      nodes4400 = node.contents();
      oldNodes.replaceWith(nodes4400);
    }));
    callback(root5574); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4397;
    nodes4397 = node.contents();
    oldNodes.replaceWith(nodes4397);
  }));
  var result__ = nrichRPG.questionAnswer.QA.all().order("number", true);
  var tmp4265 = mobl.ref(result__);
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all().order("number", true)).addEventListener('change', function() {
    tmp4265.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
    tmp4265.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
    tmp4265.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  
  var nodes4401 = $("<span>");
  root5573.append(nodes4401);
  subs__.addSub((ui.mMasterDetail)(tmp4265, mobl.ref(mathmo.qaItem), mobl.ref(nrichRPG.coreWorkout.showQA), function(_, callback) {
    var root5578 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5578); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4401;
    nodes4401 = node.contents();
    oldNodes.replaceWith(nodes4401);
  }));
  callback(root5573); return subs__;
  
  
  return subs__;
};

mathmo.coreTab = function(elements, callback) {
  var root5579 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4402 = $("<span>");
  root5579.append(nodes4402);
  subs__.addSub((ui.header)(mobl.ref("Q on topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root5580 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp4272 = result__;
                       var result__ = ui.hideCurrent();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4266 = mobl.ref(result__);
    
    var nodes4403 = $("<span>");
    root5580.append(nodes4403);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp4266, function(_, callback) {
      var root5581 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5581); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4403;
      nodes4403 = node.contents();
      oldNodes.replaceWith(nodes4403);
    }));
    callback(root5580); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4402;
    nodes4402 = node.contents();
    oldNodes.replaceWith(nodes4402);
  }));
  var nodes4404 = $("<span>");
  root5579.append(nodes4404);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5582 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, 1000, function(result__) {
                       var tmp4275 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4267 = mobl.ref(result__);
    
    var nodes4405 = $("<span>");
    root5582.append(nodes4405);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4267, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5583 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4406 = $("<span>");
      root5583.append(nodes4406);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 core Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5584 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5584); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4406;
        nodes4406 = node.contents();
        oldNodes.replaceWith(nodes4406);
      }));
      callback(root5583); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4405;
      nodes4405 = node.contents();
      oldNodes.replaceWith(nodes4405);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStar(5, function(result__) {
                       var tmp4274 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4268 = mobl.ref(result__);
    
    var nodes4407 = $("<span>");
    root5582.append(nodes4407);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4268, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5585 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4408 = $("<span>");
      root5585.append(nodes4408);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 further Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5586 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5586); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4408;
        nodes4408 = node.contents();
        oldNodes.replaceWith(nodes4408);
      }));
      callback(root5585); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4407;
      nodes4407 = node.contents();
      oldNodes.replaceWith(nodes4407);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStats(5, function(result__) {
                       var tmp4273 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4269 = mobl.ref(result__);
    
    var nodes4409 = $("<span>");
    root5582.append(nodes4409);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4269, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5587 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4410 = $("<span>");
      root5587.append(nodes4410);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 stats Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5588 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5588); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4410;
        nodes4410 = node.contents();
        oldNodes.replaceWith(nodes4410);
      }));
      callback(root5587); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4409;
      nodes4409 = node.contents();
      oldNodes.replaceWith(nodes4409);
    }));
    callback(root5582); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4404;
    nodes4404 = node.contents();
    oldNodes.replaceWith(nodes4404);
  }));
  var nodes4411 = $("<span>");
  root5579.append(nodes4411);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Core topics</section>"), function(_, callback) {
    var root5589 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5589); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4411;
    nodes4411 = node.contents();
    oldNodes.replaceWith(nodes4411);
  }));
  var nodes4412 = $("<span>");
  root5579.append(nodes4412);
  subs__.addSub((nrichRPG.coreWorkout.addQA)(function(_, callback) {
    var root5590 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5590); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4412;
    nodes4412 = node.contents();
    oldNodes.replaceWith(nodes4412);
  }));
  var nodes4413 = $("<span>");
  root5579.append(nodes4413);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Further topics</section>"), function(_, callback) {
    var root5591 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5591); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4413;
    nodes4413 = node.contents();
    oldNodes.replaceWith(nodes4413);
  }));
  var nodes4414 = $("<span>");
  root5579.append(nodes4414);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root5592 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5592); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4414;
    nodes4414 = node.contents();
    oldNodes.replaceWith(nodes4414);
  }));
  var nodes4415 = $("<span>");
  root5579.append(nodes4415);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Stats topics</section>"), function(_, callback) {
    var root5593 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5593); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4415;
    nodes4415 = node.contents();
    oldNodes.replaceWith(nodes4415);
  }));
  var nodes4416 = $("<span>");
  root5579.append(nodes4416);
  subs__.addSub((nrichRPG.coreWorkout.addQAStats)(function(_, callback) {
    var root5594 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5594); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4416;
    nodes4416 = node.contents();
    oldNodes.replaceWith(nodes4416);
  }));
  callback(root5579); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
};

mathmo.furtherTab = function(elements, callback) {
  var root5595 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4417 = $("<span>");
  root5595.append(nodes4417);
  subs__.addSub((ui.header)(mobl.ref("+Q on *topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root5596 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5596); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4417;
    nodes4417 = node.contents();
    oldNodes.replaceWith(nodes4417);
  }));
  var nodes4418 = $("<span>");
  root5595.append(nodes4418);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root5597 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5597); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4418;
    nodes4418 = node.contents();
    oldNodes.replaceWith(nodes4418);
  }));
  callback(root5595); return subs__;
  
  
  return subs__;
};

mathmo.aboutTab = function(elements, callback) {
  var root5598 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4419 = $("<span>");
  root5598.append(nodes4419);
  subs__.addSub((ui.header)(mobl.ref("About Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root5599 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5599); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4419;
    nodes4419 = node.contents();
    oldNodes.replaceWith(nodes4419);
  }));
  
  var credits = mobl.ref("\n<div style=\"padding:20px\">\n<h2>\n<img src=\"icon.png\" style=\"width:50px;height:50px\"/>\nMathmo v0.3.2 by the <a href=\"http://nrich.maths.org\">NRICH team</a>, University of Cambridge\n</h2>\n<h3>Help</h3>\nOn the 'My Qs' tab you'll find your current set of Questions (abbr. Qs)<br>\nTouch [Clear] to delete all your current Qs.<br>\n<br>\nOn the 'Add' tab you can add 5 random core, further or stats questions, or choose them singly.\nFurther and Stats sections are at the bottom of the topic list.<br>\n<br>\nWhen a question is displayed, touch [Check Answer] to check working and then\nreply to 'Did you agree?' [Yes] [No]. You may need to do a little more work to see whether your answer is really the same or not.\nThe questions will change colour (red == No/Not answered; green == Yes, black == not checked) so you can track how you are doing.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. It's web address is <a href=\"http://nrich.maths.org/mobl/mathmo/mathmo.html\">http://nrich.maths.org/mobl/mathmo/mathmo.html</a>.\n\n<h3>Credits</h3>\n<p>\nSyllabus hugging ideas: Stephen Hewson\n</p>\n<p>\nQuestion and Answer generators:\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson with contributions from\n<a href=\"http://github.com/naush/mathmo\">Li Hsuan</a>.</p>\n\n<p>\nThe following have also been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n</div>\n");
  var nodes4420 = $("<span>");
  root5598.append(nodes4420);
  subs__.addSub((mobl.html)(credits, function(_, callback) {
    var root5600 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5600); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4420;
    nodes4420 = node.contents();
    oldNodes.replaceWith(nodes4420);
  }));
  callback(root5598); return subs__;
  
  
  return subs__;
};

mathmo.root = function(callback, screenCallback) {
  var root5601 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  mobl.fetchLanguageBundle("english.json", function(result__) {
    var tmp4276 = result__;
    var result__ = [new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)];
    var tmp4270 = mobl.ref(result__);
    subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
      tmp4270.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
      tmp4270.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.aboutTab).addEventListener('change', function() {
      tmp4270.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    
    var nodes4421 = $("<span>");
    root5601.append(nodes4421);
    subs__.addSub((ui.tabSet)(tmp4270, mobl.ref(null), function(_, callback) {
      var root5602 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5602); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4421;
      nodes4421 = node.contents();
      oldNodes.replaceWith(nodes4421);
    }));
    callback(root5601); return subs__;
    
  });
  return subs__;
};
