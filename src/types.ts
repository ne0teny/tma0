// types.ts
interface User {
    id: number;
    level: number;
    league: string;
    balance: number;
    income: number;
    avatar: string;
    name: string;
    energy: number;
    followers: number;
  }
  
  export interface ComponentProps {
    userData: User | null;
    token: string | null;
  }
  