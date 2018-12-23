"use strict";

//*=====コンフィグ読み込みモジュール=====

const fs = require("fs");
const yaml = require("js-yaml");

/**設定ファイルのパス */
const CONFIG_FILE_PATH = "./config.yml";
/**デフォルト設定ファイルのパス */
const DEFAULT_CONFIG_FILE_PATH = "./res/config.yml";

//*==========

/**
 * 設定ファイルが存在するか調べる
 * @returns {boolean} true:存在 false:存在しない
 * @author MunoChan
 */
function existsConfigFile()
{
    try
    {
        fs.statSync(CONFIG_FILE_PATH);
    }
    catch(e)
    {
        return false;
    }
    return true;
}

/**
 * デフォルトの設定ファイルを新規作成
 * @author MunoChan
 */
function createConfigFile()
{
    fs.copyFileSync(DEFAULT_CONFIG_FILE_PATH, CONFIG_FILE_PATH);
}

/**
 * 設定ファイルを読み込み
 * @returns {Object} 設定マップ
 * @author MunoChan
 */
function loadConfigFile()
{
    return yaml.safeLoad(fs.readFileSync(CONFIG_FILE_PATH));
}

module.exports =
{
    existsConfigFile,
    createConfigFile,
    loadConfigFile
}