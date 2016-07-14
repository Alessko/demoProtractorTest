/**
 * Created by o.iusko on 07/07/2016.
 */
const CONSTS = require('./../consts.js');
var HomePage = require('./../pages/home_page.js');
var ComputerPage = require('./../pages/computer_page.js');

describe('Add new computer and then Cancel: ', function () {
    var homePage;
    var computerPage;

    beforeEach(function () {
        isAngularSite(false);
        homePage = new HomePage();
        computerPage = new ComputerPage();
    });

    it('should be opened "Add new computer" page', function () {
        homePage.openComputerPage;
        expect(computerPage.headerPage).toEqual(CONSTS.headerAddComputerPage);
    });

    it('should not appear notification message about creation of Computer', function () {
        homePage.openComputerPage;
        computerPage.fillFormWithDate(CONSTS.computerName, CONSTS.introducedDateStart,
            CONSTS.discontinuedDateStart, CONSTS.companyNumber);
        computerPage.cancelButton.click();
        expect(homePage.alertMessage.isPresent()).toBe(false);
        expect(homePage.addComputerButton.isDisplayed()).toBe(true);
    });

});