"use strict";

const config = require("../modules/config");

describe("configモジュールのテスト", () =>
{
    if(!config.existsConfigFile())
        config.createConfigFile();

    let conf = config.loadConfigFile();

    it("オプションチェック", () =>
    {
        expect(conf["token"]).toBe("");
        expect(conf["prefix"]).toBe("sb>");
    });
});