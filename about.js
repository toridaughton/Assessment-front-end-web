console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert(`The form has been submitted!`);
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

const cat = document.querySelector('#cat')

const giveCompliment = (event) => {
	// let fabCompliment = document.getElementById(`fabCompliment`)
	alert(`You're the best!`)
}

cat.addEventListener('mouseover', giveCompliment)