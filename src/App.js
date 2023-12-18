import './App.css';
import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from './contexts/themeContext';
import { ThemeTogglerButton } from './theme-toggler-button/theme-toggler-button';
import logo from './assets/International_Pokemon_logo.png';

const App = () => {

  return (
    <ThemeProvider>
      <Main>
        <Div >
          <Img src={logo} alt='Pokemon' />
          <Button><ThemeTogglerButton /></Button>
        </Div>
        <Outlet />
        <Footer>
          <h3>GitHub</h3>
          <a href='https://github.com/DevSinastre' target='_blank' rel="noreferrer">Rodrigo Sinastre Pereira</a>
        </Footer>
      </Main>
    </ThemeProvider>
  );
}


const Div =  styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 120px;
  align-items: center;
  justify-content: center;
`

const Img = styled.img`
  height: 100px;
  width:300px;
`

const Button = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
`

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  font-weight: bold;
  text-shadow: -1px -1px 0px rgba(255, 255, 255, 0.2), 
  -1px 1px 0px rgba(255, 255, 255, 0.2),                    
   1px -1px 0px rgba(255, 255, 255, 0.2),                  
   1px 0px 0px rgba(255, 255, 255, 0.2);
`

const Main = styled.main`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  width: 100%;
  padding-bottom: 50px;
`

export default App;