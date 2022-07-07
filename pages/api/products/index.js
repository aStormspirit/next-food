export default async function handler(req, res) {
    const { method } = req

    if(method === 'GET'){
      try{
        fetch('https://susi.pizza/wp-json/wc/v3/products?consumer_key=ck_20c4df5762aa47cb10a11ee87e0ffb01298153e9&consumer_secret=cs_5e686f24c58799278ec7cce68bcc8abf9608ca1c')
        .then((data) => data.json())
        .then((data) => res.status(200).json(data))
      }catch(err){
        res.status(500).json(err)
      }
    }
  }
  