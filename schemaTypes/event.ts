import { defineType } from 'sanity';

export default defineType({
    name: 'event',
    title: 'Event Announcements',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Event Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'date',
            title: 'Event Date',
            type: 'datetime',
        },
        {
            name: 'image',
            title: 'Event Image',
            type: 'image',
            options: { hotspot: true },
        },
    ],
});
