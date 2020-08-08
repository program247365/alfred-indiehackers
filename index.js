'use strict';
const alfy = require('alfy');

const ENDPOINT = 'https://alfred-indiehackers-service.program247365.vercel.app/api';

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
