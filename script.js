document.getElementById('generateMadLib').addEventListener('click', function () {

let adjective = prompt('Enter an adjective:')
let noun = prompt('Enter a noun:')
let verb = prompt('Enter a verb:')
let adverb = prompt('Enter an adverb')

let story = `Once upon a time, in a cozy, ${adjective} ${noun} at the North Pole, Santa's elves were ${verb} the presents ${adverb}. The reindeer were ${adverb} ${verb} around, preparing for the magical night ahead. Santa Claus himself was busy ${verb} his list, checking it twice, ensuring all is ${adjective} and ${adverb}. On Christmas Eve, the sleigh soared through the sky, delivering joy and gifts to every ${adjective} household.`;

let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML = `<p>${story}</p>`

})