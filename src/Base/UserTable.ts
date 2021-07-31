import axios from "axios";

const BASE_URL = "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json";

interface RequestGroup {
    page? : number;
    offset? : number;
    query? : any;
    status?:
      | "all-groups"
      | "favourite"
      | "archieved";
  
}

export interface ResponseResult {
    id: string;
    first_name : string;
    last_name : string;
    Age : number;
    company_name : string;
    city : string;
    email : string;
    state : string;
    web : string;
    
}


export const UserGroups = ( data : RequestGroup ) => {
    const url = BASE_URL;
    return axios.get<ResponseResult>(url).then((response) =>
    {
        console.log(response.data);
        return response.data;
    }
    ).catch((e) => console.log(e));

};
