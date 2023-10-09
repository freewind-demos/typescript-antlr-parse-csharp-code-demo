import {CharStreams, CommonTokenStream, ParseTreeWalker} from "antlr4";
import path from 'path';

import CSharpLexer from './generated/CSharpLexer';
import CSharpParser, {Class_definitionContext} from './generated/CSharpParser';
import CSharpParserListener from './generated/CSharpParserListener';

function main(): void {
    const input = CharStreams.fromPathSync(path.resolve(__dirname, '../data/csharp.cs'), "utf-8");
    const lex = new CSharpLexer(input);
    const tokens = new CommonTokenStream(lex); // a token stream
    const parser = new CSharpParser(tokens); // transforms tokens into parse trees


    const walker = new ParseTreeWalker();


    walker.walk(new class extends CSharpParserListener {
        enterClass_definition = (ctx: Class_definitionContext) => {
            console.log("### ctx", ctx.identifier().getText())
        }
    }, parser.compilation_unit());
}

main()
