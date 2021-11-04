import React from 'react';
import { Field, reduxForm, submit, SubmissionError } from 'redux-form';
import { Card, Grid, TextField, CardContent, Typography, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useDispatch } from 'react-redux';
import { actions } from '../../../actions';
import { useHistory } from 'react-router-dom';

const FORM_NAME = 'registration';

const ReduxTextField = ({
	label,
	input,
	meta: { touched, invalid, error },
	...custom
}) => (<TextField
	label={label}
	placeholder={label}
	error={touched && invalid}
	helperText={touched && error}
	{...input}
	{...custom}
/>)

const RegistrationReduxForm = reduxForm({
	form: FORM_NAME,
})(props => {
	const { handleSubmit, error, pristine, reset, submitting } = props;
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
							Registration
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
								{!!error && <Grid item xs={12}><Alert severity="error">{error}</Alert></Grid>}
								<Grid
									item
								>
									<Button
										color={"primary"}
										variant={"contained"}
										onClick={() => dispatch(submit(FORM_NAME))}
									>
										Register
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

const RegistrationForm = (props) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const onSubmit = (values) => {
		return dispatch(actions.loginUser(values, () => {
			history.push('/');
			history.go(0);
		}, (error) => {
			throw new SubmissionError({ _error: "Registration Failed!" });
		}));
	}

	return (<RegistrationReduxForm {...{ onSubmit }} />);
}

export default RegistrationForm;