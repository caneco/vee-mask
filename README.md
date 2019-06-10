# Vee Mask

Tiny and dependency free mask input for VueJS

## Install

```
yarn add vee-mask
or
npm i -S vee-mask
```

## Usage

### Globally

```javascript
import VeeMask from 'vee-mask'
Vue.use(VeeMask)
```

### …or, Locally (as directive)

```javascript
import { mask } from 'vee-mask'
export default {
  directives: { mask },
}
```

## Tokens

```javascript
'*': { pattern: /./ },
'#': { pattern: /\d/ },
'X': { pattern: /[0-9a-zA-Z]/ },
'S': { pattern: /[a-zA-Z]/ },
'A': { pattern: /[a-zA-Z]/, transform: v => v.toLocaleUpperCase() },
'a': { pattern: /[a-zA-Z]/, transform: v => v.toLocaleLowerCase() },
'N': { pattern: /[a-zA-Z0-9]/, transform: v => v.toLocaleUpperCase() },
'n': { pattern: /[a-zA-Z0-9]/, transform: v => v.toLocaleLowerCase() },
'!': { escape: true }
```

## Properties

TBD

## License

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
