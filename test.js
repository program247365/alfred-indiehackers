const test = require('ava');
const alfyTest = require('alfy-test');

// This is actually an integration test, which is what I want
test('indie', async t => {
	const alfy = alfyTest();
	const result = await alfy('indie');

	t.true(result[0] !== null);
});
