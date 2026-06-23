import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <RouterProvider router={router} />
    </div>
  );
}