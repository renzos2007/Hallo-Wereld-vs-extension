# Hallo Wereld

A simple "Hello World" extension for Visual Studio Code. This extension adds a command that shows a welcome message.

## Features

- Adds the `Hello World: Say Hello` command to the Command Palette
- Shows an information message (`Hello World!`) when the command is run

## Requirements

- **Visual Studio Code** version 1.85.0 or higher
- **Node.js** version 18.x or higher
- **npm** version 9.x or higher
- (Optional, for packaging) `@vscode/vsce`:
  ```bash
  npm install -g @vscode/vsce
  ```

No other external dependencies are needed to use the extension.

## Installation (development)

1. Clone this repository:
   ```bash
   git clone <repo-url>
   cd hallo-wereld
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Open the folder in VS Code:
   ```bash
   code .
   ```
4. Press `F5` to launch the extension in a new Extension Development Host window.

## Usage

1. Open the Command Palette (`Ctrl+Shift+P` on Windows/Linux, `Cmd+Shift+P` on macOS)
2. Search for **Hello World: Say Hello**
3. Press Enter — a welcome message will appear

## Extension Settings

This extension does not currently contribute any VS Code settings.

## Known Issues

No known issues.

## Packaging as .vsix

```bash
npx vsce package
```

This generates a `.vsix` file that can be installed locally with:

```bash
code --install-extension hello-world-0.0.1.vsix
```

## Release Notes

### 0.0.1

Initial release of the Hello World extension.

---

**Enjoy!**