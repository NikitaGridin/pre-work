// панель высталвения задач Трофимов

"use client";
import { TrelloTasks } from "@/features/trello-tasks/pub/trello-tasks";
import { HTML5toTouch } from "rdndmb-html5-to-touch"; // or any other pipeline
import { DndProvider, Preview } from "react-dnd-multi-backend";

const generatePreview = ({ itemType, item, style }: any) => {
  return (
    <div className="border px-4 py-2 rounded-lg w-auto" style={style}>
      {item.task.name}
    </div>
  );
};

export default function Home() {
  return (
    <main>
      <DndProvider options={HTML5toTouch}>
        <Preview>{generatePreview}</Preview>
        <TrelloTasks />
      </DndProvider>
    </main>
  );
}
