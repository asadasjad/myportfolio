import { useRef, useEffect } from "react";

const GlareHover = ({
  width, // optional — uses content size by default
  height,
  background = "#000",
  borderRadius = "12px",
  borderColor = "#333",
  borderWidth = "1px",
  glareColor = "#fff",
  glareOpacity = 0.45,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 600,
  playOnce = false,
  mouseFollow = false, // ✨ new feature
  glow = false,        // ✨ soft glow around edges
  glowColor = "#00bfff",
  glowOpacity = 0.25,
  className = "",
  style = {},
  children,
}) => {
  const overlayRef = useRef(null);
  const wrapperRef = useRef(null);

  // Convert hex → rgba
  const hex = glareColor.replace("#", "");
  const toRGBA = (hexColor, opacity) => {
    const h = hexColor.replace("#", "");
    const r = parseInt(h.length === 3 ? h[0] + h[0] : h.slice(0, 2), 16);
    const g = parseInt(h.length === 3 ? h[1] + h[1] : h.slice(2, 4), 16);
    const b = parseInt(h.length === 3 ? h[2] + h[2] : h.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  const glareRGBA = toRGBA(hex, glareOpacity);
  const glowRGBA = toRGBA(glowColor.replace("#", ""), glowOpacity);

  // Animations
  const animateIn = () => {
    const el = overlayRef.current;
    if (!el) return;
    el.style.transition = "none";
    el.style.backgroundPosition = "-100% -100%, 0 0";
    el.style.transition = `${transitionDuration}ms ease`;
    el.style.backgroundPosition = "100% 100%, 0 0";
  };

  const animateOut = () => {
    const el = overlayRef.current;
    if (!el) return;
    el.style.transition = `${transitionDuration}ms ease`;
    el.style.backgroundPosition = playOnce
      ? "-100% -100%, 0 0"
      : "-100% -100%, 0 0";
  };

  // Mouse follow glare (interactive)
  useEffect(() => {
    if (!mouseFollow || !wrapperRef.current) return;

    const wrapper = wrapperRef.current;
    const overlay = overlayRef.current;

    const handleMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      overlay.style.backgroundPosition = `${x}% ${y}%, 0 0`;
    };

    wrapper.addEventListener("mousemove", handleMove);
    wrapper.addEventListener("mouseleave", () => {
      overlay.style.backgroundPosition = "-100% -100%, 0 0";
    });

    return () => {
      wrapper.removeEventListener("mousemove", handleMove);
    };
  }, [mouseFollow]);

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    background: `linear-gradient(${glareAngle}deg,
      hsla(0,0%,0%,0) 60%,
      ${glareRGBA} 70%,
      hsla(0,0%,0%,0) 100%)`,
    backgroundSize: `${glareSize}% ${glareSize}%, 100% 100%`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-100% -100%, 0 0",
    pointerEvents: "none",
    transition: `${transitionDuration}ms ease`,
    ...(glow
      ? {
          boxShadow: `0 0 30px ${glowRGBA}`,
          borderRadius,
        }
      : {}),
  };

  return (
    <div
      ref={wrapperRef}
      className={`relative grid place-items-center overflow-hidden border cursor-pointer select-none ${className}`}
      style={{
        width,
        height,
        background,
        borderRadius,
        borderColor,
        borderWidth,
        ...style,
      }}
      onMouseEnter={!mouseFollow ? animateIn : undefined}
      onMouseLeave={!mouseFollow ? animateOut : undefined}
    >
      <div ref={overlayRef} style={overlayStyle} />
      <div className="z-10">{children}</div>
    </div>
  );
};

export default GlareHover;
