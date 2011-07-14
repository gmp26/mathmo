mobl.provides('plot');
mobl.provides('plot');
mobl.provides('mobl');

plot.plot = function(id, s, elements, callback) {
  var root1252 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node247 = $("<div>");
  
  var ref213 = id;
  if(ref213.get() !== null) {
    node247.attr('id', ref213.get());
    subs__.addSub(ref213.addEventListener('change', function(_, ref, val) {
      node247.attr('id', val);
    }));
    
  }
  subs__.addSub(ref213.rebind());
  
  var ref214 = s;
  if(ref214.get() !== null) {
    node247.attr('class', ref214.get());
    subs__.addSub(ref214.addEventListener('change', function(_, ref, val) {
      node247.attr('class', val);
    }));
    
  }
  subs__.addSub(ref214.rebind());
  
  root1252.append(node247);
  callback(root1252); return subs__;
  
  return subs__;
};
(function(__ns) {
__ns.lineChart = function(id, data) {
                   var d = data;
                   var el = $("#" + id);
                   $.plot(el, data);
                 };
}(plot));