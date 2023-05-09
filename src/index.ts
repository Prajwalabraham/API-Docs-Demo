import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import swaggerUI from 'swagger-ui-express';
import bodyParser from 'body-parser';
import * as swaggerDocument from "../swagger.json";
import Router from './API/Controllers/EventController';
const app = express();


dotenv.config();
//options for cors midddleware
const options: cors.CorsOptions = {
      allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
      ],
      credentials: true,
      methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
      origin: process.env.API_URL,
      preflightContinue: false,
    };

//use cors middleware
app.use(cors(options));

// Set up middleware
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/api/v3/app', Router)

app.listen(process.env.BACK_PORT, () => {
      console.log(`server running : http://${process.env.BACK_HOST}:${process.env.BACK_PORT}`);   
});
