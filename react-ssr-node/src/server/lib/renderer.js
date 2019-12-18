import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import Routes from '../../client/Routes';

export default (req, context, data) => {
    // Generate the initial React render
    const content = renderToString(
        <StaticRouter location={req.path} context={context}>
            <div>{renderRoutes(Routes, { initialData: data })}</div>
        </StaticRouter>
    );

    const helmet = Helmet.renderStatic();

    // Html template to serve in server
    return `
        <!DOCTYPE html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            </head>
            <body>
                <div id="root">
                    ${content}
                </div>
                <script>
                    window.__PRELOADED_STATE__ = ${serialize(data).replace(
                        /</g,
                        '\\u003c'
                    )}
                </script>
                <script src="/bundle.js"></script>
            </body>
        </html>
    `;
};
