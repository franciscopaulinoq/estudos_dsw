document.addEventListener('DOMContentLoaded', () => {

    const cpf = document.getElementById('cpf')
    const telefone = document.getElementById('telefone')
    const formulario = document.getElementById('formulario')

    cpf.addEventListener('input', () => {
        let valor = cpf.value.replace(/\D/g, '')
        let maskCPF = document.getElementById('cpf')

        if (valor.length > 3 && valor.length < 7) {
            maskCPF.value = (valor.slice(0, 3) + '.' + valor.slice(3, valor.length))
        } else if (valor.length >= 7 && valor.length < 10) {
            maskCPF.value = (valor.slice(0, 3) + '.' + valor.slice(3, 6) + '.' + valor.slice(6, valor.length))
        } else if (valor.length >= 9) {
            maskCPF.value = (valor.slice(0, 3) + '.' + valor.slice(3, 6) + '.' + valor.slice(6, 9) + '-' + valor.slice(9, valor.length))
        } else {
            maskCPF.value = cpf.value.replace(/\D/g, '')
        }

    })

    telefone.addEventListener('input', () => {
        let valor = telefone.value.replace(/\D/g, '')
        let maskTelefone = document.getElementById('telefone')

        if (valor.length == 0) {
            maskTelefone.value = telefone.value.replace(/\D/g, '')
        } else if (valor.length > 0 && valor.length < 3) {
            maskTelefone.value = ('(' + valor.slice(0, valor.length))
        } else if (valor.length >= 3 && valor.length < 8) {
            maskTelefone.value = ('(' + valor.slice(0, 2) + ')' + ' ' + valor.slice(2, valor.length))
        } else if (valor.length >= 8) {
            maskTelefone.value = ('(' + valor.slice(0, 2) + ')' + ' ' + valor.slice(2, 7) + '-' + valor.slice(7, valor.length))
        }
    })

    formulario.addEventListener('submit', (e) => {

        e.preventDefault()

        const nome = document.getElementById('nome')
        const email = document.getElementById('email')

        var emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

        if (!nome.value || !cpf.value || !email.value || !telefone.value) {
            alert("Preencha todos os campos do formulário!")
        } else if (cpf.value.length < 14) {
            alert("O CPF deve ter 11 dígitos!")
        } else if (!emailPattern.test(email.value)) {
            alert("E-mail inválido!")
        } else if (telefone.value.length < 15) {
            alert("O telefone deve ter 11 dígitos!")
        } else {
            formulario.submit()
        }

    })

})