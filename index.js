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
  fs.ensureDirSync(folderPath);
  return folderPath;
}

function moveFile(tplType, targetPath) {
  const tplPath = resolve(toolRoot, `./templates/${tplType}`);
  fs.copySync(tplPath, targetPath);
}

if (program.page || program.component) {
  const path = createFolder(dirName);
  const type = program.page ? 'page' : 'component';
  moveFile(type, path);
}
