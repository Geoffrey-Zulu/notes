<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: text/plain');

// random quote from ZenQuotes API
$quoteData = json_decode(file_get_contents('https://zenquotes.io/api/random'));

if ($quoteData) {
    echo '"' . $quoteData[0]->q . '" — ' . $quoteData[0]->a;
} else {
    echo "Couldn't fetch quote.";
}
?>
