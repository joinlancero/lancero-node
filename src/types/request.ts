interface IRequest {
  url: string;
}

interface IwithoutBody extends IRequest {
  method: "GET";
}

interface IwithBody extends IRequest {
  method: "POST" | "PUT" | "DELETE";
  body?: { [key: string]: string | number | object };
}

export type RequestType = IwithBody | IwithoutBody;
