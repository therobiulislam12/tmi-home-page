// Bottom CTA — same global template as the top CTA, different heading.
// Reuses <TopCtaBanner /> so both banners share one design forever.
import TopCtaBanner from "./TopCtaBanner";

export default function BottomCtaBanner(props) {
  return <TopCtaBanner heading="Ready To Get Started?" {...props} />;
}
