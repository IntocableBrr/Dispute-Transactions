import React from 'react';
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


    </div>
  );
}

export default App;
