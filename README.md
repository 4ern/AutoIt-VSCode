# AutoIt for Visual Studio Code
This has been forked and developed from __[loganch](https://github.com/loganch/AutoIt-VSCode)__ release.

![logo](img/logo.png)

[Features](#features) | [Configuration](#configuration) | [Keyboard Shortcuts](#keyboard-shortcuts)

## Screenshots

![Syntax](img/docs/syntax.png)
---
![SymbolSearch](img/docs/symbols.png)

## Features

* AutoIt Syntax highlighting
* IntelliSense (code hints and completion) 
* Launch, compile and build scripts from VSCode
* Launch AutoIt Help for highlighted text 
* Symbol search, press `Ctrl+Shift+R` to see where Functions and Variables have been declared in the current file

## Configuration
By default, this extension is set up for the default installation of AutoIt and SciTe4AutoIt on a 64-bit system. For alternate setups, you can access the user settings by navigating to `File-> Preferences-> Settings` or invoking the command palette (`Ctrl+Shift+P`) and searching for Preferences, and changing the following options:

|Config |Description|Default |
|---|---|---|
|`autoit.aiPath`|Path to AutoIt Executable|"C:\\Program Files (x86)\\AutoIt3\\AutoIt3.exe"|
|`autoit.wrapperPath`|Path to AutoIt3Wrapper|"C:\\Program Files (x86)\\AutoIt3\\SciTE\\AutoIt3Wrapper\\AutoIt3Wrapper.au3"|
|`autoit.tidyPath`|Path to Tidy|"C:\\Program Files (x86)\\AutoIt3\\SciTE\\Tidy\\Tidy.exe"|
|`autoit.checkPath`|Path to AutoIt Syntax Checker (Au3Check)|"C:\\Program Files (x86)\\AutoIt3\\AU3Check.exe"|
|`autoit.helpPath`|Path to AutoIt Help|"C:\\Program Files (x86)\\AutoIt3\\AutoIt3Help.exe"|
|`autoit.infoPath`|Path to Au3Info Executable|"C:\\Program Files (x86)\\AutoIt3\\Au3Info.exe"|
|`autoit.kodaPath`|Path to Koda Form Designer|"C:\\Program Files (x86)\\AutoIt3\\SciTE\\Koda\\FD.exe"|

## Keyboard Shortcuts
* Run Script: `F5`
* AutoIt Check: `Ctrl+F5`
* Compile Script: `Ctrl+F7`
* Build Script: `F7`
* Run AutoIt Help: `Ctrl+F1`
* Run Au3Info: `Ctrl+F6`
* Debug to MsgBox: `Ctrl+Shift+D`
* Debug to Console: `Alt+D`
* Run Koda: `Alt+M`
> **NOTE:**
> 
> Run, Compile and Build Script functions require the full install of [SciTE4AutoIt3](https://www.autoitscript.com/site/autoit-script-editor/downloads/) alongside AutoIt.
