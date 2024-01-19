class Calculadora {
    constructor() {
      this.entradaActual = '0';
      this.entradaAnterior = null;
      this.operador = null;
      this.display = document.querySelector('input[type="text"]');
      this.botones = document.querySelectorAll('button');
      this.vincularEventos();
    }
  
    vincularEventos = () => {
      this.botones.forEach(boton => {
        boton.onclick = () => this.manipularClick(boton.innerText);
      });
    };
  
    manipularClick = botonValor => {
      switch (botonValor) {
        case 'C':
          this.limpiar();
          break;
        case 'DEL':
          this.eliminar();
          break;
        case '+':
        case '-':
        case '*':
        case '/':
          this.manipularOperador(botonValor);
          break;
        case '=':
          this.calcular();
          break;
        case '.':
          this.manipularNumeroOComa(botonValor);
          break;
        default:
          this.manipularNumeroOComa(botonValor);
          break;
      }
  
      this.actualizarDisplay();
    };
  
    limpiar = () => {
      this.entradaActual = '0';
      this.entradaAnterior = null;
      this.operador = null;
    };
  
    eliminar = () => {
      this.entradaActual = this.entradaActual.slice(0, -1) || '0';
    };
  
    manipularOperador = operador => {
      if (this.operador) {
        this.calcular();
      }
  
      this.operador = operador;
      this.entradaAnterior = this.entradaActual;
      this.entradaActual = '0';
    };
  
    manipularNumeroOComa = input => {
      if (input === '.' && this.entradaActual.includes('.')) {
        return; // Evitar agregar múltiples comas
      }
  
      if (this.entradaActual === '0' && input !== '.') {
        this.entradaActual = input;
      } else {
        this.entradaActual += input;
      }
    };
  
    calcular = () => {
      const actual = parseFloat(this.entradaActual);
      const anterior = parseFloat(this.entradaAnterior);
  
      if (!isNaN(actual) && !isNaN(anterior)) {
        switch (this.operador) {
          case '+':
            this.entradaActual = anterior + actual;
            break;
          case '-':
            this.entradaActual = anterior - actual;
            break;
          case '*':
            this.entradaActual = anterior * actual;
            break;
          case '/':
            this.entradaActual = anterior / actual;
            break;
        }
      }
  
      this.operador = null;
      this.entradaAnterior = null;
    };
  
    actualizarDisplay = () => {
      this.display.value = this.entradaActual;
    };
  }
  
  
  const calculadora = new Calculadora();
