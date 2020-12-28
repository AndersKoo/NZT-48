/*
Title: Animations for interactive elements #2
Source: https://tobiasahlin.com/moving-letters/#15
*/

anime
  .timeline({ loop: true })
  .add({
    targets: ".section-title ",
    scale: [14, 1],
    opacity: [0, 1],
    easing: "easeOutCirc",
    duration: 1000,
    delay: (el, i) => 800 * i,
  })
  .add({
    targets: ".section-title",
    opacity: 1,
    duration: 10000,
    easing: "easeOutExpo",
    delay: 1000,
  });

/* ---------------------------------------------- */
