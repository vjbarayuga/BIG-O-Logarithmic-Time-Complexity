const { binarySearch } = require('./binarySearch');

test('performs binary search on sorted inventory', () => {
  expect(binarySearch([10, 20, 30, 40, 50, 60, 70], 30)).toBe("Found 30");
});