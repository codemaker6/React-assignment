import React, { useState } from "react";
import { useEffect } from "react";
const Userdata = () => {
  const [userpost, setUserpost] = useState([]);
  const [usercomment, setUsercomment] = useState([]);
  const [flag, setFlag] = useState(false);
  const [flag1, setFlag1] = useState(false);
  useEffect(() => {
    PostApi();
  }, []);
  // Get DATA FROM POST API
  const PostApi = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUserpost(json);
        setFlag(true);
        setFlag1(false);
      });
  };
  // GET DATA FROM COMMENT API
  const CommentApi = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUsercomment(json);
        setFlag1(true);
        setFlag(false);
      });
  };
  //    DELETE DATA functionality
   const Deletepost=(id)=>{
     setUserpost((userpost)=>{
       return userpost.filter((arrayele,index)=>{
         return index!==id;
       })
     }) 
   }
   const Deletepost1=(id)=>{
    setUsercomment((usercomment)=>{
      return usercomment.filter((arrayele,index)=>{
        return index!==id;
      })
    }) 
  }
  return (
    <>
      <h4 className="h4style"> USER API DATA</h4>
      <section className="Section-for-api">
        <section className="Section-for-api1">
          <div className="buttonsection">
            <button className="apibutton buttondis">User</button>
            <button className="apibutton" onClick={PostApi}>
              Posts
            </button>
            <button className="apibutton" onClick={CommentApi}>
              Comments
            </button>
            <button className="apibutton buttondis" disabled>
              Todos
            </button>
            <button className="apibutton buttondis" disabled>
              Photos
            </button>
            <button className="apibutton buttondis" disabled>
              Albums
            </button>
          </div>
        </section>
        {flag ? (
          <section className="Section-for-api2">
            <div className="tablesection">
              <h3>POST API</h3>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">title</th>
                    <th scope="col">body</th>
                    <th scope="col">DELETE</th>
                  </tr>
                </thead>
                <tbody>
                  {userpost.map((item,index) => (
                    <tr>
                      <th scope="row">{item.id}</th>
                      <td>{item.title}</td>
                      <td>{item.body}</td>
                      <td>
                        {" "}
                        <button
                          className="deletebutton"
                          onClick={()=>Deletepost(index)}
                        >
                          Delete
                        </button>
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
        {/* comment section */}
        {flag1 ? (
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
                  {usercomment.map((item,index) => (
                    <tr>
                      <th scope="row">{item.id}</th>
                      <td>{item.email}</td>
                      <td>{item.name}</td>
                      <td>{item.body}</td>
                      <td>
                        {" "}
                        <button
                          className="deletebutton"
                          onClick={() => Deletepost1(index)}
                        >
                          Delete
                        </button>
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
export default Userdata;
