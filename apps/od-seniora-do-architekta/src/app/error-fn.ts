const f1 = (param: number) => {
  if (param === 1) {
    throw new Error('error');
  }

  return true;
};

const f2 = () => {
  return f1(1);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const f3 = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const result = f2();

  try {
    //
  } catch (e) {
    //
  }
};

const f4 = (param: 'a' | 'b' | 'c' | string) => {
  switch (param) {
    case 'a':
    case 'b': {
      return true;
    }

    case 'c': {
      return false;
    }

    default: {
      throw new Error('Param should be a or b or c');
      return null;
    }
  }
};

const f5 = () => {
  const result = f4('asd');
  if (result === null) {
    // do something
    return false;
  }

  return result;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const f6 = () => {
  const result = f5();

  if (!result) {
    // do something
  }
};
