"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventDAL_1 = require("../DAL/EventDAL");
const uuid_1 = require("uuid");
function generateUniqueId() {
    const uuid = (0, uuid_1.v4)();
    const numberId = BigInt('0x' + uuid.replace(/-/g, ''));
    return Number(numberId);
}
function getDataByEventId(eventId) {
    return (0, EventDAL_1.getEventById)(eventId);
}
function getLatestEvents(type, limit, page) {
    const events = (0, EventDAL_1.getLatestEventsByPage)(type, limit, page);
    return events;
}
function addEvent(event) {
    const exists = (0, EventDAL_1.EventExists)(event.uid, event.name, event.type, event.tagline, event.moderator, event.description, event.schedule, event.files.image);
    if (exists) {
        throw new Error('Event Already Exists');
    }
    else {
        return (0, EventDAL_1.AddEvent)(event);
    }
}
function updateEvent(event) {
    const eventData = (0, EventDAL_1.getEventById)(event.uid);
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
function deleteEvent(eventId) {
    const eventData = (0, EventDAL_1.getEventById)(eventId);
    if (!eventData) {
        throw new Error('Event not found');
    }
    // Remove the event from the events array
    const deletedEvent = (0, EventDAL_1.deleteEventById)(eventId);
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
exports.default = EventServices;
//# sourceMappingURL=EventServices.js.map