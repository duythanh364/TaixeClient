import {useState, useEffect} from 'react'


const Home = () =>{
    const [blogs, setBlogs] = useState(null)
    useEffect(() =>{
      fetch('http://localhost:8000/blogs')
        .then((res) => {
         
          return res.json()})
        .then(res => {
           setBlogs(res);
           
        })
    },[])
    return (
        <div className="home">
          
          {blogs && blogs.map(blog => (
            <div className="blog-preview" key={blog.id} >
              <h2>{ blog.title }</h2>
              <p>Written by { blog.author }</p>
            </div>
          ))}
        </div>
    );
}
 
export default Home;