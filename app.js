
  var newTemplate = function(querySelector) {
    var el = $(querySelector);
    return Handlebars.compile(el.html());
  };

$.ajax({
    url: 'https://api.github.com/users/aliaborroho/repos',
    dataType: 'json',
    success: function(loadapi) {
      var t = newTemplate('.content');
      $(loadapi.forEach(function(data) {
        $('.content').main.append(t(loadapi));
      }));
    }
  });

var loadUser = function(username, onload) {
  var url = 'https://api.github.com/users/' + username;

  $.ajax({
    url:  'http://api.github.com/users/aliaborroho',
    dataType: 'json',
    success: onload
  });
};

var loadRepos = function(username, onload) {
  var url = 'https://api.github.com/users/aliaborroho' + username + '/repos?sort=created';

  $.ajax({
    url: 'http://api.github.com/users/aliaborroho',
    dataType: 'json',
    success: updatePage

  });
};

var sidebarEl = $('.sidebar');
var reposEl = $('.repos');
var sidebarTemplateString = $('#sidebar').html();
var repoTemplateString = $('#repo').html();

var sT = Handlebars.compile(sidebarTemplateString);
var rT = Handlebars.compile(repoTemplateString);

loadRepos ('aliaborroho', function(data) {
  var allRepos = rT(data);
  reposEl.html(allRepos);
});

loadUser('aliaborroho', function(data) {
  var result = sT(data);
  sidebarEl.html(result);

});

