# Aliyun OSS File Selector

[English](README.md) ｜ [中文](README_CN.md)

This tool allows you to select objects from your Aliyun OSS bucket based on `date` and `filename`, with the results sorted by `date`.

## How to Use

1. Add Your .env File

   ```
       cp .env.template .env
   ```

   Input your Aliyun OSS configuration here.

2. Add Your Rule

   a. (Optional)
   Define list_query in `service.js`
   
   > Official Doc:
   > https://github.com/ali-sdk/ali-oss#summary  (Search **.listV2(query[, options])** at this page)

   b. Define your rule in `index.js`.

   ```javascript
   const SEARCH_BY_DATE = "2024-03-12";
   const SEARCH_BY_FILENAME = ".pdf";
   ```

3. Execute the Script and Monitor the Console Output

   ```
       npm run start
   ```

## Release Note

- 2024-03-12: Initial release.
- 2024-07-10: Use .listV2. Add official document link.
