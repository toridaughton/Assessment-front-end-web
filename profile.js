const colorBtn = document.getElementById('color')
const placeBtn = document.getElementById('place')
const foodBtn = document.getElementById('food')
const recommendForm = document.getElementById('recommend')

const FavColor = (event) =>{
    alert(`My favorite color is Red!`)
}

const FavPlace = (event) =>{
    alert(`My favorite place is (currently) Donut falls because.. caves!`)
}
const FavFood = (event) =>{
    alert(`OMG Pasta :P`)
}

const recommendSubmit = (event) => {
	event.preventDefault();
	alert(`Form submitted! Can't wait to see what you recommend!`);
}



recommendForm.addEventListener('submit', recommendSubmit)
colorBtn.addEventListener(`click`, FavColor)
placeBtn.addEventListener(`click`, FavPlace)
foodBtn.addEventListener(`click`, FavFood)