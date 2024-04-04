

export async function fetchAllProducts() {
    try {
        const response = await fetch(`/Products`);
        const data = await response.json();
        
        return data;
    } catch (error) {
        //handle the error
        console.error('Error fetching products:', error);
        throw error; //Rethrow the error to let the caller handle it
    }
}