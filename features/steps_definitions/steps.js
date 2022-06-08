const {Person, Network} = require('../../src/shouty.js')
const { Given, When, Then, Before } = require('@cucumber/cucumber')
const {assertThat, is, contains, not} = require('hamjest')
const default_range = 100
Before(function () {
    this.people = {}
    this.network = new Network(default_range)
  })

Given('the range is {int}', function(range){
  this.network = new Network(range)
})

Given('a person named {word}', function (name) {
  this.people[name] = new Person(this.network, 0)
})  

Given('a person named {word} is locate at {int}', function (name, location) {
    this.people[name] = new Person(this.network, location)
  })

When('Sean shouts', function () {
    this.people['Sean'].shout('Hello, world')
  })

When('sean shouts {string}', function (message) {
  this.people['sean'].shout(message)
  this.messageFromSean = message
})


Then('lucy should hear a shout', function () {
  assertThat(this.people['lucy'].messagesHeard().length, is(1))
})
Then('Lucy should not hear a shout', function () {
  assertThat(this.people['lucy'].messagesHeard(), not(contains(this.messageFromSean)))
})
Then('lLucy hears Sean\'s message', function () {
  assertThat(this.people['lucy'].messageHeard(this.message), is([this.messageFromSean]))
})









// Given('Lucy is located {int} metres from Sean', function (distance) {
//     this.lucy = new Person
//     this.sean = new Person
//     this.lucy.moveTo(distance)
//   })



// Given('a person named Sean', function () {
//     return 'pending'
//   })