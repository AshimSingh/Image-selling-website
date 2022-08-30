import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const info ="The mountains are calling, and I must go.” John Muir perfectly sums up our feelings about these majestic natural wonders. Mountains have always been a source of awe and beauty, and sometimes we don't have the words to capture how much we admire them. Nature quotes can help put into words how much exhilarating it is to look at mountains, climb and hike mountains, ski mountains—and even how much we enjoy them as a powerful metaphor for hard work, exploration, and victory in literature, art, and music."
const ImgCard=({id,author,download_url,notInterested})=>{
    const [seeMore,setSeeMore]=useState(false)
    function notSeeMore(){
        setSeeMore(!seeMore)
    }
    // const {id,author,download_url} =list
    return(
        <>
            <div className="boxModel">
                            <Card className="myCard">
                            <img src={download_url} alt="ashim"></img>
                            <Card.Body>
                                <div className="myTitle">
                                    <div className="author">Author: {author} </div>
                                    <div className="price">${id}</div>
                                </div>
                                <Card.Text style={{padding:"0px 15px"}}>
                                    {seeMore ? info :`${info.substring(0,150)} ...`}
                                    <button className="seeMore_btn" onClick={()=>notSeeMore()}>
                                        {seeMore ? 'See Less': 'See More'}
                                    </button>
                                </Card.Text>
                                <dvi className="mybutton"><Button variant="outline-danger" onClick={()=>notInterested(id)} style={{fontSize:'15px',padding:"2px 10px",fontWeight:"bold",textAlign:'center'}}>Not Interested</Button>{''}</dvi>
                            </Card.Body>
                            </Card>
                        </div>
        </>
    )
}
export default ImgCard