const url = 'https://fullnode.mainnet.aptoslabs.com/v1/accounts/0x409e242b785e437b768cfe53dc8a512677cd11130f6ac0156ca0ca5a0d922c9c';
const options = { method: 'GET', headers: { Accept: 'application/json, application/x-bcs' } };

try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.error(error);
}