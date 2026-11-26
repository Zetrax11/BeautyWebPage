export type Procedure = {
    id: string;
    name: string;
    category: string;
    shortDescription: string;
    price: string;
    duration: string;
}

export const PROCEDURES: Procedure[] = [
    {
        id: "1",
        name: "Regulacja brwi",
        category: "Stylizacja brwi i rzęs",
        shortDescription: "Regulacja brwi to zabieg kosmetyczny, który polega na nadaniu brwiom odpowiedniego kształtu i proporcji.",
        price: "50",
        duration: "30"
    },
    {
        id: "2",
        name: "Laminacja brwi z farbowaniem",
        category: "Stylizacja brwi i rzęs",
        shortDescription: "Laminacja brwi z farbowaniem to zabieg kosmetyczny, który polega na nadaniu brwiom odpowiedniego kształtu i proporcji.",
        price: "150",
        duration: "60"
    },
    {
        id: "3",
        name: "Laminacja brwi bez farbowania",
        category: "Stylizacja brwi i rzęs",
        shortDescription: "Laminacja brwi bez farbowania to zabieg kosmetyczny, który polega na nadaniu brwiom odpowiedniego kształtu i proporcji.",
        price: "110",
        duration: "60"
    },
    {
        id: "4",
        name: "Architektura brwi z farbowaniem",
        category: "Stylizacja brwi i rzęs",
        shortDescription: "Architektura brwi z farbowaniem to zabieg kosmetyczny, który polega na nadaniu brwiom odpowiedniego kształtu i proporcji.",
        price: "100",
        duration: "60"
    },
    {
        id: "5",
        name: "Lifting rzęsc z farbowaniem",
        category: "Stylizacja brwi i rzęs",
        shortDescription: "Lifting rzęsc z farbowaniem to zabieg kosmetyczny, który polega na nadaniu rzęscom odpowiedniego kształtu i proporcji.",
        price: "170",
        duration: "60"
    },
    {
        id: "6",
        name: "Laminacja brwi z farbowaniem + laminacja rzęs z farbowaniem",
        category: "Stylizacja brwi i rzęs - pakiety",
        shortDescription: "Laminacja brwi z farbowaniem + laminacja rzęs z farbowaniem to zabieg kosmetyczny, który polega na nadaniu brwiom i rzęsom odpowiedniego kształtu i proporcji.",
        price: "250",
        duration: "90"
    },
    {
        id: "7",
        name: "Laminacja brwi bez farbowania + laminacja rzęs z farbowaniem",
        category: "Stylizacja brwi i rzęs - pakiety",
        shortDescription: "Laminacja brwi bez farbowania + laminacja rzęs z farbowaniem to zabieg kosmetyczny, który polega na nadaniu brwiom i rzęsom odpowiedniego kształtu i proporcji.",
        price: "220",
        duration: "90"
    },
    {
        id: "8",
        name: "Architektura brwi z farbowaniem + laminacja rzęs z farbowaniem",
        category: "Stylizacja brwi i rzęs - pakiety",
        shortDescription: "Architektura brwi z farbowaniem + laminacja rzęs z farbowaniem to zabieg kosmetyczny, który polega na nadaniu brwiom i rzęsom odpowiedniego kształtu i proporcji.",
        price: "220",
        duration: "90"
    },
    {
        id: "9",
        name: "Makijaż okolicznościowy",
        category: "Makijaż",
        shortDescription: "Makijaż okolicznościowy to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "300",
        duration: "180"
    },
    {
        id: "10",
        name: "Makijaż dzienny",
        category: "Makijaż",
        shortDescription: "Makijaż dzienny to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "220",
        duration: "120"
    },
    {
        id: "11",
        name: "Makijaż biznesowy do sesji zdjęciowej",
        category: "Makijaż",
        shortDescription: "Makijaż biznesowy do sesji zdjęciowej to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "250",
        duration: "120"
    },
    {
        id: "12",
        name: "Makijaż ślubny",
        category: "Makijaż",
        shortDescription: "Makijaż ślubny to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "350",
        duration: "180"
    },
    {
        id: "13",
        name: "Makijaż próbny ślubny",
        category: "Makijaż",
        shortDescription: "Makijaż próbny ślubny to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "350",
        duration: "180"
    },
    {
        id: "14",
        name: "Fotoodmładzanie laserowe - twarz",
        category: "Fotoodmładzanie laserowe",
        shortDescription: "Fotoodmładzanie laserowe - twarz to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "400",
        duration: "60"
    },
    {
        id: "15",
        name: "Fotoodmładzanie laserowe - twarz + szyja + dekolt",
        category: "Fotoodmładzanie laserowe",
        shortDescription: "Fotoodmładzanie laserowe - twarz + szyja + dekolt to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "600",
        duration: "90"
    },
    {
        id: "16",
        name: "Peeling Black Doll - twarz",
        category: "Peeling Black Doll",
        shortDescription: "Peeling Black Doll - twarz to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "350",
        duration: "30"
    },
    {
        id: "17",
        name: "Peeling Black Doll - twarz + szyja",
        category: "Peeling Black Doll",
        shortDescription: "Peeling Black Doll - twarz + szyja to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "450",
        duration: "30"
    },
    {
        id: "18",
        name: "Peeling Black Doll - twarz + szyja + dekolt",
        category: "Peeling Black Doll",
        shortDescription: "Peeling Black Doll - twarz + szyja + dekolt to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "500",
        duration: "30"
    },
    {
        id: "19",
        name: "Oczyszczanie wodorowe - twarz",
        category: "Oczyszczanie wodorowe",
        shortDescription: "Oczyszczanie wodorowe - twarz to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "350",
        duration: "30"
    },
    {
        id: "20",
        name: "Oczyszczanie wodorowe - twarz + szyja + dekolt",
        category: "Oczyszczanie wodorowe",
        shortDescription: "Oczyszczanie wodorowe - twarz + szyja + dekolt to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "500",
        duration: "30"
    },
    {
        id: "21",
        name: "Oczyszczanie wodorowe + manualne",
        category: "Oczyszczanie wodorowe",
        shortDescription: "Oczyszczanie wodorowe + manualne to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "500",
        duration: "30"
    },
    {
        id: "22",
        name: "Oczyszczanie wodorowe + manualne z peelingiem chemicznym",
        category: "Oczyszczanie wodorowe",
        shortDescription: "Oczyszczanie wodorowe + manualne z peelingiem chemicznym to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "700",
        duration: "30"
    },
    {
        id: "23",
        name: "Usuwanie makijażu permanentnego",
        category: "Laser",
        shortDescription: "Usuwanie makijażu permanentnego to zabieg kosmetyczny, który polega na usunięciu makijażu permanentnego z skóry.",
        price: "300",
        duration: "30"
    },
    {
        id: "24",
        name: "Usuwanie tatuażu",
        category: "Laser",
        shortDescription: "Usuwanie tatuażu to zabieg kosmetyczny, który polega na usunięciu tatuażu z skóry.",
        price: "*Zmienna",
        duration: "30"
    },
    {
        id: "25",
        name: "Peeling chemiczny",
        category: "Peeling chemiczny",
        shortDescription: "Peeling chemiczny to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "350 - 500",
        duration: "30"
    },
    {
        id: "26",
        name: "Oczyszczanie manualne + peeling chemiczny",
        category: "Peeling chemiczny",
        shortDescription: "Oczyszczanie manualne + peeling chemiczny to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "od 450",
        duration: "30"
    },
    {
        id: "27",
        name: "Mezoterapia mikroigłowa - twarz",
        category: "Mezoterapia mikroigłowa",
        shortDescription: "Mezoterapia mikroigłowa - twarz to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "450",
        duration: "30"
    },
    {
        id: "28",
        name: "Mezoterapia mikroigłowa - Twarz + szyja",
        category: "Mezoterapia mikroigłowa",
        shortDescription: "Mezoterapia mikroigłowa - twarz + szyja to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "550",
        duration: "30"
    },
    {
        id: "29",
        name: "Mezoterapia mikroigłowa - Twarz + szyja + dekolt",
        category: "Mezoterapia mikroigłowa",
        shortDescription: "Mezoterapia mikroigłowa - twarz + szyja + dekolt to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "550",
        duration: "30"
    },
    {
        id: "30",
        name: "Mezoterapia mikroigłowa twarzy + peeling chemiczny",
        category: "Mezoterapia mikroigłowa",
        shortDescription: "Mezoterapia mikroigłowa twarzy + peeling chemiczny to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "500",
        duration: "30"
    },
    {
        id: "31",
        name: "Podbródek",
        category: "Radiofrekwencja mikroigłowa",
        shortDescription: "Radiofrekwencja mikroigłowa - podbródek to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "500",
        duration: "30"
    },
    {
        id: "32",
        name: "Twarz + podbródek",
        category: "Radiofrekwencja mikroigłowa",
        shortDescription: "Radiofrekwencja mikroigłowa - twarz + podbródek to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "950",
        duration: "30"
    },
    {
        id: "33",
        name: "Twarz + szyja + podbródek",
        category: "Radiofrekwencja mikroigłowa",
        shortDescription: "Radiofrekwencja mikroigłowa - twarz + szyja + podbródek to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "1150",
        duration: "30"
    },
    {
        id: "34",
        name: "Twarz + szyja + dekolt",
        category: "Radiofrekwencja mikroigłowa",
        shortDescription: "Radiofrekwencja mikroigłowa - twarz + szyja + dekolt to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "1400",
        duration: "30"
    },
    {
        id: "35",
        name: "Okolica oczu",
        category: "Radiofrekwencja mikroigłowa",
        shortDescription: "Radiofrekwencja mikroigłowa - okolica oczu to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "500",
        duration: "30"
    },
    {
        id: "36",
        name: "Okolica oczu + czoło",
        category: "Radiofrekwencja mikroigłowa",
        shortDescription: "Radiofrekwencja mikroigłowa - okolica oczu + czoło to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "750",
        duration: "30"
    },
    {
        id: "37",
        name: "Szyja lub dekolt",
        category: "Radiofrekwencja mikroigłowa",
        shortDescription: "Radiofrekwencja mikroigłowa - szyja lub dekolt to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "650",
        duration: "30"
    },
    {
        id: "38",
        name: "Szyja + dekolt",
        category: "Radiofrekwencja mikroigłowa",
        shortDescription: "Radiofrekwencja mikroigłowa - szyja + dekolt to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "800",
        duration: "30"
    },
    {
        id: "39",
        name: "Blizny",
        category: "Radiofrekwencja mikroigłowa",
        shortDescription: "Radiofrekwencja mikroigłowa - blizny to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "500",
        duration: "30"
    },
    {
        id: "40",
        name: "Brzuch",
        category: "Radiofrekwencja mikroigłowa",
        shortDescription: "Radiofrekwencja mikroigłowa - brzuch to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "1400",
        duration: "30"
    },
    {
        id: "41",
        name: "Biust + dekolt",
        category: "Radiofrekwencja mikroigłowa",
        shortDescription: "Radiofrekwencja mikroigłowa - biust + dekolt to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "1400",
        duration: "30"
    },
    {
        id: "42",
        name: "Indywidualna konsultacja",
        category: "Konsultacja",
        shortDescription: "Indywidualna konsultacja to usługa, która polega na zapewnieniu osobistego doradztwa i wsparcia w zakresie pielęgnacji skóry.",
        price: "Darmowa",
        duration: "30"
    },
    {
        id: "43",
        name: "KOBIDO Normal 80 min",
        category: "Masaż KOBIDO",
        shortDescription: "KOBIDO Normal 80 min to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "230",
        duration: "30"
    },
    {
        id: "44",
        name: "KOBIDO & Nourishing Treatment (dobrany indywidualnie)",
        category: "Masaż KOBIDO",
        shortDescription: "KOBIDO & Nourishing Treatment (dobrany indywidualnie) to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "270",
        duration: "30"
    },
    {
        id: "45",
        name: "Pojedynczy zabieg",
        category: "Endermologia LPG Alliance",
        shortDescription: "Pojedynczy zabieg endermologia LPG to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "200",
        duration: "60"
    },
    {
        id: "46",
        name: "Pakiet 5 zabiegów",
        category: "Endermologia LPG Alliance",
        shortDescription: "Pakiet 5 zabiegów endermologia LPG to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "900",
        duration: "-"
    },
    {
        id: "47",
        name: "Pakiet 10 zabiegów",
        category: "Endermologia LPG Alliance",
        shortDescription: "Pakiet 10 zabiegów endermologia LPG to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "1800",
        duration: "-"
    },
    {
        id: "48",
        name: "Pakiet 15 zabiegów",
        category: "Endermologia LPG Alliance",
        shortDescription: "Pakiet 15 zabiegów endermologia LPG to zabieg kosmetyczny, który polega na nadaniu twarzy odpowiedniego wyglądu i proporcji.",
        price: "2600",
        duration: "-"
    },
]