var outputDisplay = document.getElementById("results");
var inputDisplay = document.getElementById("calcs");

var buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(button  => 
{
    button.addEventListener("click", function(event) 
{
        switch(event.target.innerText) {
            case 'RESET':
                inputDisplay.innerText = '';
                outputDisplay.innerText = '';
                break;
            case 'DEL':
                if(inputDisplay.innerText == "Error!")
                {
                    inputDisplay.innerText = '';
                }
                else if(outputDisplay.innerText == "undefined")
                {
                    outputDisplay.innerText = '';
                }
                else if(inputDisplay.innerText)
                {
                    inputDisplay.innerText = inputDisplay.innerText.slice(0, -1);
                }
                
                break;
            case '=':
                try {
                    outputDisplay.innerText = eval(inputDisplay.innerText);
                    inputDisplay.innerText = '';
                } catch {
                    inputDisplay.innerText = 'Error!';
                }
                break;
            default:
                inputDisplay.innerText += event.target.innerText;
        }
    });
    
});
    

function theme1()
{
       document.getElementById("theme-btn1").style.background = " var(--red-key-bg)";
       document.getElementById("theme-btn2").style.background = "transparent";
       document.getElementById("theme-btn3").style.background = "transparent";
       document.getElementById("theme-bdy").style.backgroundColor = "hsl(222, 26%, 31%)";
       document.getElementById("theme-h1").style.color = "white" ;
       document.getElementById("theme-theme").style.color = "white" ;
       document.getElementById("theme-1").style.color = "white" ;
       document.getElementById("theme-2").style.color = "white" ;
       document.getElementById("theme-3").style.color = "white" ;
       document.getElementById("delete").style.color = "white" ;
       document.getElementById("delete").style.backgroundColor = "hsl(225, 21%, 49%)" ;
       document.getElementById("reset").style.color = "white" ;
       document.getElementById("reset").style.backgroundColor = "hsl(225, 21%, 49%)" ;
       document.getElementById("equal").style.backgroundColor = "hsl(6, 63%, 50%)";
       document.getElementById("pad").style.backgroundColor = "hsl(223, 31%, 20%)";
       document.getElementById("theme-screen").style.backgroundColor = "hsl(224, 36%, 15%)";
       document.getElementById("selector").style.backgroundColor = "hsl(223, 31%, 20%)";
       document.getElementById("calcs").style.color = "white" ;
       document.getElementById("results").style.color = "white" ;
       document.getElementById("zero").style.backgroundColor = "white";
       document.getElementById("one").style.backgroundColor = "white";
       document.getElementById("two").style.backgroundColor = "white";
       document.getElementById("three").style.backgroundColor = "white";
       document.getElementById("four").style.backgroundColor = "white";
       document.getElementById("five").style.backgroundColor = "white";
       document.getElementById("six").style.backgroundColor = "white";
       document.getElementById("seven").style.backgroundColor = "white";
       document.getElementById("eight").style.backgroundColor = "white";
       document.getElementById("nine").style.backgroundColor = "white";
       document.getElementById("plus").style.backgroundColor = "white";
       document.getElementById("times").style.backgroundColor = "white";
       document.getElementById("divide").style.backgroundColor = "white";
       document.getElementById("minus").style.backgroundColor = "white";
       document.getElementById("dot").style.backgroundColor = "white";
       document.getElementById("zero").style.color = "black";
       document.getElementById("one").style.color = "black";
       document.getElementById("two").style.color = "black";
       document.getElementById("three").style.color = "black";
       document.getElementById("four").style.color = "black";
       document.getElementById("five").style.color = "black";
       document.getElementById("six").style.color = "black";
       document.getElementById("seven").style.color = "black";
       document.getElementById("eight").style.color = "black";
       document.getElementById("nine").style.color = "black";
       document.getElementById("plus").style.color = "black";
       document.getElementById("times").style.color = "black";
       document.getElementById("divide").style.color = "black";
       document.getElementById("minus").style.color = "black";
       document.getElementById("dot").style.color = "black"; 
       document.getElementById("equal").style.color = "white";

}

function theme2()
{
       document.getElementById("theme-btn1").style.background = "transparent";
       document.getElementById("theme-btn2").style.background = "#C85401";
       document.getElementById("theme-btn3").style.background = "transparent";
       document.getElementById("theme-h1").style.color = "black" ;
       document.getElementById("theme-bdy").style.backgroundColor = "#E6E6E6" ;
       document.getElementById("theme-theme").style.color = "black" ;
       document.getElementById("theme-1").style.color = "black" ;
       document.getElementById("theme-2").style.color = "black" ;
       document.getElementById("theme-3").style.color = "black" ;
       document.getElementById("delete").style.color = "white" ;
       document.getElementById("delete").style.backgroundColor = "#388187" ;
       document.getElementById("reset").style.color = "white" ;
       document.getElementById("reset").style.backgroundColor = "#388187" ;
       document.getElementById("equal").style.backgroundColor = "#C85401";
       document.getElementById("pad").style.backgroundColor = "#D3CDCD";
       document.getElementById("theme-screen").style.backgroundColor = "#EEEEEE";
       document.getElementById("selector").style.backgroundColor = "#D3CDCD";
       document.getElementById("calcs").style.color = "black" ;
       document.getElementById("results").style.color = "black" ;
       document.getElementById("zero").style.backgroundColor = "#E5E4E0";
       document.getElementById("one").style.backgroundColor = "#E5E4E0";
       document.getElementById("two").style.backgroundColor = "#E5E4E0";
       document.getElementById("three").style.backgroundColor = "#E5E4E0";
       document.getElementById("four").style.backgroundColor = "#E5E4E0";
       document.getElementById("five").style.backgroundColor = "#E5E4E0";
       document.getElementById("six").style.backgroundColor = "#E5E4E0";
       document.getElementById("seven").style.backgroundColor = "#E5E4E0";
       document.getElementById("eight").style.backgroundColor = "#E5E4E0";
       document.getElementById("nine").style.backgroundColor = "#E5E4E0";
       document.getElementById("plus").style.backgroundColor = "#E5E4E0";
       document.getElementById("times").style.backgroundColor = "#E5E4E0";
       document.getElementById("divide").style.backgroundColor = "#E5E4E0";
       document.getElementById("minus").style.backgroundColor = "#E5E4E0";
       document.getElementById("dot").style.backgroundColor = "#E5E4E0";   
       document.getElementById("zero").style.color = "black";
       document.getElementById("one").style.color = "black";
       document.getElementById("two").style.color = "black";
       document.getElementById("three").style.color = "black";
       document.getElementById("four").style.color = "black";
       document.getElementById("five").style.color = "black";
       document.getElementById("six").style.color = "black";
       document.getElementById("seven").style.color = "black";
       document.getElementById("eight").style.color = "black";
       document.getElementById("nine").style.color = "black";
       document.getElementById("plus").style.color = "black";
       document.getElementById("times").style.color = "black";
       document.getElementById("divide").style.color = "black";
       document.getElementById("minus").style.color = "black";
       document.getElementById("dot").style.color = "black"; 
       document.getElementById("equal").style.color = "white";

}
function theme3()
{
       document.getElementById("theme-btn1").style.background = "transparent";
       document.getElementById("theme-btn2").style.background = "transparent";
       document.getElementById("theme-btn3").style.background = "#00DECF";
       document.getElementById("theme-h1").style.color = "yellow" ;
       document.getElementById("theme-bdy").style.backgroundColor = "#17062A" ;
       document.getElementById("theme-theme").style.color = "yellow" ;
       document.getElementById("theme-1").style.color = "yellow" ;
       document.getElementById("theme-2").style.color = "yellow" ;
       document.getElementById("theme-3").style.color = "yellow" ;
       document.getElementById("delete").style.color = "white" ;
       document.getElementById("delete").style.backgroundColor = "#56077C" ;
       document.getElementById("reset").style.color = "white" ;
       document.getElementById("reset").style.backgroundColor = "#56077C" ;
       document.getElementById("equal").style.backgroundColor = "#00DECF";
       document.getElementById("pad").style.backgroundColor = "#1E0836";
       document.getElementById("theme-screen").style.backgroundColor = "#1E0836";
       document.getElementById("selector").style.backgroundColor = "#1E0836";
       document.getElementById("calcs").style.color = "yellow";
       document.getElementById("results").style.color = "yellow";
       document.getElementById("zero").style.backgroundColor = "#331B4D";
       document.getElementById("one").style.backgroundColor = "#331B4D";
       document.getElementById("two").style.backgroundColor = "#331B4D";
       document.getElementById("three").style.backgroundColor = "#331B4D";
       document.getElementById("four").style.backgroundColor = "#331B4D";
       document.getElementById("five").style.backgroundColor = "#331B4D";
       document.getElementById("six").style.backgroundColor = "#331B4D";
       document.getElementById("seven").style.backgroundColor = "#331B4D";
       document.getElementById("eight").style.backgroundColor = "#331B4D";
       document.getElementById("nine").style.backgroundColor = "#331B4D";
       document.getElementById("plus").style.backgroundColor = "#331B4D";
       document.getElementById("times").style.backgroundColor = "#331B4D";
       document.getElementById("divide").style.backgroundColor = "#331B4D";
       document.getElementById("minus").style.backgroundColor = "#331B4D";
       document.getElementById("dot").style.backgroundColor = "#331B4D"; 
       document.getElementById("zero").style.color = "yellow";
       document.getElementById("one").style.color = "yellow";
       document.getElementById("two").style.color = "yellow";
       document.getElementById("three").style.color = "yellow";
       document.getElementById("four").style.color = "yellow";
       document.getElementById("five").style.color = "yellow";
       document.getElementById("six").style.color = "yellow";
       document.getElementById("seven").style.color = "yellow";
       document.getElementById("eight").style.color = "yellow";
       document.getElementById("nine").style.color = "yellow";
       document.getElementById("plus").style.color = "yellow";
       document.getElementById("times").style.color = "yellow";
       document.getElementById("divide").style.color = "yellow";
       document.getElementById("minus").style.color = "yellow";
       document.getElementById("dot").style.color = "yellow";        
       document.getElementById("equal").style.color = "black";
}