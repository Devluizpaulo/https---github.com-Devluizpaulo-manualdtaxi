"use client";

import React from 'react';

type HighlightProps = {
  text: string;
  query: string;
};

export function Highlight({ text, query }: HighlightProps) {
  if (!query) {
    return <>{text}</>;
  }
  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={i}>{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export function HighlightContent({ children, query }: { children: React.ReactNode, query: string }) {
  if (!query) {
    return <>{children}</>;
  }

  const highlightRecursively = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === 'string') {
      return <Highlight text={node} query={query} />;
    }

    if (React.isValidElement(node) && node.props.children) {
      return React.cloneElement(node, {
        ...node.props,
        children: React.Children.map(node.props.children, highlightRecursively),
      });
    }
    
    return node;
  };

  return <>{highlightRecursively(children)}</>;
}
