"use strict";

//*=====Botモジュール=====

const discord = require("discord.js");

//*==========

/**
 * Botクラス
 * @author MunoChan
 */
class Bot
{
    /**
     * 設定からBot作成
     * @param {Object} conf
     */
    constructor(conf)
    {
        this.prefix = conf["prefix"];
        this.token = conf["token"];

        this.client = new discord.Client();

        /**Bot起動時の処理 */
        this.client.on("ready", () =>
        {
            console.log("Ready!");
        });

        this.client.on("message", (message) =>
        {
            if(!message.author.bot && message.guild != null)
            {
                if(message.content.startsWith(this.prefix))
                {
                    let obj = this.processContent(message.content);
                    console.log(obj);
                }
            }
        });
    }

    /**
     * ログイン処理
     * @author MunoChan
     */
    login()
    {
        this.client.login(this.token);
    }

    /**
     * メッセージをコマンド名と引数に変換
     * @param {String} content
     * @returns {Object} {name: コマンド名, args: 引数}
     * @author MunoChan
     */
    processContent(content)
    {
        content = content.substr(this.prefix.length).trim().split(/ +/);
        let name = content[0];
        content.splice(0, 1);
        let args = content;

        return {name: name, args: args};
    }
}

module.exports =
{
    Bot
}