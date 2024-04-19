export interface UsersIndexInterface {
    data: Users[]
  }
  
  export interface Users {
    id: number
    name: string
    email: string
    rol_id: number
    email_verified_at: any
    status: number
    created_at: any
    updated_at: any
  }
  