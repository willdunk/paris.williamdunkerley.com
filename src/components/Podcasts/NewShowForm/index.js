import React from 'react';
import Form from './Form'

const NewShowForm = (props) => {
	const submit = (values) => {
		console.log(values);
	}

	return(
		<Form onSubmit={submit} />
	)
}

export default NewShowForm;