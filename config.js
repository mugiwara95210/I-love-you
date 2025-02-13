// ============================================
// 💝 BABY I LOVE YOU 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Varsha",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? 💝❤️",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓', '🐻‍❄️', '🦛'],  // Heart emojis
        bears: ['🧸', '🐻', '❤️', '💖', '💝', '💗', '💓', '🐻‍❄️', '🦛]                       // Cute bear emojis
    }

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I don't like you, I fucking love you! ❤️"           // Secret hover message
        },
        second: {
            text: "How much do you love me?🥹🥹",                          // For the love meter
            startText: "This much!!!!!!!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine forever ? 🥺❤️🥰🌸🌹", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No😞"                                                 // Text for "No" button
        }
    }

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "my fucking god woman thats a bit much?? 😭😭😭❤️❤️❤️❤️",  // Shows when they go past 5000%
        high: "you cant get rid of me, FOREVER",              // Shows when they go past 1000%
        normal: "FOREVER 🥰"                           // Shows when they go past 100%
    }

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "I'm the luckiest person in the world, and i dont know what i would do without you my love 🐻‍❄️❤️🦛",
        message: "from the bottom of my heart, I love you❤️",
        emojis: "💖🤗💝💋❤️💕❤️😘😍😊🥰💕💙💜💗🖤🖤🖤💛💖💖💞💚❣️💓😻💘💝💌"  // These will bounce around
    }

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Background gradient start
    backgroundEnd: "#ffc3a0",        // Background gradient end
    buttonBackground: "#ff6b6b",     // Button color
    buttonHover: "#ff8787",          // Button hover color
    textColor: "#ff4757"            // Text color
    }

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dcwyc3xak/video/upload/v1739440704/Ed_Sheeran_-_Perfect_m0hv9b.mp3", // Music streaming URL
        startText: "🎵 hit the Music",        // Button text to start music
        stopText: "🔇 EWWWW stop",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }


// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
