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
  var root2939 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node977 = $("<span>");
  
  var ref1364 = mobl.ref("color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
  if(ref1364.get() !== null) {
    node977.attr('style', ref1364.get());
    subs__.addSub(ref1364.addEventListener('change', function(_, ref, val) {
      node977.attr('style', val);
    }));
    subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
      node977.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
      node977.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    
  }
  subs__.addSub(ref1364.rebind());
  
  var result__ = "Q" + qa.get().number + ". " + qa.get().topic;
  var tmp2107 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
    tmp2107.set("Q" + qa.get().number + ". " + qa.get().topic);
  }));
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp2107.set("Q" + qa.get().number + ". " + qa.get().topic);
  }));
  
  var nodes2116 = $("<span>");
  node977.append(nodes2116);
  subs__.addSub((mobl.html)(tmp2107, function(_, callback) {
    var root2940 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2940); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2116;
    nodes2116 = node.contents();
    oldNodes.replaceWith(nodes2116);
  }));
  root2939.append(node977);
  callback(root2939); return subs__;
  
  
  return subs__;
};

mathmo.qTab = function(elements, callback) {
  var root2941 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2117 = $("<span>");
  root2941.append(nodes2117);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2942 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.resourceUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2108 = mobl.ref(result__);
    
    var nodes2118 = $("<span>");
    root2942.append(nodes2118);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), tmp2108, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root2943 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2943); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2118;
      nodes2118 = node.contents();
      oldNodes.replaceWith(nodes2118);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.homeUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2109 = mobl.ref(result__);
    
    var nodes2119 = $("<span>");
    root2942.append(nodes2119);
    subs__.addSub((ui.image)(mobl.ref("nrichIcon.png"), mobl.ref(35), mobl.ref(35), tmp2109, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root2944 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2944); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2119;
      nodes2119 = node.contents();
      oldNodes.replaceWith(nodes2119);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp2117 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2110 = mobl.ref(result__);
    
    var nodes2120 = $("<span>");
    root2942.append(nodes2120);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp2110, function(_, callback) {
      var root2945 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2945); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2120;
      nodes2120 = node.contents();
      oldNodes.replaceWith(nodes2120);
    }));
    callback(root2942); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2117;
    nodes2117 = node.contents();
    oldNodes.replaceWith(nodes2117);
  }));
  var result__ = nrichRPG.questionAnswer.QA.all().order("number", true);
  var tmp2111 = mobl.ref(result__);
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all().order("number", true)).addEventListener('change', function() {
    tmp2111.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
    tmp2111.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
    tmp2111.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  
  var nodes2121 = $("<span>");
  root2941.append(nodes2121);
  subs__.addSub((ui.masterDetail)(tmp2111, mobl.ref(mathmo.qaItem), mobl.ref(nrichRPG.coreWorkout.showQA), function(_, callback) {
    var root2946 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2946); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2121;
    nodes2121 = node.contents();
    oldNodes.replaceWith(nodes2121);
  }));
  callback(root2941); return subs__;
  
  
  return subs__;
};

mathmo.coreTab = function(elements, callback) {
  var root2947 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2122 = $("<span>");
  root2947.append(nodes2122);
  subs__.addSub((ui.header)(mobl.ref("Q on topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2948 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp2118 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2112 = mobl.ref(result__);
    
    var nodes2123 = $("<span>");
    root2948.append(nodes2123);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp2112, function(_, callback) {
      var root2949 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2949); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2123;
      nodes2123 = node.contents();
      oldNodes.replaceWith(nodes2123);
    }));
    callback(root2948); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2122;
    nodes2122 = node.contents();
    oldNodes.replaceWith(nodes2122);
  }));
  var nodes2124 = $("<span>");
  root2947.append(nodes2124);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2950 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, 1000, function(result__) {
                       var tmp2121 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2113 = mobl.ref(result__);
    
    var nodes2125 = $("<span>");
    root2950.append(nodes2125);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2113, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2951 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2126 = $("<span>");
      root2951.append(nodes2126);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 core Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2952 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2952); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2126;
        nodes2126 = node.contents();
        oldNodes.replaceWith(nodes2126);
      }));
      callback(root2951); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2125;
      nodes2125 = node.contents();
      oldNodes.replaceWith(nodes2125);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStar(5, function(result__) {
                       var tmp2120 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2114 = mobl.ref(result__);
    
    var nodes2127 = $("<span>");
    root2950.append(nodes2127);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2114, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2953 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2128 = $("<span>");
      root2953.append(nodes2128);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 further Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2954 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2954); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2128;
        nodes2128 = node.contents();
        oldNodes.replaceWith(nodes2128);
      }));
      callback(root2953); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2127;
      nodes2127 = node.contents();
      oldNodes.replaceWith(nodes2127);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStats(5, function(result__) {
                       var tmp2119 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2115 = mobl.ref(result__);
    
    var nodes2129 = $("<span>");
    root2950.append(nodes2129);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2115, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2955 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2130 = $("<span>");
      root2955.append(nodes2130);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 stats Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2956 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2956); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2130;
        nodes2130 = node.contents();
        oldNodes.replaceWith(nodes2130);
      }));
      callback(root2955); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2129;
      nodes2129 = node.contents();
      oldNodes.replaceWith(nodes2129);
    }));
    callback(root2950); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2124;
    nodes2124 = node.contents();
    oldNodes.replaceWith(nodes2124);
  }));
  var nodes2131 = $("<span>");
  root2947.append(nodes2131);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Core topics</section>"), function(_, callback) {
    var root2957 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2957); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2131;
    nodes2131 = node.contents();
    oldNodes.replaceWith(nodes2131);
  }));
  var nodes2132 = $("<span>");
  root2947.append(nodes2132);
  subs__.addSub((nrichRPG.coreWorkout.addQA)(function(_, callback) {
    var root2958 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2958); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2132;
    nodes2132 = node.contents();
    oldNodes.replaceWith(nodes2132);
  }));
  var nodes2133 = $("<span>");
  root2947.append(nodes2133);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Further topics</section>"), function(_, callback) {
    var root2959 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2959); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2133;
    nodes2133 = node.contents();
    oldNodes.replaceWith(nodes2133);
  }));
  var nodes2134 = $("<span>");
  root2947.append(nodes2134);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root2960 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2960); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2134;
    nodes2134 = node.contents();
    oldNodes.replaceWith(nodes2134);
  }));
  var nodes2135 = $("<span>");
  root2947.append(nodes2135);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Stats topics</section>"), function(_, callback) {
    var root2961 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2961); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2135;
    nodes2135 = node.contents();
    oldNodes.replaceWith(nodes2135);
  }));
  var nodes2136 = $("<span>");
  root2947.append(nodes2136);
  subs__.addSub((nrichRPG.coreWorkout.addQAStats)(function(_, callback) {
    var root2962 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2962); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2136;
    nodes2136 = node.contents();
    oldNodes.replaceWith(nodes2136);
  }));
  callback(root2947); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
};

mathmo.furtherTab = function(elements, callback) {
  var root2963 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2137 = $("<span>");
  root2963.append(nodes2137);
  subs__.addSub((ui.header)(mobl.ref("+Q on *topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2964 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2964); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2137;
    nodes2137 = node.contents();
    oldNodes.replaceWith(nodes2137);
  }));
  var nodes2138 = $("<span>");
  root2963.append(nodes2138);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root2965 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2965); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2138;
    nodes2138 = node.contents();
    oldNodes.replaceWith(nodes2138);
  }));
  callback(root2963); return subs__;
  
  
  return subs__;
};

mathmo.aboutTab = function(elements, callback) {
  var root2966 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2139 = $("<span>");
  root2966.append(nodes2139);
  subs__.addSub((ui.header)(mobl.ref("About Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2967 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2967); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2139;
    nodes2139 = node.contents();
    oldNodes.replaceWith(nodes2139);
  }));
  
  var credits = mobl.ref("\n<div style=\"padding:20px\">\n<h2>\n<img src=\"icon.png\" style=\"width:50px;height:50px\"/>\nMathmo v0.3 by the <a href=\"http://nrich.maths.org\">NRICH team</a>, University of Cambridge\n</h2>\n<h3>Help</h3>\nOn the 'My Qs' tab you'll find your current set of Questions (abbr. Qs)<br>\nTouch [Clear] to delete all your current Qs.<br>\n<br>\nOn the 'Add' tab you can add 5 random core, further or stats questions, or choose them singly.\nFurther and Stats sections are at the bottom of the topic list.<br>\n<br>\nWhen a question is displayed, touch [Check Answer] to check working and then\nreply to 'Did you agree?' [Yes] [No]. You may need to do a little more work to see whether your answer is really the same or not.\nThe questions will change colour (red == No/Not answered; green == Yes, black == not checked) so you can track how you are doing.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. It's web address is <a href=\"http://nrich.maths.org/mobl/mathmo/mathmo.html\">http://nrich.maths.org/mobl/mathmo/mathmo.html</a>.\n\n<h3>Credits</h3>\n<p>\nIdea: Stephen Hewson\n</p>\n<p>\n<a href=\"http://nrich.maths.org/public/titlesearch.php?search=interactive%20workout\">Desktop Implementation:</a>\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson\n</p>\n\n<p>\nThe following have been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n</div>\n");
  var nodes2140 = $("<span>");
  root2966.append(nodes2140);
  subs__.addSub((mobl.html)(credits, function(_, callback) {
    var root2968 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2968); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2140;
    nodes2140 = node.contents();
    oldNodes.replaceWith(nodes2140);
  }));
  callback(root2966); return subs__;
  
  
  return subs__;
};

mathmo.root = function(callback, screenCallback) {
  var root2969 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  mobl.fetchLanguageBundle("english.json", function(result__) {
    var tmp2122 = result__;
    var result__ = [new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)];
    var tmp2116 = mobl.ref(result__);
    subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
      tmp2116.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
      tmp2116.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.aboutTab).addEventListener('change', function() {
      tmp2116.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    
    var nodes2141 = $("<span>");
    root2969.append(nodes2141);
    subs__.addSub((ui.tabSet)(tmp2116, mobl.ref(null), function(_, callback) {
      var root2970 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2970); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2141;
      nodes2141 = node.contents();
      oldNodes.replaceWith(nodes2141);
    }));
    callback(root2969); return subs__;
    
  });
  return subs__;
};
