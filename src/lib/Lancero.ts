import axios, { AxiosInstance } from "axios";
import { request } from "../utils/request";
import { ICode, ICustomer } from "../types/api";

export class Lancero {
  private readonly key: string;
  private readonly client: AxiosInstance;

  constructor(key: string, options?: { debug?: boolean }) {
    this.key = key;

    this.client = axios.create({
      baseURL: options?.debug
        ? "http://localhost:8080"
        : "https://api.lancero.app",
      headers: {
        Authorization: `Bearer ${this.key}`,
      },
      withCredentials: true,
    });
  }

  /**
   * Resources
   */
  codes = {
    /**
     * Finds a code
     * @param {string} code The code you want to look up
     */
    find: async (code: string) => {
      return await request<{
        success: true;
        code: ICode;
      }>(this.client, {
        method: "GET",
        url: `/codes/code/${code}`,
      });
    },
    /**
     * Generates new codes
     */
    generate: async (details: {
      amount: number;
      validFrom?: Date;
      validUntil?: Date;
      allowedClaims?: number;
    }) => {
      return await request<{
        success: true;
        data: ICode[];
      }>(this.client, {
        method: "POST",
        url: "/codes/generate",
        body: {
          ...details,
        },
      });
    },
    /**
     * Claims a code
     */
    claim: async (data: { code: string; email: string }) => {
      const result = await request<{
        success: true;
        data: { token: string };
      }>(this.client, {
        method: "POST",
        url: "/codes/claim",
        body: {
          code: data.code,
          email: data.email,
        },
      });

      return await request<{
        success: true;
        data: { customer: ICustomer; code: ICode };
      }>(this.client, {
        method: "POST",
        url: "/claims/exchange",
        body: {
          token: result.data.token,
        },
      });
    },

    /**
     * Deletes a code
     * @param code {string} The code to delete
     */
    delete: async (code: string) => {
      return await request<{ success: true; code: ICode }>(this.client, {
        method: "DELETE",
        url: "/codes/delete",
        body: { code },
      });
    },
  };

  customers = {
    /**
     * Finds a customer by their email
     * @param email {string}
     */
    find: async (email: string) => {
      return await request<{
        success: true;
        customer: ICustomer;
      }>(this.client, {
        method: "GET",
        url: `/customers/email/${email}`,
      });
    },
    /**
     * Creates a new customer
     */
    create: async (customer: {
      email: string;
      waitlist?: boolean;
      firstname?: string;
      lastname?: string;
    }) => {
      return await request<{
        success: true;
        customer: ICustomer;
      }>(this.client, {
        method: "POST",
        url: "/customers/create",
        body: {
          email: customer.email,
          waitlist: customer.waitlist ?? false,
          firstname: customer.firstname,
          lastname: customer.lastname,
        },
      });
    },

    /**
     * Deletes a customers
     * @param email {string} The email of the customer
     */
    delete: async (email: string) => {
      return await request<{ success: true; data: ICustomer }>(this.client, {
        method: "DELETE",
        url: "/customers/delete",
        body: { email },
      });
    },
  };
}
