function calcular()
{
    var nota1=parseInt(document.getElementById("nota1").value);
    var nota2=parseInt(document.getElementById("nota2").value);
    var nota3=parseInt(document.getElementById("nota3").value);
    
    var promedio=(nota1+nota2+nota3)/3;

    if (promedio>60)
    {
        document.getElementById("resultado").innerHTML= style= "color:green">"Aprobado";
    }
    else
    {
        document.getElementById("resultado").innerHTML= style= "color:rgb(250, 4, 4)">"Reprobado";
    }
}
