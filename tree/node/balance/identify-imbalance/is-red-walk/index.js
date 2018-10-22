const isAllRed = (node, ...descendentsPath) => {
  if (!node) {
    return false;
  }

  const walkedResults = descendentsPath.reduce((accumulator, path, index) => {
    const previous = accumulator[index - 1] || { node };
    const walked = previous.node ? previous.node[path] : null;
    return accumulator.concat({
      node: walked,
      isRed: walked ? walked.color === 'red' : false,
    });
  }, []);

  return walkedResults.every(({ isRed }) => isRed);
};

export default isAllRed;
