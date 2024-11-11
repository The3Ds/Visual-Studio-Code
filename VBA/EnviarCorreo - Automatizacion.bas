Attribute VB_Name = "EnviarCorreo"
Sub EnviarUserFormComoExcelAdjunto()

    Dim olApp As Object
    Dim olMail As Object
    Dim excelPath As String
    Dim tempSheet As Worksheet
    Dim i As Long

    ' Crear una hoja temporal para el archivo Excel
    Set tempSheet = ThisWorkbook.Sheets.Add
    tempSheet.Name = "TempInventario"
    
    ' Exportar datos del UserForm a la hoja temporal
    With tempSheet
        .Range("A1").Value = "Código"
        .Range("B1").Value = "Material"
        .Range("C1").Value = "Talla"
        .Range("D1").Value = "Marca"
        .Range("E1").Value = "Modelo"
        .Range("F1").Value = "Cantidad actual"
        .Range("G1").Value = "Cantidad seguridad"
        
        ' Llenar las filas con los datos del UserForm
        For i = 0 To CotizacionUserForm.lstCotizaciones.ListCount - 1
            .Cells(i + 2, 1).Value = CotizacionUserForm.lstCotizaciones.List(i, 0)
            .Cells(i + 2, 2).Value = CotizacionUserForm.lstCotizaciones.List(i, 1)
            .Cells(i + 2, 3).Value = CotizacionUserForm.lstCotizaciones.List(i, 2)
            .Cells(i + 2, 4).Value = CotizacionUserForm.lstCotizaciones.List(i, 3)
            .Cells(i + 2, 5).Value = CotizacionUserForm.lstCotizaciones.List(i, 4)
            .Cells(i + 2, 6).Value = CotizacionUserForm.lstCotizaciones.List(i, 5)
            .Cells(i + 2, 7).Value = CotizacionUserForm.lstCotizaciones.List(i, 6)
        Next i
    End With

    ' Definir la ruta temporal para el archivo Excel
    excelPath = Environ("TEMP") & "\InventarioActual.xlsx"
    
    ' Guardar la hoja temporal como archivo Excel
    tempSheet.Copy
    ActiveWorkbook.SaveAs Filename:=excelPath, FileFormat:=51
    ActiveWorkbook.Close False
    Application.DisplayAlerts = False
    tempSheet.Delete
    Application.DisplayAlerts = True

    ' Configurar Outlook y el correo
    Set olApp = CreateObject("Outlook.Application")
    Set olMail = olApp.CreateItem(0)

    ' Crear y enviar el correo con el archivo Excel adjunto
    With olMail
        .To = "destinatario@ejemplo.com"
        .Subject = "Inventario Actual - Excel"
        .Body = "Adjunto el inventario actualizado en formato Excel."
        .Attachments.Add excelPath
        .Display ' Cambiar a .Send para enviar directamente
    End With

    ' Liberar memoria
    Set olMail = Nothing
    Set olApp = Nothing
End Sub

