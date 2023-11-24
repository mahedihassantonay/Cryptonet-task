import React, { useEffect, useState } from 'react';

const DisplayCard = () => {
    const [user, setUser] = useState([]);
    console.log(user)
    useEffect(()=>{
        fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
        .then(res=>res.json())
        .then(data=>{
            setUser(data.results[0]);
        })
    },[])
    return (
        <>
             <div className='mt-12 flex gap-12 w-[90%] md:w-3/5 lg:w-2/3 xl:w-1/3 mx-auto bg-slate-400 p-8 rounded-sm'>
            <img className='border-2 rounded-md' src={user.picture.large} alt="" />
            <div className='font-semibold pt-4 space-y-3 bg-slate-50 p-2 rounded-sm hover:text-gray-600'>
                <div className='flex gap-2 '>
                    <h3>Name: {user.name.first}</h3>
                    <h3> {user.name.last}</h3>
                </div>
                <h3>Gender: {user.gender}</h3>
                <h4>Phone Number: {user.phone}</h4>
            </div>
        </div>
        </>
    );
};

export default DisplayCard;