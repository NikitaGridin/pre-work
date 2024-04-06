export const types = {
  TASK_TYPE: "BOX",
};

export type ITask = {
  id: number;
  name: string;
};

export type IDepartment = {
  id: number;
  name: string;
  tasks: ITask[];
};
