const cloudinary = require('cloudinary').v2;
          
cloudinary.config({ 
  cloud_name: 'deei5izfg', 
  api_key: '366198139943681', 
  api_secret: 'EjE9q_bejdfG4yQwKwLfXcNMw-8' 
});

module.exports =  cloudinary;