const express = require('express');
const cors = require('cors');
const multer  = require('multer');
const app = express();
app.use(cors());
const upload = multer({ dest: 'uploads/' });
app.post('/upload', upload.array('file'), (req, res) => {
  res.json({ url: req.files.map(f => `https://your-render-url.com/uploads/${f.filename}`) });
});
app.use('/uploads', express.static('uploads'));
app.listen(10000, () => console.log('Up')) ;
