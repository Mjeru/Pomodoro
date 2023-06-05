import icon from '../assets/tomato.ico'
export const indexTemplate = (content, token) => `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pomodoro</title>
    <link rel='icon' href=${icon}>
    <script src="/static/client.js" type="application/javascript"></script>
    <script>
    if (window.localStorage.getItem('token') && window.localStorage.getItem('token') === 'undefined'){
        window.localStorage.removeItem('token')
    }
    if (!window.localStorage.getItem('token') && '${token}' !== 'undefined'){
        window.localStorage.setItem('token','${token}')
    }
    </script>
</head>

<body>
    <div id="react_root">${content}</div>
    <div id="modal_root"><div>
</body>

</html>
`;
