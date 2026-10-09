import type { Metadata } from "next";
import UsabilityTestingContent from "./PageContent";

export const metadata: Metadata = {
  title: "Validating Hypothesis for Mobility App — Alex Hobi",
  description:
    "Usability testing and user journey validation with 88+ real users for a major Brazilian mobility company.",
  openGraph: {
    title: "Validating Hypothesis for Mobility App — Alex Hobi",
    description:
      "Usability testing and user journey validation with 88+ real users for a major Brazilian mobility company.",
  },
};

export default function UsabilityTestingCase() {
  return <UsabilityTestingContent />;
}
