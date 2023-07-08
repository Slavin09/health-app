import React from 'react'
import styled from 'styled-components'

function QnA() {
  return (
    <Container>
        <br/>
        <hr color='#89C2D9'/>
        <RefBox>
            <SubBox>
                <Freq>
                    <h1>Frequently Asked Questions</h1>
                </Freq>
                <br/>
                <Qpart>
                    <Ques1>
                        <h6>Is Seamless MediCords HIPAA compliant?</h6>
                        <p>Absolutely! Our platform follows all HIPAA requirements<br/>and ensures complete data protection.</p>
                    </Ques1>
                    <Ques2>
                        <h6>How do I integrate MediCords?</h6>
                        <p>Our help center provides comprehensive step-by-step<br/>integration guides for a smooth transition.</p>
                    </Ques2>
                </Qpart>
            </SubBox>
        </RefBox>
    </Container>
  )
}

export default QnA

const Container=styled.div`
height: 65vh;
background-color: rgb(0, 0, 0);

`

const RefBox=styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
`

const SubBox=styled.div`
width: 93rem;
height: 100vh;
color: rgb(97, 165, 194);
font-size: 2.6rem;
padding-left: 7rem;

`

const Freq=styled.div`
h1{
    color: rgb(137, 194, 217);
    font-size: 5%.5;
}
`
const Ques1=styled.div`
p{
    font-size: 1.5rem;;
}
h6{
    margin-block-end: 1.3rem;
}
color: rgb(137, 194, 217);
`

const Ques2=styled.div`
margin-left: 10rem;
p{
    font-size: 1.5rem;;
}
h6{
    margin-block-end: 1.3rem;
}
color: rgb(137, 194, 217);

`
const Qpart=styled.div`
    display: flex;
`