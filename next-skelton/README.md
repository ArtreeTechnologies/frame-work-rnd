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

## Set Up Necessary Directries and Files
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