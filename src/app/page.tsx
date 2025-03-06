import Link from 'next/link';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

export default function Home() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8 p-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Welcome to Todo List</h1>
            <p className="mt-2 text-gray-600">Your tasks are waiting for you</p>
          </div>
          <div className="mt-8 space-y-4">
            <Link
              href="/todos"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              View My Todos
            </Link>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
