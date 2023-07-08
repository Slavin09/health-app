import React from 'react'
import Header from './Header.jsx'
import { styled } from 'styled-components'
//import { user } from './Login'
import "../flow/config.js"

function Home(props) {
  // const LoggedIn= () => {
  //   return(
  //     <Text>
  //           <form action=" ">
  //             <div>
  //               <label htmlFor="searchElement"></label>
  //               <input type="text" name="searchElement" id="searchElement" placeholder='Enter Address'/>
  //             </div>
  //           </form>
  //       </Text>
  //   );
  // };

  // const UnAuth =() =>{
  //   return(
  //       <Text>
  //         Please Log In to continue.
  //       </Text>
  //   )
  // }

  return (
    <Container>
        {/* <h1 className='SubHeading'>Decentralized Medical Records</h1>
      <Search>
        {console.log("Home: "+props.user)}
        {props.user ? <LoggedIn/> : <UnAuth/>}
        <Button>
          Get Records
        </Button>
      </Search> */}
      <Header/>
        <RefBox>
          <SubBox>
            <h1>
            Revolutionize medical <br/>record management<br/> today.
            </h1>
          </SubBox>
        </RefBox>
    </Container>
  )
}

export default Home

const Container=styled.div`
height: 100vh;
width: 100%;
background-image: linear-gradient(40deg, rgb(0, 3, 6), rgb(1, 42, 73));
display: flex;
overflow-x: hidden;
`
const SubBox=styled.div`
width: 93rem;
height: 100vh;
color: rgb(97, 165, 194);
font-size: 2.6rem;

h1{
  margin-top: 33%;
  padding-left: 7rem;
}
`
const RefBox=styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
`





const Search=styled.div`
margin: 23% 0 25% 30%;
display: flex;
`
const Text=styled.div`
height: 40px;
width: 300px;
background-color: white;
border-radius: 30px;
display: flex;
justify-content: center;
align-items: center;
margin-right: -13px;

input[type=text]{
  box-sizing: border-box;
  width: 300px;
  border: none;
  border-radius: 30px;
  margin: 0px;
  padding: 10px;
  outline: none;
  letter-spacing: 1px;
  text-align: center;
  font-size: 15px;
}
`
const Button=styled.div`
height: 40px;
width: 150px;
background-color: cyan;
border-radius: 0px 30px 30px 0px;
display: flex;
align-items: center;
justify-content: center;
`