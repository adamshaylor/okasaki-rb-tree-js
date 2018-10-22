const zyx = (subTree) => {
  const x = subTree.left.left.make({
    color: 'black',
  });

  const z = subTree.make({
    left: subTree.left.right,
  });

  const y = subTree.left.make({
    left: x,
    right: z,
  });

  return y;
};

export default zyx;
