const formRegistro = () => {
  Swal.fire({
    title: "Tu organización ya está registrada",
    html:
      '<img src="./img/alert-r.png" alt="logo cemefi" width="100px"><br>' +
      '<p class="font-12 op-7">En nuestro registro su organización ya esta dada de alta, por favor póngase en contacto con nosotros para enviarle la información correspondiente e ingresar al registro de su organización</p> ',
    showCloseButton: true,
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonText: "Contactar a soporte",
    confirmButtonAriaLabel: "Thumbs up, great!",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire({
        title: "Contacto realizado.",
        icon: "success",
        text: "",
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: "Aceptar",
        confirmButtonAriaLabel: "Thumbs up, great!",
      });
    }
  });
};

const cambiarFormulario = (form) => {
  const progressBar = document.getElementById("progress-registro");
  const btnNextForm1 = document.getElementById("nextForm1");
  const btnNextForm2 = document.getElementById("nextForm2");
  const parte1 = document.getElementById("parte-1");
  const parte2 = document.getElementById("parte-2");

  if (form == 2) {
    progressBar.style.width = "50%";
    btnNextForm1.style.display = "none";
    btnNextForm2.style.display = "block";
    parte1.style.display = "none";
    parte2.style.display = "block";
  } else if (form == 3) {
    const razonSocialText = document.getElementById("razonSocialText");
    const rfcText = document.getElementById("rfcText");
    const figText = document.getElementById("figText");
    const cpText = document.getElementById("cpText");
    const coloniaText = document.getElementById("coloniaText");
    const estadoText = document.getElementById("estadoText");
    const alcaldiaText = document.getElementById("alcaldiaText");
    const calleText = document.getElementById("calleText");
    const numText = document.getElementById("numText");
    const telText = document.getElementById("telText");
    const faceText = document.getElementById("faceText");
    const twitText = document.getElementById("twitText");
    const instText = document.getElementById("instText");
    const linkText = document.getElementById("linkText");

    if (razonSocialText.value == "") {
      Swal.fire({
        title: "Campo vacío.",
        icon: "warning",
        html: 'El campo <b>"Razón social"</b> no puede quedar vacío',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: "Aceptar",
        confirmButtonAriaLabel: "Thumbs up, great!",
      });
      razonSocialText.style.borderBottom = "solid #e53935";
      return false;
    }
    razonSocialText.style.borderBottom = "solid #00e676";
    if (rfcText.value == "") {
      Swal.fire({
        title: "Campo vacío.",
        icon: "warning",
        html: 'El campo <b>"RFC"</b> no puede quedar vacío',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: "Aceptar",
        confirmButtonAriaLabel: "Thumbs up, great!",
      });
      rfcText.style.borderBottom = "solid #e53935";
      return false;
    }
    rfcText.style.borderBottom = "solid #00e676";
    if (figText.value == "0") {
      Swal.fire({
        title: "Campo vacío.",
        icon: "warning",
        html: 'El campo <b>"Figura juridica"</b> no puede quedar vacío',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: "Aceptar",
        confirmButtonAriaLabel: "Thumbs up, great!",
      });
      figText.style.borderBottom = "solid #e53935";
      return false;
    }
    figText.style.borderBottom = "solid #00e676";
    if (cpText.value == "") {
      Swal.fire({
        title: "Campo vacío.",
        icon: "warning",
        html: 'El campo <b>"Código postal"</b> no puede quedar vacío',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: "Aceptar",
        confirmButtonAriaLabel: "Thumbs up, great!",
      });
      cpText.style.borderBottom = "solid #e53935";
      return false;
    }
    cpText.style.borderBottom = "solid #00e676";
    if (coloniaText.value == "0") {
      Swal.fire({
        title: "Campo vacío.",
        icon: "warning",
        html: 'El campo <b>"Colonia"</b> no puede quedar vacío',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: "Aceptar",
        confirmButtonAriaLabel: "Thumbs up, great!",
      });
      coloniaText.style.borderBottom = "solid #e53935";
      return false;
    }
    coloniaText.style.borderBottom = "solid #00e676";
    if (estadoText.value == "0") {
      Swal.fire({
        title: "Campo vacío.",
        icon: "warning",
        html: 'El campo <b>"Estado"</b> no puede quedar vacío',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: "Aceptar",
        confirmButtonAriaLabel: "Thumbs up, great!",
      });
      estadoText.style.borderBottom = "solid #e53935";
      return false;
    }
    estadoText.style.borderBottom = "solid #00e676";
    if (alcaldiaText.value == "0") {
      Swal.fire({
        title: "Campo vacío.",
        icon: "warning",
        html: 'El campo <b>"Alcadía o municipio"</b> no puede quedar vacío',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: "Aceptar",
        confirmButtonAriaLabel: "Thumbs up, great!",
      });
      alcaldiaText.style.borderBottom = "solid #e53935";
      return false;
    }
    alcaldiaText.style.borderBottom = "solid #00e676";
    if (calleText.value == "") {
      Swal.fire({
        title: "Campo vacío.",
        icon: "warning",
        html: 'El campo <b>"Calle"</b> no puede quedar vacío',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: "Aceptar",
        confirmButtonAriaLabel: "Thumbs up, great!",
      });
      calleText.style.borderBottom = "solid #e53935";
      return false;
    }
    calleText.style.borderBottom = "solid #00e676";
    if (numText.value == "") {
      Swal.fire({
        title: "Campo vacío.",
        icon: "warning",
        html: 'El campo <b>"Número"</b> no puede quedar vacío',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: "Aceptar",
        confirmButtonAriaLabel: "Thumbs up, great!",
      });
      numText.style.borderBottom = "solid #e53935";
      return false;
    }
    numText.style.borderBottom = "solid #00e676";
    if (telText.value == "") {
      Swal.fire({
        title: "Campo vacío.",
        icon: "warning",
        html: 'El campo <b>"Teléfono"</b> no puede quedar vacío',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: "Aceptar",
        confirmButtonAriaLabel: "Thumbs up, great!",
      });
      telText.style.borderBottom = "solid #e53935";
      return false;
    }
    telText.style.borderBottom = "solid #00e676";
    if (faceText.value == "") {
      Swal.fire({
        title: "Campo vacío.",
        icon: "warning",
        html: 'El campo <b>"Facebook"</b> no puede quedar vacío',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: "Aceptar",
        confirmButtonAriaLabel: "Thumbs up, great!",
      });
      faceText.style.borderBottom = "solid #e53935";
      return false;
    }
    faceText.style.borderBottom = "solid #00e676";
    if (twitText.value == "") {
      Swal.fire({
        title: "Campo vacío.",
        icon: "warning",
        html: 'El campo <b>"Twitter"</b> no puede quedar vacío',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: "Aceptar",
        confirmButtonAriaLabel: "Thumbs up, great!",
      });
      twitText.style.borderBottom = "solid #e53935";
      return false;
    }
    twitText.style.borderBottom = "solid #00e676";
    if (instText.value == "") {
      Swal.fire({
        title: "Campo vacío.",
        icon: "warning",
        html: 'El campo <b>"Instagram"</b> no puede quedar vacío',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: "Aceptar",
        confirmButtonAriaLabel: "Thumbs up, great!",
      });
      instText.style.borderBottom = "solid #e53935";
      return false;
    }
    instText.style.borderBottom = "solid #00e676";
    if (linkText.value == "") {
      Swal.fire({
        title: "Campo vacío.",
        icon: "warning",
        html: 'El campo <b>"Linkedin"</b> no puede quedar vacío',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: "Aceptar",
        confirmButtonAriaLabel: "Thumbs up, great!",
      });
      linkText.style.borderBottom = "solid #e53935";
      return false;
    }
    linkText.style.borderBottom = "solid #00e676";
    progressBar.style.width = "100%";
    Swal.fire({
      title: "Registro realizado correctamente.",
      icon: "success",
      html: "",
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: "Aceptar",
      confirmButtonAriaLabel: "Thumbs up, great!",
    });
    // Aquí es donde se haría el submit con js al formulario con su id
  }
};
