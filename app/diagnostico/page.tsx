"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function DiagnosticoPage() {
  const [resultado, setResultado] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const SHEET_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL

  const probarConexion = async () => {
    setLoading(true)
    setResultado(null)

    try {
      const response = await fetch(SHEET_URL!, {
        method: 'GET',
      })

      const data = await response.json()
      setResultado({
        success: true,
        message: '✅ Conexión exitosa',
        data: data
      })
    } catch (error: any) {
      setResultado({
        success: false,
        message: '❌ Error de conexión',
        error: error.message
      })
    } finally {
      setLoading(false)
    }
  }

  const enviarDatosPrueba = async () => {
    setLoading(true)
    setResultado(null)

    const datosPrueba = {
      nombre: 'Usuario de Prueba',
      email: 'prueba@test.com',
      telefono: '0999999999',
      tipoUsuario: 'Padre/Cuidador',
      ciudad: 'Quito'
    }

    try {
      // Método 1: Intentar con fetch normal primero
      try {
        const response = await fetch(SHEET_URL!, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(datosPrueba),
        })

        const data = await response.json()
        setResultado({
          success: true,
          message: '✅ Datos enviados (Método 1: Fetch directo)',
          data: data,
          datosPrueba: datosPrueba
        })
        setLoading(false)
        return
      } catch (fetchError) {
        console.log('Fetch directo falló, intentando con no-cors...')
      }

      // Método 2: Usar no-cors como fallback
      await fetch(SHEET_URL!, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosPrueba),
      })

      setResultado({
        success: true,
        message: '✅ Datos enviados (Método 2: No-CORS)',
        data: { 
          result: 'Enviado con no-cors',
          note: 'No podemos ver la respuesta con no-cors, pero los datos fueron enviados. Revisa tu Google Sheet.' 
        },
        datosPrueba: datosPrueba
      })

    } catch (error: any) {
      setResultado({
        success: false,
        message: '❌ Error al enviar',
        error: error.message,
        help: 'Verifica que la URL esté correcta y que hayas implementado el script en Google Apps Script'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">🔍 Diagnóstico de Conexión</h1>
          <p className="text-muted-foreground">Verifica que la conexión con Google Sheets funcione correctamente</p>
        </div>

        <Card className="p-6 space-y-4">
          <div>
            <h2 className="text-xl font-bold mb-2">📋 Configuración</h2>
            <div className="space-y-2 text-sm">
              <div>
                <strong>Variable de entorno detectada:</strong>
                <div className="mt-2 p-3 bg-muted rounded font-mono text-xs break-all">
                  {SHEET_URL || '❌ NO DETECTADA - Reinicia el servidor'}
                </div>
              </div>
              {SHEET_URL ? (
                <div className="text-green-600 font-medium">✅ Variable configurada correctamente</div>
              ) : (
                <div className="text-red-600 font-medium">❌ Variable NO detectada - Reinicia el servidor con Ctrl+C y luego npm run dev</div>
              )}
            </div>
          </div>
        </Card>

        <Card className="p-6 space-y-4">
          <h2 className="text-xl font-bold">🧪 Pruebas</h2>
          
          <div className="flex gap-4">
            <Button 
              onClick={probarConexion} 
              disabled={loading || !SHEET_URL}
              className="flex-1"
            >
              {loading ? 'Probando...' : '🔗 Probar Conexión (GET)'}
            </Button>
            
            <Button 
              onClick={enviarDatosPrueba} 
              disabled={loading || !SHEET_URL}
              className="flex-1"
              variant="secondary"
            >
              {loading ? 'Enviando...' : '📤 Enviar Datos de Prueba (POST)'}
            </Button>
          </div>

          {resultado && (
            <div className={`p-4 rounded-lg ${resultado.success ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'}`}>
              <div className="font-bold text-lg mb-2">{resultado.message}</div>
              
              {resultado.datosPrueba && (
                <div className="mb-3">
                  <strong>Datos enviados:</strong>
                  <pre className="mt-2 p-3 bg-muted rounded text-xs overflow-x-auto">
                    {JSON.stringify(resultado.datosPrueba, null, 2)}
                  </pre>
                </div>
              )}
              
              {resultado.data && (
                <div>
                  <strong>Respuesta del servidor:</strong>
                  <pre className="mt-2 p-3 bg-muted rounded text-xs overflow-x-auto">
                    {JSON.stringify(resultado.data, null, 2)}
                  </pre>
                </div>
              )}
              
              {resultado.error && (
                <div>
                  <strong>Error:</strong>
                  <pre className="mt-2 p-3 bg-muted rounded text-xs overflow-x-auto">
                    {resultado.error}
                  </pre>
                </div>
              )}

              {resultado.success && resultado.data?.result === 'success' && (
                <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded">
                  <div className="font-bold text-green-800 dark:text-green-200">
                    ✅ ¡Revisa tu Google Sheet ahora!
                  </div>
                  <div className="text-sm text-green-700 dark:text-green-300 mt-1">
                    Deberías ver una nueva fila con los datos de prueba
                  </div>
                </div>
              )}
            </div>
          )}
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">📝 Instrucciones</h2>
          <ol className="space-y-3 text-sm list-decimal list-inside">
            <li><strong>Verifica la URL:</strong> Asegúrate de que la variable de entorno aparece arriba</li>
            <li><strong>Prueba la conexión:</strong> Haz clic en "Probar Conexión" - deberías ver <code>{`{"result":"App is running"}`}</code></li>
            <li><strong>Envía datos de prueba:</strong> Haz clic en "Enviar Datos de Prueba"</li>
            <li><strong>Revisa tu Google Sheet:</strong> Deberías ver una nueva fila con los datos</li>
          </ol>
        </Card>
      </div>
    </div>
  )
}
