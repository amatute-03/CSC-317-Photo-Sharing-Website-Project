function button() {
    document.getElementById('submit').disabled = !unSwitch || !pwSwitch || !pwcSwitch;
}


let unSwitch = false;
document.getElementById('username').addEventListener('input', function (e) {
    document.getElementById('useC').style.opacity = '1';
    document.getElementById('useD').style.color ='#ff6969';
    document.getElementById('useE').style.color ='#ff6969';
    document.getElementById('useF').style.color ='#ff6969';

    let target = e.target;
    let targetValue = target.value;
    let firstChar = false, length = false, alphanumerical = 0;

    if (targetValue.length > 0 && targetValue.charAt(0) >= 'A' && targetValue.charAt(0) <= 'Z') {
        firstChar = true;
    }
    if (targetValue.length > 2) {
        length = true;
    }

    for (let a in targetValue) {
        if (!(targetValue.charAt(a) >= 'A' && targetValue.charAt(a) <= 'Z' ||
            targetValue.charAt(a) >= 'a' && targetValue.charAt(a) <= 'z' ||
            targetValue.charAt(a) >= '0' && targetValue.charAt(a) <= '9')) {
            alphanumerical++;
        }
    }
    if (alphanumerical > 0) {
        document.getElementById('useF').style.color ='#ff6969';
    }

    if (firstChar) {
        document.getElementById('useD').style.color ='#17d017';
    }
    if (length) {
        document.getElementById('useE').style.color ='#17d017';
    }
    if (alphanumerical === 0 && targetValue.length > 0) {
        document.getElementById('useF').style.color ='#17d017';
    }

    if (firstChar && length && alphanumerical === 0 && targetValue.length > 0) {
        target.style.color = '#17d017'
        unSwitch = true
        button()
    } else {
        target.style.color = '#ff6969'
        unSwitch = false
        button()
    }
});


let pwSwitch = false;
document.getElementById("password").addEventListener('input', function (e) {

    document.getElementById('pass').style.opacity = '1';
    document.getElementById('length').style.color ='#ff6969';
    document.getElementById('cap').style.color ='#ff6969';
    document.getElementById('num').style.color ='#ff6969';
    document.getElementById('spec').style.color ='#ff6969';

    let target = e.target;
    let targetValue = target.value;

    let length = false;
    if(targetValue.length > 7) {
        length = true;
    };

    let capitals = 0, specialChars = 0, numbers = 0;
    for (let a in targetValue) {
        if (targetValue.charAt(a) >= 'A' && targetValue.charAt(a) <= 'Z') {
            capitals++;
        } else if (targetValue.charAt(a) === '/' || targetValue.charAt(a) === '*'
                || targetValue.charAt(a) === '-'|| targetValue.charAt(a) === '+'
                || targetValue.charAt(a) === '!'|| targetValue.charAt(a) === '@'
                || targetValue.charAt(a) === '#'|| targetValue.charAt(a) === '$'
                || targetValue.charAt(a) === '^'|| targetValue.charAt(a) === '&'
                || targetValue.charAt(a) === '~'|| targetValue.charAt(a) === '['
                || targetValue.charAt(a) === ']') {
            specialChars++;
        }
        else if (targetValue.charAt(a) >= '0' && targetValue.charAt(a) <= '9') {
            numbers++;
        }
    }

    if (length) {
        document.getElementById('length').style.color ='#17d017';
    }
    if (capitals > 0) {
        document.getElementById('cap').style.color ='#17d017';
    }
    if (specialChars > 0) {
        document.getElementById('spec').style.color ='#17d017';
    }
    if (numbers > 0) {
        document.getElementById('num').style.color ='#17d017';
    }

    if (capitals < 1 || specialChars < 1 || numbers < 1 || !length) {
        target.style.color = '#ff6969';
        pwSwitch = false
        button()
    } else {
        target.style.color = '#17d017';
        pwSwitch = true
        button()
    }
});


let pwcSwitch = false
document.getElementById('passwordConfirm').addEventListener('input', function (e) {
    document.getElementById('passC').style.opacity = '1';
    document.getElementById('passD').style.color ='#ff6969';

    if (document.getElementById('password').value === e.target.value && pwSwitch) {
        e.target.style.color ='#17d017';
        document.getElementById('passD').style.color ='#17d017';
        document.getElementById('passD').innerText = 'matching';
        pwcSwitch = true
        button()
    } else if (!pwSwitch) {
        e.target.style.color ='#ff6969';
        document.getElementById("passD").innerText = 'not a valid password';
        pwcSwitch = false
        button()
    } else {
        e.target.style.color ='#ff6969';
        document.getElementById("passD").innerText = 'not matching';
        pwcSwitch = false
        button()
    }
});


