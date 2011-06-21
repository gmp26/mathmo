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
  var root9968 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3013 = $("<span>");
  
  var ref2814 = mobl.ref("color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
  if(ref2814.get() !== null) {
    node3013.attr('style', ref2814.get());
    subs__.addSub(ref2814.addEventListener('change', function(_, ref, val) {
      node3013.attr('style', val);
    }));
    subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
      node3013.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
      node3013.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    
  }
  subs__.addSub(ref2814.rebind());
  
  var result__ = "Q" + number.get() + ". " + qa.get().topic;
  var tmp7604 = mobl.ref(result__);
  subs__.addSub(number.addEventListener('change', function() {
    tmp7604.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp7604.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  
  var nodes7925 = $("<span>");
  node3013.append(nodes7925);
  subs__.addSub((mobl.html)(tmp7604, function(_, callback) {
    var root9969 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9969); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7925;
    nodes7925 = node.contents();
    oldNodes.replaceWith(nodes7925);
  }));
  root9968.append(node3013);
  callback(root9968); return subs__;
  
  
  return subs__;
};

mathmo.qTab = function(elements, callback) {
  var root9970 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7926 = $("<span>");
  root9970.append(nodes7926);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9971 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.resourceUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7605 = mobl.ref(result__);
    
    var nodes7927 = $("<span>");
    root9971.append(nodes7927);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), tmp7605, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root9972 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9972); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7927;
      nodes7927 = node.contents();
      oldNodes.replaceWith(nodes7927);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.homeUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp7606 = mobl.ref(result__);
    
    var nodes7928 = $("<span>");
    root9971.append(nodes7928);
    subs__.addSub((ui.image)(mobl.ref("nrichIcon.png"), mobl.ref(35), mobl.ref(35), tmp7606, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root9973 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9973); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7928;
      nodes7928 = node.contents();
      oldNodes.replaceWith(nodes7928);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp7614 = result__;
                       var result__ = ui.hideCurrent();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7607 = mobl.ref(result__);
    
    var nodes7929 = $("<span>");
    root9971.append(nodes7929);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp7607, function(_, callback) {
      var root9974 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9974); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7929;
      nodes7929 = node.contents();
      oldNodes.replaceWith(nodes7929);
    }));
    callback(root9971); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7926;
    nodes7926 = node.contents();
    oldNodes.replaceWith(nodes7926);
  }));
  var result__ = nrichRPG.questionAnswer.QA.all().order("number", true);
  var tmp7608 = mobl.ref(result__);
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all().order("number", true)).addEventListener('change', function() {
    tmp7608.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
    tmp7608.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
    tmp7608.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  
  var nodes7930 = $("<span>");
  root9970.append(nodes7930);
  subs__.addSub((ui.mMasterDetail)(tmp7608, mobl.ref(mathmo.qaItem), mobl.ref(nrichRPG.coreWorkout.showQA), function(_, callback) {
    var root9975 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9975); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7930;
    nodes7930 = node.contents();
    oldNodes.replaceWith(nodes7930);
  }));
  callback(root9970); return subs__;
  
  
  return subs__;
};

mathmo.coreTab = function(elements, callback) {
  var root9976 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7931 = $("<span>");
  root9976.append(nodes7931);
  subs__.addSub((ui.header)(mobl.ref("Q on topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9977 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp7615 = result__;
                       var result__ = ui.hideCurrent();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7609 = mobl.ref(result__);
    
    var nodes7932 = $("<span>");
    root9977.append(nodes7932);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp7609, function(_, callback) {
      var root9978 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9978); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7932;
      nodes7932 = node.contents();
      oldNodes.replaceWith(nodes7932);
    }));
    callback(root9977); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7931;
    nodes7931 = node.contents();
    oldNodes.replaceWith(nodes7931);
  }));
  var nodes7933 = $("<span>");
  root9976.append(nodes7933);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9979 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, 1000, function(result__) {
                       var tmp7618 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7610 = mobl.ref(result__);
    
    var nodes7934 = $("<span>");
    root9979.append(nodes7934);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7610, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9980 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7935 = $("<span>");
      root9980.append(nodes7935);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 core Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9981 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9981); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7935;
        nodes7935 = node.contents();
        oldNodes.replaceWith(nodes7935);
      }));
      callback(root9980); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7934;
      nodes7934 = node.contents();
      oldNodes.replaceWith(nodes7934);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStar(5, function(result__) {
                       var tmp7617 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7611 = mobl.ref(result__);
    
    var nodes7936 = $("<span>");
    root9979.append(nodes7936);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7611, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9982 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7937 = $("<span>");
      root9982.append(nodes7937);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 further Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9983 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9983); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7937;
        nodes7937 = node.contents();
        oldNodes.replaceWith(nodes7937);
      }));
      callback(root9982); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7936;
      nodes7936 = node.contents();
      oldNodes.replaceWith(nodes7936);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStats(5, function(result__) {
                       var tmp7616 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7612 = mobl.ref(result__);
    
    var nodes7938 = $("<span>");
    root9979.append(nodes7938);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7612, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9984 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7939 = $("<span>");
      root9984.append(nodes7939);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 stats Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9985 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9985); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7939;
        nodes7939 = node.contents();
        oldNodes.replaceWith(nodes7939);
      }));
      callback(root9984); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7938;
      nodes7938 = node.contents();
      oldNodes.replaceWith(nodes7938);
    }));
    callback(root9979); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7933;
    nodes7933 = node.contents();
    oldNodes.replaceWith(nodes7933);
  }));
  var nodes7940 = $("<span>");
  root9976.append(nodes7940);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Core topics</section>"), function(_, callback) {
    var root9986 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9986); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7940;
    nodes7940 = node.contents();
    oldNodes.replaceWith(nodes7940);
  }));
  var nodes7941 = $("<span>");
  root9976.append(nodes7941);
  subs__.addSub((nrichRPG.coreWorkout.addQA)(function(_, callback) {
    var root9987 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9987); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7941;
    nodes7941 = node.contents();
    oldNodes.replaceWith(nodes7941);
  }));
  var nodes7942 = $("<span>");
  root9976.append(nodes7942);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Further topics</section>"), function(_, callback) {
    var root9988 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9988); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7942;
    nodes7942 = node.contents();
    oldNodes.replaceWith(nodes7942);
  }));
  var nodes7943 = $("<span>");
  root9976.append(nodes7943);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root9989 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9989); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7943;
    nodes7943 = node.contents();
    oldNodes.replaceWith(nodes7943);
  }));
  var nodes7944 = $("<span>");
  root9976.append(nodes7944);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Stats topics</section>"), function(_, callback) {
    var root9990 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9990); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7944;
    nodes7944 = node.contents();
    oldNodes.replaceWith(nodes7944);
  }));
  var nodes7945 = $("<span>");
  root9976.append(nodes7945);
  subs__.addSub((nrichRPG.coreWorkout.addQAStats)(function(_, callback) {
    var root9991 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9991); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7945;
    nodes7945 = node.contents();
    oldNodes.replaceWith(nodes7945);
  }));
  callback(root9976); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
};

mathmo.furtherTab = function(elements, callback) {
  var root9992 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7946 = $("<span>");
  root9992.append(nodes7946);
  subs__.addSub((ui.header)(mobl.ref("+Q on *topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9993 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9993); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7946;
    nodes7946 = node.contents();
    oldNodes.replaceWith(nodes7946);
  }));
  var nodes7947 = $("<span>");
  root9992.append(nodes7947);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root9994 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9994); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7947;
    nodes7947 = node.contents();
    oldNodes.replaceWith(nodes7947);
  }));
  callback(root9992); return subs__;
  
  
  return subs__;
};

mathmo.aboutTab = function(elements, callback) {
  var root9995 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7948 = $("<span>");
  root9995.append(nodes7948);
  subs__.addSub((ui.header)(mobl.ref("About Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9996 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9996); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7948;
    nodes7948 = node.contents();
    oldNodes.replaceWith(nodes7948);
  }));
  
  var credits = mobl.ref("\n<div style=\"padding:20px\">\n<h2>\n<img src=\"icon.png\" style=\"width:50px;height:50px\"/>\nMathmo v0.3.3 by the <a href=\"http://nrich.maths.org\">NRICH team</a>, University of Cambridge\n</h2>\n<h3>Help</h3>\nOn the 'My Qs' tab you'll find your current set of Questions (abbr. Qs)<br>\nTouch [Clear] to delete all your current Qs.<br>\n<br>\nOn the 'Add' tab you can add 5 random core, further or stats questions, or choose them singly.\nFurther and Stats sections are at the bottom of the topic list.<br>\n<br>\nWhen a question is displayed, touch [Check Answer] to check working and then\nreply to 'Did you agree?' [Yes] [No]. You may need to do a little more work to see whether your answer is really the same or not.\nThe questions will change colour (red == No/Not answered; green == Yes, black == not checked) so you can track how you are doing.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. It's web address is <a href=\"http://nrich.maths.org/mobl/mathmo/mathmo.html\">http://nrich.maths.org/mobl/mathmo/mathmo.html</a>.\n\n<h3>Credits</h3>\n<p>\nSyllabus hugging ideas: Stephen Hewson\n</p>\n<p>\nQuestion and Answer generators:\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson with contributions from\n<a href=\"http://github.com/naush/mathmo\">Li Hsuan</a>.</p>\n\n<p>\nThe following have also been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n</div>\n");
  var nodes7949 = $("<span>");
  root9995.append(nodes7949);
  subs__.addSub((mobl.html)(credits, function(_, callback) {
    var root9997 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9997); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7949;
    nodes7949 = node.contents();
    oldNodes.replaceWith(nodes7949);
  }));
  callback(root9995); return subs__;
  
  
  return subs__;
};

mathmo.root = function(callback, screenCallback) {
  var root9998 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  mobl.fetchLanguageBundle("english.json", function(result__) {
    var tmp7619 = result__;
    var result__ = [new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)];
    var tmp7613 = mobl.ref(result__);
    subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
      tmp7613.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
      tmp7613.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.aboutTab).addEventListener('change', function() {
      tmp7613.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    
    var nodes7950 = $("<span>");
    root9998.append(nodes7950);
    subs__.addSub((ui.tabSet)(tmp7613, mobl.ref(null), function(_, callback) {
      var root9999 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9999); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7950;
      nodes7950 = node.contents();
      oldNodes.replaceWith(nodes7950);
    }));
    callback(root9998); return subs__;
    
  });
  return subs__;
};
