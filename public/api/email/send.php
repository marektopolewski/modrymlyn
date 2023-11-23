<?php
    require "constants.php";

    $_POST = json_decode(file_get_contents('php://input'), true);

    $date = strip_tags($_POST["date"]);
    $name = strip_tags($_POST["name"]);
    $telephone = strip_tags($_POST["telephone"]);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $nip = strip_tags($_POST["nip"]);
    $notes = nl2br(strip_tags($_POST["notes"]));
    $total = filter_var(trim($_POST["total"]), FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
    $order = "[orders here]";

    $content = '<html>
        <head>
            <title></title>
            <link href="https://svc.webspellchecker.net/spellcheck31/lf/scayt3/ckscayt/css/wsc.css" rel="stylesheet" type="text/css" />
        </head>
        <body aria-readonly="false" style="font-size: 13px">
            name:  ' . $name . '<br/>
            phone: ' . $telephone . '<br/>
            email: ' . $email . '<br/>
            nip:   ' . $nip . '<br/>
            total: ' . $total . '<br/>
            notes: ' . $notes . '<br/>
            order: ' . $order . '<br/>
            <u><strong>DISCLAIMER</strong></u>: This is an automated message, <strong>do not reply</strong> at this email address.
        </body>
    </html>';

    // $sentMe = @mail($MY_MAIL, 'Nowe zamówienie caternigowe', $content, $HEADERS, '-f '.$HOST_MAIL);
    // $sentCm = @mail($email, 'Modry Młyn: Potwierdzenie zamówienia', $content, $HEADERS, '-f '.$HOST_MAIL);

    if ($sentMe && $sentCm) {
        http_response_code(200);
        echo json_encode([ 'msg' => 'success' ]);
    } else {
        http_response_code(500);
        echo json_encode([ 'msg' => 'error', 'sent' => [ 'me' => $sentMe, 'client' => $sentCm ] ]);
    }
?>
