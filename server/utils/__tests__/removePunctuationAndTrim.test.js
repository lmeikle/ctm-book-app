import { removePunctuationAndTrim } from '../removePunctuationAndTrim';

test('test case 1', () => {
	let testInput = "'every modern convenience',\nas the house-agents say.";
	let testOutput = "every modern convenience as the houseagents say";
	expect(removePunctuationAndTrim(testInput)).toBe(testOutput);
});

test('test case 2', () => {
	let testInput = "so don't look      back in anger!!!!";
	let testOutput = "so dont look back in anger";
	expect(removePunctuationAndTrim(testInput)).toBe(testOutput);
});
