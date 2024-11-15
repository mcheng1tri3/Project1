let buttonColor = document.getElementById('colorChanger');
let text = document.getElementById('hardtoread');

buttonColor.addEventListener('click', ()  => {
    text.style.color = 'red'; // Change text color to red
}); 

let textChanger = document.getElementById('textChanger')
textChanger.addEventListener('click', function() {
    document.getElementById('toomuchtext').innerHTML = ''; // Change the text to blank
})

let alertButton;
alertButton = document.getElementById("alertButton");
alertButton.addEventListener('click',function () {
    window.alert(".gnivil..................... fo..................... tra..................... na..................... neeb..................... evah..................... dluow..................... sevil..................... riehT.....................");
}); // An alert will show up when the button is clicked