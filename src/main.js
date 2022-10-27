import "./style.css";
import { animate, stagger, inView, scroll, timeline } from "motion";

inView(".staggeranimation li", () => {
  animate(
    ".staggeranimation li",
    { opacity: [0, 1] },
    {
      delay: stagger(0.5, { start: 0.2 }),
    }
  );
});

animate(".underlineanimation", { scaleX: [0, 1] }, { duration: 1 });
