export interface User {
   uuid: string;
   password: string;
   id: number;
   email: string;
   first_name: string;
   last_name: string;
   organisation: Organisation[];
}

export interface Organisation{
   id: number;
   name: string;
}