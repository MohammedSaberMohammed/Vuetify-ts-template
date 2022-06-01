# Rules

### Linter
- ***It's a must to enable linter eslint [Linter]***: *To guarantee that all team members using the same **code style** + prevent **[pipelines]** craches (from warnings) and here is how to make it work*:
- *If you are using [VSCode]*:
  - Install **ESLint + Prettier ESLint** Extensions
  - ***.vscode[folder] --> settings.json***: *Configurations for Eslint **preconfigured in the template already** and to format on save and here is the souce if needed*
  ```json
  {
    "eslint.format.enable": true,
    "eslint.alwaysShowStatus": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "vetur.validation.template": false,     

    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "vue",
        "typescript"
    ],
    "editor.tabSize": 2,
    "git.autofetch": true,
    "[vue]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    }
  }
  ``` 

### HTML

### CSS
- ***[Sass preprocessor](https://sass-lang.com/documentation/)***: Is used for better writing and **exactly the Indented syntax (Scss)** 
- ***main.scss [Located in public folder]: It's used for [global] styles and nothing more***
- ***fileName.module.scss [css-modules](https://css-tricks.com/css-modules-part-1-need/)***: **Why should we use it? because** With CSS Modules, it’s a guarantee that all the styles for a single component:
  - Live in one place
  - Only apply to that component and nothing else

### TS Declaration
- ***declaration.d.ts***: Is where to go if you need custom declaration for *packages and so on*
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
