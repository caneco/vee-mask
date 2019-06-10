export default {
  '*': { rule: /./ },
  '#': { rule: /\d/ },
  'S': { rule: /[a-zA-Z]/ },
  'X': { rule: /[a-zA-Z0-9]/ },
  'A': { rule: /[a-zA-Z]/, mutate: v => v.toLocaleUpperCase() },
  'a': { rule: /[a-zA-Z]/, mutate: v => v.toLocaleLowerCase() },
  'N': { rule: /[a-zA-Z0-9]/, mutate: v => v.toLocaleUpperCase() },
  'n': { rule: /[a-zA-Z0-9]/, mutate: v => v.toLocaleLowerCase() },
  '!': { escape: true }
}
