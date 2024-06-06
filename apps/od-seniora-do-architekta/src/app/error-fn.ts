const f1 = (param: number) => {
  if (param === 1) {
    throw new Error('error');
  }

  return true;
};

const f2 = () => {
  return f1(1);
};

const f3 = () => {
  const result = f2();

  try {
  } catch (e) {}
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
}

const f6 = () => {
  const result = f5();

  if (!result) {
    // do something
  }
}
