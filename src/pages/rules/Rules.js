import React from 'react';

import Container from 'components/Container'
import TextWithBackground from 'components/TextWithBackground'

import styles from './Rules.module.css'


const TermsAndConditions = () => (
    <TextWithBackground className={[styles['rules-content']]}>
        <h2>Regulamin</h2>
        <br/>

        <h5>REGULAMIN SERWISU INTERNETOWEGO MODRY MŁYN</h5>
        <h6>z 01.12.2023</h6>
        <br/>

        <h5>Wstęp</h5>
        <p>
            Realizując postanowienia Ustawy z dnia 18 lipca 2002r. o świadczeniu usług drogą elektroniczną
            (Dz. U. 2002r. Nr 144 poz. 1204 z zm.) VIVA Sylwia Topolewska jako Właściel Serwisu wprowadza
            niniejszy Regulamin określający w szczególności rodzaje i zakres świadczonych usług droga
            elektroniczną, warunki świadczenia tych usług, w tym wymagania techniczne oraz zakazy dostarczania
            treści bezprawnych, politykę prywatności, warunki zawierania i rozwiązywania umów o świadczenie
            usług droga elektroniczną, warunki przesyłania informacji handlowej oraz tryb postępowania
            reklamacyjnego.
        </p>

        <h5>I. Definicje</h5>
        <p>
            Użyte w Regulaminie pojęcia oznaczają:
            <ol>
                <li>
                    <b>Klient</b> - osoba fizyczna, osoba prawna lub jednostka organizacyjna nie będącą osobą prawną,
                    której przepisy szczególne przyznają zdolność prawną, która dokonuje Zamówienia w ramach Serwisu.
                    Klientem to osoba fizyczna, która ukończyła 18 lat lub nie ukończyła 18 lat, ale nie ukończyła 13
                    lat w zakresie, w jakim może nabywać prawa i zaciągać obowiązki zgodnie z przepisami powszechnie
                    obowiązującego prawa.
                </li>
                <li>
                    <b>Kodeks Cywilny</b> - ustawa z dnia 23 kwietnia 1964 r. (Dz. U. Nr 16, poz. 93 ze zm.).
                </li>
                <li>
                    <b>Regulamin</b> - niniejszy Regulamin świadczenia usług drogą elektroniczną w ramach serwisu
                    internetowego Modry Młyn.
                </li>
                <li>
                    <b>Serwis internetowy (Serwis)</b> - serwis internetowy dostępny pod www.modrymlyn.pl, za
                    pośrednictwem którego Klient może zapoznać się z ofertą Towarów i składać Zamówienia. Pojęcie to
                    obejmuje w szczególności stronę WWW i jej zakładki: Menu, Oferta oraz Catering.
                </li>
                <li>
                    <b>Użytkownik</b> - osoba fizyczna posiadająca zdolność do czynności prawnych lub ograniczoną
                    zdolność do czynności prawnych, osoba prawna lub jednostka posiadająca zdolność do czynności
                    prawnych, która korzysta z Serwisu.
                </li>
                <li>
                    <b>Ustawa o szczególnych warunkach sprzedaży konsumenckiej</b> - ustawa z dnia 27 lipca 2002 r. o 
                    szczególnych warunkach sprzedaży konsumenckiej oraz o zmianie Kodeksu Cywilnego (Dz. U. Nr 141,
                    poz. 1176 ze zm.).
                </li>
                <li>
                    <b>Ustawa o świadczeniu usług drogą elektroniczną</b> - ustawa z dnia 18 lipca 2002 r. o świadczeniu
                    usług drogą elektroniczną (Dz. U. Nr 144, poz. 1204 ze zm.).
                </li>
                <li>
                    <b>Zamówienie</b> - oświadczenie woli Klienta, zmierzające bezpośrednio do zawarcia Umowy sprzedaży,
                    określające w szczególności rodzaj i liczbę Towaru.
                </li>
                <li>
                    <b>Płatność</b> - czynność polegająca na zapłacie wcześniej ustalonej ceny za zamówienie w określony
                    w Regulaminie sposób podczas składania zamówienia.
                </li>
            </ol>
        </p>

        <h5>II. Postanowienia ogólne</h5>
        <p>
            <ol>
                <li>
                    Niniejszy Regulamin określa zasady korzystania z serwisu internetowego dostępnego pod www.modrymlyn.pl.
                </li>
                <li>
                    Niniejszy Regulamin jest regulaminem, o którym mowa w art. 8 Ustawy o świadczeniu usług drogą
                    elektroniczną.
                </li>
                <li>
                    Niniejszy Regulamin jest skierowany do Klientów i Użytkowników korzystających z Serwisu.
                </li>
                <li>
                    Użytkownik oraz Klient zobowiązują się do przestrzegania wszystkich postanowień Regulaminu,
                    korzystania z Serwisu w sposób zgodny z prawem i bez naruszania uzasadnionych interesów właściciela
                    Serwisu. Użytkownik oraz Klient nie będą podejmowali czynności, które mogłyby narazić właściciela
                    Serwisu lub Serwis na szkodę majątkową lub wizerunkową.
                </li>
                <li>
                    Serwis internetowy, działający pod www.modrymlyn.pl, prowadzony jest przez Sylwię Topolewską prowadzącą
                    działalność gospodarczą pod firmą „VIVA Sylwia Topolewska”, wpisaną do Centralnej Ewidencji i Informacji
                    o Działalności Gospodarczej (CEIDG) prowadzonej przez ministra właściwego ds. gospodarki, NIP 5860058616,
                    REGON 190182918.
                </li>
                <li>
                    Użytkownik korzystający z Serwisu staje się Klientem po złożeniu Zamówienia.
                </li>
                <li>
                    Klient oświadcza, że podane przez niego dane w formularzu zamówienia, w szczególności adresowe oraz adres
                    email są zgodne, prawidłowe i kompletne. W przypadku podania fałszywych danych lub nienależących do
                    Klienta, właściciel Serwisu może usunąć zamówienie Klienta oraz zawiadomić odpowiednie organy państwowe.
                </li>
                <li>
                    Wyrażenie zgody na przestrzeganie niniejszego Regulaminu przy uruchamianiu Usługi, przy użyciu Systemu
                    Informatycznego jest równoznaczne z pełną akceptacją warunków Regulaminu bez konieczności sporządzenia
                    odrębnej umowy.
                </li>
            </ol>
        </p>

        <h5>III. Zasady korzystania z Serwisu Internetowego</h5>
        <p>
            <ol>
                <li>
                    Warunkiem korzystania z Serwisu jest zapoznanie i zaakceptowanie niniejszego Regulaminu.
                </li>
                <li>
                    Warunkiem złożenia Zamówienia przez Klienta jest rejestracji podanie prawdziwych i kompletnych danych
                    osobowych oznaczonych jako obowiązkowe, oraz zatwierdzenie obowiązku zapłaty za złożone Zamówienie.
                </li>
                <li>
                    Właściciel Serwisu zastrzega sobie prawo potwierdzenia złożenia Zamówienia oraz poprawności danych za
                    pomocą telefonu lub poczty elektronicznej. W przypadku niemożliwości potwierdzenia powyższych informacji,
                    ich niekompletności lub podejrzenie nieprawdziwości, właściciel serwisu ma prawo do anulowania Zamówienia
                    za podaniem przyczyny.
                </li>
                <li>
                    Właściciel Serwisu może pozbawić Użytkownika prawa do korzystania z Serwisu, jak również może ograniczyć
                    jego dostęp do części lub całości zasobów Serwisu, ze skutkiem natychmiastowym, w przypadku naruszenia
                    przez Klienta Regulaminu, a w szczególności, gdy Klient:
                    <ol type="a">
                        <li>
                            podał podczas składania Zamówienia dane niezgodne z prawdą, niedokładne lub nieaktualne,
                            wprowadzające w błąd lub naruszające prawa osób trzecich;
                        </li>
                        <li>
                            dopuścił się za pośrednictwem sklepu internetowego naruszenia dóbr osobistych osób trzecich,
                            w szczególności dóbr osobistych innych Klientów Serwisu;
                        </li>
                        <li>
                            dopuści się innych zachowań, które zostaną uznane przez VIVA Sylwia Topolewska za zachowania
                            niezgodne z obowiązującymi przepisami prawa lub ogólnymi zasadami korzystania z sieci Internet
                            lub godzące w dobre imię VIVA Sylwia Topolewska;
                        </li>
                    </ol>
                </li>
                <li>
                    Osoba, która została pozbawiona prawa do korzystania ze sklepu internetowego, nie może powtórnie korzystać z
                    Serwisu w szczególności składać Zamówienia bez uprzedniej zgody właściciela Serwisu.
                </li>
                <li>
                    W celu zapewnienia bezpieczeństwa przekazu komunikatów i danych w związku ze świadczonymi w ramach Serwisu
                    usługami, Serwis podejmuje środki techniczne i organizacyjne odpowiednie do stopnia zagrożenia bezpieczeństwa
                    świadczonych usług, w szczególności środki służące zapobieganiu pozyskiwania i modyfikacji przez osoby
                    nieuprawnione danych osobowych przesyłanych w Internecie.
                </li>
                <li>
                    Klient zobowiązany jest w szczególności do:
                    <ol type="a">
                        <li>
                            niedostarczania i nieprzekazywania treści zabronionych przez przepisy prawa, np. treści propagujących
                            przemoc, zniesławiających lub naruszających dobra osobiste i inne prawa osób trzecich;
                        </li>
                        <li>
                            korzystania z Serwisu w sposób nie zakłócający jego funkcjonowania, w szczególności poprzez użycie
                            określonego oprogramowania lub urządzeń;
                        </li>
                        <li>
                            niepodejmowania działań takich jak: rozsyłanie lub umieszczanie w ramach Serwisu niezamówionej
                            informacji handlowej (spam);
                        </li>
                        <li>
                            korzystania ze Serwisu w sposób nieuciążliwy dla innych klientów oraz dla właściciela Serwisu;
                        </li>
                        <li>
                            korzystania z wszelkich treści zamieszczonych w ramach Serwisu jedynie w zakresie własnego użytku
                            osobistego;
                        </li>
                        <li>
                            korzystania z Serwisu w sposób zgodny z przepisami obowiązującego na terytorium Rzeczypospolitej
                            Polskiej prawa, postanowieniami Regulaminu, a także z ogólnymi zasadami korzystania z sieci Internet;
                        </li>
                    </ol>
                </li>
                <li>
                    Aby korzystać z Serwisu, w szczególności aby złożyć Zamówienie za pomocą Serwisu, Użytkownik musi spełnić
                    niniejsze Wymagania Techniczne:
                    <ol type="a">
                        <li>
                            użytkownik musi mieć dostęp do Internetu za pomocą odpowiedniego urządzenie końcowego (telefon,
                            komputer, tablet);
                        </li>
                        <li>
                            urządzenie końcowe Użytkownika musi pozwalać na dostęp do Internetu za pomocą przeglądarki
                            internetowej (Safari, Chrome, Internet Explorer, Edge, Opera, Firefox) w możliwie najnowszej
                            wersji oprogramowania.
                        </li>
                    </ol>
                </li>
                <li>
                    Użytkownik ma prawo do zapoznania się z ogólnodostępną Polityką Prywatności obowiązująca w ramach Serwisu
                    i znajdującą się w zakładce Regulamin na stronie WWW Serwisu.
                </li>
            </ol>
        </p>

        <h5>IV. Procedura składania Zamówień w Serwisie internetowym</h5>
        <p>
            <ol>
                <li>
                    W celu zawarcia Umowy sprzedaży za pośrednictwem Serwisu należy wejść na stronę internetową www.modrymlyn.pl,
                    przejść do zakładki Catering, dokonać wyboru spośród oferowanych produktów podejmując kolejne czynności
                    techniczne w oparciu o wyświetlane Klientowi komunikaty oraz informacje dostępne na stronie. Umowę uważa się
                    za zawartą, gdy przedpłata rezerwacyjna o wartości dziesięciu procent całkowitego kosztu Zamówienia zostanie
                    uiszczona, a także gdy właściciel Serwisu potwierdzi Klientowi poprawne przyjęcie zamówienia.
                </li>
                <li>
                    Wybór zamawianych produktów przez Klienta jest dokonywany poprzez ich dodanie do koszyka.
                </li>
                <li>
                    W trakcie składania Zamówienia - do momentu naciśnięcia przycisku „Zamawiam” - Klient ma możliwość modyfikacji
                    wprowadzonych danych oraz w zakresie wyboru zamawianych produktów. W tym celu należy kierować się wyświetlanymi
                    Klientowi komunikatami oraz informacjami dostępnymi na stronie.
                </li>
                <li>
                    W celu wysłania Zamówienia konieczne jest zapoznanie się z treścią Regulaminu, podanie danych osobowych
                    oznaczonych jako obowiązkowe oraz naciśnięcie przycisku „Zamawiam”.
                </li>
                <li>
                    Wysłanie przez Klienta Zamówienia stanowi oświadczenie woli zawarcia z VIVA Sylwia Topolewska Umowy sprzedaży,
                    zgodnie z treścią Regulaminu.
                </li>
                <li>
                    Po poprawnym złożeniu zamówienia przez Klienta, Serwis wyśle wiadomość e-mail na pod podany adres mailowy Klienta
                    podsumowanie Zamówienia zawierające dane do Zamówienia wprowadzone przez Klienta w ramach składania Zamówienia,
                    oraz instrukcje konieczne do uiszczenia przedpłaty oraz dalsze kroki związane z przebiegiem i odbiorem Zamówienia.
                </li>
                <li>
                    Umowa sprzedaży zawierana jest w języku polskim, o treści zgodnej z Regulaminem.
                </li>
                <li>
                    VIVA Sylwia Topolewska ma prawo anulować Zamówienie zgodnie z zasadami opisanymi w punkcie III niniejszego Regulaminu
                    lub gdy dostępność produktów zawartych z złożonym Zamówieniu ulegnie zmianie.
                </li>
            </ol>
        </p>

        <h5>V. Odstąpienie od Umowy przez Klienta</h5>
        <p>
            <ol>
                <li>
                    Klient ma prawo odstąpić od Umowy przed spełnieniem świadczenia przez VIVA Sylwia Topolewska.
                </li>
                <li>
                    Aby odstąpić od zawartej Umowy, Klient musi przed przystąpieniem do realizacji Zamówienia przez VIVA Sylwia Topolewska
                    jednoznacznie poinformować właściciela Serwisu o chęci odstąpienia od Umowy. Kontakt za pomocą poczty mailowej nie jest
                    wystarczający do złożenia chęci odstąpienia od Umowy i powinien być złożony poprzez kontakt telefoniczny.
                </li>
                <li>
                    Jeśli Klient dokonał przedpłaty na rzecz Zamówienia, VIVA Sylwia Topolewska zwróci środki na wskazane przez Klienta
                    konto bankowe bądź na konto bankowe adresata przedpłaty Zamówienia. Termin zlecenia zwrotu nie przekroczy 14 dni
                    roboczych.
                </li>
            </ol>
        </p>

        <h5>VI. Reklamacje</h5>
        <p>
            <ol>
                <li>
                    VIVA Sylwia Topolewska jako sprzedawca odpowiada wobec Klienta będącego konsumentem w rozumieniu art. 221 Kodeksu
                    Cywilnego, za niezgodność z Umową sprzedaży Towaru zakupionego przez tego konsumenta, w zakresie określonym Ustawą
                    o szczególnych warunkach sprzedaży konsumenckiej.
                </li>
                <li>
                    Reklamacje, wynikające z naruszenia praw Klienta gwarantowanych prawnie, lub na podstawie niniejszego Regulaminu,
                    należy kierować na adres biuro@mlynmodry.pl. VIVA Sylwia Topolewska zobowiązuje się do rozpatrzenia każdej reklamacji
                    w terminie do 14 dni, a gdyby to nie było możliwe, do poinformowania w tym okresie Klienta, kiedy reklamacja zostanie
                    rozpatrzona.
                </li>
                <li>
                    Reklamacja powinna zawierać dane identyfikujące Klienta (imię, nazwisko), dane kontaktowe Klienta (telefon, adres
                    e-mail), dane zamówienia (datę złożenia zamówienia, datę preferowanego odbioru, datę realizacji zamówienia, zamówione
                    produkty, numer identyfikacyjny zamówienia) oraz szczegółowy opis składanych zastrzeżeń.
                </li>
                <li>
                    Klient zobowiązany jest niezwłocznie powiadomić właściciela Serwisu o wszelkich nieprawidłowościach lub przerwach w
                    funkcjonowaniu Serwisu.
                </li>
            </ol>
        </p>

        <h5>VII. Polityka Prywatności</h5>
        <p>
            <ol>
                <li>
                    Szczegółowe informacje dotyczące Polityki Prywatności w szczególności zasad przetwarzania danych osobowych dostępne
                    są w zakładce Regulamin na stronie WWW Serwisu.
                </li>
            </ol>
        </p>

        <h5>VIII. Postanowienia końcowe</h5>
        <p>
            <ol>
                <li>
                    Rozstrzyganie ewentualnych sporów powstałych pomiędzy VIVA Sylwia Topolewska a Klientem, który jest konsumentem
                    w rozumieniu art. 221 Kodeksu Cywilnego, zostaje poddane sądom właściwym zgodnie z postanowieniami właściwych
                    przepisów Kodeksu postępowania cywilnego.
                </li>
                <li>
                    Rozstrzyganie ewentualnych sporów powstałych pomiędzy VIVA Sylwia Topolewska a Klientem, który nie jest
                    konsumentem w rozumieniu art. 221 Kodeksu Cywilnego Kodeksu Cywilnego, zostaje poddane sądowi właściwemu
                    ze względu na siedzibę VIVA Sylwia Topolewska.
                </li>
                <li>
                    W sprawach nieuregulowanych w niniejszym Regulaminie mają zastosowanie przepisy Kodeksu cywilnego, przepisy
                    Ustawy o świadczeniu usług drogą elektroniczną oraz inne właściwe przepisy prawa polskiego.
                </li>
                <li>
                    Właściciel Serwisu zastrzega sobie prawo zmiany Regulaminu bez powiadomienia Użytkownika. Brak akceptacji
                    obowiązującego Regulaminu jest równoznaczny z niemożliwością korzystania przez Użytkownika z Serwisu oraz
                    oferowanych przez niego usług w szczególności składania Zamówień.
                </li>
            </ol>
        </p>
    </TextWithBackground>
);

const Privacy = () => (
    <TextWithBackground>
        <h2>Polityka Prywatności</h2>
    </TextWithBackground>

);

const Rules = () => (
    <>
    <Container> 
        <TermsAndConditions/>
        <Privacy/>
    </Container>
    </>
);

export default Rules;
