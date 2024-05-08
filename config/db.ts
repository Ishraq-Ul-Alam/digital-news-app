import mongoose from 'mongoose'

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL!)

    console.log('Connection Success')
  } catch (error) {
    console.log('Connection Failed')

    process.exit(1)
  }
}

export default dbConnect
