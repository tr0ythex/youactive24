/* jshint esversion: 6 */

// const chai = require('chai'),
//     expect = chai.expect;

describe('Main page', () => {
  it('should have a title with text "You Active 24"', function() {
    browser.get('http://localhost:8000');

    expect(browser.getTitle()).toEqual('You Active 24');

    // element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    // element(by.css('[value="add"]')).click();
    //
    // var todoList = element.all(by.repeater('todo in todoList.todos'));
    // expect(todoList.count()).toEqual(3);
    // expect(todoList.get(2).getText()).toEqual('write first protractor test');
    //
    // // You wrote your first test, cross it off the list
    // todoList.get(2).element(by.css('input')).click();
    // var completedAmount = element.all(by.css('.done-true'));
    // expect(completedAmount.count()).toEqual(2);
  });
});
