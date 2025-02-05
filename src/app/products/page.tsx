// Filename: src/app/page.js

'use client'

import Image from "next/image";
import React , { useRef, useState } from "react";

export default function Home() {
  const imgInputRef: any = useRef(null);
    const submitData = async () => {
        const fileInput : any = document.getElementById("img_file"); // Replace with your HTML element ID
        const file = fileInput.files[0];
        const formData = new FormData();
        formData.append("file", file);
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
                  type="file" 
                  ref={imgInputRef} 
                  required 
                  id="img_file"
                  />
            <button onClick={submitData}>Submit</button>
        </>
    )
}
