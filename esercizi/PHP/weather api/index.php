<?php
 require 'getWeather.php';
?>

<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>WEATHER API</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
<h1>What's The Weather?</h1>


<form action="index.php">
<div class ="form-group">
    <label for="city">Enter the name of the city</label>
    <input class ="form-control" placeholder="Eg. London" value="<?=$city?>" name="city" id="city" required>
</div>
<div class="form-group">
<button class="btn btn-primary">SUBMIT</button>

</div>
<?php
   $class = $weather? 'success': 'danger'
?>
<div class="alert alert-<?=$class?>">
    <?= $weather?$weather:$error?>
</div>
</form>
</div>
</body>
</html>
