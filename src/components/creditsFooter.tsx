export default function CreditsFooter() {
  return (
    <>
      {/* CREDITS */}
      <p className="mt-6 text-sm">
        <span>Made with</span>
        <span className="relative mx-2 text-accent">
          <i className="fa-solid fa-heart z-10" />
          <i className="absolute fa-solid fa-heart left-0 top-[0.2rem] animate-ping" />
        </span>
        <span>
          by{" "}
          <a href="https://github.com/SirGhazian/" target="_blank" className="font-semibold hover:text-accent duration-300 transition-all">
            SirGhazian
          </a>
        </span>
      </p>
    </>
  );
}
