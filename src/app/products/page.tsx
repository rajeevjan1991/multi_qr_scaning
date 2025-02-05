// Filename: src/app/page.js

'use client'

import Image from "next/image";
import React , { useRef, useState } from "react";

export default function Home() {
      const imgInputRef: any = useRef(null);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [img, setImg] = useState('');

    const formData = new FormData();
    const submitData = async () => {
        let response = await fetch('https://dlhub.8aiku.com/dmai/decode-dm/', {
            method: 'POST',
            body: formData,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
        })

        response = await response.json()
        alert(JSON.stringify(response))
    }

    return (
        <>
            <h2 className="text-center justify-center flex font-[800] text-3xl my-3">Multi Qr extrat</h2>
            <input
                type='text'
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder='Enter Post Title'
                className='bg-black text-white mx-3'
            />

            <input
                type='text'
                value={body}
                onChange={e => setBody(e.target.value)}
                placeholder='Enter Post Body'
                className='bg-black text-white ms-1'
            />
            <input 
                  type="file" 
                  ref={imgInputRef} 
                  required 
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if(e.target.files){
                      const url : string = URL.createObjectURL(e.target.files[0]);
                       //console.log(url);
                       setImg(url);
                       formData.append("file", e.target.files[0], "chris.jpg");
                       console.log(formData);
                    }
                  }}/>
            <button onClick={submitData}>Submit</button>
        </>
    )
}
