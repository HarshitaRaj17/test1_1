import React from 'react';
import styled from 'styled-components';
import Dropdown from './Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';





const Profilesec=styled.div`
background-color:#EEEEEE;
height:100%;
width:500px;
color:#363636;
margin-right:5px;
padding-left:30px;
padding-right:10px;
`;
const TopSec=styled.div`
  display:flex;
  width:250px;
`;
const Profilepic=styled.img`
  width:90px;
  height:90px;
  border-radius:100%;
  margin:15px 15px;
`;
const Title=styled.div`
margin-right:15px;
width:100px;
margin-top:30px;
font-family: 'Roboto Slab', serif;
font-size:25px;

`;
const Welcome=styled.div`
font-size:10px;
padding-bottom:16px;
color:#7f7f7f;
 font-family: Arial, sans-serif;
`;
const Desc=styled.div`
padding-left:17px;
font-size:10px;
padding-bottom:16px;
color:#7f7f7f;
 font-family: Arial, sans-serif;
`;
const Currdate=styled.div`
font-family: 'Roboto Slab', serif;
padding-left:17px;
font-weight:bold;

`;
const Cost1=styled.div`
font-size:25px;
font-weight:bold;
padding-left:17px;
font-family: 'Roboto Slab', serif;
`;
const Cost2=styled.div`
font-weight:bold;
font-size:18px;
font-weight:bold;
padding-left:17px;
font-family: 'Roboto Slab', serif;
`;
const Cost3=styled.div`
font-weight:bold;
font-size:14px;
font-weight:bold;
padding-left:17px;
font-family: 'Roboto Slab', serif;

`;
const Hr=styled.hr`
margin:10px 20px;
border:0.5px solid #7f7f7f };
`;
function Profile(){
  return (
    <Profilesec>
    <TopSec>
    <Profilepic src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg">
    </Profilepic>
    <Title>Hi Mike,<Welcome>welcome back</Welcome></Title>
     </TopSec>
     <Currdate>Today</Currdate>
     <Cost1>$19,892</Cost1>
     <Desc>account balance</Desc>
     <Cost2>$4,000</Cost2>
     <Desc>Year-to-date Contributions</Desc>
     <Cost3>$1,892</Cost3>
     <Desc>Total Interest<Dropdown style={{fontSize:'13px',marginTop:'10px',padding:'4px 10px'}} title="I want to"/></Desc>
     <Cost2>Recent Transactions</Cost2>
     <Desc>2020-08-07</Desc>
     <Cost3>Withdrawal Transfer to Bank-XXX11</Cost3><Hr/>
     <Desc>2020-08-07</Desc>
     <Cost3>Withdrawal Transfer to Bank-XXX11</Cost3><Hr/>
     <Desc>2020-08-07</Desc>
     <Cost3>Withdrawal Transfer to Bank-XXX11</Cost3><Hr/>
    </Profilesec>

  );
}
export default Profile;
