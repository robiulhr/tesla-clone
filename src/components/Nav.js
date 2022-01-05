import React, { useState } from 'react'
import styled from 'styled-components'
function Nav() {
    const [sideBarOpen, setsideBarOpen] = useState(false)
    return (
        <>
            <SideMunufade sidemenustatus={sideBarOpen} onClick={() => { setsideBarOpen(false) }}>

            </SideMunufade>
            <NavSection>
                <NavLeft>
                    <a href='#'><img src='/img/logo/logo.svg' alt='Logo' /></a>
                </NavLeft>
                <NavMenu>
                    <li>Model S</li>
                    <li> Model 3</li>
                    <li> Model X</li>
                    <li>Model Y</li>
                    <li>Solar Roof</li>
                    <li>Solar Panels</li>
                </NavMenu>
                <NavRight>
                    <li>Shop</li>
                    <li>Account</li>
                    <li onClick={() => { setsideBarOpen(true) }}>Menu</li>
                </NavRight>

                <SideMenu sidemenustatus={sideBarOpen}>
                    <div>
                        <li onClick={() => { setsideBarOpen(false) }}>Back</li>
                    </div>
                    <li>Existing Inventory</li>
                    <li>Used Inventory</li>
                    <li>Trade-In</li>
                    <li>Model Y</li>
                    <li>Test Drive</li>
                    <li> Cybertruck</li>
                    <li>Roadster</li>
                    <li>Semi</li>
                    <li>Charging</li>
                    <li>Powerwall</li>
                    <li>Utilities</li>
                    <li>Find Us</li>
                    <li>Support</li>
                    <li>Investor Relations</li>
                    <li>United States English</li>
                </SideMenu>
            </NavSection>

        </>

    )
}

export default Nav


const NavSection = styled.div`
position: fixed;
top: 0;
padding: 20px;
display: flex;
width: 100%;
justify-content: space-between;
z-index: 250;
`
const NavLeft = styled.div`
width: 25%;

`
const NavMenu = styled.ul`
width: 50%;
display: flex;
align-items: center;
justify-content: center;
list-style: none;
li{
padding:5px 15px;
font-size: 17px;
font-weight: 500;
border-radius: 10px;
transition: all .6s ease-in-out;
:hover{
    background-color: #92a7b6a8 !important;
}
}
 @media(max-width: 1250px) {
     display: none;
  }
`
const NavRight = styled(NavMenu)`
width: 25%;
justify-content: flex-end;
 @media(max-width: 1250px) {
     display: flex;
  }
`
const SideMunufade = styled.div`
background-color: #000000a8;
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 200;
${props => props.sidemenustatus === false ? 'display: none' : 'display: fixed'};
`
const SideMenu = styled(NavMenu)`
flex-direction:column;
position: fixed;
right: 0;
${props => props.sidemenustatus === false ? 'transform: translateX(100%)' : 'transform: translateX(0%)'};
transition: all .5s ease-in-out;
background-color: white;
top: 0;
bottom: 0;
align-items: left;
justify-content: flex-start;
max-width: 300px;
padding: 10px;
li{
    text-align: start;
    padding:10px 30px;    
:hover{
    background-color: none;
}
}
div{
    width: 100%;
    padding: 10px;
    text-align: start;
    li{
        font-size: 19px;
    }
}
 @media(max-width: 1250px) {
     display: flex;
  }
`