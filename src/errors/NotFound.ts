import { LanceroError } from "./LanceroError";

export class NotFoundError extends LanceroError {
  constructor(resource = "resource") {
    super(`That ${resource} could not be fond`);

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}
