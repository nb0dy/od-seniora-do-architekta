// eslint-disable-next-line @typescript-eslint/naming-convention
export type Either<L, A> = Left<L, A> | Right<L, A>;

export class Left<L, A> {
  readonly value: L;

  constructor(value: L) {
    this.value = value;
  }

  isLeft(): this is Left<L, A> {
    return true;
  }

  isRight(): this is Right<L, A> {
    return false;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  applyOnRight<B>(_: (a: A) => B): Either<L, B> {
    return this as never;
  }
}

export class Right<L, A> {
  readonly value: A;

  constructor(value: A) {
    this.value = value;
  }

  isLeft(): this is Left<L, A> {
    return false;
  }

  isRight(): this is Right<L, A> {
    return true;
  }

  applyOnRight<B>(func: (a: A) => B): Either<L, B> {
    return new Right(func(this.value));
  }
}

export const left = <L, A>(l: L): Either<L, A> => {
  return new Left(l);
};

export const right = <L, A>(a: A): Either<L, A> => {
  return new Right<L, A>(a);
};

const sumPatientCounts = (...patientCounts: Array<number>): Either<{ message: string }, number> => {
  if (patientCounts.some((patientCount) => patientCount < 0)) {
    return left({ message: 'All patient counts should be strictly positive' });
  }

  return right(1 + 2);
};

const abc = () => {
  const a = sumPatientCounts(-1);
  return a.applyOnRight(() => {
    return '5';
  });
};
