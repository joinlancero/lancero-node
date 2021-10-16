import axios, { AxiosInstance } from "axios";
import { API_URL } from "./constants";
import { request } from "../utils/request";

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

    // We need a way to verify the API key during construction, async in constructors does not work
    //void request(this.client, { method: "POST", url: "/auth/secret" });
  }

  /**
   * Resources
   */
  Waitlist = {
    join: async (email: string) => {
      return await request<
        | { success: true; data: { email: string } }
        | { success: false; error: string }
      >(this.client, {
        method: "POST",
        url: "/waitlists/join",
        body: {
          email,
        },
      });
    },
  };
}
