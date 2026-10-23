import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Clock, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import java from "react-syntax-highlighter/dist/esm/languages/prism/java";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import markup from "react-syntax-highlighter/dist/esm/languages/prism/markup";
import php from "react-syntax-highlighter/dist/esm/languages/prism/php";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("java", java);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("html", markup);
SyntaxHighlighter.registerLanguage("markup", markup);
SyntaxHighlighter.registerLanguage("php", php);
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);

const supportedLanguages = new Set([
  "bash",
  "css",
  "html",
  "java",
  "javascript",
  "json",
  "jsx",
  "markup",
  "php",
  "tsx",
  "typescript",
]);

export interface ProjectDetailsProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  duration?: string;
  year?: string;
  date?: string;
  liveUrl?: string;
  githubUrl?: string;
  codeSnippet?: string;
  codeLanguage?: string;
}

interface ProjectCardProps {
  project: ProjectDetailsProps;
  index?: number;
  detailed?: boolean;
}

const ProjectCard = ({ project, index = 0, detailed = false }: ProjectCardProps) => {
  const [isCodeExpanded, setIsCodeExpanded] = useState(false);
  const requestedLanguage = project.codeLanguage?.toLowerCase();
  const codeLanguage = requestedLanguage && supportedLanguages.has(requestedLanguage)
    ? requestedLanguage
    : "text";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group light-card rounded-lg overflow-hidden border border-gray-200"
    >
      {/* Image */}
      <div className="relative flex h-80 items-center justify-center overflow-hidden bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent" />
        
        {/* Links Overlay */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-md bg-background/80 backdrop-blur flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-md bg-background/80 backdrop-blur flex items-center justify-center hover:bg-primary hover:text-amber transition-colors"
            >
              <FiGithub size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="font-display text-xl font-semibold group-hover:text-gradient-cosmic transition-all">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-2">
          {project.description}
        </p>

        {/* Meta Info */}
        {(project.duration || project.year || project.date) && (
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            {project.duration && (
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {project.duration}
              </span>
            )}
            {project.date ? (
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {project.date}
              </span>
            ) : project.year && (
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {project.year}
              </span>
            )}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-sm bg-primary/10 text-primary border border-primary/20 text-pink-500 font-bold bg-pink-50"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Code Snippet for detailed view */}
        {detailed && project.codeSnippet && (
          <div className="mt-4">
            <button
              type="button"
              aria-expanded={isCodeExpanded}
              onClick={() => setIsCodeExpanded((expanded) => !expanded)}
              className="flex w-full items-center justify-between rounded-md border border-slate-700 bg-[#282c34] px-4 py-3 text-left text-sm text-slate-300 transition-colors hover:bg-[#343943]"
            >
              <span>{isCodeExpanded ? "Hide code" : "Show code"}</span>
              {isCodeExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <AnimatePresence initial={false}>
              {isCodeExpanded && (
                <motion.div
                  key="code-preview"
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  animate={{ height: "auto", opacity: 1, marginTop: 8 }}
                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="overflow-hidden rounded-md border border-slate-700 bg-[#282c34]">
                    <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
                      <span className="text-xs font-medium text-slate-400">Code preview</span>
                      <span className="rounded bg-white/10 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-slate-300">
                        {requestedLanguage || "text"}
                      </span>
                    </div>
                    <div className="overflow-x-auto">
                      <SyntaxHighlighter
                        language={codeLanguage}
                        style={oneDark}
                        showLineNumbers
                        wrapLines
                        lineProps={(lineNumber) => ({
                          className: "code-typing-line",
                          style: { animationDelay: `${(lineNumber - 1) * 70}ms` },
                        })}
                        lineNumberStyle={{ color: "#636d83", minWidth: "2.5em" }}
                        customStyle={{
                          margin: 0,
                          padding: "1rem",
                          background: "transparent",
                          fontSize: "0.75rem",
                          lineHeight: "1.6",
                        }}
                        codeTagProps={{ style: { fontFamily: '"JetBrains Mono", monospace' } }}
                      >
                        {project.codeSnippet}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
