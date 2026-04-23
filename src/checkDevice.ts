import * as vscode from 'vscode';

export function getOS(): string {
    switch (process.platform) {
        case 'win32':  return 'Windows';
        case 'darwin': return 'Mac';
        case 'linux':  return 'Linux';
        default:       return `Onbekend (${process.platform})`;
    }
}