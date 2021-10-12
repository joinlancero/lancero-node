import axios, { AxiosInstance } from "axios";
import { API_URL } from "./constants";
import { request } from "../utils/request";
import { TokenError } from "../errors/TokenError";

export class Lancero {
  key: string;
  client: AxiosInstance;

  constructor(key: string) {
    this.key = key;

    this.client = axios.create({
      baseURL: API_URL,
      headers: {
        Authorization: `Bearer ${this.key}`,
      },
      withCredentials: true,
    });

    request(this.client, { method: "GET", url: "/projects" })
      .then(() => {
        console.log("Connection made");
      })
      .catch(() => {
        throw new TokenError();
      });
  }

  /**
   * Resources
   */
  Waitlist = {
    claim: (identifier: string, code: string) => {
      return request<{ success: true } | { success: false }>(this.client, {
        method: "POST",
        url: "/waitlists",
        body: {
          Test: "BRRr",
          test2: 123,
          test: { testt: "123" },
        },
      });
    },
  };
}
