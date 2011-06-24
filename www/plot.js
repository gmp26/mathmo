mobl.provides('plot');
mobl.provides('plot');
mobl.provides('mobl');

plot.plot = function(id, s, elements, callback) {
  var root15041 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2819 = $("<div>");
  
  var ref2590 = id;
  if(ref2590.get() !== null) {
    node2819.attr('id', ref2590.get());
    subs__.addSub(ref2590.addEventListener('change', function(_, ref, val) {
      node2819.attr('id', val);
    }));
    
  }
  subs__.addSub(ref2590.rebind());
  
  var ref2591 = s;
  if(ref2591.get() !== null) {
    node2819.attr('class', ref2591.get());
    subs__.addSub(ref2591.addEventListener('change', function(_, ref, val) {
      node2819.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2591.rebind());
  
  root15041.append(node2819);
  callback(root15041); return subs__;
  
  return subs__;
};
(function(__ns) {
__ns.lineChart = function(id, data) {
                   var d = data;
                   var el = $("#" + id);
                   $.plot(el, data);
                 };
}(plot));