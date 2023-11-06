use context essentials2021

#-----------------------------------------------------------------------
#Her er alle variablene og formene i koden

# Lager sirklene og posisjons variablene til sirklene
circle1 = circle(50, "solid", "purple")
var posc1 = 1
circle2 = circle(40, "solid", "red")
var posc2 = 1
circle3 = circle(30, "solid", "orange")
var posc3 = 1
circle4 = circle(20, "solid", "yellow")
var posc4 = 1

# Her lages variablene som ser om noe er ugyldig, hva som skal printes ut om dette er tilfellet og hva som skal printes ut om du har vunnet
var valid = true
var win = "gratulerer, du har vunnet spillet!!"
var invalid1 = "Ugyldig trekk, sørg for at du flytter den minste først" 
var invalid2 = "og at du ikke plasserer en større sirkel over den"

# Her skapes de svarte pinnene
pin = circle(10, "solid", "black")

#-------------
# Her skapes justerings feltene. Disse er ikke synlig, men de holder sirklene og pinnene på riktig plass igjennom spillet.
pin-align   = rectangle(400, 100, "solid", "transparent")
mainstage1  = rectangle(480, 100, "solid", "transparent")
mainstage2  = rectangle(460, 100, "solid", "transparent")
mainstage3  = rectangle(440, 100, "solid", "transparent")
mainstage4  = rectangle(420, 100, "solid", "transparent")

mainstage = rectangle(520, 200, "solid", "transparent")

#-----------------------------------------------------------------------
#Her lages pinnene og blir puttet på brettet. Her er det også en if-statement som tas i bruk da funksjonen brukes senere i koden

fun pins(choice):
  
  pin1 = overlay-align("left", "middle", pin-align, pin)    
  pin12 = overlay-align("pinhole", "middle", pin1, pin)    
  stage1 = overlay-align("right", "middle", pin12, pin) 

  #------------- 
  
  if choice == 1:
    overlay-align("pinhole", "middle", mainstage1, stage1) 
  else if choice == 2: 
    overlay-align("pinhole", "middle", mainstage2, stage1) 
  else if choice == 3: 
    overlay-align("pinhole", "middle", mainstage3, stage1) 
  else if choice == 4:
    overlay-align("pinhole", "middle", mainstage4, stage1)
  end
end

#-----------------------------------------------------------------------
#Her settes både sirklene og pinnene opp. Her brukes pins() funksjonen som ble nevnt tidligere og det tallet som står inne i pins() funksjonen er hvilken av blokkene i if-statementen som tas i bruk


fun if1():
  if posc1 == 1:    
    step11 = overlay-align("left", "middle", pins(1), circle1) 
    step1 = overlay-align("pinhole", "middle", mainstage, step11) 
    step1
  else if posc1 == 2:   
    step12 = overlay-align("pinhole", "middle", pins(1), circle1)  
    step11 = overlay-align("pinhole", "middle", mainstage, step12)
    step11
  else if posc1 == 3:  
    step13 = overlay-align("right", "middle", pins(1), circle1) 
    step111 = overlay-align("pinhole", "middle", mainstage, step13)   
    step111
  end
end

#-------------

fun if2():
  if posc2 == 1:   
    step21 = overlay-align("left", "middle", pins(2), circle2) 
    step2 = overlay-align("pinhole", "middle", mainstage, step21)  
    step2
  else if posc2 == 2:  
    step22 = overlay-align("pinhole", "middle", pins(2), circle2) 
    step21 = overlay-align("pinhole", "middle", mainstage, step22)  
    step21
  else if posc2 == 3: 
    step23 = overlay-align("right", "middle", pins(2), circle2) 
    step212 = overlay-align("pinhole", "middle", mainstage, step23) 
    step212
  end
end

#-------------

fun if3():
  if posc3 == 1:    
    step31 = overlay-align("left", "middle", pins(3), circle3) 
    step3 = overlay-align("pinhole", "middle", mainstage, step31) 
    step3
  else if posc3 == 2:
    step32 = overlay-align("pinhole", "middle", pins(3), circle3)   
    step31 = overlay-align("pinhole", "middle", mainstage, step32) 
    step31
  else if posc3 == 3:   
    step33 = overlay-align("right", "middle", pins(3), circle3) 
    step313 = overlay-align("pinhole", "middle", mainstage, step33)  
    step313
  end
end

#-------------

fun if4():
  if posc4 == 1:    
    step41 = overlay-align("left", "middle", pins(4), circle4)
    step4 = overlay-align("pinhole", "middle", mainstage, step41)  
    step4
  else if posc4 == 2:   
    step42 = overlay-align("pinhole", "middle", pins(4), circle4) 
    step44 = overlay-align("pinhole", "middle", mainstage, step42) 
    step44
  else if posc4 == 3:   
    step43 = overlay-align("right", "middle", pins(4), circle4) 
    step444 = overlay-align("pinhole", "middle", mainstage, step43) 
    step444
  end
end

#-----------------------------------------------------------------------
#Her er funksjonene til selve spillet

# Denne funksjonen ser både etter om spillet er vunnet og viser selve spillet på skjermen
fun show():
  block:
    if ((posc1 == 3) and (posc2 == 3) and (posc3 == 3) and (posc4 == 3)):
      block:
        print(win)
        underlay((if1()),   
          underlay((if2()),   
            underlay((if3()), ((if4())))))
      end
    else: 
      block: 
        underlay((if1()),   
          underlay((if2()),   
            underlay((if3()), ((if4())))))
      end
    end
  end 
end

# Denne funksjonen setter spillet tilbake til startposisjon uten instruksene på toppen
fun reset():
  block:
    posc1 := 1
    posc2 := 1 
    posc3 := 1
    posc4 := 1
    
    underlay((if1()), 
      underlay((if2()), 
        underlay((if3()), ((if4())))))
  end
end

# Denne funksjonen starter selve spillet og blir automatisk brukt på starten av spillet, men den kan brukes igjen for å starte på nytt med instruksene på toppen
fun start(): 
  block:
    print("skriv move(sirkel, pinne) for å gjøre ett trekk") 
    print("1 er den minste sirkelen og 4 er den største") 
    print("1 er pinnen til venstre, 3 er pinnen til høyre") 
    print("f.eks move(3, 2) flytter sirkel 3(nest størst) til pinne 2 (midterste)") 
    print("skriv reset() for å gå tilbake til start") 
    posc1 := 1
    posc2 := 1 
    posc3 := 1
    posc4 := 1
    
    underlay((if1()), 
      underlay((if2()), 
        underlay((if3()), ((if4()))))) 
  end
end
  
# Denne funksjonen brukes til å kontrollere hvor sirklene skal bevege seg og virker også som en sjekk på om trekket du gjør er gyldig
fun move(pawn, slot):
  block:
    if ((slot >= 4) or (slot <= 0)):
      valid := false
    else if pawn == 4:
    block:
      if ((posc1 == posc2) or (posc1 == posc3) or (posc1 == posc4)) or ((posc2 == slot) or (posc3 == slot) or (posc4 == slot)):
          valid := false
      else:
        block:
          posc1 := slot
            # error()
        end
      end
    end
  
  else if pawn == 3:
    block:
      if ((posc2 == posc3) or (posc2 == posc4)) or ((posc3 == slot) or (posc4 == slot)):
          valid := false
      else:
        block:
          posc2 := slot
            # error()
        end
      end
    end 
    
  else if pawn == 2:
    block:
      if (posc3 == posc4) or (posc4 == slot):
          valid := false
      else:
        block:
          posc3 := slot
            # error()
        end
      end
    end
    
  else if pawn == 1:
    block:
      block: 
        posc4 := slot 
          # error()
      end
    end
    else: 
      valid := false
  end
    error()
  end
end

#-----------------------------------------------------------------------
#Sjekker om spillet er ferdig eller om et ugyldig trekk har blitt gjort



fun error():
  if valid == false:
    block:
      print(invalid1) 
      print(invalid2)
      valid := true 
    end  
  else if valid == true:
    show()
  end  
end

#-----------------------------------------------------------------------
#
# Starter spillet ved å vise instrukser og selve spillet
start()