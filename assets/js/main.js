const home = document.querySelector("#home");
const about = document.querySelector("#about");
const price = document.querySelector("#price");
const contact = document.querySelector("#contact");

// Memberships
const basic = document.querySelector("#basic");
const standard = document.querySelector("#standard");
const premium = document.querySelector("#premium");

home.addEventListener("click", (h) => {
  h.preventDefault();
  const sectionH = document.querySelector(".hero");
  sectionH.scrollIntoView({ behavior: "smooth" });
});

about.addEventListener("click", (a) => {
  a.preventDefault();
  const sectionA = document.querySelector(".about");
  sectionA.scrollIntoView({ behavior: "smooth" });
});

price.addEventListener("click", (p) => {
  p.preventDefault();
  const sectionP = document.querySelector(".membership");
  sectionP.scrollIntoView({ behavior: "smooth" });
});

contact.addEventListener("click", (c) => {
  c.preventDefault();
  const sectionC = document.querySelector(".contact");
  sectionC.scrollIntoView({ behavior: "smooth" });
});

basic.addEventListener("click", (b) => {
  b.preventDefault();
  const sectionB = document.querySelector(".basic");
  sectionB.scrollIntoView({ behavior: "smooth" });
});

standard.addEventListener("click", (s) => {
  s.preventDefault();
  const sectionS = document.querySelector(".standard");
  sectionS.scrollIntoView({ behavior: "smooth" });
});

premium.addEventListener("click", (pr) => {
  pr.preventDefault();
  const sectionP = document.querySelector(".premium");
  sectionP.scrollIntoView({ behavior: "smooth" });
});

let currentLang = "en";

document.addEventListener("DOMContentLoaded", () => {
  switchToEnglish();
});

const langToggle = document.querySelector("#lang-toggle");

langToggle.addEventListener("click", () => {
  if (currentLang === "es") {
    switchToEnglish();
    currentLang = "en";
    langToggle.textContent = "ES";
  } else {
    switchToSpanish();
    currentLang = "es";
    langToggle.textContent = "EN";
  }
});

function switchToEnglish() {
    document.querySelector("#home").textContent = "Home";
    document.querySelector("#about").textContent = "About Us";
    document.querySelector("#price").textContent = "Prices";
    document.querySelector("#contact").textContent = "Contact";
    document.querySelector("#titleBanner").textContent = "Improve your programming skills";
    document.querySelector("#txtBanner").textContent = "We have top tutors to help you enhance your knowledge.";
    document.querySelector(".btnBanner").textContent = "ENROLL";
    document.querySelector("#INSCRIBIRME").textContent = "ENROLL";

    // Membership Section
    document.querySelector(".membership-banner-price h3").textContent = "Memberships";
    document.querySelector(".membership-banner-price p").textContent = "For Tutors";
    document.querySelectorAll(".boxP h3")[0].textContent = "Basic Plan";
    document.querySelectorAll(".boxP h3")[1].textContent = "Standard Plan";
    document.querySelectorAll(".boxP h3")[2].textContent = "Premium Plan";
    document.querySelectorAll(".details")[0].textContent = "See details";
    document.querySelectorAll(".details")[1].textContent = "See details";
    document.querySelectorAll(".details")[2].textContent = "See details";

    // About Section
    document.querySelectorAll(".about-box p")[0].textContent = "A platform that enables students to find qualified tutors who can assist them in their specific courses, organized by term and specialty. TutorMatch facilitates the connection between students, optimizing the learning process and helping improve academic performance in key subjects.";
    document.querySelectorAll(".about-box h2")[0].innerHTML = '<span style="color:white">Students with </span><span style="color: black;">academic difficulties</span>';
  
    document.querySelectorAll(".about-box p")[1].textContent = "This segment covers Software Engineering students at UPC facing challenges in specific courses, seeking additional support to improve their understanding and academic performance. These students may need reinforcement in technical concepts, project guidance, or exam preparation. TutorMatch offers them an accessible platform where they can find specialized tutors by cycle and subject, helping them improve their performance effectively.";
    document.querySelectorAll(".about-box h2")[1].innerHTML = '<span style="color:white">Students with </span><span style="color: black;">outstanding skills</span>';
  
    document.querySelectorAll(".about-box p")[2].textContent = "These are students with solid mastery in certain areas of Software Engineering who wish to share their knowledge with other students through tutoring. TutorMatch offers them the opportunity to gain teaching experience, improve their resumes, and, in some cases, earn income. This benefits them by refining their communication, teaching, and leadership skills from a personal and professional growth perspective.";

    // Memberships Section
    document.querySelector(".membership-back h2").textContent = "Tutor Memberships";
    document.querySelectorAll(".boxM.basic h3")[0].textContent = "Basic Plan";
    document.querySelectorAll(".boxM.basic li")[0].textContent = "Access to interested students.";
    document.querySelectorAll(".boxM.basic li")[1].textContent = "Tutoring history.";
    document.querySelectorAll(".boxM.basic li")[2].innerHTML = "Support with a response in<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;48 hours.";
    document.querySelectorAll(".boxM.standard h3")[0].textContent = "Standard Plan";
    document.querySelectorAll(".boxM.standard li")[0].textContent = "Everything in the basic plan.";
    document.querySelectorAll(".boxM.standard li")[1].innerHTML = "Personalized recommendations<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for students.";
    document.querySelectorAll(".boxM.standard li")[2].textContent = "Improved visibility in searches.";
    document.querySelectorAll(".boxM.standard li")[3].innerHTML = "Support with a response in<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;24 hours.";
    document.querySelectorAll(".boxM.standard li")[4].textContent = "Access to tutoring management tools such as:";
    document.querySelectorAll(".boxM.standard li")[5].textContent = "Advanced calendars";
    document.querySelectorAll(".boxM.standard li")[6].innerHTML = "Automatic<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reminders.";
    document.querySelectorAll(".boxM.premium h3")[0].textContent = "Premium Plan";
    document.querySelectorAll(".boxM.premium li")[0].textContent = "Everything in the standard plan.";
    document.querySelectorAll(".boxM.premium li")[1].innerHTML = "Featured profile with higher<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;exposure on the platform.";
    document.querySelectorAll(".boxM.premium li")[2].innerHTML = "Access to advanced statistics<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;on tutoring performance.";
    document.querySelectorAll(".boxM.premium li")[3].innerHTML = "Promotions and discounts<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;on platform ads.";
    document.querySelectorAll(".boxM.premium li")[4].innerHTML = "Priority support with a<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12-hour response.";
    document.querySelectorAll(".boxM.premium li")[5].innerHTML = "Access to exclusive events<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and professional development opportunities.";

    // Contact Section
    document.querySelector(".titulo").textContent = "Contact Us";
    document.querySelector(".parrafo").textContent = "Get in touch with us using the contact form below. We look forward to hearing from you and helping with your needs.";
    document.querySelector("#name").setAttribute("placeholder", "Enter Name");
    document.querySelector("#email").setAttribute("placeholder", "Enter Email");
    document.querySelector("#message").setAttribute("placeholder", "Enter Message");
    document.querySelector("button[type='submit']").textContent = "Submit";

    // Footer Section
    document.querySelector("small").innerHTML = "<br><br>Copyright &copy; 2024 - TutorMatch - SkillSwap Inc.";
}

function switchToSpanish() {
    document.querySelector("#home").textContent = "Inicio";
    document.querySelector("#about").textContent = "Acerca de nosotros";
    document.querySelector("#price").textContent = "Precios";
    document.querySelector("#contact").textContent = "Contacto";
    document.querySelector("#titleBanner").textContent = "Mejora tus habilidades en programación";
    document.querySelector("#txtBanner").textContent = "Contamos con destacados tutores que te enseñarán todo lo que necesitas para potenciar tus conocimientos.";
    document.querySelector(".btnBanner").textContent = "INSCRIBIRME";
    document.querySelector("#INSCRIBIRME").textContent = "INSCRIBIRME";

    // Sección Membresías
    document.querySelector(".membership-banner-price h3").textContent = "Membresías";
    document.querySelector(".membership-banner-price p").textContent = "Para Tutores";
    document.querySelectorAll(".boxP h3")[0].textContent = "Plan Básico";
    document.querySelectorAll(".boxP h3")[1].textContent = "Plan Estándar";
    document.querySelectorAll(".boxP h3")[2].textContent = "Plan Premium";
    document.querySelectorAll(".details")[0].textContent = "Ver detalles";
    document.querySelectorAll(".details")[1].textContent = "Ver detalles";
    document.querySelectorAll(".details")[2].textContent = "Ver detalles";

    // Sección Acerca de Nosotros
    document.querySelectorAll(".about-box p")[0].textContent = "Una plataforma que permite a los estudiantes encontrar tutores capacitados que puedan ayudarlos en cursos específicos de su carrera. TutorMatch facilita la conexión entre estudiantes, optimizando el aprendizaje y ayudando a mejorar el rendimiento académico.";
    document.querySelectorAll(".about-box h2")[0].innerHTML = '<span style="color:white">Estudiantes con </span><span style="color: black;">dificultades académicas</span>';
  
    document.querySelectorAll(".about-box p")[1].textContent = "Este segmento incluye a estudiantes de Ingeniería de Software que enfrentan retos académicos en cursos específicos y buscan apoyo adicional. TutorMatch les ofrece una plataforma donde pueden encontrar tutores especializados para mejorar su rendimiento.";
    document.querySelectorAll(".about-box h2")[1].innerHTML = '<span style="color:white">Estudiantes con </span><span style="color: black;">habilidades destacadas</span>';
  
    document.querySelectorAll(".about-box p")[2].textContent = "Son estudiantes con un gran dominio en áreas específicas de Ingeniería de Software que desean compartir sus conocimientos a través de tutorías. TutorMatch les permite obtener experiencia docente y mejorar su perfil profesional.";

    // Sección Membresías de Tutor
    document.querySelector(".membership-back h2").textContent = "Membresías de Tutor";
    document.querySelectorAll(".boxM.basic h3")[0].textContent = "Plan Básico";
    document.querySelectorAll(".boxM.basic li")[0].textContent = "Acceso a estudiantes interesados.";
    document.querySelectorAll(".boxM.basic li")[1].textContent = "Historial de tutorías.";
    document.querySelectorAll(".boxM.basic li")[2].innerHTML = "Soporte con respuesta en<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;48 horas.";
    document.querySelectorAll(".boxM.standard h3")[0].textContent = "Plan Estándar";
    document.querySelectorAll(".boxM.standard li")[0].textContent = "Todo en el plan básico.";
    document.querySelectorAll(".boxM.standard li")[1].innerHTML = "Recomendaciones personalizadas<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;para estudiantes.";
    document.querySelectorAll(".boxM.standard li")[2].textContent = "Mayor visibilidad en búsquedas.";
    document.querySelectorAll(".boxM.standard li")[3].innerHTML = "Soporte con respuesta en<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;24 horas.";
    document.querySelectorAll(".boxM.standard li")[4].textContent = "Acceso a herramientas de gestión de tutorías, como:";
    document.querySelectorAll(".boxM.standard li")[5].textContent = "Calendarios avanzados";
    document.querySelectorAll(".boxM.standard li")[6].innerHTML = "Recordatorios<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;automáticos.";
    document.querySelectorAll(".boxM.premium h3")[0].textContent = "Plan Premium";
    document.querySelectorAll(".boxM.premium li")[0].textContent = "Todo en el plan estándar.";
    document.querySelectorAll(".boxM.premium li")[1].innerHTML = "Perfil destacado con mayor<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;exposición en la plataforma.";
    document.querySelectorAll(".boxM.premium li")[2].innerHTML = "Acceso a estadísticas avanzadas<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sobre el rendimiento en tutorías.";
    document.querySelectorAll(".boxM.premium li")[3].innerHTML = "Promociones y descuentos<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;en anuncios de la plataforma.";
    document.querySelectorAll(".boxM.premium li")[4].innerHTML = "Soporte prioritario con<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;respuesta en 12 horas.";
    document.querySelectorAll(".boxM.premium li")[5].innerHTML = "Acceso a eventos exclusivos<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y oportunidades de desarrollo profesional.";

    // Sección Contacto
    document.querySelector(".titulo").textContent = "Contáctanos";
    document.querySelector(".parrafo").textContent = "Ponte en contacto con nosotros usando el formulario a continuación. Esperamos poder ayudarte con lo que necesites.";
    document.querySelector("#name").setAttribute("placeholder", "Ingrese su nombre");
    document.querySelector("#email").setAttribute("placeholder", "Ingrese su correo");
    document.querySelector("#message").setAttribute("placeholder", "Ingrese su mensaje");
    document.querySelector("button[type='submit']").textContent = "Enviar";

    // Sección Footer
    document.querySelector("small").innerHTML = "<br><br>Copyright &copy; 2024 - TutorMatch - SkillSwap Inc.";
}
