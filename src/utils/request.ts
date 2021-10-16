import { AxiosError, AxiosInstance } from "axios";
import { RequestType } from "../types/request";
import { TokenError } from "../errors/TokenError";
import { IErrorBody } from "../types/error";

export function request<T>(client: AxiosInstance, request: RequestType) {
  return new Promise<T>((resolve, reject) => {
    const config =
      request.method === "GET"
        ? { method: request.method, url: request.url }
        : { method: request.method, url: request.url, data: request.body };
    client
      .request<
        { [key: string]: string | number | object },
        { status: number; data: T }
      >(config)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err: AxiosError<IErrorBody>) => {
        if (err.response?.status === 401) {
          reject(new TokenError());
        }

        reject(err.response?.data.message);
      });
  });
}
