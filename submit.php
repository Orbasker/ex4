
<?php
  $names = array('Alex', 'Billy', 'Dale');
if (isset($_GET['fullName']) && isset($_GET['phone'])) {
  $email = $_GET['phone'];
  $name = $_GET['fullName'];
    for($i = 0; $i < count($names); $i++) {
        if ($name == $names[$i]) {
          
            echo "Hello, $name!, $email";
            exit;
        }
        else {
            $name = $_GET['fullName'];
            echo "Sorry, $name, I don't know you";
            exit;
        }
    }
    // $name = $_GET['name'];
    // $email = $_GET['email'];
    // $name = ucwords(strtolower($name)); // Convert to title case
    // $email = strtolower($email); // Convert to lowercase
    
}

?>
