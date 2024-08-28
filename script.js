localStorage.clear();

var tamanho = window.innerWidth;
function menu() {
    document.getElementById("tela").innerHTML = '<button id="fechar" onclick="fechar()">x</button><br><button id="adicionar" onclick="ADD()">ADD</button><button id="excluir" onclick="excluir()">Excluir</button>';
    var a = document.getElementById("tela");
    a.style.animation = "abrir 0.5s";
    a.style.border = 'solid 2px black';
    a.style.borderLeft = 'none';
    a.style.borderTop = 'none';
    a.style.width = '280px';
    a.style.height = '170px';
    a.style.marginLeft = tamanho/3+'px';
    document.getElementById("fechar2").remove();
    document.getElementById("fechar3").remove();
    document.getElementById("fechar4").remove();
    document.getElementById("fechar5").remove();
    document.getElementById("fechar6").remove();
    document.getElementById("fechar7").remove();
    document.getElementById("Slot 1").remove();
}

function fechar() {
    document.getElementById("tela").innerHTML = '<div id="tela"></div>';
    var a = document.getElementById("tela");
    a.style.animation =  "fechar 0.5s";
    a.style.border = '';
    a.style.width = '0px';
    a.style.height = '0px';
}

function ADD() {
    
    document.getElementById("tela").innerHTML = '<button id="fechar" onclick="fechar()">x</button><br><form><ui>Insira uma imagem</ui><br><br><input type="file" id="imagem" accept="image/jpeg, image/png" required ><br><br><ui>Data</ui><br><input type="date" id="data" required><br><br><ui>Digite seu lembrete.</ui><br><input id="mensagem" type="text" required ></form><br><br><button id="enviar" onclick="enviar()">Enviar</button>';
    var a = document.getElementById("tela");
    a.style.border = 'solid 2px black';
    a.style.borderLeft = 'none';
    a.style.borderTop = 'none';
    a.style.width = '290px';
    a.style.height = '265px';
    
}

function excluir() {
    
    if (localStorage.getItem("mensagem") !=  null || localStorage.getItem("mensagem") == "") {
        var a = document.getElementById("tela2");
        var botao = document.createElement("button");
        botao.id = 'fechar2';
        botao.addEventListener('click', function() {
            localStorage.removeItem("mensagem");
            localStorage.removeItem("data");
            var d = document.getElementById("tela2");
            d.style.border = '';
            d.style.width = "0px";
            d.style.height = "0px";
            d.style.backgroundColor = "";
            d.remove("img");
            document.getElementById("fechar2").remove();
            
            mostrar();
            
        });
        
        
        
        botao.append("Deletar 1");
        
        if ( a.querySelector("button")) {
            "";}
        else{
            a.append(botao);
            var c = document.getElementById("fechar2");
            c.style.margin = "90px 130px";
        }
        fechar();
        
    }
    if (localStorage.getItem("mensagem2") != null || localStorage.getItem("mensagem2") == "") {
        var a = document.getElementById("tela3");
        var botao = document.createElement("button");
        
        botao.id = 'fechar3';
        botao.addEventListener('click', function() {
            localStorage.removeItem("mensagem2");
            localStorage.removeItem("data2");
            var d = document.getElementById("tela3");
            d.style.border = '';
            d.style.width = "0px";
            d.style.height = "0px";
            d.style.backgroundColor = "";
            a.style.marginLeft = tamanho/2+'px';
            d.remove("img");
            document.getElementById("fechar3").remove();
            
            mostrar();
        });
        botao.append("Deletar 2");
        if ( a.querySelector("button")) {
            "";}
        else{
            a.append(botao);
            var c = document.getElementById("fechar3");
            c.style.margin = "90px 130px";
        }
        fechar();
    }
    if (localStorage.getItem("mensagem3") != null || localStorage.getItem("mensagem3") == "") {
        var a = document.getElementById("tela4");
        a.style.marginLeft = tamanho/2+'px';
        var botao = document.createElement("button");
        botao.id = 'fechar4';
        botao.addEventListener('click', function() {
            localStorage.removeItem("mensagem3");
            localStorage.removeItem("data3");
            var d = document.getElementById("tela4");
            d.style.border = '';
            d.style.width = "0px";
            d.style.height = "0px";
            d.style.backgroundColor = "";
            d.remove("img");
            document.getElementById("fechar4").remove();
            mostrar();
        });
        botao.append("Deletar 3");
        if ( a.querySelector("button")) {
            "";}
        else{
            a.append(botao);
            var c = document.getElementById("fechar4");
            c.style.margin = "90px 130px";
        }
        fechar();
    }
    if (localStorage.getItem("mensagem4") != null || localStorage.getItem("mensagem3") == "") {
        var a = document.getElementById("tela5");
        a.style.marginLeft = tamanho/2+'px';
        var botao = document.createElement("button");
        botao.id = 'fechar5';
        botao.addEventListener('click', function() {
            localStorage.removeItem("mensagem4");
            localStorage.removeItem("data4");
            var d = document.getElementById("tela5");
            d.style.border = '';
            d.style.width = "0px";
            d.style.height = "0px";
            d.style.backgroundColor = "";
            d.remove("img");
            document.getElementById("fechar5").remove();
            mostrar();
        });
        botao.append("Deletar 4");
        if ( a.querySelector("button")) {
            "";}
        else{
            a.append(botao);
            var c = document.getElementById("fechar5");
            c.style.margin = "90px 130px";
        }
        fechar();
    }
    if (localStorage.getItem("mensagem5") != null || localStorage.getItem("mensagem3") == "") {
        var a = document.getElementById("tela6");
        a.style.marginLeft = tamanho/2+'px';
        var botao = document.createElement("button");
        botao.id = 'fechar6';
        botao.addEventListener('click', function() {
            localStorage.removeItem("mensagem5");
            localStorage.removeItem("data5");
            var d = document.getElementById("tela6");
            d.style.border = '';
            d.style.width = "0px";
            d.style.height = "0px";
            d.style.backgroundColor = "";
            d.remove("img");
            document.getElementById("fechar4").remove();
            mostrar();
        });
        botao.append("Deletar 5");
        if ( a.querySelector("button")) {
            "";}
        else{
            a.append(botao);
            var c = document.getElementById("fechar6");
            c.style.margin = "90px 130px";
        }
        fechar();
    }
    if (localStorage.getItem("mensagem6") != null || localStorage.getItem("mensagem3") == "") {
        var a = document.getElementById("tela7");
        a.style.marginLeft = tamanho/2+'px';
        var botao = document.createElement("button");
        botao.id = 'fechar7';
        botao.addEventListener('click', function() {
            localStorage.removeItem("mensagem6");
            localStorage.removeItem("data6");
            var d = document.getElementById("tela7");
            d.style.border = '';
            d.style.width = "0px";
            d.style.height = "0px";
            d.style.backgroundColor = "";
            d.remove("img");
            document.getElementById("fechar7").remove();
            mostrar();
        });
        botao.append("Deletar 6");
        if ( a.querySelector("button")) {
            "";}
        else{
            a.append(botao);
            var c = document.getElementById("fechar7");
            c.style.margin = "90px 130px";
        }
        fechar();
    }
    else {
        "";
    }
}

function editar() {
    var tela = document.getElementById("tela");
    var botao = document.createElement('button');
    if (localStorage.getItem("mensagem") != null || localStorage.getItem("mensagem") == "") {
        tela.remove('button');
        botao.id = 'Slot 1';
        botao.append('Alterar');
        botao.style.margin = "90px 130px";
        botao.addEventListener('click', function() {
            tela.innerHTML = '<button id="fechar" onclick="fechar()">x</button><br><form><ui>Insira uma imagem</ui><br><br><input type="file" id="imagem" accept="image/jpeg, image/png"><br><br><ui>Data</ui><br><input type="date" id="data"><br><br><ui>Digite seu lembrete.</ui><br><input id="mensagem" type="text" ></form><br><br><button id="enviar" onclick="enviar()">Enviar</button>';
            tela.style.border = 'solid 2px black';
            tela.style.borderLeft = 'none';
            tela.style.borderTop = 'none';
            tela.style.width = '290px';
            tela.style.height = '265px';
            mostrar();
        });
        tela2.append(botao);
    }
    else {
        "";
    }
}


 
function enviar() {
    var a = document.getElementById('mensagem');
    var b = document.getElementById('data');
    var arq = document.getElementById('imagem').value;
    var x = arq.split("fakepath\\", 2);
    var imagem = document.createElement("img");
    if (localStorage.getItem("mensagem") == null || localStorage.getItem("mensagem") == "") {
        localStorage.setItem("mensagem", a.value);
        localStorage.setItem("data", b.value);
        document.getElementById("tela").innerHTML = '<div id="tela"></div>';
        var c = document.getElementById("tela");
        var d = document.getElementById("tela2");
        c.style.animation = "fechar 0.5s";
        c.style.border = '';
        c.style.width = '0px';
        c.style.height = '0px';
        d.style.border = 'solid 2px black';
        d.style.width = "400px";
        d.style.height = "420px";
        d.style.backgroundColor = "white";
        d.style.marginLeft = tamanho/3.5+'px';
        imagem.style.width = "200px";
        imagem.style.height = "150px";
        
        /*Altere o caminho abaixo para o local onde as fotos da sua camera ficam armazenadas.*/
        imagem.src = x[1];
        
        window.alert(x[1]);
        d.append(imagem);
        mostrar();
    }
    
        else if ( localStorage.getItem("mensagem2") == null || localStorage.getItem("mensagem2") == "") {
            localStorage.setItem("mensagem2", a.value);
            localStorage.setItem("data2", b.value);
            document.getElementById("tela").innerHTML = '<div id="tela"></div>';
            var c = document.getElementById("tela");
            var d = document.getElementById("tela3");
            c.style.border = '';
            c.style.width = '0px';
            c.style.height = '0px';
            d.style.border = 'solid 2px black';
            d.style.width = "400px";
            d.style.height = "420px";
            d.style.backgroundColor = "white";
            imagem.style.width = "200px";
            imagem.style.height = "150px";
            
            /*Altere o caminho abaixo para o local onde as fotos da sua camera ficam armazenadas.*/
            imagem.src = '../DCIM/Camera'+x[1];
            
            d.append(imagem);
            mostrar();
        }
         else if ( localStorage.getItem("mensagem3") == null || localStorage.getItem("mensagem3") == "") {
            localStorage.setItem("mensagem3", a.value);
            localStorage.setItem("data3", b.value);
            document.getElementById("tela").innerHTML = '<div id="tela"></div>';
            var c = document.getElementById("tela");
             var d = document.getElementById("tela4");
            c.style.border = '';
            c.style.width = '0px';
            c.style.height = '0px';
             d.style.border = 'solid 2px black';
             d.style.width = "400px";
             d.style.height = "420px";
             d.style.backgroundColor = "white";
             imagem.style.width = "200px";
             imagem.style.height = "150px";
             
             /*Altere o caminho abaixo para o local onde as fotos da sua camera ficam armazenadas.*/
             
             imagem.src = '../DCIM/Camera'+x[1];
             
             d.append(imagem);
            mostrar();
         }
    else if ( localStorage.getItem("mensagem4") == null || localStorage.getItem("mensagem4") == "") {
            localStorage.setItem("mensagem4", a.value);
            localStorage.setItem("data4", b.value);
            document.getElementById("tela").innerHTML = '<div id="tela"></div>';
            var c = document.getElementById("tela");
             var d = document.getElementById("tela5");
            c.style.border = '';
            c.style.width = '0px';
            c.style.height = '0px';
             d.style.border = 'solid 2px black';
             d.style.width = "400px";
             d.style.height = "420px";
             d.style.backgroundColor = "white";
             imagem.style.width = "200px";
             imagem.style.height = "150px";
        
        /*Altere o caminho abaixo para o local onde as fotos da sua camera ficam armazenadas.*/
         
             imagem.src = '../DCIM/Camera'+x[1];
        
             d.append(imagem);
            mostrar();
         }
    else if ( localStorage.getItem("mensagem5") == null || localStorage.getItem("mensagem5") == "") {
            localStorage.setItem("mensagem5", a.value);
            localStorage.setItem("data5", b.value);
            document.getElementById("tela").innerHTML = '<div id="tela"></div>';
            var c = document.getElementById("tela");
             var d = document.getElementById("tela6");
            c.style.border = '';
            c.style.width = '0px';
            c.style.height = '0px';
             d.style.border = 'solid 2px black';
             d.style.width = "400px";
             d.style.height = "420px";
             d.style.backgroundColor = "white";
             imagem.style.width = "200px";
             imagem.style.height = "150px";
        
        /*Altere o caminho abaixo para o local onde as fotos da sua camera ficam armazenadas.*/
             imagem.src = '../DCIM/Camera'+x[1];
        
             d.append(imagem);
            mostrar();
         }
    else if ( localStorage.getItem("mensagem6") == null || localStorage.getItem("mensagem6") == "") {
            localStorage.setItem("mensagem6", a.value);
            localStorage.setItem("data6", b.value);
            document.getElementById("tela").innerHTML = '<div id="tela"></div>';
            var c = document.getElementById("tela");
             var d = document.getElementById("tela7");
            c.style.border = '';
            c.style.width = '0px';
            c.style.height = '0px';
             d.style.border = 'solid 2px black';
             d.style.width = "400px";
             d.style.height = "420px";
             d.style.backgroundColor = "white";
             imagem.style.width = "200px";
             imagem.style.height = "150px";
        
        /*Altere o caminho abaixo para o local onde as fotos da sua camera ficam armazenadas.*/
             imagem.src = './'+x[1];
        
             d.append(imagem);
            mostrar();
         }
     
    
    else {
        window.alert("Memoria cheia. Exclua um Slot.");
    }
}
function mostrar() {
    document.getElementById("texto1").innerHTML = localStorage.getItem("mensagem");
    document.getElementById("texto2").innerHTML = localStorage.getItem("data");
    document.getElementById("texto3").innerHTML = localStorage.getItem("mensagem2");
    document.getElementById("texto4").innerHTML = localStorage.getItem("data2");
    document.getElementById("texto5").innerHTML = localStorage.getItem("mensagem3");
    document.getElementById("texto6").innerHTML = localStorage.getItem("data3");
    document.getElementById("texto7").innerHTML = localStorage.getItem("mensagem4");
    document.getElementById("texto8").innerHTML = localStorage.getItem("data4");
    document.getElementById("texto9").innerHTML = localStorage.getItem("mensagem5");
    document.getElementById("texto10").innerHTML = localStorage.getItem("data5");
    document.getElementById("texto11").innerHTML = localStorage.getItem("mensagem6");
    document.getElementById("texto12").innerHTML = localStorage.getItem("data6");

}
setInterval(mostrar(), 100);
