var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import path from 'path';
import fs from 'fs-extra';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const replaceInFile = (filePath, replacements) => __awaiter(void 0, void 0, void 0, function* () {
    let content = yield fs.readFile(filePath, 'utf8');
    for (const [placeholder, value] of Object.entries(replacements)) {
        const regex = new RegExp(placeholder, 'g');
        content = content.replace(regex, value);
    }
    yield fs.writeFile(filePath, content);
});
export function generateProject(projectName) {
    return __awaiter(this, void 0, void 0, function* () {
        const targetDir = path.join(process.cwd(), projectName);
        const templateDir = path.join(__dirname, '../templates/base');
        try {
            console.log(`📁 Creating project in ${targetDir}`);
            yield fs.copy(templateDir, targetDir);
            const replacements = {
                'project_name__': projectName
            };
            // Replace in package.json and README.md
            const filesToEdit = ['package.json', 'README.md'];
            for (const file of filesToEdit) {
                const filePath = path.join(targetDir, file);
                if (fs.existsSync(filePath)) {
                    yield replaceInFile(filePath, replacements);
                    console.log(`🔧 Replaced placeholders in ${file}`);
                }
            }
            console.log('✅ Project scaffolded successfully!');
        }
        catch (err) {
            console.error('❌ Error scaffolding project:', err);
        }
    });
}
