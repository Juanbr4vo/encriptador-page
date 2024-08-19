let originalContent = document.getElementById('div_textoDesencriptado').innerHTML;
let originalContentBody = document.getElementById('body').innerHTML;

function restricciones(botonClick) {
    document.getElementById(botonClick).addEventListener('click', function () {
        let input = document.getElementById('textarea').value;
        let filteredValue = input.replace(/[^a-z\s]/g, '');
        if (input !== filteredValue) {
            Swal.fire({
                title: '¡Solo son permitidas letras minúsculas sin acento!',
                icon: 'error',
                customClass: {
                    popup: 'alerta-background',
                    confirmButton: 'boton-personalizado',
                    title: 'clase-text',
                },
                confirmButtonText: 'Ok'
            });
            document.getElementById('div_textoDesencriptado').innerHTML = originalContent;
            /* document.getElementById('textarea').value = ''; */
        }
    });
}

function encriptarTexto() {
    alternarDivTextoEncriptado();
    
    valorTextArea = document.getElementById('textarea').value;
    const reglas = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    let textoEncriptado = valorTextArea.replace(/[eioua]/g, function (match) {
        return reglas[match];
    });
    return document.getElementById('textoAlterado').innerText = textoEncriptado;
}

function desencriptarTexto() {
    alternarDivTextoEncriptado();
    valorTextArea = document.getElementById('textarea').value;

    const reglasInversas = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    let textoDesencriptado = valorTextArea.replace(/enter|imes|ai|ober|ufat/g, function (match) {
        return reglasInversas[match];
    });
    
    return document.getElementById('textoAlterado').innerText = textoDesencriptado;
}

function alternarDivTextoEncriptado() {
    textoEncriptar = document.getElementById('textarea').value;
    flexStart = document.getElementsByClassName('flexStart');
    flexHidden = document.getElementsByClassName('flexHidden');

    if (textoEncriptar.trim() === "") {
        Swal.fire({
            title: '¡Ingresa un texto para encriptar o desencriptar!',
            icon: 'info',
            customClass: {
                popup: 'alerta1-background', 
                confirmButton: 'boton-personalizado',
                title: 'clase-text',
            },
            confirmButtonText: 'Aceptar'
        });
        document.getElementById('div_textoDesencriptado').innerHTML = originalContent;
        document.getElementById('textarea').value = '';
    } else {
        Array.from(flexStart).forEach(element => { element.style.display = 'none'; });
        Array.from(flexHidden).forEach(element => { element.style.display = 'flex'; });
    }
}

function copiar() {
    let textoCopiado = document.getElementById('textoAlterado').value;
    let botonCopiar = document.getElementById('botonCopiar');
    let alerta = document.getElementById('alerta-oculta');

    alerta.style.display = 'block'; //Mostrar alerta-coulta

    navigator.clipboard.writeText(textoCopiado).then(() => {

        // Mostrar alerta-oculta por 1 segundo 
        setTimeout(() => {
            alerta.style.display = 'none';
            document.getElementById('div_textoDesencriptado').innerHTML = originalContent;
            document.getElementById('textarea').value = "";

        }, 1000);
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    })
}

function blueDark() {
    document.documentElement.style.setProperty('--color-backaground', '#0F044C');
    document.documentElement.style.setProperty('--color-texto-h2', '#00F5FF');
    document.documentElement.style.setProperty('--color-texto-p', 'white');
    document.documentElement.style.setProperty('--color-backaground-transparente', 'rgb(0, 242, 253,0.1)');
    document.documentElement.style.setProperty('--color-background-boton-encriptar', '#00F5FF'); //rgb(3, 6, 55, 0.5)
    document.documentElement.style.setProperty('--color-background-boton-Desencriptar', 'transparente');
    document.getElementById('div_textoEncriptar-botonDesencriptar').style.border = '2px solid #FFFFFF';
    document.documentElement.style.setProperty('--color-text-boton-encriptar', '#0F044C');
    document.getElementById('div_textoEncriptar-botonEncriptar').style.fontWeight = '400';
    //document.getElementById('div_textoEncriptar-botonEncriptar').style.border = '2px solid #FFFFFF';
    document.documentElement.style.setProperty('--color-text-boton-Desencriptar', '#F2F2F2');
    document.getElementById('div_textoEncriptar-botonDesencriptar').style.fontWeight = '400';
    document.getElementById('textoAlterado').style.color = '#00F5FF';
    document.getElementById('botonCopiar').style.border = '2px solid #FFFFFF';
    window.pJSDom[0].pJS.particles.color.value = "#FFFFFF";
    window.pJSDom[0].pJS.fn.particlesRefresh();
    document.querySelector('.div_textoEncriptar-imagenExclamacion path').setAttribute('fill', '#FFFFFF');
    document.getElementById('mensajeIndicativo').style.color = '#FFFFFF';
    document.querySelector('.div_logoAlura path').setAttribute('fill', '#FFFFFF');
    //document.getElementById('alerta-oculta').style.background = 'rgb(0, 242, 253,0.80)';
    document.documentElement.style.setProperty('--color-backaground-alertaoculta', 'rgb(0, 242, 253,0.80)');
    document.documentElement.style.setProperty('--color-backaground-alerta', '#0F044C');
    

    // Guardar el estado en localStorage
    localStorage.setItem('theme', 'blueDark');
}
/*  */
let originalStyles = {
    root: {
        '--color-backaground': getComputedStyle(document.documentElement).getPropertyValue('--color-backaground'),
        '--color-texto-h2': getComputedStyle(document.documentElement).getPropertyValue('--color-texto-h2'),
        '--color-texto-p': getComputedStyle(document.documentElement).getPropertyValue('--color-texto-p'),
        '--color-backaground-transparente': getComputedStyle(document.documentElement).getPropertyValue('--color-backaground-transparente'),
        '--color-background-boton-encriptar': getComputedStyle(document.documentElement).getPropertyValue('--color-background-boton-encriptar'),
        '--color-background-boton-Desencriptar': getComputedStyle(document.documentElement).getPropertyValue('--color-background-boton-Desencriptar'),
        '--color-text-boton-encriptar': getComputedStyle(document.documentElement).getPropertyValue('--color-text-boton-encriptar'),
        '--color-text-boton-Desencriptar': getComputedStyle(document.documentElement).getPropertyValue('--color-text-boton-Desencriptar'),
        '--color-backaground-alertaoculta': getComputedStyle(document.documentElement).getPropertyValue('--color-backaground-alertaoculta'),
        '--color-backaground-alerta': getComputedStyle(document.documentElement).getPropertyValue('--color-backaground-alerta')
    },
    elements: {
        'div_textoEncriptar-botonDesencriptar': {
            border: getComputedStyle(document.getElementById('div_textoEncriptar-botonDesencriptar')).border
        },
        'div_textoEncriptar-botonEncriptar': {
            fontWeight: getComputedStyle(document.getElementById('div_textoEncriptar-botonEncriptar')).fontWeight
        },
        'textoAlterado': {
            color: getComputedStyle(document.getElementById('textoAlterado')).color
        },
        'botonCopiar': {
            border: getComputedStyle(document.getElementById('botonCopiar')).border
        },
        'div_textoEncriptar-imagenExclamacion': {
            fill: document.querySelector('.div_textoEncriptar-imagenExclamacion path').getAttribute('fill')
        },
        'mensajeIndicativo': {
            color: getComputedStyle(document.getElementById('mensajeIndicativo')).color
        },
        'div_logoAlura': {
            fill: document.querySelector('.div_logoAlura path').getAttribute('fill')
        },
        'particlesColor': window.pJSDom[0].pJS.particles.color.value
    }
};

/*  */
function blueLight() {
    // Restaurar los estilos originales
    document.documentElement.style.setProperty('--color-backaground', originalStyles.root['--color-backaground']);
    document.documentElement.style.setProperty('--color-texto-h2', originalStyles.root['--color-texto-h2']);
    document.documentElement.style.setProperty('--color-texto-p', originalStyles.root['--color-texto-p']);
    document.documentElement.style.setProperty('--color-backaground-transparente', originalStyles.root['--color-backaground-transparente']);
    document.documentElement.style.setProperty('--color-background-boton-encriptar', originalStyles.root['--color-background-boton-encriptar']);
    document.documentElement.style.setProperty('--color-background-boton-Desencriptar', originalStyles.root['--color-background-boton-Desencriptar']);
    document.documentElement.style.setProperty('--color-text-boton-encriptar', originalStyles.root['--color-text-boton-encriptar']);
    document.documentElement.style.setProperty('--color-text-boton-Desencriptar', originalStyles.root['--color-text-boton-Desencriptar']);
    document.documentElement.style.setProperty('--color-backaground-alertaoculta', originalStyles.root['--color-backaground-alertaoculta']);
    document.documentElement.style.setProperty('--color-backaground-alerta', originalStyles.root['--color-backaground-alerta']);

    document.getElementById('div_textoEncriptar-botonDesencriptar').style.border = originalStyles.elements['div_textoEncriptar-botonDesencriptar'].border;
    document.getElementById('div_textoEncriptar-botonEncriptar').style.fontWeight = originalStyles.elements['div_textoEncriptar-botonEncriptar'].fontWeight;
    document.getElementById('textoAlterado').style.color = originalStyles.elements['textoAlterado'].color;
    document.getElementById('botonCopiar').style.border = originalStyles.elements['botonCopiar'].border;
    document.querySelector('.div_textoEncriptar-imagenExclamacion path').setAttribute('fill', originalStyles.elements['div_textoEncriptar-imagenExclamacion'].fill);
    document.getElementById('mensajeIndicativo').style.color = originalStyles.elements['mensajeIndicativo'].color;
    document.querySelector('.div_logoAlura path').setAttribute('fill', originalStyles.elements['div_logoAlura'].fill);

    window.pJSDom[0].pJS.particles.color.value = originalStyles.elements['particlesColor'];
    window.pJSDom[0].pJS.fn.particlesRefresh();

    // Guardar el estado en localStorage
    localStorage.setItem('theme', 'blueLight');
}

//Inicializamos la funcion de restricciones
restricciones('div_textoEncriptar-botonEncriptar');
restricciones('div_textoEncriptar-botonDesencriptar');
