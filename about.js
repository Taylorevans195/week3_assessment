console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submited');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const picture = document.querySelector(`img`)
picture.addEventListener(`mouseover`, () => {
	alert(`Yeah, we thought you might like that picture!`)
})

