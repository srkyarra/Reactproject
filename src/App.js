import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Container, Header, Statistic, Segment, Grid, Icon, Form,Button } from 'semantic-ui-react';

function App() {
  return (
    <Container>
      <Header as='h1'>Budget</Header>


      <Statistic size='small'>
        <Statistic.Label>Your balance:</Statistic.Label>
        <Statistic.Value>2,550.53</Statistic.Value>
      </Statistic>
      <h1> helooooooo</h1>

      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label styele={{ textAlign: 'left' }}>
                  Incoming:
                </Statistic.Label>
                <Statistic.Value>1,045.50</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label styele={{ textAlign: 'left' }}>
                  Expenses:
                </Statistic.Label>
                <Statistic.Value>623.50</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'>History</Header>
      <Segment color='red'>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>something</Grid.Column>

            <Grid.Column width={3} textAlign='right'>$10.00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered>

              </Icon>
              <Icon name='trash' bordered></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='red'>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>something</Grid.Column>

            <Grid.Column width={3} textAlign='right'>$20.00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered>

              </Icon>
              <Icon name='trash' bordered></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='red'>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>something</Grid.Column>

            <Grid.Column width={3} textAlign='right'>$30.00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered>

              </Icon>
              <Icon name='trash' bordered></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Header as='h3'>
        add new transaction
      </Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input
            icon='tags'
            width={12}
            label=''
            placeholder='New shinny thing' />
          <Form.Input
            width={4}
            Label='value'
            placeholder="100.00"
            icon="dollar"
            iconPosition='left'
          />
        </Form.Group>
        <Button.Group style={{marginTop:20}}>
          <Button>cancel</Button>
          <Button.Or/>

          <Button primary>ok</Button>
        </Button.Group>

      </Form>
    </Container>







  );
}

export default App;
