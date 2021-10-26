import './App.css';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div className='App'>
      <Row title='TRENDING_NOW' requestPath={requests.fetchTrending} />
    </div>
  );
}

export default App;

// api key # c99fb107e53dd98391cc992bd517a55e
