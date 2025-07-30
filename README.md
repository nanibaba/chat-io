# ChatIO Application

## Development

### Requirements

* Node.js v18.18 or later, but preferably v22.x or later - https://nodejs.org/en/download/
* macOS, Windows (including WSL), or Linux.

### Windows setup

#### Install dependencies

First, install necessary dependencies by running:

```bash
npm install
```

Then, install the necessary dependencies for the websocket server:

```bash
cd websocket
npm install
```

#### Start the websocket server

Once inside /websocket, run:

```bash
npm run dev
```

This will start a server running at http://localhost:3005.

#### Start the NextJS instance

Open a separate powershell instance. Inside the project root, run:

```bash
npm run dev
```

This will start a Next.js instance running at http://localhost:3000.
Initially, the application needs time to compile, so it might take more time
(typically 10-15 seconds) to load the page content on the screen.

You have now run ChatIO in development mode. Have fun chatting! 
