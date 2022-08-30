
import ImgCard from "./card";

const Images = ({listImage})=>{
    return(
        <>
            <div className='title'>
                <h1>Our Image Gallery</h1>
            </div>
            {
                
                listImage.map((list)=>{
                    return(
                        <ImgCard key={list.id} {...list}></ImgCard>
                    )
                })
            }
            {/* <div className="boxModel">
                <Card className="myCard">
                <img src="https://picsum.photos/id/1016/3844/2563"></img>
                <Card.Body>
                    <div className="myTitle">
                        <div className="author">Author: </div>
                        <div className="price">$500</div>
                    </div>
                    <Card.Text style={{padding:"0px 15px"}}>
                        Deserts…
                        Nothing quite like them.
                        Endless sandy scenery, wavy dunes, sand all squishy underfoot –
                        or blowing up into your face by the wind; in fact, sand: 
                        EVERYWHERE! In your boots, in your pockets, in your… teeth! But despite such petty tortures.....
                    </Card.Text>
                    <dvi className="mybutton"><Button variant="outline-danger" style={{fontSize:'15px',padding:"2px 10px",fontWeight:"bold",textAlign:'center'}}>Not Interested</Button>{' '}</dvi>
                </Card.Body>
                </Card>
            </div> */}
            {/* {
                listImage.map((user)=>{
                    const {id,author,download_url}=user
                    return(
                        <>
                            <div className="boxModel" key={id}>
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
                                <dvi className="mybutton"><Button variant="outline-danger" style={{fontSize:'15px',padding:"2px 10px",fontWeight:"bold",textAlign:'center'}}>Not Interested</Button>{' '}</dvi>
                            </Card.Body>
                            </Card>
                        </div>
                                        
                        </>
                    )
                })
            } */}
            
        </>
    )
}
export default Images