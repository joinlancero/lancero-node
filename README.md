# Lancero Node.js
This project contains the helper library for interacting with the Lancero API using Node.js.

![Card](https://cdn.lancero.app/assets/card.png)

## Installing
Installing the latest version can be done through your package manager.

```shell
npm i @lancero/node

yarn add @lancero/node
```

## Getting started
Any interaction you want to make with the Lancero API needs to be done through the Lancero client. You can use a default import to get started.

```js
import Lancero from '@lancero/node';

const lancero = new Lancero("API-key");
```