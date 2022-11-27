//A C T I V E    C L A SS 
const current = location.href;
const menu = document.querySelectorAll('.sidebar ul a');
console.log(menu);
const menulen = menu.length;
for(let i=0; i<menulen;i++){
    if(menu[i].href === current){
        menu[i].className ="active";
    }
}
 //A C T I V E   F O R   E X A M P L E   P A G E
const currentx = location.href;
const menux = document.querySelectorAll('.sidebarex ul a');
console.log(menux);
const menulenx = menux.length
for(let j=0; j<menulenx;j++){
    if(menux[j].href === currentx){
        menux[j].className ="active";
    }
}
//S I D E   B A R 
nav = document.getElementById('menu');
side = document.getElementById("side");
cross = document.getElementById("close");
 
cross.onclick=function(){
    side.style.display="none";
    cross.style.display="none";
    nav.style.display="flex";
   } 
nav.onclick=function(){
 side.style.display="flex";
 cross.style.display="flex";
 nav.style.display="none";
}
 
const ex = document.querySelectorAll('.content .examples ul a');


 
 
 