<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
        <div id="customId"></div>



    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>

    
    <script>
        $(document).ready(function(){
            $('#customId').html("<h1>Rishabh<span>text</span></h1>");
            $('span').text("Changed")
        })
    </script>
</body>
</html>