# 阿里云OSS文件选择器

[English](README.md) ｜ [中文](README_CN.md)

这是一个可以通过`日期`和`文件名`选择你的阿里云OSS存储桶对象的工具，并且得到的结果会按照`日期`排序。

## 如何使用
1. 添加你的.env配置文件
   
    ```
        cp .env.template .env
    ```
    
    在`.env`添加你的阿里云OSS配置。

2. 添加你的筛选规则
    a. (可选) 在`service.js`中定义list_query
    
   > 官方文档:
   > https://github.com/ali-sdk/ali-oss#summary  (页内搜索 **.listV2(query[, options])**)


    b. 在`index.js`中定义你的筛选规则。
    
    ```javascript
        const SEARCH_BY_DATE = '2024-03-12'
        const SEARCH_BY_FILENAME = '.pdf'
     ```

3. 运行脚本并查看控制台输出

    ```
        npm run start
    ```
## Release Note
- 2024-03-12: Initial release.
- 2024-07-10:  Use .listV2. Add official document link.