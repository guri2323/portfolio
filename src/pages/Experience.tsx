import ExperienceTimeline from '../components/ExperienceTimeline';
import ExperienceChart from '../components/ExperienceChart';
import { experienceDistribution } from '../data/experience';

const Experience = () => {
  return (
    <div className="bg-slate-950 text-slate-50">
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16 space-y-10 md:space-y-12">
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">Experience</p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Timeline of Impact.</h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            9+ years building secure, performant products across banking, fintech, and enterprise systems.
          </p>
        </div>

        {/* Distribution */}
        <div className="space-y-6">
          <ExperienceChart data={experienceDistribution} />
          <div className="text-center text-sm text-slate-300">
            How I balance full-stack leadership, backend depth, and frontend craft.
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          <p className="text-xl uppercase text-slate-400 tracking-[0.2em] text-center md:text-left">Experience Timeline</p>
          <ExperienceTimeline />
        </div>
      </section>
    </div>
  );
};

export default Experience;
