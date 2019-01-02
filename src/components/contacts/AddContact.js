import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
// import uuid from 'uuid';
import axios from 'axios';

class AddContact extends Component {
	state = {
		name: '',
		email: '',
		phone: '',
		errors: {}
	};

	// static defaultProps = {
	// 	name: 'Kalindi',
	// 	email: 'k@get.com',
	// 	phone: '0400'
	// };

	onChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		});
	};

	onSubmit = async (dispatch, e) => {
		e.preventDefault();
		console.log(this.state);
		const { name, email, phone } = this.state;

		if (name === '') {
			this.setState({ errors: { name: 'Name is required' } });
			return;
		}
		if (email === '') {
			this.setState({ errors: { email: 'Email is required' } });
			return;
		}
		if (phone === '') {
			this.setState({ errors: { phone: 'Phone is required' } });
			return;
		}

		//This is where you can remove the object key
		const newContact = {
			name: name,
			email: email,
			phone: phone
		};

		const res = await axios.post(
			'https://jsonplaceholder.typicode.com/users',
			newContact
		);
		dispatch({ type: 'ADD_CONTACT', payload: res.data });

		this.setState({
			name: '',
			email: '',
			phone: '',
			errors: {}
		});

		this.props.history.push('/');
	};

	render() {
		const { name, email, phone, errors } = this.state;

		return (
			<Consumer>
				{(value) => {
					const { dispatch } = value;

					return (
						<div className="card mb-3">
							<div className="card-header">
								Add Contact
							</div>
							<div className="card-body">
								<form
									onSubmit={this.onSubmit.bind(
										this,
										dispatch
									)}
								>
									<TextInputGroup
										lable="Name"
										name="name"
										placeholder="Enter Name..."
										value={name}
										onChange={this.onChange}
										error={errors.name}
									/>
									<TextInputGroup
										lable="Email"
										type="email"
										name="email"
										placeholder="Enter Email..."
										value={email}
										onChange={this.onChange}
										error={errors.email}
									/>
									<TextInputGroup
										lable="Phone"
										type="phone"
										name="phone"
										placeholder="Enter Phone..."
										value={phone}
										onChange={this.onChange}
										error={errors.phone}
									/>
									<input
										type="submit"
										value="Add Contact"
										className="btn btn-primary"
										style={{ float: 'right' }}
									/>
								</form>
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default AddContact;
