import CaseStudyLayout from "../components/CaseStudyLayout";

const feedbackDashboardCaseStudy = {
  eyebrow: "Product analytics · Case study",
  title: "Turning noisy feedback into product direction.",
  projectName: "Product Feedback Intelligence Dashboard",
  summary:
    "An internal analytics tool that transforms unstructured customer feedback into clear, actionable signals — without making teams dig through hundreds of comments.",
  meta: [
    { label: "Role", value: "Product design · Frontend" },
    { label: "Focus", value: "Analysis · UX · Data UI" },
    { label: "Stack", value: "React · Tailwind · Recharts" },
  ],
  sections: [
    {
      heading: "The situation",
      body:
        "Product teams collect feedback everywhere: reviews, surveys, support messages, and internal notes. The problem is rarely a lack of feedback. It is finding the signal inside all that noise before an important pattern gets missed.",
    },
    {
      heading: "What needed fixing",
      list: [
        "Feedback arrived unstructured and scattered across sources",
        "Recurring complaints were difficult to identify at scale",
        "High-volume noise could hide smaller but important signals",
        "Teams needed answers quickly, not another dashboard to decipher",
      ],
    },
    {
      heading: "The idea",
      body:
        "I designed and built a focused internal dashboard where teams can bring in raw feedback, classify sentiment, surface recurring complaints, and spot feature requests in a format that is deliberately easy to scan.",
    },
    {
      heading: "Designing for decisions",
      body:
        "The interface avoids visual noise on purpose. Strong hierarchy separates the headline signal from supporting detail, restrained charts make patterns legible at a glance, and progressive disclosure keeps secondary information available without letting it dominate the page.",
    },
    {
      heading: "How I built it",
      list: [
        "React + Vite for a fast, component-driven frontend",
        "Tailwind CSS for a consistent visual system and rapid iteration",
        "Recharts for lightweight, readable data visualisation",
        "Transparent keyword-based analysis rather than pretending a simple prototype had perfect AI understanding",
      ],
    },
    {
      heading: "The tradeoff",
      body:
        "The analysis is intentionally simple and explainable, but that comes with limits. Keyword matching misses nuance, sentiment is high-level, and phrasing can affect accuracy. For this version, I preferred transparent behaviour over a black-box result that looked more intelligent than it really was.",
    },
    {
      heading: "Where I’d take it next",
      list: [
        "Sentence-level sentiment analysis for mixed feedback",
        "Trend views to show how complaints change over time",
        "Confidence scoring so uncertain classifications are visible",
        "Source comparison across reviews, surveys, and support channels",
      ],
    },
  ],
};

export default function FeedbackDashboardCaseStudy() {
  return <CaseStudyLayout {...feedbackDashboardCaseStudy} />;
}
