/*
Page objects are design patterns that represent a significant part of an app, for example, a view.
They group two kinds of elements:

- Actions, for example, entering a specific text in a search field and triggering the search
- Assertions, for example, getting a search result that matches the previously entered text

Page objects use locators to identify specific elements on the screen.
Thereby, they allow test runners to see and do anything a real user would.
Page objects reside in the pages folder of your project.
*/

module.exports = createPageObjects({
  Home: {
    actions: {
      // add action functions here
      iSearchForProduct: function () {
        element(by.control({
            id: "container-cart---homeView--searchField",
            interaction: {
                idSuffix: "I"
            }
        })).sendKeys("Watch");
      },

      iSelectTheFirstProduct: function () {
        element(by.control({
          controlType: "sap.m.ObjectListItem",
          viewId: "container-cart---homeView",
          bindingPath: {
              path: "/Products('HT-6130')",
              propertyPath: "PictureUrl"
          },
          interaction: {
              idSuffix: "content"
          }
        })).click();
      }
      
    },
    assertions: {
      // add assertion functions here
        iShouldSeeAllCategories: function () {
            var list = element.all(by.control({
                controlType: "sap.m.StandardListItem",
                viewId: "container-cart---homeView",
            }));
            expect(list.count()).toBe(16);
        },

        theProductListShouldBeFiltered: function () {
          var list = element.all(by.control({
              controlType: "sap.m.ObjectListItem",
              viewId: "container-cart---homeView"
              
          }));
          var firstItem = list.get(0);
          expect(firstItem.asControl().getProperty('title')).toBe('Flat Watch HD32')
      }
      
    }
  }
});
