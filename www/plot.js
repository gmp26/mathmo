mobl.provides('plot');
mobl.provides('plot');
mobl.provides('mobl');

plot.plot = function(id, s, elements, callback) {
  var root16230 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1933 = $("<div>");
  
  var ref1471 = id;
  if(ref1471.get() !== null) {
    node1933.attr('id', ref1471.get());
    subs__.addSub(ref1471.addEventListener('change', function(_, ref, val) {
      node1933.attr('id', val);
    }));
    
  }
  subs__.addSub(ref1471.rebind());
  
  var ref1472 = s;
  if(ref1472.get() !== null) {
    node1933.attr('class', ref1472.get());
    subs__.addSub(ref1472.addEventListener('change', function(_, ref, val) {
      node1933.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1472.rebind());
  
  root16230.append(node1933);
  callback(root16230); return subs__;
  
  return subs__;
};
(function(__ns) {
__ns.lineChart = function(id, data) {
                   var d = data;
                   var el = $("#" + id);
                   $.plot(el, data);
                 };
}(plot));