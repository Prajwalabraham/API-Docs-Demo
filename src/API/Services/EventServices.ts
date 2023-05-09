import { getEventById, getLatestEventsByPage,  AddEvent, EventExists, deleteEventById } from '../DAL/EventDAL';
import { v4 as uuidv4 } from 'uuid';
import { Event } from '../Model/Event';

function generateUniqueId() {
  const uuid = uuidv4();
  const numberId = BigInt('0x' + uuid.replace(/-/g, ''));
  return Number(numberId);
}


function getDataByEventId(eventId: number) {
  return getEventById(eventId);
}


function getLatestEvents (type: string, limit: number, page: number) {
    
  const events = getLatestEventsByPage(type, limit, page);
  return events;
}


function addEvent(event: Event) {
    const exists = EventExists(event.uid, event.name, event.type, event.tagline, event.moderator, event.description, event.schedule, event.files.image);        
    if (exists) {
        throw new Error('Event Already Exists');
    }
    else{
        return AddEvent(event);
    }
}

function updateEvent(event: Event) {
    const eventData = getEventById(event.uid);
  
    if (!event) {
      throw new Error('Event not found');
    }
  
    // Update the event properties with the provided values
    eventData.name = event.name;
    eventData.files.image = event.files.image;
    eventData.tagline = event.tagline;
    eventData.schedule = event.schedule;
    eventData.description = event.description;
    eventData.moderator = event.moderator;
    eventData.category = event.category;
    eventData.sub_category = event.sub_category;
    eventData.rigor_rank = event.rigor_rank;
  
    return eventData;
  }
  

  function deleteEvent(eventId: number) {
    const eventData = getEventById(eventId);
    if (!eventData) {
      throw new Error('Event not found');
    }
  
    // Remove the event from the events array
    const deletedEvent:boolean = deleteEventById(eventId)
    return deletedEvent;
  }
  

const EventServices = {
    getDataByEventId,
    getLatestEvents,
    generateUniqueId,
    addEvent,
    updateEvent,
    deleteEvent
};

export default EventServices;