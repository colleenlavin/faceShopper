let id = 0
const tag = Symbol('tag')

Object.prototype [Symbol.toPrimitive] = function() { return this[tag] || (this[tag] = Symbol(++id)) }

const dict = {}
const a = {}, b = {}
dict[a] = 'hi'
dict[a] = 'there'
dict[b] = 'goodbye'
console.log(dict[a], dict[b])

console.log(Object.getOwnPropertySymbols(dict))
