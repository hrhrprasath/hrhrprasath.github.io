# Hari Hara Prasad V - Personal Site

A minimal personal website built with Eleventy and EJS.

## Development Setup

```bash
npm start
```

## Creating New Content

To generate a new **blog post** (automatically placed at the top of your list):
```bash
npm run blog -- "My New Blog Title"
```

To generate a new **project** page:
```bash
npm run project -- "My Awesome Project"
```

*Note: The `--` is required so npm passes the title to the script instead of trying to parse it as an npm flag.*

## Build for Production
```bash
npm run build
```
