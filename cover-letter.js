const narratives = {
    innovation: "I don't just identify problems; I build learning experiences that engage. I use technology to make content clearer, more interactive, and more human, whether that means refining narrative flow, simplifying complex ideas, or helping teams build better materials faster. Innovation, for me, is using the simplest approach to improve learning outcomes.",
    
    technical: "My technical curiosity runs deep. I'm the person who spots plagiarized content during technical writing reviews because I understand the underlying patterns. I dive into requirements to deliver solutions that are technically sound and thoughtfully architected.",
    
    collaboration: "I've been called a 'natural hub' for cross-team coordination. I build connections and help teammates clarify goals, always in service of improving learner engagement. My best work happens at the intersections—connecting disparate information, building consensus in design sessions, and translating between technical and non-technical stakeholders.",
    
    impact: "Results matter. In recent curriculum development projects, I implemented generative AI that helped deliver 19 courses in weeks, cutting typical timelines by over 70% while maintaining quality. I built a digital course content inspector that flags grammar and inclusive language issues, surfaces accessibility gaps, and produces reports that make publishing faster and more reliable. I focus on outcomes that create lasting value.",
    
    standard: "Throughout my career, I've been motivated by creative, engaging projects with clear goals and room for innovation. I advocate for simple, effective design over unnecessary complexity. The best solutions are often the most elegant ones."
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
            
            <p>I'm ready to deliver professional learning experience design and technical leadership in the ${positionTitle} role at ${companyName}. With over ${yearsExperience} years of experience spanning curriculum development, software engineering, and AI-powered innovation, I offer technical depth and instructional design expertise that align well with your team's needs.</p>
            
            <p>${narratives[narrativeStyle]}</p>

            <p>Throughout my career, I've consistently earned the highest performance ratings, with recognition for leadership excellence across multiple dimensions. Colleagues and managers note strengths in technical ability, curiosity, storytelling, and collaboration. I build trust through responsiveness and helpfulness, sharing knowledge generously while communicating concisely and focusing on what's pertinent.</p>
            
            ${customValue ? `<p>${customValue}</p>` : ''}
            
            <p>I welcome the opportunity to explore how my experience and passion for learner-focused training can support ${companyName}'s mission by building better learning experiences for any audience. Thank you for considering my application. I look forward to speaking with you.</p>
            
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
