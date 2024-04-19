export interface PlantIndexInterface {
    data: Plants[]
  }
  
  export interface Plants {
    id: number
    plant: string
    status: number
    sensors: string[]
  }