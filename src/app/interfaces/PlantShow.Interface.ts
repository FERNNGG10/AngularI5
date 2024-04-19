export interface PlantShowInterface {
    data: Data
  }
  
  export interface Data {
    id: number
    plant: string
    user_id: number
    status: number
    sensors: Sensor[]
  }
  
  export interface Sensor {
    id: number
    name: string
    status: number
    pivot: Pivot
  }
  
  export interface Pivot {
    plant_id: number
    sensor_id: number
  }
  