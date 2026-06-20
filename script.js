const follower = document.querySelector('.cyber-follower');

document.addEventListener('mousemove', (e) => {
    follower.style.left = e.clientX + 'px';
    follower.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, .cyber-project, button, .contact-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        follower.classList.add('hovered');
    });
    item.addEventListener('mouseleave', () => {
        follower.classList.remove('hovered');
    });
});

const binaryBg = document.querySelector('.binary-bg');

if (binaryBg) {
    const directions = ['down', 'up', 'right', 'left'];
    const totalColumns = 25;

    for (let i = 0; i < totalColumns; i++) {
        const column = document.createElement('div');
        const randomDir = directions[Math.floor(Math.random() * directions.length)];
        
        column.classList.add('binary-column', randomDir);
        
        if (randomDir === 'down' || randomDir === 'up') {
            column.style.left = `${Math.random() * 100}%`;
        } else {
            column.style.top = `${Math.random() * 100}%`;
        }

        column.style.animationDuration = `${8 + Math.random() * 12}s`;
        column.style.animationDelay = `-${Math.random() * 10}s`;
        column.style.opacity = 0.2 + Math.random() * 0.5;
        column.style.fontSize = `${12 + Math.random() * 8}px`;
        
        if (Math.random() > 0.5) {
            column.style.color = '#ff3377';
        }

        binaryBg.appendChild(column);

        setInterval(() => {
            let binaryLength = randomDir === 'down' || randomDir === 'up' ? 25 : 15;
            let binaryText = '';
            
            if (Math.random() > 0.85) {
                column.style.color = '#00f2fe';
                column.style.textShadow = '0px 0px 12px #00f2fe';
                let name = "DENETH";
                for (let j = 0; j < binaryLength; j++) {
                    binaryText += name[j % name.length];
                }
            } else {
                if (column.style.color === 'rgb(0, 242, 254)') {
                    column.style.color = Math.random() > 0.5 ? '#ff0055' : '#ff3377';
                    column.style.textShadow = '0px 0px 8px rgba(255, 0, 85, 0.6)';
                }
                for (let j = 0; j < binaryLength; j++) {
                    binaryText += Math.round(Math.random());
                }
            }
            column.innerText = binaryText;
        }, 150 + Math.random() * 100);
    }
}

const typedTextSpan = document.querySelector(".typed-text");
const textToType = "I'm Deneth Kawishka 💻";
let charIndex = 0;

function type() {
    if (charIndex < textToType.length) {
        typedTextSpan.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(type, 120);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (typedTextSpan) setTimeout(type, 1500);
});

const cards = document.querySelectorAll('.card, .profile-section, .contact-section');
const revealOnScroll = Array.from(cards);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

revealOnScroll.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all 0.8s ease-out";
    observer.observe(element);
});

document.querySelectorAll('.card, .profile-section, .contact-section').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xRotation = ((y - rect.height / 2) / rect.height) * -10;
        const yRotation = ((x - rect.width / 2) / rect.width) * 10;
        
        card.style.transform = `perspective(1000px) scale(1.02) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        card.style.transition = 'transform 0.1s ease-out';
    });

    card.style.transformStyle = 'preserve-3d';

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg)';
        card.style.transition = 'transform 0.5s ease';
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const welcomeBox = document.createElement("div");
    welcomeBox.style.position = "fixed";
    welcomeBox.style.top = "50%";
    welcomeBox.style.left = "50%";
    welcomeBox.style.transform = "translate(-50%, -50%) scale(0.7)";
    welcomeBox.style.background = "rgba(22, 27, 34, 0.4)";
    welcomeBox.style.backdropFilter = "blur(15px)";
    welcomeBox.style.webkitBackdropFilter = "blur(15px)";
    welcomeBox.style.border = "1px solid rgba(255, 255, 255, 0.1)";
    welcomeBox.style.borderRadius = "24px";
    welcomeBox.style.padding = "40px 60px";
    welcomeBox.style.color = "#ffffff";
    welcomeBox.style.textAlign = "center";
    welcomeBox.style.zIndex = "10000";
    welcomeBox.style.boxShadow = "0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 0, 85, 0.3)";
    welcomeBox.style.opacity = "0";
    welcomeBox.style.transition = "opacity 0.6s ease, transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    welcomeBox.style.fontFamily = "'Segoe UI', sans-serif";

    const style = document.createElement("style");
    style.textContent = `
        @keyframes boxFloat {
            0% { transform: translate(-50%, -50%) translateY(0px); }
            50% { transform: translate(-50%, -50%) translateY(-10px); }
            100% { transform: translate(-50%, -50%) translateY(0px); }
        }
        @keyframes handWave {
            0% { transform: scale(1) rotate(0deg); }
            15% { transform: scale(1.2) rotate(14deg); }
            30% { transform: scale(1.2) rotate(-8deg); }
            45% { transform: scale(1.2) rotate(14deg); }
            60% { transform: scale(1.2) rotate(-4deg); }
            75% { transform: scale(1.2) rotate(10deg); }
            90% { transform: scale(1) rotate(0deg); }
            100% { transform: scale(1) rotate(0deg); }
        }
    `;
    document.head.appendChild(style);

    welcomeBox.innerHTML = `
        <div style="font-size: 70px; margin-bottom: 20px; display: inline-block; animation: handWave 2s infinite ease-in-out; transform-origin: 70% 70%;">👋</div>
        <h2 style="margin: 0 0 10px 0; color: #ff0055; font-size: 2.5rem; text-shadow: 0 0 15px rgba(255, 0, 85, 0.6); letter-spacing: 2px; font-weight: 800;">WELCOME</h2>
        <p style="margin: 0; color: #c9d1d9; font-size: 1.25rem; font-weight: 500;">To Deneth Kawishka's Portfolio</p>
    `;

    document.body.appendChild(welcomeBox);

    setTimeout(() => {
        welcomeBox.style.opacity = "1";
        welcomeBox.style.transform = "translate(-50%, -50%) scale(1)";
        setTimeout(() => {
            if (welcomeBox.style.opacity === "1") {
                welcomeBox.style.animation = "boxFloat 3s infinite ease-in-out";
            }
        }, 600);
    }, 200);

    setTimeout(() => {
        welcomeBox.style.animation = "none";
        welcomeBox.style.opacity = "0";
        welcomeBox.style.transform = "translate(-50%, -50%) scale(0.8)";
        setTimeout(() => {
            welcomeBox.remove();
            style.remove();
        }, 600);
    }, 4500);
});