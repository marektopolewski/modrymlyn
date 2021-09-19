import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { ArrowRightCircle, ArrowLeftCircleFill } from 'react-bootstrap-icons';

import './Photos.css'

export default class Photos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            headers: [
                "Pierogi z dynią 🎃",
                "Krem z pieczonych buraków i malin",
                "Nasze torty 🎂",
                "Sezon na rydze i dynię 🎃 🍄",
                "💯 dni naszej działalności!",
                "Nasi dzielni kucharze 👨‍🍳 👨‍🍳 👨‍🍳 ",
                "Imprezy okolicznościowe 🎈🥳🎉",
                "Wege plińce",
                "Okoń z Lipusza 🐟",
                "Tajemnicze pierogi 🥟",
                "Idealny drink na wakacyjny sobotni wieczór 🍸😎",
                "Wiosenny schab sous-vide z warzywami 🌿🌼",
                "🦆 Piekłô kaczka 🦆",
                "Frikasé",
                "Łakocie dla każdego! 😋",
                "Tym czasem nad stawem... 🌤",
                "Witómë! 😍",
                "Bąbelwòda 🥤",
                "Szmórowóné krowié miãso",
                "Kaszubskie a <i style=\"color:green\" }}>Wege</i>",
                "Sledze z pùlkama",
                "W przeddzień otwarcia...",
            ],
            descriptions: [
                [
                    "Dzisiaj polecają się do spróbowania:",
                    "Pierogi z dynią podawane z tymiankową śmietanką 🌿 🎃"
                ],
                [
                    "Krem z pieczonych buraków i malin...",
                    "Z kozim serem, z oliwą rozmarynową i z chipsem z jarmużu..."
                ],
                [
                    "Nasze 🍰CIASTA🍰 widzicie na co dzień, ale nasze 🎂TORTY🎂 są tylko na specjalne zamówienia.",
                    "Uchylamy więc rąbka tajemnicy 🤫",
                    "Wyglądają bajecznie! Smakują obłędnie! ❤️‍🔥"
                ],
                [
                    "Zaczynamy sezon na rydze i dynię 😋",
                    "🎃Placki z dyni z rydzami w śmietanowym sosie",
                    "🌶️ Pikantna zupa z dyni z oliwą rozmarynową"
                ],
                [
                    "100 cudownych dni, kiedy to każdego dnia dawaliście nam siłę i wiarę w to, że idziemy w dobrą stronę.",
                    "Nie uniknęliśmy oczywiście wpadek, za co przepraszamy i obiecujemy poprawę 😇",
                    "Dostaliśmy od Was 💯 opinii, które są dowodem na to, że nie tylko nas lubicie, ale nawet warto dla nas wiersze pisać! ❤️💛💜💚"
                ],
                [
                    "👨‍🍳 Mariusz 👨‍🍳 Marcin 👨‍🍳 Maciej",
                    "Oto kucharze, którzy zmierzyli się z wyzwaniem stworzenia w Modrym Młynie kuchni kaszubskiej w nowoczesnej odsłonie 🌼🌼🌼",
                    "📜 To Oni przeszukali stosy książek i wysłuchali opowieści babć i dziadków w poszukiwaniu tradycji kuchni kaszubskiej",
                    "🦆 To Oni codziennie przygotowują dla Was mięsa tak, że smakują jak nigdzie indziej",
                    "🔥 To oni potrafią tak usmażyć plice, że to tradycyjne danie zaskakuje i zachwyca",
                    "🌿 To Oni nocami obmyślają te piękne dekoracje, które ozdabiają nasze dania",
                    "❤️ To dzięki nim zaistniał na mapie naszego miasta Modry Młyn"
                ],
                [
                    "Dla naszych gości dostępna już jest kameralna sala na imprezy okolicznościowe 🎈🥳🎉",
                    "Musicie zobaczyć niesamowitą, prawie 10-metrową grafikę, którą zaprojektował Paweł Schulz i piękny wystrój, który zaplanowała w najmniejszym szczególe Ola Gago Home",
                    "Dziękujemy! Jesteście najlepsi!"
                ],
                [
                    "Plińce w wydaniu wegetariańskim polecają się w zestawie z sielską maślanką 😋",
                    "Serwowane w ogródku, przy stoliku z widokiem na staw. Korzystajmy z pięknej pogody, ile się da 🌤️☀️"
                ],
                [
                    "Jeszcze wczoraj pływał w czystych wodach jeziora koło Lipusza, a dzisiaj jest już na naszym stole! 🎣",
                    "🐟 Świeży okoń 🐟 Nie tylko przepyszny w smaku, ale także bardzo wartościowy.",
                    "Nieocenione źródło białka, dobrych tłuszczów i tych aminokwasów, których ludzki organizm sam nie potrafi wyprodukować 💪",
                    "*Uwaga - ryby mają ości 😉"
                ],
                [
                    "Zapraszamy na pierogi! 🥟🥟🥟",
                    "W tym tygodniu polecamy śliczne zielone pierożki wypełnione... Wiecie jakim farszem? Dlaczego ciasto jest tak zielone? Smakowaliście już?"
                ],
                [
                    ""
                ],
                [
                    "Dania sezonowe są pyszne, świeże i ... wytęsknione, bo dostępne tylko przez krótki okres w roku 🌻🌻🌻",
                    "Więc w ten weekend nacieszamy się świeżym bobem, młodą marchewką, fasolką szparagową i ziołami pachnącymi słońcem ☀️",
                    "Do tego soczysty schab sous-vide i młode ziemniaczki. Aż pachnie latem... 🌿🌼🌿"
                ],
                [
                    "Przedstawiamy dostojną królową naszego menu 👑",
                    "Serwowana w towarzystwie kaszubskiego rarytasu - kiszki gryczanej oraz słodko-kwaśnych buraczków, polana sosem pieczeniowym z nutą pomarańczy..."
                ],
                [
                    "Frikasé zna zapewne każdy, kto był na kaszubskim weselu, chrzcinach czy komunii 🌼",
                    "Ale może nie każdy wie, że sto lat temu sos wcale nie był z rodzynkami, lecz z agrestem! My powracamy do tej tradycji 😍"
                ],
                [
                    "Większość łasuchów zapewne już miała okazję spróbować naszych pysznych ciast 😋🍰",
                    "Ale czy wiedzieliście, że nasza niesamowita Karolina może przygotować taaaki tort na Wasze zamówienie!",
                    "Pyszny, czekoladowy, mocno alkoholowy - na specjalną okazję 🎂💐🎁"
                ],
                [
                    "Kiedy pogoda dopisuje, to nawet najbardziej pracowici Kaszëbi chetnię odpoczną nad stawem w parku Starowiejskim.",
                    "🌳 📵 🏝"
                ],
                [
                    "I nadszedł nareszcie ten dzień, kiedy możemy Was zaprosić do środka!",
                    "I pochwalić się wnętrzem, które powstało dzięki wspaniałej Oli Gago Home i niezastąpionej Uli Ulubione studio "
                    + "oraz całej ekipie naszych cudownych pomocników, którzy włożyli mnóstwo pracy i serca, "
                    + "aby pomóc nam zrealizować nasze marzenie o rodzinnej, klimatycznej restauracji.",
                    "Dziękujemy ❤️❤️❤️"
                ],
                [
                    "Czytaj: bombel łeda = 🍋 + 🧊  + 🍓",
                    "Cudownie orzeźwiająca. Naturalna. Pyszna",
                    "Nie tylko na kaszubskie podniebienie 😋"
                ],
                [
                    "Kaszubska pieczeń wołowa, która została wpisana na prestiżową listę produktów tradycyjnych 🏆",
                    "Jej przygotowanie wymaga: tuzin składników najwyższej jakości, kopę czasu, dużą garść miłości kucharza 👨‍🍳",
                    "Czy warto? Gwarantujemy, że warto! ❤️‍🔥"
                ],
                [
                    "Czy w kuchni kaszubskiej znajdzie się coś dla wegetarian? U nas - tak! 🥗",
                    "Chrupiące kuleczki z kaszy gryczanej i boczniaka wypełnione kozim serem prosto z gospodarstwa \"Kaszubska Koza\" 🐐🐐🐐"
                ],
                [
                    "Nasza narodowa specjalność - śledzie 🐟🐟🐟",
                    "Mówi się, że kaszubskie kucharki potrafią przygotować je na 1000 sposobów!"
                ],
                [
                    "Czy macie ochotę skosztować dań kuchni kaszubskiej w nowoczesnej odsłonie? 🌼",
                    "Nasi kucharze przez wiele miesięcy poszukiwali receptur, składników i dostawców, aby stworzyć kartę dań, która przeniesie Was do magicznej krainy kaszubskich smaków 🍓"
                ]
            ]
        }
    }

    render() {
        return (
            <Container className="wrapper">
            <Carousel className="carousel"
                nextIcon={<ArrowRightCircle color="black" size={50} className="svgShadow" />}
                prevIcon={<ArrowLeftCircleFill color="black" size={50} className="svgShadow" />}
            >
                { this.state.headers.map((_, i) => {
                    return (
                        <Carousel.Item key={i}>
                            <Image className="d-block image" alt={`Zdjęcie ${i}`} fluid
                                   src={require(`../assets/photo-${this.state.headers.length - i}.jpeg`)?.default} />
                            <Carousel.Caption style={{ color:'black' }}>
                                <h3 dangerouslySetInnerHTML={{__html: this.state.headers[i]}}></h3>
                                { this.state.descriptions[i].map((desc,j) => {
                                    return <p key={j}>{desc}</p>
                                }) }
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                }) }
            </Carousel>
            </Container>
        );
    }
}
