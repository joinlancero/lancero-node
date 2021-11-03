import { Lancero } from "../src";

test("Making a connection", async () => {
  const lancero = new Lancero(
    "6c26c0d8d6e381fa37088f629682ce8198820e26a52d8a65"
  );

  // Generating codes
  //const result = await lancero.codes.generate(5);

  // Searching for a code
  //const code = await lancero.codes.find("ultimate-iron");

  // Claiming a code
  //const claim = await lancero.codes.claim("left-cry", "inbox@driaug.com");

  // Searching for a customer
  //const searched_customer = await lancero.customers.find("hello@lancero.app");

  // Creating a customer
  //const created_customer = await lancero.customers.create("inbox@driaug.com", true);
});
