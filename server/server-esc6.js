import express from 'express';
import morgan from 'morgan';
import config from './config/config';
//import http from 'http';

const app = express();

app.use(morgan('dev'));
app.use(express.static(config.root));
require('./config/routes').init(app);
/*app.use('/',express.static(__dirname + '../../app'));*/

app.listen(4444, function () {
    console.log( "Server modfied by Victor Chavarro: ");
    console.log( `ROOT PATH: ${config.root}` );
    console.log(`Server available at localhost: 4444`);
});
