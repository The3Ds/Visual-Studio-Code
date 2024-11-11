VERSION 1.0 CLASS
BEGIN
  MultiUse = -1  'True
END
Attribute VB_Name = "Hoja4"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = True
Sub CotizarPedidos()

    Dim Inventario As Worksheet
    Dim lastRow As Long
    Dim row As Range
    Dim codigo, cantidad_actual, cantidad_seguridad As Integer
    Dim Material, Talla, Marca, Modelo As Variant
    
    ' Referencia a la hoja de trabajo y última fila con datos en la columna V
    Set Inventario = ThisWorkbook.Sheets("Inventario 2.0")
    lastRow = Inventario.Cells(Inventario.Rows.Count, "V").End(xlUp).row
    
    ' Limpia el ListBox antes de cargar datos
    CotizacionUserForm.lstCotizaciones.Clear
    
    ' Establece los títulos en el Label del encabezado
    CotizacionUserForm.lblEncabezado.Caption = "Código    Material                            Talla                  Marca                Modelo             CA     CS"

    ' Recorre cada fila desde V7 hasta la última con datos en V
    For Each row In Inventario.Range("V7:V" & lastRow).Rows
        ' Verifica si la celda de la columna V contiene "Solicitar"
        If row.Cells(1, 1).Value = "Solicitar" Then
            ' Asegura si la columna T tiene un valor numérico en la misma fila
            If IsNumeric(row.Offset(0, -2).Value) Then
                ' Se obtienen los valores de las columnas necesarias en la misma fila
                codigo = row.Offset(0, -20).Value               ' Toma el valor de la columna B
                Material = row.Offset(0, -19).Value             ' Toma el valor de la columna C
                Talla = row.Offset(0, -18).Value                ' Toma el valor de la columna D
                Marca = row.Offset(0, -17).Value                ' Toma el valor de la columna E
                Modelo = row.Offset(0, -16).Value               ' Toma el valor de la columna F
                cantidad_actual = row.Offset(0, -2).Value       ' Toma el valor de la columna T (cantidad)
                cantidad_seguridad = row.Offset(0, -1).Value    ' Toma el valor de la columna U (cantidad)
                                
                ' Coloca el resultado en las columnas X:AD
                'row.Offset(0, 2).Value = codigo
                'row.Offset(0, 3).Value = Material
                'row.Offset(0, 4).Value = Talla
                'row.Offset(0, 5).Value = Marca
                'row.Offset(0, 6).Value = Modelo
                'row.Offset(0, 7).Value = cantidad_actual
                'row.Offset(0, 8).Value = cantidad_seguridad
                    
                ' Agrega los datos al ListBox en formato de array, con cada dato en su columna
                With CotizacionUserForm.lstCotizaciones
                    .AddItem
                    .List(.ListCount - 1, 0) = codigo
                    .List(.ListCount - 1, 1) = Material
                    .List(.ListCount - 1, 2) = Talla
                    .List(.ListCount - 1, 3) = Marca
                    .List(.ListCount - 1, 4) = Modelo
                    .List(.ListCount - 1, 5) = cantidad_actual
                    .List(.ListCount - 1, 6) = cantidad_seguridad
                End With
                
            End If
        End If
    Next row

    'MsgBox "Cotización completada para filas con 'Solicitar'."
    ' Muestra el UserForm
    CotizacionUserForm.Show
    
End Sub
