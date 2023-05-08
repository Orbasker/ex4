<!DOCTYPE html>
<html>

<head>
  <title>Submit result</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>




  <?php
  $names = array('Alex', 'Billy', 'Dale', 'John', 'Mike', 'Sara', 'Tom', 'Zack', 'Zoe', 'Yvgeni', 'Yonit', 'Or', 'Basker', 'or basker', 'yonit rusho', 'yvgeni kogan', 'zoe kogan', 'zack kogan', 'tom kogan', 'sara kogan', 'mike kogan', 'john kogan', 'dale kogan', 'billy kogan', 'alex kogan');
  $phones = array('1234567890', '2345678901', '345678012','0524696330', '123456789', '1111111111', '222222222', '333333333', '444444444', '555555555', '666666666', '777777777', '888888888', '99999999');

  function printPhones()
  {
    global $phones;
    echo "<h1>Here is the current phones in the DB:</h1>";
    foreach ($phones as $index => $phone) {
      echo "<h3>$index: $phone <br></h3>";
    }
  }
  function printNames()
  {
    global $names;
    echo "<h1>Here is the current names in the DB</h1>";

    foreach ($names as $index => $name) {
      echo "<h3>$index: $name</h3>";
    }
  }
  function checkName($name)
  {
    global $names;
    foreach ($names as $currName) {
      if ($name == $currName) {
        return true;
      }
    }
    echo "<h4>Sorry, $name, I don't know you<br> You are not in the DB</h4><br>";
    printNames();
    return false;
  }
  function checkPhone($phone)
  {
    global $phones;
    foreach ($phones as $currPhone) {
      if ($phone == $currPhone) {
        return true;
      }
    }
    echo "<h4>Sorry, $phone, I don't know you<br> You are not in the DB</h4><br>";
    printPhones();
    return false;
  }
  ?>

  <?php
  if (isset($_GET['fullName']) && isset($_GET['phone'])) {
    $phone = $_GET['phone'];
    $name = $_GET['fullName'];

    if (checkName($name) && checkPhone($phone)) {
      echo "<h4>Hello $name! $phone is your phone number<br> We received your changes<! here they are:/h4>";
      if (isset($_GET['interests'])) {
        $selectedOptions = $_GET['interests'];
        echo "<h5>Selected options: " . implode(', ', $selectedOptions) . " <br></h5>";
      }


      $temp = $_GET['temper'];
      echo "<h5>Your favorite temperature is $temp<br></h5>";
      $animal = $_GET['animal'];
      echo "<h5>Your favorite animal is $animal<br></h5>";
      $coffee = $_GET['coffee'];
      echo "<h5>The amount of coffee per day is $coffee<br></h5>";
    }
  }

  ?>
</body>

</html>