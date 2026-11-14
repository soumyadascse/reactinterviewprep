export default function Dashboard() {
  const cards = [
    {
      title: "Topics",
      value: "50+"
    },
    {
      title: "Questions",
      value: "1000+"
    },
    {
      title: "Examples",
      value: "500+"
    },
    {
      title: "Playgrounds",
      value: "100+"
    }
  ];

  return (
    <div>

      <h1
        className="
        text-2xl
        md:text-4xl
        font-bold
        mb-6"
      >
        React Interview Preparation
      </h1>

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-5"
      >
        {cards.map(card => (
          <div
            key={card.title}
            className="
            bg-white
            p-6
            rounded-xl
            shadow"
          >
            <p className="text-gray-500">
              {card.title}
            </p>

            <h2
              className="
              text-2xl
              md:text-3xl
              font-bold
              mt-2"
            >
              {card.value}
            </h2>
          </div>
        ))}
      </div>

    </div>
  );
}