import React from 'react'
import styled from 'styled-components'

function About() {
  return (
    <Container>
        <RefBox>
            <SubBox>
                <Ft1>
                    <Image1 src="public/Feature1.jpg" alt='Feature Image'/>
                    <Description1>
                        <h1>Secure Authentication</h1>
                        <h4>Experience top-notch security with our state-of-the-art <br/>user authentication system, ensuring privacy and data <br/>protection.</h4>
                    </Description1>
                </Ft1>
                <Ft2>
                    <Description2>
                        <h1>Easily Accessible Records</h1>
                        <h4>Search, view, and manage medical records all in one <br/>place for maximum convenience and organization.</h4>
                    </Description2>
                    <Image2 src="public/Feature2.jpg" alt='Feature Image'/>
                </Ft2>
            </SubBox>
        </RefBox>
    </Container>
  )
}

export default About

const Container=styled.div`
    height: 130vh; 
    width: 100%;
    background-color: rgb(0, 0, 0);
    overflow-x: hidden;
`
const RefBox=styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
`
const SubBox=styled.div`
width: 78rem;
height: 100vh;
color: rgb(97, 165, 194);
justify-content: center;
`
const Ft1=styled.div`
width: 100%;
height: 35rem;
margin-top: 3rem;
display: flex;
align-items: center;
`
const Image1=styled.img`
height: 33rem;
width: 32rem;
object-position: center center;
object-fit: cover;
border-radius: 40px;
filter: grayscale(100%);
`
const Description1=styled.div`
    padding-left: 6rem;
    font-size: 1.5rem;
`
const Ft2=styled.div`
width: 100%;
height: 35rem;
margin-top: 3rem;
display: flex;
align-items: center;
`
const Description2=styled.div`
    padding-right: 6rem;
    font-size: 1.5rem;
`
const Image2=styled.img`
height: 33rem;
width: 32rem;
object-position: center center;
object-fit: cover;
border-radius: 40px;
filter: grayscale(100%);
`