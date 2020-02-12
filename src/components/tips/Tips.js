import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

//import styles
import "./Tips.scss";

const Tips = () => (
    <div className="faq">
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header >
                    <Accordion.Toggle class="button-faq" as={Button} variant="link" eventKey="0">
                        Co zrobić, żeby dostać wózek za darmo?
          </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Dokładamy wszelkich starań, by nasi klienci byli zadowoleni, dlatego wystarczy złożyć darowiznę na nasze konto w wysokości min 14600$, a wózek z promocji będziesz mogła otrzymać za darmo.
          </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Czy mogę wcześniej pojeździć w wózku i sprawdzić jego wytrzymałość?
          </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body> Nasz producent daje gwarancję do 250kg. Jeśli Pani waży więcej nie ma problemu, by przetestowała Pani wybrany model. Proponuję zjazd z górki, ponieważ będzie Pani mogła od razu przekonac się jak wytrzymałe są hamulce w naszych wózkach.
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
                    <Card.Body>Można dobudować garaż, albo zasiać trawę przed naszym nowym domem. Możliwości jest wiele, tak, by każdy klient mógł w dogodny dla siebie sposób uregulować płatności.
          </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                       Jaki jest czas doręczenia wózka?
          </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>To zależy w jakim stanie chce go Pani dostać. Jeśli bardzo zależy Pani na czasie, możemy wysłać niezwłocznie dołączając do zestawu proszek do prania, nici i inne potrzebne akcesoria.
          </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                        Czy można przyspieszyć dostawę?
          </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                    <Card.Body>Oczywiście, im szybciej Pani przyjedzie, tym szybciej otrzyma Pani dostawę do rąk własnych.
          </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="5">
                        Co zrobić jeśli wózek nie spełni moich oczekwiań
          </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                    <Card.Body>W zależności po poziomu niezadowolenia, należy niezwłoczenie zgłosić się do psychologa lub psychiatry.
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
                    <Card.Body>Paczka odbierana od kuriera nie powinna nosić śladów naruszenia, tj. wgnieceń, pęknięć, a taśma nie powinna być nacięta czy oderwana. W przypadku zamówienia pobraniowego, jeżeli zaistniały podejrzenia dotyczące uszkodzenia paczki podczas transportu to Pani problem.
          </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    </div>
);

export default Tips;


