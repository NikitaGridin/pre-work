import { useDrop } from "react-dnd";
import { IDepartment, ITask, types } from "../model/types";
import { Task } from "./task";

type Props = {
  department: IDepartment;
  moveFromTasksList: (task: ITask, sourceDepartmentId: number) => void;
  moveBetweenDepartments: (
    task: ITask,
    department_id: number,
    destinationDepartmentId: number
  ) => void;
};

export function Department({
  department,
  moveFromTasksList,
  moveBetweenDepartments,
}: Props) {
  const [, drop] = useDrop(
    () => ({
      accept: types.TASK_TYPE,
      drop: (item: any) => {
        if (item.sourceType === 0) {
          moveFromTasksList(item.task, department.id);
        }
        if (item.sourceType === 1) {
          moveBetweenDepartments(item.task, item.department_id, department.id);
        }
      },
    }),
    [department.id, moveFromTasksList]
  );

  return (
    <div className="border rounded-lg px-4 py-2 bg-gray-200" ref={drop as any}>
      <div>{department.name}</div>
      <div className="space-y-2">
        {department.tasks.map((task, i) => {
          return (
            <Task
              task={task}
              key={i}
              sourceType={1}
              department_id={department.id}
            />
          );
        })}
      </div>
    </div>
  );
}
