mobl.provides('plot');
mobl.provides('plot');
mobl.provides('mobl');

plot.plot = function(id, s, elements, callback) {
  var root7153 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1986 = $("<div>");
  
  var ref1739 = id;
  if(ref1739.get() !== null) {
    node1986.attr('id', ref1739.get());
    subs__.addSub(ref1739.addEventListener('change', function(_, ref, val) {
      node1986.attr('id', val);
    }));
    
  }
  subs__.addSub(ref1739.rebind());
  
  var ref1740 = s;
  if(ref1740.get() !== null) {
    node1986.attr('class', ref1740.get());
    subs__.addSub(ref1740.addEventListener('change', function(_, ref, val) {
      node1986.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1740.rebind());
  
  root7153.append(node1986);
  callback(root7153); return subs__;
  
  return subs__;
};
(function(__ns) {
__ns.lineChart = function(id, data) {
                   var d = data;
                   var el = $("#" + id);
                   $.plot(el, data);
                 };
}(plot));