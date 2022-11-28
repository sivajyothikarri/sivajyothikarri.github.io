document.getElementById('getBody').onload= function() {speak('Welcome to this page'), getDate()};
function getDate() {
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementById("selectDate").innerHTML = date;
}
function changeTabs(evt, item) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tabContent")
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tabLinks")
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(item).style.display = "block";
    evt.currentTarget.className += " active";
    if(evt.currentTarget.className === 'navbar-brand tabLinks active'){
    document.getElementById('bioText').style.display="inline-flex";
    }
}

function changeColor(data){
   if(data === 'on'){
   let check = document.getElementById('getBody');
   let changeValue = document.getElementById('flexSwitchCheckDefault');
   check.classList.add('dark-color');
   changeValue.setAttribute('value', 'off');
   }else{
    let check = document.getElementById('getBody');
    check.classList.remove('dark-color');
    let changeValue = document.getElementById('flexSwitchCheckDefault');
    changeValue.setAttribute('value', 'on');
   }
}
const speak = (msg) =>{
    const sp = new SpeechSynthesisUtterance(msg);
        [sp.voice] = speechSynthesis.getVoices();
        speechSynthesis.speak(sp)
};