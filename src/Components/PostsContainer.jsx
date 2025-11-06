import PostCard from "./PostCard";

export default function PostsContainer({ posts }) {
  return (
    <div className="PostsContainer">
      {posts.map((p, index) => (
        <PostCard key={index} title={p.title} body={p.body} />
      ))}
    </div>
  );
}