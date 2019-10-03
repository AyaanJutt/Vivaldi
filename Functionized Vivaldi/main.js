// Vivald JS Example

// When a Season Button is Clicked
document.getElementById('summerBtn').addEventListener('click', setSummer);
document.getElementById('autumnBtn').addEventListener('click', setAutumn);
document.getElementById('winterBtn').addEventListener('click', setWinter);
document.getElementById('springBtn').addEventListener('click', setSpring);


// Event Functions
function setSummer() {
    displaySeason('summer', 'vivaldi-summer', '#1BA8448' );
    // - add active class to clicked button
    document.getElementById('summerBtn').classList.add('activeBtn');
}
function setAutumn() {
    displaySeason('autumn','vivaldi-autumn', '#FE6732')
  
    // - add active class to clicked button
    document.getElementById('autumnBtn').classList.add('activeBtn');
}
function setWinter() {
    displaySeason('winter','vivaldi-winter','#1C64B9')
   // - add active class to clicked button
   document.getElementById('winterBtn').classList.add('activeBtn');
}
function setSpring() {
    displaySeason('spring','vivaldi-spring','#0E94D1')

    document.getElementById('springBtn').classList.add('activeBtn');
}

function displaySeason(name, songName, bckgrndColor){
    // - change concerto text
    document.getElementById('season-text').innerHTML = name;
    
    // - change main image
    document.getElementById('main-img').src = 'images/'+name.toLowerCase()+'.jpg';
      
    // - change page background color
    document.body.style.backgroundColor = bckgrndColor;
      
    // - change audio source
    document.getElementById('song').src = 'songs/'+songName+'.mp3';
      
    // - remove active class from all buttons
    document.getElementById('springBtn').classList.remove('activeBtn');
    document.getElementById('summerBtn').classList.remove('activeBtn');
    document.getElementById('autumnBtn').classList.remove('activeBtn');
    document.getElementById('winterBtn').classList.remove('activeBtn');

    
     
}