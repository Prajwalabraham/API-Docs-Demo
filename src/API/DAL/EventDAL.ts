import { events } from './Data';
import {Event} from '../Model/Event';

// Get an event by its unique ID
export const getEventById = (eventId: any) => {
  const event = events.find((event) => event.uid === eventId && event.type === 'event');
  if (!event) {
    throw new Error('Event not found');
  }
  return event;
};

// Get all events
export const getAllEvents = () => {
  const filteredEvents = events.filter((event) => event.type === 'event');
  return filteredEvents;
};

export const getLatestEventsByPage = (type: string, limit: number, page: number) => {
  const filteredEvents = events.filter((event) => event.type === type);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const eventsPerPage = filteredEvents.slice(startIndex, endIndex);
  return eventsPerPage;
};


export const AddEvent = (event: Event) => {
    events.push(event);
    return event.uid;
}

export const EventExists = (uid: any,  name: string, type: string, tagline: string,  moderator:string, description: string, schedule: Date, image: string) => {
  const event = events.find((event) => event.type == type && event.name == name && event.tagline == tagline && event.moderator == moderator && event.description == description && event.schedule == schedule && event.files.image == image);
  return event;
}


export const deleteEventById = (eventId: number) => {
    const index = events.findIndex(event => event.uid === eventId);
    if (index !== -1) {
      events.splice(index, 1);
      return true;
    }
    return false;
  };
  