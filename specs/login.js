var LoginPagePBO = require('../pages/LoginPagePBO');
var BasePage = require('../pages/BasePage');
var users = require('../data/users.json');

describe('logging in to primo back office', function() {

    describe('through PBO', function() {

        beforeEach(function() {
            LoginPagePBO.to();
        });

        //it('should deny invalid credentials', function() {
         //   LoginPagePBO.loginAs(users.bad);
         //   expect(LoginPagePBO.errorMessage()).toBe('Login failed, Please try again. Reason: Bad credentials');
        //});

        it('should work with a known good account', function() {
            LoginPagePBO.loginAs(users.cwyant);
            expect(LoginPagePBO.at()).toBeTruthy();
        });

    });

});
