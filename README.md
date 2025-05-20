# FreeMotionGear

This repository provides placeholder scripts and documentation for integrating analytics and tracking tags.

## Tracking Scripts

The `analytics/` directory contains sample scripts for:

- **Google Analytics 4 (GA4)** – see `analytics/ga4.js`.
- **Meta Pixel** – see `analytics/meta-pixel.js`.
- **Instagram tracking** – `analytics/instagram.js` uses the same Meta Pixel code.
- **TikTok Pixel** – see `analytics/tiktok.js`.
- **YouTube tracking** – see `analytics/youtube.js` for a basic YouTube IFrame API example.

Update each file with your actual tracking IDs. Reach out for any API keys or credentials when you're ready to use the real services.

## Managing Tags

You can manage these tags in two common ways:

1. **Google Tag Manager (GTM)**: Add the tags in GTM and configure triggers for each page or event. This keeps your site code clean and allows updates without code changes.
2. **Direct Script Components**: Include the scripts directly in your pages or components. Import the files from the `analytics/` directory and load them as needed.

Choose whichever method fits your workflow. If you use GTM, remember to include the GTM container snippet on your pages.
