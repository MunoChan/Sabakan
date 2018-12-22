"use strict";

//*=====コンフィグ読み込みモジュール=====

const fs = require("fs");
const yaml = require("js-yaml");

const CONFIG_FILE_PATH = "./config.yml";
const DEFAULT_CONFIG_FILE_PATH = "./res/config.yml";

//*==========

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

function createConfigFile()
{
    fs.copyFileSync(DEFAULT_CONFIG_FILE_PATH, CONFIG_FILE_PATH);
}

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