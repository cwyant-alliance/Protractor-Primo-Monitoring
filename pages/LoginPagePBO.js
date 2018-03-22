browser.ignoreSynchronization = true;
var BasePage = require('./BasePage.js');
var queryString = require('query-string');
var config = require('../data/config.json');

var LoginPagePBO = function() {

    /**
     * URLs
     */
    this.url = config.pboBaseUrl;
    this.pageLoaded = this.inDom($('loginForm'));

    /**
     * Elements
     */
    this.usernameInput = element(by.name('j_username'));
    this.passwordInput = element(by.name('j_password'));

    /**
     * Get the error message displayed, if any.
     * @return {string} text of the error message.
     */
    this.errorMessage = function() {
        return $('.errorArea').getText().then(function(text) {
            return text.trim();
        });
    };

    /**
     * Log in by passing a user object with credentials to use.
     * @param  {object} user credentials taken from data/users.json file
     */
    this.loginAs = function(user) {
        this.usernameInput.sendKeys(user.username);
        this.passwordInput.sendKeys(user.password);
        this.hitEnter();
    };

};

LoginPagePBO.prototype = BasePage;
module.exports = new LoginPagePBO();
