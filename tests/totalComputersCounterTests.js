/**
 * Created by o.iusko on 06/07/2016.
 */
describe('Total C counter', function () {

    const computerName = 'Very Old Computer';
    const introducedDate = '1990-07-06';
    const discontinuedName = '2016-07-06';

    beforeEach(function () {
        isAngularSite(false);
        browser.get('/computers');
    });

    it('should increase Total C by 1', function () {
        $('#add').click();
        $('#name').sendKeys(computerName);
        $('#introduced').sendKeys(introducedDate);
        $('#discontinued').sendKeys(discontinuedName);
        $('#company').click();
        var list = element.all(by.css('#company>option'));
        list.get(17).getText().click();
        $('.btn.primary').click();

        $('#main>h1').getText().then(function (text) {
            console.log(text);
            
            }
        );

    })
});