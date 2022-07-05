import {CommentsListProps} from "./CommentsListProps";
import {ReactComponent as Like} from "../../../assets/like.svg";

import styles from "./CommentsList.module.css";
import moment from "moment";

const CommentsList = ({authors, comments}: CommentsListProps): JSX.Element => {
    return (
        <section className={styles.container}>
            {comments.map(({created, text, likes, author, parent, id}) => {
                const authorOfCommentary = authors.find((a) => a.id === author);
                const formattedCreated = moment(created).format(
                    "MM.DD.YYYY, h:mm:ss",
                );
                return (
                    <div
                        key={id}
                        className={`${styles.comment} ${
                            parent && styles.inner
                        }`}
                    >
                        <div className={styles.head}>
                            <div
                                className={styles.avatar}
                                style={{
                                    backgroundImage: `url(${authorOfCommentary?.avatar})`,
                                }}
                            ></div>
                            <div>
                                <h3 className={styles.name}>
                                    {authorOfCommentary?.name}
                                </h3>
                                <span className={styles.created}>
                                    {formattedCreated}
                                </span>
                            </div>
                            <div className={styles.like}>
                                <Like /> <span>{likes}</span>
                            </div>
                        </div>
                        <p className={styles.text}>{text}</p>
                    </div>
                );
            })}
        </section>
    );
};

export default CommentsList;
