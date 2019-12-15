# steps

1. create branch `gh-pages` (note: unless branch already exists)
2. ceate a new file in root directory of your project and name it `vue.config.js`
3. paste `// vue.config.js module.exports = { publicPath: ‘<my-first-project>’}` inside the `vue.config.js` file
4. go to .gitignore and comment out `/dist/`'
5. run `npm run build`
6. Do not commit the `vue.config.js` or `.gitignore`
7. run `git add dist && git commit -m "Initial dist subtree commit"`
8. run `git subtree push --prefix dist origin gh-pages`

[source](https://medium.com/@Roli_Dori/deploy-vue-cli-3-project-to-github-pages-ebeda0705fbd)
