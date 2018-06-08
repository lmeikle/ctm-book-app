/**
 * Nice regex to strip out all punctuation and trim any extra white space
 * https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex
 */
export function removePunctuationAndTrim(txt)
{
	return txt.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ');
}
