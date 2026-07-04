import CaseStudyLayout from "../components/CaseStudyLayout";

const uniWayCaseStudy = {
  eyebrow: "Campus navigation · Product case study",

  title: "Making a confusing campus feel effortless.",

  projectName: "UniWay",

  summary:
    "A mobile-first campus navigation product designed to help students find buildings, rooms, and routes without needing to already understand the campus.",

  meta: [
    { label: "Role", value: "Product · Design · Frontend" },
    { label: "Focus", value: "Navigation · UX · Maps" },
    { label: "Stack", value: "Next.js · TypeScript · Leaflet" },
  ],

  githubUrl: null,
  liveUrl: "https://frontend-nu-five-78.vercel.app/",

  sections: [
    {
      heading: "The situation",
      body:
        "New students arrive on campus with almost no mental model of how buildings, departments, floors, and rooms connect. Existing maps can show where a building is, but they rarely help with the final and most frustrating part of the journey.",
    },
    {
      heading: "What needed fixing",
      list: [
        "Students struggled to translate room codes into real locations",
        "Outdoor maps stopped being useful once someone entered a building",
        "Freshers depended on asking other students for directions",
        "The experience needed to work well on low bandwidth and mobile devices",
      ],
    },
    {
      heading: "The idea",
      body:
        "UniWay combines outdoor campus navigation with a structured indoor routing system, giving students one continuous experience from their current location to a specific building, floor, or room.",
    },
    {
      heading: "Designing for movement",
      body:
        "The interface is designed for people who are already walking, distracted, and often in a hurry. That meant prioritising large touch targets, persistent map context, minimal decisions, and a bottom-sheet interaction model that keeps important actions within easy reach.",
    },
    {
      heading: "How I approached routing",
      list: [
        "Interactive outdoor mapping with React Leaflet",
        "Structured building and room identifiers",
        "Predefined indoor paths represented as lightweight graph data",
        "Shortest-path routing using A* Djikstra algorithm",
        "Mobile-first interaction states for browse, search, preview, and navigation",
      ],
    },
    {
      heading: "The hard part",
      body:
        "The challenge is not simply drawing a route. Indoor navigation introduces floor changes, incomplete map data, room naming conventions, and transitions between outdoor and indoor contexts. The product has to hide that complexity without pretending it does not exist.",
    },
    {
      heading: "Where it’s going",
      list: [
        "Reliable room-level indoor navigation",
        "Better transitions between outdoor and indoor routes",
        "Accessible routing options",
        "Low-bandwidth caching and graceful fallbacks",
        "A scalable campus data model for additional buildings",
      ],
    },
  ],
};

export default function UniWayCaseStudy() {
  return <CaseStudyLayout {...uniWayCaseStudy} />;
}