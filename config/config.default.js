/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1634007174437_2249';

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        security: {
            csrf: {
                enable: false,
                ignoreJSON: true,
            },
            // 白名单
            domainWhiteList: [ '*' ],
        },
        view: {
            root: [
                path.join(appInfo.baseDir, 'app/view'),
                path.join(appInfo.baseDir, 'app/public'),
            ].join(','),
            defaultViewEngine: 'nunjucks',
            mapping: {
                '.html': 'nunjucks',
                '.tpl': 'nunjucks',
            },
        },
    };

    return {
        ...config,
        ...userConfig,
    };
};
