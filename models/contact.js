const mongoose = require ('mongoose');
const { Schema, model } = mongoose;

const contactSchema = new Schema({
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
},
{
        versionKey: false,
        timestamps: true,
        toJSON: {
          virtuals: true,
          transform: (doc, ret) => {
            delete ret.favorite
            delete ret._id
            return ret
          },
        },
        toObject: { virtuals: true },
      },
    )
    
    contactSchema.virtual('status').get(function () {
      return this.favorite ? ('Favorite') : ('Common')
    
  });

 const contact = model('contact', contactSchema)

 module.exports = contact