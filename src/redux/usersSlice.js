import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carsApi = createApi({
  reducerPath: 'car',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6505e6ddef808d3c66f098f4.mockapi.io/',
  }),
  tagTypes: ['car'],
  endpoints: (builder) => ({
    getCars: builder.query({
      query: () => `car`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'car', id })),
              { type: 'car', id: 'LIST' },
            ]
          : [{ type: 'car', id: 'LIST' }],
    }),
  }),
});

export const { useGetCarsQuery } = carsApi;
