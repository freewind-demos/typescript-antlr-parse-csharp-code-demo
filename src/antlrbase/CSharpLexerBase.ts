import {CharStream, Lexer} from 'antlr4';

import CSharpLexer from '../generated/CSharpLexer';

export abstract class CSharpLexerBase extends Lexer {

    public constructor(input: CharStream) {
        super(input);
        this._input = input;
    }


    protected interpolatedStringLevel: number = 0;
    protected interpolatedVerbatiums: boolean[] = [];
    protected curlyLevels: number[] = [];
    protected verbatium: boolean = false;

    protected OnInterpolatedRegularStringStart(): void {
        this.interpolatedStringLevel++;
        this.interpolatedVerbatiums.push(false);
        this.verbatium = false;
    }

    protected OnInterpolatedVerbatiumStringStart(): void {
        this.interpolatedStringLevel++;
        this.interpolatedVerbatiums.push(true);
        this.verbatium = true;
    }

    protected OnOpenBrace(): void {
        if (this.interpolatedStringLevel > 0) {
            this.curlyLevels.push((this.curlyLevels.pop() ?? 0) + 1);
        }
    }

    protected OnCloseBrace(): void {
        if (this.interpolatedStringLevel > 0) {
            this.curlyLevels.push((this.curlyLevels.pop() ?? 0) - 1);
            if (this.curlyLevels[this.curlyLevels.length - 1] == 0) {
                this.curlyLevels.pop();
                this.skip();
                this.popMode();
            }
        }
    }

    protected OnColon(): void {

        if (this.interpolatedStringLevel > 0) {
            let ind = 1;
            let switchToFormatString = true;
            while (this._input.LA(ind) !== '}'.charCodeAt(0)) {
                if (this._input.LA(ind) === ':'.charCodeAt(0) || this._input.LA(ind) === ')'.charCodeAt(0)) {
                    switchToFormatString = false;
                    break;
                }
                ind++;
            }
            if (switchToFormatString) {
                this.pushMode(CSharpLexer.INTERPOLATION_FORMAT);
            }
        }
    }

    protected OpenBraceInside(): void {
        this.curlyLevels.push(1);
    }

    protected OnDoubleQuoteInside(): void {
        this.interpolatedStringLevel--;
        this.interpolatedVerbatiums.pop();
        this.verbatium = (this.interpolatedVerbatiums.length > 0 ? this.interpolatedVerbatiums[this.interpolatedVerbatiums.length - 1] : false);
    }

    protected OnCloseBraceInside(): void {
        this.curlyLevels.pop();
    }

    protected IsRegularCharInside(): boolean {
        return !this.verbatium;
    }

    protected IsVerbatiumDoubleQuoteInside(): boolean {
        return this.verbatium;
    }
}
