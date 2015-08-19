var profileArea = $('#profile-target');
var profileTemplateString = $('#profile-template').html();
var profileTemplate = Handlebars.compile(profileTemplateString);

$.ajax('https://api.github.com/users/aliaborroho', {
  success: function(data) {
    console.log(data);
    var output = profileTemplate(data);

    profileArea.html(output);
  }
});

var reposArea = $('#repos-target');
var reposTemplateString = $('#repos-template').html();
var reposTemplate = Handlebars.compile(reposTemplateString);

$.ajax('https://api.github.com/users/aliaborroho/repos', {
  success: function(data) {
    console.log(data);
    var output = reposTemplate(data);

    reposArea.html(output);
  }
});
