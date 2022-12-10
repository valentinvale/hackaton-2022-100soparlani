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
    btn.onclick = function(){
        console.log("s-a apasat butonul");
        obSucursale = json.serviceResponse;
        console.log(obSucursale);
        var input = document.getElementById("inp-nume");
        var val = input.value;
        var obFiltrat = [];
        for(var i = 0; i < obSucursale.length; i++)
            if(obSucursale[i].br_city.toLowerCase().indexOf(val.toLowerCase()) != -1)
                obFiltrat.push(obSucursale[i]);
        

        var divFiltrare = document.getElementById("divFiltrare");
        divFiltrare.innerHTML = "";
        for(var i = 0; i < obFiltrat.length; i++){
            var div = document.createElement("div");
            div.className = "sucursala";
            div.innerHTML = obFiltrat[i].br_city;
            divFiltrare.appendChild(div);
        }


        
    }

    // ReactDOM.render(
    //     <div><p>sadasasd</p></div>, document.getElementById("divFiltrare")
    // );

});
    });


    

console.log("merge scriptul");

