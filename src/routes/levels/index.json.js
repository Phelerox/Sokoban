import levels from './_levels.js';


const contents = JSON.stringify(levels.map(level => {
	return {
		title: level.name,
		slug: level.slug
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}