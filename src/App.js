import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import styled from "styled-components";
import Nav from './Components/Navbar';
import Board from './Components/Dashboard';
import Chart from './Components/Chart';
import LastComponent from './Components/LastComponent';

const Dashboard = styled.div`
`
const Column = styled.div`

`


function App() {
  return (
      <Dashboard className='px-5'>
        <div className=''>
          <div className='row'>
            <Column className='col-lg-2 col-12 '>
            <Nav/>
            </Column>
            <div className='col-lg-10 col-12 border border-light p-2'>
             <Board/>
             <Chart/>
             <LastComponent/>
            </div>
          </div>
      
        </div>
       
      </Dashboard>
  );
}

export default App;
