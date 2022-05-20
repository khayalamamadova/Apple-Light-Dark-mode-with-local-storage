// mode

/*
const myBtn = document.querySelector('#mode');
const nav = document.querySelector('nav');
const mySection = document.querySelector('section');


function changeBackground (){
    if ( nav.className == 'navbar navbar-expand-lg navbar-dark bg-dark text-light') {
       let lightMode = 'navbar navbar-expand-lg navbar-light bg-light text-dark';
       document.querySelector('nav').style.transition = 'all 1s linear'
        nav.className = lightMode;
        localStorage.setItem('mode', lightMode);
        myBtn.innerHTML = '☀️';

        document.querySelector('body').style.backgroundColor = '#fff';
        document.querySelector('body').style.color = 'black'
        document.querySelector('body').style.color = '#000';
        document.querySelector('body').style.transition = 'all 1s linear'
        document.querySelector('body').className = 'lightBody'
        localStorage.setItem('bodymode','lightBody')
        

        
        

    } else {
        let darkMode = 'navbar navbar-expand-lg navbar-dark bg-dark text-light';
        nav.className = darkMode;
        localStorage.setItem('mode', darkMode)
        document.querySelector('body').style.backgroundColor = '#212529';
        document.querySelector('body').style.color = 'white'
        document.querySelector('nav').style.transition = 'all 1s linear'
        document.querySelector('body').style.transition = 'all 1s linear'
        myBtn.innerHTML = "🌙"
        document.querySelector('body').className = 'darkBody'
        localStorage.setItem('bodyMode','darkBody')


    }
}
//nav.className = localStorage.getItem('mode')
document.querySelector('body').className = localStorage.getItem('bodyMode')
myBtn.addEventListener('click',changeBackground)
*/
//multilang


let az = ['Mağaza', "Mac", "iPad", "iPhone", "Watch", "Airpods", 'TV', "Yalnız Apple-da", "Aksesuarlar","Dəstək"]
let en = ['Store', "Mac", "iPad", "iPhone", "Watch", "Airpods", 'TV&Home', "Only on Apple", "Accesories","Support"]
const myLangBtn = document.querySelector('#lang')
const words = document.querySelectorAll('.nav-link')

function changeLanguage (){

  if (myLangBtn.innerHTML == 'EN') {


    for (let x = 0; x < en.length; x++) {
       
      words[x].innerHTML = en[x];
      localStorage.setItem('lang', en)

    }
    
      myLangBtn.innerHTML = 'AZ';
      localStorage.setItem('mybutton', 'AZ')
        } 
        
        else {


    for (let x= 0; x < az.length; x++) {
      words[x].innerHTML = az[x];
      localStorage.setItem('lang', az)
}
         myLangBtn.innerHTML = 'EN';
        localStorage.setItem('mybutton', 'EN')
}
}

for (let x= 0; x < az.length; x++) {
  words[x].innerHTML = localStorage.getItem('lang').split(',')[x]
}


myLangBtn.addEventListener('click',changeLanguage)
words.innerHTML = localStorage.getItem('lang');
myLangBtn.innerHTML = localStorage.getItem('mybutton');






/*
const nav = document.querySelector("nav");
const modeBtn = document.querySelector("#mode");

const changeMode = () => {
  if (nav.className == "navbar navbar-expand-lg navbar-light bg-light") {
    let lightClassName = "navbar navbar-expand-lg navbar-dark bg-dark";
    nav.className = lightClassName;
    localStorage.setItem("mode", lightClassName);
    // modeBtn.innerHTML = "☀️";
    modeBtn.className = "btn btn-outline-success ms-5";
    document.querySelector("body").style.backgroundColor = "#757575";
    document.querySelector("body").className = "darkBody";
    localStorage.setItem("bodymode", "darkBody");
  } else {
    let darkClassName = "navbar navbar-expand-lg navbar-light bg-light";
    nav.className = darkClassName;
    localStorage.setItem("mode", darkClassName);
    // modeBtn.innerHTML = "🌙";
    modeBtn.className = "btn btn-success ms-5";
    document.querySelector("body").className = "lightBody";
    localStorage.setItem("bodymode", "lightBody");
  }
};

modeBtn.addEventListener("click", changeMode);
nav.className = localStorage.getItem("mode");
document.querySelector("body").className = localStorage.getItem("bodymode");*/



/*
const newMode =()=>{
  if (nav.className == 'navbar navbar-expand-lg navbar-dark bg-dark text-light') {
    nav.className == 'navbar navbar-expand-lg navbar-light bg-light text-dark';
    checkbox.checked = true;
  } else {
    nav.className == 'navbar navbar-expand-lg navbar-light bg-light text-dark'
    checkbox.checked= false;

  }
}

checkbox.addEventListener('change',newMode)*/

var checkbox = document.getElementById('ChangeTheme')

function darkmode (){
  document.body.classList.add('dark-mode');
  checkbox.checked = true;
  sessionStorage.setItem('mode','dark')
}

function nodark (){
  document.body.classList.remove('dark-mode')
  checkbox.checked = false;
  sessionStorage.setItem('mode','light')

}




checkbox.addEventListener('change',function(){
  if (checkbox.checked  ) {
    darkmode()
  } else {
    nodark()
  }
})

if (sessionStorage.getItem('mode')=='dark') {
  darkmode()
} else {
  nodark()
}

