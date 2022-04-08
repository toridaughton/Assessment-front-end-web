const linkBtn = document.getElementById('random-link')
const links = document.getElementsByClassName('links')

const linkRandomizer = (event) => {
   let linksArry = Array.from(links)
   for(let i = 0; i < linksArry.length; i++){
    let random = Math.floor(Math.random() * linksArry.length);
   }
}

linkBtn.addEventListener(`click`, linkRandomizer)
