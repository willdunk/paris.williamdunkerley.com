import React from 'react';
import { Field, reduxForm, submit} from 'redux-form'
import {Card, Grid, TextField, CardContent, Typography, Button} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { actions } from '../../../actions';

const FORM_NAME = 'login';

const ReduxTextField = ({
	label,
	input,
	meta: { touched, invalid, error },
	...custom
}) => (
		<TextField
			label={label}
			placeholder={label}
			error={touched && invalid}
			helperText={touched && error}
			{...input}
			{...custom}
		/>
	)

const LoginReduxForm = reduxForm({
	form: FORM_NAME
})(props => {
	const { handleSubmit } = props;
	const dispatch = useDispatch();

	return (
		<Grid
			container
			justify="center"
		>
			<Grid
				item
				xs={12}
				md={4}
			>
				<Card raised={true}>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h5">
							Login
						</Typography>
						<form onSubmit={handleSubmit}>
							<Grid
								container
								spacing={2}
								justify="center"
							>
								<Grid
									item
									xs={12}
								>
									<Field
										name="username"
										component={ReduxTextField}
										label="Username"
										variant="outlined"
										fullWidth={true}
									/>
								</Grid>
								<Grid
									item
									xs={12}
								>
									<Field
										name="password"
										component={ReduxTextField}
										label="Password"
										variant="outlined"
										type="password"
										fullWidth={true}
										autoComplete="current-password"
									/>
								</Grid>
								<Grid
									item
								>
									<Button
										color={"primary"}
										variant={"contained"}
										onClick={() => dispatch(submit(FORM_NAME))}
									>
										Login
									</Button>
								</Grid>
							</Grid>
						</form>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
})

const LoginForm = (props) => {
	const dispatch = useDispatch();
	const onSubmit = (values) => {
		console.log(values);
		dispatch(actions.postUserLogin(values));
	}
	return (<LoginReduxForm {...{onSubmit}} />);
}

export default LoginForm;