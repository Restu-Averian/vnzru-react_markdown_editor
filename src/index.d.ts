declare module "vnzru-react_markdown_editor" {
  import { ReactNode, TextareaHTMLAttributes } from "react";

  export type customActionsProps = {
    /**
     *
     * @param {HTMLButtonElement} e
     * @returns {()=>void}
     *
     * @description
     * custom event click for your custom toolbar data.
     */
    onClickToolbar?: (e: HTMLButtonElement) => void;

    /**
     *
     * @param {React.KeyboardEvent} e
     * @returns {()=>void}
     *
     * @description
     * custom shortcut for your custom toolbar data.
     */
    shortcut?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;

    /**
     * @description
     * The unique name of the custom action.
     */
    name: string;

    /**
     * @description
     * The display text for your custom toolbar data.
     */
    toolbarText: string;

    /**
     * @description
     * The format that wraps the selected text.
     *
     * @example
     * format = "^^" → The selected text will be wrapped like this: `^^selected text^^`
     */
    format: string;

    /**
     * @description
     * A suffix to append at the end of the selected text.
     *
     * @example
     * format="^^"
     * formatSuffix ="--" → The result will be: `^^selected text--`.
     */
    formatSuffix?: string;

    /**
     * @description
     * Allows the selected text to be formatted without an ending suffix.
     *
     * @example
     * format="^^"
     * allowSuffixEmpty =true → The result will be: `^^selected text`.
     */
    allowSuffixEmpty?: boolean;
  };

  export type updateWhenProps =
    | { type: "direct" | "blur" }
    | { type: "delay"; time?: number };

  export type VNZRU_ReactMarkdownEditorProps =
    TextareaHTMLAttributes<HTMLTextAreaElement> & {
      customActions: customActionsProps[];
      updateWhen: updateWhenProps;
    };

  const VNZRU_ReactMarkdownEditor: (
    props: VNZRU_ReactMarkdownEditorProps
  ) => ReactNode;

  export default VNZRU_ReactMarkdownEditor;
}
