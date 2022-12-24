import "./App.css";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  return (
    <div className="App">
      <h1>Lesson 2</h1>
      <AddPostForm />
      <PostsList />
    </div>
  );
}

export default App;
