const xyz = (subTree) => {
  const x = subTree.make({
    right: subTree.right.left,
  });

  const z = subTree.right.right.make({
    color: 'black',
  });

  const y = subTree.right.make({
    left: x,
    right: z,
  });

  return y;
};

export default xyz;
