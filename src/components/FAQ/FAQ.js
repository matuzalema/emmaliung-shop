import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

//import styles
import "./FAQ.scss";

const FAQ = () => (
    <div className="faq">
        <h1 className="faq-header"> FAQ</h1>
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header >
                    <Accordion.Toggle class="button-faq" as={Button} variant="link" eventKey="0">
                        Jaki jest czas realizacji zamówienia?
          </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Zamówienia pobraniowe złożone w dni robocze do godziny 15 są kierowane do realizacji tego samego dnia. Zamówienia opłacone płatnością elektroniczną lub opłacone przelewem bankowym do godziny 15 są kierowane do realizacji tego samego dnia. Ze względów logistycznych zamówienia złożone po godzinie 15 mogą zostać skierowane do realizacji w następnym dniu roboczym. Zamówienia składane w dni wolne od pracy są realizowane w pierwszy dzień roboczy.
          </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        W jakim czasie należy zapłacić za zamówienie?
          </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Zamówienie z wybraną opcją płatności PayU należy opłacić od razu po złożeniu zamówienia, przechodząc do systemu płatności elektronicznej. Zamówienie z wybraną opcją płatności przelewu tradycyjnego należy opłacić najpóźniej do 48 godzin od momentu złożenia zamówienia. Numer konta bankowego do przelewu jest generowany po złożeniu zamówienia i przesyłany na adres mailowy przypisany do zamówienia. W tytule przelewu należy wpisać numer zamówienia. Wykonanie przelewu na konto sklepu po ustalonym czasie 48 godzin będzie się wiązało z automatyczną anulacją zamówienia. Opłatę za zamówienie z wybraną opcją płatności za pobraniem uiszcza się w momencie odbioru paczki od kuriera.
          </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        Jak można zapłacić za zamówienie?
          </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>Opłaty za zamówienie można dokonać poprzez system płatności elektronicznej PayU, tradycyjnym przelewem bankowym, za pobraniem oraz ratalnie poprzez system rat online banku Alior.
          </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                        Jaki jest czas doręczenia zamówienia?
          </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>Paczki doręczane są firmą spedytorską na zlecenie właściciela marki Photo inventions. Przewidywany czas doręczenia wynosi od 24 do 48 godzin od momentu skierowania zamówienia do realizacji. Przesyłki doręczane są od poniedziałku do piątku (za wyjątkiem dni świątecznych).
          </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                        Czy można opóźnić /przyspieszyć dostawę?
          </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                    <Card.Body>Zamówienia realizowane są zgodnie z kolejnością ich składania i nie istnieje możliwość priorytetowego skierowania zamówienia do realizacji. Nie istnieje możliwość opóźnienia zamówienia lub dostarczenia w preferowanych przez klienta dniach i godzinach. Informacje podawane w komentarzu zamówienia dotyczące czasu realizacji nie są przekazywane kurierowi i nie mają wpływu na czas dostarczenia przesyłki.
          </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="5">
                        Gdzie znaleźć informacje dotyczące statusu przesyłki?
          </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                    <Card.Body>W momencie przekazania paczki kurierowi do doręczenia generowany jest identyfikacyjny numer listu przewozowego, dzięki któremu na stronie spedytora można sprawdzić status przesyłki. W celu zasięgnięcia szczegółowych informacji dotyczących doręczenia paczki można kontaktować się z biurem obsługi spedytora podając numer listu przewozowego, który zostanie przysłany drogą poczty elektronicznej na adres mailowy przypisany do zamówienia.
          </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="6">
                        Co robić w przypadku uszkodzenia towaru podczas przesyłki?
          </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="6">
                    <Card.Body>Paczka odbierana od kuriera nie powinna nosić śladów naruszenia, tj. wgnieceń, pęknięć, a taśma nie powinna być nacięta czy oderwana. W przypadku zamówienia pobraniowego, jeżeli zaistniały podejrzenia dotyczące uszkodzenia paczki podczas transportu, lepiej nie odbierać paczki zwracając ją kurierowi. W przypadku zamówienia opłaconego, jeżeli zaistniały podejrzenia dotyczące uszkodzenia paczki podczas transportu, należy w obecności kuriera spisać protokół szkody. Jeżeli paczka zostanie odebrana i dopiero po otworzeniu okaże się, że produkt nosi ślady uszczerbku nabytego podczas transportu, należy niezwłocznie skontaktować się z kurierem poprzez infolinię spedytora i zlecić sporządzenie protokołu szkody. Okres zlecenia wykonania protokołu szkody jest uzależniony od spedytora i określony w regulaminie przewoźnika. Uszkodzenie towaru odebranego należy zgłosić za pośrednictwem poczty elektronicznej przesyłając na adres photoInventions@gmail.pl zaskanowany protokół szkody, poglądowe zdjęcia unaoczniające uszczerbek, jak również numer zamówienia oraz krótki opis wyjaśniający zaistniałe zdarzenie. W odpowiedzi zwrotnej zostaną przekazane instrukcje dotyczące dalszego postępowania.
          </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    </div>
);

export default FAQ;

