export interface User {
  Id: number;
  Avatar:string;
  Name:string;
  UniqueName:string;

  Roles: Role[];

  Comments: any[]; // Commenter
  Articles: any[]; // Columnist
  Cases: any[]; // Detective
}

export enum Role {
  Commenter,
  Columnist,
  Detective
}
