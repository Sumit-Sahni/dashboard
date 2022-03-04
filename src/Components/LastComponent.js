import React from "react";
import styled from "styled-components";
import sumit from "./Images/sumit.jpg";
import Progress from "./Progress";
import usa from "./Images/usa.png";
import Italy from "./Images/Italy.png";
import Spain from "./Images/Spain.png";

const Main = styled.div`

`
const Row = styled.div`

`
const ColumnLeft = styled.div`
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 26px #00000017;
border-radius: 4px;
opacity: 1;
margin-top:0.5rem;
`
const Column = styled.div`

`
const Button = styled.div`
width: 109px;
height: 38px;
/* UI Properties */
box-shadow: 0px 3px 26px #00000017;
border-radius: 100px;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
`

const Image = styled.img`
position: relative; width: 200px; height: 200px; overflow: hidden; border-radius: 50%;
width: 60px; height: auto;
`
const FlagImage = styled.img`
width: 30px;
height: auto;
`

const LastComponent = () =>{
   return(
     <Main className="my-3">
         <Row className="row my-3">
             <Column className="col-lg-6 my-3">
                    <Row className="row ">
                     <div className="col-lg-12 d-flex flex-row justify-content-between align-items-center justify-content-center">
                        <div><h5>Team Members</h5></div>
                        <div><h6 className=" text-info">View All</h6></div>
                     </div>
                 </Row>
                <Row>
                    <ColumnLeft className="d-flex flex-row justify-content-between align-items-center p-1" >
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <div><Image src={sumit}></Image></div>
                        <div className="mx-3"><h6>Andrew Johnston</h6></div>
                    </div>

                    <div>
                        <Button>Top Trader</Button>
                    </div>
                    </ColumnLeft>    

                    <ColumnLeft className="d-flex flex-row justify-content-between align-items-center p-1" >
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <div><Image src={sumit}></Image></div>
                        <div className="mx-3"><h6>Anna Atkinson</h6></div>
                    </div>

                    <div>
                        <Button>Manager</Button>
                    </div>
                    </ColumnLeft>    
                    <ColumnLeft className="d-flex flex-row justify-content-between align-items-center p-1" >
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <div><Image src={sumit}></Image></div>
                        <div className="mx-3"><h6>Mark Atkinson</h6></div>
                    </div>

                    <div>
                        <Button>Top Trader</Button>
                    </div>
                    </ColumnLeft>    
                    <ColumnLeft className="d-flex flex-row justify-content-between align-items-center p-1" >
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <div><Image src={sumit}></Image></div>
                        <div className="mx-3"><h6>Johanna Tairon</h6></div>
                    </div>

                    <div>
                        <Button>Manager</Button>
                    </div>
                    </ColumnLeft>    
                </Row>  
             </Column>
             <Column className="col-lg-6 my-3">
                    <Row className="row"> 
                     <div className="col-lg-12  d-flex flex-row justify-content-between align-items-center justify-content-center">
                     <div><h5>Comparison</h5></div>
                        <div><h6 className=" text-info">View All</h6></div>
                     </div>
                     </Row>
                     
                    <Row className="py-3">
                     <h6><FlagImage src={usa}></FlagImage> United State</h6>
                        <Column className="col-lg-12">
                        <Progress done="90"/>
                        </Column>
                        <h6><FlagImage src={Italy}></FlagImage> Italy</h6>
                        <Column className="col-lg-12">
                        <Progress done="73"/>
                        </Column>
                        <h6><FlagImage src={Spain}></FlagImage> Spain</h6>
                        <Column className="col-lg-12">
                        <Progress done="13"/>
                        </Column>
                    </Row>
             </Column>
         </Row>
     </Main>
   );
}

export default LastComponent;