function teste(val1, val2) {
    console.log(val1)
    console.log(val2)
    return true;
}

teste(3,5);
teste("a","b");

let t=teste; //o let "t" passa a ser uma função, pois atribuimos uma função a ele

let r=()=>{
    console.log("aqui arrow function")
}

let h= function(val1){
    console.log("aqui somente function " + val1)
}

h("exemplo")
r()

let soma=(a,b)=>{
    return a+b
}

console.log(soma(33,45))

let sub=(a,b)=>a-b;

console.log(sub(98,44))

let treco=(a,b)=>(a+b*24)/soma(b,a);

let v1=1
let v2=2
let v3=5
let v4= v3>3?7:8//operador ternario

console.log(v4)

let pessoa={
    nome:"Carlos", //escopo do objeto
    exibir:function(){
        console.log(this.nome) //metodo de classe
    }
}

pessoa.exibir();
pessoa.nome="Lucas"
pessoa.exibir();

//arrow function NAO tem escopo
//function tem

//USAR FUNCTION QUANDO PRECISAR DO THIS
//ARROW QUANDO NÃO PRECISAR

function usandoLet(){
    let lista = [4,7,8,9];
    for(let i=0; i<lista.length;i++){
        let valorTotal = lista[i]+10;
        let func=()=>console.log(valorTotal)
        setTimeout(func,1000)
    }
}

console.log(usandoLet())

//LET VALORTOTAL É CRIADA A CADA ITERAÇÃO, POIS EXISTE SOMENTE DENTRO DO LOOP
