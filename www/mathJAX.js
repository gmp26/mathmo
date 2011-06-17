mobl.provides('mathJAX');
mobl.provides('mathJAX');
mobl.provides('mobl');
mathJAX.renderMaths = function(callback) {
  var __this = this;
  mobl.sleep(500, function(result__) {
    var tmp1930 = result__;
    var result__ = mathJAX.render();
    if(callback && callback.apply) callback(); return;
  });
};

mathJAX.renderMathsIn = function(event, callback) {
  var __this = this;
  mobl.sleep(500, function(result__) {
    var tmp1931 = result__;
    var result__ = mathJAX.renderIn(event);
    if(callback && callback.apply) callback(); return;
  });
};

(function(__ns) {
__ns.loaded = false;
__ns.isLoaded = function() {
                  if(this.loaded)
                  return true;
                  else
                  return null;
                };
__ns.loadMaths = function() {
                   var script = document.createElement("script");
                   script.src = "http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML-full";
                   var config = 'MathJax.Hub.Startup.onload()';
                   script.text = config;
                   document.getElementsByTagName("head")[0].appendChild(script);
                   this.loaded = true;
                 };
__ns.render = function() {
                if(this.loaded)
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                else
                this.loadMaths();
              };
__ns.renderIn = function(event) {
                  if(this.loaded)
                  {
                    var math = MathJax.Hub.getAllJax(event.currentTarget)[0];
                    if(math)
                    {
                      math.Remove();
                    }
                    else
                    {
                      MathJax.Hub.Queue(["Typeset",MathJax.Hub,event.currentTarget]);
                    }
                  }
                  else
                  this.loadMaths();
                };
}(mathJAX));