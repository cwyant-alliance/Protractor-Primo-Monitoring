var PboPage = require('../pages/PboPage');
var LoginPagePBO = require('../pages/LoginPagePBO');
var BasePage = require('../pages/BasePage');
var users = require('../data/users.json');

describe('logging in to primo back office', function() {

        beforeEach(function() {
            LoginPagePBO.to();
        });

        //it('should deny invalid credentials', function() {
         //   LoginPagePBO.loginAs(users.bad);
         //   expect(LoginPagePBO.errorMessage()).toBe('Login failed, Please try again. Reason: Bad credentials');
        //});

        it('should work with a known good account', function() {
            LoginPagePBO.loginAs(users.cwyant);
            //expect(LoginPagePBO.at()).toBeTruthy();
            expect(PboPage.pageLoaded()).toBeTruthy();
        });

}); // logging in

describe('check CP_Alma last run', function() {

    beforeEach(function() {
        PboPage.to();
        PboPage.monitorLink.click();
        PboPage.jobMonitorLink.click();
    });

    //it('stage should be completed successfully', function() {
    //        expect(PboPage.cpAlmaStage.getText()).toBe('completed successfully');
    //});

    it('stage should be completed successfully', function() {
            expect(PboPage.jobStats('CP_Alma', 1)).toBe('completed successfully');
    });

    it('status should be completed', function() {
          expect(PboPage.jobStats('CP_Alma', 2)).toBe('completed');
    });
}); // CP_Alma

describe('check Indexing_and_Hotswapping last run', function() {

    beforeEach(function() {
        PboPage.to();
        PboPage.monitorLink.click();
        PboPage.jobMonitorLink.click();
    });

    it('stage should be completed successfully', function() {
            expect(PboPage.jobStats('Indexing_and_Hotswapping', 1)).toBe('Indexing');
    });

    it('status should be completed', function() {
          expect(PboPage.jobStats('Indexing_and_Hotswapping', 2)).toBe('Completed' || 'Running');
    });

}); // Indexing_and_Hotswapping

    describe('check slice status', function() {

      beforeEach(function() {
          PboPage.to();
          browser.get(PboPage.searchEngineLink);
    });

    it('should show three slices', function() {
            expect(PboPage.sliceCount().count()).toBe(3);
    });

    it('should show first slice up', function() {
          //expect(PboPage.sliceStats().get(0).getText()).toBe('1');
          expect(PboPage.sliceStats().get(1).getText()).toBe('Up');
          expect(PboPage.sliceStats().get(2).getText()).toBe('Synchronised');
    });

    it('should show second slice up', function() {
          //expect(PboPage.sliceStats().get(4).getText()).toBe('2');
          expect(PboPage.sliceStats().get(5).getText()).toBe('Up');
          expect(PboPage.sliceStats().get(6).getText()).toBe('Synchronised');
    });

    it('should show third slice up', function() {
          //expect(PboPage.sliceStats().get(8).getText()).toBe('3');
          expect(PboPage.sliceStats().get(9).getText()).toBe('Up');
          expect(PboPage.sliceStats().get(10).getText()).toBe('Synchronised');
    });

}); // slice status
