
var nyApi = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=NS8YX8C3OXl9FAsd938KHOG4fAC98lBS`;

async function nyPaper(nyApi){
try{
    let nyUrl = await fetch(nyApi);
    let nyProcess = await nyUrl.json();

    return (nyProcess);
}catch(err){
    console.log(err);
}
}




let home = document.getElementById('home');
let arts = document.getElementById('arts');
let science = document.getElementById('science');
let us = document.getElementById('us');
let world = document.getElementById('world');
let ul = createClass('ul','navbar-nav');
let li = createClass('li','nav-item');
let a = document.getElementsByTagName('a');

function create(section){
    document.getElementById('container').innerHTML = '';
    var homeApi = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=NS8YX8C3OXl9FAsd938KHOG4fAC98lBS`;
    nyPaper(homeApi).then((subject)=>{

    for(let i=0; i<subject.results.length; i++){
       let subv = subject.results[i];
       createCard((subv))
    }
}) ;

}







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
