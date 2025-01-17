// use a for loop to create element to contain all details of the card
for (let i = 0; i < data.length; i++) {
    // card has already been defined in the html, use "cards" to 
    //create a class within to hold all the data and img. make
    //this an unordered list to hold the stats and img
    // const cards = document.querySelector("ul");
    //declare a const of liItem within the document
    // const liItem = document.createElement("li");
    //set liItem to be within card
    // liItem.setAttribute("class", "card");
    // use const h2 to display the card title. This has been aligned in 
    // the css. use create element to enable this specified tag within the document.
    // const h2 = document.createElement("h2");
    // use setAttribute to assign the tag designated in the html
    // h2.setAttribute("class", "card--title");
    //declare a const for the images we will use with the name declared in the html 
    // const img = document.createElement("img");
    // img.setAttribute("class", "card--img");


    const cards = document.querySelector("ul");

    const card = document.createElement("li");
    card.setAttribute("class", "card");
    cards.appendChild(card)

    const h2 = document.createElement("h2");
    h2.setAttribute("class", "card--title");
    h2.innerText = data[i].name
    card.appendChild(h2)
    
    const img = document.createElement("img");
    img.setAttribute("class", "card--img");
    img.setAttribute("width", "256");
    img.src = data[i].sprites.front_default
    card.appendChild(img)

    // Stats
    const stats = document.createElement("ul");
    stats.setAttribute("class", "card--text");
    card.appendChild(stats)

    const liHp = document.createElement("li");
    liHp.innerText = "HP: " + data[i].stats[0].base_stat
    stats.appendChild(liHp)

    const liAtt = document.createElement("li");
    liAtt.innerText = "ATTACK: " + data[i].stats[1].base_stat
    stats.appendChild(liAtt)

    const liDef = document.createElement("li");
    liDef.innerText = "DEFENCE: " + data[i].stats[2].base_stat
    stats.appendChild(liDef)

    const liSpecAtt = document.createElement("li");
    liSpecAtt.innerText = "SPECIAL ATTACK: " + data[i].stats[3].base_stat
    stats.appendChild(liSpecAtt)

    const liSpecDef = document.createElement("li");
    liSpecDef.innerText = "SPECIAL DEFENCE: " + data[i].stats[4].base_stat
    stats.appendChild(liSpecDef)

    const liSpeed = document.createElement("li");
    liSpeed.innerText = "SPEED: " + data[i].stats[5].base_stat
    stats.appendChild(liSpeed)



}

// create an unordered list for the stat text that will go on card
// const pokestats = document.createElement("ul");
// pokestats.setAttribute("class", "card--text");
// const liHp = document.createElement("li");
// const liAtt = document.createElement("li");
// const liDef = document.createElement("li");
// const liSpecAtt = document.createElement("li");
// const liSpecDef = document.createElement("li");
// const liSpeed = document.createElement("li");

