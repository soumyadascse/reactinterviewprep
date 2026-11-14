import { useParams } from "react-router-dom";
import { questions } from "../data/questions";
import QuestionCard from "../components/common/QuestionCard";

export default function TopicPage() {

  const { topic } = useParams();

  const filtered = questions.filter(
    (q) => q.topic === topic
  );

  return (
    <div>

      <h2 className="text-3xl font-bold mb-5">
        {topic}
      </h2>

      {filtered.map((q) => (
        <QuestionCard
          key={q.id}
          data={q}
        />
      ))}

    </div>
  );
}