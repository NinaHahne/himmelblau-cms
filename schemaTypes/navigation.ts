import { defineType, defineArrayMember } from 'sanity';

export default defineType({
    name: 'navigation',
    title: '🌿 Navigation', // title shown in Sanity Studio
    type: 'document',
    fields: [
        {
            name: 'navTitle',
            title: 'Navigation Title (Info Only)',
            type: 'string',
            // readOnly: true, // 🔹 Keeps it visible but uneditable
            hidden: true, // 🔹 This makes it invisible in the UI but still improves readability
            description: 'This title is only for organizational purposes in Sanity Studio and does not appear on the website.',
        },
        {
            name: 'navLinks',
            title: '📌 Main Navigation Links',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        { name: 'title', title: '🔤 Link Text', type: 'string' },
                        { name: 'url', title: '🔗 URL Path', type: 'string' },
                        { name: 'color', title: '🎨 Text Color', type: 'string' },
                        { name: 'hoverColor', title: '✨ Hover Color', type: 'string' },
                    ],
                }),
            ],
        },
        {
            name: 'footerLinks',
            title: '📜 Footer Links',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        { name: 'title', title: '🔤 Link Text', type: 'string' },
                        { name: 'url', title: '🔗 URL Path', type: 'string' },
                    ],
                }),
            ],
        },
    ],
    preview: {
        select: {
            title: 'navTitle', // 🔹 Uses `navTitle` for display in Sanity UI
        },
        prepare(selection) {
            return { title: selection.title || 'himmelblaues Menü' };
        },
    },
});
