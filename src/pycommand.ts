import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import {checkWorkspace} from './extension';
import { exec } from "child_process";

const extensions = ['ms-python.python', 'ms-python.debugpy', 'ms-python.vscode-python-envs', 'ms-python.vscode-pylance', 'esbenp.prettier-vscode', 'shaharkazaz.git-merger'];
const needToInstallActivate = [];

export async function createHelloWorldPython(){
    checkPython();
    const workspace = checkWorkspace();
    if (!workspace){
        return;
    }

    for (let extensionId = 0; extensionId < extensions.length; extensionId++) {
        let extension = vscode.extensions.getExtension(extensions[extensionId]);
        if (!extension) {
            needToInstallActivate.push(extensionId);
        } else{
            if (!extension.isActive){
                needToInstallActivate.push(extensionId);
            }
        }
    }

    if (needToInstallActivate.length > 0) {
        const choiceString = `This command misses ${needToInstallActivate.length} extensions. These make programming way easier. Do you want to install/enable them? (They are not required, but recommended)`;
        const choice = await vscode.window.showInformationMessage(
        choiceString,
        'Install/enable'
        );

        if (choice === 'Install/enable'){
            for (let extensionId = 0; extensionId < extensions.length; extensionId++) {
                let extension = vscode.extensions.getExtension(extensions[extensionId]);
                if (!extension) {
                    await vscode.commands.executeCommand('workbench.extensions.installExtension',extensions[extensionId]);
                } else{
                    if (!extension.isActive){
                        await vscode.extensions.getExtension(extensions[extensionId])?.activate();
                    }
                }
            }
        }
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
        exec("python -m venv .venv", { cwd }, async (error, stdout, stderr) => {
            if (error) {
                vscode.window.showErrorMessage(`Failed to create venv: ${stderr}`);
                reject(error);
                return;
            }
            resolve(stdout);
        });
    });
}

async function checkPython(){
    return new Promise((resolve, reject) => {
        exec("python --version", async (error, stdout, stderr) => {
            if (error) {
                vscode.window.showErrorMessage(`Python is not installed correctly: ${stderr}`);
                reject(error);
                return;
            }
            resolve(stdout);
        });
    });
}