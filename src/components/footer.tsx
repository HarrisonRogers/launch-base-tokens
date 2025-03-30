import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <div className="flex justify-center items-center mt-10 mb-5 md:mt-20">
      <p>
        Made with ❤️ by{' '}
        <Link
          href="https://github.com/HarrisonRogers"
          target="_blank"
          className="underline underline-offset-2 hover:no-underline"
        >
          HarrisonRogers
        </Link>
      </p>
    </div>
  );
}

export default Footer;
