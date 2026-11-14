import { Sandpack } from "@codesandbox/sandpack-react";

export default function Playground() {
  return (
    <div className="w-full overflow-hidden">

      <h1
        className="
        text-2xl
        md:text-3xl
        font-bold
        mb-6"
      >
        Playground
      </h1>

      <div className="overflow-x-auto">
        <Sandpack
          template="react-ts"
          options={{
            showNavigator: false,
            showTabs: true,
            wrapContent: true
          }}
        />
      </div>

    </div>
  );
}