<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  header("Location: ../contact.html");
  exit;
}
function clean($v) { return htmlspecialchars(trim($v), ENT_QUOTES, 'UTF-8'); }
$name = clean($_POST["name"] ?? "");
$email = clean($_POST["email"] ?? "");
$phone = clean($_POST["phone"] ?? "");
$interest = clean($_POST["interest"] ?? "general");
$details = clean($_POST["details"] ?? "");
$message = clean($_POST["message"] ?? "");
$subject = clean($_POST["subject"] ?? "Website inquiry");
$to = "davidpolnickrealestate@gmail.com";
$headers = "From: Website Inquiry <no-reply@" . $_SERVER["HTTP_HOST"] . ">\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$body = "New website inquiry\n\n";
$body .= "Subject: " . $subject . "\n";
$body .= "Interest: " . $interest . "\n";
$body .= "Name: " . $name . "\n";
$body .= "Email: " . $email . "\n";
$body .= "Phone: " . $phone . "\n";
$body .= "Details: " . $details . "\n\n";
$body .= "Message:\n" . $message . "\n";
$sent = mail($to, $subject, $body, $headers);
if ($sent) {
  header("Location: ../thank-you.html");
  exit;
}
header("Location: ../contact.html?error=1");
exit;
?>