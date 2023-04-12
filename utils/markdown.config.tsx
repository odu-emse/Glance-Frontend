export const markdownConfig = {
	// Map `h1` (`# heading`) to use `h2`s.
	h1: ({ node, ...props }) => <p {...props} />,
	h2: ({ node, ...props }) => <p {...props} />,
	h3: ({ node, ...props }) => <p {...props} />,
	h4: ({ node, ...props }) => <p {...props} />,
	h5: ({ node, ...props }) => <p {...props} />,
	h6: ({ node, ...props }) => <p {...props} />,
	strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
	ol: ({ node, ...props }) => <ol className="list-decimal ml-4" {...props} />,
	ul: ({ node, ...props }) => <ul className="list-disc ml-4" {...props} />,
}
