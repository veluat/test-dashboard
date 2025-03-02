// api.ts
import { Site, Test } from '../types';

// Запрос всех сайтов
export const fetchSites = async (): Promise<Site[]> => {
  const response = await fetch('http://localhost:3100/sites');
  if (!response.ok) throw new Error('Failed to fetch sites');
  return response.json();
};

// Запрос всех тестов
export const fetchTests = async (): Promise<Test[]> => {
  const response = await fetch('http://localhost:3100/tests');
  if (!response.ok) throw new Error('Failed to fetch tests');
  return response.json();
};

// Запрос одного теста по ID
export const fetchTestById = async (testId: string): Promise<Test> => {
  const response = await fetch(`http://localhost:3100/tests/${testId}`);
  if (!response.ok) throw new Error('Failed to fetch test');
  return response.json();
};