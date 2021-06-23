import { BrowserRouter, Route } from 'react-router-dom';

import { AuthContextProvider } from './context/AuthContext';
import { Home } from './pages/Home';
import { NewRoom } from "./pages/NewRoom";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home}></Route>
        <Route path="/rooms/new" component={NewRoom}></Route>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;