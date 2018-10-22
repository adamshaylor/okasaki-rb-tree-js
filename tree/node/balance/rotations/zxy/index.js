const zxy = (subTree) => {
  const x = subTree.left.make({
    color: 'black',
    right: subTree.left.right.left,
  });

  const z = subTree.make({
    left: subTree.left.right.right,
  });

  const y = subTree.left.right.make({
    left: x,
    right: z,
  });

  return y;
};

export default zxy;
