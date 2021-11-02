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
  Codes = {
    /**
     * Use this function to find a code
     * @param {string} code The code you want to look up
     */
    find: async (code: string) => {
      return await request<{ success: true; data: { code: any } }>(
        this.client,
        {
          method: "GET",
          url: `/codes/code/${code}`,
        }
      );
    },
    /**
     * Use this function to generate new codes
     * @param {number} [amount=1] The amount of codes to generate
     * @param {Date} [valid_from=undefined] When this code is allowed to be claimed
     * @param {Date} [valid_until=undefined] When this code is no longer allowed to be c laimed
     * @param {number} [allowed_claims=1] How many people may claim this code
     * @param {boolean} [valid=true] Should this code be active? This parameter overwrites all other limits and will always be able to prevent someone from claiming this code.
     */
    generate: async (
      amount?: number,
      valid_from?: Date,
      valid_until?: Date,
      allowed_claims?: number,
      valid?: boolean
    ) => {
      return await request<{ success: true; data: { codes: number } }>(
        this.client,
        {
          method: "POST",
          url: "/codes/generate",
          body: {
            amount,
            valid_from,
            valid_until,
            allowed_claims,
            valid,
          },
        }
      );
    },
    /**
     * Use this function to claim a code
     * @param code {string} The code you want to claim
     * @param email {string} The email of the customers that wants to claim this code. If it does not yet exist, we will create a new customer.
     */
    claim: async (code: string, email: string) => {
      return await request<{ success: true; data: { claim: any } }>(
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

  Customers = {
    /**
     * Use this function to find a customer by their ID
     * @param id {string} The ID of the customer
     */
    findById: async (id: string) => {
      return await request<{ success: true; data: { customer: any } }>(
        this.client,
        {
          method: "GET",
          url: `/customers/id/${id}`,
        }
      );
    },
    /**
     * Use this function to find a customer by their email
     * @param email {string} The email of the customer
     */
    findByEmail: async (email: string) => {
      return await request<{ success: true; data: { customer: any } }>(
        this.client,
        {
          method: "GET",
          url: `/customers/email/${email}`,
        }
      );
    },
    /**
     * Use this function to create a new customer
     * @param email {string} The email of the customer
     * @param  {boolean} [waitlist=false] Should this customer be placed on the waitlist?
     */
    create: async (email: string, waitlist?: boolean) => {
      return await request<{ success: true; data: { customer: any } }>(
        this.client,
        {
          method: "POST",
          url: "/customers",
          body: {
            email,
            waitlist: waitlist ?? false,
          },
        }
      );
    },
  };
}
