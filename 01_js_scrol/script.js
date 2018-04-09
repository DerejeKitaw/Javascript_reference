var words = ['because', 'coding', 'is', 'fun'],
  el = document.getElementById('main');
let word_counter = 0;
//let s = 0;
let s=0;
function updateText() {
  if (s < words.length) {
      const element = words[s];
      if (element.length === word_counter) {
        el.innerHTML = ''; //set the html to be blank
        s++;
        word_counter=0;
        if(s === words.length){
        s=0;
        }
      } 
    if (word_counter < element.length) {
        const x = words[s][word_counter];
        console.log(x);
        el.innerHTML = el.innerHTML + x;
        word_counter++;
        if (element.length === word_counter) {
        //el.innerHTML = ''; //set the html to be blank
       
      }
    }
  }
//   for (let i = 0; i < words.length; i++) {
//     const element = words[i];
//     // console.log(words[i]);
//     for (let j = 0; j < element.length; j++) {
//       const x = words[i][j];
//       console.log(x);
//       el.innerHTML = el.innerHTML + words[i][j];
//       if (element.length == j+1) {
//         el.innerHTML = ''; //set the html to be blank
//       }
//     }
//   }
  //   if (character_counter == words[word_counter].length) {
  //     el.innerHTML = el.innerHTML + words[word_counter][character_counter];
  //     word_counter++; //choose a different word
  //     character_counter = 0; //start over with the first character of the word
  //     el.innerHTML = ''; //set the html to be blank
  //     //if we're displaying the last word, go back to the first word
  //     if (word_counter == words.length) word_counter = 0;
  //   }
}

 setInterval(updateText,1000);

// updateText();
// updateText();
// updateText();
// updateText();
// updateText();
// updateText();
// updateText();
// updateText();
// updateText();
// updateText();
// updateText();
// updateText();
// updateText();
// updateText();
// updateText();
// updateText();

// html = words[wordcounter];
