import React from 'react';
const Service = () => {
  return (
    <section className="services" id="#service">
      <h2 className="services-title">Our Services</h2>
      <p className="services-description">
        We offer a range of services designed to promote physical well-being,
        create supportive communities, and provide comprehensive health and
        wealth protection.
      </p>
      <div className="service-group">
        <div className="service-1">
          <div className="service-contr">
            <div>
              <h3>Yoga and Workout Training</h3>
              <hr />
              <p>
                Engage Wellness coaches and certified Fitness trainers to
                conduct regular online webinars or offline seminars
              </p>
            </div>
          </div>
        </div>
        <div className="service-2">
          <div className="service-contr">
            <div>
              <h3>Holistic Wellness</h3>
              <hr />
              <p>
                Encouraging participants to adopt a holistic approach to
                physical well-being. Our goal is to instill sustainable health
                habits
              </p>
            </div>
          </div>
        </div>
        <div className="service-3">
          <div className="service-contr">
            <div>
              <h3>Community </h3>
              <hr />
              <p>
                Foster a collaborative approach to health promotion by
                integrating fitness and wellness services through a combination
                of educational initiative
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
