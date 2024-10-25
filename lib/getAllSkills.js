import React from 'react'
import { promises as fs } from 'fs';
async function getAllSkills () {
  const file = await fs.readFile(process.cwd() + '/public/API/skills.json', 'utf8');
  const data = JSON.parse(file);
  return data;
}

export default getAllSkills