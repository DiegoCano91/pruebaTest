function processData(input) {
    let data = input.split(";");
    let data_testo = data[2];    
    let arr_texto2 =[];

    if (data[0]=='C'){ 
        let arr_texto = data_testo.split(" ");
        if(data[1]=='C'){        
            
            arr_texto2 = arr_texto.map(element => {
               return element.charAt(0).toUpperCase() + element.slice(1);
                
            });
        }
        if(data[1]=='V'){
            arr_texto2 = arr_texto.map((element, index) => {
                
                if (index==0)
                    return element;
                else
                    return element.charAt(0).toUpperCase() + element.slice(1);               
            });

        }
        if(data[1]=='M'){
            arr_texto2 = arr_texto.map((element, index )=> {
                
                if (index==0)
                    return element;
                else
                    return element.charAt(0).toUpperCase() + element.slice(1);               
            });
            arr_texto2.push('(');
            arr_texto2.push(')');
        }
        console.log(arr_texto2.join(""))
    }   
    if (data[0]=='S'){
        let texto_separado = data_testo.split(/(?=[A-Z])/);
        arr_texto2 = texto_separado.map( element =>{
            return element.toLowerCase()
        });

        let texto_return_separado =arr_texto2.join(" ");

        if(data[1]=='M'){
            texto_return_separado = texto_return_separado.slice(0,texto_return_separado.length-2)
            
        }
        console.log(texto_return_separado);
    }
    
    
}


processData('S;V;pictureFrame')