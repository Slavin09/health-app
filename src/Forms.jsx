import React from 'react'
import styled from 'styled-components'

function Forms() {
  return (
    <Container>
        <RefBox>
            <SubBox>
                <Search>
                    <h1>Search Patient</h1>
                    <form action= " "> 
                    <div class="search">
                    <input placeholder="Search address..." type="text"/>
                    <button type="submit">Go</button>
                    </div>
                    </form>
                </Search>
                <Form>
                    <h1>Enter New Records</h1>
                    <form >
                        <div className='form'>
                            <div class="ID">
                                <input placeholder="Name" type="text"/>
                            </div>
                            <div class='CD'>
                                <input placeholder="Wallet Adress" type="text"/>
                            </div>
                            <div class="RD">
                                <input placeholder="Respiratory Disorders" type="text"/>
                            </div>
                            <div class='GD'>
                                <input placeholder="Cardiovascular Disorders" type="text"/>
                            </div>
                            <div class="MD">
                                <input placeholder="Musculoskeletal Disorders" type="text"/>
                            </div>
                            <div class='ND'>
                                <input placeholder="Neurological Disorders" type="text"/>
                            </div>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </Form>
            </SubBox>
        </RefBox>
    </Container>
  )
}

export default Forms

const Container=styled.div`
    height: 100vh;
width: 100%;
background-image: linear-gradient(40deg, rgb(0, 3, 6), rgb(1, 42, 73));
display: flex;
overflow-x: hidden;
`
const Form=styled.div`
text-align: center;
h1{
    color: rgb(125, 215, 255);
}    
.form{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 5%;
}
input[type="text"] {
  width: 400px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin:0% auto 7% auto;
  }

  button[type="submit"] {
 --hover-shadows: 16px 16px 33px #121212,
                   -16px -16px 33px #013358;
 --accent: fuchsia;
 font-weight: bold;
 letter-spacing: 0.1em;
 border: none;
 border-radius: 1.1em;
 background-color: #012038;
 color: white;
 padding: 1em 2em;
 transition: box-shadow ease-in-out 0.3s,
             background-color ease-in-out 0.1s,
             letter-spacing ease-in-out 0.1s,
             transform ease-in-out 0.1s;
 box-shadow: 13px 13px 10px #00182B,
             -13px -13px 10px #01233f;
}

button[type="submit"]:hover {
 box-shadow: var(--hover-shadows);
}

button[type="submit"]:active {
 box-shadow: var(--hover-shadows),
              var(--accent) 0px 0px 30px 5px;
 background-color: var(--accent);
 transform: scale(0.95);
}

`
const Search=styled.div`
display: inline-block;
position: relative;
margin: 5% auto 7% 33%;

  input[type="text"] {
  width: 400px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  button[type="submit"] {
  background-color: #4e99e9;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  top: 0;
  right: 0;
  left: -55px;
  transition: 150ms ease;
}

  button[type="submit"]:hover {
  transform: scale(1.1);
  color: rgb(255, 255, 255);
  background-color: rgb(17, 135, 253);
}
h1{
   color: rgb(125, 215, 255);
   margin-left: 20%;
}
`

const RefBox=styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
`
const SubBox=styled.div`
width: 80rem;
height: 80vh;
margin: auto;
box-shadow: 10px;
background-color: rgb(1, 38, 66, 0.7);
border-radius: 30px;
backdrop-filter: blur(8px);
`