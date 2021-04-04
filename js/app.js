
const resultado = document.querySelector('#resultado');

let array = [ ];  // <--- Aqui es donde se guarda la direncion src de las imagenes.
let i = 0;

while( array.length < 5){//Aun no encuentro una forma de saber cuantos elementos contiene la carpeta img
                        //Por lo que creo estaticamente un arreglo del tamaño de elemento de carpeta img.
    i++;
    array = [...array , `../img/imagen${i}.jpg`]; //Para agregar mas imgs cambiar el 5 de la condicion while y en carpeta img colocar 
} ;                                                 //el mismo nombre con el numero siguiente.

const crearCarousel = () => {

    const divPrimero = document.createElement('div');
    divPrimero.id = 'carouselExampleControls';
    divPrimero.className = 'carousel slide';
    divPrimero.setAttribute('data-bs-ride', 'carousel');

    const divSegundo = document.createElement('div');
    divSegundo.className = 'carousel-inner';

    return {
        divPrimero, divSegundo
    }
};


const mostrarImagenesCarousel = () => {

    const divs = crearCarousel();

    resultado.appendChild( divs.divPrimero );
    resultado.querySelector('#carouselExampleControls').appendChild( divs.divSegundo);

    array.forEach( urlImg => {
        //Div
        const div = document.createElement('div');
        div.className = 'carousel-item';

        //Imagen
        const imagenes = document.createElement('img');

        imagenes.classList.add('img-fluid','d-block','m-2','w-100');
        imagenes.src = urlImg;

        div.appendChild(imagenes);

        resultado.querySelector('.carousel-inner').appendChild( div );
        
    });
    AgregarActive();

    const botones = agregarButtons();
    divs.divSegundo.appendChild( botones.buttonPreview);
    divs.divSegundo.appendChild( botones.buttonNext);

};
mostrarImagenesCarousel();

function AgregarActive(){

    const carouselItem = document.querySelector('.carousel-item');

    carouselItem.classList.add('active');
};


function agregarButtons(){

    const buttonPreview = document.createElement('button');
    buttonPreview.classList.add('carousel-control-prev');
    buttonPreview.type = 'button';
    buttonPreview.setAttribute('data-bs-target','#carouselExampleControls');
    buttonPreview.setAttribute('data-bs-slide','prev');

    const spanPrev = document.createElement('span');
    const spanPrev2 = document.createElement('span');
    spanPrev.classList.add('carousel-control-prev-icon');
    spanPrev.setAttribute('aria-hidden', 'true');  
    spanPrev2.classList.add('visually-hidden');
    spanPrev2.textContent = 'Previous';

    buttonPreview.appendChild( spanPrev);
    buttonPreview.appendChild( spanPrev2 );

    const buttonNext = document.createElement('button');
    buttonNext.classList.add('carousel-control-next');
    buttonNext.type = 'button';
    buttonNext.setAttribute('data-bs-target','#carouselExampleControls');
    buttonNext.setAttribute('data-bs-slide','next');

    const span = document.createElement('span');
    const span2 = document.createElement('span');
    span.classList.add('carousel-control-next-icon');
    span.setAttribute('aria-hidden', 'true');  
    span2.classList.add('visually-hidden');
    span2.textContent = 'Next';

    buttonNext.appendChild( span);
    buttonNext.appendChild( span2 );
    

    return {
        buttonPreview, buttonNext
    }
};
