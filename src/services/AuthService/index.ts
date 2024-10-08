/* eslint-disable @typescript-eslint/no-explicit-any */
// "use server";
// import nexiosInstance from "@/config/nexios.config";



// export const registerUser = async (userData: FieldValues) => {
//   try {
//     const { data } = await nexiosInstance.post("/auth/register", userData);

//     if (data?.data?.token){
//       cookies().set("accessToken", data?.data?.token);
//     }
//     return data;
//   } catch (error: any) {
//     console.log(error)
//   }
// };



// export const loginUser = async (userData: FieldValues) => {
//   try {
//     const { data } = await nexiosInstance.post("/auth/login", userData);

//     if (data?.token){
//       cookies().set("accessToken", data?.token);
//     }

//     return data;
//   } catch (error: any) {
//     throw new Error(error);
//   }
// };

