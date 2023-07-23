'use client'
import MarkdownPreview from "@uiw/react-markdown-preview";

const str = `
### Preview Markdown

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/react-md-editor-preview-markdown-vrucl?fontsize=14&hidenavigation=1&theme=dark)

\`\`\`jsx
import React from "react";
import ReactDOM from "react-dom";
import MDEditor from '@uiw/react-md-editor';

export default function App() {
  return (
    <div className="container">
      <MDEditor.Markdown source="Hello Markdown!" />
    </div>
  );
}
\`\`\`
`;

const Article = () => {
  return (
    <div>
      <h1>Article</h1>
      <div className="wmde-markdown-var">
        <MarkdownPreview source={str} />
      </div>
    </div>
  );
};

export default Article;
