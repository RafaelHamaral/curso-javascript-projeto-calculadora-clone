//criando uma classe
//metodo construtor e encapsulamento
 
class CalcController{

  constructor(){

    this._displayCalc = "0";
    this._currentDate ; // this referencia a classe 
    this.initialize();

  }  

  //método principal do projeto
  //tudo que eu quiser que aconteça assim que eu iniciar a calculadora sera colocado em initialize
  //EL convençao do curso para referenciar ao elemento

  initialize(){

     let displayCalcEl = document.querySelector('#display');
     let dateEl = document.querySelector('#data');
     let timeEL = document.querySelector('#hora');

     displayCalcEl.innerHTML =  "4567";
     dateEl.innerHTML = "25/10/2020";
     timeEL.innerHTML = "00:00"
 


  }


  //recuperar e/ou atribuir valor a um atributo privado
  get displayCalc(){

    return this._displayCalc;

  }

  set displayCalc(valor){

    this.displayCalc = valor;

  }


  get currentDate(){

    return this._currentDate ;

  }

  set currentDate(valor){

    this.currentDate = valor;

  }

}