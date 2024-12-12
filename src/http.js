
// HTTP 

//GET
//POST
//PUT
//DELETE
//PATCH

import axios from "axios";

const getPost = async () => {
   const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
   console.log(response.data)
}

// getPost();

const createPost = async () => {
   const response = await axios.post("https://jsonplaceholder.typicode.com/posts-uu", {
      title: "foo",
      body: "bar",
      userId: 1
   });
   console.log(response.status)
}

// createPost();

const updatePost = async () => {
   const response = await axios.put("https://jsonplaceholder.typicode.com/posts/1", {
      title: "foo",
      body: "bar",
      userId: 1
   });
   console.log(response.status)
}

// updatePost();

const deletePost = async () => {
   const response = await axios.delete("https://jsonplaceholder.typicode.com/posts/1");
   console.log(response.data)
}

deletePost();

const patchPost = async () => { 
   const response = await axios.patch("https://jsonplaceholder.typicode.com/posts/1", {
      title: "foo",
   });
   console.log(response.status)
}

// patchPost();