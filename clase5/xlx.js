function SubirXLSX() {
    try {
        
        archivoXLSX = document.getElementById("archivoXLSX").files[0];
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(archivoXLSX);
        fileReader.onload = (event) => {
            let data = event.target.result;
            let workbook = XLSX.read(data, { type: "binary" });

            workbook.SheetNames.forEach(sheet => {
                let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                console.log(JSON.stringify (rowObject))

                
            })
        }

    } catch (e) {
        console.log(e)
    }

}