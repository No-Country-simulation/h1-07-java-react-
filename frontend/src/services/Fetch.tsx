
import { Product } from "../Interfaces/interfaces";

const API_ALL_PRODUCTS = "https://inventario-nocontry-s12-23.onrender.com/api/products";
const API_ALL_CLIENTS = "https://inventario-nocontry-s12-23.onrender.com/api/clients";
const API_ALL_SUPPLIER = "https://inventario-nocontry-s12-23.onrender.com/api/supplier";

/* FUNCIONALIDADES DE LOS PRODUCTOS */
export const registerProduct = async (dataProduct: Product) => {
    const API_PRODUCTS = "https://inventario-nocontry-s12-23.onrender.com/api/products";
    try {
        const response = await fetch(API_PRODUCTS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre: dataProduct.name,
                precio: dataProduct.price,
                stock: dataProduct.stock,
                proveedor_id: dataProduct.provider,
                categoria_id: dataProduct.category,
            }),
        });

        if (!response.ok) {
            throw new Error('Error registering product');
        }

        const responseData = await response.json();
        return responseData;
    } catch {
        return "error";
    }
}

export const fetchProductOnly = async (idProduct: number) => {
    try {
        const response = await fetch(`https://inventario-nocontry-s12-23.onrender.com/api/products/${idProduct}`);

        if (!response.ok) {
            throw new Error('Error fetching product');
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error("Error fetching product:", error);
    }
}

export const fetchDataProducts = async () => {
    try {
        const response = await fetch(API_ALL_PRODUCTS);

        if (!response.ok) {
            throw new Error('Error fetching products');
        }

        const responseData = await response.json();
        return responseData;
    } catch {
        console.log("error");
    }
}

export const fetchDataClients = async () => {
    try {
        const response = await fetch(API_ALL_CLIENTS);

        if (!response.ok) {
            throw new Error('Error fetching clients');
        }

        const responseData = await response.json();
        return responseData;
    } catch {
        console.log("error");
    }
}

export const fetchDataSupplier = async () => {
    try {
        const response = await fetch(API_ALL_SUPPLIER);

        if (!response.ok) {
            throw new Error('Error fetching suppliers');
        }

        const responseData = await response.json();
        return responseData;
    } catch {
        console.log("error");
    }
}
