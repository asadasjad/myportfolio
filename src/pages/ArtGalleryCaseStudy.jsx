import CaseStudyLayout from "../components/CaseStudyLayout";

const artGalleryCaseStudy = {
  eyebrow: "3D UI · Interaction experiment",

  title: "Exploring art through space, not another grid.",

  projectName: "3D Art Gallery",

  summary:
    "An immersive interface experiment exploring how spatial interaction can make browsing visual work feel more deliberate, playful, and memorable.",

  meta: [
    { label: "Role", value: "Design · Frontend" },
    { label: "Focus", value: "3D UI · Interaction" },
    { label: "Type", value: "Interface experiment" },
  ],

  githubUrl: null,
  liveUrl: null,

  sections: [
    {
      heading: "The starting point",
      body:
        "Most digital galleries reduce visual work to a predictable grid of thumbnails. It works, but it removes much of the sense of discovery that makes a physical gallery interesting.",
    },
    {
      heading: "The question",
      body:
        "Could browsing art feel more spatial and exploratory without making the interface frustrating to use?",
    },
    {
      heading: "The experiment",
      body:
        "I built a 3D gallery interface where artwork exists inside a navigable visual space rather than a flat catalogue. The goal was not realism for its own sake, but a stronger sense of movement, depth, and discovery.",
    },
    {
      heading: "Designing the interaction",
      list: [
        "Keep navigation understandable despite the 3D environment",
        "Use depth to create hierarchy rather than decoration",
        "Make artwork remain the visual focus",
        "Balance expressive motion with usable interaction",
      ],
    },
    {
      heading: "What I learned",
      body:
        "3D interfaces become impressive very quickly and usable much more slowly. The most important work was not adding more visual effects, but deciding where spatial interaction genuinely improved the experience and where conventional UI was still better.",
    },
  ],
};

export default function ArtGalleryCaseStudy() {
  return <CaseStudyLayout {...artGalleryCaseStudy} />;
}