import React, { useContext } from "react";
import { ThemeContext, themes } from "../contexts/themeContext";
import { Button } from "../button/button";
import styled from 'styled-components';

export const ThemeTogglerButton = () => {

    const { theme, setTheme } = useContext(ThemeContext);

    return (

        <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light) }>
            <Icon>🌙</Icon>
            <Icon>🌞</Icon>
            <IconBall style={{ transition: theme.transition, right: theme.right, left: theme.left}}>⚪</IconBall>
        </Button>

    )
}

const Icon = styled.i`
    font-style: normal;
`

const IconBall = styled.i`
    position: absolute;
    font-style: normal;
    left: -1px;
    top: -2px;
    font-size: 18px;
`