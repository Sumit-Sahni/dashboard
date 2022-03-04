import React from "react";
import styled from "styled-components";
import {GoTriangleUp } from "react-icons/go";
import {GoTriangleDown} from "react-icons/go";


const Mian = styled.div`
    padding:2rem;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 26px #00000017;
    opacity: 1;
`
const Row = styled.div`
   
` 
const Column = styled.div`


`


const Chart = () =>{
    return(
         <Mian className="container-fluid">
             <Row className="row">
               <Column className="col-lg-2 col-md-4 col-6">
                     <div className="d-flex flex-column">
                        <p>India</p>
                        <div className="d-flex flex-row align-items-center">
                            <h4>475</h4>
                            <GoTriangleUp className="mx-3 text-success"/>
                        </div>
                     </div>
               </Column>

               <Column className="col-lg-2 col-md-4 col-6">
               <div className="d-flex flex-column">
                        <p>United States</p>
                        <div className="d-flex flex-row align-items-center">
                            <h4>431</h4>
                            <GoTriangleUp className="mx-3 text-success"/>
                        </div>
                     </div>
               </Column>

               <Column className="col-lg-2 col-md-4 col-6">
               <div className="d-flex flex-column">
                        <p>Canada</p>
                        <div className="d-flex flex-row align-items-center">
                            <h4>174</h4>
                            <GoTriangleDown className="mx-3 text-danger"/>
                        </div>
                     </div>
               </Column>

               <Column className="col-lg-2 col-md-4 col-6">
               <div className="d-flex flex-column">
                        <p>Spain</p>
                        <div className="d-flex flex-row align-items-center">
                            <h4>475</h4>
                            <GoTriangleUp className="mx-3 text-success"/>
                        </div>
                     </div>
               </Column>

               <Column className="col-lg-2 col-md-4 col-6">
               <div className="d-flex flex-column">
                        <p>Japan</p>
                        <div className="d-flex flex-row align-items-center">
                            <h4>134</h4>
                            <GoTriangleUp className="mx-3 text-success"/>
                        </div>
                     </div>
               </Column>

               <Column className="col-lg-2 col-md-4 col-6">
               <div className="d-flex flex-column">
                        <p>South Africa</p>
                        <div className="d-flex flex-row align-items-center">
                            <h4>471</h4>
                            <GoTriangleUp className="mx-3 text-danger"/>
                        </div>
                     </div>
               </Column>
             </Row>

         </Mian>
    );
}

export  default Chart;