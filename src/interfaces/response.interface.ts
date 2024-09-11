export interface ApiResponse<T> {
  code: number;    
  msg: string;          
  object?: T;           
}

