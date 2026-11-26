import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import PracticeQuestionsHooks from "../pages/practiceQuestionsHooks";
import PlaygroundJava from "../pages/PlaygroundJava";

const TopicPage = lazy(() => import("../pages/TopicPage"));
const Playground = lazy(() => import("../pages/Playground"));
const ReactInterviewQA = lazy(() => import("../pages/ReactInterviewQA"));
const PracticeQuestions = lazy(() => import("../pages/PracticeQuestions"));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="/topic/:topic" element={<TopicPage />} />

        <Route path="/playground" element={<Playground />} />

        <Route path="/playground-java" element={<PlaygroundJava />} />

        <Route path="interview-qa" element={<ReactInterviewQA />} />

        <Route path="*" element={<div>Page Not Found</div>} />

        <Route path="practice-questions" element={<PracticeQuestions />} />

        <Route path="practice-questions-Hooks" element={<PracticeQuestionsHooks />} />
      </Route>
    </Routes>
  );
}
