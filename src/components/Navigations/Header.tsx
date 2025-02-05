import React from "react"
import Link from "next/link"
import { MdImageSearch } from "react-icons/md";

function Header() {
  return (
    <div className="w-full flex justify-between items-center md:px-20 py-5 px-5 sticky top-0 left-0 backdrop:blur-xl">
      <div>
        <Link href="{/}" className="font-[800] text-3xl">8AIKU</Link>
      </div>
      <div className="flex items-center justify-center bg-white text-black text-base font-[600] px-5 py-2 rounded-md">
        <span className="px-1">Image Ocr</span>
        <span><MdImageSearch  /></span>
      </div>
    </div>
  )
}

export default Header