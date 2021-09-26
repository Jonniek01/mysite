import React from 'react';
import allblogs from "../components/allblogs";
import Title from '../components/title'

function blogsPage() {
    return(
        <>
        <div className="b-title">
        <Title title={'Blogs By John'} span={'Blogs Page'}/>
        </div>

        <div className="blogspage">

            {
                allblogs.map((blog)=>{
                    return <div className="blog" key={blog.id}>
                        <div className="blog-content">
                            <img src={blog.image} alt=""/>
                            <a href={blog.link} className="blog-link"> 

                           {blog.title}</a>
                            </div>
                        </div>

                }


                )
            }

        </div>
        </>
    )
    
}
export default blogsPage;