//Dependencies
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from ' webpack-hot-middelware';
import open from 'open';

//webpack Configuration
import webpackConfig from '../../webpack.config.dev';

//Server Port
const port = 3000

//Express App
const app = express();

//webpack Compiler
const webpackCompiler = webpack(webpackConfig);

//Webpack Middleware
 app.use(webpackDevMiddleware(webpackCompiler));
 app.use(webpackHotMiddleware(webpackCompiler));

 //Sending all traffic to React
 app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '../public/index.html'));
 });

 //Listen Port
 app.listen(port, err => {
   if(!err) {
     open(`http://localhost:${port}`);
   }

 })
