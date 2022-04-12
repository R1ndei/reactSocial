import posts from "./Post.module.css"

const Post= (props) => {
    return (
        <div className={posts.item}>
            <img alt="1" src="https://icon-library.com/images/avatar-png-icon/avatar-png-icon-13.jpg"/>
            <p>MY MESSAGE: {props.message}</p>
        </div>
    )

}

export default Post;