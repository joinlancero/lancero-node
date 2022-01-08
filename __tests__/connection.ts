import Lancero from "../src";

test("Making a connection", async () => {
  const lancero = new Lancero("");

  // Generating codes
  //const result = await lancero.codes.generate({ amount: 5, allowedClaims: 2 });

  // Searching for a code
  //const code = await lancero.codes.find("severe-sell");

  // Claiming a code
  //const claim = await lancero.codes.claim({
  //  code: "slushy-trick",
  //  email: "hello@lancero.app",
  //});

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
