# Jaxtech — GitHub Pages mirror

A static mirror of [tiny.jaxtech.workers.dev](https://tiny.jaxtech.workers.dev), published here as a fallback for visitors whose network blocks Cloudflare's shared `*.workers.dev` domain — a known issue with some mobile carriers' default DNS/content filtering.

Chat and the enquiry form still work here: `script.js` detects it isn't being served from a `*.workers.dev` host and points API calls directly at `tiny.jaxtech.workers.dev` (already CORS-open).

This repo is a periodic snapshot of the `V1.0JAX/public` folder in the main (private) site repo — it isn't the source of truth and isn't developed independently.
