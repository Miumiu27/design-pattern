import { useRef, useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";


interface SimpleTextEditorProps {
  setBody: (content: string) => void;
}

export default function SimpleTextEditor({ setBody }: SimpleTextEditorProps) {
  const editorRef = useRef<any>(null);
  const [editorContent] = useState<string>(
    "<p>This is the initial content of the editor.</p>"
  );

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.setContent(editorContent);
    }
  }, [editorContent]);

  return (
    <>
      <Editor
        apiKey="y5er4uvlgf4kjdefkgwdxgu7c2y7wboagk98c647tykmo4nf"
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue={editorContent}
        init={{
          height: 500,
          menubar: true,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | " +
            "bullist numlist outdent indent | removeformat | help | customParagraph customImage",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          file_picker_types: "image",
          file_picker_callback: function (
            callback: (url: string) => void,
            _value: any,
            _meta: any
          ) {
            const input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");

            input.addEventListener("change", (e) => {
              if (e.target) {
                const file = (e.target as HTMLInputElement).files?.[0];

                if (file) {
                  const reader = new FileReader();
                  reader.addEventListener("load", () => {
                    callback(reader.result as string);
                  });
                  reader.readAsDataURL(file);
                }
              }
            });

            input.click();
          },
        }}
        onEditorChange={(newContent) => setBody(newContent)} // Update body on editor change
      />
    </>
  );
}
