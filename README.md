# React Boilerplate

A lightweight and modular React boilerplate to kickstart your web projects with modern tooling and best practices.

## Features

- **React 19**: Latest React version with hooks and concurrent rendering.
- **TypeScript**: Type-safe development for better code quality.
- **Vite**: Fast and modern build tool for development and production.
- **ESLint & Prettier**: Code linting and formatting for consistent style.
- **Jest & React Testing Library**: Unit testing setup for reliable code.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Husky & Lint-Staged**: Pre-commit hooks to ensure code quality.
- **GitHub Actions**: CI/CD pipeline for automated testing and deployment.
- **Vercel**: Default Vercel-json is provided.

## Prerequisites

- Node.js (>= 18.x)
- npm (>= 9.x) or Yarn/Pnpm

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/0xF3546/react-boilerplate.git
   cd react-boilerplate
2. **Install dependencies:**
    ```bash
    npm install
3. **Start the development server:**
    ```bash
    npm run dev
4. **Open http://localhost:5173 in your browser.**

## Available Scripts
- ```npm run dev```: Start the development server.
- ```npm run build```: Build the app for production.
- ```npm run preview```: Preview the production build locally.
- ```npm run test```: Run unit tests with Jest.
- ```npm run lint```: Run ESLint to check code quality.
- ```npm run format```: Format code with Prettier.
## Project Structure
    ├── public/                # Static assets
    ├── src/
    │   ├── assets/            # Images, fonts, etc.
    │   ├── components/        # Reusable React components
    │   ├── pages/             # Page components
    │   ├── styles/            # Global styles and Tailwind config
    │   ├── App.tsx            # Main app component
    │   ├── main.tsx           # Entry point
    ├── tests/                 # Test files
    ├── .github/               # GitHub Actions workflows
    ├── .husky/                # Pre-commit hooks
    ├── vite.config.ts         # Vite configuration
    ├── tsconfig.json          # TypeScript configuration
    ├── package.json           # Project dependencies and scripts
    └── README.md              # This file

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature).
3. Commit your changes (git commit -m 'Add your feature').
4. Push to the branch (git push origin feature/your-feature).
5. Open a Pull Request.

## License
This project is licensed under the MIT License (LICENSE).