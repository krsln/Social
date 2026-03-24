import {User} from "../../../Models";

export interface Tag {
  Id: number;
  Name: string; // party/state/celebrity/corp/
}

export interface Article {
  Id: string;
  Columnist: User;

  Title: string;
  Content: string;
}

export enum ContentType {
  Text,
  Image,
  Video,
  Image360,
  Video360
}

export enum Proposition {
  Falsity,
  Truth
}

export interface Case {
  User: User;
  Id: number;
  CreatedAt: Date;
  UserId: number;
  UserIdStr: string;
  Source: string;
  Lang: string;

  Title: string;
  Theses: Thesis[];
}

export interface Thesis {
  Type: ContentType;
  Proposition: Proposition;
  Content: string;
}

// export enum CaseType {
//   Lie, // yalan
//   Slander // iftira
// }


export interface Entity {
  Id: number;
  Type: EntityType;
  Tags: Tag[];
  Name: string;
  Desc: string;
  Cases: Case[];
}

export enum EntityType {
  Person,
  LegalEntity
}

// tweet  count: 18



