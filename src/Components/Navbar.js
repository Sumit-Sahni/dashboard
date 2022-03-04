import React from "react";
import styled from "styled-components";
import { SiAngellist} from "react-icons/si";
import { GoDashboard } from "react-icons/go";
import { RiExchangeDollarLine} from "react-icons/ri";
import { MdOutlineNotifications } from "react-icons/md";
import { MdLogout } from "react-icons/md";



const Main  = styled.div`
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  justify-content:space-between;
  align-items:center;
  height:90vh;
  opacity:0.5;
  width:auto;
  height:100vh;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 26px #00000017;

  @media (max-width: 1200px) {
    flex-direction:row;
    flex-wrap:wrap;
    webkit-justify-content:none;
    height:auto;
    position:relative;
     
  }
`
const Div1 = styled.div`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
   @media (max-width: 1200px) {
    flex-direction:row!important;

   }
`
const Icon = styled.div`
  font-size:2.5rem;
  cursor:pointer;
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  align-items:center;
  padding:1rem;
  @media (max-width: 1450px) {
    font-size:1rem;
    padding:1rem;
    h6{
        display:none;
    }
   }
`
const Nav = () => {
    return (
       <Main>
             <Div1>
                 <Icon><GoDashboard /><h6>Dashboard</h6></Icon>
                 <Icon><SiAngellist /><h6>Analytics</h6></Icon>
                 <Icon><RiExchangeDollarLine /><h6>Trading</h6></Icon>
                 <Icon><MdOutlineNotifications /><h6>Icon</h6></Icon>
             </Div1>
             <div>
             <Icon><MdLogout/><h6>Logout</h6></Icon>
              
             </div>
       </Main>
    );
}

export default Nav;