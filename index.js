if (typeof document !== 'undefined') {
    let snareScript = document.createElement('script');
    snareScript.src = 'https://mpsnare.iesnare.com/snare.js';
    snareScript.async = true;
    document.body.appendChild(snareScript);

    let variables = document.createElement('script');
    variables.innerHTML = `var io_bbout_element_id = "device_fingerprint"; var io_install_stm =
    false; var io_exclude_stm = 0; var io_install_flash = false; var
    io_enable_rip = true;`;
    variables.async = true;

    document.body.appendChild(variables);

    let input = document.createElement('input');
    input.type = 'hidden';
    input.id = 'device_fingerprint';
    input.name='device_fingerprint'
    input.value=''

    document.body.appendChild(input);
}
