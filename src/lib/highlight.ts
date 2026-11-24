import { createCssVariablesTheme, createHighlighter } from "shiki";
import type { Example } from "../data/portfolio";

const theme = createCssVariablesTheme({ variablePrefix: "--code-" });
const highlighter = createHighlighter({
  themes: [theme],
  langs: ["kotlin", "shellsession", "cpp", "yaml"],
});

export async function highlight(example: Extract<Example, { kind: "code" }>) {
  return (await highlighter).codeToHtml(example.code.trimEnd(), {
    lang: example.language,
    theme,
    tabindex: false,
  });
}
