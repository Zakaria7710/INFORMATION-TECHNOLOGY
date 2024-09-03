document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const phone = document.getElementById('phone').value;

    // هنا يمكنك إضافة منطق تسجيل الدخول

    document.getElementById('chat').classList.remove('hidden');
});

document.getElementById('sendMessage').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;

    const messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML += `<div>${message}</div>`;
    messageInput.value = '';
});