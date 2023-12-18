import mongoose from 'mongoose'

export interface Works extends mongoose.Document {
  name: string
  type:string
  year: number
  size:string
  image_url: string
}

const WorkSchema = new mongoose.Schema<Works>({
  name: {
    type: String,
    required: [true, 'Please provide a name for this work.'],
  },

  type: {
    type: String,
    required: [true, 'Please specify the type of your work.'],
  },
  year: {
    type: Number,
    required: [true, 'Please specify the year of the creation time.'],
  },
  image_url: {
    // required: [true, 'Please provide an image url for this work.'],
    type: String,
  },
})

export default mongoose.models.Works || mongoose.model<Works>('Work', WorkSchema)
