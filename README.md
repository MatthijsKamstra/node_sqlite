# Node SQLite

## install

https://sqlitebrowser.org/

```bash
# https://formulae.brew.sh/cask/db-browser-for-sqlite
brew install --cask db-browser-for-sqlite
```

## server

```bash
# init node project
npm init -y
# install packages
npm install express
npm install sqlite3
# just te be sure: ignore the node_modules folder
echo node_modules > .gitignore
```

```bash
# create files
mkdir public
mkdir public/js
mkdir public/css

touch public/css/style.css
touch public/js/app.js
touch index.js
touch index.html
```

```js
const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.listen(8000, () => console.log("Server is running on Port 8000"));
```

## Resource

- https://arctype.com/blog/pwa-sqlite/
  - https://github.com/Claradev32/Offline-first-App/
- https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/
  - https://github.com/fraigo/node-express-rest-api-example
- https://codewithwolf.com/how-to-use-jwt-with-node-express-sqlite-and-typescript
  - https://github.com/mwolfhoffman/node-jwt-sqlite-typescript-starter
- https://giuliohome.wordpress.com/2021/04/10/node-js-express-sqlite-for-angular-rest-api/
- https://geshan.com.np/blog/2021/10/nodejs-sqlite/

orm

- https://typeorm.io/
