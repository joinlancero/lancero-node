interface IRequest {
  url: string;
}

interface Json {
  [x: string]: string | number | boolean | Date | Json | JsonArray | undefined;
}

type JsonArray = (string | number | boolean | Date | Json | JsonArray)[];

interface IwithoutBody extends IRequest {
  method: "GET";
}

interface IwithBody extends IRequest {
  method: "POST" | "PUT" | "DELETE";
  body?: Json;
}

export type RequestType = IwithBody | IwithoutBody;
