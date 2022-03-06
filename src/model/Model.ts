interface IFriends {
    id: number
    name: string
}
export interface IModel {
    // propertyName: string
    // value: unknown
    // type: string
    // isEditable: boolean
    id: string
    index: number
    guid: string
    isActive: boolean
    balance: string
    picture: string
    age: number
    eyeColor: string
    name: string
    gender: string
    company: string
    email: string
    phone: string
    address: string
    about: string
    registered: Date
    latitude: number
    longitude: number
    tags: string[]
    friends: IFriends[]
    greeting: string
    favoriteFruit: string
}
