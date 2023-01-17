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
    <form class="form" method="POST" action="{{Route('addedSkin')}}" >
      <h1>Ajouter un produit</h1>
      @csrf
      <div class="inputs">
        <input name="name" id='name' type="text"  placeholder="nom du produit">
      </div>

      <div class="inputs">
        <input name="prix" id='prix' type="text"  placeholder="prix du produit">
      </div>

      <div class="inputs">
        <input name="description" id='description' type="text"  placeholder="description du produit">
      </div>

      <button type="submit" class="btn btn-secondary">Valider</button>
    </form>
  </body>
</html>