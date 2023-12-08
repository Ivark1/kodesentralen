use context essentials2021
include gdrive-sheets
include data-source
include shared-gdrive(
"dcic-2021",
  "1wyQZj_L0qqV9Ekgr9au6RX2iqt2Ga8Ep") # // Oppgave B

ssid = "1RYN0i4Zx_UETVuYacgaGfnFcv4l9zd9toQTTdkQkj7g"
kWh-wealthy-consumer-data =
  load-table: komponent, energi 
    source: load-spreadsheet(ssid).sheet-by-name("kWh", true) 
  sanitize energi using string-sanitizer 
#Gjør nummerene om til string slik at pyret skjønner hva som skal stå i tabellen // oppgave A
end

# DTPD - distance-travelled-per-day = 40 km/t average
# DPUOF - distance-per-unit-of-fuel = 8kWh
# EPUOF - energy-per-unit-of-fuel = 10kWh

DPUOF = 8
DTPD = 40
EPUOF = 10

# Utregningen for gjennomsnitt av energiforbruk per dag
fun bilenergi():
  block:
    energy-per-day = (( DTPD / DPUOF ) * EPUOF)
    energy-per-day
  end
end

# Funksjon for å gjøre verdiene til string slik at pyret forstår // Oppgave B
fun energi-to-number(s :: String) -> Number:
  # If s is not a numeric string, default to 0.
  cases(Option) string-to-number(s):
    | some(a) => a
    | none => bilenergi()
  end
where:
  energi-to-number("") is bilenergi()
energi-to-number("48") is 48
end 

# Gjør om verdiene fra string til nummere
energiNum = transform-column(kWh-wealthy-consumer-data, "energi", energi-to-number)

energiNum

# Summerer energiforbruket til en vanlig innbygger
summen = sum(energiNum, "energi")

# Funksjon som regner ut og printer ut det gjennomsnittelige forbruket til en vanlig innbygger
fun gjennomsnitt():
  block:
  average = summen + bilenergi()
    print("Dette er gjennomsnittet av forbruket til en vanlig innbygger i kWh:")
  average
  end
end

gjennomsnitt()

# Printer ut en graf over energiforbruket
bar-chart(energiNum, "komponent", "energi")