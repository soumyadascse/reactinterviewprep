export default function Home() {
  return (
    <div>

      <h1 className="text-3xl font-bold">
        React Learning Portal
      </h1>

      <div className="mt-5 grid grid-cols-3 gap-5">

        <div className="border p-5 rounded">
          Topics
          <br />
          20+
        </div>

        <div className="border p-5 rounded">
          Questions
          <br />
          1000+
        </div>

        <div className="border p-5 rounded">
          Playgrounds
          <br />
          100+
        </div>

      </div>
    </div>
  );
}