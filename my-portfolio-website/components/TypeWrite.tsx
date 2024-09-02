import Typewriter from "typewriter-effect";
import React from 'react'

export default function TypeWrite() {
  return (
    <div>
        <span className="mb-10 mt-9 px-4 text-4xl font-bold flex gap-3">
            <span className="">I'm</span> 
            <span className="text-gray-300"> 
                <Typewriter 
                options={{
                    strings: [
                        "an UI/UX Enthusiast",
                        " a Frontend Developer",
                        " a Volunteer",
                    ],
                    autoStart: true,
                    loop: true,
                }}
                />
            </span>
            </span>
        </div>
        
  )
}
