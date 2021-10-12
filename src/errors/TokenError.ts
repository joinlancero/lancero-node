export class TokenError extends Error {
  constructor() {
    super("That token is not valid");

    Object.setPrototypeOf(this, TokenError.prototype);
  }
}
