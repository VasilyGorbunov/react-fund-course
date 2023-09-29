import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {useState} from "react";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post,
            id: Date.now()
        }
        create(newPost);
        setPost({title: '', body: ''})
    }

    return (
        <form style={{marginTop: '14px'}}>
            <MyInput
                type="text"
                placeholder="Title"
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
            />

            <MyInput
                type="text"
                placeholder="Description"
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
            />

            <MyButton onClick={addNewPost}>Create Post</MyButton>
        </form>
    );
};

export default PostForm;