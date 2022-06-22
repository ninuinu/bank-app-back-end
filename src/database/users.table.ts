
export interface UsersEntity {
    userId: number;
    personalNumber: string;
    firstName: string;
    lastName: string;
  }



export let usersTable:UsersEntity[] = [
  {
    userId: 5462,
    personalNumber: "750341-9702",
    firstName: "Maria",
    lastName: "Berg"
  },
  {
    userId: 2451,
    personalNumber: "620341-8732",
    firstName: "Ragnar",
    lastName: "Petterson"
  }
];
