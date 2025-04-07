<?php
// Получаем данные из формы
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

// Проверка заполнения
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo 'Please fill in all fields.';
    exit;
}

// Настройки письма
$to = 'glebraikov.film@gmail.com, ivankuftyrev@gmail.com';
$subject = 'New message from contact form';
$headers = "From: Website Contact Form <noreply@glebraikov.com>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$body = "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Message:\n$message\n";

// Отправляем письмо
$success = mail($to, $subject, $body, $headers);

// Ответ
if ($success) {
    http_response_code(200);
    echo 'Your message has been sent successfully!';
} else {
    http_response_code(500);
    echo 'Sorry, something went wrong. Please try again later.';
}
?>