import { Container, Form, Grid, Header, Icon, Segment, Statistic, Button } from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <Container>

      <Header as="h1">Budget</Header>

      <Statistic size="small">
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>2554.23</Statistic.Value>
      </Statistic>

      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label style={{ textAlign: "left" }}>Income:</Statistic.Label>
                <Statistic.Value>2554.23</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column><Statistic size="tiny" color="red">
              <Statistic.Label style={{ textAlign: "left" }}>Expenses:</Statistic.Label>
              <Statistic.Value>554.65</Statistic.Value>
            </Statistic></Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as="h3">History</Header>
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">Something</Grid.Column>
            <Grid.Column width={3} textAlign="right">$10.00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color="green">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">Something else</Grid.Column>
            <Grid.Column width={3} textAlign="right">$110.50</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">Something else altogether</Grid.Column>
            <Grid.Column width={3} textAlign="right">$9.99</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as={"h3"}>Add new transaction</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input icon="tags" width={12} label="Description" placeholder="New shiny thing"></Form.Input>
          <Form.Input width={4} label="Value" placeholder="100.00" icon="dollar sign" iconPosition="left"></Form.Input>
        </Form.Group>
        <Button.Group style={{ marginTop: 20 }}>
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary>Ok</Button>
        </Button.Group>
      </Form>
    </Container>
  );
}

export default App;
