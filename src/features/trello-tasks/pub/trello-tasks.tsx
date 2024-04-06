"use client";
import { useState } from "react";
import { departmentsData, tasksData } from "../model/mock";
import { ITask } from "../model/types";
import { Department } from "../ui/department";
import { Task } from "../ui/task";

export function TrelloTasks() {
  const [tasks, setTasks] = useState(tasksData);
  const [departments, setDepartments] = useState(departmentsData);

  const moveFromTasksList = (task: ITask, department_id: number) => {
    const newTasks = tasks.filter((t) => t.id != task.id);
    setTasks(newTasks);
    const department = departments.find(
      (department) => department.id === department_id
    );
    department?.tasks.push(task);
  };

  const moveBetweenDepartments = (
    task: ITask,
    sourceDepartmentId: number,
    destinationDepartmentId: number
  ) => {
    const sourceDepartment = departments.find(
      (department) => department.id === sourceDepartmentId
    );
    if (sourceDepartment) {
      sourceDepartment.tasks = sourceDepartment.tasks.filter(
        (t) => t.id !== task.id
      );
    }

    const destinationDepartment = departments.find(
      (department) => department.id === destinationDepartmentId
    );
    if (destinationDepartment) {
      destinationDepartment.tasks.push(task);
    }

    setDepartments([...departments]);
  };

  return (
    <div className="min-h-screen grid grid-cols-12 p-6 gap-4">
      <div className="col-span-2 space-y-2">
        <h1>Список задач</h1>
        {tasks.map((task, i) => {
          return <Task task={task} key={i} sourceType={0} />;
        })}
      </div>
      <div className="col-span-10">
        <h1>Список отделов</h1>
        <div className="grid grid-cols-4 items-start gap-4">
          {departments.map((department, i) => {
            return (
              <Department
                department={department}
                key={i}
                moveFromTasksList={moveFromTasksList}
                moveBetweenDepartments={moveBetweenDepartments}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
