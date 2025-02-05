"use client";
import converter from "@/lib/converter";
import Image from "next/image";
import React , { useRef, useState } from "react";
import { LuImagePlus } from "react-icons/lu";

export default function Home() {
  const imgInputRef: any = useRef(null);
  const [processing, setProcessing] = useState<boolean>(false);
  const openBrowse = () =>{
    imgInputRef.current?.click();
  };
  const convert = async (url: string) =>{
    if(url){
      setProcessing(true);
      // await converter(url).then((txt) =>{
      //   if(txt){
      //     console.log(txt);
      //   }
      // });
      let qrResult=await fetch("https://dlhub.8aiku.com/dmai/decode-dm/",{
        method:"POST",
        body: JSON.stringify({url}),
      })
      console.log(qrResult);
      setProcessing(false);
    }
  }
  return (
    <div>
      <h2 className="px-5 pt-10 text-center md:text-6xl text-3xl font-[600]">
        Extract <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block 
      text-transparent bg-clip-text">text from image</span>
      </h2>
      <input 
      type="file" 
      ref={imgInputRef} 
      hidden 
      required 
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files){
          const url : string = URL.createObjectURL(e.target.files[0]);
          // console.log(url);
          convert(url);
        }
      }}/>
      <div className="grid grid-cols-2 grid-rows-1 gap-6" onClick={openBrowse}>
        <div className="w-full md:p-20 p-5 flex items-center justify-center">
        <div className="w-full cursor-pointer p-5 bg-[#323232] min-h-[50vh] rounded-xl">
          <div className="flex items-center justify-center flex-col p-5">
            <p className="text-center text-3xl font-[700] text-[#6c6c6c]">
              {processing 
              ? "Processing image  ..."
              : "Browse or Drop Your Image Here"
            }
            </p>
            <span className="text-[120px] text-[#6c6c6c] pt-8">
            <LuImagePlus className={processing ? "ammimate-pulse" 
              : ""
            }/>
            </span>
          </div>
        </div>
        </div>
        <div>2</div>
      </div>
    </div>
  );
}