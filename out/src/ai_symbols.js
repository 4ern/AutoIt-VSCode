'use strict'

var { languages, SymbolInformation, SymbolKind, 
    Location, Position } = require('vscode')

const _funcPattern = /Func\s(.+)\(/gi
const _varPattern = /(\$\w+)/gi

module.exports = languages.registerDocumentSymbolProvider(
    { language: 'autoit', scheme: 'file' },
    {
        provideDocumentSymbols(doc, token) {

            let result = [];
            let found = [];
            let funcName;

            // Get the number of lines in the document to loop through
            const lineCount = Math.min(doc.lineCount, 10000)
            for (let line = 0; line < lineCount; line++) {
                const {text}  = doc.lineAt(line)

                if (text == "") { // skip over empty lines
                    continue
                }

                funcName = _funcPattern.exec(text)
                if(funcName && found.indexOf(funcName[1]) === -1) {
                    result.push(new SymbolInformation(funcName[1], SymbolKind.Function, 
                    '', new Location(doc.uri, new Position(line, 0))))
                    found.push(funcName[1])
                }
            }

            return result
        }
    }
)
