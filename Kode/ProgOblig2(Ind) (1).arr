use context essentials2021
include color

fun drawflag(land):
fun flagnor(): 
    allignment = rectangle(90, 160, "solid", "transparent") 
    allignment2 = rectangle(100, 160, "solid", "transparent")   
    main = rectangle(220, 160, "solid", color(186, 12, 47, 1))    
    whitey = rectangle(40, 160, "solid", color(255, 255, 255, 1))   
    whitex = rectangle(220, 40, "solid", color(255, 255, 255, 1))    
    bluey = rectangle(20, 160, "solid", color(0, 32, 91, 1))   
    bluex = rectangle(220, 20, "solid", color(0, 32, 91, 1))    
  
    flagprog = overlay-align("right", "middle", allignment, bluey)  
    flagprog1 = overlay-align("left", "middle", bluex, flagprog)  
    flagprog2 = overlay-align("pinhole", "middle", flagprog1, whitex) 
    flagprog3 = overlay-align("right", "middle", allignment2, whitey)  
    flagprog4 = overlay-align("left", "middle", flagprog2, flagprog3)  
    overlay-align("pinhole", "middle", flagprog4, main)    
end  
fun flagis(): 
    allignment = rectangle(90, 160, "solid", "transparent")   
    allignment2 = rectangle(100, 160, "solid", "transparent")   
    main = rectangle(220, 160, "solid", color(2, 82, 156, 1))    
    whitey = rectangle(40, 160, "solid", color(255, 255, 255, 1))   
    whitex = rectangle(220, 40, "solid", color(255, 255, 255, 1))    
    redy = rectangle(20, 160, "solid", color(220, 30, 53, 1))    
    redx = rectangle(220, 20, "solid", color(220, 30, 53, 1))    
  
    flagprog = overlay-align("right", "middle", allignment, redy)  
    flagprog1 = overlay-align("left", "middle", redx, flagprog)  
    flagprog2 = overlay-align("pinhole", "middle", flagprog1, whitex) 
    flagprog3 = overlay-align("right", "middle", allignment2, whitey)  
    flagprog4 = overlay-align("left", "middle", flagprog2, flagprog3)  
    overlay-align("pinhole", "middle", flagprog4, main)    
end  
fun flagfin():  
    allignment = rectangle(90, 160, "solid", "transparent")   
    allignment2 = rectangle(100, 160, "solid", "transparent")   
    main = rectangle(220, 160, "solid", color(255, 255, 255, 1))   
    bluey = rectangle(35, 160, "solid", color(0, 47, 108, 1))  
    bluex = rectangle(220, 35, "solid", color(0, 47, 108, 1))   
    bluey2 = rectangle(20, 160, "solid", color(0, 47, 108, 1))   
    bluex2 = rectangle(220, 20, "solid", color(0, 47, 108, 1))   
  
    flagprog = overlay-align("right", "middle", allignment, bluey2) 
    flagprog1 = overlay-align("left", "middle", bluex2, flagprog) 
    flagprog2 = overlay-align("pinhole", "middle", flagprog1, bluex)
    flagprog3 = overlay-align("right", "middle", allignment2, bluey) 
    flagprog4 = overlay-align("left", "middle", flagprog2, flagprog3)  
    overlay-align("pinhole", "middle", flagprog4, main)    
end
fun flagsve():  
    allignment = rectangle(100, 160, "solid", "transparent")   
    allignment2 = rectangle(110, 160, "solid", "transparent")   
    main = rectangle(220, 160, "solid", color(0, 106, 167, 1))   
    yellowy = rectangle(40, 160, "solid", color(0, 106, 167, 1))  
    yellowx = rectangle(220, 40, "solid", color(0, 106, 167, 1))   
    bluey2 = rectangle(30, 160, "solid", color(254, 204, 2, 1))   
    bluex2 = rectangle(220, 30, "solid", color(254, 204, 2, 1))   
   
    flagprog = overlay-align("right", "middle", allignment, bluey2) 
    flagprog1 = overlay-align("left", "middle", bluex2, flagprog) 
    flagprog2 = overlay-align("pinhole", "middle", flagprog1, yellowx)
    flagprog3 = overlay-align("right", "middle", allignment2, yellowy) 
    flagprog4 = overlay-align("left", "middle", flagprog2, flagprog3)  
    overlay-align("pinhole", "middle", flagprog4, main)   
end
fun flagdan():  
    allignment = rectangle(100, 160, "solid", "transparent")   
    allignment2 = rectangle(110, 160, "solid", "transparent")   
    main = rectangle(220, 160, "solid", color(200, 16, 46, 1))   
    redy = rectangle(40, 160, "solid", color(200, 16, 46, 1))  
    redx = rectangle(220, 40, "solid", color(200, 16, 46, 1))   
    whitey = rectangle(25, 160, "solid", color(255, 255, 255, 1))   
    whitex = rectangle(220, 25, "solid", color(255, 255, 255, 1))   
  
    flagprog = overlay-align("right", "middle", allignment, whitey) 
    flagprog1 = overlay-align("left", "middle", whitex, flagprog) 
    flagprog2 = overlay-align("pinhole", "middle", flagprog1, redx)
    flagprog3 = overlay-align("right", "middle", allignment2, redy) 
    flagprog4 = overlay-align("left", "middle", flagprog2, flagprog3)  
    overlay-align("pinhole", "middle", flagprog4, main)    
end
  fun flagfer():  
    allignment = rectangle(90, 160, "solid", "transparent")   
    allignment2 = rectangle(100, 160, "solid", "transparent")   
    main = rectangle(220, 160, "solid", color(255, 255, 255, 1))   
    bluey = rectangle(40, 160, "solid", color(0, 101, 189, 1))  
    bluex = rectangle(220, 40, "solid", color(0, 101, 189, 1))   
    redy = rectangle(20, 160, "solid", color(237, 41, 57, 1))   
    redx = rectangle(220, 20, "solid", color(237, 41, 57, 1))   
    
    flagprog = overlay-align("right", "middle", allignment, redy) 
    flagprog1 = overlay-align("left", "middle", redx, flagprog) 
    flagprog2 = overlay-align("pinhole", "middle", flagprog1, bluex)
    flagprog3 = overlay-align("right", "middle", allignment2, bluey)  
    flagprog4 = overlay-align("left", "middle", flagprog2, flagprog3)  
    overlay-align("pinhole", "middle", flagprog4, main)    
end
  
  if (land == "norge") or (land == 1): 
    flagnor()    
  else if (land == "island") or (land == 2):
    flagis()  
  else if (land == "finland") or (land == 3): 
    flagfin() 
  else if (land == "sverige") or (land == 4): 
    flagsve()   
  else if (land == "danmark") or (land == 5): 
    flagdan() 
  else if (land == "færøyene") or (land == 6): 
    flagfer()
  else:
    "skriv en av de følgene: norge, island, finland, sverige, danmark, færøyene eller bruk tallene 1-6"
  end
end


drawflag(1)
drawflag(2)
drawflag(3)
drawflag(4)
drawflag(5)
drawflag(6)