export function scrollToAbout(): void {
  const aboutSection = document.getElementById("About");

  // Skrollar till About-avsnittet
  if (aboutSection) {
    aboutSection.scrollIntoView({
      behavior: "smooth",
    });
  }
}
