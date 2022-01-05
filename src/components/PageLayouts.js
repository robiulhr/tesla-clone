import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import Fade from 'react-reveal/Fade';
import Footer from './Footer';
function PageLayouts({ title, description, image, leftBtntext, rightBtntext, arrowDown, footer }) {
    return (
        <Container bgimage={image} >
            <Fade bottom>
                <LoyoutText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </LoyoutText>
            </Fade>
            <LayoutButton arrowDown={arrowDown} footerStatus={footer}>
                <LinkButton>
                    <Fade left={rightBtntext ? true : false} bottom={!rightBtntext ? true : false} >
                        <LeftButton>{leftBtntext}</LeftButton>
                    </Fade>
                    {rightBtntext && <Fade right><RightButton> {rightBtntext}</RightButton></Fade>}
                </LinkButton>
                {arrowDown && <ArrowButton >
                    <img src="down-arrow.svg" alt="" />
                </ArrowButton>}
            </LayoutButton>
            {footer && <Footer></Footer>}
        </Container>

    )
}

export default PageLayouts

//============ animation
const animation = keyframes`
  0%,20%,50%,80%,100% {
     transform: translateY(0px);
   }
   40% {
     transform: translateY(3px);
   }
   60% {
     transform: translateY(5px);
   }
   
    `
const arrowDown = css`
  ${animation} 1s infinite;
`

//==============

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: url('${props => props.bgimage}');
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const LoyoutText = styled.div`
    padding-top: 8rem;
 h1{
        text-align: center;
        margin-bottom: .6rem;
        font-size: 2.4rem;
        color: #383838;
    }
    p{
        text-align: center;
        font-size: 1.2rem;
        color: #383838;

    }
`
const LayoutButton = styled.div`
  ${props => !props.arrowDown && 'margin-bottom:45px;'}
  ${props => props.footerStatus && 'margin-bottom: -350px;'}

`
const LinkButton = styled.div`
display: flex;
flex-direction: row;
  @media(max-width: 768px) {
  flex-direction: column;
  }
`
const LeftButton = styled.div`
padding: 10px 120px;
background-color: #2F3136;
border-radius: 20px;
color:  #D7D5D6;
margin: 10px;
text-transform: uppercase;
transition: all .4s ease-in-out;
border: 2px solid transparent;
:hover{
border-color: #D7D5D6;
}
`
const RightButton = styled(LeftButton)`
background-color: #D7D5D6;
color: #2F3136;
:hover{
border-color:  #2F3136;
}

`
const ArrowButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 20px;
img{
    height: 40px;
    animation: ${arrowDown};
}
`