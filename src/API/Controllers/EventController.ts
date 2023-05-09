import * as express from 'express';
import EventService from '../Services/EventServices';

const Router = express.Router() 


Router.get('/events/:id', (req: express.Request, res: express.Response) => {
  const eventId = parseInt(req.query.id?.toString() ?? '', 10);

  try {
    const event = EventService.getDataByEventId(eventId);
    res.json(event);
  } catch (error) {
    res.status(404).json({ error: 'Event not found' });
  }
})

Router.get('/events/:type&:limit&:page', (req: express.Request, res: express.Response) => {
  const { type, limit, page } = req.query;


  try {
    const events = EventService.getLatestEvents(type as string, parseInt(limit as string, 10), parseInt(page as string, 10));
    if (events.length === 0) {
      res.status(404).json({ error: 'No events found' });
    }
    else{
      res.json(events);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
})

Router.post('/events', (req: express.Request, res: express.Response) => {
  const { name, image, tagline, schedule, description, moderator, category, sub_category, rigor_rank } = req.body;

  // Generate a unique ID for the new event
  const eventId = EventService.generateUniqueId();
  
  const event = {
    type: 'event',
    uid: eventId,
    name,
    files:{
      image
    },
    tagline,
    schedule,
    description,
    moderator,
    category,
    sub_category,
    rigor_rank,
    attendees: []
  }
  try {
    const addedEvent = EventService.addEvent(event);
    res.status(201).json(addedEvent)
  } catch (error: any) {
    if (error.message.includes("Already Exists")) {
      res.status(409).json({ error: 'Event already exists' });
    }
    else{
      res.send(error)
    }
  }
});


Router.put('/events/:id', (req: express.Request, res: express.Response) => {
  const uid = parseInt(req.params.id, 10);
  const { name, image, tagline, schedule, description, moderator, category, sub_category, rigor_rank, attendees } = req.body;
  const event = {
    type:'event',uid, name, files:{"image":image}, tagline, schedule, description, moderator, category, sub_category, rigor_rank, attendees
  }
  try {
    const UpdatedEvent = EventService.updateEvent(event);
    res.json(UpdatedEvent);
  } catch (error) {
    res.status(404).json({ error: 'Event not found' });
  }
});



Router.delete('/events/delete/:id', (req: express.Request, res: express.Response) => {
  const eventId = parseInt(req.params.id, 10);
  try {
    const deleted = EventService.deleteEvent(eventId);
  
    res.json(deleted);
  } catch (error) {
    res.status(404).json({ error: 'Event not found' });
  }
});




export default Router;