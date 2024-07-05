import React from 'react';
import CV from '../../assets/my-resume.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="https://github.com/sagar-raj-yadav?tab=repositories" className="btn btn-primary">
      GitHub
</a>

    </div>
  );
};

export default CTA;
