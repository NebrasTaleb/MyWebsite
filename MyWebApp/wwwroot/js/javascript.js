$(function(){
    // these two variables to ensure that the divs will now show up out of the purple fram pf the page
    var minLeft = 15;
    var minRight = -15;
    var widthOfWindow = $(".container").width();
    var heightOfWindow = $(".container").height();

    class ClickableDiv {
        constructor (xPoint , yPoint , width , height , color , className){
            this.xPoint = xPoint;
            this.yPoint = yPoint;
            this.width = width;
            this.height = height;
            this.color = color;
            this.className = className;
        }
    }

    function getRandomX_AxisValue(){
        return Math.random() * (675 - 25) +  (50 - 2);
    }

    function getRandomY_AxisValue(){
        return Math.random() * (400 - 25) +  (50 - 2);
    }

    function getRandomInteger(){
        return Math.random() * (250 - 10 ) + 10 ;
    }

    // ready method from stack overflow
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    function getRandomTime(){
        return Math.random() * (4000 - 1000 ) + 1000 ;
    }
    var setOfDivsObjects = [];
    // initializing 10 div elements
    function createTenDivObjects(){
        for (var i = 0 ; i < 10 ; i++)
    {
        var newDivObject = new ClickableDiv(getRandomX_AxisValue(),
                                  getRandomY_AxisValue(),
                                  getRandomInteger(),
                                  getRandomInteger(),
                                  getRandomColor(),
                                  "clickable_div");
                                  setOfDivsObjects.push(newDivObject);
       
    }

    }
    
    var setOfDivs = [];
    // show 5 div elements when page is loaded
    function initializGame(){
        for(i = 0 ; i< 10; i++){
            var  newDiv = document.createElement("div"); 
            newDiv.style.marginLeft = setOfDivsObjects[i].xPoint + "px";
            newDiv.style.marginTop = setOfDivsObjects[i].yPoint + "px";
            newDiv.style.width = setOfDivsObjects[i].width + "px";
            newDiv.style.height =  setOfDivsObjects[i].height + "px";
            newDiv.style.background = setOfDivsObjects[i].color + "";
            newDiv.className = setOfDivsObjects[i].className + "";
            newDiv.style.visibility = "hidden";
            setOfDivs.push(newDiv);
            document.getElementsByClassName("body_div")[0].appendChild(newDiv);
        }
        setOfDivsObjects = [];

    }
    
    function startShowing(){
        createTenDivObjects();
        initializGame();
        for(i = 0 ; i< 10; i++){
            setOfDivs[i].style.visibility = "visible";
    }
    setOfDivs =[];
    }
    var divsClickedCounter = 0;
    
    // this variable to control the number of rectangles that are showing up on the screen
    var lotsOfDivsAlarm = 0;

    $(document).on('click' , '.clickable_div' , function(){
        $(this).fadeOut("slow");
        divsClickedCounter++;
        $("#counter_text").text(divsClickedCounter);
        if(lotsOfDivsAlarm - divsClickedCounter < 10 )
        {
                startGame();
        }
    });
    var gameTimer ;
function startGame (){
   gameTimer = window.setInterval(function(){
        startShowing();
        lotsOfDivsAlarm += 10;
        if(lotsOfDivsAlarm > 30 ){
            clearInterval(gameTimer);
        }
        
      }, 3000);
}
    
    startGame();
});
