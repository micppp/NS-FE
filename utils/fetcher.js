const fetcher = async (url) => {
  const res = await fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json' }),
  });

  return res.json();
};

export default fetcher;
