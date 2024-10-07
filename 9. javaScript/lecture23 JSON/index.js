/* Javascript JSON() */
{
  // const jsonData = {
  //     key1:'discription json data',
  //     key2:'json text based javascript object structure',
  //     key3:'json is javascript object notation'
  //   }

  //   console.log(jsonData);
}
{
  // let data  = JSON.stringify(jsonData);

  // console.log(data);

  // let object = JSON.parse(data)

  // console.log(object);
}


const ProductData = async () => {
  let response = await fetch('http://localhost:3000/product')
  let res = await response.json()

  res.map((item) => {
    // for (let i = 0; i < res.length; i++) {
      return document.getElementById('demo').innerHTML += `
        <p>${item.id}<p/>
        <p>${item.productColor}<p/>
        <p>${item.productName}<p/>  
      `
    // }
  })
}

ProductData()