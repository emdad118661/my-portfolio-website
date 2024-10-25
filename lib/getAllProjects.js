import React from 'react'
import {promises as fs} from 'fs';
async function getAllProjects () {
  const file = await fs.readFile(process.cwd() + '/public/API/projects.json', 'utf8');
  const result = JSON.parse(file);
  return result;
}

export default getAllProjects