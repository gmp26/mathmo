mobl.provides('mathmo');
mobl.provides('nrichRPG');
mobl.provides('mobl');
mobl.provides('nrichRPG.questionAnswer');
mobl.provides('nrichRPG.coreWorkout');
mobl.provides('ui');
mobl.provides('mathmo');
persistence.debug = false;mathmo.homeUrl = mobl.ref("http://nrich.maths.org");
mathmo.resourceUrl = mobl.ref("http://nrich.maths.org/7088");

mathmo.qaItem = function(qa, number, elements, callback) {
  var root0 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node0 = $("<span>");
  
  var ref0 = mobl.ref("color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
  if(ref0.get() !== null) {
    node0.attr('style', ref0.get());
    subs__.addSub(ref0.addEventListener('change', function(_, ref, val) {
      node0.attr('style', val);
    }));
    subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
      node0.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
      node0.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    
  }
  subs__.addSub(ref0.rebind());
  
  var result__ = "Q" + number.get() + ". " + qa.get().topic;
  var tmp0 = mobl.ref(result__);
  subs__.addSub(number.addEventListener('change', function() {
    tmp0.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp0.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  
  var nodes0 = $("<span>");
  node0.append(nodes0);
  subs__.addSub((mobl.html)(tmp0, function(_, callback) {
    var root1 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes0;
    nodes0 = node.contents();
    oldNodes.replaceWith(nodes0);
  }));
  root0.append(node0);
  callback(root0); return subs__;
  
  
  return subs__;
};

mathmo.qTab = function(elements, callback) {
  var root2 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1 = $("<span>");
  root2.append(nodes1);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.resourceUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1 = mobl.ref(result__);
    
    var nodes2 = $("<span>");
    root3.append(nodes2);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), tmp1, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root4 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2;
      nodes2 = node.contents();
      oldNodes.replaceWith(nodes2);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.homeUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp2 = mobl.ref(result__);
    
    var nodes3 = $("<span>");
    root3.append(nodes3);
    subs__.addSub((ui.image)(mobl.ref("nrichIcon.png"), mobl.ref(35), mobl.ref(35), tmp2, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root5 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3;
      nodes3 = node.contents();
      oldNodes.replaceWith(nodes3);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp11 = result__;
                       var result__ = ui.hideCurrent();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3 = mobl.ref(result__);
    
    var nodes4 = $("<span>");
    root3.append(nodes4);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp3, function(_, callback) {
      var root6 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4;
      nodes4 = node.contents();
      oldNodes.replaceWith(nodes4);
    }));
    callback(root3); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1;
    nodes1 = node.contents();
    oldNodes.replaceWith(nodes1);
  }));
  var result__ = nrichRPG.questionAnswer.QA.all().order("number", true);
  var tmp4 = mobl.ref(result__);
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all().order("number", true)).addEventListener('change', function() {
    tmp4.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
    tmp4.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
    tmp4.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  
  var nodes5 = $("<span>");
  root2.append(nodes5);
  subs__.addSub((ui.mMasterDetail)(tmp4, mobl.ref(mathmo.qaItem), mobl.ref(nrichRPG.coreWorkout.showQA), function(_, callback) {
    var root7 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5;
    nodes5 = node.contents();
    oldNodes.replaceWith(nodes5);
  }));
  callback(root2); return subs__;
  
  
  return subs__;
};

mathmo.coreTab = function(elements, callback) {
  var root8 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6 = $("<span>");
  root8.append(nodes6);
  subs__.addSub((ui.header)(mobl.ref("Q on topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp12 = result__;
                       var result__ = ui.hideCurrent();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5 = mobl.ref(result__);
    
    var nodes7 = $("<span>");
    root9.append(nodes7);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp5, function(_, callback) {
      var root10 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7;
      nodes7 = node.contents();
      oldNodes.replaceWith(nodes7);
    }));
    callback(root9); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6;
    nodes6 = node.contents();
    oldNodes.replaceWith(nodes6);
  }));
  var nodes8 = $("<span>");
  root8.append(nodes8);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, 1000, function(result__) {
                       var tmp15 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6 = mobl.ref(result__);
    
    var nodes9 = $("<span>");
    root11.append(nodes9);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root12 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10 = $("<span>");
      root12.append(nodes10);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 core Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root13 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root13); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10;
        nodes10 = node.contents();
        oldNodes.replaceWith(nodes10);
      }));
      callback(root12); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9;
      nodes9 = node.contents();
      oldNodes.replaceWith(nodes9);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStar(5, function(result__) {
                       var tmp14 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7 = mobl.ref(result__);
    
    var nodes11 = $("<span>");
    root11.append(nodes11);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes12 = $("<span>");
      root14.append(nodes12);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 further Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes12;
        nodes12 = node.contents();
        oldNodes.replaceWith(nodes12);
      }));
      callback(root14); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes11;
      nodes11 = node.contents();
      oldNodes.replaceWith(nodes11);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStats(5, function(result__) {
                       var tmp13 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp8 = mobl.ref(result__);
    
    var nodes13 = $("<span>");
    root11.append(nodes13);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14 = $("<span>");
      root16.append(nodes14);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 stats Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root17 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root17); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14;
        nodes14 = node.contents();
        oldNodes.replaceWith(nodes14);
      }));
      callback(root16); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13;
      nodes13 = node.contents();
      oldNodes.replaceWith(nodes13);
    }));
    callback(root11); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8;
    nodes8 = node.contents();
    oldNodes.replaceWith(nodes8);
  }));
  var nodes15 = $("<span>");
  root8.append(nodes15);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Core topics</section>"), function(_, callback) {
    var root18 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root18); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes15;
    nodes15 = node.contents();
    oldNodes.replaceWith(nodes15);
  }));
  var nodes16 = $("<span>");
  root8.append(nodes16);
  subs__.addSub((nrichRPG.coreWorkout.addQA)(function(_, callback) {
    var root19 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root19); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes16;
    nodes16 = node.contents();
    oldNodes.replaceWith(nodes16);
  }));
  var nodes17 = $("<span>");
  root8.append(nodes17);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Further topics</section>"), function(_, callback) {
    var root20 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root20); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes17;
    nodes17 = node.contents();
    oldNodes.replaceWith(nodes17);
  }));
  var nodes18 = $("<span>");
  root8.append(nodes18);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root21 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root21); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes18;
    nodes18 = node.contents();
    oldNodes.replaceWith(nodes18);
  }));
  var nodes19 = $("<span>");
  root8.append(nodes19);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Stats topics</section>"), function(_, callback) {
    var root22 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root22); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes19;
    nodes19 = node.contents();
    oldNodes.replaceWith(nodes19);
  }));
  var nodes20 = $("<span>");
  root8.append(nodes20);
  subs__.addSub((nrichRPG.coreWorkout.addQAStats)(function(_, callback) {
    var root23 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root23); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes20;
    nodes20 = node.contents();
    oldNodes.replaceWith(nodes20);
  }));
  callback(root8); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
};

mathmo.furtherTab = function(elements, callback) {
  var root24 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes21 = $("<span>");
  root24.append(nodes21);
  subs__.addSub((ui.header)(mobl.ref("+Q on *topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root25 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root25); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes21;
    nodes21 = node.contents();
    oldNodes.replaceWith(nodes21);
  }));
  var nodes22 = $("<span>");
  root24.append(nodes22);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root26 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root26); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes22;
    nodes22 = node.contents();
    oldNodes.replaceWith(nodes22);
  }));
  callback(root24); return subs__;
  
  
  return subs__;
};

mathmo.aboutTab = function(elements, callback) {
  var root27 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes23 = $("<span>");
  root27.append(nodes23);
  subs__.addSub((ui.header)(mobl.ref("About Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root28 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root28); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes23;
    nodes23 = node.contents();
    oldNodes.replaceWith(nodes23);
  }));
  
  var credits = mobl.ref("\n<div style=\"padding:20px\">\n<h2>\n<img src=\"icon.png\" style=\"width:50px;height:50px\"/>\nMathmo v0.3.3 by the <a href=\"http://nrich.maths.org\">NRICH team</a>, University of Cambridge\n</h2>\n<h3>Help</h3>\nOn the 'My Qs' tab you'll find your current set of Questions (abbr. Qs)<br>\nTouch [Clear] to delete all your current Qs.<br>\n<br>\nOn the 'Add' tab you can add 5 random core, further or stats questions, or choose them singly.\nFurther and Stats sections are at the bottom of the topic list.<br>\n<br>\nWhen a question is displayed, touch [Check Answer] to check working and then\nreply to 'Did you agree?' [Yes] [No]. You may need to do a little more work to see whether your answer is really the same or not.\nThe questions will change colour (red == No/Not answered; green == Yes, black == not checked) so you can track how you are doing.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. It's web address is <a href=\"http://nrich.maths.org/mobl/mathmo/mathmo.html\">http://nrich.maths.org/mobl/mathmo/mathmo.html</a>.\n\n<h3>Credits</h3>\n<p>\nSyllabus hugging ideas: Stephen Hewson\n</p>\n<p>\nQuestion and Answer generators:\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson with contributions from\n<a href=\"http://github.com/naush/mathmo\">Li Hsuan</a>.</p>\n\n<p>\nThe following have also been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n</div>\n");
  var nodes24 = $("<span>");
  root27.append(nodes24);
  subs__.addSub((mobl.html)(credits, function(_, callback) {
    var root29 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root29); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes24;
    nodes24 = node.contents();
    oldNodes.replaceWith(nodes24);
  }));
  callback(root27); return subs__;
  
  
  return subs__;
};

mathmo.root = function(callback, screenCallback) {
  var root30 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  mobl.fetchLanguageBundle("english.json", function(result__) {
    var tmp16 = result__;
    nrichRPG.questionAnswer.QA.all().count(function(result__) {
      var tmp18 = result__;
      var result__ = tmp18 == 0;
      var tmp17 = result__;
      var result__ = tmp17;
      if(result__) {
        {
          nrichRPG.coreWorkout.randomQ(5, 1000, function(result__) {
            var tmp19 = result__;
            var result__ = [new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)];
            var tmp9 = mobl.ref(result__);
            subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
              tmp9.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
            }));
            subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
              tmp9.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
            }));
            subs__.addSub(mobl.ref(mathmo.aboutTab).addEventListener('change', function() {
              tmp9.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
            }));
            
            var nodes25 = $("<span>");
            root30.append(nodes25);
            subs__.addSub((ui.tabSet)(tmp9, mobl.ref(null), function(_, callback) {
              var root31 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root31); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes25;
              nodes25 = node.contents();
              oldNodes.replaceWith(nodes25);
            }));
            callback(root30); return subs__;
            
          });
        }
      } else {
        {
          var result__ = [new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)];
          var tmp9 = mobl.ref(result__);
          subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
            tmp9.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
          }));
          subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
            tmp9.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
          }));
          subs__.addSub(mobl.ref(mathmo.aboutTab).addEventListener('change', function() {
            tmp9.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
          }));
          
          var nodes25 = $("<span>");
          root30.append(nodes25);
          subs__.addSub((ui.tabSet)(tmp9, mobl.ref(null), function(_, callback) {
            var root31 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root31); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes25;
            nodes25 = node.contents();
            oldNodes.replaceWith(nodes25);
          }));
          callback(root30); return subs__;
          
        }
      }
    });
  });
  return subs__;
};
