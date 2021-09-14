const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

//mettiamo i tipi nella variabile types
const types = getProrperty(icons, 'type');
// creiamo un array di colori 
const color = ['red', 'green', 'blue', 'black', 'yellow'];
let colorizedIcons = colorizeItems(icons, color);
let select = document.getElementById('my_select');
addOptions(types, select);

/* Milestone 1
Partendo dalla seguente struttura dati , mostriamo in pagina tutte
le icone disponibili come da layout. */
const container = document.querySelector('#icone');
mostraInPagina(colorizedIcons, container);

function mostraInPagina(array, container){

    let temporaryHTML = '';

    array.forEach((element) => {

        const {name, prefix, type, family, color} = element;

        temporaryHTML += 
        `<div>
            <i class="${family} ${prefix}${name}"  style="color: ${color}"></i>
            <h4>${name} (${type})</h4>
        </div>
        `;
    });
    container.innerHTML = temporaryHTML;
}
/* Milestone 2
Coloriamo le icone per tipo */





/* adesso ci facciamo una funzione che prendete e ci da tutti i tipi univoci dell'array */
// in quesot modo nella property mettiamo la proprieta che vogliamor icercare in questo modo e` piu` generico
// inserendo nel primo parametro l'array e nel secondo 'la proprieta'
function getProrperty(array, property) {

    //array dove andranno tutti tipi
    const types = [];

    array.forEach((element) => {
        if(! types.includes(element[property])){
            types.push(element[property])
        }
    });

    return types;
}


//adesso creiamo una funzione dove coloroare gli items in base al tipo

function colorizeItems(array, colors){
    const types = getProrperty(array, 'type');

    const colorizedArray = array.map((element)=>{
        //salviamo in una variabile locale l'indice dell'elemento element.type
        const indexOfType = types.indexOf(element.type);
        //se e presente idnexoftype sara diverso da 1 e quindi
        if(indexOfType !== -1){
            //inseriesco come nuova proprieta -color- il colore allos tesso indice
            //del nostro tiop nell'array dei tipi
            element.color = colors[indexOfType];
        }
        return element;
    })
    return colorizedArray;
}

/* Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone */

// A) prima cosa dobbiamo generare le opzioni nella select per ogni tipo



//funzione che ci genera le opzioni

//dove ootions e l arrai di opzioni da aggiongere e selelct e la select alla quale aggungerle 
function addOptions(options, select){
    options.forEach((element)=>{
        select.innerHTML+= `<option value="${element}">${element}</option>`;
    })
}

// B) filtrare gli elementi da visualizzare in abse alla selzione attraverso un eventi [onChange],
// qunado l'utente cambia l'opzione in una select

select.addEventListener('change', () => {
    const selectValue = select.value;
    /* console.log(selectValue); */

    const filteredIcons = filterItems(icons, selectValue);
    mostraInPagina(filteredIcons, container);
})

function filterItems(array, filter){
    //se ho selezionato all in tutto l'array
    if(filter.trim().toLowerCase() === 'all'){
        return array;
    }
    // altrimenti ritorno esclusivamwente i valori che hanno xcome tipo il tipo specificato 
    //come -filter- in questa funzione
    return array.filter(element => element.type == filter);
}