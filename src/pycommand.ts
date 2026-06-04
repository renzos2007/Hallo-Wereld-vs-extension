import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import {checkWorkspace, runCommand, checkExtensions, installExtensions} from './publicfunctions';
import { exec } from 'child_process';

const extensions = ['ms-python.python', 'ms-python.debugpy', 'ms-python.vscode-python-envs', 'ms-python.vscode-pylance', 'esbenp.prettier-vscode', 'shaharkazaz.git-merger'];

export async function createHelloWorldPython(version: string){
    const pythonInstalled = await checkPython(version);
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
        await createVenv(version, rootFolderPath);
    }

    const pythonFilePath = path.join(rootFolderPath, 'main.py');
    const pythoncode = 'def main():\n   print("Hello world")\n\nif __name__=="__main__":\n  main()';

    fs.writeFileSync(pythonFilePath, pythoncode);

    vscode.window.showInformationMessage('project set up, you can start');
}

async function createVenv(version: string, cwd: string) {
    const candidates = [version];
    if (version !== 'python3') candidates.push('python3');
    if (version !== 'python') candidates.push('python');

    let lastError: any;
    for (const candidate of candidates) {
        try {
            await runCommand(`${candidate} -m venv .venv`, cwd);
            vscode.window.showInformationMessage(`Virtual environment (.venv) created with ${candidate}.`);
            return;
        } catch (error: any) {
            lastError = error;
            console.error(`Failed venv with ${candidate}:`, error);
        }
    }

    vscode.window.showErrorMessage(`Failed to create venv with ${candidates.join(', ')}: ${lastError?.message || lastError}`);
    throw lastError;
}

async function checkPython(version: string) {
    try {
            await runCommand(`${version} --version`);
            return true;
        } catch (err) {
            vscode.window.showErrorMessage(`${err}`);
    }

    vscode.window.showErrorMessage('Python is not installed or installed correctly');
    return false;
}