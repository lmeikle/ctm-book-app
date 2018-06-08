import { parseBook } from '../bookParser';
import fetch from 'node-fetch';

let testInput = `THE RAILWAY CHILDREN

By E. Nesbit


To my dear son Paul Bland,
	behind whose knowledge of railways
my ignorance confidently shelters.


	Contents.

	I.    The beginning of things.
	II.   Peter's coal-mine.`;

let testOutput = {
	"beginning": [1, false], "behind": [1, false], "bland": [1, false], "by": [1, false], "children": [1, false],
	"coalmine": [1, false], "confidently": [1, false], "contents": [1, false], "dear": [1, false],
	"e": [1, false], "i": [1, false], "ignorance": [1, false], "ii": [1, false], "knowledge": [1, false],
	"my": [2, true], "nesbit": [1, false], "of": [2, true], "paul": [1, false], "peters": [1, false],
	"railway": [1, false], "railways": [1, false], "shelters": [1, false], "son": [1, false], "the": [2, true],
	"things": [1, false], "to": [1, false], "whose": [1, false]
};

test('test successful api request', () => {
	fetch.mockResponse(testInput);

	parseBook('canbeanything').then(result => {
		expect(result).toEqual(testOutput);
	});
});

test('test failed api request', () => {
	fetch.mockReject(new Error('foo'));

	parseBook('canbeanything').then(result => {
		expect(result).toEqual('There was an error parsing the book');
	});
});
