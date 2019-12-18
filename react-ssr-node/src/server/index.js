import '@babel/polyfill';
import express from 'express';
import React from 'react';
import { matchRoutes } from 'react-router-config';
import compression from 'compression';

import renderer from './lib/renderer';
import Routes from '../client/Routes';

const app = express();

function shouldCompress(req, res) {
    if (req.headers['x-no-compression']) return false;
    return compression.filter(req, res);
}

// Compression middleware
app.use(
    compression({
        level: 2,
        filter: shouldCompress
    })
);

const port = process.env.PORT || 3000;

// Static files
app.use(express.static('public'));

app.get('*', (req, res) => {
    const initialData = {
        name: 'Joel',
        age: 22
    }
    const context = {};
    const content = renderer(req, context, initialData);

    if (context.notFound) {
        res.status(404);
    }

    res.send(content);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
