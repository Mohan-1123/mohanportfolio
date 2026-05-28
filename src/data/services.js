import { FiCode, FiServer, FiLayout, FiCpu } from 'react-icons/fi'

export const services = [
  {
    icon: FiCode,
    title: 'Full Stack Web App',
    description: 'End-to-end React + Node.js + MongoDB applications built from scratch — authentication, RBAC, APIs, and deployment included.',
    highlights: ['React / Next.js Frontend', 'Node.js / Express.js Backend', 'MongoDB Database Design', 'AWS EC2 Deployment'],
    accentColor: '#00D4FF',
  },
  {
    icon: FiServer,
    title: 'API Development',
    description: 'Robust REST APIs with authentication, role-based access control, performance optimization, and third-party integrations.',
    highlights: ['REST API Design', 'JWT Authentication', 'MongoDB Query Optimization', 'Webhook Integration'],
    accentColor: '#7B2FBE',
  },
  {
    icon: FiLayout,
    title: 'Frontend Development',
    description: 'Pixel-perfect, responsive React/Next.js UIs with smooth animations, accessibility (WCAG), and reusable component libraries.',
    highlights: ['React.js / Next.js', 'TypeScript', 'Responsive & Accessible', 'Component Libraries'],
    accentColor: '#64FFDA',
  },
  {
    icon: FiCpu,
    title: 'AI Feature Integration',
    description: 'Integrate AI capabilities into your existing app — image recognition, content generation, and intelligent automation.',
    highlights: ['Azure Cognitive Services', 'Gemini API Integration', 'AI Content Generation', 'Intelligent Workflows'],
    accentColor: '#FF6B6B',
  },
]
