# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## PostHog analytics setup

PostHog is already integrated in the app code.

1. Create or update your local env file (`.env.local`) with:

```sh
VITE_POSTHOG_KEY=phc_xxxxxxxxxxxxxxxxxxxxx
VITE_POSTHOG_HOST=https://us.i.posthog.com
```

2. Restart the dev server:

```sh
npm run dev
```

3. Open your app and verify events in PostHog (you should see `$pageview` events).

Notes:
- Use `https://eu.i.posthog.com` if your PostHog project is in the EU region.
- If `VITE_POSTHOG_KEY` is missing, PostHog stays disabled.

## Attribution setup

The landing page stores supported attribution URL params in `localStorage` and sends an `app_store_click` event to a Supabase Edge Function when an App Store link is clicked.

Supported params:

```txt
source
utm_source
utm_medium
utm_campaign
utm_content
utm_term
```

Required Supabase setup:

```sh
supabase db push
supabase secrets set ATTRIBUTION_IP_SALT="<long-random-private-salt>"
supabase functions deploy track-attribution --no-verify-jwt
```

Required frontend env:

```sh
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Optional frontend env if the function is hosted somewhere else:

```sh
VITE_ATTRIBUTION_ENDPOINT=https://your-domain.example/track-attribution
```

Local verification:

1. Start the site with `npm run dev`.
2. Open `http://localhost:8080/?source=tiktok&utm_campaign=launch_video_1`.
3. Confirm `collecta_attribution` exists in browser localStorage.
4. Click any App Store button.
5. Confirm a row was inserted into `public.attribution_events` with `event_type = 'app_store_click'`, the expected source/UTM values, and a non-null `ip_hash` when `ATTRIBUTION_IP_SALT` is configured.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
