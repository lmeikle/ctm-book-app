import { parseBook } from './bookparser/bookParser';

let bookURL = 'http://www.loyalbooks.com/download/text/Railway-Children-by-E-Nesbit.txt';
parseBook(bookURL).then(result => console.log(result));
