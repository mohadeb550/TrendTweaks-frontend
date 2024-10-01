
import baseApi from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({

        // getUsers : builder.query({
        //     query: (query) => ({
        //         url : '/users',
        //         method : "GET",
        //         params : query,
        //     }),
        //     providesTags: ['Users']
        // }),

        savePayment : builder.mutation({
            query: (payload ) => ({
                
                url : `/payments`,
                method : "POST", 
                body : payload,  
            }),
            invalidatesTags: ['User', 'Users' ]
        }),
    })
})

export const {
useSavePaymentMutation, } = userApi;