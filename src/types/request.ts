interface Request {
  url: string;
}

interface getType extends Request {
  method: "GET";
}

interface postType extends Request {
  method: "POST";
}

interface putType extends Request {
  method: "PUT";
}

interface deleteType extends Request {
  method: "DELETE";
}

export type RequestType = getType | postType | putType | deleteType;
