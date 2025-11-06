export default function PostForm({ newPost, handleOnChange, handleOnSubmit }) {
  return (
    <div className="PostForm">
      <form onSubmit={handleOnSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={newPost.title} onChange={handleOnChange} />
        <br />
        <label>Body:</label>
        <input type="text" name="body" value={newPost.body} onChange={handleOnChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}