import React, { useEffect, useState } from "react";
import axios from "axios";
import './Meme.css'

function Meme() {

    const [data, setData] = useState([]);

    useEffect(() => {

        axios
            .get("https://api.imgflip.com/get_memes")
            .then((res) => {
                setData(res.data.data.memes);
            })
            .catch((err) => {
                console.log(err);
            });

    }, []);

    return (
        <div class="body">
            <h1>Memes</h1>
            {
                data.map((obj) => (
                    <div key={obj.id}>
                        <h2>{obj.name}</h2>

                        <img
                            src={obj.url}
                            alt={obj.name}
                            width="400"
                        />
                    </div>
                ))
            }
        </div>
    );
}

export default Meme;

// import React from "react";
// import { useState,useEffect } from "react";
// import axios from "axios";
// function Meme(){
//     const [data, setData] = useState([]);
//     useEffect(()=>{
//             axios.get("https://api.imgflip.com/get_memes").then((res)=> res.data).then(d=>setData(d))
//     },[data])
//     return (
//         <div>
//             {
//                 data.map((obj)=>{
//                     return (
//                         <div className="home">
//                             <h1>{obj.name}</h1>
//                             <div>
//                                 <img src={obj.url}/>
//                             </div>
//                         </div>
//                     );
//                 })
//             }
//         </div>
//     );
// }
// export default Meme;