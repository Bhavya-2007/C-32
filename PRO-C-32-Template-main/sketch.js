const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBImg(){

    // write code to fetch time from API
        var adad= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
        var nn=await adad.json();
        var kk= nn.datetime;
        var hours=daytime.slice(11,13);
        if(hours>=04 && ff<=06){
        bg="sunrise1.png";
        }else if(hours>=06 && hours<=08){
         bg="sunrise2.png";
        }
        else if(ff>=08 && ff<=10){
            bg="sunrise3.png";
        } else if(ff>=10 && ff<=12){
            bg="sunrise4.png";
         } else if(ff>=12 && ff<=14){
            bg="sunrise5.png";
        } else if(ff>=14 && ff<=16){
            bg="sunrise6.png";
        }else if(ff>=16 && ff<=18){
            bg="sunrise7.png";
        
        }else if(ff>=18 &&ff<=20){
            bg="sunrise8.png";
         } else if(ff>=20 &&ff<=22){
                bg="sunrise9.png";
          } else if(ff>=22 &&ff<=0){
                    bg="sunrise10.png";
                } else if(ff>=0 &&ff<=02){
                    bg="sunrise11.png";
                } else if(ff>=02 &&ff<=04){
                    bg="sunrise12.png";
                }
                backgroundImg = loadImage(bg);
                console.log(backgroundImg);
    
        }

      
        


    
    
