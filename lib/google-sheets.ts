// Función para enviar datos de registro a Google Sheets
export async function enviarDatosASheet(datos: {
  nombre: string
  email: string
  telefono?: string
  tipoUsuario?: string
  ciudad?: string
}) {
  const SHEET_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL

  if (!SHEET_URL) {
    console.warn('Google Sheets URL no configurada. Los datos no se guardarán.')
    return { success: true, message: 'Registro completado (modo local)' }
  }

  try {
    const response = await fetch(SHEET_URL, {
      method: 'POST',
      mode: 'no-cors', // Necesario para Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datos),
    })

    // Con mode: 'no-cors', no podemos leer la respuesta
    // Pero si no hay error, asumimos que funcionó
    return { success: true, message: 'Datos guardados exitosamente' }
  } catch (error) {
    console.error('Error al enviar datos a Google Sheets:', error)
    // Aún así retornamos success para no bloquear el registro
    return { success: true, message: 'Registro completado' }
  }
}

// Función alternativa: Descargar datos como CSV
export function descargarComoCSV(datos: any[]) {
  const headers = ['Fecha', 'Hora', 'Nombre', 'Email', 'Teléfono', 'Tipo Usuario', 'Ciudad']
  const csvContent = [
    headers.join(','),
    ...datos.map(row => [
      new Date().toLocaleDateString(),
      new Date().toLocaleTimeString(),
      row.nombre,
      row.email,
      row.telefono || '',
      row.tipoUsuario || '',
      row.ciudad || '',
    ].join(','))
  ].join('\n')

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  const url = URL.createObjectURL(blob)
  link.setAttribute('href', url)
  link.setAttribute('download', `aura_registros_${new Date().toISOString().split('T')[0]}.csv`)
  link.style.visibility = 'hidden'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
