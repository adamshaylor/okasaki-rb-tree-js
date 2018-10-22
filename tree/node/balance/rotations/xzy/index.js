const xzy = (subTree) => {
  const x = subTree.make({
    right: subTree.right.left.left,
  });

  const z = subTree.right.make({
    color: 'black',
    left: subTree.right.left.right,
  });

  const y = subTree.right.left.make({
    left: x,
    right: z,
  });

  return y;
};

export default xzy;
