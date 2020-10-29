//criando uma classe
//metodo construtor e encapsulamento
 
class CalcController {

  constructor() {

    this._locale = 'pt-BR';
    this._displayCalcEl = document.querySelector("#display");
    this._dateEl = document.querySelector("#data");
    this._timeEl = document.querySelector("#hora");
    this._currentDate ; // this referencia a classe 
    this.initialize();

  }  

  //initialize é o método principal do projeto  
  //tudo que eu quiser que aconteça assim que eu iniciar a calculadora sera colocado em initialize
  //EL convençao do curso para referenciar ao elemento

  initialize() {   

    //metodo para aparecer a data e a hora na tela assim que abrir o conteudo. 
    this.setDisplayDateTime();

      setInterval(() => { //setInterval funçao executada em um intervalo de tempo, o tempo é marcado em milisegundos

      this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
        day: "2-digit",
        month: "long",      //personalizando a visualização da data, lembrando que o locale esta pt-BR
        year: "numeric"   
      });
     
      this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
      
    }, 1000);

  }

  setDisplayDateTime(){ //sempre que eu for reutilizar o codigo -> CRIO UM MÉTODO
    
    this.displayDate = this.currentDate.toLocaleDateString(this._locale);
    this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    
  }

  //recuperar e/ou atribuir valor a um atributo privado

  get displayTime(){

    return this._timeEl.innerHTML;

  }

  set displayTime(value){
    return this._timeEl.innerHTML = value;
  }

  get displayDate(){

    return this._dateEl.innerHTML;

  }

  set displayDate(value){

    return this._dateEl.innerHTML = value

  }

  get displayCalc(){

    return this._displayCalcEl.innerHTML;

  }

  set displayCalc(valor){

    this._displayCalcEl.innerHTML = valor;

  }


  get currentDate(){

    return new Date() ;

  }

  set currentDate(valor){

    this.currentDate = valor;

  }

}