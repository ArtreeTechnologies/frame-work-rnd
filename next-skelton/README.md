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
- `prettier`
- `prettier-stylelint`
- `tslint`
- `tslint-config-airbnb`
- `tslint-config-prettier`
- `tstlint-plugin-prettier`
- `stylelint`
- `stylelint-config-idiomatic-order`
- `stylelint-config-prettier`
- `postcss`
- `postcss-syntax`
- `lint-staged`... Runs tslint, etc. on staged files
- `husky`... Handles git pre-commit hooks

### `lint-staged`, `husky`
- Command:
```
yarn add -D tslint lint-staged husky
```
- `package.json`
```
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "*.{ts,tsx}": [
    "tslint --fix",
    "git add"
  ],
  "*.js": [
    "prettier --write",
    "git add"
  ],
  "*.css": [
    "prettier-stylelint --write",
    "git add"
  ]
}
```
