<p align="center">
  <a href="https://github.com/caneco/vee-mask" target="_blank">
    <!-- <img width="200" src="…"> -->
  </a>
</p>

# Vee Mask

**vee-mask** is a tiny and dependency free mask input for Vue.js that allows you to easily mask your input fields based on tokens.

#### NOTICE

I've created this package from a fork of [vue-the-mask](https://github.com/vuejs-tips/vue-the-mask) due to [lack of maintenance](https://github.com/vuejs-tips/vue-the-mask/issues/90); the need of some [extra features](https://github.com/vuejs-tips/vue-the-mask/pull/106); and [code fixes](https://github.com/vuejs-tips/vue-the-mask/pull/64) well discussed in the original repository.
Feel free to use it, but props to the original algorithms from @neves 🙌

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

| Property    | Required | Type                    | Default | Description                                |
|-------------|----------|-------------------------|---------|--------------------------------------------|
| value       | false    | String                  |         | Input value or v-model                     |
| mask        | **true** | String, Array           |         | Mask pattern                               |
| masked      | false    | Boolean                 | false   | emit value with mask chars, default is raw |
| tokens      | false    | Object                  | [tokens](#tokens) | Custom tokens for mask           |


## License

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
