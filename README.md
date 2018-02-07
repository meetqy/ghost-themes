### 项目结构
```
├── LICENSE.md
├── README.md
├── assets
│   ├── css
│   │   └── caffeine-theme.css //production css
│   ├── fonts
│   ├── img //favicons and cover image
│   ├── js
│   │   ├── src //all the code that will be compiled, concatenated, and minified
│   │   │   ├── __init.js
│   │   │   ├── cover.js
│   │   │   ├── main.js
│   │   │   └── search.js
│   │   └── caffeine-theme.min.js //production js
│   └── scss //all the sass stylsheets that will be bundled together
│   │   ├── components //stylesheets for specific components
│   │   │   ├── _aside.scss
│   │   │   ├── _loading.scss
│   │   │   ├── _media-queries.scss
│   │   │   ├── _page-error.scss
│   │   │   ├── _pagination.scss
│   │   │   ├── _post.scss
│   │   │   └── _search.scss
│   │   ├── modules //stylesheets for generic modules
│   │   │   ├── _buttons.scss
│   │   │   ├── _effects.scss
│   │   │   ├── _fonts.scss
│   │   │   ├── _forms.scss
│   │   │   ├── _global.scss
│   │   │   ├── _grid.scss
│   │   │   ├── _mixins.scss
│   │   │   ├── _reset.scss
│   │   │   └── _variables.scss
│   │   └── caffeine-theme.scss //parent sass file
|   └── vendor //bower dependencies
├── bower.json
├── default.hbs
├── error.hbs
├── gulpfile.js
├── index.hbs
├── node_modules
├── package.json
├── partials //partial hbs views
│   ├── aside.hbs
│   ├── comments.hbs
│   ├── footer.hbs
│   ├── google-analytics.hbs
│   ├── links.hbs
│   ├── meta.hbs
│   ├── pagination.hbs
│   ├── search.hbs
│   └── social.hbs
├── post.hbs                                                            文章内容
└── tag.hbs                                                             
```
