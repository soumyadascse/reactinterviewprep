import React from "react";
import type { WidgetData } from "../../types/WidgetData";

interface WidgetProps {
    widget: WidgetData;
}

const Widget: React.FC<WidgetProps> = React.memo(({ widget }: WidgetProps) => {
    console.log("Rendering Widget:", widget.id);

    return (
        <div className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-2">{widget.title}</h2>
            <p>{widget.body}</p>
        </div>
    );
});

export default Widget;