"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const EventServices_1 = __importDefault(require("../Services/EventServices"));
const Router = express.Router();
Router.get('/events/:id', (req, res) => {
    const eventId = parseInt(req.query.id?.toString() ?? '', 10);
    try {
        const event = EventServices_1.default.getDataByEventId(eventId);
        res.json(event);
    }
    catch (error) {
        res.status(404).json({ error: 'Event not found' });
    }
});
Router.get('/events/:type&:limit&:page', (req, res) => {
    const { type, limit, page } = req.query;
    try {
        const events = EventServices_1.default.getLatestEvents(type, parseInt(limit, 10), parseInt(page, 10));
        if (events.length === 0) {
            res.status(404).json({ error: 'No events found' });
        }
        else {
            res.json(events);
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
Router.post('/events', (req, res) => {
    const { name, image, tagline, schedule, description, moderator, category, sub_category, rigor_rank } = req.body;
    // Generate a unique ID for the new event
    const eventId = EventServices_1.default.generateUniqueId();
    const event = {
        type: 'event',
        uid: eventId,
        name,
        files: {
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
    };
    try {
        const addedEvent = EventServices_1.default.addEvent(event);
        res.status(201).json(addedEvent);
    }
    catch (error) {
        if (error.message.includes("Already Exists")) {
            res.status(409).json({ error: 'Event already exists' });
        }
        else {
            res.send(error);
        }
    }
});
Router.put('/events/:id', (req, res) => {
    const uid = parseInt(req.params.id, 10);
    const { name, image, tagline, schedule, description, moderator, category, sub_category, rigor_rank, attendees } = req.body;
    const event = {
        type: 'event', uid, name, files: { "image": image }, tagline, schedule, description, moderator, category, sub_category, rigor_rank, attendees
    };
    try {
        const UpdatedEvent = EventServices_1.default.updateEvent(event);
        res.json(UpdatedEvent);
    }
    catch (error) {
        res.status(404).json({ error: 'Event not found' });
    }
});
Router.delete('/events/delete/:id', (req, res) => {
    const eventId = parseInt(req.params.id, 10);
    try {
        const deleted = EventServices_1.default.deleteEvent(eventId);
        if (deleted) {
            res.status(200);
        }
        res.json(deleted);
    }
    catch (error) {
        res.status(404).json({ error: 'Event not found' });
    }
});
exports.default = Router;
//# sourceMappingURL=EventController.js.map