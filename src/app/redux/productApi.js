import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath:'productApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://dummyjson.com/'
    }),
    endpoints:(builder)=>({
        getAllProducts:builder.query({
            query:(skip)=>({
                url:`products?limit=10&skip=${skip}`,
            })
        }),
        getProductById:builder.query({
            query:(id)=>({
                url:`products/${id}`,
                method:'GET'
            })
        }),
        getProductByCategory:builder.query({
            query:(category)=>({
                url:`products/category/${category}`,
                method:'GET'
            })
        })
    })
})

export const {useGetAllProductsQuery, useGetProductByIdQuery, useGetProductByCategoryQuery} = productApi;