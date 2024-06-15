import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Top50 = () =>{
    const [ top50, setTop50] = React.useState([]);
    const navigate = useNavigate();


    const fetchTop50 = async () => {
        try {
            const response = await fetch('https://academics.newtonschool.co/api/v1/musicx/song?featured=Top 50 of this month', {
                headers: {
                    'accept': 'application/json',
                    'projectID': 'f104bi07c490'
                }
            });
            const data = await response.json();
            console.log('setTop50', data)
            setTop50(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }


    useEffect(()=>{
        fetchTop50();
    },[])

    return(
        <div className='bg-black text-white pt-[70px]'>
                <div className='trending '>
                    <h1 className='text-base text-2xl font-bold text-neutral-300 px-3 py-2'>Top 50 of this month</h1>

                    <div className='flex flex-row overflow-scroll scroll-smooth transition-[scroll] duration-[0.3s] ease-[ease-in-out]' >
                        {top50.map((item) => {
                            return (
                                <div
                                    className='m-1'
                                    onClick={() => {
                                        navigate(`/song/${item._id}`)
                                    }}>
                                    <img src={item.thumbnail} alt={(item.name) + 'thumbnail'} className='h-[220px] w-[220px] max-w-none' />
                                    <h2 className=' font-[500]'>{item.title}</h2>
                                    {item.artist.map((items) => {
                                        return (
                                            <span className='text-smtext-slate-400'>{items.name}, </span>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
    )
}

export default Top50