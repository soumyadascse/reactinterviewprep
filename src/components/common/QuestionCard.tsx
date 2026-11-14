import type { Question } from "../../types/Question";

type Props = {
  data: Question;
};

export default function QuestionCard({ data }: Props) {
  return (
    <div className="border rounded p-4 mb-4 shadow">

      <h3 className="font-bold text-lg">
        {data.question}
      </h3>

      <p className="mt-2">
        {data.answer}
      </p>

      <pre className="bg-gray-100 p-3 mt-3 rounded">
        {data.example}
      </pre>

    </div>
  );
}