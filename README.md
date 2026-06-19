# Hallo Wereld

A VS Code extension for setting up Python projects. This extension provides commands to display hello world messages and automatically set up a Python development environment with required extensions and virtual environment.

## Features

- **Hello World**: Displays a simple "Hello World from vs-code" message
- **Hello World Python**: Sets up a complete Python project with:
  - Detects the operating system and finds the appropriate Python command
  - Installs essential VS Code extensions for Python development:
    - Python
    - Debugpy
    - Python Environment Manager
    - Pylance
    - Prettier
    - Git Merger
  - Creates a Python virtual environment (`.venv`)
  - Generates a `main.py` file with a basic hello world function

## Requirements

- **Visual Studio Code** version 1.116.0 or higher
- **Node.js** version 18.x or higher (for development/packaging)
- **Python** 3.7 or higher (for the Python setup command)
  - Windows: `python` command
  - macOS/Linux: `python3` command

Optional for packaging:
```bash
npm install -g @vscode/vsce
```

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

## Commands

This extension provides the following commands (accessible via Command Palette with `Ctrl+Shift+P` on Windows/Linux or `Cmd+Shift+P` on macOS):

1. **Hello World Python** (`hallo-world.HelloWorldPython`)
   - Sets up a complete Python development environment
   - Checks for Python installation and detects the OS
   - Installs recommended VS Code extensions for Python development
   - Creates a virtual environment (`.venv`)
   - Generates a `main.py` file with a hello world function

## Usage

### Setting up a Python Project

1. Open the Command Palette (`Ctrl+Shift+P` on Windows/Linux, `Cmd+Shift+P` on macOS)
2. Search for **Hello World Python**
3. Press Enter
4. The extension will:
   - Check if Python is installed on your system
   - Check that a workspace is open
   - Install essential Python development extensions (if not already installed)
   - Create a virtual environment in the project root (`.venv`)
   - Create a `main.py` file with a basic hello world function
   - Display a confirmation message

The generated `main.py` will contain:
```python
def main():
   print("Hello world")

if __name__=="__main__":
  main()
```

## Extension Settings

This extension does not currently contribute any configurable VS Code settings.

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

### 0.0.2

- Added Python project setup command
- Integrated automatic extension installation for Python development
- Added virtual environment creation
- Added OS detection for Python compatibility

### 0.0.1

Initial release of the Hello World extension.

---

**Enjoy!**