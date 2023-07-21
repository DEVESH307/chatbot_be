// document.addEventListener("DOMContentLoaded", function() {
//   var chatContainer = document.getElementById("chat-container");
//   var chatLog = document.getElementById("chat-log");
//   var userInput = document.getElementById("user-input");
//   var scrollDownBtn = document.getElementById("scroll-down");
//   var sendBtn = document.getElementById("send-btn");
//   var placeholder = "Type your message...";
//   var originalHeight = userInput.style.height;

//   function addMessage(message, isUser) {
//     var messageElement = document.createElement("div");
//     messageElement.classList.add("message");
//     messageElement.classList.add(isUser ? "user-message" : "bot-message");

//     var avatarElement = document.createElement("div");
//     avatarElement.classList.add("avatar");
//     avatarElement.classList.add(isUser ? "user-avatar" : "bot-avatar");
//     messageElement.appendChild(avatarElement);

//     var textElement = document.createElement("div");
//     textElement.classList.add("text-wrapper");
//     // textElement.innerHTML = message;
//     textElement.innerText = message;
//     messageElement.appendChild(textElement);

//     var timestampElement = document.createElement("div");
//     timestampElement.classList.add("timestamp");
//     timestampElement.classList.add(isUser ? "user-timestamp" : "bot-timestamp");
//     var timestamp = formatTimestamp(new Date()); // Format the timestamp
//     timestampElement.innerText = timestamp;
//     messageElement.appendChild(timestampElement);

//     chatLog.appendChild(messageElement);
//   }

//   function formatTimestamp(date) {
//     var options = {
//       day: "numeric",
//       month: "short",
//       hour: "numeric",
//       minute: "numeric",
//       hour12: true,
//       timeZone: "Asia/Kolkata" // Set the timezone to Indian Standard Time
//     };
//     return date.toLocaleString("en-US", options);
//   }

//   function generateBotReply() {
//     var botReplies = [
//       "Hello, how can I assist you today?",
//       "Thank you for reaching out. How may I help?",
//       "I'm here to answer your questions. What can I do for you?",
//       "Please provide more details about your inquiry.",
//       "I apologize, but I don't have the information you're looking for."
//     ];
//     var randomIndex = Math.floor(Math.random() * botReplies.length);
//     return botReplies[randomIndex];
//   }

//   function scrollToBottom() {
//     var scrollHeight = chatContainer.scrollHeight;
//     var scrollTop = chatContainer.scrollTop;
//     var heightDifference = scrollHeight - scrollTop;
//     var duration = 500; // Animation duration in milliseconds
//     var startTime = null;
  
//     function animateScroll(timestamp) {
//       if (startTime === null) {
//         startTime = timestamp;
//       }
  
//       var elapsedTime = timestamp - startTime;
//       var scrollProgress = elapsedTime / duration;
//       var distance = heightDifference * scrollProgress;
//       chatContainer.scrollTop = scrollTop + distance;
  
//       if (elapsedTime < duration) {
//         requestAnimationFrame(animateScroll);
//       } else {
//         chatContainer.scrollTop = scrollHeight;
//       }
//     }
  
//     requestAnimationFrame(animateScroll);
//   }

//   function sendMessage() {
//     var message = userInput.value.trim();
//     if (message !== "") {
//       addMessage(message, true);
//       userInput.value = "";
//       sendBtn.disabled = true;
//       userInput.style.height = originalHeight;

//       var botReply = generateBotReply();
//       addMessage(botReply, false);

//       scrollToBottom();

//       // Call your chatbot backend API or logic here
//       // Example: handleBotResponse(message);
//     } else {
//       userInput.placeholder = placeholder;
//     }
//   }

//   function adjustTextareaHeight() {
//     userInput.style.height = "auto";
//     userInput.style.height = userInput.scrollHeight + "px";

//     var maxHeight = parseInt(window.getComputedStyle(userInput).getPropertyValue("max-height"));
//     userInput.style.overflowY = userInput.scrollHeight > maxHeight ? "scroll" : "hidden";
//   }

//   function handleInputChange() {
//     sendBtn.disabled = userInput.value.trim() === "";
//     adjustTextareaHeight();
//   }

//   sendBtn.addEventListener("click", sendMessage);
//   userInput.addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//       event.preventDefault();
//       sendMessage();
//     }
//   });

//   userInput.addEventListener("input", function() {
//     handleInputChange();
//     adjustTextareaHeight();
//   });

//   scrollDownBtn.addEventListener("click", scrollToBottom);

//   userInput.placeholder = placeholder;
//   originalHeight = userInput.style.height;
// });
$(document).ready(function () {
  var chatContainer = $("#chat-container");
  var chatLog = $("#chat-log");
  var userInput = $("#user-input");
  var scrollDownBtn = $("#scroll-down");
  var sendBtn = $("#send-btn");
  var placeholder = "Type your message...";
  var originalHeight = userInput.css("height");

  function addMessage(message, isUser) {
    var messageElement = $("<div>").addClass("message").addClass(isUser ? "user-message" : "bot-message");

    var avatarElement = $("<div>").addClass("avatar").addClass(isUser ? "user-avatar" : "bot-avatar");
    messageElement.append(avatarElement);

    var textElement = $("<div>").addClass("text-wrapper").text(message);
    messageElement.append(textElement);

    var timestampElement = $("<div>").addClass("timestamp").addClass(isUser ? "user-timestamp" : "bot-timestamp");
    var timestamp = formatTimestamp(new Date()); // Format the timestamp
    timestampElement.text(timestamp);
    messageElement.append(timestampElement);

    chatLog.append(messageElement);
  }

  function formatTimestamp(date) {
    var options = {
      day: "numeric",
      month: "short",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "Asia/Kolkata" // Set the timezone to Indian Standard Time
    };
    return date.toLocaleString("en-US", options);
  }

  // function generateBotReply() {
  //   var botReplies = [
  //     "Hello, how can I assist you today?",
  //     "Thank you for reaching out. How may I help?",
  //     "I'm here to answer your questions. What can I do for you?",
  //     "Please provide more details about your inquiry.",
  //     "I apologize, but I don't have the information you're looking for."
  //   ];
  //   var randomIndex = Math.floor(Math.random() * botReplies.length);
  //   return botReplies[randomIndex];
  // }

  function scrollToBottom() {
    var scrollHeight = chatContainer.prop("scrollHeight");
    var scrollTop = chatContainer.prop("scrollTop");
    var heightDifference = scrollHeight - scrollTop;
    var duration = 500; // Animation duration in milliseconds
    var startTime = null;

    function animateScroll(timestamp) {
      if (startTime === null) {
        startTime = timestamp;
      }

      var elapsedTime = timestamp - startTime;
      var scrollProgress = elapsedTime / duration;
      var distance = heightDifference * scrollProgress;
      chatContainer.prop("scrollTop", scrollTop + distance);

      if (elapsedTime < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        chatContainer.prop("scrollTop", scrollHeight);
      }
    }

    requestAnimationFrame(animateScroll);
  }

  // function sendMessage() {
  //   var message = userInput.val().trim();
  //   if (message !== "") {
  //     addMessage(message, true);
  //     userInput.val("");
  //     sendBtn.prop("disabled", true);
  //     userInput.css("height", originalHeight);

  //     var botReply = generateBotReply();
  //     addMessage(botReply, false);

  //     scrollToBottom();

  //     // Call your chatbot backend API or logic here
  //     // Example: handleBotResponse(message);
  //   } else {
  //     userInput.prop("placeholder", placeholder);
  //   }
  // }

  function sendMessage() {
    var message = userInput.val().trim();
    if (message !== "") {
      addMessage(message, true);
      userInput.val("");
      sendBtn.prop("disabled", true);
      userInput.css("height", originalHeight);

      generateBotReply(message).done(function (response) {
        addMessage(response.message, false);
        scrollToBottom();
      }).fail(function () {
        addMessage("Error occurred. Please try again.", false);
        scrollToBottom();
      });
    } else {
      userInput.prop("placeholder", placeholder);
    }
  }

  function adjustTextareaHeight() {
    userInput.css("height", "auto");
    userInput.css("height", userInput.prop("scrollHeight") + "px");

    var maxHeight = parseInt(userInput.css("max-height"));
    userInput.css("overflow-y", userInput.prop("scrollHeight") > maxHeight ? "scroll" : "hidden");
  }

  function handleInputChange() {
    sendBtn.prop("disabled", userInput.val().trim() === "");
    adjustTextareaHeight();
  }

  sendBtn.on("click", sendMessage);
  userInput.on("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  });

  userInput.on("input", function () {
    handleInputChange();
    adjustTextareaHeight();
  });

  scrollDownBtn.on("click", scrollToBottom);

  userInput.prop("placeholder", placeholder);
  originalHeight = userInput.css("height");
});
