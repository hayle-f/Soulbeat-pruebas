import express from 'express'
import multer from 'multer'
import path from 'path'
import fs from 'fs'
import cors from 'cors'


const upload = multer({ dest: 'uploads/' })
const app = express()

app.use(cors())

app.use('/uploads', express.static('uploads'))


app.post('/imgs', upload.single('imgVariante'), (req, res) => {
    if (!req.file) return res.status(400).json({ message: 'No se subió ningún archivo' })

    //console.log(req.file)
    // obtener la extensión del archivo original
    const extension = path.extname(req.file.originalname)

    // construir el nuevo path con extensión
    const newPath = `uploads/${req.file.filename}${extension}`

    // renombrar el archivo
    fs.renameSync(req.file.path, newPath)

    // construir la URL pública
    const urlImagen = `http://localhost:3000/uploads/${req.file.filename}${extension}`

    res.json({ url: urlImagen })
})



app.listen(3000, () => {
    console.log('Servidor corriendo en: http://localhost:3000/')
})