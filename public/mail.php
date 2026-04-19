<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    
    $name = strip_tags(trim($data["name"]));
    $email = filter_var(trim($data["email"]), FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($data["message"]));

    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["message" => "Proszę wypełnić wszystkie pola poprawnie."]);
        exit;
    }

    $recipient = "hello@webstruct.pl";
    $subject = "Nowa wiadomość od: $name (Formularz WebStruct)";
    
    $email_content = "Imię i Nazwisko: $name\n";
    $email_content .= "E-mail: $email\n\n";
    $email_content .= "Wiadomość:\n$message\n";

    $email_headers = "From: $name <$email>\r\n";
    $email_headers .= "Reply-To: $email\r\n";
    $email_headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo json_encode(["message" => "Wiadomość została wysłana."]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Wystąpił błąd podczas wysyłania wiadomości."]);
    }
} else {
    http_response_code(403);
    echo json_encode(["message" => "Zabroniony dostęp."]);
}
?>
