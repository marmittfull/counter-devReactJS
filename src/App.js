import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   const [ contador, setContador ] = useState(0);
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h3>Contador valor: {contador}</h3>
//         <div>
//           <button onClick={()=> setContador(contador-1)}>-</button>
//           <button onClick={()=> setContador(contador+1)}>+</button>
//         </div>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  state = {
    contador: 0
  }
  increment = () => {
    this.setState({
      contador: this.state.contador + 1
    })
  }

  decrement = () => {
    this.setState({
      contador: this.state.contador - 1
    })
  }

  constructor(props){
    super(props);
    this.clean = this.clean.bind(this);
  }

  //uma função normal não consegue ver o this do escopo local, por isso devemos montar o 
  //constructor com o super e dar bind no this para aquela função desejada.
  clean(){
    this.setState({
      contador: 0
    })
  }


  //formas de chamar função no componente.
  //this.funcao() = looping infinito de rereender.
  //this.funcao chamando uma arrow function = dá certo.
  //this.funcao chamando uma função normal = não acha o this.
  //()=>this.funcao() chamando uma funcao normal = dá certo.
  //()=>this.funcao() chamando uma arrow function = dá certo.
  //()=>funcao() só funciona em componente function.
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Contador valor: {this.state.contador}</h3>
          <div>
            <button onClick={this.decrement}>
              -
            </button>
            <button onClick={this.increment}>
              +
            </button>
            <button onClick={this.clean}>
              erase
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
