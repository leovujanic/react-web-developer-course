import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import IndecisionApp from './components/IndecisionApp';
import './styles/styles.scss'


const appRoot = document.getElementById('app');

Modal.setAppElement(appRoot);

ReactDOM.render(
	<IndecisionApp/>,
	appRoot
);