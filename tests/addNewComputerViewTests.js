/**
 * Created by o.iusko on 05/07/2016.
 */
const CONSTS = require('./../consts.js');
var HomePage = require('./../pages/home_page.js');
var ComputerPage = require('./../pages/computer_page.js');

describe('Add new computer view: ', function () {
    var homePage;
    var computerPage;

    beforeEach(function () {
        isAngularSite(false);
        homePage = new HomePage();
        computerPage = new ComputerPage();
        homePage.openComputerPage;
    });

    it('should be opened Computer page', function () {
        expect(computerPage.headerPage).toEqual(CONSTS.headerAddComputerPage);;
    });

    it('should be displayed name of app in the header and "Add a computer" header', function(){
        expect(computerPage.headerApp).toEqual(CONSTS.headerAppText);
        expect(computerPage.headerPage).toEqual(CONSTS.headerAddComputerPage);
    });

    it('should be Labels for input fields', function () {
        expect(computerPage.label(0)).toEqual(CONSTS.formLabelComputer);
        expect(computerPage.label(1)).toEqual(CONSTS.formLabelIntroduced);
        expect(computerPage.label(2)).toEqual(CONSTS.formLabelDiscontinued);
        expect(computerPage.label(3)).toEqual(CONSTS.formLabelCompany);
    });

    it('should be input fields', function () {
        expect(computerPage.inputName(0)).toEqual(CONSTS.inputNameComputer);
        expect(computerPage.inputName(1)).toEqual(CONSTS.inputNameIntroduced);
        expect(computerPage.inputName(2)).toEqual(CONSTS.inputNameDiscontinued);
    });

    it('should be help-inline near input fields', function () {
        expect(computerPage.helpInline(0)).toEqual(CONSTS.helpInlineComputer);
        expect(computerPage.helpInline(1)).toEqual(CONSTS.helpInlineIntroduced);
        expect(computerPage.helpInline(2)).toEqual(CONSTS.helpInlineDiscontinued);
    });

    it('should be Select box for company ', function () {
        expect(computerPage.companySelectBox).toEqual(CONSTS.companySelectBoxText);
    });

    it('should be available Computer button', function() {
        expect(computerPage.createComputerValue).toEqual(CONSTS.createComputerText);
            //element(by.buttonText('Create this computer')).isEnabled()).toBeTruthy();
    });

    it('should be available Cancel button', function() {
        expect(computerPage.cancelButton.isDisplayed).toBeTruthy();
    });

});