import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      {/* 헤더 */}
      <Outlet />
    </div>
  );
}
