import Lancero from "../src";

test("Making a connection", async () => {
  const lancero = new Lancero(
    "sk_4b577127dec0d3612e017fd9fe014cc69a754ae57a3aec41",
    { debug: true }
  );

  // Generating codes
  // const result = await lancero.codes.generate({ amount: 5, allowedClaims: 2 });

  // Searching for a code
  // const code = await lancero.codes.find("severe-sell");

  // Claiming a code
  // const claim = await lancero.codes.claim("arid-housing", "inbox@driaug.com");

  // Searching for a customer
  // const searched_customer = await lancero.customers.find("hello@lancero.app");

  // Creating a customer
  //const created_customer = await lancero.customers.create({
  //  email: "inbox@driaug.com",
  //  waitlist: true,
  //});

  // Deleting a customer
  //const deleted_customer = await lancero.customers.delete("inbox@driaug.com");

  // Deleting a code
  //const deleted_code = await lancero.codes.delete("elastic-code");
});
