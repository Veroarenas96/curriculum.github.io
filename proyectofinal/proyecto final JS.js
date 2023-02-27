document.getElementById("habilidades").addEventListener('click', function() {
    let habilidades = ("Buena comunicación, gestión de grandes equipos. Dominio del paquete Office, tengo espíritu comercial y agilidad con los resultados. Priorizo los objetivos de la empresa");
    console.log(habilidades);
    document.getElementById('facademica').innerHTML = habilidades;
    document.getElementById('contenedorderesultado').style.display = 'block';
});
document.getElementById("academia").addEventListener('click', function() {
    let facademica = ("Publicidad y relaciones públicas en la Universidad del Mar Estudios en Marketing y Publicidad | 2018 - 2021");
    console.log(facademica);
    document.getElementById('facademica').innerHTML = facademica;
    document.getElementById('contenedorderesultado').style.display = 'block';
});
document.getElementById("idioma").addEventListener('click', function() {
    let idioma = ("Español nativo | Ingles A1 | Portugues");
    console.log(idioma);
    document.getElementById('facademica').innerHTML = idioma;
    document.getElementById('contenedorderesultado').style.display = 'block';
});