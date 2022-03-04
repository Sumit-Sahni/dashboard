import React from "react";
import styled from "styled-components";
import {GoTriangleUp } from "react-icons/go";
import {GoTriangleDown} from "react-icons/go";


const Mian = styled.div`
    padding:1rem;
`
const Row = styled.div`
   
` 
const Column = styled.div`
border-right:1px solid black;
@media (max-width: 1300px){
    padding:0;
    margin-left:0px!important;
    border-right:none;
   }

`


const Balance = () => {
    return(
   <Mian>
          <Row className="row ">
             
            <Column className="col-lg-3 col-md-6 col-12  border-dark ">
                <p className="px-2">BALANCE</p>
                <h2 className="px-2">$5900.00</h2>
            </Column>
            <Column className="col-lg-3 col-md-6 col-12 ">
                <p className="px-2">PROFITS</p>

                <div className="d-flex flex-row align-items-center justify-content-start ">
                  <h2  className="px-2">$950.00</h2>
                  <div className="d-flex flex-row align-items-center justify-content-center ">
                   <GoTriangleUp className="mx-3 text-success"/>
                   <div><p className="my-2 text-success">+56%</p></div>
                  
                  </div>
                </div>
               
            </Column>
            <Column className="col-lg-3 col-md-6 col-12">
                <p  className="px-2">LOSSES</p>
                <div className="d-flex flex-row align-items-center justify-content-start">
                  <h2  className="px-2">$450.00</h2>
                  <div className="d-flex flex-row align-items-center justify-content-center">
                  <GoTriangleDown className="mx-3 text-danger"/>
                  <div><p className="my-2 text-danger">+56%</p></div>
                  </div>
                </div>
           
            </Column>
            <div className="col-lg-3  col-md-6 col-12 px-2">
             <p>CURRENCIES</p>
            </div>
          </Row>
   </Mian>

    );
}

export default Balance;