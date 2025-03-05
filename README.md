# Todo List Application

A modern todo list application built with Next.js, TypeScript, Tailwind CSS, and Firebase.

## Features

- User authentication with Firebase
- Real-time todo list updates
- Responsive design with Tailwind CSS
- Component documentation with Storybook
- Testing with Vitest

## Prerequisites

- Node.js 18.18.0 or higher
- npm or yarn
- Firebase account

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd todo-list-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a Firebase project and obtain your configuration:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Authentication and Firestore
   - Get your Firebase configuration

4. Create a `.env.local` file in the root directory and add your Firebase configuration:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development Tools

- **Storybook**: Run `npm run storybook` to start Storybook for component development
- **Testing**: Run `npm run test` to run tests with Vitest
- **Linting**: Run `npm run lint` to check for code style issues

## Project Structure

```
src/
├── app/           # Next.js app router pages
├── components/    # React components
├── lib/          # Utility functions and configurations
├── styles/       # Global styles and Tailwind configuration
└── types/        # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
