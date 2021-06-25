import React, { useState } from "react";
import { useEffect } from "react";
const Admindata = () => {
  const [userdata, setUserdata] = useState([]);
  const [userpost, setUserpost] = useState([]);
  const [usercomment, setUsercomment] = useState([]);
  const [usertodo, setUsertodo] = useState([]);
  const [userphoto, setUserphoto] = useState([]);
  const [useralbum, setUseralbum] = useState([]);
  const [flag, setFlag] = useState(false);
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [flag4, setFlag4] = useState(false);
  const [flag5, setFlag5] = useState(false);
  useEffect(() => {
    UserApi();
  }, []);
  // GET DATA FROM USER API
  const UserApi = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUserdata(json);
        setFlag(true);
        setFlag1(false);
        setFlag2(false);
        setFlag3(false);
        setFlag4(false);
        setFlag5(false);
      });
  };
  // Get DATA FROM POST API
  const PostApi = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUserpost(json);
        setFlag1(true);
        setFlag(false);
        setFlag2(false);
        setFlag3(false);
        setFlag4(false);
        setFlag5(false);
      });
  };
  // GET DATA FROMK COMMENT API
  const CommentApi = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUsercomment(json);
        setFlag2(true);
        setFlag(false);
        setFlag1(false);
        setFlag3(false);
        setFlag4(false);
        setFlag5(false);
      });
  };
  //  GET DATA FROM TODOS API
  const TodoApi = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUsertodo(json);
        setFlag3(true);
        setFlag(false);
        setFlag1(false);
        setFlag2(false);
        setFlag4(false);
        setFlag5(false);
      });
  };
  //  GET DATA FROM PHOTO API
  const PhotosApi = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUserphoto(json);
        setFlag4(true);
        setFlag(false);
        setFlag1(false);
        setFlag2(false);
        setFlag3(false);
        setFlag5(false);
      });
  };
  //  GET DATA FROM ALBUM API
  const AlbumApi = () => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUseralbum(json);
        setFlag5(true);
        setFlag(false);
        setFlag1(false);
        setFlag2(false);
        setFlag3(false);
        setFlag4(false);
      });
  };

  return (
    <>
      <h4 className="h4style">ADMIN API DATA</h4>
      <section className="Section-for-api">
        <section className="Section-for-api1">
          <div className="buttonsection">
            <button className="apibutton" onClick={UserApi}>
              User
            </button>
            <button className="apibutton" onClick={PostApi}>
              Posts
            </button>
            <button className="apibutton" onClick={CommentApi}>
              Comments
            </button>
            <button className="apibutton" onClick={TodoApi}>
              Todos
            </button>
            <button className="apibutton" onClick={PhotosApi}>
              Photos
            </button>
            <button className="apibutton" onClick={AlbumApi}>
              Albums
            </button>
          </div>
        </section>
        {flag ? (
          <section className="Section-for-api2">
            <div className="tablesection">
              <h3>User API</h3>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">phone</th>
                    <th scope="col">username</th>
                    <th scope="col">website</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {userdata.map((item) => (
                    <tr>
                      <th scope="row">{item.id}</th>
                      <td>{item.name}</td>
                      <td>{item.phone}</td>
                      <td>{item.username}</td>
                      <td>{item.website}</td>
                      <td>
                        <button className="deletebutton">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : (
          ""
        )}
        {/* post section */}
        {flag1 ? (
          <section className="Section-for-api2">
            <div className="tablesection">
              <h3>POST API</h3>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">title</th>
                    <th scope="col">body</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {userpost.map((item) => (
                    <tr>
                      <th scope="row">{item.id}</th>
                      <td>{item.title}</td>
                      <td>{item.body}</td>
                      <td>
                        <button className="deletebutton">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : (
          ""
        )}
        {/* Comment section */}
        {flag2 ? (
          <section className="Section-for-api2">
            <div className="tablesection">
              <h3>Comment API</h3>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">email</th>
                    <th scope="col">name</th>
                    <th scope="col">body</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {usercomment.map((item) => (
                    <tr>
                      <th scope="row">{item.id}</th>
                      <td>{item.email}</td>
                      <td>{item.name}</td>
                      <td>{item.body}</td>
                      <td>
                        <button className="deletebutton">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : (
          ""
        )}
        {/* TODO section */}
        {flag3 ? (
          <section className="Section-for-api2">
            <div className="tablesection">
              <h3>TODO API</h3>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">title</th>
                    <th scope="col">completed</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {usertodo.map((item) => (
                    <tr>
                      <th scope="row">{item.id}</th>
                      <td>{item.title}</td>
                      <td>{item.completed == true ? "true" : "false"}</td>
                      <td>
                        <button className="deletebutton">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : (
          ""
        )}
        {/* PHOTO section */}
        {flag4 ? (
          <section className="Section-for-api2">
            <div className="tablesection">
              <h3>PHOTO API</h3>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">title</th>
                    <th scope="col">url</th>
                    <th scope="col">thumbnail</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {userphoto.map((item) => (
                    <tr>
                      <th scope="row">{item.id}</th>
                      <td>{item.title}</td>
                      <td>{item.url}</td>
                      <td>{item.thumbnailUrl}</td>
                      <td>
                        <button className="deletebutton">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : (
          ""
        )}
        {/* PHOTO section */}
        {flag5 ? (
          <section className="Section-for-api2">
            <div className="tablesection">
              <h3>Album API</h3>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">title</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {useralbum.map((item) => (
                    <tr>
                      <th scope="row">{item.id}</th>
                      <td>{item.title}</td>
                      <td>
                        <button className="deletebutton">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : (
          ""
        )}
      </section>
    </>
  );
};
export default Admindata;
