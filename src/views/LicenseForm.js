import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import * as api from '../io/api'

class LicenseForm extends React.Component {
  state = {
    document: 'cbpq',
    cbpq: '',
    cpf: ''
  }
  handleSubmit = () => {
    const { document, cbpq, cpf } = this.state
    const value = document === 'cbpq' ? cbpq : cpf
    this.props.history.push(`/license/${document}/${value}`)
  }
  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  };
  render() {
    const { document, cbpq, cpf } = this.state
    return (
      <Form>
        <FormGroup>
          <Label for="documentType">Documento</Label>
          <Input
            type="select"
            name="documentType"
            id="documentType"
            value={document}
            onChange={e => this.handleInputChange(e)}>
            <option>CBPQ</option>
            <option>CPF</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for={document}></Label>
          <Input
            type="text"
            name={document}
            id={document}
            value={document === 'cbpq' ? cbpq : cpf}
            onChange={e => this.handleInputChange(e)} />
        </FormGroup>
        <Button onClick={() => this.handleSubmit()}>Consultar</Button>
      </Form>
    )
  }
}

export default LicenseForm