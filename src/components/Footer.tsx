export default function Footer() {
  return (
    <footer className="bg-[#FF1493] pt-1">
      <div className="flex flex-row justify-between items-start px-16 py-10">
        {/* Related Sites */}
        <div>
          <p className="font-bold text-black text-base mb-2">Related Sites</p>
          <a
            href="https://loveofadvertising.com"
            className="text-black text-base hover:underline"
          >
            Loveofadvertising.com
          </a>
        </div>

        {/* Need Help */}
        <div>
          <p className="font-bold text-black text-base mb-2">Need Help?</p>
          <a
            href="mailto:hello@loveofadvertising.com"
            className="text-black text-base hover:underline"
          >
            Connect Us
          </a>
        </div>

        {/* Connect with us */}
        <div>
          <p className="font-bold text-black text-base mb-3">Connect with us</p>
          <div className="flex flex-row gap-3">
            {/* Facebook */}
            <a
              href="#"
              className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
              </svg>
            </a>
            {/* X (Twitter) */}
            <a
              href="#"
              className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="#"
              className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon
                  points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                  fill="black"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
