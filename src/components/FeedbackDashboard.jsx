import CaseStudyLayout from "../components/CaseStudyLayout";

export default function FeedbackDashboardCaseStudy() {
  return (
    <CaseStudyLayout
      title="Product Feedback Intelligence Dashboard"
      summary="An internal analytics tool that transforms unstructured customer feedback into clear, actionable insights through structured analysis and calm, professional UI design."
      sections={[
        {
          heading: "Context",
          body:
            "Product teams receive large volumes of qualitative feedback from reviews, surveys, and support messages. Extracting consistent insights from this data is time-consuming and error-prone when done manually.",
        },
        {
          heading: "Problem",
          list: [
            "Feedback is unstructured and scattered",
            "Patterns are difficult to identify at scale",
            "Important signals are often missed",
          ],
        },
        {
          heading: "Solution",
          body:
            "I designed and built an internal dashboard that allows teams to paste raw feedback, automatically classify sentiment, and surface recurring complaints and feature requests in a clear, scannable format.",
        },
        {
          heading: "Design Approach",
          body:
            "The interface prioritizes clarity and restraint. Visual hierarchy, generous whitespace, and subtle depth cues are used to reduce cognitive load and make insights easy to scan.",
        },
        {
          heading: "Technical Implementation",
          list: [
            "React + Vite for fast iteration",
            "Tailwind CSS for consistent styling",
            "Recharts for lightweight data visualization",
            "Keyword-based analysis for transparency and simplicity",
          ],
        },
        {
          heading: "Tradeoffs & Limitations",
          list: [
            "Keyword analysis lacks nuanced language understanding",
            "Sentiment is calculated at a high level",
            "Language-specific phrasing affects accuracy",
          ],
        },
        {
          heading: "What I’d Improve Next",
          list: [
            "Sentence-level sentiment analysis",
            "Trend analysis over time",
            "Confidence scoring for sentiment results",
          ],
        },
      ]}
    />
  );
}
