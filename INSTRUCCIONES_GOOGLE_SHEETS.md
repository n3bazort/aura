# Configuración de Google Sheets para Registro de Usuarios

## Paso 1: Crear Google Sheet

1. Ve a [Google Sheets](https://sheets.google.com)
2. Crea una nueva hoja de cálculo llamada "Aura - Registros de Usuarios"
3. En la primera fila, agrega estos encabezados:
   - A1: `Fecha`
   - B1: `Hora`
   - C1: `Nombre Completo`
   - D1: `Correo Electrónico`
   - E1: `Teléfono` (opcional)
   - F1: `Tipo de Usuario` (Padre/Profesional)
   - G1: `Ciudad`

## Paso 2: Configurar Google Apps Script

1. En tu Google Sheet, ve a **Extensiones > Apps Script**
2. Borra el código existente y pega este código:

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
    
    // Retornar respuesta exitosa
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': newRow }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    // Retornar error
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 'result': 'App is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Guarda el proyecto con un nombre (ej: "Aura Registro API")

## Paso 3: Desplegar la API

1. Haz clic en **Implementar > Nueva implementación**
2. Selecciona el tipo: **Aplicación web**
3. Configura:
   - **Descripción**: "API de registro Aura v1"
   - **Ejecutar como**: Tu cuenta
   - **Quién tiene acceso**: Cualquier persona
4. Haz clic en **Implementar**
5. **IMPORTANTE**: Copia la URL de la aplicación web que te da (algo como: `https://script.google.com/macros/s/AKfy.../exec`)
6. Autoriza los permisos cuando te lo pida

## Paso 4: Configurar en tu aplicación

1. Crea un archivo `.env.local` en la raíz del proyecto
2. Agrega esta línea con tu URL:

```
NEXT_PUBLIC_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/TU_ID_AQUI/exec
```

3. Reinicia el servidor de desarrollo

## Paso 5: Probar

1. Ve a la página de registro en tu aplicación
2. Completa el formulario y envía
3. Verifica que los datos aparezcan en tu Google Sheet

## Alternativa: Usar un archivo Excel local

Si prefieres no usar Google Sheets, puedes:

1. Descargar los datos como CSV desde la aplicación
2. Usar una base de datos local (SQLite)
3. Usar servicios como Airtable o Notion

## Notas de Seguridad

- ⚠️ Las contraseñas NO se guardan en el Sheet por seguridad
- Solo se guardan datos de contacto y perfil
- Para producción, considera usar una base de datos real (Firebase, Supabase, etc.)
