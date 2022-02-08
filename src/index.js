console.log(data);

//main card 
function pokemonCard() {
    // loop array of data to add on other cards based on the data
    for (const details of data) {
        // assigning classes/elements to an item
        container = document.querySelector(`.cards`)
        card = document.createElement('Article')
        pokemonName = document.createElement(`h1`)
        artwork = document.createElement(`img`)
        pokemonDetails = document.createElement(`div`)
        // adding created above elements inside container(section with class cards)
        container.append(card)
        // adds container to the body of the page
        document.body.append(container)
        // creating and assigning a class to the cards created through the for of loop
        card.setAttribute('class', 'card')
        // the below items will be added to the card in order
        card.append(pokemonName)
        card.append(artwork)
        card.append(pokemonDetails)
        // adds classes to the above items of the card from data.js
        pokemonName.setAttribute('class', 'card--title')
        artwork.setAttribute('class', 'card--img')
        pokemonDetails.setAttribute('class', 'card--text')
        // add title inbetween h1 tags and image to the img tag
        pokemonName.innerText = details.name.toUpperCase()
        artwork.src = details.sprites.other['official-artwork'].front_default
        //adds text elements, these details are inside another array so a second inner loop will have to run 
        for (const stat of details.stats) {
            // creates a section for h3 tag and assigns to item
            attributes = document.createElement('h3')
            // adds elements to div with class card--text from data.js
            pokemonDetails.append(attributes)
            // uses two object items inside stat object to form a string to add to h3 element
            attributes.innerText = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`
        }
    }
}
//calling a function
 pokemonCard()


//pokemon card from the first element
console.log(data[0]);
