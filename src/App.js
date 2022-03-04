import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import styled from "styled-components";
import Nav from './Components/Navbar';
import Board from './Components/Dashboard';

const Dashboard = styled.div`


`
function App() {
  return (
      <Dashboard className='p-5'>
        <div className=''>
          <div className='row'>
            <div className='col-lg-2 col-12'>
            <Nav/>
            </div>
            <div className='col-lg-10 col-12 border border-dark'>
             <Board/>
            </div>
          </div>
       
        </div>
        
      </Dashboard>
  );
}

export default App;
