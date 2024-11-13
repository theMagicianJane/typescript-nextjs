import { Student } from './types/index';
function filterByProperty<T, K extends keyof T>(array: T[], property: K, value: T[K]): T[] {
  return array.filter(item => item[property] > value)
}

const students: Student[] = [
  { id: 5, name: 'Alice', age: 25, score: 20 },
  { id: 2, name: 'Bob', age: 30, score: 80 },
  { id: 3, name: 'Charlie', age: 35, score: 100 },
];

const activeUsers = filterByProperty(students, 'score', 60);