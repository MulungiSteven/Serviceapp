import { Client, Account, Avatars, Databases } from "react-native-appwrite"

export const client = new Client()

client
  .setProject('6899de520032f6e69607')
  .setEndpoint('https://fra.cloud.appwrite.io/v1')

export const account = new Account(client)
export const avatars = new Avatars(client)
export const databases = new Databases(client)