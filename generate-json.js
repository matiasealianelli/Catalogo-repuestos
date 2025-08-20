// generate-json.js
import XLSX from "xlsx";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

// ✅ Reconstruir __dirname porque no existe en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 📂 Rutas de entrada y salida
const excelFile = path.join(__dirname, "data", "autoparts.xlsx"); 
const outputFile = path.join(__dirname, "data", "autoparts.json"); 
const imagesBasePath = "/assets/img/autopartsImages"; // relativo al frontend
const imagesFolder = path.join(__dirname, "public", "assets", "img", "autopartsImages");

// 📖 Leer archivo Excel
const workbook = XLSX.readFile(excelFile);
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const rows = XLSX.utils.sheet_to_json(sheet);

// 🔄 Extensiones soportadas
const validExtensions = [".jpg", ".jpeg", ".png", ".webp"];

// Construir catálogo
const catalog = rows.map(row => {
  const productDir = path.join(imagesFolder, row.ID);

  let mainImage = null;
  let detailImages = [];

  if (fs.existsSync(productDir)) {
    // Leer todos los archivos en la carpeta del producto
    const files = fs.readdirSync(productDir);

    // Buscar imagen principal (main.*)
    const mainFile = files.find(file =>
      file.toLowerCase().startsWith("main") &&
      validExtensions.includes(path.extname(file).toLowerCase())
    );
    if (mainFile) {
      mainImage = `${imagesBasePath}/${row.ID}/${mainFile}`;
    }

    // Buscar imágenes numeradas (1.*, 2.*, etc.)
    detailImages = files
      .filter(file => /^[0-9]+\./.test(file) && validExtensions.includes(path.extname(file).toLowerCase()))
      .sort((a, b) => {
        const numA = parseInt(a.split(".")[0], 10);
        const numB = parseInt(b.split(".")[0], 10);
        return numA - numB;
      })
      .map(file => `${imagesBasePath}/${row.ID}/${file}`);
  }

  return {
    ID: row.ID,
    SKU: row.SKU,
    REPUESTO: row.REPUESTO,
    LADO_REPUESTO: row.LADO_REPUESTO,
    MARCA_REPUESTO: row.MARCA_REPUESTO,
    STOCK: row.STOCK,
    MARCA_VEHICULO: row.MARCA_VEHICULO,
    MODELO_VEHICULO: row.MODELO_VEHICULO,
    AÑOS_COMPATIBLE: row.AÑOS_COMPATIBLE,
    CARACTERISTICAS_EXTRA: row.CARACTERISTICAS_EXTRA,
    PRICE: row.PRICE,
    CARD_IMAGE: mainImage || `${imagesBasePath}/no-image.png`, // fallback
    IMAGES: detailImages.length > 0 ? detailImages : [`${imagesBasePath}/no-image.png`]
  };
});

// 📦 Guardar JSON
fs.ensureDirSync(path.dirname(outputFile));
fs.writeJsonSync(outputFile, catalog, { spaces: 2 });

console.log(`✅ Catálogo generado en: ${outputFile}`);
