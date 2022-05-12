import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TodosPiratas from './componentes/TodosPiratas/TodosPiratas';
import NuevoPirata from './componentes/NuevoPirata/NuevoPirata';
import VerPirata from './componentes/VerPirata/VerPirata';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact render={ () => <TodosPiratas />} />
          <Route path='/nuevo' exact render={ () => <NuevoPirata />} />
          <Route path='/pirata/:id' exact render={ () => <VerPirata />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
