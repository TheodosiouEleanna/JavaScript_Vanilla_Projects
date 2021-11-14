// set initial count 
let count = 0;

//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");
// console.log(btns);

//forEach() calls a function for each element in an array.
btns.forEach(function(btn) {
// console.log(btn);
btn.addEventListener('click', function(e){
   //event.currentTarget = A reference to the object whose event listeners triggered the event
   const styles = e.currentTarget.classList;
   if(styles.contains('decrease')) {
      count --;
   }
   else if(styles.contains('increase')){
      count++;
   }
   else {
      count = 0;
   }
   if(count > 0){
      value.style.color = 'green'
   }
   else if (count < 0) {
      value.style.color = 'red'
   }
   else {
      value.style.color = 'black'
   }
   value.textContent = count;
});
});