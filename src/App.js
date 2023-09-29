import './styles/app.css';

import {useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'D Description'},
        {id: 2, title: 'Vue JS', body: 'B Description'},
        {id: 3, title: 'ReactJS', body: 'C Description'}
    ]);

    const [selectedSort, setSelectedSort] = useState('')

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = post => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = sort => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Сортировка"
                    options={[
                        {value: 'title', name: 'По заголовку'},
                        {value: 'body', name: 'По описанию'}
                    ]}
                />
            </div>

            {posts.length !== 0
                ?
                <PostList posts={posts} remove={removePost} title="Список постов"/>
                :
                <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
            }

        </div>
    );
}

export default App;
