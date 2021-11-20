import { Lancero } from "../src";

test("Making a connection", async () => {
  const lancero = new Lancero(
    "cc355ba5fc5b5527b87d7ef211c5cf6845c2443846390cb4"
  );

  // Generating codes
  //const result = await lancero.codes.generate({ amount: 1 });

  // Searching for a code
  //const code = await lancero.codes.find("ultimate-iron");

  // Claiming a code
  //const claim = await lancero.codes.claim("eminent-editor", "inbox@driaug.com");

  // Searching for a customer
  //const searched_customer = await lancero.customers.find("hello@lancero.app");

  // Creating a customer
  const created_customer = await lancero.customers.create({
    email: "inbox@driaug.com",
  });

  // Deleting a customer
  //const deleted_customer = await lancero.customers.delete('inbox@driaug.com')

  // Deleting a code
  //const deleted_code = await lancero.codes.delete("elastic-code");
});
