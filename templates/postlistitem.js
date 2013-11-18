(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['postlistitem'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<a href=\"#\"\n   onclick=\"$('.list-group-item').removeClass('active'); $(this).addClass('active'); alert('here'); loadPost(";
  if (stack1 = helpers.ID) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.ID); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + ");\"\n   class=\"list-group-item\">\n<h4 class=\"list-group-item-heading\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\n\n    <p class=\"list-group-item-text\">created on ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.formatDate || (depth0 && depth0.formatDate)),stack1 ? stack1.call(depth0, (depth0 && depth0.date), options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.date), options)))
    + "</p>\n</a>";
  return buffer;
  });
})();