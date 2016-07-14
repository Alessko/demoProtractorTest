/**
 * Created by o.iusko on 07/07/2016.
 */
const CONSTS = require('./../consts.js');
var HomePage = require('./../pages/home_page.js');
var ComputerPage = require('./../pages/computer_page.js');

describe('Add new Computer: ', function () {
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

    it('should appear notification message that computer has been created', function () {
        homePage.openComputerPage;
        computerPage.addNewComputer(CONSTS.computerName, CONSTS.introducedDateStart,
            CONSTS.discontinuedDateStart, CONSTS.companyNumber);
        expect(homePage.alertMessage.isDisplayed()).toBeTruthy();
        expect(homePage.alertTextMessage).toEqual('Done! Computer ' + CONSTS.computerName + ' has been created');
    });

    it('should appear a new added computer with valid data in the table', function () {
        homePage.filterByName(CONSTS.computerName);
        var grid = $$('table.computers>tbody>tr');
        grid.each(function (row) {
            var rowElems = row.$$('td');
            expect(rowElems.get(0).getText()).toEqual(CONSTS.computerName);
            expect(rowElems.get(1).getText()).toEqual(CONSTS.introducedDateEnd);
            expect(rowElems.get(2).getText()).toEqual(CONSTS.discontinuedDateEnd);
            expect(rowElems.get(3).getText()).toEqual(CONSTS.companyName);
        });
    });
});