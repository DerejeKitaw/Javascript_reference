var words = ['because', 'coding', 'is', 'fun'],
  el = document.getElementById('main');
let word_counter = 0;
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
