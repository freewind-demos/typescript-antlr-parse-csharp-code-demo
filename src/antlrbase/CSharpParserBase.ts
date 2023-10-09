import { Parser, TokenStream } from 'antlr4';
import { Local_variable_declarationContext } from '../generated/CSharpParser';

export abstract class CSharpParserBase extends Parser {
    protected constructor(input: TokenStream) {
        super(input)
    }

    protected IsLocalVariableDeclaration(): boolean {
        var local_var_decl = this._ctx as Local_variable_declarationContext;
        if (local_var_decl == null) return true;
        var local_variable_type = local_var_decl.local_variable_type();
        if (local_variable_type == null) return true;
        if (local_variable_type.getText() == "var") return false;
        return true;
    }
}
