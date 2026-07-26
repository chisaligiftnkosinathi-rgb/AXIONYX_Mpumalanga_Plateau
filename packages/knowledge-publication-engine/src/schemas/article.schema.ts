export interface Article {
  id: string;
  type: 'journal' | 'research' | 'build-log' | 'vision' | 'collaboration';
  title: string;
  author: string;
  publishDate: string;
  sections: ArticleSection[];
  evidenceCitations: string[];
}

export interface ArticleSection {
  heading: string;
  content: string;
}

export interface CollaborationBrief extends Article {
  type: 'collaboration';
  problemStatement: string;
  axionyxContribution: string;
}
