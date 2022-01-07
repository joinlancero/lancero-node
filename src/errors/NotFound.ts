import { LanceroError } from "./LanceroError";

export class NotFoundError extends LanceroError {
  constructor(msg = "That resource could not be found") {
    super(msg);

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}
