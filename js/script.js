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

/* Milestone 1
Partendo dalla seguente struttura dati , mostriamo in pagina tutte
le icone disponibili come da layout. */
const container = document.querySelector('#icone');
mostraInPagina(colorizedIcons, container);

function mostraInPagina(array, container){

    array.forEach((element) => {

        const {name, prefix, type, family, color} = element;

        container.innerHTML += 
        `<div>
            <i class="${family} ${prefix}${name}"  style="color: ${color}"></i>
            <h4>${name} (${type})</h4>
        </div>
        `;
    });
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