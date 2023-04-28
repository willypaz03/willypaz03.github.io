window.sr = ScrollReveal ();

sr.reveal("header",{
    duration: 2000,
    origin: "bottom" ,
    distance: "-100px",
});

sr.reveal(".titulo-quienes-somos > h1",{
  duration: 2000,
  origin: "right" ,
  distance: "-100px",
});

sr.reveal(".titulo-seccion > h1",{
    duration: 1000,
    origin: "right" ,
    distance: "-100px",
});

sr.reveal("#hero >h1,h2",{
    duration: 3000,
    origin: "top",
    distance: "-200px",
} )