// Token colors for syntax highlighting
export default function getTokenColors(colors) {
  const c = colors.syntax;

  return [
    {
      settings: {
        foreground: colors.foreground.bright,
      }
    },
    {
      name: "Comment",
      scope: ["comment"],
      settings: {
        foreground: c.comment,
        fontStyle: "italic"
      }
    },
    {
      name: "String",
      scope: ["string", "entity.name.import"],
      settings: {
        foreground: c.string
      }
    },
    {
      name: "Number",
      scope: "constant.numeric",
      settings: {
        foreground: c.number
      }
    },
    {
      name: "Constant",
      scope: ["constant"],
      settings: {
        foreground: c.constant
      }
    },
    {
      name: "Entity",
      scope: ["entity"],
      settings: {
        foreground: c.entity
      }
    },
    {
      name: "Variable",
      scope: [
        "variable",
        "keyword.operator.star.sql",
      ],
      settings: {
        foreground: c.variable
      }
    },
    {
      name: "Keyword",
      scope: [
        "keyword",
        "storage",
        "variable.other.property",
      ],
      settings: {
        foreground: c.keyword
      }
    },
    {
      name: "Storage type",
      scope: [
        "markup.underline.link.markdown",
        "markup.underline.link.image.markdown",
        "meta.image.inline.markdown",
        "markup.bold.markdown",
        "markup.italic.markdown"
      ],
      settings: {
        fontStyle: "",
        foreground: c.type
      }
    },
    {
      name: "Inherited class",
      scope: "entity.other.inherited-class",
      settings: {
        fontStyle: "italic underline",
        foreground: c.entity
      }
    },
    {
      name: "Function name",
      scope: [
        "entity.name.function",
        "support.function",
      ],
      settings: {
        fontStyle: "",
        foreground: c.function
      }
    },
    {
      name: "Tag attribute",
      scope: "entity.other.attribute-name",
      settings: {
        fontStyle: "",
        foreground: c.entity
      }
    },
    {
      name: "Library constant",
      scope: "support.constant",
      settings: {
        fontStyle: "",
        foreground: c.entity
      }
    },
    {
      name: "Library class/type",
      scope: [
        "support.type",
        "support.class"
      ],
      settings: {
        fontStyle: "italic",
        foreground: c.entity
      }
    },
    {
      name: "Library variable",
      scope: "support.other.variable",
      settings: {}
    },
    {
      name: "Invalid",
      scope: "invalid",
      settings: {
        fontStyle: "",
        foreground: colors.foreground.bright
      }
    },
    {
      name: "Invalid deprecated",
      scope: "invalid.deprecated",
      settings: {
        foreground: colors.foreground.bright
      }
    },
    {
      name: "JSON String",
      scope: "meta.structure.dictionary.json string.quoted.double.json",
      settings: {
        foreground: c.number
      }
    },
    {
      name: "diff.header",
      scope: [
        "meta.diff",
        "meta.diff.header"
      ],
      settings: {
        foreground: "#75715E"
      }
    },
    {
      name: "diff.deleted",
      scope: "markup.deleted",
      settings: {
        foreground: "#00A8C6"
      }
    },
    {
      name: "diff.inserted",
      scope: "markup.inserted",
      settings: {
        foreground: c.comment
      }
    },
    {
      name: "diff.changed",
      scope: "markup.changed",
      settings: {
        foreground: "#E6DB74"
      }
    },
    {
      scope: "constant.numeric.line-number.find-in-files - match",
      settings: {
        foreground: "#8FBE00A0"
      }
    },
    {
      scope: "entity.name.filename.find-in-files",
      settings: {
        foreground: "#E6DB74"
      }
    },
    {
      scope: [
        "meta.property-value",
        "support.constant.property-value",
        "constant.other.color"
      ],
      settings: {
        foreground: c.number
      }
    },
    {
      scope: "meta.structure.dictionary.json string.quoted.double.json",
      settings: {
        foreground: c.entity
      }
    },
    {
      scope: "meta.structure.dictionary.value.json string.quoted.double.json",
      settings: {
        foreground: c.number
      }
    },
    {
      name: "Function argument",
      scope: "meta.property-name support.type.property-name",
      settings: {}
    },
    {
      name: "Function argument",
      scope: [
        "meta.use support.class.builtin",
        "meta.other.inherited-class support.class.builtin"
      ],
      settings: {
        foreground: colors.syntax.entity,
        fontStyle: "italic"
      }
    },
    {
      name: "Function argument",
      scope: [
        "variable.parameter",
        "entity.name.variable.parameter"
      ],
      settings: {
        foreground: colors.spark.flame
      }
    },
    {
      name: "Coffeescript Function argument",
      scope: [
        "variable.parameter",
        "variable.parameter.function"
      ],
      settings: {
        foreground: colors.syntax.number,
      }
    },
    {
      name: "Coffeescript Function argument",
      scope: "variable.parameter.function.coffee",
      settings: {
        foreground: c.number,
        fontStyle: "italic"
      }
    },
    {
      name: "Markdown Titles",
      scope: "entity.name.section.markdown",
      settings: {
        foreground: c.entity
      }
    },
    {
      name: "Markdown Title Hash",
      scope: "punctuation.definition.heading.markdown",
      settings: {
        foreground: c.entity
      }
    },
    {
      name: "Markdown Raw",
      scope: "markup.raw.inline.markdown",
      settings: {
        foreground: c.number
      }
    },
    {
      name: "Markdown bold stars",
      scope: [
        "punctuation.definition.bold.markdown",
        "punctuation.definition.italic.markdown"
      ],
      settings: {
        foreground: c.entity
      }
    },
    {
      name: "Markdown link title braces",
      scope: [
        "punctuation.definition.string.begin.markdown",
        "punctuation.definition.string.end.markdown"
      ],
      settings: {
        foreground: c.entity
      }
    },
    {
      name: "Markdown link braces",
      scope: "punctuation.definition.metadata.markdown",
      settings: {
        foreground: c.entity
      }
    },
    {
      name: "Markdown bold/italic",
      scope: "markup.italic.markdown",
      settings: {
        fontStyle: "italic"
      }
    },
    {
      name: "Markdown bold/italic",
      scope: "markup.bold.markdown",
      settings: {
        fontStyle: "bold"
      }
    },
    {
      name: "Markdown pre",
      scope: "markup.raw.block.markdown",
      settings: {
        foreground: "#00a8c6"
      }
    },
    {
      name: "GitGutter deleted",
      scope: "markup.deleted.git_gutter",
      settings: {
        foreground: colors.git.deleted
      }
    },
    {
      name: "GitGutter inserted",
      scope: "markup.inserted.git_gutter",
      settings: {
        foreground: colors.git.added
      }
    },
    {
      name: "GitGutter changed",
      scope: "markup.changed.git_gutter",
      settings: {
        foreground: colors.git.modified
      }
    },
    {
      name: "CSS Class",
      scope: "entity.other.attribute-name.class.css",
      settings: {
        foreground: c.number
      }
    }
  ];
}
