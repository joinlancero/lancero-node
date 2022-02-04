import Lancero from "../src";

test("Making a connection", async () => {
  const lancero = new Lancero("");

  // Generating codes
  //const result = await lancero.codes.generate({ amount: 5, allowedClaims: 2 });

  // Searching for a code
  // const code = await lancero.codes.find("dishonest-name");

  // Claiming a code
  // const claim = await lancero.codes.claim({
  //   code: "prestigious-smoke",
  //   email: "test1@driaug.com",
  // });

  // Exchanging a claim token
  // const claim = await lancero.claims.exchange("4501fa85e737df9af5f91ab4");

  // Sending an email with a code to a lead
  // const result = await lancero.codes.send({
  //   code: "rewarding-mine",
  //   leads: ["hello@lancero.app"],
  // });

  // Searching for a lead
  // const lead = await lancero.leads.find("hello@lancero.app");

  // Creating a lead
  // const created_lead = await lancero.leads.create({
  //   email: "hello@lancero.app",
  //   waitlist: true,
  // });

  // Deleting a lead
  // const deleted_lead = await lancero.leads.delete("test2@test.com");

  // Deleting a code
  // const deleted_code = await lancero.codes.delete("elastic-code");

  // Constructing a webhook event
  // const event = await lancero.webhooks.construct(
  //     "2a10ae5b-f931-445d-8a56-bb53526de134"
  // );
});
