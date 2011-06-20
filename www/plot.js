mobl.provides('plot');
mobl.provides('plot');
mobl.provides('mobl');

plot.plot = function(id, s, elements, callback) {
  var root2930 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node832 = $("<div>");
  
  var ref737 = id;
  if(ref737.get() !== null) {
    node832.attr('id', ref737.get());
    subs__.addSub(ref737.addEventListener('change', function(_, ref, val) {
      node832.attr('id', val);
    }));
    
  }
  subs__.addSub(ref737.rebind());
  
  var ref738 = s;
  if(ref738.get() !== null) {
    node832.attr('class', ref738.get());
    subs__.addSub(ref738.addEventListener('change', function(_, ref, val) {
      node832.attr('class', val);
    }));
    
  }
  subs__.addSub(ref738.rebind());
  
  root2930.append(node832);
  callback(root2930); return subs__;
  
  return subs__;
};
(function(__ns) {
__ns.lineChart = function(id, data) {
                   var d = data;
                   var el = $("#" + id);
                   $.plot(el, data);
                 };
}(plot));