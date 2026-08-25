import transparentLogo from '../../assets/transparent_logo.png';

export const Logo = ({ variant = 'dark', className = '', showText = true }) => {
  const isLight = variant === 'light';

  return (
    <a
      href="#home"
      className={`group flex items-center gap-2.5 sm:gap-3 select-none transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#0F4C5C] rounded-xl p-1 ${className}`}
      aria-label="GD Care Nurse And Aya Centre Home"
    >
      {/* Official GD Care Transparent Logo Asset */}
      <div className="relative flex items-center justify-center shrink-0">
        <img
          src={transparentLogo}
          alt="GD Care Official Logo"
          className="h-10 sm:h-12 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
          loading="eager"
        />
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col text-left leading-tight">
          <span
            className={`font-extrabold text-base sm:text-lg tracking-tight font-sans transition-colors duration-200 ${
              isLight ? 'text-white' : 'text-[#0F4C5C]'
            }`}
          >
            GD Care
          </span>
          <span
            className={`text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase font-sans ${
              isLight ? 'text-teal-200/90' : 'text-[#4F6D74]'
            }`}
          >
            Nurse & Aya Centre
          </span>
        </div>
      )}
    </a>
  );
};

export default Logo;
