require("./pages/product");
/*
In this file, you’ll define your test scenario, which comprises steps that are triggered one after the other.
Within the test scenario, you’ll refer to your page objects.
*/

require("./pages/home");
require("./pages/product")

describe("teched", function () {

  //checks if the app opens correctly
  it("Should validate the home screen", function () {
    // add actions and assertions here
    Then.onTheHomePage.iShouldSeeAllCategories();

    expect(true).toBeTruthy();
  });

  /*
  it("should see the Home page", function () {
    // call the page object's actions and assertions:
    // When.onTheHomePage.iDoSomething();
    // Then.onTheHomePage.iAssertSomething();
  });
  */

 //checks if when you search for a product the search results are displayed accordingly.
  it("Should search for a product", function () {
    When.onTheHomePage.iSearchForProduct();
    Then.onTheHomePage.theProductListShouldBeFiltered();
  });

  /*Check if the following two statements are true:
    - When you select a product from the filtered catalog, it is shown in the detailed view. To verify this, compare the selected product title with the title in the detailed view.
    - In the detailed view, there is an Add to cart button.
  */
    it("Should navigate to the product", function () {
      When.onTheHomePage.iSelectTheFirstProduct();
      Then.onTheProductPage.theProductTitleIsShown();
      Then.onTheProductPage.theProductCouldBeOrdered();
    });





  it("should see the Home page", function () {
    // call the page object's actions and assertions:
    // When.onTheHomePage.iDoSomething();
    // Then.onTheHomePage.iAssertSomething();
  });

  it("should see the Product page", function () {
    // call the page object's actions and assertions:
    // When.onTheProductPage.iDoSomething();
    // Then.onTheProductPage.iAssertSomething();
  });

});
