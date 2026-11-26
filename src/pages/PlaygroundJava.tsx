import { useRef, useState } from "react";
import Editor, { type OnMount } from "@monaco-editor/react";
import { Play, Copy, Maximize2, Loader2, ClipboardPaste } from "lucide-react";

const DEFAULT_CODE = `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello React Interview Prep!");
    }
}`;

export default function PlaygroundJava() {
  const editorRef = useRef<any>(null);

  const handleEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };
  const [code, setCode] = useState(DEFAULT_CODE);

  const [output, setOutput] = useState("");

  const [loading, setLoading] = useState(false);

  const outputRef = useRef<HTMLDivElement>(null);

  const scrollToOutput = () => {
    setTimeout(() => {
      outputRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const runCode = async () => {
    try {
      setLoading(true);
      setOutput("Compiling...");
      scrollToOutput();

      const response = await fetch(
        "https://ce.judge0.com/submissions?wait=true",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            source_code: code,
            language_id: 62,
          }),
        },
      );

      const result = await response.json();

      setOutput(
        result.stdout || result.compile_output || result.stderr || "No Output",
      );
    } catch (error) {
      setOutput("Failed to execute code.");
      scrollToOutput();
    } finally {
      setLoading(false);
    }
  };

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
  };

  const pasteCode = async () => {
    try {
      const text = await navigator.clipboard.readText();

      if (text) {
        setCode(text);
      }
    } catch (err) {
      alert("Clipboard access denied. Please use Ctrl + Shift + V.");
    }
  };

  const fullScreen = () => {
    document.getElementById("playground")?.requestFullscreen();
  };

  return (
    <div
      id="playground"
      className="w-full rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl"
    >
      {/* Toolbar */}

      <div className="px-4 py-3 bg-slate-900 border-b border-slate-700">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-white">Java Playground</h2>

            <p className="text-slate-400 text-sm">Powered by Monaco + Judge0</p>
          </div>

          <div className="grid grid-cols-2 md:flex gap-2">
            <button
              onClick={copyCode}
              className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white"
            >
              <Copy size={16} />
              Copy
            </button>

            <button
              onClick={pasteCode}
              className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white"
            >
              <ClipboardPaste size={16} />
              Paste
            </button>

            <button
              onClick={fullScreen}
              className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white"
            >
              <Maximize2 size={16} />
              Full
            </button>

            <button
              disabled={loading}
              onClick={runCode}
              className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium"
            >
              {loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Play size={16} />
              )}
              Run
            </button>
          </div>
        </div>
      </div>

      {/* Editor */}

      <Editor
        height="60vh"
        defaultLanguage="java"
        value={code}
        onMount={handleEditorDidMount}
        onChange={(value) => {
          console.log("changed", value);
          setCode(value || "");
        }}
        theme="vs-dark"
        options={{
          readOnly: false,
          domReadOnly: false,
          contextmenu: true,
          copyWithSyntaxHighlighting: true,
          quickSuggestions: true,
          automaticLayout: true,
          minimap: {
            enabled: false,
          },
          fontSize: 16,
          wordWrap: "on",
          scrollBeyondLastLine: false,
          scrollbar: {
            horizontal: "hidden",
          },
        }}
      />

      {/* Output */}

      <div ref={outputRef} className="border-t border-slate-700">
        <div className="bg-slate-900 px-4 py-2 text-white font-medium">
          Console Output
        </div>

        <pre className="bg-black text-green-400 p-4 overflow-auto min-h-[180px] whitespace-pre-wrap">
          {output || "Click Run to execute Java code"}
        </pre>
      </div>
    </div>
  );
}
