// import Widget from "../components/PracticeQuestions/Widget";
import { lazy, Suspense, useEffect, useState } from "react";
// @ts-expect-error -- WidgetService is JavaScript without a declaration file.
import { getWidgets } from "../services/WidgetService";
import type { WidgetData } from "../types/WidgetData";
const Widget = lazy(() => import("../components/PracticeQuestions/Widget"));
// function onRender(
//   id: string,
//   phase: "mount" | "update" | "nested-update",
//   actualDuration: number,
//   baseDuration: number,
//   startTime: number,
//   commitTime: number
// ) {
//   console.log({
//     id,
//     phase,
//     actualDuration,
//     baseDuration,
//     startTime,
//     commitTime,
//   });
// }
export default function PracticeQuestions() {
    const [widgets, setWidgets] = useState<WidgetData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const data = await getWidgets(controller.signal);
                setWidgets(data);
            } catch (error) {
                if (controller.signal.aborted) {
                    return;
                }
                setError(error instanceof Error ? error.message : "Something went wrong");
            } finally {
                if (!controller.signal.aborted) {
                    // Set the fetched data
                    setLoading(false);
                }
            }
        };
        fetchData();
    }, []);
  return (
    <>
    {/* <Profiler id="WidgetList" onRender={onRender}> */}
      <h1 className="text-2xl font-bold mb-4">Practice Questions</h1>
      {loading && <p role="status">Loading questions...</p>}
      {error && <p role="alert">Unable to load questions: {error}</p>}
      {!loading && !error && (
        <Suspense fallback={<p role="status">Loading questions...</p>}>
          {widgets.map((widget) => (
            <Widget key={widget.id} widget={widget} />
          ))}
        </Suspense>
      )}
      {/* </Profiler> */}
    </>
  );
}
