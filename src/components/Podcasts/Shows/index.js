import React from 'react';
import {useSelector} from 'react-redux';
import Show from '../Show';

const Shows = (props) => {
	// const { shows, showsLoading, showsError } = useSelector(state => ({ ...state.podcasts }));
	const shows = [{
		show_id: "string",
		title: "Flipside",
		description: "A variety music show of randomly-selected albums & songs from our massive LP library",
		episodes: [
			{
				episode_id: "string",
				episode_number: 0,
				title: "string",
				description: "string",
				uri: "string",
				published_date: "2021-03-12T02:04:50.385Z",
				show_id: "string"
			}
		]
	}];
	return (shows.map((show,i) => <Show key={i} {...show}/>));
}

export default Shows;