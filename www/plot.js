mobl.provides('plot');
mobl.provides('plot');
mobl.provides('mobl');

plot.plot = function(id, s, elements, callback) {
  var root2753 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node965 = $("<div>");
  
  var ref1358 = id;
  if(ref1358.get() !== null) {
    node965.attr('id', ref1358.get());
    subs__.addSub(ref1358.addEventListener('change', function(_, ref, val) {
      node965.attr('id', val);
    }));
    
  }
  subs__.addSub(ref1358.rebind());
  
  var ref1359 = s;
  if(ref1359.get() !== null) {
    node965.attr('class', ref1359.get());
    subs__.addSub(ref1359.addEventListener('change', function(_, ref, val) {
      node965.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1359.rebind());
  
  root2753.append(node965);
  callback(root2753); return subs__;
  
  return subs__;
};
(function(__ns) {
__ns.lineChart = function(id, data) {
                   var d = data;
                   var el = $("#" + id);
                   $.plot(el, data);
                 };
}(plot));