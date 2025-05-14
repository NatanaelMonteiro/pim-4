(function () {
    emailjs.init({
        publicKey: "CXT3uFhe477qaQ06C",
    });
})();

window.onload = function () {
    const frmEmail = document.getElementById('contact-form')

    if (isNotNull(frmEmail)) {
        frmEmail.addEventListener('submit', function (event) {
            event.preventDefault();


            emailjs.sendForm('service_pim4', 'template_pim4', '#contact-form').then(
                (response) => {
                    frmEmail.reset();
                    showToast("Obrigado! Retornaremos seu contato logo que for possível.");
                    console.log('EMAIL SUCCESS!');
                },
                (error) => {
                    const msg = "Desculpe, não foi possível enviar sua mensagem. Tente novamente mais tarde.";
                    showToast(msg, true);
                    console.log('EMAIL SENDER FAILED: ', error);
                },
            );
        });
    }
}

function isNotNull(obj) {
    return obj && obj !== 'null' && obj !== 'undefined';
}

function showToast(msg, err = false) {
    if (msg != null) {
        const toast = document.getElementById('toast');
        const len = msg.length;

        if (err) {
            toast.classList.add('err');
        } else {
            toast.classList.add('ok');
        }

        toast.innerHTML = msg;
        toast.classList.add('show');
        setTimeout(function () { toast.classList.remove('show', 'ok', 'err') }, len * 150);
    }
}