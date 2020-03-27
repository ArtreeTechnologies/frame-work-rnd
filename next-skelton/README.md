# Getting Started Next
## Install Necessary Modules
```
yarn add next react react-dom
```

## Change Script in `package.json`
```
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```

## Setup Necessary Directries and Files
- `components`... For components. Great to group up files in here.
- `lib`... For modules and queries you created.
- `pages`... For page components, which consist of actual web pages.
- `server`... For express server, that runs next on server side.
- `static`... For images or icons, which is unnecessary to be changed.

## Create The Index Page
```
function HomePage() {
  return <div>Welcome to Next.js!</div>
}

export default HomePage
```

## Setup Tsconfig Page
### Install Dependencies
```
yarn add -D typescript
yarn add -D @types/react @types/react-dom @types/node
```

### Edit `tsconfig.json`
- The following is the example from the official doc
```
{
  "compilerOptions": {
    "allowJs": true,
    "alwaysStrict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "lib": ["dom", "es2018"],
    "module": "esnext",
    "moduleResolution": "node",
    "noEmit": true,
    "noFallthroughCasesInSwitch": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "strict": true,
    "target": "esnext"
  },
  "exclude": ["node_modules"],
  "include": ["**/*.ts", "**/*.tsx"]
}
```

- Editted like the followings:
```
"compilerOptions": {
  "lib": ["dom", "es2018"],
  ...
  "sourceMap": true,
  ...
  "noImplicitReturns": true, 
  "noImplicitThis": true,
  "noImplicitAny": true, 
  "strictNullChecks": true, 
  "suppressImplicitAnyIndexErrors": true, 
}
...
"exclude": ["node_modules", "jest"],
```

## Module Install
Reference(https://github.com/oukayuka/ReactBeginnersBook/tree/master/06-lint/03-mysetting)
- `prettier`
- `prettier-stylelint`
- `tslint`... Core tslint module
- `tslint-config-airbnb`... One of tslint defact standards
- `tslint-config-prettier`... Detects conflict between prettier and tslint
- `tslint-plugin-prettier`... Combine prettier check with tslint running
- `stylelint`
- `stylelint-config-idiomatic-order`
- `stylelint-config-prettier`
- `postcss`
- `postcss-syntax`
- `lint-staged`... Runs tslint, etc. on staged files
- `husky`... Handles git pre-commit hooks

### `lint-staged`, `husky`
* Reference(https://kic-yuuki.hatenablog.com/entry/2019/05/27/090515)
1. Command:
```
yarn add -D tslint lint-staged husky
```
2. `package.json`
```
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "*.{ts,tsx}": [
    "tslint --fix"
  ],
  "*.js": [
    "prettier --write"
  ],
  "*.css": [
    "prettier-stylelint --write"
  ]
}
```

### `tslint`, `tslint-config-airbnb
* Reference(https://dev.to/oahehc/how-to-config-react-project-with-next-js-typescript-tslint-and-jest-11l0)
1. Command:
```
yarn add -D tslint-config-airbnb tslint-config-prettier tslint-plugin-prettier
```
2. `tslint.json`
```
{
  "extends": [
    "tslint:latest",
    "tslint-config-airbnb",
    "tslint-config-prettier",
    "tslint-eslint-rules"
  ],
  "rulesDirectory": ["tslint-plugin-prettier"],
  "rules": {
    "import-name": false,
    "align": [true, "parameters", "arguments", "statements"],
    "function-name": [
      true,
      {
        "function-regex": "^[a-zA-Z$][\\w\\d]+$",
        "method-regex": "^[a-z$][\\w\\d]+$",
        "private-method-regex": "^[a-z$][\\w\\d]+$",
        "protected-method-regex": "^[a-z$][\\w\\d]+$",
        "static-method-regex": "^[a-z$][\\w\\d]+$"
      }
    ],
    "max-line-length": [
      true,
      {
        "limit": 100,
        "ignore-pattern": "^import |^export {(.*?)}"
      }
    ],
    "prettier": [
      true,
      {
        "bracketSpacing": true,
        "printWidth": 80,
        "semi": true,
        "singleQuote": true,
        "trailingComma": "all",
        "useTabs": false
      }
    ],
    "variable-name": {
      "options": ["ban-keywords", "check-format", "allow-leading-underscore", "allow-pascal-case"]
    }
  }
}
```
3. `package.json`
```
{
  "scripts": {
  ...
  "lint": "tslint --project ./ --fix '{components,lib,pages}/**/*.{ts,tsx}'",
  "tslint-check": "tslint-config-prettier-check ./tslint.json"
  }
}
```
`tslint-config-prettier-check` checks conflict rules between prettier and tslint

### `prettier`
* Reference(https://qiita.com/akisx/items/4b90106c7faca4965852)
1. Command:
```
yarn add -D prettier
```
2. `package.json`
```
{
  "scripts": {
    "prettier": {
      "bracketSpacing": true,
      "printWidth": 80,
      "semi": true,
      "singleQuote": true,
      "trailingComma": "all",
      "useTabs": false
    }
  } 
}
```
3. `./.vscode/settings.json` 
On save, prettier automatically formats code
```
{
  "editor.formatOnSave": true
}
```
- (Additional) Along with tslint
  - `tslint-config-prettier` detects conflicts
  - `tslint-plugin-prettier` runs prettier along with tslint

## Setup Test Environment
### `jest`, `Enzyme`
1. Command:
```
yarn add -D jest enzyme enzyme-adapter-react-16 babel-jest @types/jest @types/enzyme
```
2. `./config/setup.js`
```
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });
```
3. `./jest.config.js`
```
module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  setupFiles: ['<rootDir>/config/setup.js'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  testRegex: '/__test__/.*\\.(test|spec)\\.tsx?$',
};
```
4. Example: `./__test__/index.test.tsx`
```
import React from 'react';
import { mount } from 'enzyme';
import Index from '../index';

describe('index page', () => {
  it('should have App component', () => {
    const subject = mount(<Index />);

    expect(subject.find('App')).toHaveLength(1);
  });
});
```
5. `package.json`
```
"scripts": {
  ...
  "test": "jest --watchAll --verbose"
}
```
6. Yarn command:
```
yarn test
```