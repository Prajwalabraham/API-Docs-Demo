"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEventById = exports.EventExists = exports.AddEvent = exports.getLatestEventsByPage = exports.getAllEvents = exports.getEventById = void 0;
const Data_1 = require("./Data");
// Get an event by its unique ID
const getEventById = (eventId) => {
    const event = Data_1.events.find((event) => event.uid === eventId && event.type === 'event');
    if (!event) {
        throw new Error('Event not found');
    }
    return event;
};
exports.getEventById = getEventById;
// Get all events
const getAllEvents = () => {
    const filteredEvents = Data_1.events.filter((event) => event.type === 'event');
    return filteredEvents;
};
exports.getAllEvents = getAllEvents;
const getLatestEventsByPage = (type, limit, page) => {
    const filteredEvents = Data_1.events.filter((event) => event.type === type);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const eventsPerPage = filteredEvents.slice(startIndex, endIndex);
    return eventsPerPage;
};
exports.getLatestEventsByPage = getLatestEventsByPage;
const AddEvent = (event) => {
    Data_1.events.push(event);
    return event.uid;
};
exports.AddEvent = AddEvent;
const EventExists = (uid, name, type, tagline, moderator, description, schedule, image) => {
    const event = Data_1.events.find((event) => event.type == type && event.name == name && event.tagline == tagline && event.moderator == moderator && event.description == description && event.schedule == schedule && event.files.image == image);
    return event;
};
exports.EventExists = EventExists;
const deleteEventById = (eventId) => {
    const index = Data_1.events.findIndex(event => event.uid === eventId);
    if (index !== -1) {
        Data_1.events.splice(index, 1);
        return true;
    }
    return false;
};
exports.deleteEventById = deleteEventById;
//# sourceMappingURL=EventDAL.js.map