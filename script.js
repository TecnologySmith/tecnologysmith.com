window.tailwind = window.tailwind || {};
window.tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: '#0a0d14',
                    card: '#121722',
                    accent: '#00f2fe',
                    purple: '#7928ca',
                    pink: '#ff0080',
                    glow: '#00d2ff'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                tech: ['Orbitron', 'sans-serif']
            }
        }
    }
};

document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element) || !target.closest('#mobile-menu-btn')) {
        return;
    }

    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    mobileMenu.classList.toggle('hidden');

    if (mobileMenu.classList.contains('hidden')) {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    } else {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    }
});

function selectService(serviceName) {
    const selectElement = document.getElementById('servicio');
    for (let i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value.toLowerCase().includes(serviceName.toLowerCase())) {
            selectElement.selectedIndex = i;
            break;
        }
    }
    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
}

function sendToWhatsApp(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const celular = document.getElementById('celular').value.trim();
    const servicio = document.getElementById('servicio').value;
    const mensaje = document.getElementById('mensaje').value.trim();

    let textMessage = `Hola, vengo de la pagina TecnologySmith.com y estoy interesado en sus servicios.\n\n`;
    textMessage += `📌 *Datos de la Solicitud:*\n`;
    textMessage += `• *Nombre:* ${nombre}\n`;
    textMessage += `• *Celular/WhatsApp:* ${celular}\n`;
    textMessage += `• *Servicio Requerido:* ${servicio}\n`;

    if (mensaje !== '') {
        textMessage += `• *Detalles:* ${mensaje}\n`;
    }

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappURL = `https://wa.me/573101234567?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

function openModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

window.addEventListener('click', (event) => {
    const modals = ['termsModal', 'privacyModal', 'habeasModal'];
    modals.forEach((id) => {
        const modal = document.getElementById(id);
        if (event.target === modal) {
            closeModal(id);
        }
    });
});
