import type { Metadata } from "next";
import UXResearchContent from "./PageContent";

export const metadata: Metadata = {
  title: "Exploratory Analysis for Business Strategy — Alex Hobi",
  description:
    "Reducing churn through user research for a Brazilian mobility company facing high cancellation rates.",
  openGraph: {
    title: "Exploratory Analysis for Business Strategy — Alex Hobi",
    description:
      "Reducing churn through user research for a Brazilian mobility company facing high cancellation rates.",
  },
};

export default function UXResearchCase() {
  return <UXResearchContent />;
}
