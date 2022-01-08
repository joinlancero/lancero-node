import Lancero from "../src";

test("Making a connection", async () => {
  const lancero = new Lancero(
    "sk_ccf332ae5e9f5086847e6703e15ab082d68b60de4870b4b6",
    { debug: true }
  );

  // Generating codes
  //const result = await lancero.codes.generate({ amount: 5, allowedClaims: 2 });

  // Searching for a code
  //const code = await lancero.codes.find("severe-sell");

  // Claiming a code
  //const claim = await lancero.codes.claim({
  //  code: "slushy-trick",
  //  email: "insfsdfbcsasadfsdffofxff@driaug.com",
  //});

  // Searching for a lead
  //const lead = await lancero.leads.find("insfsdfbcsasadfsdffofxff@driaug.com");

  // Creating a lead
  //const created_lead = await lancero.leads.create({
  //  email: "inbox@driaug.com",
  //  waitlist: true,
  //});

  // Deleting a lead
  //const deleted_lead = await lancero.leads.delete(
  //  "insfsdfbcsasadfsdffofxff@driaug.com"
  //);

  // Deleting a code
  //const deleted_code = await lancero.codes.delete("elastic-code");
});
