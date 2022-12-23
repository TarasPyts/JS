let arr = [1, 2, 3, 4, 5, 6, 7];

let i = 0;

let spanElement = document.querySelector('.counterValue');
let plusElement = document.querySelector('#plus');
let minusElement = document.querySelector('#minus');

plusElement.addEventListener('click', function() {
    i++;
    if(i > arr.length - 1){
        i=0; 
    }
    spanElement.innerHTML = arr[i];
})

minusElement.addEventListener('click', function() {
    i--;
    if(i < 0){
        i = arr.length -1;
    }
    spanElement.innerHTML = arr[i];
})