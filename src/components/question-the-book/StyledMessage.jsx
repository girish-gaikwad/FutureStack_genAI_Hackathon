import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { cls } from "./utils"

export default function StyledMessage({ role, content, sources }) {
  const isUser = role === "user"

  const markdownComponents = {
    // Custom styling for different markdown elements
    h1: ({ children }) => (
      <h1 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-700 pb-2">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-zinc-100">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-base font-medium mb-2 text-zinc-800 dark:text-zinc-200">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mb-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="mb-3 ml-4 space-y-1 list-disc text-sm text-zinc-700 dark:text-zinc-300">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-3 ml-4 space-y-1 list-decimal text-sm text-zinc-700 dark:text-zinc-300">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-zinc-700 dark:text-zinc-300">
        {children}
      </li>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="italic text-zinc-800 dark:text-zinc-200">
        {children}
      </em>
    ),
    code: ({ inline, children }) => {
      if (inline) {
        return (
          <code className="px-1.5 py-0.5 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded font-mono">
            {children}
          </code>
        )
      }
      return (
        <code className="block p-3 text-xs bg-zinc-50 dark:bg-zinc-900 rounded-lg overflow-x-auto border border-zinc-200 dark:border-zinc-700">
          {children}
        </code>
      )
    },
    pre: ({ children }) => (
      <pre className="mb-3 p-3 text-xs bg-zinc-50 dark:bg-zinc-900 rounded-lg overflow-x-auto border border-zinc-200 dark:border-zinc-700">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mb-3 pl-4 border-l-4 border-zinc-300 dark:border-zinc-600 text-sm text-zinc-600 dark:text-zinc-400 italic">
        {children}
      </blockquote>
    ),
  }

  return (
    <div className={cls("flex gap-3", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <div className="mt-0.5 grid h-7 w-7 place-items-center rounded-full bg-zinc-900 text-[10px] font-bold text-white dark:bg-white dark:text-zinc-900">
          AI
        </div>
      )}
      <div
        className={cls(
          "max-w-[80%] rounded-2xl px-4 py-3 shadow-sm",
          isUser
            ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
            : "bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800",
        )}
      >
        {isUser ? (
          // For user messages, keep simple text formatting
          <div className="whitespace-pre-wrap text-sm">{content}</div>
        ) : (
          // For AI messages, render markdown with custom styling
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={markdownComponents}
            >
              {content}
            </ReactMarkdown>
            
            {/* Show sources if available */}
            {sources && sources.length > 0 && (
              <div className="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-700">
                <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-2">
                  Sources:
                </div>
                <div className="space-y-1">
                  {sources.map((source, index) => (
                    <div key={index} className="text-xs text-zinc-400 dark:text-zinc-500">
                      📖 {source.book} - Page {source.page} (Score: {(source.score * 100).toFixed(1)}%)
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {isUser && (
        <div className="mt-0.5 grid h-7 w-7 place-items-center rounded-full bg-zinc-900 text-[10px] font-bold text-white dark:bg-white dark:text-zinc-900">
          JD
        </div>
      )}
    </div>
  )
}