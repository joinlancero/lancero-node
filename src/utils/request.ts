import { AxiosInstance } from "axios";
import { RequestType } from "../types/request";

export function request<T>(client: AxiosInstance, request: RequestType) {
  return new Promise<T>((resolve, reject) => {
    client.request<T>({ url: request.url, method: request.method }).then((res) => {
      if (res.status === 200) {
        resolve(res.data);
      } else {
        reject("Request failed");
      }
    });
  });
}
