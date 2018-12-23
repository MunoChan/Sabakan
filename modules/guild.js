"use strict";

//*=====サーバー情報管理モジュール=====

const fs = require("fs");
const yaml = require("js-yaml");

/**サーバー情報を保存するディレクトリ */
const GUILD_DATA_DIR_PATH = "./guilds/"

//*==========

/**
 * 情報を保存するディレクトリが存在するか調べる
 * @returns {boolean} true:存在 false:存在しない
 * @author MunoChan
 */
function existsDataDir()
{
    try
    {
        fs.statSync(GUILD_DATA_DIR_PATH);
    }
    catch(e)
    {
        return false;
    }

    return true;
}

/**
 * 全データ読み込み
 * @returns {Object} データ
 * @author MunoChan
 */
function loadAllDatas()
{
    let datas = {};

    if(existsDataDir())
    {
        fs.readdirSync(GUILD_DATA_DIR_PATH).forEach((file) =>
        {
            if(file.match(/[0-9]+\.yml/))
                datas[file.substr(0, file.length - 4)] = yaml.safeLoad(fs.readFileSync(GUILD_DATA_DIR_PATH + file));
        });
    }

    return datas;
}

/**
 * 全データファイル更新
 * @param {Object} datas
 * @author MunoChan
 */
function updateAllDatas(datas)
{
    if(!existsDataDir())
        fs.mkdirSync(GUILD_DATA_DIR_PATH);

    for(let id in datas)
    {
        if(id.match(/[0-9]+/))
            fs.writeFileSync(GUILD_DATA_DIR_PATH + id + ".yml", yaml.safeDump(datas[id]));
    }
}

module.exports =
{
    loadAllDatas,
    updateAllDatas
}