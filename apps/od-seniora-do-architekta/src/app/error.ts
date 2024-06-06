// export type TEither<L, A> = AppError1<L, A> | Data<L, A>;
export type TEither<D, E extends Error | string = Error> = InternalError<D, E> | Success<D, E>;

export class InternalError<D, E extends Error | string> {
  public readonly error: Error;
  public isError = true as const;
  public isSuccess = false as const;

  constructor(error: E) {
    this.error = error instanceof Error ? error : (new Error(error as string) as Error);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  map<R>(_: (a: D) => R): TEither<R, E> {
    return this as never;
  }

  throwError<R>(error: string | Error): TEither<R, E> {
    try {
      if (error instanceof Error) {
        throw error;
      }

      throw new Error(error);
    } catch (e: unknown) {
      return new InternalError(e as Error);
    }
  }
}

export class Success<D, E extends Error | string> {
  public readonly data: D;
  public isError = false as const;
  public isSuccess = true as const;

  constructor(value: D) {
    this.data = value;
  }

  map<R>(func: (a: D) => R): TEither<R, E> {
    return new Success(func(this.data));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  throwError<R>(error: string | Error): TEither<R, E> {
    try {
      if (error instanceof Error) {
        throw error;
      }

      throw new Error(error);
    } catch (e: unknown) {
      return new InternalError(e as Error);
    }
  }
}

export const error = <D, E extends string | Error>(error: E): TEither<D, E> => {
  return new InternalError(error).throwError(error);
};

export const success = <D, E extends Error | string>(a: D): TEither<D, E> => {
  return new Success<D, E>(a);
};

const sumPatientCounts = (...patientCounts: Array<number>) => {
  if (patientCounts.some((patientCount) => patientCount < 0)) {
    return error(new Error('All patient counts should be strictly positive'));
  }

  return success(1 + 2);
};

export const abc = () => {
  const a = sumPatientCounts(-1);
  return a.map(() => {
    return '5';
  });
};
