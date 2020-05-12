import {Environment} from './environment'
import {options,print} from './addition'
import {MultiplyList} from './multiply_list'
import {onChange} from './fileprocessing.js';

const defaultLine="Let's begin the game"
const BR="<br/>"

let environment=new Environment("Roshada -");
let treasures=new WeakMap();
let tresCoords=new Set();
var _fileInput;
const main=()=>{
    let enterEl=document.querySelector("#enter");
    enterEl.addEventListener("click", onClickEnter,false);
    addToOutput();
    let coordinate1={x:2,y:2};
    tresCoords.add(coordinate1);
    treasures.set(coordinate1,{name:"treasure chest", value:100});
    let coordinate2={x:2,y:0};
    tresCoords.add(coordinate2);
    treasures.set(coordinate2,{name:"medallion",value:10}); 

     _fileInput=document.querySelector("#files");
    _fileInput.onchange=function(){
        onChange(_fileInput.files, tresCoords, treasures);
    }
}

function findTreasure(){
    let findCoords;
    for(let coords of tresCoords){
        if(coords.x==x&&coords.y==y){
            findCoords=coords;
        }
    }

    if(findCoords){
        let {name,value}=treasures.get(findCoords);
        if(value){
            addToOutput(`You found a ${name} worth ${value} dollars`);
        }
    }
}
let x=0,y=0;
function navigate(stepX,stepY){
   [x,y]=[x+stepX,y+stepY];
    let coordinates=document.querySelector("#coordinates");
    coordinates.innerHTML=`${x}, ${y}`
    findTreasure();
}

function addToOutput(newLine=defaultLine){
    let output=document.querySelector("#predefined");
    output.innerHTML+=BR+newLine;
}

function onCommand(command){
    if(command==="help"){
        options.outputOptions();
    }else if(command==="clear"){
        document.querySelector("#output").innerHTML="";
    }else if(command==="left"){
        navigate(-1,0);
        addToOutput(environment.stumbleUpon());
    }else if(command==="right"){
        navigate(1,0);
        addToOutput(environment.stumbleUpon());
    }else if(command==="up"){
        navigate(0,-1);
        addToOutput(environment.stumbleUpon());
    }else if(command==="down"){
        navigate(0,1);
        addToOutput(environment.stumbleUpon());
    }else if(command==="poke"){
        addToOutput(environment.poke())
    }else{
        addToOutput(command);
    }
}

function onClickEnter(){
    let commands=document.querySelector("#commands");
    onCommand(commands.value);   
}

main();
console.log(Object.getOwnPropertySymbols(options));
var multiplyList=new MultiplyList([1,4,"",5,1],2);
for(var value of multiplyList){
    print("list", value);
}