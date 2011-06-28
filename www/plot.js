mobl.provides('plot');
mobl.provides('plot');
mobl.provides('mobl');

plot.plot = function(id, s, elements, callback) {
  var root153 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node62 = $("<div>");
  
  var ref65 = id;
  if(ref65.get() !== null) {
    node62.attr('id', ref65.get());
    subs__.addSub(ref65.addEventListener('change', function(_, ref, val) {
      node62.attr('id', val);
    }));
    
  }
  subs__.addSub(ref65.rebind());
  
  var ref66 = s;
  if(ref66.get() !== null) {
    node62.attr('class', ref66.get());
    subs__.addSub(ref66.addEventListener('change', function(_, ref, val) {
      node62.attr('class', val);
    }));
    
  }
  subs__.addSub(ref66.rebind());
  
  root153.append(node62);
  callback(root153); return subs__;
  
  return subs__;
};
(function(__ns) {
__ns.lineChart = function(id, data) {
                   var d = data;
                   var el = $("#" + id);
                   $.plot(el, data);
                 };
}(plot));