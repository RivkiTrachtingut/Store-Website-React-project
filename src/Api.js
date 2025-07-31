export const fetchData=async()=>{
    return new Promise((resolve) => {
        setTimeout(async () => {
            const response = await fetch('https://dummyjson.com/products/category/kitchen-accessories?delay=3000');
            const result = await response.json();
            resolve(result.products);});
        
    });
};