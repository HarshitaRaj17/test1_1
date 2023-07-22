import React from 'react';
import styled from 'styled-components';
const RetireCard=styled.div`
position:relative;
top:60px;
right:220px;
display:flex;
flex-direction:column;
margin-left:0px;
`;
const Card=styled.div`
background-color:#EEEEEE;

padding-left:0px;
padding-right:20px;
padding-top:20px;
padding-bottom:150px;
border-radius:15px;
margin-bottom:20px;
width:250px;

`;
const Form=styled.form`
`;
const Label=styled.label`
font-size:14px;
font-weight:bold;
padding-left:17px;
font-family: 'Roboto Slab', serif;
`;
const Last=styled.div`
 border-left:0.7px solid #7f00ff;
 font-size:14px;
 padding-left:10px;

`;
const Input=styled.input`
margin-left:16px;
-webkit-appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 5px;

  outline: none;
  position: relative;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;

    cursor: pointer;
    position: relative;
    z-index: 2;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border: none;
    border-radius: 50%;
    background: #fff;

    cursor: pointer;
    position: relative;
    z-index: 2;
  }

  &::before {
    content: '';
    width: 100%;
    height: 2px;
    background: #7f00ff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }
`;
const Button=styled.button`
background-color: #007bff; /* Blue color */
  border: none; /* No border */
  color: #fff; /* White text */
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  position:absolute;
  top:270px;
  left:10px;
  width:90%;
`;
const Hr=styled.hr`
margin-left:20px;
width:220px;
position:absolute;
top:160px;
border:0.8px solid #7f7f7f };
`;
const Cost1=styled.div`
font-size:16px;
font-weight:bold;
padding-left:17px;
font-family: 'Roboto Slab', serif;
`;
const Link=styled.a`
text-decoration:none;
color:#7f00ff;
position:absolute;
top:330px;
left:80px;
`;
const Grey=styled.div`
color:grey;
font-size:12px;
font-weight:bold;
`;
const Desc=styled.div`
margin-top:50px;
`;
const Left=styled.div`

float:left;
margin-left:16px;
`;
const Right=styled.div`
float:right;
margin-right:0px;
`;
export default function Retire(){
  return(
    <RetireCard>
    <Card>
    <Cost1>Retirement Strategy</Cost1>

    <Form action="">
     <Label for="vol">Employee Contribution</Label><div>
     <Input type="range" id="vol" name="vol" min="0" max="50"/></div>
     <Label for="vol">Retirement Age</Label><div>
     <Input type="range" id="vol" name="vol" min="0" max="50"/></div>
     <Desc>
     <Left>Employee Contribution</Left>
     <Right>8.4%</Right>
     <Left>Interest Rate</Left>
     <Right>5%</Right></Desc>
     <Button>Update</Button>
     </Form>


    <Hr/>
    <Cost1 style={{fontSize:'12px'}}><Link>View Help Docs ></Link></Cost1>
    </Card>
    <Last>
    Are you considering a <br/>
    <strong>Housing Advance?</strong>
    <Grey>Limited time reduced interest.</Grey>
    <a href="#">Learn More ></a>
    </Last>
    </RetireCard>
  );
}
