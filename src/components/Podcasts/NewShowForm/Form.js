import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Grid, TextField, Button} from '@material-ui/core';

let Form = (props) => {
	const { handleSubmit } = props;

	const renderTextField = props => <TextField
		label={props.label}
		error={props.meta.error}
		helperText={props.meta.touched && props.meta.error}
		{...props.input}
	/>

	return (
		<Grid
			container
			style={{backgroundColor: 'white'}}
		>
			<Grid
				item
				xs={6}
			>
				<Field
					name="title"
					component={renderTextField}
					label="Title"
				/>
			</Grid>
			<Grid
				item
				xs={6}
			>
				<Field
					name="description"
					component={renderTextField}
					label="Description"
				/>
			</Grid>
			<Grid
				item
				xs={12}
			>
				<Button
					onChange={handleSubmit}
				>
					Hello
				</Button>
			</Grid>
		</Grid>
	);
}

Form = reduxForm({
	form: 'podcast_new_show'
})(Form)

export default Form;