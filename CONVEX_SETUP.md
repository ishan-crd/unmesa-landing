# Convex Setup Instructions

## Prerequisites
1. Install Convex CLI globally (if not already installed):
```bash
npm install -g convex
```

2. Install project dependencies:
```bash
npm install
```

## Setup Steps

1. **Initialize Convex** (if not already done):
```bash
npx convex dev
```

2. **Configure Environment Variable**:
   - The `.env.local` file should contain:
   ```
   NEXT_PUBLIC_CONVEX_URL=https://careful-partridge-459.convex.cloud
   ```

3. **Deploy Schema and Functions**:
   - Run `npx convex dev` to deploy your schema and functions to Convex
   - This will create the `waitlist` table in your Convex database

## How It Works

- The waitlist form in the CTA section submits emails to Convex
- Emails are stored in the `waitlist` table with:
  - `email`: The user's email address
  - `createdAt`: Timestamp when they joined
- Duplicate emails are prevented (error message shown if email already exists)

## Viewing Waitlist Data

You can view the waitlist entries in your Convex dashboard:
https://careful-partridge-459.convex.cloud

