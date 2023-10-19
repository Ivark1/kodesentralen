use context essentials2021

allignment = circle(100, "solid", "transparent")
circle1 = circle(50, "solid", "purple")
circle2 = circle(40, "solid", "red")
circle3 = circle(30, "solid", "orange")
circle4 = circle(20, "solid", "yellow")
pin = circle(10, "solid", "black")

# Over er det laget variabler for å effektivisere koden. De forskjellig sirklene blir forklart med variablene "circle" 1-4. Den svarte sirklen i midten, altså pinnen som de andre sirklen skal være på kalte vi "pin"

# "allignment" brukes for at pinnene ikke skal bevege seg nå alle sirklene har blitt flyttet til en av de andre pinnene. den første pinnen vil alltid holde seg på det samme stedet på grunn av den usynlige sirkelen ettersom Pyret prøver å legge de geometriske formene så langt til venstre som mulig

# "Underlay" blir brukt for å legge formene over hverandre, men ettersom "underlay" funksjonen bare kan bruke opp til 2 argumenter, så må den brukes mange ganger i seg selv. "Underlay-xy" blir brukt for å endre posisjonen til pinnene og sirklene og bruker 3 argumenter.

# Selv om det var tungvint så ble det funnet ut at underlay var det beste alternativet. Det ble gjort forsøk med "put-image" og "overlay" også, men begge disse hadde sine egne problemer. En komplikasjon som oppsto var på grunn av selve språket fordi mengden argumenter man kunne bruke var svært begrenset. "Overlay" fikk problemer med at hvis man flyttet en så ble alle andre elementer også flyttet og "put-image", som vi startet med, hadde problemer med mengden argumenter vi hadde tilgjengelig. Problemet med "put-image" kan også være fordi det var den vi startet med da vi ikke helt skjønte hvordan vi skulle bruke språket.

underlay((allignment), 
  underlay((circle1), 
    underlay((circle2), 
      underlay((circle3), 
        underlay((circle4),
          underlay(underlay-xy((pin), -150, 0, empty-image),
            underlay((pin), underlay-xy((pin), -300, 0, empty-image))))))))

underlay((allignment), 
  underlay((circle1), 
    underlay((circle2), 
      underlay((circle3), 
        underlay-xy((circle4), -150, 0, 
          underlay(underlay-xy((pin), -150, 0, empty-image),
            underlay((pin), underlay-xy((pin), -300, 0, empty-image))))))))

underlay((allignment), 
  underlay((circle1), 
    underlay((circle2), 
      underlay-xy((circle3), -290, 10, 
        underlay-xy((circle4), -150, 0, 
          underlay(underlay-xy((pin), -150, 0, empty-image),
            underlay((pin), underlay-xy((pin), -300, 0, empty-image))))))))

underlay((allignment), 
  underlay((circle1), 
    underlay((circle2), 
      underlay-xy((circle3), -290, 10, 
        underlay-xy((circle4), -300, 0, 
          underlay(underlay-xy((pin), -150, 0, empty-image),
            underlay((pin), underlay-xy((pin), -300, 0, empty-image))))))))

underlay((allignment), 
  underlay((circle1), 
    underlay-xy((circle2), -130, 10, 
      underlay-xy((circle3), -290, 10, 
        underlay-xy((circle4), -300, 0, 
          underlay(underlay-xy((pin), -150, 0, empty-image),
            underlay((pin), underlay-xy((pin), -300, 0, empty-image))))))))

underlay((allignment), 
  underlay((circle1), 
    underlay-xy((circle2), -140, 10, 
      underlay-xy((circle3), -300, 0, 
        underlay((circle4), 
          underlay(underlay-xy((pin), -150, 0, empty-image),
            underlay((pin), underlay-xy((pin), -300, 0, empty-image))))))))

underlay((allignment), 
  underlay((circle1), 
    underlay-xy((circle2), -140, 10, 
      underlay-xy((circle3), -150, 0, 
        underlay((circle4), 
          underlay(underlay-xy((pin), -150, 0, empty-image),
            underlay((pin), underlay-xy((pin), -300, 0, empty-image))))))))

underlay((allignment), 
  underlay((circle1), 
    underlay-xy((circle2), -130, 10, 
      underlay-xy((circle3), -140, 10, 
        underlay-xy((circle4), -150, 0,
          underlay(underlay-xy((pin), -150, 0, empty-image),
            underlay((pin), underlay-xy((pin), -300, 0, empty-image))))))))

underlay((allignment), 
  underlay-xy((circle1), -270, 10, 
    underlay-xy((circle2), -130, 10, 
      underlay-xy((circle3), -140, 10, 
        underlay-xy((circle4), -150, 0,
          underlay(underlay-xy((pin), -150, 0, empty-image),
            underlay((pin), underlay-xy((pin), -300, 0, empty-image))))))))

underlay((allignment), 
underlay-xy((circle1), -270, 10, 
    underlay-xy((circle2), -130, 10, 
      underlay-xy((circle3), -140, 10, 
        underlay-xy((circle4), -300, 0,
          underlay(underlay-xy((pin), -150, 0, empty-image),
            underlay((pin), underlay-xy((pin), -300, 0, empty-image))))))))

underlay((allignment), 
  underlay-xy((circle1), -290, 10, 
    underlay-xy((circle2), -150, 0, 
      underlay((circle3), 
        underlay-xy((circle4), -300, 0,
          underlay(underlay-xy((pin), -150, 0, empty-image),
            underlay((pin), underlay-xy((pin), -300, 0, empty-image))))))))

underlay((allignment), 
  underlay-xy((circle1), -290, 10, 
    underlay-xy((circle2), -150, 0, 
      underlay((circle3), 
        underlay((circle4),
          underlay(underlay-xy((pin), -150, 0, empty-image),
            underlay((pin), underlay-xy((pin), -300, 0, empty-image))))))))

underlay((allignment), 
  underlay-xy((circle1), -290, 10, 
    underlay-xy((circle2), -300, 0, 
      underlay((circle3), 
        underlay((circle4),
          underlay(underlay-xy((pin), -150, 0, empty-image),
            underlay((pin), underlay-xy((pin), -300, 0, empty-image))))))))

underlay((allignment), 
  underlay-xy((circle1), -290, 10, 
    underlay-xy((circle2), -300, 0, 
      underlay((circle3), 
        underlay-xy((circle4), -150, 0,
          underlay(underlay-xy((pin), -150, 0, empty-image),
            underlay((pin), underlay-xy((pin), -300, 0, empty-image))))))))

underlay((allignment), 
  underlay-xy((circle1), -270, 10, 
    underlay-xy((circle2), -280, 10, 
      underlay-xy((circle3), -290, 10,
        underlay-xy((circle4), -150, 0,
          underlay(underlay-xy((pin), -150, 0, empty-image),
            underlay((pin), underlay-xy((pin), -300, 0, empty-image))))))))

underlay((allignment), 
  underlay-xy((circle1), -270, 10, 
    underlay-xy((circle2), -280, 10, 
      underlay-xy((circle3), -290, 10,
        underlay-xy((circle4), -300, 0,
          underlay(underlay-xy((pin), -150, 0, empty-image),
            underlay((pin), underlay-xy((pin), -300, 0, empty-image))))))))
