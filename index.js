'use strict';
const alfy = require('alfy');

const ENDPOINT = 'https://be-api.party/api/alfred-indiehackers';

alfy.fetch(ENDPOINT).then(data => {
	const items = alfy
		.inputMatches(data, 'title')
		.map(x => ({
			title: x.title,
			subtitle: x.subtitle,
			arg: x.url
		}));

	alfy.output(items);
});
