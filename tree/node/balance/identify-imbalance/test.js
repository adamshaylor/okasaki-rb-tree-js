import identifyImbalance from './index.js';

test('identifies null as "none"', () => {
  const actual = identifyImbalance(null);
  expect(actual).toBe('none');
});

test('identifies empty black node as "none"', () => {
  const actual = identifyImbalance({
    color: 'black',
    left: null,
    right: null,
  });
  expect(actual).toBe('none');
});

test('identifies empty red node as "none"', () => {
  const actual = identifyImbalance({
    color: 'red',
    left: null,
    right: null,
  });
  expect(actual).toBe('none');
});

test('identifies "zyx" imbalance', () => {
  const actual = identifyImbalance({
    color: 'black',
    left: {
      color: 'red',
      left: {
        color: 'red',
        left: null,
        right: null,
      },
      right: null,
    },
    right: null,
  });
  expect(actual).toBe('zyx');
});

test('identifies "zxy" imbalance', () => {
  const actual = identifyImbalance({
    color: 'black',
    left: {
      color: 'red',
      left: null,
      right: {
        color: 'red',
        left: null,
        right: null,
      },
    },
    right: null,
  });
  expect(actual).toBe('zxy');
});

test('identifies "xyz" imbalance', () => {
  const actual = identifyImbalance({
    color: 'black',
    left: null,
    right: {
      color: 'red',
      left: null,
      right: {
        color: 'red',
        left: null,
        right: null,
      },
    },
  });
  expect(actual).toBe('xyz');
});

test('identifies "xzy" imbalance', () => {
  const actual = identifyImbalance({
    color: 'black',
    left: null,
    right: {
      color: 'red',
      left: {
        color: 'red',
        left: null,
        right: null,
      },
      right: null,
    },
  });
  expect(actual).toBe('xzy');
});
