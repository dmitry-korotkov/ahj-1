import getRandomInt from '../GetRandomNumber';

test('get random number', () => {
  const randomInt = getRandomInt(25);
  expect(typeof randomInt).toBe('number');
});
