// import { useState , useEffect  } from 'react'

// function useCurrencyInfo(currency){

//     useEffect(()=>{
//         const [Data , setData] = useState({})
//         fetch(`https://v6.exchangerate-api.com/v6/e21710750d65bc2897fcd393/latest/${currency}`)
//         .then((res) => res.json())
//         .then((res) => setData(res[currency]))
//         console.log(Data);
        
//     } , [currency])
//     console.log(Data);

//     return data;
    

// }


// export default useCurrencyInfo;




import { useState, useEffect } from 'react';

function useCurrencyInfo(currency) {
    const [data, setData] = useState({}); // Correct placement of useState

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://v6.exchangerate-api.com/v6/e21710750d65bc2897fcd393/latest/${currency}`);
                const result = await response.json();
                setData(result.conversion_rates); // Access the correct API key for conversion rates
            } catch (error) {
                console.error('Error fetching currency data:', error);
            }
        };

        fetchData();
    }, [currency]); // Dependency array ensures this runs when 'currency' changes

    return data; // Ensure 'data' is returned correctly
}

export default useCurrencyInfo;


