import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Container>
        <RefBox>
            <SubBox>
                <a>
                <span>
                    Features<br/>
                    Authentication<br/>
                    Accessibilty<br/>
                    Security
                </span>
            </a>
            <a>
                <span>
                    Support<br/>
                    Help<br/>
                    FAQ<br/>
                    Contact
                </span>
            </a>
            <a>
                <span>
                    Company<br/>
                    About<br/>
                    Pricing<br/>
                    Terms
                </span>
            </a>
            </SubBox>
            <SubBox1>
                2023 Medicords
            </SubBox1>
        </RefBox>
    </Container>
  )
}

export default Footer

const Container=styled.div`
    background-color: rgb(0, 0, 0);
    height: 35rem;
    color: #89C2D9;
`
const RefBox=styled.div`
width: 100%;
height: 30vh;
`
const SubBox=styled.div`
width: 93rem;
height: 30vh;
color: rgb(97, 165, 194);
font-size: 1.3rem;
padding-left: 7rem;
display: flex;
a{
    margin: 10% 16% auto auto;
}
span{
    letter-spacing: 1px;
    font-size: 90%;
    justify-content: center;
}
`
const SubBox1=styled.div`
    width: 93rem;
    height: 20vh;
    color: rgb(97, 165, 194);
    font-size: 1.2rem;
    letter-spacing: -1px;;
    padding-left: 17rem;
    margin-top: 3%;
`


