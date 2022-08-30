import React from "react";
import {useState,useEffect} from 'react'
import Loading from "./loading";
import Images from "./details";
const url ="https://picsum.photos/v2/list?page=2&limit=20"
const Data = ()=>{
    const [imageList,setImageList]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const fetchimage =async ()=>{
            try {
            const response = await fetch(url)
            const images = await response.json()
            setImageList(images)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.log(error)
        }
        }
        const notInterested=(id)=>{
            const newList = imageList.filter((data)=> data.id !==id)
            setImageList(newList)
        }
    
    useEffect(()=>{
        fetchimage()
        
        //Easy Method to fetch data
        // try {
        //     fetch(url)
        //     .then((resp)=>{
        //         return resp.json()
        //     })
        //     .then((user)=>{
        //         setImageList(user)
        //         setIsLoading(false)
        //     })
        // } catch (error) {
        //     console.log(error)
        // }



    },[])
    if(isLoading){
        return(
            <main>
                <Loading></Loading>
            </main>
        )
    }
   
    return(
        <>
            {/* <h1>Data fetch complete</h1> */}
            <Images listImage={imageList} notInterested={notInterested}></Images>
        </>
    )
}
export default Data