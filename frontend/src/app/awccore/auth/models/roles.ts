// Define your Roles here:
export enum Roles {
    User = 'User',
    Admin = '5d0a5cbb06c43c55902d9bc1'
  }

// Backend Role-Model
export interface Role {
  map(arg0: (b: any) => any): any;
  permissions?: string[],
  _id: string,
  name?: string
}

 