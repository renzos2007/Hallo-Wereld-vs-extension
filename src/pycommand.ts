import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import {checkWorkspace, runCommand, checkExtensions, installExtensions} from './publicfunctions';

const extensions = ['ms-python.python', 'ms-python.debugpy', 'ms-python.vscode-python-envs', 'ms-python.vscode-pylance', 'esbenp.prettier-vscode', 'shaharkazaz.git-merger'];

export async function createHelloWorldPython(){
    const pythonInstalled = await checkPython();
    if (!pythonInstalled){
        return;
    }

    const workspace = await checkWorkspace();
    if (!workspace){
        return;
    }

    const needToInstall = await checkExtensions(extensions);

    if (needToInstall.length > 0) {
        installExtensions(needToInstall);
    }

    const rootFolderPath = workspace[0].uri.fsPath;
    const venvPath = path.join(rootFolderPath, '.venv');
    if (!fs.existsSync(venvPath)) {
        await createVenv(rootFolderPath);
    }

    const pythonFilePath = path.join(rootFolderPath, 'main.py');
    const pythoncode = 'def main():\n   print("Hello world")\n\nif __name__=="__main__":\n  main()';

    fs.writeFileSync(pythonFilePath, pythoncode);

    vscode.window.showInformationMessage('project set up, you can start');
}

async function createVenv(cwd: string) {
    const commandVersions = ["python", "python3", "py"];

    for (const version of commandVersions) {
        try {
            await runCommand(`${version} -m venv .venv`);
            return true;
        } catch (err) {
        }
    }
    vscode.window.showErrorMessage('Python is not installed or installed correctly');
    return false;
}

async function checkPython() {
    const commandVersions = ["python", "python3", "py"];

    for (const cmd of commandVersions) {
        try {
            await runCommand(`${cmd} --version`);
            return true;
        } catch (err) {
        }
    }
    vscode.window.showErrorMessage('Python is not installed or installed correctly');
    return false;
}