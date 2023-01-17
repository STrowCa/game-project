<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('css/common-v1.css') }}">
    <title>Login</title>
</head>
<body>
  <div class="form">
    <form  method="post" action="{{ Route('connect') }}">
        @csrf
        <h1>Login</h1>

        <div class="inputs">
            <label>Email</label>
            <input type="email" name="email" />
        </div>

        <div class="inputs">
            <label>Password</label>
            <input type="password" name="password" />
        </div>

        <div class="connect">
            <input type="submit" name="login" value="Login" />
            
        </div>
    </form>

    <div>
        <p>Don't have an account ?</p>
        <a href="/register"><button>Go register</button></a>
    </div>
    
  </div>
    
</body>
</html>