import React from 'react';
import PageTitle from './PageTitle';
import MessageMe from './Contact';

const Contact = () => (
  <section className="mb-12">
    <div className="flex flex-col md:flex-row items-center mb-8">
      <PageTitle title="contact" />
    </div>
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <p className="text-normal text-secondary-text mb-4 text-center md:text-left">
          Feel free to reach out to me. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
      </div>
      <MessageMe />
    </div>
  </section>
);

export default Contact;