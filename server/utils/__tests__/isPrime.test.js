import { isPrime } from '../isPrime';

test('0 is not a prime', () => {
  expect(isPrime(0)).toBe(false);
});

test('1 is not a prime', () => {
  expect(isPrime(1)).toBe(false);
});

test('2 is a prime', () => {
  expect(isPrime(2)).toBe(true);
});

test('17 is a prime', () => {
  expect(isPrime(17)).toBe(true);
});

test('20 is a not prime', () => {
  expect(isPrime(20)).toBe(false);
});

test('non whole numbers are not prime', () => {
  expect(isPrime(2.1)).toBe(false);
});

test('negative numbers are not prime', () => {
  expect(isPrime(-2)).toBe(false);
});

test('null is not prime', () => {
  expect(isPrime(null)).toBe(false);
});

test('NaN is not prime', () => {
  expect(isPrime(NaN)).toBe(false);
});
