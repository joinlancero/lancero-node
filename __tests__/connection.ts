import Lancero from "../src";

test("Making a connection", async () => {
  const lancero = new Lancero("");

  // Generating codes
  //const result = await lancero.codes.generate({ amount: 5, allowedClaims: 2 });

  // Searching for a code
  //const code = await lancero.codes.find("severe-sell");

  // Claiming a code
  //const claim = await lancero.codes.claim({
  //  code: "coarse-keep",
  //  email: "hello@lancero.app",
  //});

  // Exchanging a claim token
  // const claim = await lancero.claims.exchange("4501fa85e737df9af5f91ab4");

  // Searching for a lead
  //const lead = await lancero.leads.find("hello@lancero.app");

  // Creating a lead
  //const created_lead = await lancero.leads.create({
  //  email: "hello@lancero.app",
  //  waitlist: true,
  //});

  // Deleting a lead
  //const deleted_lead = await lancero.leads.delete("hello@lancero.app");

  // Deleting a code
  //const deleted_code = await lancero.codes.delete("elastic-code");
});
