import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import FeedbackDashboardCaseStudy from "./components/FeedbackDashboard";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects/feedback-dashboard"
          element={<FeedbackDashboardCaseStudy />}
        />
      </Route>
    </Routes>
  );
}
