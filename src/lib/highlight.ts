import { createHighlighter } from "shiki";
import type { Example } from "../data/portfolio";

const themes = { light: "github-light-default", dark: "github-dark-default" } as const;
const highlighter = createHighlighter({
  themes: Object.values(themes),
  langs: [
    "kotlin",
    "cpp",
    "yaml",
    "shellscript",
    "json",
    {
      name: "shell-json",
      scopeName: "text.shell-json",
      repository: {},
      patterns: [
        {
          begin: "^(\\$)\\s+(\\S+)",
          beginCaptures: {
            1: { name: "keyword.operator.shell" },
            2: { name: "entity.name.function.shell" },
          },
          end: "$",
          patterns: [{ include: "source.shell" }],
        },
        { include: "source.json" },
      ],
    },
  ],
});

export async function highlight(example: Extract<Example, { kind: "code" }>) {
  return (await highlighter).codeToHtml(example.code.trimEnd(), {
    lang: example.language,
    themes,
    defaultColor: "light-dark()",
    tabindex: false,
  });
}
