<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.html');
    exit;
}

function clean($value) {
    return trim(str_replace(["\r", "\n"], ' ', $value ?? ''));
}

$name = clean($_POST['name'] ?? '');
$phone = clean($_POST['phone'] ?? '');
$email = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$address = clean($_POST['address'] ?? '');
$timeline = clean($_POST['timeline'] ?? '');
$goals = trim($_POST['goals'] ?? '');

if ($name === '' || $phone === '' || $email === '' || $address === '') {
    header('Location: thank-you-error.html');
    exit;
}

$to = 'davidpolnickrealestate@gmail.com';
$subject = 'New Seller Lead - Key Change Advantage';
$body = "New seller request\n\n"
      . "Name: {$name}\n"
      . "Phone: {$phone}\n"
      . "Email: {$email}\n"
      . "Property Address: {$address}\n"
      . "Timeline: {$timeline}\n"
      . "Goals / Notes:\n{$goals}\n";

$headers = [];
$headers[] = 'From: Key Change Advantage <noreply@davidpolnick.com>';
$headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';

$sent = @mail($to, $subject, $body, implode("\r\n", $headers));

if ($sent) {
    header('Location: thank-you.html');
    exit;
}

header('Location: thank-you-error.html');
exit;
?>