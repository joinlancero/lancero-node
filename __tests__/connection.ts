import { Lancero } from "../src";

test("Making a connection", async () => {

  const initialization = new Lancero();

  //creating object with apisecret
  const lancero = await initialization.createObject.create('5c1f666f960298b3b3b1c6e4fe4615356c56205d79dcee36')
  
  // Generating codes
  //const result = await lancero.codes.generate(5);

  // Searching for a code
  //const code = await lancero.codes.find("ultimate-iron");

  // Claiming a code
  //const claim = await lancero.codes.claim("which-shoe", "inbox@driaug.com");

  // Searching for a customer
  //const searched_customer = await lancero.customers.find("hello@lancero.app");

  // Creating a customer
  // const created_customer = await lancero.customers.create(
  //  "test@driaug.com",
  //  true
  // );

  // Get the waitlist
  //const waitlist = await lancero.waitlist.get();
});
