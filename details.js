const getproduct = async ()=>{

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id')

    const {data} = await axios.get(`https://dummyjson.com/products/${id}`);
    return data;
}

const displayproducts =async ()=>{
    const data = await getproduct();

    const images = data.images.map((img)=>{
        return `
        <img src='${img}' width=200px/>
        `;}).join('');

    const result = `
    <h2>${data.title}</h2>
    <P>${data.description}</P>
    <P>${data.price}</P>
    `;

document.querySelector(".product").innerHTML=result;
document.querySelector(".product-images").innerHTML=images


    
    
}
displayproducts();