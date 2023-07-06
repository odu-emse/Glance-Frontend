import React from 'react'
import { markdownConfig } from '@/utils/markdown.config'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import ReactMarkdown from 'react-markdown'

const MarkdownContainer = ({ children }) => (
	<ReactMarkdown
		components={markdownConfig}
		remarkPlugins={[remarkGfm, remarkMath]}
		rehypePlugins={[rehypeKatex]}
	>
		{children}
	</ReactMarkdown>
)

export default MarkdownContainer
