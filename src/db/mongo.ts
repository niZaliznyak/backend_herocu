import { Db, MongoClient } from 'mongodb'

const url = 'mongodb://localhost:27017'

let db: undefined | Db

export const connectToDb = async () => {
  const mongoClient = new MongoClient(url)
  try {
    await mongoClient.connect()
    db = mongoClient.db('movies_db')
    console.log(`Connected successfully to DB server: ${url}`)
  } catch (error) {
    console.error('Error connecting to DB:', error)
    throw new Error('Failed to connect to the database')
  }
}

export const getMoviesCollection = () => {
  if (!db) {
    throw new Error('Database connection is not established yet')
  }
  return db.collection('movies')
}
