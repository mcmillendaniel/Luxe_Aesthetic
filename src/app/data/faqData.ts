// Shared FAQ content used both by the FAQ page UI and by the prerender step to
// emit FAQPage JSON-LD. Keep this as the single source of truth.

export interface FAQ {
  question: string
  answer: string
}

export interface FAQCluster {
  heading: string
  faqs: FAQ[]
}

export const faqClusters: FAQCluster[] = [
  {
    heading: "If you've never had Botox",
    faqs: [
      {
        question: "I've never had Botox. Where do I even start?",
        answer:
          "The best place to start is a consultation. Dr. Daniel will walk you through what's possible, what to expect, and whether it's right for you — no pressure, no commitment. Most first-time clients leave wishing they'd come sooner.",
      },
      {
        question: "Will it look obvious? I don't want to look different.",
        answer:
          "The goal is never transformation — it's refinement. Dr. Daniel's approach is conservative by design. The results should make people think you look well-rested, not like you've had something done.",
      },
      {
        question: 'Does it hurt?',
        answer:
          'Most clients describe it as a quick pinch. We use the smallest needles available and take our time. For clients who are nervous, we can apply a topical numbing cream.',
      },
      {
        question: "What if I don't like the results?",
        answer:
          "Botox is temporary — results typically last 3 to 4 months. If something isn't quite right, we'll address it. Dr. Daniel follows up with every new client to make sure you're happy with how things settle.",
      },
    ],
  },
  {
    heading: 'About Dr. Daniel and Luxe',
    faqs: [
      {
        question: 'Who performs my treatment?',
        answer:
          "Dr. Stephanie Daniel performs every treatment personally. We don't have rotating staff or nurses performing injections. When you come to Luxe, you see Dr. Daniel.",
      },
      {
        question: 'What products do you use?',
        answer:
          "We use FDA-approved neurotoxins and fillers from the leading manufacturers. Dr. Daniel will tell you exactly what she's using and why it's right for your goals.",
      },
      {
        question: 'How is Luxe different from a chain medspa?',
        answer:
          'At a chain, you may see a different provider every visit. At Luxe, Dr. Daniel knows your face, your history, and your goals. The relationship is the difference.',
      },
    ],
  },
  {
    heading: 'Booking and preparation',
    faqs: [
      {
        question: 'How far in advance should I book?',
        answer:
          'For a standard consultation, we can usually see you within 1 to 2 weeks. Members with the Reserve plan have same-week availability guaranteed.',
      },
      {
        question: 'How do I prepare for my appointment?',
        answer:
          "Avoid blood-thinning medications (aspirin, ibuprofen) for 3 days before your appointment if possible. Arrive with clean skin, no heavy makeup. That's it — we handle the rest.",
      },
      {
        question: 'Can I have a consultation before I commit to anything?',
        answer:
          "Absolutely. That's what the consultation is for. There is no pressure to book a treatment at your first visit.",
      },
    ],
  },
  {
    heading: 'Medical weight management',
    faqs: [
      {
        question: 'Is this right for me?',
        answer:
          "The program starts with a medical consultation where Dr. Daniel reviews your health history, goals, and whether you're a good candidate. Not everyone is — and we'll be honest about that.",
      },
      {
        question: 'What does the program involve?',
        answer:
          'An initial medical consultation, a personalized protocol, regular check-ins, and ongoing monitoring. This is a relationship, not a prescription.',
      },
      {
        question: 'Is this just an Ozempic prescription?',
        answer:
          'The medication is one tool. The relationship is what makes it work.',
      },
    ],
  },
]
