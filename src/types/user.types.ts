export type User = {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
  address: { [key: string]: string }
  company: { [key: string]: string }
}
