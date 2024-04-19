export interface RegisterResponseInterface {
    msg: string
    data: Data   
}

export interface Data {
    name: string
    email: string
    rol_id: number
    updated_at: string
    created_at: string
    id: number
}