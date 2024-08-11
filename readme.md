Repositorio de Prueba para la pagina web del Clan Tempestad

/* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Georgia, 'Times New Roman', Times, serif;
    line-height: 1.6;
    background-color: #bed6fc;
    color: #333;
}

/* Estilos del encabezado y navegación */
header {
    background: #333;
    color: rgb(185, 185, 245);
    padding: 10px 0;
    position: relative;
    text-align: center;
}

.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.navbar h1 {
    margin: auto;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 1rem;
}

.nav-links li {
    display: flex;
    align-items: center;
}

.nav-links a {
    color: #ffffff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    transition: background 0.3s;
}

.nav-links a:hover {
    background: #575757;
    border-radius: 5px;
}

.logo {
    width: 50px;
}

/* Estilos de la sección home */
.section-home {
    padding: 2rem 1rem;
    text-align: center;
    background-color: rgb(185, 185, 245);
}

.image-text-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.image-box {
    flex: 1;
    min-width: 250px;
    max-width: 300px;
    background: #bed6fc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    border-radius: 8px;
}

.image-box img {
    width: 100%;
    border-radius: 8px;
}

.image-box p {
    margin-top: 1rem;
    text-align: left;
}

/* Estilos de las secciones */
.section-about,
.section-contact,
.section-gallery,
.section-download {
    padding: 2rem 1rem;
    text-align: center;
    background-color: rgb(185, 185, 245);
    margin-top: 2rem;
}

.section-about h2,
.section-contact h2,
.section-gallery h2,
.section-download h2 {
    margin-bottom: 1rem;
}

.section-contact p,
.section-about p {
    max-width: 600px;
    margin: 0 auto 2rem auto;
}

.contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.contact-form label {
    align-self: flex-start;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    max-width: 500px;
    padding: 0.5rem;
    border: 1px solid #aaa;
    border-radius: 4px;
}

.contact-form button {
    padding: 0.5rem 1rem;
    background: #333;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s;
}

.contact-form button:hover {
    background: #575757;
}

/* Estilos del carrusel 1 */
.carousel-1 {
    position: relative;
    max-width: 800px;
    margin: 2rem auto;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.carousel-1-container {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.carousel-1 img {
    width: 100%;
    border-radius: 8px;
}

.carousel-1 button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: #ffffff;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    transition: background 0.3s;
}

.carousel-1 button:hover {
    background: rgba(0, 0, 0, 0.8);
}

.carousel-1 .prev {
    left: 0;
}

.carousel-1 .next {
    right: 0;
}

/* Estilos del carrusel 2 */
.carousel-2 {
    position: relative;
    max-width: 800px;
    margin: 2rem auto;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.carousel-2-container {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.carousel-2 img {
    width: 100%;
    border-radius: 8px;
}

.carousel-2 button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: #ffffff;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    transition: background 0.3s;
}

.carousel-2 button:hover {
    background: rgba(0, 0, 0, 0.8);
}

.carousel-2 .prev {
    left: 0;
}

.carousel-2 .next {
    right: 0;
}

/* Estilos del pie de página */
footer {
    background: rgb(185, 185, 245);
    color: #000000;
    text-align: center;
    padding: 1rem 0;
    margin-top: 2rem;
}

.social-links {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.social-links li {
    display: flex;
    align-items: center;
}

.social-links a {
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s;
}

.social-links img {
    width: 30px;
    height: 30px;
    margin-right: 0.5rem;
}

.social-links a:hover {
    color: #aaa;
}

/* Responsive Design */
@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
    }

    .nav-links {
        flex-direction: column;
        align-items: center;
    }

    .image-text-container {
        flex-direction: column;
        gap: 1rem;
    }

    .contact-form {
        width: 100%;
        padding: 0 1rem;
    }
}

@media (max-width: 576px) {
    .section-home,
    .section-about,
    .section-contact,
    .section-gallery,
    .section-download {
        padding: 1rem;
    }
}

/* Flexbox and Grid Enhancements */
.flex-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

.flex-item,
.grid-item {
    background: #bed6fc;
    padding: 1rem;
    border-radius: 8px;
}

/* Bootstrap Integration */
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.mt-2 {
    margin-top: 2rem !important;
}
