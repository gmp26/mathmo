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
  var root10356 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3180 = $("<span>");
  
  var ref2984 = mobl.ref("color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
  if(ref2984.get() !== null) {
    node3180.attr('style', ref2984.get());
    subs__.addSub(ref2984.addEventListener('change', function(_, ref, val) {
      node3180.attr('style', val);
    }));
    subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
      node3180.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
      node3180.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    
  }
  subs__.addSub(ref2984.rebind());
  
  var result__ = "Q" + number.get() + ". " + qa.get().topic;
  var tmp7840 = mobl.ref(result__);
  subs__.addSub(number.addEventListener('change', function() {
    tmp7840.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp7840.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  
  var nodes8199 = $("<span>");
  node3180.append(nodes8199);
  subs__.addSub((mobl.html)(tmp7840, function(_, callback) {
    var root10357 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10357); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8199;
    nodes8199 = node.contents();
    oldNodes.replaceWith(nodes8199);
  }));
  root10356.append(node3180);
  callback(root10356); return subs__;
  
  
  return subs__;
};

mathmo.qTab = function(elements, callback) {
  var root10358 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes8200 = $("<span>");
  root10358.append(nodes8200);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root10359 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.resourceUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7841 = mobl.ref(result__);
    
    var nodes8201 = $("<span>");
    root10359.append(nodes8201);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), tmp7841, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root10360 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10360); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8201;
      nodes8201 = node.contents();
      oldNodes.replaceWith(nodes8201);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.homeUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7842 = mobl.ref(result__);
    
    var nodes8202 = $("<span>");
    root10359.append(nodes8202);
    subs__.addSub((ui.image)(mobl.ref("nrichIcon.png"), mobl.ref(35), mobl.ref(35), tmp7842, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root10361 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10361); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8202;
      nodes8202 = node.contents();
      oldNodes.replaceWith(nodes8202);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp7850 = result__;
                       var result__ = ui.hideCurrent();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7843 = mobl.ref(result__);
    
    var nodes8203 = $("<span>");
    root10359.append(nodes8203);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp7843, function(_, callback) {
      var root10362 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10362); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8203;
      nodes8203 = node.contents();
      oldNodes.replaceWith(nodes8203);
    }));
    callback(root10359); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8200;
    nodes8200 = node.contents();
    oldNodes.replaceWith(nodes8200);
  }));
  var result__ = nrichRPG.questionAnswer.QA.all().order("number", true);
  var tmp7844 = mobl.ref(result__);
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all().order("number", true)).addEventListener('change', function() {
    tmp7844.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
    tmp7844.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
    tmp7844.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  
  var nodes8204 = $("<span>");
  root10358.append(nodes8204);
  subs__.addSub((ui.mMasterDetail)(tmp7844, mobl.ref(mathmo.qaItem), mobl.ref(nrichRPG.coreWorkout.showQA), function(_, callback) {
    var root10363 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10363); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8204;
    nodes8204 = node.contents();
    oldNodes.replaceWith(nodes8204);
  }));
  callback(root10358); return subs__;
  
  
  return subs__;
};

mathmo.coreTab = function(elements, callback) {
  var root10364 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes8205 = $("<span>");
  root10364.append(nodes8205);
  subs__.addSub((ui.header)(mobl.ref("Q on topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root10365 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp7851 = result__;
                       var result__ = ui.hideCurrent();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7845 = mobl.ref(result__);
    
    var nodes8206 = $("<span>");
    root10365.append(nodes8206);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp7845, function(_, callback) {
      var root10366 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10366); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8206;
      nodes8206 = node.contents();
      oldNodes.replaceWith(nodes8206);
    }));
    callback(root10365); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8205;
    nodes8205 = node.contents();
    oldNodes.replaceWith(nodes8205);
  }));
  var nodes8207 = $("<span>");
  root10364.append(nodes8207);
  subs__.addSub((ui.group)(function(_, callback) {
    var root10367 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, 1000, function(result__) {
                       var tmp7854 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7846 = mobl.ref(result__);
    
    var nodes8208 = $("<span>");
    root10367.append(nodes8208);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7846, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10368 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8209 = $("<span>");
      root10368.append(nodes8209);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 core Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10369 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10369); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8209;
        nodes8209 = node.contents();
        oldNodes.replaceWith(nodes8209);
      }));
      callback(root10368); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8208;
      nodes8208 = node.contents();
      oldNodes.replaceWith(nodes8208);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStar(5, function(result__) {
                       var tmp7853 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7847 = mobl.ref(result__);
    
    var nodes8210 = $("<span>");
    root10367.append(nodes8210);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7847, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10370 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8211 = $("<span>");
      root10370.append(nodes8211);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 further Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10371 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10371); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8211;
        nodes8211 = node.contents();
        oldNodes.replaceWith(nodes8211);
      }));
      callback(root10370); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8210;
      nodes8210 = node.contents();
      oldNodes.replaceWith(nodes8210);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStats(5, function(result__) {
                       var tmp7852 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7848 = mobl.ref(result__);
    
    var nodes8212 = $("<span>");
    root10367.append(nodes8212);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7848, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10372 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8213 = $("<span>");
      root10372.append(nodes8213);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 stats Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10373 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10373); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8213;
        nodes8213 = node.contents();
        oldNodes.replaceWith(nodes8213);
      }));
      callback(root10372); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8212;
      nodes8212 = node.contents();
      oldNodes.replaceWith(nodes8212);
    }));
    callback(root10367); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8207;
    nodes8207 = node.contents();
    oldNodes.replaceWith(nodes8207);
  }));
  var nodes8214 = $("<span>");
  root10364.append(nodes8214);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Core topics</section>"), function(_, callback) {
    var root10374 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10374); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8214;
    nodes8214 = node.contents();
    oldNodes.replaceWith(nodes8214);
  }));
  var nodes8215 = $("<span>");
  root10364.append(nodes8215);
  subs__.addSub((nrichRPG.coreWorkout.addQA)(function(_, callback) {
    var root10375 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10375); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8215;
    nodes8215 = node.contents();
    oldNodes.replaceWith(nodes8215);
  }));
  var nodes8216 = $("<span>");
  root10364.append(nodes8216);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Further topics</section>"), function(_, callback) {
    var root10376 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10376); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8216;
    nodes8216 = node.contents();
    oldNodes.replaceWith(nodes8216);
  }));
  var nodes8217 = $("<span>");
  root10364.append(nodes8217);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root10377 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10377); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8217;
    nodes8217 = node.contents();
    oldNodes.replaceWith(nodes8217);
  }));
  var nodes8218 = $("<span>");
  root10364.append(nodes8218);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Stats topics</section>"), function(_, callback) {
    var root10378 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10378); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8218;
    nodes8218 = node.contents();
    oldNodes.replaceWith(nodes8218);
  }));
  var nodes8219 = $("<span>");
  root10364.append(nodes8219);
  subs__.addSub((nrichRPG.coreWorkout.addQAStats)(function(_, callback) {
    var root10379 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10379); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8219;
    nodes8219 = node.contents();
    oldNodes.replaceWith(nodes8219);
  }));
  callback(root10364); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
};

mathmo.furtherTab = function(elements, callback) {
  var root10380 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes8220 = $("<span>");
  root10380.append(nodes8220);
  subs__.addSub((ui.header)(mobl.ref("+Q on *topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root10381 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10381); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8220;
    nodes8220 = node.contents();
    oldNodes.replaceWith(nodes8220);
  }));
  var nodes8221 = $("<span>");
  root10380.append(nodes8221);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root10382 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10382); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8221;
    nodes8221 = node.contents();
    oldNodes.replaceWith(nodes8221);
  }));
  callback(root10380); return subs__;
  
  
  return subs__;
};

mathmo.aboutTab = function(elements, callback) {
  var root10383 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes8222 = $("<span>");
  root10383.append(nodes8222);
  subs__.addSub((ui.header)(mobl.ref("About Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root10384 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10384); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8222;
    nodes8222 = node.contents();
    oldNodes.replaceWith(nodes8222);
  }));
  
  var credits = mobl.ref("\n<div style=\"padding:20px\">\n<h2>\n<img src=\"icon.png\" style=\"width:50px;height:50px\"/>\nMathmo v0.3.3 by the <a href=\"http://nrich.maths.org\">NRICH team</a>, University of Cambridge\n</h2>\n<h3>Help</h3>\nOn the 'My Qs' tab you'll find your current set of Questions (abbr. Qs)<br>\nTouch [Clear] to delete all your current Qs.<br>\n<br>\nOn the 'Add' tab you can add 5 random core, further or stats questions, or choose them singly.\nFurther and Stats sections are at the bottom of the topic list.<br>\n<br>\nWhen a question is displayed, touch [Check Answer] to check working and then\nreply to 'Did you agree?' [Yes] [No]. You may need to do a little more work to see whether your answer is really the same or not.\nThe questions will change colour (red == No/Not answered; green == Yes, black == not checked) so you can track how you are doing.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. It's web address is <a href=\"http://nrich.maths.org/mobl/mathmo/mathmo.html\">http://nrich.maths.org/mobl/mathmo/mathmo.html</a>.\n\n<h3>Credits</h3>\n<p>\nSyllabus hugging ideas: Stephen Hewson\n</p>\n<p>\nQuestion and Answer generators:\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson with contributions from\n<a href=\"http://github.com/naush/mathmo\">Li Hsuan</a>.</p>\n\n<p>\nThe following have also been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n</div>\n");
  var nodes8223 = $("<span>");
  root10383.append(nodes8223);
  subs__.addSub((mobl.html)(credits, function(_, callback) {
    var root10385 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10385); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8223;
    nodes8223 = node.contents();
    oldNodes.replaceWith(nodes8223);
  }));
  callback(root10383); return subs__;
  
  
  return subs__;
};

mathmo.root = function(callback, screenCallback) {
  var root10386 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  mobl.fetchLanguageBundle("english.json", function(result__) {
    var tmp7855 = result__;
    var result__ = [new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)];
    var tmp7849 = mobl.ref(result__);
    subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
      tmp7849.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
      tmp7849.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.aboutTab).addEventListener('change', function() {
      tmp7849.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    
    var nodes8224 = $("<span>");
    root10386.append(nodes8224);
    subs__.addSub((ui.tabSet)(tmp7849, mobl.ref(null), function(_, callback) {
      var root10387 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10387); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8224;
      nodes8224 = node.contents();
      oldNodes.replaceWith(nodes8224);
    }));
    callback(root10386); return subs__;
    
  });
  return subs__;
};
