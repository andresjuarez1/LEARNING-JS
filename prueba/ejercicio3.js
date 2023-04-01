let cantidad = prompt("Cuantos alumnos son?");
let alumnosTotales = [];

for(i = 0;i < cantidad; i ++){
    alumnosTotales[i] = [prompt("nombre del alumno " + (i+1)),0]
}

const asistencia = (nombre, p)=>{
    let presencia=prompt(nombre);
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}

for (i = 0; i < 30; i++){
    for (alumno in alumnosTotales){
        asistencia(alumnosTotales[alumno][0], alumno)
    }
}

for (alumno in alumnosTotales){
    let resultado =  `${alumnosTotales[alumno][0]}:<br>
    ________Asistencias: ${alumnosTotales[alumno][1]}<br>
    ________Ausentes: ${30-alumnosTotales[alumno[1]]}
    `;
    if(30-alumnosTotales[alumno][1]>18){
        resultado += "REPROBADO aña"
    }else{
        resultado+="<br><br>"
    }document.write(resultado)
}
