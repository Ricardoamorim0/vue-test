export interface Price {
  USD: number,
  NOK: number
}

export interface Product {
  id: number,
  name: string,
  icon: string,
  price: Price,
  type: string
}