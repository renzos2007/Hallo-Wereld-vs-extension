import { exec } from "child_process";
import * as vscode from 'vscode';

export function runCommand(command: string) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(stdout || stderr);
        });
    });
}

export function checkExtensions(extensionIds: string[]){
    const needToInstallActivate = [];
    for (let extensionId = 0; extensionId < extensionIds.length; extensionId++) {
            let extension = vscode.extensions.getExtension(extensionIds[extensionId]);
            if (!extension) {
                needToInstallActivate.push(extensionIds[extensionId]);
            } else{
                if (!extension.isActive){
                    needToInstallActivate.push(extensionIds[extensionId]);
                }
            }
        }
    return needToInstallActivate;
}

export async function installExtensions(extensionIds: string[]){
    const choiceString = `This command misses ${extensionIds.length} extensions. These make programming way easier. Do you want to install/enable them? (They are not required, but recommended)`;
    const choice = await vscode.window.showInformationMessage(
    choiceString,
    'Install/enable'
    );

    if (choice === 'Install/enable'){
        for (let extensionId = 0; extensionId < extensionIds.length; extensionId++) {
            let extension = vscode.extensions.getExtension(extensionIds[extensionId]);
            if (!extension) {
                await vscode.commands.executeCommand('workbench.extensions.installExtension',extensionIds[extensionId]);
            } else{
                if (!extension.isActive){
                    await vscode.extensions.getExtension(extensionIds[extensionId])?.activate();
                }
            }
        }
    }
}

export function checkWorkspace(){
    const workspaceFolder = vscode.workspace.workspaceFolders;
    if (!workspaceFolder) {
        vscode.window.showErrorMessage('No workspace open');
        return undefined;
    }
    return workspaceFolder;
}