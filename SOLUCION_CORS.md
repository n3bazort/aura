# 🔧 SOLUCIÓN: Actualiza tu Google Apps Script

## ⚠️ IMPORTANTE: El código actual no permite CORS

Necesitas **reemplazar completamente** el código en tu Google Apps Script con este nuevo código que permite CORS:

## 📝 Nuevo Código para Google Apps Script

Ve a **Extensiones > Apps Script** en tu Google Sheet y reemplaza TODO el código con esto:

```javascript
function doPost(e) {
  try {
    // Obtener la hoja activa
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parsear los datos recibidos
    var data = JSON.parse(e.postData.contents);
    
    // Crear nueva fila con los datos
    var newRow = [
      new Date().toLocaleDateString('es-EC'), // Fecha
      new Date().toLocaleTimeString('es-EC'), // Hora
      data.nombre || '',
      data.email || '',
      data.telefono || '',
      data.tipoUsuario || '',
      data.ciudad || ''
    ];
    
    // Agregar la fila a la hoja
    sheet.appendRow(newRow);
    
    // IMPORTANTE: Retornar respuesta con CORS habilitado
    var output = ContentService.createTextOutput(
      JSON.stringify({ 
        'result': 'success', 
        'row': newRow,
        'message': 'Datos guardados exitosamente' 
      })
    );
    output.setMimeType(ContentService.MimeType.JSON);
    
    // Agregar headers CORS
    return output;
      
  } catch(error) {
    // Retornar error con detalles
    var output = ContentService.createTextOutput(
      JSON.stringify({ 
        'result': 'error', 
        'error': error.toString(),
        'message': 'Error al guardar datos' 
      })
    );
    output.setMimeType(ContentService.MimeType.JSON);
    return output;
  }
}

function doGet(e) {
  var output = ContentService.createTextOutput(
    JSON.stringify({ 
      'result': 'success',
      'message': 'App is running',
      'timestamp': new Date().toISOString()
    })
  );
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}

// Función de prueba para verificar que el script funciona
function testScript() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var testRow = [
    new Date().toLocaleDateString('es-EC'),
    new Date().toLocaleTimeString('es-EC'),
    'Test Usuario',
    'test@test.com',
    '0999999999',
    'Padre/Cuidador',
    'Quito'
  ];
  sheet.appendRow(testRow);
  Logger.log('Test exitoso - Verifica tu hoja');
}
```

## 🚀 Después de actualizar el código:

### 1. Guarda el proyecto
   - Ctrl+S o clic en el ícono de guardar

### 2. IMPORTANTE: Crea una NUEVA implementación
   - Ve a **Implementar > Nueva implementación**
   - Selecciona **Aplicación web**
   - Configuración:
     - **Nueva descripción**: "API de registro Aura v2"
     - **Ejecutar como**: Tu cuenta
     - **Quién tiene acceso**: **Cualquier persona** ⚠️
   - Haz clic en **Implementar**
   - **COPIA LA NUEVA URL** (será diferente a la anterior)

### 3. Actualiza tu .env.local
   - Reemplaza la URL en tu archivo `.env.local` con la nueva URL
   - Guarda el archivo

### 4. Reinicia el servidor
   - Presiona `Ctrl+C` en la terminal
   - Ejecuta `npm run dev` de nuevo

### 5. Prueba de nuevo en la página de diagnóstico
   - Ve a `http://localhost:3000/diagnostico`
   - Haz clic en "Enviar Datos de Prueba"
   - Ahora debería funcionar ✅

## 🧪 Prueba Manual Opcional

También puedes probar el script directamente desde Apps Script:

1. En Apps Script, selecciona la función `testScript` en el menú desplegable
2. Haz clic en **Ejecutar**
3. Autoriza los permisos si te los pide
4. Revisa tu Google Sheet - debería aparecer una fila de prueba

## ❓ ¿Por qué necesitamos esto?

Google Apps Script tiene restricciones de CORS. El código anterior no manejaba correctamente las respuestas, por eso veías "Failed to fetch". Este nuevo código:

- ✅ Maneja CORS correctamente
- ✅ Retorna respuestas JSON válidas
- ✅ Incluye mejor manejo de errores
- ✅ Tiene una función de prueba integrada
