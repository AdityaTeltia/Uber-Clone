document.getElementById('login').addEventListener('click',(e)=>{
    document.querySelector('.login-page').style.height="90vh";
    document.getElementById('login').style.backgroundColor="rgb(84, 84, 84) ";
    e.preventDefault();
})

document.querySelector('.close').addEventListener('click',(e)=>{
    document.querySelector('.login-page').style.height="0vh";
    document.getElementById('login').style.backgroundColor="black ";
    e.preventDefault();
})

document.getElementById('signin').addEventListener('click',(e)=>{
    document.querySelector('.sign-page').style.height="90vh";
    document.getElementById('signin').style.backgroundColor="rgb(84, 84, 84) ";
    e.preventDefault();
})

document.querySelector('.close1').addEventListener('click',(e)=>{
    document.querySelector('.sign-page').style.height="0vh";
    e.preventDefault();
})