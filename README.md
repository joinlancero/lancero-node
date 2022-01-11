# Lancero Node.js
This project contains the helper library for interacting with the Lancero API using Node.js.

## Table of contents
- [Installation](#installation)
- [Getting started](#getting-started)
- [API](#api)
    - [Leads](#leads)
    - [Codes](#codes)
    - [Claims](#claims)

![Card](https://cdn.lancero.app/assets/card.png)

## Installation
Installing the latest version can be done through your package manager.

```shell
npm i @lancero/node

yarn add @lancero/node
```

## Getting started
Any interaction you want to make with the Lancero API needs to be done through the Lancero client. You can use a default import to get started.

```js
import Lancero from '@lancero/node';

const lancero = new Lancero("Your secret key");
```

## API
### Leads
#### find()
Used to search for a lead

##### Parameters
- String, the email of the lead you want to look up
```ts
const lead = await lancero.leads.find("hello@lancero.app");
```

#### delete()
Used to delete a lead

##### Parameters
- String, the email of the lead you want to delete
```ts
const lead = await lancero.leads.delete("hello@lancero.app");
```

#### create()
Used to create a lead

##### Parameters
- Object, data
  - email, the email of the new lead
  - firstname (optional), the firstname of the new lead
  - lastname (optional), the lastname of the new lead
  - referralCode (optional), the 8-character referral code of another lead
  - waitlist (optional, default `false`), should this lead be added to the waitlist

```ts
const lead = await lancero.leads.create({ 
  email: "hello@lancero.app",
  waitlist: true,
});
```

### Codes
#### find()
Used to search for a code

##### Parameters
- String, the code you want to look up
```ts
const code = await lancero.codes.find("curious-pineapple");
```

#### delete()
Used to delete a code

##### Parameters
- String, the code you want to delete
```ts
const code = await lancero.codes.delete("curious-pineapple");
```

#### generate()
Used to generate codes

##### Parameters
- Object, data
  - amount, the amount of codes you want to generate
  - validFrom (optional), when this code starts to be valid
  - validUntil (optional), when this code expires
  - allowedClaims (optional, default `1`), how many leads are allowed to claim this code
  - type (optional, default `"creative"`), what type of code do you want to generate
    - `"creative"`, a random adjective and noun (e.g. `curious-pineapple`)
    - `"alphanumeric"`, a 6 character combination of lowercase letters and digits
    - `"numeric"`, 6 random digits
```ts
const codes = await lancero.codes.generate({
  "amount": 3,
  "type": "creative",
});
```

#### claim()
Used to claim a code. 

*Note, when using the Node.js library to claim a code we automatically call the exchange endpoint with the received claim token. This `claims.exchange()` method should be used when receiving a claim token via the Lancero Portal.*

##### Parameters
- Object, data
  - code, the code you want to claim
  - email, the email of the lead you want to claim this code for
```ts
const claim = await lancero.codes.claim({
  "code": "curious-pineapple",
  "lead": "hello@lancero.app",
});
```

### Claims
#### exchange()
Used to exchange a unique Lancero claim token for the lead and code.

##### Parameters
- String, the Lancero claim token
```ts
const claim = await lancero.claims.exchange("4501fa85e737df9af5f91ab4");
```