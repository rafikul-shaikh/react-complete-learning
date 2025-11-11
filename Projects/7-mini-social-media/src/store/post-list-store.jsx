import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = () => {};
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });

    //console.log(`delete post called for : ${postId}`);
  };
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Mern stack learning ",
    body: " Hi, I am Rafikul , i am very excited to learn new things , Currently i am learning react ",
    reactions: 2,
    userId: "user-9",
    tags: ["Skill", "Kolkata", "Enjoying"],
  },
  {
    id: "2",
    title: "AI ka Market hai bhai ",
    body: " Ai to sikhna he padhega Productivity badhane ke liye ",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating", "Right"],
  },
];
export default PostListProvider;
