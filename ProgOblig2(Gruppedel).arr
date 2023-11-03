use context essentials2021

#-----------------------------------------------------------------------
#Her er alle variablene og formene i koden

circle1 = circle(50, "solid", "purple")
var posc1 = 1
circle2 = circle(40, "solid", "red")
var posc2 = 1
circle3 = circle(30, "solid", "orange")
var posc3 = 1
circle4 = circle(20, "solid", "yellow")
var posc4 = 1

var curpin = 1
var minsize = 1

var valid = true
var win = "gratulerer, du har vunnet spillet!!"

var invalid1 = "Ugyldig trekk, sørg for at du flytter den minste først" 
var invalid2 = "og at du ikke plasserer en større sirkel over den"

pin = circle(10, "solid", "black")

#-------------

pin-align   = rectangle(400, 100, "solid", "transparent")
mainstage1  = rectangle(480, 100, "solid", "transparent")
mainstage2  = rectangle(460, 100, "solid", "transparent")
mainstage3  = rectangle(440, 100, "solid", "transparent")
mainstage4  = rectangle(420, 100, "solid", "transparent")

mainstage = rectangle(520, 200, "solid", "transparent")

#-----------------------------------------------------------------------
#Her lages pinnene og blir puttet på brettet

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
  else: 
    empty-image
  end
end



#-----------------------------------------------------------------------
#Dette er funksjonene til det som skal beveges. Her settes sirklene på brettet der de blir justert til riktig posisjon


fun pawn1(pawn):
  if pawn == 1: 
      overlay-align("left", "middle", pins(1), circle1)
  else if pawn == 2: 
      overlay-align("pinhole", "middle", pins(1), circle1)
  else if pawn == 3:   
      overlay-align("right", "middle", pins(1), circle1)
  else: 
    empty-image
  end  
end

#-------------

fun pawn2(pawn):
  if pawn == 1:   
      overlay-align("left", "middle", pins(2), circle2)
  else if pawn == 2:     
      overlay-align("pinhole", "middle", pins(2), circle2) 
  else if pawn == 3:  
      overlay-align("right", "middle", pins(2), circle2)
  else: 
    empty-image
  end 
end

#-------------

fun pawn3(pawn):
  if pawn == 1:   
      overlay-align("left", "middle", pins(3), circle3)  
  else if pawn == 2:     
      overlay-align("pinhole", "middle", pins(3), circle3)  
  else if pawn == 3:  
      overlay-align("right", "middle", pins(3), circle3)  
  else: 
    empty-image
  end 
end

#-------------

fun pawn4(pawn):
  if pawn == 1:   
      overlay-align("left", "middle", pins(4), circle4)  
  else if pawn == 2:     
      overlay-align("pinhole", "middle", pins(4), circle4)   
  else if pawn == 3:  
      overlay-align("right", "middle", pins(4), circle4)  
  else: 
    empty-image
  end 
end
#-----------------------------------------------------------------------
#Her settes både sirklene og pinnene opp


fun if1():
  if posc1 == 1:    
    step1 = overlay-align("pinhole", "middle", mainstage, pawn1(1)) 
    step11 = overlay-align("left", "middle", pins(1), circle1) 
    step11
  else if posc1 == 2:   
    step11 = overlay-align("pinhole", "middle", mainstage, pawn1(2))
    step12 = overlay-align("pinhole", "middle", pins(1), circle1) 
    step12
  else if posc1 == 3:   
    step111 = overlay-align("pinhole", "middle", mainstage, pawn1(3))  
    step13 = overlay-align("right", "middle", pins(1), circle1) 
    step13
  else: 
    empty-image 
  end
end

#-------------

fun if2():
  if posc2 == 1:    
    step2 = overlay-align("pinhole", "middle", mainstage, pawn2(1))  
    step21 = overlay-align("left", "middle", pins(2), circle2)
    step21
  else if posc2 == 2:   
    step21 = overlay-align("pinhole", "middle", mainstage, pawn2(2)) 
    step22 = overlay-align("pinhole", "middle", pins(2), circle2) 
    step22
  else if posc2 == 3:   
    step212 = overlay-align("pinhole", "middle", mainstage, pawn2(3)) 
    step23 = overlay-align("right", "middle", pins(2), circle2)
    step23
  else: 
    empty-image 
  end
end

#-------------

fun if3():
  if posc3 == 1:    
    step3 = overlay-align("pinhole", "middle", mainstage, pawn3(1)) 
    step31 = overlay-align("left", "middle", pins(3), circle3)
    step31
  else if posc3 == 2:   
    step31 = overlay-align("pinhole", "middle", mainstage, pawn3(2)) 
    step32 = overlay-align("pinhole", "middle", pins(3), circle3)
    step32
  else if posc3 == 3:   
    step313 = overlay-align("pinhole", "middle", mainstage, pawn3(3)) 
    step33 = overlay-align("right", "middle", pins(3), circle3) 
    step33
  else: 
    empty-image 
  end
end

#-------------

fun if4():
  if posc4 == 1:    
    step4 = overlay-align("pinhole", "middle", mainstage, pawn4(1)) 
    step41 = overlay-align("left", "middle", pins(4), circle4) 
    step41
  else if posc4 == 2:   
    step44 = overlay-align("pinhole", "middle", mainstage, pawn4(2)) 
    step42 = overlay-align("pinhole", "middle", pins(4), circle4)
    step42
  else if posc4 == 3:   
    step444 = overlay-align("pinhole", "middle", mainstage, pawn4(3)) 
    step43 = overlay-align("right", "middle", pins(4), circle4)
    step43
  else: 
    empty-image
  end
end

#-----------------------------------------------------------------------
#Her er funksjonene til selve spillet

fun show():
  block:
    if ((posc1 == 1) and (posc2 == 1) and (posc3 == 1) and (posc4 == 3)):
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
  
fun move(pawn, slot):
  block:
  if pawn == 4:
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