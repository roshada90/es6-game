# ecma6-game
Simple game using ecma6 with babel.js, browserify and flow for testing

## Quick Start
``` typescript
# Install dependencies for server
npm install

# Install babel js for transpiling
npm i --save-dev babel-cli

# To make changes in build of project, adding new files/folders/paths
npm run build

# To install babel plugin system
npm install babel-preset-es2015 --save-dev

# Add to package.json
"build": "babel src -d lib --source-maps"

# For an error in browser where require is not defined
npm i browserify --save-dev

# Then update script as  (package.json)
"bundle-js": "browserify lib/hello.js > static/hello.js",
    "build-js": "babel src -d lib --source-maps",
    "build": "npm run build-js && npm run bundle-js"

# For generator functions, you need to include babel modules
import "babel-core/register";
import "babel-polyfill";

# Install async functions to use async feature of es6
npm install babel-plugin-transform-async-to-generator --save

# Install flow for type checking
npm i --save-dev flow-bin
npm i --save-dev babel-plugin-syntax-flow && npm i --save-dev babel-plugin-transform-flow-strip-types

# Project runs on http://localhost:3000
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
