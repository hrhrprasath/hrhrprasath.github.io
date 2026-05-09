const fs = require('fs');
const path = require('path');

const type = process.argv[2] || 'post'; // 'post' or 'project'
const titleArgs = process.argv.slice(3);
const title = titleArgs.length > 0 ? titleArgs.join(' ') : `New ${type.charAt(0).toUpperCase() + type.slice(1)}`;

// Generate Current Date YYYY-MM-DD
const date = new Date().toISOString().split('T')[0];

// Route to correct folder
const folder = type === 'project' ? 'projects' : 'writing';
const tag = type === 'project' ? 'project' : 'post';

// Create safe filename
const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const filename = `${date}-${slug || type}.md`;

const filepath = path.join(__dirname, '..', 'src', folder, filename);

const template = `---
layout: post.ejs
title: "${title}"
date: ${date}
tags: ${tag}
---
# ${title}

Write your ${type} content here...
`;

fs.writeFileSync(filepath, template);
console.log(`\n✅ Created new ${type}: src/${folder}/${filename}\n`);
