import type { Metadata } from "next";
import DesignEngineeringContent from "./PageContent";

export const metadata: Metadata = {
  title: "AI-Driven Design Process — Alex Hobi",
  description:
    "How AI tools compressed a full design cycle — from discovery to MVP — into 5 to 10 days.",
  openGraph: {
    title: "AI-Driven Design Process — Alex Hobi",
    description:
      "How AI tools compressed a full design cycle — from discovery to MVP — into 5 to 10 days.",
  },
};

export default function DesignEngineeringCase() {
  return <DesignEngineeringContent />;
}
