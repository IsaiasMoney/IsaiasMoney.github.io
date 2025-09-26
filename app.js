document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navbarMenu = document.querySelector(".navbar-menu");

  menuToggle.addEventListener("click", function () {
    navbarMenu.classList.toggle("active");
  });
  function toggleNavbar() {
    var x = document.getElementById("myNavbar");
    var toggleButton = document.getElementsByClassName(".navbar-menu");

    if (x.className === "navbar") {
      x.className += " responsive";
      toggleButton.innerHTML = "&#10006; Close"; // Change to close icon
    } else {
      x.className = "navbar";
      toggleButton.innerHTML = "&#9776; Menu"; // Change back to menu icon
    }
  }
});

// ---- Preloader ----

const loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});

// -----------Right click disable code ---------

document.addEventListener("contextmenu", function (e) {
  // e.preventDefault();
});

// ---- Smooth loading ----

document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("loaded");
});

// Gsap Animation

window.addEventListener("load", () => {
  // Animate the navbar
  // gsap.from("nav", { duration: 1.5, y: -50, opacity: 0, ease: "power2.out" });

  // Animate the song list containers
  gsap.from(".container", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.2, // Stagger animation for multiple containers
  });

  // Animate individual song items
  gsap.from(".songItem", {
    duration: 1.5,
    x: -50,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.1, // Stagger animation for song items
    delay: 0.5,
  });

  // Animate the bottom player controls
  gsap.from(".bottom", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    delay: 1,
  });
});

gsap.to(".footer-container", {
  opacity: 1,
  y: 0,
  duration: 1.5,
  ease: "power3.out",
  delay: 0.3,
});

gsap.to(".footer-bottom", {
  opacity: 1,
  y: 0,
  duration: 1.2,
  ease: "power3.out",
  delay: 0.5,
});

// Scrolling to top

const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Chatbot DeepSeek ----

function toggleChatbot() {
  const chatbot = document.querySelector(".chatbot-container");
  chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
}

const responses = [
  {
    keywords: [
      "who is affan",
      "what affan does",
      "about affan",
      "affan asghar",
      "md affan asghar",
      "tell me about affan",
      "who are you",
    ],
    response:
      "MD Affan Asghar is a passionate Full Stack Web Developer and Computer Science Engineering student, dedicated to building beautiful, responsive, and user-friendly websites. 💻🚀",
  },
  {
    keywords: [
      "your name",
      "creator",
      "made you",
      "built you",
      "build",
      "who created you",
    ],
    response: "I'm a chatbot created by MD Affan Asghar. 😊",
  },
  {
    keywords: ["developer name", "who made you", "who is your developer"],
    response: "My developer is MD Affan Asghar. 🚀",
  },
  {
    keywords: [
      "phone number",
      "contact",
      "mobile",
      "phone",
      "how to contact",
      "reach affan",
    ],
    response: "You can contact MD Affan Asghar at 📞 9339828230.",
  },
  {
    keywords: ["email", "mail", "gmail", "email address"],
    response: "You can reach him at 📧 affanasgar8@gmail.com.",
  },
  {
    keywords: ["address", "location", "where do you live", "where is affan"],
    response: "He lives at 🏠 Kankinara, Kolkata, West Bengal.",
  },
  {
    keywords: [
      "skills",
      "expertise",
      "technologies",
      "tech stack",
      "what can affan do",
    ],
    response:
      "He is skilled in 🔥 Full-Stack Web Development, Node.js, React, Php, MySQL MongoDB, Express.js, JavaScript, HTML, CSS, and more!",
  },
  {
    keywords: [
      "projects",
      "work",
      "portfolio",
      "project",
      "what has affan built",
    ],
    response:
      "His Full Stack projects include 🎯 WanderLust Holidays-Rental-Homes, NoHate website, and a Weather App using React,etc. 🚀",
  },
  {
    keywords: [
      "wanderlust",
      "wanderlust project",
      "holiday project",
      "rental homes",
      "holiday rental",
    ],
    response:
      "WanderLust Holidays-Rental-Homes is a full-stack web application inspired by Airbnb. It allows users to explore, book, and host rental properties with secure authentication, image uploads, filtering, and responsive design. Built using Node.js, Express.js, MongoDB, and EJS for dynamic rendering. 🌍",
  },
  {
    keywords: [
      "nohate",
      "no hate",
      "hate speech",
      "nohate website",
      "hate detection project",
      "anti hate project",
    ],
    response:
      "🛡️ The NoHate website is a full-stack platform built to detect and filter hate speech in user posts. It uses machine learning for content moderation, with a modern frontend in React and backend in Node.js, Express, and MongoDB. It promotes respectful online communication. 💬🚫",
  },
  {
    keywords: ["portfolio", "website", "profile", "personal website"],
    response:
      "Check out his portfolio here: 🌐 https://portfolio-affan.netlify.app/.",
  },
  {
    keywords: [
      "college",
      "education",
      "study",
      "degree",
      "where did affan study",
    ],
    response:
      "He is currently pursuing B.Tech in Computer Science Engineering (CSE) at 🏫 Narula Institute of Technology, Kolkata, India.",
  },
  {
    keywords: ["internship", "experience", "job", "work experience"],
    response:
      "He is currently working at 🏢 Ecomservices as a Full Stack Web Developer, focusing on scalable and full stack web applications. Previously, he worked as a Web Developer Intern at 💼 Simtrak Solution Pvt Ltd. 🚀",
  },
  {
    keywords: ["final year project", "academic project", "college project"],
    response:
      "His final year project is a full-stack web development project that aims to revolutionize the industry. 🚀",
  },
  {
    keywords: ["hobbies", "interests", "passion", "what does affan like"],
    response:
      "He loves 💻 coding, designing beautiful websites, learning new tech, and contributing to open-source projects. 🚀",
  },
  {
    keywords: ["social media", "linkedin", "github", "twitter", "instagram"],
    response:
      "You can connect with him here:\n🔗 LinkedIn: https://linkedin.com/in/mdaffanasghar/\n🐱 GitHub: https://github.com/affancoder",
  },
  {
    keywords: ["career", "future plans", "goal", "aspirations"],
    response:
      "His goal is to become a highly skilled full-stack developer and work on innovative tech projects. 🚀",
  },
  {
    keywords: ["freelance", "hire", "services", "available for work"],
    response:
      "Yes! He is available for freelance projects. Contact him at 📧 affanasgar8@gmail.com.",
  },
  {
    keywords: ["hi", "hello", "hey", "hii", "greetings"],
    response: "Hello! How can I assist you today? 😊",
  },
  {
    keywords: ["bye", "goodbye", "see you", "good night"],
    response: "Goodbye! Have a great day! 😊",
  },
  {
    keywords: ["thank", "thanks", "appreciate"],
    response:
      "You're welcome! Let me know if you need anything else about Affan. 😊",
  },
];

function findBestResponse(userMessage) {
  userMessage = userMessage.toLowerCase();

  // First check for exact matches
  for (let entry of responses) {
    if (
      entry.keywords.some(
        (keyword) =>
          userMessage === keyword ||
          userMessage.includes(keyword) ||
          new RegExp(`\\b${keyword}\\b`).test(userMessage)
      )
    ) {
      return entry.response;
    }
  }

  // Then check for partial matches
  let bestMatch = null;
  let highestMatchCount = 0;

  for (let entry of responses) {
    let matchCount = entry.keywords.filter((keyword) =>
      userMessage.includes(keyword)
    ).length;

    if (matchCount > highestMatchCount) {
      highestMatchCount = matchCount;
      bestMatch = entry.response;
    }
  }

  return bestMatch || null;
}

// Enhanced API call with better fallbacks
async function callDeepSeekAPI(userMessage) {
  // Don't call API for simple greetings or common questions
  const simpleQuestions = ["hi", "hello", "hey", "bye", "thank"];
  if (simpleQuestions.some((q) => userMessage.toLowerCase().includes(q))) {
    return null;
  }

  try {
    const response = await fetch(
      "https://api.deepseek.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization:
            "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",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [
            {
              role: "system",
              content:
                "You are an assistant that answers questions specifically about MD Affan Asghar, a Full Stack Developer. Keep responses brief (1-2 sentences max) and relevant to Affan's skills, projects, education, or contact info. If the question isn't about Affan, politely decline to answer.",
            },
            {
              role: "user",
              content: userMessage,
            },
          ],
          temperature: 0.3, // Lower temperature for more focused answers
          max_tokens: 100,
        }),
        timeout: 5000, // Add timeout
      }
    );

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();

    if (!data.choices?.[0]?.message?.content) {
      throw new Error("Invalid API response structure");
    }

    return data.choices[0].message.content;
  } catch (error) {
    console.error("DeepSeek API error:", error);
    return null; // Return null to trigger local fallback
  }
}

function sendMessage() {
  const userInput = document.getElementById("userInput");
  const message = userInput.value.trim();
  if (message === "") return;

  addMessage(message, "user-message");
  userInput.value = "";

  // Show typing indicator
  const messageContainer = document.getElementById("chatbotMessages");
  const typingIndicator = document.createElement("div");
  typingIndicator.className = "bot-message typing";
  typingIndicator.textContent = "AffanBot is typing...";
  typingIndicator.id = "typingIndicator";
  messageContainer.appendChild(typingIndicator);
  messageContainer.scrollTop = messageContainer.scrollHeight;

  setTimeout(async () => {
    try {
      // Remove typing indicator
      const indicator = document.getElementById("typingIndicator");
      if (indicator) indicator.remove();

      // First try local responses
      let botResponse = findBestResponse(message);

      // If no local match found, try API
      if (!botResponse) {
        const apiResponse = await callDeepSeekAPI(message);
        botResponse =
          apiResponse ||
          "I'm designed to answer questions about MD Affan Asghar. Could you ask something specific about his skills, projects, or contact information?";
      }

      addMessage(botResponse, "bot-message");
    } catch (error) {
      console.error("Error generating response:", error);
      addMessage(
        "I'm having some trouble right now. Please try asking something specific about Affan's skills or projects.",
        "bot-message"
      );
    }
  }, 1500);
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

function addMessage(text, className) {
  const messageContainer = document.getElementById("chatbotMessages");
  const messageDiv = document.createElement("div");
  messageDiv.className = className;

  // Handle newlines in responses
  if (typeof text === "string" && text.includes("\n")) {
    text.split("\n").forEach((line, i) => {
      if (i > 0) messageDiv.appendChild(document.createElement("br"));
      messageDiv.appendChild(document.createTextNode(line));
    });
  } else {
    messageDiv.textContent = text;
  }

  messageContainer.appendChild(messageDiv);
  messageContainer.scrollTop = messageContainer.scrollHeight;
}
