import { CTASection } from "@/components/blocks/cta-with-rectangle";

export function CTAsection() {
  return (
    <div className="">
      <CTASection
        badge={{
          text: "Join Us",
        }}
        title="Advance Rural Development with Us"
        description="Be part of the Rural Advancement Network and contribute to sustainable growth in rural areas."
        action={{
          text: "Get Involved",
          href: "/get-involved",
          variant: "default",
        }}
      />
    </div>
  );
}
