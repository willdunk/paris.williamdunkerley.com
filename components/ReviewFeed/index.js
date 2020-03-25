import React from 'react';
import Card from '@material-ui/core/Card';
import Parser from 'rss-parser';

class ReviewFeed extends React.Component {
	constructor() {
		super();
		this.state = {reviews: []};
	}

	async componentDidMount() {
		const parser = new Parser();
		const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
		let feed = await parser.parseURL(CORS_PROXY + 'https://letterboxd.com/hahaveryfun/rss');
		let sanitizedItems = feed.items.filter((item) => {
			return item.guid.includes('letterboxd-review');
		});
		this.setState({reviews: sanitizedItems},);
	}

	render() {
		console.log(this.state.reviews);
		return (
			this.state.reviews.map((review, i) => {
				return (
					<Card
						style={{ marginTop: 8, }}
					>
						{review.title}
						<br />
						{review.contentSnippet}
					</Card>
				);
			})
		)
	}
}

export default ReviewFeed;