fetch ("https://api.github.com/users/?username=6thSence");
  .then (response => response.json())
  .then (commits => alert(commits[0].autor.login));
