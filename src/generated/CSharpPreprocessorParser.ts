// Generated from CSharpPreprocessorParser.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import CSharpPreprocessorParserListener from "./CSharpPreprocessorParserListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

import {CSharpPreprocessorParserBase} from '../antlrbase/CSharpPreprocessorParserBase';

export default class CSharpPreprocessorParser extends CSharpPreprocessorParserBase {
	public static readonly BYTE_ORDER_MARK = 1;
	public static readonly SINGLE_LINE_DOC_COMMENT = 2;
	public static readonly EMPTY_DELIMITED_DOC_COMMENT = 3;
	public static readonly DELIMITED_DOC_COMMENT = 4;
	public static readonly SINGLE_LINE_COMMENT = 5;
	public static readonly DELIMITED_COMMENT = 6;
	public static readonly WHITESPACES = 7;
	public static readonly SHARP = 8;
	public static readonly ABSTRACT = 9;
	public static readonly ADD = 10;
	public static readonly ALIAS = 11;
	public static readonly ARGLIST = 12;
	public static readonly AS = 13;
	public static readonly ASCENDING = 14;
	public static readonly ASYNC = 15;
	public static readonly AWAIT = 16;
	public static readonly BASE = 17;
	public static readonly BOOL = 18;
	public static readonly BREAK = 19;
	public static readonly BY = 20;
	public static readonly BYTE = 21;
	public static readonly CASE = 22;
	public static readonly CATCH = 23;
	public static readonly CHAR = 24;
	public static readonly CHECKED = 25;
	public static readonly CLASS = 26;
	public static readonly CONST = 27;
	public static readonly CONTINUE = 28;
	public static readonly DECIMAL = 29;
	public static readonly DEFAULT = 30;
	public static readonly DELEGATE = 31;
	public static readonly DESCENDING = 32;
	public static readonly DO = 33;
	public static readonly DOUBLE = 34;
	public static readonly DYNAMIC = 35;
	public static readonly ELSE = 36;
	public static readonly ENUM = 37;
	public static readonly EQUALS = 38;
	public static readonly EVENT = 39;
	public static readonly EXPLICIT = 40;
	public static readonly EXTERN = 41;
	public static readonly FALSE = 42;
	public static readonly FINALLY = 43;
	public static readonly FIXED = 44;
	public static readonly FLOAT = 45;
	public static readonly FOR = 46;
	public static readonly FOREACH = 47;
	public static readonly FROM = 48;
	public static readonly GET = 49;
	public static readonly GOTO = 50;
	public static readonly GROUP = 51;
	public static readonly IF = 52;
	public static readonly IMPLICIT = 53;
	public static readonly IN = 54;
	public static readonly INT = 55;
	public static readonly INTERFACE = 56;
	public static readonly INTERNAL = 57;
	public static readonly INTO = 58;
	public static readonly IS = 59;
	public static readonly JOIN = 60;
	public static readonly LET = 61;
	public static readonly LOCK = 62;
	public static readonly LONG = 63;
	public static readonly NAMEOF = 64;
	public static readonly NAMESPACE = 65;
	public static readonly NEW = 66;
	public static readonly NULL_ = 67;
	public static readonly OBJECT = 68;
	public static readonly ON = 69;
	public static readonly OPERATOR = 70;
	public static readonly ORDERBY = 71;
	public static readonly OUT = 72;
	public static readonly OVERRIDE = 73;
	public static readonly PARAMS = 74;
	public static readonly PARTIAL = 75;
	public static readonly PRIVATE = 76;
	public static readonly PROTECTED = 77;
	public static readonly PUBLIC = 78;
	public static readonly READONLY = 79;
	public static readonly REF = 80;
	public static readonly REMOVE = 81;
	public static readonly RETURN = 82;
	public static readonly SBYTE = 83;
	public static readonly SEALED = 84;
	public static readonly SELECT = 85;
	public static readonly SET = 86;
	public static readonly SHORT = 87;
	public static readonly SIZEOF = 88;
	public static readonly STACKALLOC = 89;
	public static readonly STATIC = 90;
	public static readonly STRING = 91;
	public static readonly STRUCT = 92;
	public static readonly SWITCH = 93;
	public static readonly THIS = 94;
	public static readonly THROW = 95;
	public static readonly TRUE = 96;
	public static readonly TRY = 97;
	public static readonly TYPEOF = 98;
	public static readonly UINT = 99;
	public static readonly ULONG = 100;
	public static readonly UNCHECKED = 101;
	public static readonly UNMANAGED = 102;
	public static readonly UNSAFE = 103;
	public static readonly USHORT = 104;
	public static readonly USING = 105;
	public static readonly VAR = 106;
	public static readonly VIRTUAL = 107;
	public static readonly VOID = 108;
	public static readonly VOLATILE = 109;
	public static readonly WHEN = 110;
	public static readonly WHERE = 111;
	public static readonly WHILE = 112;
	public static readonly YIELD = 113;
	public static readonly IDENTIFIER = 114;
	public static readonly LITERAL_ACCESS = 115;
	public static readonly INTEGER_LITERAL = 116;
	public static readonly HEX_INTEGER_LITERAL = 117;
	public static readonly BIN_INTEGER_LITERAL = 118;
	public static readonly REAL_LITERAL = 119;
	public static readonly CHARACTER_LITERAL = 120;
	public static readonly REGULAR_STRING = 121;
	public static readonly VERBATIUM_STRING = 122;
	public static readonly INTERPOLATED_REGULAR_STRING_START = 123;
	public static readonly INTERPOLATED_VERBATIUM_STRING_START = 124;
	public static readonly OPEN_BRACE = 125;
	public static readonly CLOSE_BRACE = 126;
	public static readonly OPEN_BRACKET = 127;
	public static readonly CLOSE_BRACKET = 128;
	public static readonly OPEN_PARENS = 129;
	public static readonly CLOSE_PARENS = 130;
	public static readonly DOT = 131;
	public static readonly COMMA = 132;
	public static readonly COLON = 133;
	public static readonly SEMICOLON = 134;
	public static readonly PLUS = 135;
	public static readonly MINUS = 136;
	public static readonly STAR = 137;
	public static readonly DIV = 138;
	public static readonly PERCENT = 139;
	public static readonly AMP = 140;
	public static readonly BITWISE_OR = 141;
	public static readonly CARET = 142;
	public static readonly BANG = 143;
	public static readonly TILDE = 144;
	public static readonly ASSIGNMENT = 145;
	public static readonly LT = 146;
	public static readonly GT = 147;
	public static readonly INTERR = 148;
	public static readonly DOUBLE_COLON = 149;
	public static readonly OP_COALESCING = 150;
	public static readonly OP_INC = 151;
	public static readonly OP_DEC = 152;
	public static readonly OP_AND = 153;
	public static readonly OP_OR = 154;
	public static readonly OP_PTR = 155;
	public static readonly OP_EQ = 156;
	public static readonly OP_NE = 157;
	public static readonly OP_LE = 158;
	public static readonly OP_GE = 159;
	public static readonly OP_ADD_ASSIGNMENT = 160;
	public static readonly OP_SUB_ASSIGNMENT = 161;
	public static readonly OP_MULT_ASSIGNMENT = 162;
	public static readonly OP_DIV_ASSIGNMENT = 163;
	public static readonly OP_MOD_ASSIGNMENT = 164;
	public static readonly OP_AND_ASSIGNMENT = 165;
	public static readonly OP_OR_ASSIGNMENT = 166;
	public static readonly OP_XOR_ASSIGNMENT = 167;
	public static readonly OP_LEFT_SHIFT = 168;
	public static readonly OP_LEFT_SHIFT_ASSIGNMENT = 169;
	public static readonly OP_COALESCING_ASSIGNMENT = 170;
	public static readonly OP_RANGE = 171;
	public static readonly DOUBLE_CURLY_INSIDE = 172;
	public static readonly OPEN_BRACE_INSIDE = 173;
	public static readonly REGULAR_CHAR_INSIDE = 174;
	public static readonly VERBATIUM_DOUBLE_QUOTE_INSIDE = 175;
	public static readonly DOUBLE_QUOTE_INSIDE = 176;
	public static readonly REGULAR_STRING_INSIDE = 177;
	public static readonly VERBATIUM_INSIDE_STRING = 178;
	public static readonly CLOSE_BRACE_INSIDE = 179;
	public static readonly FORMAT_STRING = 180;
	public static readonly DIRECTIVE_WHITESPACES = 181;
	public static readonly DIGITS = 182;
	public static readonly DEFINE = 183;
	public static readonly UNDEF = 184;
	public static readonly ELIF = 185;
	public static readonly ENDIF = 186;
	public static readonly LINE = 187;
	public static readonly ERROR = 188;
	public static readonly WARNING = 189;
	public static readonly REGION = 190;
	public static readonly ENDREGION = 191;
	public static readonly PRAGMA = 192;
	public static readonly NULLABLE = 193;
	public static readonly DIRECTIVE_HIDDEN = 194;
	public static readonly CONDITIONAL_SYMBOL = 195;
	public static readonly DIRECTIVE_NEW_LINE = 196;
	public static readonly TEXT = 197;
	public static readonly DOUBLE_CURLY_CLOSE_INSIDE = 198;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_preprocessor_directive = 0;
	public static readonly RULE_directive_new_line_or_sharp = 1;
	public static readonly RULE_preprocessor_expression = 2;
	public static readonly literalNames: (string | null)[] = [ null, "'\\u00EF\\u00BB\\u00BF'", 
                                                            null, "'/***/'", 
                                                            null, null, 
                                                            null, null, 
                                                            "'#'", "'abstract'", 
                                                            "'add'", "'alias'", 
                                                            "'__arglist'", 
                                                            "'as'", "'ascending'", 
                                                            "'async'", "'await'", 
                                                            "'base'", "'bool'", 
                                                            "'break'", "'by'", 
                                                            "'byte'", "'case'", 
                                                            "'catch'", "'char'", 
                                                            "'checked'", 
                                                            "'class'", "'const'", 
                                                            "'continue'", 
                                                            "'decimal'", 
                                                            "'default'", 
                                                            "'delegate'", 
                                                            "'descending'", 
                                                            "'do'", "'double'", 
                                                            "'dynamic'", 
                                                            "'else'", "'enum'", 
                                                            "'equals'", 
                                                            "'event'", "'explicit'", 
                                                            "'extern'", 
                                                            "'false'", "'finally'", 
                                                            "'fixed'", "'float'", 
                                                            "'for'", "'foreach'", 
                                                            "'from'", "'get'", 
                                                            "'goto'", "'group'", 
                                                            "'if'", "'implicit'", 
                                                            "'in'", "'int'", 
                                                            "'interface'", 
                                                            "'internal'", 
                                                            "'into'", "'is'", 
                                                            "'join'", "'let'", 
                                                            "'lock'", "'long'", 
                                                            "'nameof'", 
                                                            "'namespace'", 
                                                            "'new'", "'null'", 
                                                            "'object'", 
                                                            "'on'", "'operator'", 
                                                            "'orderby'", 
                                                            "'out'", "'override'", 
                                                            "'params'", 
                                                            "'partial'", 
                                                            "'private'", 
                                                            "'protected'", 
                                                            "'public'", 
                                                            "'readonly'", 
                                                            "'ref'", "'remove'", 
                                                            "'return'", 
                                                            "'sbyte'", "'sealed'", 
                                                            "'select'", 
                                                            "'set'", "'short'", 
                                                            "'sizeof'", 
                                                            "'stackalloc'", 
                                                            "'static'", 
                                                            "'string'", 
                                                            "'struct'", 
                                                            "'switch'", 
                                                            "'this'", "'throw'", 
                                                            "'true'", "'try'", 
                                                            "'typeof'", 
                                                            "'uint'", "'ulong'", 
                                                            "'unchecked'", 
                                                            "'unmanaged'", 
                                                            "'unsafe'", 
                                                            "'ushort'", 
                                                            "'using'", "'var'", 
                                                            "'virtual'", 
                                                            "'void'", "'volatile'", 
                                                            "'when'", "'where'", 
                                                            "'while'", "'yield'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'{'", 
                                                            "'}'", "'['", 
                                                            "']'", "'('", 
                                                            "')'", "'.'", 
                                                            "','", "':'", 
                                                            "';'", "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'", "'%'", 
                                                            "'&'", "'|'", 
                                                            "'^'", "'!'", 
                                                            "'~'", "'='", 
                                                            "'<'", "'>'", 
                                                            "'?'", "'::'", 
                                                            "'??'", "'++'", 
                                                            "'--'", "'&&'", 
                                                            "'||'", "'->'", 
                                                            "'=='", "'!='", 
                                                            "'<='", "'>='", 
                                                            "'+='", "'-='", 
                                                            "'*='", "'/='", 
                                                            "'%='", "'&='", 
                                                            "'|='", "'^='", 
                                                            "'<<'", "'<<='", 
                                                            "'??='", "'..'", 
                                                            "'{{'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'define'", 
                                                            "'undef'", "'elif'", 
                                                            "'endif'", "'line'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'hidden'", 
                                                            null, null, 
                                                            null, "'}}'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "BYTE_ORDER_MARK", 
                                                             "SINGLE_LINE_DOC_COMMENT", 
                                                             "EMPTY_DELIMITED_DOC_COMMENT", 
                                                             "DELIMITED_DOC_COMMENT", 
                                                             "SINGLE_LINE_COMMENT", 
                                                             "DELIMITED_COMMENT", 
                                                             "WHITESPACES", 
                                                             "SHARP", "ABSTRACT", 
                                                             "ADD", "ALIAS", 
                                                             "ARGLIST", 
                                                             "AS", "ASCENDING", 
                                                             "ASYNC", "AWAIT", 
                                                             "BASE", "BOOL", 
                                                             "BREAK", "BY", 
                                                             "BYTE", "CASE", 
                                                             "CATCH", "CHAR", 
                                                             "CHECKED", 
                                                             "CLASS", "CONST", 
                                                             "CONTINUE", 
                                                             "DECIMAL", 
                                                             "DEFAULT", 
                                                             "DELEGATE", 
                                                             "DESCENDING", 
                                                             "DO", "DOUBLE", 
                                                             "DYNAMIC", 
                                                             "ELSE", "ENUM", 
                                                             "EQUALS", "EVENT", 
                                                             "EXPLICIT", 
                                                             "EXTERN", "FALSE", 
                                                             "FINALLY", 
                                                             "FIXED", "FLOAT", 
                                                             "FOR", "FOREACH", 
                                                             "FROM", "GET", 
                                                             "GOTO", "GROUP", 
                                                             "IF", "IMPLICIT", 
                                                             "IN", "INT", 
                                                             "INTERFACE", 
                                                             "INTERNAL", 
                                                             "INTO", "IS", 
                                                             "JOIN", "LET", 
                                                             "LOCK", "LONG", 
                                                             "NAMEOF", "NAMESPACE", 
                                                             "NEW", "NULL_", 
                                                             "OBJECT", "ON", 
                                                             "OPERATOR", 
                                                             "ORDERBY", 
                                                             "OUT", "OVERRIDE", 
                                                             "PARAMS", "PARTIAL", 
                                                             "PRIVATE", 
                                                             "PROTECTED", 
                                                             "PUBLIC", "READONLY", 
                                                             "REF", "REMOVE", 
                                                             "RETURN", "SBYTE", 
                                                             "SEALED", "SELECT", 
                                                             "SET", "SHORT", 
                                                             "SIZEOF", "STACKALLOC", 
                                                             "STATIC", "STRING", 
                                                             "STRUCT", "SWITCH", 
                                                             "THIS", "THROW", 
                                                             "TRUE", "TRY", 
                                                             "TYPEOF", "UINT", 
                                                             "ULONG", "UNCHECKED", 
                                                             "UNMANAGED", 
                                                             "UNSAFE", "USHORT", 
                                                             "USING", "VAR", 
                                                             "VIRTUAL", 
                                                             "VOID", "VOLATILE", 
                                                             "WHEN", "WHERE", 
                                                             "WHILE", "YIELD", 
                                                             "IDENTIFIER", 
                                                             "LITERAL_ACCESS", 
                                                             "INTEGER_LITERAL", 
                                                             "HEX_INTEGER_LITERAL", 
                                                             "BIN_INTEGER_LITERAL", 
                                                             "REAL_LITERAL", 
                                                             "CHARACTER_LITERAL", 
                                                             "REGULAR_STRING", 
                                                             "VERBATIUM_STRING", 
                                                             "INTERPOLATED_REGULAR_STRING_START", 
                                                             "INTERPOLATED_VERBATIUM_STRING_START", 
                                                             "OPEN_BRACE", 
                                                             "CLOSE_BRACE", 
                                                             "OPEN_BRACKET", 
                                                             "CLOSE_BRACKET", 
                                                             "OPEN_PARENS", 
                                                             "CLOSE_PARENS", 
                                                             "DOT", "COMMA", 
                                                             "COLON", "SEMICOLON", 
                                                             "PLUS", "MINUS", 
                                                             "STAR", "DIV", 
                                                             "PERCENT", 
                                                             "AMP", "BITWISE_OR", 
                                                             "CARET", "BANG", 
                                                             "TILDE", "ASSIGNMENT", 
                                                             "LT", "GT", 
                                                             "INTERR", "DOUBLE_COLON", 
                                                             "OP_COALESCING", 
                                                             "OP_INC", "OP_DEC", 
                                                             "OP_AND", "OP_OR", 
                                                             "OP_PTR", "OP_EQ", 
                                                             "OP_NE", "OP_LE", 
                                                             "OP_GE", "OP_ADD_ASSIGNMENT", 
                                                             "OP_SUB_ASSIGNMENT", 
                                                             "OP_MULT_ASSIGNMENT", 
                                                             "OP_DIV_ASSIGNMENT", 
                                                             "OP_MOD_ASSIGNMENT", 
                                                             "OP_AND_ASSIGNMENT", 
                                                             "OP_OR_ASSIGNMENT", 
                                                             "OP_XOR_ASSIGNMENT", 
                                                             "OP_LEFT_SHIFT", 
                                                             "OP_LEFT_SHIFT_ASSIGNMENT", 
                                                             "OP_COALESCING_ASSIGNMENT", 
                                                             "OP_RANGE", 
                                                             "DOUBLE_CURLY_INSIDE", 
                                                             "OPEN_BRACE_INSIDE", 
                                                             "REGULAR_CHAR_INSIDE", 
                                                             "VERBATIUM_DOUBLE_QUOTE_INSIDE", 
                                                             "DOUBLE_QUOTE_INSIDE", 
                                                             "REGULAR_STRING_INSIDE", 
                                                             "VERBATIUM_INSIDE_STRING", 
                                                             "CLOSE_BRACE_INSIDE", 
                                                             "FORMAT_STRING", 
                                                             "DIRECTIVE_WHITESPACES", 
                                                             "DIGITS", "DEFINE", 
                                                             "UNDEF", "ELIF", 
                                                             "ENDIF", "LINE", 
                                                             "ERROR", "WARNING", 
                                                             "REGION", "ENDREGION", 
                                                             "PRAGMA", "NULLABLE", 
                                                             "DIRECTIVE_HIDDEN", 
                                                             "CONDITIONAL_SYMBOL", 
                                                             "DIRECTIVE_NEW_LINE", 
                                                             "TEXT", "DOUBLE_CURLY_CLOSE_INSIDE" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"preprocessor_directive", "directive_new_line_or_sharp", "preprocessor_expression",
	];
	public get grammarFileName(): string { return "CSharpPreprocessorParser.g4"; }
	public get literalNames(): (string | null)[] { return CSharpPreprocessorParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return CSharpPreprocessorParser.symbolicNames; }
	public get ruleNames(): string[] { return CSharpPreprocessorParser.ruleNames; }
	public get serializedATN(): number[] { return CSharpPreprocessorParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, CSharpPreprocessorParser._ATN, CSharpPreprocessorParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public preprocessor_directive(): Preprocessor_directiveContext {
		let localctx: Preprocessor_directiveContext = new Preprocessor_directiveContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, CSharpPreprocessorParser.RULE_preprocessor_directive);
		let _la: number;
		try {
			this.state = 80;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 183:
				localctx = new PreprocessorDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 6;
				this.match(CSharpPreprocessorParser.DEFINE);
				this.state = 7;
				this.match(CSharpPreprocessorParser.CONDITIONAL_SYMBOL);
				this.state = 8;
				this.directive_new_line_or_sharp();
				 this.OnPreprocessorDirectiveDefine(); 
				}
				break;
			case 184:
				localctx = new PreprocessorDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 11;
				this.match(CSharpPreprocessorParser.UNDEF);
				this.state = 12;
				this.match(CSharpPreprocessorParser.CONDITIONAL_SYMBOL);
				this.state = 13;
				this.directive_new_line_or_sharp();
				 this.OnPreprocessorDirectiveUndef(); 
				}
				break;
			case 52:
				localctx = new PreprocessorConditionalContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 16;
				this.match(CSharpPreprocessorParser.IF);
				this.state = 17;
				(localctx as PreprocessorConditionalContext)._expr = this.preprocessor_expression(0);
				this.state = 18;
				this.directive_new_line_or_sharp();
				 this.OnPreprocessorDirectiveIf(); 
				}
				break;
			case 185:
				localctx = new PreprocessorConditionalContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 21;
				this.match(CSharpPreprocessorParser.ELIF);
				this.state = 22;
				(localctx as PreprocessorConditionalContext)._expr = this.preprocessor_expression(0);
				this.state = 23;
				this.directive_new_line_or_sharp();
				 this.OnPreprocessorDirectiveElif(); 
				}
				break;
			case 36:
				localctx = new PreprocessorConditionalContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 26;
				this.match(CSharpPreprocessorParser.ELSE);
				this.state = 27;
				this.directive_new_line_or_sharp();
				 this.OnPreprocessorDirectiveElse(); 
				}
				break;
			case 186:
				localctx = new PreprocessorConditionalContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 30;
				this.match(CSharpPreprocessorParser.ENDIF);
				this.state = 31;
				this.directive_new_line_or_sharp();
				 this.OnPreprocessorDirectiveEndif(); 
				}
				break;
			case 187:
				localctx = new PreprocessorLineContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 34;
				this.match(CSharpPreprocessorParser.LINE);
				this.state = 41;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 182:
					{
					this.state = 35;
					this.match(CSharpPreprocessorParser.DIGITS);
					this.state = 37;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===91) {
						{
						this.state = 36;
						this.match(CSharpPreprocessorParser.STRING);
						}
					}

					}
					break;
				case 30:
					{
					this.state = 39;
					this.match(CSharpPreprocessorParser.DEFAULT);
					}
					break;
				case 194:
					{
					this.state = 40;
					this.match(CSharpPreprocessorParser.DIRECTIVE_HIDDEN);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 43;
				this.directive_new_line_or_sharp();
				 this.OnPreprocessorDirectiveLine(); 
				}
				break;
			case 188:
				localctx = new PreprocessorDiagnosticContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 46;
				this.match(CSharpPreprocessorParser.ERROR);
				this.state = 47;
				this.match(CSharpPreprocessorParser.TEXT);
				this.state = 48;
				this.directive_new_line_or_sharp();
				 this.OnPreprocessorDirectiveError(); 
				}
				break;
			case 189:
				localctx = new PreprocessorDiagnosticContext(this, localctx);
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 51;
				this.match(CSharpPreprocessorParser.WARNING);
				this.state = 52;
				this.match(CSharpPreprocessorParser.TEXT);
				this.state = 53;
				this.directive_new_line_or_sharp();
				 this.OnPreprocessorDirectiveWarning(); 
				}
				break;
			case 190:
				localctx = new PreprocessorRegionContext(this, localctx);
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 56;
				this.match(CSharpPreprocessorParser.REGION);
				this.state = 58;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===197) {
					{
					this.state = 57;
					this.match(CSharpPreprocessorParser.TEXT);
					}
				}

				this.state = 60;
				this.directive_new_line_or_sharp();
				 this.OnPreprocessorDirectiveRegion(); 
				}
				break;
			case 191:
				localctx = new PreprocessorRegionContext(this, localctx);
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 63;
				this.match(CSharpPreprocessorParser.ENDREGION);
				this.state = 65;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===197) {
					{
					this.state = 64;
					this.match(CSharpPreprocessorParser.TEXT);
					}
				}

				this.state = 67;
				this.directive_new_line_or_sharp();
				 this.OnPreprocessorDirectiveEndregion(); 
				}
				break;
			case 192:
				localctx = new PreprocessorPragmaContext(this, localctx);
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 70;
				this.match(CSharpPreprocessorParser.PRAGMA);
				this.state = 71;
				this.match(CSharpPreprocessorParser.TEXT);
				this.state = 72;
				this.directive_new_line_or_sharp();
				 this.OnPreprocessorDirectivePragma(); 
				}
				break;
			case 193:
				localctx = new PreprocessorNullableContext(this, localctx);
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 75;
				this.match(CSharpPreprocessorParser.NULLABLE);
				this.state = 76;
				this.match(CSharpPreprocessorParser.TEXT);
				this.state = 77;
				this.directive_new_line_or_sharp();
				 this.OnPreprocessorDirectiveNullable(); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public directive_new_line_or_sharp(): Directive_new_line_or_sharpContext {
		let localctx: Directive_new_line_or_sharpContext = new Directive_new_line_or_sharpContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, CSharpPreprocessorParser.RULE_directive_new_line_or_sharp);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 82;
			_la = this._input.LA(1);
			if(!(_la===-1 || _la===196)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public preprocessor_expression(): Preprocessor_expressionContext;
	public preprocessor_expression(_p: number): Preprocessor_expressionContext;
	// @RuleVersion(0)
	public preprocessor_expression(_p?: number): Preprocessor_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Preprocessor_expressionContext = new Preprocessor_expressionContext(this, this._ctx, _parentState);
		let _prevctx: Preprocessor_expressionContext = localctx;
		let _startState: number = 4;
		this.enterRecursionRule(localctx, 4, CSharpPreprocessorParser.RULE_preprocessor_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 100;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 96:
				{
				this.state = 85;
				this.match(CSharpPreprocessorParser.TRUE);
				 this.OnPreprocessorExpressionTrue(); 
				}
				break;
			case 42:
				{
				this.state = 87;
				this.match(CSharpPreprocessorParser.FALSE);
				 this.OnPreprocessorExpressionFalse(); 
				}
				break;
			case 195:
				{
				this.state = 89;
				this.match(CSharpPreprocessorParser.CONDITIONAL_SYMBOL);
				 this.OnPreprocessorExpressionConditionalSymbol(); 
				}
				break;
			case 129:
				{
				this.state = 91;
				this.match(CSharpPreprocessorParser.OPEN_PARENS);
				this.state = 92;
				localctx._expr = this.preprocessor_expression(0);
				this.state = 93;
				this.match(CSharpPreprocessorParser.CLOSE_PARENS);
				 this.OnPreprocessorExpressionConditionalOpenParens(); 
				}
				break;
			case 143:
				{
				this.state = 96;
				this.match(CSharpPreprocessorParser.BANG);
				this.state = 97;
				localctx._expr = this.preprocessor_expression(5);
				 this.OnPreprocessorExpressionConditionalBang(); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 124;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 122;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						localctx = new Preprocessor_expressionContext(this, _parentctx, _parentState);
						localctx._expr1 = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, CSharpPreprocessorParser.RULE_preprocessor_expression);
						this.state = 102;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 103;
						this.match(CSharpPreprocessorParser.OP_EQ);
						this.state = 104;
						localctx._expr2 = this.preprocessor_expression(5);
						 this.OnPreprocessorExpressionConditionalEq(); 
						}
						break;
					case 2:
						{
						localctx = new Preprocessor_expressionContext(this, _parentctx, _parentState);
						localctx._expr1 = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, CSharpPreprocessorParser.RULE_preprocessor_expression);
						this.state = 107;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 108;
						this.match(CSharpPreprocessorParser.OP_NE);
						this.state = 109;
						localctx._expr2 = this.preprocessor_expression(4);
						 this.OnPreprocessorExpressionConditionalNe(); 
						}
						break;
					case 3:
						{
						localctx = new Preprocessor_expressionContext(this, _parentctx, _parentState);
						localctx._expr1 = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, CSharpPreprocessorParser.RULE_preprocessor_expression);
						this.state = 112;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 113;
						this.match(CSharpPreprocessorParser.OP_AND);
						this.state = 114;
						localctx._expr2 = this.preprocessor_expression(3);
						 this.OnPreprocessorExpressionConditionalAnd(); 
						}
						break;
					case 4:
						{
						localctx = new Preprocessor_expressionContext(this, _parentctx, _parentState);
						localctx._expr1 = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, CSharpPreprocessorParser.RULE_preprocessor_expression);
						this.state = 117;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 118;
						this.match(CSharpPreprocessorParser.OP_OR);
						this.state = 119;
						localctx._expr2 = this.preprocessor_expression(2);
						 this.OnPreprocessorExpressionConditionalOr(); 
						}
						break;
					}
					}
				}
				this.state = 126;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.preprocessor_expression_sempred(localctx as Preprocessor_expressionContext, predIndex);
		}
		return true;
	}
	private preprocessor_expression_sempred(localctx: Preprocessor_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);
		case 1:
			return this.precpred(this._ctx, 3);
		case 2:
			return this.precpred(this._ctx, 2);
		case 3:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,198,128,2,0,7,0,
	2,1,7,1,2,2,7,2,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
	1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,0,
	38,8,0,1,0,1,0,3,0,42,8,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
	0,1,0,1,0,1,0,3,0,59,8,0,1,0,1,0,1,0,1,0,1,0,3,0,66,8,0,1,0,1,0,1,0,1,0,
	1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,0,81,8,0,1,1,1,1,1,2,1,2,1,2,1,2,
	1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,101,8,2,1,2,1,2,1,2,
	1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,
	123,8,2,10,2,12,2,126,9,2,1,2,0,1,4,3,0,2,4,0,1,1,1,196,196,149,0,80,1,
	0,0,0,2,82,1,0,0,0,4,100,1,0,0,0,6,7,5,183,0,0,7,8,5,195,0,0,8,9,3,2,1,
	0,9,10,6,0,-1,0,10,81,1,0,0,0,11,12,5,184,0,0,12,13,5,195,0,0,13,14,3,2,
	1,0,14,15,6,0,-1,0,15,81,1,0,0,0,16,17,5,52,0,0,17,18,3,4,2,0,18,19,3,2,
	1,0,19,20,6,0,-1,0,20,81,1,0,0,0,21,22,5,185,0,0,22,23,3,4,2,0,23,24,3,
	2,1,0,24,25,6,0,-1,0,25,81,1,0,0,0,26,27,5,36,0,0,27,28,3,2,1,0,28,29,6,
	0,-1,0,29,81,1,0,0,0,30,31,5,186,0,0,31,32,3,2,1,0,32,33,6,0,-1,0,33,81,
	1,0,0,0,34,41,5,187,0,0,35,37,5,182,0,0,36,38,5,91,0,0,37,36,1,0,0,0,37,
	38,1,0,0,0,38,42,1,0,0,0,39,42,5,30,0,0,40,42,5,194,0,0,41,35,1,0,0,0,41,
	39,1,0,0,0,41,40,1,0,0,0,42,43,1,0,0,0,43,44,3,2,1,0,44,45,6,0,-1,0,45,
	81,1,0,0,0,46,47,5,188,0,0,47,48,5,197,0,0,48,49,3,2,1,0,49,50,6,0,-1,0,
	50,81,1,0,0,0,51,52,5,189,0,0,52,53,5,197,0,0,53,54,3,2,1,0,54,55,6,0,-1,
	0,55,81,1,0,0,0,56,58,5,190,0,0,57,59,5,197,0,0,58,57,1,0,0,0,58,59,1,0,
	0,0,59,60,1,0,0,0,60,61,3,2,1,0,61,62,6,0,-1,0,62,81,1,0,0,0,63,65,5,191,
	0,0,64,66,5,197,0,0,65,64,1,0,0,0,65,66,1,0,0,0,66,67,1,0,0,0,67,68,3,2,
	1,0,68,69,6,0,-1,0,69,81,1,0,0,0,70,71,5,192,0,0,71,72,5,197,0,0,72,73,
	3,2,1,0,73,74,6,0,-1,0,74,81,1,0,0,0,75,76,5,193,0,0,76,77,5,197,0,0,77,
	78,3,2,1,0,78,79,6,0,-1,0,79,81,1,0,0,0,80,6,1,0,0,0,80,11,1,0,0,0,80,16,
	1,0,0,0,80,21,1,0,0,0,80,26,1,0,0,0,80,30,1,0,0,0,80,34,1,0,0,0,80,46,1,
	0,0,0,80,51,1,0,0,0,80,56,1,0,0,0,80,63,1,0,0,0,80,70,1,0,0,0,80,75,1,0,
	0,0,81,1,1,0,0,0,82,83,7,0,0,0,83,3,1,0,0,0,84,85,6,2,-1,0,85,86,5,96,0,
	0,86,101,6,2,-1,0,87,88,5,42,0,0,88,101,6,2,-1,0,89,90,5,195,0,0,90,101,
	6,2,-1,0,91,92,5,129,0,0,92,93,3,4,2,0,93,94,5,130,0,0,94,95,6,2,-1,0,95,
	101,1,0,0,0,96,97,5,143,0,0,97,98,3,4,2,5,98,99,6,2,-1,0,99,101,1,0,0,0,
	100,84,1,0,0,0,100,87,1,0,0,0,100,89,1,0,0,0,100,91,1,0,0,0,100,96,1,0,
	0,0,101,124,1,0,0,0,102,103,10,4,0,0,103,104,5,156,0,0,104,105,3,4,2,5,
	105,106,6,2,-1,0,106,123,1,0,0,0,107,108,10,3,0,0,108,109,5,157,0,0,109,
	110,3,4,2,4,110,111,6,2,-1,0,111,123,1,0,0,0,112,113,10,2,0,0,113,114,5,
	153,0,0,114,115,3,4,2,3,115,116,6,2,-1,0,116,123,1,0,0,0,117,118,10,1,0,
	0,118,119,5,154,0,0,119,120,3,4,2,2,120,121,6,2,-1,0,121,123,1,0,0,0,122,
	102,1,0,0,0,122,107,1,0,0,0,122,112,1,0,0,0,122,117,1,0,0,0,123,126,1,0,
	0,0,124,122,1,0,0,0,124,125,1,0,0,0,125,5,1,0,0,0,126,124,1,0,0,0,8,37,
	41,58,65,80,100,122,124];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CSharpPreprocessorParser.__ATN) {
			CSharpPreprocessorParser.__ATN = new ATNDeserializer().deserialize(CSharpPreprocessorParser._serializedATN);
		}

		return CSharpPreprocessorParser.__ATN;
	}


	static DecisionsToDFA = CSharpPreprocessorParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class Preprocessor_directiveContext extends ParserRuleContext {
	public value: Boolean;
	constructor(parser?: CSharpPreprocessorParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return CSharpPreprocessorParser.RULE_preprocessor_directive;
	}
	public copyFrom(ctx: Preprocessor_directiveContext): void {
		super.copyFrom(ctx);
		this.value = ctx.value;
	}
}
export class PreprocessorDiagnosticContext extends Preprocessor_directiveContext {
	constructor(parser: CSharpPreprocessorParser, ctx: Preprocessor_directiveContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ERROR(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.ERROR, 0);
	}
	public TEXT(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.TEXT, 0);
	}
	public directive_new_line_or_sharp(): Directive_new_line_or_sharpContext {
		return this.getTypedRuleContext(Directive_new_line_or_sharpContext, 0) as Directive_new_line_or_sharpContext;
	}
	public WARNING(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.WARNING, 0);
	}
	public enterRule(listener: CSharpPreprocessorParserListener): void {
	    if(listener.enterPreprocessorDiagnostic) {
	 		listener.enterPreprocessorDiagnostic(this);
		}
	}
	public exitRule(listener: CSharpPreprocessorParserListener): void {
	    if(listener.exitPreprocessorDiagnostic) {
	 		listener.exitPreprocessorDiagnostic(this);
		}
	}
}
export class PreprocessorNullableContext extends Preprocessor_directiveContext {
	constructor(parser: CSharpPreprocessorParser, ctx: Preprocessor_directiveContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NULLABLE(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.NULLABLE, 0);
	}
	public TEXT(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.TEXT, 0);
	}
	public directive_new_line_or_sharp(): Directive_new_line_or_sharpContext {
		return this.getTypedRuleContext(Directive_new_line_or_sharpContext, 0) as Directive_new_line_or_sharpContext;
	}
	public enterRule(listener: CSharpPreprocessorParserListener): void {
	    if(listener.enterPreprocessorNullable) {
	 		listener.enterPreprocessorNullable(this);
		}
	}
	public exitRule(listener: CSharpPreprocessorParserListener): void {
	    if(listener.exitPreprocessorNullable) {
	 		listener.exitPreprocessorNullable(this);
		}
	}
}
export class PreprocessorRegionContext extends Preprocessor_directiveContext {
	constructor(parser: CSharpPreprocessorParser, ctx: Preprocessor_directiveContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public REGION(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.REGION, 0);
	}
	public directive_new_line_or_sharp(): Directive_new_line_or_sharpContext {
		return this.getTypedRuleContext(Directive_new_line_or_sharpContext, 0) as Directive_new_line_or_sharpContext;
	}
	public TEXT(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.TEXT, 0);
	}
	public ENDREGION(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.ENDREGION, 0);
	}
	public enterRule(listener: CSharpPreprocessorParserListener): void {
	    if(listener.enterPreprocessorRegion) {
	 		listener.enterPreprocessorRegion(this);
		}
	}
	public exitRule(listener: CSharpPreprocessorParserListener): void {
	    if(listener.exitPreprocessorRegion) {
	 		listener.exitPreprocessorRegion(this);
		}
	}
}
export class PreprocessorDeclarationContext extends Preprocessor_directiveContext {
	constructor(parser: CSharpPreprocessorParser, ctx: Preprocessor_directiveContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DEFINE(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.DEFINE, 0);
	}
	public CONDITIONAL_SYMBOL(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.CONDITIONAL_SYMBOL, 0);
	}
	public directive_new_line_or_sharp(): Directive_new_line_or_sharpContext {
		return this.getTypedRuleContext(Directive_new_line_or_sharpContext, 0) as Directive_new_line_or_sharpContext;
	}
	public UNDEF(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.UNDEF, 0);
	}
	public enterRule(listener: CSharpPreprocessorParserListener): void {
	    if(listener.enterPreprocessorDeclaration) {
	 		listener.enterPreprocessorDeclaration(this);
		}
	}
	public exitRule(listener: CSharpPreprocessorParserListener): void {
	    if(listener.exitPreprocessorDeclaration) {
	 		listener.exitPreprocessorDeclaration(this);
		}
	}
}
export class PreprocessorConditionalContext extends Preprocessor_directiveContext {
	public _expr!: Preprocessor_expressionContext;
	constructor(parser: CSharpPreprocessorParser, ctx: Preprocessor_directiveContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IF(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.IF, 0);
	}
	public directive_new_line_or_sharp(): Directive_new_line_or_sharpContext {
		return this.getTypedRuleContext(Directive_new_line_or_sharpContext, 0) as Directive_new_line_or_sharpContext;
	}
	public preprocessor_expression(): Preprocessor_expressionContext {
		return this.getTypedRuleContext(Preprocessor_expressionContext, 0) as Preprocessor_expressionContext;
	}
	public ELIF(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.ELIF, 0);
	}
	public ELSE(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.ELSE, 0);
	}
	public ENDIF(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.ENDIF, 0);
	}
	public enterRule(listener: CSharpPreprocessorParserListener): void {
	    if(listener.enterPreprocessorConditional) {
	 		listener.enterPreprocessorConditional(this);
		}
	}
	public exitRule(listener: CSharpPreprocessorParserListener): void {
	    if(listener.exitPreprocessorConditional) {
	 		listener.exitPreprocessorConditional(this);
		}
	}
}
export class PreprocessorPragmaContext extends Preprocessor_directiveContext {
	constructor(parser: CSharpPreprocessorParser, ctx: Preprocessor_directiveContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PRAGMA(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.PRAGMA, 0);
	}
	public TEXT(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.TEXT, 0);
	}
	public directive_new_line_or_sharp(): Directive_new_line_or_sharpContext {
		return this.getTypedRuleContext(Directive_new_line_or_sharpContext, 0) as Directive_new_line_or_sharpContext;
	}
	public enterRule(listener: CSharpPreprocessorParserListener): void {
	    if(listener.enterPreprocessorPragma) {
	 		listener.enterPreprocessorPragma(this);
		}
	}
	public exitRule(listener: CSharpPreprocessorParserListener): void {
	    if(listener.exitPreprocessorPragma) {
	 		listener.exitPreprocessorPragma(this);
		}
	}
}
export class PreprocessorLineContext extends Preprocessor_directiveContext {
	constructor(parser: CSharpPreprocessorParser, ctx: Preprocessor_directiveContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LINE(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.LINE, 0);
	}
	public directive_new_line_or_sharp(): Directive_new_line_or_sharpContext {
		return this.getTypedRuleContext(Directive_new_line_or_sharpContext, 0) as Directive_new_line_or_sharpContext;
	}
	public DIGITS(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.DIGITS, 0);
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.DEFAULT, 0);
	}
	public DIRECTIVE_HIDDEN(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.DIRECTIVE_HIDDEN, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.STRING, 0);
	}
	public enterRule(listener: CSharpPreprocessorParserListener): void {
	    if(listener.enterPreprocessorLine) {
	 		listener.enterPreprocessorLine(this);
		}
	}
	public exitRule(listener: CSharpPreprocessorParserListener): void {
	    if(listener.exitPreprocessorLine) {
	 		listener.exitPreprocessorLine(this);
		}
	}
}


export class Directive_new_line_or_sharpContext extends ParserRuleContext {
	constructor(parser?: CSharpPreprocessorParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DIRECTIVE_NEW_LINE(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.DIRECTIVE_NEW_LINE, 0);
	}
	public EOF(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return CSharpPreprocessorParser.RULE_directive_new_line_or_sharp;
	}
	public enterRule(listener: CSharpPreprocessorParserListener): void {
	    if(listener.enterDirective_new_line_or_sharp) {
	 		listener.enterDirective_new_line_or_sharp(this);
		}
	}
	public exitRule(listener: CSharpPreprocessorParserListener): void {
	    if(listener.exitDirective_new_line_or_sharp) {
	 		listener.exitDirective_new_line_or_sharp(this);
		}
	}
}


export class Preprocessor_expressionContext extends ParserRuleContext {
	public value: String;
	public _expr1!: Preprocessor_expressionContext;
	public _expr!: Preprocessor_expressionContext;
	public _expr2!: Preprocessor_expressionContext;
	constructor(parser?: CSharpPreprocessorParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRUE(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.FALSE, 0);
	}
	public CONDITIONAL_SYMBOL(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.CONDITIONAL_SYMBOL, 0);
	}
	public OPEN_PARENS(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.OPEN_PARENS, 0);
	}
	public CLOSE_PARENS(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.CLOSE_PARENS, 0);
	}
	public preprocessor_expression_list(): Preprocessor_expressionContext[] {
		return this.getTypedRuleContexts(Preprocessor_expressionContext) as Preprocessor_expressionContext[];
	}
	public preprocessor_expression(i: number): Preprocessor_expressionContext {
		return this.getTypedRuleContext(Preprocessor_expressionContext, i) as Preprocessor_expressionContext;
	}
	public BANG(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.BANG, 0);
	}
	public OP_EQ(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.OP_EQ, 0);
	}
	public OP_NE(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.OP_NE, 0);
	}
	public OP_AND(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.OP_AND, 0);
	}
	public OP_OR(): TerminalNode {
		return this.getToken(CSharpPreprocessorParser.OP_OR, 0);
	}
    public get ruleIndex(): number {
    	return CSharpPreprocessorParser.RULE_preprocessor_expression;
	}
	public enterRule(listener: CSharpPreprocessorParserListener): void {
	    if(listener.enterPreprocessor_expression) {
	 		listener.enterPreprocessor_expression(this);
		}
	}
	public exitRule(listener: CSharpPreprocessorParserListener): void {
	    if(listener.exitPreprocessor_expression) {
	 		listener.exitPreprocessor_expression(this);
		}
	}
}
