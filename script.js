// Variable para rastrear el estado de visibilidad del menú de navegación.
// Se inicializa en 'false' indicando que el menú está oculto al principio.
let menuVisible = false;

/**
 * Muestra u oculta el menú de navegación responsive.
 * Esta función se ejecuta al hacer clic en el ícono del menú (hamburguesa).
 * Alterna la clase 'responsive' en el elemento 'nav', lo que cambia su visibilidad
 * según los estilos definidos en CSS.
 * También actualiza la variable 'menuVisible' para reflejar el estado actual del menú.
 */
function mostrarOcultarMenu(){
    if(menuVisible){ // Si el menú está visible, se procederá a ocultarlo.
        document.getElementById("nav").classList =""; // Remueve la clase 'responsive' para ocultar el menú.
        menuVisible = false; // Actualiza el estado de visibilidad a 'false'.
    }else{ // Si el menú está oculto, se procederá a mostrarlo.
        document.getElementById("nav").classList ="responsive"; // Agrega la clase 'responsive' para mostrar el menú.
        menuVisible = true; // Actualiza el estado de visibilidad a 'true'.
    }
}

/**
 * Oculta el menú de navegación responsive cuando se selecciona una opción.
 * Esta función se llama al hacer clic en cualquier enlace del menú.
 * Remueve la clase 'responsive' del elemento 'nav' para asegurar que el menú se cierre,
 * facilitando la visualización del contenido de la sección seleccionada.
 * Actualiza la variable 'menuVisible' a 'false'.
 */
function seleccionar(){
    // Oculta el menú una vez que se selecciona una opción.
    document.getElementById("nav").classList = ""; // Remueve la clase 'responsive'.
    menuVisible = false; // Actualiza el estado de visibilidad.
}

/**
 * Aplica las animaciones a las barras de habilidades cuando la sección 'skills' es visible en la pantalla.
 * Calcula la distancia entre la parte superior de la ventana y la sección de habilidades.
 * Si esta distancia es suficiente (lo que indica que la sección está visible),
 * agrega clases específicas a los elementos de progreso de habilidades.
 * Estas clases (ej. "javascript", "htmlcss") activan las animaciones CSS
 * que muestran el nivel de progreso para cada habilidad.
 */
function efectoHabilidades(){
    // Obtiene el elemento de la sección de habilidades (HTMLElement).
    var skills = document.getElementById("skills");
    // Calcula la distancia vertical desde el borde inferior de la ventana visible hasta el borde superior de la sección 'skills'.
    // window.innerHeight es la altura de la ventana del navegador (viewport).
    // skills.getBoundingClientRect().top es la distancia desde el borde superior de la ventana hasta el borde superior del elemento 'skills'.
    // Si skills.getBoundingClientRect().top es negativo, significa que el borde superior del elemento 'skills' ya ha pasado el borde superior de la ventana (está por encima y fuera de la vista).
    // Si es positivo y menor que window.innerHeight, el elemento está (al menos parcialmente) visible.
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    // Comprueba si la sección de habilidades ha entrado en la vista por al menos 300 píxeles desde la parte inferior.
    // Esto significa que una porción significativa de la sección 'skills' (o toda ella) es visible.
    // El valor 300 es un umbral para activar la animación cuando el usuario ha hecho suficiente scroll para ver las habilidades.
    if(distancia_skills >= 300){
        // Obtiene una colección HTML (HTMLCollection) de todos los elementos con la clase "progreso".
        // Estos elementos son las barras que visualmente representan el nivel de cada habilidad.
        let habilidades = document.getElementsByClassName("progreso");
        // Agrega clases CSS específicas a cada barra de habilidad.
        // Estas clases ("javascript", "htmlcss", etc.) están definidas en 'estilo.css'
        // y contienen las animaciones que llenan la barra de progreso hasta un cierto porcentaje.
        // Es importante que estas clases coincidan con las definidas en el CSS para que las animaciones funcionen.
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop"); // En el HTML original, esta podría ser MYSQL. La clase CSS es 'photoshop'.
        habilidades[3].classList.add("wordpress"); // En el HTML original, esta podría ser PHP. La clase CSS es 'wordpress'.
        habilidades[4].classList.add("drupal");    // En el HTML original, esta podría ser PYTHON. La clase CSS es 'drupal'.
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


/**
 * Listener para el evento 'scroll' de la ventana.
 * Esta función se asigna al evento 'onscroll' del objeto 'window'.
 * Se ejecuta cada vez que el usuario desplaza (hace scroll) la página hacia arriba o hacia abajo.
 * Al ejecutarse, llama a la función 'efectoHabilidades()'. Esto permite que las animaciones
 * de las barras de habilidades se activen o se evalúen dinámicamente según la posición
 * de scroll del usuario, asegurando que las animaciones se disparen cuando la sección
 * de habilidades sea visible.
 */
window.onscroll = function(){
    efectoHabilidades();
}
