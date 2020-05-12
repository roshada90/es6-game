import "babel-core/register";
import "babel-polyfill";

export class Encounter{
    constructor(introText=""){
        this.introText =  introText;
    }
    whenEncounter(){
        return this.introText;
    }
    * poke(){
        yield "what's up?!";
    }
}

export class Bear extends Encounter{
    constructor(){
        super("grr grow, you encountered a bear!");
    }
    * poke(){
        yield "Grr...";
        yield "Bear is aggressive";
        yield "Bear is attacking you watch out!"
    }
}

export class Angel extends Encounter{
    constructor(){
        super("Wow, you encountered an Angel! This will give you strength and healing possibilities!")
    }
    * poke(){
        yield "Hey there!";
        yield "You cannot catch me!";
        yield "I like my wings too!"
    }
}

export class Ghost extends Encounter{
    constructor(){
        super();
        this.introText = "Booh, you encountered a Ghost!"
    }
    * poke(){
        yield "Boooo";
        yield "Are you scared?";
        yield "Seems not."
    }
}

export function generate(){
    var number = Math.floor(Math.random() * (4-1)) +1;
    if(number == 1){
        return new Bear();
    }else if(number == 2){
        return new Angel();
    }else if(number == 3){
        return new Ghost();
    }else if(number == 4){
        return new Encounter();
    }
}