function toggleChat() {
    const chat = document.getElementById('chatbotContainer');
    chat.style.display = chat.style.display === 'flex' ? 'none' : 'flex';
  }
  
  function handleKey(e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  }
  
  function sendMessage() {
    const input = document.getElementById('chatbotInput');
    const chatBody = document.getElementById('chatbotMessages');
    const msg = input.value.trim();
  
    if (msg === '') return;
  
    const userMsg = document.createElement('div');
    userMsg.className = 'user-msg';
    userMsg.textContent = msg;
    chatBody.appendChild(userMsg);
  
    // Simulate bot response
    setTimeout(() => {
      const botMsg = document.createElement('div');
      botMsg.className = 'bot-msg';
      botMsg.textContent = getBotResponse(msg);
      chatBody.appendChild(botMsg);
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 500);
  
    input.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;
  }
  
  function getBotResponse(input) {
    input = input.toLowerCase();

    const responses = {
      hi: "Hi! How can I help you",
      buy: "Buying? What’s your budget and preferred location?",
      rent: "Renting? I can help find listings. How many bedrooms are you looking for?",
      hello: "Hey there! How can I assist you today?",
      hi: "Hey there! How can I assist you today?",
      risk: "I can show you a risk report for any property.",
      school: "Schools nearby? Got you covered.",
      price: "Check out Elm Hollow at Richardson, its our cheapest property on sale",
      contact: "You can reach us anytime via the contact form at the bottom of the page.",
      neighborhood: "Looking into neighborhood vibes? I can share some stats and trends.",
      compare: "Want to compare properties? Just tell me which ones.",
      crime: "Need local crime stats? I got those too.",
      thank: "Of course!",
    };

    for (const keyword in responses) {
      if (input.includes(keyword)) {
        return responses[keyword];
      }
    }

    return "I'm still learning. Can you rephrase that?";
  }