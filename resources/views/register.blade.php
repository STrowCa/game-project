<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="{{ asset('css/common-v1.css') }}">
  <title>Document</title>
</head>
<body>
  <div class="form">
    <form  method="POST" action="{{Route('AddUser')}}" >
      <h1>Register</h1>
      @csrf
      <div class="inputs">
        <label >Name</label>
        <input name="name" id='name' type="text" placeholder="Name">
      </div>

      <div class="inputs">
        <label >Email</label>
        <input name="email" id='email' type="email" placeholder="Email">
      </div>

      <div class="inputs">
        <label>Password</label>
        <input name="password" id='password' type="password" placeholder="Password">
      </div>

      <div class="connect">
        <button type="submit" >Validate</button>
      </div>
    </form>

    <div>
      <p>Already have an account ?</p>
      <a href="/"><button>Go login</button></a>
    </div>
  </div>
</body>
</html>