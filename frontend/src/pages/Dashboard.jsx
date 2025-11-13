import WelcomeBanner from '../components/dashboard/WelcomeBanner';
import AnalysisCard from '../components/dashboard/AnalysisCard';
import ProgressCard from '../components/dashboard/ProgressCard';
import RecommendationCard from '../components/dashboard/RecommendationCard';
import FeedbackCard from '../components/dashboard/FeedbackCard';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <WelcomeBanner />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Left Column */}
        <div className="space-y-6">
          <AnalysisCard />
          <RecommendationCard />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <ProgressCard />
          <FeedbackCard />
        </div>
      </div>
    </div>
  );
}