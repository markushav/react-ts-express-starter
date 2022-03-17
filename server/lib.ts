import { ReactElement } from "react";
import ReactDOMServer from "react-dom/server";

export const renderToHtml = (ReactComponent: ReactElement) => {
  const documentBody = ReactDOMServer.renderToString(ReactComponent);
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <div id="root">${documentBody}</div>
        <script>window.__PRELOADED_STATE__ = ${JSON.stringify(
          ReactComponent.props
        )}</script>
        <script src="/main.js"></script>
    </body>
    </html>`;
};

