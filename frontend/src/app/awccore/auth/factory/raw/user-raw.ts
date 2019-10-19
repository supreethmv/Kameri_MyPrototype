// Describes User Model on Server-Side (Backend)
// USE OpenAPI (Swagger) to generate the http-interface
// If sth has to be transformt in User-Model (Frontend), mark it with like email?: 
export interface UserRaw {
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
 
 