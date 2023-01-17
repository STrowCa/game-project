<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('css/test.css') }}">
    <link rel="stylesheet" href="{{ asset('css/common-v1.css') }}">    
    <title>Document</title>
</head>
<body>
    <div>
        <canvas id="canvas">
        
        </canvas>
    </div>
    
    
        <a href="{{Route('Profile',['id'=>$id])}}"><button>Profile</button></a>
</body>
<!--<script type="module" src="{{ asset('js/script.js') }}"></script>-->
</html>