import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <div className="flex justify-center items-center mt-10 md:mt-20">
      <p>
        Made with ❤️ by{' '}
        <Link
          href="https://github.com/HarrisonRogers"
          className="underline underline-offset-2 hover:no-underline"
        >
          Hazzaboy135
        </Link>
      </p>
    </div>
  );
}

export default Footer;
