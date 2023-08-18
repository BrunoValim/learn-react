import React from "react";

class App extends React.Component {

  state = { nome: 'Bruno Valim' }

  render() {
    return (
      <h1>Hello {this.state.nome}</h1>
    )
  }
}

// function ComponenteFuncional() {
//   return (
//     <div>
//       <h1>asass {this.state.nome}</h1>
//     </div>
//   );
// }
export default App;
