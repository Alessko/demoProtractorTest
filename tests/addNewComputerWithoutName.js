/**
 * Created by o.iusko on 08/07/2016.
 */
const CONSTS = require('./../consts.js');
var HomePage = require('./../pages/home_page.js');
var ComputerPage = require('./../pages/computer_page.js');

describe('Add new computer without name:  ', function () {
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

    it('should be highlighted computer name', function () {
        computerPage.createComputerButton.click();
        expect(computerPage.headerPage).toEqual(CONSTS.headerAddComputerPage);
        expect(computerPage.fieldHighlighted).toBeTruthy();
    });

});
