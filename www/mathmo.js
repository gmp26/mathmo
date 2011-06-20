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
  var root4578 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node921 = $("<span>");
  
  var ref778 = mobl.ref("color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
  if(ref778.get() !== null) {
    node921.attr('style', ref778.get());
    subs__.addSub(ref778.addEventListener('change', function(_, ref, val) {
      node921.attr('style', val);
    }));
    subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
      node921.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
      node921.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    
  }
  subs__.addSub(ref778.rebind());
  
  var result__ = "Q" + number.get() + ". " + qa.get().topic;
  var tmp3574 = mobl.ref(result__);
  subs__.addSub(number.addEventListener('change', function() {
    tmp3574.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp3574.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  
  var nodes3797 = $("<span>");
  node921.append(nodes3797);
  subs__.addSub((mobl.html)(tmp3574, function(_, callback) {
    var root4579 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4579); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3797;
    nodes3797 = node.contents();
    oldNodes.replaceWith(nodes3797);
  }));
  root4578.append(node921);
  callback(root4578); return subs__;
  
  
  return subs__;
};

mathmo.qTab = function(elements, callback) {
  var root4580 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3798 = $("<span>");
  root4580.append(nodes3798);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(null), function(_, callback) {
    var root4581 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.resourceUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3575 = mobl.ref(result__);
    
    var nodes3799 = $("<span>");
    root4581.append(nodes3799);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), tmp3575, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root4582 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4582); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3799;
      nodes3799 = node.contents();
      oldNodes.replaceWith(nodes3799);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.homeUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3576 = mobl.ref(result__);
    
    var nodes3800 = $("<span>");
    root4581.append(nodes3800);
    subs__.addSub((ui.image)(mobl.ref("nrichIcon.png"), mobl.ref(35), mobl.ref(35), tmp3576, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root4583 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4583); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3800;
      nodes3800 = node.contents();
      oldNodes.replaceWith(nodes3800);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp3585 = result__;
                       var result__ = ui.hideCurrent();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3577 = mobl.ref(result__);
    
    var nodes3801 = $("<span>");
    root4581.append(nodes3801);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp3577, function(_, callback) {
      var root4584 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4584); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3801;
      nodes3801 = node.contents();
      oldNodes.replaceWith(nodes3801);
    }));
    callback(root4581); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3798;
    nodes3798 = node.contents();
    oldNodes.replaceWith(nodes3798);
  }));
  var result__ = nrichRPG.questionAnswer.QA.all().order("number", true);
  var tmp3578 = mobl.ref(result__);
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all().order("number", true)).addEventListener('change', function() {
    tmp3578.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
    tmp3578.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
    tmp3578.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  
  var nodes3802 = $("<span>");
  root4580.append(nodes3802);
  subs__.addSub((ui.mMasterDetail)(tmp3578, mobl.ref(mathmo.qaItem), mobl.ref(nrichRPG.coreWorkout.showQA), function(_, callback) {
    var root4585 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4585); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3802;
    nodes3802 = node.contents();
    oldNodes.replaceWith(nodes3802);
  }));
  callback(root4580); return subs__;
  
  
  return subs__;
};

mathmo.coreTab = function(elements, callback) {
  var root4586 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3803 = $("<span>");
  root4586.append(nodes3803);
  subs__.addSub((ui.header)(mobl.ref("Q on topic"), mobl.ref(null), function(_, callback) {
    var root4587 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp3586 = result__;
                       var result__ = ui.hideCurrent();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3579 = mobl.ref(result__);
    
    var nodes3804 = $("<span>");
    root4587.append(nodes3804);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp3579, function(_, callback) {
      var root4588 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4588); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3804;
      nodes3804 = node.contents();
      oldNodes.replaceWith(nodes3804);
    }));
    callback(root4587); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3803;
    nodes3803 = node.contents();
    oldNodes.replaceWith(nodes3803);
  }));
  var nodes3805 = $("<span>");
  root4586.append(nodes3805);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4589 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, 1000, function(result__) {
                       var tmp3589 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3581 = mobl.ref(result__);
    
    var nodes3806 = $("<span>");
    root4589.append(nodes3806);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3581, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4590 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3807 = $("<span>");
      root4590.append(nodes3807);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 core Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4591 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4591); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3807;
        nodes3807 = node.contents();
        oldNodes.replaceWith(nodes3807);
      }));
      callback(root4590); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3806;
      nodes3806 = node.contents();
      oldNodes.replaceWith(nodes3806);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStar(5, function(result__) {
                       var tmp3588 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3582 = mobl.ref(result__);
    
    var nodes3808 = $("<span>");
    root4589.append(nodes3808);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3582, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4592 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3809 = $("<span>");
      root4592.append(nodes3809);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 further Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4593 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4593); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3809;
        nodes3809 = node.contents();
        oldNodes.replaceWith(nodes3809);
      }));
      callback(root4592); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3808;
      nodes3808 = node.contents();
      oldNodes.replaceWith(nodes3808);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStats(5, function(result__) {
                       var tmp3587 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3583 = mobl.ref(result__);
    
    var nodes3810 = $("<span>");
    root4589.append(nodes3810);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3583, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4594 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3811 = $("<span>");
      root4594.append(nodes3811);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 stats Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4595 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4595); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3811;
        nodes3811 = node.contents();
        oldNodes.replaceWith(nodes3811);
      }));
      callback(root4594); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3810;
      nodes3810 = node.contents();
      oldNodes.replaceWith(nodes3810);
    }));
    callback(root4589); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3805;
    nodes3805 = node.contents();
    oldNodes.replaceWith(nodes3805);
  }));
  var nodes3812 = $("<span>");
  root4586.append(nodes3812);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Core topics</section>"), function(_, callback) {
    var root4596 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4596); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3812;
    nodes3812 = node.contents();
    oldNodes.replaceWith(nodes3812);
  }));
  var nodes3813 = $("<span>");
  root4586.append(nodes3813);
  subs__.addSub((nrichRPG.coreWorkout.addQA)(function(_, callback) {
    var root4597 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4597); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3813;
    nodes3813 = node.contents();
    oldNodes.replaceWith(nodes3813);
  }));
  var nodes3814 = $("<span>");
  root4586.append(nodes3814);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Further topics</section>"), function(_, callback) {
    var root4598 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4598); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3814;
    nodes3814 = node.contents();
    oldNodes.replaceWith(nodes3814);
  }));
  var nodes3815 = $("<span>");
  root4586.append(nodes3815);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root4599 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4599); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3815;
    nodes3815 = node.contents();
    oldNodes.replaceWith(nodes3815);
  }));
  var nodes3816 = $("<span>");
  root4586.append(nodes3816);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Stats topics</section>"), function(_, callback) {
    var root4600 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4600); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3816;
    nodes3816 = node.contents();
    oldNodes.replaceWith(nodes3816);
  }));
  var nodes3817 = $("<span>");
  root4586.append(nodes3817);
  subs__.addSub((nrichRPG.coreWorkout.addQAStats)(function(_, callback) {
    var root4601 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4601); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3817;
    nodes3817 = node.contents();
    oldNodes.replaceWith(nodes3817);
  }));
  callback(root4586); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
};

mathmo.furtherTab = function(elements, callback) {
  var root4602 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3818 = $("<span>");
  root4602.append(nodes3818);
  subs__.addSub((ui.header)(mobl.ref("+Q on *topic"), mobl.ref(null), function(_, callback) {
    var root4603 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4603); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3818;
    nodes3818 = node.contents();
    oldNodes.replaceWith(nodes3818);
  }));
  var nodes3819 = $("<span>");
  root4602.append(nodes3819);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root4604 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4604); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3819;
    nodes3819 = node.contents();
    oldNodes.replaceWith(nodes3819);
  }));
  callback(root4602); return subs__;
  
  
  return subs__;
};

mathmo.aboutTab = function(elements, callback) {
  var root4605 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3820 = $("<span>");
  root4605.append(nodes3820);
  subs__.addSub((ui.header)(mobl.ref("About Mathmo"), mobl.ref(null), function(_, callback) {
    var root4606 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4606); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3820;
    nodes3820 = node.contents();
    oldNodes.replaceWith(nodes3820);
  }));
  
  var credits = mobl.ref("\n<div style=\"padding:20px\">\n<h2>\n<img src=\"icon.png\" style=\"width:50px;height:50px\"/>\nMathmo v0.3.2 by the <a href=\"http://nrich.maths.org\">NRICH team</a>, University of Cambridge\n</h2>\n<h3>Help</h3>\nOn the 'My Qs' tab you'll find your current set of Questions (abbr. Qs)<br>\nTouch [Clear] to delete all your current Qs.<br>\n<br>\nOn the 'Add' tab you can add 5 random core, further or stats questions, or choose them singly.\nFurther and Stats sections are at the bottom of the topic list.<br>\n<br>\nWhen a question is displayed, touch [Check Answer] to check working and then\nreply to 'Did you agree?' [Yes] [No]. You may need to do a little more work to see whether your answer is really the same or not.\nThe questions will change colour (red == No/Not answered; green == Yes, black == not checked) so you can track how you are doing.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. It's web address is <a href=\"http://nrich.maths.org/mobl/mathmo/mathmo.html\">http://nrich.maths.org/mobl/mathmo/mathmo.html</a>.\n\n<h3>Credits</h3>\n<p>\nSyllabus hugging ideas: Stephen Hewson\n</p>\n<p>\nQuestion and Answer generators:\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson with contributions from\n<a href=\"http://github.com/naush/mathmo\">Li Hsuan</a>.</p>\n\n<p>\nThe following have also been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n</div>\n");
  var nodes3821 = $("<span>");
  root4605.append(nodes3821);
  subs__.addSub((mobl.html)(credits, function(_, callback) {
    var root4607 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4607); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3821;
    nodes3821 = node.contents();
    oldNodes.replaceWith(nodes3821);
  }));
  callback(root4605); return subs__;
  
  
  return subs__;
};

mathmo.root = function(callback, screenCallback) {
  var root4608 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  mobl.fetchLanguageBundle("english.json", function(result__) {
    var tmp3591 = result__;
    var result__ = [new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)];
    var tmp3584 = mobl.ref(result__);
    subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
      tmp3584.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
      tmp3584.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.aboutTab).addEventListener('change', function() {
      tmp3584.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    
    var nodes3822 = $("<span>");
    root4608.append(nodes3822);
    subs__.addSub((ui.tabSet)(tmp3584, mobl.ref(null), function(_, callback) {
      var root4609 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4609); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3822;
      nodes3822 = node.contents();
      oldNodes.replaceWith(nodes3822);
    }));
    callback(root4608); return subs__;
    
  });
  return subs__;
};
