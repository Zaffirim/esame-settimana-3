/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics
console.log('******* ESERCIZIO A******')
/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
function sum(a, b) {
  return a + b

}

console.log(sum(4, 5));

console.log('******* ESERCIZIO B******')
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

function numeroRandom() {
  var random = Math.floor(Math.random() * 21);
  return random;
}


console.log(numeroRandom());
console.log('******* ESERCIZIO C******')

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/


function creaUnOggetto(name, surname, age) {
  const oggetto = {
    name: name,
    surname: surname,
    age: age
  }

  return oggetto
}

let me = creaUnOggetto('Milo', 'Zaffiri', 31);

console.log(me);
console.log('******* ESERCIZIO D******')
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

function rimuoviAge(oggetto) {
  delete oggetto.age;
  return oggetto;
}

console.log(rimuoviAge(me));
console.log('******* ESERCIZIO E******')
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
let skills = ['javascript', 'css', 'HTML'];

function aggiungiSkills(obj, skillsArray) {
  obj.skills = skillsArray
  return obj
}

console.log(aggiungiSkills(me, skills));
console.log('******* ESERCIZIO F******');

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

function aggiungiNuovaSkill(me, nuovaSkill) {
  me.skills.push(nuovaSkill);
}
let nuovaSkill = 'swift';

aggiungiNuovaSkill(me, nuovaSkill);
console.log(me)


console.log('******* ESERCIZIO G******');

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
function rimuoviUltimaSkills(me) {
  me.skills.pop();
}
rimuoviUltimaSkills(me);
console.log(me);

console.log('******* ESERCIZIO 1******');




// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dado() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(dado());
console.log('******* ESERCIZIO 2******');

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/


function whoIsBigger(num1, num2) {
  if (num1 > num2) {
    return num1
  } else {
    return num2
  }

}



console.log(whoIsBigger(5, 4));
console.log('******* ESERCIZIO 3******');


/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

let stringa1 = 'Programmare è bello 1'
function splitMe(stringa) {
  return stringa.split(' ');
}

console.log(splitMe(stringa1));

console.log('******* ESERCIZIO 4******');
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(str, isFirst) {
  if(isFirst) {
    return str.substring(1);
  } else {
    return str.substring(0, str.length - 1);
  }
}

console.log(deleteOne(stringa1, false));
console.log('******* ESERCIZIO 5******');
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(str) {
  return str.replace(/[0-9]/g, ''); 
}

console.log(onlyLetters(stringa1));
console.log('******* ESERCIZIO 6******');
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(str) {
  // Utilizziamo un'espressione regolare per validare l'indirizzo email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(str);
}

console.log(isThisAnEmail(stringa1));
console.log('******* ESERCIZIO 7******');


/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {
  var daysOfWeek = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
  var today = new Date();
  var dayIndex = today.getDay();
  return daysOfWeek[dayIndex];
}

console.log(whatDayIsIt());



console.log('******* ESERCIZIO 8******');
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function dice() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollTheDices(numRolls) {
  var values = []; 
  var sum = 0; 
  for (var i = 0; i < numRolls; i++) {
    var roll = dice(); 
    values.push(roll); 
    sum += roll; 
  }

  return {
    sum: sum,
    values: values
  };
}

var result = rollTheDices(3);
console.log(result);
console.log('******* ESERCIZIO 9******');
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays(specificDate) {
  var startDate = new Date(specificDate);

  var currentDate = new Date();
  var timeDifference = currentDate.getTime() - startDate.getTime();
  
  var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
  return daysDifference;
}
var date = new Date('2024-01-01'); 
var daysPassed = howManyDays(date);
console.log("Giorni trascorsi:", daysPassed);
console.log('******* ESERCIZIO 10******');

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/


function isTodayMyBirthday(birthday) {
 
  var today = new Date();
  var todayDay = today.getDate();
  var todayMonth = today.getMonth() + 1; 
  var birthdayDay = birthday.getDate();
  var birthdayMonth = birthday.getMonth() + 1; 
  return todayDay === birthdayDay && todayMonth === birthdayMonth;
}


var myBirthday = new Date('20-02-1992');
var result = isTodayMyBirthday(myBirthday);
console.log("Oggi è il mio compleanno?", result);


console.log('******* ESERCIZIO 11******');

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

function deleteProp(obj, propToDelete) {
 
  if (propToDelete in obj) {
   
    delete obj[propToDelete];
  }
  
  return obj;
}

var obj = {
  name: "John",
  age: 30,
  city: "New York"
};

var newObj = deleteProp(obj, "age");
console.log(newObj); 
console.log('******* ESERCIZIO 12******');

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie(movies) {
  
  if (movies.length === 0) {
    return null; 
  }

  
  var newest = movies[0];

  
  for (var i = 1; i < movies.length; i++) {
    if (parseInt(movies[i].Year) > parseInt(newest.Year)) {
      newest = movies[i];
    }
  }
  return newest;
}


var newest = newestMovie(movies);
console.log(newest.Title);
console.log('******* ESERCIZIO 13******');
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies(movies) {
  return movies.length;
}
console.log(countMovies(movies));
console.log('******* ESERCIZIO 14******');
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(movies) {
  
  var yearsArray = [];

  
  for (var i = 0; i < movies.length; i++) {
    yearsArray.push(movies[i].Year);
  }
  return yearsArray;
}


var years = onlyTheYears(movies);
console.log( years);
console.log('******* ESERCIZIO 15******');
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium(movies) {
 
  var currentYear = new Date().getFullYear();
  var lastMillenniumStart = currentYear - 1000;
  var lastMillenniumMovies = movies.filter(function(movie) {
    return parseInt(movie.Year) >= lastMillenniumStart && parseInt(movie.Year) < currentYear;
  });

  return lastMillenniumMovies;
}

var millenniumMovies = onlyInLastMillennium(movies);
console.log("I film prodotti nell'ultimo millennio sono:", millenniumMovies);
console.log('******* ESERCIZIO 16******');
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears(movies) {
  
  var totalYears = 0;
  for (var i = 0; i < movies.length; i++) {
    totalYears += parseInt(movies[i].Year);
  }

  return totalYears;
}

console.log(sumAllTheYears(movies));
console.log('******* ESERCIZIO 17******');
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(searchString, movies) {
  var filteredMovies = movies.filter(function(movie) {
    return movie.Title.toLowerCase().includes(searchString.toLowerCase());
  });

  return filteredMovies;
}
console.log( searchByTitle('Lord', movies));

console.log('******* ESERCIZIO 18******');
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(searchString, movies) {
  var match = [];
  var unmatch = [];

  for (var i = 0; i < movies.length; i++) {
    if (movies[i].Title.toLowerCase().includes(searchString.toLowerCase())) {
      match.push(movies[i]);
    } else {
      unmatch.push(movies[i]);
    }
  }
  var result = {
    match: match,
    unmatch: unmatch
  };
  return result;
}

var searchResults = searchAndDivide("Lord", movies);
console.log(searchResults.match);
console.log(searchResults.unmatch);

console.log('******* ESERCIZIO 19******');
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(index, movies) {
  
  if (index < 0 || index >= movies.length) {
    return movies; 
  }
  var modifiedMovies = movies.slice();
  modifiedMovies.splice(index, 1);
  return modifiedMovies;
}


var newIndex = 2; 
var updatedMovies = removeIndex(newIndex, movies);
console.log(newIndex, updatedMovies);

console.log('******* ESERCIZIO 20******');
/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function selectContainerElement() {
  var containerElement = document.getElementById("container");
  return containerElement;
}

var container = selectContainerElement();
console.log(container); 

console.log('******* ESERCIZIO 21******');
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function selectTdElements() {
  
  var tdElements = document.getElementsByTagName("td");
  
 
  return tdElements;
}

var tdList = selectTdElements();
console.log(tdList); 

console.log('******* ESERCIZIO 22******');
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function printTdText() {
  
  var tdElements = document.getElementsByTagName("td");
  for (var i = 0; i < tdElements.length; i++) {
    console.log(tdElements[i].textContent);
  }
}
console.log(printTdText());
console.log('******* ESERCIZIO 23******');
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function addRedBackgroundToLinks() {
  var linkElements = document.getElementsByTagName("a");
  for (var i = 0; i < linkElements.length; i++) {
    linkElements[i].style.backgroundColor = "red";
  }
}

console.log(addRedBackgroundToLinks());

console.log('******* ESERCIZIO 24******');
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
let list = document.getElementById('myList')

function addNewItemToList() {
  var newItem = document.createElement("li");
  newItem.textContent = "Nuovo elemento";
  var list = document.getElementById("myList");
  list.appendChild(newItem);
}


console.log(addNewItemToList());
console.log('******* ESERCIZIO 25******');
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function emptyList() {
  var list = document.getElementById("myList");
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

emptyList();


console.log('******* ESERCIZIO 26******');
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function addClassToTableRow() {
  var trElements = document.getElementsByTagName("tr");
  for (var i = 0; i < trElements.length; i++) {
    trElements[i].classList.add("test");
  }
}

addClassToTableRow();

// [EXTRA] JS Avanzato
console.log('******* ESERCIZIO 27******');
/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

function halfTree(height) {
  
  for (var i = 1; i <= height; i++) {
    
    console.log('*'.repeat(i));
  }
}

halfTree(3);

console.log('******* ESERCIZIO 28******');
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

function tree(height) {
  for (var i = 1; i <= height; i++) {
    console.log(' '.repeat(height - i) + '*'.repeat(2 * i - 1));
  }
}

tree(3);

console.log('******* ESERCIZIO 29******');
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
function isItPrime(number) {
  if (number <= 1) {
    return false; 
  }

 
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; 
    }
  }

  return true; 
}


console.log(isItPrime(5));
console.log(isItPrime(12)); 



