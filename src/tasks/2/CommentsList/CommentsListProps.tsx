export interface Author {
    id: number;
    name: string;
    avatar: string;
}

export interface Comment {
    id: number;
    created: string;
    text: string;
    author: number;
    parent: null;
    likes: number;
}

export interface CommentsListProps {
    authors: Author[];
    comments: Comment[];
}
