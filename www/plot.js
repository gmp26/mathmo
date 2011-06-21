mobl.provides('plot');
mobl.provides('plot');
mobl.provides('mobl');

plot.plot = function(id, s, elements, callback) {
  var root9750 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3000 = $("<div>");
  
  var ref2807 = id;
  if(ref2807.get() !== null) {
    node3000.attr('id', ref2807.get());
    subs__.addSub(ref2807.addEventListener('change', function(_, ref, val) {
      node3000.attr('id', val);
    }));
    
  }
  subs__.addSub(ref2807.rebind());
  
  var ref2808 = s;
  if(ref2808.get() !== null) {
    node3000.attr('class', ref2808.get());
    subs__.addSub(ref2808.addEventListener('change', function(_, ref, val) {
      node3000.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2808.rebind());
  
  root9750.append(node3000);
  callback(root9750); return subs__;
  
  return subs__;
};
(function(__ns) {
__ns.lineChart = function(id, data) {
                   var d = data;
                   var el = $("#" + id);
                   $.plot(el, data);
                 };
}(plot));