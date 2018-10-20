import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import 'normalize.css/normalize.css'
import './styles/styles.scss'


const appRoot = document.getElementById('app');

Modal.setAppElement(appRoot);

ReactDOM.render(
	<p>This is my boilerplate</p>,
	appRoot
);
