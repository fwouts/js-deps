export const DEPS = {
  "aot/compiler": [
    "compile_metadata",
    "config",
    "identifiers",
    "metadata_resolver",
    "ng_module_compiler",
    "output/abstract_emitter",
    "output/output_ast",
    "style_compiler",
    "summary_resolver",
    "template_parser/template_parser",
    "util",
    "view_compiler/view_compiler",
    "aot/compiler_host",
    "aot/generated_file",
    "aot/static_reflector",
    "aot/static_symbol",
    "aot/static_symbol_resolver",
    "aot/summary_serializer",
    "aot/util"
  ],
  "compile_metadata": [
    "aot/static_symbol",
    "core",
    "lifecycle_reflector",
    "selector",
    "util"
  ],
  "config": [
    "compile_metadata",
    "core",
    "identifiers",
    "output/output_ast",
    "util"
  ],
  "identifiers": [
    "compile_metadata",
    "compile_reflector",
    "core",
    "output/output_ast"
  ],
  "metadata_resolver": [
    "aot/static_symbol",
    "aot/util",
    "assertions",
    "compile_metadata",
    "compile_reflector",
    "config",
    "core",
    "directive_normalizer",
    "directive_resolver",
    "identifiers",
    "lifecycle_reflector",
    "ng_module_resolver",
    "pipe_resolver",
    "schema/element_schema_registry",
    "summary_resolver",
    "util"
  ],
  "ng_module_compiler": [
    "compile_metadata",
    "compile_reflector",
    "core",
    "identifiers",
    "output/output_ast",
    "parse_util",
    "provider_analyzer",
    "util",
    "view_compiler/provider_compiler"
  ],
  "output/abstract_emitter": [
    "parse_util",
    "output/output_ast",
    "output/source_map"
  ],
  "output/output_ast": [
    "parse_util"
  ],
  "style_compiler": [
    "compile_metadata",
    "core",
    "output/output_ast",
    "shadow_css",
    "url_resolver",
    "util"
  ],
  "summary_resolver": [
    "compile_metadata",
    "core"
  ],
  "template_parser/template_parser": [
    "compile_metadata",
    "compile_reflector",
    "config",
    "core",
    "expression_parser/ast",
    "expression_parser/parser",
    "i18n/i18n_html_parser",
    "identifiers",
    "ml_parser/ast",
    "ml_parser/html_parser",
    "ml_parser/html_whitespaces",
    "ml_parser/icu_ast_expander",
    "ml_parser/interpolation_config",
    "ml_parser/tags",
    "parse_util",
    "provider_analyzer",
    "schema/element_schema_registry",
    "selector",
    "style_url_resolver",
    "util",
    "template_parser/binding_parser",
    "template_parser/template_ast",
    "template_parser/template_preparser"
  ],
  "util": [
    "output/output_ast",
    "parse_util"
  ],
  "view_compiler/view_compiler": [
    "compile_metadata",
    "compile_reflector",
    "compiler_util/expression_converter",
    "config",
    "core",
    "expression_parser/ast",
    "identifiers",
    "lifecycle_reflector",
    "ml_parser/tags",
    "output/output_ast",
    "output/value_util",
    "parse_util",
    "schema/element_schema_registry",
    "template_parser/template_ast",
    "util",
    "view_compiler/provider_compiler"
  ],
  "aot/compiler_host": [
    "aot/static_symbol_resolver",
    "aot/summary_resolver"
  ],
  "aot/generated_file": [
    "compile_metadata",
    "output/output_ast",
    "output/ts_emitter"
  ],
  "aot/static_reflector": [
    "compile_metadata",
    "compile_reflector",
    "core",
    "output/output_ast",
    "summary_resolver",
    "util",
    "aot/static_symbol",
    "aot/static_symbol_resolver"
  ],
  "aot/static_symbol_resolver": [
    "summary_resolver",
    "util",
    "aot/static_symbol",
    "aot/util"
  ],
  "aot/summary_serializer": [
    "compile_metadata",
    "output/output_ast",
    "summary_resolver",
    "util",
    "aot/static_symbol",
    "aot/static_symbol_resolver",
    "aot/util"
  ],
  "aot/compiler_factory": [
    "config",
    "core",
    "directive_normalizer",
    "directive_resolver",
    "expression_parser/lexer",
    "expression_parser/parser",
    "i18n/i18n_html_parser",
    "metadata_resolver",
    "ml_parser/html_parser",
    "ng_module_compiler",
    "ng_module_resolver",
    "output/ts_emitter",
    "pipe_resolver",
    "schema/dom_element_schema_registry",
    "style_compiler",
    "template_parser/template_parser",
    "url_resolver",
    "util",
    "view_compiler/view_compiler",
    "aot/compiler",
    "aot/compiler_host",
    "aot/compiler_options",
    "aot/static_reflector",
    "aot/static_symbol",
    "aot/static_symbol_resolver",
    "aot/summary_resolver"
  ],
  "directive_normalizer": [
    "compile_metadata",
    "config",
    "core",
    "ml_parser/ast",
    "ml_parser/html_parser",
    "ml_parser/interpolation_config",
    "resource_loader",
    "style_url_resolver",
    "template_parser/template_preparser",
    "url_resolver",
    "util"
  ],
  "directive_resolver": [
    "compile_reflector",
    "core",
    "util"
  ],
  "expression_parser/lexer": [
    "chars"
  ],
  "expression_parser/parser": [
    "chars",
    "ml_parser/interpolation_config",
    "util",
    "expression_parser/ast",
    "expression_parser/lexer"
  ],
  "i18n/i18n_html_parser": [
    "core",
    "ml_parser/html_parser",
    "ml_parser/interpolation_config",
    "ml_parser/parser",
    "util",
    "i18n/digest",
    "i18n/extractor_merger",
    "i18n/serializers/serializer",
    "i18n/serializers/xliff",
    "i18n/serializers/xliff2",
    "i18n/serializers/xmb",
    "i18n/serializers/xtb",
    "i18n/translation_bundle"
  ],
  "ml_parser/html_parser": [
    "ml_parser/html_tags",
    "ml_parser/interpolation_config",
    "ml_parser/parser"
  ],
  "ng_module_resolver": [
    "compile_reflector",
    "core",
    "directive_resolver",
    "util"
  ],
  "output/ts_emitter": [
    "aot/static_symbol",
    "compile_metadata",
    "output/abstract_emitter",
    "output/output_ast"
  ],
  "pipe_resolver": [
    "compile_reflector",
    "core",
    "directive_resolver",
    "util"
  ],
  "schema/dom_element_schema_registry": [
    "core",
    "ml_parser/tags",
    "util",
    "schema/dom_security_schema",
    "schema/element_schema_registry"
  ],
  "aot/compiler_options": [
    "core"
  ],
  "aot/summary_resolver": [
    "summary_resolver",
    "aot/static_symbol",
    "aot/summary_serializer",
    "aot/util"
  ],
  "compile_reflector": [
    "core",
    "output/output_ast"
  ],
  "lifecycle_reflector": [
    "compile_reflector"
  ],
  "selector": [
    "ml_parser/html_tags"
  ],
  "compiler": [
    "core"
  ],
  "compiler_util/expression_converter": [
    "expression_parser/ast",
    "identifiers",
    "output/output_ast"
  ],
  "css_parser/css_ast": [
    "parse_util",
    "css_parser/css_lexer"
  ],
  "parse_util": [
    "chars",
    "compile_metadata"
  ],
  "css_parser/css_lexer": [
    "chars"
  ],
  "css_parser/css_parser": [
    "chars",
    "parse_util",
    "css_parser/css_ast",
    "css_parser/css_lexer"
  ],
  "ml_parser/ast": [
    "ast_path",
    "parse_util"
  ],
  "ml_parser/interpolation_config": [
    "assertions"
  ],
  "style_url_resolver": [
    "url_resolver"
  ],
  "template_parser/template_preparser": [
    "ml_parser/ast",
    "ml_parser/tags"
  ],
  "i18n/digest": [
    "util",
    "i18n/i18n_ast"
  ],
  "i18n/i18n_ast": [
    "parse_util"
  ],
  "i18n/extractor": [
    "aot/compiler",
    "aot/compiler_factory",
    "aot/static_reflector",
    "aot/static_symbol",
    "aot/static_symbol_resolver",
    "aot/summary_resolver",
    "compile_metadata",
    "config",
    "core",
    "directive_normalizer",
    "directive_resolver",
    "metadata_resolver",
    "ml_parser/html_parser",
    "ml_parser/interpolation_config",
    "ng_module_resolver",
    "parse_util",
    "pipe_resolver",
    "schema/dom_element_schema_registry",
    "util",
    "i18n/message_bundle"
  ],
  "i18n/message_bundle": [
    "ml_parser/html_parser",
    "ml_parser/interpolation_config",
    "parse_util",
    "i18n/extractor_merger",
    "i18n/i18n_ast",
    "i18n/serializers/serializer"
  ],
  "i18n/extractor_merger": [
    "ml_parser/ast",
    "ml_parser/interpolation_config",
    "ml_parser/parser",
    "i18n/i18n_ast",
    "i18n/i18n_parser",
    "i18n/parse_util",
    "i18n/translation_bundle"
  ],
  "ml_parser/parser": [
    "parse_util",
    "ml_parser/ast",
    "ml_parser/interpolation_config",
    "ml_parser/lexer",
    "ml_parser/tags"
  ],
  "i18n/i18n_parser": [
    "expression_parser/lexer",
    "expression_parser/parser",
    "ml_parser/ast",
    "ml_parser/html_tags",
    "ml_parser/interpolation_config",
    "parse_util",
    "i18n/i18n_ast",
    "i18n/serializers/placeholder"
  ],
  "i18n/parse_util": [
    "parse_util"
  ],
  "i18n/translation_bundle": [
    "core",
    "ml_parser/ast",
    "ml_parser/html_parser",
    "util",
    "i18n/i18n_ast",
    "i18n/parse_util",
    "i18n/serializers/serializer"
  ],
  "i18n/serializers/serializer": [
    "i18n/i18n_ast"
  ],
  "i18n/serializers/xliff": [
    "ml_parser/ast",
    "ml_parser/xml_parser",
    "i18n/digest",
    "i18n/i18n_ast",
    "i18n/parse_util",
    "i18n/serializers/serializer",
    "i18n/serializers/xml_helper"
  ],
  "i18n/serializers/xliff2": [
    "ml_parser/ast",
    "ml_parser/xml_parser",
    "i18n/digest",
    "i18n/i18n_ast",
    "i18n/parse_util",
    "i18n/serializers/serializer",
    "i18n/serializers/xml_helper"
  ],
  "i18n/serializers/xmb": [
    "i18n/digest",
    "i18n/i18n_ast",
    "i18n/serializers/serializer",
    "i18n/serializers/xml_helper"
  ],
  "i18n/serializers/xtb": [
    "ml_parser/ast",
    "ml_parser/xml_parser",
    "i18n/i18n_ast",
    "i18n/parse_util",
    "i18n/serializers/serializer",
    "i18n/serializers/xmb"
  ],
  "ml_parser/html_tags": [
    "ml_parser/tags"
  ],
  "ml_parser/xml_parser": [
    "ml_parser/parser",
    "ml_parser/xml_tags"
  ],
  "jit/compiler": [
    "compile_metadata",
    "compile_reflector",
    "config",
    "core",
    "metadata_resolver",
    "ng_module_compiler",
    "output/output_ast",
    "output/output_interpreter",
    "output/output_jit",
    "style_compiler",
    "summary_resolver",
    "template_parser/template_parser",
    "util",
    "view_compiler/view_compiler"
  ],
  "output/output_interpreter": [
    "compile_reflector",
    "output/output_ast",
    "output/ts_emitter"
  ],
  "output/output_jit": [
    "compile_metadata",
    "compile_reflector",
    "output/abstract_emitter",
    "output/abstract_js_emitter",
    "output/output_ast"
  ],
  "schema/element_schema_registry": [
    "core"
  ],
  "ml_parser/html_whitespaces": [
    "ml_parser/ast",
    "ml_parser/parser",
    "ml_parser/tags"
  ],
  "ml_parser/icu_ast_expander": [
    "parse_util",
    "ml_parser/ast"
  ],
  "ml_parser/lexer": [
    "chars",
    "parse_util",
    "ml_parser/interpolation_config",
    "ml_parser/tags"
  ],
  "ml_parser/xml_tags": [
    "ml_parser/tags"
  ],
  "provider_analyzer": [
    "compile_metadata",
    "compile_reflector",
    "identifiers",
    "parse_util",
    "template_parser/template_ast"
  ],
  "view_compiler/provider_compiler": [
    "compile_metadata",
    "compile_reflector",
    "core",
    "identifiers",
    "lifecycle_reflector",
    "output/output_ast",
    "output/value_util",
    "template_parser/template_ast",
    "util"
  ],
  "output/source_map": [
    "util"
  ],
  "output/abstract_js_emitter": [
    "output/abstract_emitter",
    "output/output_ast"
  ],
  "output/js_emitter": [
    "aot/static_symbol",
    "compile_metadata",
    "output/abstract_emitter",
    "output/abstract_js_emitter",
    "output/output_ast"
  ],
  "output/value_util": [
    "util",
    "output/output_ast"
  ],
  "template_parser/template_ast": [
    "ast_path",
    "compile_metadata",
    "core",
    "expression_parser/ast",
    "lifecycle_reflector",
    "parse_util"
  ],
  "schema/dom_security_schema": [
    "core"
  ],
  "template_parser/binding_parser": [
    "compile_metadata",
    "core",
    "expression_parser/ast",
    "expression_parser/parser",
    "ml_parser/interpolation_config",
    "ml_parser/tags",
    "parse_util",
    "schema/element_schema_registry",
    "selector",
    "util",
    "template_parser/template_ast"
  ],
  "version": [
    "util"
  ]
}