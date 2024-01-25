
document.addEventListener("DOMContentLoaded", function ()
{
	// Obtén el elemento contenedor que se desplazará horizontalmente
	var scrollContainer = document.getElementById("scrollContainer");

	// Ajusta la velocidad de desplazamiento horizontal
	var scrollSpeed = 500;

	// Manejar el evento de desplazamiento de la rueda del ratón
	function handleMouseWheel(event) {
		// Verifica si la rueda se ha movido hacia arriba o hacia abajo
		var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));

		// Calcula el nuevo desplazamiento horizontal
		scrollContainer.scrollLeft -= delta * scrollSpeed;

		// Evita el desplazamiento vertical predeterminado
		event.preventDefault();
	}

	// Agrega el event listener para el desplazamiento de la rueda del ratón
	if (scrollContainer.addEventListener) {
		// Para navegadores modernos
		scrollContainer.addEventListener("mousewheel", handleMouseWheel, { passive: false });
	} else {
		// Para navegadores antiguos
		scrollContainer.attachEvent("onmousewheel", handleMouseWheel);
	}
});
