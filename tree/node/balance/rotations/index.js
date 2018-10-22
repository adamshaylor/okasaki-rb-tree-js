import zyx from './zyx/index.js';
import zxy from './zxy/index.js';
import xyz from './xyz/index.js';
import xzy from './xzy/index.js';

const rotations = {
  none: node => node,
  zyx,
  zxy,
  xyz,
  xzy,
};

export default rotations;
