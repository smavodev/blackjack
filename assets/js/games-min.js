const modulo=(()=>{"use strict";let e=[];const t=["C","D","H","S"],s=["A","J","Q","K"];let a=[];const n=document.querySelector("#btnPedir"),o=document.querySelector("#btnDetener"),r=(document.querySelector("#btnNuevo"),document.querySelectorAll(".divcartas")),l=document.querySelectorAll("small"),d=()=>{e=[];for(let s=2;s<=10;s++)for(let a of t)e.push(s+a);for(let a of t)for(let t of s)e.push(t+a);return _.shuffle(e)},c=()=>{if(0===e.length)throw"No hay cartas en el deck";return e.pop()},i=(e,t)=>(a[t]=a[t]+(e=>{const t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t})(e),l[t].innerText=a[t],a[t]),u=(e,t)=>{const s=document.createElement("img");s.src=`assets/cartas/${e}.png`,s.classList.add("carta"),r[t].append(s)},f=e=>{let t=0;do{const s=c();if(t=i(s,a.length-1),u(s,a.length-1),e>21)break}while(t<e&&e<=21);(()=>{const[e,t]=a;setTimeout(()=>{t===e?swal("Nadie Gana :("," ","warning"):e>21?swal("Computadora gana"," ","info"):t>21?swal("Jugador gana"," ","success"):swal("Computadora gana"," ","info")},100)})()};return n.addEventListener("click",()=>{const e=c(),t=i(e,0);u(e,0),t>21?(swal("Lo siento mucho, perdiste"," ","error"),n.disabled=!0,o.disabled=!0,f(t)):21===t&&(swal("21, Usted ha ganado!"," ","success"),n.disabled=!0,o.disabled=!0,f(t))}),o.addEventListener("click",()=>{n.disabled=!0,o.disabled=!0,f(a[0])}),{nuevoJuego:(t=2)=>{e=d(),a=[];for(let e=0;e<t;e++)a.push(0);l.forEach(e=>e.innerText=0),r.forEach(e=>e.innerHTML=""),n.disabled=!1,o.disabled=!1}}})();