import React from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap'

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
          <Input
            type="text"
            name={document}
            id={document}
            value={document === 'cbpq' ? cbpq : cpf}
            onChange={e => this.handleInputChange(e)}
            placeholder={document === 'cbpq' ? 'Digite a CBPQ' : 'Digite o CPF'} />
        </FormGroup>
        <Button
          style={{ width: '100%' }}
          onClick={() => this.handleSubmit()}>Consultar</Button>
      </Form>
    )
  }
}

export default LicenseForm