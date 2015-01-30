Package.describe({
  summary: "Automatically grow and shrink textareas with the content as you type.",
  version: "0.0.1",
  git: "https://github.com/Agnito/meteor-autogrow.git",
  name: "agnito:autogrow"
});

Package.onUse(function (api, where) {
  api.versionsFrom("1.0");
  api.use('jquery');
  api.addFiles('autogrow.js', 'client');
});

