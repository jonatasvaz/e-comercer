const express = require("express");
const multer = require("multer");
const multerS3 =require ('multer-s3');
const aws = require("aws-sdk") ;
//const config = require ('../config');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.jpg`);
  },
});

const upload = multer({ storage });

const router = express.Router();

router.post('/', upload.single('image'), (req, res) => {
  res.send(`/${req.file.path}`);
});

aws.config.update({
    accessKeyId: "200341476848",
  accessSecretKey: "multeb7cc6a08a9361f89a200688429deb8676f378bf9125042f351ed59fd845ecd18rS3",
});
const s3 = new aws.S3();
const storageS3 = ({
  s3,
  bucket: 'amazona-bucket',
  acl: 'public-read',
  contentType: multerS3.AUTO_CONTENT_TYPE,
  key(req, file, cb) {
    cb(null, file.originalname);
  },
});
const uploadS3 = multer({ storage: storageS3 });
router.post('/s3', uploadS3.single('image'), (req, res) => {
  res.send(req.file.location);
});
module.exports = router;
