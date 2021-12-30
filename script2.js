const sections = document.querySelectorAll(".section")

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting)
        })
    }, 
    {
    threshold: 0.5,
    }
)

sections.forEach(section => {
    observer.observe(section)
})

$("#About").click(function () {
    $('html,body').animate({
        scrollTop: $("#sec1").offset().top
      },
      'slow');
  });
  
  $("#Projects").click(function () {
    $('html,body').animate({
        scrollTop: $("#sec2").offset().top
      },
      'slow');
  });
  
  $("#Experience").click(function () {
    $('html,body').animate({
        scrollTop: $("#sec3").offset().top
      },
      'slow');
  });
  
  $("#Skills").click(function () {
    $('html,body').animate({
        scrollTop: $("#sec4").offset().top
      },
      'slow');
  });

  $("#Resume").click(function () {
    $('html,body').animate({
        scrollTop: $("#sec5").offset().top
      },
      'slow');
  });

  
  $("#Home").click(function () {
    $('html,body').animate({
        scrollTop: $("html").offset().top
      },
      'slow');
  });
  