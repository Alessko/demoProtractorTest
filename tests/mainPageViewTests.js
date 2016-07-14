/**
 * Created by o.iusko on 04/07/2016.
 */
const CONSTS = require('./../consts.js');
var HomePage = require('./../pages/home_page.js');
var ComputerPage = require('./../pages/computer_page.js');

describe('Main Page View: ', function () {
    var homePage;

    beforeEach(function () {
        isAngularSite(false);
        homePage = new HomePage();
    });
    
    it('should be displayed name of app in the header', function () {
        expect(homePage.headerAppName).toEqual(CONSTS.headerAppText);
    });

    // it('should be displayed total amount of computers', function () {
    //     //expect(element(by.css('#main>h1')).getText()).toBe('574 computers found');
    //     expect(element(by.css('#main>h1')).isDisplayed()).toBeTruthy();
    // });

    it('should be available "Filter input"', function () {
        expect(homePage.placeholderFilterInput).toEqual(CONSTS.placeholderFilterInput);
    });

    it('should be visible "Filter button"', function () {
        expect(homePage.valueFilterButton).toEqual(CONSTS.valueFilterButton);
    });

    it('should be visible "Add new computer button"', function () {
        expect(homePage.addComputerButtonText).toEqual(CONSTS.addNewComputerButtonText);
    });

    it('should be displayed table with 4 columns: Name, Introduced, Discontinued Date, Company', function () {
        expect(homePage.tableHeaders).toEqual([
            CONSTS.tableHeaderComputer,
            CONSTS.tableHeaderIntroduced,
            CONSTS.tableHeaderDiscontinued,
            CONSTS.tableHeaderCompany
        ]);
    });

    it('should be available pagination buttons', function () {
        expect(homePage.nextButton).toEqual(CONSTS.nextButtonText);
        expect(homePage.previousButton).toEqual(CONSTS.previousButtonText);
    });

});




