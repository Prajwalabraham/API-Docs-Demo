// index.ts
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import FoodRouter from './routes/Food';
import EventRouter from './routes/Event';
import VolunteerRouter from './routes/Volunteer';

const app = express();

// Set up middleware
app.use(bodyParser.json());
app.use(cors());

// Use the routes

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/food', FoodRouter);
app.use('/event', EventRouter);
app.use('/volunteer', VolunteerRouter);

// Start the server
app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
