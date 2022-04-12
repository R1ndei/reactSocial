import ps from "./MyPosts.module.css"
import Post from "./Post/Post";

const Myposts= () => {
    return (
            <div>
                <div>
                    <button className={ps.but}>My posts</button>
                    <button className={ps.but}>Add posts</button>
                </div>
                <div>
                    <Post message="Mes Number One"/>
                    <Post message="Mes Number Two"/>
                </div>
            </div>
    )

}

export default Myposts;