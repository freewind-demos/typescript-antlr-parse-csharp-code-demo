TypeScript Antlr Parse CSharp Code Demo
===========================

如何利用antlr生成可以解析csharp语法的parser，并且利用它来解析一个已有的c#文件

- https://github.com/antlr/antlr4/blob/master/doc/getting-started.md
- Csharp grammar: https://github.com/antlr/grammars-v4/tree/master/csharp
- Csharp Base classes: https://github.com/antlr/grammars-v4/tree/master/csharp/CSharp 
- Typescript Base classes: https://github.com/antlr/grammars-v4/tree/master/javascript/typescript/TypeScript

```
brew install python
pip3 install antlr4-tools
antlr4 -Dlanguage=TypeScript CSharpLexer.g4 -o src/generated -package generated
antlr4 -Dlanguage=TypeScript CSharpParser.g4 -o src/generated -package generated
antlr4 -Dlanguage=TypeScript CSharpPreprocessorParser.g4 -o src/generated -package generated
```

由于CSharp没有提供 typescript 下的parser base class，我们需要先把
https://github.com/antlr/grammars-v4/tree/master/csharp/CSharp
中的c# base classes 复制到本地，如 `antlrbase`，
然后参考
https://github.com/antlr/grammars-v4/tree/master/javascript/typescript/TypeScript
把它改写成typescript

```
npm i
npm start
```
