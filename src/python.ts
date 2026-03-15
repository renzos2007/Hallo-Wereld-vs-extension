import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import {checkWorkspace} from './extension';

const extensions = ['ms-python.python', 'ms-python.debugpy', 'ms-python.vscode-python-envs', 'ms-python.vscode-pylance'];
const needToInstallActivate = [];

export async function createHelloWorldPython(){
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
        const choiceString = `This command misses ${needToInstallActivate.length} extensions. These make programming way easier. Do you want to install/enable them? (They are not required)`;
        const choice = await vscode.window.showInformationMessage(
        choiceString,
        'Install/enable'
        );

        if (choice === 'Install/enable'){
            vscode.window.showInformationMessage('Installed');
        }
    }

    const rootFolderPath = workspace[0].uri.fsPath;
    const pythonFilePath = path.join(rootFolderPath, 'hello_world.py');

    fs.writeFileSync(pythonFilePath, 'print("Hello world")');

    vscode.window.showInformationMessage('file created');
}