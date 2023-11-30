import { NextApiRequest, NextApiResponse } from 'next'

const fetchBillData = async () => {
    try {
        const response = await fetch('API_ENDPOINT'); // Replace 'API_ENDPOINT' with the actual endpoint URL
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

export default fetchBillData;