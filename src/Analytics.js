import React from 'react';
import styled from 'styled-components';
import Stackedbarchart from './Graph1';
import Donutchart from './Graph2';
import Dropdown from './Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




const Title=styled.div`
margin-left:25px;
margin-top:30px;
font-family: 'Roboto Slab', serif;
font-size:15px;
color:#7f00ff;
font-weight:bold;
`;

const Anal =styled.div`
 margin-right:0px;
`;
const Hr=styled.hr`
margin-top:0px;
margin-right:-50px;
border:0.7px solid #7f00ff };
`;
const Desc=styled.div`
padding-left:0px;
font-size:10px;
padding-bottom:16px;
 font-family: Arial, sans-serif;
color:#7f7f7f;
`;
const Dropdownhr=styled.hr`
border-bottom: 1px solid #ccc;
margin: 0px;
width: 160px;


`;
const Graphsec=styled.div`

margin-left:60px;


display:flex;
  float:left;
width:40%;

`;
const Graphdesc=styled.div`
font-size:14px;
margin-left:25px;
display: flex;
text-align: center;

`;
const Cost1=styled.div`
font-size:25px;
font-weight:bold;
margin-left:25px;

font-family: 'Roboto Slab', serif;
`;
const Track=styled.div`
display:flex;
`;

const Select=styled.select`
      border: none;
      padding-left:5px;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      padding-bottom:10px;


`;
const Option=styled.option`
      border: none;
      padding: 5px;
`;
const Form=styled.form`
      margin-left:25px;
      font-size:15px;

`;
const Label=styled.label`
font-weight:bold;
padding-right:10px;
padding-bottom:5px;
padding-top:5px;


`;
const Gr1=styled.div`



`;
const Gr2=styled.div``;
const Gr3=styled.div``;
const IconContainer = styled.div`

  transform: translateY(-50%);
  pointer-events: none;
`;

export default function Analytics(){

  const data1 = [78];
  const data2 = [95];
  const data3 = [59];
  return (
  <Anal>
    <Title>Requirement Income</Title>
    <Cost1 style={{ fontSize: '20px',paddingBottom: '10px' }}>Starting Year 2056</Cost1>
    <Track>
    <Cost1 style={{ marginRight:'35px'  }}>$300,000<Desc> My Goal</Desc><Hr/></Cost1>
    <Cost1 style={{ marginRight:'35px'  }}>59%<Desc>Goal Achieved</Desc><Hr/></Cost1>
    <Cost1 style={{ marginRight:'35px'  }}>$300<Desc>Est. Monthly Income</Desc><Hr/></Cost1>
     </Track>
     <Cost1 style={{ fontSize: '18px',paddingBottom: '10px' }}>Contributions Overtime</Cost1>
     <Stackedbarchart />

    <Cost1 style={{ fontSize: '18px',paddingBottom: '5px',marginRight:'35px' }}>How do I comapare to my peers?</Cost1>
    <Desc style={{marginLeft:'25px' }}>These numbers represent current goal achievement</Desc>

    <Form>
    <div>
    <Label >Age:</Label>
    <Select>
      <Option>Under 30 </Option>

    </Select>

    </div>
    <Dropdownhr/>
      <div>
    <Label >Salary:</Label>
    <Select >
      <Option>K20-K30 </Option>

    </Select>

      </div>
      <Dropdownhr/>
        <div>
    <Label >Gender:</Label>
    <Select >
      <Option>Male<ExpandMoreIcon/></Option>

    </Select>

      </div>
      <Graphsec>
      <Donutchart data={data1}/>
      <Donutchart data={data2}/>
      <Donutchart data={data3}/>

      </Graphsec>
  </Form>

    </Anal>
  );
}
