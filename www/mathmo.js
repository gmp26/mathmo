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
  var root6977 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3021 = $("<span>");
  
  var ref3453 = mobl.ref("color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
  if(ref3453.get() !== null) {
    node3021.attr('style', ref3453.get());
    subs__.addSub(ref3453.addEventListener('change', function(_, ref, val) {
      node3021.attr('style', val);
    }));
    subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
      node3021.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
      node3021.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    
  }
  subs__.addSub(ref3453.rebind());
  
  var result__ = "Q" + number.get() + ". " + qa.get().topic;
  var tmp4171 = mobl.ref(result__);
  subs__.addSub(number.addEventListener('change', function() {
    tmp4171.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp4171.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  
  var nodes4873 = $("<span>");
  node3021.append(nodes4873);
  subs__.addSub((mobl.html)(tmp4171, function(_, callback) {
    var root6978 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6978); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4873;
    nodes4873 = node.contents();
    oldNodes.replaceWith(nodes4873);
  }));
  root6977.append(node3021);
  callback(root6977); return subs__;
  
  
  return subs__;
};

mathmo.qTab = function(elements, callback) {
  var root6979 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4874 = $("<span>");
  root6979.append(nodes4874);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root6980 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.resourceUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp4172 = mobl.ref(result__);
    
    var nodes4875 = $("<span>");
    root6980.append(nodes4875);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), tmp4172, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root6981 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6981); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4875;
      nodes4875 = node.contents();
      oldNodes.replaceWith(nodes4875);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.homeUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp4173 = mobl.ref(result__);
    
    var nodes4876 = $("<span>");
    root6980.append(nodes4876);
    subs__.addSub((ui.image)(mobl.ref("nrichIcon.png"), mobl.ref(35), mobl.ref(35), tmp4173, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root6982 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6982); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4876;
      nodes4876 = node.contents();
      oldNodes.replaceWith(nodes4876);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp4182 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4174 = mobl.ref(result__);
    
    var nodes4877 = $("<span>");
    root6980.append(nodes4877);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp4174, function(_, callback) {
      var root6983 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6983); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4877;
      nodes4877 = node.contents();
      oldNodes.replaceWith(nodes4877);
    }));
    callback(root6980); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4874;
    nodes4874 = node.contents();
    oldNodes.replaceWith(nodes4874);
  }));
  var result__ = nrichRPG.questionAnswer.QA.all().order("number", true);
  var tmp4175 = mobl.ref(result__);
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all().order("number", true)).addEventListener('change', function() {
    tmp4175.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
    tmp4175.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
    tmp4175.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  
  var nodes4878 = $("<span>");
  root6979.append(nodes4878);
  subs__.addSub((ui.mMasterDetail)(tmp4175, mobl.ref(mathmo.qaItem), mobl.ref(nrichRPG.coreWorkout.showQA), function(_, callback) {
    var root6984 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6984); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4878;
    nodes4878 = node.contents();
    oldNodes.replaceWith(nodes4878);
  }));
  callback(root6979); return subs__;
  
  
  return subs__;
};

mathmo.coreTab = function(elements, callback) {
  var root6985 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4879 = $("<span>");
  root6985.append(nodes4879);
  subs__.addSub((ui.header)(mobl.ref("Q on topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root6986 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp4183 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4176 = mobl.ref(result__);
    
    var nodes4880 = $("<span>");
    root6986.append(nodes4880);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp4176, function(_, callback) {
      var root6987 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6987); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4880;
      nodes4880 = node.contents();
      oldNodes.replaceWith(nodes4880);
    }));
    callback(root6986); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4879;
    nodes4879 = node.contents();
    oldNodes.replaceWith(nodes4879);
  }));
  var nodes4881 = $("<span>");
  root6985.append(nodes4881);
  subs__.addSub((ui.group)(function(_, callback) {
    var root6988 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, 1000, function(result__) {
                       var tmp4186 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4177 = mobl.ref(result__);
    
    var nodes4882 = $("<span>");
    root6988.append(nodes4882);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4177, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root6989 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4883 = $("<span>");
      root6989.append(nodes4883);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 core Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root6990 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root6990); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4883;
        nodes4883 = node.contents();
        oldNodes.replaceWith(nodes4883);
      }));
      callback(root6989); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4882;
      nodes4882 = node.contents();
      oldNodes.replaceWith(nodes4882);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStar(5, function(result__) {
                       var tmp4185 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4178 = mobl.ref(result__);
    
    var nodes4884 = $("<span>");
    root6988.append(nodes4884);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4178, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root6991 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4885 = $("<span>");
      root6991.append(nodes4885);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 further Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root6992 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root6992); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4885;
        nodes4885 = node.contents();
        oldNodes.replaceWith(nodes4885);
      }));
      callback(root6991); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4884;
      nodes4884 = node.contents();
      oldNodes.replaceWith(nodes4884);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStats(5, function(result__) {
                       var tmp4184 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4179 = mobl.ref(result__);
    
    var nodes4886 = $("<span>");
    root6988.append(nodes4886);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4179, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root6993 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4887 = $("<span>");
      root6993.append(nodes4887);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 stats Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root6994 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root6994); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4887;
        nodes4887 = node.contents();
        oldNodes.replaceWith(nodes4887);
      }));
      callback(root6993); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4886;
      nodes4886 = node.contents();
      oldNodes.replaceWith(nodes4886);
    }));
    callback(root6988); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4881;
    nodes4881 = node.contents();
    oldNodes.replaceWith(nodes4881);
  }));
  var nodes4888 = $("<span>");
  root6985.append(nodes4888);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Core topics</section>"), function(_, callback) {
    var root6995 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6995); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4888;
    nodes4888 = node.contents();
    oldNodes.replaceWith(nodes4888);
  }));
  var nodes4889 = $("<span>");
  root6985.append(nodes4889);
  subs__.addSub((nrichRPG.coreWorkout.addQA)(function(_, callback) {
    var root6996 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6996); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4889;
    nodes4889 = node.contents();
    oldNodes.replaceWith(nodes4889);
  }));
  var nodes4890 = $("<span>");
  root6985.append(nodes4890);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Further topics</section>"), function(_, callback) {
    var root6997 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6997); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4890;
    nodes4890 = node.contents();
    oldNodes.replaceWith(nodes4890);
  }));
  var nodes4891 = $("<span>");
  root6985.append(nodes4891);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root6998 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6998); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4891;
    nodes4891 = node.contents();
    oldNodes.replaceWith(nodes4891);
  }));
  var nodes4892 = $("<span>");
  root6985.append(nodes4892);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Stats topics</section>"), function(_, callback) {
    var root6999 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6999); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4892;
    nodes4892 = node.contents();
    oldNodes.replaceWith(nodes4892);
  }));
  var nodes4893 = $("<span>");
  root6985.append(nodes4893);
  subs__.addSub((nrichRPG.coreWorkout.addQAStats)(function(_, callback) {
    var root7000 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7000); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4893;
    nodes4893 = node.contents();
    oldNodes.replaceWith(nodes4893);
  }));
  callback(root6985); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
};

mathmo.furtherTab = function(elements, callback) {
  var root7001 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4894 = $("<span>");
  root7001.append(nodes4894);
  subs__.addSub((ui.header)(mobl.ref("+Q on *topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root7002 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7002); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4894;
    nodes4894 = node.contents();
    oldNodes.replaceWith(nodes4894);
  }));
  var nodes4895 = $("<span>");
  root7001.append(nodes4895);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root7003 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7003); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4895;
    nodes4895 = node.contents();
    oldNodes.replaceWith(nodes4895);
  }));
  callback(root7001); return subs__;
  
  
  return subs__;
};

mathmo.aboutTab = function(elements, callback) {
  var root7004 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4896 = $("<span>");
  root7004.append(nodes4896);
  subs__.addSub((ui.header)(mobl.ref("About Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root7005 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7005); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4896;
    nodes4896 = node.contents();
    oldNodes.replaceWith(nodes4896);
  }));
  
  var credits = mobl.ref("\n<div style=\"padding:20px\">\n<h2>\n<img src=\"icon.png\" style=\"width:50px;height:50px\"/>\nMathmo v0.3 by the <a href=\"http://nrich.maths.org\">NRICH team</a>, University of Cambridge\n</h2>\n<h3>Help</h3>\nOn the 'My Qs' tab you'll find your current set of Questions (abbr. Qs)<br>\nTouch [Clear] to delete all your current Qs.<br>\n<br>\nOn the 'Add' tab you can add 5 random core, further or stats questions, or choose them singly.\nFurther and Stats sections are at the bottom of the topic list.<br>\n<br>\nWhen a question is displayed, touch [Check Answer] to check working and then\nreply to 'Did you agree?' [Yes] [No]. You may need to do a little more work to see whether your answer is really the same or not.\nThe questions will change colour (red == No/Not answered; green == Yes, black == not checked) so you can track how you are doing.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. It's web address is <a href=\"http://nrich.maths.org/mobl/mathmo/mathmo.html\">http://nrich.maths.org/mobl/mathmo/mathmo.html</a>.\n\n<h3>Credits</h3>\n<p>\nIdea: Stephen Hewson\n</p>\n<p>\n<a href=\"http://nrich.maths.org/public/titlesearch.php?search=interactive%20workout\">Desktop Implementation:</a>\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson\n</p>\n\n<p>\nThe following have been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n</div>\n");
  var nodes4897 = $("<span>");
  root7004.append(nodes4897);
  subs__.addSub((mobl.html)(credits, function(_, callback) {
    var root7006 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7006); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4897;
    nodes4897 = node.contents();
    oldNodes.replaceWith(nodes4897);
  }));
  callback(root7004); return subs__;
  
  
  return subs__;
};

mathmo.root = function(callback, screenCallback) {
  var root7007 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  mobl.fetchLanguageBundle("english.json", function(result__) {
    var tmp4187 = result__;
    var result__ = [new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)];
    var tmp4181 = mobl.ref(result__);
    subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
      tmp4181.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
      tmp4181.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.aboutTab).addEventListener('change', function() {
      tmp4181.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    
    var nodes4898 = $("<span>");
    root7007.append(nodes4898);
    subs__.addSub((ui.tabSet)(tmp4181, mobl.ref(null), function(_, callback) {
      var root7008 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7008); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4898;
      nodes4898 = node.contents();
      oldNodes.replaceWith(nodes4898);
    }));
    callback(root7007); return subs__;
    
  });
  return subs__;
};
