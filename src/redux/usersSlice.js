import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carsApi = createApi({
    reducerPath: 'cars',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://6505e6ddef808d3c66f098f4.mockapi.io/api' }),
    tagTypes: ['cars'],
    endpoints: (builder) => ({
        getCars: builder.query({
            query: () => `cars`,
            providesTags: (result,error,page) => result
            ? [
                ...result.map(({ id }) => ({ type: 'cars', id })),
                { type: 'cars', id: 'LIST' },
            ]
            : [{ type: 'cars', id: 'LIST' }],
        }),
    }),
});

export const { useGetCarsQuery } = carsApi;