import { Parser, TokenStream } from 'antlr4';
import {
    PreprocessorConditionalContext,
    PreprocessorDeclarationContext,
    PreprocessorDiagnosticContext,
    PreprocessorLineContext,
    PreprocessorNullableContext,
    PreprocessorPragmaContext,
    PreprocessorRegionContext,
    Preprocessor_expressionContext
} from '../generated/CSharpPreprocessorParser';

export abstract class CSharpPreprocessorParserBase extends Parser {
    conditions: boolean[] = [];
    public ConditionalSymbols: Set<string> = new Set<string>();

    protected constructor(input: TokenStream) {
        super(input);
        this.conditions.push(true);
        this.ConditionalSymbols.add("DEBUG");
    }


    protected AllConditions(): boolean {
        for (const condition of this.conditions) {
            if (!condition)
                return false;
        }
        return true;
    }

    protected OnPreprocessorDirectiveDefine(): void {
        const c = this._ctx;
        var d = c as PreprocessorDeclarationContext;
        this.ConditionalSymbols.add(d.CONDITIONAL_SYMBOL().getText());
        d.value = this.AllConditions();
    }

    protected OnPreprocessorDirectiveUndef(): void {
        const c = this._ctx;
        var d = c as PreprocessorDeclarationContext;
        this.ConditionalSymbols.delete(d.CONDITIONAL_SYMBOL().getText());
        d.value = this.AllConditions();
    }

    protected OnPreprocessorDirectiveIf(): void {
        const c = this._ctx;
        var d = c as PreprocessorConditionalContext;
        d.value = d._expr.value === ("true") && this.AllConditions();
        this.conditions.push(d._expr.value === ("true"));
    }

    protected OnPreprocessorDirectiveElif(): void {
        const c = this._ctx;
        var d = c as PreprocessorConditionalContext;
        if (!this.conditions[this.conditions.length - 1]) {
            this.conditions.pop();
            d.value = d._expr.value === ("true") && this.AllConditions();
            this.conditions.push(d._expr.value === ("true"));
        }
        else {
            d.value = false;
        }
    }

    protected OnPreprocessorDirectiveElse(): void {
        const c = this._ctx;
        var d = c as PreprocessorConditionalContext;
        if (!this.conditions[this.conditions.length - 1]) {
            this.conditions.pop();
            d.value = true && this.AllConditions();
            this.conditions.push(true);
        }
        else {
            d.value = false;
        }
    }

    protected OnPreprocessorDirectiveEndif(): void {
        const c = this._ctx;
        var d = c as PreprocessorConditionalContext;
        this.conditions.pop();
        d.value = this.conditions[this.conditions.length - 1];
    }

    protected OnPreprocessorDirectiveLine(): void {
        const c = this._ctx;
        var d = c as PreprocessorLineContext;
        d.value = this.AllConditions();
    }

    protected OnPreprocessorDirectiveError(): void {
        const c = this._ctx;
        var d = c as PreprocessorDiagnosticContext;
        d.value = this.AllConditions();
    }

    protected OnPreprocessorDirectiveWarning(): void {
        const c = this._ctx;
        var d = c as PreprocessorDiagnosticContext;
        d.value = this.AllConditions();
    }

    protected OnPreprocessorDirectiveRegion(): void {
        const c = this._ctx;
        var d = c as PreprocessorRegionContext;
        d.value = this.AllConditions();
    }

    protected OnPreprocessorDirectiveEndregion(): void {
        const c = this._ctx;
        var d = c as PreprocessorRegionContext;
        d.value = this.AllConditions();
    }

    protected OnPreprocessorDirectivePragma(): void {
        const c = this._ctx;
        var d = c as PreprocessorPragmaContext;
        d.value = this.AllConditions();
    }

    protected OnPreprocessorDirectiveNullable(): void {
        const c = this._ctx;
        var d = c as PreprocessorNullableContext;
        d.value = this.AllConditions();
    }

    protected OnPreprocessorExpressionTrue(): void {
        const c = this._ctx;
        var d = c as Preprocessor_expressionContext;
        d.value = "true";
    }

    protected OnPreprocessorExpressionFalse(): void {
        const c = this._ctx;
        var d = c as Preprocessor_expressionContext;
        d.value = "false";
    }

    protected OnPreprocessorExpressionConditionalSymbol(): void {
        const c = this._ctx;
        var d = c as Preprocessor_expressionContext;
        d.value = this.ConditionalSymbols.has(d.CONDITIONAL_SYMBOL().getText()) ? "true" : "false";
    }

    protected OnPreprocessorExpressionConditionalOpenParens(): void {
        const c = this._ctx;
        var d = c as Preprocessor_expressionContext;
        d.value = d._expr.value;
    }

    protected OnPreprocessorExpressionConditionalBang(): void {
        const c = this._ctx;
        var d = c as Preprocessor_expressionContext;
        d.value = d._expr.value === ("true") ? "false" : "true";
    }

    protected OnPreprocessorExpressionConditionalEq(): void {
        const c = this._ctx;
        var d = c as Preprocessor_expressionContext;
        d.value = (d._expr1.value == d._expr2.value ? "true" : "false");
    }

    protected OnPreprocessorExpressionConditionalNe(): void {
        const c = this._ctx;
        var d = c as Preprocessor_expressionContext;
        d.value = (d._expr1.value != d._expr2.value ? "true" : "false");
    }

    protected OnPreprocessorExpressionConditionalAnd(): void {
        const c = this._ctx;
        var d = c as Preprocessor_expressionContext;
        d.value = (d._expr1.value === "true" && d._expr2.value === "true" ? "true" : "false");
    }

    protected OnPreprocessorExpressionConditionalOr(): void {
        const c = this._ctx;
        var d = c as Preprocessor_expressionContext;
        d.value = (d._expr1.value === ("true") || d._expr2.value === ("true") ? "true" : "false");
    }
}
