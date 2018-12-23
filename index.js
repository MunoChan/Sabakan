"use strict";

//*=====メインモジュール=====

const config = require("./modules/config");
const bot = require("./modules/bot");

//*==========

try
{
    if(config.existsConfigFile())
    {
        const conf = config.loadConfigFile();
        if(checkConfig(conf))
        {
            // Bot起動
            const Bot = new bot.Bot(conf);
            Bot.login();
        }
        else
        {
            // 設定に不備あり
            console.log("設定に不備があります。");
            console.log("token: '" + conf["token"] + "'");
            console.log("prefix: '" + conf["prefix"] + "'");
        }
    }
    else
    {
        // 設定ファイルが存在しない場合は作成
        config.createConfigFile();
        console.log("設定ファイルを新規作成しました。");
    }
}
catch(e)
{
    console.log(e)
}

/**
 * 設定チェック
 * @param {Object} conf
 * @returns {boolean} true:不備なし false:不備あり
 * @author MunoChan
 */
function checkConfig(conf)
{
    return conf != undefined && conf != null &&
            conf["token"] != undefined && conf["token"] != null &&
            conf["prefix"] != undefined && conf["prefix"] != null &&
            conf["token"].length > 0 && conf["prefix"].length > 0;
}