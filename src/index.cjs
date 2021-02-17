const addGlare = (el, overridenOptions) => {
  if (!el) {
    console.error("Glare: element not found");
    return;
  }

  let ticking = false;
  let observer;

  const options = {
    ...{
      distance: 10,
      angle: 105,
      glareColor: "gold",
    },
    ...overridenOptions,
  };

  const initialTextColor = getComputedStyle(el).color;

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        window.addEventListener("scroll", handleScroll);
        handleScroll();
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    },
    { threshold: 0.1 }
  );

  if (el) {
    observer.observe(el);
  }

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (el) {
          const rect = el.getBoundingClientRect();

          const distanceFromTop = Math.max(rect.top, 0);
          const maxDistance = window.innerHeight + rect.height;
          const percentage = Math.round(
            (1 - distanceFromTop / maxDistance) * (100 + options.distance) -
              options.distance
          );

          el.style.color = "transparent";
          el.style.background = `linear-gradient(${
            options.angle
          }deg, transparent ${percentage - options.distance}%, ${
            options.glareColor
          } ${percentage}%, transparent ${
            percentage + options.distance
          }%) ${initialTextColor} 100% repeat text`;
        }
        ticking = false;
      });

      ticking = true;
    }
  };

  window.onbeforeunload = () => {
    observer?.disconnect();

    window.removeEventListener("scroll", handleScroll);
  };
};
