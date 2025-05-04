import React, { useEffect, useState } from 'react';

function Github() {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch("https://api.github.com/users/nagarKeshav")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data);
            });
    }, []);
    return (
        <div className='text-3xl text-blue-600 m-4 font-bold'>
            Github followers: {data.following}
            <img src={data.avatar_url} alt="git picture" height={300} width={300}/>
        </div>
    );
}

export default Github;
