import createNode from './index.js';

test('the default node is black, null, and has no children', () => {
  const defaultNode = createNode();
  expect(defaultNode.color).toBe('black');
  expect(defaultNode.value).toBe(null);
  expect(defaultNode.left).toBe(null);
  expect(defaultNode.right).toBe(null);
});

test('a node’s properties matches its creation options and they are immutable', () => {
  const scenarios = [
    undefined,
    {},
    { color: 'red' },
    { value: Infinity },
    { left: createNode() },
    { right: createNode() },
  ];

  const testScenario = (options) => {
    const node = createNode(options);

    Object.keys(node).forEach((key) => {
      expect(() => node[key] = 'mutated').toThrow();
    });

    if (!options) {
      return;
    }

    Object.keys(options).forEach((key) => {
      expect(node[key]).toBe(options[key]);
    });
  };

  scenarios.forEach(testScenario);
});
