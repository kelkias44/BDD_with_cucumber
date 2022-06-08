const Person = require('../../src/shouty.js')
const {defineParameterType} = require('@cucumber/cucumber')

defineParameterType({
    name: 'person',
    regexp: /lucy|sean/,
    transformer: name => new Person(name) 
})