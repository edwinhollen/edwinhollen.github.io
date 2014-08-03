'use strict';
$(document).ready(function(){
  // load projects
  var projectsContainer = document.querySelector('#projectsList');
  $.getJSON(
    'https://api.github.com/users/edwinhollen/repos?sort=updated',
    function(data){

      console.log(data);

      data.forEach(function(repo){
        var element = document.importNode(document.querySelector('#projectTemplate'), true);
        element.content.querySelector('.title').textContent = (repo.name);
        element.content.querySelector('.title').href = (repo.html_url);
        element.content.querySelector('.language').textContent = (repo.language) || '';
        projectsContainer.appendChild(element.content);
      });
    }
  );

  // bracket swapper
  var currentBracketStyle = 0;
  var bracketStyles = ['css','html','js','php'];
  setInterval(function(){
    $('header.main h1').removeClass(bracketStyles[currentBracketStyle]);
    currentBracketStyle++;
    if(currentBracketStyle >= bracketStyles.length){
      currentBracketStyle = 0;
    }
    $('header.main h1').addClass(bracketStyles[currentBracketStyle]);

    $('header.main h1').hide().show(0);
  }, 3000);

  // charlie tango
  $('.charlie.tango').html('edwin'+'hollen'+'&#64;'+'gmail'+'.'+'com');
});
