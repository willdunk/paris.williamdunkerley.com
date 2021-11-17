import React, { useEffect } from 'react';
import { Field, reduxForm, submit, SubmissionError } from 'redux-form';
import { Card, Grid, CardContent, Typography, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useDispatch } from 'react-redux';
import { actions } from '../../../actions';
import { useHistory } from 'react-router-dom';
import {ReduxTextField} from '../../../utils';

const FORM_NAME = 'newShow';

const NewShowReduxForm = reduxForm({
	form: FORM_NAME,
})(props => {
	const { handleSubmit, error, pristine, reset, submitting } = props;
	const dispatch = useDispatch();

	return (
		<Grid
			container
			justifyContent="center"
		>
			<Grid
				item
				xs={12}
				md={6}
			>
				<Card raised={true}>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h5">
							New Show
						</Typography>
						<form onSubmit={handleSubmit}>
							<Grid
								container
								spacing={2}
								justifyContent="center"
							>
								<Grid
									item
									xs={12}
								>
									<Field
										name="title"
										component={ReduxTextField}
										label="Show Title"
										variant="outlined"
										fullWidth={true}
									/>
								</Grid>
								<Grid
									item
									xs={12}
								>
									<Field
										name="description"
										component={ReduxTextField}
										label="Show Description"
										variant="outlined"
										fullWidth={true}
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
										Create
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

const NewShowForm = (props) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const onSubmit = (values) => {
		// return dispatch(actions.loginUser(values, () => {
		// 	history.push('/');
		// 	history.go(0);
		// }, (error) => {
		// 	throw new SubmissionError({ _error: "Login Failed!" });
		// }));
		console.log(values);
	}

	return (<NewShowReduxForm {...{ onSubmit }} />);
}

export default NewShowForm;