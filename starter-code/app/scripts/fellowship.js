//console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  
console.log("one");
  //make and id middle earth section
  var MEsection = document.createElement("section");
  MEsection.setAttribute("id", "middle-earth");
  //check
  console.log(MEsection);
//make and lable classes for the places buy creating/appending lands-li-ul-ME-body
  var addplaces = function() {
    for (var i = 0; i<lands.length; i++) {
      var mkart = document.createElement("article");
      var mkhead = document.createElement("h1");
      mkhead.innerHTML=lands[i];
      mkhead.setAttribute("class", lands[i]);
      mkart.setAttribute("class", "a"+lands[i]);
      mkart.appendChild(mkhead);
      MEsection.appendChild(mkart);
      body.appendChild(MEsection);


      console.log(addplaces);

      }    
    };
    addplaces();
}
makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
console.log("ring");

var grabshire = document.querySelector("article.aThe.Shire");
console.log(grabshire);
var mkhobbitul = document.createElement("ul");
console.log(mkhobbitul);

    for (var i = 0; i<hobbits.length; i++) {
      var mkhobbitli= document.createElement("li");
      mkhobbitli.innerHTML=hobbits[i];
      mkhobbitli.setAttribute( "class","hobbit");
      mkhobbitul.appendChild(mkhobbitli);

 }
  grabshire.appendChild(mkhobbitul);
  console.log(mkhobbitul);
}
makeHobbits();


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  
console.log("to unite");
  //make ring div label ring div (id and class) append to frodo
  //
  var oneRing = document.createElement("div");
  oneRing.setAttribute("id","the-ring");
  oneRing.setAttribute("class","magic-imbued-jewelry");
  var grabfrodo = document.querySelector("li.hobbit");
  console.log(grabfrodo);
  grabfrodo.appendChild(oneRing);
  var grabring= document.querySelector("#the-ring");
  console.log(grabring);

  //add screech click event
   grabring.addEventListener('click', nazgulScreech());


}
keepItSecretKeepItSafe();



// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
}


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
