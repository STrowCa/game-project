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
   
  
        <form class="form" method="POST" action="{{Route('updateProfile',[$data->id])}}" >
          <h2>Page update</h2>
            @csrf
          <div class="inputs">
            <input name="name" id='name' type="text" value= "{{$data->name}}">
          </div>
          <div class="inputs">
            <input name="prix" id='prix' type="text" value= "{{$data->description}}">
          </div>
            <button type="submit" class="btn btn-secondary">Valider</button>
        </form>
</body>
</html> 
