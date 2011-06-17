mobl.provides('nrichRPG.coreWorkout');
mobl.provides('mobl.ui');
mobl.provides('plot');
mobl.provides('mathJAX');
mobl.provides('ui');
mobl.provides('nrichRPG.questionAnswer');
mobl.provides('nrichRPG.coreWorkout');
mobl.provides('mobl');
mobl.provides('nrichRPG');
nrichRPG.coreWorkout.helpStyle = 'nrichRPG__coreWorkout__helpStyle';
nrichRPG.coreWorkout.deleteStyle = 'nrichRPG__coreWorkout__deleteStyle';
nrichRPG.coreWorkout.headerLogo = 'nrichRPG__coreWorkout__headerLogo';
nrichRPG.coreWorkout.qCount = mobl.ref(0);
nrichRPG.coreWorkout.tickCount = mobl.ref(0);
nrichRPG.coreWorkout.updateCounts = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().count(function(result__) {
    var tmp2025 = result__;
    var result__ = tmp2025;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp2026 = result__;
      var result__ = tmp2026;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp2027 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll286) {
    coll286 = coll286.reverse();
    function processOne40() {
      var i;
      i = coll286.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp2028 = result__;
        
        if(coll286.length > 0) processOne40(); else rest40();
        
      });
    }
    function rest40() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll286.length > 0) processOne40(); else rest40();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll287) {
    coll287 = coll287.reverse();
    function processOne41() {
      var i;
      i = coll287.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp2029 = result__;
          
          if(coll287.length > 0) processOne41(); else rest41();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp2029 = result__;
            
            if(coll287.length > 0) processOne41(); else rest41();
            
          });
        }
      }
    }
    function rest41() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll287.length > 0) processOne41(); else rest41();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll288) {
    coll288 = coll288.reverse();
    function processOne42() {
      var i;
      i = coll288.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp2030 = result__;
        
        if(coll288.length > 0) processOne42(); else rest42();
        
      });
    }
    function rest42() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll288.length > 0) processOne42(); else rest42();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root2754 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1945 = $("<span>");
  root2754.append(nodes1945);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2755 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2038 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1932 = mobl.ref(result__);
    
    var nodes1946 = $("<span>");
    root2755.append(nodes1946);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1932, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2756 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1947 = $("<span>");
      root2756.append(nodes1947);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2757 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2757); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1947;
        nodes1947 = node.contents();
        oldNodes.replaceWith(nodes1947);
      }));
      callback(root2756); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1946;
      nodes1946 = node.contents();
      oldNodes.replaceWith(nodes1946);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2037 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1933 = mobl.ref(result__);
    
    var nodes1948 = $("<span>");
    root2755.append(nodes1948);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1933, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2758 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1949 = $("<span>");
      root2758.append(nodes1949);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2759 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2759); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1949;
        nodes1949 = node.contents();
        oldNodes.replaceWith(nodes1949);
      }));
      callback(root2758); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1948;
      nodes1948 = node.contents();
      oldNodes.replaceWith(nodes1948);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2036 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1934 = mobl.ref(result__);
    
    var nodes1950 = $("<span>");
    root2755.append(nodes1950);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1934, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2760 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1951 = $("<span>");
      root2760.append(nodes1951);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2761 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2761); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1951;
        nodes1951 = node.contents();
        oldNodes.replaceWith(nodes1951);
      }));
      callback(root2760); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1950;
      nodes1950 = node.contents();
      oldNodes.replaceWith(nodes1950);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2035 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1935 = mobl.ref(result__);
    
    var nodes1952 = $("<span>");
    root2755.append(nodes1952);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1935, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2762 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1953 = $("<span>");
      root2762.append(nodes1953);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2763 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2763); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1953;
        nodes1953 = node.contents();
        oldNodes.replaceWith(nodes1953);
      }));
      callback(root2762); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1952;
      nodes1952 = node.contents();
      oldNodes.replaceWith(nodes1952);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2034 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1936 = mobl.ref(result__);
    
    var nodes1954 = $("<span>");
    root2755.append(nodes1954);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1936, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2764 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1955 = $("<span>");
      root2764.append(nodes1955);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2765 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2765); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1955;
        nodes1955 = node.contents();
        oldNodes.replaceWith(nodes1955);
      }));
      callback(root2764); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1954;
      nodes1954 = node.contents();
      oldNodes.replaceWith(nodes1954);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2033 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1937 = mobl.ref(result__);
    
    var nodes1956 = $("<span>");
    root2755.append(nodes1956);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1937, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2766 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1957 = $("<span>");
      root2766.append(nodes1957);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2767 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2767); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1957;
        nodes1957 = node.contents();
        oldNodes.replaceWith(nodes1957);
      }));
      callback(root2766); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1956;
      nodes1956 = node.contents();
      oldNodes.replaceWith(nodes1956);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2032 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1938 = mobl.ref(result__);
    
    var nodes1958 = $("<span>");
    root2755.append(nodes1958);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1938, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2768 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1959 = $("<span>");
      root2768.append(nodes1959);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2769 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2769); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1959;
        nodes1959 = node.contents();
        oldNodes.replaceWith(nodes1959);
      }));
      callback(root2768); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1958;
      nodes1958 = node.contents();
      oldNodes.replaceWith(nodes1958);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp2031 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1939 = mobl.ref(result__);
    
    var nodes1960 = $("<span>");
    root2755.append(nodes1960);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1939, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2770 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1961 = $("<span>");
      root2770.append(nodes1961);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2771 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2771); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1961;
        nodes1961 = node.contents();
        oldNodes.replaceWith(nodes1961);
      }));
      callback(root2770); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1960;
      nodes1960 = node.contents();
      oldNodes.replaceWith(nodes1960);
    }));
    callback(root2755); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1945;
    nodes1945 = node.contents();
    oldNodes.replaceWith(nodes1945);
  }));
  callback(root2754); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root2772 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes1962 = $("<span>");
  root2772.append(nodes1962);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2773 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1941 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1940 = mobl.ref(result__);
    
    var nodes1963 = $("<span>");
    root2773.append(nodes1963);
    subs__.addSub((ui.backButton)(tmp1940, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1941, function(_, callback) {
      var root2774 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2774); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1963;
      nodes1963 = node.contents();
      oldNodes.replaceWith(nodes1963);
    }));
    callback(root2773); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1962;
    nodes1962 = node.contents();
    oldNodes.replaceWith(nodes1962);
  }));
  var nodes1964 = $("<span>");
  root2772.append(nodes1964);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2775 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp2046 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1942 = mobl.ref(result__);
    
    var nodes1965 = $("<span>");
    root2775.append(nodes1965);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1942, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2776 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1966 = $("<span>");
      root2776.append(nodes1966);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2777 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2777); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1966;
        nodes1966 = node.contents();
        oldNodes.replaceWith(nodes1966);
      }));
      callback(root2776); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1965;
      nodes1965 = node.contents();
      oldNodes.replaceWith(nodes1965);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp2045 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1943 = mobl.ref(result__);
    
    var nodes1967 = $("<span>");
    root2775.append(nodes1967);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1943, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2778 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1968 = $("<span>");
      root2778.append(nodes1968);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2779 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2779); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1968;
        nodes1968 = node.contents();
        oldNodes.replaceWith(nodes1968);
      }));
      callback(root2778); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1967;
      nodes1967 = node.contents();
      oldNodes.replaceWith(nodes1967);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp2044 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1944 = mobl.ref(result__);
    
    var nodes1969 = $("<span>");
    root2775.append(nodes1969);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1944, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2780 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1970 = $("<span>");
      root2780.append(nodes1970);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2781 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2781); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1970;
        nodes1970 = node.contents();
        oldNodes.replaceWith(nodes1970);
      }));
      callback(root2780); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1969;
      nodes1969 = node.contents();
      oldNodes.replaceWith(nodes1969);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp2043 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1945 = mobl.ref(result__);
    
    var nodes1971 = $("<span>");
    root2775.append(nodes1971);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1945, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2782 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1972 = $("<span>");
      root2782.append(nodes1972);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2783 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2783); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1972;
        nodes1972 = node.contents();
        oldNodes.replaceWith(nodes1972);
      }));
      callback(root2782); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1971;
      nodes1971 = node.contents();
      oldNodes.replaceWith(nodes1971);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp2042 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1946 = mobl.ref(result__);
    
    var nodes1973 = $("<span>");
    root2775.append(nodes1973);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1946, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2784 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1974 = $("<span>");
      root2784.append(nodes1974);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2785 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2785); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1974;
        nodes1974 = node.contents();
        oldNodes.replaceWith(nodes1974);
      }));
      callback(root2784); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1973;
      nodes1973 = node.contents();
      oldNodes.replaceWith(nodes1973);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp2041 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1947 = mobl.ref(result__);
    
    var nodes1975 = $("<span>");
    root2775.append(nodes1975);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1947, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2786 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1976 = $("<span>");
      root2786.append(nodes1976);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2787 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2787); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1976;
        nodes1976 = node.contents();
        oldNodes.replaceWith(nodes1976);
      }));
      callback(root2786); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1975;
      nodes1975 = node.contents();
      oldNodes.replaceWith(nodes1975);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp2040 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1948 = mobl.ref(result__);
    
    var nodes1977 = $("<span>");
    root2775.append(nodes1977);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1948, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2788 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1978 = $("<span>");
      root2788.append(nodes1978);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2789 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2789); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1978;
        nodes1978 = node.contents();
        oldNodes.replaceWith(nodes1978);
      }));
      callback(root2788); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1977;
      nodes1977 = node.contents();
      oldNodes.replaceWith(nodes1977);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp2039 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1949 = mobl.ref(result__);
    
    var nodes1979 = $("<span>");
    root2775.append(nodes1979);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1949, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2790 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1980 = $("<span>");
      root2790.append(nodes1980);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2791 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2791); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1980;
        nodes1980 = node.contents();
        oldNodes.replaceWith(nodes1980);
      }));
      callback(root2790); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1979;
      nodes1979 = node.contents();
      oldNodes.replaceWith(nodes1979);
    }));
    callback(root2775); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1964;
    nodes1964 = node.contents();
    oldNodes.replaceWith(nodes1964);
  }));
  callback(root2772); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root2792 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1981 = $("<span>");
  root2792.append(nodes1981);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2793 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1951 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1950 = mobl.ref(result__);
    
    var nodes1982 = $("<span>");
    root2793.append(nodes1982);
    subs__.addSub((ui.backButton)(tmp1950, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1951, function(_, callback) {
      var root2794 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2794); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1982;
      nodes1982 = node.contents();
      oldNodes.replaceWith(nodes1982);
    }));
    callback(root2793); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1981;
    nodes1981 = node.contents();
    oldNodes.replaceWith(nodes1981);
  }));
  var nodes1983 = $("<span>");
  root2792.append(nodes1983);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2795 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp2051 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1952 = mobl.ref(result__);
    
    var nodes1984 = $("<span>");
    root2795.append(nodes1984);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1952, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2796 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1985 = $("<span>");
      root2796.append(nodes1985);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2797 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2797); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1985;
        nodes1985 = node.contents();
        oldNodes.replaceWith(nodes1985);
      }));
      callback(root2796); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1984;
      nodes1984 = node.contents();
      oldNodes.replaceWith(nodes1984);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp2050 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1953 = mobl.ref(result__);
    
    var nodes1986 = $("<span>");
    root2795.append(nodes1986);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1953, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2798 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1987 = $("<span>");
      root2798.append(nodes1987);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2799 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2799); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1987;
        nodes1987 = node.contents();
        oldNodes.replaceWith(nodes1987);
      }));
      callback(root2798); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1986;
      nodes1986 = node.contents();
      oldNodes.replaceWith(nodes1986);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp2049 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1954 = mobl.ref(result__);
    
    var nodes1988 = $("<span>");
    root2795.append(nodes1988);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1954, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2800 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1989 = $("<span>");
      root2800.append(nodes1989);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2801 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2801); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1989;
        nodes1989 = node.contents();
        oldNodes.replaceWith(nodes1989);
      }));
      callback(root2800); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1988;
      nodes1988 = node.contents();
      oldNodes.replaceWith(nodes1988);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp2048 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1955 = mobl.ref(result__);
    
    var nodes1990 = $("<span>");
    root2795.append(nodes1990);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1955, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2802 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1991 = $("<span>");
      root2802.append(nodes1991);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2803 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2803); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1991;
        nodes1991 = node.contents();
        oldNodes.replaceWith(nodes1991);
      }));
      callback(root2802); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1990;
      nodes1990 = node.contents();
      oldNodes.replaceWith(nodes1990);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp2047 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1956 = mobl.ref(result__);
    
    var nodes1992 = $("<span>");
    root2795.append(nodes1992);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1956, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2804 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1993 = $("<span>");
      root2804.append(nodes1993);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2805 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2805); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1993;
        nodes1993 = node.contents();
        oldNodes.replaceWith(nodes1993);
      }));
      callback(root2804); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1992;
      nodes1992 = node.contents();
      oldNodes.replaceWith(nodes1992);
    }));
    callback(root2795); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1983;
    nodes1983 = node.contents();
    oldNodes.replaceWith(nodes1983);
  }));
  callback(root2792); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root2806 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1994 = $("<span>");
  root2806.append(nodes1994);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2807 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1958 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1957 = mobl.ref(result__);
    
    var nodes1995 = $("<span>");
    root2807.append(nodes1995);
    subs__.addSub((ui.backButton)(tmp1957, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1958, function(_, callback) {
      var root2808 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2808); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1995;
      nodes1995 = node.contents();
      oldNodes.replaceWith(nodes1995);
    }));
    callback(root2807); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1994;
    nodes1994 = node.contents();
    oldNodes.replaceWith(nodes1994);
  }));
  var nodes1996 = $("<span>");
  root2806.append(nodes1996);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2809 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp2054 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1959 = mobl.ref(result__);
    
    var nodes1997 = $("<span>");
    root2809.append(nodes1997);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1959, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2810 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1998 = $("<span>");
      root2810.append(nodes1998);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2811 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2811); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1998;
        nodes1998 = node.contents();
        oldNodes.replaceWith(nodes1998);
      }));
      callback(root2810); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1997;
      nodes1997 = node.contents();
      oldNodes.replaceWith(nodes1997);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp2053 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1960 = mobl.ref(result__);
    
    var nodes1999 = $("<span>");
    root2809.append(nodes1999);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1960, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2812 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2000 = $("<span>");
      root2812.append(nodes2000);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2813 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2813); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2000;
        nodes2000 = node.contents();
        oldNodes.replaceWith(nodes2000);
      }));
      callback(root2812); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1999;
      nodes1999 = node.contents();
      oldNodes.replaceWith(nodes1999);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp2052 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1961 = mobl.ref(result__);
    
    var nodes2001 = $("<span>");
    root2809.append(nodes2001);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1961, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2814 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2002 = $("<span>");
      root2814.append(nodes2002);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2815 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2815); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2002;
        nodes2002 = node.contents();
        oldNodes.replaceWith(nodes2002);
      }));
      callback(root2814); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2001;
      nodes2001 = node.contents();
      oldNodes.replaceWith(nodes2001);
    }));
    callback(root2809); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1996;
    nodes1996 = node.contents();
    oldNodes.replaceWith(nodes1996);
  }));
  callback(root2806); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root2816 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2003 = $("<span>");
  root2816.append(nodes2003);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2817 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1963 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1962 = mobl.ref(result__);
    
    var nodes2004 = $("<span>");
    root2817.append(nodes2004);
    subs__.addSub((ui.backButton)(tmp1962, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1963, function(_, callback) {
      var root2818 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2818); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2004;
      nodes2004 = node.contents();
      oldNodes.replaceWith(nodes2004);
    }));
    callback(root2817); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2003;
    nodes2003 = node.contents();
    oldNodes.replaceWith(nodes2003);
  }));
  var nodes2005 = $("<span>");
  root2816.append(nodes2005);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2819 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp2058 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1964 = mobl.ref(result__);
    
    var nodes2006 = $("<span>");
    root2819.append(nodes2006);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1964, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2820 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2007 = $("<span>");
      root2820.append(nodes2007);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2821 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2821); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2007;
        nodes2007 = node.contents();
        oldNodes.replaceWith(nodes2007);
      }));
      callback(root2820); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2006;
      nodes2006 = node.contents();
      oldNodes.replaceWith(nodes2006);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp2057 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1965 = mobl.ref(result__);
    
    var nodes2008 = $("<span>");
    root2819.append(nodes2008);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1965, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2822 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2009 = $("<span>");
      root2822.append(nodes2009);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2823 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2823); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2009;
        nodes2009 = node.contents();
        oldNodes.replaceWith(nodes2009);
      }));
      callback(root2822); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2008;
      nodes2008 = node.contents();
      oldNodes.replaceWith(nodes2008);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp2056 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1966 = mobl.ref(result__);
    
    var nodes2010 = $("<span>");
    root2819.append(nodes2010);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1966, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2824 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2011 = $("<span>");
      root2824.append(nodes2011);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2825 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2825); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2011;
        nodes2011 = node.contents();
        oldNodes.replaceWith(nodes2011);
      }));
      callback(root2824); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2010;
      nodes2010 = node.contents();
      oldNodes.replaceWith(nodes2010);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp2055 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1967 = mobl.ref(result__);
    
    var nodes2012 = $("<span>");
    root2819.append(nodes2012);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1967, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2826 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2013 = $("<span>");
      root2826.append(nodes2013);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2827 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2827); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2013;
        nodes2013 = node.contents();
        oldNodes.replaceWith(nodes2013);
      }));
      callback(root2826); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2012;
      nodes2012 = node.contents();
      oldNodes.replaceWith(nodes2012);
    }));
    callback(root2819); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2005;
    nodes2005 = node.contents();
    oldNodes.replaceWith(nodes2005);
  }));
  callback(root2816); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root2828 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2014 = $("<span>");
  root2828.append(nodes2014);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2829 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1969 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1968 = mobl.ref(result__);
    
    var nodes2015 = $("<span>");
    root2829.append(nodes2015);
    subs__.addSub((ui.backButton)(tmp1968, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1969, function(_, callback) {
      var root2830 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2830); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2015;
      nodes2015 = node.contents();
      oldNodes.replaceWith(nodes2015);
    }));
    callback(root2829); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2014;
    nodes2014 = node.contents();
    oldNodes.replaceWith(nodes2014);
  }));
  var nodes2016 = $("<span>");
  root2828.append(nodes2016);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2831 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp2060 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1970 = mobl.ref(result__);
    
    var nodes2017 = $("<span>");
    root2831.append(nodes2017);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1970, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2832 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2018 = $("<span>");
      root2832.append(nodes2018);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2833 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2833); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2018;
        nodes2018 = node.contents();
        oldNodes.replaceWith(nodes2018);
      }));
      callback(root2832); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2017;
      nodes2017 = node.contents();
      oldNodes.replaceWith(nodes2017);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp2059 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1971 = mobl.ref(result__);
    
    var nodes2019 = $("<span>");
    root2831.append(nodes2019);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1971, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2834 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2020 = $("<span>");
      root2834.append(nodes2020);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2835 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2835); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2020;
        nodes2020 = node.contents();
        oldNodes.replaceWith(nodes2020);
      }));
      callback(root2834); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2019;
      nodes2019 = node.contents();
      oldNodes.replaceWith(nodes2019);
    }));
    callback(root2831); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2016;
    nodes2016 = node.contents();
    oldNodes.replaceWith(nodes2016);
  }));
  callback(root2828); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root2836 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2021 = $("<span>");
  root2836.append(nodes2021);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2837 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1973 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1972 = mobl.ref(result__);
    
    var nodes2022 = $("<span>");
    root2837.append(nodes2022);
    subs__.addSub((ui.backButton)(tmp1972, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1973, function(_, callback) {
      var root2838 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2838); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2022;
      nodes2022 = node.contents();
      oldNodes.replaceWith(nodes2022);
    }));
    callback(root2837); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2021;
    nodes2021 = node.contents();
    oldNodes.replaceWith(nodes2021);
  }));
  var nodes2023 = $("<span>");
  root2836.append(nodes2023);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2839 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp2065 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1974 = mobl.ref(result__);
    
    var nodes2024 = $("<span>");
    root2839.append(nodes2024);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1974, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2840 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2025 = $("<span>");
      root2840.append(nodes2025);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2841 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2841); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2025;
        nodes2025 = node.contents();
        oldNodes.replaceWith(nodes2025);
      }));
      callback(root2840); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2024;
      nodes2024 = node.contents();
      oldNodes.replaceWith(nodes2024);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp2064 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1975 = mobl.ref(result__);
    
    var nodes2026 = $("<span>");
    root2839.append(nodes2026);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1975, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2842 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2027 = $("<span>");
      root2842.append(nodes2027);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2843 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2843); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2027;
        nodes2027 = node.contents();
        oldNodes.replaceWith(nodes2027);
      }));
      callback(root2842); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2026;
      nodes2026 = node.contents();
      oldNodes.replaceWith(nodes2026);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp2063 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1976 = mobl.ref(result__);
    
    var nodes2028 = $("<span>");
    root2839.append(nodes2028);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1976, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2844 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2029 = $("<span>");
      root2844.append(nodes2029);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2845 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2845); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2029;
        nodes2029 = node.contents();
        oldNodes.replaceWith(nodes2029);
      }));
      callback(root2844); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2028;
      nodes2028 = node.contents();
      oldNodes.replaceWith(nodes2028);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp2062 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1977 = mobl.ref(result__);
    
    var nodes2030 = $("<span>");
    root2839.append(nodes2030);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1977, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2846 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2031 = $("<span>");
      root2846.append(nodes2031);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2847 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2847); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2031;
        nodes2031 = node.contents();
        oldNodes.replaceWith(nodes2031);
      }));
      callback(root2846); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2030;
      nodes2030 = node.contents();
      oldNodes.replaceWith(nodes2030);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp2061 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1978 = mobl.ref(result__);
    
    var nodes2032 = $("<span>");
    root2839.append(nodes2032);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1978, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2848 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2033 = $("<span>");
      root2848.append(nodes2033);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2849 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2849); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2033;
        nodes2033 = node.contents();
        oldNodes.replaceWith(nodes2033);
      }));
      callback(root2848); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2032;
      nodes2032 = node.contents();
      oldNodes.replaceWith(nodes2032);
    }));
    callback(root2839); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2023;
    nodes2023 = node.contents();
    oldNodes.replaceWith(nodes2023);
  }));
  callback(root2836); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root2850 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2034 = $("<span>");
  root2850.append(nodes2034);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2851 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1980 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1979 = mobl.ref(result__);
    
    var nodes2035 = $("<span>");
    root2851.append(nodes2035);
    subs__.addSub((ui.backButton)(tmp1979, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1980, function(_, callback) {
      var root2852 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2852); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2035;
      nodes2035 = node.contents();
      oldNodes.replaceWith(nodes2035);
    }));
    callback(root2851); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2034;
    nodes2034 = node.contents();
    oldNodes.replaceWith(nodes2034);
  }));
  var nodes2036 = $("<span>");
  root2850.append(nodes2036);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2853 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp2068 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1981 = mobl.ref(result__);
    
    var nodes2037 = $("<span>");
    root2853.append(nodes2037);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1981, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2854 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2038 = $("<span>");
      root2854.append(nodes2038);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2855 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2855); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2038;
        nodes2038 = node.contents();
        oldNodes.replaceWith(nodes2038);
      }));
      callback(root2854); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2037;
      nodes2037 = node.contents();
      oldNodes.replaceWith(nodes2037);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp2067 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1982 = mobl.ref(result__);
    
    var nodes2039 = $("<span>");
    root2853.append(nodes2039);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1982, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2856 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2040 = $("<span>");
      root2856.append(nodes2040);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2857 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2857); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2040;
        nodes2040 = node.contents();
        oldNodes.replaceWith(nodes2040);
      }));
      callback(root2856); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2039;
      nodes2039 = node.contents();
      oldNodes.replaceWith(nodes2039);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp2066 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1983 = mobl.ref(result__);
    
    var nodes2041 = $("<span>");
    root2853.append(nodes2041);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1983, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2858 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2042 = $("<span>");
      root2858.append(nodes2042);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2859 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2859); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2042;
        nodes2042 = node.contents();
        oldNodes.replaceWith(nodes2042);
      }));
      callback(root2858); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2041;
      nodes2041 = node.contents();
      oldNodes.replaceWith(nodes2041);
    }));
    callback(root2853); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2036;
    nodes2036 = node.contents();
    oldNodes.replaceWith(nodes2036);
  }));
  callback(root2850); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root2860 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2043 = $("<span>");
  root2860.append(nodes2043);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2861 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1985 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1984 = mobl.ref(result__);
    
    var nodes2044 = $("<span>");
    root2861.append(nodes2044);
    subs__.addSub((ui.backButton)(tmp1984, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1985, function(_, callback) {
      var root2862 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2862); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2044;
      nodes2044 = node.contents();
      oldNodes.replaceWith(nodes2044);
    }));
    callback(root2861); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2043;
    nodes2043 = node.contents();
    oldNodes.replaceWith(nodes2043);
  }));
  var nodes2045 = $("<span>");
  root2860.append(nodes2045);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2863 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp2069 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1986 = mobl.ref(result__);
    
    var nodes2046 = $("<span>");
    root2863.append(nodes2046);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1986, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2864 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2047 = $("<span>");
      root2864.append(nodes2047);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2865 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2865); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2047;
        nodes2047 = node.contents();
        oldNodes.replaceWith(nodes2047);
      }));
      callback(root2864); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2046;
      nodes2046 = node.contents();
      oldNodes.replaceWith(nodes2046);
    }));
    callback(root2863); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2045;
    nodes2045 = node.contents();
    oldNodes.replaceWith(nodes2045);
  }));
  callback(root2860); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root2866 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2048 = $("<span>");
  root2866.append(nodes2048);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2867 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp2082 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1987 = mobl.ref(result__);
    
    var nodes2049 = $("<span>");
    root2867.append(nodes2049);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1987, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2868 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2050 = $("<span>");
      root2868.append(nodes2050);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2869 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2869); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2050;
        nodes2050 = node.contents();
        oldNodes.replaceWith(nodes2050);
      }));
      callback(root2868); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2049;
      nodes2049 = node.contents();
      oldNodes.replaceWith(nodes2049);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp2081 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1988 = mobl.ref(result__);
    
    var nodes2051 = $("<span>");
    root2867.append(nodes2051);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1988, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2870 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2052 = $("<span>");
      root2870.append(nodes2052);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2871 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2871); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2052;
        nodes2052 = node.contents();
        oldNodes.replaceWith(nodes2052);
      }));
      callback(root2870); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2051;
      nodes2051 = node.contents();
      oldNodes.replaceWith(nodes2051);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp2080 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1989 = mobl.ref(result__);
    
    var nodes2053 = $("<span>");
    root2867.append(nodes2053);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1989, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2872 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2054 = $("<span>");
      root2872.append(nodes2054);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2873 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2873); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2054;
        nodes2054 = node.contents();
        oldNodes.replaceWith(nodes2054);
      }));
      callback(root2872); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2053;
      nodes2053 = node.contents();
      oldNodes.replaceWith(nodes2053);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp2079 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1990 = mobl.ref(result__);
    
    var nodes2055 = $("<span>");
    root2867.append(nodes2055);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1990, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2874 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2056 = $("<span>");
      root2874.append(nodes2056);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2875 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2875); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2056;
        nodes2056 = node.contents();
        oldNodes.replaceWith(nodes2056);
      }));
      callback(root2874); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2055;
      nodes2055 = node.contents();
      oldNodes.replaceWith(nodes2055);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp2078 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1991 = mobl.ref(result__);
    
    var nodes2057 = $("<span>");
    root2867.append(nodes2057);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1991, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2876 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2058 = $("<span>");
      root2876.append(nodes2058);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2877 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2877); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2058;
        nodes2058 = node.contents();
        oldNodes.replaceWith(nodes2058);
      }));
      callback(root2876); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2057;
      nodes2057 = node.contents();
      oldNodes.replaceWith(nodes2057);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp2077 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1992 = mobl.ref(result__);
    
    var nodes2059 = $("<span>");
    root2867.append(nodes2059);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1992, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2878 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2060 = $("<span>");
      root2878.append(nodes2060);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2879 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2879); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2060;
        nodes2060 = node.contents();
        oldNodes.replaceWith(nodes2060);
      }));
      callback(root2878); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2059;
      nodes2059 = node.contents();
      oldNodes.replaceWith(nodes2059);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp2076 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1993 = mobl.ref(result__);
    
    var nodes2061 = $("<span>");
    root2867.append(nodes2061);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1993, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2880 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2062 = $("<span>");
      root2880.append(nodes2062);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2881 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2881); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2062;
        nodes2062 = node.contents();
        oldNodes.replaceWith(nodes2062);
      }));
      callback(root2880); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2061;
      nodes2061 = node.contents();
      oldNodes.replaceWith(nodes2061);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp2075 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1994 = mobl.ref(result__);
    
    var nodes2063 = $("<span>");
    root2867.append(nodes2063);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1994, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2882 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2064 = $("<span>");
      root2882.append(nodes2064);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2883 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2883); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2064;
        nodes2064 = node.contents();
        oldNodes.replaceWith(nodes2064);
      }));
      callback(root2882); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2063;
      nodes2063 = node.contents();
      oldNodes.replaceWith(nodes2063);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp2074 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1995 = mobl.ref(result__);
    
    var nodes2065 = $("<span>");
    root2867.append(nodes2065);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1995, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2884 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2066 = $("<span>");
      root2884.append(nodes2066);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2885 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2885); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2066;
        nodes2066 = node.contents();
        oldNodes.replaceWith(nodes2066);
      }));
      callback(root2884); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2065;
      nodes2065 = node.contents();
      oldNodes.replaceWith(nodes2065);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp2073 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1996 = mobl.ref(result__);
    
    var nodes2067 = $("<span>");
    root2867.append(nodes2067);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1996, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2886 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2068 = $("<span>");
      root2886.append(nodes2068);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2887 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2887); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2068;
        nodes2068 = node.contents();
        oldNodes.replaceWith(nodes2068);
      }));
      callback(root2886); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2067;
      nodes2067 = node.contents();
      oldNodes.replaceWith(nodes2067);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp2072 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1997 = mobl.ref(result__);
    
    var nodes2069 = $("<span>");
    root2867.append(nodes2069);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1997, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2888 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2070 = $("<span>");
      root2888.append(nodes2070);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2889 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2889); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2070;
        nodes2070 = node.contents();
        oldNodes.replaceWith(nodes2070);
      }));
      callback(root2888); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2069;
      nodes2069 = node.contents();
      oldNodes.replaceWith(nodes2069);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp2071 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1998 = mobl.ref(result__);
    
    var nodes2071 = $("<span>");
    root2867.append(nodes2071);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1998, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2890 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2072 = $("<span>");
      root2890.append(nodes2072);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2891 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2891); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2072;
        nodes2072 = node.contents();
        oldNodes.replaceWith(nodes2072);
      }));
      callback(root2890); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2071;
      nodes2071 = node.contents();
      oldNodes.replaceWith(nodes2071);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp2070 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1999 = mobl.ref(result__);
    
    var nodes2073 = $("<span>");
    root2867.append(nodes2073);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1999, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2892 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2074 = $("<span>");
      root2892.append(nodes2074);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2893 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2893); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2074;
        nodes2074 = node.contents();
        oldNodes.replaceWith(nodes2074);
      }));
      callback(root2892); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2073;
      nodes2073 = node.contents();
      oldNodes.replaceWith(nodes2073);
    }));
    callback(root2867); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2048;
    nodes2048 = node.contents();
    oldNodes.replaceWith(nodes2048);
  }));
  callback(root2866); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root2894 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2075 = $("<span>");
  root2894.append(nodes2075);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2895 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp2088 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2000 = mobl.ref(result__);
    
    var nodes2076 = $("<span>");
    root2895.append(nodes2076);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2000, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2896 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2077 = $("<span>");
      root2896.append(nodes2077);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2897 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2897); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2077;
        nodes2077 = node.contents();
        oldNodes.replaceWith(nodes2077);
      }));
      callback(root2896); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2076;
      nodes2076 = node.contents();
      oldNodes.replaceWith(nodes2076);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp2087 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2001 = mobl.ref(result__);
    
    var nodes2078 = $("<span>");
    root2895.append(nodes2078);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2001, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2898 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2079 = $("<span>");
      root2898.append(nodes2079);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2899 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2899); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2079;
        nodes2079 = node.contents();
        oldNodes.replaceWith(nodes2079);
      }));
      callback(root2898); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2078;
      nodes2078 = node.contents();
      oldNodes.replaceWith(nodes2078);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp2086 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2002 = mobl.ref(result__);
    
    var nodes2080 = $("<span>");
    root2895.append(nodes2080);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2002, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2900 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2081 = $("<span>");
      root2900.append(nodes2081);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2901 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2901); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2081;
        nodes2081 = node.contents();
        oldNodes.replaceWith(nodes2081);
      }));
      callback(root2900); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2080;
      nodes2080 = node.contents();
      oldNodes.replaceWith(nodes2080);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp2085 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2003 = mobl.ref(result__);
    
    var nodes2082 = $("<span>");
    root2895.append(nodes2082);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2003, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2902 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2083 = $("<span>");
      root2902.append(nodes2083);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2903 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2903); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2083;
        nodes2083 = node.contents();
        oldNodes.replaceWith(nodes2083);
      }));
      callback(root2902); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2082;
      nodes2082 = node.contents();
      oldNodes.replaceWith(nodes2082);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp2084 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2004 = mobl.ref(result__);
    
    var nodes2084 = $("<span>");
    root2895.append(nodes2084);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2004, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2904 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2085 = $("<span>");
      root2904.append(nodes2085);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2905 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2905); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2085;
        nodes2085 = node.contents();
        oldNodes.replaceWith(nodes2085);
      }));
      callback(root2904); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2084;
      nodes2084 = node.contents();
      oldNodes.replaceWith(nodes2084);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp2083 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2005 = mobl.ref(result__);
    
    var nodes2086 = $("<span>");
    root2895.append(nodes2086);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2005, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2906 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2087 = $("<span>");
      root2906.append(nodes2087);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2907 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2907); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2087;
        nodes2087 = node.contents();
        oldNodes.replaceWith(nodes2087);
      }));
      callback(root2906); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2086;
      nodes2086 = node.contents();
      oldNodes.replaceWith(nodes2086);
    }));
    callback(root2895); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2075;
    nodes2075 = node.contents();
    oldNodes.replaceWith(nodes2075);
  }));
  callback(root2894); return subs__;
  
  return subs__;
};
nrichRPG.coreWorkout.questionStyle = 'nrichRPG__coreWorkout__questionStyle';
nrichRPG.coreWorkout.answerStyle = 'nrichRPG__coreWorkout__answerStyle';
nrichRPG.coreWorkout.agreeStyle = 'nrichRPG__coreWorkout__agreeStyle';
nrichRPG.coreWorkout.disagreeStyle = 'nrichRPG__coreWorkout__disagreeStyle';
nrichRPG.coreWorkout.plotStyle = 'nrichRPG__coreWorkout__plotStyle';
nrichRPG.coreWorkout.topicLabelStyle = 'nrichRPG__coreWorkout__topicLabelStyle';
nrichRPG.coreWorkout.panelHeaderStyle = 'nrichRPG__coreWorkout__panelHeaderStyle';
nrichRPG.coreWorkout.panelHeaderContainerStyle = 'nrichRPG__coreWorkout__panelHeaderContainerStyle';
nrichRPG.coreWorkout.panelHeaderTextStyle = 'nrichRPG__coreWorkout__panelHeaderTextStyle';

nrichRPG.coreWorkout.panelHeader = function(text, onclick, elements, callback) {
  var root2908 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node966 = $("<div>");
  
  var ref1363 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref1363.get() !== null) {
    node966.attr('class', ref1363.get());
    subs__.addSub(ref1363.addEventListener('change', function(_, ref, val) {
      node966.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1363.rebind());
  
  var val785 = onclick.get();
  if(val785 !== null) {
    subs__.addSub(mobl.domBind(node966, 'tap', val785));
  }
  
  
  var node967 = $("<div>");
  
  var ref1362 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref1362.get() !== null) {
    node967.attr('class', ref1362.get());
    subs__.addSub(ref1362.addEventListener('change', function(_, ref, val) {
      node967.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1362.rebind());
  
  
  var node968 = $("<div>");
  
  var ref1360 = text;
  node968.text(""+ref1360.get());
  var ignore290 = false;
  subs__.addSub(ref1360.addEventListener('change', function(_, ref, val) {
    if(ignore290) return;
    node968.text(""+val);
  }));
  subs__.addSub(ref1360.rebind());
  
  
  var ref1361 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref1361.get() !== null) {
    node968.attr('class', ref1361.get());
    subs__.addSub(ref1361.addEventListener('change', function(_, ref, val) {
      node968.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1361.rebind());
  
  node967.append(node968);
  node966.append(node967);
  var nodes2088 = $("<span>");
  node966.append(nodes2088);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl369();
  }));
  
  function renderControl369() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2909 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2909); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2088;
      nodes2088 = node.contents();
      oldNodes.replaceWith(nodes2088);
    }));
  }
  renderControl369();
  root2908.append(node966);
  callback(root2908); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mobl.sleep(100, function(result__) {
    var tmp2089 = result__;
    mathJAX.renderMaths(function(result__) {
      var tmp2090 = result__;
      var result__ = qa.done && qa.answer == "%GRAPH%";
      if(result__) {
        var result__ = mobl.JSON.parse(qa.plotData);
        var jsonData = result__;
        var result__ = plot.lineChart("corePlotArea", jsonData);
        var result__ = "";
        if(callback && callback.apply) callback(result__);
        return;
        if(callback && callback.apply) callback(); return;
      } else {
        {
          var result__ = "";
          if(callback && callback.apply) callback(result__);
          return;
          if(callback && callback.apply) callback(); return;
        }
      }
    });
  });
};


nrichRPG.coreWorkout.answerBlock = function(qa, elements, callback) {
  var root2910 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node969 = $("<span>");
  root2910.append(node969);
  var condSubs194 = new mobl.CompSubscription();
  subs__.addSub(condSubs194);
  var oldValue194;
  var renderCond194 = function() {
    var value352 = qa.get().correct;
    if(oldValue194 === value352) return;
    oldValue194 = value352;
    var subs__ = condSubs194;
    subs__.unsubscribe();
    node969.empty();
    if(value352) {
      var nodes2089 = $("<span>");
      node969.append(nodes2089);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.agreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2911 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp2009 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp2009.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node970 = $("<span>");
        root2911.append(node970);
        var condSubs195 = new mobl.CompSubscription();
        subs__.addSub(condSubs195);
        var oldValue195;
        var renderCond195 = function() {
          var value353 = tmp2009.get();
          if(oldValue195 === value353) return;
          oldValue195 = value353;
          var subs__ = condSubs195;
          subs__.unsubscribe();
          node970.empty();
          if(value353) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp2006 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp2006.set("A" + qa.get().number + ". ");
            }));
            
            var nodes2090 = $("<span>");
            node970.append(nodes2090);
            subs__.addSub((mobl.label)(tmp2006, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root2912 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2912); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes2090;
              nodes2090 = node.contents();
              oldNodes.replaceWith(nodes2090);
            }));
            var nodes2091 = $("<span>");
            node970.append(nodes2091);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root2913 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2913); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes2091;
              nodes2091 = node.contents();
              oldNodes.replaceWith(nodes2091);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp2007 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp2007.set("A" + qa.get().number + ". ");
            }));
            
            var nodes2092 = $("<span>");
            node970.append(nodes2092);
            subs__.addSub((mobl.label)(tmp2007, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root2914 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2914); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes2092;
              nodes2092 = node.contents();
              oldNodes.replaceWith(nodes2092);
            }));
            var nodes2093 = $("<span>");
            node970.append(nodes2093);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root2915 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2915); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes2093;
              nodes2093 = node.contents();
              oldNodes.replaceWith(nodes2093);
            }));
            
            var node971 = $("<span>");
            node971.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp2092 = result__;
              var tmp2008 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp2091 = result__;
                  var result__ = tmp2091;
                  tmp2008.set(result__);
                  
                });
              }));
              
              var nodes2094 = $("<span>");
              node971.append(nodes2094);
              subs__.addSub((mobl.html)(tmp2008, function(_, callback) {
                var root2916 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2916); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2094;
                nodes2094 = node.contents();
                oldNodes.replaceWith(nodes2094);
              }));
              node970.append(node971);
              
              
            });
            
            
            
          }
        };
        renderCond195();
        subs__.addSub(tmp2009.addEventListener('change', function() {
          renderCond195();
        }));
        
        callback(root2911); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2089;
        nodes2089 = node.contents();
        oldNodes.replaceWith(nodes2089);
      }));
      
      
    } else {
      var nodes2095 = $("<span>");
      node969.append(nodes2095);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.disagreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2917 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp2013 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp2013.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node972 = $("<span>");
        root2917.append(node972);
        var condSubs196 = new mobl.CompSubscription();
        subs__.addSub(condSubs196);
        var oldValue196;
        var renderCond196 = function() {
          var value354 = tmp2013.get();
          if(oldValue196 === value354) return;
          oldValue196 = value354;
          var subs__ = condSubs196;
          subs__.unsubscribe();
          node972.empty();
          if(value354) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp2010 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp2010.set("A" + qa.get().number + ". ");
            }));
            
            var nodes2096 = $("<span>");
            node972.append(nodes2096);
            subs__.addSub((mobl.label)(tmp2010, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root2918 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2918); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes2096;
              nodes2096 = node.contents();
              oldNodes.replaceWith(nodes2096);
            }));
            var nodes2097 = $("<span>");
            node972.append(nodes2097);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root2919 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2919); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes2097;
              nodes2097 = node.contents();
              oldNodes.replaceWith(nodes2097);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp2011 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp2011.set("A" + qa.get().number + ". ");
            }));
            
            var nodes2098 = $("<span>");
            node972.append(nodes2098);
            subs__.addSub((mobl.label)(tmp2011, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root2920 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2920); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes2098;
              nodes2098 = node.contents();
              oldNodes.replaceWith(nodes2098);
            }));
            var nodes2099 = $("<span>");
            node972.append(nodes2099);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root2921 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2921); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes2099;
              nodes2099 = node.contents();
              oldNodes.replaceWith(nodes2099);
            }));
            
            var node973 = $("<span>");
            node973.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp2094 = result__;
              var tmp2012 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp2093 = result__;
                  var result__ = tmp2093;
                  tmp2012.set(result__);
                  
                });
              }));
              
              var nodes2100 = $("<span>");
              node973.append(nodes2100);
              subs__.addSub((mobl.html)(tmp2012, function(_, callback) {
                var root2922 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2922); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2100;
                nodes2100 = node.contents();
                oldNodes.replaceWith(nodes2100);
              }));
              node972.append(node973);
              
              
            });
            
            
            
          }
        };
        renderCond196();
        subs__.addSub(tmp2013.addEventListener('change', function() {
          renderCond196();
        }));
        
        callback(root2917); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2095;
        nodes2095 = node.contents();
        oldNodes.replaceWith(nodes2095);
      }));
      
      
    }
  };
  renderCond194();
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    renderCond194();
  }));
  
  var nodes2101 = $("<span>");
  root2910.append(nodes2101);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root2923 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node974 = $("<span>");
    node974.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp2096 = result__;
      var tmp2014 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp2095 = result__;
          var result__ = tmp2095;
          tmp2014.set(result__);
          
        });
      }));
      
      var nodes2105 = $("<span>");
      node974.append(nodes2105);
      subs__.addSub((mobl.html)(tmp2014, function(_, callback) {
        var root2927 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2927); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2105;
        nodes2105 = node.contents();
        oldNodes.replaceWith(nodes2105);
      }));
      root2923.append(node974);
      var nodes2102 = $("<span>");
      root2923.append(nodes2102);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2924 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2924); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2102;
        nodes2102 = node.contents();
        oldNodes.replaceWith(nodes2102);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp2015 = mobl.ref(result__);
      
      var nodes2103 = $("<span>");
      root2923.append(nodes2103);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp2015, function(_, callback) {
        var root2925 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2925); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2103;
        nodes2103 = node.contents();
        oldNodes.replaceWith(nodes2103);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp2016 = mobl.ref(result__);
      
      var nodes2104 = $("<span>");
      root2923.append(nodes2104);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp2016, function(_, callback) {
        var root2926 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2926); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2104;
        nodes2104 = node.contents();
        oldNodes.replaceWith(nodes2104);
      }));
      callback(root2923); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2101;
    nodes2101 = node.contents();
    oldNodes.replaceWith(nodes2101);
  }));
  callback(root2910); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp2097 = result__;
    var result__ = tmp2097;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp2098 = result__;
        var result__ = tmp2098;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = qa2;
        if(callback && callback.apply) callback(result__);
        return;
        if(callback && callback.apply) callback(); return;
      });
    } else {
      {
        var result__ = qa2;
        if(callback && callback.apply) callback(result__);
        return;
        if(callback && callback.apply) callback(); return;
      }
    }
  });
};


nrichRPG.coreWorkout.showQA = function(qa, elements, callback) {
  var root2928 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp2106 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp2019 = mobl.ref(result__);
  
  var result__ = qa.get().topic.toLowerCase();
  var tmp2018 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp2018.set(qa.get().topic.toLowerCase());
  }));
  
  var nodes2106 = $("<span>");
  root2928.append(nodes2106);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(tmp2018, tmp2019, function(_, callback) {
    var root2929 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp2099 = result__;
                       var result__ = tmp2099;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp2100 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp2017 = mobl.ref(result__);
    
    var nodes2107 = $("<span>");
    root2929.append(nodes2107);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp2017, function(_, callback) {
      var root2930 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2930); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2107;
      nodes2107 = node.contents();
      oldNodes.replaceWith(nodes2107);
    }));
    callback(root2929); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2106;
    nodes2106 = node.contents();
    oldNodes.replaceWith(nodes2106);
  }));
  var nodes2108 = $("<span>");
  root2928.append(nodes2108);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2931 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp2105 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2022 = mobl.ref(result__);
    
    var nodes2109 = $("<span>");
    root2931.append(nodes2109);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp2022, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root2932 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + qa.get().number + ". " + qa.get().question;
      var tmp2020 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
        tmp2020.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp2020.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      
      var nodes2110 = $("<span>");
      root2932.append(nodes2110);
      subs__.addSub((mobl.html)(tmp2020, function(_, callback) {
        var root2933 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2933); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2110;
        nodes2110 = node.contents();
        oldNodes.replaceWith(nodes2110);
      }));
      
      var node975 = $("<span>");
      node975.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp2102 = result__;
        var tmp2021 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp2101 = result__;
            var result__ = tmp2101;
            tmp2021.set(result__);
            
          });
        }));
        
        var nodes2111 = $("<span>");
        node975.append(nodes2111);
        subs__.addSub((mobl.html)(tmp2021, function(_, callback) {
          var root2934 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2934); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2111;
          nodes2111 = node.contents();
          oldNodes.replaceWith(nodes2111);
        }));
        root2932.append(node975);
        callback(root2932); return subs__;
        
      });
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2109;
      nodes2109 = node.contents();
      oldNodes.replaceWith(nodes2109);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp2104 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2024 = mobl.ref(result__);
    
    var nodes2112 = $("<span>");
    root2931.append(nodes2112);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2024, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root2935 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2113 = $("<span>");
      root2935.append(nodes2113);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2936 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp2103 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp2023 = mobl.ref(result__);
        
        var nodes2114 = $("<span>");
        root2936.append(nodes2114);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp2023, function(_, callback) {
          var root2937 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2937); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2114;
          nodes2114 = node.contents();
          oldNodes.replaceWith(nodes2114);
        }));
        callback(root2936); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2113;
        nodes2113 = node.contents();
        oldNodes.replaceWith(nodes2113);
      }));
      
      var node976 = $("<span>");
      root2935.append(node976);
      var condSubs197 = new mobl.CompSubscription();
      subs__.addSub(condSubs197);
      var oldValue197;
      var renderCond197 = function() {
        var value355 = qa.get().done;
        if(oldValue197 === value355) return;
        oldValue197 = value355;
        var subs__ = condSubs197;
        subs__.unsubscribe();
        node976.empty();
        if(value355) {
          var nodes2115 = $("<span>");
          node976.append(nodes2115);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, function(_, callback) {
            var root2938 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root2938); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes2115;
            nodes2115 = node.contents();
            oldNodes.replaceWith(nodes2115);
          }));
          
          
        } else {
          
        }
      };
      renderCond197();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond197();
      }));
      
      callback(root2935); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2112;
      nodes2112 = node.contents();
      oldNodes.replaceWith(nodes2112);
    }));
    callback(root2931); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2108;
    nodes2108 = node.contents();
    oldNodes.replaceWith(nodes2108);
  }));
  callback(root2928); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.max = mobl.ref(0);
nrichRPG.coreWorkout.makeQA = function(n, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll289) {
    coll289 = coll289.reverse();
    function processOne43() {
      var item;
      item = coll289.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll289.length > 0) processOne43(); else rest43();
      
    }
    function rest43() {
      var result__ = nrichRPG.coreWorkout.max.get() + 1;
      qa.number = result__;
      var result__ = nrichRPG.coreWorkout.makeProblem(n);
      var q_and_A = result__;
      var result__ = q_and_A.get(0);
      qa.question = result__;
      var result__ = q_and_A.get(1);
      qa.answer = result__;
      var result__ = q_and_A.get(2);
      qa.topic = result__;
      var result__ = q_and_A.length > 3;
      if(result__) {
        var result__ = q_and_A.get(3);
        qa.plotData = result__;
        var result__ = false;
        qa.done = result__;
        var result__ = mobl.add(qa);
        if(callback && callback.apply) callback(); return;
      } else {
        {
          var result__ = false;
          qa.done = result__;
          var result__ = mobl.add(qa);
          if(callback && callback.apply) callback(); return;
        }
      }
    }
    if(coll289.length > 0) processOne43(); else rest43();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll290) {
    coll290 = coll290.reverse();
    function processOne44() {
      var item;
      item = coll290.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll290.length > 0) processOne44(); else rest44();
      
    }
    function rest44() {
      var result__ = nrichRPG.coreWorkout.max.get() + 1;
      qa.number = result__;
      var result__ = nrichRPG.coreWorkout.makeFurther(s);
      var q_and_A = result__;
      var result__ = q_and_A.get(0);
      qa.question = result__;
      var result__ = q_and_A.get(1);
      qa.answer = result__;
      var result__ = q_and_A.get(2);
      qa.topic = result__;
      var result__ = q_and_A.length > 3;
      if(result__) {
        var result__ = q_and_A.get(3);
        qa.plotData = result__;
        var result__ = false;
        qa.done = result__;
        var result__ = mobl.add(qa);
        if(callback && callback.apply) callback(); return;
      } else {
        {
          var result__ = false;
          qa.done = result__;
          var result__ = mobl.add(qa);
          if(callback && callback.apply) callback(); return;
        }
      }
    }
    if(coll290.length > 0) processOne44(); else rest44();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll291) {
    coll291 = coll291.reverse();
    function processOne45() {
      var item;
      item = coll291.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll291.length > 0) processOne45(); else rest45();
      
    }
    function rest45() {
      var result__ = nrichRPG.coreWorkout.max.get() + 1;
      qa.number = result__;
      var result__ = nrichRPG.coreWorkout.makeFurther(s);
      var q_and_A = result__;
      var result__ = q_and_A.get(0);
      qa.question = result__;
      var result__ = q_and_A.get(1);
      qa.answer = result__;
      var result__ = q_and_A.get(2);
      qa.topic = result__;
      var result__ = q_and_A.length > 3;
      if(result__) {
        var result__ = q_and_A.get(3);
        qa.plotData = result__;
        var result__ = false;
        qa.done = result__;
        var result__ = mobl.add(qa);
        if(callback && callback.apply) callback(); return;
      } else {
        {
          var result__ = false;
          qa.done = result__;
          var result__ = mobl.add(qa);
          if(callback && callback.apply) callback(); return;
        }
      }
    }
    if(coll291.length > 0) processOne45(); else rest45();
  });
  
};

(function(__ns) {
__ns.makeProblem = function(n) {
                     if(n === 1000)
                     {
                       n = 1 + Math.floor(Math.random() * 29);
                       n = n;
                     }
                     if(n === 100)
                     {
                       n = pickrand(10, 11, 7, 9, 1, 30, 13, 17);
                     }
                     if(n === 200)
                     {
                       n = pickrand(24, 25, 26, 27, 270);
                     }
                     if(n === 300)
                     {
                       n = pickrand(15, 16, 6);
                     }
                     if(n === 400)
                     {
                       n = pickrand(8, 12, 23, 2);
                     }
                     if(n === 500)
                     {
                       n = pickrand(5, 18);
                     }
                     if(n === 600)
                     {
                       n = pickrand(14, 20, 21, 22, 19);
                     }
                     if(n === 700)
                     {
                       n = pickrand(28, 3, 4);
                     }
                     switch(n) {
                       case 1:
                         var qa = makePartial();
                         qa.push("Partial fractions");
                         break;
                       case 2:
                         var qa = makeBinomial2();
                         qa.push("Binomial theorem");
                         break;
                       case 3:
                         var qa = makePolyInt();
                         qa.push("Polynomial integration");
                         break;
                       case 4:
                         var qa = makeTrigInt();
                         qa.push("Trig integration");
                         break;
                       case 5:
                         var qa = makeVector();
                         qa.push("Scalar products");
                         break;
                       case 6:
                         var qa = makeLines();
                         qa.push("3D Lines");
                         break;
                       case 7:
                         var qa = makeIneq();
                         qa.push("Inequalities");
                         break;
                       case 8:
                         var qa = makeAP();
                         qa.push("Arithmetic progressions");
                         break;
                       case 9:
                         var qa = makeFactor();
                         qa.push("Factor theorem");
                         break;
                       case 10:
                         var qa = makeQuadratic();
                         qa.push("Quadratics");
                         break;
                       case 11:
                         var qa = makeComplete();
                         qa.push("Completing the square");
                         break;
                       case 12:
                         var qa = makeBinExp();
                         qa.push("Binomial expansion");
                         break;
                       case 13:
                         var qa = makeLog();
                         qa.push("Logarithms");
                         break;
                       case 14:
                         var qa = makeStationary();
                         qa.push("Stationary points");
                         break;
                       case 15:
                         var qa = makeTriangle();
                         qa.push("Triangles");
                         break;
                       case 16:
                         var qa = makeCircle();
                         qa.push("Circles");
                         break;
                       case 17:
                         var qa = makeSolvingTrig();
                         qa.push("Trig equations");
                         break;
                       case 18:
                         var qa = makeVectorEq();
                         qa.push("Vector equations");
                         break;
                       case 19:
                         var qa = makeImplicit();
                         qa.push("Implicit differentiation");
                         break;
                       case 20:
                         var qa = makeChainRule();
                         qa.push("The chain rule");
                         break;
                       case 21:
                         var qa = makeProductRule();
                         qa.push("The product rule");
                         break;
                       case 22:
                         var qa = makeQuotientRule();
                         qa.push("The quotient rule");
                         break;
                       case 23:
                         var qa = makeGP();
                         qa.push("Geometric progressions");
                         break;
                       case 24:
                         var qa = makeModulus();
                         qa.push("Modulus function");
                         break;
                       case 25:
                         var qa = makeTransformation();
                         qa.push("Transformations of functions");
                         break;
                       case 26:
                         var qa = makeComposition();
                         qa.push("Composition of functions");
                         break;
                       case 27:
                         var qa = makeParametric();
                         qa.push("Parametric functions");
                         break;
                       case 270:
                         var qa = makeImplicitFunction();
                         qa.push("Implicit functions");
                         break;
                       case 28:
                         var qa = makeIntegration();
                         qa.push("Integration");
                         break;
                       case 29:
                         var qa = makeDE();
                         qa.push("Differential equations");
                         break;
                       case 30:
                         var qa = makePowers();
                         qa.push("Powers");
                         break;
                       default :
                       alert("invalid qid" + n);
                       break;
                       }
                     return qa;
                   };
__ns.makeFurther = function(n) {
                     switch(n) {
                       case 'F1':
                         var qa = makeCArithmetic();
                         qa.push("Complex Arithmetic");
                         break;
                       case 'F2':
                         var qa = makeCPolar();
                         qa.push("Modulus Argument");
                         break;
                       case 'F3a':
                         var qa = makeDETwoHard();
                         qa.push("2nd order DEs");
                         break;
                       case 'F4':
                         var qa = makeMatrix2();
                         qa.push("Rank 2 matrices");
                         break;
                       case 'F5':
                         var qa = makeTaylor();
                         qa.push("Taylor Series");
                         break;
                       case 'F6':
                         var qa = makePolarSketch();
                         qa.push("Polar Coordinates");
                         break;
                       case 'F7':
                         var qa = makeMatrix3();
                         qa.push("Rank 3 matrices");
                         break;
                       case 'F8':
                         var qa = makeFurtherVector();
                         qa.push("Further vectors");
                         break;
                       case 'F9':
                         var qa = makeNewtonRaphson();
                         qa.push("Newton-Raphson");
                         break;
                       case 'F10':
                         var qa = makeFurtherIneq();
                         qa.push("Further inequalities");
                         break;
                       case 'F11':
                         var qa = makeSubstInt();
                         qa.push("Integration by substitution");
                         break;
                       case 'F12':
                         var qa = makeRevolution();
                         qa.push("Figures of revolution");
                         break;
                       case 'F13':
                         var qa = makeMatXforms();
                         qa.push("Matrix transformations");
                         break;
                       case 'S1':
                         var qa = makeDiscreteDistn();
                         qa.push("Discrete Distributions");
                         break;
                       case 'S2':
                         var qa = makeContinDistn();
                         qa.push("Continuous Distributions");
                         break;
                       case 'S3':
                         var qa = makeHypTest();
                         qa.push("Hypothesis Testing");
                         break;
                       case 'S4':
                         var qa = makeConfidInt();
                         qa.push("Confidence Intervals");
                         break;
                       case 'S5':
                         var qa = makeChiSquare();
                         qa.push("Chi Squared");
                         break;
                       case 'S6':
                         var qa = makeProductMoment();
                         qa.push("Product Moments");
                         break;
                       default :
                       alert("invalid qid" + n);
                       break;
                       }
                     return qa;
                   };
}(nrichRPG.coreWorkout));