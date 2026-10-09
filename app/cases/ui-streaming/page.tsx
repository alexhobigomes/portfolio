import type { Metadata } from "next";
import UIStreamingContent from "./PageContent";

export const metadata: Metadata = {
  title: "Building Interfaces for Streaming Product — Alex Hobi",
  description:
    "Prototyping a new layout for SBT Vídeos streaming platform across Web, Tablet, and Mobile.",
  openGraph: {
    title: "Building Interfaces for Streaming Product — Alex Hobi",
    description:
      "Prototyping a new layout for SBT Vídeos streaming platform across Web, Tablet, and Mobile.",
  },
};

export default function UIStreamingCase() {
  return <UIStreamingContent />;
}
