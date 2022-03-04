import React from "react";
import styled from "styled-components";
import sumit from "./sumit.jpg";

const Mian = styled.div`
   padding:1rem;
   @media (max-width: 968px) {
       padding:0rem;
   }
`
const Row = styled.div`
   display:flex;
   flex-direction:row;
`
const Column= styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items:center;
`
const Button = styled.button`
width: 161px;
height: 58px;
background: #00E38C 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 26px #0000001C;
border-radius: 5px;
opacity: 1;
border: none;
color: #FFFFFF;

@media (max-width: 1450px) {
    margin-top:0;
    padding:0;
    font-size:0.5rem;
    width: 50px;
    height: 20px;
}

`

const Image = styled.img`
position: relative; width: 200px; height: 200px; overflow: hidden; border-radius: 50%;
width: 60px; height: auto;
`
const Dashead = () => {
    return(
   <Mian className="">
       <Row className="row">
              <Column className="col-lg-12 col-12 border border-black ">
                <div>
                    <h1>Dashboard</h1>
                    <p>Welcome back, Andrew</p>
                </div>
                
                 <div className="d-flex align-items-center">
                     <Button>Add Units</Button>
                     <div className="d-flex flex-row justify-content-between  align-items-center mx-2 px-2 w-100" >
                         <Image src={sumit}></Image>
                         <h6>Adrew johnson</h6>
                     </div>
                 </div>
                 
              </Column>
       </Row>
    </Mian>

    );
}

export default Dashead;