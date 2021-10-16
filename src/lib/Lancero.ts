import axios, { AxiosInstance } from "axios";
import { API_URL } from "./constants";
import { request } from "../utils/request";

export class Lancero {
  private readonly key: string;
  private readonly client: AxiosInstance;

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
    /**
     * Use this function to add someone to the waitinglist
     * @param {string} email The email of the user that wants to sign up for the waitinglist
     */
    join: async (email: string) => {
      return await request<{ success: true; data: { email: string } }>(
        this.client,
        {
          method: "POST",
          url: "/waitlists/join",
          body: {
            email,
          },
        }
      );
    },
  };

  Codes = {
    /**
     * Use this function to claim a code
     * @param code {string} The code you want to claim
     * @param email {string} The email you want to associate the claim with
     */
    claim: async (code: string, email: string) => {
      return await request<{ success: true; data: { email: string } }>(
        this.client,
        {
          method: "POST",
          url: "/codes/claim",
          body: {
            code,
            email,
          },
        }
      );
    },
  };
}
