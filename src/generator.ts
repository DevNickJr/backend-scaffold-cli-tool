import path from 'path';
import fs from 'fs-extra';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const replaceInFile = async (filePath: string, replacements: Record<string, string>) => {
  let content = await fs.readFile(filePath, 'utf8');
  for (const [placeholder, value] of Object.entries(replacements)) {
    const regex = new RegExp(placeholder, 'g');
    content = content.replace(regex, value);
  }
  await fs.writeFile(filePath, content);
};

export async function generateProject(projectName: string) {
  const targetDir = path.join(process.cwd(), projectName);
  const templateDir = path.join(__dirname, '../templates/base');

  try {
    console.log(`📁 Creating project in ${targetDir}`);
    await fs.copy(templateDir, targetDir);

    const replacements = {
      'project_name__': projectName
    };

    // Replace in package.json and README.md
    const filesToEdit = ['package.json', 'README.md'];
    for (const file of filesToEdit) {
      const filePath = path.join(targetDir, file);
      if (fs.existsSync(filePath)) {
        await replaceInFile(filePath, replacements);
        console.log(`🔧 Replaced placeholders in ${file}`);
      }
    }

    console.log('✅ Project scaffolded successfully!');
  } catch (err) {
    console.error('❌ Error scaffolding project:', err);
  }
}
