import axios, { AxiosInstance } from "axios";
import { request } from "../utils/request";
import { ICode, ILead } from "../types/api";

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
        data: ICode;
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
      type?: "creative" | "numeric" | "alphanumeric";
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
        data: { customer: ILead; code: ICode };
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
      return await request<{ success: true; data: ICode }>(this.client, {
        method: "DELETE",
        url: "/codes/delete",
        body: { code },
      });
    },
  };

  leads = {
    /**
     * Finds a lead by their email
     * @param email {string}
     */
    find: async (email: string) => {
      return await request<{
        success: true;
        data: ILead;
      }>(this.client, {
        method: "GET",
        url: `/leads/email/${email}`,
      });
    },
    /**
     * Creates a new lead
     */
    create: async (customer: {
      email: string;
      waitlist?: boolean;
      firstname?: string;
      lastname?: string;
      referralCode?: string;
    }) => {
      return await request<{
        success: true;
        data: ILead;
      }>(this.client, {
        method: "POST",
        url: "/leads/create",
        body: {
          email: customer.email,
          waitlist: customer.waitlist ?? false,
          firstname: customer.firstname,
          lastname: customer.lastname,
          referralCode: customer.referralCode,
        },
      });
    },

    /**
     * Deletes a lead
     * @param email {string} The email of the lead
     */
    delete: async (email: string) => {
      return await request<{ success: true; data: ILead }>(this.client, {
        method: "DELETE",
        url: "/leads/delete",
        body: { email },
      });
    },
  };

  claims = {
    /**
     * Exchanges a claim token for the details of a lead and code
     * @param token {string} The Lancero claim token
     */
    exchange: async (token: string) => {
      return await request<{
        success: true;
        data: { lead: ILead; code: ICode };
      }>(this.client, {
        method: "POST",
        url: "/claims/exchange",
        body: { token },
      });
    },
  };
}
