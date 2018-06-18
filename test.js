import test from 'ava';
import alfyTest from 'alfy-test';

// This is actually an integration test, which is what I want
test('indie', async t => {
	const alfy = alfyTest();
	const result = await alfy('indie');

	t.true(result[0] !== null);
	t.true(result[0].title !== null);
	t.true(result[0].subtitle !== null);
	t.true(result[0].arg !== null);
});
