import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import {checkWorkspace, runCommand, checkExtensions, installExtensions} from './publicfunctions';
import { exec } from 'child_process';

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
    return new Promise((resolve, reject) => {
        exec("python -m venv .venv", { cwd }, (error, stdout, stderr) => {
            exec("python -m venv .venv", { cwd }, async (error, stdout, stderr) => {
                if (error) {
                    vscode.window.showErrorMessage(`Failed to create venv: ${stderr}`);
                    reject(error);
                    return;
                }

                vscode.window.showInformationMessage("Virtual environment (.venv) created.");
                resolve(stdout);
            });
        });
    });
}

async function checkPython() {
    try {
            await runCommand(`python --version`);
            return true;
        } catch (err) {
            vscode.window.showErrorMessage(`${err}`);
    }

    vscode.window.showErrorMessage('Python is not installed or installed correctly');
    return false;
}