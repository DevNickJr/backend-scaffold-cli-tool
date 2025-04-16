#!/usr/bin/env node

import { Command } from 'commander';
import { generateProject } from '../src/generator.js';

const program = new Command();

program
  .name('scaffold-backend')
  .description('Scaffold an Express backend with TypeScript')
  .argument('<project-name>', 'name of the project')
  .action((projectName) => {
    generateProject(projectName);
  });

program.parse();
