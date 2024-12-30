// Archivo de JavaScript para funcionalidades de la página

document.addEventListener("DOMContentLoaded", () => {
    // Ejemplo: Mostrar un mensaje al enviar el formulario
    const form = document.getElementById("agenda-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevenir el envío estándar

        alert("¡Gracias por agendar tu turno! Nos pondremos en contacto contigo pronto.");

        // Aquí puedes agregar más lógica, como enviar datos al servidor
        form.reset();
    });
});
