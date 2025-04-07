import { RouterProvider } from "react-router-dom";
import { router } from "../router";

export default function MobileLayout() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-sm w-full bg-white min-h-screen shadow-md">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}
