<?php

$conn = mysqli_connect(
"localhost",
"root",
"",
"portfolio_db"
);

if($conn)
{
    echo "Database Connected";
}
else
{
    echo "Connection Failed";
}

?>