import { Museum } from './features/museum/Museum';
import { Header } from './features/header/Header';
import './App.css';

/*
 * This is the top level of your app! There's nothing to 
 * implement here, but do refrain from putting your app's
 * display logic in here. All we really want to do at this
 * level is output our main components or wrap our app with
 * middleware such as Redux.
 * 
 */

function App() {
  return (
    <div className="App">
      <Header />
      <Museum />
    </div>
  );
}

export default App;
