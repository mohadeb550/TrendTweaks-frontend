
// export interface IPost {
//   _id: string;
//   title: string;
//   description: string;
//   images: string[];
//   location: string;
//   city: string;
//   dateFound: string;
//   status: string;
//   isReported: boolean;
//   reportCount: number;
//   category: ICategory;
//   user: IUser;
//   questions: string[];
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// }

// export interface ICategory {
//   _id: string;
//   name: string;
//   postCount: number;
//   isDeleted: boolean;
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// }

export type TUser = {
  _id: string;
  name: string;
  role: string;
  email: string;
  status: string;
  profilePhoto: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}


export type TJwtDecoded = {
  email : string;
  exp : number;
  iat : number;
  role : string;
}
