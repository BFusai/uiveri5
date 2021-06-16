/*
In this file, you’ll define your test scenario, which comprises steps that are triggered one after the other.
Within the test scenario, you’ll refer to your page objects.
*/

require("./pages/home");
require("./pages/product")

describe("teched", function () {

  it("Should validate the home screen", function () {
    // add actions and assertions here
    Then.onTheHomePage.iShouldSeeAllCategories();

    expect(true).toBeTruthy();
  });

  it("should see the Home page", function () {
    // call the page object's actions and assertions:
    // When.onTheHomePage.iDoSomething();
    // Then.onTheHomePage.iAssertSomething();
  });



});
