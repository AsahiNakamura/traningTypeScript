class Cat{

    name:string;

    sayHello(){
        return this.name + "だにゃん😺";
    }

    constructor(name:string){
        this.name = name;
    }
}

let aki = new Cat("あき");  //letはローカル変数を示す

document.body.innerHTML = aki.sayHello();
