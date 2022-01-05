import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <Container>
            <ul>
                <li>Tesla © 2022</li>
                <li>Privacy & Legal</li>
                <li>Contact</li>
                <li>Careers</li>
                <li>News</li>
                <li>Engage</li>
                <li>Locations</li>
            </ul>
        </Container>
    )
}

export default Footer

const Container = styled.div`
width: 100%;
ul{
    width: 35%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin: 0 auto;
@media(max-width: 1300px) {
  width: 45%;
  }
 @media(max-width: 1100px) {
  width: 60%;
  }
 @media(max-width: 900px) {
  width: 80%;
  }
  @media(max-width: 768px) {
  width: 90%;
  }
li{
    padding: 25px 0px;
    list-style: none;
    color: #2F3136;
    font-size: 15px;
}
}
`