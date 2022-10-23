//Hashing the DOM
let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button')); //Get all the buttons into an array

buttons.map(button => { //Using map because buttons is an array
    button.addEventListener('click', (event) => {
        //test
        //console.log('clicked');
        //console.log(event);
        //console.log(event.target);
        //console.log(event.target.innerText);
        switch(event.target.innerText){
            //C to clear display
            case 'C':
                display.innerText = '';
                break;
            //Back arrow ← to delete a character
            case '←':
                if(display.innerText) { //Only work when there are character in display
                    display.innerText = display.innerText.slice(0,-1);
                }
                break;
            //Display calculatred result
            case '=':
                //Display error messsage with invalid calculation
                try{
                    display.innerText = eval(display.innerText);//eval will calculated the formular
                } catch {
                    display.innerText = "Invalid!";
                }
                break;
            default:
                //add clicked button to display
                display.innerText += event.target.innerText; 
        }
    });
});