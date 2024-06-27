import React, { createRef, useState } from "react";
import Text from "../components/Text";
import Button from 'react-bootstrap/Button';
import { useSearchParams } from "react-router-dom";
import { exportComponentAsJPEG } from "react-component-export-image";


const EditPage = () =>{
    const [params] =useSearchParams()
    const [count , setCount] = useState(0)


    const memeRef = createRef()
    const addtext= () => {
        setCount(count+1)
    }


    return(
        <div>
        <div style={{width: "700px", border: "1px solid black"}} ref={memeRef} className="meme  ml-5 mt-5 mb-5">
            <img  src={params.get("url")} width={'350px'}/>
            {
                Array(count).fill(0).map((e) => <Text />)
            }
        </div>
        <Button  onClick={addtext}  >Edit</Button>
        <Button variant="success" onClick={e => exportComponentAsJPEG(memeRef)}>Save</Button>
        </div>
    )
}

export default EditPage