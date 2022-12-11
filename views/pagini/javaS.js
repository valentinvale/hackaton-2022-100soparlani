const contentDisposition = require("content-disposition");

function changeImage() {
    console.log(document.getElementById("imgClickAndChange").src);
    if (document.getElementById("imgClickAndChange").src.includes( "ro.png")){
        document.getElementById("imgClickAndChange").src = "images/gb.png";
    } else {
        document.getElementById("imgClickAndChange").src = "images/ro.png";
    }
}
function changeText(clicked_id) {
    document.getElementById("nextButton").classList.remove("float");
    document.getElementById("nextButton").classList.add("enable");
    document.getElementById("depunere").innerHTML = "<h3>Depunere sau retragere de bani</h3><i class='fa fa-money' aria-hidden='true'></i>";
    document.getElementById("plata").innerHTML = "<h3>Plată rată credit</h3><i class='fa fa-clock-o' aria-hidden='true'></i>";
    document.getElementById("operatiune").innerHTML = "<h3>Operațiune fără numerar</h3><i class='fa fa-credit-card' aria-hidden='true'></i>";
    document.getElementById("deschidereCurent").innerHTML = "<h3>Deschidere cont curent</h3><i class='fa fa-user-plus' aria-hidden='true'></i>";
    document.getElementById("deschidereMinori").innerHTML = "<h3>Deschidere cont minori</h3><i class='fa fa-child' aria-hidden='true'></i>";
    document.getElementById("deschidereRefugiati").innerHTML = "<h3>Deschidere conturi refugiați</h3><i class='fa fa-shield' aria-hidden='true'></i>";
    document.getElementById("suport").innerHTML = "<h3>Suport utilizare aplicație George</h3><i class='fa fa-question-circle' aria-hidden='true'></i>";
    document.getElementById("diagnostic").innerHTML = "<h3>Diagnostic financiar gratuit</h3><i class='fa fa-stethoscope' aria-hidden='true'></i>";
    document.getElementById("creditPersonale").innerHTML = "<h3>Credit de nevoi personale</h3><i class='fa fa-car' aria-hidden='true'></i>";
    document.getElementById("creditIpotecar").innerHTML = "<h3>Credit ipotecar</h3><i class='fa fa-home' aria-hidden='true'></i>";
    document.getElementById("economisire").innerHTML = "<h3>Economisire</h3><i class='fa fa-eur' aria-hidden='true'></i>";
    document.getElementById("contracte").innerHTML = "<h3>Contracte BpL</h3><i class='fa fa-pencil-square-o' aria-hidden='true'></i>";
    document.getElementById("investitiiSubscriere").innerHTML = "<h3>Investiții - subscriere</h3><i class='fa fa-bar-chart' aria-hidden='true'></i>";
    document.getElementById("investitiiRascumparare").innerHTML = "<h3>Investiții - răscumpărare</h3><i class='fa fa-line-chart' aria-hidden='true'></i>";
    document.getElementById("asigurare").innerHTML = "<h3>Asigurare</h3><i class='fa fa-medkit' aria-hidden='true'></i>";
    document.getElementById("pensie").innerHTML = "<h3>Pensie privată</h3><i class='fa fa-sun-o' aria-hidden='true'></i>";
    
    document.getElementById("depunere").classList.remove("active");
    document.getElementById("plata").classList.remove("active");
    document.getElementById("operatiune").classList.remove("active");
    document.getElementById("deschidereCurent").classList.remove("active");
    document.getElementById("deschidereMinori").classList.remove("active");
    document.getElementById("deschidereRefugiati").classList.remove("active");
    document.getElementById("suport").classList.remove("active");
    document.getElementById("diagnostic").classList.remove("active");
    document.getElementById("creditPersonale").classList.remove("active");
    document.getElementById("creditIpotecar").classList.remove("active");
    document.getElementById("economisire").classList.remove("active");
    document.getElementById("contracte").classList.remove("active");
    document.getElementById("investitiiSubscriere").classList.remove("active");
    document.getElementById("investitiiRascumparare").classList.remove("active");
    document.getElementById("asigurare").classList.remove("active");
    document.getElementById("pensie").classList.remove("active");

    switch(clicked_id) {
        case "depunere":
            document.getElementById("depunere").innerHTML = "<p>Pentru retragerile de numerar de peste 3,000 de euro, te invitam sa ne contactezi telefonic la *2227 (ap. nationale) sau +4021 407 4200 (ap. internationale). De asemenea, daca doresti sa retragi ORICE suma in alta valuta diferita de lei, euro sau dolari americani, te rugam sa ne contactezi.</p>";
            document.getElementById("depunere").classList.add("active");
            break;
        case "plata":
            document.getElementById("plata").innerHTML = "<p style ='margin-top:60px'>Plata ratelor pentru toate tipurile de credit</p>";
            document.getElementById("plata").classList.add("active");
            break;
        case "operatiune":
            document.getElementById("operatiune").innerHTML = "<p style ='margin-top:55px' >Cont curent, card de debit, tranzactii, George si servicii digitale, administrare cont si card.</p>";
            document.getElementById("operatiune").classList.add("active");
            break;
        case "deschidereCurent":
            document.getElementById("deschidereCurent").innerHTML = "<p style ='margin-top:55px'>Asistență în deschiderea contului dumneavoastră curent</p>";
            document.getElementById("deschidereCurent").classList.add("active");
            break;
        case "deschidereMinori":
            document.getElementById("deschidereMinori").innerHTML = "<p style ='margin-top:60px'>Deschidere cont persoane sub 18 ani.</p>";
            document.getElementById("deschidereMinori").classList.add("active");
            break;
        case "deschidereRefugiati":
            document.getElementById("deschidereRefugiati").innerHTML = "<p style ='margin-top:60px'>Deschidere conturi refugiati</p>";
            document.getElementById("deschidereRefugiati").classList.add("active");
            break;
        case "suport":
            document.getElementById("suport").innerHTML = "<p style ='margin-top:60px'>Activare George (etoken), servicii</p>";
            document.getElementById("suport").classList.add("active");
            break;
        case "diagnostic":
            document.getElementById("diagnostic").innerHTML = "<p style ='margin-top:55px'>Diagnostic financiar gratuit, alături de specialiștii noștri.</p>";
            document.getElementById("diagnostic").classList.add("active");
            break;
        case "creditPersonale":
            document.getElementById("creditPersonale").innerHTML = "<p style ='margin-top:60px'>Inclusiv card credit si descoperit de cont.</p>";
            document.getElementById("creditPersonale").classList.add("active");
            break;
        case "creditIpotecar":
            document.getElementById("creditIpotecar").innerHTML = "<p style ='margin-top:55px'>Punem la dispoziție programe precum: Casa Mea, Noua Casa</p>";
            document.getElementById("creditIpotecar").classList.add("active");
            break;
        case "economisire":
            document.getElementById("economisire").innerHTML = "<p style='margin-top:60px'>Depozit, cont de economii.</p>";
            document.getElementById("economisire").classList.add("active");
            break;
        case "contracte":
            document.getElementById("contracte").innerHTML = "<p style='margin-top:60px'>Banca pentru Locuinte</p>";
            document.getElementById("contracte").classList.add("active");
            break;
        case "investitiiSubscriere":
            document.getElementById("investitiiSubscriere").classList.add('active');
            document.getElementById("investitiiSubscriere").innerHTML = "<p style='margin-top:48px'>Fonduri mutuale, Capital Plan, Titluri de stat, Obligatiuni structurate, Aur (lingouri si monede) etc.</p>";
            break;
        case "investitiiRascumparare":
            document.getElementById("investitiiRascumparare").innerHTML = "<p style='margin-top:48px'>Fonduri mutuale, Capital Plan, Titluri de stat, Obligatiuni structurate, Aur (lingouri si monede) etc.</p>";
            document.getElementById("investitiiRascumparare").classList.add("active");
            break;
        case "asigurare":
            document.getElementById("asigurare").innerHTML = "<p style='margin-top:60px'>Asigurări pentru viață, casă și bunuri.</p>";
            document.getElementById("asigurare").classList.add("active");
            break;
        case "pensie":
            document.getElementById("pensie").innerHTML = "<p style='margin-top:60px'>Pilon 3 de la BCR Pensii.</p>";
            document.getElementById("pensie").classList.add("active");
            break;
        default:
            console.log("default");

    }
    
    


}