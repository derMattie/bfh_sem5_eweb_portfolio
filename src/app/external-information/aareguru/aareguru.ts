export interface AareData {
  aare: number; // Die aktuelle Aare-Temperatur
  aare_prec: number; // Die vorherige Aare-Temperatur (oder Vorhersage)
  text: string; // Beschreibung der aktuellen Situation
  text_short: string; // Kürzere Beschreibung
  time: number; // Zeitstempel der Messung
  name: string; // Kurzname der Messstation (z.B. Bärn)
  longname: string; // Vollständiger Name der Messstation (z.B. Bern, Schönau)
}
