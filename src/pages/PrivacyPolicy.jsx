import React from "react";
import BackButton from "../Components/BackButton";

const PrivacyPolicy = () => {
  return (
    <div className="flex justify-center items-center h-full mt-32 mb-10 px-25 w-full">
      <div className="w-full bg-white p-10 rounded-2xl shadow-2xl">
          <div className='mb-10'><BackButton/> </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Privacy <span className="text-blue-600">Policy</span>
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-1">
            Who we are
          </h2>
          <p className="text-gray-600">
            Our website address is:{" "}
            <a
              href="https://unitedtechandsolutions.com"
              className="text-blue-600 hover:underline"
            >
              https://unitedtechandsolutions.com
            </a>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-1">
            Comments
          </h2>
          <p className="text-gray-600 mb-6">
            When visitors leave comments on the site we collect the data shown
            in the comments form, and also the visitor’s IP address and browser
            user agent string to help spam detection.
          </p>
          <p className="text-gray-600 mb-6">
            An anonymized hash from your email may be sent to the Gravatar
            service to check if you are using it. Their privacy policy is
            available{" "}
            <a
              href="https://automattic.com/privacy/"
              className="text-blue-600 hover:underline"
            >
              here
            </a>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-1">Media</h2>
          <p className="text-gray-600">
            If you upload images to the website, you should avoid uploading
            images with embedded location data (EXIF GPS) included. Visitors to
            the website can download and extract any location data from images
            on the website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-1">Cookies</h2>
          <p className="text-gray-600">
            If you leave a comment on our site you may opt-in to saving your
            name, email address and website in cookies. These are for your
            convenience so that you do not have to fill in your details again
            when you leave another comment. These cookies will last for one
            year.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-gray-600">
            If you visit our login page, we will set a temporary cookie to
            determine if your browser accepts cookies. This cookie contains no
            personal data and is discarded when you close your browser.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-gray-600">
            When you log in, we will also set up several cookies to save your
            login information and your screen display choices. Login cookies
            last for two days, and screen options cookies last for a year. If
            you select "Remember Me", your login will persist for two weeks. If
            you log out of your account, the login cookies will be removed.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-gray-600">
            If you edit or publish an article, an additional cookie will be
            saved in your browser. This cookie includes no personal data and
            simply indicates the post ID of the article you just edited. It
            expires after 1 day.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-1">
            Embedded content from other websites
          </h2>
          <p className="text-gray-600">
            Articles on this site may include embedded content (e.g. videos,
            images, articles, etc.). Embedded content from other websites
            behaves in the exact same way as if the visitor has visited the
            other website.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-gray-600">
            These websites may collect data about you, use cookies, embed
            additional third-party tracking, and monitor your interaction with
            that embedded content, including tracking your interaction with the
            embedded content if you have an account and are logged in to that
            website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-1">
            Who we share your data with
          </h2>
          <p className="text-gray-600">
            If you request a password reset, your IP address will be included in
            the reset email.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-1">
            How long we retain your data
          </h2>
          <p className="text-gray-600">
            If you leave a comment, the comment and its metadata are retained
            indefinitely. This is so we can recognize and approve any follow-up
            comments automatically instead of holding them in a moderation
            queue.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-gray-600">
            For users that register on our website (if any), we also store the
            personal information they provide in their user profile. All users
            can see, edit, or delete their personal information at any time
            (except they cannot change their username). Website administrators
            can also see and edit that information.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-1">
            What rights you have over your data
          </h2>
          <p className="text-gray-600">
            If you have an account on this site, or have left comments, you can
            request to receive an exported file of the personal data we hold
            about you, including any data you have provided to us. You can also
            request that we erase any personal data we hold about you. This does
            not include any data we are obliged to keep for administrative,
            legal, or security purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-1">
            Where your data is sent
          </h2>
          <p className="text-gray-600">
            Visitor comments may be checked through an automated spam detection
            service.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
