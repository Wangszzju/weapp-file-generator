#!/usr/bin/env node

const program = require('commander');
const pkgInfo = require('./package.json');
const toolRoot = __dirname;
const workspace = process.cwd();
const { resolve } = require('path');
const fs = require('fs-extra');

program
  .version(pkgInfo.version)
  .option('-p, --page', 'Add Page Tpl')
  .option('-c, --component', 'Add Component Tpl')
  .option('-n, --name [name]', 'Add Module Name')
  .parse(process.argv);

const dirName = program.name || 'page';

function createFolder(name) {

  const folderPath = resolve(workspace, name);
  if (fs.existsSync(folderPath)) {
    console.log(`${folderPath} already exist So the command do nothing`);
  } else {
    fs.ensureDirSync(folderPath);
    return folderPath;
  }
}

function moveFile(tplType, targetPath) {
  const tplPath = resolve(toolRoot, `./templates/${tplType}`);
  fs.copySync(tplPath, targetPath);
}

function updateAppJson(path) {
  const appJsonPath = resolve(workspace, './app.json');
  if (fs.existsSync(appJsonPath)) {
    const appJson = require(appJsonPath);
    const item = path.replace(/(.*?)pages(.*)/, ($0, $1, $2) => `pages${$2}/index`);
    appJson.pages.push(item);
    const data = JSON.stringify(appJson);
    fs.writeFileSync(appJsonPath, data);
  }

}

if (program.page || program.component) {
  // 绝对路径
  const path = createFolder(dirName);
  if (path) {
    const type = program.page ? 'page' : 'component';
    moveFile(type, path);
    if (program.page) {
      updateAppJson(path);
    }
  }

}
