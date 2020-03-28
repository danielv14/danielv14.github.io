(function(){
 var button = document.getElementById('button-portfolio')
 var target = document.getElementById('projects')
 if (button && target) {
   button.addEventListener('click', function(event) {  
   target.scrollIntoView({behavior: 'smooth'});
  })
 }
})();