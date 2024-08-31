const multer = require('multer');
const fs = require('fs');

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images/');
  },
  filename: (req, file, cb) => {
    cb(null, new_file_name(file));
  }
});

function new_file_name(file){
  const all_files = fs.readdirSync('./public/images/').sort()
  suffix = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length)

  if(all_files.length){
    
    max_file = all_files[all_files.length-1]
    
    console.log((Number(max_file.substring(0, max_file.lastIndexOf('.'))) + 1).toString())

    return (Number(max_file.substring(0, max_file.lastIndexOf('.'))) + 1).toString() + suffix
  }else{
    return '1' + suffix
  }
}
// Create the multer instance
const upload = multer({ storage: storage });

module.exports = upload;

