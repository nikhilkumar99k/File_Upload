import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import multer from 'multer';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.render("index.ejs");
});

let uploadedFile;
app.post('/upload', upload.single('fileToUpload'), (req, res) => {
  // console.log('File uploaded:', req.file);

  // You can access other form data like this:
  // console.log('Password:', req.body.password);

  // Handle the file as needed (save to disk, process, etc.)

  // Respond to the client
  // res.send('File uploaded successfully!');
  const { password } = req.body;
   uploadedFile = req.file;
   console.log(uploadedFile);

  // Render the result.ejs template and pass data to it
  res.render('result.ejs', { uploadedFile, password, req });


});

app.get('/download', (req, res) => {
  const pdfData = fs.readFileSync(uploadedFile);

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename=${uploadedFile}`);
  res.send(pdfData);
});
console.log(uploadedFile);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});