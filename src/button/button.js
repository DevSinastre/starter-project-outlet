import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";
import styled from 'styled-components'

export const Button = (props) => {

    const { theme } = useContext(ThemeContext);

    return (
        <Botao {...props}
            style={{ transition: theme.transition, background: theme.backgroundColor }}
        ></Botao>
    )
}

const Botao = styled.button`
    position: relative;
    width: 50px;
    height: 25px;
    border-radius: 13px;
`