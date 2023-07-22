import React from 'react';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import NewsIcon from '@mui/icons-material/ArticleOutlined';
import ListIcon from '@mui/icons-material/List';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import styled from 'styled-components';
import butterflyImage from './butterfly_338337.png';
const Link=styled.a`
padding:3px 2px;
`;
const Item =styled.div`

align-items:center;
gap:20px;
cursor:pointer;
padding:2px 17px;

&:hover{
  background-color:${({theme})=>theme.soft};
}
`;
const TopSec=styled.div`
left:0px;
padding-bottom:50px;
`;
const MiddleSec=styled.div`
left:0px;
padding-bottom:70px;
`;
const BottomSec=styled.div`
left:0px;

`;

const Image=styled.img`

width:20px;
`;
const MenuSec=styled.div`
left:0px;
`;
function Menu(){
 return(
   <MenuSec>
   <TopSec>
   <Link href="#" style={{textDecoration:"none",color:"#D3D3D3"}}>
    <Item>
    <Image src={butterflyImage}/>
    </Item>
     </Link>
     <Link href="#" style={{textDecoration:"none",color:"#D3D3D3"}}>
      <Item>
      <SearchOutlinedIcon/>
      </Item>
       </Link>
       </TopSec>
       <MiddleSec>


   <Link href="#" style={{textDecoration:"none",color:"#D3D3D3"}}>
    <Item>
    <HomeIcon/>
    </Item>
     </Link>

     <Link href="#" style={{textDecoration:"none",color:"#D3D3D3"}}>
      <Item>
        <NewsIcon/>
      </Item>
       </Link>


       <Link href="#" style={{textDecoration:"none",color:"#D3D3D3"}}>
        <Item>
          <ListIcon/>
        </Item>
         </Link>
         <Link href="#" style={{textDecoration:"none",color:"#D3D3D3"}}>
          <Item>
            <AccountCircleIcon/>
          </Item>
           </Link>



           </MiddleSec>
           <BottomSec>



           <Link href="#" style={{textDecoration:"none",color:"#D3D3D3"}}>
            <Item>
              <CloudUploadIcon/>
            </Item>
             </Link>
             <Link href="#" style={{textDecoration:"none",color:"#D3D3D3"}}>
              <Item>
                <NotificationsNoneIcon/>
              </Item>
               </Link>
       </BottomSec>
</MenuSec>
 );
}
export default Menu;
