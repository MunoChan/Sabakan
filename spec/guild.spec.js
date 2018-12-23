"use strict";

//*=====guildモジュールのテスト=====

const guild = require("../modules/guild");

//*==========

describe("guildモジュールのテスト", () =>
{
    it("読み込みテスト", () =>
    {
        expect(guild.loadAllDatas()).toEqual({});
    });

    it("アップデートテスト", () =>
    {
        guild.updateAllDatas({114514: {TDN: "多田野数人"}});
        expect(guild.loadAllDatas()).toEqual({114514: {TDN: "多田野数人"}});
    });
});