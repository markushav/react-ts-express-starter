# Server-side rendered React on Express with Typescript

This is a minimal setup implementation of SSR React. Did this from scratch to understand what happens under the hood of [Create React App](https://create-react-app.dev/) and [Next.js](https://nextjs.org/).

## How to run

1. Install dependencies: `npm install`
2. Run the dev script: `npm run dev`
3. Open your http://localhost:5050 with your browser. You can also test other paths like http://localhost:5050/another_path

Theoretically the production would be done so that first you `npm install`, then you `npm run build` and at the server you `npm run start`. It works, but I have not checked that everything is suited for production.

## What did I learn?

In the end it's quite simple to set up a SSR React on Express server. Especially rendering on server is very simple and can be done without webpack or other config, but the client side requires some thinking. My initial goal was to survive with only building step to be `tsc`, but to get the client script, I needed to add webpack. But I think I still managed to keep the level of configuration low.

## What's in it?

There's only three actual dependencies: React, ReactDOM and Express. React and ReactDOM do the html generation and functionality, express serves everything.

For development there's obviously types for the packages that need types. And then there's `typescript` and `ts-node` for running the dev side. For convenience, I added nodemon to restart the server everytime there's a code change. Then finally, webpack is needed to bundle the client-side script.