<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="{{ asset('css/adminPage.css') }}">
  <link rel="stylesheet" href="{{ asset('css/common-v1.css') }}">
  <title>Document</title>
</head>
<body>
  
   
    
    
      
    <h1>Admin page</h1>
    <table>
      <tr><th colspan="5">Skin table</th></tr>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Path description</th>
        <th></th>
        <th></th>
      </tr>
  @foreach ($skins as $skin)
    <tr>
      <td>{{ $skin->name }}</td>
      <td>{{ $skin->prix_ht }} Coins</td>
      <td>{{ $skin->description }}</td>
      <td><a href="{{Route('edit',[$skin->id])}}"><button>EDIT</button></a></td>
      <td><a href="{{Route('delete',[$skin->id])}}"><button>DELETE</button></a></td>
    </tr>
    <tr><td colspan="5"><a href="{{Route('add_new_prduct')}}"><button>Add a new skin</button></a></td></tr>
    
    
    
  @endforeach
  </table>

</body>
</html>
 