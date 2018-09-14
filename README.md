## 1. 工作方式

* 解析参数：确定用户要读取page模板／component模板。
* 读取工具仓库的内部的模板文件。
* 执行Copy过程。

> 是不是超简单～

## 2.使用方式

* git clone 本项目
* 在本目录下npm link
```
npm link
```
* 移动到实际业务项目目录的特定目录，例如你要在/pages目录下新建一个叫log的页面
```
cd pages/ && wfg -p -n log
```
* 若要新建组件，则移动到相应目录下执行
```
cd components && wfg -c -n button
```

## 3. 后续计划

* 发布npm包
* 支持自动更新app.json