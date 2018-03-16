browser.ignoreSynchronization = true;
var BasePage = require('./BasePage.js');

var PboPage = function() {

//    this.url = 'https://alliance-primo-sb.hosted.exlibrisgroup.com:1443/primo_publishing/admin/action/menus.do';
    this.url = 'https://alliance-primo-sb.hosted.exlibrisgroup.com:1443'
    this.pageLoaded = this.inDom($('welcome'));

    /**
     * Link elements
     */
    this.monitorLink = element(by.id('general.menu.monitoring.monitorPrimoStatus'));
    this.jobMonitorLink = element(by.id('general.menu.monitoring.monitorPrimoStatus.jobMonitoring'));
    this.searchEngineLink = this.url + '/primo_publishing/admin/action/SearchServerMonitor.do?command=list';

    /**
    * Table data
    */
    this.jobStats = function(job, cell) {
      return element(by.xpath('//td[text()[contains(.,"' + job + '")]]/following-sibling::td[' + cell + ']')).getText();
    };

    //this.feStats = function()

    this.sliceCount = function() {
        return element.all(by.xpath('//tr[contains(@class, "bottomTr")]'));
    };

    this.sliceStats = function() {
        return element.all(by.xpath('//tr[contains(@class, "bottomTr")]/td'));
    };

};


PboPage.prototype = BasePage;
module.exports = new PboPage();
