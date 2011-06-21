mobl.provides('plot');
mobl.provides('plot');
mobl.provides('mobl');

plot.plot = function(id, s, elements, callback) {
  var root8886 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2703 = $("<div>");
  
  var ref2509 = id;
  if(ref2509.get() !== null) {
    node2703.attr('id', ref2509.get());
    subs__.addSub(ref2509.addEventListener('change', function(_, ref, val) {
      node2703.attr('id', val);
    }));
    
  }
  subs__.addSub(ref2509.rebind());
  
  var ref2510 = s;
  if(ref2510.get() !== null) {
    node2703.attr('class', ref2510.get());
    subs__.addSub(ref2510.addEventListener('change', function(_, ref, val) {
      node2703.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2510.rebind());
  
  root8886.append(node2703);
  callback(root8886); return subs__;
  
  return subs__;
};
(function(__ns) {
__ns.lineChart = function(id, data) {
                   var d = data;
                   var el = $("#" + id);
                   $.plot(el, data);
                 };
}(plot));