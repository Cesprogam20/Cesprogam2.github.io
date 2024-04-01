const cualidades = [
    " Eres Increíblemente talentosa",
    "Tienes una sonrisa contagiosa",
    "Nunca te rindas hasta obtener lo que quieres",
    "Eres Una persona increíblemente Talentosa nunca dudes de eso",
    "Eres Alguien que ilumina a todos a tu alrededor",
    "Sigue esforzandote dia a dia",
    "Solo tu puedes lograrlo",
    "Nadie vendra a salvarte esa es una realidad, pero podras salvarte tu misma esforzandote fuerte",
    "Mas alla de todo, eres muy especial",
    "No te rindas sigue estudiando duro",
    "Tu familia estara muy orgullosa de ti",
    "Gracias por apoyarme siempre",
    "Debes seguir luchando y echandole bolas siempre",
    "Nunca te detengas, nunca dejes de aprender",
    "No dejes de regalarle al mundo tu sonrisa",
    "Fuiste una de las cosas mas lindas que pude encontrarme",
    "Lucha, Pelea, no importa lo que venga",
    "Eres Diciplina, Esfuerzo y Determinacion",
    "Amor, Paciencia, Empatia",
    "Un abrazo bonito en medio de todo",
    "Eres y seras imparable si te lo propones",
    "La historia mas bonita de amor que he tenido",
    "Cuando te levantes por la mañana piensa en el privilegio que es estar vivo, pensar, disfrutar, amar"
];

const btn = document.getElementById('btn');
const cualidad = document.getElementById('cualidad');
const imagen = document.getElementById("img")
let randomIndex = 0;
let randomimage = 0; 
const linksimg=["url(https://www.lovevalentin.com/wp-content/uploads/2020/11/red-roses-hd-wallpaper-flowers-hd-widescreen-wallpapers-1140x760.jpg)","url(https://th.bing.com/th/id/R.05d9812530a0e6ff72d8eaa6540d4ac4?rik=GeXMZ%2fBHp2ImBA&pid=ImgRaw&r=0)","url(https://www.xtrafondos.com/wallpapers/resoluciones/21/camino-durante-noche-estrellada_1920x1080_7248.jpg)","url(https://th.bing.com/th/id/R.27a8cc43fdfbd1b411e787d5421141bc?rik=tvRf5Yvi2%2bR7HQ&pid=ImgRaw&r=0)","url(https://th.bing.com/th/id/OIP.S6koq086JWUUTfaiSOO0KAHaEo?rs=1&pid=ImgDetMain)","url(https://4.bp.blogspot.com/-YTcqb8Ptczk/UdBH8twk0LI/AAAAAAAAAPE/_XBbfDLS1dg/s1600/file0001386550794.jpg)","url(https://th.bing.com/th/id/OIP.-lwe_M5nIVr8jw6PaiakTAHaE8?rs=1&pid=ImgDetMain)"]
btn.addEventListener('click', () => {
    const elemento3= document.getElementById('cualidad')
    const elemento2 = document.getElementById("fondo")
    cualidad.textContent = cualidades[randomIndex];
    elemento3.classList.add("activate")
    elemento2.style.backgroundImage= linksimg[randomimage]
    elemento2.classList.add("activate")
    if (randomIndex === cualidades.length){
        randomIndex=0
    }
    if (randomimage=== linksimg.length){
        randomimage=0
    }
    if (randomimage===0){
        elemento3.style.color="black";
    }else if (randomimage===5){
        elemento3.style.color="black";
    }else{
        elemento3.style.color="white";
    }
    setTimeout(function() {
        elemento3.classList.remove('activate');
        elemento2.classList.remove("activate")
    }, 1155);
    randomIndex+=1;
    randomimage+=1;
});