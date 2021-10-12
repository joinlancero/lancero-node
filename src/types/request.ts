interface Request {
  url: string;
}

interface getType extends Request {
  method: "GET";
}

interface postType extends Request {
  method: "POST";
  body?: { [key: string]: string | number | object };
}

interface putType extends Request {
  method: "PUT";
  body?: { [key: string]: string | number | object };
}

interface deleteType extends Request {
  method: "DELETE";
  body?: { [key: string]: string | number | object };
}

export type RequestType = getType | postType | putType | deleteType;
