<?php
    require "constants.php";

    // Install on remote outside project namespace:
    // $ cd $PROJECT_DIR/..
    // $ composer require pelago/emogrifier
    //
    // If bad PHP version:
    // $ composer config platform.php 7.4
    // $ composer install
    //
    // Copy to an accessible location:
    // $ cp -r vendor build/api/email/_vendor
    require_once dirname(__DIR__) . 'email/_vendor/autoload.php';
    use Pelago\Emogrifier\CssInliner;

    $_POST = json_decode(file_get_contents('php://input'), true);

    $date = strip_tags($_POST["date"]);
    $name = strip_tags($_POST["name"]);
    $telephone = strip_tags($_POST["telephone"]);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $nip = strip_tags($_POST["nip"]);
    $notes = nl2br(strip_tags($_POST["notes"]));
    $total = filter_var(trim($_POST["total"]), FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
    $orders = $_POST["order"];

    $topay = round(floatval($total) * 0.1, 2, PHP_ROUND_HALF_DOWN);

    $ordersHtml = "";
    foreach ($orders as $order_id => $order) {
        $ordersHtml .= "<tr>";
        $ordersHtml .= "<td>" . $order["name"] . "</td>";
        $ordersHtml .= "<td>x" . $order["count"] . "</td>";
        $ordersHtml .= "<td>" . $order["value"] . "zł</td>";
        $ordersHtml .= "</tr>";
    }

    $timestamp = time();
    $orderTime = gmdate("Y-m-d H:i", $timestamp);
    $orderId = md5($timestamp);

    $css = '
    html {
    	font-family: "Arial";
        background-color: rgba(47, 43, 116, 0.2);
    }

    body {
        font-size: 14px;
        max-width: 600px;
        padding: 50px;
        margin: auto;
        background-color: white;
        border-radius: 20px;
    }

    .big {
        font-size: 15px;
    }
    .small {
        font-size: 12px;
    }

    .img-wrapper {
        width: 100%;
        text-align: center;
        margin-bottom: 20px;
    }

    .img-wrapper img {
        width: 100%;
        max-width: 400px;
    }

    table {
        border-collapse: collapse;
        margin: auto;
    }
    td, th {
        padding: 5px;
           border: 1px solid black;
    }
    .order td:nth-child(1) {
        width: 200px;
        text-align: left;
    }
    .order td:nth-child(2) {
        width: 40px;
        text-align: center;
    }
    .order td:last-child, .pay td:last-child {
        width: 75px;
        text-align: right;
    }
    .order tbody tr:nth-child(even) {
        background-color: rgba(47, 43, 116, 0.2);
    }
    .order thead, .order tr:last-child, .pay td:nth-child(1) {
        background-color: rgb(47, 43, 116) !important;
        color: white;
    }';

    $html = '<html>
        <head>
            <title></title>
        </head>
        <body>
            <div class="img-wrapper">
                <img
                    src="https://www.modrymlyn.pl/api/email/header.jpg"
                    alt="[Modry Młyn - banner]"
                >
            </div>

            <span class="big">
                Cześć ' . $name . '!
            </span>
            <br><br>

            <span class="big">
                Dziękujemy za Twoje zamówienie w cateringu Modrego Młyna!
            </span>
            <br><br>
            
            <span class="big">
                Musisz jeszcze <b>dokonać przedpłaty</b> (10% wartości zamówienia) w formie przelewu na poniższe dane:
                <table class="pay">
                <tbody>
                    <tr>
                        <td>Nr konta</td>
                        <td>CCAAAAAAAABBBBBBBBBBBBBBBB</td>
                    </tr>
                    <tr>
                        <td>Kwota</td>
                        <td>' . $topay . ' zł</td>
                    </tr>
                </tbody>
            </table>
            </span>

            <br><hr/><br>

            <span class="big">Restauracja wkrótce skontaktuje się z Tobą w celu potwierdzenia odbioru.</span><br>
            Twój nr telefonu: <i>' . $telephone . '</i><br>
            Twój adres email: <i>' . $email . '</i><br>
            <br>
            <br>
            
            <table class="order">
                <thead>
                    <tr>
                        <th>Danie</th>
                        <th>Ilość</th>
                        <th>Kwota</th>
                    </tr>
                </thead>
                <tbody>
                    ' . $ordersHtml . '
                    <tr>
                        <td/>
                        <td/>
                        <td>' . $total . 'zł</td>
                    </tr>
                </tbody>
            </table>
            <br>

            Faktura: <i>' . (($nip == "") ? "Nie" : "Tak") . '</i><br>
            ' . (($nip == "") ? "" : "NIP: <i>" . $nip . "</i><br>") . '
            <br>

            Notatki do zamówienia: ' . (($notes == "") ? "Brak" : "") . '<br>
            '. (($notes != "") ? "<i>" . $notes . "</i>" : "") .'<br>
            

            <br><hr/><br>

            Coś się nie zgadza? Masz pytania?<br>
            Skontaktuj się z nami pod numerem (+48) <b>733 314 441</b> lub mailowo na <b>biuro@mlynmodry.pl</b><br>
            <br>

            <span class="small">
            Data zmówienia: <i>' . $orderTime . '</i><br>
            Identyfikator zmówienia: <i>' . $orderId . '</i><br>
            </span>
            <br><br>
            
            Pozdrawiamy i smacznego!
            <br><br>
            Modry Młyn<br>
            ul. Mickewicza 19A, Rumia<br>
            <br><br>

            <span class="small">Wiadomość została wygenerowana automatycznie. Prosimy <b>nie odpowiadać</b> na adres mailowy adresata</span>.
        </body>
    </html>';

    $content = CssInliner::fromHtml($html)->inlineCss($css)->render();

    // $sentMe = @mail($MY_MAIL, 'Nowe zamówienie caternigowe', $content, $HEADERS, '-f '.$HOST_MAIL);
    $sentCm = @mail($email, 'Modry Młyn: Twoje zamówienie ', $content, $HEADERS, '-f '.$HOST_MAIL);

    if ($sentMe && $sentCm) {
        http_response_code(200);
        echo json_encode([ 'msg' => 'success' ]);
    } else {
        http_response_code(500);
        echo json_encode([ 'msg' => 'error', 'sent' => [ 'me' => $sentMe, 'client' => $sentCm ] ]);
    }
?>
