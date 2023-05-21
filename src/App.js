import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import Cards from './components/Cards';
import CardsDetail from './components/CardsDetail';
import store from './store';
import { Provider } from 'react-redux';


function App() {
 return (
  <Provider store={store}>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Cards />} />
        <Route path="/cart/:id" element={<CardsDetail />} />
      </Route>
    </Routes>
  </Provider>
 );
}

export default App;