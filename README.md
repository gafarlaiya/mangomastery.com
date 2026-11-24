# mangofarming.in (formerly mangomastery.com)

Static site. Source: `build.py`, `content.py`, `src/`. Built output: `dist/` (build with `python3 build.py`).
Backend: Supabase edge functions in `supabase/` (secrets are read from environment variables, none are stored here).
Deploy: serve the `dist/` folder.
