import './styles/app.css';

import {useState} from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Vue JS', body: 'Description'},
        {id: 3, title: 'ReactJS', body: 'Description'}
    ]);

    return (
        <div className="App">
            <form style={{marginTop: '14px'}}>
                <input type="text" placeholder="Title"/>
                <input type="text" placeholder="Description"/>
                <MyButton>Create Post</MyButton>
            </form>
            <PostList posts={posts} title="Список постов"/>
        </div>
    );
}

export default App;
