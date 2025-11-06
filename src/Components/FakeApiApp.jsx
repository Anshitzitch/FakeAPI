import { useEffect, useState } from "react";
import PostsContainer from "./PostsContainer";
import PostForm from "./PostForm";

export default function FakeApiApp() {
  const [data, setData] = useState([]);            
  const [loading, setLoading] = useState(true);    
  const [newPost, setNewPost] = useState({         
    title: "",
    body: ""
  });

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await res.json();
      setData(json.slice().reverse());             
      setLoading(false);
    }
    fetchPosts();                                 
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // prepend newest first
    setData((prev) => [{ title: newPost.title, body: newPost.body }, ...prev]);
    setNewPost({ title: "", body: "" });
  };

  return (
    <div className="FakeApiApp">                   
      <h1>Fake API App</h1>
      <PostForm
        newPost={newPost}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      />
      {loading ? <h2>Loading...</h2> : <PostsContainer posts={data} />}
    </div>
  );
}