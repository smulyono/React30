/* importing styles from `./assets/styles/index.css */
import "./assets/styles/index.less";
import React from 'react';
import { render } from 'react-dom';
import Clock from './components/clock';

// /* Start of javascript */
render(
    <Clock />,
    document.getElementById("root")
);
