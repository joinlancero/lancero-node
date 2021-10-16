import { LanceroError } from "./LanceroError";

export class TokenError extends LanceroError {
  constructor() {
    super("Invalid API secret provided");

    Object.setPrototypeOf(this, TokenError.prototype);
  }
}
