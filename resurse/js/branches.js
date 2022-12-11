//const { replicationStart } = require("pg-protocol/dist/messages");

window.addEventListener("DOMContentLoaded", function() {

    // class compSucursala extends React.Component{
    //     constructor(props){
    //         super(props);
    //     }
    //     render(){
    //         return(
    //             <div className="sucursala">
    //                 <p>obGlobal.obSucursale[]</p>
    //             </div>
    //         );
    //     }
    // }

    fetch("data").then(function(response){
        return response.json();
    }).then(function(json){
        console.log('data',json);
        var btn = document.getElementById("filtrare");
        var input_suc = document.getElementById("inp-nume");
    input_suc.oninput = function(){
        console.log("s-a apasat butonul");
        obSucursale = json.serviceResponse;
        console.log(obSucursale);
        var input = document.getElementById("inp-nume");
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",input.value);
        var val = input.value;
        var obFiltrat = [];
        for(var i = 0; i < obSucursale.length; i++)
            if(obSucursale[i].br_city.toLowerCase().indexOf(val.toLowerCase()) != -1 || 
            obSucursale[i].location.address.county.toLowerCase().indexOf(val.toLowerCase()) != -1 ||
            obSucursale[i].brn.toLowerCase().indexOf(val.toLowerCase()) != -1 ||
            obSucursale[i].br_street.toLowerCase().indexOf(val.toLowerCase()) != -1){
                obFiltrat.push(obSucursale[i]);
                console.log(obSucursale[i].location.address.county);
            }
                
        
        

        var divFiltrare = document.getElementById("divFiltrare");

        if(input.value == "")
            divFiltrare.innerHTML = "";
        else{
            divFiltrare.innerHTML = "";
        for(var i = 0; i < obFiltrat.length; i++){
            var div = document.createElement("div");
            
            var radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "radio-sucursala";
            radio.className = "radio-sucursala";
            div.appendChild(radio);              
            div.className = "sucursala";
            var p_nume = document.createElement("p");
            p_nume.className = "p_nume";
            p_nume.innerHTML = obFiltrat[i].brn;
            div.appendChild(p_nume);
            var p_oras = document.createElement("p");
            p_oras.className = "p_oras";
            p_oras.innerHTML = obFiltrat[i].br_city;
            div.appendChild(p_oras);
            var p_judet = document.createElement("p");
            p_judet.className = "p_judet";
            p_judet.innerHTML = obFiltrat[i].location.address.county;
            div.appendChild(p_judet);
            var p_strada = document.createElement("p");
            p_strada.className = "p_strada";
            p_strada.innerHTML = obFiltrat[i].br_street;
            div.appendChild(p_strada);
            

            divFiltrare.appendChild(div);
        }
        
        }

        var btn_submit_sucursala = document.getElementById("submit-sucursala");
        btn_submit_sucursala.onclick = function(){
            var radio = document.getElementsByClassName("radio-sucursala");
            for(var i = 0; i < radio.length; i++)
            {
                if(radio[i].checked)
                {
                    console.log(obFiltrat[i].brn)
                    var radio_href = "appoint/" + obFiltrat[i].orgId;
                    var link = document.getElementById("ancora_submit");
                    link.href = radio_href;
                    console.log(link.href)
                }
                    
            }
        }    



        
    }

    // ReactDOM.render(
    //     <div><p>sadasasd</p></div>, document.getElementById("divFiltrare")
    // );

});
    });


    

console.log("merge scriptul");

