/**
 * Created by o.iusko on 07/07/2016.
 */
const ComputerPage = function () {
    browser.get('/computers');
};

ComputerPage.prototype = Object.create({}, {
    headerApp:            {   get: function ()     { return $('.fill>a').getText();                         }},
    headerPage:           {   get: function ()     { return $('#main>h1').getText();                        }},
    computerField:        {   get: function ()     { return $('#name');                                     }},
    introducedField:      {   get: function ()     { return $('#introduced') ;                              }},
    discontinuedField:    {   get: function ()     { return $('#discontinued');                             }},
    companyList:          {   get: function ()     { return element.all(by.css('#company>option'));         }},
    createComputerButton: {   get: function ()     { return $('.btn.primary');                              }},
    cancelButton:         {   get: function ()     { return element(by.linkText('Cancel'));                 }},
    fieldHighlighted:     {   get: function ()     { return $('.clearfix.error').isPresent();               }},
    createComputerValue:  {   get: function ()     { return this.createComputerButton.getAttribute('value');}},
    formLabels:           {   get: function ()     { return element.all(by.css('.clearfix>label'));         }},
    label:                { value: function (idx)  { return this.formLabels.get(idx).getText();             }},
    allInputsName:        {   get: function ()     { return element.all(by.css('.clearfix .input>input'));  }},
    inputName:            { value: function (idx)  { return this.allInputsName.get(idx).getAttribute('name')}},
    allHelpInline:        {   get: function ()     { return element.all(by.css('.clearfix .input>span'));   }},
    helpInline:           { value: function (idx)  { return this.allHelpInline.get(idx).getText();          }},
    companySelectBox:     {   get: function ()     { return $('#company .blank').getText();                 }},
    chooseCompany:        { value: function (idx)  { this.companyList.get(idx).click();                     }},
    fillFormWithDate:     { value: function (name, startDate, endDate) { return
        this.computerField.sendKeys(name);
        this.introducedField.sendKeys(startDate);
        this.discontinuedField.sendKeys(endDate);
    }},
    addNewComputer:       { value: function (name, startDate, endDate, idx) {
        this.computerField.sendKeys(name);
        this.introducedField.sendKeys(startDate);
        this.discontinuedField.sendKeys(endDate);
        this.chooseCompany(idx);
        this.createComputerButton.click();
    }}

});

module.exports = ComputerPage;