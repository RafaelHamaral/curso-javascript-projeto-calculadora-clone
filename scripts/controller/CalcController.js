//criando uma classe
//metodo construtor e encapsulamento
 
class CalcController{

  constructor(){

    this._displayCalc = "0";
    this._dataAtual; // this referencia a classe 

  }  


  //recuperar e/ou atribuir valor a um atributo privado
  get displayCalc(){

    return this._displayCalc;

  }

  set displayCalc(valor){

    this.displayCalc = valor;

  }


  get dataAtual(){

    return this._dataAtual;

  }

  set dataAtual(valor){

    this.dataAtual = valor;

  }

}