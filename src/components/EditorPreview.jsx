import { memo } from "react";
import Markdown from "react-markdown";
import { useEditorPreviewContext } from "../context/EditorPreviewContextProvider";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const EditorPreview_ = ({ ...props }) => {
  const { value } = useEditorPreviewContext();

  return (
    <Markdown
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      {...props}
    >
      {value}
    </Markdown>
  );
};

const EditorPreview = memo(EditorPreview_);

export default EditorPreview;
