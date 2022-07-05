import {useEffect, useState} from "react";
import Stopwatch from "./tasks/1/Stopwatch";
import CommentsList from "./tasks/2/CommentsList";
import {Author, Comment} from "./tasks/2/CommentsList/CommentsListProps";
import getDataRequest from "./tasks/2/data/getDataRequest";

function App() {
    const [authors, setAuthors] = useState<Author[]>([]);
    const [comments, setComments] = useState<Comment[]>([]);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getDataRequest();
                if (data) {
                    setAuthors(data.authors);
                    const sortedComments = data.comments.sort(function (a, b) {
                        return b.id < a.id ? 1 : -1;
                    });
                    setComments(sortedComments);
                }
            } catch (err) {
                console.log(err);
                setIsError(true);
            }
        };
        getData();
    }, [comments]);

    return (
        <div className="App">
            {isError ? (
                <div>Error</div>
            ) : (
                <>
                    <Stopwatch />
                    <CommentsList authors={authors} comments={comments} />
                </>
            )}
        </div>
    );
}

export default App;
