const narratives = {
    innovation: "I don't just identify problems—I build solutions. Whether it's developing MCP systems for natural language icon discovery or creating Python tools that convert legacy content formats, I approach challenges with a builder's mindset. Innovation, for me, isn't about complexity; it's about finding the simplest path to meaningful impact.",
    
    technical: "My technical curiosity runs deep. I'm the person who spots plagiarized content during code reviews because I've taken the time to understand the underlying patterns. I dive into requirements not just to check boxes, but to deliver solutions that are technically sound and thoughtfully architected.",
    
    collaboration: "I've been called a 'natural hub' for cross-team coordination, and I take pride in that. Some of my best work happens at the intersections—connecting disparate information, building consensus in design sessions, and translating between technical and non-technical stakeholders.",
    
    impact: "Results matter. When I led the generative AI developer project, we delivered 19 courses in weeks—a 70%+ reduction in typical timelines while maintaining quality standards. When I built the Rise Course Report tool, it became an invaluable asset serving multiple teams. I focus on outcomes that create lasting value.",
    
    standard: "Throughout my career, I've been motivated by creative, engaging projects that offer clear goals and room for innovation. I advocate for simple, effective design approaches over unnecessary complexity, believing that the best solutions are often the most elegant ones."
};

document.getElementById('coverLetterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const hiringManager = document.getElementById('hiringManager').value || 'Hiring Manager';
    const companyName = document.getElementById('companyName').value;
    const positionTitle = document.getElementById('positionTitle').value;
    const yearsExperience = document.getElementById('yearsExperience').value;
    const customValue = document.getElementById('customValue').value;
    const narrativeStyle = document.getElementById('narrativeStyle').value;
    
    const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    
    const letter = `
        <div style="font-family: 'Times New Roman', serif; line-height: 1.8;">
            <p><strong>WARREN GILL</strong><br>
            Senior Curriculum Developer | Technical Leader | AI Innovation Specialist<br>
            [Contact Information]</p>
            
            <p>${today}</p>
            
            <p>${hiringManager}<br>
            ${companyName}<br>
            [Address]</p>
            
            <p>Dear ${hiringManager},</p>
            
            <p>I am writing to express my interest in the ${positionTitle} role at ${companyName}. With over ${yearsExperience} years of experience combining curriculum development, software engineering, and AI-powered innovation, I bring a unique blend of technical depth and instructional design expertise that aligns well with your team's needs.</p>
            
            <p>${narratives[narrativeStyle]}</p>
            
            <p>My track record speaks to this approach. I've consistently achieved the highest performance ratings, with recognition for leadership excellence across multiple dimensions. Colleagues and managers have noted my exceptional strengths in technical abilities, curiosity, storytelling, and collaboration. I build trust through responsiveness and helpfulness, sharing knowledge generously while communicating concisely—getting straight to the point and focusing only on what's pertinent.</p>
            
            ${customValue ? `<p>${customValue}</p>` : ''}
            
            <p>I would welcome the opportunity to discuss how my experience in curriculum development, technical automation, and AI integration can contribute to ${companyName}'s goals. Thank you for considering my application. I look forward to speaking with you.</p>
            
            <p>Sincerely,<br>
            Warren Gill</p>
        </div>
    `;
    
    document.getElementById('letterPreview').innerHTML = letter;
    document.getElementById('copyBtn').style.display = 'block';
});

document.getElementById('copyBtn').addEventListener('click', function() {
    const letterText = document.getElementById('letterPreview').innerText;
    navigator.clipboard.writeText(letterText).then(() => {
        const btn = document.getElementById('copyBtn');
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    });
});
