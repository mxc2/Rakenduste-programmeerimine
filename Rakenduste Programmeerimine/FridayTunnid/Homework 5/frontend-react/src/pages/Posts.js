import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { updatePosts} from "../store/actions";
import { Input, Button, Table} from 'antd';

function Posts() {
  const [title, setTitle] = useState("");
  const [state, dispatch] = useContext(Context);
  const inputRef = useRef(null);
  const createPost = "http://localhost:8081/api/post/create";
  const getPost = "http://localhost:8081/api/post";
  var Post = [{title: "", aID: ""}];

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Author',
      dataIndex: 'aID',
      key: 'aID',
    },
    {
      title: 'Posted',
      dataIndex: 'posted',
      key: 'posted',
    },
    {
      title: 'Modified',
      dataIndex: 'modified',
      key: 'modified',
    },
    {
      title: "Delete",
      key: "delete",
      render: (_, record) => (
        <Button type="link" onClick={() => removePost(record._id)}>Delete</Button>
      ),
    }
  ]

  //Fetchime serverist data
  useEffect(() => {
    fetch(getPost).then(res => {
      return res.json();
    }).then(async (data) => {
      await dispatch(updatePosts(data))
    })
  }, [])

  function removePost(id){
    
    fetch(`http://localhost:8081/api/post/delete/${encodeURIComponent(id)}`, {
      method: 'DELETE',
    }).then(() => {
      fetch(getPost).then(res => {
        return res.json();
      }).then(async (data) => {
        await dispatch(updatePosts(data))
      })
    })
  }

  //Kui vajutatakse submit, siis 
  const handleSubmit = (e) => {
    e.preventDefault();

    Post = {
      title,
      aID: state.auth.user.firstName + " " + state.auth.user.lastName
    }

    AddPost();
  };

  //Saadame andmed serverisse ja siis lihtsalt fetchime uuesti. Pole vist parim lahendus aga see on parim mis praegu tööle suudan panna
  function AddPost(){
    fetch(createPost, {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
          body: JSON.stringify(Post),
      }).then(() => {
          fetch(getPost).then(res => {
            return res.json();
          }).then(async (data) => {
            await dispatch(updatePosts(data))
          })
      }) 
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Posts</h1>
      
        {/* Table for posts */}
        <Table dataSource={state.posts.data} columns={columns} />

        {/* Submit new post  ONLY if logged in*/}
        {state.auth.token && (
          <div>
            <h3> Add new post </h3>
            <form onSubmit={handleSubmit}>
              <Input
                style={{width: 250}}
                ref={inputRef}
                value={title}
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />
              <Button htmlType="submit" type="primary">Submit</Button>
            </form>
          </div>
        )}
    </div>
  );
}

export default Posts;
