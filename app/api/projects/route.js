import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'API', 'projects.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const projects = JSON.parse(fileContents);

  return new Response(JSON.stringify(projects), {
    headers: { 'Content-Type': 'application/json' },
  });
}
