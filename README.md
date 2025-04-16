# scaffold-backend

A CLI tool to generate a modular Express.js backend with TypeScript and Prisma ORM, featuring best practices and scalable architecture.

## Features

- 🚀 Express.js with TypeScript configuration
- 📦 Prisma ORM setup with PostgreSQL
- 🔒 Authentication ready with JWT
- 🎯 Modular architecture
- ⚡ Path aliases for clean imports
- 🛠️ Error handling middleware
- 📝 Basic API documentation
- 🔄 Hot reload for development

## Installation

```bash
npm install -g scaffold-backend
```

## Usage
Create a new project:

```bash
scaffold-backend my-project-name
```

After creation:
```bash
cd my-project-name
npm install
```

update .env file with your database credentials:
```env
    DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
 ```

Set up Prisma:
1. Modify prisma/schema.prisma according to your db needs
2. Initialize and generate Prisma client:
```bash
npx prisma migrate dev --name init
npx prisma generate
 ```

Start development:
```bash
npm run dev
```

my-project-name/
├── src/
│   ├── config/         # Configuration files
│   ├── modules/        # Feature modules (auth, users, etc.)
│   ├── middlewares/    # Custom middlewares
│   ├── utils/          # Utility functions
│   ├── app.ts          # Express app setup
│   └── index.ts        # Application entry point
├── prisma/
│   └── schema.prisma   # Prisma schema
└── package.json

## Available Scripts
- npm run dev - Start development server with hot reload
- npm run build - Build for production
- npm start - Start production server

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
ISC
