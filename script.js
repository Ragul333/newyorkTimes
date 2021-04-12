var apiKey = `NS8YX8C3OXl9FAsd938KHOG4fAC98lBS`;
var nyApi = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`;

async function nyPaper(nyApi){
try{
    let nyUrl = await fetch(nyApi);
    let nyProcess = await nyUrl.json();

    return (nyProcess);
}catch(err){
    console.log(err);
}
}



/* nyPaper(nyApi).then((subject)=>{

    for(let i=0; i<subject.results.length; i++){
        console.log(JSON.stringify(subject.results[i].section));
    }
}) ; */


let home = document.getElementById('home');
let arts = document.getElementById('arts');
let science = document.getElementById('science');
let us = document.getElementById('us');
let world = document.getElementById('world');
let ul = createClass('ul','navbar-nav');
let li = createClass('li','nav-item');
let a = document.getElementsByTagName('a');

function createHome(){

    var homeApi = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`;
    nyPaper(homeApi).then((subject)=>{

    for(let i=0; i<subject.results.length; i++){
       let subv = subject.results[i];
       //let sub = (JSON.stringify(subv));
       createCard((subv))
    }
}) ;

}
createHome()
home.setAttribute('onclick','createHome()');

function createArts(){

    var artsApi = `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${apiKey}`;
    nyPaper(artsApi).then((subject)=>{

        for(let i=0; i<subject.results.length; i++){
           let subv = subject.results[i];
           //let sub = (JSON.stringify(subv));
           createCard((subv))
        }
    }) ;

}

arts.setAttribute('onclick','createArts()');


function createScience(){

    var scienceApi = `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${apiKey}`;
    nyPaper(scienceApi).then((subject)=>{

        for(let i=0; i<subject.results.length; i++){
           let subv = subject.results[i];
           //let sub = (JSON.stringify(subv));
           createCard((subv))
        }
    }) ;

}

science.setAttribute('onclick','createScience()');


function createUs(){

    var usApi = `https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${apiKey}`;
    nyPaper(usApi).then((subject)=>{

        for(let i=0; i<subject.results.length; i++){
           let subv = subject.results[i];
           createCard((subv))
        }
    }) ;

}

us.setAttribute('onclick','createUs()');


function createWorld(){

    var worldApi = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${apiKey}`;
    nyPaper(worldApi).then((subject)=>{

        for(let i=0; i<subject.results.length; i++){
           let subv = subject.results[i];
           createCard((subv))
        }
    }) ;

}

world.setAttribute('onclick','createWorld()');




function createClass(elem,elemClass=''){
    let element = document.createElement(elem);
    element.setAttribute('class',elemClass);
    return element;
}



function createCard(pasi){
    
    let container = document.getElementById('container');
    let card = createClass('div','card mt-4');
    let row = createClass('div','row no-gutters');
    let coltexts = createClass('div','col-md-8');
    let cardBody = createClass('div','card-body');
    let h5 = createClass('h3','card-title text-uppercase');
    h5.innerHTML = pasi.section;
    let title = createClass('h4','card-title');
    title.innerHTML = pasi.title;
    let abs = createClass('h5','font-weight-light text-justify');
    abs.innerHTML = pasi.abstract;
    let link = createClass('a','text-end');
    link.innerText = 'Continue Reading...';
    link.setAttribute('href',`${pasi.short_url}`) 
    let colImg = createClass('div','col-md-4');
    let img = createClass('img','card-img');
    img.setAttribute('src',`${pasi.multimedia[3].url}`);

    colImg.append(img);
    cardBody.append(h5,title,abs,link);
    coltexts.append(cardBody);
    row.append(coltexts,colImg);
    card.append(row);
    container.append(card)
    
   
    
    

} 
