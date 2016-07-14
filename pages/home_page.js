/**
 * Created by o.iusko on 07/07/2016.
 */
var HomePage = function () {
    browser.get('/computers');
};

HomePage.prototype = Object.create({},{
    headerAppName:         { get: function () { return $('.fill > a').getText();                          }},
    totalAmountComputers:  { get: function () { return $('#main > h1').getText();                         }},
    addComputerButton:     { get: function () { return $('#add');                                       }},
    addComputerButtonText: { get: function () { return this.addComputerButton.getText();                }},
    openComputerPage:      { get: function () { return this.addComputerButton.click();                  }},
    alertMessage:          { get: function () { return $('.alert-message.warning');                     }},
    alertTextMessage:      { get: function () { return this.alertMessage.getText();                     }},
    filterField:           { get: function () { return $('#searchbox');                                 }},
    placeholderFilterInput:{ get: function () { return this.filterField.getAttribute('placeholder');    }},
    filterButton:          { get: function () { return $('#searchsubmit');                              }},
    valueFilterButton:     { get: function () { return this.filterButton.getAttribute('value');         }},
    nextButton:            { get: function () { return $('.next > a').getText();                          }},
    previousButton:        { get: function () { return $('.prev.disabled > a').getText();                 }},
    filterByName:          { value: function (name) {
        this.filterField.sendKeys(name);
        this.filterButton.click();
    }},
    tableHeaders:          { get: function () { return element.all(by.css('table.computers th a')).map(function (column){
        return column.getText();})
    }}
});

module.exports = HomePage;