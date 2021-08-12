import webpack from 'webpack'
import Express from 'express'
import fs from 'fs'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from './webpack.config'
import getMarkup from './src/server-side/getMarkup'
import path from 'path'


const app = new Express();
const port = 3000;



app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


if(process.env.NODE_ENV != 'production'){
  const compiler = webpack(config)
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
  app.use(webpackHotMiddleware(compiler))
}


app.get("/*", function(req, res) {
  res.send(getMarkup())
})

const server = app.listen(port, function(error) {
  error ? console.error(error) : console.info("Listening on port " + port + ".");
})
