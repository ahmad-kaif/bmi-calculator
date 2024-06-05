
//bmi formual
// bmi = weight/((height*height)/10000).toFixed(2);



const form = document.querySelector('form');
// console.log(form);

form.addEventListener('submit', function(e){
    e.preventDefault()
    // console.log(e);
    // console.log(e.target);
    const h = parseInt(document.querySelector('#height').value);
    const w = parseInt(document.querySelector('#weight').value);
    console.log(h,w);
    let results = document.querySelector('#results');
    console.log(results);
    if(h === '' || h<0 || isNaN(h)){
        results.innerHTML = 'Please give a valid height';
    }
    else if(w === '' || w<0 || isNaN(w)){
        results.innerHTML = 'Please give a valid weight';
    }
    else results.innerHTML = `Your BMI : ${(w/((h*h)/10000)).toFixed(2)}`;

})

// for dark mode
const mode = document.querySelector('.mode');
const navbar = document.querySelector('.navbar');
const container = document.querySelector('.container');
const navs =  document.querySelectorAll('.navs'); // we get a node list -- apply for each loop
console.log(navs);
// console.log(mode);
// console.log(navbar);
// console.log(container);

mode.addEventListener('click',(e)=>{
    // console.log(e.target);
    navbar.style.backgroundColor='#212121'
    navs.forEach((btn)=>{
        console.log(btn);
        btn.style.color = '#eee';
    })
    container.style.backgroundColor='#eee'
    container.style.color='#212121'
    let results = document.querySelector('#results');
    results.style.color='#212121';
    
})