// Generated from CSharpParser.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
    ATN,
    ATNDeserializer,
    BailErrorStrategy,
    DecisionState,
    DFA,
    FailedPredicateException,
    Interval,
    IntervalSet,
    NoViableAltException,
    Parser,
    ParserATNSimulator,
    ParserRuleContext,
    PredictionContextCache,
    PredictionMode,
    RecognitionException,
    RuleContext,
    RuleNode,
    TerminalNode,
    Token,
    TokenStream
} from 'antlr4';
import CSharpParserListener from "./CSharpParserListener.js";
import {CSharpParserBase} from '../antlrbase/CSharpParserBase';
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class CSharpParser extends CSharpParserBase {
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
    public static readonly RULE_compilation_unit = 0;
    public static readonly RULE_namespace_or_type_name = 1;
    public static readonly RULE_type_ = 2;
    public static readonly RULE_base_type = 3;
    public static readonly RULE_tuple_type = 4;
    public static readonly RULE_tuple_element = 5;
    public static readonly RULE_simple_type = 6;
    public static readonly RULE_numeric_type = 7;
    public static readonly RULE_integral_type = 8;
    public static readonly RULE_floating_point_type = 9;
    public static readonly RULE_class_type = 10;
    public static readonly RULE_type_argument_list = 11;
    public static readonly RULE_argument_list = 12;
    public static readonly RULE_argument = 13;
    public static readonly RULE_expression = 14;
    public static readonly RULE_non_assignment_expression = 15;
    public static readonly RULE_assignment = 16;
    public static readonly RULE_assignment_operator = 17;
    public static readonly RULE_conditional_expression = 18;
    public static readonly RULE_null_coalescing_expression = 19;
    public static readonly RULE_conditional_or_expression = 20;
    public static readonly RULE_conditional_and_expression = 21;
    public static readonly RULE_inclusive_or_expression = 22;
    public static readonly RULE_exclusive_or_expression = 23;
    public static readonly RULE_and_expression = 24;
    public static readonly RULE_equality_expression = 25;
    public static readonly RULE_relational_expression = 26;
    public static readonly RULE_shift_expression = 27;
    public static readonly RULE_additive_expression = 28;
    public static readonly RULE_multiplicative_expression = 29;
    public static readonly RULE_switch_expression = 30;
    public static readonly RULE_switch_expression_arms = 31;
    public static readonly RULE_switch_expression_arm = 32;
    public static readonly RULE_range_expression = 33;
    public static readonly RULE_unary_expression = 34;
    public static readonly RULE_cast_expression = 35;
    public static readonly RULE_primary_expression = 36;
    public static readonly RULE_primary_expression_start = 37;
    public static readonly RULE_throwable_expression = 38;
    public static readonly RULE_throw_expression = 39;
    public static readonly RULE_member_access = 40;
    public static readonly RULE_bracket_expression = 41;
    public static readonly RULE_indexer_argument = 42;
    public static readonly RULE_predefined_type = 43;
    public static readonly RULE_expression_list = 44;
    public static readonly RULE_object_or_collection_initializer = 45;
    public static readonly RULE_object_initializer = 46;
    public static readonly RULE_member_initializer_list = 47;
    public static readonly RULE_member_initializer = 48;
    public static readonly RULE_initializer_value = 49;
    public static readonly RULE_collection_initializer = 50;
    public static readonly RULE_element_initializer = 51;
    public static readonly RULE_anonymous_object_initializer = 52;
    public static readonly RULE_member_declarator_list = 53;
    public static readonly RULE_member_declarator = 54;
    public static readonly RULE_unbound_type_name = 55;
    public static readonly RULE_generic_dimension_specifier = 56;
    public static readonly RULE_isType = 57;
    public static readonly RULE_isTypePatternArms = 58;
    public static readonly RULE_isTypePatternArm = 59;
    public static readonly RULE_lambda_expression = 60;
    public static readonly RULE_anonymous_function_signature = 61;
    public static readonly RULE_explicit_anonymous_function_parameter_list = 62;
    public static readonly RULE_explicit_anonymous_function_parameter = 63;
    public static readonly RULE_implicit_anonymous_function_parameter_list = 64;
    public static readonly RULE_anonymous_function_body = 65;
    public static readonly RULE_query_expression = 66;
    public static readonly RULE_from_clause = 67;
    public static readonly RULE_query_body = 68;
    public static readonly RULE_query_body_clause = 69;
    public static readonly RULE_let_clause = 70;
    public static readonly RULE_where_clause = 71;
    public static readonly RULE_combined_join_clause = 72;
    public static readonly RULE_orderby_clause = 73;
    public static readonly RULE_ordering = 74;
    public static readonly RULE_select_or_group_clause = 75;
    public static readonly RULE_query_continuation = 76;
    public static readonly RULE_statement = 77;
    public static readonly RULE_declarationStatement = 78;
    public static readonly RULE_local_function_declaration = 79;
    public static readonly RULE_local_function_header = 80;
    public static readonly RULE_local_function_modifiers = 81;
    public static readonly RULE_local_function_body = 82;
    public static readonly RULE_labeled_Statement = 83;
    public static readonly RULE_embedded_statement = 84;
    public static readonly RULE_simple_embedded_statement = 85;
    public static readonly RULE_block = 86;
    public static readonly RULE_local_variable_declaration = 87;
    public static readonly RULE_local_variable_type = 88;
    public static readonly RULE_local_variable_declarator = 89;
    public static readonly RULE_local_variable_initializer = 90;
    public static readonly RULE_local_constant_declaration = 91;
    public static readonly RULE_if_body = 92;
    public static readonly RULE_switch_section = 93;
    public static readonly RULE_switch_label = 94;
    public static readonly RULE_case_guard = 95;
    public static readonly RULE_statement_list = 96;
    public static readonly RULE_for_initializer = 97;
    public static readonly RULE_for_iterator = 98;
    public static readonly RULE_catch_clauses = 99;
    public static readonly RULE_specific_catch_clause = 100;
    public static readonly RULE_general_catch_clause = 101;
    public static readonly RULE_exception_filter = 102;
    public static readonly RULE_finally_clause = 103;
    public static readonly RULE_resource_acquisition = 104;
    public static readonly RULE_namespace_declaration = 105;
    public static readonly RULE_qualified_identifier = 106;
    public static readonly RULE_namespace_body = 107;
    public static readonly RULE_extern_alias_directives = 108;
    public static readonly RULE_extern_alias_directive = 109;
    public static readonly RULE_using_directives = 110;
    public static readonly RULE_using_directive = 111;
    public static readonly RULE_namespace_member_declarations = 112;
    public static readonly RULE_namespace_member_declaration = 113;
    public static readonly RULE_type_declaration = 114;
    public static readonly RULE_qualified_alias_member = 115;
    public static readonly RULE_type_parameter_list = 116;
    public static readonly RULE_type_parameter = 117;
    public static readonly RULE_class_base = 118;
    public static readonly RULE_interface_type_list = 119;
    public static readonly RULE_type_parameter_constraints_clauses = 120;
    public static readonly RULE_type_parameter_constraints_clause = 121;
    public static readonly RULE_type_parameter_constraints = 122;
    public static readonly RULE_primary_constraint = 123;
    public static readonly RULE_secondary_constraints = 124;
    public static readonly RULE_constructor_constraint = 125;
    public static readonly RULE_class_body = 126;
    public static readonly RULE_class_member_declarations = 127;
    public static readonly RULE_class_member_declaration = 128;
    public static readonly RULE_all_member_modifiers = 129;
    public static readonly RULE_all_member_modifier = 130;
    public static readonly RULE_common_member_declaration = 131;
    public static readonly RULE_typed_member_declaration = 132;
    public static readonly RULE_constant_declarators = 133;
    public static readonly RULE_constant_declarator = 134;
    public static readonly RULE_variable_declarators = 135;
    public static readonly RULE_variable_declarator = 136;
    public static readonly RULE_variable_initializer = 137;
    public static readonly RULE_return_type = 138;
    public static readonly RULE_member_name = 139;
    public static readonly RULE_method_body = 140;
    public static readonly RULE_formal_parameter_list = 141;
    public static readonly RULE_fixed_parameters = 142;
    public static readonly RULE_fixed_parameter = 143;
    public static readonly RULE_parameter_modifier = 144;
    public static readonly RULE_parameter_array = 145;
    public static readonly RULE_accessor_declarations = 146;
    public static readonly RULE_get_accessor_declaration = 147;
    public static readonly RULE_set_accessor_declaration = 148;
    public static readonly RULE_accessor_modifier = 149;
    public static readonly RULE_accessor_body = 150;
    public static readonly RULE_event_accessor_declarations = 151;
    public static readonly RULE_add_accessor_declaration = 152;
    public static readonly RULE_remove_accessor_declaration = 153;
    public static readonly RULE_overloadable_operator = 154;
    public static readonly RULE_conversion_operator_declarator = 155;
    public static readonly RULE_constructor_initializer = 156;
    public static readonly RULE_body = 157;
    public static readonly RULE_struct_interfaces = 158;
    public static readonly RULE_struct_body = 159;
    public static readonly RULE_struct_member_declaration = 160;
    public static readonly RULE_array_type = 161;
    public static readonly RULE_rank_specifier = 162;
    public static readonly RULE_array_initializer = 163;
    public static readonly RULE_variant_type_parameter_list = 164;
    public static readonly RULE_variant_type_parameter = 165;
    public static readonly RULE_variance_annotation = 166;
    public static readonly RULE_interface_base = 167;
    public static readonly RULE_interface_body = 168;
    public static readonly RULE_interface_member_declaration = 169;
    public static readonly RULE_interface_accessors = 170;
    public static readonly RULE_enum_base = 171;
    public static readonly RULE_enum_body = 172;
    public static readonly RULE_enum_member_declaration = 173;
    public static readonly RULE_global_attribute_section = 174;
    public static readonly RULE_global_attribute_target = 175;
    public static readonly RULE_attributes = 176;
    public static readonly RULE_attribute_section = 177;
    public static readonly RULE_attribute_target = 178;
    public static readonly RULE_attribute_list = 179;
    public static readonly RULE_attribute = 180;
    public static readonly RULE_attribute_argument = 181;
    public static readonly RULE_pointer_type = 182;
    public static readonly RULE_fixed_pointer_declarators = 183;
    public static readonly RULE_fixed_pointer_declarator = 184;
    public static readonly RULE_fixed_pointer_initializer = 185;
    public static readonly RULE_fixed_size_buffer_declarator = 186;
    public static readonly RULE_stackalloc_initializer = 187;
    public static readonly RULE_right_arrow = 188;
    public static readonly RULE_right_shift = 189;
    public static readonly RULE_right_shift_assignment = 190;
    public static readonly RULE_literal = 191;
    public static readonly RULE_boolean_literal = 192;
    public static readonly RULE_string_literal = 193;
    public static readonly RULE_interpolated_regular_string = 194;
    public static readonly RULE_interpolated_verbatium_string = 195;
    public static readonly RULE_interpolated_regular_string_part = 196;
    public static readonly RULE_interpolated_verbatium_string_part = 197;
    public static readonly RULE_interpolated_string_expression = 198;
    public static readonly RULE_keyword = 199;
    public static readonly RULE_class_definition = 200;
    public static readonly RULE_struct_definition = 201;
    public static readonly RULE_interface_definition = 202;
    public static readonly RULE_enum_definition = 203;
    public static readonly RULE_delegate_definition = 204;
    public static readonly RULE_event_declaration = 205;
    public static readonly RULE_field_declaration = 206;
    public static readonly RULE_property_declaration = 207;
    public static readonly RULE_constant_declaration = 208;
    public static readonly RULE_indexer_declaration = 209;
    public static readonly RULE_destructor_definition = 210;
    public static readonly RULE_constructor_declaration = 211;
    public static readonly RULE_method_declaration = 212;
    public static readonly RULE_method_member_name = 213;
    public static readonly RULE_operator_declaration = 214;
    public static readonly RULE_arg_declaration = 215;
    public static readonly RULE_method_invocation = 216;
    public static readonly RULE_object_creation_expression = 217;
    public static readonly RULE_identifier = 218;
    public static readonly literalNames: (string | null)[] = [null, "'\\u00EF\\u00BB\\u00BF'",
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
        null, "'}}'"];
    public static readonly symbolicNames: (string | null)[] = [null, "BYTE_ORDER_MARK",
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
        "TEXT", "DOUBLE_CURLY_CLOSE_INSIDE"];
    // tslint:disable:no-trailing-whitespace
    public static readonly ruleNames: string[] = [
        "compilation_unit", "namespace_or_type_name", "type_", "base_type", "tuple_type",
        "tuple_element", "simple_type", "numeric_type", "integral_type", "floating_point_type",
        "class_type", "type_argument_list", "argument_list", "argument", "expression",
        "non_assignment_expression", "assignment", "assignment_operator", "conditional_expression",
        "null_coalescing_expression", "conditional_or_expression", "conditional_and_expression",
        "inclusive_or_expression", "exclusive_or_expression", "and_expression",
        "equality_expression", "relational_expression", "shift_expression", "additive_expression",
        "multiplicative_expression", "switch_expression", "switch_expression_arms",
        "switch_expression_arm", "range_expression", "unary_expression", "cast_expression",
        "primary_expression", "primary_expression_start", "throwable_expression",
        "throw_expression", "member_access", "bracket_expression", "indexer_argument",
        "predefined_type", "expression_list", "object_or_collection_initializer",
        "object_initializer", "member_initializer_list", "member_initializer",
        "initializer_value", "collection_initializer", "element_initializer",
        "anonymous_object_initializer", "member_declarator_list", "member_declarator",
        "unbound_type_name", "generic_dimension_specifier", "isType", "isTypePatternArms",
        "isTypePatternArm", "lambda_expression", "anonymous_function_signature",
        "explicit_anonymous_function_parameter_list", "explicit_anonymous_function_parameter",
        "implicit_anonymous_function_parameter_list", "anonymous_function_body",
        "query_expression", "from_clause", "query_body", "query_body_clause",
        "let_clause", "where_clause", "combined_join_clause", "orderby_clause",
        "ordering", "select_or_group_clause", "query_continuation", "statement",
        "declarationStatement", "local_function_declaration", "local_function_header",
        "local_function_modifiers", "local_function_body", "labeled_Statement",
        "embedded_statement", "simple_embedded_statement", "block", "local_variable_declaration",
        "local_variable_type", "local_variable_declarator", "local_variable_initializer",
        "local_constant_declaration", "if_body", "switch_section", "switch_label",
        "case_guard", "statement_list", "for_initializer", "for_iterator", "catch_clauses",
        "specific_catch_clause", "general_catch_clause", "exception_filter", "finally_clause",
        "resource_acquisition", "namespace_declaration", "qualified_identifier",
        "namespace_body", "extern_alias_directives", "extern_alias_directive",
        "using_directives", "using_directive", "namespace_member_declarations",
        "namespace_member_declaration", "type_declaration", "qualified_alias_member",
        "type_parameter_list", "type_parameter", "class_base", "interface_type_list",
        "type_parameter_constraints_clauses", "type_parameter_constraints_clause",
        "type_parameter_constraints", "primary_constraint", "secondary_constraints",
        "constructor_constraint", "class_body", "class_member_declarations", "class_member_declaration",
        "all_member_modifiers", "all_member_modifier", "common_member_declaration",
        "typed_member_declaration", "constant_declarators", "constant_declarator",
        "variable_declarators", "variable_declarator", "variable_initializer",
        "return_type", "member_name", "method_body", "formal_parameter_list",
        "fixed_parameters", "fixed_parameter", "parameter_modifier", "parameter_array",
        "accessor_declarations", "get_accessor_declaration", "set_accessor_declaration",
        "accessor_modifier", "accessor_body", "event_accessor_declarations", "add_accessor_declaration",
        "remove_accessor_declaration", "overloadable_operator", "conversion_operator_declarator",
        "constructor_initializer", "body", "struct_interfaces", "struct_body",
        "struct_member_declaration", "array_type", "rank_specifier", "array_initializer",
        "variant_type_parameter_list", "variant_type_parameter", "variance_annotation",
        "interface_base", "interface_body", "interface_member_declaration", "interface_accessors",
        "enum_base", "enum_body", "enum_member_declaration", "global_attribute_section",
        "global_attribute_target", "attributes", "attribute_section", "attribute_target",
        "attribute_list", "attribute", "attribute_argument", "pointer_type", "fixed_pointer_declarators",
        "fixed_pointer_declarator", "fixed_pointer_initializer", "fixed_size_buffer_declarator",
        "stackalloc_initializer", "right_arrow", "right_shift", "right_shift_assignment",
        "literal", "boolean_literal", "string_literal", "interpolated_regular_string",
        "interpolated_verbatium_string", "interpolated_regular_string_part", "interpolated_verbatium_string_part",
        "interpolated_string_expression", "keyword", "class_definition", "struct_definition",
        "interface_definition", "enum_definition", "delegate_definition", "event_declaration",
        "field_declaration", "property_declaration", "constant_declaration", "indexer_declaration",
        "destructor_definition", "constructor_declaration", "method_declaration",
        "method_member_name", "operator_declaration", "arg_declaration", "method_invocation",
        "object_creation_expression", "identifier",
    ];

    public get grammarFileName(): string {
        return "CSharpParser.g4";
    }

    public get literalNames(): (string | null)[] {
        return CSharpParser.literalNames;
    }

    public get symbolicNames(): (string | null)[] {
        return CSharpParser.symbolicNames;
    }

    public get ruleNames(): string[] {
        return CSharpParser.ruleNames;
    }

    public get serializedATN(): number[] {
        return CSharpParser._serializedATN;
    }

    protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
        return new FailedPredicateException(this, predicate, message);
    }

    constructor(input: TokenStream) {
        super(input);
        this._interp = new ParserATNSimulator(this, CSharpParser._ATN, CSharpParser.DecisionsToDFA, new PredictionContextCache());
    }

    // @RuleVersion(0)
    public compilation_unit(): Compilation_unitContext {
        let localctx: Compilation_unitContext = new Compilation_unitContext(this, this._ctx, this.state);
        this.enterRule(localctx, 0, CSharpParser.RULE_compilation_unit);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 439;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 1) {
                    {
                        this.state = 438;
                        this.match(CSharpParser.BYTE_ORDER_MARK);
                    }
                }

                this.state = 442;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 1, this._ctx)) {
                    case 1: {
                        this.state = 441;
                        this.extern_alias_directives();
                    }
                        break;
                }
                this.state = 445;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 105) {
                    {
                        this.state = 444;
                        this.using_directives();
                    }
                }

                this.state = 450;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 447;
                                this.global_attribute_section();
                            }
                        }
                    }
                    this.state = 452;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
                }
                this.state = 454;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2214625792) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 806879249) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 1074399485) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & 1048581) !== 0)) {
                    {
                        this.state = 453;
                        this.namespace_member_declarations();
                    }
                }

                this.state = 456;
                this.match(CSharpParser.EOF);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public namespace_or_type_name(): Namespace_or_type_nameContext {
        let localctx: Namespace_or_type_nameContext = new Namespace_or_type_nameContext(this, this._ctx, this.state);
        this.enterRule(localctx, 2, CSharpParser.RULE_namespace_or_type_name);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 463;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 6, this._ctx)) {
                    case 1: {
                        this.state = 458;
                        this.identifier();
                        this.state = 460;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 5, this._ctx)) {
                            case 1: {
                                this.state = 459;
                                this.type_argument_list();
                            }
                                break;
                        }
                    }
                        break;
                    case 2: {
                        this.state = 462;
                        this.qualified_alias_member();
                    }
                        break;
                }
                this.state = 472;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 465;
                                this.match(CSharpParser.DOT);
                                this.state = 466;
                                this.identifier();
                                this.state = 468;
                                this._errHandler.sync(this);
                                switch (this._interp.adaptivePredict(this._input, 7, this._ctx)) {
                                    case 1: {
                                        this.state = 467;
                                        this.type_argument_list();
                                    }
                                        break;
                                }
                            }
                        }
                    }
                    this.state = 474;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public type_(): Type_Context {
        let localctx: Type_Context = new Type_Context(this, this._ctx, this.state);
        this.enterRule(localctx, 4, CSharpParser.RULE_type_);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 475;
                this.base_type();
                this.state = 481;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 479;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case 148: {
                                    this.state = 476;
                                    this.match(CSharpParser.INTERR);
                                }
                                    break;
                                case 127: {
                                    this.state = 477;
                                    this.rank_specifier();
                                }
                                    break;
                                case 137: {
                                    this.state = 478;
                                    this.match(CSharpParser.STAR);
                                }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 483;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public base_type(): Base_typeContext {
        let localctx: Base_typeContext = new Base_typeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 6, CSharpParser.RULE_base_type);
        try {
            this.state = 489;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 18:
                case 21:
                case 24:
                case 29:
                case 34:
                case 45:
                case 55:
                case 63:
                case 83:
                case 87:
                case 99:
                case 100:
                case 104:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 484;
                    this.simple_type();
                }
                    break;
                case 10:
                case 11:
                case 12:
                case 14:
                case 15:
                case 16:
                case 20:
                case 32:
                case 35:
                case 38:
                case 48:
                case 49:
                case 51:
                case 58:
                case 60:
                case 61:
                case 64:
                case 68:
                case 69:
                case 71:
                case 75:
                case 81:
                case 85:
                case 86:
                case 91:
                case 102:
                case 106:
                case 110:
                case 111:
                case 113:
                case 114:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 485;
                    this.class_type();
                }
                    break;
                case 108:
                    this.enterOuterAlt(localctx, 3);
                {
                    this.state = 486;
                    this.match(CSharpParser.VOID);
                    this.state = 487;
                    this.match(CSharpParser.STAR);
                }
                    break;
                case 129:
                    this.enterOuterAlt(localctx, 4);
                {
                    this.state = 488;
                    this.tuple_type();
                }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public tuple_type(): Tuple_typeContext {
        let localctx: Tuple_typeContext = new Tuple_typeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 8, CSharpParser.RULE_tuple_type);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 491;
                this.match(CSharpParser.OPEN_PARENS);
                this.state = 492;
                this.tuple_element();
                this.state = 495;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 493;
                            this.match(CSharpParser.COMMA);
                            this.state = 494;
                            this.tuple_element();
                        }
                    }
                    this.state = 497;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === 132);
                this.state = 499;
                this.match(CSharpParser.CLOSE_PARENS);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public tuple_element(): Tuple_elementContext {
        let localctx: Tuple_elementContext = new Tuple_elementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 10, CSharpParser.RULE_tuple_element);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 501;
                this.type_();
                this.state = 503;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1170432) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 873136201) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 6424737) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 6929) !== 0)) {
                    {
                        this.state = 502;
                        this.identifier();
                    }
                }

            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public simple_type(): Simple_typeContext {
        let localctx: Simple_typeContext = new Simple_typeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 12, CSharpParser.RULE_simple_type);
        try {
            this.state = 507;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 21:
                case 24:
                case 29:
                case 34:
                case 45:
                case 55:
                case 63:
                case 83:
                case 87:
                case 99:
                case 100:
                case 104:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 505;
                    this.numeric_type();
                }
                    break;
                case 18:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 506;
                    this.match(CSharpParser.BOOL);
                }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public numeric_type(): Numeric_typeContext {
        let localctx: Numeric_typeContext = new Numeric_typeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 14, CSharpParser.RULE_numeric_type);
        try {
            this.state = 512;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 21:
                case 24:
                case 55:
                case 63:
                case 83:
                case 87:
                case 99:
                case 100:
                case 104:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 509;
                    this.integral_type();
                }
                    break;
                case 34:
                case 45:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 510;
                    this.floating_point_type();
                }
                    break;
                case 29:
                    this.enterOuterAlt(localctx, 3);
                {
                    this.state = 511;
                    this.match(CSharpParser.DECIMAL);
                }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public integral_type(): Integral_typeContext {
        let localctx: Integral_typeContext = new Integral_typeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 16, CSharpParser.RULE_integral_type);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 514;
                _la = this._input.LA(1);
                if (!(_la === 21 || _la === 24 || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & 268435713) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 143361) !== 0))) {
                    this._errHandler.recoverInline(this);
                } else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public floating_point_type(): Floating_point_typeContext {
        let localctx: Floating_point_typeContext = new Floating_point_typeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 18, CSharpParser.RULE_floating_point_type);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 516;
                _la = this._input.LA(1);
                if (!(_la === 34 || _la === 45)) {
                    this._errHandler.recoverInline(this);
                } else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public class_type(): Class_typeContext {
        let localctx: Class_typeContext = new Class_typeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 20, CSharpParser.RULE_class_type);
        try {
            this.state = 522;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 16, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 518;
                    this.namespace_or_type_name();
                }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 519;
                    this.match(CSharpParser.OBJECT);
                }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                {
                    this.state = 520;
                    this.match(CSharpParser.DYNAMIC);
                }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                {
                    this.state = 521;
                    this.match(CSharpParser.STRING);
                }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public type_argument_list(): Type_argument_listContext {
        let localctx: Type_argument_listContext = new Type_argument_listContext(this, this._ctx, this.state);
        this.enterRule(localctx, 22, CSharpParser.RULE_type_argument_list);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 524;
                this.match(CSharpParser.LT);
                this.state = 525;
                this.type_();
                this.state = 530;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 132) {
                    {
                        {
                            this.state = 526;
                            this.match(CSharpParser.COMMA);
                            this.state = 527;
                            this.type_();
                        }
                    }
                    this.state = 532;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 533;
                this.match(CSharpParser.GT);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public argument_list(): Argument_listContext {
        let localctx: Argument_listContext = new Argument_listContext(this, this._ctx, this.state);
        this.enterRule(localctx, 24, CSharpParser.RULE_argument_list);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 535;
                this.argument();
                this.state = 540;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 132) {
                    {
                        {
                            this.state = 536;
                            this.match(CSharpParser.COMMA);
                            this.state = 537;
                            this.argument();
                        }
                    }
                    this.state = 542;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public argument(): ArgumentContext {
        let localctx: ArgumentContext = new ArgumentContext(this, this._ctx, this.state);
        this.enterRule(localctx, 26, CSharpParser.RULE_argument);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 546;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 19, this._ctx)) {
                    case 1: {
                        this.state = 543;
                        this.identifier();
                        this.state = 544;
                        this.match(CSharpParser.COLON);
                    }
                        break;
                }
                this.state = 549;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 20, this._ctx)) {
                    case 1: {
                        this.state = 548;
                        localctx._refout = this._input.LT(1);
                        _la = this._input.LA(1);
                        if (!(((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 67371009) !== 0))) {
                            localctx._refout = this._errHandler.recoverInline(this);
                        } else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                        break;
                }
                this.state = 557;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 22, this._ctx)) {
                    case 1: {
                        this.state = 551;
                        this.expression();
                    }
                        break;
                    case 2: {
                        this.state = 554;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 21, this._ctx)) {
                            case 1: {
                                this.state = 552;
                                this.match(CSharpParser.VAR);
                            }
                                break;
                            case 2: {
                                this.state = 553;
                                this.type_();
                            }
                                break;
                        }
                        this.state = 556;
                        this.expression();
                    }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public expression(): ExpressionContext {
        let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 28, CSharpParser.RULE_expression);
        try {
            this.state = 563;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 23, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 559;
                    this.assignment();
                }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 560;
                    this.non_assignment_expression();
                }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                {
                    this.state = 561;
                    this.match(CSharpParser.REF);
                    this.state = 562;
                    this.non_assignment_expression();
                }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public non_assignment_expression(): Non_assignment_expressionContext {
        let localctx: Non_assignment_expressionContext = new Non_assignment_expressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 30, CSharpParser.RULE_non_assignment_expression);
        try {
            this.state = 568;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 24, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 565;
                    this.lambda_expression();
                }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 566;
                    this.query_expression();
                }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                {
                    this.state = 567;
                    this.conditional_expression();
                }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public assignment(): AssignmentContext {
        let localctx: AssignmentContext = new AssignmentContext(this, this._ctx, this.state);
        this.enterRule(localctx, 32, CSharpParser.RULE_assignment);
        try {
            this.state = 578;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 25, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 570;
                    this.unary_expression();
                    this.state = 571;
                    this.assignment_operator();
                    this.state = 572;
                    this.expression();
                }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 574;
                    this.unary_expression();
                    this.state = 575;
                    this.match(CSharpParser.OP_COALESCING_ASSIGNMENT);
                    this.state = 576;
                    this.throwable_expression();
                }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public assignment_operator(): Assignment_operatorContext {
        let localctx: Assignment_operatorContext = new Assignment_operatorContext(this, this._ctx, this.state);
        this.enterRule(localctx, 34, CSharpParser.RULE_assignment_operator);
        try {
            this.state = 591;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 145:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 580;
                    this.match(CSharpParser.ASSIGNMENT);
                }
                    break;
                case 160:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 581;
                    this.match(CSharpParser.OP_ADD_ASSIGNMENT);
                }
                    break;
                case 161:
                    this.enterOuterAlt(localctx, 3);
                {
                    this.state = 582;
                    this.match(CSharpParser.OP_SUB_ASSIGNMENT);
                }
                    break;
                case 162:
                    this.enterOuterAlt(localctx, 4);
                {
                    this.state = 583;
                    this.match(CSharpParser.OP_MULT_ASSIGNMENT);
                }
                    break;
                case 163:
                    this.enterOuterAlt(localctx, 5);
                {
                    this.state = 584;
                    this.match(CSharpParser.OP_DIV_ASSIGNMENT);
                }
                    break;
                case 164:
                    this.enterOuterAlt(localctx, 6);
                {
                    this.state = 585;
                    this.match(CSharpParser.OP_MOD_ASSIGNMENT);
                }
                    break;
                case 165:
                    this.enterOuterAlt(localctx, 7);
                {
                    this.state = 586;
                    this.match(CSharpParser.OP_AND_ASSIGNMENT);
                }
                    break;
                case 166:
                    this.enterOuterAlt(localctx, 8);
                {
                    this.state = 587;
                    this.match(CSharpParser.OP_OR_ASSIGNMENT);
                }
                    break;
                case 167:
                    this.enterOuterAlt(localctx, 9);
                {
                    this.state = 588;
                    this.match(CSharpParser.OP_XOR_ASSIGNMENT);
                }
                    break;
                case 169:
                    this.enterOuterAlt(localctx, 10);
                {
                    this.state = 589;
                    this.match(CSharpParser.OP_LEFT_SHIFT_ASSIGNMENT);
                }
                    break;
                case 147:
                    this.enterOuterAlt(localctx, 11);
                {
                    this.state = 590;
                    this.right_shift_assignment();
                }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public conditional_expression(): Conditional_expressionContext {
        let localctx: Conditional_expressionContext = new Conditional_expressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 36, CSharpParser.RULE_conditional_expression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 593;
                this.null_coalescing_expression();
                this.state = 599;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 27, this._ctx)) {
                    case 1: {
                        this.state = 594;
                        this.match(CSharpParser.INTERR);
                        this.state = 595;
                        this.throwable_expression();
                        this.state = 596;
                        this.match(CSharpParser.COLON);
                        this.state = 597;
                        this.throwable_expression();
                    }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public null_coalescing_expression(): Null_coalescing_expressionContext {
        let localctx: Null_coalescing_expressionContext = new Null_coalescing_expressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 38, CSharpParser.RULE_null_coalescing_expression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 601;
                this.conditional_or_expression();
                this.state = 607;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 29, this._ctx)) {
                    case 1: {
                        this.state = 602;
                        this.match(CSharpParser.OP_COALESCING);
                        this.state = 605;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case 10:
                            case 11:
                            case 12:
                            case 14:
                            case 15:
                            case 16:
                            case 17:
                            case 18:
                            case 20:
                            case 21:
                            case 24:
                            case 25:
                            case 29:
                            case 30:
                            case 31:
                            case 32:
                            case 34:
                            case 35:
                            case 38:
                            case 42:
                            case 45:
                            case 48:
                            case 49:
                            case 51:
                            case 55:
                            case 58:
                            case 60:
                            case 61:
                            case 63:
                            case 64:
                            case 66:
                            case 67:
                            case 68:
                            case 69:
                            case 71:
                            case 75:
                            case 81:
                            case 83:
                            case 85:
                            case 86:
                            case 87:
                            case 88:
                            case 91:
                            case 94:
                            case 96:
                            case 98:
                            case 99:
                            case 100:
                            case 101:
                            case 102:
                            case 104:
                            case 106:
                            case 110:
                            case 111:
                            case 113:
                            case 114:
                            case 115:
                            case 116:
                            case 117:
                            case 118:
                            case 119:
                            case 120:
                            case 121:
                            case 122:
                            case 123:
                            case 124:
                            case 129:
                            case 135:
                            case 136:
                            case 137:
                            case 140:
                            case 142:
                            case 143:
                            case 144:
                            case 151:
                            case 152:
                            case 171: {
                                this.state = 603;
                                this.null_coalescing_expression();
                            }
                                break;
                            case 95: {
                                this.state = 604;
                                this.throw_expression();
                            }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                    }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public conditional_or_expression(): Conditional_or_expressionContext {
        let localctx: Conditional_or_expressionContext = new Conditional_or_expressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 40, CSharpParser.RULE_conditional_or_expression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 609;
                this.conditional_and_expression();
                this.state = 614;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 610;
                                this.match(CSharpParser.OP_OR);
                                this.state = 611;
                                this.conditional_and_expression();
                            }
                        }
                    }
                    this.state = 616;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public conditional_and_expression(): Conditional_and_expressionContext {
        let localctx: Conditional_and_expressionContext = new Conditional_and_expressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 42, CSharpParser.RULE_conditional_and_expression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 617;
                this.inclusive_or_expression();
                this.state = 622;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 618;
                                this.match(CSharpParser.OP_AND);
                                this.state = 619;
                                this.inclusive_or_expression();
                            }
                        }
                    }
                    this.state = 624;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public inclusive_or_expression(): Inclusive_or_expressionContext {
        let localctx: Inclusive_or_expressionContext = new Inclusive_or_expressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 44, CSharpParser.RULE_inclusive_or_expression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 625;
                this.exclusive_or_expression();
                this.state = 630;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 626;
                                this.match(CSharpParser.BITWISE_OR);
                                this.state = 627;
                                this.exclusive_or_expression();
                            }
                        }
                    }
                    this.state = 632;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public exclusive_or_expression(): Exclusive_or_expressionContext {
        let localctx: Exclusive_or_expressionContext = new Exclusive_or_expressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 46, CSharpParser.RULE_exclusive_or_expression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 633;
                this.and_expression();
                this.state = 638;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 33, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 634;
                                this.match(CSharpParser.CARET);
                                this.state = 635;
                                this.and_expression();
                            }
                        }
                    }
                    this.state = 640;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 33, this._ctx);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public and_expression(): And_expressionContext {
        let localctx: And_expressionContext = new And_expressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 48, CSharpParser.RULE_and_expression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 641;
                this.equality_expression();
                this.state = 646;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 34, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 642;
                                this.match(CSharpParser.AMP);
                                this.state = 643;
                                this.equality_expression();
                            }
                        }
                    }
                    this.state = 648;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 34, this._ctx);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public equality_expression(): Equality_expressionContext {
        let localctx: Equality_expressionContext = new Equality_expressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 50, CSharpParser.RULE_equality_expression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 649;
                this.relational_expression();
                this.state = 654;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 35, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 650;
                                _la = this._input.LA(1);
                                if (!(_la === 156 || _la === 157)) {
                                    this._errHandler.recoverInline(this);
                                } else {
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 651;
                                this.relational_expression();
                            }
                        }
                    }
                    this.state = 656;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 35, this._ctx);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public relational_expression(): Relational_expressionContext {
        let localctx: Relational_expressionContext = new Relational_expressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 52, CSharpParser.RULE_relational_expression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 657;
                this.shift_expression();
                this.state = 666;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 664;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case 146:
                                case 147:
                                case 158:
                                case 159: {
                                    this.state = 658;
                                    _la = this._input.LA(1);
                                    if (!(((((_la - 146)) & ~0x1F) === 0 && ((1 << (_la - 146)) & 12291) !== 0))) {
                                        this._errHandler.recoverInline(this);
                                    } else {
                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                    this.state = 659;
                                    this.shift_expression();
                                }
                                    break;
                                case 59: {
                                    this.state = 660;
                                    this.match(CSharpParser.IS);
                                    this.state = 661;
                                    this.isType();
                                }
                                    break;
                                case 13: {
                                    this.state = 662;
                                    this.match(CSharpParser.AS);
                                    this.state = 663;
                                    this.type_();
                                }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 668;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public shift_expression(): Shift_expressionContext {
        let localctx: Shift_expressionContext = new Shift_expressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 54, CSharpParser.RULE_shift_expression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 669;
                this.additive_expression();
                this.state = 677;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 39, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 672;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case 168: {
                                        this.state = 670;
                                        this.match(CSharpParser.OP_LEFT_SHIFT);
                                    }
                                        break;
                                    case 147: {
                                        this.state = 671;
                                        this.right_shift();
                                    }
                                        break;
                                    default:
                                        throw new NoViableAltException(this);
                                }
                                this.state = 674;
                                this.additive_expression();
                            }
                        }
                    }
                    this.state = 679;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 39, this._ctx);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public additive_expression(): Additive_expressionContext {
        let localctx: Additive_expressionContext = new Additive_expressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 56, CSharpParser.RULE_additive_expression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 680;
                this.multiplicative_expression();
                this.state = 685;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 681;
                                _la = this._input.LA(1);
                                if (!(_la === 135 || _la === 136)) {
                                    this._errHandler.recoverInline(this);
                                } else {
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 682;
                                this.multiplicative_expression();
                            }
                        }
                    }
                    this.state = 687;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public multiplicative_expression(): Multiplicative_expressionContext {
        let localctx: Multiplicative_expressionContext = new Multiplicative_expressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 58, CSharpParser.RULE_multiplicative_expression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 688;
                this.switch_expression();
                this.state = 693;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 41, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 689;
                                _la = this._input.LA(1);
                                if (!(((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & 7) !== 0))) {
                                    this._errHandler.recoverInline(this);
                                } else {
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 690;
                                this.switch_expression();
                            }
                        }
                    }
                    this.state = 695;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 41, this._ctx);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public switch_expression(): Switch_expressionContext {
        let localctx: Switch_expressionContext = new Switch_expressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 60, CSharpParser.RULE_switch_expression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 696;
                this.range_expression();
                this.state = 706;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 44, this._ctx)) {
                    case 1: {
                        this.state = 697;
                        this.match(CSharpParser.SWITCH);
                        this.state = 698;
                        this.match(CSharpParser.OPEN_BRACE);
                        this.state = 703;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 326684151) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 795681481) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 2947104097) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 1309179899) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & 536872455) !== 0)) {
                            {
                                this.state = 699;
                                this.switch_expression_arms();
                                this.state = 701;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === 132) {
                                    {
                                        this.state = 700;
                                        this.match(CSharpParser.COMMA);
                                    }
                                }

                            }
                        }

                        this.state = 705;
                        this.match(CSharpParser.CLOSE_BRACE);
                    }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public switch_expression_arms(): Switch_expression_armsContext {
        let localctx: Switch_expression_armsContext = new Switch_expression_armsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 62, CSharpParser.RULE_switch_expression_arms);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 708;
                this.switch_expression_arm();
                this.state = 713;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 45, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 709;
                                this.match(CSharpParser.COMMA);
                                this.state = 710;
                                this.switch_expression_arm();
                            }
                        }
                    }
                    this.state = 715;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 45, this._ctx);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public switch_expression_arm(): Switch_expression_armContext {
        let localctx: Switch_expression_armContext = new Switch_expression_armContext(this, this._ctx, this.state);
        this.enterRule(localctx, 64, CSharpParser.RULE_switch_expression_arm);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 716;
                this.expression();
                this.state = 718;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 110) {
                    {
                        this.state = 717;
                        this.case_guard();
                    }
                }

                this.state = 720;
                this.right_arrow();
                this.state = 721;
                this.throwable_expression();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public range_expression(): Range_expressionContext {
        let localctx: Range_expressionContext = new Range_expressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 66, CSharpParser.RULE_range_expression);
        let _la: number;
        try {
            this.state = 731;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 49, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 723;
                    this.unary_expression();
                }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 725;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3812088832) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3029017677) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1240074429) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 536790397) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 12642753) !== 0)) {
                        {
                            this.state = 724;
                            this.unary_expression();
                        }
                    }

                    this.state = 727;
                    this.match(CSharpParser.OP_RANGE);
                    this.state = 729;
                    this._errHandler.sync(this);
                    switch (this._interp.adaptivePredict(this._input, 48, this._ctx)) {
                        case 1: {
                            this.state = 728;
                            this.unary_expression();
                        }
                            break;
                    }
                }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public unary_expression(): Unary_expressionContext {
        let localctx: Unary_expressionContext = new Unary_expressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 68, CSharpParser.RULE_unary_expression);
        try {
            this.state = 755;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 50, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 733;
                    this.cast_expression();
                }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 734;
                    this.primary_expression();
                }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                {
                    this.state = 735;
                    this.match(CSharpParser.PLUS);
                    this.state = 736;
                    this.unary_expression();
                }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                {
                    this.state = 737;
                    this.match(CSharpParser.MINUS);
                    this.state = 738;
                    this.unary_expression();
                }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                {
                    this.state = 739;
                    this.match(CSharpParser.BANG);
                    this.state = 740;
                    this.unary_expression();
                }
                    break;
                case 6:
                    this.enterOuterAlt(localctx, 6);
                {
                    this.state = 741;
                    this.match(CSharpParser.TILDE);
                    this.state = 742;
                    this.unary_expression();
                }
                    break;
                case 7:
                    this.enterOuterAlt(localctx, 7);
                {
                    this.state = 743;
                    this.match(CSharpParser.OP_INC);
                    this.state = 744;
                    this.unary_expression();
                }
                    break;
                case 8:
                    this.enterOuterAlt(localctx, 8);
                {
                    this.state = 745;
                    this.match(CSharpParser.OP_DEC);
                    this.state = 746;
                    this.unary_expression();
                }
                    break;
                case 9:
                    this.enterOuterAlt(localctx, 9);
                {
                    this.state = 747;
                    this.match(CSharpParser.AWAIT);
                    this.state = 748;
                    this.unary_expression();
                }
                    break;
                case 10:
                    this.enterOuterAlt(localctx, 10);
                {
                    this.state = 749;
                    this.match(CSharpParser.AMP);
                    this.state = 750;
                    this.unary_expression();
                }
                    break;
                case 11:
                    this.enterOuterAlt(localctx, 11);
                {
                    this.state = 751;
                    this.match(CSharpParser.STAR);
                    this.state = 752;
                    this.unary_expression();
                }
                    break;
                case 12:
                    this.enterOuterAlt(localctx, 12);
                {
                    this.state = 753;
                    this.match(CSharpParser.CARET);
                    this.state = 754;
                    this.unary_expression();
                }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public cast_expression(): Cast_expressionContext {
        let localctx: Cast_expressionContext = new Cast_expressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 70, CSharpParser.RULE_cast_expression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 757;
                this.match(CSharpParser.OPEN_PARENS);
                this.state = 758;
                this.type_();
                this.state = 759;
                this.match(CSharpParser.CLOSE_PARENS);
                this.state = 760;
                this.unary_expression();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public primary_expression(): Primary_expressionContext {
        let localctx: Primary_expressionContext = new Primary_expressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 72, CSharpParser.RULE_primary_expression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 762;
                localctx._pe = this.primary_expression_start();
                this.state = 764;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 51, this._ctx)) {
                    case 1: {
                        this.state = 763;
                        this.match(CSharpParser.BANG);
                    }
                        break;
                }
                this.state = 769;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 766;
                                this.bracket_expression();
                            }
                        }
                    }
                    this.state = 771;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
                }
                this.state = 773;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 53, this._ctx)) {
                    case 1: {
                        this.state = 772;
                        this.match(CSharpParser.BANG);
                    }
                        break;
                }
                this.state = 797;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 58, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 781;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case 131:
                                    case 148: {
                                        this.state = 775;
                                        this.member_access();
                                    }
                                        break;
                                    case 129: {
                                        this.state = 776;
                                        this.method_invocation();
                                    }
                                        break;
                                    case 151: {
                                        this.state = 777;
                                        this.match(CSharpParser.OP_INC);
                                    }
                                        break;
                                    case 152: {
                                        this.state = 778;
                                        this.match(CSharpParser.OP_DEC);
                                    }
                                        break;
                                    case 155: {
                                        this.state = 779;
                                        this.match(CSharpParser.OP_PTR);
                                        this.state = 780;
                                        this.identifier();
                                    }
                                        break;
                                    default:
                                        throw new NoViableAltException(this);
                                }
                                this.state = 784;
                                this._errHandler.sync(this);
                                switch (this._interp.adaptivePredict(this._input, 55, this._ctx)) {
                                    case 1: {
                                        this.state = 783;
                                        this.match(CSharpParser.BANG);
                                    }
                                        break;
                                }
                                this.state = 789;
                                this._errHandler.sync(this);
                                _alt = this._interp.adaptivePredict(this._input, 56, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 786;
                                                this.bracket_expression();
                                            }
                                        }
                                    }
                                    this.state = 791;
                                    this._errHandler.sync(this);
                                    _alt = this._interp.adaptivePredict(this._input, 56, this._ctx);
                                }
                                this.state = 793;
                                this._errHandler.sync(this);
                                switch (this._interp.adaptivePredict(this._input, 57, this._ctx)) {
                                    case 1: {
                                        this.state = 792;
                                        this.match(CSharpParser.BANG);
                                    }
                                        break;
                                }
                            }
                        }
                    }
                    this.state = 799;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 58, this._ctx);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public primary_expression_start(): Primary_expression_startContext {
        let localctx: Primary_expression_startContext = new Primary_expression_startContext(this, this._ctx, this.state);
        this.enterRule(localctx, 74, CSharpParser.RULE_primary_expression_start);
        let _la: number;
        try {
            let _alt: number;
            this.state = 921;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 74, this._ctx)) {
                case 1:
                    localctx = new LiteralExpressionContext(this, localctx);
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 800;
                    this.literal();
                }
                    break;
                case 2:
                    localctx = new SimpleNameExpressionContext(this, localctx);
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 801;
                    this.identifier();
                    this.state = 803;
                    this._errHandler.sync(this);
                    switch (this._interp.adaptivePredict(this._input, 59, this._ctx)) {
                        case 1: {
                            this.state = 802;
                            this.type_argument_list();
                        }
                            break;
                    }
                }
                    break;
                case 3:
                    localctx = new ParenthesisExpressionsContext(this, localctx);
                    this.enterOuterAlt(localctx, 3);
                {
                    this.state = 805;
                    this.match(CSharpParser.OPEN_PARENS);
                    this.state = 806;
                    this.expression();
                    this.state = 807;
                    this.match(CSharpParser.CLOSE_PARENS);
                }
                    break;
                case 4:
                    localctx = new MemberAccessExpressionContext(this, localctx);
                    this.enterOuterAlt(localctx, 4);
                {
                    this.state = 809;
                    this.predefined_type();
                }
                    break;
                case 5:
                    localctx = new MemberAccessExpressionContext(this, localctx);
                    this.enterOuterAlt(localctx, 5);
                {
                    this.state = 810;
                    this.qualified_alias_member();
                }
                    break;
                case 6:
                    localctx = new LiteralAccessExpressionContext(this, localctx);
                    this.enterOuterAlt(localctx, 6);
                {
                    this.state = 811;
                    this.match(CSharpParser.LITERAL_ACCESS);
                }
                    break;
                case 7:
                    localctx = new ThisReferenceExpressionContext(this, localctx);
                    this.enterOuterAlt(localctx, 7);
                {
                    this.state = 812;
                    this.match(CSharpParser.THIS);
                }
                    break;
                case 8:
                    localctx = new BaseAccessExpressionContext(this, localctx);
                    this.enterOuterAlt(localctx, 8);
                {
                    this.state = 813;
                    this.match(CSharpParser.BASE);
                    this.state = 823;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case 131: {
                            this.state = 814;
                            this.match(CSharpParser.DOT);
                            this.state = 815;
                            this.identifier();
                            this.state = 817;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 60, this._ctx)) {
                                case 1: {
                                    this.state = 816;
                                    this.type_argument_list();
                                }
                                    break;
                            }
                        }
                            break;
                        case 127: {
                            this.state = 819;
                            this.match(CSharpParser.OPEN_BRACKET);
                            this.state = 820;
                            this.expression_list();
                            this.state = 821;
                            this.match(CSharpParser.CLOSE_BRACKET);
                        }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                }
                    break;
                case 9:
                    localctx = new ObjectCreationExpressionContext(this, localctx);
                    this.enterOuterAlt(localctx, 9);
                {
                    this.state = 825;
                    this.match(CSharpParser.NEW);
                    this.state = 854;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case 10:
                        case 11:
                        case 12:
                        case 14:
                        case 15:
                        case 16:
                        case 18:
                        case 20:
                        case 21:
                        case 24:
                        case 29:
                        case 32:
                        case 34:
                        case 35:
                        case 38:
                        case 45:
                        case 48:
                        case 49:
                        case 51:
                        case 55:
                        case 58:
                        case 60:
                        case 61:
                        case 63:
                        case 64:
                        case 68:
                        case 69:
                        case 71:
                        case 75:
                        case 81:
                        case 83:
                        case 85:
                        case 86:
                        case 87:
                        case 91:
                        case 99:
                        case 100:
                        case 102:
                        case 104:
                        case 106:
                        case 108:
                        case 110:
                        case 111:
                        case 113:
                        case 114:
                        case 129: {
                            this.state = 826;
                            this.type_();
                            this.state = 848;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 65, this._ctx)) {
                                case 1: {
                                    this.state = 827;
                                    this.object_creation_expression();
                                }
                                    break;
                                case 2: {
                                    this.state = 828;
                                    this.object_or_collection_initializer();
                                }
                                    break;
                                case 3: {
                                    this.state = 829;
                                    this.match(CSharpParser.OPEN_BRACKET);
                                    this.state = 830;
                                    this.expression_list();
                                    this.state = 831;
                                    this.match(CSharpParser.CLOSE_BRACKET);
                                    this.state = 835;
                                    this._errHandler.sync(this);
                                    _alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 832;
                                                    this.rank_specifier();
                                                }
                                            }
                                        }
                                        this.state = 837;
                                        this._errHandler.sync(this);
                                        _alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
                                    }
                                    this.state = 839;
                                    this._errHandler.sync(this);
                                    switch (this._interp.adaptivePredict(this._input, 63, this._ctx)) {
                                        case 1: {
                                            this.state = 838;
                                            this.array_initializer();
                                        }
                                            break;
                                    }
                                }
                                    break;
                                case 4: {
                                    this.state = 842;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 841;
                                                this.rank_specifier();
                                            }
                                        }
                                        this.state = 844;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === 127);
                                    this.state = 846;
                                    this.array_initializer();
                                }
                                    break;
                            }
                        }
                            break;
                        case 125: {
                            this.state = 850;
                            this.anonymous_object_initializer();
                        }
                            break;
                        case 127: {
                            this.state = 851;
                            this.rank_specifier();
                            this.state = 852;
                            this.array_initializer();
                        }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                }
                    break;
                case 10:
                    localctx = new TupleExpressionContext(this, localctx);
                    this.enterOuterAlt(localctx, 10);
                {
                    this.state = 856;
                    this.match(CSharpParser.OPEN_PARENS);
                    this.state = 857;
                    this.argument();
                    this.state = 860;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 858;
                                this.match(CSharpParser.COMMA);
                                this.state = 859;
                                this.argument();
                            }
                        }
                        this.state = 862;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === 132);
                    this.state = 864;
                    this.match(CSharpParser.CLOSE_PARENS);
                }
                    break;
                case 11:
                    localctx = new TypeofExpressionContext(this, localctx);
                    this.enterOuterAlt(localctx, 11);
                {
                    this.state = 866;
                    this.match(CSharpParser.TYPEOF);
                    this.state = 867;
                    this.match(CSharpParser.OPEN_PARENS);
                    this.state = 871;
                    this._errHandler.sync(this);
                    switch (this._interp.adaptivePredict(this._input, 68, this._ctx)) {
                        case 1: {
                            this.state = 868;
                            this.unbound_type_name();
                        }
                            break;
                        case 2: {
                            this.state = 869;
                            this.type_();
                        }
                            break;
                        case 3: {
                            this.state = 870;
                            this.match(CSharpParser.VOID);
                        }
                            break;
                    }
                    this.state = 873;
                    this.match(CSharpParser.CLOSE_PARENS);
                }
                    break;
                case 12:
                    localctx = new CheckedExpressionContext(this, localctx);
                    this.enterOuterAlt(localctx, 12);
                {
                    this.state = 874;
                    this.match(CSharpParser.CHECKED);
                    this.state = 875;
                    this.match(CSharpParser.OPEN_PARENS);
                    this.state = 876;
                    this.expression();
                    this.state = 877;
                    this.match(CSharpParser.CLOSE_PARENS);
                }
                    break;
                case 13:
                    localctx = new UncheckedExpressionContext(this, localctx);
                    this.enterOuterAlt(localctx, 13);
                {
                    this.state = 879;
                    this.match(CSharpParser.UNCHECKED);
                    this.state = 880;
                    this.match(CSharpParser.OPEN_PARENS);
                    this.state = 881;
                    this.expression();
                    this.state = 882;
                    this.match(CSharpParser.CLOSE_PARENS);
                }
                    break;
                case 14:
                    localctx = new DefaultValueExpressionContext(this, localctx);
                    this.enterOuterAlt(localctx, 14);
                {
                    this.state = 884;
                    this.match(CSharpParser.DEFAULT);
                    this.state = 889;
                    this._errHandler.sync(this);
                    switch (this._interp.adaptivePredict(this._input, 69, this._ctx)) {
                        case 1: {
                            this.state = 885;
                            this.match(CSharpParser.OPEN_PARENS);
                            this.state = 886;
                            this.type_();
                            this.state = 887;
                            this.match(CSharpParser.CLOSE_PARENS);
                        }
                            break;
                    }
                }
                    break;
                case 15:
                    localctx = new AnonymousMethodExpressionContext(this, localctx);
                    this.enterOuterAlt(localctx, 15);
                {
                    this.state = 892;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === 15) {
                        {
                            this.state = 891;
                            this.match(CSharpParser.ASYNC);
                        }
                    }

                    this.state = 894;
                    this.match(CSharpParser.DELEGATE);
                    this.state = 900;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === 129) {
                        {
                            this.state = 895;
                            this.match(CSharpParser.OPEN_PARENS);
                            this.state = 897;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 557177856) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3033210957) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 149621169) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 1073797803) !== 0)) {
                                {
                                    this.state = 896;
                                    this.explicit_anonymous_function_parameter_list();
                                }
                            }

                            this.state = 899;
                            this.match(CSharpParser.CLOSE_PARENS);
                        }
                    }

                    this.state = 902;
                    this.block();
                }
                    break;
                case 16:
                    localctx = new SizeofExpressionContext(this, localctx);
                    this.enterOuterAlt(localctx, 16);
                {
                    this.state = 903;
                    this.match(CSharpParser.SIZEOF);
                    this.state = 904;
                    this.match(CSharpParser.OPEN_PARENS);
                    this.state = 905;
                    this.type_();
                    this.state = 906;
                    this.match(CSharpParser.CLOSE_PARENS);
                }
                    break;
                case 17:
                    localctx = new NameofExpressionContext(this, localctx);
                    this.enterOuterAlt(localctx, 17);
                {
                    this.state = 908;
                    this.match(CSharpParser.NAMEOF);
                    this.state = 909;
                    this.match(CSharpParser.OPEN_PARENS);
                    this.state = 915;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 73, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 910;
                                    this.identifier();
                                    this.state = 911;
                                    this.match(CSharpParser.DOT);
                                }
                            }
                        }
                        this.state = 917;
                        this._errHandler.sync(this);
                        _alt = this._interp.adaptivePredict(this._input, 73, this._ctx);
                    }
                    this.state = 918;
                    this.identifier();
                    this.state = 919;
                    this.match(CSharpParser.CLOSE_PARENS);
                }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public throwable_expression(): Throwable_expressionContext {
        let localctx: Throwable_expressionContext = new Throwable_expressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 76, CSharpParser.RULE_throwable_expression);
        try {
            this.state = 925;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 10:
                case 11:
                case 12:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 20:
                case 21:
                case 24:
                case 25:
                case 29:
                case 30:
                case 31:
                case 32:
                case 34:
                case 35:
                case 38:
                case 42:
                case 45:
                case 48:
                case 49:
                case 51:
                case 55:
                case 58:
                case 60:
                case 61:
                case 63:
                case 64:
                case 66:
                case 67:
                case 68:
                case 69:
                case 71:
                case 75:
                case 80:
                case 81:
                case 83:
                case 85:
                case 86:
                case 87:
                case 88:
                case 91:
                case 94:
                case 96:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 104:
                case 106:
                case 110:
                case 111:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                case 123:
                case 124:
                case 129:
                case 135:
                case 136:
                case 137:
                case 140:
                case 142:
                case 143:
                case 144:
                case 151:
                case 152:
                case 171:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 923;
                    this.expression();
                }
                    break;
                case 95:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 924;
                    this.throw_expression();
                }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public throw_expression(): Throw_expressionContext {
        let localctx: Throw_expressionContext = new Throw_expressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 78, CSharpParser.RULE_throw_expression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 927;
                this.match(CSharpParser.THROW);
                this.state = 928;
                this.expression();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public member_access(): Member_accessContext {
        let localctx: Member_accessContext = new Member_accessContext(this, this._ctx, this.state);
        this.enterRule(localctx, 80, CSharpParser.RULE_member_access);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 931;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 148) {
                    {
                        this.state = 930;
                        this.match(CSharpParser.INTERR);
                    }
                }

                this.state = 933;
                this.match(CSharpParser.DOT);
                this.state = 934;
                this.identifier();
                this.state = 936;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 77, this._ctx)) {
                    case 1: {
                        this.state = 935;
                        this.type_argument_list();
                    }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public bracket_expression(): Bracket_expressionContext {
        let localctx: Bracket_expressionContext = new Bracket_expressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 82, CSharpParser.RULE_bracket_expression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 939;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 148) {
                    {
                        this.state = 938;
                        this.match(CSharpParser.INTERR);
                    }
                }

                this.state = 941;
                this.match(CSharpParser.OPEN_BRACKET);
                this.state = 942;
                this.indexer_argument();
                this.state = 947;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 132) {
                    {
                        {
                            this.state = 943;
                            this.match(CSharpParser.COMMA);
                            this.state = 944;
                            this.indexer_argument();
                        }
                    }
                    this.state = 949;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 950;
                this.match(CSharpParser.CLOSE_BRACKET);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public indexer_argument(): Indexer_argumentContext {
        let localctx: Indexer_argumentContext = new Indexer_argumentContext(this, this._ctx, this.state);
        this.enterRule(localctx, 84, CSharpParser.RULE_indexer_argument);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 955;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 80, this._ctx)) {
                    case 1: {
                        this.state = 952;
                        this.identifier();
                        this.state = 953;
                        this.match(CSharpParser.COLON);
                    }
                        break;
                }
                this.state = 957;
                this.expression();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public predefined_type(): Predefined_typeContext {
        let localctx: Predefined_typeContext = new Predefined_typeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 86, CSharpParser.RULE_predefined_type);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 959;
                _la = this._input.LA(1);
                if (!(((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & 134285385) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & 268443905) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 143377) !== 0))) {
                    this._errHandler.recoverInline(this);
                } else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public expression_list(): Expression_listContext {
        let localctx: Expression_listContext = new Expression_listContext(this, this._ctx, this.state);
        this.enterRule(localctx, 88, CSharpParser.RULE_expression_list);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 961;
                this.expression();
                this.state = 966;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 132) {
                    {
                        {
                            this.state = 962;
                            this.match(CSharpParser.COMMA);
                            this.state = 963;
                            this.expression();
                        }
                    }
                    this.state = 968;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public object_or_collection_initializer(): Object_or_collection_initializerContext {
        let localctx: Object_or_collection_initializerContext = new Object_or_collection_initializerContext(this, this._ctx, this.state);
        this.enterRule(localctx, 90, CSharpParser.RULE_object_or_collection_initializer);
        try {
            this.state = 971;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 82, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 969;
                    this.object_initializer();
                }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 970;
                    this.collection_initializer();
                }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public object_initializer(): Object_initializerContext {
        let localctx: Object_initializerContext = new Object_initializerContext(this, this._ctx, this.state);
        this.enterRule(localctx, 92, CSharpParser.RULE_object_initializer);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 973;
                this.match(CSharpParser.OPEN_BRACE);
                this.state = 978;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1170432) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 873136201) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 6424737) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 33561361) !== 0)) {
                    {
                        this.state = 974;
                        this.member_initializer_list();
                        this.state = 976;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 132) {
                            {
                                this.state = 975;
                                this.match(CSharpParser.COMMA);
                            }
                        }

                    }
                }

                this.state = 980;
                this.match(CSharpParser.CLOSE_BRACE);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public member_initializer_list(): Member_initializer_listContext {
        let localctx: Member_initializer_listContext = new Member_initializer_listContext(this, this._ctx, this.state);
        this.enterRule(localctx, 94, CSharpParser.RULE_member_initializer_list);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 982;
                this.member_initializer();
                this.state = 987;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 85, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 983;
                                this.match(CSharpParser.COMMA);
                                this.state = 984;
                                this.member_initializer();
                            }
                        }
                    }
                    this.state = 989;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 85, this._ctx);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public member_initializer(): Member_initializerContext {
        let localctx: Member_initializerContext = new Member_initializerContext(this, this._ctx, this.state);
        this.enterRule(localctx, 96, CSharpParser.RULE_member_initializer);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 995;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 10:
                    case 11:
                    case 12:
                    case 14:
                    case 15:
                    case 16:
                    case 20:
                    case 32:
                    case 35:
                    case 38:
                    case 48:
                    case 49:
                    case 51:
                    case 58:
                    case 60:
                    case 61:
                    case 64:
                    case 69:
                    case 71:
                    case 75:
                    case 81:
                    case 85:
                    case 86:
                    case 102:
                    case 106:
                    case 110:
                    case 111:
                    case 113:
                    case 114: {
                        this.state = 990;
                        this.identifier();
                    }
                        break;
                    case 127: {
                        this.state = 991;
                        this.match(CSharpParser.OPEN_BRACKET);
                        this.state = 992;
                        this.expression();
                        this.state = 993;
                        this.match(CSharpParser.CLOSE_BRACKET);
                    }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
                this.state = 997;
                this.match(CSharpParser.ASSIGNMENT);
                this.state = 998;
                this.initializer_value();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public initializer_value(): Initializer_valueContext {
        let localctx: Initializer_valueContext = new Initializer_valueContext(this, this._ctx, this.state);
        this.enterRule(localctx, 98, CSharpParser.RULE_initializer_value);
        try {
            this.state = 1002;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 10:
                case 11:
                case 12:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 20:
                case 21:
                case 24:
                case 25:
                case 29:
                case 30:
                case 31:
                case 32:
                case 34:
                case 35:
                case 38:
                case 42:
                case 45:
                case 48:
                case 49:
                case 51:
                case 55:
                case 58:
                case 60:
                case 61:
                case 63:
                case 64:
                case 66:
                case 67:
                case 68:
                case 69:
                case 71:
                case 75:
                case 80:
                case 81:
                case 83:
                case 85:
                case 86:
                case 87:
                case 88:
                case 91:
                case 94:
                case 96:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 104:
                case 106:
                case 110:
                case 111:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                case 123:
                case 124:
                case 129:
                case 135:
                case 136:
                case 137:
                case 140:
                case 142:
                case 143:
                case 144:
                case 151:
                case 152:
                case 171:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1000;
                    this.expression();
                }
                    break;
                case 125:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1001;
                    this.object_or_collection_initializer();
                }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public collection_initializer(): Collection_initializerContext {
        let localctx: Collection_initializerContext = new Collection_initializerContext(this, this._ctx, this.state);
        this.enterRule(localctx, 100, CSharpParser.RULE_collection_initializer);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1004;
                this.match(CSharpParser.OPEN_BRACE);
                this.state = 1005;
                this.element_initializer();
                this.state = 1010;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 88, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1006;
                                this.match(CSharpParser.COMMA);
                                this.state = 1007;
                                this.element_initializer();
                            }
                        }
                    }
                    this.state = 1012;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 88, this._ctx);
                }
                this.state = 1014;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 132) {
                    {
                        this.state = 1013;
                        this.match(CSharpParser.COMMA);
                    }
                }

                this.state = 1016;
                this.match(CSharpParser.CLOSE_BRACE);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public element_initializer(): Element_initializerContext {
        let localctx: Element_initializerContext = new Element_initializerContext(this, this._ctx, this.state);
        this.enterRule(localctx, 102, CSharpParser.RULE_element_initializer);
        try {
            this.state = 1023;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 10:
                case 11:
                case 12:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 20:
                case 21:
                case 24:
                case 25:
                case 29:
                case 30:
                case 31:
                case 32:
                case 34:
                case 35:
                case 38:
                case 42:
                case 45:
                case 48:
                case 49:
                case 51:
                case 55:
                case 58:
                case 60:
                case 61:
                case 63:
                case 64:
                case 66:
                case 67:
                case 68:
                case 69:
                case 71:
                case 75:
                case 81:
                case 83:
                case 85:
                case 86:
                case 87:
                case 88:
                case 91:
                case 94:
                case 96:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 104:
                case 106:
                case 110:
                case 111:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                case 123:
                case 124:
                case 129:
                case 135:
                case 136:
                case 137:
                case 140:
                case 142:
                case 143:
                case 144:
                case 151:
                case 152:
                case 171:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1018;
                    this.non_assignment_expression();
                }
                    break;
                case 125:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1019;
                    this.match(CSharpParser.OPEN_BRACE);
                    this.state = 1020;
                    this.expression_list();
                    this.state = 1021;
                    this.match(CSharpParser.CLOSE_BRACE);
                }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public anonymous_object_initializer(): Anonymous_object_initializerContext {
        let localctx: Anonymous_object_initializerContext = new Anonymous_object_initializerContext(this, this._ctx, this.state);
        this.enterRule(localctx, 104, CSharpParser.RULE_anonymous_object_initializer);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1025;
                this.match(CSharpParser.OPEN_BRACE);
                this.state = 1030;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 326684151) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 795681481) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 2947104065) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 557051) !== 0)) {
                    {
                        this.state = 1026;
                        this.member_declarator_list();
                        this.state = 1028;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 132) {
                            {
                                this.state = 1027;
                                this.match(CSharpParser.COMMA);
                            }
                        }

                    }
                }

                this.state = 1032;
                this.match(CSharpParser.CLOSE_BRACE);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public member_declarator_list(): Member_declarator_listContext {
        let localctx: Member_declarator_listContext = new Member_declarator_listContext(this, this._ctx, this.state);
        this.enterRule(localctx, 106, CSharpParser.RULE_member_declarator_list);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1034;
                this.member_declarator();
                this.state = 1039;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 93, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1035;
                                this.match(CSharpParser.COMMA);
                                this.state = 1036;
                                this.member_declarator();
                            }
                        }
                    }
                    this.state = 1041;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 93, this._ctx);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public member_declarator(): Member_declaratorContext {
        let localctx: Member_declaratorContext = new Member_declaratorContext(this, this._ctx, this.state);
        this.enterRule(localctx, 108, CSharpParser.RULE_member_declarator);
        try {
            this.state = 1047;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 94, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1042;
                    this.primary_expression();
                }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1043;
                    this.identifier();
                    this.state = 1044;
                    this.match(CSharpParser.ASSIGNMENT);
                    this.state = 1045;
                    this.expression();
                }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public unbound_type_name(): Unbound_type_nameContext {
        let localctx: Unbound_type_nameContext = new Unbound_type_nameContext(this, this._ctx, this.state);
        this.enterRule(localctx, 110, CSharpParser.RULE_unbound_type_name);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1049;
                this.identifier();
                this.state = 1058;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 130:
                    case 131:
                    case 146: {
                        this.state = 1051;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 146) {
                            {
                                this.state = 1050;
                                this.generic_dimension_specifier();
                            }
                        }

                    }
                        break;
                    case 149: {
                        this.state = 1053;
                        this.match(CSharpParser.DOUBLE_COLON);
                        this.state = 1054;
                        this.identifier();
                        this.state = 1056;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 146) {
                            {
                                this.state = 1055;
                                this.generic_dimension_specifier();
                            }
                        }

                    }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
                this.state = 1067;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 131) {
                    {
                        {
                            this.state = 1060;
                            this.match(CSharpParser.DOT);
                            this.state = 1061;
                            this.identifier();
                            this.state = 1063;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === 146) {
                                {
                                    this.state = 1062;
                                    this.generic_dimension_specifier();
                                }
                            }

                        }
                    }
                    this.state = 1069;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public generic_dimension_specifier(): Generic_dimension_specifierContext {
        let localctx: Generic_dimension_specifierContext = new Generic_dimension_specifierContext(this, this._ctx, this.state);
        this.enterRule(localctx, 112, CSharpParser.RULE_generic_dimension_specifier);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1070;
                this.match(CSharpParser.LT);
                this.state = 1074;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 132) {
                    {
                        {
                            this.state = 1071;
                            this.match(CSharpParser.COMMA);
                        }
                    }
                    this.state = 1076;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1077;
                this.match(CSharpParser.GT);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public isType(): IsTypeContext {
        let localctx: IsTypeContext = new IsTypeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 114, CSharpParser.RULE_isType);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1079;
                this.base_type();
                this.state = 1084;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 102, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 1082;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case 127: {
                                    this.state = 1080;
                                    this.rank_specifier();
                                }
                                    break;
                                case 137: {
                                    this.state = 1081;
                                    this.match(CSharpParser.STAR);
                                }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 1086;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 102, this._ctx);
                }
                this.state = 1088;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 103, this._ctx)) {
                    case 1: {
                        this.state = 1087;
                        this.match(CSharpParser.INTERR);
                    }
                        break;
                }
                this.state = 1091;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 104, this._ctx)) {
                    case 1: {
                        this.state = 1090;
                        this.isTypePatternArms();
                    }
                        break;
                }
                this.state = 1094;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 105, this._ctx)) {
                    case 1: {
                        this.state = 1093;
                        this.identifier();
                    }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public isTypePatternArms(): IsTypePatternArmsContext {
        let localctx: IsTypePatternArmsContext = new IsTypePatternArmsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 116, CSharpParser.RULE_isTypePatternArms);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1096;
                this.match(CSharpParser.OPEN_BRACE);
                this.state = 1097;
                this.isTypePatternArm();
                this.state = 1102;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 132) {
                    {
                        {
                            this.state = 1098;
                            this.match(CSharpParser.COMMA);
                            this.state = 1099;
                            this.isTypePatternArm();
                        }
                    }
                    this.state = 1104;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1105;
                this.match(CSharpParser.CLOSE_BRACE);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public isTypePatternArm(): IsTypePatternArmContext {
        let localctx: IsTypePatternArmContext = new IsTypePatternArmContext(this, this._ctx, this.state);
        this.enterRule(localctx, 118, CSharpParser.RULE_isTypePatternArm);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1107;
                this.identifier();
                this.state = 1108;
                this.match(CSharpParser.COLON);
                this.state = 1109;
                this.expression();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public lambda_expression(): Lambda_expressionContext {
        let localctx: Lambda_expressionContext = new Lambda_expressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 120, CSharpParser.RULE_lambda_expression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1112;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 107, this._ctx)) {
                    case 1: {
                        this.state = 1111;
                        this.match(CSharpParser.ASYNC);
                    }
                        break;
                }
                this.state = 1114;
                this.anonymous_function_signature();
                this.state = 1115;
                this.right_arrow();
                this.state = 1116;
                this.anonymous_function_body();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public anonymous_function_signature(): Anonymous_function_signatureContext {
        let localctx: Anonymous_function_signatureContext = new Anonymous_function_signatureContext(this, this._ctx, this.state);
        this.enterRule(localctx, 122, CSharpParser.RULE_anonymous_function_signature);
        try {
            this.state = 1129;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 108, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1118;
                    this.match(CSharpParser.OPEN_PARENS);
                    this.state = 1119;
                    this.match(CSharpParser.CLOSE_PARENS);
                }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1120;
                    this.match(CSharpParser.OPEN_PARENS);
                    this.state = 1121;
                    this.explicit_anonymous_function_parameter_list();
                    this.state = 1122;
                    this.match(CSharpParser.CLOSE_PARENS);
                }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                {
                    this.state = 1124;
                    this.match(CSharpParser.OPEN_PARENS);
                    this.state = 1125;
                    this.implicit_anonymous_function_parameter_list();
                    this.state = 1126;
                    this.match(CSharpParser.CLOSE_PARENS);
                }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                {
                    this.state = 1128;
                    this.identifier();
                }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public explicit_anonymous_function_parameter_list(): Explicit_anonymous_function_parameter_listContext {
        let localctx: Explicit_anonymous_function_parameter_listContext = new Explicit_anonymous_function_parameter_listContext(this, this._ctx, this.state);
        this.enterRule(localctx, 124, CSharpParser.RULE_explicit_anonymous_function_parameter_list);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1131;
                this.explicit_anonymous_function_parameter();
                this.state = 1136;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 132) {
                    {
                        {
                            this.state = 1132;
                            this.match(CSharpParser.COMMA);
                            this.state = 1133;
                            this.explicit_anonymous_function_parameter();
                        }
                    }
                    this.state = 1138;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public explicit_anonymous_function_parameter(): Explicit_anonymous_function_parameterContext {
        let localctx: Explicit_anonymous_function_parameterContext = new Explicit_anonymous_function_parameterContext(this, this._ctx, this.state);
        this.enterRule(localctx, 126, CSharpParser.RULE_explicit_anonymous_function_parameter);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1140;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 67371009) !== 0)) {
                    {
                        this.state = 1139;
                        localctx._refout = this._input.LT(1);
                        _la = this._input.LA(1);
                        if (!(((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 67371009) !== 0))) {
                            localctx._refout = this._errHandler.recoverInline(this);
                        } else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }

                this.state = 1142;
                this.type_();
                this.state = 1143;
                this.identifier();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public implicit_anonymous_function_parameter_list(): Implicit_anonymous_function_parameter_listContext {
        let localctx: Implicit_anonymous_function_parameter_listContext = new Implicit_anonymous_function_parameter_listContext(this, this._ctx, this.state);
        this.enterRule(localctx, 128, CSharpParser.RULE_implicit_anonymous_function_parameter_list);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1145;
                this.identifier();
                this.state = 1150;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 132) {
                    {
                        {
                            this.state = 1146;
                            this.match(CSharpParser.COMMA);
                            this.state = 1147;
                            this.identifier();
                        }
                    }
                    this.state = 1152;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public anonymous_function_body(): Anonymous_function_bodyContext {
        let localctx: Anonymous_function_bodyContext = new Anonymous_function_bodyContext(this, this._ctx, this.state);
        this.enterRule(localctx, 130, CSharpParser.RULE_anonymous_function_body);
        try {
            this.state = 1155;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 10:
                case 11:
                case 12:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 20:
                case 21:
                case 24:
                case 25:
                case 29:
                case 30:
                case 31:
                case 32:
                case 34:
                case 35:
                case 38:
                case 42:
                case 45:
                case 48:
                case 49:
                case 51:
                case 55:
                case 58:
                case 60:
                case 61:
                case 63:
                case 64:
                case 66:
                case 67:
                case 68:
                case 69:
                case 71:
                case 75:
                case 80:
                case 81:
                case 83:
                case 85:
                case 86:
                case 87:
                case 88:
                case 91:
                case 94:
                case 95:
                case 96:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 104:
                case 106:
                case 110:
                case 111:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                case 123:
                case 124:
                case 129:
                case 135:
                case 136:
                case 137:
                case 140:
                case 142:
                case 143:
                case 144:
                case 151:
                case 152:
                case 171:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1153;
                    this.throwable_expression();
                }
                    break;
                case 125:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1154;
                    this.block();
                }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public query_expression(): Query_expressionContext {
        let localctx: Query_expressionContext = new Query_expressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 132, CSharpParser.RULE_query_expression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1157;
                this.from_clause();
                this.state = 1158;
                this.query_body();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public from_clause(): From_clauseContext {
        let localctx: From_clauseContext = new From_clauseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 134, CSharpParser.RULE_from_clause);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1160;
                this.match(CSharpParser.FROM);
                this.state = 1162;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 113, this._ctx)) {
                    case 1: {
                        this.state = 1161;
                        this.type_();
                    }
                        break;
                }
                this.state = 1164;
                this.identifier();
                this.state = 1165;
                this.match(CSharpParser.IN);
                this.state = 1166;
                this.expression();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public query_body(): Query_bodyContext {
        let localctx: Query_bodyContext = new Query_bodyContext(this, this._ctx, this.state);
        this.enterRule(localctx, 136, CSharpParser.RULE_query_body);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1171;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 8400897) !== 0) || _la === 111) {
                    {
                        {
                            this.state = 1168;
                            this.query_body_clause();
                        }
                    }
                    this.state = 1173;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1174;
                this.select_or_group_clause();
                this.state = 1176;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 115, this._ctx)) {
                    case 1: {
                        this.state = 1175;
                        this.query_continuation();
                    }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public query_body_clause(): Query_body_clauseContext {
        let localctx: Query_body_clauseContext = new Query_body_clauseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 138, CSharpParser.RULE_query_body_clause);
        try {
            this.state = 1183;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 48:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1178;
                    this.from_clause();
                }
                    break;
                case 61:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1179;
                    this.let_clause();
                }
                    break;
                case 111:
                    this.enterOuterAlt(localctx, 3);
                {
                    this.state = 1180;
                    this.where_clause();
                }
                    break;
                case 60:
                    this.enterOuterAlt(localctx, 4);
                {
                    this.state = 1181;
                    this.combined_join_clause();
                }
                    break;
                case 71:
                    this.enterOuterAlt(localctx, 5);
                {
                    this.state = 1182;
                    this.orderby_clause();
                }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public let_clause(): Let_clauseContext {
        let localctx: Let_clauseContext = new Let_clauseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 140, CSharpParser.RULE_let_clause);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1185;
                this.match(CSharpParser.LET);
                this.state = 1186;
                this.identifier();
                this.state = 1187;
                this.match(CSharpParser.ASSIGNMENT);
                this.state = 1188;
                this.expression();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public where_clause(): Where_clauseContext {
        let localctx: Where_clauseContext = new Where_clauseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 142, CSharpParser.RULE_where_clause);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1190;
                this.match(CSharpParser.WHERE);
                this.state = 1191;
                this.expression();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public combined_join_clause(): Combined_join_clauseContext {
        let localctx: Combined_join_clauseContext = new Combined_join_clauseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 144, CSharpParser.RULE_combined_join_clause);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1193;
                this.match(CSharpParser.JOIN);
                this.state = 1195;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 117, this._ctx)) {
                    case 1: {
                        this.state = 1194;
                        this.type_();
                    }
                        break;
                }
                this.state = 1197;
                this.identifier();
                this.state = 1198;
                this.match(CSharpParser.IN);
                this.state = 1199;
                this.expression();
                this.state = 1200;
                this.match(CSharpParser.ON);
                this.state = 1201;
                this.expression();
                this.state = 1202;
                this.match(CSharpParser.EQUALS);
                this.state = 1203;
                this.expression();
                this.state = 1206;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 58) {
                    {
                        this.state = 1204;
                        this.match(CSharpParser.INTO);
                        this.state = 1205;
                        this.identifier();
                    }
                }

            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public orderby_clause(): Orderby_clauseContext {
        let localctx: Orderby_clauseContext = new Orderby_clauseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 146, CSharpParser.RULE_orderby_clause);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1208;
                this.match(CSharpParser.ORDERBY);
                this.state = 1209;
                this.ordering();
                this.state = 1214;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 132) {
                    {
                        {
                            this.state = 1210;
                            this.match(CSharpParser.COMMA);
                            this.state = 1211;
                            this.ordering();
                        }
                    }
                    this.state = 1216;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public ordering(): OrderingContext {
        let localctx: OrderingContext = new OrderingContext(this, this._ctx, this.state);
        this.enterRule(localctx, 148, CSharpParser.RULE_ordering);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1217;
                this.expression();
                this.state = 1219;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 14 || _la === 32) {
                    {
                        this.state = 1218;
                        localctx._dir = this._input.LT(1);
                        _la = this._input.LA(1);
                        if (!(_la === 14 || _la === 32)) {
                            localctx._dir = this._errHandler.recoverInline(this);
                        } else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }

            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public select_or_group_clause(): Select_or_group_clauseContext {
        let localctx: Select_or_group_clauseContext = new Select_or_group_clauseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 150, CSharpParser.RULE_select_or_group_clause);
        try {
            this.state = 1228;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 85:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1221;
                    this.match(CSharpParser.SELECT);
                    this.state = 1222;
                    this.expression();
                }
                    break;
                case 51:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1223;
                    this.match(CSharpParser.GROUP);
                    this.state = 1224;
                    this.expression();
                    this.state = 1225;
                    this.match(CSharpParser.BY);
                    this.state = 1226;
                    this.expression();
                }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public query_continuation(): Query_continuationContext {
        let localctx: Query_continuationContext = new Query_continuationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 152, CSharpParser.RULE_query_continuation);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1230;
                this.match(CSharpParser.INTO);
                this.state = 1231;
                this.identifier();
                this.state = 1232;
                this.query_body();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public statement(): StatementContext {
        let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 154, CSharpParser.RULE_statement);
        try {
            this.state = 1237;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 122, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1234;
                    this.labeled_Statement();
                }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1235;
                    this.declarationStatement();
                }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                {
                    this.state = 1236;
                    this.embedded_statement();
                }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public declarationStatement(): DeclarationStatementContext {
        let localctx: DeclarationStatementContext = new DeclarationStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 156, CSharpParser.RULE_declarationStatement);
        try {
            this.state = 1246;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 123, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1239;
                    this.local_variable_declaration();
                    this.state = 1240;
                    this.match(CSharpParser.SEMICOLON);
                }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1242;
                    this.local_constant_declaration();
                    this.state = 1243;
                    this.match(CSharpParser.SEMICOLON);
                }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                {
                    this.state = 1245;
                    this.local_function_declaration();
                }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public local_function_declaration(): Local_function_declarationContext {
        let localctx: Local_function_declarationContext = new Local_function_declarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 158, CSharpParser.RULE_local_function_declaration);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1248;
                this.local_function_header();
                this.state = 1249;
                this.local_function_body();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public local_function_header(): Local_function_headerContext {
        let localctx: Local_function_headerContext = new Local_function_headerContext(this, this._ctx, this.state);
        this.enterRule(localctx, 160, CSharpParser.RULE_local_function_header);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1252;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 124, this._ctx)) {
                    case 1: {
                        this.state = 1251;
                        this.local_function_modifiers();
                    }
                        break;
                }
                this.state = 1254;
                this.return_type();
                this.state = 1255;
                this.identifier();
                this.state = 1257;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 146) {
                    {
                        this.state = 1256;
                        this.type_parameter_list();
                    }
                }

                this.state = 1259;
                this.match(CSharpParser.OPEN_PARENS);
                this.state = 1261;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 557177856) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3033210957) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1223364017) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 1342233259) !== 0)) {
                    {
                        this.state = 1260;
                        this.formal_parameter_list();
                    }
                }

                this.state = 1263;
                this.match(CSharpParser.CLOSE_PARENS);
                this.state = 1265;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 111) {
                    {
                        this.state = 1264;
                        this.type_parameter_constraints_clauses();
                    }
                }

            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public local_function_modifiers(): Local_function_modifiersContext {
        let localctx: Local_function_modifiersContext = new Local_function_modifiersContext(this, this._ctx, this.state);
        this.enterRule(localctx, 162, CSharpParser.RULE_local_function_modifiers);
        let _la: number;
        try {
            this.state = 1273;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 15:
                case 103:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1267;
                    _la = this._input.LA(1);
                    if (!(_la === 15 || _la === 103)) {
                        this._errHandler.recoverInline(this);
                    } else {
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 1269;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === 90) {
                        {
                            this.state = 1268;
                            this.match(CSharpParser.STATIC);
                        }
                    }

                }
                    break;
                case 90:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1271;
                    this.match(CSharpParser.STATIC);
                    this.state = 1272;
                    _la = this._input.LA(1);
                    if (!(_la === 15 || _la === 103)) {
                        this._errHandler.recoverInline(this);
                    } else {
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public local_function_body(): Local_function_bodyContext {
        let localctx: Local_function_bodyContext = new Local_function_bodyContext(this, this._ctx, this.state);
        this.enterRule(localctx, 164, CSharpParser.RULE_local_function_body);
        try {
            this.state = 1280;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 125:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1275;
                    this.block();
                }
                    break;
                case 145:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1276;
                    this.right_arrow();
                    this.state = 1277;
                    this.throwable_expression();
                    this.state = 1278;
                    this.match(CSharpParser.SEMICOLON);
                }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public labeled_Statement(): Labeled_StatementContext {
        let localctx: Labeled_StatementContext = new Labeled_StatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 166, CSharpParser.RULE_labeled_Statement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1282;
                this.identifier();
                this.state = 1283;
                this.match(CSharpParser.COLON);
                this.state = 1284;
                this.statement();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public embedded_statement(): Embedded_statementContext {
        let localctx: Embedded_statementContext = new Embedded_statementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 168, CSharpParser.RULE_embedded_statement);
        try {
            this.state = 1288;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 125:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1286;
                    this.block();
                }
                    break;
                case 10:
                case 11:
                case 12:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 24:
                case 25:
                case 28:
                case 29:
                case 30:
                case 31:
                case 32:
                case 33:
                case 34:
                case 35:
                case 38:
                case 42:
                case 44:
                case 45:
                case 46:
                case 47:
                case 48:
                case 49:
                case 50:
                case 51:
                case 52:
                case 55:
                case 58:
                case 60:
                case 61:
                case 62:
                case 63:
                case 64:
                case 66:
                case 67:
                case 68:
                case 69:
                case 71:
                case 75:
                case 80:
                case 81:
                case 82:
                case 83:
                case 85:
                case 86:
                case 87:
                case 88:
                case 91:
                case 93:
                case 94:
                case 95:
                case 96:
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                case 123:
                case 124:
                case 129:
                case 134:
                case 135:
                case 136:
                case 137:
                case 140:
                case 142:
                case 143:
                case 144:
                case 151:
                case 152:
                case 171:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1287;
                    this.simple_embedded_statement();
                }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public simple_embedded_statement(): Simple_embedded_statementContext {
        let localctx: Simple_embedded_statementContext = new Simple_embedded_statementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 170, CSharpParser.RULE_simple_embedded_statement);
        let _la: number;
        try {
            this.state = 1420;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 144, this._ctx)) {
                case 1:
                    localctx = new TheEmptyStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1290;
                    this.match(CSharpParser.SEMICOLON);
                }
                    break;
                case 2:
                    localctx = new ExpressionStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1291;
                    this.expression();
                    this.state = 1292;
                    this.match(CSharpParser.SEMICOLON);
                }
                    break;
                case 3:
                    localctx = new IfStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 3);
                {
                    this.state = 1294;
                    this.match(CSharpParser.IF);
                    this.state = 1295;
                    this.match(CSharpParser.OPEN_PARENS);
                    this.state = 1296;
                    this.expression();
                    this.state = 1297;
                    this.match(CSharpParser.CLOSE_PARENS);
                    this.state = 1298;
                    this.if_body();
                    this.state = 1301;
                    this._errHandler.sync(this);
                    switch (this._interp.adaptivePredict(this._input, 132, this._ctx)) {
                        case 1: {
                            this.state = 1299;
                            this.match(CSharpParser.ELSE);
                            this.state = 1300;
                            this.if_body();
                        }
                            break;
                    }
                }
                    break;
                case 4:
                    localctx = new SwitchStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 4);
                {
                    this.state = 1303;
                    this.match(CSharpParser.SWITCH);
                    this.state = 1304;
                    this.match(CSharpParser.OPEN_PARENS);
                    this.state = 1305;
                    this.expression();
                    this.state = 1306;
                    this.match(CSharpParser.CLOSE_PARENS);
                    this.state = 1307;
                    this.match(CSharpParser.OPEN_BRACE);
                    this.state = 1311;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === 22 || _la === 30) {
                        {
                            {
                                this.state = 1308;
                                this.switch_section();
                            }
                        }
                        this.state = 1313;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1314;
                    this.match(CSharpParser.CLOSE_BRACE);
                }
                    break;
                case 5:
                    localctx = new WhileStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 5);
                {
                    this.state = 1316;
                    this.match(CSharpParser.WHILE);
                    this.state = 1317;
                    this.match(CSharpParser.OPEN_PARENS);
                    this.state = 1318;
                    this.expression();
                    this.state = 1319;
                    this.match(CSharpParser.CLOSE_PARENS);
                    this.state = 1320;
                    this.embedded_statement();
                }
                    break;
                case 6:
                    localctx = new DoStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 6);
                {
                    this.state = 1322;
                    this.match(CSharpParser.DO);
                    this.state = 1323;
                    this.embedded_statement();
                    this.state = 1324;
                    this.match(CSharpParser.WHILE);
                    this.state = 1325;
                    this.match(CSharpParser.OPEN_PARENS);
                    this.state = 1326;
                    this.expression();
                    this.state = 1327;
                    this.match(CSharpParser.CLOSE_PARENS);
                    this.state = 1328;
                    this.match(CSharpParser.SEMICOLON);
                }
                    break;
                case 7:
                    localctx = new ForStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 7);
                {
                    this.state = 1330;
                    this.match(CSharpParser.FOR);
                    this.state = 1331;
                    this.match(CSharpParser.OPEN_PARENS);
                    this.state = 1333;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 326684151) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 795681485) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 4020845921) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & 941752301) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & 2147489821) !== 0)) {
                        {
                            this.state = 1332;
                            this.for_initializer();
                        }
                    }

                    this.state = 1335;
                    this.match(CSharpParser.SEMICOLON);
                    this.state = 1337;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 326684151) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 795681481) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 2947104097) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 1309179899) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & 536872455) !== 0)) {
                        {
                            this.state = 1336;
                            this.expression();
                        }
                    }

                    this.state = 1339;
                    this.match(CSharpParser.SEMICOLON);
                    this.state = 1341;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 326684151) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 795681481) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 2947104097) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 1309179899) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & 536872455) !== 0)) {
                        {
                            this.state = 1340;
                            this.for_iterator();
                        }
                    }

                    this.state = 1343;
                    this.match(CSharpParser.CLOSE_PARENS);
                    this.state = 1344;
                    this.embedded_statement();
                }
                    break;
                case 8:
                    localctx = new ForeachStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 8);
                {
                    this.state = 1346;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === 16) {
                        {
                            this.state = 1345;
                            this.match(CSharpParser.AWAIT);
                        }
                    }

                    this.state = 1348;
                    this.match(CSharpParser.FOREACH);
                    this.state = 1349;
                    this.match(CSharpParser.OPEN_PARENS);
                    this.state = 1350;
                    this.local_variable_type();
                    this.state = 1351;
                    this.identifier();
                    this.state = 1352;
                    this.match(CSharpParser.IN);
                    this.state = 1353;
                    this.expression();
                    this.state = 1354;
                    this.match(CSharpParser.CLOSE_PARENS);
                    this.state = 1355;
                    this.embedded_statement();
                }
                    break;
                case 9:
                    localctx = new BreakStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 9);
                {
                    this.state = 1357;
                    this.match(CSharpParser.BREAK);
                    this.state = 1358;
                    this.match(CSharpParser.SEMICOLON);
                }
                    break;
                case 10:
                    localctx = new ContinueStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 10);
                {
                    this.state = 1359;
                    this.match(CSharpParser.CONTINUE);
                    this.state = 1360;
                    this.match(CSharpParser.SEMICOLON);
                }
                    break;
                case 11:
                    localctx = new GotoStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 11);
                {
                    this.state = 1361;
                    this.match(CSharpParser.GOTO);
                    this.state = 1366;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case 10:
                        case 11:
                        case 12:
                        case 14:
                        case 15:
                        case 16:
                        case 20:
                        case 32:
                        case 35:
                        case 38:
                        case 48:
                        case 49:
                        case 51:
                        case 58:
                        case 60:
                        case 61:
                        case 64:
                        case 69:
                        case 71:
                        case 75:
                        case 81:
                        case 85:
                        case 86:
                        case 102:
                        case 106:
                        case 110:
                        case 111:
                        case 113:
                        case 114: {
                            this.state = 1362;
                            this.identifier();
                        }
                            break;
                        case 22: {
                            this.state = 1363;
                            this.match(CSharpParser.CASE);
                            this.state = 1364;
                            this.expression();
                        }
                            break;
                        case 30: {
                            this.state = 1365;
                            this.match(CSharpParser.DEFAULT);
                        }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                    this.state = 1368;
                    this.match(CSharpParser.SEMICOLON);
                }
                    break;
                case 12:
                    localctx = new ReturnStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 12);
                {
                    this.state = 1369;
                    this.match(CSharpParser.RETURN);
                    this.state = 1371;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 326684151) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 795681481) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 2947104097) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 1309179899) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & 536872455) !== 0)) {
                        {
                            this.state = 1370;
                            this.expression();
                        }
                    }

                    this.state = 1373;
                    this.match(CSharpParser.SEMICOLON);
                }
                    break;
                case 13:
                    localctx = new ThrowStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 13);
                {
                    this.state = 1374;
                    this.match(CSharpParser.THROW);
                    this.state = 1376;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 326684151) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 795681481) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 2947104097) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 1309179899) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & 536872455) !== 0)) {
                        {
                            this.state = 1375;
                            this.expression();
                        }
                    }

                    this.state = 1378;
                    this.match(CSharpParser.SEMICOLON);
                }
                    break;
                case 14:
                    localctx = new TryStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 14);
                {
                    this.state = 1379;
                    this.match(CSharpParser.TRY);
                    this.state = 1380;
                    this.block();
                    this.state = 1386;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case 23: {
                            this.state = 1381;
                            this.catch_clauses();
                            this.state = 1383;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === 43) {
                                {
                                    this.state = 1382;
                                    this.finally_clause();
                                }
                            }

                        }
                            break;
                        case 43: {
                            this.state = 1385;
                            this.finally_clause();
                        }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                }
                    break;
                case 15:
                    localctx = new CheckedStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 15);
                {
                    this.state = 1388;
                    this.match(CSharpParser.CHECKED);
                    this.state = 1389;
                    this.block();
                }
                    break;
                case 16:
                    localctx = new UncheckedStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 16);
                {
                    this.state = 1390;
                    this.match(CSharpParser.UNCHECKED);
                    this.state = 1391;
                    this.block();
                }
                    break;
                case 17:
                    localctx = new LockStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 17);
                {
                    this.state = 1392;
                    this.match(CSharpParser.LOCK);
                    this.state = 1393;
                    this.match(CSharpParser.OPEN_PARENS);
                    this.state = 1394;
                    this.expression();
                    this.state = 1395;
                    this.match(CSharpParser.CLOSE_PARENS);
                    this.state = 1396;
                    this.embedded_statement();
                }
                    break;
                case 18:
                    localctx = new UsingStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 18);
                {
                    this.state = 1398;
                    this.match(CSharpParser.USING);
                    this.state = 1399;
                    this.match(CSharpParser.OPEN_PARENS);
                    this.state = 1400;
                    this.resource_acquisition();
                    this.state = 1401;
                    this.match(CSharpParser.CLOSE_PARENS);
                    this.state = 1402;
                    this.embedded_statement();
                }
                    break;
                case 19:
                    localctx = new YieldStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 19);
                {
                    this.state = 1404;
                    this.match(CSharpParser.YIELD);
                    this.state = 1408;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case 82: {
                            this.state = 1405;
                            this.match(CSharpParser.RETURN);
                            this.state = 1406;
                            this.expression();
                        }
                            break;
                        case 19: {
                            this.state = 1407;
                            this.match(CSharpParser.BREAK);
                        }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                    this.state = 1410;
                    this.match(CSharpParser.SEMICOLON);
                }
                    break;
                case 20:
                    localctx = new UnsafeStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 20);
                {
                    this.state = 1411;
                    this.match(CSharpParser.UNSAFE);
                    this.state = 1412;
                    this.block();
                }
                    break;
                case 21:
                    localctx = new FixedStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 21);
                {
                    this.state = 1413;
                    this.match(CSharpParser.FIXED);
                    this.state = 1414;
                    this.match(CSharpParser.OPEN_PARENS);
                    this.state = 1415;
                    this.pointer_type();
                    this.state = 1416;
                    this.fixed_pointer_declarators();
                    this.state = 1417;
                    this.match(CSharpParser.CLOSE_PARENS);
                    this.state = 1418;
                    this.embedded_statement();
                }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public block(): BlockContext {
        let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
        this.enterRule(localctx, 172, CSharpParser.RULE_block);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1422;
                this.match(CSharpParser.OPEN_BRACE);
                this.state = 1424;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 335466487) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 796731389) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 4294819297) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & 1008992253) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & 2147489821) !== 0)) {
                    {
                        this.state = 1423;
                        this.statement_list();
                    }
                }

                this.state = 1426;
                this.match(CSharpParser.CLOSE_BRACE);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public local_variable_declaration(): Local_variable_declarationContext {
        let localctx: Local_variable_declarationContext = new Local_variable_declarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 174, CSharpParser.RULE_local_variable_declaration);
        let _la: number;
        try {
            this.state = 1449;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 10:
                case 11:
                case 12:
                case 14:
                case 15:
                case 16:
                case 18:
                case 20:
                case 21:
                case 24:
                case 29:
                case 32:
                case 34:
                case 35:
                case 38:
                case 45:
                case 48:
                case 49:
                case 51:
                case 55:
                case 58:
                case 60:
                case 61:
                case 63:
                case 64:
                case 68:
                case 69:
                case 71:
                case 75:
                case 80:
                case 81:
                case 83:
                case 85:
                case 86:
                case 87:
                case 91:
                case 99:
                case 100:
                case 102:
                case 104:
                case 105:
                case 106:
                case 108:
                case 110:
                case 111:
                case 113:
                case 114:
                case 129:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1432;
                    this._errHandler.sync(this);
                    switch (this._interp.adaptivePredict(this._input, 146, this._ctx)) {
                        case 1: {
                            this.state = 1428;
                            this.match(CSharpParser.USING);
                        }
                            break;
                        case 2: {
                            this.state = 1429;
                            this.match(CSharpParser.REF);
                        }
                            break;
                        case 3: {
                            this.state = 1430;
                            this.match(CSharpParser.REF);
                            this.state = 1431;
                            this.match(CSharpParser.READONLY);
                        }
                            break;
                    }
                    this.state = 1434;
                    this.local_variable_type();
                    this.state = 1435;
                    this.local_variable_declarator();
                    this.state = 1442;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === 132) {
                        {
                            {
                                this.state = 1436;
                                this.match(CSharpParser.COMMA);
                                this.state = 1437;
                                this.local_variable_declarator();
                                this.state = 1438;
                                if (!(this.IsLocalVariableDeclaration())) {
                                    throw this.createFailedPredicateException(" this.IsLocalVariableDeclaration() ");
                                }
                            }
                        }
                        this.state = 1444;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                }
                    break;
                case 44:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1445;
                    this.match(CSharpParser.FIXED);
                    this.state = 1446;
                    this.pointer_type();
                    this.state = 1447;
                    this.fixed_pointer_declarators();
                }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public local_variable_type(): Local_variable_typeContext {
        let localctx: Local_variable_typeContext = new Local_variable_typeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 176, CSharpParser.RULE_local_variable_type);
        try {
            this.state = 1453;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 149, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1451;
                    this.match(CSharpParser.VAR);
                }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1452;
                    this.type_();
                }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public local_variable_declarator(): Local_variable_declaratorContext {
        let localctx: Local_variable_declaratorContext = new Local_variable_declaratorContext(this, this._ctx, this.state);
        this.enterRule(localctx, 178, CSharpParser.RULE_local_variable_declarator);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1455;
                this.identifier();
                this.state = 1461;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 151, this._ctx)) {
                    case 1: {
                        this.state = 1456;
                        this.match(CSharpParser.ASSIGNMENT);
                        this.state = 1458;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 150, this._ctx)) {
                            case 1: {
                                this.state = 1457;
                                this.match(CSharpParser.REF);
                            }
                                break;
                        }
                        this.state = 1460;
                        this.local_variable_initializer();
                    }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public local_variable_initializer(): Local_variable_initializerContext {
        let localctx: Local_variable_initializerContext = new Local_variable_initializerContext(this, this._ctx, this.state);
        this.enterRule(localctx, 180, CSharpParser.RULE_local_variable_initializer);
        try {
            this.state = 1466;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 10:
                case 11:
                case 12:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 20:
                case 21:
                case 24:
                case 25:
                case 29:
                case 30:
                case 31:
                case 32:
                case 34:
                case 35:
                case 38:
                case 42:
                case 45:
                case 48:
                case 49:
                case 51:
                case 55:
                case 58:
                case 60:
                case 61:
                case 63:
                case 64:
                case 66:
                case 67:
                case 68:
                case 69:
                case 71:
                case 75:
                case 80:
                case 81:
                case 83:
                case 85:
                case 86:
                case 87:
                case 88:
                case 91:
                case 94:
                case 96:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 104:
                case 106:
                case 110:
                case 111:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                case 123:
                case 124:
                case 129:
                case 135:
                case 136:
                case 137:
                case 140:
                case 142:
                case 143:
                case 144:
                case 151:
                case 152:
                case 171:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1463;
                    this.expression();
                }
                    break;
                case 125:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1464;
                    this.array_initializer();
                }
                    break;
                case 89:
                    this.enterOuterAlt(localctx, 3);
                {
                    this.state = 1465;
                    this.stackalloc_initializer();
                }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public local_constant_declaration(): Local_constant_declarationContext {
        let localctx: Local_constant_declarationContext = new Local_constant_declarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 182, CSharpParser.RULE_local_constant_declaration);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1468;
                this.match(CSharpParser.CONST);
                this.state = 1469;
                this.type_();
                this.state = 1470;
                this.constant_declarators();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public if_body(): If_bodyContext {
        let localctx: If_bodyContext = new If_bodyContext(this, this._ctx, this.state);
        this.enterRule(localctx, 184, CSharpParser.RULE_if_body);
        try {
            this.state = 1474;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 125:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1472;
                    this.block();
                }
                    break;
                case 10:
                case 11:
                case 12:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 24:
                case 25:
                case 28:
                case 29:
                case 30:
                case 31:
                case 32:
                case 33:
                case 34:
                case 35:
                case 38:
                case 42:
                case 44:
                case 45:
                case 46:
                case 47:
                case 48:
                case 49:
                case 50:
                case 51:
                case 52:
                case 55:
                case 58:
                case 60:
                case 61:
                case 62:
                case 63:
                case 64:
                case 66:
                case 67:
                case 68:
                case 69:
                case 71:
                case 75:
                case 80:
                case 81:
                case 82:
                case 83:
                case 85:
                case 86:
                case 87:
                case 88:
                case 91:
                case 93:
                case 94:
                case 95:
                case 96:
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                case 123:
                case 124:
                case 129:
                case 134:
                case 135:
                case 136:
                case 137:
                case 140:
                case 142:
                case 143:
                case 144:
                case 151:
                case 152:
                case 171:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1473;
                    this.simple_embedded_statement();
                }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public switch_section(): Switch_sectionContext {
        let localctx: Switch_sectionContext = new Switch_sectionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 186, CSharpParser.RULE_switch_section);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1477;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1: {
                            {
                                this.state = 1476;
                                this.switch_label();
                            }
                        }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                    this.state = 1479;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 154, this._ctx);
                } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                this.state = 1481;
                this.statement_list();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public switch_label(): Switch_labelContext {
        let localctx: Switch_labelContext = new Switch_labelContext(this, this._ctx, this.state);
        this.enterRule(localctx, 188, CSharpParser.RULE_switch_label);
        let _la: number;
        try {
            this.state = 1492;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 22:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1483;
                    this.match(CSharpParser.CASE);
                    this.state = 1484;
                    this.expression();
                    this.state = 1486;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === 110) {
                        {
                            this.state = 1485;
                            this.case_guard();
                        }
                    }

                    this.state = 1488;
                    this.match(CSharpParser.COLON);
                }
                    break;
                case 30:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1490;
                    this.match(CSharpParser.DEFAULT);
                    this.state = 1491;
                    this.match(CSharpParser.COLON);
                }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public case_guard(): Case_guardContext {
        let localctx: Case_guardContext = new Case_guardContext(this, this._ctx, this.state);
        this.enterRule(localctx, 190, CSharpParser.RULE_case_guard);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1494;
                this.match(CSharpParser.WHEN);
                this.state = 1495;
                this.expression();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public statement_list(): Statement_listContext {
        let localctx: Statement_listContext = new Statement_listContext(this, this._ctx, this.state);
        this.enterRule(localctx, 192, CSharpParser.RULE_statement_list);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1498;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1: {
                            {
                                this.state = 1497;
                                this.statement();
                            }
                        }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                    this.state = 1500;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 157, this._ctx);
                } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public for_initializer(): For_initializerContext {
        let localctx: For_initializerContext = new For_initializerContext(this, this._ctx, this.state);
        this.enterRule(localctx, 194, CSharpParser.RULE_for_initializer);
        let _la: number;
        try {
            this.state = 1511;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 159, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1502;
                    this.local_variable_declaration();
                }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1503;
                    this.expression();
                    this.state = 1508;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === 132) {
                        {
                            {
                                this.state = 1504;
                                this.match(CSharpParser.COMMA);
                                this.state = 1505;
                                this.expression();
                            }
                        }
                        this.state = 1510;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public for_iterator(): For_iteratorContext {
        let localctx: For_iteratorContext = new For_iteratorContext(this, this._ctx, this.state);
        this.enterRule(localctx, 196, CSharpParser.RULE_for_iterator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1513;
                this.expression();
                this.state = 1518;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 132) {
                    {
                        {
                            this.state = 1514;
                            this.match(CSharpParser.COMMA);
                            this.state = 1515;
                            this.expression();
                        }
                    }
                    this.state = 1520;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public catch_clauses(): Catch_clausesContext {
        let localctx: Catch_clausesContext = new Catch_clausesContext(this, this._ctx, this.state);
        this.enterRule(localctx, 198, CSharpParser.RULE_catch_clauses);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1532;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 163, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1521;
                    this.specific_catch_clause();
                    this.state = 1525;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 161, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1522;
                                    this.specific_catch_clause();
                                }
                            }
                        }
                        this.state = 1527;
                        this._errHandler.sync(this);
                        _alt = this._interp.adaptivePredict(this._input, 161, this._ctx);
                    }
                    this.state = 1529;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === 23) {
                        {
                            this.state = 1528;
                            this.general_catch_clause();
                        }
                    }

                }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1531;
                    this.general_catch_clause();
                }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public specific_catch_clause(): Specific_catch_clauseContext {
        let localctx: Specific_catch_clauseContext = new Specific_catch_clauseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 200, CSharpParser.RULE_specific_catch_clause);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1534;
                this.match(CSharpParser.CATCH);
                this.state = 1535;
                this.match(CSharpParser.OPEN_PARENS);
                this.state = 1536;
                this.class_type();
                this.state = 1538;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1170432) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 873136201) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 6424737) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 6929) !== 0)) {
                    {
                        this.state = 1537;
                        this.identifier();
                    }
                }

                this.state = 1540;
                this.match(CSharpParser.CLOSE_PARENS);
                this.state = 1542;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 110) {
                    {
                        this.state = 1541;
                        this.exception_filter();
                    }
                }

                this.state = 1544;
                this.block();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public general_catch_clause(): General_catch_clauseContext {
        let localctx: General_catch_clauseContext = new General_catch_clauseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 202, CSharpParser.RULE_general_catch_clause);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1546;
                this.match(CSharpParser.CATCH);
                this.state = 1548;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 110) {
                    {
                        this.state = 1547;
                        this.exception_filter();
                    }
                }

                this.state = 1550;
                this.block();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public exception_filter(): Exception_filterContext {
        let localctx: Exception_filterContext = new Exception_filterContext(this, this._ctx, this.state);
        this.enterRule(localctx, 204, CSharpParser.RULE_exception_filter);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1552;
                this.match(CSharpParser.WHEN);
                this.state = 1553;
                this.match(CSharpParser.OPEN_PARENS);
                this.state = 1554;
                this.expression();
                this.state = 1555;
                this.match(CSharpParser.CLOSE_PARENS);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public finally_clause(): Finally_clauseContext {
        let localctx: Finally_clauseContext = new Finally_clauseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 206, CSharpParser.RULE_finally_clause);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1557;
                this.match(CSharpParser.FINALLY);
                this.state = 1558;
                this.block();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public resource_acquisition(): Resource_acquisitionContext {
        let localctx: Resource_acquisitionContext = new Resource_acquisitionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 208, CSharpParser.RULE_resource_acquisition);
        try {
            this.state = 1562;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 167, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1560;
                    this.local_variable_declaration();
                }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1561;
                    this.expression();
                }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public namespace_declaration(): Namespace_declarationContext {
        let localctx: Namespace_declarationContext = new Namespace_declarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 210, CSharpParser.RULE_namespace_declaration);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1564;
                this.match(CSharpParser.NAMESPACE);
                this.state = 1565;
                localctx._qi = this.qualified_identifier();
                this.state = 1566;
                this.namespace_body();
                this.state = 1568;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 134) {
                    {
                        this.state = 1567;
                        this.match(CSharpParser.SEMICOLON);
                    }
                }

            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public qualified_identifier(): Qualified_identifierContext {
        let localctx: Qualified_identifierContext = new Qualified_identifierContext(this, this._ctx, this.state);
        this.enterRule(localctx, 212, CSharpParser.RULE_qualified_identifier);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1570;
                this.identifier();
                this.state = 1575;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 131) {
                    {
                        {
                            this.state = 1571;
                            this.match(CSharpParser.DOT);
                            this.state = 1572;
                            this.identifier();
                        }
                    }
                    this.state = 1577;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public namespace_body(): Namespace_bodyContext {
        let localctx: Namespace_bodyContext = new Namespace_bodyContext(this, this._ctx, this.state);
        this.enterRule(localctx, 214, CSharpParser.RULE_namespace_body);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1578;
                this.match(CSharpParser.OPEN_BRACE);
                this.state = 1580;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 170, this._ctx)) {
                    case 1: {
                        this.state = 1579;
                        this.extern_alias_directives();
                    }
                        break;
                }
                this.state = 1583;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 105) {
                    {
                        this.state = 1582;
                        this.using_directives();
                    }
                }

                this.state = 1586;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2214625792) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 806879249) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 1074399485) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & 1048581) !== 0)) {
                    {
                        this.state = 1585;
                        this.namespace_member_declarations();
                    }
                }

                this.state = 1588;
                this.match(CSharpParser.CLOSE_BRACE);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public extern_alias_directives(): Extern_alias_directivesContext {
        let localctx: Extern_alias_directivesContext = new Extern_alias_directivesContext(this, this._ctx, this.state);
        this.enterRule(localctx, 216, CSharpParser.RULE_extern_alias_directives);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1591;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1: {
                            {
                                this.state = 1590;
                                this.extern_alias_directive();
                            }
                        }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                    this.state = 1593;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 173, this._ctx);
                } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public extern_alias_directive(): Extern_alias_directiveContext {
        let localctx: Extern_alias_directiveContext = new Extern_alias_directiveContext(this, this._ctx, this.state);
        this.enterRule(localctx, 218, CSharpParser.RULE_extern_alias_directive);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1595;
                this.match(CSharpParser.EXTERN);
                this.state = 1596;
                this.match(CSharpParser.ALIAS);
                this.state = 1597;
                this.identifier();
                this.state = 1598;
                this.match(CSharpParser.SEMICOLON);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public using_directives(): Using_directivesContext {
        let localctx: Using_directivesContext = new Using_directivesContext(this, this._ctx, this.state);
        this.enterRule(localctx, 220, CSharpParser.RULE_using_directives);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1601;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1600;
                            this.using_directive();
                        }
                    }
                    this.state = 1603;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === 105);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public using_directive(): Using_directiveContext {
        let localctx: Using_directiveContext = new Using_directiveContext(this, this._ctx, this.state);
        this.enterRule(localctx, 222, CSharpParser.RULE_using_directive);
        try {
            this.state = 1620;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 175, this._ctx)) {
                case 1:
                    localctx = new UsingAliasDirectiveContext(this, localctx);
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1605;
                    this.match(CSharpParser.USING);
                    this.state = 1606;
                    this.identifier();
                    this.state = 1607;
                    this.match(CSharpParser.ASSIGNMENT);
                    this.state = 1608;
                    this.namespace_or_type_name();
                    this.state = 1609;
                    this.match(CSharpParser.SEMICOLON);
                }
                    break;
                case 2:
                    localctx = new UsingNamespaceDirectiveContext(this, localctx);
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1611;
                    this.match(CSharpParser.USING);
                    this.state = 1612;
                    this.namespace_or_type_name();
                    this.state = 1613;
                    this.match(CSharpParser.SEMICOLON);
                }
                    break;
                case 3:
                    localctx = new UsingStaticDirectiveContext(this, localctx);
                    this.enterOuterAlt(localctx, 3);
                {
                    this.state = 1615;
                    this.match(CSharpParser.USING);
                    this.state = 1616;
                    this.match(CSharpParser.STATIC);
                    this.state = 1617;
                    this.namespace_or_type_name();
                    this.state = 1618;
                    this.match(CSharpParser.SEMICOLON);
                }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public namespace_member_declarations(): Namespace_member_declarationsContext {
        let localctx: Namespace_member_declarationsContext = new Namespace_member_declarationsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 224, CSharpParser.RULE_namespace_member_declarations);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1623;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1622;
                            this.namespace_member_declaration();
                        }
                    }
                    this.state = 1625;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2214625792) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 806879249) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 1074399485) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & 1048581) !== 0));
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public namespace_member_declaration(): Namespace_member_declarationContext {
        let localctx: Namespace_member_declarationContext = new Namespace_member_declarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 226, CSharpParser.RULE_namespace_member_declaration);
        try {
            this.state = 1629;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 65:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1627;
                    this.namespace_declaration();
                }
                    break;
                case 9:
                case 15:
                case 26:
                case 31:
                case 37:
                case 41:
                case 56:
                case 57:
                case 66:
                case 73:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 84:
                case 90:
                case 92:
                case 103:
                case 107:
                case 109:
                case 127:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1628;
                    this.type_declaration();
                }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public type_declaration(): Type_declarationContext {
        let localctx: Type_declarationContext = new Type_declarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 228, CSharpParser.RULE_type_declaration);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1632;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 127) {
                    {
                        this.state = 1631;
                        this.attributes();
                    }
                }

                this.state = 1635;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 179, this._ctx)) {
                    case 1: {
                        this.state = 1634;
                        this.all_member_modifiers();
                    }
                        break;
                }
                this.state = 1642;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 26: {
                        this.state = 1637;
                        this.class_definition();
                    }
                        break;
                    case 79:
                    case 80:
                    case 92: {
                        this.state = 1638;
                        this.struct_definition();
                    }
                        break;
                    case 56: {
                        this.state = 1639;
                        this.interface_definition();
                    }
                        break;
                    case 37: {
                        this.state = 1640;
                        this.enum_definition();
                    }
                        break;
                    case 31: {
                        this.state = 1641;
                        this.delegate_definition();
                    }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public qualified_alias_member(): Qualified_alias_memberContext {
        let localctx: Qualified_alias_memberContext = new Qualified_alias_memberContext(this, this._ctx, this.state);
        this.enterRule(localctx, 230, CSharpParser.RULE_qualified_alias_member);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1644;
                this.identifier();
                this.state = 1645;
                this.match(CSharpParser.DOUBLE_COLON);
                this.state = 1646;
                this.identifier();
                this.state = 1648;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 181, this._ctx)) {
                    case 1: {
                        this.state = 1647;
                        this.type_argument_list();
                    }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public type_parameter_list(): Type_parameter_listContext {
        let localctx: Type_parameter_listContext = new Type_parameter_listContext(this, this._ctx, this.state);
        this.enterRule(localctx, 232, CSharpParser.RULE_type_parameter_list);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1650;
                this.match(CSharpParser.LT);
                this.state = 1651;
                this.type_parameter();
                this.state = 1656;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 132) {
                    {
                        {
                            this.state = 1652;
                            this.match(CSharpParser.COMMA);
                            this.state = 1653;
                            this.type_parameter();
                        }
                    }
                    this.state = 1658;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1659;
                this.match(CSharpParser.GT);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public type_parameter(): Type_parameterContext {
        let localctx: Type_parameterContext = new Type_parameterContext(this, this._ctx, this.state);
        this.enterRule(localctx, 234, CSharpParser.RULE_type_parameter);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1662;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 127) {
                    {
                        this.state = 1661;
                        this.attributes();
                    }
                }

                this.state = 1664;
                this.identifier();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public class_base(): Class_baseContext {
        let localctx: Class_baseContext = new Class_baseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 236, CSharpParser.RULE_class_base);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1666;
                this.match(CSharpParser.COLON);
                this.state = 1667;
                this.class_type();
                this.state = 1672;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 132) {
                    {
                        {
                            this.state = 1668;
                            this.match(CSharpParser.COMMA);
                            this.state = 1669;
                            this.namespace_or_type_name();
                        }
                    }
                    this.state = 1674;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public interface_type_list(): Interface_type_listContext {
        let localctx: Interface_type_listContext = new Interface_type_listContext(this, this._ctx, this.state);
        this.enterRule(localctx, 238, CSharpParser.RULE_interface_type_list);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1675;
                this.namespace_or_type_name();
                this.state = 1680;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 132) {
                    {
                        {
                            this.state = 1676;
                            this.match(CSharpParser.COMMA);
                            this.state = 1677;
                            this.namespace_or_type_name();
                        }
                    }
                    this.state = 1682;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public type_parameter_constraints_clauses(): Type_parameter_constraints_clausesContext {
        let localctx: Type_parameter_constraints_clausesContext = new Type_parameter_constraints_clausesContext(this, this._ctx, this.state);
        this.enterRule(localctx, 240, CSharpParser.RULE_type_parameter_constraints_clauses);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1684;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1683;
                            this.type_parameter_constraints_clause();
                        }
                    }
                    this.state = 1686;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === 111);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public type_parameter_constraints_clause(): Type_parameter_constraints_clauseContext {
        let localctx: Type_parameter_constraints_clauseContext = new Type_parameter_constraints_clauseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 242, CSharpParser.RULE_type_parameter_constraints_clause);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1688;
                this.match(CSharpParser.WHERE);
                this.state = 1689;
                this.identifier();
                this.state = 1690;
                this.match(CSharpParser.COLON);
                this.state = 1691;
                this.type_parameter_constraints();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public type_parameter_constraints(): Type_parameter_constraintsContext {
        let localctx: Type_parameter_constraintsContext = new Type_parameter_constraintsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 244, CSharpParser.RULE_type_parameter_constraints);
        let _la: number;
        try {
            this.state = 1703;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 66:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1693;
                    this.constructor_constraint();
                }
                    break;
                case 10:
                case 11:
                case 12:
                case 14:
                case 15:
                case 16:
                case 20:
                case 26:
                case 32:
                case 35:
                case 38:
                case 48:
                case 49:
                case 51:
                case 58:
                case 60:
                case 61:
                case 64:
                case 68:
                case 69:
                case 71:
                case 75:
                case 81:
                case 85:
                case 86:
                case 91:
                case 92:
                case 102:
                case 106:
                case 110:
                case 111:
                case 113:
                case 114:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1694;
                    this.primary_constraint();
                    this.state = 1697;
                    this._errHandler.sync(this);
                    switch (this._interp.adaptivePredict(this._input, 187, this._ctx)) {
                        case 1: {
                            this.state = 1695;
                            this.match(CSharpParser.COMMA);
                            this.state = 1696;
                            this.secondary_constraints();
                        }
                            break;
                    }
                    this.state = 1701;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === 132) {
                        {
                            this.state = 1699;
                            this.match(CSharpParser.COMMA);
                            this.state = 1700;
                            this.constructor_constraint();
                        }
                    }

                }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public primary_constraint(): Primary_constraintContext {
        let localctx: Primary_constraintContext = new Primary_constraintContext(this, this._ctx, this.state);
        this.enterRule(localctx, 246, CSharpParser.RULE_primary_constraint);
        let _la: number;
        try {
            this.state = 1712;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 191, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1705;
                    this.class_type();
                }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1706;
                    this.match(CSharpParser.CLASS);
                    this.state = 1708;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === 148) {
                        {
                            this.state = 1707;
                            this.match(CSharpParser.INTERR);
                        }
                    }

                }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                {
                    this.state = 1710;
                    this.match(CSharpParser.STRUCT);
                }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                {
                    this.state = 1711;
                    this.match(CSharpParser.UNMANAGED);
                }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public secondary_constraints(): Secondary_constraintsContext {
        let localctx: Secondary_constraintsContext = new Secondary_constraintsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 248, CSharpParser.RULE_secondary_constraints);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1714;
                this.namespace_or_type_name();
                this.state = 1719;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 192, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1715;
                                this.match(CSharpParser.COMMA);
                                this.state = 1716;
                                this.namespace_or_type_name();
                            }
                        }
                    }
                    this.state = 1721;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 192, this._ctx);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public constructor_constraint(): Constructor_constraintContext {
        let localctx: Constructor_constraintContext = new Constructor_constraintContext(this, this._ctx, this.state);
        this.enterRule(localctx, 250, CSharpParser.RULE_constructor_constraint);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1722;
                this.match(CSharpParser.NEW);
                this.state = 1723;
                this.match(CSharpParser.OPEN_PARENS);
                this.state = 1724;
                this.match(CSharpParser.CLOSE_PARENS);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public class_body(): Class_bodyContext {
        let localctx: Class_bodyContext = new Class_bodyContext(this, this._ctx, this.state);
        this.enterRule(localctx, 252, CSharpParser.RULE_class_body);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1726;
                this.match(CSharpParser.OPEN_BRACE);
                this.state = 1728;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2905988608) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3081446381) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 486275765) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 1342234555) !== 0) || _la === 144) {
                    {
                        this.state = 1727;
                        this.class_member_declarations();
                    }
                }

                this.state = 1730;
                this.match(CSharpParser.CLOSE_BRACE);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public class_member_declarations(): Class_member_declarationsContext {
        let localctx: Class_member_declarationsContext = new Class_member_declarationsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 254, CSharpParser.RULE_class_member_declarations);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1733;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1732;
                            this.class_member_declaration();
                        }
                    }
                    this.state = 1735;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2905988608) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3081446381) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 486275765) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 1342234555) !== 0) || _la === 144);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public class_member_declaration(): Class_member_declarationContext {
        let localctx: Class_member_declarationContext = new Class_member_declarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 256, CSharpParser.RULE_class_member_declaration);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1738;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 127) {
                    {
                        this.state = 1737;
                        this.attributes();
                    }
                }

                this.state = 1741;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 196, this._ctx)) {
                    case 1: {
                        this.state = 1740;
                        this.all_member_modifiers();
                    }
                        break;
                }
                this.state = 1745;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 10:
                    case 11:
                    case 12:
                    case 14:
                    case 15:
                    case 16:
                    case 18:
                    case 20:
                    case 21:
                    case 24:
                    case 26:
                    case 27:
                    case 29:
                    case 31:
                    case 32:
                    case 34:
                    case 35:
                    case 37:
                    case 38:
                    case 39:
                    case 40:
                    case 45:
                    case 48:
                    case 49:
                    case 51:
                    case 53:
                    case 55:
                    case 56:
                    case 58:
                    case 60:
                    case 61:
                    case 63:
                    case 64:
                    case 68:
                    case 69:
                    case 71:
                    case 75:
                    case 79:
                    case 80:
                    case 81:
                    case 83:
                    case 85:
                    case 86:
                    case 87:
                    case 91:
                    case 92:
                    case 99:
                    case 100:
                    case 102:
                    case 104:
                    case 106:
                    case 108:
                    case 110:
                    case 111:
                    case 113:
                    case 114:
                    case 129: {
                        this.state = 1743;
                        this.common_member_declaration();
                    }
                        break;
                    case 144: {
                        this.state = 1744;
                        this.destructor_definition();
                    }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public all_member_modifiers(): All_member_modifiersContext {
        let localctx: All_member_modifiersContext = new All_member_modifiersContext(this, this._ctx, this.state);
        this.enterRule(localctx, 258, CSharpParser.RULE_all_member_modifiers);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1748;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1: {
                            {
                                this.state = 1747;
                                this.all_member_modifier();
                            }
                        }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                    this.state = 1750;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 198, this._ctx);
                } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public all_member_modifier(): All_member_modifierContext {
        let localctx: All_member_modifierContext = new All_member_modifierContext(this, this._ctx, this.state);
        this.enterRule(localctx, 260, CSharpParser.RULE_all_member_modifier);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1752;
                _la = this._input.LA(1);
                if (!(_la === 9 || _la === 15 || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 33619969) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 1073875069) !== 0) || _la === 107 || _la === 109)) {
                    this._errHandler.recoverInline(this);
                } else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public common_member_declaration(): Common_member_declarationContext {
        let localctx: Common_member_declarationContext = new Common_member_declarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 262, CSharpParser.RULE_common_member_declaration);
        try {
            this.state = 1773;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 200, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1754;
                    this.constant_declaration();
                }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1755;
                    this.typed_member_declaration();
                }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                {
                    this.state = 1756;
                    this.event_declaration();
                }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                {
                    this.state = 1757;
                    this.conversion_operator_declarator();
                    this.state = 1763;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case 125:
                        case 134: {
                            this.state = 1758;
                            this.body();
                        }
                            break;
                        case 145: {
                            this.state = 1759;
                            this.right_arrow();
                            this.state = 1760;
                            this.throwable_expression();
                            this.state = 1761;
                            this.match(CSharpParser.SEMICOLON);
                        }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                {
                    this.state = 1765;
                    this.constructor_declaration();
                }
                    break;
                case 6:
                    this.enterOuterAlt(localctx, 6);
                {
                    this.state = 1766;
                    this.match(CSharpParser.VOID);
                    this.state = 1767;
                    this.method_declaration();
                }
                    break;
                case 7:
                    this.enterOuterAlt(localctx, 7);
                {
                    this.state = 1768;
                    this.class_definition();
                }
                    break;
                case 8:
                    this.enterOuterAlt(localctx, 8);
                {
                    this.state = 1769;
                    this.struct_definition();
                }
                    break;
                case 9:
                    this.enterOuterAlt(localctx, 9);
                {
                    this.state = 1770;
                    this.interface_definition();
                }
                    break;
                case 10:
                    this.enterOuterAlt(localctx, 10);
                {
                    this.state = 1771;
                    this.enum_definition();
                }
                    break;
                case 11:
                    this.enterOuterAlt(localctx, 11);
                {
                    this.state = 1772;
                    this.delegate_definition();
                }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public typed_member_declaration(): Typed_member_declarationContext {
        let localctx: Typed_member_declarationContext = new Typed_member_declarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 264, CSharpParser.RULE_typed_member_declaration);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1780;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 201, this._ctx)) {
                    case 1: {
                        this.state = 1775;
                        this.match(CSharpParser.REF);
                    }
                        break;
                    case 2: {
                        this.state = 1776;
                        this.match(CSharpParser.READONLY);
                        this.state = 1777;
                        this.match(CSharpParser.REF);
                    }
                        break;
                    case 3: {
                        this.state = 1778;
                        this.match(CSharpParser.REF);
                        this.state = 1779;
                        this.match(CSharpParser.READONLY);
                    }
                        break;
                }
                this.state = 1782;
                this.type_();
                this.state = 1792;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 202, this._ctx)) {
                    case 1: {
                        this.state = 1783;
                        this.namespace_or_type_name();
                        this.state = 1784;
                        this.match(CSharpParser.DOT);
                        this.state = 1785;
                        this.indexer_declaration();
                    }
                        break;
                    case 2: {
                        this.state = 1787;
                        this.method_declaration();
                    }
                        break;
                    case 3: {
                        this.state = 1788;
                        this.property_declaration();
                    }
                        break;
                    case 4: {
                        this.state = 1789;
                        this.indexer_declaration();
                    }
                        break;
                    case 5: {
                        this.state = 1790;
                        this.operator_declaration();
                    }
                        break;
                    case 6: {
                        this.state = 1791;
                        this.field_declaration();
                    }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public constant_declarators(): Constant_declaratorsContext {
        let localctx: Constant_declaratorsContext = new Constant_declaratorsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 266, CSharpParser.RULE_constant_declarators);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1794;
                this.constant_declarator();
                this.state = 1799;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 132) {
                    {
                        {
                            this.state = 1795;
                            this.match(CSharpParser.COMMA);
                            this.state = 1796;
                            this.constant_declarator();
                        }
                    }
                    this.state = 1801;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public constant_declarator(): Constant_declaratorContext {
        let localctx: Constant_declaratorContext = new Constant_declaratorContext(this, this._ctx, this.state);
        this.enterRule(localctx, 268, CSharpParser.RULE_constant_declarator);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1802;
                this.identifier();
                this.state = 1803;
                this.match(CSharpParser.ASSIGNMENT);
                this.state = 1804;
                this.expression();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public variable_declarators(): Variable_declaratorsContext {
        let localctx: Variable_declaratorsContext = new Variable_declaratorsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 270, CSharpParser.RULE_variable_declarators);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1806;
                this.variable_declarator();
                this.state = 1811;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 132) {
                    {
                        {
                            this.state = 1807;
                            this.match(CSharpParser.COMMA);
                            this.state = 1808;
                            this.variable_declarator();
                        }
                    }
                    this.state = 1813;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public variable_declarator(): Variable_declaratorContext {
        let localctx: Variable_declaratorContext = new Variable_declaratorContext(this, this._ctx, this.state);
        this.enterRule(localctx, 272, CSharpParser.RULE_variable_declarator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1814;
                this.identifier();
                this.state = 1817;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 145) {
                    {
                        this.state = 1815;
                        this.match(CSharpParser.ASSIGNMENT);
                        this.state = 1816;
                        this.variable_initializer();
                    }
                }

            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public variable_initializer(): Variable_initializerContext {
        let localctx: Variable_initializerContext = new Variable_initializerContext(this, this._ctx, this.state);
        this.enterRule(localctx, 274, CSharpParser.RULE_variable_initializer);
        try {
            this.state = 1821;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 10:
                case 11:
                case 12:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 20:
                case 21:
                case 24:
                case 25:
                case 29:
                case 30:
                case 31:
                case 32:
                case 34:
                case 35:
                case 38:
                case 42:
                case 45:
                case 48:
                case 49:
                case 51:
                case 55:
                case 58:
                case 60:
                case 61:
                case 63:
                case 64:
                case 66:
                case 67:
                case 68:
                case 69:
                case 71:
                case 75:
                case 80:
                case 81:
                case 83:
                case 85:
                case 86:
                case 87:
                case 88:
                case 91:
                case 94:
                case 96:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 104:
                case 106:
                case 110:
                case 111:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                case 123:
                case 124:
                case 129:
                case 135:
                case 136:
                case 137:
                case 140:
                case 142:
                case 143:
                case 144:
                case 151:
                case 152:
                case 171:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1819;
                    this.expression();
                }
                    break;
                case 125:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1820;
                    this.array_initializer();
                }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public return_type(): Return_typeContext {
        let localctx: Return_typeContext = new Return_typeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 276, CSharpParser.RULE_return_type);
        try {
            this.state = 1825;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 207, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1823;
                    this.type_();
                }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1824;
                    this.match(CSharpParser.VOID);
                }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public member_name(): Member_nameContext {
        let localctx: Member_nameContext = new Member_nameContext(this, this._ctx, this.state);
        this.enterRule(localctx, 278, CSharpParser.RULE_member_name);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1827;
                this.namespace_or_type_name();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public method_body(): Method_bodyContext {
        let localctx: Method_bodyContext = new Method_bodyContext(this, this._ctx, this.state);
        this.enterRule(localctx, 280, CSharpParser.RULE_method_body);
        try {
            this.state = 1831;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 125:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1829;
                    this.block();
                }
                    break;
                case 134:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1830;
                    this.match(CSharpParser.SEMICOLON);
                }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public formal_parameter_list(): Formal_parameter_listContext {
        let localctx: Formal_parameter_listContext = new Formal_parameter_listContext(this, this._ctx, this.state);
        this.enterRule(localctx, 282, CSharpParser.RULE_formal_parameter_list);
        let _la: number;
        try {
            this.state = 1839;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 210, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1833;
                    this.parameter_array();
                }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1834;
                    this.fixed_parameters();
                    this.state = 1837;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === 132) {
                        {
                            this.state = 1835;
                            this.match(CSharpParser.COMMA);
                            this.state = 1836;
                            this.parameter_array();
                        }
                    }

                }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public fixed_parameters(): Fixed_parametersContext {
        let localctx: Fixed_parametersContext = new Fixed_parametersContext(this, this._ctx, this.state);
        this.enterRule(localctx, 284, CSharpParser.RULE_fixed_parameters);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1841;
                this.fixed_parameter();
                this.state = 1846;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 211, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1842;
                                this.match(CSharpParser.COMMA);
                                this.state = 1843;
                                this.fixed_parameter();
                            }
                        }
                    }
                    this.state = 1848;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 211, this._ctx);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public fixed_parameter(): Fixed_parameterContext {
        let localctx: Fixed_parameterContext = new Fixed_parameterContext(this, this._ctx, this.state);
        this.enterRule(localctx, 286, CSharpParser.RULE_fixed_parameter);
        let _la: number;
        try {
            this.state = 1857;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 214, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1850;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === 127) {
                        {
                            this.state = 1849;
                            this.attributes();
                        }
                    }

                    this.state = 1853;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 67371009) !== 0) || _la === 94) {
                        {
                            this.state = 1852;
                            this.parameter_modifier();
                        }
                    }

                    this.state = 1855;
                    this.arg_declaration();
                }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1856;
                    this.match(CSharpParser.ARGLIST);
                }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public parameter_modifier(): Parameter_modifierContext {
        let localctx: Parameter_modifierContext = new Parameter_modifierContext(this, this._ctx, this.state);
        this.enterRule(localctx, 288, CSharpParser.RULE_parameter_modifier);
        try {
            this.state = 1867;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 215, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1859;
                    this.match(CSharpParser.REF);
                }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1860;
                    this.match(CSharpParser.OUT);
                }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                {
                    this.state = 1861;
                    this.match(CSharpParser.IN);
                }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                {
                    this.state = 1862;
                    this.match(CSharpParser.REF);
                    this.state = 1863;
                    this.match(CSharpParser.THIS);
                }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                {
                    this.state = 1864;
                    this.match(CSharpParser.IN);
                    this.state = 1865;
                    this.match(CSharpParser.THIS);
                }
                    break;
                case 6:
                    this.enterOuterAlt(localctx, 6);
                {
                    this.state = 1866;
                    this.match(CSharpParser.THIS);
                }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public parameter_array(): Parameter_arrayContext {
        let localctx: Parameter_arrayContext = new Parameter_arrayContext(this, this._ctx, this.state);
        this.enterRule(localctx, 290, CSharpParser.RULE_parameter_array);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1870;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 127) {
                    {
                        this.state = 1869;
                        this.attributes();
                    }
                }

                this.state = 1872;
                this.match(CSharpParser.PARAMS);
                this.state = 1873;
                this.array_type();
                this.state = 1874;
                this.identifier();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public accessor_declarations(): Accessor_declarationsContext {
        let localctx: Accessor_declarationsContext = new Accessor_declarationsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 292, CSharpParser.RULE_accessor_declarations);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1877;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 127) {
                    {
                        this.state = 1876;
                        localctx._attrs = this.attributes();
                    }
                }

                this.state = 1880;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 1572865) !== 0)) {
                    {
                        this.state = 1879;
                        localctx._mods = this.accessor_modifier();
                    }
                }

                this.state = 1892;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 49: {
                        this.state = 1882;
                        this.match(CSharpParser.GET);
                        this.state = 1883;
                        this.accessor_body();
                        this.state = 1885;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 538443777) !== 0) || _la === 127) {
                            {
                                this.state = 1884;
                                this.set_accessor_declaration();
                            }
                        }

                    }
                        break;
                    case 86: {
                        this.state = 1887;
                        this.match(CSharpParser.SET);
                        this.state = 1888;
                        this.accessor_body();
                        this.state = 1890;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 402653441) !== 0) || _la === 127) {
                            {
                                this.state = 1889;
                                this.get_accessor_declaration();
                            }
                        }

                    }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public get_accessor_declaration(): Get_accessor_declarationContext {
        let localctx: Get_accessor_declarationContext = new Get_accessor_declarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 294, CSharpParser.RULE_get_accessor_declaration);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1895;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 127) {
                    {
                        this.state = 1894;
                        this.attributes();
                    }
                }

                this.state = 1898;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 1572865) !== 0)) {
                    {
                        this.state = 1897;
                        this.accessor_modifier();
                    }
                }

                this.state = 1900;
                this.match(CSharpParser.GET);
                this.state = 1901;
                this.accessor_body();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public set_accessor_declaration(): Set_accessor_declarationContext {
        let localctx: Set_accessor_declarationContext = new Set_accessor_declarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 296, CSharpParser.RULE_set_accessor_declaration);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1904;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 127) {
                    {
                        this.state = 1903;
                        this.attributes();
                    }
                }

                this.state = 1907;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 1572865) !== 0)) {
                    {
                        this.state = 1906;
                        this.accessor_modifier();
                    }
                }

                this.state = 1909;
                this.match(CSharpParser.SET);
                this.state = 1910;
                this.accessor_body();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public accessor_modifier(): Accessor_modifierContext {
        let localctx: Accessor_modifierContext = new Accessor_modifierContext(this, this._ctx, this.state);
        this.enterRule(localctx, 298, CSharpParser.RULE_accessor_modifier);
        try {
            this.state = 1919;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 226, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1912;
                    this.match(CSharpParser.PROTECTED);
                }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1913;
                    this.match(CSharpParser.INTERNAL);
                }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                {
                    this.state = 1914;
                    this.match(CSharpParser.PRIVATE);
                }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                {
                    this.state = 1915;
                    this.match(CSharpParser.PROTECTED);
                    this.state = 1916;
                    this.match(CSharpParser.INTERNAL);
                }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                {
                    this.state = 1917;
                    this.match(CSharpParser.INTERNAL);
                    this.state = 1918;
                    this.match(CSharpParser.PROTECTED);
                }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public accessor_body(): Accessor_bodyContext {
        let localctx: Accessor_bodyContext = new Accessor_bodyContext(this, this._ctx, this.state);
        this.enterRule(localctx, 300, CSharpParser.RULE_accessor_body);
        try {
            this.state = 1923;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 125:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1921;
                    this.block();
                }
                    break;
                case 134:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1922;
                    this.match(CSharpParser.SEMICOLON);
                }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public event_accessor_declarations(): Event_accessor_declarationsContext {
        let localctx: Event_accessor_declarationsContext = new Event_accessor_declarationsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 302, CSharpParser.RULE_event_accessor_declarations);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1926;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 127) {
                    {
                        this.state = 1925;
                        this.attributes();
                    }
                }

                this.state = 1936;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 10: {
                        this.state = 1928;
                        this.match(CSharpParser.ADD);
                        this.state = 1929;
                        this.block();
                        this.state = 1930;
                        this.remove_accessor_declaration();
                    }
                        break;
                    case 81: {
                        this.state = 1932;
                        this.match(CSharpParser.REMOVE);
                        this.state = 1933;
                        this.block();
                        this.state = 1934;
                        this.add_accessor_declaration();
                    }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public add_accessor_declaration(): Add_accessor_declarationContext {
        let localctx: Add_accessor_declarationContext = new Add_accessor_declarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 304, CSharpParser.RULE_add_accessor_declaration);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1939;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 127) {
                    {
                        this.state = 1938;
                        this.attributes();
                    }
                }

                this.state = 1941;
                this.match(CSharpParser.ADD);
                this.state = 1942;
                this.block();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public remove_accessor_declaration(): Remove_accessor_declarationContext {
        let localctx: Remove_accessor_declarationContext = new Remove_accessor_declarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 306, CSharpParser.RULE_remove_accessor_declaration);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1945;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 127) {
                    {
                        this.state = 1944;
                        this.attributes();
                    }
                }

                this.state = 1947;
                this.match(CSharpParser.REMOVE);
                this.state = 1948;
                this.block();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public overloadable_operator(): Overloadable_operatorContext {
        let localctx: Overloadable_operatorContext = new Overloadable_operatorContext(this, this._ctx, this.state);
        this.enterRule(localctx, 308, CSharpParser.RULE_overloadable_operator);
        try {
            this.state = 1972;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 232, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1950;
                    this.match(CSharpParser.PLUS);
                }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1951;
                    this.match(CSharpParser.MINUS);
                }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                {
                    this.state = 1952;
                    this.match(CSharpParser.BANG);
                }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                {
                    this.state = 1953;
                    this.match(CSharpParser.TILDE);
                }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                {
                    this.state = 1954;
                    this.match(CSharpParser.OP_INC);
                }
                    break;
                case 6:
                    this.enterOuterAlt(localctx, 6);
                {
                    this.state = 1955;
                    this.match(CSharpParser.OP_DEC);
                }
                    break;
                case 7:
                    this.enterOuterAlt(localctx, 7);
                {
                    this.state = 1956;
                    this.match(CSharpParser.TRUE);
                }
                    break;
                case 8:
                    this.enterOuterAlt(localctx, 8);
                {
                    this.state = 1957;
                    this.match(CSharpParser.FALSE);
                }
                    break;
                case 9:
                    this.enterOuterAlt(localctx, 9);
                {
                    this.state = 1958;
                    this.match(CSharpParser.STAR);
                }
                    break;
                case 10:
                    this.enterOuterAlt(localctx, 10);
                {
                    this.state = 1959;
                    this.match(CSharpParser.DIV);
                }
                    break;
                case 11:
                    this.enterOuterAlt(localctx, 11);
                {
                    this.state = 1960;
                    this.match(CSharpParser.PERCENT);
                }
                    break;
                case 12:
                    this.enterOuterAlt(localctx, 12);
                {
                    this.state = 1961;
                    this.match(CSharpParser.AMP);
                }
                    break;
                case 13:
                    this.enterOuterAlt(localctx, 13);
                {
                    this.state = 1962;
                    this.match(CSharpParser.BITWISE_OR);
                }
                    break;
                case 14:
                    this.enterOuterAlt(localctx, 14);
                {
                    this.state = 1963;
                    this.match(CSharpParser.CARET);
                }
                    break;
                case 15:
                    this.enterOuterAlt(localctx, 15);
                {
                    this.state = 1964;
                    this.match(CSharpParser.OP_LEFT_SHIFT);
                }
                    break;
                case 16:
                    this.enterOuterAlt(localctx, 16);
                {
                    this.state = 1965;
                    this.right_shift();
                }
                    break;
                case 17:
                    this.enterOuterAlt(localctx, 17);
                {
                    this.state = 1966;
                    this.match(CSharpParser.OP_EQ);
                }
                    break;
                case 18:
                    this.enterOuterAlt(localctx, 18);
                {
                    this.state = 1967;
                    this.match(CSharpParser.OP_NE);
                }
                    break;
                case 19:
                    this.enterOuterAlt(localctx, 19);
                {
                    this.state = 1968;
                    this.match(CSharpParser.GT);
                }
                    break;
                case 20:
                    this.enterOuterAlt(localctx, 20);
                {
                    this.state = 1969;
                    this.match(CSharpParser.LT);
                }
                    break;
                case 21:
                    this.enterOuterAlt(localctx, 21);
                {
                    this.state = 1970;
                    this.match(CSharpParser.OP_GE);
                }
                    break;
                case 22:
                    this.enterOuterAlt(localctx, 22);
                {
                    this.state = 1971;
                    this.match(CSharpParser.OP_LE);
                }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public conversion_operator_declarator(): Conversion_operator_declaratorContext {
        let localctx: Conversion_operator_declaratorContext = new Conversion_operator_declaratorContext(this, this._ctx, this.state);
        this.enterRule(localctx, 310, CSharpParser.RULE_conversion_operator_declarator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1974;
                _la = this._input.LA(1);
                if (!(_la === 40 || _la === 53)) {
                    this._errHandler.recoverInline(this);
                } else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1975;
                this.match(CSharpParser.OPERATOR);
                this.state = 1976;
                this.type_();
                this.state = 1977;
                this.match(CSharpParser.OPEN_PARENS);
                this.state = 1978;
                this.arg_declaration();
                this.state = 1979;
                this.match(CSharpParser.CLOSE_PARENS);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public constructor_initializer(): Constructor_initializerContext {
        let localctx: Constructor_initializerContext = new Constructor_initializerContext(this, this._ctx, this.state);
        this.enterRule(localctx, 312, CSharpParser.RULE_constructor_initializer);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1981;
                this.match(CSharpParser.COLON);
                this.state = 1982;
                _la = this._input.LA(1);
                if (!(_la === 17 || _la === 94)) {
                    this._errHandler.recoverInline(this);
                } else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1983;
                this.match(CSharpParser.OPEN_PARENS);
                this.state = 1985;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 326684151) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 1869427401) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 2947104097) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & 941752301) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & 2147489821) !== 0)) {
                    {
                        this.state = 1984;
                        this.argument_list();
                    }
                }

                this.state = 1987;
                this.match(CSharpParser.CLOSE_PARENS);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public body(): BodyContext {
        let localctx: BodyContext = new BodyContext(this, this._ctx, this.state);
        this.enterRule(localctx, 314, CSharpParser.RULE_body);
        try {
            this.state = 1991;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 125:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 1989;
                    this.block();
                }
                    break;
                case 134:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 1990;
                    this.match(CSharpParser.SEMICOLON);
                }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public struct_interfaces(): Struct_interfacesContext {
        let localctx: Struct_interfacesContext = new Struct_interfacesContext(this, this._ctx, this.state);
        this.enterRule(localctx, 316, CSharpParser.RULE_struct_interfaces);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1993;
                this.match(CSharpParser.COLON);
                this.state = 1994;
                this.interface_type_list();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public struct_body(): Struct_bodyContext {
        let localctx: Struct_bodyContext = new Struct_bodyContext(this, this._ctx, this.state);
        this.enterRule(localctx, 318, CSharpParser.RULE_struct_body);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1996;
                this.match(CSharpParser.OPEN_BRACE);
                this.state = 2000;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2905988608) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3081450477) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 486275765) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 1342234555) !== 0)) {
                    {
                        {
                            this.state = 1997;
                            this.struct_member_declaration();
                        }
                    }
                    this.state = 2002;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2003;
                this.match(CSharpParser.CLOSE_BRACE);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public struct_member_declaration(): Struct_member_declarationContext {
        let localctx: Struct_member_declarationContext = new Struct_member_declarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 320, CSharpParser.RULE_struct_member_declaration);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2006;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 127) {
                    {
                        this.state = 2005;
                        this.attributes();
                    }
                }

                this.state = 2009;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 237, this._ctx)) {
                    case 1: {
                        this.state = 2008;
                        this.all_member_modifiers();
                    }
                        break;
                }
                this.state = 2021;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 10:
                    case 11:
                    case 12:
                    case 14:
                    case 15:
                    case 16:
                    case 18:
                    case 20:
                    case 21:
                    case 24:
                    case 26:
                    case 27:
                    case 29:
                    case 31:
                    case 32:
                    case 34:
                    case 35:
                    case 37:
                    case 38:
                    case 39:
                    case 40:
                    case 45:
                    case 48:
                    case 49:
                    case 51:
                    case 53:
                    case 55:
                    case 56:
                    case 58:
                    case 60:
                    case 61:
                    case 63:
                    case 64:
                    case 68:
                    case 69:
                    case 71:
                    case 75:
                    case 79:
                    case 80:
                    case 81:
                    case 83:
                    case 85:
                    case 86:
                    case 87:
                    case 91:
                    case 92:
                    case 99:
                    case 100:
                    case 102:
                    case 104:
                    case 106:
                    case 108:
                    case 110:
                    case 111:
                    case 113:
                    case 114:
                    case 129: {
                        this.state = 2011;
                        this.common_member_declaration();
                    }
                        break;
                    case 44: {
                        this.state = 2012;
                        this.match(CSharpParser.FIXED);
                        this.state = 2013;
                        this.type_();
                        this.state = 2015;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 2014;
                                    this.fixed_size_buffer_declarator();
                                }
                            }
                            this.state = 2017;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1170432) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 873136201) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 6424737) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 6929) !== 0));
                        this.state = 2019;
                        this.match(CSharpParser.SEMICOLON);
                    }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public array_type(): Array_typeContext {
        let localctx: Array_typeContext = new Array_typeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 322, CSharpParser.RULE_array_type);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2023;
                this.base_type();
                this.state = 2031;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 2027;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === 137 || _la === 148) {
                                {
                                    {
                                        this.state = 2024;
                                        _la = this._input.LA(1);
                                        if (!(_la === 137 || _la === 148)) {
                                            this._errHandler.recoverInline(this);
                                        } else {
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                    }
                                }
                                this.state = 2029;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2030;
                            this.rank_specifier();
                        }
                    }
                    this.state = 2033;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & 2098177) !== 0));
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public rank_specifier(): Rank_specifierContext {
        let localctx: Rank_specifierContext = new Rank_specifierContext(this, this._ctx, this.state);
        this.enterRule(localctx, 324, CSharpParser.RULE_rank_specifier);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2035;
                this.match(CSharpParser.OPEN_BRACKET);
                this.state = 2039;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 132) {
                    {
                        {
                            this.state = 2036;
                            this.match(CSharpParser.COMMA);
                        }
                    }
                    this.state = 2041;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2042;
                this.match(CSharpParser.CLOSE_BRACKET);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public array_initializer(): Array_initializerContext {
        let localctx: Array_initializerContext = new Array_initializerContext(this, this._ctx, this.state);
        this.enterRule(localctx, 326, CSharpParser.RULE_array_initializer);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2044;
                this.match(CSharpParser.OPEN_BRACE);
                this.state = 2056;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 326684151) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 795681481) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 2947104097) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 1309212667) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & 536872455) !== 0)) {
                    {
                        this.state = 2045;
                        this.variable_initializer();
                        this.state = 2050;
                        this._errHandler.sync(this);
                        _alt = this._interp.adaptivePredict(this._input, 243, this._ctx);
                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 2046;
                                        this.match(CSharpParser.COMMA);
                                        this.state = 2047;
                                        this.variable_initializer();
                                    }
                                }
                            }
                            this.state = 2052;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 243, this._ctx);
                        }
                        this.state = 2054;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 132) {
                            {
                                this.state = 2053;
                                this.match(CSharpParser.COMMA);
                            }
                        }

                    }
                }

                this.state = 2058;
                this.match(CSharpParser.CLOSE_BRACE);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public variant_type_parameter_list(): Variant_type_parameter_listContext {
        let localctx: Variant_type_parameter_listContext = new Variant_type_parameter_listContext(this, this._ctx, this.state);
        this.enterRule(localctx, 328, CSharpParser.RULE_variant_type_parameter_list);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2060;
                this.match(CSharpParser.LT);
                this.state = 2061;
                this.variant_type_parameter();
                this.state = 2066;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 132) {
                    {
                        {
                            this.state = 2062;
                            this.match(CSharpParser.COMMA);
                            this.state = 2063;
                            this.variant_type_parameter();
                        }
                    }
                    this.state = 2068;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2069;
                this.match(CSharpParser.GT);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public variant_type_parameter(): Variant_type_parameterContext {
        let localctx: Variant_type_parameterContext = new Variant_type_parameterContext(this, this._ctx, this.state);
        this.enterRule(localctx, 330, CSharpParser.RULE_variant_type_parameter);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2072;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 127) {
                    {
                        this.state = 2071;
                        this.attributes();
                    }
                }

                this.state = 2075;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 54 || _la === 72) {
                    {
                        this.state = 2074;
                        this.variance_annotation();
                    }
                }

                this.state = 2077;
                this.identifier();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public variance_annotation(): Variance_annotationContext {
        let localctx: Variance_annotationContext = new Variance_annotationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 332, CSharpParser.RULE_variance_annotation);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2079;
                _la = this._input.LA(1);
                if (!(_la === 54 || _la === 72)) {
                    this._errHandler.recoverInline(this);
                } else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public interface_base(): Interface_baseContext {
        let localctx: Interface_baseContext = new Interface_baseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 334, CSharpParser.RULE_interface_base);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2081;
                this.match(CSharpParser.COLON);
                this.state = 2082;
                this.interface_type_list();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public interface_body(): Interface_bodyContext {
        let localctx: Interface_bodyContext = new Interface_bodyContext(this, this._ctx, this.state);
        this.enterRule(localctx, 336, CSharpParser.RULE_interface_body);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2084;
                this.match(CSharpParser.OPEN_BRACE);
                this.state = 2088;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 557177856) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3029016781) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 149653685) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 1342233275) !== 0)) {
                    {
                        {
                            this.state = 2085;
                            this.interface_member_declaration();
                        }
                    }
                    this.state = 2090;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2091;
                this.match(CSharpParser.CLOSE_BRACE);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public interface_member_declaration(): Interface_member_declarationContext {
        let localctx: Interface_member_declarationContext = new Interface_member_declarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 338, CSharpParser.RULE_interface_member_declaration);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2094;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 127) {
                    {
                        this.state = 2093;
                        this.attributes();
                    }
                }

                this.state = 2097;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 66) {
                    {
                        this.state = 2096;
                        this.match(CSharpParser.NEW);
                    }
                }

                this.state = 2162;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 262, this._ctx)) {
                    case 1: {
                        this.state = 2100;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 103) {
                            {
                                this.state = 2099;
                                this.match(CSharpParser.UNSAFE);
                            }
                        }

                        this.state = 2107;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 253, this._ctx)) {
                            case 1: {
                                this.state = 2102;
                                this.match(CSharpParser.REF);
                            }
                                break;
                            case 2: {
                                this.state = 2103;
                                this.match(CSharpParser.REF);
                                this.state = 2104;
                                this.match(CSharpParser.READONLY);
                            }
                                break;
                            case 3: {
                                this.state = 2105;
                                this.match(CSharpParser.READONLY);
                                this.state = 2106;
                                this.match(CSharpParser.REF);
                            }
                                break;
                        }
                        this.state = 2109;
                        this.type_();
                        this.state = 2137;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 257, this._ctx)) {
                            case 1: {
                                this.state = 2110;
                                this.identifier();
                                this.state = 2112;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === 146) {
                                    {
                                        this.state = 2111;
                                        this.type_parameter_list();
                                    }
                                }

                                this.state = 2114;
                                this.match(CSharpParser.OPEN_PARENS);
                                this.state = 2116;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 557177856) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3033210957) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1223364017) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 1342233259) !== 0)) {
                                    {
                                        this.state = 2115;
                                        this.formal_parameter_list();
                                    }
                                }

                                this.state = 2118;
                                this.match(CSharpParser.CLOSE_PARENS);
                                this.state = 2120;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === 111) {
                                    {
                                        this.state = 2119;
                                        this.type_parameter_constraints_clauses();
                                    }
                                }

                                this.state = 2122;
                                this.match(CSharpParser.SEMICOLON);
                            }
                                break;
                            case 2: {
                                this.state = 2124;
                                this.identifier();
                                this.state = 2125;
                                this.match(CSharpParser.OPEN_BRACE);
                                this.state = 2126;
                                this.interface_accessors();
                                this.state = 2127;
                                this.match(CSharpParser.CLOSE_BRACE);
                            }
                                break;
                            case 3: {
                                this.state = 2129;
                                this.match(CSharpParser.THIS);
                                this.state = 2130;
                                this.match(CSharpParser.OPEN_BRACKET);
                                this.state = 2131;
                                this.formal_parameter_list();
                                this.state = 2132;
                                this.match(CSharpParser.CLOSE_BRACKET);
                                this.state = 2133;
                                this.match(CSharpParser.OPEN_BRACE);
                                this.state = 2134;
                                this.interface_accessors();
                                this.state = 2135;
                                this.match(CSharpParser.CLOSE_BRACE);
                            }
                                break;
                        }
                    }
                        break;
                    case 2: {
                        this.state = 2140;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 103) {
                            {
                                this.state = 2139;
                                this.match(CSharpParser.UNSAFE);
                            }
                        }

                        this.state = 2142;
                        this.match(CSharpParser.VOID);
                        this.state = 2143;
                        this.identifier();
                        this.state = 2145;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 146) {
                            {
                                this.state = 2144;
                                this.type_parameter_list();
                            }
                        }

                        this.state = 2147;
                        this.match(CSharpParser.OPEN_PARENS);
                        this.state = 2149;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 557177856) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3033210957) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1223364017) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 1342233259) !== 0)) {
                            {
                                this.state = 2148;
                                this.formal_parameter_list();
                            }
                        }

                        this.state = 2151;
                        this.match(CSharpParser.CLOSE_PARENS);
                        this.state = 2153;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 111) {
                            {
                                this.state = 2152;
                                this.type_parameter_constraints_clauses();
                            }
                        }

                        this.state = 2155;
                        this.match(CSharpParser.SEMICOLON);
                    }
                        break;
                    case 3: {
                        this.state = 2157;
                        this.match(CSharpParser.EVENT);
                        this.state = 2158;
                        this.type_();
                        this.state = 2159;
                        this.identifier();
                        this.state = 2160;
                        this.match(CSharpParser.SEMICOLON);
                    }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public interface_accessors(): Interface_accessorsContext {
        let localctx: Interface_accessorsContext = new Interface_accessorsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 340, CSharpParser.RULE_interface_accessors);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2165;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 127) {
                    {
                        this.state = 2164;
                        this.attributes();
                    }
                }

                this.state = 2185;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 49: {
                        this.state = 2167;
                        this.match(CSharpParser.GET);
                        this.state = 2168;
                        this.match(CSharpParser.SEMICOLON);
                        this.state = 2174;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 86 || _la === 127) {
                            {
                                this.state = 2170;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === 127) {
                                    {
                                        this.state = 2169;
                                        this.attributes();
                                    }
                                }

                                this.state = 2172;
                                this.match(CSharpParser.SET);
                                this.state = 2173;
                                this.match(CSharpParser.SEMICOLON);
                            }
                        }

                    }
                        break;
                    case 86: {
                        this.state = 2176;
                        this.match(CSharpParser.SET);
                        this.state = 2177;
                        this.match(CSharpParser.SEMICOLON);
                        this.state = 2183;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 49 || _la === 127) {
                            {
                                this.state = 2179;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === 127) {
                                    {
                                        this.state = 2178;
                                        this.attributes();
                                    }
                                }

                                this.state = 2181;
                                this.match(CSharpParser.GET);
                                this.state = 2182;
                                this.match(CSharpParser.SEMICOLON);
                            }
                        }

                    }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public enum_base(): Enum_baseContext {
        let localctx: Enum_baseContext = new Enum_baseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 342, CSharpParser.RULE_enum_base);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2187;
                this.match(CSharpParser.COLON);
                this.state = 2188;
                this.type_();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public enum_body(): Enum_bodyContext {
        let localctx: Enum_bodyContext = new Enum_bodyContext(this, this._ctx, this.state);
        this.enterRule(localctx, 344, CSharpParser.RULE_enum_body);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2190;
                this.match(CSharpParser.OPEN_BRACE);
                this.state = 2202;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1170432) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 873136201) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 6424737) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 33561361) !== 0)) {
                    {
                        this.state = 2191;
                        this.enum_member_declaration();
                        this.state = 2196;
                        this._errHandler.sync(this);
                        _alt = this._interp.adaptivePredict(this._input, 269, this._ctx);
                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 2192;
                                        this.match(CSharpParser.COMMA);
                                        this.state = 2193;
                                        this.enum_member_declaration();
                                    }
                                }
                            }
                            this.state = 2198;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 269, this._ctx);
                        }
                        this.state = 2200;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 132) {
                            {
                                this.state = 2199;
                                this.match(CSharpParser.COMMA);
                            }
                        }

                    }
                }

                this.state = 2204;
                this.match(CSharpParser.CLOSE_BRACE);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public enum_member_declaration(): Enum_member_declarationContext {
        let localctx: Enum_member_declarationContext = new Enum_member_declarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 346, CSharpParser.RULE_enum_member_declaration);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2207;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 127) {
                    {
                        this.state = 2206;
                        this.attributes();
                    }
                }

                this.state = 2209;
                this.identifier();
                this.state = 2212;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 145) {
                    {
                        this.state = 2210;
                        this.match(CSharpParser.ASSIGNMENT);
                        this.state = 2211;
                        this.expression();
                    }
                }

            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public global_attribute_section(): Global_attribute_sectionContext {
        let localctx: Global_attribute_sectionContext = new Global_attribute_sectionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 348, CSharpParser.RULE_global_attribute_section);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2214;
                this.match(CSharpParser.OPEN_BRACKET);
                this.state = 2215;
                this.global_attribute_target();
                this.state = 2216;
                this.match(CSharpParser.COLON);
                this.state = 2217;
                this.attribute_list();
                this.state = 2219;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 132) {
                    {
                        this.state = 2218;
                        this.match(CSharpParser.COMMA);
                    }
                }

                this.state = 2221;
                this.match(CSharpParser.CLOSE_BRACKET);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public global_attribute_target(): Global_attribute_targetContext {
        let localctx: Global_attribute_targetContext = new Global_attribute_targetContext(this, this._ctx, this.state);
        this.enterRule(localctx, 350, CSharpParser.RULE_global_attribute_target);
        try {
            this.state = 2225;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 275, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 2223;
                    this.keyword();
                }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 2224;
                    this.identifier();
                }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public attributes(): AttributesContext {
        let localctx: AttributesContext = new AttributesContext(this, this._ctx, this.state);
        this.enterRule(localctx, 352, CSharpParser.RULE_attributes);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2228;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 2227;
                            this.attribute_section();
                        }
                    }
                    this.state = 2230;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === 127);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public attribute_section(): Attribute_sectionContext {
        let localctx: Attribute_sectionContext = new Attribute_sectionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 354, CSharpParser.RULE_attribute_section);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2232;
                this.match(CSharpParser.OPEN_BRACKET);
                this.state = 2236;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 277, this._ctx)) {
                    case 1: {
                        this.state = 2233;
                        this.attribute_target();
                        this.state = 2234;
                        this.match(CSharpParser.COLON);
                    }
                        break;
                }
                this.state = 2238;
                this.attribute_list();
                this.state = 2240;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 132) {
                    {
                        this.state = 2239;
                        this.match(CSharpParser.COMMA);
                    }
                }

                this.state = 2242;
                this.match(CSharpParser.CLOSE_BRACKET);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public attribute_target(): Attribute_targetContext {
        let localctx: Attribute_targetContext = new Attribute_targetContext(this, this._ctx, this.state);
        this.enterRule(localctx, 356, CSharpParser.RULE_attribute_target);
        try {
            this.state = 2246;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 279, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 2244;
                    this.keyword();
                }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 2245;
                    this.identifier();
                }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public attribute_list(): Attribute_listContext {
        let localctx: Attribute_listContext = new Attribute_listContext(this, this._ctx, this.state);
        this.enterRule(localctx, 358, CSharpParser.RULE_attribute_list);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2248;
                this.attribute();
                this.state = 2253;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 280, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2249;
                                this.match(CSharpParser.COMMA);
                                this.state = 2250;
                                this.attribute();
                            }
                        }
                    }
                    this.state = 2255;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 280, this._ctx);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public attribute(): AttributeContext {
        let localctx: AttributeContext = new AttributeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 360, CSharpParser.RULE_attribute);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2256;
                this.namespace_or_type_name();
                this.state = 2269;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 129) {
                    {
                        this.state = 2257;
                        this.match(CSharpParser.OPEN_PARENS);
                        this.state = 2266;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 326684151) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 795681481) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 2947104097) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 1309179899) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & 536872455) !== 0)) {
                            {
                                this.state = 2258;
                                this.attribute_argument();
                                this.state = 2263;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === 132) {
                                    {
                                        {
                                            this.state = 2259;
                                            this.match(CSharpParser.COMMA);
                                            this.state = 2260;
                                            this.attribute_argument();
                                        }
                                    }
                                    this.state = 2265;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }

                        this.state = 2268;
                        this.match(CSharpParser.CLOSE_PARENS);
                    }
                }

            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public attribute_argument(): Attribute_argumentContext {
        let localctx: Attribute_argumentContext = new Attribute_argumentContext(this, this._ctx, this.state);
        this.enterRule(localctx, 362, CSharpParser.RULE_attribute_argument);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2274;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 284, this._ctx)) {
                    case 1: {
                        this.state = 2271;
                        this.identifier();
                        this.state = 2272;
                        this.match(CSharpParser.COLON);
                    }
                        break;
                }
                this.state = 2276;
                this.expression();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public pointer_type(): Pointer_typeContext {
        let localctx: Pointer_typeContext = new Pointer_typeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 364, CSharpParser.RULE_pointer_type);
        let _la: number;
        try {
            this.state = 2293;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 10:
                case 11:
                case 12:
                case 14:
                case 15:
                case 16:
                case 18:
                case 20:
                case 21:
                case 24:
                case 29:
                case 32:
                case 34:
                case 35:
                case 38:
                case 45:
                case 48:
                case 49:
                case 51:
                case 55:
                case 58:
                case 60:
                case 61:
                case 63:
                case 64:
                case 68:
                case 69:
                case 71:
                case 75:
                case 81:
                case 83:
                case 85:
                case 86:
                case 87:
                case 91:
                case 99:
                case 100:
                case 102:
                case 104:
                case 106:
                case 110:
                case 111:
                case 113:
                case 114:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 2280;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case 18:
                        case 21:
                        case 24:
                        case 29:
                        case 34:
                        case 45:
                        case 55:
                        case 63:
                        case 83:
                        case 87:
                        case 99:
                        case 100:
                        case 104: {
                            this.state = 2278;
                            this.simple_type();
                        }
                            break;
                        case 10:
                        case 11:
                        case 12:
                        case 14:
                        case 15:
                        case 16:
                        case 20:
                        case 32:
                        case 35:
                        case 38:
                        case 48:
                        case 49:
                        case 51:
                        case 58:
                        case 60:
                        case 61:
                        case 64:
                        case 68:
                        case 69:
                        case 71:
                        case 75:
                        case 81:
                        case 85:
                        case 86:
                        case 91:
                        case 102:
                        case 106:
                        case 110:
                        case 111:
                        case 113:
                        case 114: {
                            this.state = 2279;
                            this.class_type();
                        }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                    this.state = 2286;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === 127 || _la === 148) {
                        {
                            this.state = 2284;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case 127: {
                                    this.state = 2282;
                                    this.rank_specifier();
                                }
                                    break;
                                case 148: {
                                    this.state = 2283;
                                    this.match(CSharpParser.INTERR);
                                }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                        }
                        this.state = 2288;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2289;
                    this.match(CSharpParser.STAR);
                }
                    break;
                case 108:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 2291;
                    this.match(CSharpParser.VOID);
                    this.state = 2292;
                    this.match(CSharpParser.STAR);
                }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public fixed_pointer_declarators(): Fixed_pointer_declaratorsContext {
        let localctx: Fixed_pointer_declaratorsContext = new Fixed_pointer_declaratorsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 366, CSharpParser.RULE_fixed_pointer_declarators);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2295;
                this.fixed_pointer_declarator();
                this.state = 2300;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 132) {
                    {
                        {
                            this.state = 2296;
                            this.match(CSharpParser.COMMA);
                            this.state = 2297;
                            this.fixed_pointer_declarator();
                        }
                    }
                    this.state = 2302;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public fixed_pointer_declarator(): Fixed_pointer_declaratorContext {
        let localctx: Fixed_pointer_declaratorContext = new Fixed_pointer_declaratorContext(this, this._ctx, this.state);
        this.enterRule(localctx, 368, CSharpParser.RULE_fixed_pointer_declarator);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2303;
                this.identifier();
                this.state = 2304;
                this.match(CSharpParser.ASSIGNMENT);
                this.state = 2305;
                this.fixed_pointer_initializer();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public fixed_pointer_initializer(): Fixed_pointer_initializerContext {
        let localctx: Fixed_pointer_initializerContext = new Fixed_pointer_initializerContext(this, this._ctx, this.state);
        this.enterRule(localctx, 370, CSharpParser.RULE_fixed_pointer_initializer);
        try {
            this.state = 2312;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 10:
                case 11:
                case 12:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 20:
                case 21:
                case 24:
                case 25:
                case 29:
                case 30:
                case 31:
                case 32:
                case 34:
                case 35:
                case 38:
                case 42:
                case 45:
                case 48:
                case 49:
                case 51:
                case 55:
                case 58:
                case 60:
                case 61:
                case 63:
                case 64:
                case 66:
                case 67:
                case 68:
                case 69:
                case 71:
                case 75:
                case 80:
                case 81:
                case 83:
                case 85:
                case 86:
                case 87:
                case 88:
                case 91:
                case 94:
                case 96:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 104:
                case 106:
                case 110:
                case 111:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                case 123:
                case 124:
                case 129:
                case 135:
                case 136:
                case 137:
                case 140:
                case 142:
                case 143:
                case 144:
                case 151:
                case 152:
                case 171:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 2308;
                    this._errHandler.sync(this);
                    switch (this._interp.adaptivePredict(this._input, 290, this._ctx)) {
                        case 1: {
                            this.state = 2307;
                            this.match(CSharpParser.AMP);
                        }
                            break;
                    }
                    this.state = 2310;
                    this.expression();
                }
                    break;
                case 89:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 2311;
                    this.stackalloc_initializer();
                }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public fixed_size_buffer_declarator(): Fixed_size_buffer_declaratorContext {
        let localctx: Fixed_size_buffer_declaratorContext = new Fixed_size_buffer_declaratorContext(this, this._ctx, this.state);
        this.enterRule(localctx, 372, CSharpParser.RULE_fixed_size_buffer_declarator);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2314;
                this.identifier();
                this.state = 2315;
                this.match(CSharpParser.OPEN_BRACKET);
                this.state = 2316;
                this.expression();
                this.state = 2317;
                this.match(CSharpParser.CLOSE_BRACKET);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public stackalloc_initializer(): Stackalloc_initializerContext {
        let localctx: Stackalloc_initializerContext = new Stackalloc_initializerContext(this, this._ctx, this.state);
        this.enterRule(localctx, 374, CSharpParser.RULE_stackalloc_initializer);
        let _la: number;
        try {
            let _alt: number;
            this.state = 2348;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 296, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 2319;
                    this.match(CSharpParser.STACKALLOC);
                    this.state = 2320;
                    this.type_();
                    this.state = 2321;
                    this.match(CSharpParser.OPEN_BRACKET);
                    this.state = 2322;
                    this.expression();
                    this.state = 2323;
                    this.match(CSharpParser.CLOSE_BRACKET);
                }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 2325;
                    this.match(CSharpParser.STACKALLOC);
                    this.state = 2327;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 557177856) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3029016653) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 149555377) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 1073797803) !== 0)) {
                        {
                            this.state = 2326;
                            this.type_();
                        }
                    }

                    this.state = 2329;
                    this.match(CSharpParser.OPEN_BRACKET);
                    this.state = 2331;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 326684151) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 795681481) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 2947104097) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 1309179899) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & 536872455) !== 0)) {
                        {
                            this.state = 2330;
                            this.expression();
                        }
                    }

                    this.state = 2333;
                    this.match(CSharpParser.CLOSE_BRACKET);
                    this.state = 2334;
                    this.match(CSharpParser.OPEN_BRACE);
                    this.state = 2335;
                    this.expression();
                    this.state = 2340;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 294, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 2336;
                                    this.match(CSharpParser.COMMA);
                                    this.state = 2337;
                                    this.expression();
                                }
                            }
                        }
                        this.state = 2342;
                        this._errHandler.sync(this);
                        _alt = this._interp.adaptivePredict(this._input, 294, this._ctx);
                    }
                    this.state = 2344;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === 132) {
                        {
                            this.state = 2343;
                            this.match(CSharpParser.COMMA);
                        }
                    }

                    this.state = 2346;
                    this.match(CSharpParser.CLOSE_BRACE);
                }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public right_arrow(): Right_arrowContext {
        let localctx: Right_arrowContext = new Right_arrowContext(this, this._ctx, this.state);
        this.enterRule(localctx, 376, CSharpParser.RULE_right_arrow);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2350;
                localctx._first = this.match(CSharpParser.ASSIGNMENT);
                this.state = 2351;
                localctx._second = this.match(CSharpParser.GT);
                this.state = 2352;
                if (!((localctx._first != null ? localctx._first.tokenIndex : 0) + 1 == (localctx._second != null ? localctx._second.tokenIndex : 0))) {
                    throw this.createFailedPredicateException("$first.index + 1 == $second.index");
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public right_shift(): Right_shiftContext {
        let localctx: Right_shiftContext = new Right_shiftContext(this, this._ctx, this.state);
        this.enterRule(localctx, 378, CSharpParser.RULE_right_shift);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2354;
                localctx._first = this.match(CSharpParser.GT);
                this.state = 2355;
                localctx._second = this.match(CSharpParser.GT);
                this.state = 2356;
                if (!((localctx._first != null ? localctx._first.tokenIndex : 0) + 1 == (localctx._second != null ? localctx._second.tokenIndex : 0))) {
                    throw this.createFailedPredicateException("$first.index + 1 == $second.index");
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public right_shift_assignment(): Right_shift_assignmentContext {
        let localctx: Right_shift_assignmentContext = new Right_shift_assignmentContext(this, this._ctx, this.state);
        this.enterRule(localctx, 380, CSharpParser.RULE_right_shift_assignment);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2358;
                localctx._first = this.match(CSharpParser.GT);
                this.state = 2359;
                localctx._second = this.match(CSharpParser.OP_GE);
                this.state = 2360;
                if (!((localctx._first != null ? localctx._first.tokenIndex : 0) + 1 == (localctx._second != null ? localctx._second.tokenIndex : 0))) {
                    throw this.createFailedPredicateException("$first.index + 1 == $second.index");
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public literal(): LiteralContext {
        let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
        this.enterRule(localctx, 382, CSharpParser.RULE_literal);
        try {
            this.state = 2370;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 42:
                case 96:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 2362;
                    this.boolean_literal();
                }
                    break;
                case 121:
                case 122:
                case 123:
                case 124:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 2363;
                    this.string_literal();
                }
                    break;
                case 116:
                    this.enterOuterAlt(localctx, 3);
                {
                    this.state = 2364;
                    this.match(CSharpParser.INTEGER_LITERAL);
                }
                    break;
                case 117:
                    this.enterOuterAlt(localctx, 4);
                {
                    this.state = 2365;
                    this.match(CSharpParser.HEX_INTEGER_LITERAL);
                }
                    break;
                case 118:
                    this.enterOuterAlt(localctx, 5);
                {
                    this.state = 2366;
                    this.match(CSharpParser.BIN_INTEGER_LITERAL);
                }
                    break;
                case 119:
                    this.enterOuterAlt(localctx, 6);
                {
                    this.state = 2367;
                    this.match(CSharpParser.REAL_LITERAL);
                }
                    break;
                case 120:
                    this.enterOuterAlt(localctx, 7);
                {
                    this.state = 2368;
                    this.match(CSharpParser.CHARACTER_LITERAL);
                }
                    break;
                case 67:
                    this.enterOuterAlt(localctx, 8);
                {
                    this.state = 2369;
                    this.match(CSharpParser.NULL_);
                }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public boolean_literal(): Boolean_literalContext {
        let localctx: Boolean_literalContext = new Boolean_literalContext(this, this._ctx, this.state);
        this.enterRule(localctx, 384, CSharpParser.RULE_boolean_literal);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2372;
                _la = this._input.LA(1);
                if (!(_la === 42 || _la === 96)) {
                    this._errHandler.recoverInline(this);
                } else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public string_literal(): String_literalContext {
        let localctx: String_literalContext = new String_literalContext(this, this._ctx, this.state);
        this.enterRule(localctx, 386, CSharpParser.RULE_string_literal);
        try {
            this.state = 2378;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 123:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 2374;
                    this.interpolated_regular_string();
                }
                    break;
                case 124:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 2375;
                    this.interpolated_verbatium_string();
                }
                    break;
                case 121:
                    this.enterOuterAlt(localctx, 3);
                {
                    this.state = 2376;
                    this.match(CSharpParser.REGULAR_STRING);
                }
                    break;
                case 122:
                    this.enterOuterAlt(localctx, 4);
                {
                    this.state = 2377;
                    this.match(CSharpParser.VERBATIUM_STRING);
                }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public interpolated_regular_string(): Interpolated_regular_stringContext {
        let localctx: Interpolated_regular_stringContext = new Interpolated_regular_stringContext(this, this._ctx, this.state);
        this.enterRule(localctx, 388, CSharpParser.RULE_interpolated_regular_string);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2380;
                this.match(CSharpParser.INTERPOLATED_REGULAR_STRING_START);
                this.state = 2384;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3812088832) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3029017677) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1240139965) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 536790397) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 12642753) !== 0) || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & 75) !== 0)) {
                    {
                        {
                            this.state = 2381;
                            this.interpolated_regular_string_part();
                        }
                    }
                    this.state = 2386;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2387;
                this.match(CSharpParser.DOUBLE_QUOTE_INSIDE);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public interpolated_verbatium_string(): Interpolated_verbatium_stringContext {
        let localctx: Interpolated_verbatium_stringContext = new Interpolated_verbatium_stringContext(this, this._ctx, this.state);
        this.enterRule(localctx, 390, CSharpParser.RULE_interpolated_verbatium_string);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2389;
                this.match(CSharpParser.INTERPOLATED_VERBATIUM_STRING_START);
                this.state = 2393;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3812088832) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3029017677) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1240139965) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 536790397) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 12642753) !== 0) || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & 147) !== 0)) {
                    {
                        {
                            this.state = 2390;
                            this.interpolated_verbatium_string_part();
                        }
                    }
                    this.state = 2395;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2396;
                this.match(CSharpParser.DOUBLE_QUOTE_INSIDE);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public interpolated_regular_string_part(): Interpolated_regular_string_partContext {
        let localctx: Interpolated_regular_string_partContext = new Interpolated_regular_string_partContext(this, this._ctx, this.state);
        this.enterRule(localctx, 392, CSharpParser.RULE_interpolated_regular_string_part);
        try {
            this.state = 2402;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 10:
                case 11:
                case 12:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 20:
                case 21:
                case 24:
                case 25:
                case 29:
                case 30:
                case 31:
                case 32:
                case 34:
                case 35:
                case 38:
                case 42:
                case 45:
                case 48:
                case 49:
                case 51:
                case 55:
                case 58:
                case 60:
                case 61:
                case 63:
                case 64:
                case 66:
                case 67:
                case 68:
                case 69:
                case 71:
                case 75:
                case 80:
                case 81:
                case 83:
                case 85:
                case 86:
                case 87:
                case 88:
                case 91:
                case 94:
                case 96:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 104:
                case 106:
                case 110:
                case 111:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                case 123:
                case 124:
                case 129:
                case 135:
                case 136:
                case 137:
                case 140:
                case 142:
                case 143:
                case 144:
                case 151:
                case 152:
                case 171:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 2398;
                    this.interpolated_string_expression();
                }
                    break;
                case 172:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 2399;
                    this.match(CSharpParser.DOUBLE_CURLY_INSIDE);
                }
                    break;
                case 174:
                    this.enterOuterAlt(localctx, 3);
                {
                    this.state = 2400;
                    this.match(CSharpParser.REGULAR_CHAR_INSIDE);
                }
                    break;
                case 177:
                    this.enterOuterAlt(localctx, 4);
                {
                    this.state = 2401;
                    this.match(CSharpParser.REGULAR_STRING_INSIDE);
                }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public interpolated_verbatium_string_part(): Interpolated_verbatium_string_partContext {
        let localctx: Interpolated_verbatium_string_partContext = new Interpolated_verbatium_string_partContext(this, this._ctx, this.state);
        this.enterRule(localctx, 394, CSharpParser.RULE_interpolated_verbatium_string_part);
        try {
            this.state = 2408;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 10:
                case 11:
                case 12:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 20:
                case 21:
                case 24:
                case 25:
                case 29:
                case 30:
                case 31:
                case 32:
                case 34:
                case 35:
                case 38:
                case 42:
                case 45:
                case 48:
                case 49:
                case 51:
                case 55:
                case 58:
                case 60:
                case 61:
                case 63:
                case 64:
                case 66:
                case 67:
                case 68:
                case 69:
                case 71:
                case 75:
                case 80:
                case 81:
                case 83:
                case 85:
                case 86:
                case 87:
                case 88:
                case 91:
                case 94:
                case 96:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 104:
                case 106:
                case 110:
                case 111:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                case 123:
                case 124:
                case 129:
                case 135:
                case 136:
                case 137:
                case 140:
                case 142:
                case 143:
                case 144:
                case 151:
                case 152:
                case 171:
                    this.enterOuterAlt(localctx, 1);
                {
                    this.state = 2404;
                    this.interpolated_string_expression();
                }
                    break;
                case 172:
                    this.enterOuterAlt(localctx, 2);
                {
                    this.state = 2405;
                    this.match(CSharpParser.DOUBLE_CURLY_INSIDE);
                }
                    break;
                case 175:
                    this.enterOuterAlt(localctx, 3);
                {
                    this.state = 2406;
                    this.match(CSharpParser.VERBATIUM_DOUBLE_QUOTE_INSIDE);
                }
                    break;
                case 178:
                    this.enterOuterAlt(localctx, 4);
                {
                    this.state = 2407;
                    this.match(CSharpParser.VERBATIUM_INSIDE_STRING);
                }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public interpolated_string_expression(): Interpolated_string_expressionContext {
        let localctx: Interpolated_string_expressionContext = new Interpolated_string_expressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 396, CSharpParser.RULE_interpolated_string_expression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2410;
                this.expression();
                this.state = 2415;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 132) {
                    {
                        {
                            this.state = 2411;
                            this.match(CSharpParser.COMMA);
                            this.state = 2412;
                            this.expression();
                        }
                    }
                    this.state = 2417;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2424;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 133) {
                    {
                        this.state = 2418;
                        this.match(CSharpParser.COLON);
                        this.state = 2420;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 2419;
                                    this.match(CSharpParser.FORMAT_STRING);
                                }
                            }
                            this.state = 2422;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === 180);
                    }
                }

            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public keyword(): KeywordContext {
        let localctx: KeywordContext = new KeywordContext(this, this._ctx, this.state);
        this.enterRule(localctx, 398, CSharpParser.RULE_keyword);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2426;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4293796352) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1710915547) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 4291754927) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 40447) !== 0))) {
                    this._errHandler.recoverInline(this);
                } else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public class_definition(): Class_definitionContext {
        let localctx: Class_definitionContext = new Class_definitionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 400, CSharpParser.RULE_class_definition);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2428;
                this.match(CSharpParser.CLASS);
                this.state = 2429;
                this.identifier();
                this.state = 2431;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 146) {
                    {
                        this.state = 2430;
                        this.type_parameter_list();
                    }
                }

                this.state = 2434;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 133) {
                    {
                        this.state = 2433;
                        this.class_base();
                    }
                }

                this.state = 2437;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 111) {
                    {
                        this.state = 2436;
                        this.type_parameter_constraints_clauses();
                    }
                }

                this.state = 2439;
                this.class_body();
                this.state = 2441;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 134) {
                    {
                        this.state = 2440;
                        this.match(CSharpParser.SEMICOLON);
                    }
                }

            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public struct_definition(): Struct_definitionContext {
        let localctx: Struct_definitionContext = new Struct_definitionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 402, CSharpParser.RULE_struct_definition);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2444;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 79 || _la === 80) {
                    {
                        this.state = 2443;
                        _la = this._input.LA(1);
                        if (!(_la === 79 || _la === 80)) {
                            this._errHandler.recoverInline(this);
                        } else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }

                this.state = 2446;
                this.match(CSharpParser.STRUCT);
                this.state = 2447;
                this.identifier();
                this.state = 2449;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 146) {
                    {
                        this.state = 2448;
                        this.type_parameter_list();
                    }
                }

                this.state = 2452;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 133) {
                    {
                        this.state = 2451;
                        this.struct_interfaces();
                    }
                }

                this.state = 2455;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 111) {
                    {
                        this.state = 2454;
                        this.type_parameter_constraints_clauses();
                    }
                }

                this.state = 2457;
                this.struct_body();
                this.state = 2459;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 134) {
                    {
                        this.state = 2458;
                        this.match(CSharpParser.SEMICOLON);
                    }
                }

            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public interface_definition(): Interface_definitionContext {
        let localctx: Interface_definitionContext = new Interface_definitionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 404, CSharpParser.RULE_interface_definition);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2461;
                this.match(CSharpParser.INTERFACE);
                this.state = 2462;
                this.identifier();
                this.state = 2464;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 146) {
                    {
                        this.state = 2463;
                        this.variant_type_parameter_list();
                    }
                }

                this.state = 2467;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 133) {
                    {
                        this.state = 2466;
                        this.interface_base();
                    }
                }

                this.state = 2470;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 111) {
                    {
                        this.state = 2469;
                        this.type_parameter_constraints_clauses();
                    }
                }

                this.state = 2472;
                this.class_body();
                this.state = 2474;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 134) {
                    {
                        this.state = 2473;
                        this.match(CSharpParser.SEMICOLON);
                    }
                }

            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public enum_definition(): Enum_definitionContext {
        let localctx: Enum_definitionContext = new Enum_definitionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 406, CSharpParser.RULE_enum_definition);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2476;
                this.match(CSharpParser.ENUM);
                this.state = 2477;
                this.identifier();
                this.state = 2479;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 133) {
                    {
                        this.state = 2478;
                        this.enum_base();
                    }
                }

                this.state = 2481;
                this.enum_body();
                this.state = 2483;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 134) {
                    {
                        this.state = 2482;
                        this.match(CSharpParser.SEMICOLON);
                    }
                }

            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public delegate_definition(): Delegate_definitionContext {
        let localctx: Delegate_definitionContext = new Delegate_definitionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 408, CSharpParser.RULE_delegate_definition);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2485;
                this.match(CSharpParser.DELEGATE);
                this.state = 2486;
                this.return_type();
                this.state = 2487;
                this.identifier();
                this.state = 2489;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 146) {
                    {
                        this.state = 2488;
                        this.variant_type_parameter_list();
                    }
                }

                this.state = 2491;
                this.match(CSharpParser.OPEN_PARENS);
                this.state = 2493;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 557177856) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3033210957) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1223364017) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 1342233259) !== 0)) {
                    {
                        this.state = 2492;
                        this.formal_parameter_list();
                    }
                }

                this.state = 2495;
                this.match(CSharpParser.CLOSE_PARENS);
                this.state = 2497;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 111) {
                    {
                        this.state = 2496;
                        this.type_parameter_constraints_clauses();
                    }
                }

                this.state = 2499;
                this.match(CSharpParser.SEMICOLON);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public event_declaration(): Event_declarationContext {
        let localctx: Event_declarationContext = new Event_declarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 410, CSharpParser.RULE_event_declaration);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2501;
                this.match(CSharpParser.EVENT);
                this.state = 2502;
                this.type_();
                this.state = 2511;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 324, this._ctx)) {
                    case 1: {
                        this.state = 2503;
                        this.variable_declarators();
                        this.state = 2504;
                        this.match(CSharpParser.SEMICOLON);
                    }
                        break;
                    case 2: {
                        this.state = 2506;
                        this.member_name();
                        this.state = 2507;
                        this.match(CSharpParser.OPEN_BRACE);
                        this.state = 2508;
                        this.event_accessor_declarations();
                        this.state = 2509;
                        this.match(CSharpParser.CLOSE_BRACE);
                    }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public field_declaration(): Field_declarationContext {
        let localctx: Field_declarationContext = new Field_declarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 412, CSharpParser.RULE_field_declaration);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2513;
                this.variable_declarators();
                this.state = 2514;
                this.match(CSharpParser.SEMICOLON);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public property_declaration(): Property_declarationContext {
        let localctx: Property_declarationContext = new Property_declarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 414, CSharpParser.RULE_property_declaration);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2516;
                this.member_name();
                this.state = 2530;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 125: {
                        this.state = 2517;
                        this.match(CSharpParser.OPEN_BRACE);
                        this.state = 2518;
                        this.accessor_declarations();
                        this.state = 2519;
                        this.match(CSharpParser.CLOSE_BRACE);
                        this.state = 2524;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 145) {
                            {
                                this.state = 2520;
                                this.match(CSharpParser.ASSIGNMENT);
                                this.state = 2521;
                                this.variable_initializer();
                                this.state = 2522;
                                this.match(CSharpParser.SEMICOLON);
                            }
                        }

                    }
                        break;
                    case 145: {
                        this.state = 2526;
                        this.right_arrow();
                        this.state = 2527;
                        this.throwable_expression();
                        this.state = 2528;
                        this.match(CSharpParser.SEMICOLON);
                    }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public constant_declaration(): Constant_declarationContext {
        let localctx: Constant_declarationContext = new Constant_declarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 416, CSharpParser.RULE_constant_declaration);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2532;
                this.match(CSharpParser.CONST);
                this.state = 2533;
                this.type_();
                this.state = 2534;
                this.constant_declarators();
                this.state = 2535;
                this.match(CSharpParser.SEMICOLON);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public indexer_declaration(): Indexer_declarationContext {
        let localctx: Indexer_declarationContext = new Indexer_declarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 418, CSharpParser.RULE_indexer_declaration);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2537;
                this.match(CSharpParser.THIS);
                this.state = 2538;
                this.match(CSharpParser.OPEN_BRACKET);
                this.state = 2539;
                this.formal_parameter_list();
                this.state = 2540;
                this.match(CSharpParser.CLOSE_BRACKET);
                this.state = 2549;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 125: {
                        this.state = 2541;
                        this.match(CSharpParser.OPEN_BRACE);
                        this.state = 2542;
                        this.accessor_declarations();
                        this.state = 2543;
                        this.match(CSharpParser.CLOSE_BRACE);
                    }
                        break;
                    case 145: {
                        this.state = 2545;
                        this.right_arrow();
                        this.state = 2546;
                        this.throwable_expression();
                        this.state = 2547;
                        this.match(CSharpParser.SEMICOLON);
                    }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public destructor_definition(): Destructor_definitionContext {
        let localctx: Destructor_definitionContext = new Destructor_definitionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 420, CSharpParser.RULE_destructor_definition);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2551;
                this.match(CSharpParser.TILDE);
                this.state = 2552;
                this.identifier();
                this.state = 2553;
                this.match(CSharpParser.OPEN_PARENS);
                this.state = 2554;
                this.match(CSharpParser.CLOSE_PARENS);
                this.state = 2555;
                this.body();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public constructor_declaration(): Constructor_declarationContext {
        let localctx: Constructor_declarationContext = new Constructor_declarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 422, CSharpParser.RULE_constructor_declaration);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2557;
                this.identifier();
                this.state = 2558;
                this.match(CSharpParser.OPEN_PARENS);
                this.state = 2560;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 557177856) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3033210957) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1223364017) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 1342233259) !== 0)) {
                    {
                        this.state = 2559;
                        this.formal_parameter_list();
                    }
                }

                this.state = 2562;
                this.match(CSharpParser.CLOSE_PARENS);
                this.state = 2564;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 133) {
                    {
                        this.state = 2563;
                        this.constructor_initializer();
                    }
                }

                this.state = 2566;
                this.body();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public method_declaration(): Method_declarationContext {
        let localctx: Method_declarationContext = new Method_declarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 424, CSharpParser.RULE_method_declaration);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2568;
                this.method_member_name();
                this.state = 2570;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 146) {
                    {
                        this.state = 2569;
                        this.type_parameter_list();
                    }
                }

                this.state = 2572;
                this.match(CSharpParser.OPEN_PARENS);
                this.state = 2574;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 557177856) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3033210957) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1223364017) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 1342233259) !== 0)) {
                    {
                        this.state = 2573;
                        this.formal_parameter_list();
                    }
                }

                this.state = 2576;
                this.match(CSharpParser.CLOSE_PARENS);
                this.state = 2578;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 111) {
                    {
                        this.state = 2577;
                        this.type_parameter_constraints_clauses();
                    }
                }

                this.state = 2585;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 125:
                    case 134: {
                        this.state = 2580;
                        this.method_body();
                    }
                        break;
                    case 145: {
                        this.state = 2581;
                        this.right_arrow();
                        this.state = 2582;
                        this.throwable_expression();
                        this.state = 2583;
                        this.match(CSharpParser.SEMICOLON);
                    }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public method_member_name(): Method_member_nameContext {
        let localctx: Method_member_nameContext = new Method_member_nameContext(this, this._ctx, this.state);
        this.enterRule(localctx, 426, CSharpParser.RULE_method_member_name);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2592;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 334, this._ctx)) {
                    case 1: {
                        this.state = 2587;
                        this.identifier();
                    }
                        break;
                    case 2: {
                        this.state = 2588;
                        this.identifier();
                        this.state = 2589;
                        this.match(CSharpParser.DOUBLE_COLON);
                        this.state = 2590;
                        this.identifier();
                    }
                        break;
                }
                this.state = 2601;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 336, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2595;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === 146) {
                                    {
                                        this.state = 2594;
                                        this.type_argument_list();
                                    }
                                }

                                this.state = 2597;
                                this.match(CSharpParser.DOT);
                                this.state = 2598;
                                this.identifier();
                            }
                        }
                    }
                    this.state = 2603;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 336, this._ctx);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public operator_declaration(): Operator_declarationContext {
        let localctx: Operator_declarationContext = new Operator_declarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 428, CSharpParser.RULE_operator_declaration);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2604;
                this.match(CSharpParser.OPERATOR);
                this.state = 2605;
                this.overloadable_operator();
                this.state = 2606;
                this.match(CSharpParser.OPEN_PARENS);
                this.state = 2608;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 54) {
                    {
                        this.state = 2607;
                        this.match(CSharpParser.IN);
                    }
                }

                this.state = 2610;
                this.arg_declaration();
                this.state = 2616;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 132) {
                    {
                        this.state = 2611;
                        this.match(CSharpParser.COMMA);
                        this.state = 2613;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 54) {
                            {
                                this.state = 2612;
                                this.match(CSharpParser.IN);
                            }
                        }

                        this.state = 2615;
                        this.arg_declaration();
                    }
                }

                this.state = 2618;
                this.match(CSharpParser.CLOSE_PARENS);
                this.state = 2624;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 125:
                    case 134: {
                        this.state = 2619;
                        this.body();
                    }
                        break;
                    case 145: {
                        this.state = 2620;
                        this.right_arrow();
                        this.state = 2621;
                        this.throwable_expression();
                        this.state = 2622;
                        this.match(CSharpParser.SEMICOLON);
                    }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public arg_declaration(): Arg_declarationContext {
        let localctx: Arg_declarationContext = new Arg_declarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 430, CSharpParser.RULE_arg_declaration);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2626;
                this.type_();
                this.state = 2627;
                this.identifier();
                this.state = 2630;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 145) {
                    {
                        this.state = 2628;
                        this.match(CSharpParser.ASSIGNMENT);
                        this.state = 2629;
                        this.expression();
                    }
                }

            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public method_invocation(): Method_invocationContext {
        let localctx: Method_invocationContext = new Method_invocationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 432, CSharpParser.RULE_method_invocation);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2632;
                this.match(CSharpParser.OPEN_PARENS);
                this.state = 2634;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 326684151) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 1869427401) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 2947104097) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & 941752301) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & 2147489821) !== 0)) {
                    {
                        this.state = 2633;
                        this.argument_list();
                    }
                }

                this.state = 2636;
                this.match(CSharpParser.CLOSE_PARENS);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public object_creation_expression(): Object_creation_expressionContext {
        let localctx: Object_creation_expressionContext = new Object_creation_expressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 434, CSharpParser.RULE_object_creation_expression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2638;
                this.match(CSharpParser.OPEN_PARENS);
                this.state = 2640;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 326684151) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 1869427401) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 2947104097) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & 941752301) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & 2147489821) !== 0)) {
                    {
                        this.state = 2639;
                        this.argument_list();
                    }
                }

                this.state = 2642;
                this.match(CSharpParser.CLOSE_PARENS);
                this.state = 2644;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 344, this._ctx)) {
                    case 1: {
                        this.state = 2643;
                        this.object_or_collection_initializer();
                    }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public identifier(): IdentifierContext {
        let localctx: IdentifierContext = new IdentifierContext(this, this._ctx, this.state);
        this.enterRule(localctx, 436, CSharpParser.RULE_identifier);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2646;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1170432) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 873136201) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 6424737) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 6929) !== 0))) {
                    this._errHandler.recoverInline(this);
                } else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
            case 87:
                return this.local_variable_declaration_sempred(localctx as Local_variable_declarationContext, predIndex);
            case 188:
                return this.right_arrow_sempred(localctx as Right_arrowContext, predIndex);
            case 189:
                return this.right_shift_sempred(localctx as Right_shiftContext, predIndex);
            case 190:
                return this.right_shift_assignment_sempred(localctx as Right_shift_assignmentContext, predIndex);
        }
        return true;
    }

    private local_variable_declaration_sempred(localctx: Local_variable_declarationContext, predIndex: number): boolean {
        switch (predIndex) {
            case 0:
                return this.IsLocalVariableDeclaration();
        }
        return true;
    }

    private right_arrow_sempred(localctx: Right_arrowContext, predIndex: number): boolean {
        switch (predIndex) {
            case 1:
                return (localctx._first != null ? localctx._first.tokenIndex : 0) + 1 == (localctx._second != null ? localctx._second.tokenIndex : 0);
        }
        return true;
    }

    private right_shift_sempred(localctx: Right_shiftContext, predIndex: number): boolean {
        switch (predIndex) {
            case 2:
                return (localctx._first != null ? localctx._first.tokenIndex : 0) + 1 == (localctx._second != null ? localctx._second.tokenIndex : 0);
        }
        return true;
    }

    private right_shift_assignment_sempred(localctx: Right_shift_assignmentContext, predIndex: number): boolean {
        switch (predIndex) {
            case 3:
                return (localctx._first != null ? localctx._first.tokenIndex : 0) + 1 == (localctx._second != null ? localctx._second.tokenIndex : 0);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [4, 1, 198, 2649, 2, 0, 7, 0,
        2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9,
        2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2,
        17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24,
        7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7,
        31, 2, 32, 7, 32, 2, 33, 7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7, 38,
        2, 39, 7, 39, 2, 40, 7, 40, 2, 41, 7, 41, 2, 42, 7, 42, 2, 43, 7, 43, 2, 44, 7, 44, 2, 45, 7, 45, 2,
        46, 7, 46, 2, 47, 7, 47, 2, 48, 7, 48, 2, 49, 7, 49, 2, 50, 7, 50, 2, 51, 7, 51, 2, 52, 7, 52, 2, 53,
        7, 53, 2, 54, 7, 54, 2, 55, 7, 55, 2, 56, 7, 56, 2, 57, 7, 57, 2, 58, 7, 58, 2, 59, 7, 59, 2, 60, 7,
        60, 2, 61, 7, 61, 2, 62, 7, 62, 2, 63, 7, 63, 2, 64, 7, 64, 2, 65, 7, 65, 2, 66, 7, 66, 2, 67, 7, 67,
        2, 68, 7, 68, 2, 69, 7, 69, 2, 70, 7, 70, 2, 71, 7, 71, 2, 72, 7, 72, 2, 73, 7, 73, 2, 74, 7, 74, 2,
        75, 7, 75, 2, 76, 7, 76, 2, 77, 7, 77, 2, 78, 7, 78, 2, 79, 7, 79, 2, 80, 7, 80, 2, 81, 7, 81, 2, 82,
        7, 82, 2, 83, 7, 83, 2, 84, 7, 84, 2, 85, 7, 85, 2, 86, 7, 86, 2, 87, 7, 87, 2, 88, 7, 88, 2, 89, 7,
        89, 2, 90, 7, 90, 2, 91, 7, 91, 2, 92, 7, 92, 2, 93, 7, 93, 2, 94, 7, 94, 2, 95, 7, 95, 2, 96, 7, 96,
        2, 97, 7, 97, 2, 98, 7, 98, 2, 99, 7, 99, 2, 100, 7, 100, 2, 101, 7, 101, 2, 102, 7, 102, 2, 103,
        7, 103, 2, 104, 7, 104, 2, 105, 7, 105, 2, 106, 7, 106, 2, 107, 7, 107, 2, 108, 7, 108, 2, 109,
        7, 109, 2, 110, 7, 110, 2, 111, 7, 111, 2, 112, 7, 112, 2, 113, 7, 113, 2, 114, 7, 114, 2, 115,
        7, 115, 2, 116, 7, 116, 2, 117, 7, 117, 2, 118, 7, 118, 2, 119, 7, 119, 2, 120, 7, 120, 2, 121,
        7, 121, 2, 122, 7, 122, 2, 123, 7, 123, 2, 124, 7, 124, 2, 125, 7, 125, 2, 126, 7, 126, 2, 127,
        7, 127, 2, 128, 7, 128, 2, 129, 7, 129, 2, 130, 7, 130, 2, 131, 7, 131, 2, 132, 7, 132, 2, 133,
        7, 133, 2, 134, 7, 134, 2, 135, 7, 135, 2, 136, 7, 136, 2, 137, 7, 137, 2, 138, 7, 138, 2, 139,
        7, 139, 2, 140, 7, 140, 2, 141, 7, 141, 2, 142, 7, 142, 2, 143, 7, 143, 2, 144, 7, 144, 2, 145,
        7, 145, 2, 146, 7, 146, 2, 147, 7, 147, 2, 148, 7, 148, 2, 149, 7, 149, 2, 150, 7, 150, 2, 151,
        7, 151, 2, 152, 7, 152, 2, 153, 7, 153, 2, 154, 7, 154, 2, 155, 7, 155, 2, 156, 7, 156, 2, 157,
        7, 157, 2, 158, 7, 158, 2, 159, 7, 159, 2, 160, 7, 160, 2, 161, 7, 161, 2, 162, 7, 162, 2, 163,
        7, 163, 2, 164, 7, 164, 2, 165, 7, 165, 2, 166, 7, 166, 2, 167, 7, 167, 2, 168, 7, 168, 2, 169,
        7, 169, 2, 170, 7, 170, 2, 171, 7, 171, 2, 172, 7, 172, 2, 173, 7, 173, 2, 174, 7, 174, 2, 175,
        7, 175, 2, 176, 7, 176, 2, 177, 7, 177, 2, 178, 7, 178, 2, 179, 7, 179, 2, 180, 7, 180, 2, 181,
        7, 181, 2, 182, 7, 182, 2, 183, 7, 183, 2, 184, 7, 184, 2, 185, 7, 185, 2, 186, 7, 186, 2, 187,
        7, 187, 2, 188, 7, 188, 2, 189, 7, 189, 2, 190, 7, 190, 2, 191, 7, 191, 2, 192, 7, 192, 2, 193,
        7, 193, 2, 194, 7, 194, 2, 195, 7, 195, 2, 196, 7, 196, 2, 197, 7, 197, 2, 198, 7, 198, 2, 199,
        7, 199, 2, 200, 7, 200, 2, 201, 7, 201, 2, 202, 7, 202, 2, 203, 7, 203, 2, 204, 7, 204, 2, 205,
        7, 205, 2, 206, 7, 206, 2, 207, 7, 207, 2, 208, 7, 208, 2, 209, 7, 209, 2, 210, 7, 210, 2, 211,
        7, 211, 2, 212, 7, 212, 2, 213, 7, 213, 2, 214, 7, 214, 2, 215, 7, 215, 2, 216, 7, 216, 2, 217,
        7, 217, 2, 218, 7, 218, 1, 0, 3, 0, 440, 8, 0, 1, 0, 3, 0, 443, 8, 0, 1, 0, 3, 0, 446, 8, 0, 1, 0, 5,
        0, 449, 8, 0, 10, 0, 12, 0, 452, 9, 0, 1, 0, 3, 0, 455, 8, 0, 1, 0, 1, 0, 1, 1, 1, 1, 3, 1, 461, 8, 1,
        1, 1, 3, 1, 464, 8, 1, 1, 1, 1, 1, 1, 1, 3, 1, 469, 8, 1, 5, 1, 471, 8, 1, 10, 1, 12, 1, 474, 9, 1, 1,
        2, 1, 2, 1, 2, 1, 2, 5, 2, 480, 8, 2, 10, 2, 12, 2, 483, 9, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 490,
        8, 3, 1, 4, 1, 4, 1, 4, 1, 4, 4, 4, 496, 8, 4, 11, 4, 12, 4, 497, 1, 4, 1, 4, 1, 5, 1, 5, 3, 5, 504, 8,
        5, 1, 6, 1, 6, 3, 6, 508, 8, 6, 1, 7, 1, 7, 1, 7, 3, 7, 513, 8, 7, 1, 8, 1, 8, 1, 9, 1, 9, 1, 10, 1, 10,
        1, 10, 1, 10, 3, 10, 523, 8, 10, 1, 11, 1, 11, 1, 11, 1, 11, 5, 11, 529, 8, 11, 10, 11, 12, 11, 532,
        9, 11, 1, 11, 1, 11, 1, 12, 1, 12, 1, 12, 5, 12, 539, 8, 12, 10, 12, 12, 12, 542, 9, 12, 1, 13, 1,
        13, 1, 13, 3, 13, 547, 8, 13, 1, 13, 3, 13, 550, 8, 13, 1, 13, 1, 13, 1, 13, 3, 13, 555, 8, 13, 1,
        13, 3, 13, 558, 8, 13, 1, 14, 1, 14, 1, 14, 1, 14, 3, 14, 564, 8, 14, 1, 15, 1, 15, 1, 15, 3, 15,
        569, 8, 15, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 3, 16, 579, 8, 16, 1, 17, 1, 17,
        1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 3, 17, 592, 8, 17, 1, 18, 1, 18, 1,
        18, 1, 18, 1, 18, 1, 18, 3, 18, 600, 8, 18, 1, 19, 1, 19, 1, 19, 1, 19, 3, 19, 606, 8, 19, 3, 19,
        608, 8, 19, 1, 20, 1, 20, 1, 20, 5, 20, 613, 8, 20, 10, 20, 12, 20, 616, 9, 20, 1, 21, 1, 21, 1,
        21, 5, 21, 621, 8, 21, 10, 21, 12, 21, 624, 9, 21, 1, 22, 1, 22, 1, 22, 5, 22, 629, 8, 22, 10, 22,
        12, 22, 632, 9, 22, 1, 23, 1, 23, 1, 23, 5, 23, 637, 8, 23, 10, 23, 12, 23, 640, 9, 23, 1, 24, 1,
        24, 1, 24, 5, 24, 645, 8, 24, 10, 24, 12, 24, 648, 9, 24, 1, 25, 1, 25, 1, 25, 5, 25, 653, 8, 25,
        10, 25, 12, 25, 656, 9, 25, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 5, 26, 665, 8, 26, 10,
        26, 12, 26, 668, 9, 26, 1, 27, 1, 27, 1, 27, 3, 27, 673, 8, 27, 1, 27, 5, 27, 676, 8, 27, 10, 27,
        12, 27, 679, 9, 27, 1, 28, 1, 28, 1, 28, 5, 28, 684, 8, 28, 10, 28, 12, 28, 687, 9, 28, 1, 29, 1,
        29, 1, 29, 5, 29, 692, 8, 29, 10, 29, 12, 29, 695, 9, 29, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 3, 30,
        702, 8, 30, 3, 30, 704, 8, 30, 1, 30, 3, 30, 707, 8, 30, 1, 31, 1, 31, 1, 31, 5, 31, 712, 8, 31,
        10, 31, 12, 31, 715, 9, 31, 1, 32, 1, 32, 3, 32, 719, 8, 32, 1, 32, 1, 32, 1, 32, 1, 33, 1, 33, 3,
        33, 726, 8, 33, 1, 33, 1, 33, 3, 33, 730, 8, 33, 3, 33, 732, 8, 33, 1, 34, 1, 34, 1, 34, 1, 34, 1,
        34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34,
        1, 34, 1, 34, 1, 34, 3, 34, 756, 8, 34, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 36, 1, 36, 3, 36, 765,
        8, 36, 1, 36, 5, 36, 768, 8, 36, 10, 36, 12, 36, 771, 9, 36, 1, 36, 3, 36, 774, 8, 36, 1, 36, 1,
        36, 1, 36, 1, 36, 1, 36, 1, 36, 3, 36, 782, 8, 36, 1, 36, 3, 36, 785, 8, 36, 1, 36, 5, 36, 788, 8,
        36, 10, 36, 12, 36, 791, 9, 36, 1, 36, 3, 36, 794, 8, 36, 5, 36, 796, 8, 36, 10, 36, 12, 36, 799,
        9, 36, 1, 37, 1, 37, 1, 37, 3, 37, 804, 8, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1,
        37, 1, 37, 1, 37, 1, 37, 1, 37, 3, 37, 818, 8, 37, 1, 37, 1, 37, 1, 37, 1, 37, 3, 37, 824, 8, 37,
        1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 5, 37, 834, 8, 37, 10, 37, 12, 37, 837, 9,
        37, 1, 37, 3, 37, 840, 8, 37, 1, 37, 4, 37, 843, 8, 37, 11, 37, 12, 37, 844, 1, 37, 1, 37, 3, 37,
        849, 8, 37, 1, 37, 1, 37, 1, 37, 1, 37, 3, 37, 855, 8, 37, 1, 37, 1, 37, 1, 37, 1, 37, 4, 37, 861,
        8, 37, 11, 37, 12, 37, 862, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 3, 37, 872, 8, 37, 1,
        37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37,
        1, 37, 3, 37, 890, 8, 37, 1, 37, 3, 37, 893, 8, 37, 1, 37, 1, 37, 1, 37, 3, 37, 898, 8, 37, 1, 37,
        3, 37, 901, 8, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 5,
        37, 914, 8, 37, 10, 37, 12, 37, 917, 9, 37, 1, 37, 1, 37, 1, 37, 3, 37, 922, 8, 37, 1, 38, 1, 38,
        3, 38, 926, 8, 38, 1, 39, 1, 39, 1, 39, 1, 40, 3, 40, 932, 8, 40, 1, 40, 1, 40, 1, 40, 3, 40, 937,
        8, 40, 1, 41, 3, 41, 940, 8, 41, 1, 41, 1, 41, 1, 41, 1, 41, 5, 41, 946, 8, 41, 10, 41, 12, 41, 949,
        9, 41, 1, 41, 1, 41, 1, 42, 1, 42, 1, 42, 3, 42, 956, 8, 42, 1, 42, 1, 42, 1, 43, 1, 43, 1, 44, 1,
        44, 1, 44, 5, 44, 965, 8, 44, 10, 44, 12, 44, 968, 9, 44, 1, 45, 1, 45, 3, 45, 972, 8, 45, 1, 46,
        1, 46, 1, 46, 3, 46, 977, 8, 46, 3, 46, 979, 8, 46, 1, 46, 1, 46, 1, 47, 1, 47, 1, 47, 5, 47, 986,
        8, 47, 10, 47, 12, 47, 989, 9, 47, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 3, 48, 996, 8, 48, 1, 48, 1,
        48, 1, 48, 1, 49, 1, 49, 3, 49, 1003, 8, 49, 1, 50, 1, 50, 1, 50, 1, 50, 5, 50, 1009, 8, 50, 10,
        50, 12, 50, 1012, 9, 50, 1, 50, 3, 50, 1015, 8, 50, 1, 50, 1, 50, 1, 51, 1, 51, 1, 51, 1, 51, 1,
        51, 3, 51, 1024, 8, 51, 1, 52, 1, 52, 1, 52, 3, 52, 1029, 8, 52, 3, 52, 1031, 8, 52, 1, 52, 1, 52,
        1, 53, 1, 53, 1, 53, 5, 53, 1038, 8, 53, 10, 53, 12, 53, 1041, 9, 53, 1, 54, 1, 54, 1, 54, 1, 54,
        1, 54, 3, 54, 1048, 8, 54, 1, 55, 1, 55, 3, 55, 1052, 8, 55, 1, 55, 1, 55, 1, 55, 3, 55, 1057, 8,
        55, 3, 55, 1059, 8, 55, 1, 55, 1, 55, 1, 55, 3, 55, 1064, 8, 55, 5, 55, 1066, 8, 55, 10, 55, 12,
        55, 1069, 9, 55, 1, 56, 1, 56, 5, 56, 1073, 8, 56, 10, 56, 12, 56, 1076, 9, 56, 1, 56, 1, 56, 1,
        57, 1, 57, 1, 57, 5, 57, 1083, 8, 57, 10, 57, 12, 57, 1086, 9, 57, 1, 57, 3, 57, 1089, 8, 57, 1,
        57, 3, 57, 1092, 8, 57, 1, 57, 3, 57, 1095, 8, 57, 1, 58, 1, 58, 1, 58, 1, 58, 5, 58, 1101, 8, 58,
        10, 58, 12, 58, 1104, 9, 58, 1, 58, 1, 58, 1, 59, 1, 59, 1, 59, 1, 59, 1, 60, 3, 60, 1113, 8, 60,
        1, 60, 1, 60, 1, 60, 1, 60, 1, 61, 1, 61, 1, 61, 1, 61, 1, 61, 1, 61, 1, 61, 1, 61, 1, 61, 1, 61, 1,
        61, 3, 61, 1130, 8, 61, 1, 62, 1, 62, 1, 62, 5, 62, 1135, 8, 62, 10, 62, 12, 62, 1138, 9, 62, 1,
        63, 3, 63, 1141, 8, 63, 1, 63, 1, 63, 1, 63, 1, 64, 1, 64, 1, 64, 5, 64, 1149, 8, 64, 10, 64, 12,
        64, 1152, 9, 64, 1, 65, 1, 65, 3, 65, 1156, 8, 65, 1, 66, 1, 66, 1, 66, 1, 67, 1, 67, 3, 67, 1163,
        8, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 68, 5, 68, 1170, 8, 68, 10, 68, 12, 68, 1173, 9, 68, 1, 68,
        1, 68, 3, 68, 1177, 8, 68, 1, 69, 1, 69, 1, 69, 1, 69, 1, 69, 3, 69, 1184, 8, 69, 1, 70, 1, 70, 1,
        70, 1, 70, 1, 70, 1, 71, 1, 71, 1, 71, 1, 72, 1, 72, 3, 72, 1196, 8, 72, 1, 72, 1, 72, 1, 72, 1, 72,
        1, 72, 1, 72, 1, 72, 1, 72, 1, 72, 3, 72, 1207, 8, 72, 1, 73, 1, 73, 1, 73, 1, 73, 5, 73, 1213, 8,
        73, 10, 73, 12, 73, 1216, 9, 73, 1, 74, 1, 74, 3, 74, 1220, 8, 74, 1, 75, 1, 75, 1, 75, 1, 75, 1,
        75, 1, 75, 1, 75, 3, 75, 1229, 8, 75, 1, 76, 1, 76, 1, 76, 1, 76, 1, 77, 1, 77, 1, 77, 3, 77, 1238,
        8, 77, 1, 78, 1, 78, 1, 78, 1, 78, 1, 78, 1, 78, 1, 78, 3, 78, 1247, 8, 78, 1, 79, 1, 79, 1, 79, 1,
        80, 3, 80, 1253, 8, 80, 1, 80, 1, 80, 1, 80, 3, 80, 1258, 8, 80, 1, 80, 1, 80, 3, 80, 1262, 8, 80,
        1, 80, 1, 80, 3, 80, 1266, 8, 80, 1, 81, 1, 81, 3, 81, 1270, 8, 81, 1, 81, 1, 81, 3, 81, 1274, 8,
        81, 1, 82, 1, 82, 1, 82, 1, 82, 1, 82, 3, 82, 1281, 8, 82, 1, 83, 1, 83, 1, 83, 1, 83, 1, 84, 1, 84,
        3, 84, 1289, 8, 84, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 3,
        85, 1302, 8, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 5, 85, 1310, 8, 85, 10, 85, 12, 85, 1313,
        9, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1,
        85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 3, 85, 1334, 8, 85, 1, 85, 1, 85, 3, 85, 1338, 8, 85, 1, 85,
        1, 85, 3, 85, 1342, 8, 85, 1, 85, 1, 85, 1, 85, 3, 85, 1347, 8, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1,
        85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 3, 85,
        1367, 8, 85, 1, 85, 1, 85, 1, 85, 3, 85, 1372, 8, 85, 1, 85, 1, 85, 1, 85, 3, 85, 1377, 8, 85, 1,
        85, 1, 85, 1, 85, 1, 85, 1, 85, 3, 85, 1384, 8, 85, 1, 85, 3, 85, 1387, 8, 85, 1, 85, 1, 85, 1, 85,
        1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1,
        85, 1, 85, 1, 85, 3, 85, 1409, 8, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85,
        1, 85, 3, 85, 1421, 8, 85, 1, 86, 1, 86, 3, 86, 1425, 8, 86, 1, 86, 1, 86, 1, 87, 1, 87, 1, 87, 1,
        87, 3, 87, 1433, 8, 87, 1, 87, 1, 87, 1, 87, 1, 87, 1, 87, 1, 87, 5, 87, 1441, 8, 87, 10, 87, 12,
        87, 1444, 9, 87, 1, 87, 1, 87, 1, 87, 1, 87, 3, 87, 1450, 8, 87, 1, 88, 1, 88, 3, 88, 1454, 8, 88,
        1, 89, 1, 89, 1, 89, 3, 89, 1459, 8, 89, 1, 89, 3, 89, 1462, 8, 89, 1, 90, 1, 90, 1, 90, 3, 90, 1467,
        8, 90, 1, 91, 1, 91, 1, 91, 1, 91, 1, 92, 1, 92, 3, 92, 1475, 8, 92, 1, 93, 4, 93, 1478, 8, 93, 11,
        93, 12, 93, 1479, 1, 93, 1, 93, 1, 94, 1, 94, 1, 94, 3, 94, 1487, 8, 94, 1, 94, 1, 94, 1, 94, 1,
        94, 3, 94, 1493, 8, 94, 1, 95, 1, 95, 1, 95, 1, 96, 4, 96, 1499, 8, 96, 11, 96, 12, 96, 1500, 1,
        97, 1, 97, 1, 97, 1, 97, 5, 97, 1507, 8, 97, 10, 97, 12, 97, 1510, 9, 97, 3, 97, 1512, 8, 97, 1,
        98, 1, 98, 1, 98, 5, 98, 1517, 8, 98, 10, 98, 12, 98, 1520, 9, 98, 1, 99, 1, 99, 5, 99, 1524, 8,
        99, 10, 99, 12, 99, 1527, 9, 99, 1, 99, 3, 99, 1530, 8, 99, 1, 99, 3, 99, 1533, 8, 99, 1, 100,
        1, 100, 1, 100, 1, 100, 3, 100, 1539, 8, 100, 1, 100, 1, 100, 3, 100, 1543, 8, 100, 1, 100, 1,
        100, 1, 101, 1, 101, 3, 101, 1549, 8, 101, 1, 101, 1, 101, 1, 102, 1, 102, 1, 102, 1, 102, 1,
        102, 1, 103, 1, 103, 1, 103, 1, 104, 1, 104, 3, 104, 1563, 8, 104, 1, 105, 1, 105, 1, 105, 1,
        105, 3, 105, 1569, 8, 105, 1, 106, 1, 106, 1, 106, 5, 106, 1574, 8, 106, 10, 106, 12, 106, 1577,
        9, 106, 1, 107, 1, 107, 3, 107, 1581, 8, 107, 1, 107, 3, 107, 1584, 8, 107, 1, 107, 3, 107, 1587,
        8, 107, 1, 107, 1, 107, 1, 108, 4, 108, 1592, 8, 108, 11, 108, 12, 108, 1593, 1, 109, 1, 109,
        1, 109, 1, 109, 1, 109, 1, 110, 4, 110, 1602, 8, 110, 11, 110, 12, 110, 1603, 1, 111, 1, 111,
        1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111,
        1, 111, 3, 111, 1621, 8, 111, 1, 112, 4, 112, 1624, 8, 112, 11, 112, 12, 112, 1625, 1, 113,
        1, 113, 3, 113, 1630, 8, 113, 1, 114, 3, 114, 1633, 8, 114, 1, 114, 3, 114, 1636, 8, 114, 1,
        114, 1, 114, 1, 114, 1, 114, 1, 114, 3, 114, 1643, 8, 114, 1, 115, 1, 115, 1, 115, 1, 115, 3,
        115, 1649, 8, 115, 1, 116, 1, 116, 1, 116, 1, 116, 5, 116, 1655, 8, 116, 10, 116, 12, 116, 1658,
        9, 116, 1, 116, 1, 116, 1, 117, 3, 117, 1663, 8, 117, 1, 117, 1, 117, 1, 118, 1, 118, 1, 118,
        1, 118, 5, 118, 1671, 8, 118, 10, 118, 12, 118, 1674, 9, 118, 1, 119, 1, 119, 1, 119, 5, 119,
        1679, 8, 119, 10, 119, 12, 119, 1682, 9, 119, 1, 120, 4, 120, 1685, 8, 120, 11, 120, 12, 120,
        1686, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 122, 1, 122, 1, 122, 1, 122, 3, 122, 1698, 8,
        122, 1, 122, 1, 122, 3, 122, 1702, 8, 122, 3, 122, 1704, 8, 122, 1, 123, 1, 123, 1, 123, 3, 123,
        1709, 8, 123, 1, 123, 1, 123, 3, 123, 1713, 8, 123, 1, 124, 1, 124, 1, 124, 5, 124, 1718, 8,
        124, 10, 124, 12, 124, 1721, 9, 124, 1, 125, 1, 125, 1, 125, 1, 125, 1, 126, 1, 126, 3, 126,
        1729, 8, 126, 1, 126, 1, 126, 1, 127, 4, 127, 1734, 8, 127, 11, 127, 12, 127, 1735, 1, 128,
        3, 128, 1739, 8, 128, 1, 128, 3, 128, 1742, 8, 128, 1, 128, 1, 128, 3, 128, 1746, 8, 128, 1,
        129, 4, 129, 1749, 8, 129, 11, 129, 12, 129, 1750, 1, 130, 1, 130, 1, 131, 1, 131, 1, 131, 1,
        131, 1, 131, 1, 131, 1, 131, 1, 131, 1, 131, 3, 131, 1764, 8, 131, 1, 131, 1, 131, 1, 131, 1,
        131, 1, 131, 1, 131, 1, 131, 1, 131, 3, 131, 1774, 8, 131, 1, 132, 1, 132, 1, 132, 1, 132, 1,
        132, 3, 132, 1781, 8, 132, 1, 132, 1, 132, 1, 132, 1, 132, 1, 132, 1, 132, 1, 132, 1, 132, 1,
        132, 1, 132, 3, 132, 1793, 8, 132, 1, 133, 1, 133, 1, 133, 5, 133, 1798, 8, 133, 10, 133, 12,
        133, 1801, 9, 133, 1, 134, 1, 134, 1, 134, 1, 134, 1, 135, 1, 135, 1, 135, 5, 135, 1810, 8, 135,
        10, 135, 12, 135, 1813, 9, 135, 1, 136, 1, 136, 1, 136, 3, 136, 1818, 8, 136, 1, 137, 1, 137,
        3, 137, 1822, 8, 137, 1, 138, 1, 138, 3, 138, 1826, 8, 138, 1, 139, 1, 139, 1, 140, 1, 140, 3,
        140, 1832, 8, 140, 1, 141, 1, 141, 1, 141, 1, 141, 3, 141, 1838, 8, 141, 3, 141, 1840, 8, 141,
        1, 142, 1, 142, 1, 142, 5, 142, 1845, 8, 142, 10, 142, 12, 142, 1848, 9, 142, 1, 143, 3, 143,
        1851, 8, 143, 1, 143, 3, 143, 1854, 8, 143, 1, 143, 1, 143, 3, 143, 1858, 8, 143, 1, 144, 1,
        144, 1, 144, 1, 144, 1, 144, 1, 144, 1, 144, 1, 144, 3, 144, 1868, 8, 144, 1, 145, 3, 145, 1871,
        8, 145, 1, 145, 1, 145, 1, 145, 1, 145, 1, 146, 3, 146, 1878, 8, 146, 1, 146, 3, 146, 1881, 8,
        146, 1, 146, 1, 146, 1, 146, 3, 146, 1886, 8, 146, 1, 146, 1, 146, 1, 146, 3, 146, 1891, 8, 146,
        3, 146, 1893, 8, 146, 1, 147, 3, 147, 1896, 8, 147, 1, 147, 3, 147, 1899, 8, 147, 1, 147, 1,
        147, 1, 147, 1, 148, 3, 148, 1905, 8, 148, 1, 148, 3, 148, 1908, 8, 148, 1, 148, 1, 148, 1, 148,
        1, 149, 1, 149, 1, 149, 1, 149, 1, 149, 1, 149, 1, 149, 3, 149, 1920, 8, 149, 1, 150, 1, 150,
        3, 150, 1924, 8, 150, 1, 151, 3, 151, 1927, 8, 151, 1, 151, 1, 151, 1, 151, 1, 151, 1, 151, 1,
        151, 1, 151, 1, 151, 3, 151, 1937, 8, 151, 1, 152, 3, 152, 1940, 8, 152, 1, 152, 1, 152, 1, 152,
        1, 153, 3, 153, 1946, 8, 153, 1, 153, 1, 153, 1, 153, 1, 154, 1, 154, 1, 154, 1, 154, 1, 154,
        1, 154, 1, 154, 1, 154, 1, 154, 1, 154, 1, 154, 1, 154, 1, 154, 1, 154, 1, 154, 1, 154, 1, 154,
        1, 154, 1, 154, 1, 154, 1, 154, 1, 154, 3, 154, 1973, 8, 154, 1, 155, 1, 155, 1, 155, 1, 155,
        1, 155, 1, 155, 1, 155, 1, 156, 1, 156, 1, 156, 1, 156, 3, 156, 1986, 8, 156, 1, 156, 1, 156,
        1, 157, 1, 157, 3, 157, 1992, 8, 157, 1, 158, 1, 158, 1, 158, 1, 159, 1, 159, 5, 159, 1999, 8,
        159, 10, 159, 12, 159, 2002, 9, 159, 1, 159, 1, 159, 1, 160, 3, 160, 2007, 8, 160, 1, 160, 3,
        160, 2010, 8, 160, 1, 160, 1, 160, 1, 160, 1, 160, 4, 160, 2016, 8, 160, 11, 160, 12, 160, 2017,
        1, 160, 1, 160, 3, 160, 2022, 8, 160, 1, 161, 1, 161, 5, 161, 2026, 8, 161, 10, 161, 12, 161,
        2029, 9, 161, 1, 161, 4, 161, 2032, 8, 161, 11, 161, 12, 161, 2033, 1, 162, 1, 162, 5, 162,
        2038, 8, 162, 10, 162, 12, 162, 2041, 9, 162, 1, 162, 1, 162, 1, 163, 1, 163, 1, 163, 1, 163,
        5, 163, 2049, 8, 163, 10, 163, 12, 163, 2052, 9, 163, 1, 163, 3, 163, 2055, 8, 163, 3, 163,
        2057, 8, 163, 1, 163, 1, 163, 1, 164, 1, 164, 1, 164, 1, 164, 5, 164, 2065, 8, 164, 10, 164,
        12, 164, 2068, 9, 164, 1, 164, 1, 164, 1, 165, 3, 165, 2073, 8, 165, 1, 165, 3, 165, 2076, 8,
        165, 1, 165, 1, 165, 1, 166, 1, 166, 1, 167, 1, 167, 1, 167, 1, 168, 1, 168, 5, 168, 2087, 8,
        168, 10, 168, 12, 168, 2090, 9, 168, 1, 168, 1, 168, 1, 169, 3, 169, 2095, 8, 169, 1, 169, 3,
        169, 2098, 8, 169, 1, 169, 3, 169, 2101, 8, 169, 1, 169, 1, 169, 1, 169, 1, 169, 1, 169, 3, 169,
        2108, 8, 169, 1, 169, 1, 169, 1, 169, 3, 169, 2113, 8, 169, 1, 169, 1, 169, 3, 169, 2117, 8,
        169, 1, 169, 1, 169, 3, 169, 2121, 8, 169, 1, 169, 1, 169, 1, 169, 1, 169, 1, 169, 1, 169, 1,
        169, 1, 169, 1, 169, 1, 169, 1, 169, 1, 169, 1, 169, 1, 169, 1, 169, 3, 169, 2138, 8, 169, 1,
        169, 3, 169, 2141, 8, 169, 1, 169, 1, 169, 1, 169, 3, 169, 2146, 8, 169, 1, 169, 1, 169, 3, 169,
        2150, 8, 169, 1, 169, 1, 169, 3, 169, 2154, 8, 169, 1, 169, 1, 169, 1, 169, 1, 169, 1, 169, 1,
        169, 1, 169, 3, 169, 2163, 8, 169, 1, 170, 3, 170, 2166, 8, 170, 1, 170, 1, 170, 1, 170, 3, 170,
        2171, 8, 170, 1, 170, 1, 170, 3, 170, 2175, 8, 170, 1, 170, 1, 170, 1, 170, 3, 170, 2180, 8,
        170, 1, 170, 1, 170, 3, 170, 2184, 8, 170, 3, 170, 2186, 8, 170, 1, 171, 1, 171, 1, 171, 1, 172,
        1, 172, 1, 172, 1, 172, 5, 172, 2195, 8, 172, 10, 172, 12, 172, 2198, 9, 172, 1, 172, 3, 172,
        2201, 8, 172, 3, 172, 2203, 8, 172, 1, 172, 1, 172, 1, 173, 3, 173, 2208, 8, 173, 1, 173, 1,
        173, 1, 173, 3, 173, 2213, 8, 173, 1, 174, 1, 174, 1, 174, 1, 174, 1, 174, 3, 174, 2220, 8, 174,
        1, 174, 1, 174, 1, 175, 1, 175, 3, 175, 2226, 8, 175, 1, 176, 4, 176, 2229, 8, 176, 11, 176,
        12, 176, 2230, 1, 177, 1, 177, 1, 177, 1, 177, 3, 177, 2237, 8, 177, 1, 177, 1, 177, 3, 177,
        2241, 8, 177, 1, 177, 1, 177, 1, 178, 1, 178, 3, 178, 2247, 8, 178, 1, 179, 1, 179, 1, 179, 5,
        179, 2252, 8, 179, 10, 179, 12, 179, 2255, 9, 179, 1, 180, 1, 180, 1, 180, 1, 180, 1, 180, 5,
        180, 2262, 8, 180, 10, 180, 12, 180, 2265, 9, 180, 3, 180, 2267, 8, 180, 1, 180, 3, 180, 2270,
        8, 180, 1, 181, 1, 181, 1, 181, 3, 181, 2275, 8, 181, 1, 181, 1, 181, 1, 182, 1, 182, 3, 182,
        2281, 8, 182, 1, 182, 1, 182, 5, 182, 2285, 8, 182, 10, 182, 12, 182, 2288, 9, 182, 1, 182,
        1, 182, 1, 182, 1, 182, 3, 182, 2294, 8, 182, 1, 183, 1, 183, 1, 183, 5, 183, 2299, 8, 183, 10,
        183, 12, 183, 2302, 9, 183, 1, 184, 1, 184, 1, 184, 1, 184, 1, 185, 3, 185, 2309, 8, 185, 1,
        185, 1, 185, 3, 185, 2313, 8, 185, 1, 186, 1, 186, 1, 186, 1, 186, 1, 186, 1, 187, 1, 187, 1,
        187, 1, 187, 1, 187, 1, 187, 1, 187, 1, 187, 3, 187, 2328, 8, 187, 1, 187, 1, 187, 3, 187, 2332,
        8, 187, 1, 187, 1, 187, 1, 187, 1, 187, 1, 187, 5, 187, 2339, 8, 187, 10, 187, 12, 187, 2342,
        9, 187, 1, 187, 3, 187, 2345, 8, 187, 1, 187, 1, 187, 3, 187, 2349, 8, 187, 1, 188, 1, 188, 1,
        188, 1, 188, 1, 189, 1, 189, 1, 189, 1, 189, 1, 190, 1, 190, 1, 190, 1, 190, 1, 191, 1, 191, 1,
        191, 1, 191, 1, 191, 1, 191, 1, 191, 1, 191, 3, 191, 2371, 8, 191, 1, 192, 1, 192, 1, 193, 1,
        193, 1, 193, 1, 193, 3, 193, 2379, 8, 193, 1, 194, 1, 194, 5, 194, 2383, 8, 194, 10, 194, 12,
        194, 2386, 9, 194, 1, 194, 1, 194, 1, 195, 1, 195, 5, 195, 2392, 8, 195, 10, 195, 12, 195, 2395,
        9, 195, 1, 195, 1, 195, 1, 196, 1, 196, 1, 196, 1, 196, 3, 196, 2403, 8, 196, 1, 197, 1, 197,
        1, 197, 1, 197, 3, 197, 2409, 8, 197, 1, 198, 1, 198, 1, 198, 5, 198, 2414, 8, 198, 10, 198,
        12, 198, 2417, 9, 198, 1, 198, 1, 198, 4, 198, 2421, 8, 198, 11, 198, 12, 198, 2422, 3, 198,
        2425, 8, 198, 1, 199, 1, 199, 1, 200, 1, 200, 1, 200, 3, 200, 2432, 8, 200, 1, 200, 3, 200, 2435,
        8, 200, 1, 200, 3, 200, 2438, 8, 200, 1, 200, 1, 200, 3, 200, 2442, 8, 200, 1, 201, 3, 201, 2445,
        8, 201, 1, 201, 1, 201, 1, 201, 3, 201, 2450, 8, 201, 1, 201, 3, 201, 2453, 8, 201, 1, 201, 3,
        201, 2456, 8, 201, 1, 201, 1, 201, 3, 201, 2460, 8, 201, 1, 202, 1, 202, 1, 202, 3, 202, 2465,
        8, 202, 1, 202, 3, 202, 2468, 8, 202, 1, 202, 3, 202, 2471, 8, 202, 1, 202, 1, 202, 3, 202, 2475,
        8, 202, 1, 203, 1, 203, 1, 203, 3, 203, 2480, 8, 203, 1, 203, 1, 203, 3, 203, 2484, 8, 203, 1,
        204, 1, 204, 1, 204, 1, 204, 3, 204, 2490, 8, 204, 1, 204, 1, 204, 3, 204, 2494, 8, 204, 1, 204,
        1, 204, 3, 204, 2498, 8, 204, 1, 204, 1, 204, 1, 205, 1, 205, 1, 205, 1, 205, 1, 205, 1, 205,
        1, 205, 1, 205, 1, 205, 1, 205, 3, 205, 2512, 8, 205, 1, 206, 1, 206, 1, 206, 1, 207, 1, 207,
        1, 207, 1, 207, 1, 207, 1, 207, 1, 207, 1, 207, 3, 207, 2525, 8, 207, 1, 207, 1, 207, 1, 207,
        1, 207, 3, 207, 2531, 8, 207, 1, 208, 1, 208, 1, 208, 1, 208, 1, 208, 1, 209, 1, 209, 1, 209,
        1, 209, 1, 209, 1, 209, 1, 209, 1, 209, 1, 209, 1, 209, 1, 209, 1, 209, 3, 209, 2550, 8, 209,
        1, 210, 1, 210, 1, 210, 1, 210, 1, 210, 1, 210, 1, 211, 1, 211, 1, 211, 3, 211, 2561, 8, 211,
        1, 211, 1, 211, 3, 211, 2565, 8, 211, 1, 211, 1, 211, 1, 212, 1, 212, 3, 212, 2571, 8, 212, 1,
        212, 1, 212, 3, 212, 2575, 8, 212, 1, 212, 1, 212, 3, 212, 2579, 8, 212, 1, 212, 1, 212, 1, 212,
        1, 212, 1, 212, 3, 212, 2586, 8, 212, 1, 213, 1, 213, 1, 213, 1, 213, 1, 213, 3, 213, 2593, 8,
        213, 1, 213, 3, 213, 2596, 8, 213, 1, 213, 1, 213, 5, 213, 2600, 8, 213, 10, 213, 12, 213, 2603,
        9, 213, 1, 214, 1, 214, 1, 214, 1, 214, 3, 214, 2609, 8, 214, 1, 214, 1, 214, 1, 214, 3, 214,
        2614, 8, 214, 1, 214, 3, 214, 2617, 8, 214, 1, 214, 1, 214, 1, 214, 1, 214, 1, 214, 1, 214, 3,
        214, 2625, 8, 214, 1, 215, 1, 215, 1, 215, 1, 215, 3, 215, 2631, 8, 215, 1, 216, 1, 216, 3, 216,
        2635, 8, 216, 1, 216, 1, 216, 1, 217, 1, 217, 3, 217, 2641, 8, 217, 1, 217, 1, 217, 3, 217, 2645,
        8, 217, 1, 218, 1, 218, 1, 218, 0, 0, 219, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28,
        30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76,
        78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118,
        120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154,
        156, 158, 160, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188, 190,
        192, 194, 196, 198, 200, 202, 204, 206, 208, 210, 212, 214, 216, 218, 220, 222, 224, 226,
        228, 230, 232, 234, 236, 238, 240, 242, 244, 246, 248, 250, 252, 254, 256, 258, 260, 262,
        264, 266, 268, 270, 272, 274, 276, 278, 280, 282, 284, 286, 288, 290, 292, 294, 296, 298,
        300, 302, 304, 306, 308, 310, 312, 314, 316, 318, 320, 322, 324, 326, 328, 330, 332, 334,
        336, 338, 340, 342, 344, 346, 348, 350, 352, 354, 356, 358, 360, 362, 364, 366, 368, 370,
        372, 374, 376, 378, 380, 382, 384, 386, 388, 390, 392, 394, 396, 398, 400, 402, 404, 406,
        408, 410, 412, 414, 416, 418, 420, 422, 424, 426, 428, 430, 432, 434, 436, 0, 19, 8, 0, 21,
        21, 24, 24, 55, 55, 63, 63, 83, 83, 87, 87, 99, 100, 104, 104, 2, 0, 34, 34, 45, 45, 3, 0, 54,
        54, 72, 72, 80, 80, 1, 0, 156, 157, 2, 0, 146, 147, 158, 159, 1, 0, 135, 136, 1, 0, 137, 139,
        14, 0, 18, 18, 21, 21, 24, 24, 29, 29, 34, 34, 45, 45, 55, 55, 63, 63, 68, 68, 83, 83, 87, 87,
        91, 91, 99, 100, 104, 104, 2, 0, 14, 14, 32, 32, 2, 0, 15, 15, 103, 103, 12, 0, 9, 9, 15, 15, 41,
        41, 57, 57, 66, 66, 73, 73, 75, 79, 84, 84, 90, 90, 103, 103, 107, 107, 109, 109, 2, 0, 40, 40,
        53, 53, 2, 0, 17, 17, 94, 94, 2, 0, 137, 137, 148, 148, 2, 0, 54, 54, 72, 72, 2, 0, 42, 42, 96,
        96, 19, 0, 9, 9, 13, 13, 17, 19, 21, 31, 33, 34, 36, 37, 39, 47, 50, 50, 52, 57, 59, 59, 62, 63,
        65, 68, 70, 70, 72, 74, 76, 80, 82, 84, 87, 105, 107, 109, 112, 112, 1, 0, 79, 80, 20, 0, 10,
        12, 14, 16, 20, 20, 32, 32, 35, 35, 38, 38, 48, 49, 51, 51, 58, 58, 60, 61, 64, 64, 69, 69, 71,
        71, 75, 75, 81, 81, 85, 86, 102, 102, 106, 106, 110, 111, 113, 114, 2918, 0, 439, 1, 0, 0, 0,
        2, 463, 1, 0, 0, 0, 4, 475, 1, 0, 0, 0, 6, 489, 1, 0, 0, 0, 8, 491, 1, 0, 0, 0, 10, 501, 1, 0, 0, 0,
        12, 507, 1, 0, 0, 0, 14, 512, 1, 0, 0, 0, 16, 514, 1, 0, 0, 0, 18, 516, 1, 0, 0, 0, 20, 522, 1, 0,
        0, 0, 22, 524, 1, 0, 0, 0, 24, 535, 1, 0, 0, 0, 26, 546, 1, 0, 0, 0, 28, 563, 1, 0, 0, 0, 30, 568,
        1, 0, 0, 0, 32, 578, 1, 0, 0, 0, 34, 591, 1, 0, 0, 0, 36, 593, 1, 0, 0, 0, 38, 601, 1, 0, 0, 0, 40,
        609, 1, 0, 0, 0, 42, 617, 1, 0, 0, 0, 44, 625, 1, 0, 0, 0, 46, 633, 1, 0, 0, 0, 48, 641, 1, 0, 0, 0,
        50, 649, 1, 0, 0, 0, 52, 657, 1, 0, 0, 0, 54, 669, 1, 0, 0, 0, 56, 680, 1, 0, 0, 0, 58, 688, 1, 0,
        0, 0, 60, 696, 1, 0, 0, 0, 62, 708, 1, 0, 0, 0, 64, 716, 1, 0, 0, 0, 66, 731, 1, 0, 0, 0, 68, 755,
        1, 0, 0, 0, 70, 757, 1, 0, 0, 0, 72, 762, 1, 0, 0, 0, 74, 921, 1, 0, 0, 0, 76, 925, 1, 0, 0, 0, 78,
        927, 1, 0, 0, 0, 80, 931, 1, 0, 0, 0, 82, 939, 1, 0, 0, 0, 84, 955, 1, 0, 0, 0, 86, 959, 1, 0, 0, 0,
        88, 961, 1, 0, 0, 0, 90, 971, 1, 0, 0, 0, 92, 973, 1, 0, 0, 0, 94, 982, 1, 0, 0, 0, 96, 995, 1, 0,
        0, 0, 98, 1002, 1, 0, 0, 0, 100, 1004, 1, 0, 0, 0, 102, 1023, 1, 0, 0, 0, 104, 1025, 1, 0, 0, 0,
        106, 1034, 1, 0, 0, 0, 108, 1047, 1, 0, 0, 0, 110, 1049, 1, 0, 0, 0, 112, 1070, 1, 0, 0, 0, 114,
        1079, 1, 0, 0, 0, 116, 1096, 1, 0, 0, 0, 118, 1107, 1, 0, 0, 0, 120, 1112, 1, 0, 0, 0, 122, 1129,
        1, 0, 0, 0, 124, 1131, 1, 0, 0, 0, 126, 1140, 1, 0, 0, 0, 128, 1145, 1, 0, 0, 0, 130, 1155, 1, 0,
        0, 0, 132, 1157, 1, 0, 0, 0, 134, 1160, 1, 0, 0, 0, 136, 1171, 1, 0, 0, 0, 138, 1183, 1, 0, 0, 0,
        140, 1185, 1, 0, 0, 0, 142, 1190, 1, 0, 0, 0, 144, 1193, 1, 0, 0, 0, 146, 1208, 1, 0, 0, 0, 148,
        1217, 1, 0, 0, 0, 150, 1228, 1, 0, 0, 0, 152, 1230, 1, 0, 0, 0, 154, 1237, 1, 0, 0, 0, 156, 1246,
        1, 0, 0, 0, 158, 1248, 1, 0, 0, 0, 160, 1252, 1, 0, 0, 0, 162, 1273, 1, 0, 0, 0, 164, 1280, 1, 0,
        0, 0, 166, 1282, 1, 0, 0, 0, 168, 1288, 1, 0, 0, 0, 170, 1420, 1, 0, 0, 0, 172, 1422, 1, 0, 0, 0,
        174, 1449, 1, 0, 0, 0, 176, 1453, 1, 0, 0, 0, 178, 1455, 1, 0, 0, 0, 180, 1466, 1, 0, 0, 0, 182,
        1468, 1, 0, 0, 0, 184, 1474, 1, 0, 0, 0, 186, 1477, 1, 0, 0, 0, 188, 1492, 1, 0, 0, 0, 190, 1494,
        1, 0, 0, 0, 192, 1498, 1, 0, 0, 0, 194, 1511, 1, 0, 0, 0, 196, 1513, 1, 0, 0, 0, 198, 1532, 1, 0,
        0, 0, 200, 1534, 1, 0, 0, 0, 202, 1546, 1, 0, 0, 0, 204, 1552, 1, 0, 0, 0, 206, 1557, 1, 0, 0, 0,
        208, 1562, 1, 0, 0, 0, 210, 1564, 1, 0, 0, 0, 212, 1570, 1, 0, 0, 0, 214, 1578, 1, 0, 0, 0, 216,
        1591, 1, 0, 0, 0, 218, 1595, 1, 0, 0, 0, 220, 1601, 1, 0, 0, 0, 222, 1620, 1, 0, 0, 0, 224, 1623,
        1, 0, 0, 0, 226, 1629, 1, 0, 0, 0, 228, 1632, 1, 0, 0, 0, 230, 1644, 1, 0, 0, 0, 232, 1650, 1, 0,
        0, 0, 234, 1662, 1, 0, 0, 0, 236, 1666, 1, 0, 0, 0, 238, 1675, 1, 0, 0, 0, 240, 1684, 1, 0, 0, 0,
        242, 1688, 1, 0, 0, 0, 244, 1703, 1, 0, 0, 0, 246, 1712, 1, 0, 0, 0, 248, 1714, 1, 0, 0, 0, 250,
        1722, 1, 0, 0, 0, 252, 1726, 1, 0, 0, 0, 254, 1733, 1, 0, 0, 0, 256, 1738, 1, 0, 0, 0, 258, 1748,
        1, 0, 0, 0, 260, 1752, 1, 0, 0, 0, 262, 1773, 1, 0, 0, 0, 264, 1780, 1, 0, 0, 0, 266, 1794, 1, 0,
        0, 0, 268, 1802, 1, 0, 0, 0, 270, 1806, 1, 0, 0, 0, 272, 1814, 1, 0, 0, 0, 274, 1821, 1, 0, 0, 0,
        276, 1825, 1, 0, 0, 0, 278, 1827, 1, 0, 0, 0, 280, 1831, 1, 0, 0, 0, 282, 1839, 1, 0, 0, 0, 284,
        1841, 1, 0, 0, 0, 286, 1857, 1, 0, 0, 0, 288, 1867, 1, 0, 0, 0, 290, 1870, 1, 0, 0, 0, 292, 1877,
        1, 0, 0, 0, 294, 1895, 1, 0, 0, 0, 296, 1904, 1, 0, 0, 0, 298, 1919, 1, 0, 0, 0, 300, 1923, 1, 0,
        0, 0, 302, 1926, 1, 0, 0, 0, 304, 1939, 1, 0, 0, 0, 306, 1945, 1, 0, 0, 0, 308, 1972, 1, 0, 0, 0,
        310, 1974, 1, 0, 0, 0, 312, 1981, 1, 0, 0, 0, 314, 1991, 1, 0, 0, 0, 316, 1993, 1, 0, 0, 0, 318,
        1996, 1, 0, 0, 0, 320, 2006, 1, 0, 0, 0, 322, 2023, 1, 0, 0, 0, 324, 2035, 1, 0, 0, 0, 326, 2044,
        1, 0, 0, 0, 328, 2060, 1, 0, 0, 0, 330, 2072, 1, 0, 0, 0, 332, 2079, 1, 0, 0, 0, 334, 2081, 1, 0,
        0, 0, 336, 2084, 1, 0, 0, 0, 338, 2094, 1, 0, 0, 0, 340, 2165, 1, 0, 0, 0, 342, 2187, 1, 0, 0, 0,
        344, 2190, 1, 0, 0, 0, 346, 2207, 1, 0, 0, 0, 348, 2214, 1, 0, 0, 0, 350, 2225, 1, 0, 0, 0, 352,
        2228, 1, 0, 0, 0, 354, 2232, 1, 0, 0, 0, 356, 2246, 1, 0, 0, 0, 358, 2248, 1, 0, 0, 0, 360, 2256,
        1, 0, 0, 0, 362, 2274, 1, 0, 0, 0, 364, 2293, 1, 0, 0, 0, 366, 2295, 1, 0, 0, 0, 368, 2303, 1, 0,
        0, 0, 370, 2312, 1, 0, 0, 0, 372, 2314, 1, 0, 0, 0, 374, 2348, 1, 0, 0, 0, 376, 2350, 1, 0, 0, 0,
        378, 2354, 1, 0, 0, 0, 380, 2358, 1, 0, 0, 0, 382, 2370, 1, 0, 0, 0, 384, 2372, 1, 0, 0, 0, 386,
        2378, 1, 0, 0, 0, 388, 2380, 1, 0, 0, 0, 390, 2389, 1, 0, 0, 0, 392, 2402, 1, 0, 0, 0, 394, 2408,
        1, 0, 0, 0, 396, 2410, 1, 0, 0, 0, 398, 2426, 1, 0, 0, 0, 400, 2428, 1, 0, 0, 0, 402, 2444, 1, 0,
        0, 0, 404, 2461, 1, 0, 0, 0, 406, 2476, 1, 0, 0, 0, 408, 2485, 1, 0, 0, 0, 410, 2501, 1, 0, 0, 0,
        412, 2513, 1, 0, 0, 0, 414, 2516, 1, 0, 0, 0, 416, 2532, 1, 0, 0, 0, 418, 2537, 1, 0, 0, 0, 420,
        2551, 1, 0, 0, 0, 422, 2557, 1, 0, 0, 0, 424, 2568, 1, 0, 0, 0, 426, 2592, 1, 0, 0, 0, 428, 2604,
        1, 0, 0, 0, 430, 2626, 1, 0, 0, 0, 432, 2632, 1, 0, 0, 0, 434, 2638, 1, 0, 0, 0, 436, 2646, 1, 0,
        0, 0, 438, 440, 5, 1, 0, 0, 439, 438, 1, 0, 0, 0, 439, 440, 1, 0, 0, 0, 440, 442, 1, 0, 0, 0, 441,
        443, 3, 216, 108, 0, 442, 441, 1, 0, 0, 0, 442, 443, 1, 0, 0, 0, 443, 445, 1, 0, 0, 0, 444, 446,
        3, 220, 110, 0, 445, 444, 1, 0, 0, 0, 445, 446, 1, 0, 0, 0, 446, 450, 1, 0, 0, 0, 447, 449, 3, 348,
        174, 0, 448, 447, 1, 0, 0, 0, 449, 452, 1, 0, 0, 0, 450, 448, 1, 0, 0, 0, 450, 451, 1, 0, 0, 0, 451,
        454, 1, 0, 0, 0, 452, 450, 1, 0, 0, 0, 453, 455, 3, 224, 112, 0, 454, 453, 1, 0, 0, 0, 454, 455,
        1, 0, 0, 0, 455, 456, 1, 0, 0, 0, 456, 457, 5, 0, 0, 1, 457, 1, 1, 0, 0, 0, 458, 460, 3, 436, 218,
        0, 459, 461, 3, 22, 11, 0, 460, 459, 1, 0, 0, 0, 460, 461, 1, 0, 0, 0, 461, 464, 1, 0, 0, 0, 462,
        464, 3, 230, 115, 0, 463, 458, 1, 0, 0, 0, 463, 462, 1, 0, 0, 0, 464, 472, 1, 0, 0, 0, 465, 466,
        5, 131, 0, 0, 466, 468, 3, 436, 218, 0, 467, 469, 3, 22, 11, 0, 468, 467, 1, 0, 0, 0, 468, 469,
        1, 0, 0, 0, 469, 471, 1, 0, 0, 0, 470, 465, 1, 0, 0, 0, 471, 474, 1, 0, 0, 0, 472, 470, 1, 0, 0, 0,
        472, 473, 1, 0, 0, 0, 473, 3, 1, 0, 0, 0, 474, 472, 1, 0, 0, 0, 475, 481, 3, 6, 3, 0, 476, 480, 5,
        148, 0, 0, 477, 480, 3, 324, 162, 0, 478, 480, 5, 137, 0, 0, 479, 476, 1, 0, 0, 0, 479, 477, 1,
        0, 0, 0, 479, 478, 1, 0, 0, 0, 480, 483, 1, 0, 0, 0, 481, 479, 1, 0, 0, 0, 481, 482, 1, 0, 0, 0, 482,
        5, 1, 0, 0, 0, 483, 481, 1, 0, 0, 0, 484, 490, 3, 12, 6, 0, 485, 490, 3, 20, 10, 0, 486, 487, 5,
        108, 0, 0, 487, 490, 5, 137, 0, 0, 488, 490, 3, 8, 4, 0, 489, 484, 1, 0, 0, 0, 489, 485, 1, 0, 0,
        0, 489, 486, 1, 0, 0, 0, 489, 488, 1, 0, 0, 0, 490, 7, 1, 0, 0, 0, 491, 492, 5, 129, 0, 0, 492, 495,
        3, 10, 5, 0, 493, 494, 5, 132, 0, 0, 494, 496, 3, 10, 5, 0, 495, 493, 1, 0, 0, 0, 496, 497, 1, 0,
        0, 0, 497, 495, 1, 0, 0, 0, 497, 498, 1, 0, 0, 0, 498, 499, 1, 0, 0, 0, 499, 500, 5, 130, 0, 0, 500,
        9, 1, 0, 0, 0, 501, 503, 3, 4, 2, 0, 502, 504, 3, 436, 218, 0, 503, 502, 1, 0, 0, 0, 503, 504, 1,
        0, 0, 0, 504, 11, 1, 0, 0, 0, 505, 508, 3, 14, 7, 0, 506, 508, 5, 18, 0, 0, 507, 505, 1, 0, 0, 0,
        507, 506, 1, 0, 0, 0, 508, 13, 1, 0, 0, 0, 509, 513, 3, 16, 8, 0, 510, 513, 3, 18, 9, 0, 511, 513,
        5, 29, 0, 0, 512, 509, 1, 0, 0, 0, 512, 510, 1, 0, 0, 0, 512, 511, 1, 0, 0, 0, 513, 15, 1, 0, 0, 0,
        514, 515, 7, 0, 0, 0, 515, 17, 1, 0, 0, 0, 516, 517, 7, 1, 0, 0, 517, 19, 1, 0, 0, 0, 518, 523, 3,
        2, 1, 0, 519, 523, 5, 68, 0, 0, 520, 523, 5, 35, 0, 0, 521, 523, 5, 91, 0, 0, 522, 518, 1, 0, 0,
        0, 522, 519, 1, 0, 0, 0, 522, 520, 1, 0, 0, 0, 522, 521, 1, 0, 0, 0, 523, 21, 1, 0, 0, 0, 524, 525,
        5, 146, 0, 0, 525, 530, 3, 4, 2, 0, 526, 527, 5, 132, 0, 0, 527, 529, 3, 4, 2, 0, 528, 526, 1, 0,
        0, 0, 529, 532, 1, 0, 0, 0, 530, 528, 1, 0, 0, 0, 530, 531, 1, 0, 0, 0, 531, 533, 1, 0, 0, 0, 532,
        530, 1, 0, 0, 0, 533, 534, 5, 147, 0, 0, 534, 23, 1, 0, 0, 0, 535, 540, 3, 26, 13, 0, 536, 537,
        5, 132, 0, 0, 537, 539, 3, 26, 13, 0, 538, 536, 1, 0, 0, 0, 539, 542, 1, 0, 0, 0, 540, 538, 1, 0,
        0, 0, 540, 541, 1, 0, 0, 0, 541, 25, 1, 0, 0, 0, 542, 540, 1, 0, 0, 0, 543, 544, 3, 436, 218, 0,
        544, 545, 5, 133, 0, 0, 545, 547, 1, 0, 0, 0, 546, 543, 1, 0, 0, 0, 546, 547, 1, 0, 0, 0, 547, 549,
        1, 0, 0, 0, 548, 550, 7, 2, 0, 0, 549, 548, 1, 0, 0, 0, 549, 550, 1, 0, 0, 0, 550, 557, 1, 0, 0, 0,
        551, 558, 3, 28, 14, 0, 552, 555, 5, 106, 0, 0, 553, 555, 3, 4, 2, 0, 554, 552, 1, 0, 0, 0, 554,
        553, 1, 0, 0, 0, 555, 556, 1, 0, 0, 0, 556, 558, 3, 28, 14, 0, 557, 551, 1, 0, 0, 0, 557, 554, 1,
        0, 0, 0, 558, 27, 1, 0, 0, 0, 559, 564, 3, 32, 16, 0, 560, 564, 3, 30, 15, 0, 561, 562, 5, 80, 0,
        0, 562, 564, 3, 30, 15, 0, 563, 559, 1, 0, 0, 0, 563, 560, 1, 0, 0, 0, 563, 561, 1, 0, 0, 0, 564,
        29, 1, 0, 0, 0, 565, 569, 3, 120, 60, 0, 566, 569, 3, 132, 66, 0, 567, 569, 3, 36, 18, 0, 568,
        565, 1, 0, 0, 0, 568, 566, 1, 0, 0, 0, 568, 567, 1, 0, 0, 0, 569, 31, 1, 0, 0, 0, 570, 571, 3, 68,
        34, 0, 571, 572, 3, 34, 17, 0, 572, 573, 3, 28, 14, 0, 573, 579, 1, 0, 0, 0, 574, 575, 3, 68, 34,
        0, 575, 576, 5, 170, 0, 0, 576, 577, 3, 76, 38, 0, 577, 579, 1, 0, 0, 0, 578, 570, 1, 0, 0, 0, 578,
        574, 1, 0, 0, 0, 579, 33, 1, 0, 0, 0, 580, 592, 5, 145, 0, 0, 581, 592, 5, 160, 0, 0, 582, 592,
        5, 161, 0, 0, 583, 592, 5, 162, 0, 0, 584, 592, 5, 163, 0, 0, 585, 592, 5, 164, 0, 0, 586, 592,
        5, 165, 0, 0, 587, 592, 5, 166, 0, 0, 588, 592, 5, 167, 0, 0, 589, 592, 5, 169, 0, 0, 590, 592,
        3, 380, 190, 0, 591, 580, 1, 0, 0, 0, 591, 581, 1, 0, 0, 0, 591, 582, 1, 0, 0, 0, 591, 583, 1, 0,
        0, 0, 591, 584, 1, 0, 0, 0, 591, 585, 1, 0, 0, 0, 591, 586, 1, 0, 0, 0, 591, 587, 1, 0, 0, 0, 591,
        588, 1, 0, 0, 0, 591, 589, 1, 0, 0, 0, 591, 590, 1, 0, 0, 0, 592, 35, 1, 0, 0, 0, 593, 599, 3, 38,
        19, 0, 594, 595, 5, 148, 0, 0, 595, 596, 3, 76, 38, 0, 596, 597, 5, 133, 0, 0, 597, 598, 3, 76,
        38, 0, 598, 600, 1, 0, 0, 0, 599, 594, 1, 0, 0, 0, 599, 600, 1, 0, 0, 0, 600, 37, 1, 0, 0, 0, 601,
        607, 3, 40, 20, 0, 602, 605, 5, 150, 0, 0, 603, 606, 3, 38, 19, 0, 604, 606, 3, 78, 39, 0, 605,
        603, 1, 0, 0, 0, 605, 604, 1, 0, 0, 0, 606, 608, 1, 0, 0, 0, 607, 602, 1, 0, 0, 0, 607, 608, 1, 0,
        0, 0, 608, 39, 1, 0, 0, 0, 609, 614, 3, 42, 21, 0, 610, 611, 5, 154, 0, 0, 611, 613, 3, 42, 21,
        0, 612, 610, 1, 0, 0, 0, 613, 616, 1, 0, 0, 0, 614, 612, 1, 0, 0, 0, 614, 615, 1, 0, 0, 0, 615, 41,
        1, 0, 0, 0, 616, 614, 1, 0, 0, 0, 617, 622, 3, 44, 22, 0, 618, 619, 5, 153, 0, 0, 619, 621, 3, 44,
        22, 0, 620, 618, 1, 0, 0, 0, 621, 624, 1, 0, 0, 0, 622, 620, 1, 0, 0, 0, 622, 623, 1, 0, 0, 0, 623,
        43, 1, 0, 0, 0, 624, 622, 1, 0, 0, 0, 625, 630, 3, 46, 23, 0, 626, 627, 5, 141, 0, 0, 627, 629,
        3, 46, 23, 0, 628, 626, 1, 0, 0, 0, 629, 632, 1, 0, 0, 0, 630, 628, 1, 0, 0, 0, 630, 631, 1, 0, 0,
        0, 631, 45, 1, 0, 0, 0, 632, 630, 1, 0, 0, 0, 633, 638, 3, 48, 24, 0, 634, 635, 5, 142, 0, 0, 635,
        637, 3, 48, 24, 0, 636, 634, 1, 0, 0, 0, 637, 640, 1, 0, 0, 0, 638, 636, 1, 0, 0, 0, 638, 639, 1,
        0, 0, 0, 639, 47, 1, 0, 0, 0, 640, 638, 1, 0, 0, 0, 641, 646, 3, 50, 25, 0, 642, 643, 5, 140, 0,
        0, 643, 645, 3, 50, 25, 0, 644, 642, 1, 0, 0, 0, 645, 648, 1, 0, 0, 0, 646, 644, 1, 0, 0, 0, 646,
        647, 1, 0, 0, 0, 647, 49, 1, 0, 0, 0, 648, 646, 1, 0, 0, 0, 649, 654, 3, 52, 26, 0, 650, 651, 7,
        3, 0, 0, 651, 653, 3, 52, 26, 0, 652, 650, 1, 0, 0, 0, 653, 656, 1, 0, 0, 0, 654, 652, 1, 0, 0, 0,
        654, 655, 1, 0, 0, 0, 655, 51, 1, 0, 0, 0, 656, 654, 1, 0, 0, 0, 657, 666, 3, 54, 27, 0, 658, 659,
        7, 4, 0, 0, 659, 665, 3, 54, 27, 0, 660, 661, 5, 59, 0, 0, 661, 665, 3, 114, 57, 0, 662, 663, 5,
        13, 0, 0, 663, 665, 3, 4, 2, 0, 664, 658, 1, 0, 0, 0, 664, 660, 1, 0, 0, 0, 664, 662, 1, 0, 0, 0,
        665, 668, 1, 0, 0, 0, 666, 664, 1, 0, 0, 0, 666, 667, 1, 0, 0, 0, 667, 53, 1, 0, 0, 0, 668, 666,
        1, 0, 0, 0, 669, 677, 3, 56, 28, 0, 670, 673, 5, 168, 0, 0, 671, 673, 3, 378, 189, 0, 672, 670,
        1, 0, 0, 0, 672, 671, 1, 0, 0, 0, 673, 674, 1, 0, 0, 0, 674, 676, 3, 56, 28, 0, 675, 672, 1, 0, 0,
        0, 676, 679, 1, 0, 0, 0, 677, 675, 1, 0, 0, 0, 677, 678, 1, 0, 0, 0, 678, 55, 1, 0, 0, 0, 679, 677,
        1, 0, 0, 0, 680, 685, 3, 58, 29, 0, 681, 682, 7, 5, 0, 0, 682, 684, 3, 58, 29, 0, 683, 681, 1, 0,
        0, 0, 684, 687, 1, 0, 0, 0, 685, 683, 1, 0, 0, 0, 685, 686, 1, 0, 0, 0, 686, 57, 1, 0, 0, 0, 687,
        685, 1, 0, 0, 0, 688, 693, 3, 60, 30, 0, 689, 690, 7, 6, 0, 0, 690, 692, 3, 60, 30, 0, 691, 689,
        1, 0, 0, 0, 692, 695, 1, 0, 0, 0, 693, 691, 1, 0, 0, 0, 693, 694, 1, 0, 0, 0, 694, 59, 1, 0, 0, 0,
        695, 693, 1, 0, 0, 0, 696, 706, 3, 66, 33, 0, 697, 698, 5, 93, 0, 0, 698, 703, 5, 125, 0, 0, 699,
        701, 3, 62, 31, 0, 700, 702, 5, 132, 0, 0, 701, 700, 1, 0, 0, 0, 701, 702, 1, 0, 0, 0, 702, 704,
        1, 0, 0, 0, 703, 699, 1, 0, 0, 0, 703, 704, 1, 0, 0, 0, 704, 705, 1, 0, 0, 0, 705, 707, 5, 126, 0,
        0, 706, 697, 1, 0, 0, 0, 706, 707, 1, 0, 0, 0, 707, 61, 1, 0, 0, 0, 708, 713, 3, 64, 32, 0, 709,
        710, 5, 132, 0, 0, 710, 712, 3, 64, 32, 0, 711, 709, 1, 0, 0, 0, 712, 715, 1, 0, 0, 0, 713, 711,
        1, 0, 0, 0, 713, 714, 1, 0, 0, 0, 714, 63, 1, 0, 0, 0, 715, 713, 1, 0, 0, 0, 716, 718, 3, 28, 14,
        0, 717, 719, 3, 190, 95, 0, 718, 717, 1, 0, 0, 0, 718, 719, 1, 0, 0, 0, 719, 720, 1, 0, 0, 0, 720,
        721, 3, 376, 188, 0, 721, 722, 3, 76, 38, 0, 722, 65, 1, 0, 0, 0, 723, 732, 3, 68, 34, 0, 724,
        726, 3, 68, 34, 0, 725, 724, 1, 0, 0, 0, 725, 726, 1, 0, 0, 0, 726, 727, 1, 0, 0, 0, 727, 729, 5,
        171, 0, 0, 728, 730, 3, 68, 34, 0, 729, 728, 1, 0, 0, 0, 729, 730, 1, 0, 0, 0, 730, 732, 1, 0, 0,
        0, 731, 723, 1, 0, 0, 0, 731, 725, 1, 0, 0, 0, 732, 67, 1, 0, 0, 0, 733, 756, 3, 70, 35, 0, 734,
        756, 3, 72, 36, 0, 735, 736, 5, 135, 0, 0, 736, 756, 3, 68, 34, 0, 737, 738, 5, 136, 0, 0, 738,
        756, 3, 68, 34, 0, 739, 740, 5, 143, 0, 0, 740, 756, 3, 68, 34, 0, 741, 742, 5, 144, 0, 0, 742,
        756, 3, 68, 34, 0, 743, 744, 5, 151, 0, 0, 744, 756, 3, 68, 34, 0, 745, 746, 5, 152, 0, 0, 746,
        756, 3, 68, 34, 0, 747, 748, 5, 16, 0, 0, 748, 756, 3, 68, 34, 0, 749, 750, 5, 140, 0, 0, 750,
        756, 3, 68, 34, 0, 751, 752, 5, 137, 0, 0, 752, 756, 3, 68, 34, 0, 753, 754, 5, 142, 0, 0, 754,
        756, 3, 68, 34, 0, 755, 733, 1, 0, 0, 0, 755, 734, 1, 0, 0, 0, 755, 735, 1, 0, 0, 0, 755, 737, 1,
        0, 0, 0, 755, 739, 1, 0, 0, 0, 755, 741, 1, 0, 0, 0, 755, 743, 1, 0, 0, 0, 755, 745, 1, 0, 0, 0, 755,
        747, 1, 0, 0, 0, 755, 749, 1, 0, 0, 0, 755, 751, 1, 0, 0, 0, 755, 753, 1, 0, 0, 0, 756, 69, 1, 0,
        0, 0, 757, 758, 5, 129, 0, 0, 758, 759, 3, 4, 2, 0, 759, 760, 5, 130, 0, 0, 760, 761, 3, 68, 34,
        0, 761, 71, 1, 0, 0, 0, 762, 764, 3, 74, 37, 0, 763, 765, 5, 143, 0, 0, 764, 763, 1, 0, 0, 0, 764,
        765, 1, 0, 0, 0, 765, 769, 1, 0, 0, 0, 766, 768, 3, 82, 41, 0, 767, 766, 1, 0, 0, 0, 768, 771, 1,
        0, 0, 0, 769, 767, 1, 0, 0, 0, 769, 770, 1, 0, 0, 0, 770, 773, 1, 0, 0, 0, 771, 769, 1, 0, 0, 0, 772,
        774, 5, 143, 0, 0, 773, 772, 1, 0, 0, 0, 773, 774, 1, 0, 0, 0, 774, 797, 1, 0, 0, 0, 775, 782, 3,
        80, 40, 0, 776, 782, 3, 432, 216, 0, 777, 782, 5, 151, 0, 0, 778, 782, 5, 152, 0, 0, 779, 780,
        5, 155, 0, 0, 780, 782, 3, 436, 218, 0, 781, 775, 1, 0, 0, 0, 781, 776, 1, 0, 0, 0, 781, 777, 1,
        0, 0, 0, 781, 778, 1, 0, 0, 0, 781, 779, 1, 0, 0, 0, 782, 784, 1, 0, 0, 0, 783, 785, 5, 143, 0, 0,
        784, 783, 1, 0, 0, 0, 784, 785, 1, 0, 0, 0, 785, 789, 1, 0, 0, 0, 786, 788, 3, 82, 41, 0, 787, 786,
        1, 0, 0, 0, 788, 791, 1, 0, 0, 0, 789, 787, 1, 0, 0, 0, 789, 790, 1, 0, 0, 0, 790, 793, 1, 0, 0, 0,
        791, 789, 1, 0, 0, 0, 792, 794, 5, 143, 0, 0, 793, 792, 1, 0, 0, 0, 793, 794, 1, 0, 0, 0, 794, 796,
        1, 0, 0, 0, 795, 781, 1, 0, 0, 0, 796, 799, 1, 0, 0, 0, 797, 795, 1, 0, 0, 0, 797, 798, 1, 0, 0, 0,
        798, 73, 1, 0, 0, 0, 799, 797, 1, 0, 0, 0, 800, 922, 3, 382, 191, 0, 801, 803, 3, 436, 218, 0,
        802, 804, 3, 22, 11, 0, 803, 802, 1, 0, 0, 0, 803, 804, 1, 0, 0, 0, 804, 922, 1, 0, 0, 0, 805, 806,
        5, 129, 0, 0, 806, 807, 3, 28, 14, 0, 807, 808, 5, 130, 0, 0, 808, 922, 1, 0, 0, 0, 809, 922, 3,
        86, 43, 0, 810, 922, 3, 230, 115, 0, 811, 922, 5, 115, 0, 0, 812, 922, 5, 94, 0, 0, 813, 823,
        5, 17, 0, 0, 814, 815, 5, 131, 0, 0, 815, 817, 3, 436, 218, 0, 816, 818, 3, 22, 11, 0, 817, 816,
        1, 0, 0, 0, 817, 818, 1, 0, 0, 0, 818, 824, 1, 0, 0, 0, 819, 820, 5, 127, 0, 0, 820, 821, 3, 88,
        44, 0, 821, 822, 5, 128, 0, 0, 822, 824, 1, 0, 0, 0, 823, 814, 1, 0, 0, 0, 823, 819, 1, 0, 0, 0,
        824, 922, 1, 0, 0, 0, 825, 854, 5, 66, 0, 0, 826, 848, 3, 4, 2, 0, 827, 849, 3, 434, 217, 0, 828,
        849, 3, 90, 45, 0, 829, 830, 5, 127, 0, 0, 830, 831, 3, 88, 44, 0, 831, 835, 5, 128, 0, 0, 832,
        834, 3, 324, 162, 0, 833, 832, 1, 0, 0, 0, 834, 837, 1, 0, 0, 0, 835, 833, 1, 0, 0, 0, 835, 836,
        1, 0, 0, 0, 836, 839, 1, 0, 0, 0, 837, 835, 1, 0, 0, 0, 838, 840, 3, 326, 163, 0, 839, 838, 1, 0,
        0, 0, 839, 840, 1, 0, 0, 0, 840, 849, 1, 0, 0, 0, 841, 843, 3, 324, 162, 0, 842, 841, 1, 0, 0, 0,
        843, 844, 1, 0, 0, 0, 844, 842, 1, 0, 0, 0, 844, 845, 1, 0, 0, 0, 845, 846, 1, 0, 0, 0, 846, 847,
        3, 326, 163, 0, 847, 849, 1, 0, 0, 0, 848, 827, 1, 0, 0, 0, 848, 828, 1, 0, 0, 0, 848, 829, 1, 0,
        0, 0, 848, 842, 1, 0, 0, 0, 849, 855, 1, 0, 0, 0, 850, 855, 3, 104, 52, 0, 851, 852, 3, 324, 162,
        0, 852, 853, 3, 326, 163, 0, 853, 855, 1, 0, 0, 0, 854, 826, 1, 0, 0, 0, 854, 850, 1, 0, 0, 0, 854,
        851, 1, 0, 0, 0, 855, 922, 1, 0, 0, 0, 856, 857, 5, 129, 0, 0, 857, 860, 3, 26, 13, 0, 858, 859,
        5, 132, 0, 0, 859, 861, 3, 26, 13, 0, 860, 858, 1, 0, 0, 0, 861, 862, 1, 0, 0, 0, 862, 860, 1, 0,
        0, 0, 862, 863, 1, 0, 0, 0, 863, 864, 1, 0, 0, 0, 864, 865, 5, 130, 0, 0, 865, 922, 1, 0, 0, 0, 866,
        867, 5, 98, 0, 0, 867, 871, 5, 129, 0, 0, 868, 872, 3, 110, 55, 0, 869, 872, 3, 4, 2, 0, 870, 872,
        5, 108, 0, 0, 871, 868, 1, 0, 0, 0, 871, 869, 1, 0, 0, 0, 871, 870, 1, 0, 0, 0, 872, 873, 1, 0, 0,
        0, 873, 922, 5, 130, 0, 0, 874, 875, 5, 25, 0, 0, 875, 876, 5, 129, 0, 0, 876, 877, 3, 28, 14,
        0, 877, 878, 5, 130, 0, 0, 878, 922, 1, 0, 0, 0, 879, 880, 5, 101, 0, 0, 880, 881, 5, 129, 0, 0,
        881, 882, 3, 28, 14, 0, 882, 883, 5, 130, 0, 0, 883, 922, 1, 0, 0, 0, 884, 889, 5, 30, 0, 0, 885,
        886, 5, 129, 0, 0, 886, 887, 3, 4, 2, 0, 887, 888, 5, 130, 0, 0, 888, 890, 1, 0, 0, 0, 889, 885,
        1, 0, 0, 0, 889, 890, 1, 0, 0, 0, 890, 922, 1, 0, 0, 0, 891, 893, 5, 15, 0, 0, 892, 891, 1, 0, 0,
        0, 892, 893, 1, 0, 0, 0, 893, 894, 1, 0, 0, 0, 894, 900, 5, 31, 0, 0, 895, 897, 5, 129, 0, 0, 896,
        898, 3, 124, 62, 0, 897, 896, 1, 0, 0, 0, 897, 898, 1, 0, 0, 0, 898, 899, 1, 0, 0, 0, 899, 901,
        5, 130, 0, 0, 900, 895, 1, 0, 0, 0, 900, 901, 1, 0, 0, 0, 901, 902, 1, 0, 0, 0, 902, 922, 3, 172,
        86, 0, 903, 904, 5, 88, 0, 0, 904, 905, 5, 129, 0, 0, 905, 906, 3, 4, 2, 0, 906, 907, 5, 130, 0,
        0, 907, 922, 1, 0, 0, 0, 908, 909, 5, 64, 0, 0, 909, 915, 5, 129, 0, 0, 910, 911, 3, 436, 218,
        0, 911, 912, 5, 131, 0, 0, 912, 914, 1, 0, 0, 0, 913, 910, 1, 0, 0, 0, 914, 917, 1, 0, 0, 0, 915,
        913, 1, 0, 0, 0, 915, 916, 1, 0, 0, 0, 916, 918, 1, 0, 0, 0, 917, 915, 1, 0, 0, 0, 918, 919, 3, 436,
        218, 0, 919, 920, 5, 130, 0, 0, 920, 922, 1, 0, 0, 0, 921, 800, 1, 0, 0, 0, 921, 801, 1, 0, 0, 0,
        921, 805, 1, 0, 0, 0, 921, 809, 1, 0, 0, 0, 921, 810, 1, 0, 0, 0, 921, 811, 1, 0, 0, 0, 921, 812,
        1, 0, 0, 0, 921, 813, 1, 0, 0, 0, 921, 825, 1, 0, 0, 0, 921, 856, 1, 0, 0, 0, 921, 866, 1, 0, 0, 0,
        921, 874, 1, 0, 0, 0, 921, 879, 1, 0, 0, 0, 921, 884, 1, 0, 0, 0, 921, 892, 1, 0, 0, 0, 921, 903,
        1, 0, 0, 0, 921, 908, 1, 0, 0, 0, 922, 75, 1, 0, 0, 0, 923, 926, 3, 28, 14, 0, 924, 926, 3, 78, 39,
        0, 925, 923, 1, 0, 0, 0, 925, 924, 1, 0, 0, 0, 926, 77, 1, 0, 0, 0, 927, 928, 5, 95, 0, 0, 928, 929,
        3, 28, 14, 0, 929, 79, 1, 0, 0, 0, 930, 932, 5, 148, 0, 0, 931, 930, 1, 0, 0, 0, 931, 932, 1, 0,
        0, 0, 932, 933, 1, 0, 0, 0, 933, 934, 5, 131, 0, 0, 934, 936, 3, 436, 218, 0, 935, 937, 3, 22,
        11, 0, 936, 935, 1, 0, 0, 0, 936, 937, 1, 0, 0, 0, 937, 81, 1, 0, 0, 0, 938, 940, 5, 148, 0, 0, 939,
        938, 1, 0, 0, 0, 939, 940, 1, 0, 0, 0, 940, 941, 1, 0, 0, 0, 941, 942, 5, 127, 0, 0, 942, 947, 3,
        84, 42, 0, 943, 944, 5, 132, 0, 0, 944, 946, 3, 84, 42, 0, 945, 943, 1, 0, 0, 0, 946, 949, 1, 0,
        0, 0, 947, 945, 1, 0, 0, 0, 947, 948, 1, 0, 0, 0, 948, 950, 1, 0, 0, 0, 949, 947, 1, 0, 0, 0, 950,
        951, 5, 128, 0, 0, 951, 83, 1, 0, 0, 0, 952, 953, 3, 436, 218, 0, 953, 954, 5, 133, 0, 0, 954,
        956, 1, 0, 0, 0, 955, 952, 1, 0, 0, 0, 955, 956, 1, 0, 0, 0, 956, 957, 1, 0, 0, 0, 957, 958, 3, 28,
        14, 0, 958, 85, 1, 0, 0, 0, 959, 960, 7, 7, 0, 0, 960, 87, 1, 0, 0, 0, 961, 966, 3, 28, 14, 0, 962,
        963, 5, 132, 0, 0, 963, 965, 3, 28, 14, 0, 964, 962, 1, 0, 0, 0, 965, 968, 1, 0, 0, 0, 966, 964,
        1, 0, 0, 0, 966, 967, 1, 0, 0, 0, 967, 89, 1, 0, 0, 0, 968, 966, 1, 0, 0, 0, 969, 972, 3, 92, 46,
        0, 970, 972, 3, 100, 50, 0, 971, 969, 1, 0, 0, 0, 971, 970, 1, 0, 0, 0, 972, 91, 1, 0, 0, 0, 973,
        978, 5, 125, 0, 0, 974, 976, 3, 94, 47, 0, 975, 977, 5, 132, 0, 0, 976, 975, 1, 0, 0, 0, 976, 977,
        1, 0, 0, 0, 977, 979, 1, 0, 0, 0, 978, 974, 1, 0, 0, 0, 978, 979, 1, 0, 0, 0, 979, 980, 1, 0, 0, 0,
        980, 981, 5, 126, 0, 0, 981, 93, 1, 0, 0, 0, 982, 987, 3, 96, 48, 0, 983, 984, 5, 132, 0, 0, 984,
        986, 3, 96, 48, 0, 985, 983, 1, 0, 0, 0, 986, 989, 1, 0, 0, 0, 987, 985, 1, 0, 0, 0, 987, 988, 1,
        0, 0, 0, 988, 95, 1, 0, 0, 0, 989, 987, 1, 0, 0, 0, 990, 996, 3, 436, 218, 0, 991, 992, 5, 127,
        0, 0, 992, 993, 3, 28, 14, 0, 993, 994, 5, 128, 0, 0, 994, 996, 1, 0, 0, 0, 995, 990, 1, 0, 0, 0,
        995, 991, 1, 0, 0, 0, 996, 997, 1, 0, 0, 0, 997, 998, 5, 145, 0, 0, 998, 999, 3, 98, 49, 0, 999,
        97, 1, 0, 0, 0, 1000, 1003, 3, 28, 14, 0, 1001, 1003, 3, 90, 45, 0, 1002, 1000, 1, 0, 0, 0, 1002,
        1001, 1, 0, 0, 0, 1003, 99, 1, 0, 0, 0, 1004, 1005, 5, 125, 0, 0, 1005, 1010, 3, 102, 51, 0, 1006,
        1007, 5, 132, 0, 0, 1007, 1009, 3, 102, 51, 0, 1008, 1006, 1, 0, 0, 0, 1009, 1012, 1, 0, 0, 0,
        1010, 1008, 1, 0, 0, 0, 1010, 1011, 1, 0, 0, 0, 1011, 1014, 1, 0, 0, 0, 1012, 1010, 1, 0, 0, 0,
        1013, 1015, 5, 132, 0, 0, 1014, 1013, 1, 0, 0, 0, 1014, 1015, 1, 0, 0, 0, 1015, 1016, 1, 0, 0,
        0, 1016, 1017, 5, 126, 0, 0, 1017, 101, 1, 0, 0, 0, 1018, 1024, 3, 30, 15, 0, 1019, 1020, 5,
        125, 0, 0, 1020, 1021, 3, 88, 44, 0, 1021, 1022, 5, 126, 0, 0, 1022, 1024, 1, 0, 0, 0, 1023,
        1018, 1, 0, 0, 0, 1023, 1019, 1, 0, 0, 0, 1024, 103, 1, 0, 0, 0, 1025, 1030, 5, 125, 0, 0, 1026,
        1028, 3, 106, 53, 0, 1027, 1029, 5, 132, 0, 0, 1028, 1027, 1, 0, 0, 0, 1028, 1029, 1, 0, 0, 0,
        1029, 1031, 1, 0, 0, 0, 1030, 1026, 1, 0, 0, 0, 1030, 1031, 1, 0, 0, 0, 1031, 1032, 1, 0, 0, 0,
        1032, 1033, 5, 126, 0, 0, 1033, 105, 1, 0, 0, 0, 1034, 1039, 3, 108, 54, 0, 1035, 1036, 5, 132,
        0, 0, 1036, 1038, 3, 108, 54, 0, 1037, 1035, 1, 0, 0, 0, 1038, 1041, 1, 0, 0, 0, 1039, 1037,
        1, 0, 0, 0, 1039, 1040, 1, 0, 0, 0, 1040, 107, 1, 0, 0, 0, 1041, 1039, 1, 0, 0, 0, 1042, 1048,
        3, 72, 36, 0, 1043, 1044, 3, 436, 218, 0, 1044, 1045, 5, 145, 0, 0, 1045, 1046, 3, 28, 14, 0,
        1046, 1048, 1, 0, 0, 0, 1047, 1042, 1, 0, 0, 0, 1047, 1043, 1, 0, 0, 0, 1048, 109, 1, 0, 0, 0,
        1049, 1058, 3, 436, 218, 0, 1050, 1052, 3, 112, 56, 0, 1051, 1050, 1, 0, 0, 0, 1051, 1052,
        1, 0, 0, 0, 1052, 1059, 1, 0, 0, 0, 1053, 1054, 5, 149, 0, 0, 1054, 1056, 3, 436, 218, 0, 1055,
        1057, 3, 112, 56, 0, 1056, 1055, 1, 0, 0, 0, 1056, 1057, 1, 0, 0, 0, 1057, 1059, 1, 0, 0, 0, 1058,
        1051, 1, 0, 0, 0, 1058, 1053, 1, 0, 0, 0, 1059, 1067, 1, 0, 0, 0, 1060, 1061, 5, 131, 0, 0, 1061,
        1063, 3, 436, 218, 0, 1062, 1064, 3, 112, 56, 0, 1063, 1062, 1, 0, 0, 0, 1063, 1064, 1, 0, 0,
        0, 1064, 1066, 1, 0, 0, 0, 1065, 1060, 1, 0, 0, 0, 1066, 1069, 1, 0, 0, 0, 1067, 1065, 1, 0, 0,
        0, 1067, 1068, 1, 0, 0, 0, 1068, 111, 1, 0, 0, 0, 1069, 1067, 1, 0, 0, 0, 1070, 1074, 5, 146,
        0, 0, 1071, 1073, 5, 132, 0, 0, 1072, 1071, 1, 0, 0, 0, 1073, 1076, 1, 0, 0, 0, 1074, 1072, 1,
        0, 0, 0, 1074, 1075, 1, 0, 0, 0, 1075, 1077, 1, 0, 0, 0, 1076, 1074, 1, 0, 0, 0, 1077, 1078, 5,
        147, 0, 0, 1078, 113, 1, 0, 0, 0, 1079, 1084, 3, 6, 3, 0, 1080, 1083, 3, 324, 162, 0, 1081, 1083,
        5, 137, 0, 0, 1082, 1080, 1, 0, 0, 0, 1082, 1081, 1, 0, 0, 0, 1083, 1086, 1, 0, 0, 0, 1084, 1082,
        1, 0, 0, 0, 1084, 1085, 1, 0, 0, 0, 1085, 1088, 1, 0, 0, 0, 1086, 1084, 1, 0, 0, 0, 1087, 1089,
        5, 148, 0, 0, 1088, 1087, 1, 0, 0, 0, 1088, 1089, 1, 0, 0, 0, 1089, 1091, 1, 0, 0, 0, 1090, 1092,
        3, 116, 58, 0, 1091, 1090, 1, 0, 0, 0, 1091, 1092, 1, 0, 0, 0, 1092, 1094, 1, 0, 0, 0, 1093, 1095,
        3, 436, 218, 0, 1094, 1093, 1, 0, 0, 0, 1094, 1095, 1, 0, 0, 0, 1095, 115, 1, 0, 0, 0, 1096, 1097,
        5, 125, 0, 0, 1097, 1102, 3, 118, 59, 0, 1098, 1099, 5, 132, 0, 0, 1099, 1101, 3, 118, 59, 0,
        1100, 1098, 1, 0, 0, 0, 1101, 1104, 1, 0, 0, 0, 1102, 1100, 1, 0, 0, 0, 1102, 1103, 1, 0, 0, 0,
        1103, 1105, 1, 0, 0, 0, 1104, 1102, 1, 0, 0, 0, 1105, 1106, 5, 126, 0, 0, 1106, 117, 1, 0, 0,
        0, 1107, 1108, 3, 436, 218, 0, 1108, 1109, 5, 133, 0, 0, 1109, 1110, 3, 28, 14, 0, 1110, 119,
        1, 0, 0, 0, 1111, 1113, 5, 15, 0, 0, 1112, 1111, 1, 0, 0, 0, 1112, 1113, 1, 0, 0, 0, 1113, 1114,
        1, 0, 0, 0, 1114, 1115, 3, 122, 61, 0, 1115, 1116, 3, 376, 188, 0, 1116, 1117, 3, 130, 65, 0,
        1117, 121, 1, 0, 0, 0, 1118, 1119, 5, 129, 0, 0, 1119, 1130, 5, 130, 0, 0, 1120, 1121, 5, 129,
        0, 0, 1121, 1122, 3, 124, 62, 0, 1122, 1123, 5, 130, 0, 0, 1123, 1130, 1, 0, 0, 0, 1124, 1125,
        5, 129, 0, 0, 1125, 1126, 3, 128, 64, 0, 1126, 1127, 5, 130, 0, 0, 1127, 1130, 1, 0, 0, 0, 1128,
        1130, 3, 436, 218, 0, 1129, 1118, 1, 0, 0, 0, 1129, 1120, 1, 0, 0, 0, 1129, 1124, 1, 0, 0, 0,
        1129, 1128, 1, 0, 0, 0, 1130, 123, 1, 0, 0, 0, 1131, 1136, 3, 126, 63, 0, 1132, 1133, 5, 132,
        0, 0, 1133, 1135, 3, 126, 63, 0, 1134, 1132, 1, 0, 0, 0, 1135, 1138, 1, 0, 0, 0, 1136, 1134,
        1, 0, 0, 0, 1136, 1137, 1, 0, 0, 0, 1137, 125, 1, 0, 0, 0, 1138, 1136, 1, 0, 0, 0, 1139, 1141,
        7, 2, 0, 0, 1140, 1139, 1, 0, 0, 0, 1140, 1141, 1, 0, 0, 0, 1141, 1142, 1, 0, 0, 0, 1142, 1143,
        3, 4, 2, 0, 1143, 1144, 3, 436, 218, 0, 1144, 127, 1, 0, 0, 0, 1145, 1150, 3, 436, 218, 0, 1146,
        1147, 5, 132, 0, 0, 1147, 1149, 3, 436, 218, 0, 1148, 1146, 1, 0, 0, 0, 1149, 1152, 1, 0, 0,
        0, 1150, 1148, 1, 0, 0, 0, 1150, 1151, 1, 0, 0, 0, 1151, 129, 1, 0, 0, 0, 1152, 1150, 1, 0, 0,
        0, 1153, 1156, 3, 76, 38, 0, 1154, 1156, 3, 172, 86, 0, 1155, 1153, 1, 0, 0, 0, 1155, 1154,
        1, 0, 0, 0, 1156, 131, 1, 0, 0, 0, 1157, 1158, 3, 134, 67, 0, 1158, 1159, 3, 136, 68, 0, 1159,
        133, 1, 0, 0, 0, 1160, 1162, 5, 48, 0, 0, 1161, 1163, 3, 4, 2, 0, 1162, 1161, 1, 0, 0, 0, 1162,
        1163, 1, 0, 0, 0, 1163, 1164, 1, 0, 0, 0, 1164, 1165, 3, 436, 218, 0, 1165, 1166, 5, 54, 0, 0,
        1166, 1167, 3, 28, 14, 0, 1167, 135, 1, 0, 0, 0, 1168, 1170, 3, 138, 69, 0, 1169, 1168, 1, 0,
        0, 0, 1170, 1173, 1, 0, 0, 0, 1171, 1169, 1, 0, 0, 0, 1171, 1172, 1, 0, 0, 0, 1172, 1174, 1, 0,
        0, 0, 1173, 1171, 1, 0, 0, 0, 1174, 1176, 3, 150, 75, 0, 1175, 1177, 3, 152, 76, 0, 1176, 1175,
        1, 0, 0, 0, 1176, 1177, 1, 0, 0, 0, 1177, 137, 1, 0, 0, 0, 1178, 1184, 3, 134, 67, 0, 1179, 1184,
        3, 140, 70, 0, 1180, 1184, 3, 142, 71, 0, 1181, 1184, 3, 144, 72, 0, 1182, 1184, 3, 146, 73,
        0, 1183, 1178, 1, 0, 0, 0, 1183, 1179, 1, 0, 0, 0, 1183, 1180, 1, 0, 0, 0, 1183, 1181, 1, 0, 0,
        0, 1183, 1182, 1, 0, 0, 0, 1184, 139, 1, 0, 0, 0, 1185, 1186, 5, 61, 0, 0, 1186, 1187, 3, 436,
        218, 0, 1187, 1188, 5, 145, 0, 0, 1188, 1189, 3, 28, 14, 0, 1189, 141, 1, 0, 0, 0, 1190, 1191,
        5, 111, 0, 0, 1191, 1192, 3, 28, 14, 0, 1192, 143, 1, 0, 0, 0, 1193, 1195, 5, 60, 0, 0, 1194,
        1196, 3, 4, 2, 0, 1195, 1194, 1, 0, 0, 0, 1195, 1196, 1, 0, 0, 0, 1196, 1197, 1, 0, 0, 0, 1197,
        1198, 3, 436, 218, 0, 1198, 1199, 5, 54, 0, 0, 1199, 1200, 3, 28, 14, 0, 1200, 1201, 5, 69,
        0, 0, 1201, 1202, 3, 28, 14, 0, 1202, 1203, 5, 38, 0, 0, 1203, 1206, 3, 28, 14, 0, 1204, 1205,
        5, 58, 0, 0, 1205, 1207, 3, 436, 218, 0, 1206, 1204, 1, 0, 0, 0, 1206, 1207, 1, 0, 0, 0, 1207,
        145, 1, 0, 0, 0, 1208, 1209, 5, 71, 0, 0, 1209, 1214, 3, 148, 74, 0, 1210, 1211, 5, 132, 0, 0,
        1211, 1213, 3, 148, 74, 0, 1212, 1210, 1, 0, 0, 0, 1213, 1216, 1, 0, 0, 0, 1214, 1212, 1, 0,
        0, 0, 1214, 1215, 1, 0, 0, 0, 1215, 147, 1, 0, 0, 0, 1216, 1214, 1, 0, 0, 0, 1217, 1219, 3, 28,
        14, 0, 1218, 1220, 7, 8, 0, 0, 1219, 1218, 1, 0, 0, 0, 1219, 1220, 1, 0, 0, 0, 1220, 149, 1, 0,
        0, 0, 1221, 1222, 5, 85, 0, 0, 1222, 1229, 3, 28, 14, 0, 1223, 1224, 5, 51, 0, 0, 1224, 1225,
        3, 28, 14, 0, 1225, 1226, 5, 20, 0, 0, 1226, 1227, 3, 28, 14, 0, 1227, 1229, 1, 0, 0, 0, 1228,
        1221, 1, 0, 0, 0, 1228, 1223, 1, 0, 0, 0, 1229, 151, 1, 0, 0, 0, 1230, 1231, 5, 58, 0, 0, 1231,
        1232, 3, 436, 218, 0, 1232, 1233, 3, 136, 68, 0, 1233, 153, 1, 0, 0, 0, 1234, 1238, 3, 166,
        83, 0, 1235, 1238, 3, 156, 78, 0, 1236, 1238, 3, 168, 84, 0, 1237, 1234, 1, 0, 0, 0, 1237, 1235,
        1, 0, 0, 0, 1237, 1236, 1, 0, 0, 0, 1238, 155, 1, 0, 0, 0, 1239, 1240, 3, 174, 87, 0, 1240, 1241,
        5, 134, 0, 0, 1241, 1247, 1, 0, 0, 0, 1242, 1243, 3, 182, 91, 0, 1243, 1244, 5, 134, 0, 0, 1244,
        1247, 1, 0, 0, 0, 1245, 1247, 3, 158, 79, 0, 1246, 1239, 1, 0, 0, 0, 1246, 1242, 1, 0, 0, 0, 1246,
        1245, 1, 0, 0, 0, 1247, 157, 1, 0, 0, 0, 1248, 1249, 3, 160, 80, 0, 1249, 1250, 3, 164, 82, 0,
        1250, 159, 1, 0, 0, 0, 1251, 1253, 3, 162, 81, 0, 1252, 1251, 1, 0, 0, 0, 1252, 1253, 1, 0, 0,
        0, 1253, 1254, 1, 0, 0, 0, 1254, 1255, 3, 276, 138, 0, 1255, 1257, 3, 436, 218, 0, 1256, 1258,
        3, 232, 116, 0, 1257, 1256, 1, 0, 0, 0, 1257, 1258, 1, 0, 0, 0, 1258, 1259, 1, 0, 0, 0, 1259,
        1261, 5, 129, 0, 0, 1260, 1262, 3, 282, 141, 0, 1261, 1260, 1, 0, 0, 0, 1261, 1262, 1, 0, 0,
        0, 1262, 1263, 1, 0, 0, 0, 1263, 1265, 5, 130, 0, 0, 1264, 1266, 3, 240, 120, 0, 1265, 1264,
        1, 0, 0, 0, 1265, 1266, 1, 0, 0, 0, 1266, 161, 1, 0, 0, 0, 1267, 1269, 7, 9, 0, 0, 1268, 1270,
        5, 90, 0, 0, 1269, 1268, 1, 0, 0, 0, 1269, 1270, 1, 0, 0, 0, 1270, 1274, 1, 0, 0, 0, 1271, 1272,
        5, 90, 0, 0, 1272, 1274, 7, 9, 0, 0, 1273, 1267, 1, 0, 0, 0, 1273, 1271, 1, 0, 0, 0, 1274, 163,
        1, 0, 0, 0, 1275, 1281, 3, 172, 86, 0, 1276, 1277, 3, 376, 188, 0, 1277, 1278, 3, 76, 38, 0,
        1278, 1279, 5, 134, 0, 0, 1279, 1281, 1, 0, 0, 0, 1280, 1275, 1, 0, 0, 0, 1280, 1276, 1, 0, 0,
        0, 1281, 165, 1, 0, 0, 0, 1282, 1283, 3, 436, 218, 0, 1283, 1284, 5, 133, 0, 0, 1284, 1285,
        3, 154, 77, 0, 1285, 167, 1, 0, 0, 0, 1286, 1289, 3, 172, 86, 0, 1287, 1289, 3, 170, 85, 0, 1288,
        1286, 1, 0, 0, 0, 1288, 1287, 1, 0, 0, 0, 1289, 169, 1, 0, 0, 0, 1290, 1421, 5, 134, 0, 0, 1291,
        1292, 3, 28, 14, 0, 1292, 1293, 5, 134, 0, 0, 1293, 1421, 1, 0, 0, 0, 1294, 1295, 5, 52, 0, 0,
        1295, 1296, 5, 129, 0, 0, 1296, 1297, 3, 28, 14, 0, 1297, 1298, 5, 130, 0, 0, 1298, 1301, 3,
        184, 92, 0, 1299, 1300, 5, 36, 0, 0, 1300, 1302, 3, 184, 92, 0, 1301, 1299, 1, 0, 0, 0, 1301,
        1302, 1, 0, 0, 0, 1302, 1421, 1, 0, 0, 0, 1303, 1304, 5, 93, 0, 0, 1304, 1305, 5, 129, 0, 0, 1305,
        1306, 3, 28, 14, 0, 1306, 1307, 5, 130, 0, 0, 1307, 1311, 5, 125, 0, 0, 1308, 1310, 3, 186,
        93, 0, 1309, 1308, 1, 0, 0, 0, 1310, 1313, 1, 0, 0, 0, 1311, 1309, 1, 0, 0, 0, 1311, 1312, 1,
        0, 0, 0, 1312, 1314, 1, 0, 0, 0, 1313, 1311, 1, 0, 0, 0, 1314, 1315, 5, 126, 0, 0, 1315, 1421,
        1, 0, 0, 0, 1316, 1317, 5, 112, 0, 0, 1317, 1318, 5, 129, 0, 0, 1318, 1319, 3, 28, 14, 0, 1319,
        1320, 5, 130, 0, 0, 1320, 1321, 3, 168, 84, 0, 1321, 1421, 1, 0, 0, 0, 1322, 1323, 5, 33, 0,
        0, 1323, 1324, 3, 168, 84, 0, 1324, 1325, 5, 112, 0, 0, 1325, 1326, 5, 129, 0, 0, 1326, 1327,
        3, 28, 14, 0, 1327, 1328, 5, 130, 0, 0, 1328, 1329, 5, 134, 0, 0, 1329, 1421, 1, 0, 0, 0, 1330,
        1331, 5, 46, 0, 0, 1331, 1333, 5, 129, 0, 0, 1332, 1334, 3, 194, 97, 0, 1333, 1332, 1, 0, 0,
        0, 1333, 1334, 1, 0, 0, 0, 1334, 1335, 1, 0, 0, 0, 1335, 1337, 5, 134, 0, 0, 1336, 1338, 3, 28,
        14, 0, 1337, 1336, 1, 0, 0, 0, 1337, 1338, 1, 0, 0, 0, 1338, 1339, 1, 0, 0, 0, 1339, 1341, 5,
        134, 0, 0, 1340, 1342, 3, 196, 98, 0, 1341, 1340, 1, 0, 0, 0, 1341, 1342, 1, 0, 0, 0, 1342, 1343,
        1, 0, 0, 0, 1343, 1344, 5, 130, 0, 0, 1344, 1421, 3, 168, 84, 0, 1345, 1347, 5, 16, 0, 0, 1346,
        1345, 1, 0, 0, 0, 1346, 1347, 1, 0, 0, 0, 1347, 1348, 1, 0, 0, 0, 1348, 1349, 5, 47, 0, 0, 1349,
        1350, 5, 129, 0, 0, 1350, 1351, 3, 176, 88, 0, 1351, 1352, 3, 436, 218, 0, 1352, 1353, 5, 54,
        0, 0, 1353, 1354, 3, 28, 14, 0, 1354, 1355, 5, 130, 0, 0, 1355, 1356, 3, 168, 84, 0, 1356, 1421,
        1, 0, 0, 0, 1357, 1358, 5, 19, 0, 0, 1358, 1421, 5, 134, 0, 0, 1359, 1360, 5, 28, 0, 0, 1360,
        1421, 5, 134, 0, 0, 1361, 1366, 5, 50, 0, 0, 1362, 1367, 3, 436, 218, 0, 1363, 1364, 5, 22,
        0, 0, 1364, 1367, 3, 28, 14, 0, 1365, 1367, 5, 30, 0, 0, 1366, 1362, 1, 0, 0, 0, 1366, 1363,
        1, 0, 0, 0, 1366, 1365, 1, 0, 0, 0, 1367, 1368, 1, 0, 0, 0, 1368, 1421, 5, 134, 0, 0, 1369, 1371,
        5, 82, 0, 0, 1370, 1372, 3, 28, 14, 0, 1371, 1370, 1, 0, 0, 0, 1371, 1372, 1, 0, 0, 0, 1372, 1373,
        1, 0, 0, 0, 1373, 1421, 5, 134, 0, 0, 1374, 1376, 5, 95, 0, 0, 1375, 1377, 3, 28, 14, 0, 1376,
        1375, 1, 0, 0, 0, 1376, 1377, 1, 0, 0, 0, 1377, 1378, 1, 0, 0, 0, 1378, 1421, 5, 134, 0, 0, 1379,
        1380, 5, 97, 0, 0, 1380, 1386, 3, 172, 86, 0, 1381, 1383, 3, 198, 99, 0, 1382, 1384, 3, 206,
        103, 0, 1383, 1382, 1, 0, 0, 0, 1383, 1384, 1, 0, 0, 0, 1384, 1387, 1, 0, 0, 0, 1385, 1387, 3,
        206, 103, 0, 1386, 1381, 1, 0, 0, 0, 1386, 1385, 1, 0, 0, 0, 1387, 1421, 1, 0, 0, 0, 1388, 1389,
        5, 25, 0, 0, 1389, 1421, 3, 172, 86, 0, 1390, 1391, 5, 101, 0, 0, 1391, 1421, 3, 172, 86, 0,
        1392, 1393, 5, 62, 0, 0, 1393, 1394, 5, 129, 0, 0, 1394, 1395, 3, 28, 14, 0, 1395, 1396, 5,
        130, 0, 0, 1396, 1397, 3, 168, 84, 0, 1397, 1421, 1, 0, 0, 0, 1398, 1399, 5, 105, 0, 0, 1399,
        1400, 5, 129, 0, 0, 1400, 1401, 3, 208, 104, 0, 1401, 1402, 5, 130, 0, 0, 1402, 1403, 3, 168,
        84, 0, 1403, 1421, 1, 0, 0, 0, 1404, 1408, 5, 113, 0, 0, 1405, 1406, 5, 82, 0, 0, 1406, 1409,
        3, 28, 14, 0, 1407, 1409, 5, 19, 0, 0, 1408, 1405, 1, 0, 0, 0, 1408, 1407, 1, 0, 0, 0, 1409, 1410,
        1, 0, 0, 0, 1410, 1421, 5, 134, 0, 0, 1411, 1412, 5, 103, 0, 0, 1412, 1421, 3, 172, 86, 0, 1413,
        1414, 5, 44, 0, 0, 1414, 1415, 5, 129, 0, 0, 1415, 1416, 3, 364, 182, 0, 1416, 1417, 3, 366,
        183, 0, 1417, 1418, 5, 130, 0, 0, 1418, 1419, 3, 168, 84, 0, 1419, 1421, 1, 0, 0, 0, 1420, 1290,
        1, 0, 0, 0, 1420, 1291, 1, 0, 0, 0, 1420, 1294, 1, 0, 0, 0, 1420, 1303, 1, 0, 0, 0, 1420, 1316,
        1, 0, 0, 0, 1420, 1322, 1, 0, 0, 0, 1420, 1330, 1, 0, 0, 0, 1420, 1346, 1, 0, 0, 0, 1420, 1357,
        1, 0, 0, 0, 1420, 1359, 1, 0, 0, 0, 1420, 1361, 1, 0, 0, 0, 1420, 1369, 1, 0, 0, 0, 1420, 1374,
        1, 0, 0, 0, 1420, 1379, 1, 0, 0, 0, 1420, 1388, 1, 0, 0, 0, 1420, 1390, 1, 0, 0, 0, 1420, 1392,
        1, 0, 0, 0, 1420, 1398, 1, 0, 0, 0, 1420, 1404, 1, 0, 0, 0, 1420, 1411, 1, 0, 0, 0, 1420, 1413,
        1, 0, 0, 0, 1421, 171, 1, 0, 0, 0, 1422, 1424, 5, 125, 0, 0, 1423, 1425, 3, 192, 96, 0, 1424,
        1423, 1, 0, 0, 0, 1424, 1425, 1, 0, 0, 0, 1425, 1426, 1, 0, 0, 0, 1426, 1427, 5, 126, 0, 0, 1427,
        173, 1, 0, 0, 0, 1428, 1433, 5, 105, 0, 0, 1429, 1433, 5, 80, 0, 0, 1430, 1431, 5, 80, 0, 0, 1431,
        1433, 5, 79, 0, 0, 1432, 1428, 1, 0, 0, 0, 1432, 1429, 1, 0, 0, 0, 1432, 1430, 1, 0, 0, 0, 1432,
        1433, 1, 0, 0, 0, 1433, 1434, 1, 0, 0, 0, 1434, 1435, 3, 176, 88, 0, 1435, 1442, 3, 178, 89,
        0, 1436, 1437, 5, 132, 0, 0, 1437, 1438, 3, 178, 89, 0, 1438, 1439, 4, 87, 0, 0, 1439, 1441,
        1, 0, 0, 0, 1440, 1436, 1, 0, 0, 0, 1441, 1444, 1, 0, 0, 0, 1442, 1440, 1, 0, 0, 0, 1442, 1443,
        1, 0, 0, 0, 1443, 1450, 1, 0, 0, 0, 1444, 1442, 1, 0, 0, 0, 1445, 1446, 5, 44, 0, 0, 1446, 1447,
        3, 364, 182, 0, 1447, 1448, 3, 366, 183, 0, 1448, 1450, 1, 0, 0, 0, 1449, 1432, 1, 0, 0, 0, 1449,
        1445, 1, 0, 0, 0, 1450, 175, 1, 0, 0, 0, 1451, 1454, 5, 106, 0, 0, 1452, 1454, 3, 4, 2, 0, 1453,
        1451, 1, 0, 0, 0, 1453, 1452, 1, 0, 0, 0, 1454, 177, 1, 0, 0, 0, 1455, 1461, 3, 436, 218, 0, 1456,
        1458, 5, 145, 0, 0, 1457, 1459, 5, 80, 0, 0, 1458, 1457, 1, 0, 0, 0, 1458, 1459, 1, 0, 0, 0, 1459,
        1460, 1, 0, 0, 0, 1460, 1462, 3, 180, 90, 0, 1461, 1456, 1, 0, 0, 0, 1461, 1462, 1, 0, 0, 0, 1462,
        179, 1, 0, 0, 0, 1463, 1467, 3, 28, 14, 0, 1464, 1467, 3, 326, 163, 0, 1465, 1467, 3, 374, 187,
        0, 1466, 1463, 1, 0, 0, 0, 1466, 1464, 1, 0, 0, 0, 1466, 1465, 1, 0, 0, 0, 1467, 181, 1, 0, 0,
        0, 1468, 1469, 5, 27, 0, 0, 1469, 1470, 3, 4, 2, 0, 1470, 1471, 3, 266, 133, 0, 1471, 183, 1,
        0, 0, 0, 1472, 1475, 3, 172, 86, 0, 1473, 1475, 3, 170, 85, 0, 1474, 1472, 1, 0, 0, 0, 1474,
        1473, 1, 0, 0, 0, 1475, 185, 1, 0, 0, 0, 1476, 1478, 3, 188, 94, 0, 1477, 1476, 1, 0, 0, 0, 1478,
        1479, 1, 0, 0, 0, 1479, 1477, 1, 0, 0, 0, 1479, 1480, 1, 0, 0, 0, 1480, 1481, 1, 0, 0, 0, 1481,
        1482, 3, 192, 96, 0, 1482, 187, 1, 0, 0, 0, 1483, 1484, 5, 22, 0, 0, 1484, 1486, 3, 28, 14, 0,
        1485, 1487, 3, 190, 95, 0, 1486, 1485, 1, 0, 0, 0, 1486, 1487, 1, 0, 0, 0, 1487, 1488, 1, 0,
        0, 0, 1488, 1489, 5, 133, 0, 0, 1489, 1493, 1, 0, 0, 0, 1490, 1491, 5, 30, 0, 0, 1491, 1493,
        5, 133, 0, 0, 1492, 1483, 1, 0, 0, 0, 1492, 1490, 1, 0, 0, 0, 1493, 189, 1, 0, 0, 0, 1494, 1495,
        5, 110, 0, 0, 1495, 1496, 3, 28, 14, 0, 1496, 191, 1, 0, 0, 0, 1497, 1499, 3, 154, 77, 0, 1498,
        1497, 1, 0, 0, 0, 1499, 1500, 1, 0, 0, 0, 1500, 1498, 1, 0, 0, 0, 1500, 1501, 1, 0, 0, 0, 1501,
        193, 1, 0, 0, 0, 1502, 1512, 3, 174, 87, 0, 1503, 1508, 3, 28, 14, 0, 1504, 1505, 5, 132, 0,
        0, 1505, 1507, 3, 28, 14, 0, 1506, 1504, 1, 0, 0, 0, 1507, 1510, 1, 0, 0, 0, 1508, 1506, 1, 0,
        0, 0, 1508, 1509, 1, 0, 0, 0, 1509, 1512, 1, 0, 0, 0, 1510, 1508, 1, 0, 0, 0, 1511, 1502, 1, 0,
        0, 0, 1511, 1503, 1, 0, 0, 0, 1512, 195, 1, 0, 0, 0, 1513, 1518, 3, 28, 14, 0, 1514, 1515, 5,
        132, 0, 0, 1515, 1517, 3, 28, 14, 0, 1516, 1514, 1, 0, 0, 0, 1517, 1520, 1, 0, 0, 0, 1518, 1516,
        1, 0, 0, 0, 1518, 1519, 1, 0, 0, 0, 1519, 197, 1, 0, 0, 0, 1520, 1518, 1, 0, 0, 0, 1521, 1525,
        3, 200, 100, 0, 1522, 1524, 3, 200, 100, 0, 1523, 1522, 1, 0, 0, 0, 1524, 1527, 1, 0, 0, 0, 1525,
        1523, 1, 0, 0, 0, 1525, 1526, 1, 0, 0, 0, 1526, 1529, 1, 0, 0, 0, 1527, 1525, 1, 0, 0, 0, 1528,
        1530, 3, 202, 101, 0, 1529, 1528, 1, 0, 0, 0, 1529, 1530, 1, 0, 0, 0, 1530, 1533, 1, 0, 0, 0,
        1531, 1533, 3, 202, 101, 0, 1532, 1521, 1, 0, 0, 0, 1532, 1531, 1, 0, 0, 0, 1533, 199, 1, 0,
        0, 0, 1534, 1535, 5, 23, 0, 0, 1535, 1536, 5, 129, 0, 0, 1536, 1538, 3, 20, 10, 0, 1537, 1539,
        3, 436, 218, 0, 1538, 1537, 1, 0, 0, 0, 1538, 1539, 1, 0, 0, 0, 1539, 1540, 1, 0, 0, 0, 1540,
        1542, 5, 130, 0, 0, 1541, 1543, 3, 204, 102, 0, 1542, 1541, 1, 0, 0, 0, 1542, 1543, 1, 0, 0,
        0, 1543, 1544, 1, 0, 0, 0, 1544, 1545, 3, 172, 86, 0, 1545, 201, 1, 0, 0, 0, 1546, 1548, 5, 23,
        0, 0, 1547, 1549, 3, 204, 102, 0, 1548, 1547, 1, 0, 0, 0, 1548, 1549, 1, 0, 0, 0, 1549, 1550,
        1, 0, 0, 0, 1550, 1551, 3, 172, 86, 0, 1551, 203, 1, 0, 0, 0, 1552, 1553, 5, 110, 0, 0, 1553,
        1554, 5, 129, 0, 0, 1554, 1555, 3, 28, 14, 0, 1555, 1556, 5, 130, 0, 0, 1556, 205, 1, 0, 0, 0,
        1557, 1558, 5, 43, 0, 0, 1558, 1559, 3, 172, 86, 0, 1559, 207, 1, 0, 0, 0, 1560, 1563, 3, 174,
        87, 0, 1561, 1563, 3, 28, 14, 0, 1562, 1560, 1, 0, 0, 0, 1562, 1561, 1, 0, 0, 0, 1563, 209, 1,
        0, 0, 0, 1564, 1565, 5, 65, 0, 0, 1565, 1566, 3, 212, 106, 0, 1566, 1568, 3, 214, 107, 0, 1567,
        1569, 5, 134, 0, 0, 1568, 1567, 1, 0, 0, 0, 1568, 1569, 1, 0, 0, 0, 1569, 211, 1, 0, 0, 0, 1570,
        1575, 3, 436, 218, 0, 1571, 1572, 5, 131, 0, 0, 1572, 1574, 3, 436, 218, 0, 1573, 1571, 1,
        0, 0, 0, 1574, 1577, 1, 0, 0, 0, 1575, 1573, 1, 0, 0, 0, 1575, 1576, 1, 0, 0, 0, 1576, 213, 1,
        0, 0, 0, 1577, 1575, 1, 0, 0, 0, 1578, 1580, 5, 125, 0, 0, 1579, 1581, 3, 216, 108, 0, 1580,
        1579, 1, 0, 0, 0, 1580, 1581, 1, 0, 0, 0, 1581, 1583, 1, 0, 0, 0, 1582, 1584, 3, 220, 110, 0,
        1583, 1582, 1, 0, 0, 0, 1583, 1584, 1, 0, 0, 0, 1584, 1586, 1, 0, 0, 0, 1585, 1587, 3, 224, 112,
        0, 1586, 1585, 1, 0, 0, 0, 1586, 1587, 1, 0, 0, 0, 1587, 1588, 1, 0, 0, 0, 1588, 1589, 5, 126,
        0, 0, 1589, 215, 1, 0, 0, 0, 1590, 1592, 3, 218, 109, 0, 1591, 1590, 1, 0, 0, 0, 1592, 1593,
        1, 0, 0, 0, 1593, 1591, 1, 0, 0, 0, 1593, 1594, 1, 0, 0, 0, 1594, 217, 1, 0, 0, 0, 1595, 1596,
        5, 41, 0, 0, 1596, 1597, 5, 11, 0, 0, 1597, 1598, 3, 436, 218, 0, 1598, 1599, 5, 134, 0, 0, 1599,
        219, 1, 0, 0, 0, 1600, 1602, 3, 222, 111, 0, 1601, 1600, 1, 0, 0, 0, 1602, 1603, 1, 0, 0, 0, 1603,
        1601, 1, 0, 0, 0, 1603, 1604, 1, 0, 0, 0, 1604, 221, 1, 0, 0, 0, 1605, 1606, 5, 105, 0, 0, 1606,
        1607, 3, 436, 218, 0, 1607, 1608, 5, 145, 0, 0, 1608, 1609, 3, 2, 1, 0, 1609, 1610, 5, 134,
        0, 0, 1610, 1621, 1, 0, 0, 0, 1611, 1612, 5, 105, 0, 0, 1612, 1613, 3, 2, 1, 0, 1613, 1614, 5,
        134, 0, 0, 1614, 1621, 1, 0, 0, 0, 1615, 1616, 5, 105, 0, 0, 1616, 1617, 5, 90, 0, 0, 1617, 1618,
        3, 2, 1, 0, 1618, 1619, 5, 134, 0, 0, 1619, 1621, 1, 0, 0, 0, 1620, 1605, 1, 0, 0, 0, 1620, 1611,
        1, 0, 0, 0, 1620, 1615, 1, 0, 0, 0, 1621, 223, 1, 0, 0, 0, 1622, 1624, 3, 226, 113, 0, 1623, 1622,
        1, 0, 0, 0, 1624, 1625, 1, 0, 0, 0, 1625, 1623, 1, 0, 0, 0, 1625, 1626, 1, 0, 0, 0, 1626, 225,
        1, 0, 0, 0, 1627, 1630, 3, 210, 105, 0, 1628, 1630, 3, 228, 114, 0, 1629, 1627, 1, 0, 0, 0, 1629,
        1628, 1, 0, 0, 0, 1630, 227, 1, 0, 0, 0, 1631, 1633, 3, 352, 176, 0, 1632, 1631, 1, 0, 0, 0, 1632,
        1633, 1, 0, 0, 0, 1633, 1635, 1, 0, 0, 0, 1634, 1636, 3, 258, 129, 0, 1635, 1634, 1, 0, 0, 0,
        1635, 1636, 1, 0, 0, 0, 1636, 1642, 1, 0, 0, 0, 1637, 1643, 3, 400, 200, 0, 1638, 1643, 3, 402,
        201, 0, 1639, 1643, 3, 404, 202, 0, 1640, 1643, 3, 406, 203, 0, 1641, 1643, 3, 408, 204, 0,
        1642, 1637, 1, 0, 0, 0, 1642, 1638, 1, 0, 0, 0, 1642, 1639, 1, 0, 0, 0, 1642, 1640, 1, 0, 0, 0,
        1642, 1641, 1, 0, 0, 0, 1643, 229, 1, 0, 0, 0, 1644, 1645, 3, 436, 218, 0, 1645, 1646, 5, 149,
        0, 0, 1646, 1648, 3, 436, 218, 0, 1647, 1649, 3, 22, 11, 0, 1648, 1647, 1, 0, 0, 0, 1648, 1649,
        1, 0, 0, 0, 1649, 231, 1, 0, 0, 0, 1650, 1651, 5, 146, 0, 0, 1651, 1656, 3, 234, 117, 0, 1652,
        1653, 5, 132, 0, 0, 1653, 1655, 3, 234, 117, 0, 1654, 1652, 1, 0, 0, 0, 1655, 1658, 1, 0, 0,
        0, 1656, 1654, 1, 0, 0, 0, 1656, 1657, 1, 0, 0, 0, 1657, 1659, 1, 0, 0, 0, 1658, 1656, 1, 0, 0,
        0, 1659, 1660, 5, 147, 0, 0, 1660, 233, 1, 0, 0, 0, 1661, 1663, 3, 352, 176, 0, 1662, 1661,
        1, 0, 0, 0, 1662, 1663, 1, 0, 0, 0, 1663, 1664, 1, 0, 0, 0, 1664, 1665, 3, 436, 218, 0, 1665,
        235, 1, 0, 0, 0, 1666, 1667, 5, 133, 0, 0, 1667, 1672, 3, 20, 10, 0, 1668, 1669, 5, 132, 0, 0,
        1669, 1671, 3, 2, 1, 0, 1670, 1668, 1, 0, 0, 0, 1671, 1674, 1, 0, 0, 0, 1672, 1670, 1, 0, 0, 0,
        1672, 1673, 1, 0, 0, 0, 1673, 237, 1, 0, 0, 0, 1674, 1672, 1, 0, 0, 0, 1675, 1680, 3, 2, 1, 0,
        1676, 1677, 5, 132, 0, 0, 1677, 1679, 3, 2, 1, 0, 1678, 1676, 1, 0, 0, 0, 1679, 1682, 1, 0, 0,
        0, 1680, 1678, 1, 0, 0, 0, 1680, 1681, 1, 0, 0, 0, 1681, 239, 1, 0, 0, 0, 1682, 1680, 1, 0, 0,
        0, 1683, 1685, 3, 242, 121, 0, 1684, 1683, 1, 0, 0, 0, 1685, 1686, 1, 0, 0, 0, 1686, 1684, 1,
        0, 0, 0, 1686, 1687, 1, 0, 0, 0, 1687, 241, 1, 0, 0, 0, 1688, 1689, 5, 111, 0, 0, 1689, 1690,
        3, 436, 218, 0, 1690, 1691, 5, 133, 0, 0, 1691, 1692, 3, 244, 122, 0, 1692, 243, 1, 0, 0, 0,
        1693, 1704, 3, 250, 125, 0, 1694, 1697, 3, 246, 123, 0, 1695, 1696, 5, 132, 0, 0, 1696, 1698,
        3, 248, 124, 0, 1697, 1695, 1, 0, 0, 0, 1697, 1698, 1, 0, 0, 0, 1698, 1701, 1, 0, 0, 0, 1699,
        1700, 5, 132, 0, 0, 1700, 1702, 3, 250, 125, 0, 1701, 1699, 1, 0, 0, 0, 1701, 1702, 1, 0, 0,
        0, 1702, 1704, 1, 0, 0, 0, 1703, 1693, 1, 0, 0, 0, 1703, 1694, 1, 0, 0, 0, 1704, 245, 1, 0, 0,
        0, 1705, 1713, 3, 20, 10, 0, 1706, 1708, 5, 26, 0, 0, 1707, 1709, 5, 148, 0, 0, 1708, 1707,
        1, 0, 0, 0, 1708, 1709, 1, 0, 0, 0, 1709, 1713, 1, 0, 0, 0, 1710, 1713, 5, 92, 0, 0, 1711, 1713,
        5, 102, 0, 0, 1712, 1705, 1, 0, 0, 0, 1712, 1706, 1, 0, 0, 0, 1712, 1710, 1, 0, 0, 0, 1712, 1711,
        1, 0, 0, 0, 1713, 247, 1, 0, 0, 0, 1714, 1719, 3, 2, 1, 0, 1715, 1716, 5, 132, 0, 0, 1716, 1718,
        3, 2, 1, 0, 1717, 1715, 1, 0, 0, 0, 1718, 1721, 1, 0, 0, 0, 1719, 1717, 1, 0, 0, 0, 1719, 1720,
        1, 0, 0, 0, 1720, 249, 1, 0, 0, 0, 1721, 1719, 1, 0, 0, 0, 1722, 1723, 5, 66, 0, 0, 1723, 1724,
        5, 129, 0, 0, 1724, 1725, 5, 130, 0, 0, 1725, 251, 1, 0, 0, 0, 1726, 1728, 5, 125, 0, 0, 1727,
        1729, 3, 254, 127, 0, 1728, 1727, 1, 0, 0, 0, 1728, 1729, 1, 0, 0, 0, 1729, 1730, 1, 0, 0, 0,
        1730, 1731, 5, 126, 0, 0, 1731, 253, 1, 0, 0, 0, 1732, 1734, 3, 256, 128, 0, 1733, 1732, 1,
        0, 0, 0, 1734, 1735, 1, 0, 0, 0, 1735, 1733, 1, 0, 0, 0, 1735, 1736, 1, 0, 0, 0, 1736, 255, 1,
        0, 0, 0, 1737, 1739, 3, 352, 176, 0, 1738, 1737, 1, 0, 0, 0, 1738, 1739, 1, 0, 0, 0, 1739, 1741,
        1, 0, 0, 0, 1740, 1742, 3, 258, 129, 0, 1741, 1740, 1, 0, 0, 0, 1741, 1742, 1, 0, 0, 0, 1742,
        1745, 1, 0, 0, 0, 1743, 1746, 3, 262, 131, 0, 1744, 1746, 3, 420, 210, 0, 1745, 1743, 1, 0,
        0, 0, 1745, 1744, 1, 0, 0, 0, 1746, 257, 1, 0, 0, 0, 1747, 1749, 3, 260, 130, 0, 1748, 1747,
        1, 0, 0, 0, 1749, 1750, 1, 0, 0, 0, 1750, 1748, 1, 0, 0, 0, 1750, 1751, 1, 0, 0, 0, 1751, 259,
        1, 0, 0, 0, 1752, 1753, 7, 10, 0, 0, 1753, 261, 1, 0, 0, 0, 1754, 1774, 3, 416, 208, 0, 1755,
        1774, 3, 264, 132, 0, 1756, 1774, 3, 410, 205, 0, 1757, 1763, 3, 310, 155, 0, 1758, 1764,
        3, 314, 157, 0, 1759, 1760, 3, 376, 188, 0, 1760, 1761, 3, 76, 38, 0, 1761, 1762, 5, 134, 0,
        0, 1762, 1764, 1, 0, 0, 0, 1763, 1758, 1, 0, 0, 0, 1763, 1759, 1, 0, 0, 0, 1764, 1774, 1, 0, 0,
        0, 1765, 1774, 3, 422, 211, 0, 1766, 1767, 5, 108, 0, 0, 1767, 1774, 3, 424, 212, 0, 1768,
        1774, 3, 400, 200, 0, 1769, 1774, 3, 402, 201, 0, 1770, 1774, 3, 404, 202, 0, 1771, 1774,
        3, 406, 203, 0, 1772, 1774, 3, 408, 204, 0, 1773, 1754, 1, 0, 0, 0, 1773, 1755, 1, 0, 0, 0, 1773,
        1756, 1, 0, 0, 0, 1773, 1757, 1, 0, 0, 0, 1773, 1765, 1, 0, 0, 0, 1773, 1766, 1, 0, 0, 0, 1773,
        1768, 1, 0, 0, 0, 1773, 1769, 1, 0, 0, 0, 1773, 1770, 1, 0, 0, 0, 1773, 1771, 1, 0, 0, 0, 1773,
        1772, 1, 0, 0, 0, 1774, 263, 1, 0, 0, 0, 1775, 1781, 5, 80, 0, 0, 1776, 1777, 5, 79, 0, 0, 1777,
        1781, 5, 80, 0, 0, 1778, 1779, 5, 80, 0, 0, 1779, 1781, 5, 79, 0, 0, 1780, 1775, 1, 0, 0, 0, 1780,
        1776, 1, 0, 0, 0, 1780, 1778, 1, 0, 0, 0, 1780, 1781, 1, 0, 0, 0, 1781, 1782, 1, 0, 0, 0, 1782,
        1792, 3, 4, 2, 0, 1783, 1784, 3, 2, 1, 0, 1784, 1785, 5, 131, 0, 0, 1785, 1786, 3, 418, 209,
        0, 1786, 1793, 1, 0, 0, 0, 1787, 1793, 3, 424, 212, 0, 1788, 1793, 3, 414, 207, 0, 1789, 1793,
        3, 418, 209, 0, 1790, 1793, 3, 428, 214, 0, 1791, 1793, 3, 412, 206, 0, 1792, 1783, 1, 0, 0,
        0, 1792, 1787, 1, 0, 0, 0, 1792, 1788, 1, 0, 0, 0, 1792, 1789, 1, 0, 0, 0, 1792, 1790, 1, 0, 0,
        0, 1792, 1791, 1, 0, 0, 0, 1793, 265, 1, 0, 0, 0, 1794, 1799, 3, 268, 134, 0, 1795, 1796, 5,
        132, 0, 0, 1796, 1798, 3, 268, 134, 0, 1797, 1795, 1, 0, 0, 0, 1798, 1801, 1, 0, 0, 0, 1799,
        1797, 1, 0, 0, 0, 1799, 1800, 1, 0, 0, 0, 1800, 267, 1, 0, 0, 0, 1801, 1799, 1, 0, 0, 0, 1802,
        1803, 3, 436, 218, 0, 1803, 1804, 5, 145, 0, 0, 1804, 1805, 3, 28, 14, 0, 1805, 269, 1, 0, 0,
        0, 1806, 1811, 3, 272, 136, 0, 1807, 1808, 5, 132, 0, 0, 1808, 1810, 3, 272, 136, 0, 1809,
        1807, 1, 0, 0, 0, 1810, 1813, 1, 0, 0, 0, 1811, 1809, 1, 0, 0, 0, 1811, 1812, 1, 0, 0, 0, 1812,
        271, 1, 0, 0, 0, 1813, 1811, 1, 0, 0, 0, 1814, 1817, 3, 436, 218, 0, 1815, 1816, 5, 145, 0, 0,
        1816, 1818, 3, 274, 137, 0, 1817, 1815, 1, 0, 0, 0, 1817, 1818, 1, 0, 0, 0, 1818, 273, 1, 0,
        0, 0, 1819, 1822, 3, 28, 14, 0, 1820, 1822, 3, 326, 163, 0, 1821, 1819, 1, 0, 0, 0, 1821, 1820,
        1, 0, 0, 0, 1822, 275, 1, 0, 0, 0, 1823, 1826, 3, 4, 2, 0, 1824, 1826, 5, 108, 0, 0, 1825, 1823,
        1, 0, 0, 0, 1825, 1824, 1, 0, 0, 0, 1826, 277, 1, 0, 0, 0, 1827, 1828, 3, 2, 1, 0, 1828, 279, 1,
        0, 0, 0, 1829, 1832, 3, 172, 86, 0, 1830, 1832, 5, 134, 0, 0, 1831, 1829, 1, 0, 0, 0, 1831, 1830,
        1, 0, 0, 0, 1832, 281, 1, 0, 0, 0, 1833, 1840, 3, 290, 145, 0, 1834, 1837, 3, 284, 142, 0, 1835,
        1836, 5, 132, 0, 0, 1836, 1838, 3, 290, 145, 0, 1837, 1835, 1, 0, 0, 0, 1837, 1838, 1, 0, 0,
        0, 1838, 1840, 1, 0, 0, 0, 1839, 1833, 1, 0, 0, 0, 1839, 1834, 1, 0, 0, 0, 1840, 283, 1, 0, 0,
        0, 1841, 1846, 3, 286, 143, 0, 1842, 1843, 5, 132, 0, 0, 1843, 1845, 3, 286, 143, 0, 1844,
        1842, 1, 0, 0, 0, 1845, 1848, 1, 0, 0, 0, 1846, 1844, 1, 0, 0, 0, 1846, 1847, 1, 0, 0, 0, 1847,
        285, 1, 0, 0, 0, 1848, 1846, 1, 0, 0, 0, 1849, 1851, 3, 352, 176, 0, 1850, 1849, 1, 0, 0, 0, 1850,
        1851, 1, 0, 0, 0, 1851, 1853, 1, 0, 0, 0, 1852, 1854, 3, 288, 144, 0, 1853, 1852, 1, 0, 0, 0,
        1853, 1854, 1, 0, 0, 0, 1854, 1855, 1, 0, 0, 0, 1855, 1858, 3, 430, 215, 0, 1856, 1858, 5, 12,
        0, 0, 1857, 1850, 1, 0, 0, 0, 1857, 1856, 1, 0, 0, 0, 1858, 287, 1, 0, 0, 0, 1859, 1868, 5, 80,
        0, 0, 1860, 1868, 5, 72, 0, 0, 1861, 1868, 5, 54, 0, 0, 1862, 1863, 5, 80, 0, 0, 1863, 1868,
        5, 94, 0, 0, 1864, 1865, 5, 54, 0, 0, 1865, 1868, 5, 94, 0, 0, 1866, 1868, 5, 94, 0, 0, 1867,
        1859, 1, 0, 0, 0, 1867, 1860, 1, 0, 0, 0, 1867, 1861, 1, 0, 0, 0, 1867, 1862, 1, 0, 0, 0, 1867,
        1864, 1, 0, 0, 0, 1867, 1866, 1, 0, 0, 0, 1868, 289, 1, 0, 0, 0, 1869, 1871, 3, 352, 176, 0, 1870,
        1869, 1, 0, 0, 0, 1870, 1871, 1, 0, 0, 0, 1871, 1872, 1, 0, 0, 0, 1872, 1873, 5, 74, 0, 0, 1873,
        1874, 3, 322, 161, 0, 1874, 1875, 3, 436, 218, 0, 1875, 291, 1, 0, 0, 0, 1876, 1878, 3, 352,
        176, 0, 1877, 1876, 1, 0, 0, 0, 1877, 1878, 1, 0, 0, 0, 1878, 1880, 1, 0, 0, 0, 1879, 1881, 3,
        298, 149, 0, 1880, 1879, 1, 0, 0, 0, 1880, 1881, 1, 0, 0, 0, 1881, 1892, 1, 0, 0, 0, 1882, 1883,
        5, 49, 0, 0, 1883, 1885, 3, 300, 150, 0, 1884, 1886, 3, 296, 148, 0, 1885, 1884, 1, 0, 0, 0,
        1885, 1886, 1, 0, 0, 0, 1886, 1893, 1, 0, 0, 0, 1887, 1888, 5, 86, 0, 0, 1888, 1890, 3, 300,
        150, 0, 1889, 1891, 3, 294, 147, 0, 1890, 1889, 1, 0, 0, 0, 1890, 1891, 1, 0, 0, 0, 1891, 1893,
        1, 0, 0, 0, 1892, 1882, 1, 0, 0, 0, 1892, 1887, 1, 0, 0, 0, 1893, 293, 1, 0, 0, 0, 1894, 1896,
        3, 352, 176, 0, 1895, 1894, 1, 0, 0, 0, 1895, 1896, 1, 0, 0, 0, 1896, 1898, 1, 0, 0, 0, 1897,
        1899, 3, 298, 149, 0, 1898, 1897, 1, 0, 0, 0, 1898, 1899, 1, 0, 0, 0, 1899, 1900, 1, 0, 0, 0,
        1900, 1901, 5, 49, 0, 0, 1901, 1902, 3, 300, 150, 0, 1902, 295, 1, 0, 0, 0, 1903, 1905, 3, 352,
        176, 0, 1904, 1903, 1, 0, 0, 0, 1904, 1905, 1, 0, 0, 0, 1905, 1907, 1, 0, 0, 0, 1906, 1908, 3,
        298, 149, 0, 1907, 1906, 1, 0, 0, 0, 1907, 1908, 1, 0, 0, 0, 1908, 1909, 1, 0, 0, 0, 1909, 1910,
        5, 86, 0, 0, 1910, 1911, 3, 300, 150, 0, 1911, 297, 1, 0, 0, 0, 1912, 1920, 5, 77, 0, 0, 1913,
        1920, 5, 57, 0, 0, 1914, 1920, 5, 76, 0, 0, 1915, 1916, 5, 77, 0, 0, 1916, 1920, 5, 57, 0, 0,
        1917, 1918, 5, 57, 0, 0, 1918, 1920, 5, 77, 0, 0, 1919, 1912, 1, 0, 0, 0, 1919, 1913, 1, 0, 0,
        0, 1919, 1914, 1, 0, 0, 0, 1919, 1915, 1, 0, 0, 0, 1919, 1917, 1, 0, 0, 0, 1920, 299, 1, 0, 0,
        0, 1921, 1924, 3, 172, 86, 0, 1922, 1924, 5, 134, 0, 0, 1923, 1921, 1, 0, 0, 0, 1923, 1922,
        1, 0, 0, 0, 1924, 301, 1, 0, 0, 0, 1925, 1927, 3, 352, 176, 0, 1926, 1925, 1, 0, 0, 0, 1926, 1927,
        1, 0, 0, 0, 1927, 1936, 1, 0, 0, 0, 1928, 1929, 5, 10, 0, 0, 1929, 1930, 3, 172, 86, 0, 1930,
        1931, 3, 306, 153, 0, 1931, 1937, 1, 0, 0, 0, 1932, 1933, 5, 81, 0, 0, 1933, 1934, 3, 172, 86,
        0, 1934, 1935, 3, 304, 152, 0, 1935, 1937, 1, 0, 0, 0, 1936, 1928, 1, 0, 0, 0, 1936, 1932, 1,
        0, 0, 0, 1937, 303, 1, 0, 0, 0, 1938, 1940, 3, 352, 176, 0, 1939, 1938, 1, 0, 0, 0, 1939, 1940,
        1, 0, 0, 0, 1940, 1941, 1, 0, 0, 0, 1941, 1942, 5, 10, 0, 0, 1942, 1943, 3, 172, 86, 0, 1943,
        305, 1, 0, 0, 0, 1944, 1946, 3, 352, 176, 0, 1945, 1944, 1, 0, 0, 0, 1945, 1946, 1, 0, 0, 0, 1946,
        1947, 1, 0, 0, 0, 1947, 1948, 5, 81, 0, 0, 1948, 1949, 3, 172, 86, 0, 1949, 307, 1, 0, 0, 0, 1950,
        1973, 5, 135, 0, 0, 1951, 1973, 5, 136, 0, 0, 1952, 1973, 5, 143, 0, 0, 1953, 1973, 5, 144,
        0, 0, 1954, 1973, 5, 151, 0, 0, 1955, 1973, 5, 152, 0, 0, 1956, 1973, 5, 96, 0, 0, 1957, 1973,
        5, 42, 0, 0, 1958, 1973, 5, 137, 0, 0, 1959, 1973, 5, 138, 0, 0, 1960, 1973, 5, 139, 0, 0, 1961,
        1973, 5, 140, 0, 0, 1962, 1973, 5, 141, 0, 0, 1963, 1973, 5, 142, 0, 0, 1964, 1973, 5, 168,
        0, 0, 1965, 1973, 3, 378, 189, 0, 1966, 1973, 5, 156, 0, 0, 1967, 1973, 5, 157, 0, 0, 1968,
        1973, 5, 147, 0, 0, 1969, 1973, 5, 146, 0, 0, 1970, 1973, 5, 159, 0, 0, 1971, 1973, 5, 158,
        0, 0, 1972, 1950, 1, 0, 0, 0, 1972, 1951, 1, 0, 0, 0, 1972, 1952, 1, 0, 0, 0, 1972, 1953, 1, 0,
        0, 0, 1972, 1954, 1, 0, 0, 0, 1972, 1955, 1, 0, 0, 0, 1972, 1956, 1, 0, 0, 0, 1972, 1957, 1, 0,
        0, 0, 1972, 1958, 1, 0, 0, 0, 1972, 1959, 1, 0, 0, 0, 1972, 1960, 1, 0, 0, 0, 1972, 1961, 1, 0,
        0, 0, 1972, 1962, 1, 0, 0, 0, 1972, 1963, 1, 0, 0, 0, 1972, 1964, 1, 0, 0, 0, 1972, 1965, 1, 0,
        0, 0, 1972, 1966, 1, 0, 0, 0, 1972, 1967, 1, 0, 0, 0, 1972, 1968, 1, 0, 0, 0, 1972, 1969, 1, 0,
        0, 0, 1972, 1970, 1, 0, 0, 0, 1972, 1971, 1, 0, 0, 0, 1973, 309, 1, 0, 0, 0, 1974, 1975, 7, 11,
        0, 0, 1975, 1976, 5, 70, 0, 0, 1976, 1977, 3, 4, 2, 0, 1977, 1978, 5, 129, 0, 0, 1978, 1979,
        3, 430, 215, 0, 1979, 1980, 5, 130, 0, 0, 1980, 311, 1, 0, 0, 0, 1981, 1982, 5, 133, 0, 0, 1982,
        1983, 7, 12, 0, 0, 1983, 1985, 5, 129, 0, 0, 1984, 1986, 3, 24, 12, 0, 1985, 1984, 1, 0, 0, 0,
        1985, 1986, 1, 0, 0, 0, 1986, 1987, 1, 0, 0, 0, 1987, 1988, 5, 130, 0, 0, 1988, 313, 1, 0, 0,
        0, 1989, 1992, 3, 172, 86, 0, 1990, 1992, 5, 134, 0, 0, 1991, 1989, 1, 0, 0, 0, 1991, 1990,
        1, 0, 0, 0, 1992, 315, 1, 0, 0, 0, 1993, 1994, 5, 133, 0, 0, 1994, 1995, 3, 238, 119, 0, 1995,
        317, 1, 0, 0, 0, 1996, 2000, 5, 125, 0, 0, 1997, 1999, 3, 320, 160, 0, 1998, 1997, 1, 0, 0, 0,
        1999, 2002, 1, 0, 0, 0, 2000, 1998, 1, 0, 0, 0, 2000, 2001, 1, 0, 0, 0, 2001, 2003, 1, 0, 0, 0,
        2002, 2000, 1, 0, 0, 0, 2003, 2004, 5, 126, 0, 0, 2004, 319, 1, 0, 0, 0, 2005, 2007, 3, 352,
        176, 0, 2006, 2005, 1, 0, 0, 0, 2006, 2007, 1, 0, 0, 0, 2007, 2009, 1, 0, 0, 0, 2008, 2010, 3,
        258, 129, 0, 2009, 2008, 1, 0, 0, 0, 2009, 2010, 1, 0, 0, 0, 2010, 2021, 1, 0, 0, 0, 2011, 2022,
        3, 262, 131, 0, 2012, 2013, 5, 44, 0, 0, 2013, 2015, 3, 4, 2, 0, 2014, 2016, 3, 372, 186, 0,
        2015, 2014, 1, 0, 0, 0, 2016, 2017, 1, 0, 0, 0, 2017, 2015, 1, 0, 0, 0, 2017, 2018, 1, 0, 0, 0,
        2018, 2019, 1, 0, 0, 0, 2019, 2020, 5, 134, 0, 0, 2020, 2022, 1, 0, 0, 0, 2021, 2011, 1, 0, 0,
        0, 2021, 2012, 1, 0, 0, 0, 2022, 321, 1, 0, 0, 0, 2023, 2031, 3, 6, 3, 0, 2024, 2026, 7, 13, 0,
        0, 2025, 2024, 1, 0, 0, 0, 2026, 2029, 1, 0, 0, 0, 2027, 2025, 1, 0, 0, 0, 2027, 2028, 1, 0, 0,
        0, 2028, 2030, 1, 0, 0, 0, 2029, 2027, 1, 0, 0, 0, 2030, 2032, 3, 324, 162, 0, 2031, 2027, 1,
        0, 0, 0, 2032, 2033, 1, 0, 0, 0, 2033, 2031, 1, 0, 0, 0, 2033, 2034, 1, 0, 0, 0, 2034, 323, 1,
        0, 0, 0, 2035, 2039, 5, 127, 0, 0, 2036, 2038, 5, 132, 0, 0, 2037, 2036, 1, 0, 0, 0, 2038, 2041,
        1, 0, 0, 0, 2039, 2037, 1, 0, 0, 0, 2039, 2040, 1, 0, 0, 0, 2040, 2042, 1, 0, 0, 0, 2041, 2039,
        1, 0, 0, 0, 2042, 2043, 5, 128, 0, 0, 2043, 325, 1, 0, 0, 0, 2044, 2056, 5, 125, 0, 0, 2045, 2050,
        3, 274, 137, 0, 2046, 2047, 5, 132, 0, 0, 2047, 2049, 3, 274, 137, 0, 2048, 2046, 1, 0, 0, 0,
        2049, 2052, 1, 0, 0, 0, 2050, 2048, 1, 0, 0, 0, 2050, 2051, 1, 0, 0, 0, 2051, 2054, 1, 0, 0, 0,
        2052, 2050, 1, 0, 0, 0, 2053, 2055, 5, 132, 0, 0, 2054, 2053, 1, 0, 0, 0, 2054, 2055, 1, 0, 0,
        0, 2055, 2057, 1, 0, 0, 0, 2056, 2045, 1, 0, 0, 0, 2056, 2057, 1, 0, 0, 0, 2057, 2058, 1, 0, 0,
        0, 2058, 2059, 5, 126, 0, 0, 2059, 327, 1, 0, 0, 0, 2060, 2061, 5, 146, 0, 0, 2061, 2066, 3,
        330, 165, 0, 2062, 2063, 5, 132, 0, 0, 2063, 2065, 3, 330, 165, 0, 2064, 2062, 1, 0, 0, 0, 2065,
        2068, 1, 0, 0, 0, 2066, 2064, 1, 0, 0, 0, 2066, 2067, 1, 0, 0, 0, 2067, 2069, 1, 0, 0, 0, 2068,
        2066, 1, 0, 0, 0, 2069, 2070, 5, 147, 0, 0, 2070, 329, 1, 0, 0, 0, 2071, 2073, 3, 352, 176, 0,
        2072, 2071, 1, 0, 0, 0, 2072, 2073, 1, 0, 0, 0, 2073, 2075, 1, 0, 0, 0, 2074, 2076, 3, 332, 166,
        0, 2075, 2074, 1, 0, 0, 0, 2075, 2076, 1, 0, 0, 0, 2076, 2077, 1, 0, 0, 0, 2077, 2078, 3, 436,
        218, 0, 2078, 331, 1, 0, 0, 0, 2079, 2080, 7, 14, 0, 0, 2080, 333, 1, 0, 0, 0, 2081, 2082, 5,
        133, 0, 0, 2082, 2083, 3, 238, 119, 0, 2083, 335, 1, 0, 0, 0, 2084, 2088, 5, 125, 0, 0, 2085,
        2087, 3, 338, 169, 0, 2086, 2085, 1, 0, 0, 0, 2087, 2090, 1, 0, 0, 0, 2088, 2086, 1, 0, 0, 0,
        2088, 2089, 1, 0, 0, 0, 2089, 2091, 1, 0, 0, 0, 2090, 2088, 1, 0, 0, 0, 2091, 2092, 5, 126, 0,
        0, 2092, 337, 1, 0, 0, 0, 2093, 2095, 3, 352, 176, 0, 2094, 2093, 1, 0, 0, 0, 2094, 2095, 1,
        0, 0, 0, 2095, 2097, 1, 0, 0, 0, 2096, 2098, 5, 66, 0, 0, 2097, 2096, 1, 0, 0, 0, 2097, 2098,
        1, 0, 0, 0, 2098, 2162, 1, 0, 0, 0, 2099, 2101, 5, 103, 0, 0, 2100, 2099, 1, 0, 0, 0, 2100, 2101,
        1, 0, 0, 0, 2101, 2107, 1, 0, 0, 0, 2102, 2108, 5, 80, 0, 0, 2103, 2104, 5, 80, 0, 0, 2104, 2108,
        5, 79, 0, 0, 2105, 2106, 5, 79, 0, 0, 2106, 2108, 5, 80, 0, 0, 2107, 2102, 1, 0, 0, 0, 2107, 2103,
        1, 0, 0, 0, 2107, 2105, 1, 0, 0, 0, 2107, 2108, 1, 0, 0, 0, 2108, 2109, 1, 0, 0, 0, 2109, 2137,
        3, 4, 2, 0, 2110, 2112, 3, 436, 218, 0, 2111, 2113, 3, 232, 116, 0, 2112, 2111, 1, 0, 0, 0, 2112,
        2113, 1, 0, 0, 0, 2113, 2114, 1, 0, 0, 0, 2114, 2116, 5, 129, 0, 0, 2115, 2117, 3, 282, 141,
        0, 2116, 2115, 1, 0, 0, 0, 2116, 2117, 1, 0, 0, 0, 2117, 2118, 1, 0, 0, 0, 2118, 2120, 5, 130,
        0, 0, 2119, 2121, 3, 240, 120, 0, 2120, 2119, 1, 0, 0, 0, 2120, 2121, 1, 0, 0, 0, 2121, 2122,
        1, 0, 0, 0, 2122, 2123, 5, 134, 0, 0, 2123, 2138, 1, 0, 0, 0, 2124, 2125, 3, 436, 218, 0, 2125,
        2126, 5, 125, 0, 0, 2126, 2127, 3, 340, 170, 0, 2127, 2128, 5, 126, 0, 0, 2128, 2138, 1, 0,
        0, 0, 2129, 2130, 5, 94, 0, 0, 2130, 2131, 5, 127, 0, 0, 2131, 2132, 3, 282, 141, 0, 2132, 2133,
        5, 128, 0, 0, 2133, 2134, 5, 125, 0, 0, 2134, 2135, 3, 340, 170, 0, 2135, 2136, 5, 126, 0, 0,
        2136, 2138, 1, 0, 0, 0, 2137, 2110, 1, 0, 0, 0, 2137, 2124, 1, 0, 0, 0, 2137, 2129, 1, 0, 0, 0,
        2138, 2163, 1, 0, 0, 0, 2139, 2141, 5, 103, 0, 0, 2140, 2139, 1, 0, 0, 0, 2140, 2141, 1, 0, 0,
        0, 2141, 2142, 1, 0, 0, 0, 2142, 2143, 5, 108, 0, 0, 2143, 2145, 3, 436, 218, 0, 2144, 2146,
        3, 232, 116, 0, 2145, 2144, 1, 0, 0, 0, 2145, 2146, 1, 0, 0, 0, 2146, 2147, 1, 0, 0, 0, 2147,
        2149, 5, 129, 0, 0, 2148, 2150, 3, 282, 141, 0, 2149, 2148, 1, 0, 0, 0, 2149, 2150, 1, 0, 0,
        0, 2150, 2151, 1, 0, 0, 0, 2151, 2153, 5, 130, 0, 0, 2152, 2154, 3, 240, 120, 0, 2153, 2152,
        1, 0, 0, 0, 2153, 2154, 1, 0, 0, 0, 2154, 2155, 1, 0, 0, 0, 2155, 2156, 5, 134, 0, 0, 2156, 2163,
        1, 0, 0, 0, 2157, 2158, 5, 39, 0, 0, 2158, 2159, 3, 4, 2, 0, 2159, 2160, 3, 436, 218, 0, 2160,
        2161, 5, 134, 0, 0, 2161, 2163, 1, 0, 0, 0, 2162, 2100, 1, 0, 0, 0, 2162, 2140, 1, 0, 0, 0, 2162,
        2157, 1, 0, 0, 0, 2163, 339, 1, 0, 0, 0, 2164, 2166, 3, 352, 176, 0, 2165, 2164, 1, 0, 0, 0, 2165,
        2166, 1, 0, 0, 0, 2166, 2185, 1, 0, 0, 0, 2167, 2168, 5, 49, 0, 0, 2168, 2174, 5, 134, 0, 0, 2169,
        2171, 3, 352, 176, 0, 2170, 2169, 1, 0, 0, 0, 2170, 2171, 1, 0, 0, 0, 2171, 2172, 1, 0, 0, 0,
        2172, 2173, 5, 86, 0, 0, 2173, 2175, 5, 134, 0, 0, 2174, 2170, 1, 0, 0, 0, 2174, 2175, 1, 0,
        0, 0, 2175, 2186, 1, 0, 0, 0, 2176, 2177, 5, 86, 0, 0, 2177, 2183, 5, 134, 0, 0, 2178, 2180,
        3, 352, 176, 0, 2179, 2178, 1, 0, 0, 0, 2179, 2180, 1, 0, 0, 0, 2180, 2181, 1, 0, 0, 0, 2181,
        2182, 5, 49, 0, 0, 2182, 2184, 5, 134, 0, 0, 2183, 2179, 1, 0, 0, 0, 2183, 2184, 1, 0, 0, 0, 2184,
        2186, 1, 0, 0, 0, 2185, 2167, 1, 0, 0, 0, 2185, 2176, 1, 0, 0, 0, 2186, 341, 1, 0, 0, 0, 2187,
        2188, 5, 133, 0, 0, 2188, 2189, 3, 4, 2, 0, 2189, 343, 1, 0, 0, 0, 2190, 2202, 5, 125, 0, 0, 2191,
        2196, 3, 346, 173, 0, 2192, 2193, 5, 132, 0, 0, 2193, 2195, 3, 346, 173, 0, 2194, 2192, 1,
        0, 0, 0, 2195, 2198, 1, 0, 0, 0, 2196, 2194, 1, 0, 0, 0, 2196, 2197, 1, 0, 0, 0, 2197, 2200, 1,
        0, 0, 0, 2198, 2196, 1, 0, 0, 0, 2199, 2201, 5, 132, 0, 0, 2200, 2199, 1, 0, 0, 0, 2200, 2201,
        1, 0, 0, 0, 2201, 2203, 1, 0, 0, 0, 2202, 2191, 1, 0, 0, 0, 2202, 2203, 1, 0, 0, 0, 2203, 2204,
        1, 0, 0, 0, 2204, 2205, 5, 126, 0, 0, 2205, 345, 1, 0, 0, 0, 2206, 2208, 3, 352, 176, 0, 2207,
        2206, 1, 0, 0, 0, 2207, 2208, 1, 0, 0, 0, 2208, 2209, 1, 0, 0, 0, 2209, 2212, 3, 436, 218, 0,
        2210, 2211, 5, 145, 0, 0, 2211, 2213, 3, 28, 14, 0, 2212, 2210, 1, 0, 0, 0, 2212, 2213, 1, 0,
        0, 0, 2213, 347, 1, 0, 0, 0, 2214, 2215, 5, 127, 0, 0, 2215, 2216, 3, 350, 175, 0, 2216, 2217,
        5, 133, 0, 0, 2217, 2219, 3, 358, 179, 0, 2218, 2220, 5, 132, 0, 0, 2219, 2218, 1, 0, 0, 0, 2219,
        2220, 1, 0, 0, 0, 2220, 2221, 1, 0, 0, 0, 2221, 2222, 5, 128, 0, 0, 2222, 349, 1, 0, 0, 0, 2223,
        2226, 3, 398, 199, 0, 2224, 2226, 3, 436, 218, 0, 2225, 2223, 1, 0, 0, 0, 2225, 2224, 1, 0,
        0, 0, 2226, 351, 1, 0, 0, 0, 2227, 2229, 3, 354, 177, 0, 2228, 2227, 1, 0, 0, 0, 2229, 2230,
        1, 0, 0, 0, 2230, 2228, 1, 0, 0, 0, 2230, 2231, 1, 0, 0, 0, 2231, 353, 1, 0, 0, 0, 2232, 2236,
        5, 127, 0, 0, 2233, 2234, 3, 356, 178, 0, 2234, 2235, 5, 133, 0, 0, 2235, 2237, 1, 0, 0, 0, 2236,
        2233, 1, 0, 0, 0, 2236, 2237, 1, 0, 0, 0, 2237, 2238, 1, 0, 0, 0, 2238, 2240, 3, 358, 179, 0,
        2239, 2241, 5, 132, 0, 0, 2240, 2239, 1, 0, 0, 0, 2240, 2241, 1, 0, 0, 0, 2241, 2242, 1, 0, 0,
        0, 2242, 2243, 5, 128, 0, 0, 2243, 355, 1, 0, 0, 0, 2244, 2247, 3, 398, 199, 0, 2245, 2247,
        3, 436, 218, 0, 2246, 2244, 1, 0, 0, 0, 2246, 2245, 1, 0, 0, 0, 2247, 357, 1, 0, 0, 0, 2248, 2253,
        3, 360, 180, 0, 2249, 2250, 5, 132, 0, 0, 2250, 2252, 3, 360, 180, 0, 2251, 2249, 1, 0, 0, 0,
        2252, 2255, 1, 0, 0, 0, 2253, 2251, 1, 0, 0, 0, 2253, 2254, 1, 0, 0, 0, 2254, 359, 1, 0, 0, 0,
        2255, 2253, 1, 0, 0, 0, 2256, 2269, 3, 2, 1, 0, 2257, 2266, 5, 129, 0, 0, 2258, 2263, 3, 362,
        181, 0, 2259, 2260, 5, 132, 0, 0, 2260, 2262, 3, 362, 181, 0, 2261, 2259, 1, 0, 0, 0, 2262,
        2265, 1, 0, 0, 0, 2263, 2261, 1, 0, 0, 0, 2263, 2264, 1, 0, 0, 0, 2264, 2267, 1, 0, 0, 0, 2265,
        2263, 1, 0, 0, 0, 2266, 2258, 1, 0, 0, 0, 2266, 2267, 1, 0, 0, 0, 2267, 2268, 1, 0, 0, 0, 2268,
        2270, 5, 130, 0, 0, 2269, 2257, 1, 0, 0, 0, 2269, 2270, 1, 0, 0, 0, 2270, 361, 1, 0, 0, 0, 2271,
        2272, 3, 436, 218, 0, 2272, 2273, 5, 133, 0, 0, 2273, 2275, 1, 0, 0, 0, 2274, 2271, 1, 0, 0,
        0, 2274, 2275, 1, 0, 0, 0, 2275, 2276, 1, 0, 0, 0, 2276, 2277, 3, 28, 14, 0, 2277, 363, 1, 0,
        0, 0, 2278, 2281, 3, 12, 6, 0, 2279, 2281, 3, 20, 10, 0, 2280, 2278, 1, 0, 0, 0, 2280, 2279,
        1, 0, 0, 0, 2281, 2286, 1, 0, 0, 0, 2282, 2285, 3, 324, 162, 0, 2283, 2285, 5, 148, 0, 0, 2284,
        2282, 1, 0, 0, 0, 2284, 2283, 1, 0, 0, 0, 2285, 2288, 1, 0, 0, 0, 2286, 2284, 1, 0, 0, 0, 2286,
        2287, 1, 0, 0, 0, 2287, 2289, 1, 0, 0, 0, 2288, 2286, 1, 0, 0, 0, 2289, 2290, 5, 137, 0, 0, 2290,
        2294, 1, 0, 0, 0, 2291, 2292, 5, 108, 0, 0, 2292, 2294, 5, 137, 0, 0, 2293, 2280, 1, 0, 0, 0,
        2293, 2291, 1, 0, 0, 0, 2294, 365, 1, 0, 0, 0, 2295, 2300, 3, 368, 184, 0, 2296, 2297, 5, 132,
        0, 0, 2297, 2299, 3, 368, 184, 0, 2298, 2296, 1, 0, 0, 0, 2299, 2302, 1, 0, 0, 0, 2300, 2298,
        1, 0, 0, 0, 2300, 2301, 1, 0, 0, 0, 2301, 367, 1, 0, 0, 0, 2302, 2300, 1, 0, 0, 0, 2303, 2304,
        3, 436, 218, 0, 2304, 2305, 5, 145, 0, 0, 2305, 2306, 3, 370, 185, 0, 2306, 369, 1, 0, 0, 0,
        2307, 2309, 5, 140, 0, 0, 2308, 2307, 1, 0, 0, 0, 2308, 2309, 1, 0, 0, 0, 2309, 2310, 1, 0, 0,
        0, 2310, 2313, 3, 28, 14, 0, 2311, 2313, 3, 374, 187, 0, 2312, 2308, 1, 0, 0, 0, 2312, 2311,
        1, 0, 0, 0, 2313, 371, 1, 0, 0, 0, 2314, 2315, 3, 436, 218, 0, 2315, 2316, 5, 127, 0, 0, 2316,
        2317, 3, 28, 14, 0, 2317, 2318, 5, 128, 0, 0, 2318, 373, 1, 0, 0, 0, 2319, 2320, 5, 89, 0, 0,
        2320, 2321, 3, 4, 2, 0, 2321, 2322, 5, 127, 0, 0, 2322, 2323, 3, 28, 14, 0, 2323, 2324, 5, 128,
        0, 0, 2324, 2349, 1, 0, 0, 0, 2325, 2327, 5, 89, 0, 0, 2326, 2328, 3, 4, 2, 0, 2327, 2326, 1,
        0, 0, 0, 2327, 2328, 1, 0, 0, 0, 2328, 2329, 1, 0, 0, 0, 2329, 2331, 5, 127, 0, 0, 2330, 2332,
        3, 28, 14, 0, 2331, 2330, 1, 0, 0, 0, 2331, 2332, 1, 0, 0, 0, 2332, 2333, 1, 0, 0, 0, 2333, 2334,
        5, 128, 0, 0, 2334, 2335, 5, 125, 0, 0, 2335, 2340, 3, 28, 14, 0, 2336, 2337, 5, 132, 0, 0, 2337,
        2339, 3, 28, 14, 0, 2338, 2336, 1, 0, 0, 0, 2339, 2342, 1, 0, 0, 0, 2340, 2338, 1, 0, 0, 0, 2340,
        2341, 1, 0, 0, 0, 2341, 2344, 1, 0, 0, 0, 2342, 2340, 1, 0, 0, 0, 2343, 2345, 5, 132, 0, 0, 2344,
        2343, 1, 0, 0, 0, 2344, 2345, 1, 0, 0, 0, 2345, 2346, 1, 0, 0, 0, 2346, 2347, 5, 126, 0, 0, 2347,
        2349, 1, 0, 0, 0, 2348, 2319, 1, 0, 0, 0, 2348, 2325, 1, 0, 0, 0, 2349, 375, 1, 0, 0, 0, 2350,
        2351, 5, 145, 0, 0, 2351, 2352, 5, 147, 0, 0, 2352, 2353, 4, 188, 1, 1, 2353, 377, 1, 0, 0, 0,
        2354, 2355, 5, 147, 0, 0, 2355, 2356, 5, 147, 0, 0, 2356, 2357, 4, 189, 2, 1, 2357, 379, 1,
        0, 0, 0, 2358, 2359, 5, 147, 0, 0, 2359, 2360, 5, 159, 0, 0, 2360, 2361, 4, 190, 3, 1, 2361,
        381, 1, 0, 0, 0, 2362, 2371, 3, 384, 192, 0, 2363, 2371, 3, 386, 193, 0, 2364, 2371, 5, 116,
        0, 0, 2365, 2371, 5, 117, 0, 0, 2366, 2371, 5, 118, 0, 0, 2367, 2371, 5, 119, 0, 0, 2368, 2371,
        5, 120, 0, 0, 2369, 2371, 5, 67, 0, 0, 2370, 2362, 1, 0, 0, 0, 2370, 2363, 1, 0, 0, 0, 2370, 2364,
        1, 0, 0, 0, 2370, 2365, 1, 0, 0, 0, 2370, 2366, 1, 0, 0, 0, 2370, 2367, 1, 0, 0, 0, 2370, 2368,
        1, 0, 0, 0, 2370, 2369, 1, 0, 0, 0, 2371, 383, 1, 0, 0, 0, 2372, 2373, 7, 15, 0, 0, 2373, 385,
        1, 0, 0, 0, 2374, 2379, 3, 388, 194, 0, 2375, 2379, 3, 390, 195, 0, 2376, 2379, 5, 121, 0, 0,
        2377, 2379, 5, 122, 0, 0, 2378, 2374, 1, 0, 0, 0, 2378, 2375, 1, 0, 0, 0, 2378, 2376, 1, 0, 0,
        0, 2378, 2377, 1, 0, 0, 0, 2379, 387, 1, 0, 0, 0, 2380, 2384, 5, 123, 0, 0, 2381, 2383, 3, 392,
        196, 0, 2382, 2381, 1, 0, 0, 0, 2383, 2386, 1, 0, 0, 0, 2384, 2382, 1, 0, 0, 0, 2384, 2385, 1,
        0, 0, 0, 2385, 2387, 1, 0, 0, 0, 2386, 2384, 1, 0, 0, 0, 2387, 2388, 5, 176, 0, 0, 2388, 389,
        1, 0, 0, 0, 2389, 2393, 5, 124, 0, 0, 2390, 2392, 3, 394, 197, 0, 2391, 2390, 1, 0, 0, 0, 2392,
        2395, 1, 0, 0, 0, 2393, 2391, 1, 0, 0, 0, 2393, 2394, 1, 0, 0, 0, 2394, 2396, 1, 0, 0, 0, 2395,
        2393, 1, 0, 0, 0, 2396, 2397, 5, 176, 0, 0, 2397, 391, 1, 0, 0, 0, 2398, 2403, 3, 396, 198, 0,
        2399, 2403, 5, 172, 0, 0, 2400, 2403, 5, 174, 0, 0, 2401, 2403, 5, 177, 0, 0, 2402, 2398, 1,
        0, 0, 0, 2402, 2399, 1, 0, 0, 0, 2402, 2400, 1, 0, 0, 0, 2402, 2401, 1, 0, 0, 0, 2403, 393, 1,
        0, 0, 0, 2404, 2409, 3, 396, 198, 0, 2405, 2409, 5, 172, 0, 0, 2406, 2409, 5, 175, 0, 0, 2407,
        2409, 5, 178, 0, 0, 2408, 2404, 1, 0, 0, 0, 2408, 2405, 1, 0, 0, 0, 2408, 2406, 1, 0, 0, 0, 2408,
        2407, 1, 0, 0, 0, 2409, 395, 1, 0, 0, 0, 2410, 2415, 3, 28, 14, 0, 2411, 2412, 5, 132, 0, 0, 2412,
        2414, 3, 28, 14, 0, 2413, 2411, 1, 0, 0, 0, 2414, 2417, 1, 0, 0, 0, 2415, 2413, 1, 0, 0, 0, 2415,
        2416, 1, 0, 0, 0, 2416, 2424, 1, 0, 0, 0, 2417, 2415, 1, 0, 0, 0, 2418, 2420, 5, 133, 0, 0, 2419,
        2421, 5, 180, 0, 0, 2420, 2419, 1, 0, 0, 0, 2421, 2422, 1, 0, 0, 0, 2422, 2420, 1, 0, 0, 0, 2422,
        2423, 1, 0, 0, 0, 2423, 2425, 1, 0, 0, 0, 2424, 2418, 1, 0, 0, 0, 2424, 2425, 1, 0, 0, 0, 2425,
        397, 1, 0, 0, 0, 2426, 2427, 7, 16, 0, 0, 2427, 399, 1, 0, 0, 0, 2428, 2429, 5, 26, 0, 0, 2429,
        2431, 3, 436, 218, 0, 2430, 2432, 3, 232, 116, 0, 2431, 2430, 1, 0, 0, 0, 2431, 2432, 1, 0,
        0, 0, 2432, 2434, 1, 0, 0, 0, 2433, 2435, 3, 236, 118, 0, 2434, 2433, 1, 0, 0, 0, 2434, 2435,
        1, 0, 0, 0, 2435, 2437, 1, 0, 0, 0, 2436, 2438, 3, 240, 120, 0, 2437, 2436, 1, 0, 0, 0, 2437,
        2438, 1, 0, 0, 0, 2438, 2439, 1, 0, 0, 0, 2439, 2441, 3, 252, 126, 0, 2440, 2442, 5, 134, 0,
        0, 2441, 2440, 1, 0, 0, 0, 2441, 2442, 1, 0, 0, 0, 2442, 401, 1, 0, 0, 0, 2443, 2445, 7, 17, 0,
        0, 2444, 2443, 1, 0, 0, 0, 2444, 2445, 1, 0, 0, 0, 2445, 2446, 1, 0, 0, 0, 2446, 2447, 5, 92,
        0, 0, 2447, 2449, 3, 436, 218, 0, 2448, 2450, 3, 232, 116, 0, 2449, 2448, 1, 0, 0, 0, 2449,
        2450, 1, 0, 0, 0, 2450, 2452, 1, 0, 0, 0, 2451, 2453, 3, 316, 158, 0, 2452, 2451, 1, 0, 0, 0,
        2452, 2453, 1, 0, 0, 0, 2453, 2455, 1, 0, 0, 0, 2454, 2456, 3, 240, 120, 0, 2455, 2454, 1, 0,
        0, 0, 2455, 2456, 1, 0, 0, 0, 2456, 2457, 1, 0, 0, 0, 2457, 2459, 3, 318, 159, 0, 2458, 2460,
        5, 134, 0, 0, 2459, 2458, 1, 0, 0, 0, 2459, 2460, 1, 0, 0, 0, 2460, 403, 1, 0, 0, 0, 2461, 2462,
        5, 56, 0, 0, 2462, 2464, 3, 436, 218, 0, 2463, 2465, 3, 328, 164, 0, 2464, 2463, 1, 0, 0, 0,
        2464, 2465, 1, 0, 0, 0, 2465, 2467, 1, 0, 0, 0, 2466, 2468, 3, 334, 167, 0, 2467, 2466, 1, 0,
        0, 0, 2467, 2468, 1, 0, 0, 0, 2468, 2470, 1, 0, 0, 0, 2469, 2471, 3, 240, 120, 0, 2470, 2469,
        1, 0, 0, 0, 2470, 2471, 1, 0, 0, 0, 2471, 2472, 1, 0, 0, 0, 2472, 2474, 3, 252, 126, 0, 2473,
        2475, 5, 134, 0, 0, 2474, 2473, 1, 0, 0, 0, 2474, 2475, 1, 0, 0, 0, 2475, 405, 1, 0, 0, 0, 2476,
        2477, 5, 37, 0, 0, 2477, 2479, 3, 436, 218, 0, 2478, 2480, 3, 342, 171, 0, 2479, 2478, 1, 0,
        0, 0, 2479, 2480, 1, 0, 0, 0, 2480, 2481, 1, 0, 0, 0, 2481, 2483, 3, 344, 172, 0, 2482, 2484,
        5, 134, 0, 0, 2483, 2482, 1, 0, 0, 0, 2483, 2484, 1, 0, 0, 0, 2484, 407, 1, 0, 0, 0, 2485, 2486,
        5, 31, 0, 0, 2486, 2487, 3, 276, 138, 0, 2487, 2489, 3, 436, 218, 0, 2488, 2490, 3, 328, 164,
        0, 2489, 2488, 1, 0, 0, 0, 2489, 2490, 1, 0, 0, 0, 2490, 2491, 1, 0, 0, 0, 2491, 2493, 5, 129,
        0, 0, 2492, 2494, 3, 282, 141, 0, 2493, 2492, 1, 0, 0, 0, 2493, 2494, 1, 0, 0, 0, 2494, 2495,
        1, 0, 0, 0, 2495, 2497, 5, 130, 0, 0, 2496, 2498, 3, 240, 120, 0, 2497, 2496, 1, 0, 0, 0, 2497,
        2498, 1, 0, 0, 0, 2498, 2499, 1, 0, 0, 0, 2499, 2500, 5, 134, 0, 0, 2500, 409, 1, 0, 0, 0, 2501,
        2502, 5, 39, 0, 0, 2502, 2511, 3, 4, 2, 0, 2503, 2504, 3, 270, 135, 0, 2504, 2505, 5, 134, 0,
        0, 2505, 2512, 1, 0, 0, 0, 2506, 2507, 3, 278, 139, 0, 2507, 2508, 5, 125, 0, 0, 2508, 2509,
        3, 302, 151, 0, 2509, 2510, 5, 126, 0, 0, 2510, 2512, 1, 0, 0, 0, 2511, 2503, 1, 0, 0, 0, 2511,
        2506, 1, 0, 0, 0, 2512, 411, 1, 0, 0, 0, 2513, 2514, 3, 270, 135, 0, 2514, 2515, 5, 134, 0, 0,
        2515, 413, 1, 0, 0, 0, 2516, 2530, 3, 278, 139, 0, 2517, 2518, 5, 125, 0, 0, 2518, 2519, 3,
        292, 146, 0, 2519, 2524, 5, 126, 0, 0, 2520, 2521, 5, 145, 0, 0, 2521, 2522, 3, 274, 137, 0,
        2522, 2523, 5, 134, 0, 0, 2523, 2525, 1, 0, 0, 0, 2524, 2520, 1, 0, 0, 0, 2524, 2525, 1, 0, 0,
        0, 2525, 2531, 1, 0, 0, 0, 2526, 2527, 3, 376, 188, 0, 2527, 2528, 3, 76, 38, 0, 2528, 2529,
        5, 134, 0, 0, 2529, 2531, 1, 0, 0, 0, 2530, 2517, 1, 0, 0, 0, 2530, 2526, 1, 0, 0, 0, 2531, 415,
        1, 0, 0, 0, 2532, 2533, 5, 27, 0, 0, 2533, 2534, 3, 4, 2, 0, 2534, 2535, 3, 266, 133, 0, 2535,
        2536, 5, 134, 0, 0, 2536, 417, 1, 0, 0, 0, 2537, 2538, 5, 94, 0, 0, 2538, 2539, 5, 127, 0, 0,
        2539, 2540, 3, 282, 141, 0, 2540, 2549, 5, 128, 0, 0, 2541, 2542, 5, 125, 0, 0, 2542, 2543,
        3, 292, 146, 0, 2543, 2544, 5, 126, 0, 0, 2544, 2550, 1, 0, 0, 0, 2545, 2546, 3, 376, 188, 0,
        2546, 2547, 3, 76, 38, 0, 2547, 2548, 5, 134, 0, 0, 2548, 2550, 1, 0, 0, 0, 2549, 2541, 1, 0,
        0, 0, 2549, 2545, 1, 0, 0, 0, 2550, 419, 1, 0, 0, 0, 2551, 2552, 5, 144, 0, 0, 2552, 2553, 3,
        436, 218, 0, 2553, 2554, 5, 129, 0, 0, 2554, 2555, 5, 130, 0, 0, 2555, 2556, 3, 314, 157, 0,
        2556, 421, 1, 0, 0, 0, 2557, 2558, 3, 436, 218, 0, 2558, 2560, 5, 129, 0, 0, 2559, 2561, 3,
        282, 141, 0, 2560, 2559, 1, 0, 0, 0, 2560, 2561, 1, 0, 0, 0, 2561, 2562, 1, 0, 0, 0, 2562, 2564,
        5, 130, 0, 0, 2563, 2565, 3, 312, 156, 0, 2564, 2563, 1, 0, 0, 0, 2564, 2565, 1, 0, 0, 0, 2565,
        2566, 1, 0, 0, 0, 2566, 2567, 3, 314, 157, 0, 2567, 423, 1, 0, 0, 0, 2568, 2570, 3, 426, 213,
        0, 2569, 2571, 3, 232, 116, 0, 2570, 2569, 1, 0, 0, 0, 2570, 2571, 1, 0, 0, 0, 2571, 2572, 1,
        0, 0, 0, 2572, 2574, 5, 129, 0, 0, 2573, 2575, 3, 282, 141, 0, 2574, 2573, 1, 0, 0, 0, 2574,
        2575, 1, 0, 0, 0, 2575, 2576, 1, 0, 0, 0, 2576, 2578, 5, 130, 0, 0, 2577, 2579, 3, 240, 120,
        0, 2578, 2577, 1, 0, 0, 0, 2578, 2579, 1, 0, 0, 0, 2579, 2585, 1, 0, 0, 0, 2580, 2586, 3, 280,
        140, 0, 2581, 2582, 3, 376, 188, 0, 2582, 2583, 3, 76, 38, 0, 2583, 2584, 5, 134, 0, 0, 2584,
        2586, 1, 0, 0, 0, 2585, 2580, 1, 0, 0, 0, 2585, 2581, 1, 0, 0, 0, 2586, 425, 1, 0, 0, 0, 2587,
        2593, 3, 436, 218, 0, 2588, 2589, 3, 436, 218, 0, 2589, 2590, 5, 149, 0, 0, 2590, 2591, 3,
        436, 218, 0, 2591, 2593, 1, 0, 0, 0, 2592, 2587, 1, 0, 0, 0, 2592, 2588, 1, 0, 0, 0, 2593, 2601,
        1, 0, 0, 0, 2594, 2596, 3, 22, 11, 0, 2595, 2594, 1, 0, 0, 0, 2595, 2596, 1, 0, 0, 0, 2596, 2597,
        1, 0, 0, 0, 2597, 2598, 5, 131, 0, 0, 2598, 2600, 3, 436, 218, 0, 2599, 2595, 1, 0, 0, 0, 2600,
        2603, 1, 0, 0, 0, 2601, 2599, 1, 0, 0, 0, 2601, 2602, 1, 0, 0, 0, 2602, 427, 1, 0, 0, 0, 2603,
        2601, 1, 0, 0, 0, 2604, 2605, 5, 70, 0, 0, 2605, 2606, 3, 308, 154, 0, 2606, 2608, 5, 129, 0,
        0, 2607, 2609, 5, 54, 0, 0, 2608, 2607, 1, 0, 0, 0, 2608, 2609, 1, 0, 0, 0, 2609, 2610, 1, 0,
        0, 0, 2610, 2616, 3, 430, 215, 0, 2611, 2613, 5, 132, 0, 0, 2612, 2614, 5, 54, 0, 0, 2613, 2612,
        1, 0, 0, 0, 2613, 2614, 1, 0, 0, 0, 2614, 2615, 1, 0, 0, 0, 2615, 2617, 3, 430, 215, 0, 2616,
        2611, 1, 0, 0, 0, 2616, 2617, 1, 0, 0, 0, 2617, 2618, 1, 0, 0, 0, 2618, 2624, 5, 130, 0, 0, 2619,
        2625, 3, 314, 157, 0, 2620, 2621, 3, 376, 188, 0, 2621, 2622, 3, 76, 38, 0, 2622, 2623, 5,
        134, 0, 0, 2623, 2625, 1, 0, 0, 0, 2624, 2619, 1, 0, 0, 0, 2624, 2620, 1, 0, 0, 0, 2625, 429,
        1, 0, 0, 0, 2626, 2627, 3, 4, 2, 0, 2627, 2630, 3, 436, 218, 0, 2628, 2629, 5, 145, 0, 0, 2629,
        2631, 3, 28, 14, 0, 2630, 2628, 1, 0, 0, 0, 2630, 2631, 1, 0, 0, 0, 2631, 431, 1, 0, 0, 0, 2632,
        2634, 5, 129, 0, 0, 2633, 2635, 3, 24, 12, 0, 2634, 2633, 1, 0, 0, 0, 2634, 2635, 1, 0, 0, 0,
        2635, 2636, 1, 0, 0, 0, 2636, 2637, 5, 130, 0, 0, 2637, 433, 1, 0, 0, 0, 2638, 2640, 5, 129,
        0, 0, 2639, 2641, 3, 24, 12, 0, 2640, 2639, 1, 0, 0, 0, 2640, 2641, 1, 0, 0, 0, 2641, 2642, 1,
        0, 0, 0, 2642, 2644, 5, 130, 0, 0, 2643, 2645, 3, 90, 45, 0, 2644, 2643, 1, 0, 0, 0, 2644, 2645,
        1, 0, 0, 0, 2645, 435, 1, 0, 0, 0, 2646, 2647, 7, 18, 0, 0, 2647, 437, 1, 0, 0, 0, 345, 439, 442,
        445, 450, 454, 460, 463, 468, 472, 479, 481, 489, 497, 503, 507, 512, 522, 530, 540, 546,
        549, 554, 557, 563, 568, 578, 591, 599, 605, 607, 614, 622, 630, 638, 646, 654, 664, 666,
        672, 677, 685, 693, 701, 703, 706, 713, 718, 725, 729, 731, 755, 764, 769, 773, 781, 784,
        789, 793, 797, 803, 817, 823, 835, 839, 844, 848, 854, 862, 871, 889, 892, 897, 900, 915,
        921, 925, 931, 936, 939, 947, 955, 966, 971, 976, 978, 987, 995, 1002, 1010, 1014, 1023,
        1028, 1030, 1039, 1047, 1051, 1056, 1058, 1063, 1067, 1074, 1082, 1084, 1088, 1091, 1094,
        1102, 1112, 1129, 1136, 1140, 1150, 1155, 1162, 1171, 1176, 1183, 1195, 1206, 1214, 1219,
        1228, 1237, 1246, 1252, 1257, 1261, 1265, 1269, 1273, 1280, 1288, 1301, 1311, 1333, 1337,
        1341, 1346, 1366, 1371, 1376, 1383, 1386, 1408, 1420, 1424, 1432, 1442, 1449, 1453, 1458,
        1461, 1466, 1474, 1479, 1486, 1492, 1500, 1508, 1511, 1518, 1525, 1529, 1532, 1538, 1542,
        1548, 1562, 1568, 1575, 1580, 1583, 1586, 1593, 1603, 1620, 1625, 1629, 1632, 1635, 1642,
        1648, 1656, 1662, 1672, 1680, 1686, 1697, 1701, 1703, 1708, 1712, 1719, 1728, 1735, 1738,
        1741, 1745, 1750, 1763, 1773, 1780, 1792, 1799, 1811, 1817, 1821, 1825, 1831, 1837, 1839,
        1846, 1850, 1853, 1857, 1867, 1870, 1877, 1880, 1885, 1890, 1892, 1895, 1898, 1904, 1907,
        1919, 1923, 1926, 1936, 1939, 1945, 1972, 1985, 1991, 2000, 2006, 2009, 2017, 2021, 2027,
        2033, 2039, 2050, 2054, 2056, 2066, 2072, 2075, 2088, 2094, 2097, 2100, 2107, 2112, 2116,
        2120, 2137, 2140, 2145, 2149, 2153, 2162, 2165, 2170, 2174, 2179, 2183, 2185, 2196, 2200,
        2202, 2207, 2212, 2219, 2225, 2230, 2236, 2240, 2246, 2253, 2263, 2266, 2269, 2274, 2280,
        2284, 2286, 2293, 2300, 2308, 2312, 2327, 2331, 2340, 2344, 2348, 2370, 2378, 2384, 2393,
        2402, 2408, 2415, 2422, 2424, 2431, 2434, 2437, 2441, 2444, 2449, 2452, 2455, 2459, 2464,
        2467, 2470, 2474, 2479, 2483, 2489, 2493, 2497, 2511, 2524, 2530, 2549, 2560, 2564, 2570,
        2574, 2578, 2585, 2592, 2595, 2601, 2608, 2613, 2616, 2624, 2630, 2634, 2640, 2644];

    private static __ATN: ATN;
    public static get _ATN(): ATN {
        if (!CSharpParser.__ATN) {
            CSharpParser.__ATN = new ATNDeserializer().deserialize(CSharpParser._serializedATN);
        }

        return CSharpParser.__ATN;
    }


    static DecisionsToDFA = CSharpParser._ATN.decisionToState.map((ds: DecisionState, index: number) => new DFA(ds, index));

}

export class Compilation_unitContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public EOF(): TerminalNode {
        return this.getToken(CSharpParser.EOF, 0);
    }

    public BYTE_ORDER_MARK(): TerminalNode {
        return this.getToken(CSharpParser.BYTE_ORDER_MARK, 0);
    }

    public extern_alias_directives(): Extern_alias_directivesContext {
        return this.getTypedRuleContext(Extern_alias_directivesContext, 0) as Extern_alias_directivesContext;
    }

    public using_directives(): Using_directivesContext {
        return this.getTypedRuleContext(Using_directivesContext, 0) as Using_directivesContext;
    }

    public global_attribute_section_list(): Global_attribute_sectionContext[] {
        return this.getTypedRuleContexts(Global_attribute_sectionContext) as Global_attribute_sectionContext[];
    }

    public global_attribute_section(i: number): Global_attribute_sectionContext {
        return this.getTypedRuleContext(Global_attribute_sectionContext, i) as Global_attribute_sectionContext;
    }

    public namespace_member_declarations(): Namespace_member_declarationsContext {
        return this.getTypedRuleContext(Namespace_member_declarationsContext, 0) as Namespace_member_declarationsContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_compilation_unit;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterCompilation_unit) {
            listener.enterCompilation_unit(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitCompilation_unit) {
            listener.exitCompilation_unit(this);
        }
    }
}


export class Namespace_or_type_nameContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public identifier_list(): IdentifierContext[] {
        return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
    }

    public identifier(i: number): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
    }

    public qualified_alias_member(): Qualified_alias_memberContext {
        return this.getTypedRuleContext(Qualified_alias_memberContext, 0) as Qualified_alias_memberContext;
    }

    public DOT_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.DOT);
    }

    public DOT(i: number): TerminalNode {
        return this.getToken(CSharpParser.DOT, i);
    }

    public type_argument_list_list(): Type_argument_listContext[] {
        return this.getTypedRuleContexts(Type_argument_listContext) as Type_argument_listContext[];
    }

    public type_argument_list(i: number): Type_argument_listContext {
        return this.getTypedRuleContext(Type_argument_listContext, i) as Type_argument_listContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_namespace_or_type_name;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterNamespace_or_type_name) {
            listener.enterNamespace_or_type_name(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitNamespace_or_type_name) {
            listener.exitNamespace_or_type_name(this);
        }
    }
}


export class Type_Context extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public base_type(): Base_typeContext {
        return this.getTypedRuleContext(Base_typeContext, 0) as Base_typeContext;
    }

    public INTERR_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.INTERR);
    }

    public INTERR(i: number): TerminalNode {
        return this.getToken(CSharpParser.INTERR, i);
    }

    public rank_specifier_list(): Rank_specifierContext[] {
        return this.getTypedRuleContexts(Rank_specifierContext) as Rank_specifierContext[];
    }

    public rank_specifier(i: number): Rank_specifierContext {
        return this.getTypedRuleContext(Rank_specifierContext, i) as Rank_specifierContext;
    }

    public STAR_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.STAR);
    }

    public STAR(i: number): TerminalNode {
        return this.getToken(CSharpParser.STAR, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_type_;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterType_) {
            listener.enterType_(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitType_) {
            listener.exitType_(this);
        }
    }
}


export class Base_typeContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public simple_type(): Simple_typeContext {
        return this.getTypedRuleContext(Simple_typeContext, 0) as Simple_typeContext;
    }

    public class_type(): Class_typeContext {
        return this.getTypedRuleContext(Class_typeContext, 0) as Class_typeContext;
    }

    public VOID(): TerminalNode {
        return this.getToken(CSharpParser.VOID, 0);
    }

    public STAR(): TerminalNode {
        return this.getToken(CSharpParser.STAR, 0);
    }

    public tuple_type(): Tuple_typeContext {
        return this.getTypedRuleContext(Tuple_typeContext, 0) as Tuple_typeContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_base_type;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterBase_type) {
            listener.enterBase_type(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitBase_type) {
            listener.exitBase_type(this);
        }
    }
}


export class Tuple_typeContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public tuple_element_list(): Tuple_elementContext[] {
        return this.getTypedRuleContexts(Tuple_elementContext) as Tuple_elementContext[];
    }

    public tuple_element(i: number): Tuple_elementContext {
        return this.getTypedRuleContext(Tuple_elementContext, i) as Tuple_elementContext;
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_tuple_type;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterTuple_type) {
            listener.enterTuple_type(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitTuple_type) {
            listener.exitTuple_type(this);
        }
    }
}


export class Tuple_elementContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public type_(): Type_Context {
        return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_tuple_element;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterTuple_element) {
            listener.enterTuple_element(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitTuple_element) {
            listener.exitTuple_element(this);
        }
    }
}


export class Simple_typeContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public numeric_type(): Numeric_typeContext {
        return this.getTypedRuleContext(Numeric_typeContext, 0) as Numeric_typeContext;
    }

    public BOOL(): TerminalNode {
        return this.getToken(CSharpParser.BOOL, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_simple_type;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterSimple_type) {
            listener.enterSimple_type(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitSimple_type) {
            listener.exitSimple_type(this);
        }
    }
}


export class Numeric_typeContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public integral_type(): Integral_typeContext {
        return this.getTypedRuleContext(Integral_typeContext, 0) as Integral_typeContext;
    }

    public floating_point_type(): Floating_point_typeContext {
        return this.getTypedRuleContext(Floating_point_typeContext, 0) as Floating_point_typeContext;
    }

    public DECIMAL(): TerminalNode {
        return this.getToken(CSharpParser.DECIMAL, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_numeric_type;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterNumeric_type) {
            listener.enterNumeric_type(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitNumeric_type) {
            listener.exitNumeric_type(this);
        }
    }
}


export class Integral_typeContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public SBYTE(): TerminalNode {
        return this.getToken(CSharpParser.SBYTE, 0);
    }

    public BYTE(): TerminalNode {
        return this.getToken(CSharpParser.BYTE, 0);
    }

    public SHORT(): TerminalNode {
        return this.getToken(CSharpParser.SHORT, 0);
    }

    public USHORT(): TerminalNode {
        return this.getToken(CSharpParser.USHORT, 0);
    }

    public INT(): TerminalNode {
        return this.getToken(CSharpParser.INT, 0);
    }

    public UINT(): TerminalNode {
        return this.getToken(CSharpParser.UINT, 0);
    }

    public LONG(): TerminalNode {
        return this.getToken(CSharpParser.LONG, 0);
    }

    public ULONG(): TerminalNode {
        return this.getToken(CSharpParser.ULONG, 0);
    }

    public CHAR(): TerminalNode {
        return this.getToken(CSharpParser.CHAR, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_integral_type;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterIntegral_type) {
            listener.enterIntegral_type(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitIntegral_type) {
            listener.exitIntegral_type(this);
        }
    }
}


export class Floating_point_typeContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public FLOAT(): TerminalNode {
        return this.getToken(CSharpParser.FLOAT, 0);
    }

    public DOUBLE(): TerminalNode {
        return this.getToken(CSharpParser.DOUBLE, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_floating_point_type;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterFloating_point_type) {
            listener.enterFloating_point_type(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitFloating_point_type) {
            listener.exitFloating_point_type(this);
        }
    }
}


export class Class_typeContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public namespace_or_type_name(): Namespace_or_type_nameContext {
        return this.getTypedRuleContext(Namespace_or_type_nameContext, 0) as Namespace_or_type_nameContext;
    }

    public OBJECT(): TerminalNode {
        return this.getToken(CSharpParser.OBJECT, 0);
    }

    public DYNAMIC(): TerminalNode {
        return this.getToken(CSharpParser.DYNAMIC, 0);
    }

    public STRING(): TerminalNode {
        return this.getToken(CSharpParser.STRING, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_class_type;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterClass_type) {
            listener.enterClass_type(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitClass_type) {
            listener.exitClass_type(this);
        }
    }
}


export class Type_argument_listContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public LT(): TerminalNode {
        return this.getToken(CSharpParser.LT, 0);
    }

    public type__list(): Type_Context[] {
        return this.getTypedRuleContexts(Type_Context) as Type_Context[];
    }

    public type_(i: number): Type_Context {
        return this.getTypedRuleContext(Type_Context, i) as Type_Context;
    }

    public GT(): TerminalNode {
        return this.getToken(CSharpParser.GT, 0);
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_type_argument_list;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterType_argument_list) {
            listener.enterType_argument_list(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitType_argument_list) {
            listener.exitType_argument_list(this);
        }
    }
}


export class Argument_listContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public argument_list(): ArgumentContext[] {
        return this.getTypedRuleContexts(ArgumentContext) as ArgumentContext[];
    }

    public argument(i: number): ArgumentContext {
        return this.getTypedRuleContext(ArgumentContext, i) as ArgumentContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_argument_list;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterArgument_list) {
            listener.enterArgument_list(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitArgument_list) {
            listener.exitArgument_list(this);
        }
    }
}


export class ArgumentContext extends ParserRuleContext {
    public _refout!: Token;

    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public COLON(): TerminalNode {
        return this.getToken(CSharpParser.COLON, 0);
    }

    public VAR(): TerminalNode {
        return this.getToken(CSharpParser.VAR, 0);
    }

    public type_(): Type_Context {
        return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
    }

    public REF(): TerminalNode {
        return this.getToken(CSharpParser.REF, 0);
    }

    public OUT(): TerminalNode {
        return this.getToken(CSharpParser.OUT, 0);
    }

    public IN(): TerminalNode {
        return this.getToken(CSharpParser.IN, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_argument;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterArgument) {
            listener.enterArgument(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitArgument) {
            listener.exitArgument(this);
        }
    }
}


export class ExpressionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public assignment(): AssignmentContext {
        return this.getTypedRuleContext(AssignmentContext, 0) as AssignmentContext;
    }

    public non_assignment_expression(): Non_assignment_expressionContext {
        return this.getTypedRuleContext(Non_assignment_expressionContext, 0) as Non_assignment_expressionContext;
    }

    public REF(): TerminalNode {
        return this.getToken(CSharpParser.REF, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_expression;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterExpression) {
            listener.enterExpression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitExpression) {
            listener.exitExpression(this);
        }
    }
}


export class Non_assignment_expressionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public lambda_expression(): Lambda_expressionContext {
        return this.getTypedRuleContext(Lambda_expressionContext, 0) as Lambda_expressionContext;
    }

    public query_expression(): Query_expressionContext {
        return this.getTypedRuleContext(Query_expressionContext, 0) as Query_expressionContext;
    }

    public conditional_expression(): Conditional_expressionContext {
        return this.getTypedRuleContext(Conditional_expressionContext, 0) as Conditional_expressionContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_non_assignment_expression;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterNon_assignment_expression) {
            listener.enterNon_assignment_expression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitNon_assignment_expression) {
            listener.exitNon_assignment_expression(this);
        }
    }
}


export class AssignmentContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public unary_expression(): Unary_expressionContext {
        return this.getTypedRuleContext(Unary_expressionContext, 0) as Unary_expressionContext;
    }

    public assignment_operator(): Assignment_operatorContext {
        return this.getTypedRuleContext(Assignment_operatorContext, 0) as Assignment_operatorContext;
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public OP_COALESCING_ASSIGNMENT(): TerminalNode {
        return this.getToken(CSharpParser.OP_COALESCING_ASSIGNMENT, 0);
    }

    public throwable_expression(): Throwable_expressionContext {
        return this.getTypedRuleContext(Throwable_expressionContext, 0) as Throwable_expressionContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_assignment;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterAssignment) {
            listener.enterAssignment(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitAssignment) {
            listener.exitAssignment(this);
        }
    }
}


export class Assignment_operatorContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public ASSIGNMENT(): TerminalNode {
        return this.getToken(CSharpParser.ASSIGNMENT, 0);
    }

    public OP_ADD_ASSIGNMENT(): TerminalNode {
        return this.getToken(CSharpParser.OP_ADD_ASSIGNMENT, 0);
    }

    public OP_SUB_ASSIGNMENT(): TerminalNode {
        return this.getToken(CSharpParser.OP_SUB_ASSIGNMENT, 0);
    }

    public OP_MULT_ASSIGNMENT(): TerminalNode {
        return this.getToken(CSharpParser.OP_MULT_ASSIGNMENT, 0);
    }

    public OP_DIV_ASSIGNMENT(): TerminalNode {
        return this.getToken(CSharpParser.OP_DIV_ASSIGNMENT, 0);
    }

    public OP_MOD_ASSIGNMENT(): TerminalNode {
        return this.getToken(CSharpParser.OP_MOD_ASSIGNMENT, 0);
    }

    public OP_AND_ASSIGNMENT(): TerminalNode {
        return this.getToken(CSharpParser.OP_AND_ASSIGNMENT, 0);
    }

    public OP_OR_ASSIGNMENT(): TerminalNode {
        return this.getToken(CSharpParser.OP_OR_ASSIGNMENT, 0);
    }

    public OP_XOR_ASSIGNMENT(): TerminalNode {
        return this.getToken(CSharpParser.OP_XOR_ASSIGNMENT, 0);
    }

    public OP_LEFT_SHIFT_ASSIGNMENT(): TerminalNode {
        return this.getToken(CSharpParser.OP_LEFT_SHIFT_ASSIGNMENT, 0);
    }

    public right_shift_assignment(): Right_shift_assignmentContext {
        return this.getTypedRuleContext(Right_shift_assignmentContext, 0) as Right_shift_assignmentContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_assignment_operator;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterAssignment_operator) {
            listener.enterAssignment_operator(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitAssignment_operator) {
            listener.exitAssignment_operator(this);
        }
    }
}


export class Conditional_expressionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public null_coalescing_expression(): Null_coalescing_expressionContext {
        return this.getTypedRuleContext(Null_coalescing_expressionContext, 0) as Null_coalescing_expressionContext;
    }

    public INTERR(): TerminalNode {
        return this.getToken(CSharpParser.INTERR, 0);
    }

    public throwable_expression_list(): Throwable_expressionContext[] {
        return this.getTypedRuleContexts(Throwable_expressionContext) as Throwable_expressionContext[];
    }

    public throwable_expression(i: number): Throwable_expressionContext {
        return this.getTypedRuleContext(Throwable_expressionContext, i) as Throwable_expressionContext;
    }

    public COLON(): TerminalNode {
        return this.getToken(CSharpParser.COLON, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_conditional_expression;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterConditional_expression) {
            listener.enterConditional_expression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitConditional_expression) {
            listener.exitConditional_expression(this);
        }
    }
}


export class Null_coalescing_expressionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public conditional_or_expression(): Conditional_or_expressionContext {
        return this.getTypedRuleContext(Conditional_or_expressionContext, 0) as Conditional_or_expressionContext;
    }

    public OP_COALESCING(): TerminalNode {
        return this.getToken(CSharpParser.OP_COALESCING, 0);
    }

    public null_coalescing_expression(): Null_coalescing_expressionContext {
        return this.getTypedRuleContext(Null_coalescing_expressionContext, 0) as Null_coalescing_expressionContext;
    }

    public throw_expression(): Throw_expressionContext {
        return this.getTypedRuleContext(Throw_expressionContext, 0) as Throw_expressionContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_null_coalescing_expression;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterNull_coalescing_expression) {
            listener.enterNull_coalescing_expression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitNull_coalescing_expression) {
            listener.exitNull_coalescing_expression(this);
        }
    }
}


export class Conditional_or_expressionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public conditional_and_expression_list(): Conditional_and_expressionContext[] {
        return this.getTypedRuleContexts(Conditional_and_expressionContext) as Conditional_and_expressionContext[];
    }

    public conditional_and_expression(i: number): Conditional_and_expressionContext {
        return this.getTypedRuleContext(Conditional_and_expressionContext, i) as Conditional_and_expressionContext;
    }

    public OP_OR_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.OP_OR);
    }

    public OP_OR(i: number): TerminalNode {
        return this.getToken(CSharpParser.OP_OR, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_conditional_or_expression;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterConditional_or_expression) {
            listener.enterConditional_or_expression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitConditional_or_expression) {
            listener.exitConditional_or_expression(this);
        }
    }
}


export class Conditional_and_expressionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public inclusive_or_expression_list(): Inclusive_or_expressionContext[] {
        return this.getTypedRuleContexts(Inclusive_or_expressionContext) as Inclusive_or_expressionContext[];
    }

    public inclusive_or_expression(i: number): Inclusive_or_expressionContext {
        return this.getTypedRuleContext(Inclusive_or_expressionContext, i) as Inclusive_or_expressionContext;
    }

    public OP_AND_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.OP_AND);
    }

    public OP_AND(i: number): TerminalNode {
        return this.getToken(CSharpParser.OP_AND, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_conditional_and_expression;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterConditional_and_expression) {
            listener.enterConditional_and_expression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitConditional_and_expression) {
            listener.exitConditional_and_expression(this);
        }
    }
}


export class Inclusive_or_expressionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public exclusive_or_expression_list(): Exclusive_or_expressionContext[] {
        return this.getTypedRuleContexts(Exclusive_or_expressionContext) as Exclusive_or_expressionContext[];
    }

    public exclusive_or_expression(i: number): Exclusive_or_expressionContext {
        return this.getTypedRuleContext(Exclusive_or_expressionContext, i) as Exclusive_or_expressionContext;
    }

    public BITWISE_OR_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.BITWISE_OR);
    }

    public BITWISE_OR(i: number): TerminalNode {
        return this.getToken(CSharpParser.BITWISE_OR, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_inclusive_or_expression;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterInclusive_or_expression) {
            listener.enterInclusive_or_expression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitInclusive_or_expression) {
            listener.exitInclusive_or_expression(this);
        }
    }
}


export class Exclusive_or_expressionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public and_expression_list(): And_expressionContext[] {
        return this.getTypedRuleContexts(And_expressionContext) as And_expressionContext[];
    }

    public and_expression(i: number): And_expressionContext {
        return this.getTypedRuleContext(And_expressionContext, i) as And_expressionContext;
    }

    public CARET_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.CARET);
    }

    public CARET(i: number): TerminalNode {
        return this.getToken(CSharpParser.CARET, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_exclusive_or_expression;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterExclusive_or_expression) {
            listener.enterExclusive_or_expression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitExclusive_or_expression) {
            listener.exitExclusive_or_expression(this);
        }
    }
}


export class And_expressionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public equality_expression_list(): Equality_expressionContext[] {
        return this.getTypedRuleContexts(Equality_expressionContext) as Equality_expressionContext[];
    }

    public equality_expression(i: number): Equality_expressionContext {
        return this.getTypedRuleContext(Equality_expressionContext, i) as Equality_expressionContext;
    }

    public AMP_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.AMP);
    }

    public AMP(i: number): TerminalNode {
        return this.getToken(CSharpParser.AMP, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_and_expression;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterAnd_expression) {
            listener.enterAnd_expression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitAnd_expression) {
            listener.exitAnd_expression(this);
        }
    }
}


export class Equality_expressionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public relational_expression_list(): Relational_expressionContext[] {
        return this.getTypedRuleContexts(Relational_expressionContext) as Relational_expressionContext[];
    }

    public relational_expression(i: number): Relational_expressionContext {
        return this.getTypedRuleContext(Relational_expressionContext, i) as Relational_expressionContext;
    }

    public OP_EQ_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.OP_EQ);
    }

    public OP_EQ(i: number): TerminalNode {
        return this.getToken(CSharpParser.OP_EQ, i);
    }

    public OP_NE_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.OP_NE);
    }

    public OP_NE(i: number): TerminalNode {
        return this.getToken(CSharpParser.OP_NE, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_equality_expression;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterEquality_expression) {
            listener.enterEquality_expression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitEquality_expression) {
            listener.exitEquality_expression(this);
        }
    }
}


export class Relational_expressionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public shift_expression_list(): Shift_expressionContext[] {
        return this.getTypedRuleContexts(Shift_expressionContext) as Shift_expressionContext[];
    }

    public shift_expression(i: number): Shift_expressionContext {
        return this.getTypedRuleContext(Shift_expressionContext, i) as Shift_expressionContext;
    }

    public IS_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.IS);
    }

    public IS(i: number): TerminalNode {
        return this.getToken(CSharpParser.IS, i);
    }

    public isType_list(): IsTypeContext[] {
        return this.getTypedRuleContexts(IsTypeContext) as IsTypeContext[];
    }

    public isType(i: number): IsTypeContext {
        return this.getTypedRuleContext(IsTypeContext, i) as IsTypeContext;
    }

    public AS_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.AS);
    }

    public AS(i: number): TerminalNode {
        return this.getToken(CSharpParser.AS, i);
    }

    public type__list(): Type_Context[] {
        return this.getTypedRuleContexts(Type_Context) as Type_Context[];
    }

    public type_(i: number): Type_Context {
        return this.getTypedRuleContext(Type_Context, i) as Type_Context;
    }

    public LT_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.LT);
    }

    public LT(i: number): TerminalNode {
        return this.getToken(CSharpParser.LT, i);
    }

    public GT_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.GT);
    }

    public GT(i: number): TerminalNode {
        return this.getToken(CSharpParser.GT, i);
    }

    public OP_LE_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.OP_LE);
    }

    public OP_LE(i: number): TerminalNode {
        return this.getToken(CSharpParser.OP_LE, i);
    }

    public OP_GE_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.OP_GE);
    }

    public OP_GE(i: number): TerminalNode {
        return this.getToken(CSharpParser.OP_GE, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_relational_expression;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterRelational_expression) {
            listener.enterRelational_expression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitRelational_expression) {
            listener.exitRelational_expression(this);
        }
    }
}


export class Shift_expressionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public additive_expression_list(): Additive_expressionContext[] {
        return this.getTypedRuleContexts(Additive_expressionContext) as Additive_expressionContext[];
    }

    public additive_expression(i: number): Additive_expressionContext {
        return this.getTypedRuleContext(Additive_expressionContext, i) as Additive_expressionContext;
    }

    public OP_LEFT_SHIFT_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.OP_LEFT_SHIFT);
    }

    public OP_LEFT_SHIFT(i: number): TerminalNode {
        return this.getToken(CSharpParser.OP_LEFT_SHIFT, i);
    }

    public right_shift_list(): Right_shiftContext[] {
        return this.getTypedRuleContexts(Right_shiftContext) as Right_shiftContext[];
    }

    public right_shift(i: number): Right_shiftContext {
        return this.getTypedRuleContext(Right_shiftContext, i) as Right_shiftContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_shift_expression;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterShift_expression) {
            listener.enterShift_expression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitShift_expression) {
            listener.exitShift_expression(this);
        }
    }
}


export class Additive_expressionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public multiplicative_expression_list(): Multiplicative_expressionContext[] {
        return this.getTypedRuleContexts(Multiplicative_expressionContext) as Multiplicative_expressionContext[];
    }

    public multiplicative_expression(i: number): Multiplicative_expressionContext {
        return this.getTypedRuleContext(Multiplicative_expressionContext, i) as Multiplicative_expressionContext;
    }

    public PLUS_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.PLUS);
    }

    public PLUS(i: number): TerminalNode {
        return this.getToken(CSharpParser.PLUS, i);
    }

    public MINUS_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.MINUS);
    }

    public MINUS(i: number): TerminalNode {
        return this.getToken(CSharpParser.MINUS, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_additive_expression;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterAdditive_expression) {
            listener.enterAdditive_expression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitAdditive_expression) {
            listener.exitAdditive_expression(this);
        }
    }
}


export class Multiplicative_expressionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public switch_expression_list(): Switch_expressionContext[] {
        return this.getTypedRuleContexts(Switch_expressionContext) as Switch_expressionContext[];
    }

    public switch_expression(i: number): Switch_expressionContext {
        return this.getTypedRuleContext(Switch_expressionContext, i) as Switch_expressionContext;
    }

    public STAR_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.STAR);
    }

    public STAR(i: number): TerminalNode {
        return this.getToken(CSharpParser.STAR, i);
    }

    public DIV_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.DIV);
    }

    public DIV(i: number): TerminalNode {
        return this.getToken(CSharpParser.DIV, i);
    }

    public PERCENT_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.PERCENT);
    }

    public PERCENT(i: number): TerminalNode {
        return this.getToken(CSharpParser.PERCENT, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_multiplicative_expression;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterMultiplicative_expression) {
            listener.enterMultiplicative_expression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitMultiplicative_expression) {
            listener.exitMultiplicative_expression(this);
        }
    }
}


export class Switch_expressionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public range_expression(): Range_expressionContext {
        return this.getTypedRuleContext(Range_expressionContext, 0) as Range_expressionContext;
    }

    public SWITCH(): TerminalNode {
        return this.getToken(CSharpParser.SWITCH, 0);
    }

    public OPEN_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_BRACE, 0);
    }

    public CLOSE_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_BRACE, 0);
    }

    public switch_expression_arms(): Switch_expression_armsContext {
        return this.getTypedRuleContext(Switch_expression_armsContext, 0) as Switch_expression_armsContext;
    }

    public COMMA(): TerminalNode {
        return this.getToken(CSharpParser.COMMA, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_switch_expression;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterSwitch_expression) {
            listener.enterSwitch_expression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitSwitch_expression) {
            listener.exitSwitch_expression(this);
        }
    }
}


export class Switch_expression_armsContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public switch_expression_arm_list(): Switch_expression_armContext[] {
        return this.getTypedRuleContexts(Switch_expression_armContext) as Switch_expression_armContext[];
    }

    public switch_expression_arm(i: number): Switch_expression_armContext {
        return this.getTypedRuleContext(Switch_expression_armContext, i) as Switch_expression_armContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_switch_expression_arms;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterSwitch_expression_arms) {
            listener.enterSwitch_expression_arms(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitSwitch_expression_arms) {
            listener.exitSwitch_expression_arms(this);
        }
    }
}


export class Switch_expression_armContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public right_arrow(): Right_arrowContext {
        return this.getTypedRuleContext(Right_arrowContext, 0) as Right_arrowContext;
    }

    public throwable_expression(): Throwable_expressionContext {
        return this.getTypedRuleContext(Throwable_expressionContext, 0) as Throwable_expressionContext;
    }

    public case_guard(): Case_guardContext {
        return this.getTypedRuleContext(Case_guardContext, 0) as Case_guardContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_switch_expression_arm;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterSwitch_expression_arm) {
            listener.enterSwitch_expression_arm(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitSwitch_expression_arm) {
            listener.exitSwitch_expression_arm(this);
        }
    }
}


export class Range_expressionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public unary_expression_list(): Unary_expressionContext[] {
        return this.getTypedRuleContexts(Unary_expressionContext) as Unary_expressionContext[];
    }

    public unary_expression(i: number): Unary_expressionContext {
        return this.getTypedRuleContext(Unary_expressionContext, i) as Unary_expressionContext;
    }

    public OP_RANGE(): TerminalNode {
        return this.getToken(CSharpParser.OP_RANGE, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_range_expression;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterRange_expression) {
            listener.enterRange_expression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitRange_expression) {
            listener.exitRange_expression(this);
        }
    }
}


export class Unary_expressionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public cast_expression(): Cast_expressionContext {
        return this.getTypedRuleContext(Cast_expressionContext, 0) as Cast_expressionContext;
    }

    public primary_expression(): Primary_expressionContext {
        return this.getTypedRuleContext(Primary_expressionContext, 0) as Primary_expressionContext;
    }

    public PLUS(): TerminalNode {
        return this.getToken(CSharpParser.PLUS, 0);
    }

    public unary_expression(): Unary_expressionContext {
        return this.getTypedRuleContext(Unary_expressionContext, 0) as Unary_expressionContext;
    }

    public MINUS(): TerminalNode {
        return this.getToken(CSharpParser.MINUS, 0);
    }

    public BANG(): TerminalNode {
        return this.getToken(CSharpParser.BANG, 0);
    }

    public TILDE(): TerminalNode {
        return this.getToken(CSharpParser.TILDE, 0);
    }

    public OP_INC(): TerminalNode {
        return this.getToken(CSharpParser.OP_INC, 0);
    }

    public OP_DEC(): TerminalNode {
        return this.getToken(CSharpParser.OP_DEC, 0);
    }

    public AWAIT(): TerminalNode {
        return this.getToken(CSharpParser.AWAIT, 0);
    }

    public AMP(): TerminalNode {
        return this.getToken(CSharpParser.AMP, 0);
    }

    public STAR(): TerminalNode {
        return this.getToken(CSharpParser.STAR, 0);
    }

    public CARET(): TerminalNode {
        return this.getToken(CSharpParser.CARET, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_unary_expression;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterUnary_expression) {
            listener.enterUnary_expression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitUnary_expression) {
            listener.exitUnary_expression(this);
        }
    }
}


export class Cast_expressionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public type_(): Type_Context {
        return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public unary_expression(): Unary_expressionContext {
        return this.getTypedRuleContext(Unary_expressionContext, 0) as Unary_expressionContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_cast_expression;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterCast_expression) {
            listener.enterCast_expression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitCast_expression) {
            listener.exitCast_expression(this);
        }
    }
}


export class Primary_expressionContext extends ParserRuleContext {
    public _pe!: Primary_expression_startContext;

    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public primary_expression_start(): Primary_expression_startContext {
        return this.getTypedRuleContext(Primary_expression_startContext, 0) as Primary_expression_startContext;
    }

    public BANG_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.BANG);
    }

    public BANG(i: number): TerminalNode {
        return this.getToken(CSharpParser.BANG, i);
    }

    public bracket_expression_list(): Bracket_expressionContext[] {
        return this.getTypedRuleContexts(Bracket_expressionContext) as Bracket_expressionContext[];
    }

    public bracket_expression(i: number): Bracket_expressionContext {
        return this.getTypedRuleContext(Bracket_expressionContext, i) as Bracket_expressionContext;
    }

    public member_access_list(): Member_accessContext[] {
        return this.getTypedRuleContexts(Member_accessContext) as Member_accessContext[];
    }

    public member_access(i: number): Member_accessContext {
        return this.getTypedRuleContext(Member_accessContext, i) as Member_accessContext;
    }

    public method_invocation_list(): Method_invocationContext[] {
        return this.getTypedRuleContexts(Method_invocationContext) as Method_invocationContext[];
    }

    public method_invocation(i: number): Method_invocationContext {
        return this.getTypedRuleContext(Method_invocationContext, i) as Method_invocationContext;
    }

    public OP_INC_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.OP_INC);
    }

    public OP_INC(i: number): TerminalNode {
        return this.getToken(CSharpParser.OP_INC, i);
    }

    public OP_DEC_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.OP_DEC);
    }

    public OP_DEC(i: number): TerminalNode {
        return this.getToken(CSharpParser.OP_DEC, i);
    }

    public OP_PTR_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.OP_PTR);
    }

    public OP_PTR(i: number): TerminalNode {
        return this.getToken(CSharpParser.OP_PTR, i);
    }

    public identifier_list(): IdentifierContext[] {
        return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
    }

    public identifier(i: number): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_primary_expression;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterPrimary_expression) {
            listener.enterPrimary_expression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitPrimary_expression) {
            listener.exitPrimary_expression(this);
        }
    }
}


export class Primary_expression_startContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_primary_expression_start;
    }

    public copyFrom(ctx: Primary_expression_startContext): void {
        super.copyFrom(ctx);
    }
}

export class LiteralAccessExpressionContext extends Primary_expression_startContext {
    constructor(parser: CSharpParser, ctx: Primary_expression_startContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public LITERAL_ACCESS(): TerminalNode {
        return this.getToken(CSharpParser.LITERAL_ACCESS, 0);
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterLiteralAccessExpression) {
            listener.enterLiteralAccessExpression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitLiteralAccessExpression) {
            listener.exitLiteralAccessExpression(this);
        }
    }
}

export class DefaultValueExpressionContext extends Primary_expression_startContext {
    constructor(parser: CSharpParser, ctx: Primary_expression_startContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public DEFAULT(): TerminalNode {
        return this.getToken(CSharpParser.DEFAULT, 0);
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public type_(): Type_Context {
        return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterDefaultValueExpression) {
            listener.enterDefaultValueExpression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitDefaultValueExpression) {
            listener.exitDefaultValueExpression(this);
        }
    }
}

export class BaseAccessExpressionContext extends Primary_expression_startContext {
    constructor(parser: CSharpParser, ctx: Primary_expression_startContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public BASE(): TerminalNode {
        return this.getToken(CSharpParser.BASE, 0);
    }

    public DOT(): TerminalNode {
        return this.getToken(CSharpParser.DOT, 0);
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public OPEN_BRACKET(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_BRACKET, 0);
    }

    public expression_list(): Expression_listContext {
        return this.getTypedRuleContext(Expression_listContext, 0) as Expression_listContext;
    }

    public CLOSE_BRACKET(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_BRACKET, 0);
    }

    public type_argument_list(): Type_argument_listContext {
        return this.getTypedRuleContext(Type_argument_listContext, 0) as Type_argument_listContext;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterBaseAccessExpression) {
            listener.enterBaseAccessExpression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitBaseAccessExpression) {
            listener.exitBaseAccessExpression(this);
        }
    }
}

export class SizeofExpressionContext extends Primary_expression_startContext {
    constructor(parser: CSharpParser, ctx: Primary_expression_startContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public SIZEOF(): TerminalNode {
        return this.getToken(CSharpParser.SIZEOF, 0);
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public type_(): Type_Context {
        return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterSizeofExpression) {
            listener.enterSizeofExpression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitSizeofExpression) {
            listener.exitSizeofExpression(this);
        }
    }
}

export class ParenthesisExpressionsContext extends Primary_expression_startContext {
    constructor(parser: CSharpParser, ctx: Primary_expression_startContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterParenthesisExpressions) {
            listener.enterParenthesisExpressions(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitParenthesisExpressions) {
            listener.exitParenthesisExpressions(this);
        }
    }
}

export class ThisReferenceExpressionContext extends Primary_expression_startContext {
    constructor(parser: CSharpParser, ctx: Primary_expression_startContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public THIS(): TerminalNode {
        return this.getToken(CSharpParser.THIS, 0);
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterThisReferenceExpression) {
            listener.enterThisReferenceExpression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitThisReferenceExpression) {
            listener.exitThisReferenceExpression(this);
        }
    }
}

export class ObjectCreationExpressionContext extends Primary_expression_startContext {
    constructor(parser: CSharpParser, ctx: Primary_expression_startContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public NEW(): TerminalNode {
        return this.getToken(CSharpParser.NEW, 0);
    }

    public type_(): Type_Context {
        return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
    }

    public anonymous_object_initializer(): Anonymous_object_initializerContext {
        return this.getTypedRuleContext(Anonymous_object_initializerContext, 0) as Anonymous_object_initializerContext;
    }

    public rank_specifier_list(): Rank_specifierContext[] {
        return this.getTypedRuleContexts(Rank_specifierContext) as Rank_specifierContext[];
    }

    public rank_specifier(i: number): Rank_specifierContext {
        return this.getTypedRuleContext(Rank_specifierContext, i) as Rank_specifierContext;
    }

    public array_initializer(): Array_initializerContext {
        return this.getTypedRuleContext(Array_initializerContext, 0) as Array_initializerContext;
    }

    public object_creation_expression(): Object_creation_expressionContext {
        return this.getTypedRuleContext(Object_creation_expressionContext, 0) as Object_creation_expressionContext;
    }

    public object_or_collection_initializer(): Object_or_collection_initializerContext {
        return this.getTypedRuleContext(Object_or_collection_initializerContext, 0) as Object_or_collection_initializerContext;
    }

    public OPEN_BRACKET(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_BRACKET, 0);
    }

    public expression_list(): Expression_listContext {
        return this.getTypedRuleContext(Expression_listContext, 0) as Expression_listContext;
    }

    public CLOSE_BRACKET(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_BRACKET, 0);
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterObjectCreationExpression) {
            listener.enterObjectCreationExpression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitObjectCreationExpression) {
            listener.exitObjectCreationExpression(this);
        }
    }
}

export class AnonymousMethodExpressionContext extends Primary_expression_startContext {
    constructor(parser: CSharpParser, ctx: Primary_expression_startContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public DELEGATE(): TerminalNode {
        return this.getToken(CSharpParser.DELEGATE, 0);
    }

    public block(): BlockContext {
        return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
    }

    public ASYNC(): TerminalNode {
        return this.getToken(CSharpParser.ASYNC, 0);
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public explicit_anonymous_function_parameter_list(): Explicit_anonymous_function_parameter_listContext {
        return this.getTypedRuleContext(Explicit_anonymous_function_parameter_listContext, 0) as Explicit_anonymous_function_parameter_listContext;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterAnonymousMethodExpression) {
            listener.enterAnonymousMethodExpression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitAnonymousMethodExpression) {
            listener.exitAnonymousMethodExpression(this);
        }
    }
}

export class TypeofExpressionContext extends Primary_expression_startContext {
    constructor(parser: CSharpParser, ctx: Primary_expression_startContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public TYPEOF(): TerminalNode {
        return this.getToken(CSharpParser.TYPEOF, 0);
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public unbound_type_name(): Unbound_type_nameContext {
        return this.getTypedRuleContext(Unbound_type_nameContext, 0) as Unbound_type_nameContext;
    }

    public type_(): Type_Context {
        return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
    }

    public VOID(): TerminalNode {
        return this.getToken(CSharpParser.VOID, 0);
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterTypeofExpression) {
            listener.enterTypeofExpression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitTypeofExpression) {
            listener.exitTypeofExpression(this);
        }
    }
}

export class TupleExpressionContext extends Primary_expression_startContext {
    constructor(parser: CSharpParser, ctx: Primary_expression_startContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public argument_list(): ArgumentContext[] {
        return this.getTypedRuleContexts(ArgumentContext) as ArgumentContext[];
    }

    public argument(i: number): ArgumentContext {
        return this.getTypedRuleContext(ArgumentContext, i) as ArgumentContext;
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterTupleExpression) {
            listener.enterTupleExpression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitTupleExpression) {
            listener.exitTupleExpression(this);
        }
    }
}

export class UncheckedExpressionContext extends Primary_expression_startContext {
    constructor(parser: CSharpParser, ctx: Primary_expression_startContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public UNCHECKED(): TerminalNode {
        return this.getToken(CSharpParser.UNCHECKED, 0);
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterUncheckedExpression) {
            listener.enterUncheckedExpression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitUncheckedExpression) {
            listener.exitUncheckedExpression(this);
        }
    }
}

export class SimpleNameExpressionContext extends Primary_expression_startContext {
    constructor(parser: CSharpParser, ctx: Primary_expression_startContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public type_argument_list(): Type_argument_listContext {
        return this.getTypedRuleContext(Type_argument_listContext, 0) as Type_argument_listContext;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterSimpleNameExpression) {
            listener.enterSimpleNameExpression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitSimpleNameExpression) {
            listener.exitSimpleNameExpression(this);
        }
    }
}

export class MemberAccessExpressionContext extends Primary_expression_startContext {
    constructor(parser: CSharpParser, ctx: Primary_expression_startContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public predefined_type(): Predefined_typeContext {
        return this.getTypedRuleContext(Predefined_typeContext, 0) as Predefined_typeContext;
    }

    public qualified_alias_member(): Qualified_alias_memberContext {
        return this.getTypedRuleContext(Qualified_alias_memberContext, 0) as Qualified_alias_memberContext;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterMemberAccessExpression) {
            listener.enterMemberAccessExpression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitMemberAccessExpression) {
            listener.exitMemberAccessExpression(this);
        }
    }
}

export class CheckedExpressionContext extends Primary_expression_startContext {
    constructor(parser: CSharpParser, ctx: Primary_expression_startContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public CHECKED(): TerminalNode {
        return this.getToken(CSharpParser.CHECKED, 0);
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterCheckedExpression) {
            listener.enterCheckedExpression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitCheckedExpression) {
            listener.exitCheckedExpression(this);
        }
    }
}

export class LiteralExpressionContext extends Primary_expression_startContext {
    constructor(parser: CSharpParser, ctx: Primary_expression_startContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public literal(): LiteralContext {
        return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterLiteralExpression) {
            listener.enterLiteralExpression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitLiteralExpression) {
            listener.exitLiteralExpression(this);
        }
    }
}

export class NameofExpressionContext extends Primary_expression_startContext {
    constructor(parser: CSharpParser, ctx: Primary_expression_startContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public NAMEOF(): TerminalNode {
        return this.getToken(CSharpParser.NAMEOF, 0);
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public identifier_list(): IdentifierContext[] {
        return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
    }

    public identifier(i: number): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public DOT_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.DOT);
    }

    public DOT(i: number): TerminalNode {
        return this.getToken(CSharpParser.DOT, i);
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterNameofExpression) {
            listener.enterNameofExpression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitNameofExpression) {
            listener.exitNameofExpression(this);
        }
    }
}


export class Throwable_expressionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public throw_expression(): Throw_expressionContext {
        return this.getTypedRuleContext(Throw_expressionContext, 0) as Throw_expressionContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_throwable_expression;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterThrowable_expression) {
            listener.enterThrowable_expression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitThrowable_expression) {
            listener.exitThrowable_expression(this);
        }
    }
}


export class Throw_expressionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public THROW(): TerminalNode {
        return this.getToken(CSharpParser.THROW, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_throw_expression;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterThrow_expression) {
            listener.enterThrow_expression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitThrow_expression) {
            listener.exitThrow_expression(this);
        }
    }
}


export class Member_accessContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public DOT(): TerminalNode {
        return this.getToken(CSharpParser.DOT, 0);
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public INTERR(): TerminalNode {
        return this.getToken(CSharpParser.INTERR, 0);
    }

    public type_argument_list(): Type_argument_listContext {
        return this.getTypedRuleContext(Type_argument_listContext, 0) as Type_argument_listContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_member_access;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterMember_access) {
            listener.enterMember_access(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitMember_access) {
            listener.exitMember_access(this);
        }
    }
}


export class Bracket_expressionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public OPEN_BRACKET(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_BRACKET, 0);
    }

    public indexer_argument_list(): Indexer_argumentContext[] {
        return this.getTypedRuleContexts(Indexer_argumentContext) as Indexer_argumentContext[];
    }

    public indexer_argument(i: number): Indexer_argumentContext {
        return this.getTypedRuleContext(Indexer_argumentContext, i) as Indexer_argumentContext;
    }

    public CLOSE_BRACKET(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_BRACKET, 0);
    }

    public INTERR(): TerminalNode {
        return this.getToken(CSharpParser.INTERR, 0);
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_bracket_expression;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterBracket_expression) {
            listener.enterBracket_expression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitBracket_expression) {
            listener.exitBracket_expression(this);
        }
    }
}


export class Indexer_argumentContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public COLON(): TerminalNode {
        return this.getToken(CSharpParser.COLON, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_indexer_argument;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterIndexer_argument) {
            listener.enterIndexer_argument(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitIndexer_argument) {
            listener.exitIndexer_argument(this);
        }
    }
}


export class Predefined_typeContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public BOOL(): TerminalNode {
        return this.getToken(CSharpParser.BOOL, 0);
    }

    public BYTE(): TerminalNode {
        return this.getToken(CSharpParser.BYTE, 0);
    }

    public CHAR(): TerminalNode {
        return this.getToken(CSharpParser.CHAR, 0);
    }

    public DECIMAL(): TerminalNode {
        return this.getToken(CSharpParser.DECIMAL, 0);
    }

    public DOUBLE(): TerminalNode {
        return this.getToken(CSharpParser.DOUBLE, 0);
    }

    public FLOAT(): TerminalNode {
        return this.getToken(CSharpParser.FLOAT, 0);
    }

    public INT(): TerminalNode {
        return this.getToken(CSharpParser.INT, 0);
    }

    public LONG(): TerminalNode {
        return this.getToken(CSharpParser.LONG, 0);
    }

    public OBJECT(): TerminalNode {
        return this.getToken(CSharpParser.OBJECT, 0);
    }

    public SBYTE(): TerminalNode {
        return this.getToken(CSharpParser.SBYTE, 0);
    }

    public SHORT(): TerminalNode {
        return this.getToken(CSharpParser.SHORT, 0);
    }

    public STRING(): TerminalNode {
        return this.getToken(CSharpParser.STRING, 0);
    }

    public UINT(): TerminalNode {
        return this.getToken(CSharpParser.UINT, 0);
    }

    public ULONG(): TerminalNode {
        return this.getToken(CSharpParser.ULONG, 0);
    }

    public USHORT(): TerminalNode {
        return this.getToken(CSharpParser.USHORT, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_predefined_type;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterPredefined_type) {
            listener.enterPredefined_type(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitPredefined_type) {
            listener.exitPredefined_type(this);
        }
    }
}


export class Expression_listContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public expression_list(): ExpressionContext[] {
        return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
    }

    public expression(i: number): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_expression_list;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterExpression_list) {
            listener.enterExpression_list(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitExpression_list) {
            listener.exitExpression_list(this);
        }
    }
}


export class Object_or_collection_initializerContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public object_initializer(): Object_initializerContext {
        return this.getTypedRuleContext(Object_initializerContext, 0) as Object_initializerContext;
    }

    public collection_initializer(): Collection_initializerContext {
        return this.getTypedRuleContext(Collection_initializerContext, 0) as Collection_initializerContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_object_or_collection_initializer;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterObject_or_collection_initializer) {
            listener.enterObject_or_collection_initializer(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitObject_or_collection_initializer) {
            listener.exitObject_or_collection_initializer(this);
        }
    }
}


export class Object_initializerContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public OPEN_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_BRACE, 0);
    }

    public CLOSE_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_BRACE, 0);
    }

    public member_initializer_list(): Member_initializer_listContext {
        return this.getTypedRuleContext(Member_initializer_listContext, 0) as Member_initializer_listContext;
    }

    public COMMA(): TerminalNode {
        return this.getToken(CSharpParser.COMMA, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_object_initializer;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterObject_initializer) {
            listener.enterObject_initializer(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitObject_initializer) {
            listener.exitObject_initializer(this);
        }
    }
}


export class Member_initializer_listContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public member_initializer_list(): Member_initializerContext[] {
        return this.getTypedRuleContexts(Member_initializerContext) as Member_initializerContext[];
    }

    public member_initializer(i: number): Member_initializerContext {
        return this.getTypedRuleContext(Member_initializerContext, i) as Member_initializerContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_member_initializer_list;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterMember_initializer_list) {
            listener.enterMember_initializer_list(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitMember_initializer_list) {
            listener.exitMember_initializer_list(this);
        }
    }
}


export class Member_initializerContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public ASSIGNMENT(): TerminalNode {
        return this.getToken(CSharpParser.ASSIGNMENT, 0);
    }

    public initializer_value(): Initializer_valueContext {
        return this.getTypedRuleContext(Initializer_valueContext, 0) as Initializer_valueContext;
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public OPEN_BRACKET(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_BRACKET, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public CLOSE_BRACKET(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_BRACKET, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_member_initializer;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterMember_initializer) {
            listener.enterMember_initializer(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitMember_initializer) {
            listener.exitMember_initializer(this);
        }
    }
}


export class Initializer_valueContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public object_or_collection_initializer(): Object_or_collection_initializerContext {
        return this.getTypedRuleContext(Object_or_collection_initializerContext, 0) as Object_or_collection_initializerContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_initializer_value;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterInitializer_value) {
            listener.enterInitializer_value(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitInitializer_value) {
            listener.exitInitializer_value(this);
        }
    }
}


export class Collection_initializerContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public OPEN_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_BRACE, 0);
    }

    public element_initializer_list(): Element_initializerContext[] {
        return this.getTypedRuleContexts(Element_initializerContext) as Element_initializerContext[];
    }

    public element_initializer(i: number): Element_initializerContext {
        return this.getTypedRuleContext(Element_initializerContext, i) as Element_initializerContext;
    }

    public CLOSE_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_BRACE, 0);
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_collection_initializer;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterCollection_initializer) {
            listener.enterCollection_initializer(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitCollection_initializer) {
            listener.exitCollection_initializer(this);
        }
    }
}


export class Element_initializerContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public non_assignment_expression(): Non_assignment_expressionContext {
        return this.getTypedRuleContext(Non_assignment_expressionContext, 0) as Non_assignment_expressionContext;
    }

    public OPEN_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_BRACE, 0);
    }

    public expression_list(): Expression_listContext {
        return this.getTypedRuleContext(Expression_listContext, 0) as Expression_listContext;
    }

    public CLOSE_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_BRACE, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_element_initializer;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterElement_initializer) {
            listener.enterElement_initializer(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitElement_initializer) {
            listener.exitElement_initializer(this);
        }
    }
}


export class Anonymous_object_initializerContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public OPEN_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_BRACE, 0);
    }

    public CLOSE_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_BRACE, 0);
    }

    public member_declarator_list(): Member_declarator_listContext {
        return this.getTypedRuleContext(Member_declarator_listContext, 0) as Member_declarator_listContext;
    }

    public COMMA(): TerminalNode {
        return this.getToken(CSharpParser.COMMA, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_anonymous_object_initializer;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterAnonymous_object_initializer) {
            listener.enterAnonymous_object_initializer(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitAnonymous_object_initializer) {
            listener.exitAnonymous_object_initializer(this);
        }
    }
}


export class Member_declarator_listContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public member_declarator_list(): Member_declaratorContext[] {
        return this.getTypedRuleContexts(Member_declaratorContext) as Member_declaratorContext[];
    }

    public member_declarator(i: number): Member_declaratorContext {
        return this.getTypedRuleContext(Member_declaratorContext, i) as Member_declaratorContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_member_declarator_list;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterMember_declarator_list) {
            listener.enterMember_declarator_list(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitMember_declarator_list) {
            listener.exitMember_declarator_list(this);
        }
    }
}


export class Member_declaratorContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public primary_expression(): Primary_expressionContext {
        return this.getTypedRuleContext(Primary_expressionContext, 0) as Primary_expressionContext;
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public ASSIGNMENT(): TerminalNode {
        return this.getToken(CSharpParser.ASSIGNMENT, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_member_declarator;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterMember_declarator) {
            listener.enterMember_declarator(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitMember_declarator) {
            listener.exitMember_declarator(this);
        }
    }
}


export class Unbound_type_nameContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public identifier_list(): IdentifierContext[] {
        return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
    }

    public identifier(i: number): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
    }

    public DOUBLE_COLON(): TerminalNode {
        return this.getToken(CSharpParser.DOUBLE_COLON, 0);
    }

    public DOT_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.DOT);
    }

    public DOT(i: number): TerminalNode {
        return this.getToken(CSharpParser.DOT, i);
    }

    public generic_dimension_specifier_list(): Generic_dimension_specifierContext[] {
        return this.getTypedRuleContexts(Generic_dimension_specifierContext) as Generic_dimension_specifierContext[];
    }

    public generic_dimension_specifier(i: number): Generic_dimension_specifierContext {
        return this.getTypedRuleContext(Generic_dimension_specifierContext, i) as Generic_dimension_specifierContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_unbound_type_name;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterUnbound_type_name) {
            listener.enterUnbound_type_name(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitUnbound_type_name) {
            listener.exitUnbound_type_name(this);
        }
    }
}


export class Generic_dimension_specifierContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public LT(): TerminalNode {
        return this.getToken(CSharpParser.LT, 0);
    }

    public GT(): TerminalNode {
        return this.getToken(CSharpParser.GT, 0);
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_generic_dimension_specifier;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterGeneric_dimension_specifier) {
            listener.enterGeneric_dimension_specifier(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitGeneric_dimension_specifier) {
            listener.exitGeneric_dimension_specifier(this);
        }
    }
}


export class IsTypeContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public base_type(): Base_typeContext {
        return this.getTypedRuleContext(Base_typeContext, 0) as Base_typeContext;
    }

    public rank_specifier_list(): Rank_specifierContext[] {
        return this.getTypedRuleContexts(Rank_specifierContext) as Rank_specifierContext[];
    }

    public rank_specifier(i: number): Rank_specifierContext {
        return this.getTypedRuleContext(Rank_specifierContext, i) as Rank_specifierContext;
    }

    public STAR_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.STAR);
    }

    public STAR(i: number): TerminalNode {
        return this.getToken(CSharpParser.STAR, i);
    }

    public INTERR(): TerminalNode {
        return this.getToken(CSharpParser.INTERR, 0);
    }

    public isTypePatternArms(): IsTypePatternArmsContext {
        return this.getTypedRuleContext(IsTypePatternArmsContext, 0) as IsTypePatternArmsContext;
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_isType;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterIsType) {
            listener.enterIsType(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitIsType) {
            listener.exitIsType(this);
        }
    }
}


export class IsTypePatternArmsContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public OPEN_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_BRACE, 0);
    }

    public isTypePatternArm_list(): IsTypePatternArmContext[] {
        return this.getTypedRuleContexts(IsTypePatternArmContext) as IsTypePatternArmContext[];
    }

    public isTypePatternArm(i: number): IsTypePatternArmContext {
        return this.getTypedRuleContext(IsTypePatternArmContext, i) as IsTypePatternArmContext;
    }

    public CLOSE_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_BRACE, 0);
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_isTypePatternArms;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterIsTypePatternArms) {
            listener.enterIsTypePatternArms(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitIsTypePatternArms) {
            listener.exitIsTypePatternArms(this);
        }
    }
}


export class IsTypePatternArmContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public COLON(): TerminalNode {
        return this.getToken(CSharpParser.COLON, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_isTypePatternArm;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterIsTypePatternArm) {
            listener.enterIsTypePatternArm(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitIsTypePatternArm) {
            listener.exitIsTypePatternArm(this);
        }
    }
}


export class Lambda_expressionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public anonymous_function_signature(): Anonymous_function_signatureContext {
        return this.getTypedRuleContext(Anonymous_function_signatureContext, 0) as Anonymous_function_signatureContext;
    }

    public right_arrow(): Right_arrowContext {
        return this.getTypedRuleContext(Right_arrowContext, 0) as Right_arrowContext;
    }

    public anonymous_function_body(): Anonymous_function_bodyContext {
        return this.getTypedRuleContext(Anonymous_function_bodyContext, 0) as Anonymous_function_bodyContext;
    }

    public ASYNC(): TerminalNode {
        return this.getToken(CSharpParser.ASYNC, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_lambda_expression;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterLambda_expression) {
            listener.enterLambda_expression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitLambda_expression) {
            listener.exitLambda_expression(this);
        }
    }
}


export class Anonymous_function_signatureContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public explicit_anonymous_function_parameter_list(): Explicit_anonymous_function_parameter_listContext {
        return this.getTypedRuleContext(Explicit_anonymous_function_parameter_listContext, 0) as Explicit_anonymous_function_parameter_listContext;
    }

    public implicit_anonymous_function_parameter_list(): Implicit_anonymous_function_parameter_listContext {
        return this.getTypedRuleContext(Implicit_anonymous_function_parameter_listContext, 0) as Implicit_anonymous_function_parameter_listContext;
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_anonymous_function_signature;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterAnonymous_function_signature) {
            listener.enterAnonymous_function_signature(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitAnonymous_function_signature) {
            listener.exitAnonymous_function_signature(this);
        }
    }
}


export class Explicit_anonymous_function_parameter_listContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public explicit_anonymous_function_parameter_list(): Explicit_anonymous_function_parameterContext[] {
        return this.getTypedRuleContexts(Explicit_anonymous_function_parameterContext) as Explicit_anonymous_function_parameterContext[];
    }

    public explicit_anonymous_function_parameter(i: number): Explicit_anonymous_function_parameterContext {
        return this.getTypedRuleContext(Explicit_anonymous_function_parameterContext, i) as Explicit_anonymous_function_parameterContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_explicit_anonymous_function_parameter_list;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterExplicit_anonymous_function_parameter_list) {
            listener.enterExplicit_anonymous_function_parameter_list(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitExplicit_anonymous_function_parameter_list) {
            listener.exitExplicit_anonymous_function_parameter_list(this);
        }
    }
}


export class Explicit_anonymous_function_parameterContext extends ParserRuleContext {
    public _refout!: Token;

    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public type_(): Type_Context {
        return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public REF(): TerminalNode {
        return this.getToken(CSharpParser.REF, 0);
    }

    public OUT(): TerminalNode {
        return this.getToken(CSharpParser.OUT, 0);
    }

    public IN(): TerminalNode {
        return this.getToken(CSharpParser.IN, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_explicit_anonymous_function_parameter;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterExplicit_anonymous_function_parameter) {
            listener.enterExplicit_anonymous_function_parameter(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitExplicit_anonymous_function_parameter) {
            listener.exitExplicit_anonymous_function_parameter(this);
        }
    }
}


export class Implicit_anonymous_function_parameter_listContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public identifier_list(): IdentifierContext[] {
        return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
    }

    public identifier(i: number): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_implicit_anonymous_function_parameter_list;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterImplicit_anonymous_function_parameter_list) {
            listener.enterImplicit_anonymous_function_parameter_list(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitImplicit_anonymous_function_parameter_list) {
            listener.exitImplicit_anonymous_function_parameter_list(this);
        }
    }
}


export class Anonymous_function_bodyContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public throwable_expression(): Throwable_expressionContext {
        return this.getTypedRuleContext(Throwable_expressionContext, 0) as Throwable_expressionContext;
    }

    public block(): BlockContext {
        return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_anonymous_function_body;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterAnonymous_function_body) {
            listener.enterAnonymous_function_body(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitAnonymous_function_body) {
            listener.exitAnonymous_function_body(this);
        }
    }
}


export class Query_expressionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public from_clause(): From_clauseContext {
        return this.getTypedRuleContext(From_clauseContext, 0) as From_clauseContext;
    }

    public query_body(): Query_bodyContext {
        return this.getTypedRuleContext(Query_bodyContext, 0) as Query_bodyContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_query_expression;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterQuery_expression) {
            listener.enterQuery_expression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitQuery_expression) {
            listener.exitQuery_expression(this);
        }
    }
}


export class From_clauseContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public FROM(): TerminalNode {
        return this.getToken(CSharpParser.FROM, 0);
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public IN(): TerminalNode {
        return this.getToken(CSharpParser.IN, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public type_(): Type_Context {
        return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_from_clause;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterFrom_clause) {
            listener.enterFrom_clause(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitFrom_clause) {
            listener.exitFrom_clause(this);
        }
    }
}


export class Query_bodyContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public select_or_group_clause(): Select_or_group_clauseContext {
        return this.getTypedRuleContext(Select_or_group_clauseContext, 0) as Select_or_group_clauseContext;
    }

    public query_body_clause_list(): Query_body_clauseContext[] {
        return this.getTypedRuleContexts(Query_body_clauseContext) as Query_body_clauseContext[];
    }

    public query_body_clause(i: number): Query_body_clauseContext {
        return this.getTypedRuleContext(Query_body_clauseContext, i) as Query_body_clauseContext;
    }

    public query_continuation(): Query_continuationContext {
        return this.getTypedRuleContext(Query_continuationContext, 0) as Query_continuationContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_query_body;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterQuery_body) {
            listener.enterQuery_body(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitQuery_body) {
            listener.exitQuery_body(this);
        }
    }
}


export class Query_body_clauseContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public from_clause(): From_clauseContext {
        return this.getTypedRuleContext(From_clauseContext, 0) as From_clauseContext;
    }

    public let_clause(): Let_clauseContext {
        return this.getTypedRuleContext(Let_clauseContext, 0) as Let_clauseContext;
    }

    public where_clause(): Where_clauseContext {
        return this.getTypedRuleContext(Where_clauseContext, 0) as Where_clauseContext;
    }

    public combined_join_clause(): Combined_join_clauseContext {
        return this.getTypedRuleContext(Combined_join_clauseContext, 0) as Combined_join_clauseContext;
    }

    public orderby_clause(): Orderby_clauseContext {
        return this.getTypedRuleContext(Orderby_clauseContext, 0) as Orderby_clauseContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_query_body_clause;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterQuery_body_clause) {
            listener.enterQuery_body_clause(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitQuery_body_clause) {
            listener.exitQuery_body_clause(this);
        }
    }
}


export class Let_clauseContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public LET(): TerminalNode {
        return this.getToken(CSharpParser.LET, 0);
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public ASSIGNMENT(): TerminalNode {
        return this.getToken(CSharpParser.ASSIGNMENT, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_let_clause;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterLet_clause) {
            listener.enterLet_clause(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitLet_clause) {
            listener.exitLet_clause(this);
        }
    }
}


export class Where_clauseContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public WHERE(): TerminalNode {
        return this.getToken(CSharpParser.WHERE, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_where_clause;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterWhere_clause) {
            listener.enterWhere_clause(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitWhere_clause) {
            listener.exitWhere_clause(this);
        }
    }
}


export class Combined_join_clauseContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public JOIN(): TerminalNode {
        return this.getToken(CSharpParser.JOIN, 0);
    }

    public identifier_list(): IdentifierContext[] {
        return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
    }

    public identifier(i: number): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
    }

    public IN(): TerminalNode {
        return this.getToken(CSharpParser.IN, 0);
    }

    public expression_list(): ExpressionContext[] {
        return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
    }

    public expression(i: number): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
    }

    public ON(): TerminalNode {
        return this.getToken(CSharpParser.ON, 0);
    }

    public EQUALS(): TerminalNode {
        return this.getToken(CSharpParser.EQUALS, 0);
    }

    public type_(): Type_Context {
        return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
    }

    public INTO(): TerminalNode {
        return this.getToken(CSharpParser.INTO, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_combined_join_clause;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterCombined_join_clause) {
            listener.enterCombined_join_clause(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitCombined_join_clause) {
            listener.exitCombined_join_clause(this);
        }
    }
}


export class Orderby_clauseContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public ORDERBY(): TerminalNode {
        return this.getToken(CSharpParser.ORDERBY, 0);
    }

    public ordering_list(): OrderingContext[] {
        return this.getTypedRuleContexts(OrderingContext) as OrderingContext[];
    }

    public ordering(i: number): OrderingContext {
        return this.getTypedRuleContext(OrderingContext, i) as OrderingContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_orderby_clause;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterOrderby_clause) {
            listener.enterOrderby_clause(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitOrderby_clause) {
            listener.exitOrderby_clause(this);
        }
    }
}


export class OrderingContext extends ParserRuleContext {
    public _dir!: Token;

    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public ASCENDING(): TerminalNode {
        return this.getToken(CSharpParser.ASCENDING, 0);
    }

    public DESCENDING(): TerminalNode {
        return this.getToken(CSharpParser.DESCENDING, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_ordering;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterOrdering) {
            listener.enterOrdering(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitOrdering) {
            listener.exitOrdering(this);
        }
    }
}


export class Select_or_group_clauseContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public SELECT(): TerminalNode {
        return this.getToken(CSharpParser.SELECT, 0);
    }

    public expression_list(): ExpressionContext[] {
        return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
    }

    public expression(i: number): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
    }

    public GROUP(): TerminalNode {
        return this.getToken(CSharpParser.GROUP, 0);
    }

    public BY(): TerminalNode {
        return this.getToken(CSharpParser.BY, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_select_or_group_clause;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterSelect_or_group_clause) {
            listener.enterSelect_or_group_clause(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitSelect_or_group_clause) {
            listener.exitSelect_or_group_clause(this);
        }
    }
}


export class Query_continuationContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public INTO(): TerminalNode {
        return this.getToken(CSharpParser.INTO, 0);
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public query_body(): Query_bodyContext {
        return this.getTypedRuleContext(Query_bodyContext, 0) as Query_bodyContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_query_continuation;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterQuery_continuation) {
            listener.enterQuery_continuation(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitQuery_continuation) {
            listener.exitQuery_continuation(this);
        }
    }
}


export class StatementContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public labeled_Statement(): Labeled_StatementContext {
        return this.getTypedRuleContext(Labeled_StatementContext, 0) as Labeled_StatementContext;
    }

    public declarationStatement(): DeclarationStatementContext {
        return this.getTypedRuleContext(DeclarationStatementContext, 0) as DeclarationStatementContext;
    }

    public embedded_statement(): Embedded_statementContext {
        return this.getTypedRuleContext(Embedded_statementContext, 0) as Embedded_statementContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_statement;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    }
}


export class DeclarationStatementContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public local_variable_declaration(): Local_variable_declarationContext {
        return this.getTypedRuleContext(Local_variable_declarationContext, 0) as Local_variable_declarationContext;
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public local_constant_declaration(): Local_constant_declarationContext {
        return this.getTypedRuleContext(Local_constant_declarationContext, 0) as Local_constant_declarationContext;
    }

    public local_function_declaration(): Local_function_declarationContext {
        return this.getTypedRuleContext(Local_function_declarationContext, 0) as Local_function_declarationContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_declarationStatement;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterDeclarationStatement) {
            listener.enterDeclarationStatement(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitDeclarationStatement) {
            listener.exitDeclarationStatement(this);
        }
    }
}


export class Local_function_declarationContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public local_function_header(): Local_function_headerContext {
        return this.getTypedRuleContext(Local_function_headerContext, 0) as Local_function_headerContext;
    }

    public local_function_body(): Local_function_bodyContext {
        return this.getTypedRuleContext(Local_function_bodyContext, 0) as Local_function_bodyContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_local_function_declaration;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterLocal_function_declaration) {
            listener.enterLocal_function_declaration(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitLocal_function_declaration) {
            listener.exitLocal_function_declaration(this);
        }
    }
}


export class Local_function_headerContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public return_type(): Return_typeContext {
        return this.getTypedRuleContext(Return_typeContext, 0) as Return_typeContext;
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public local_function_modifiers(): Local_function_modifiersContext {
        return this.getTypedRuleContext(Local_function_modifiersContext, 0) as Local_function_modifiersContext;
    }

    public type_parameter_list(): Type_parameter_listContext {
        return this.getTypedRuleContext(Type_parameter_listContext, 0) as Type_parameter_listContext;
    }

    public formal_parameter_list(): Formal_parameter_listContext {
        return this.getTypedRuleContext(Formal_parameter_listContext, 0) as Formal_parameter_listContext;
    }

    public type_parameter_constraints_clauses(): Type_parameter_constraints_clausesContext {
        return this.getTypedRuleContext(Type_parameter_constraints_clausesContext, 0) as Type_parameter_constraints_clausesContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_local_function_header;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterLocal_function_header) {
            listener.enterLocal_function_header(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitLocal_function_header) {
            listener.exitLocal_function_header(this);
        }
    }
}


export class Local_function_modifiersContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public ASYNC(): TerminalNode {
        return this.getToken(CSharpParser.ASYNC, 0);
    }

    public UNSAFE(): TerminalNode {
        return this.getToken(CSharpParser.UNSAFE, 0);
    }

    public STATIC(): TerminalNode {
        return this.getToken(CSharpParser.STATIC, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_local_function_modifiers;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterLocal_function_modifiers) {
            listener.enterLocal_function_modifiers(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitLocal_function_modifiers) {
            listener.exitLocal_function_modifiers(this);
        }
    }
}


export class Local_function_bodyContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public block(): BlockContext {
        return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
    }

    public right_arrow(): Right_arrowContext {
        return this.getTypedRuleContext(Right_arrowContext, 0) as Right_arrowContext;
    }

    public throwable_expression(): Throwable_expressionContext {
        return this.getTypedRuleContext(Throwable_expressionContext, 0) as Throwable_expressionContext;
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_local_function_body;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterLocal_function_body) {
            listener.enterLocal_function_body(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitLocal_function_body) {
            listener.exitLocal_function_body(this);
        }
    }
}


export class Labeled_StatementContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public COLON(): TerminalNode {
        return this.getToken(CSharpParser.COLON, 0);
    }

    public statement(): StatementContext {
        return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_labeled_Statement;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterLabeled_Statement) {
            listener.enterLabeled_Statement(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitLabeled_Statement) {
            listener.exitLabeled_Statement(this);
        }
    }
}


export class Embedded_statementContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public block(): BlockContext {
        return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
    }

    public simple_embedded_statement(): Simple_embedded_statementContext {
        return this.getTypedRuleContext(Simple_embedded_statementContext, 0) as Simple_embedded_statementContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_embedded_statement;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterEmbedded_statement) {
            listener.enterEmbedded_statement(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitEmbedded_statement) {
            listener.exitEmbedded_statement(this);
        }
    }
}


export class Simple_embedded_statementContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_simple_embedded_statement;
    }

    public copyFrom(ctx: Simple_embedded_statementContext): void {
        super.copyFrom(ctx);
    }
}

export class TryStatementContext extends Simple_embedded_statementContext {
    constructor(parser: CSharpParser, ctx: Simple_embedded_statementContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public TRY(): TerminalNode {
        return this.getToken(CSharpParser.TRY, 0);
    }

    public block(): BlockContext {
        return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
    }

    public catch_clauses(): Catch_clausesContext {
        return this.getTypedRuleContext(Catch_clausesContext, 0) as Catch_clausesContext;
    }

    public finally_clause(): Finally_clauseContext {
        return this.getTypedRuleContext(Finally_clauseContext, 0) as Finally_clauseContext;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterTryStatement) {
            listener.enterTryStatement(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitTryStatement) {
            listener.exitTryStatement(this);
        }
    }
}

export class CheckedStatementContext extends Simple_embedded_statementContext {
    constructor(parser: CSharpParser, ctx: Simple_embedded_statementContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public CHECKED(): TerminalNode {
        return this.getToken(CSharpParser.CHECKED, 0);
    }

    public block(): BlockContext {
        return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterCheckedStatement) {
            listener.enterCheckedStatement(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitCheckedStatement) {
            listener.exitCheckedStatement(this);
        }
    }
}

export class ThrowStatementContext extends Simple_embedded_statementContext {
    constructor(parser: CSharpParser, ctx: Simple_embedded_statementContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public THROW(): TerminalNode {
        return this.getToken(CSharpParser.THROW, 0);
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterThrowStatement) {
            listener.enterThrowStatement(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitThrowStatement) {
            listener.exitThrowStatement(this);
        }
    }
}

export class TheEmptyStatementContext extends Simple_embedded_statementContext {
    constructor(parser: CSharpParser, ctx: Simple_embedded_statementContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterTheEmptyStatement) {
            listener.enterTheEmptyStatement(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitTheEmptyStatement) {
            listener.exitTheEmptyStatement(this);
        }
    }
}

export class UnsafeStatementContext extends Simple_embedded_statementContext {
    constructor(parser: CSharpParser, ctx: Simple_embedded_statementContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public UNSAFE(): TerminalNode {
        return this.getToken(CSharpParser.UNSAFE, 0);
    }

    public block(): BlockContext {
        return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterUnsafeStatement) {
            listener.enterUnsafeStatement(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitUnsafeStatement) {
            listener.exitUnsafeStatement(this);
        }
    }
}

export class ForStatementContext extends Simple_embedded_statementContext {
    constructor(parser: CSharpParser, ctx: Simple_embedded_statementContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public FOR(): TerminalNode {
        return this.getToken(CSharpParser.FOR, 0);
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public SEMICOLON_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.SEMICOLON);
    }

    public SEMICOLON(i: number): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, i);
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public embedded_statement(): Embedded_statementContext {
        return this.getTypedRuleContext(Embedded_statementContext, 0) as Embedded_statementContext;
    }

    public for_initializer(): For_initializerContext {
        return this.getTypedRuleContext(For_initializerContext, 0) as For_initializerContext;
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public for_iterator(): For_iteratorContext {
        return this.getTypedRuleContext(For_iteratorContext, 0) as For_iteratorContext;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterForStatement) {
            listener.enterForStatement(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitForStatement) {
            listener.exitForStatement(this);
        }
    }
}

export class BreakStatementContext extends Simple_embedded_statementContext {
    constructor(parser: CSharpParser, ctx: Simple_embedded_statementContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public BREAK(): TerminalNode {
        return this.getToken(CSharpParser.BREAK, 0);
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterBreakStatement) {
            listener.enterBreakStatement(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitBreakStatement) {
            listener.exitBreakStatement(this);
        }
    }
}

export class IfStatementContext extends Simple_embedded_statementContext {
    constructor(parser: CSharpParser, ctx: Simple_embedded_statementContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public IF(): TerminalNode {
        return this.getToken(CSharpParser.IF, 0);
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public if_body_list(): If_bodyContext[] {
        return this.getTypedRuleContexts(If_bodyContext) as If_bodyContext[];
    }

    public if_body(i: number): If_bodyContext {
        return this.getTypedRuleContext(If_bodyContext, i) as If_bodyContext;
    }

    public ELSE(): TerminalNode {
        return this.getToken(CSharpParser.ELSE, 0);
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterIfStatement) {
            listener.enterIfStatement(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitIfStatement) {
            listener.exitIfStatement(this);
        }
    }
}

export class ReturnStatementContext extends Simple_embedded_statementContext {
    constructor(parser: CSharpParser, ctx: Simple_embedded_statementContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public RETURN(): TerminalNode {
        return this.getToken(CSharpParser.RETURN, 0);
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterReturnStatement) {
            listener.enterReturnStatement(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitReturnStatement) {
            listener.exitReturnStatement(this);
        }
    }
}

export class GotoStatementContext extends Simple_embedded_statementContext {
    constructor(parser: CSharpParser, ctx: Simple_embedded_statementContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public GOTO(): TerminalNode {
        return this.getToken(CSharpParser.GOTO, 0);
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public CASE(): TerminalNode {
        return this.getToken(CSharpParser.CASE, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public DEFAULT(): TerminalNode {
        return this.getToken(CSharpParser.DEFAULT, 0);
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterGotoStatement) {
            listener.enterGotoStatement(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitGotoStatement) {
            listener.exitGotoStatement(this);
        }
    }
}

export class SwitchStatementContext extends Simple_embedded_statementContext {
    constructor(parser: CSharpParser, ctx: Simple_embedded_statementContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public SWITCH(): TerminalNode {
        return this.getToken(CSharpParser.SWITCH, 0);
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public OPEN_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_BRACE, 0);
    }

    public CLOSE_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_BRACE, 0);
    }

    public switch_section_list(): Switch_sectionContext[] {
        return this.getTypedRuleContexts(Switch_sectionContext) as Switch_sectionContext[];
    }

    public switch_section(i: number): Switch_sectionContext {
        return this.getTypedRuleContext(Switch_sectionContext, i) as Switch_sectionContext;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterSwitchStatement) {
            listener.enterSwitchStatement(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitSwitchStatement) {
            listener.exitSwitchStatement(this);
        }
    }
}

export class FixedStatementContext extends Simple_embedded_statementContext {
    constructor(parser: CSharpParser, ctx: Simple_embedded_statementContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public FIXED(): TerminalNode {
        return this.getToken(CSharpParser.FIXED, 0);
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public pointer_type(): Pointer_typeContext {
        return this.getTypedRuleContext(Pointer_typeContext, 0) as Pointer_typeContext;
    }

    public fixed_pointer_declarators(): Fixed_pointer_declaratorsContext {
        return this.getTypedRuleContext(Fixed_pointer_declaratorsContext, 0) as Fixed_pointer_declaratorsContext;
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public embedded_statement(): Embedded_statementContext {
        return this.getTypedRuleContext(Embedded_statementContext, 0) as Embedded_statementContext;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterFixedStatement) {
            listener.enterFixedStatement(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitFixedStatement) {
            listener.exitFixedStatement(this);
        }
    }
}

export class WhileStatementContext extends Simple_embedded_statementContext {
    constructor(parser: CSharpParser, ctx: Simple_embedded_statementContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public WHILE(): TerminalNode {
        return this.getToken(CSharpParser.WHILE, 0);
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public embedded_statement(): Embedded_statementContext {
        return this.getTypedRuleContext(Embedded_statementContext, 0) as Embedded_statementContext;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterWhileStatement) {
            listener.enterWhileStatement(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitWhileStatement) {
            listener.exitWhileStatement(this);
        }
    }
}

export class DoStatementContext extends Simple_embedded_statementContext {
    constructor(parser: CSharpParser, ctx: Simple_embedded_statementContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public DO(): TerminalNode {
        return this.getToken(CSharpParser.DO, 0);
    }

    public embedded_statement(): Embedded_statementContext {
        return this.getTypedRuleContext(Embedded_statementContext, 0) as Embedded_statementContext;
    }

    public WHILE(): TerminalNode {
        return this.getToken(CSharpParser.WHILE, 0);
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterDoStatement) {
            listener.enterDoStatement(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitDoStatement) {
            listener.exitDoStatement(this);
        }
    }
}

export class ForeachStatementContext extends Simple_embedded_statementContext {
    constructor(parser: CSharpParser, ctx: Simple_embedded_statementContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public FOREACH(): TerminalNode {
        return this.getToken(CSharpParser.FOREACH, 0);
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public local_variable_type(): Local_variable_typeContext {
        return this.getTypedRuleContext(Local_variable_typeContext, 0) as Local_variable_typeContext;
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public IN(): TerminalNode {
        return this.getToken(CSharpParser.IN, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public embedded_statement(): Embedded_statementContext {
        return this.getTypedRuleContext(Embedded_statementContext, 0) as Embedded_statementContext;
    }

    public AWAIT(): TerminalNode {
        return this.getToken(CSharpParser.AWAIT, 0);
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterForeachStatement) {
            listener.enterForeachStatement(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitForeachStatement) {
            listener.exitForeachStatement(this);
        }
    }
}

export class UncheckedStatementContext extends Simple_embedded_statementContext {
    constructor(parser: CSharpParser, ctx: Simple_embedded_statementContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public UNCHECKED(): TerminalNode {
        return this.getToken(CSharpParser.UNCHECKED, 0);
    }

    public block(): BlockContext {
        return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterUncheckedStatement) {
            listener.enterUncheckedStatement(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitUncheckedStatement) {
            listener.exitUncheckedStatement(this);
        }
    }
}

export class ExpressionStatementContext extends Simple_embedded_statementContext {
    constructor(parser: CSharpParser, ctx: Simple_embedded_statementContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterExpressionStatement) {
            listener.enterExpressionStatement(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitExpressionStatement) {
            listener.exitExpressionStatement(this);
        }
    }
}

export class ContinueStatementContext extends Simple_embedded_statementContext {
    constructor(parser: CSharpParser, ctx: Simple_embedded_statementContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public CONTINUE(): TerminalNode {
        return this.getToken(CSharpParser.CONTINUE, 0);
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterContinueStatement) {
            listener.enterContinueStatement(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitContinueStatement) {
            listener.exitContinueStatement(this);
        }
    }
}

export class UsingStatementContext extends Simple_embedded_statementContext {
    constructor(parser: CSharpParser, ctx: Simple_embedded_statementContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public USING(): TerminalNode {
        return this.getToken(CSharpParser.USING, 0);
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public resource_acquisition(): Resource_acquisitionContext {
        return this.getTypedRuleContext(Resource_acquisitionContext, 0) as Resource_acquisitionContext;
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public embedded_statement(): Embedded_statementContext {
        return this.getTypedRuleContext(Embedded_statementContext, 0) as Embedded_statementContext;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterUsingStatement) {
            listener.enterUsingStatement(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitUsingStatement) {
            listener.exitUsingStatement(this);
        }
    }
}

export class LockStatementContext extends Simple_embedded_statementContext {
    constructor(parser: CSharpParser, ctx: Simple_embedded_statementContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public LOCK(): TerminalNode {
        return this.getToken(CSharpParser.LOCK, 0);
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public embedded_statement(): Embedded_statementContext {
        return this.getTypedRuleContext(Embedded_statementContext, 0) as Embedded_statementContext;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterLockStatement) {
            listener.enterLockStatement(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitLockStatement) {
            listener.exitLockStatement(this);
        }
    }
}

export class YieldStatementContext extends Simple_embedded_statementContext {
    constructor(parser: CSharpParser, ctx: Simple_embedded_statementContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public YIELD(): TerminalNode {
        return this.getToken(CSharpParser.YIELD, 0);
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public RETURN(): TerminalNode {
        return this.getToken(CSharpParser.RETURN, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public BREAK(): TerminalNode {
        return this.getToken(CSharpParser.BREAK, 0);
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterYieldStatement) {
            listener.enterYieldStatement(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitYieldStatement) {
            listener.exitYieldStatement(this);
        }
    }
}


export class BlockContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public OPEN_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_BRACE, 0);
    }

    public CLOSE_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_BRACE, 0);
    }

    public statement_list(): Statement_listContext {
        return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_block;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterBlock) {
            listener.enterBlock(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitBlock) {
            listener.exitBlock(this);
        }
    }
}


export class Local_variable_declarationContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public local_variable_type(): Local_variable_typeContext {
        return this.getTypedRuleContext(Local_variable_typeContext, 0) as Local_variable_typeContext;
    }

    public local_variable_declarator_list(): Local_variable_declaratorContext[] {
        return this.getTypedRuleContexts(Local_variable_declaratorContext) as Local_variable_declaratorContext[];
    }

    public local_variable_declarator(i: number): Local_variable_declaratorContext {
        return this.getTypedRuleContext(Local_variable_declaratorContext, i) as Local_variable_declaratorContext;
    }

    public USING(): TerminalNode {
        return this.getToken(CSharpParser.USING, 0);
    }

    public REF(): TerminalNode {
        return this.getToken(CSharpParser.REF, 0);
    }

    public READONLY(): TerminalNode {
        return this.getToken(CSharpParser.READONLY, 0);
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public FIXED(): TerminalNode {
        return this.getToken(CSharpParser.FIXED, 0);
    }

    public pointer_type(): Pointer_typeContext {
        return this.getTypedRuleContext(Pointer_typeContext, 0) as Pointer_typeContext;
    }

    public fixed_pointer_declarators(): Fixed_pointer_declaratorsContext {
        return this.getTypedRuleContext(Fixed_pointer_declaratorsContext, 0) as Fixed_pointer_declaratorsContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_local_variable_declaration;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterLocal_variable_declaration) {
            listener.enterLocal_variable_declaration(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitLocal_variable_declaration) {
            listener.exitLocal_variable_declaration(this);
        }
    }
}


export class Local_variable_typeContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public VAR(): TerminalNode {
        return this.getToken(CSharpParser.VAR, 0);
    }

    public type_(): Type_Context {
        return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_local_variable_type;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterLocal_variable_type) {
            listener.enterLocal_variable_type(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitLocal_variable_type) {
            listener.exitLocal_variable_type(this);
        }
    }
}


export class Local_variable_declaratorContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public ASSIGNMENT(): TerminalNode {
        return this.getToken(CSharpParser.ASSIGNMENT, 0);
    }

    public local_variable_initializer(): Local_variable_initializerContext {
        return this.getTypedRuleContext(Local_variable_initializerContext, 0) as Local_variable_initializerContext;
    }

    public REF(): TerminalNode {
        return this.getToken(CSharpParser.REF, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_local_variable_declarator;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterLocal_variable_declarator) {
            listener.enterLocal_variable_declarator(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitLocal_variable_declarator) {
            listener.exitLocal_variable_declarator(this);
        }
    }
}


export class Local_variable_initializerContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public array_initializer(): Array_initializerContext {
        return this.getTypedRuleContext(Array_initializerContext, 0) as Array_initializerContext;
    }

    public stackalloc_initializer(): Stackalloc_initializerContext {
        return this.getTypedRuleContext(Stackalloc_initializerContext, 0) as Stackalloc_initializerContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_local_variable_initializer;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterLocal_variable_initializer) {
            listener.enterLocal_variable_initializer(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitLocal_variable_initializer) {
            listener.exitLocal_variable_initializer(this);
        }
    }
}


export class Local_constant_declarationContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public CONST(): TerminalNode {
        return this.getToken(CSharpParser.CONST, 0);
    }

    public type_(): Type_Context {
        return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
    }

    public constant_declarators(): Constant_declaratorsContext {
        return this.getTypedRuleContext(Constant_declaratorsContext, 0) as Constant_declaratorsContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_local_constant_declaration;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterLocal_constant_declaration) {
            listener.enterLocal_constant_declaration(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitLocal_constant_declaration) {
            listener.exitLocal_constant_declaration(this);
        }
    }
}


export class If_bodyContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public block(): BlockContext {
        return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
    }

    public simple_embedded_statement(): Simple_embedded_statementContext {
        return this.getTypedRuleContext(Simple_embedded_statementContext, 0) as Simple_embedded_statementContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_if_body;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterIf_body) {
            listener.enterIf_body(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitIf_body) {
            listener.exitIf_body(this);
        }
    }
}


export class Switch_sectionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public statement_list(): Statement_listContext {
        return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
    }

    public switch_label_list(): Switch_labelContext[] {
        return this.getTypedRuleContexts(Switch_labelContext) as Switch_labelContext[];
    }

    public switch_label(i: number): Switch_labelContext {
        return this.getTypedRuleContext(Switch_labelContext, i) as Switch_labelContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_switch_section;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterSwitch_section) {
            listener.enterSwitch_section(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitSwitch_section) {
            listener.exitSwitch_section(this);
        }
    }
}


export class Switch_labelContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public CASE(): TerminalNode {
        return this.getToken(CSharpParser.CASE, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public COLON(): TerminalNode {
        return this.getToken(CSharpParser.COLON, 0);
    }

    public case_guard(): Case_guardContext {
        return this.getTypedRuleContext(Case_guardContext, 0) as Case_guardContext;
    }

    public DEFAULT(): TerminalNode {
        return this.getToken(CSharpParser.DEFAULT, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_switch_label;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterSwitch_label) {
            listener.enterSwitch_label(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitSwitch_label) {
            listener.exitSwitch_label(this);
        }
    }
}


export class Case_guardContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public WHEN(): TerminalNode {
        return this.getToken(CSharpParser.WHEN, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_case_guard;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterCase_guard) {
            listener.enterCase_guard(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitCase_guard) {
            listener.exitCase_guard(this);
        }
    }
}


export class Statement_listContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public statement_list(): StatementContext[] {
        return this.getTypedRuleContexts(StatementContext) as StatementContext[];
    }

    public statement(i: number): StatementContext {
        return this.getTypedRuleContext(StatementContext, i) as StatementContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_statement_list;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterStatement_list) {
            listener.enterStatement_list(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitStatement_list) {
            listener.exitStatement_list(this);
        }
    }
}


export class For_initializerContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public local_variable_declaration(): Local_variable_declarationContext {
        return this.getTypedRuleContext(Local_variable_declarationContext, 0) as Local_variable_declarationContext;
    }

    public expression_list(): ExpressionContext[] {
        return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
    }

    public expression(i: number): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_for_initializer;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterFor_initializer) {
            listener.enterFor_initializer(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitFor_initializer) {
            listener.exitFor_initializer(this);
        }
    }
}


export class For_iteratorContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public expression_list(): ExpressionContext[] {
        return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
    }

    public expression(i: number): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_for_iterator;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterFor_iterator) {
            listener.enterFor_iterator(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitFor_iterator) {
            listener.exitFor_iterator(this);
        }
    }
}


export class Catch_clausesContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public specific_catch_clause_list(): Specific_catch_clauseContext[] {
        return this.getTypedRuleContexts(Specific_catch_clauseContext) as Specific_catch_clauseContext[];
    }

    public specific_catch_clause(i: number): Specific_catch_clauseContext {
        return this.getTypedRuleContext(Specific_catch_clauseContext, i) as Specific_catch_clauseContext;
    }

    public general_catch_clause(): General_catch_clauseContext {
        return this.getTypedRuleContext(General_catch_clauseContext, 0) as General_catch_clauseContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_catch_clauses;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterCatch_clauses) {
            listener.enterCatch_clauses(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitCatch_clauses) {
            listener.exitCatch_clauses(this);
        }
    }
}


export class Specific_catch_clauseContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public CATCH(): TerminalNode {
        return this.getToken(CSharpParser.CATCH, 0);
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public class_type(): Class_typeContext {
        return this.getTypedRuleContext(Class_typeContext, 0) as Class_typeContext;
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public block(): BlockContext {
        return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public exception_filter(): Exception_filterContext {
        return this.getTypedRuleContext(Exception_filterContext, 0) as Exception_filterContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_specific_catch_clause;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterSpecific_catch_clause) {
            listener.enterSpecific_catch_clause(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitSpecific_catch_clause) {
            listener.exitSpecific_catch_clause(this);
        }
    }
}


export class General_catch_clauseContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public CATCH(): TerminalNode {
        return this.getToken(CSharpParser.CATCH, 0);
    }

    public block(): BlockContext {
        return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
    }

    public exception_filter(): Exception_filterContext {
        return this.getTypedRuleContext(Exception_filterContext, 0) as Exception_filterContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_general_catch_clause;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterGeneral_catch_clause) {
            listener.enterGeneral_catch_clause(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitGeneral_catch_clause) {
            listener.exitGeneral_catch_clause(this);
        }
    }
}


export class Exception_filterContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public WHEN(): TerminalNode {
        return this.getToken(CSharpParser.WHEN, 0);
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_exception_filter;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterException_filter) {
            listener.enterException_filter(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitException_filter) {
            listener.exitException_filter(this);
        }
    }
}


export class Finally_clauseContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public FINALLY(): TerminalNode {
        return this.getToken(CSharpParser.FINALLY, 0);
    }

    public block(): BlockContext {
        return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_finally_clause;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterFinally_clause) {
            listener.enterFinally_clause(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitFinally_clause) {
            listener.exitFinally_clause(this);
        }
    }
}


export class Resource_acquisitionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public local_variable_declaration(): Local_variable_declarationContext {
        return this.getTypedRuleContext(Local_variable_declarationContext, 0) as Local_variable_declarationContext;
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_resource_acquisition;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterResource_acquisition) {
            listener.enterResource_acquisition(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitResource_acquisition) {
            listener.exitResource_acquisition(this);
        }
    }
}


export class Namespace_declarationContext extends ParserRuleContext {
    public _qi!: Qualified_identifierContext;

    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public NAMESPACE(): TerminalNode {
        return this.getToken(CSharpParser.NAMESPACE, 0);
    }

    public namespace_body(): Namespace_bodyContext {
        return this.getTypedRuleContext(Namespace_bodyContext, 0) as Namespace_bodyContext;
    }

    public qualified_identifier(): Qualified_identifierContext {
        return this.getTypedRuleContext(Qualified_identifierContext, 0) as Qualified_identifierContext;
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_namespace_declaration;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterNamespace_declaration) {
            listener.enterNamespace_declaration(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitNamespace_declaration) {
            listener.exitNamespace_declaration(this);
        }
    }
}


export class Qualified_identifierContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public identifier_list(): IdentifierContext[] {
        return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
    }

    public identifier(i: number): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
    }

    public DOT_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.DOT);
    }

    public DOT(i: number): TerminalNode {
        return this.getToken(CSharpParser.DOT, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_qualified_identifier;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterQualified_identifier) {
            listener.enterQualified_identifier(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitQualified_identifier) {
            listener.exitQualified_identifier(this);
        }
    }
}


export class Namespace_bodyContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public OPEN_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_BRACE, 0);
    }

    public CLOSE_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_BRACE, 0);
    }

    public extern_alias_directives(): Extern_alias_directivesContext {
        return this.getTypedRuleContext(Extern_alias_directivesContext, 0) as Extern_alias_directivesContext;
    }

    public using_directives(): Using_directivesContext {
        return this.getTypedRuleContext(Using_directivesContext, 0) as Using_directivesContext;
    }

    public namespace_member_declarations(): Namespace_member_declarationsContext {
        return this.getTypedRuleContext(Namespace_member_declarationsContext, 0) as Namespace_member_declarationsContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_namespace_body;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterNamespace_body) {
            listener.enterNamespace_body(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitNamespace_body) {
            listener.exitNamespace_body(this);
        }
    }
}


export class Extern_alias_directivesContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public extern_alias_directive_list(): Extern_alias_directiveContext[] {
        return this.getTypedRuleContexts(Extern_alias_directiveContext) as Extern_alias_directiveContext[];
    }

    public extern_alias_directive(i: number): Extern_alias_directiveContext {
        return this.getTypedRuleContext(Extern_alias_directiveContext, i) as Extern_alias_directiveContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_extern_alias_directives;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterExtern_alias_directives) {
            listener.enterExtern_alias_directives(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitExtern_alias_directives) {
            listener.exitExtern_alias_directives(this);
        }
    }
}


export class Extern_alias_directiveContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public EXTERN(): TerminalNode {
        return this.getToken(CSharpParser.EXTERN, 0);
    }

    public ALIAS(): TerminalNode {
        return this.getToken(CSharpParser.ALIAS, 0);
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_extern_alias_directive;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterExtern_alias_directive) {
            listener.enterExtern_alias_directive(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitExtern_alias_directive) {
            listener.exitExtern_alias_directive(this);
        }
    }
}


export class Using_directivesContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public using_directive_list(): Using_directiveContext[] {
        return this.getTypedRuleContexts(Using_directiveContext) as Using_directiveContext[];
    }

    public using_directive(i: number): Using_directiveContext {
        return this.getTypedRuleContext(Using_directiveContext, i) as Using_directiveContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_using_directives;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterUsing_directives) {
            listener.enterUsing_directives(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitUsing_directives) {
            listener.exitUsing_directives(this);
        }
    }
}


export class Using_directiveContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_using_directive;
    }

    public copyFrom(ctx: Using_directiveContext): void {
        super.copyFrom(ctx);
    }
}

export class UsingAliasDirectiveContext extends Using_directiveContext {
    constructor(parser: CSharpParser, ctx: Using_directiveContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public USING(): TerminalNode {
        return this.getToken(CSharpParser.USING, 0);
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public ASSIGNMENT(): TerminalNode {
        return this.getToken(CSharpParser.ASSIGNMENT, 0);
    }

    public namespace_or_type_name(): Namespace_or_type_nameContext {
        return this.getTypedRuleContext(Namespace_or_type_nameContext, 0) as Namespace_or_type_nameContext;
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterUsingAliasDirective) {
            listener.enterUsingAliasDirective(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitUsingAliasDirective) {
            listener.exitUsingAliasDirective(this);
        }
    }
}

export class UsingNamespaceDirectiveContext extends Using_directiveContext {
    constructor(parser: CSharpParser, ctx: Using_directiveContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public USING(): TerminalNode {
        return this.getToken(CSharpParser.USING, 0);
    }

    public namespace_or_type_name(): Namespace_or_type_nameContext {
        return this.getTypedRuleContext(Namespace_or_type_nameContext, 0) as Namespace_or_type_nameContext;
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterUsingNamespaceDirective) {
            listener.enterUsingNamespaceDirective(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitUsingNamespaceDirective) {
            listener.exitUsingNamespaceDirective(this);
        }
    }
}

export class UsingStaticDirectiveContext extends Using_directiveContext {
    constructor(parser: CSharpParser, ctx: Using_directiveContext) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }

    public USING(): TerminalNode {
        return this.getToken(CSharpParser.USING, 0);
    }

    public STATIC(): TerminalNode {
        return this.getToken(CSharpParser.STATIC, 0);
    }

    public namespace_or_type_name(): Namespace_or_type_nameContext {
        return this.getTypedRuleContext(Namespace_or_type_nameContext, 0) as Namespace_or_type_nameContext;
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterUsingStaticDirective) {
            listener.enterUsingStaticDirective(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitUsingStaticDirective) {
            listener.exitUsingStaticDirective(this);
        }
    }
}


export class Namespace_member_declarationsContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public namespace_member_declaration_list(): Namespace_member_declarationContext[] {
        return this.getTypedRuleContexts(Namespace_member_declarationContext) as Namespace_member_declarationContext[];
    }

    public namespace_member_declaration(i: number): Namespace_member_declarationContext {
        return this.getTypedRuleContext(Namespace_member_declarationContext, i) as Namespace_member_declarationContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_namespace_member_declarations;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterNamespace_member_declarations) {
            listener.enterNamespace_member_declarations(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitNamespace_member_declarations) {
            listener.exitNamespace_member_declarations(this);
        }
    }
}


export class Namespace_member_declarationContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public namespace_declaration(): Namespace_declarationContext {
        return this.getTypedRuleContext(Namespace_declarationContext, 0) as Namespace_declarationContext;
    }

    public type_declaration(): Type_declarationContext {
        return this.getTypedRuleContext(Type_declarationContext, 0) as Type_declarationContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_namespace_member_declaration;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterNamespace_member_declaration) {
            listener.enterNamespace_member_declaration(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitNamespace_member_declaration) {
            listener.exitNamespace_member_declaration(this);
        }
    }
}


export class Type_declarationContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public class_definition(): Class_definitionContext {
        return this.getTypedRuleContext(Class_definitionContext, 0) as Class_definitionContext;
    }

    public struct_definition(): Struct_definitionContext {
        return this.getTypedRuleContext(Struct_definitionContext, 0) as Struct_definitionContext;
    }

    public interface_definition(): Interface_definitionContext {
        return this.getTypedRuleContext(Interface_definitionContext, 0) as Interface_definitionContext;
    }

    public enum_definition(): Enum_definitionContext {
        return this.getTypedRuleContext(Enum_definitionContext, 0) as Enum_definitionContext;
    }

    public delegate_definition(): Delegate_definitionContext {
        return this.getTypedRuleContext(Delegate_definitionContext, 0) as Delegate_definitionContext;
    }

    public attributes(): AttributesContext {
        return this.getTypedRuleContext(AttributesContext, 0) as AttributesContext;
    }

    public all_member_modifiers(): All_member_modifiersContext {
        return this.getTypedRuleContext(All_member_modifiersContext, 0) as All_member_modifiersContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_type_declaration;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterType_declaration) {
            listener.enterType_declaration(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitType_declaration) {
            listener.exitType_declaration(this);
        }
    }
}


export class Qualified_alias_memberContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public identifier_list(): IdentifierContext[] {
        return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
    }

    public identifier(i: number): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
    }

    public DOUBLE_COLON(): TerminalNode {
        return this.getToken(CSharpParser.DOUBLE_COLON, 0);
    }

    public type_argument_list(): Type_argument_listContext {
        return this.getTypedRuleContext(Type_argument_listContext, 0) as Type_argument_listContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_qualified_alias_member;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterQualified_alias_member) {
            listener.enterQualified_alias_member(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitQualified_alias_member) {
            listener.exitQualified_alias_member(this);
        }
    }
}


export class Type_parameter_listContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public LT(): TerminalNode {
        return this.getToken(CSharpParser.LT, 0);
    }

    public type_parameter_list(): Type_parameterContext[] {
        return this.getTypedRuleContexts(Type_parameterContext) as Type_parameterContext[];
    }

    public type_parameter(i: number): Type_parameterContext {
        return this.getTypedRuleContext(Type_parameterContext, i) as Type_parameterContext;
    }

    public GT(): TerminalNode {
        return this.getToken(CSharpParser.GT, 0);
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_type_parameter_list;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterType_parameter_list) {
            listener.enterType_parameter_list(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitType_parameter_list) {
            listener.exitType_parameter_list(this);
        }
    }
}


export class Type_parameterContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public attributes(): AttributesContext {
        return this.getTypedRuleContext(AttributesContext, 0) as AttributesContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_type_parameter;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterType_parameter) {
            listener.enterType_parameter(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitType_parameter) {
            listener.exitType_parameter(this);
        }
    }
}


export class Class_baseContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public COLON(): TerminalNode {
        return this.getToken(CSharpParser.COLON, 0);
    }

    public class_type(): Class_typeContext {
        return this.getTypedRuleContext(Class_typeContext, 0) as Class_typeContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public namespace_or_type_name_list(): Namespace_or_type_nameContext[] {
        return this.getTypedRuleContexts(Namespace_or_type_nameContext) as Namespace_or_type_nameContext[];
    }

    public namespace_or_type_name(i: number): Namespace_or_type_nameContext {
        return this.getTypedRuleContext(Namespace_or_type_nameContext, i) as Namespace_or_type_nameContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_class_base;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterClass_base) {
            listener.enterClass_base(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitClass_base) {
            listener.exitClass_base(this);
        }
    }
}


export class Interface_type_listContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public namespace_or_type_name_list(): Namespace_or_type_nameContext[] {
        return this.getTypedRuleContexts(Namespace_or_type_nameContext) as Namespace_or_type_nameContext[];
    }

    public namespace_or_type_name(i: number): Namespace_or_type_nameContext {
        return this.getTypedRuleContext(Namespace_or_type_nameContext, i) as Namespace_or_type_nameContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_interface_type_list;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterInterface_type_list) {
            listener.enterInterface_type_list(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitInterface_type_list) {
            listener.exitInterface_type_list(this);
        }
    }
}


export class Type_parameter_constraints_clausesContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public type_parameter_constraints_clause_list(): Type_parameter_constraints_clauseContext[] {
        return this.getTypedRuleContexts(Type_parameter_constraints_clauseContext) as Type_parameter_constraints_clauseContext[];
    }

    public type_parameter_constraints_clause(i: number): Type_parameter_constraints_clauseContext {
        return this.getTypedRuleContext(Type_parameter_constraints_clauseContext, i) as Type_parameter_constraints_clauseContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_type_parameter_constraints_clauses;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterType_parameter_constraints_clauses) {
            listener.enterType_parameter_constraints_clauses(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitType_parameter_constraints_clauses) {
            listener.exitType_parameter_constraints_clauses(this);
        }
    }
}


export class Type_parameter_constraints_clauseContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public WHERE(): TerminalNode {
        return this.getToken(CSharpParser.WHERE, 0);
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public COLON(): TerminalNode {
        return this.getToken(CSharpParser.COLON, 0);
    }

    public type_parameter_constraints(): Type_parameter_constraintsContext {
        return this.getTypedRuleContext(Type_parameter_constraintsContext, 0) as Type_parameter_constraintsContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_type_parameter_constraints_clause;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterType_parameter_constraints_clause) {
            listener.enterType_parameter_constraints_clause(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitType_parameter_constraints_clause) {
            listener.exitType_parameter_constraints_clause(this);
        }
    }
}


export class Type_parameter_constraintsContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public constructor_constraint(): Constructor_constraintContext {
        return this.getTypedRuleContext(Constructor_constraintContext, 0) as Constructor_constraintContext;
    }

    public primary_constraint(): Primary_constraintContext {
        return this.getTypedRuleContext(Primary_constraintContext, 0) as Primary_constraintContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public secondary_constraints(): Secondary_constraintsContext {
        return this.getTypedRuleContext(Secondary_constraintsContext, 0) as Secondary_constraintsContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_type_parameter_constraints;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterType_parameter_constraints) {
            listener.enterType_parameter_constraints(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitType_parameter_constraints) {
            listener.exitType_parameter_constraints(this);
        }
    }
}


export class Primary_constraintContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public class_type(): Class_typeContext {
        return this.getTypedRuleContext(Class_typeContext, 0) as Class_typeContext;
    }

    public CLASS(): TerminalNode {
        return this.getToken(CSharpParser.CLASS, 0);
    }

    public INTERR(): TerminalNode {
        return this.getToken(CSharpParser.INTERR, 0);
    }

    public STRUCT(): TerminalNode {
        return this.getToken(CSharpParser.STRUCT, 0);
    }

    public UNMANAGED(): TerminalNode {
        return this.getToken(CSharpParser.UNMANAGED, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_primary_constraint;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterPrimary_constraint) {
            listener.enterPrimary_constraint(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitPrimary_constraint) {
            listener.exitPrimary_constraint(this);
        }
    }
}


export class Secondary_constraintsContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public namespace_or_type_name_list(): Namespace_or_type_nameContext[] {
        return this.getTypedRuleContexts(Namespace_or_type_nameContext) as Namespace_or_type_nameContext[];
    }

    public namespace_or_type_name(i: number): Namespace_or_type_nameContext {
        return this.getTypedRuleContext(Namespace_or_type_nameContext, i) as Namespace_or_type_nameContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_secondary_constraints;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterSecondary_constraints) {
            listener.enterSecondary_constraints(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitSecondary_constraints) {
            listener.exitSecondary_constraints(this);
        }
    }
}


export class Constructor_constraintContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public NEW(): TerminalNode {
        return this.getToken(CSharpParser.NEW, 0);
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_constructor_constraint;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterConstructor_constraint) {
            listener.enterConstructor_constraint(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitConstructor_constraint) {
            listener.exitConstructor_constraint(this);
        }
    }
}


export class Class_bodyContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public OPEN_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_BRACE, 0);
    }

    public CLOSE_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_BRACE, 0);
    }

    public class_member_declarations(): Class_member_declarationsContext {
        return this.getTypedRuleContext(Class_member_declarationsContext, 0) as Class_member_declarationsContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_class_body;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterClass_body) {
            listener.enterClass_body(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitClass_body) {
            listener.exitClass_body(this);
        }
    }
}


export class Class_member_declarationsContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public class_member_declaration_list(): Class_member_declarationContext[] {
        return this.getTypedRuleContexts(Class_member_declarationContext) as Class_member_declarationContext[];
    }

    public class_member_declaration(i: number): Class_member_declarationContext {
        return this.getTypedRuleContext(Class_member_declarationContext, i) as Class_member_declarationContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_class_member_declarations;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterClass_member_declarations) {
            listener.enterClass_member_declarations(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitClass_member_declarations) {
            listener.exitClass_member_declarations(this);
        }
    }
}


export class Class_member_declarationContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public common_member_declaration(): Common_member_declarationContext {
        return this.getTypedRuleContext(Common_member_declarationContext, 0) as Common_member_declarationContext;
    }

    public destructor_definition(): Destructor_definitionContext {
        return this.getTypedRuleContext(Destructor_definitionContext, 0) as Destructor_definitionContext;
    }

    public attributes(): AttributesContext {
        return this.getTypedRuleContext(AttributesContext, 0) as AttributesContext;
    }

    public all_member_modifiers(): All_member_modifiersContext {
        return this.getTypedRuleContext(All_member_modifiersContext, 0) as All_member_modifiersContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_class_member_declaration;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterClass_member_declaration) {
            listener.enterClass_member_declaration(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitClass_member_declaration) {
            listener.exitClass_member_declaration(this);
        }
    }
}


export class All_member_modifiersContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public all_member_modifier_list(): All_member_modifierContext[] {
        return this.getTypedRuleContexts(All_member_modifierContext) as All_member_modifierContext[];
    }

    public all_member_modifier(i: number): All_member_modifierContext {
        return this.getTypedRuleContext(All_member_modifierContext, i) as All_member_modifierContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_all_member_modifiers;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterAll_member_modifiers) {
            listener.enterAll_member_modifiers(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitAll_member_modifiers) {
            listener.exitAll_member_modifiers(this);
        }
    }
}


export class All_member_modifierContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public NEW(): TerminalNode {
        return this.getToken(CSharpParser.NEW, 0);
    }

    public PUBLIC(): TerminalNode {
        return this.getToken(CSharpParser.PUBLIC, 0);
    }

    public PROTECTED(): TerminalNode {
        return this.getToken(CSharpParser.PROTECTED, 0);
    }

    public INTERNAL(): TerminalNode {
        return this.getToken(CSharpParser.INTERNAL, 0);
    }

    public PRIVATE(): TerminalNode {
        return this.getToken(CSharpParser.PRIVATE, 0);
    }

    public READONLY(): TerminalNode {
        return this.getToken(CSharpParser.READONLY, 0);
    }

    public VOLATILE(): TerminalNode {
        return this.getToken(CSharpParser.VOLATILE, 0);
    }

    public VIRTUAL(): TerminalNode {
        return this.getToken(CSharpParser.VIRTUAL, 0);
    }

    public SEALED(): TerminalNode {
        return this.getToken(CSharpParser.SEALED, 0);
    }

    public OVERRIDE(): TerminalNode {
        return this.getToken(CSharpParser.OVERRIDE, 0);
    }

    public ABSTRACT(): TerminalNode {
        return this.getToken(CSharpParser.ABSTRACT, 0);
    }

    public STATIC(): TerminalNode {
        return this.getToken(CSharpParser.STATIC, 0);
    }

    public UNSAFE(): TerminalNode {
        return this.getToken(CSharpParser.UNSAFE, 0);
    }

    public EXTERN(): TerminalNode {
        return this.getToken(CSharpParser.EXTERN, 0);
    }

    public PARTIAL(): TerminalNode {
        return this.getToken(CSharpParser.PARTIAL, 0);
    }

    public ASYNC(): TerminalNode {
        return this.getToken(CSharpParser.ASYNC, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_all_member_modifier;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterAll_member_modifier) {
            listener.enterAll_member_modifier(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitAll_member_modifier) {
            listener.exitAll_member_modifier(this);
        }
    }
}


export class Common_member_declarationContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public constant_declaration(): Constant_declarationContext {
        return this.getTypedRuleContext(Constant_declarationContext, 0) as Constant_declarationContext;
    }

    public typed_member_declaration(): Typed_member_declarationContext {
        return this.getTypedRuleContext(Typed_member_declarationContext, 0) as Typed_member_declarationContext;
    }

    public event_declaration(): Event_declarationContext {
        return this.getTypedRuleContext(Event_declarationContext, 0) as Event_declarationContext;
    }

    public conversion_operator_declarator(): Conversion_operator_declaratorContext {
        return this.getTypedRuleContext(Conversion_operator_declaratorContext, 0) as Conversion_operator_declaratorContext;
    }

    public body(): BodyContext {
        return this.getTypedRuleContext(BodyContext, 0) as BodyContext;
    }

    public right_arrow(): Right_arrowContext {
        return this.getTypedRuleContext(Right_arrowContext, 0) as Right_arrowContext;
    }

    public throwable_expression(): Throwable_expressionContext {
        return this.getTypedRuleContext(Throwable_expressionContext, 0) as Throwable_expressionContext;
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public constructor_declaration(): Constructor_declarationContext {
        return this.getTypedRuleContext(Constructor_declarationContext, 0) as Constructor_declarationContext;
    }

    public VOID(): TerminalNode {
        return this.getToken(CSharpParser.VOID, 0);
    }

    public method_declaration(): Method_declarationContext {
        return this.getTypedRuleContext(Method_declarationContext, 0) as Method_declarationContext;
    }

    public class_definition(): Class_definitionContext {
        return this.getTypedRuleContext(Class_definitionContext, 0) as Class_definitionContext;
    }

    public struct_definition(): Struct_definitionContext {
        return this.getTypedRuleContext(Struct_definitionContext, 0) as Struct_definitionContext;
    }

    public interface_definition(): Interface_definitionContext {
        return this.getTypedRuleContext(Interface_definitionContext, 0) as Interface_definitionContext;
    }

    public enum_definition(): Enum_definitionContext {
        return this.getTypedRuleContext(Enum_definitionContext, 0) as Enum_definitionContext;
    }

    public delegate_definition(): Delegate_definitionContext {
        return this.getTypedRuleContext(Delegate_definitionContext, 0) as Delegate_definitionContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_common_member_declaration;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterCommon_member_declaration) {
            listener.enterCommon_member_declaration(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitCommon_member_declaration) {
            listener.exitCommon_member_declaration(this);
        }
    }
}


export class Typed_member_declarationContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public type_(): Type_Context {
        return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
    }

    public namespace_or_type_name(): Namespace_or_type_nameContext {
        return this.getTypedRuleContext(Namespace_or_type_nameContext, 0) as Namespace_or_type_nameContext;
    }

    public DOT(): TerminalNode {
        return this.getToken(CSharpParser.DOT, 0);
    }

    public indexer_declaration(): Indexer_declarationContext {
        return this.getTypedRuleContext(Indexer_declarationContext, 0) as Indexer_declarationContext;
    }

    public method_declaration(): Method_declarationContext {
        return this.getTypedRuleContext(Method_declarationContext, 0) as Method_declarationContext;
    }

    public property_declaration(): Property_declarationContext {
        return this.getTypedRuleContext(Property_declarationContext, 0) as Property_declarationContext;
    }

    public operator_declaration(): Operator_declarationContext {
        return this.getTypedRuleContext(Operator_declarationContext, 0) as Operator_declarationContext;
    }

    public field_declaration(): Field_declarationContext {
        return this.getTypedRuleContext(Field_declarationContext, 0) as Field_declarationContext;
    }

    public REF(): TerminalNode {
        return this.getToken(CSharpParser.REF, 0);
    }

    public READONLY(): TerminalNode {
        return this.getToken(CSharpParser.READONLY, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_typed_member_declaration;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterTyped_member_declaration) {
            listener.enterTyped_member_declaration(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitTyped_member_declaration) {
            listener.exitTyped_member_declaration(this);
        }
    }
}


export class Constant_declaratorsContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public constant_declarator_list(): Constant_declaratorContext[] {
        return this.getTypedRuleContexts(Constant_declaratorContext) as Constant_declaratorContext[];
    }

    public constant_declarator(i: number): Constant_declaratorContext {
        return this.getTypedRuleContext(Constant_declaratorContext, i) as Constant_declaratorContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_constant_declarators;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterConstant_declarators) {
            listener.enterConstant_declarators(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitConstant_declarators) {
            listener.exitConstant_declarators(this);
        }
    }
}


export class Constant_declaratorContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public ASSIGNMENT(): TerminalNode {
        return this.getToken(CSharpParser.ASSIGNMENT, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_constant_declarator;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterConstant_declarator) {
            listener.enterConstant_declarator(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitConstant_declarator) {
            listener.exitConstant_declarator(this);
        }
    }
}


export class Variable_declaratorsContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public variable_declarator_list(): Variable_declaratorContext[] {
        return this.getTypedRuleContexts(Variable_declaratorContext) as Variable_declaratorContext[];
    }

    public variable_declarator(i: number): Variable_declaratorContext {
        return this.getTypedRuleContext(Variable_declaratorContext, i) as Variable_declaratorContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_variable_declarators;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterVariable_declarators) {
            listener.enterVariable_declarators(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitVariable_declarators) {
            listener.exitVariable_declarators(this);
        }
    }
}


export class Variable_declaratorContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public ASSIGNMENT(): TerminalNode {
        return this.getToken(CSharpParser.ASSIGNMENT, 0);
    }

    public variable_initializer(): Variable_initializerContext {
        return this.getTypedRuleContext(Variable_initializerContext, 0) as Variable_initializerContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_variable_declarator;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterVariable_declarator) {
            listener.enterVariable_declarator(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitVariable_declarator) {
            listener.exitVariable_declarator(this);
        }
    }
}


export class Variable_initializerContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public array_initializer(): Array_initializerContext {
        return this.getTypedRuleContext(Array_initializerContext, 0) as Array_initializerContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_variable_initializer;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterVariable_initializer) {
            listener.enterVariable_initializer(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitVariable_initializer) {
            listener.exitVariable_initializer(this);
        }
    }
}


export class Return_typeContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public type_(): Type_Context {
        return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
    }

    public VOID(): TerminalNode {
        return this.getToken(CSharpParser.VOID, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_return_type;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterReturn_type) {
            listener.enterReturn_type(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitReturn_type) {
            listener.exitReturn_type(this);
        }
    }
}


export class Member_nameContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public namespace_or_type_name(): Namespace_or_type_nameContext {
        return this.getTypedRuleContext(Namespace_or_type_nameContext, 0) as Namespace_or_type_nameContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_member_name;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterMember_name) {
            listener.enterMember_name(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitMember_name) {
            listener.exitMember_name(this);
        }
    }
}


export class Method_bodyContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public block(): BlockContext {
        return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_method_body;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterMethod_body) {
            listener.enterMethod_body(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitMethod_body) {
            listener.exitMethod_body(this);
        }
    }
}


export class Formal_parameter_listContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public parameter_array(): Parameter_arrayContext {
        return this.getTypedRuleContext(Parameter_arrayContext, 0) as Parameter_arrayContext;
    }

    public fixed_parameters(): Fixed_parametersContext {
        return this.getTypedRuleContext(Fixed_parametersContext, 0) as Fixed_parametersContext;
    }

    public COMMA(): TerminalNode {
        return this.getToken(CSharpParser.COMMA, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_formal_parameter_list;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterFormal_parameter_list) {
            listener.enterFormal_parameter_list(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitFormal_parameter_list) {
            listener.exitFormal_parameter_list(this);
        }
    }
}


export class Fixed_parametersContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public fixed_parameter_list(): Fixed_parameterContext[] {
        return this.getTypedRuleContexts(Fixed_parameterContext) as Fixed_parameterContext[];
    }

    public fixed_parameter(i: number): Fixed_parameterContext {
        return this.getTypedRuleContext(Fixed_parameterContext, i) as Fixed_parameterContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_fixed_parameters;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterFixed_parameters) {
            listener.enterFixed_parameters(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitFixed_parameters) {
            listener.exitFixed_parameters(this);
        }
    }
}


export class Fixed_parameterContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public arg_declaration(): Arg_declarationContext {
        return this.getTypedRuleContext(Arg_declarationContext, 0) as Arg_declarationContext;
    }

    public attributes(): AttributesContext {
        return this.getTypedRuleContext(AttributesContext, 0) as AttributesContext;
    }

    public parameter_modifier(): Parameter_modifierContext {
        return this.getTypedRuleContext(Parameter_modifierContext, 0) as Parameter_modifierContext;
    }

    public ARGLIST(): TerminalNode {
        return this.getToken(CSharpParser.ARGLIST, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_fixed_parameter;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterFixed_parameter) {
            listener.enterFixed_parameter(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitFixed_parameter) {
            listener.exitFixed_parameter(this);
        }
    }
}


export class Parameter_modifierContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public REF(): TerminalNode {
        return this.getToken(CSharpParser.REF, 0);
    }

    public OUT(): TerminalNode {
        return this.getToken(CSharpParser.OUT, 0);
    }

    public IN(): TerminalNode {
        return this.getToken(CSharpParser.IN, 0);
    }

    public THIS(): TerminalNode {
        return this.getToken(CSharpParser.THIS, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_parameter_modifier;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterParameter_modifier) {
            listener.enterParameter_modifier(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitParameter_modifier) {
            listener.exitParameter_modifier(this);
        }
    }
}


export class Parameter_arrayContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public PARAMS(): TerminalNode {
        return this.getToken(CSharpParser.PARAMS, 0);
    }

    public array_type(): Array_typeContext {
        return this.getTypedRuleContext(Array_typeContext, 0) as Array_typeContext;
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public attributes(): AttributesContext {
        return this.getTypedRuleContext(AttributesContext, 0) as AttributesContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_parameter_array;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterParameter_array) {
            listener.enterParameter_array(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitParameter_array) {
            listener.exitParameter_array(this);
        }
    }
}


export class Accessor_declarationsContext extends ParserRuleContext {
    public _attrs!: AttributesContext;
    public _mods!: Accessor_modifierContext;

    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public GET(): TerminalNode {
        return this.getToken(CSharpParser.GET, 0);
    }

    public accessor_body(): Accessor_bodyContext {
        return this.getTypedRuleContext(Accessor_bodyContext, 0) as Accessor_bodyContext;
    }

    public SET(): TerminalNode {
        return this.getToken(CSharpParser.SET, 0);
    }

    public attributes(): AttributesContext {
        return this.getTypedRuleContext(AttributesContext, 0) as AttributesContext;
    }

    public accessor_modifier(): Accessor_modifierContext {
        return this.getTypedRuleContext(Accessor_modifierContext, 0) as Accessor_modifierContext;
    }

    public set_accessor_declaration(): Set_accessor_declarationContext {
        return this.getTypedRuleContext(Set_accessor_declarationContext, 0) as Set_accessor_declarationContext;
    }

    public get_accessor_declaration(): Get_accessor_declarationContext {
        return this.getTypedRuleContext(Get_accessor_declarationContext, 0) as Get_accessor_declarationContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_accessor_declarations;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterAccessor_declarations) {
            listener.enterAccessor_declarations(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitAccessor_declarations) {
            listener.exitAccessor_declarations(this);
        }
    }
}


export class Get_accessor_declarationContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public GET(): TerminalNode {
        return this.getToken(CSharpParser.GET, 0);
    }

    public accessor_body(): Accessor_bodyContext {
        return this.getTypedRuleContext(Accessor_bodyContext, 0) as Accessor_bodyContext;
    }

    public attributes(): AttributesContext {
        return this.getTypedRuleContext(AttributesContext, 0) as AttributesContext;
    }

    public accessor_modifier(): Accessor_modifierContext {
        return this.getTypedRuleContext(Accessor_modifierContext, 0) as Accessor_modifierContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_get_accessor_declaration;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterGet_accessor_declaration) {
            listener.enterGet_accessor_declaration(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitGet_accessor_declaration) {
            listener.exitGet_accessor_declaration(this);
        }
    }
}


export class Set_accessor_declarationContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public SET(): TerminalNode {
        return this.getToken(CSharpParser.SET, 0);
    }

    public accessor_body(): Accessor_bodyContext {
        return this.getTypedRuleContext(Accessor_bodyContext, 0) as Accessor_bodyContext;
    }

    public attributes(): AttributesContext {
        return this.getTypedRuleContext(AttributesContext, 0) as AttributesContext;
    }

    public accessor_modifier(): Accessor_modifierContext {
        return this.getTypedRuleContext(Accessor_modifierContext, 0) as Accessor_modifierContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_set_accessor_declaration;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterSet_accessor_declaration) {
            listener.enterSet_accessor_declaration(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitSet_accessor_declaration) {
            listener.exitSet_accessor_declaration(this);
        }
    }
}


export class Accessor_modifierContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public PROTECTED(): TerminalNode {
        return this.getToken(CSharpParser.PROTECTED, 0);
    }

    public INTERNAL(): TerminalNode {
        return this.getToken(CSharpParser.INTERNAL, 0);
    }

    public PRIVATE(): TerminalNode {
        return this.getToken(CSharpParser.PRIVATE, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_accessor_modifier;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterAccessor_modifier) {
            listener.enterAccessor_modifier(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitAccessor_modifier) {
            listener.exitAccessor_modifier(this);
        }
    }
}


export class Accessor_bodyContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public block(): BlockContext {
        return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_accessor_body;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterAccessor_body) {
            listener.enterAccessor_body(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitAccessor_body) {
            listener.exitAccessor_body(this);
        }
    }
}


export class Event_accessor_declarationsContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public ADD(): TerminalNode {
        return this.getToken(CSharpParser.ADD, 0);
    }

    public block(): BlockContext {
        return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
    }

    public remove_accessor_declaration(): Remove_accessor_declarationContext {
        return this.getTypedRuleContext(Remove_accessor_declarationContext, 0) as Remove_accessor_declarationContext;
    }

    public REMOVE(): TerminalNode {
        return this.getToken(CSharpParser.REMOVE, 0);
    }

    public add_accessor_declaration(): Add_accessor_declarationContext {
        return this.getTypedRuleContext(Add_accessor_declarationContext, 0) as Add_accessor_declarationContext;
    }

    public attributes(): AttributesContext {
        return this.getTypedRuleContext(AttributesContext, 0) as AttributesContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_event_accessor_declarations;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterEvent_accessor_declarations) {
            listener.enterEvent_accessor_declarations(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitEvent_accessor_declarations) {
            listener.exitEvent_accessor_declarations(this);
        }
    }
}


export class Add_accessor_declarationContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public ADD(): TerminalNode {
        return this.getToken(CSharpParser.ADD, 0);
    }

    public block(): BlockContext {
        return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
    }

    public attributes(): AttributesContext {
        return this.getTypedRuleContext(AttributesContext, 0) as AttributesContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_add_accessor_declaration;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterAdd_accessor_declaration) {
            listener.enterAdd_accessor_declaration(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitAdd_accessor_declaration) {
            listener.exitAdd_accessor_declaration(this);
        }
    }
}


export class Remove_accessor_declarationContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public REMOVE(): TerminalNode {
        return this.getToken(CSharpParser.REMOVE, 0);
    }

    public block(): BlockContext {
        return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
    }

    public attributes(): AttributesContext {
        return this.getTypedRuleContext(AttributesContext, 0) as AttributesContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_remove_accessor_declaration;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterRemove_accessor_declaration) {
            listener.enterRemove_accessor_declaration(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitRemove_accessor_declaration) {
            listener.exitRemove_accessor_declaration(this);
        }
    }
}


export class Overloadable_operatorContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public PLUS(): TerminalNode {
        return this.getToken(CSharpParser.PLUS, 0);
    }

    public MINUS(): TerminalNode {
        return this.getToken(CSharpParser.MINUS, 0);
    }

    public BANG(): TerminalNode {
        return this.getToken(CSharpParser.BANG, 0);
    }

    public TILDE(): TerminalNode {
        return this.getToken(CSharpParser.TILDE, 0);
    }

    public OP_INC(): TerminalNode {
        return this.getToken(CSharpParser.OP_INC, 0);
    }

    public OP_DEC(): TerminalNode {
        return this.getToken(CSharpParser.OP_DEC, 0);
    }

    public TRUE(): TerminalNode {
        return this.getToken(CSharpParser.TRUE, 0);
    }

    public FALSE(): TerminalNode {
        return this.getToken(CSharpParser.FALSE, 0);
    }

    public STAR(): TerminalNode {
        return this.getToken(CSharpParser.STAR, 0);
    }

    public DIV(): TerminalNode {
        return this.getToken(CSharpParser.DIV, 0);
    }

    public PERCENT(): TerminalNode {
        return this.getToken(CSharpParser.PERCENT, 0);
    }

    public AMP(): TerminalNode {
        return this.getToken(CSharpParser.AMP, 0);
    }

    public BITWISE_OR(): TerminalNode {
        return this.getToken(CSharpParser.BITWISE_OR, 0);
    }

    public CARET(): TerminalNode {
        return this.getToken(CSharpParser.CARET, 0);
    }

    public OP_LEFT_SHIFT(): TerminalNode {
        return this.getToken(CSharpParser.OP_LEFT_SHIFT, 0);
    }

    public right_shift(): Right_shiftContext {
        return this.getTypedRuleContext(Right_shiftContext, 0) as Right_shiftContext;
    }

    public OP_EQ(): TerminalNode {
        return this.getToken(CSharpParser.OP_EQ, 0);
    }

    public OP_NE(): TerminalNode {
        return this.getToken(CSharpParser.OP_NE, 0);
    }

    public GT(): TerminalNode {
        return this.getToken(CSharpParser.GT, 0);
    }

    public LT(): TerminalNode {
        return this.getToken(CSharpParser.LT, 0);
    }

    public OP_GE(): TerminalNode {
        return this.getToken(CSharpParser.OP_GE, 0);
    }

    public OP_LE(): TerminalNode {
        return this.getToken(CSharpParser.OP_LE, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_overloadable_operator;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterOverloadable_operator) {
            listener.enterOverloadable_operator(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitOverloadable_operator) {
            listener.exitOverloadable_operator(this);
        }
    }
}


export class Conversion_operator_declaratorContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public OPERATOR(): TerminalNode {
        return this.getToken(CSharpParser.OPERATOR, 0);
    }

    public type_(): Type_Context {
        return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public arg_declaration(): Arg_declarationContext {
        return this.getTypedRuleContext(Arg_declarationContext, 0) as Arg_declarationContext;
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public IMPLICIT(): TerminalNode {
        return this.getToken(CSharpParser.IMPLICIT, 0);
    }

    public EXPLICIT(): TerminalNode {
        return this.getToken(CSharpParser.EXPLICIT, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_conversion_operator_declarator;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterConversion_operator_declarator) {
            listener.enterConversion_operator_declarator(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitConversion_operator_declarator) {
            listener.exitConversion_operator_declarator(this);
        }
    }
}


export class Constructor_initializerContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public COLON(): TerminalNode {
        return this.getToken(CSharpParser.COLON, 0);
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public BASE(): TerminalNode {
        return this.getToken(CSharpParser.BASE, 0);
    }

    public THIS(): TerminalNode {
        return this.getToken(CSharpParser.THIS, 0);
    }

    public argument_list(): Argument_listContext {
        return this.getTypedRuleContext(Argument_listContext, 0) as Argument_listContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_constructor_initializer;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterConstructor_initializer) {
            listener.enterConstructor_initializer(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitConstructor_initializer) {
            listener.exitConstructor_initializer(this);
        }
    }
}


export class BodyContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public block(): BlockContext {
        return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_body;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterBody) {
            listener.enterBody(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitBody) {
            listener.exitBody(this);
        }
    }
}


export class Struct_interfacesContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public COLON(): TerminalNode {
        return this.getToken(CSharpParser.COLON, 0);
    }

    public interface_type_list(): Interface_type_listContext {
        return this.getTypedRuleContext(Interface_type_listContext, 0) as Interface_type_listContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_struct_interfaces;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterStruct_interfaces) {
            listener.enterStruct_interfaces(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitStruct_interfaces) {
            listener.exitStruct_interfaces(this);
        }
    }
}


export class Struct_bodyContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public OPEN_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_BRACE, 0);
    }

    public CLOSE_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_BRACE, 0);
    }

    public struct_member_declaration_list(): Struct_member_declarationContext[] {
        return this.getTypedRuleContexts(Struct_member_declarationContext) as Struct_member_declarationContext[];
    }

    public struct_member_declaration(i: number): Struct_member_declarationContext {
        return this.getTypedRuleContext(Struct_member_declarationContext, i) as Struct_member_declarationContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_struct_body;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterStruct_body) {
            listener.enterStruct_body(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitStruct_body) {
            listener.exitStruct_body(this);
        }
    }
}


export class Struct_member_declarationContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public common_member_declaration(): Common_member_declarationContext {
        return this.getTypedRuleContext(Common_member_declarationContext, 0) as Common_member_declarationContext;
    }

    public FIXED(): TerminalNode {
        return this.getToken(CSharpParser.FIXED, 0);
    }

    public type_(): Type_Context {
        return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public attributes(): AttributesContext {
        return this.getTypedRuleContext(AttributesContext, 0) as AttributesContext;
    }

    public all_member_modifiers(): All_member_modifiersContext {
        return this.getTypedRuleContext(All_member_modifiersContext, 0) as All_member_modifiersContext;
    }

    public fixed_size_buffer_declarator_list(): Fixed_size_buffer_declaratorContext[] {
        return this.getTypedRuleContexts(Fixed_size_buffer_declaratorContext) as Fixed_size_buffer_declaratorContext[];
    }

    public fixed_size_buffer_declarator(i: number): Fixed_size_buffer_declaratorContext {
        return this.getTypedRuleContext(Fixed_size_buffer_declaratorContext, i) as Fixed_size_buffer_declaratorContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_struct_member_declaration;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterStruct_member_declaration) {
            listener.enterStruct_member_declaration(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitStruct_member_declaration) {
            listener.exitStruct_member_declaration(this);
        }
    }
}


export class Array_typeContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public base_type(): Base_typeContext {
        return this.getTypedRuleContext(Base_typeContext, 0) as Base_typeContext;
    }

    public rank_specifier_list(): Rank_specifierContext[] {
        return this.getTypedRuleContexts(Rank_specifierContext) as Rank_specifierContext[];
    }

    public rank_specifier(i: number): Rank_specifierContext {
        return this.getTypedRuleContext(Rank_specifierContext, i) as Rank_specifierContext;
    }

    public STAR_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.STAR);
    }

    public STAR(i: number): TerminalNode {
        return this.getToken(CSharpParser.STAR, i);
    }

    public INTERR_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.INTERR);
    }

    public INTERR(i: number): TerminalNode {
        return this.getToken(CSharpParser.INTERR, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_array_type;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterArray_type) {
            listener.enterArray_type(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitArray_type) {
            listener.exitArray_type(this);
        }
    }
}


export class Rank_specifierContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public OPEN_BRACKET(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_BRACKET, 0);
    }

    public CLOSE_BRACKET(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_BRACKET, 0);
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_rank_specifier;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterRank_specifier) {
            listener.enterRank_specifier(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitRank_specifier) {
            listener.exitRank_specifier(this);
        }
    }
}


export class Array_initializerContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public OPEN_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_BRACE, 0);
    }

    public CLOSE_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_BRACE, 0);
    }

    public variable_initializer_list(): Variable_initializerContext[] {
        return this.getTypedRuleContexts(Variable_initializerContext) as Variable_initializerContext[];
    }

    public variable_initializer(i: number): Variable_initializerContext {
        return this.getTypedRuleContext(Variable_initializerContext, i) as Variable_initializerContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_array_initializer;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterArray_initializer) {
            listener.enterArray_initializer(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitArray_initializer) {
            listener.exitArray_initializer(this);
        }
    }
}


export class Variant_type_parameter_listContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public LT(): TerminalNode {
        return this.getToken(CSharpParser.LT, 0);
    }

    public variant_type_parameter_list(): Variant_type_parameterContext[] {
        return this.getTypedRuleContexts(Variant_type_parameterContext) as Variant_type_parameterContext[];
    }

    public variant_type_parameter(i: number): Variant_type_parameterContext {
        return this.getTypedRuleContext(Variant_type_parameterContext, i) as Variant_type_parameterContext;
    }

    public GT(): TerminalNode {
        return this.getToken(CSharpParser.GT, 0);
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_variant_type_parameter_list;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterVariant_type_parameter_list) {
            listener.enterVariant_type_parameter_list(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitVariant_type_parameter_list) {
            listener.exitVariant_type_parameter_list(this);
        }
    }
}


export class Variant_type_parameterContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public attributes(): AttributesContext {
        return this.getTypedRuleContext(AttributesContext, 0) as AttributesContext;
    }

    public variance_annotation(): Variance_annotationContext {
        return this.getTypedRuleContext(Variance_annotationContext, 0) as Variance_annotationContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_variant_type_parameter;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterVariant_type_parameter) {
            listener.enterVariant_type_parameter(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitVariant_type_parameter) {
            listener.exitVariant_type_parameter(this);
        }
    }
}


export class Variance_annotationContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public IN(): TerminalNode {
        return this.getToken(CSharpParser.IN, 0);
    }

    public OUT(): TerminalNode {
        return this.getToken(CSharpParser.OUT, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_variance_annotation;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterVariance_annotation) {
            listener.enterVariance_annotation(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitVariance_annotation) {
            listener.exitVariance_annotation(this);
        }
    }
}


export class Interface_baseContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public COLON(): TerminalNode {
        return this.getToken(CSharpParser.COLON, 0);
    }

    public interface_type_list(): Interface_type_listContext {
        return this.getTypedRuleContext(Interface_type_listContext, 0) as Interface_type_listContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_interface_base;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterInterface_base) {
            listener.enterInterface_base(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitInterface_base) {
            listener.exitInterface_base(this);
        }
    }
}


export class Interface_bodyContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public OPEN_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_BRACE, 0);
    }

    public CLOSE_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_BRACE, 0);
    }

    public interface_member_declaration_list(): Interface_member_declarationContext[] {
        return this.getTypedRuleContexts(Interface_member_declarationContext) as Interface_member_declarationContext[];
    }

    public interface_member_declaration(i: number): Interface_member_declarationContext {
        return this.getTypedRuleContext(Interface_member_declarationContext, i) as Interface_member_declarationContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_interface_body;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterInterface_body) {
            listener.enterInterface_body(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitInterface_body) {
            listener.exitInterface_body(this);
        }
    }
}


export class Interface_member_declarationContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public type_(): Type_Context {
        return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
    }

    public VOID(): TerminalNode {
        return this.getToken(CSharpParser.VOID, 0);
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public EVENT(): TerminalNode {
        return this.getToken(CSharpParser.EVENT, 0);
    }

    public attributes(): AttributesContext {
        return this.getTypedRuleContext(AttributesContext, 0) as AttributesContext;
    }

    public NEW(): TerminalNode {
        return this.getToken(CSharpParser.NEW, 0);
    }

    public OPEN_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_BRACE, 0);
    }

    public interface_accessors(): Interface_accessorsContext {
        return this.getTypedRuleContext(Interface_accessorsContext, 0) as Interface_accessorsContext;
    }

    public CLOSE_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_BRACE, 0);
    }

    public THIS(): TerminalNode {
        return this.getToken(CSharpParser.THIS, 0);
    }

    public OPEN_BRACKET(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_BRACKET, 0);
    }

    public formal_parameter_list(): Formal_parameter_listContext {
        return this.getTypedRuleContext(Formal_parameter_listContext, 0) as Formal_parameter_listContext;
    }

    public CLOSE_BRACKET(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_BRACKET, 0);
    }

    public UNSAFE(): TerminalNode {
        return this.getToken(CSharpParser.UNSAFE, 0);
    }

    public REF(): TerminalNode {
        return this.getToken(CSharpParser.REF, 0);
    }

    public READONLY(): TerminalNode {
        return this.getToken(CSharpParser.READONLY, 0);
    }

    public type_parameter_list(): Type_parameter_listContext {
        return this.getTypedRuleContext(Type_parameter_listContext, 0) as Type_parameter_listContext;
    }

    public type_parameter_constraints_clauses(): Type_parameter_constraints_clausesContext {
        return this.getTypedRuleContext(Type_parameter_constraints_clausesContext, 0) as Type_parameter_constraints_clausesContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_interface_member_declaration;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterInterface_member_declaration) {
            listener.enterInterface_member_declaration(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitInterface_member_declaration) {
            listener.exitInterface_member_declaration(this);
        }
    }
}


export class Interface_accessorsContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public GET(): TerminalNode {
        return this.getToken(CSharpParser.GET, 0);
    }

    public SEMICOLON_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.SEMICOLON);
    }

    public SEMICOLON(i: number): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, i);
    }

    public SET(): TerminalNode {
        return this.getToken(CSharpParser.SET, 0);
    }

    public attributes_list(): AttributesContext[] {
        return this.getTypedRuleContexts(AttributesContext) as AttributesContext[];
    }

    public attributes(i: number): AttributesContext {
        return this.getTypedRuleContext(AttributesContext, i) as AttributesContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_interface_accessors;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterInterface_accessors) {
            listener.enterInterface_accessors(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitInterface_accessors) {
            listener.exitInterface_accessors(this);
        }
    }
}


export class Enum_baseContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public COLON(): TerminalNode {
        return this.getToken(CSharpParser.COLON, 0);
    }

    public type_(): Type_Context {
        return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_enum_base;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterEnum_base) {
            listener.enterEnum_base(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitEnum_base) {
            listener.exitEnum_base(this);
        }
    }
}


export class Enum_bodyContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public OPEN_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_BRACE, 0);
    }

    public CLOSE_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_BRACE, 0);
    }

    public enum_member_declaration_list(): Enum_member_declarationContext[] {
        return this.getTypedRuleContexts(Enum_member_declarationContext) as Enum_member_declarationContext[];
    }

    public enum_member_declaration(i: number): Enum_member_declarationContext {
        return this.getTypedRuleContext(Enum_member_declarationContext, i) as Enum_member_declarationContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_enum_body;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterEnum_body) {
            listener.enterEnum_body(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitEnum_body) {
            listener.exitEnum_body(this);
        }
    }
}


export class Enum_member_declarationContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public attributes(): AttributesContext {
        return this.getTypedRuleContext(AttributesContext, 0) as AttributesContext;
    }

    public ASSIGNMENT(): TerminalNode {
        return this.getToken(CSharpParser.ASSIGNMENT, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_enum_member_declaration;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterEnum_member_declaration) {
            listener.enterEnum_member_declaration(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitEnum_member_declaration) {
            listener.exitEnum_member_declaration(this);
        }
    }
}


export class Global_attribute_sectionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public OPEN_BRACKET(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_BRACKET, 0);
    }

    public global_attribute_target(): Global_attribute_targetContext {
        return this.getTypedRuleContext(Global_attribute_targetContext, 0) as Global_attribute_targetContext;
    }

    public COLON(): TerminalNode {
        return this.getToken(CSharpParser.COLON, 0);
    }

    public attribute_list(): Attribute_listContext {
        return this.getTypedRuleContext(Attribute_listContext, 0) as Attribute_listContext;
    }

    public CLOSE_BRACKET(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_BRACKET, 0);
    }

    public COMMA(): TerminalNode {
        return this.getToken(CSharpParser.COMMA, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_global_attribute_section;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterGlobal_attribute_section) {
            listener.enterGlobal_attribute_section(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitGlobal_attribute_section) {
            listener.exitGlobal_attribute_section(this);
        }
    }
}


export class Global_attribute_targetContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public keyword(): KeywordContext {
        return this.getTypedRuleContext(KeywordContext, 0) as KeywordContext;
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_global_attribute_target;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterGlobal_attribute_target) {
            listener.enterGlobal_attribute_target(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitGlobal_attribute_target) {
            listener.exitGlobal_attribute_target(this);
        }
    }
}


export class AttributesContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public attribute_section_list(): Attribute_sectionContext[] {
        return this.getTypedRuleContexts(Attribute_sectionContext) as Attribute_sectionContext[];
    }

    public attribute_section(i: number): Attribute_sectionContext {
        return this.getTypedRuleContext(Attribute_sectionContext, i) as Attribute_sectionContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_attributes;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterAttributes) {
            listener.enterAttributes(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitAttributes) {
            listener.exitAttributes(this);
        }
    }
}


export class Attribute_sectionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public OPEN_BRACKET(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_BRACKET, 0);
    }

    public attribute_list(): Attribute_listContext {
        return this.getTypedRuleContext(Attribute_listContext, 0) as Attribute_listContext;
    }

    public CLOSE_BRACKET(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_BRACKET, 0);
    }

    public attribute_target(): Attribute_targetContext {
        return this.getTypedRuleContext(Attribute_targetContext, 0) as Attribute_targetContext;
    }

    public COLON(): TerminalNode {
        return this.getToken(CSharpParser.COLON, 0);
    }

    public COMMA(): TerminalNode {
        return this.getToken(CSharpParser.COMMA, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_attribute_section;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterAttribute_section) {
            listener.enterAttribute_section(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitAttribute_section) {
            listener.exitAttribute_section(this);
        }
    }
}


export class Attribute_targetContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public keyword(): KeywordContext {
        return this.getTypedRuleContext(KeywordContext, 0) as KeywordContext;
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_attribute_target;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterAttribute_target) {
            listener.enterAttribute_target(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitAttribute_target) {
            listener.exitAttribute_target(this);
        }
    }
}


export class Attribute_listContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public attribute_list(): AttributeContext[] {
        return this.getTypedRuleContexts(AttributeContext) as AttributeContext[];
    }

    public attribute(i: number): AttributeContext {
        return this.getTypedRuleContext(AttributeContext, i) as AttributeContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_attribute_list;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterAttribute_list) {
            listener.enterAttribute_list(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitAttribute_list) {
            listener.exitAttribute_list(this);
        }
    }
}


export class AttributeContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public namespace_or_type_name(): Namespace_or_type_nameContext {
        return this.getTypedRuleContext(Namespace_or_type_nameContext, 0) as Namespace_or_type_nameContext;
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public attribute_argument_list(): Attribute_argumentContext[] {
        return this.getTypedRuleContexts(Attribute_argumentContext) as Attribute_argumentContext[];
    }

    public attribute_argument(i: number): Attribute_argumentContext {
        return this.getTypedRuleContext(Attribute_argumentContext, i) as Attribute_argumentContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_attribute;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterAttribute) {
            listener.enterAttribute(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitAttribute) {
            listener.exitAttribute(this);
        }
    }
}


export class Attribute_argumentContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public COLON(): TerminalNode {
        return this.getToken(CSharpParser.COLON, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_attribute_argument;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterAttribute_argument) {
            listener.enterAttribute_argument(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitAttribute_argument) {
            listener.exitAttribute_argument(this);
        }
    }
}


export class Pointer_typeContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public STAR(): TerminalNode {
        return this.getToken(CSharpParser.STAR, 0);
    }

    public simple_type(): Simple_typeContext {
        return this.getTypedRuleContext(Simple_typeContext, 0) as Simple_typeContext;
    }

    public class_type(): Class_typeContext {
        return this.getTypedRuleContext(Class_typeContext, 0) as Class_typeContext;
    }

    public rank_specifier_list(): Rank_specifierContext[] {
        return this.getTypedRuleContexts(Rank_specifierContext) as Rank_specifierContext[];
    }

    public rank_specifier(i: number): Rank_specifierContext {
        return this.getTypedRuleContext(Rank_specifierContext, i) as Rank_specifierContext;
    }

    public INTERR_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.INTERR);
    }

    public INTERR(i: number): TerminalNode {
        return this.getToken(CSharpParser.INTERR, i);
    }

    public VOID(): TerminalNode {
        return this.getToken(CSharpParser.VOID, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_pointer_type;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterPointer_type) {
            listener.enterPointer_type(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitPointer_type) {
            listener.exitPointer_type(this);
        }
    }
}


export class Fixed_pointer_declaratorsContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public fixed_pointer_declarator_list(): Fixed_pointer_declaratorContext[] {
        return this.getTypedRuleContexts(Fixed_pointer_declaratorContext) as Fixed_pointer_declaratorContext[];
    }

    public fixed_pointer_declarator(i: number): Fixed_pointer_declaratorContext {
        return this.getTypedRuleContext(Fixed_pointer_declaratorContext, i) as Fixed_pointer_declaratorContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_fixed_pointer_declarators;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterFixed_pointer_declarators) {
            listener.enterFixed_pointer_declarators(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitFixed_pointer_declarators) {
            listener.exitFixed_pointer_declarators(this);
        }
    }
}


export class Fixed_pointer_declaratorContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public ASSIGNMENT(): TerminalNode {
        return this.getToken(CSharpParser.ASSIGNMENT, 0);
    }

    public fixed_pointer_initializer(): Fixed_pointer_initializerContext {
        return this.getTypedRuleContext(Fixed_pointer_initializerContext, 0) as Fixed_pointer_initializerContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_fixed_pointer_declarator;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterFixed_pointer_declarator) {
            listener.enterFixed_pointer_declarator(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitFixed_pointer_declarator) {
            listener.exitFixed_pointer_declarator(this);
        }
    }
}


export class Fixed_pointer_initializerContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public AMP(): TerminalNode {
        return this.getToken(CSharpParser.AMP, 0);
    }

    public stackalloc_initializer(): Stackalloc_initializerContext {
        return this.getTypedRuleContext(Stackalloc_initializerContext, 0) as Stackalloc_initializerContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_fixed_pointer_initializer;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterFixed_pointer_initializer) {
            listener.enterFixed_pointer_initializer(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitFixed_pointer_initializer) {
            listener.exitFixed_pointer_initializer(this);
        }
    }
}


export class Fixed_size_buffer_declaratorContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public OPEN_BRACKET(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_BRACKET, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public CLOSE_BRACKET(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_BRACKET, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_fixed_size_buffer_declarator;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterFixed_size_buffer_declarator) {
            listener.enterFixed_size_buffer_declarator(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitFixed_size_buffer_declarator) {
            listener.exitFixed_size_buffer_declarator(this);
        }
    }
}


export class Stackalloc_initializerContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public STACKALLOC(): TerminalNode {
        return this.getToken(CSharpParser.STACKALLOC, 0);
    }

    public type_(): Type_Context {
        return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
    }

    public OPEN_BRACKET(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_BRACKET, 0);
    }

    public expression_list(): ExpressionContext[] {
        return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
    }

    public expression(i: number): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
    }

    public CLOSE_BRACKET(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_BRACKET, 0);
    }

    public OPEN_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_BRACE, 0);
    }

    public CLOSE_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_BRACE, 0);
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_stackalloc_initializer;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterStackalloc_initializer) {
            listener.enterStackalloc_initializer(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitStackalloc_initializer) {
            listener.exitStackalloc_initializer(this);
        }
    }
}


export class Right_arrowContext extends ParserRuleContext {
    public _first!: Token;
    public _second!: Token;

    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public ASSIGNMENT(): TerminalNode {
        return this.getToken(CSharpParser.ASSIGNMENT, 0);
    }

    public GT(): TerminalNode {
        return this.getToken(CSharpParser.GT, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_right_arrow;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterRight_arrow) {
            listener.enterRight_arrow(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitRight_arrow) {
            listener.exitRight_arrow(this);
        }
    }
}


export class Right_shiftContext extends ParserRuleContext {
    public _first!: Token;
    public _second!: Token;

    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public GT_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.GT);
    }

    public GT(i: number): TerminalNode {
        return this.getToken(CSharpParser.GT, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_right_shift;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterRight_shift) {
            listener.enterRight_shift(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitRight_shift) {
            listener.exitRight_shift(this);
        }
    }
}


export class Right_shift_assignmentContext extends ParserRuleContext {
    public _first!: Token;
    public _second!: Token;

    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public GT(): TerminalNode {
        return this.getToken(CSharpParser.GT, 0);
    }

    public OP_GE(): TerminalNode {
        return this.getToken(CSharpParser.OP_GE, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_right_shift_assignment;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterRight_shift_assignment) {
            listener.enterRight_shift_assignment(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitRight_shift_assignment) {
            listener.exitRight_shift_assignment(this);
        }
    }
}


export class LiteralContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public boolean_literal(): Boolean_literalContext {
        return this.getTypedRuleContext(Boolean_literalContext, 0) as Boolean_literalContext;
    }

    public string_literal(): String_literalContext {
        return this.getTypedRuleContext(String_literalContext, 0) as String_literalContext;
    }

    public INTEGER_LITERAL(): TerminalNode {
        return this.getToken(CSharpParser.INTEGER_LITERAL, 0);
    }

    public HEX_INTEGER_LITERAL(): TerminalNode {
        return this.getToken(CSharpParser.HEX_INTEGER_LITERAL, 0);
    }

    public BIN_INTEGER_LITERAL(): TerminalNode {
        return this.getToken(CSharpParser.BIN_INTEGER_LITERAL, 0);
    }

    public REAL_LITERAL(): TerminalNode {
        return this.getToken(CSharpParser.REAL_LITERAL, 0);
    }

    public CHARACTER_LITERAL(): TerminalNode {
        return this.getToken(CSharpParser.CHARACTER_LITERAL, 0);
    }

    public NULL_(): TerminalNode {
        return this.getToken(CSharpParser.NULL_, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_literal;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterLiteral) {
            listener.enterLiteral(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitLiteral) {
            listener.exitLiteral(this);
        }
    }
}


export class Boolean_literalContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public TRUE(): TerminalNode {
        return this.getToken(CSharpParser.TRUE, 0);
    }

    public FALSE(): TerminalNode {
        return this.getToken(CSharpParser.FALSE, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_boolean_literal;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterBoolean_literal) {
            listener.enterBoolean_literal(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitBoolean_literal) {
            listener.exitBoolean_literal(this);
        }
    }
}


export class String_literalContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public interpolated_regular_string(): Interpolated_regular_stringContext {
        return this.getTypedRuleContext(Interpolated_regular_stringContext, 0) as Interpolated_regular_stringContext;
    }

    public interpolated_verbatium_string(): Interpolated_verbatium_stringContext {
        return this.getTypedRuleContext(Interpolated_verbatium_stringContext, 0) as Interpolated_verbatium_stringContext;
    }

    public REGULAR_STRING(): TerminalNode {
        return this.getToken(CSharpParser.REGULAR_STRING, 0);
    }

    public VERBATIUM_STRING(): TerminalNode {
        return this.getToken(CSharpParser.VERBATIUM_STRING, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_string_literal;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterString_literal) {
            listener.enterString_literal(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitString_literal) {
            listener.exitString_literal(this);
        }
    }
}


export class Interpolated_regular_stringContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public INTERPOLATED_REGULAR_STRING_START(): TerminalNode {
        return this.getToken(CSharpParser.INTERPOLATED_REGULAR_STRING_START, 0);
    }

    public DOUBLE_QUOTE_INSIDE(): TerminalNode {
        return this.getToken(CSharpParser.DOUBLE_QUOTE_INSIDE, 0);
    }

    public interpolated_regular_string_part_list(): Interpolated_regular_string_partContext[] {
        return this.getTypedRuleContexts(Interpolated_regular_string_partContext) as Interpolated_regular_string_partContext[];
    }

    public interpolated_regular_string_part(i: number): Interpolated_regular_string_partContext {
        return this.getTypedRuleContext(Interpolated_regular_string_partContext, i) as Interpolated_regular_string_partContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_interpolated_regular_string;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterInterpolated_regular_string) {
            listener.enterInterpolated_regular_string(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitInterpolated_regular_string) {
            listener.exitInterpolated_regular_string(this);
        }
    }
}


export class Interpolated_verbatium_stringContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public INTERPOLATED_VERBATIUM_STRING_START(): TerminalNode {
        return this.getToken(CSharpParser.INTERPOLATED_VERBATIUM_STRING_START, 0);
    }

    public DOUBLE_QUOTE_INSIDE(): TerminalNode {
        return this.getToken(CSharpParser.DOUBLE_QUOTE_INSIDE, 0);
    }

    public interpolated_verbatium_string_part_list(): Interpolated_verbatium_string_partContext[] {
        return this.getTypedRuleContexts(Interpolated_verbatium_string_partContext) as Interpolated_verbatium_string_partContext[];
    }

    public interpolated_verbatium_string_part(i: number): Interpolated_verbatium_string_partContext {
        return this.getTypedRuleContext(Interpolated_verbatium_string_partContext, i) as Interpolated_verbatium_string_partContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_interpolated_verbatium_string;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterInterpolated_verbatium_string) {
            listener.enterInterpolated_verbatium_string(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitInterpolated_verbatium_string) {
            listener.exitInterpolated_verbatium_string(this);
        }
    }
}


export class Interpolated_regular_string_partContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public interpolated_string_expression(): Interpolated_string_expressionContext {
        return this.getTypedRuleContext(Interpolated_string_expressionContext, 0) as Interpolated_string_expressionContext;
    }

    public DOUBLE_CURLY_INSIDE(): TerminalNode {
        return this.getToken(CSharpParser.DOUBLE_CURLY_INSIDE, 0);
    }

    public REGULAR_CHAR_INSIDE(): TerminalNode {
        return this.getToken(CSharpParser.REGULAR_CHAR_INSIDE, 0);
    }

    public REGULAR_STRING_INSIDE(): TerminalNode {
        return this.getToken(CSharpParser.REGULAR_STRING_INSIDE, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_interpolated_regular_string_part;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterInterpolated_regular_string_part) {
            listener.enterInterpolated_regular_string_part(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitInterpolated_regular_string_part) {
            listener.exitInterpolated_regular_string_part(this);
        }
    }
}


export class Interpolated_verbatium_string_partContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public interpolated_string_expression(): Interpolated_string_expressionContext {
        return this.getTypedRuleContext(Interpolated_string_expressionContext, 0) as Interpolated_string_expressionContext;
    }

    public DOUBLE_CURLY_INSIDE(): TerminalNode {
        return this.getToken(CSharpParser.DOUBLE_CURLY_INSIDE, 0);
    }

    public VERBATIUM_DOUBLE_QUOTE_INSIDE(): TerminalNode {
        return this.getToken(CSharpParser.VERBATIUM_DOUBLE_QUOTE_INSIDE, 0);
    }

    public VERBATIUM_INSIDE_STRING(): TerminalNode {
        return this.getToken(CSharpParser.VERBATIUM_INSIDE_STRING, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_interpolated_verbatium_string_part;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterInterpolated_verbatium_string_part) {
            listener.enterInterpolated_verbatium_string_part(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitInterpolated_verbatium_string_part) {
            listener.exitInterpolated_verbatium_string_part(this);
        }
    }
}


export class Interpolated_string_expressionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public expression_list(): ExpressionContext[] {
        return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
    }

    public expression(i: number): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(CSharpParser.COMMA, i);
    }

    public COLON(): TerminalNode {
        return this.getToken(CSharpParser.COLON, 0);
    }

    public FORMAT_STRING_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.FORMAT_STRING);
    }

    public FORMAT_STRING(i: number): TerminalNode {
        return this.getToken(CSharpParser.FORMAT_STRING, i);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_interpolated_string_expression;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterInterpolated_string_expression) {
            listener.enterInterpolated_string_expression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitInterpolated_string_expression) {
            listener.exitInterpolated_string_expression(this);
        }
    }
}


export class KeywordContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public ABSTRACT(): TerminalNode {
        return this.getToken(CSharpParser.ABSTRACT, 0);
    }

    public AS(): TerminalNode {
        return this.getToken(CSharpParser.AS, 0);
    }

    public BASE(): TerminalNode {
        return this.getToken(CSharpParser.BASE, 0);
    }

    public BOOL(): TerminalNode {
        return this.getToken(CSharpParser.BOOL, 0);
    }

    public BREAK(): TerminalNode {
        return this.getToken(CSharpParser.BREAK, 0);
    }

    public BYTE(): TerminalNode {
        return this.getToken(CSharpParser.BYTE, 0);
    }

    public CASE(): TerminalNode {
        return this.getToken(CSharpParser.CASE, 0);
    }

    public CATCH(): TerminalNode {
        return this.getToken(CSharpParser.CATCH, 0);
    }

    public CHAR(): TerminalNode {
        return this.getToken(CSharpParser.CHAR, 0);
    }

    public CHECKED(): TerminalNode {
        return this.getToken(CSharpParser.CHECKED, 0);
    }

    public CLASS(): TerminalNode {
        return this.getToken(CSharpParser.CLASS, 0);
    }

    public CONST(): TerminalNode {
        return this.getToken(CSharpParser.CONST, 0);
    }

    public CONTINUE(): TerminalNode {
        return this.getToken(CSharpParser.CONTINUE, 0);
    }

    public DECIMAL(): TerminalNode {
        return this.getToken(CSharpParser.DECIMAL, 0);
    }

    public DEFAULT(): TerminalNode {
        return this.getToken(CSharpParser.DEFAULT, 0);
    }

    public DELEGATE(): TerminalNode {
        return this.getToken(CSharpParser.DELEGATE, 0);
    }

    public DO(): TerminalNode {
        return this.getToken(CSharpParser.DO, 0);
    }

    public DOUBLE(): TerminalNode {
        return this.getToken(CSharpParser.DOUBLE, 0);
    }

    public ELSE(): TerminalNode {
        return this.getToken(CSharpParser.ELSE, 0);
    }

    public ENUM(): TerminalNode {
        return this.getToken(CSharpParser.ENUM, 0);
    }

    public EVENT(): TerminalNode {
        return this.getToken(CSharpParser.EVENT, 0);
    }

    public EXPLICIT(): TerminalNode {
        return this.getToken(CSharpParser.EXPLICIT, 0);
    }

    public EXTERN(): TerminalNode {
        return this.getToken(CSharpParser.EXTERN, 0);
    }

    public FALSE(): TerminalNode {
        return this.getToken(CSharpParser.FALSE, 0);
    }

    public FINALLY(): TerminalNode {
        return this.getToken(CSharpParser.FINALLY, 0);
    }

    public FIXED(): TerminalNode {
        return this.getToken(CSharpParser.FIXED, 0);
    }

    public FLOAT(): TerminalNode {
        return this.getToken(CSharpParser.FLOAT, 0);
    }

    public FOR(): TerminalNode {
        return this.getToken(CSharpParser.FOR, 0);
    }

    public FOREACH(): TerminalNode {
        return this.getToken(CSharpParser.FOREACH, 0);
    }

    public GOTO(): TerminalNode {
        return this.getToken(CSharpParser.GOTO, 0);
    }

    public IF(): TerminalNode {
        return this.getToken(CSharpParser.IF, 0);
    }

    public IMPLICIT(): TerminalNode {
        return this.getToken(CSharpParser.IMPLICIT, 0);
    }

    public IN(): TerminalNode {
        return this.getToken(CSharpParser.IN, 0);
    }

    public INT(): TerminalNode {
        return this.getToken(CSharpParser.INT, 0);
    }

    public INTERFACE(): TerminalNode {
        return this.getToken(CSharpParser.INTERFACE, 0);
    }

    public INTERNAL(): TerminalNode {
        return this.getToken(CSharpParser.INTERNAL, 0);
    }

    public IS(): TerminalNode {
        return this.getToken(CSharpParser.IS, 0);
    }

    public LOCK(): TerminalNode {
        return this.getToken(CSharpParser.LOCK, 0);
    }

    public LONG(): TerminalNode {
        return this.getToken(CSharpParser.LONG, 0);
    }

    public NAMESPACE(): TerminalNode {
        return this.getToken(CSharpParser.NAMESPACE, 0);
    }

    public NEW(): TerminalNode {
        return this.getToken(CSharpParser.NEW, 0);
    }

    public NULL_(): TerminalNode {
        return this.getToken(CSharpParser.NULL_, 0);
    }

    public OBJECT(): TerminalNode {
        return this.getToken(CSharpParser.OBJECT, 0);
    }

    public OPERATOR(): TerminalNode {
        return this.getToken(CSharpParser.OPERATOR, 0);
    }

    public OUT(): TerminalNode {
        return this.getToken(CSharpParser.OUT, 0);
    }

    public OVERRIDE(): TerminalNode {
        return this.getToken(CSharpParser.OVERRIDE, 0);
    }

    public PARAMS(): TerminalNode {
        return this.getToken(CSharpParser.PARAMS, 0);
    }

    public PRIVATE(): TerminalNode {
        return this.getToken(CSharpParser.PRIVATE, 0);
    }

    public PROTECTED(): TerminalNode {
        return this.getToken(CSharpParser.PROTECTED, 0);
    }

    public PUBLIC(): TerminalNode {
        return this.getToken(CSharpParser.PUBLIC, 0);
    }

    public READONLY(): TerminalNode {
        return this.getToken(CSharpParser.READONLY, 0);
    }

    public REF(): TerminalNode {
        return this.getToken(CSharpParser.REF, 0);
    }

    public RETURN(): TerminalNode {
        return this.getToken(CSharpParser.RETURN, 0);
    }

    public SBYTE(): TerminalNode {
        return this.getToken(CSharpParser.SBYTE, 0);
    }

    public SEALED(): TerminalNode {
        return this.getToken(CSharpParser.SEALED, 0);
    }

    public SHORT(): TerminalNode {
        return this.getToken(CSharpParser.SHORT, 0);
    }

    public SIZEOF(): TerminalNode {
        return this.getToken(CSharpParser.SIZEOF, 0);
    }

    public STACKALLOC(): TerminalNode {
        return this.getToken(CSharpParser.STACKALLOC, 0);
    }

    public STATIC(): TerminalNode {
        return this.getToken(CSharpParser.STATIC, 0);
    }

    public STRING(): TerminalNode {
        return this.getToken(CSharpParser.STRING, 0);
    }

    public STRUCT(): TerminalNode {
        return this.getToken(CSharpParser.STRUCT, 0);
    }

    public SWITCH(): TerminalNode {
        return this.getToken(CSharpParser.SWITCH, 0);
    }

    public THIS(): TerminalNode {
        return this.getToken(CSharpParser.THIS, 0);
    }

    public THROW(): TerminalNode {
        return this.getToken(CSharpParser.THROW, 0);
    }

    public TRUE(): TerminalNode {
        return this.getToken(CSharpParser.TRUE, 0);
    }

    public TRY(): TerminalNode {
        return this.getToken(CSharpParser.TRY, 0);
    }

    public TYPEOF(): TerminalNode {
        return this.getToken(CSharpParser.TYPEOF, 0);
    }

    public UINT(): TerminalNode {
        return this.getToken(CSharpParser.UINT, 0);
    }

    public ULONG(): TerminalNode {
        return this.getToken(CSharpParser.ULONG, 0);
    }

    public UNCHECKED(): TerminalNode {
        return this.getToken(CSharpParser.UNCHECKED, 0);
    }

    public UNMANAGED(): TerminalNode {
        return this.getToken(CSharpParser.UNMANAGED, 0);
    }

    public UNSAFE(): TerminalNode {
        return this.getToken(CSharpParser.UNSAFE, 0);
    }

    public USHORT(): TerminalNode {
        return this.getToken(CSharpParser.USHORT, 0);
    }

    public USING(): TerminalNode {
        return this.getToken(CSharpParser.USING, 0);
    }

    public VIRTUAL(): TerminalNode {
        return this.getToken(CSharpParser.VIRTUAL, 0);
    }

    public VOID(): TerminalNode {
        return this.getToken(CSharpParser.VOID, 0);
    }

    public VOLATILE(): TerminalNode {
        return this.getToken(CSharpParser.VOLATILE, 0);
    }

    public WHILE(): TerminalNode {
        return this.getToken(CSharpParser.WHILE, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_keyword;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterKeyword) {
            listener.enterKeyword(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitKeyword) {
            listener.exitKeyword(this);
        }
    }
}


export class Class_definitionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public CLASS(): TerminalNode {
        return this.getToken(CSharpParser.CLASS, 0);
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public class_body(): Class_bodyContext {
        return this.getTypedRuleContext(Class_bodyContext, 0) as Class_bodyContext;
    }

    public type_parameter_list(): Type_parameter_listContext {
        return this.getTypedRuleContext(Type_parameter_listContext, 0) as Type_parameter_listContext;
    }

    public class_base(): Class_baseContext {
        return this.getTypedRuleContext(Class_baseContext, 0) as Class_baseContext;
    }

    public type_parameter_constraints_clauses(): Type_parameter_constraints_clausesContext {
        return this.getTypedRuleContext(Type_parameter_constraints_clausesContext, 0) as Type_parameter_constraints_clausesContext;
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_class_definition;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterClass_definition) {
            listener.enterClass_definition(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitClass_definition) {
            listener.exitClass_definition(this);
        }
    }
}


export class Struct_definitionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public STRUCT(): TerminalNode {
        return this.getToken(CSharpParser.STRUCT, 0);
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public struct_body(): Struct_bodyContext {
        return this.getTypedRuleContext(Struct_bodyContext, 0) as Struct_bodyContext;
    }

    public type_parameter_list(): Type_parameter_listContext {
        return this.getTypedRuleContext(Type_parameter_listContext, 0) as Type_parameter_listContext;
    }

    public struct_interfaces(): Struct_interfacesContext {
        return this.getTypedRuleContext(Struct_interfacesContext, 0) as Struct_interfacesContext;
    }

    public type_parameter_constraints_clauses(): Type_parameter_constraints_clausesContext {
        return this.getTypedRuleContext(Type_parameter_constraints_clausesContext, 0) as Type_parameter_constraints_clausesContext;
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public READONLY(): TerminalNode {
        return this.getToken(CSharpParser.READONLY, 0);
    }

    public REF(): TerminalNode {
        return this.getToken(CSharpParser.REF, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_struct_definition;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterStruct_definition) {
            listener.enterStruct_definition(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitStruct_definition) {
            listener.exitStruct_definition(this);
        }
    }
}


export class Interface_definitionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public INTERFACE(): TerminalNode {
        return this.getToken(CSharpParser.INTERFACE, 0);
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public class_body(): Class_bodyContext {
        return this.getTypedRuleContext(Class_bodyContext, 0) as Class_bodyContext;
    }

    public variant_type_parameter_list(): Variant_type_parameter_listContext {
        return this.getTypedRuleContext(Variant_type_parameter_listContext, 0) as Variant_type_parameter_listContext;
    }

    public interface_base(): Interface_baseContext {
        return this.getTypedRuleContext(Interface_baseContext, 0) as Interface_baseContext;
    }

    public type_parameter_constraints_clauses(): Type_parameter_constraints_clausesContext {
        return this.getTypedRuleContext(Type_parameter_constraints_clausesContext, 0) as Type_parameter_constraints_clausesContext;
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_interface_definition;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterInterface_definition) {
            listener.enterInterface_definition(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitInterface_definition) {
            listener.exitInterface_definition(this);
        }
    }
}


export class Enum_definitionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public ENUM(): TerminalNode {
        return this.getToken(CSharpParser.ENUM, 0);
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public enum_body(): Enum_bodyContext {
        return this.getTypedRuleContext(Enum_bodyContext, 0) as Enum_bodyContext;
    }

    public enum_base(): Enum_baseContext {
        return this.getTypedRuleContext(Enum_baseContext, 0) as Enum_baseContext;
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_enum_definition;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterEnum_definition) {
            listener.enterEnum_definition(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitEnum_definition) {
            listener.exitEnum_definition(this);
        }
    }
}


export class Delegate_definitionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public DELEGATE(): TerminalNode {
        return this.getToken(CSharpParser.DELEGATE, 0);
    }

    public return_type(): Return_typeContext {
        return this.getTypedRuleContext(Return_typeContext, 0) as Return_typeContext;
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public variant_type_parameter_list(): Variant_type_parameter_listContext {
        return this.getTypedRuleContext(Variant_type_parameter_listContext, 0) as Variant_type_parameter_listContext;
    }

    public formal_parameter_list(): Formal_parameter_listContext {
        return this.getTypedRuleContext(Formal_parameter_listContext, 0) as Formal_parameter_listContext;
    }

    public type_parameter_constraints_clauses(): Type_parameter_constraints_clausesContext {
        return this.getTypedRuleContext(Type_parameter_constraints_clausesContext, 0) as Type_parameter_constraints_clausesContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_delegate_definition;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterDelegate_definition) {
            listener.enterDelegate_definition(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitDelegate_definition) {
            listener.exitDelegate_definition(this);
        }
    }
}


export class Event_declarationContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public EVENT(): TerminalNode {
        return this.getToken(CSharpParser.EVENT, 0);
    }

    public type_(): Type_Context {
        return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
    }

    public variable_declarators(): Variable_declaratorsContext {
        return this.getTypedRuleContext(Variable_declaratorsContext, 0) as Variable_declaratorsContext;
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public member_name(): Member_nameContext {
        return this.getTypedRuleContext(Member_nameContext, 0) as Member_nameContext;
    }

    public OPEN_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_BRACE, 0);
    }

    public event_accessor_declarations(): Event_accessor_declarationsContext {
        return this.getTypedRuleContext(Event_accessor_declarationsContext, 0) as Event_accessor_declarationsContext;
    }

    public CLOSE_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_BRACE, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_event_declaration;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterEvent_declaration) {
            listener.enterEvent_declaration(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitEvent_declaration) {
            listener.exitEvent_declaration(this);
        }
    }
}


export class Field_declarationContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public variable_declarators(): Variable_declaratorsContext {
        return this.getTypedRuleContext(Variable_declaratorsContext, 0) as Variable_declaratorsContext;
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_field_declaration;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterField_declaration) {
            listener.enterField_declaration(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitField_declaration) {
            listener.exitField_declaration(this);
        }
    }
}


export class Property_declarationContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public member_name(): Member_nameContext {
        return this.getTypedRuleContext(Member_nameContext, 0) as Member_nameContext;
    }

    public OPEN_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_BRACE, 0);
    }

    public accessor_declarations(): Accessor_declarationsContext {
        return this.getTypedRuleContext(Accessor_declarationsContext, 0) as Accessor_declarationsContext;
    }

    public CLOSE_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_BRACE, 0);
    }

    public right_arrow(): Right_arrowContext {
        return this.getTypedRuleContext(Right_arrowContext, 0) as Right_arrowContext;
    }

    public throwable_expression(): Throwable_expressionContext {
        return this.getTypedRuleContext(Throwable_expressionContext, 0) as Throwable_expressionContext;
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public ASSIGNMENT(): TerminalNode {
        return this.getToken(CSharpParser.ASSIGNMENT, 0);
    }

    public variable_initializer(): Variable_initializerContext {
        return this.getTypedRuleContext(Variable_initializerContext, 0) as Variable_initializerContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_property_declaration;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterProperty_declaration) {
            listener.enterProperty_declaration(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitProperty_declaration) {
            listener.exitProperty_declaration(this);
        }
    }
}


export class Constant_declarationContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public CONST(): TerminalNode {
        return this.getToken(CSharpParser.CONST, 0);
    }

    public type_(): Type_Context {
        return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
    }

    public constant_declarators(): Constant_declaratorsContext {
        return this.getTypedRuleContext(Constant_declaratorsContext, 0) as Constant_declaratorsContext;
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_constant_declaration;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterConstant_declaration) {
            listener.enterConstant_declaration(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitConstant_declaration) {
            listener.exitConstant_declaration(this);
        }
    }
}


export class Indexer_declarationContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public THIS(): TerminalNode {
        return this.getToken(CSharpParser.THIS, 0);
    }

    public OPEN_BRACKET(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_BRACKET, 0);
    }

    public formal_parameter_list(): Formal_parameter_listContext {
        return this.getTypedRuleContext(Formal_parameter_listContext, 0) as Formal_parameter_listContext;
    }

    public CLOSE_BRACKET(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_BRACKET, 0);
    }

    public OPEN_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_BRACE, 0);
    }

    public accessor_declarations(): Accessor_declarationsContext {
        return this.getTypedRuleContext(Accessor_declarationsContext, 0) as Accessor_declarationsContext;
    }

    public CLOSE_BRACE(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_BRACE, 0);
    }

    public right_arrow(): Right_arrowContext {
        return this.getTypedRuleContext(Right_arrowContext, 0) as Right_arrowContext;
    }

    public throwable_expression(): Throwable_expressionContext {
        return this.getTypedRuleContext(Throwable_expressionContext, 0) as Throwable_expressionContext;
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_indexer_declaration;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterIndexer_declaration) {
            listener.enterIndexer_declaration(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitIndexer_declaration) {
            listener.exitIndexer_declaration(this);
        }
    }
}


export class Destructor_definitionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public TILDE(): TerminalNode {
        return this.getToken(CSharpParser.TILDE, 0);
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public body(): BodyContext {
        return this.getTypedRuleContext(BodyContext, 0) as BodyContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_destructor_definition;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterDestructor_definition) {
            listener.enterDestructor_definition(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitDestructor_definition) {
            listener.exitDestructor_definition(this);
        }
    }
}


export class Constructor_declarationContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public body(): BodyContext {
        return this.getTypedRuleContext(BodyContext, 0) as BodyContext;
    }

    public formal_parameter_list(): Formal_parameter_listContext {
        return this.getTypedRuleContext(Formal_parameter_listContext, 0) as Formal_parameter_listContext;
    }

    public constructor_initializer(): Constructor_initializerContext {
        return this.getTypedRuleContext(Constructor_initializerContext, 0) as Constructor_initializerContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_constructor_declaration;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterConstructor_declaration) {
            listener.enterConstructor_declaration(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitConstructor_declaration) {
            listener.exitConstructor_declaration(this);
        }
    }
}


export class Method_declarationContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public method_member_name(): Method_member_nameContext {
        return this.getTypedRuleContext(Method_member_nameContext, 0) as Method_member_nameContext;
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public method_body(): Method_bodyContext {
        return this.getTypedRuleContext(Method_bodyContext, 0) as Method_bodyContext;
    }

    public right_arrow(): Right_arrowContext {
        return this.getTypedRuleContext(Right_arrowContext, 0) as Right_arrowContext;
    }

    public throwable_expression(): Throwable_expressionContext {
        return this.getTypedRuleContext(Throwable_expressionContext, 0) as Throwable_expressionContext;
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public type_parameter_list(): Type_parameter_listContext {
        return this.getTypedRuleContext(Type_parameter_listContext, 0) as Type_parameter_listContext;
    }

    public formal_parameter_list(): Formal_parameter_listContext {
        return this.getTypedRuleContext(Formal_parameter_listContext, 0) as Formal_parameter_listContext;
    }

    public type_parameter_constraints_clauses(): Type_parameter_constraints_clausesContext {
        return this.getTypedRuleContext(Type_parameter_constraints_clausesContext, 0) as Type_parameter_constraints_clausesContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_method_declaration;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterMethod_declaration) {
            listener.enterMethod_declaration(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitMethod_declaration) {
            listener.exitMethod_declaration(this);
        }
    }
}


export class Method_member_nameContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public identifier_list(): IdentifierContext[] {
        return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
    }

    public identifier(i: number): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
    }

    public DOUBLE_COLON(): TerminalNode {
        return this.getToken(CSharpParser.DOUBLE_COLON, 0);
    }

    public DOT_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.DOT);
    }

    public DOT(i: number): TerminalNode {
        return this.getToken(CSharpParser.DOT, i);
    }

    public type_argument_list_list(): Type_argument_listContext[] {
        return this.getTypedRuleContexts(Type_argument_listContext) as Type_argument_listContext[];
    }

    public type_argument_list(i: number): Type_argument_listContext {
        return this.getTypedRuleContext(Type_argument_listContext, i) as Type_argument_listContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_method_member_name;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterMethod_member_name) {
            listener.enterMethod_member_name(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitMethod_member_name) {
            listener.exitMethod_member_name(this);
        }
    }
}


export class Operator_declarationContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public OPERATOR(): TerminalNode {
        return this.getToken(CSharpParser.OPERATOR, 0);
    }

    public overloadable_operator(): Overloadable_operatorContext {
        return this.getTypedRuleContext(Overloadable_operatorContext, 0) as Overloadable_operatorContext;
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public arg_declaration_list(): Arg_declarationContext[] {
        return this.getTypedRuleContexts(Arg_declarationContext) as Arg_declarationContext[];
    }

    public arg_declaration(i: number): Arg_declarationContext {
        return this.getTypedRuleContext(Arg_declarationContext, i) as Arg_declarationContext;
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public body(): BodyContext {
        return this.getTypedRuleContext(BodyContext, 0) as BodyContext;
    }

    public right_arrow(): Right_arrowContext {
        return this.getTypedRuleContext(Right_arrowContext, 0) as Right_arrowContext;
    }

    public throwable_expression(): Throwable_expressionContext {
        return this.getTypedRuleContext(Throwable_expressionContext, 0) as Throwable_expressionContext;
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(CSharpParser.SEMICOLON, 0);
    }

    public IN_list(): TerminalNode[] {
        return this.getTokens(CSharpParser.IN);
    }

    public IN(i: number): TerminalNode {
        return this.getToken(CSharpParser.IN, i);
    }

    public COMMA(): TerminalNode {
        return this.getToken(CSharpParser.COMMA, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_operator_declaration;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterOperator_declaration) {
            listener.enterOperator_declaration(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitOperator_declaration) {
            listener.exitOperator_declaration(this);
        }
    }
}


export class Arg_declarationContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public type_(): Type_Context {
        return this.getTypedRuleContext(Type_Context, 0) as Type_Context;
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public ASSIGNMENT(): TerminalNode {
        return this.getToken(CSharpParser.ASSIGNMENT, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_arg_declaration;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterArg_declaration) {
            listener.enterArg_declaration(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitArg_declaration) {
            listener.exitArg_declaration(this);
        }
    }
}


export class Method_invocationContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public argument_list(): Argument_listContext {
        return this.getTypedRuleContext(Argument_listContext, 0) as Argument_listContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_method_invocation;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterMethod_invocation) {
            listener.enterMethod_invocation(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitMethod_invocation) {
            listener.exitMethod_invocation(this);
        }
    }
}


export class Object_creation_expressionContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public OPEN_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.OPEN_PARENS, 0);
    }

    public CLOSE_PARENS(): TerminalNode {
        return this.getToken(CSharpParser.CLOSE_PARENS, 0);
    }

    public argument_list(): Argument_listContext {
        return this.getTypedRuleContext(Argument_listContext, 0) as Argument_listContext;
    }

    public object_or_collection_initializer(): Object_or_collection_initializerContext {
        return this.getTypedRuleContext(Object_or_collection_initializerContext, 0) as Object_or_collection_initializerContext;
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_object_creation_expression;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterObject_creation_expression) {
            listener.enterObject_creation_expression(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitObject_creation_expression) {
            listener.exitObject_creation_expression(this);
        }
    }
}


export class IdentifierContext extends ParserRuleContext {
    constructor(parser?: CSharpParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public IDENTIFIER(): TerminalNode {
        return this.getToken(CSharpParser.IDENTIFIER, 0);
    }

    public ADD(): TerminalNode {
        return this.getToken(CSharpParser.ADD, 0);
    }

    public ALIAS(): TerminalNode {
        return this.getToken(CSharpParser.ALIAS, 0);
    }

    public ARGLIST(): TerminalNode {
        return this.getToken(CSharpParser.ARGLIST, 0);
    }

    public ASCENDING(): TerminalNode {
        return this.getToken(CSharpParser.ASCENDING, 0);
    }

    public ASYNC(): TerminalNode {
        return this.getToken(CSharpParser.ASYNC, 0);
    }

    public AWAIT(): TerminalNode {
        return this.getToken(CSharpParser.AWAIT, 0);
    }

    public BY(): TerminalNode {
        return this.getToken(CSharpParser.BY, 0);
    }

    public DESCENDING(): TerminalNode {
        return this.getToken(CSharpParser.DESCENDING, 0);
    }

    public DYNAMIC(): TerminalNode {
        return this.getToken(CSharpParser.DYNAMIC, 0);
    }

    public EQUALS(): TerminalNode {
        return this.getToken(CSharpParser.EQUALS, 0);
    }

    public FROM(): TerminalNode {
        return this.getToken(CSharpParser.FROM, 0);
    }

    public GET(): TerminalNode {
        return this.getToken(CSharpParser.GET, 0);
    }

    public GROUP(): TerminalNode {
        return this.getToken(CSharpParser.GROUP, 0);
    }

    public INTO(): TerminalNode {
        return this.getToken(CSharpParser.INTO, 0);
    }

    public JOIN(): TerminalNode {
        return this.getToken(CSharpParser.JOIN, 0);
    }

    public LET(): TerminalNode {
        return this.getToken(CSharpParser.LET, 0);
    }

    public NAMEOF(): TerminalNode {
        return this.getToken(CSharpParser.NAMEOF, 0);
    }

    public ON(): TerminalNode {
        return this.getToken(CSharpParser.ON, 0);
    }

    public ORDERBY(): TerminalNode {
        return this.getToken(CSharpParser.ORDERBY, 0);
    }

    public PARTIAL(): TerminalNode {
        return this.getToken(CSharpParser.PARTIAL, 0);
    }

    public REMOVE(): TerminalNode {
        return this.getToken(CSharpParser.REMOVE, 0);
    }

    public SELECT(): TerminalNode {
        return this.getToken(CSharpParser.SELECT, 0);
    }

    public SET(): TerminalNode {
        return this.getToken(CSharpParser.SET, 0);
    }

    public UNMANAGED(): TerminalNode {
        return this.getToken(CSharpParser.UNMANAGED, 0);
    }

    public VAR(): TerminalNode {
        return this.getToken(CSharpParser.VAR, 0);
    }

    public WHEN(): TerminalNode {
        return this.getToken(CSharpParser.WHEN, 0);
    }

    public WHERE(): TerminalNode {
        return this.getToken(CSharpParser.WHERE, 0);
    }

    public YIELD(): TerminalNode {
        return this.getToken(CSharpParser.YIELD, 0);
    }

    public get ruleIndex(): number {
        return CSharpParser.RULE_identifier;
    }

    public enterRule(listener: CSharpParserListener): void {
        if (listener.enterIdentifier) {
            listener.enterIdentifier(this);
        }
    }

    public exitRule(listener: CSharpParserListener): void {
        if (listener.exitIdentifier) {
            listener.exitIdentifier(this);
        }
    }
}
