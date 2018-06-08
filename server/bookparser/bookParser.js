import fetch from 'node-fetch';
import { removePunctuationAndTrim } from '../utils/removePunctuationAndTrim';
import { isPrime } from '../utils/isPrime';

/**
 * Request some book text using the provided URL and output the individual words that appear and how many times.
 * In addition output whether the number of times each word appears is a prime number.
 */
export function parseBook(url)
{
	return fetch(url)
		.then(response => response.text())
		.then(txt => processData(txt))
		.catch(e => {
			return 'There was an error parsing the book';
		});
}

function processData(txt)
{
	let cleanedTxt = removePunctuationAndTrim(txt);
	let wordsArr = cleanedTxt.split(' ');
	let lowercaseWordsArr = wordsArr.map(word => word.toLowerCase());
	let m = lowercaseWordsArr[lowercaseWordsArr.length - 1].length;
	return getWordsWithCountAndIsPrime(lowercaseWordsArr);
}

/**
 * Counts the number of times a word exists, and whether that number is prime
 */
function getWordsWithCountAndIsPrime(wordsArr)
{
	let wordsWithCount = {};
	for (let word of wordsArr)
	{
		if (word.length > 0)
		{
			if (!wordsWithCount[word])
			{
				wordsWithCount[word] = [0, false];
			}

			wordsWithCount[word][0]++;
			wordsWithCount[word][1] = isPrime(wordsWithCount[word][0]);
		}
	}

	return wordsWithCount;
}

