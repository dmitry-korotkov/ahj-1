import getRandomInt from '../app';

test('get random number', () => {
  const randomInt = getRandomInt(25);
  expect(typeof randomInt).toBe('number');
});
