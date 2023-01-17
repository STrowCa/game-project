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
  <h1>Profile</h1>

  <table>
    <tr>
      <td rowspan="2"><img class="avatar" src="../img/avatar.png" alt=""></td>
      <td colspan="2">Coins: {{ $user_data['coin'] }}<img class="coin" src="../img/coin.png" alt=""></td>
      <td rowspan="4" colspan="1"><a href="{{Route('editProfile',[$user_data['id']])}}"><button>EDIT</button></a></td>
    </tr>

    <tr>
      <td colspan="2" rowspan="3">{{ $user_data['description'] }}</td>
    </tr>

    <tr>
      <td>{{ $user_data['name'] }}</td>
    </tr>

    <tr>
      <td>{{ $user_data['title'] }}</td>
      
    </tr>
  </table>

</body>
</html>
 