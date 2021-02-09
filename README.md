# onemap-address-search-singapore

Get Singapore address by postal code using OneMap API

## Installation

```js
# using npm
npm install onemap-address-search-singapore

# using yarn
yarn add onemap-address-search-singapore
```

## Usage

```js
# using require
const { getAddress } = require('onemap-address-search');

# using import
import { getAddress } from 'onemap-address-search';
```

## Example

### Using promises:

```js
getAddress({
  postalCode: '178897' // provide Singapore postal code
}).then((address) => console.log(address));
```

### Using async/await:

```js
const getAddress = async function () {
  const address = await getAddress({
    postalCode: '178897' // provide Singapore postal code
  });
  console.log(address);
};

getAddress();
```

