import { handlePerformance } from '@/bff/controllers/handlers/performance/handlePerformance';

export async function GET() {
  return await handlePerformance();
}
