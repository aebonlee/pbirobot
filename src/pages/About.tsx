import { VisionSection } from '@/components/about/VisionSection';
import { ValuesSection } from '@/components/about/ValuesSection';
import { CertificationBadges } from '@/components/about/CertificationBadges';

export default function About() {
  return (
    <div className="pt-20">
      <VisionSection />
      <ValuesSection />
      <CertificationBadges />
    </div>
  );
}
