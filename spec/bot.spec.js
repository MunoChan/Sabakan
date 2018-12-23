"use strict"

const Bot = require("../modules/bot").Bot;

describe("Botモジュールテスト", () =>
{
    let bot = new Bot({token: "hogehoge", prefix: "sb>"});

    it("設定チェック", () =>
    {
        expect(bot.token).toBe("hogehoge");
        expect(bot.prefix).toBe("sb>");
    });

    it("イベントハンドラテスト", ()=>
    {
        expect(bot.client.listenerCount("ready")).toBe(1);
        expect(bot.client.listenerCount("message")).toBe(1);
    });

    it("コマンドテスト", () =>
    {
        expect(bot.processContent("sb>test  a i    u  e  o")).toEqual({name: "test", args: ["a", "i", "u", "e", "o"]});
    });
});