# Indecision App - Webpack


- Setup
    - Remove globally installed packages from previous chapters `npm uninstall -g live-server babel-cli`
    - Install required packages locally `npm install --save live-server babel-cli`
    - Setup scripts e.g. for live server in `package.json` in section scripts add ` "serve": "live-server public/"`
    - Npm scripts can be run via command `npm run <script name>`
    
- Webpack setup
    - Install webpack `npm install webpack`
    - Webpack [documentation](https://webpack.js.org/concepts/)
    - Add webpack npm script
    - Add webpack config file - create `webpack.config.js` file in project root directory
    - Configure output path as full path. Use `__dirname` an `path.join()` to achieve that
    