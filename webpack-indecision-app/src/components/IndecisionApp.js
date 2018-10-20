import React from 'react';

import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component {

	state = {
		options: [],
		selectedOption: undefined,
	};

	componentDidMount() {
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
			if (options) {
				this.setState(() => ({
					options,
				}));
			}
		} catch (e) {
			// do nothing
		}

	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}

	componentWillUnmount() {
		console.log('Component will unmount');
	}

	handleClearSelectedOption = () => {
		this.setState(() => ({selectedOption: undefined}));
	};

	handleDeleteOptions = () => {
		this.setState(() => ({
			options: [],
		}));
	};

	handlePick = () => {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		this.setState(() => ({
			selectedOption: option,
		}));
	};

	handleAddOption = (option) => {
		if (!option) {
			return 'Enter valid value to add item';
		}
		if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists';
		}

		this.setState((prevState) => ({
			options: prevState.options.concat(option)
		}));
	};

	handleDeleteOption = (optionToRemove) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => {
				return optionToRemove !== option;
			}),
		}));
	};

	render() {
		const subTitle = 'Put your life in the hands of a computer';

		return (
			<div>
				<Header subTitle={subTitle}/>
				<Action
					handlePick={this.handlePick}
					hasOptions={this.state.options.length > 0}
				/>
				<Options
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
					handleDeleteOption={this.handleDeleteOption}
				/>
				<AddOption
					handleAddOption={this.handleAddOption}
				/>
				<OptionModal
					selectedOption={this.state.selectedOption}
					handleClearSelectedOption={this.handleClearSelectedOption}
				/>
			</div>
		)
	};
}