import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import {checkWorkspace} from './extension';

export function createHelloWorldPython(){
    const workspace = checkWorkspace();
        if (!workspace){
            return;
        }
        const rootFolderPath = workspace[0].uri.fsPath;
        const pythonFilePath = path.join(rootFolderPath, 'hello_world.py');

        fs.writeFileSync(pythonFilePath, 'print("Hello world")');

        vscode.window.showInformationMessage('file created');
}