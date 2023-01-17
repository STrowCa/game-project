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
  
    <tr>
      <td>{{ $user_data['name'] }}</td>
      <td>{{ $user_data['title'] }}</td>
      <td>{{ $user_data['coin'] }} </td>
      <td>{{ $user_data['description'] }}</td>
      <td><a href="{{Route('editProfile',[$user_data['id']])}}"><button>EDIT</button></a></td>
      
    </tr>
    
    
    
    
  
  </table>

</body>
</html>
 