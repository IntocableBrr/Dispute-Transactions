import React from 'react';
import logo from './logo.svg';
import './App.css';
import TheLogin from './components/TheLogin';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import TransactionsList from './pages/TransactionsList';
import Details from './pages/TransactionsDetails';
import Dispute from './pages/TransactionsDispute';
import DisputeForm from './pages/DisputeForm';



function App() {
  return (
    <div className="App">
 <Routes>
  <Route path='/' element={<TheLogin/>}></Route>
  <Route path='/transactions' element={<TransactionsList/>}></Route>
  <Route path='/transactions/details' element={<Details/>}></Route>
  <Route path='/transactions/details/dispute' element={<Dispute/>}></Route>
  <Route path='/transactions/details/dispute/form' element={<DisputeForm/>}></Route>
 </Routes>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
