## Installation

```bash
# Clone Git repository
git clone https://github.com/shlaing/test-project-shwe.git

# Docker Compose
Open docker desktop
# mac
docker compose up -d 
or
# windows
docker-compose up -d

# Open the app
Open http://localhost:3000 for Client
Open http://localhost:5173 for Server
```

## Without Docker

```bash
# Clone Git repository
git clone https://github.com/shlaing/test-project-shwe.git

# Docker Compose
Open terminal and go to project root directory
# client-app
cd client-app
npm install
npm run dev

# server-api
cd server-api
npm install
npm run dev

# Open the app
Open http://localhost:3000 for Client
Open http://localhost:5173 for Server
```