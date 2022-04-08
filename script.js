var img1 = document.getElementById('img1')
var img2 = document.getElementById('img2')
var placar1 = 0
var placar2 = 0
var rodadas = 0

// PEDRA---------------------------------------------------------------

function pedra()
{
    img1.setAttribute("src","imagens/loading.gif")
    img2.setAttribute("src","imagens/loading.gif")
    img1.style.display='inline'
    img2.style.display='inline'
    document.getElementById('vencedor').style.display = 'block'
    setTimeout(run, 500)
    function run()        
    {
        rodadas++
        var oponente = null
        var resultado = null
        var vencedor = null
        switch (Math.floor(Math.random() * 3))
        {
            case 0:
                oponente = "Pedra";
                vencedor = "Empate";
                img2.setAttribute("src", "imagens/pedra.png");
                break;
            case 1:
                oponente = "Papel";
                vencedor = "Você perdeu";
                placar2 += 1;
                img2.setAttribute("src", "imagens/papel.png");
                break;
            case 2:
                oponente = "Tesoura";
                vencedor = "Você ganhou";
                placar1 += 1;
                img2.setAttribute("src", "imagens/tesoura.png");
                break;
            
        }
            img1.setAttribute("src", "imagens/pedra.png")
            document.getElementById('vencedor').innerText = vencedor
            document.getElementById('placar1').innerText = placar1
            document.getElementById('placar2').innerText = placar2
            document.getElementById('rodadas').innerHTML = `Rodadas: ${rodadas}`
            if(placar1 > placar2)
            {
                document.body.style.backgroundColor = "rgb(51, 136, 178)"
            }
            else if(placar1 < placar2)
            {
                document.body.style.backgroundColor = "rgb(214, 49, 49)"
            }
            else
            {
                document.body.style.backgroundColor = "white"
            }
        }
    }
// PAPEL---------------------------------------------------------------

function papel()
{
    img1.setAttribute("src","imagens/loading.gif")
    img2.setAttribute("src","imagens/loading.gif")
    img1.style.display='inline'
    img2.style.display='inline'
    document.getElementById('vencedor').style.display = 'block'
    setTimeout(run, 500)
    function run()
    {
        
        rodadas++
        var oponente = null
        var resultado = null
        var vencedor = null
        switch (Math.floor(Math.random() * 3))
        {
            case 0:
                oponente = "Pedra";
                vencedor = "Você ganhou";
                placar1 ++;
                img2.setAttribute("src", "imagens/pedra.png");
                break;
            case 1:
                oponente = "Papel";
                vencedor = "Empate";
                img2.setAttribute("src", "imagens/papel.png");
                break;
            case 2:
                oponente = "Tesoura";
                vencedor = "Você perdeu";
                placar2++;
                img2.setAttribute("src", "imagens/tesoura.png");
                break;
        }
        img1.setAttribute("src", "imagens/papel.png")
        document.getElementById('vencedor').innerText = vencedor
        document.getElementById('placar1').innerText = placar1
        document.getElementById('placar2').innerText = placar2
        document.getElementById('rodadas').innerHTML = `Rodadas: ${rodadas}`
        if(placar1 > placar2)
        {
            document.body.style.backgroundColor = "rgb(51, 136, 178)"
        }
        else if(placar1 < placar2)
        {
            document.body.style.backgroundColor = "rgb(214, 49, 49)"
        }
        else
        {
            document.body.style.backgroundColor = "white"
        }
    }
}
// TESOURA -------------------------------------------------------
function tesoura()
{
    img1.setAttribute("src","imagens/loading.gif")
    img2.setAttribute("src","imagens/loading.gif")
    img1.style.display='inline'
    img2.style.display='inline'
    document.getElementById('vencedor').style.display = 'block'
    setTimeout(run, 500)
    function run()
    {
        rodadas++
        var oponente = null
        var resultado = null
        var vencedor = null
        switch (Math.floor(Math.random() * 3))
        {
            case 0:
                oponente = "Pedra";
                vencedor = "Você perdeu";
                placar2++;
                img2.setAttribute("src", "imagens/pedra.png");
                break;
            case 1:
                oponente = "Papel";
                vencedor = "Você ganhou";
                placar1++;
                img2.setAttribute("src", "imagens/papel.png");
                break;
            case 2:
                oponente = "Tesoura";
                vencedor = "Empate";
                img2.setAttribute("src", "imagens/tesoura.png"); 
                break;
        }
        img1.setAttribute("src", "imagens/tesoura.png");
        document.getElementById('vencedor').innerText = vencedor
        document.getElementById('placar1').innerText = placar1
        document.getElementById('placar2').innerText = placar2
        document.getElementById('rodadas').innerHTML = `Rodadas: ${rodadas}`
        if(placar1 > placar2)
        {
            document.body.style.backgroundColor = "rgb(51, 136, 178)"
        }
        else if(placar1 < placar2)
        {
            document.body.style.backgroundColor = "rgb(214, 49, 49)"
        }
        else
        {
            document.body.style.backgroundColor = "white"
        }
    }
}
// Reset-----------------------------------------------------------
function reset()
{
    placar1 = 0
    placar2 = 0
    rodadas = 0
    document.getElementById('placar1').innerText = placar1
    document.getElementById('placar2').innerText = placar2
    document.getElementById('rodadas').innerHTML = `Rodadas: ${rodadas}`
    document.body.style.backgroundColor = "white"
    img1.style.display='none'
    img2.style.display='none'
    document.getElementById('vencedor').style.display = 'none'

}                