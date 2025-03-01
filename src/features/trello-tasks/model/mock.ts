import { IDepartment, ITask } from "./types";

export const tasksData: ITask[] = [
  { id: 0, name: "Подготовить презентацию" },
  { id: 1, name: "Написать отчет" },
  { id: 2, name: "Провести совещание" },
  { id: 3, name: "Составить план мероприятия" },
  { id: 4, name: "Организовать тренинг" },
  { id: 5, name: "Провести интервью с кандидатом" },
  { id: 6, name: "Подготовить отчет о продажах" },
  { id: 7, name: "Разработать новую функциональность" },
  { id: 8, name: "Провести анализ рынка" },
  { id: 9, name: "Организовать мероприятие для клиентов" },
  { id: 10, name: "Провести тестирование программы" },
  { id: 11, name: "Подготовить рекламную кампанию" },
  { id: 12, name: "Провести обучение персонала" },
  { id: 13, name: "Разработать дизайн сайта" },
  { id: 14, name: "Провести аудит бухгалтерии" },
  { id: 15, name: "Подготовить протокол собрания" },
  { id: 16, name: "Разработать стратегию маркетинга" },
  { id: 17, name: "Организовать поставку оборудования" },
  { id: 18, name: "Провести аудит безопасности" },
  { id: 19, name: "Подготовить план обучения сотрудников" },
];

export const departmentsData: IDepartment[] = [
  { id: 1, name: "Отдел продаж", tasks: [] },
  { id: 2, name: "Отдел маркетинга", tasks: [] },
  { id: 3, name: "Отдел разработки", tasks: [] },
  { id: 4, name: "Отдел кадров", tasks: [] },
  { id: 5, name: "Отдел бухгалтерии", tasks: [] },
  { id: 6, name: "Отдел обслуживания клиентов", tasks: [] },
  { id: 7, name: "Отдел качества", tasks: [] },
  { id: 8, name: "Отдел аналитики", tasks: [] },
  { id: 9, name: "Отдел закупок", tasks: [] },
  { id: 10, name: "Отдел юридического обеспечения", tasks: [] },
];
