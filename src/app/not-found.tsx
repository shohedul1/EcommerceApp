// app/not-found.tsx
export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center p-4">
            <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <p className="text-lg text-gray-500 mt-2">Oops! The category page you're looking for doesn't exist.</p>
            <a
                href="/"
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
                Go Back Home
            </a>
        </div>
    );
}
