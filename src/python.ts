import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import {checkWorkspace} from './extension';

const extensions = ['ms-python.python', 'ms-python.debugpy', 'ms-python.vscode-python-envs', 'ms-python.vscode-pylance'];
const needToInstall = [];

export function createHelloWorldPython(){
    const workspace = checkWorkspace();
    if (!workspace){
        return;
    }

    for (let extensionId = 0; extensionId < extensions.length; extensionId++) {
        let extension = vscode.extensions.getExtension(extensions[extensionId]);
        if (!extension) {
            needToInstall.push(extensionId);
        }
    }

    if (needToInstall.length > 0) {
        vscode.window.showInformationMessage('need extensions');
    }

    const rootFolderPath = workspace[0].uri.fsPath;
    const pythonFilePath = path.join(rootFolderPath, 'hello_world.py');

    fs.writeFileSync(pythonFilePath, 'print("Hello world")');

    vscode.window.showInformationMessage('file created');
}