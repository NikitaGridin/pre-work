import { useRouter } from "next/navigation";
import { useDrag } from "react-dnd";
import { ITask, types } from "../model/types";

type Props = {
  task: ITask;
  sourceType: number;
  department_id?: number;
};

export function Task({ task, sourceType, department_id }: Props) {
  const router = useRouter();
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: types.TASK_TYPE,
      item: {
        task: { id: task.id, name: task.name },
        sourceType,
        department_id,
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [task]
  );

  return (
    <div
      onClick={() => router.push("yandex.ru")}
      ref={dragRef as any}
      className={`border rounded-lg px-4 py-2 cursor-grab bg-white ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      {task.name}
    </div>
  );
}
