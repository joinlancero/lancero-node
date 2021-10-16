export class LanceroError extends Error {
  constructor(msg: string) {
    super(msg);

    Object.setPrototypeOf(this, LanceroError.prototype);
  }
}
