import path from 'path';
import fs from 'fs';
import project from '../package.json';

const PROJECT_DIRECTORY = path.resolve(__dirname, '..');
const BUILD_DIRECTORY = path.resolve(PROJECT_DIRECTORY, 'dist');

const packageJSON: any = { ...project };
delete packageJSON.devDependencies;

fs.writeFileSync(path.resolve(BUILD_DIRECTORY, 'package.json'), JSON.stringify(packageJSON, null, 2), {
  encoding: 'utf8'
});

fs.copyFileSync(path.resolve(PROJECT_DIRECTORY, 'LICENSE'), path.resolve(BUILD_DIRECTORY, 'LICENSE'));

fs.copyFileSync(path.resolve(PROJECT_DIRECTORY, 'README.md'), path.resolve(BUILD_DIRECTORY, 'README.md'));
